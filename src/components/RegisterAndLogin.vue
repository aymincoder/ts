<template></template>

<script lang='ts'>
import { Component, Emit, Vue, Watch, Prop } from "vue-property-decorator";
import config from "@/utils/config";
import { RegAndLogParams, UserInfo } from "@/types/index";

@Component({})
export default class RegisterAndLogin extends Vue {
  @Prop({ default: false }) visible!: boolean;
  @Prop({ default: false }) handleFlag!: string;
  @Prop({ default: false }) isMobile!: string;

  //initial data
  private btnLoading: boolean = false;
  private loading: boolean = false;
  private formLabelWidth: string = this.isMobile ? "40px" : "60px";
  private params: RegAndLogParams = {
    email: "",
    name: "",
    password: "",
    phone: "",
    desc: ""
  };

  //lifecycle hook
  mounted() {}

  //computed
  get dialogVisible(): boolean {
    return this.visible;
  }

  //methods
  private handleOAuth(): void {
    //保存授权前的页面链接的内容
    let preventHistory: object = {
      name: this.$route.name,
      query: this.$route.query
    };

    window.sessionStorage.preventHistory = JSON.stringify(preventHistory);
    window.location.href = `${config.oauth_uri}?client_id=${config.client_id}&redirect_uri=${config.redirect_uri}`;
  }

  private handleOK(): void {
    const reg = new RegExp(
      "^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"
    ); //
    if (!this.params.email) {
      this.$message({
        message: "邮箱不能为空!",
        type: "warning"
      });
      return;
    } else if (!reg.test(this.params.email)) {
      this.$message({
        message: "请输入格式正确的邮箱!",
        type: "warning"
      });
      return;
    }

    if (this.handleFlag === "register") {
      if (!this.params.password) {
        this.$message({
          message: "密码不能为空!",
          type: "warning"
        });
        return;
      } else if (!this.params.name) {
        this.$message({
          message: "用户名不能为空!",
          type: "warning"
        });
      }
      const re = /^(((13[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
      if (this.params.phone && !re.test(this.params.phone)) {
        this.$message({
          message: "请输入正确的手机号!",
          type: "warning"
        });
        return;
      }
    }
  }

  //this.$emit()
  @Emit()
  private cancel(): boolean {
    return false;
  }

  @Emit("ok")
  private async submit(): Promise<void> {
    let data: any = "";
    this.btnLoading = true;
    if (this.handleFlag === "register") {
      data = await this.$https.post(this.$urls.register, this.params);
    } else {
      data = await this.$https.post(this.$urls.login, this.params);
    }
    this.btnLoading = false;

    const userInfo :UserInfo = {
        _id:data._id,
        name:data.name,
        avatar:data.avatar
    }

    this.$store.commit("SAVE_USER",{userInfo})
    window.sessionStorage.userInfo = JSON.stringify(userInfo);
    this.$message({
        message:"操作成功",
        type:"success"
    })


  }
}
</script>

<style>
</style>
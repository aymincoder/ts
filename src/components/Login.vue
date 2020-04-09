<template></template>

<script lang='ts'>
import { Component, Emit, Prop, Vue } from "vue-property-decorator";
import { Dialog, Form, FormItem, Input, Button, Message } from "element-ui";
import config from "@/utils/config";
import { LoginParams, UserInfo } from "@/types/index";

@Component({
  components: {
    Dialog,
    Form,
    FormItem,
    Input,
    Button
  }
})
export default class Login extends Vue {
  @Prop({ default: false }) visible!: boolean;

  //initial data
  private btnLoading: boolean = false;
  private loading: boolean = false;
  private formLabelWidth: string = "60px";
  private params: LoginParams = {
    email: "",
    password: ""
  };

  //lifecycle hook
  mounted() {}

  //computed
  get dialogVisible(){
      return this.visible;
  }

 



}
</script>

<style>
</style>
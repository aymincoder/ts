<template>
    <div class="home">
        <div class="content">
            <div class="home-header">
                <router-link class="link" to="/home">
                    <img alt="Vue logo" src="../assets/logo.png" class="home-logo" />
                </router-link>
            </div>
            <div class="home-body">
                <div class="list">
                    <router-link class="link" to="/articles">文章</router-link>
                    <router-link class="link" to="/project">项目</router-link>
                    <a class="link" target="_blank" ref="noopener noreferrer" href>github</a>
                    <a class="link" target="_blank" ref="noopener noreferrer" href>掘金</a>
                    <a class="link" target="_blank" ref="noopener noreferrer" href>知乎</a>
                    <a class="link" target="_blank" ref="noopener noreferrer" href>简书</a>
                </div>
                <div class="introduce">时光正好,未来可期,加油!</div>
            </div>
        </div>
    </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
declare var document: Document | any;

@Component({})
export default class Home extends Vue {
    mounted() {
        if (document.location.protocol === "http:") {
            this.$message({
                message:
                    "本网站已经配置了 https, 为了有更好的体验效果,请把前缀换成https",
                type: "warning",
                duration: 3000
            });
        }
    }
}
</script>
<style lang="less" scoped>
.home {
    position: fixed;
    left: 0;
    right: 0;
    .content {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        font-size: 20px;
        text-align: center;
        padding-top: 12%;
        .home-logo {
            width: 220px;
            border-radius: 50%;
            animation: mylogo 3s;
            animation-iteration-count: infinite;
        }
        .home-header {
            .link {
                display: block;
            }
        }
        .home-body {
            padding-top: 20px;
            .list {
                .link {
                    display: inline-block;
                    padding: 20px;
                    color: #409eff;
                    min-width: 80px;
                }
                .link:hover {
                    color: rgb(155, 35, 35);
                }
            }
        }
        .introduce {
            padding-top: 20px;
            color: #409eff;
        }
    }
}
@keyframes mylogo {
    0% {
        transform: rotate(0deg) scale(0.8, 0.8);
        opacity: 1;
    }
    25% {
        transform: rotate(0deg) scale(1, 1);
        opacity: 0.8;
    }
    100% {
        transform: rotate(0deg) scale(0.8, 0.8);
        opacity: 1;
    }
}
</style>

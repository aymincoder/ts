<template>
	<div id="app" class="contanier">
		<Nav v-if="isShowNav"></Nav>
		<div class="layout">
			<div class="left"><router-view /></div>
      		<Slider v-if='isShowSlide'></Slider>
		</div>
    <ArrowUp></ArrowUp>
    <Footer v-if="isShowNav"></Footer>
	</div>
</template>


<script lang='ts'>
	import { Vue, Watch } from "vue-property-decorator";
	import Component from "vue-class-component";
	import { Route } from "vue-router";

	import Nav from "@/components/Nav.vue";
	import Slider from "@/components/Slider.vue";
	import Footer from "@/components/Footer.vue";
	import ArrowUp from "@/components/ArrowUp.vue";
	import { isMobileOrPc } from "@/utils/utils";

	//移动端rem单位适配
	if (isMobileOrPc()) {
		//width *100 /750 = width /7.5
		//1rem = 100px
		var width = window.screen.width;
		window.document.getElementsByTagName("html")[0].style.fontSize =
			width / 7.5 + "px";
	}

	@Component({
		components: {
			Nav,
			Slider,
			ArrowUp,
			Footer
		}
	})
	export default class App extends Vue {
		private isShowNav: boolean = false;
		private isShowSlide: boolean = false;

		mounted(): void {
			this.routeChange(this.$route, this.$route);
		}
		@Watch("$route")
		routeChange(val: Route, oldVal: Route): void {
			const referrer: any = document.getElementById("referrer");
			if (val.path === "/") {
				this.isShowNav = false;
				referrer.setAttribute("content", "always");
			} else {
				this.isShowNav = true;
				referrer.setAttribute("content", "never");
			}

			if (
				val.path === "/articles" ||
				val.path === "/archive" ||
				val.path === "/project" ||
				val.path === "/timeline" ||
				val.path === "/message"
			) {
				this.isShowSlide = true;
			} else {
				this.isShowSlide = false;
			}

			if (isMobileOrPc()) {
				this.isShowSlide = false;
			}
		}
	}
</script>







<style lang="less">
	@import url("./less/index.less");
	@import url("./less/mobile.less");
	#app {
		font-family: "Avenir", Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: left;
		color: #2c3e50;
		width: 1200px;
		margin: 0 auto;
		padding-top: 61px;
	}
	img {
		vertical-align: bottom;
	}
</style>

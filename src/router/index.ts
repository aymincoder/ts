import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes:[
    {
      path: "/",
      name: "home",
      component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue")
    },
    {
      path: "/articles",
      name: "articles",
      component: () => import(/* webpackChunkName: "articles" */ "../views/Articles.vue")
    },
    {
      path: "/archive",
      name: "archive",
      component: () => import(/* webpackChunkName: "about" */ "../views/Archive.vue")
    },
    {
      path: "/project",
      name: "project",
      component: () => import(/* webpackChunkName: "project" */ "../views/Project.vue")
    },
    {
      path: "/timeline",
      name: "timeline",
      component: () => import(/* webpackChunkName: "timeline" */ "../views/Timeline.vue")
    },
    {
      path: "/message",
      name: "message",
      component: () => import(/* webpackChunkName: "message" */ "../views/Message.vue")
    },
    {
      path: "/about",
      name: "about",
      component: () => import(/* webpackChunkName: "about" */ "../views/About.vue")
    },
  ]
})

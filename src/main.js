import Vue from "vue";
import App from "./App.vue";

import Vuesax from "vuesax";
import "vuesax/dist/vuesax.css";

Vue.use(Vuesax);

import vuetify from "@/plugins/vuetify";
import "@/assets/sass/main.scss";
import "@/assets/sass/app.scss";
import "@/assets/sass/tailwind.scss";

import router from "./router";

import "./themeConfig.js";
import "./globalComponents.js";

import { Carousel, Slide } from "vue-carousel";

// eslint-disable-next-line vue/multi-word-component-names
Vue.component("carousel", Carousel);
// eslint-disable-next-line vue/multi-word-component-names
Vue.component("slide", Slide);

import "prismjs";
import "prismjs/themes/prism-tomorrow.css";

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");

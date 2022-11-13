import Vue from "vue";
import App from "./App.vue";

import Vuesax from "vuesax";
import "vuesax/dist/vuesax.css";

Vue.use(Vuesax);

import "@/assets/sass/app.scss";
import "@/assets/sass/tailwind.scss";
import vuetify from "@/plugins/vuetify";
import "@/assets/sass/main.scss";

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

import VueI18n from "vue-i18n";
Vue.use(VueI18n);

import { defaultLocale, languages } from "@/plugins/i18n";
const messages = Object.assign(languages);

Vue.config.productionTip = false;

const i18n = new VueI18n({
  locale: defaultLocale,
  fallbackLocale: "en",
  messages,
});

new Vue({
  router,
  vuetify,
  i18n,
  render: (h) => h(App),
}).$mount("#app");

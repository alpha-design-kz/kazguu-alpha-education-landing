<template>
  <vs-navbar v-model="activeItem" class="navbar-main" :collapse="collapseBool">
    <div slot="title">
      <router-link to="/" class="flex items-center">
        <img src="@/assets/images/logo/landing-logo.svg" />
      </router-link>
    </div>
    <vs-navbar-item index="0">
      <a
        href="#"
        class="futura t-24 mr-3 no-wrap"
        @click.prevent="scrollToId('description')"
        >{{ $t("services") }}</a
      >
    </vs-navbar-item>
    <vs-navbar-item index="1">
      <a
        href="#"
        class="futura t-24 mr-3 no-wrap"
        @click.prevent="scrollToId('description_3')"
        >{{ $t("special_properties") }}</a
      >
    </vs-navbar-item>
    <vs-navbar-item index="2">
      <a
        href="#"
        class="futura t-24 mr-3 no-wrap"
        @click.prevent="scrollToId('courses_list')"
        >{{ $t("courses") }}</a
      >
    </vs-navbar-item>
    <vs-navbar-item index="3">
      <a
        href="#"
        class="futura t-24 mr-3 no-wrap"
        @click.prevent="scrollToId('contact_us')"
        >{{ $t("contacts") }}</a
      >
    </vs-navbar-item>
    <select class="navbar-select mr-3" v-model="$i18n.locale">
      <option value="ru">RU</option>
      <option value="en">EN</option>
    </select>
    <a href="https://alphaedu.tech/login" class="blue-button text-white">
      {{ $t("login") }}
    </a>
  </vs-navbar>
</template>
<script>
export default {
  name: "navbar-component",
  data() {
    return {
      activeItem: "",
      collapseBool: false,
    };
  },
  destroyed() {
    window.removeEventListener("resize", this.myEventHandler);
  },
  methods: {
    myEventHandler() {
      if (window.innerWidth >= 1240) {
        this.collapseBool = false;
      } else {
        this.collapseBool = true;
      }
    },
    scrollToId(id) {
      let el = document.getElementById(id);
      el.scrollIntoView({ behavior: "smooth", inline: "start" });
    },
  },
  mounted() {
    window.addEventListener("resize", this.myEventHandler);
    if (window.innerWidth >= 1240) {
      this.collapseBool = false;
    } else {
      this.collapseBool = true;
    }
  },
};
</script>

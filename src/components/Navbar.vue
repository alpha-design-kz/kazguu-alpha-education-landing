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
        >Услуги</a
      >
    </vs-navbar-item>
    <vs-navbar-item index="1">
      <a
        href="#"
        class="futura t-24 mr-3 no-wrap"
        @click.prevent="scrollToId('description_3')"
        >Особенности</a
      >
    </vs-navbar-item>
    <vs-navbar-item index="2">
      <a
        href="#"
        class="futura t-24 mr-3 no-wrap"
        @click.prevent="scrollToId('courses_list')"
        >Курсы</a
      >
    </vs-navbar-item>
    <vs-navbar-item index="3">
      <a
        href="#"
        class="futura t-24 mr-3 no-wrap"
        @click.prevent="scrollToId('contact_us')"
        >Контакты</a
      >
    </vs-navbar-item>
    <select class="navbar-select mr-3">
      <option>RU</option>
    </select>
    <router-link to="/login" type="button" class="blue-button text-white">
      {{ $store.getters.isAuthenticated ? "Вход" : "Login" }}
    </router-link>
  </vs-navbar>
</template>
<script>
export default {
  name: "NavbarComponent",
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

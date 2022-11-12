<template>
  <div class="mb-5">
    <div class="flex justify-between flex-wrap">
      <p class="khula-bold t-24">{{ title }}</p>
      <vs-button
        class="round-button round-button-light"
        size="small"
        @click="logout"
        v-if="true"
      >
        <p class="t-14 khula-bold" style="font-size: 13px">{{ $t("exit") }}</p>
        <img class="ml-2" src="@/assets/images/common/door.svg" />
      </vs-button>
    </div>
    <vs-breadcrumb :items="path" separator="chevron_right" />
  </div>
</template>
<script>
export default {
  name: "HeaderComponent",
  props: {
    title: {
      type: String,
      default: "",
    },
    path: {
      type: Array,
      default: () => [],
    },
    noLogout: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    logout() {
      console.log("logout");
    },
  },
};
</script>

<template>
  <div class="landing-footer flex flex-col justify-between">
    <div class="footer-top flex justify-between">
      <span
        class="flex-col w-30 justify-between pr-3 c-white pr-10 footer-text-res"
        style="display: flex"
      >
        <span>
          <img src="@/assets/images/pages/landing/footer-logo.svg" />
        </span>
      </span>
      <span
        class="w-20 ml-4 flex-col px-10 footer-links-res justify-between"
        style="display: flex"
      >
        <p class="t-22 futura-demi mb-0 c-white mb-5">{{ $t("links") }}</p>
        <a class="t-22 futura c-white cursor mb-5">{{ $t("services") }}</a>
        <a class="t-22 futura c-white cursor mb-5">{{
          $t("special_properties")
        }}</a>
        <a class="t-22 futura c-white cursor mb-5">{{ $t("courses") }}</a>
        <a class="t-22 futura c-white cursor">{{ $t("contacts") }}</a>
      </span>
      <span
        class="w-40 pl-10 footer-contacts-res justify-between flex-col mr-4"
        style="display: flex"
      >
        <span>
          <p class="futura-heavy t-22 c-white mb-5">{{ $t("contacts") }}</p>
          <p class="futura t-22 c-white mb-5">
            {{ $t("phone") }}: +7 701 398 368 7
          </p>
          <p class="futura t-22 c-white mb-5">{{ $t("address") }}</p>
        </span>
        <span class="logo-block mt-5">
          <img src="@/assets/images/icons/insta.svg" class="cursor" />
          <img src="@/assets/images/icons/fb.svg" class="cursor" />
          <img src="@/assets/images/icons/tg.svg" class="cursor" />
        </span>
      </span>
      <span class="w-40">
        <p class="mb-4 t-22 futura-heavy c-white">
          {{ $t("write_for_questions") }}
        </p>
        <p class="futura t-22 c-white email-link">
          alpha.design.astana@gmail.com
        </p>
      </span>
      <div class="scroll-to-top" @click="scrollToTop">
        <img src="@/assets/images/icons/scroll-to-top.svg" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "footer-component",
  methods: {
    scrollToTop() {
      let hero = document.getElementById("hero");
      hero.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

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
        <p class="t-22 futura-demi mb-0 c-white mb-5">Ссылки</p>
        <a class="t-22 futura c-white cursor mb-5">Услуги</a>
        <a class="t-22 futura c-white cursor mb-5">Особенности</a>
        <a class="t-22 futura c-white cursor mb-5">Курсы</a>
        <a class="t-22 futura c-white cursor">Контакты</a>
      </span>
      <span
        class="w-40 pl-10 footer-contacts-res justify-between flex-col mr-4"
        style="display: flex"
      >
        <span>
          <p class="futura-heavy t-22 c-white mb-5">Контакты</p>
          <p class="futura t-22 c-white mb-5">Phone: +7 701 398 368 7</p>
          <p class="futura t-22 c-white mb-5">Kabanbay batyr str. 40,</p>
        </span>
        <span class="logo-block mt-5">
          <img src="@/assets/images/icons/insta.svg" class="cursor" />
          <img src="@/assets/images/icons/fb.svg" class="cursor" />
          <img src="@/assets/images/icons/tg.svg" class="cursor" />
        </span>
      </span>
      <span class="w-40">
        <p class="mb-4 t-22 futura-heavy c-white">
          Возникли вопросы? Напишите нам на почту:
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
  name: "FooterComponent",
  methods: {
    scrollToTop() {
      let hero = document.getElementById("hero");
      hero.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

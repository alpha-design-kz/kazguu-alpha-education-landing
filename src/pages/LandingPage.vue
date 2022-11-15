<template>
  <div style="background: white" id="landing-page">
    <Navbar ref="navbar" />
    <div
      class="landing landing-first flex flex-col justify-between"
      style="position: relative"
      id="hero"
    >
      <img
        src="@/assets/images/pages/landing/animation/triangle1.svg"
        class="animation-figure animation-figure-1"
      />
      <img
        src="@/assets/images/pages/landing/animation/triangle2.svg"
        class="animation-figure animation-figure-2"
      />
      <div class="w-100 flex justify-between items-center res-col">
        <div class="w-80 landing-text-res" style="z-index: 2">
          <p class="montserrat-bold t-48">
            {{ $t("educational_platform_new_generation") }}
          </p>
          <p class="futura t-28 my-10 w-70">
            {{ $t("educational_platform_new_generation_description") }}
          </p>
          <span class="pt-2">
            <button
              class="blue-button blue-button-large khula-bold no-wrap t-24 mb-2 w-45"
              @click.prevent="scrollToId('contact_us')"
            >
              {{ $t("get_demo") }}
            </button>
          </span>
        </div>
        <img
          style="height: 60%; width: auto"
          class="landing-hero-image"
          src="@/assets/images/pages/landing/first-block.svg"
        />
      </div>
      <div
        class="flex justify-between w-100 mt-10 landing-logo-row"
        style="z-index: 2"
      >
        <img src="@/assets/images/logo/kazguu.svg" class="mb-4 mr-5" />
        <img src="@/assets/images/logo/hse.svg" class="mb-4 mr-5" />
        <img src="@/assets/images/logo/dvorets.svg" class="mb-4 mr-5" />
        <img src="@/assets/images/logo/zerdeli.svg" class="mb-4 mr-5" />
        <img src="@/assets/images/logo/alpha-design.svg" class="mb-4 mr-5" />
      </div>
      <carousel :perPage="1" :centerMode="true" class="logo-carousel">
        <slide>
          <img src="@/assets/images/logo/kazguu.svg" />
        </slide>
        <slide>
          <img src="@/assets/images/logo/hse.svg" />
        </slide>
        <slide>
          <img src="@/assets/images/logo/dvorets.svg" />
        </slide>
        <slide>
          <img src="@/assets/images/logo/zerdeli.svg" />
        </slide>
        <slide>
          <img src="@/assets/images/logo/alpha-design.svg" />
        </slide>
      </carousel>
    </div>
    <div
      class="landing landing-third flex justify-between mt-10"
      style="position: relative"
      id="description"
    >
      <img
        src="@/assets/images/pages/landing/animation/triangle3.svg"
        class="animation-figure animation-figure-1"
      />
      <img
        src="@/assets/images/pages/landing/animation/triangle2.svg"
        class="animation-figure animation-figure-2"
      />
      <img
        src="@/assets/images/pages/landing/animation/square1.svg"
        class="animation-figure animation-figure-4"
      />
      <div class="animation-cycle" style="z-index: 2">
        <img
          src="@/assets/images/pages/landing/animation/block1.svg"
          class="animation-image animation-image-1"
        />
        <img
          src="@/assets/images/pages/landing/animation/block2.svg"
          class="animation-image animation-image-2"
        />
        <img
          src="@/assets/images/pages/landing/animation/block3.svg"
          class="animation-image animation-image-3"
        />
        <img
          src="@/assets/images/pages/landing/animation/block4.svg"
          class="animation-image animation-image-4"
        />
      </div>
      <carousel :perPage="1" :centerMode="true" class="image-carousel">
        <slide>
          <img src="@/assets/images/pages/landing/animation/block1.svg" />
        </slide>
        <slide>
          <img src="@/assets/images/pages/landing/animation/block2.svg" />
        </slide>
        <slide>
          <img src="@/assets/images/pages/landing/animation/block3.svg" />
        </slide>
        <slide>
          <img src="@/assets/images/pages/landing/animation/block4.svg" />
        </slide>
      </carousel>
      <div
        class="flex-col justify-between py-5 animation-text-block animation-text-block-right"
        style="display: flex; z-index: 2; width: 40%"
      >
        <span>
          <p class="futura-heavy t-36 mb-5" style="color: #000261">
            {{ $t("module_solution_for_educational_organizations") }}
          </p>
          <p class="futura t-22">
            {{ $t("module_solution_for_educational_organizations_text") }}
          </p>
        </span>
        <button
          class="blue-button blue-button-large khula-bold no-wrap t-24 mb-5"
          @click.prevent="scrollToId('contact_us')"
        >
          {{ $t("leave_request") }}
        </button>
      </div>
    </div>
    <div
      class="landing landing-white flex justify-between"
      style="padding-bottom: 150px; position: relative"
      id="description_2"
    >
      <img
        src="@/assets/images/pages/landing/animation/triangle1.svg"
        class="animation-figure animation-figure-1"
      />
      <img
        src="@/assets/images/pages/landing/animation/circle1.svg"
        class="animation-figure animation-figure-2"
      />
      <div
        class="flex-col justify-between py-5 animation-text-block animation-text-block-left"
        style="display: flex; z-index: 2; width: 40%"
      >
        <span>
          <p class="futura-heavy t-36 mb-5" style="color: #000261">
            {{ $t("open_portal") }}
          </p>
          <p class="futura t-22">
            {{ $t("open_portal_text") }}
          </p>
        </span>
        <span class="mb-5">
          <button
            class="blue-button blue-button-large khula-bold t-24 no-wrap mb-3"
            @click.prevent="scrollToId('contact_us')"
          >
            {{ $t("leave_request") }}
          </button>
        </span>
      </div>
      <carousel :perPage="1" :centerMode="true" class="image-carousel">
        <slide>
          <img src="@/assets/images/pages/landing/animation/block5.svg" />
        </slide>
        <slide>
          <img src="@/assets/images/pages/landing/animation/block6.webp" />
        </slide>
      </carousel>
      <div class="animation-cycle">
        <img
          src="@/assets/images/pages/landing/animation/block5.svg"
          class="animation-image animation-image-5"
        />
        <img
          src="@/assets/images/pages/landing/animation/block6.webp"
          class="animation-image animation-image-6"
        />
      </div>
    </div>
    <div
      class="landing landing-blue justify-between flex flex-wrap"
      style="position: relative"
      id="description_3"
    >
      <img
        src="@/assets/images/pages/landing/animation/triangle2.svg"
        class="animation-figure animation-figure-2"
      />
      <img
        src="@/assets/images/pages/landing/animation/circle2.svg"
        class="animation-figure animation-figure-3"
      />
      <img
        src="@/assets/images/pages/landing/animation/square1.svg"
        class="animation-figure animation-figure-4"
      />
      <div
        class="landing-card flex flex-col justify-between"
        @mouseover="hover2 = true"
        @mouseleave="hover2 = false"
      >
        <Service
          :fill="hover2 ? '#561BFB' : 'white'"
          service="interaction"
          class="landing-card-image mb-3"
        />
        <p class="montserrat-bold w-90 t-24 mb-3">
          {{ $t("convenient_storage") }}
        </p>
        <p class="khula t-22 w-100">
          {{ $t("convenient_storage_text") }}
        </p>
      </div>
      <div
        class="landing-card flex flex-col justify-between"
        @mouseover="hover1 = true"
        @mouseleave="hover1 = false"
      >
        <Service
          :fill="hover1 ? '#561BFB' : 'white'"
          service="game"
          class="landing-card-image mb-3"
        />
        <p class="montserrat-bold w-80 t-24 mb-3">{{ $t("gamification") }}</p>
        <p class="khula t-22 w-100">
          {{ $t("gamification_text") }}
        </p>
      </div>
      <div
        class="landing-card flex flex-col justify-between"
        @mouseover="hover3 = true"
        @mouseleave="hover3 = false"
      >
        <Service
          :fill="hover3 ? '#561BFB' : 'white'"
          service="variety"
          class="landing-card-image mb-3"
        />
        <p class="montserrat-bold w-90 t-24 mb-3">
          {{ $t("large_question_pool") }}
        </p>
        <p class="khula t-22 w-100">
          {{ $t("large_question_pool_text") }}
        </p>
      </div>
      <div
        class="landing-card flex flex-col justify-between"
        @mouseover="hover4 = true"
        @mouseleave="hover4 = false"
      >
        <Service
          :fill="hover4 ? '#561BFB' : 'white'"
          service="automate"
          class="landing-card-image mb-3"
        />
        <p class="montserrat-bold w-90 t-24 mb-3">
          {{ $t("lecture_schedule") }}
        </p>
        <p class="khula t-22 w-100">
          {{ $t("lecture_schedule_text") }}
        </p>
      </div>
      <div
        class="landing-card flex flex-col justify-between"
        @mouseover="hover5 = true"
        @mouseleave="hover5 = false"
      >
        <Service
          :fill="hover5 ? '#561BFB' : 'white'"
          service="statistics"
          class="landing-card-image mb-3"
        />
        <p class="montserrat-bold w-90 t-24 mb-3">
          {{ $t("statistics_analysis") }}
        </p>
        <p class="khula t-22 w-100">
          {{ $t("statistics_analysis_text") }}
        </p>
      </div>
      <div
        class="landing-card flex flex-col justify-between"
        @mouseover="hover6 = true"
        @mouseleave="hover6 = false"
      >
        <Service
          :fill="hover6 ? '#561BFB' : 'white'"
          service="friendly"
          class="landing-card-image mb-3"
        />
        <p class="montserrat-bold w-90 t-24 mb-3">
          {{ $t("intuitive_interface") }}
        </p>
        <p class="khula t-22 w-100">
          {{ $t("intuitive_interface_text") }}
        </p>
      </div>
    </div>
    <div
      class="flex flex-col items-center justify-center landing landing-white"
      style="position: relative"
      id="courses_list"
    >
      <img
        src="@/assets/images/pages/landing/animation/triangle2.svg"
        class="animation-figure animation-figure-2"
      />
      <img
        src="@/assets/images/pages/landing/animation/circle2.svg"
        class="animation-figure animation-figure-3"
      />
      <img
        src="@/assets/images/pages/landing/animation/square1.svg"
        class="animation-figure animation-figure-4"
      />
      <span
        class="flex justify-between items-center w-100 mt-5"
        style="z-index: 2"
      >
        <p class="khula-bold t-24 mb-0 mt-4">
          {{ $t("new_courses") }}
        </p>
        <button
          @click="confirmation = true"
          class="blue-button blue-button-large khula-bold t-24"
        >
          {{ $t("see_all") }}
        </button>
      </span>
      <div
        class="flex flex-wrap my-5 w-100 landing-courses-row"
        style="z-index: 2; justify-content: space-between"
      >
        <LandingCourseCard
          v-for="course in new_courses"
          :key="course.id"
          :course="course"
          mode="new"
          class="mr-1"
          v-on:clicked="confirmation = true"
        >
        </LandingCourseCard>
      </div>
      <carousel
        class="courses-res"
        :scrollPerPage="false"
        :loop="true"
        :autoplay="true"
        :perPage="1"
        :paginationEnabled="false"
      >
        <slide v-for="course in popular_courses" :key="course.id">
          <LandingCourseCard
            :course="course"
            mode="popular"
            @click="confirmation = true"
            v-on:clicked="confirmation = true"
          >
          </LandingCourseCard>
        </slide>
      </carousel>
      <span
        class="flex justify-between w-100 mt-5 items-center"
        style="z-index: 2"
      >
        <p class="khula-bold t-24 mb-0 mr-2 mt-4">
          {{ $t("popular_courses") }}
        </p>
        <button
          @click="confirmation = true"
          class="blue-button blue-button-large khula-bold t-24 no-wrap"
        >
          {{ $t("see_all") }}
        </button>
      </span>
      <div
        class="flex flex-wrap mt-5 mb-10 w-100 landing-courses-row"
        style="z-index: 2; justify-content: space-between"
      >
        <LandingCourseCard
          v-for="course in popular_courses"
          :key="course.id"
          :course="course"
          mode="popular"
          class="mr-1"
          v-on:clicked="confirmation = true"
        >
        </LandingCourseCard>
      </div>
      <carousel
        class="courses-res"
        :scrollPerPage="false"
        :loop="true"
        :autoplay="true"
        :perPage="1"
        :paginationEnabled="false"
      >
        <slide v-for="course in popular_courses" :key="course.id">
          <LandingCourseCard
            :course="course"
            mode="popular"
            v-on:clicked="confirmation = true"
          >
          </LandingCourseCard>
        </slide>
      </carousel>
      <vs-popup :active.sync="confirmation" class="landing-popup">
        <div
          class="py-10 flex flex-col justify-between items-center inter-div-popup"
          style="position: relative"
        >
          <img
            src="@/assets/images/icons/close.svg"
            class="close-button cursor"
            @click="confirmation = false"
          />
          <img src="@/assets/images/common/landing-popup-1.svg" class="mb-5" />
          <p class="montserrat-extra t-48 c-violet mb-5">
            {{ $t("courses_will_be_available") }}
          </p>
          <p class="futura t-28 mb-5" style="color: #7b7b7b">
            {{ $t("leave_your_email") }}
          </p>
          <button
            class="blue-button blue-button-large khula-bold no-wrap t-24 mb-2"
            @click="
              confirmation = false;
              $refs.navbar.scrollToId('contact_us');
            "
          >
            {{ $t("leave_request") }}
          </button>
        </div>
      </vs-popup>
    </div>
    <vs-popup :active.sync="courseModal" title="" class="landing-courses-modal">
      <NewCoursesLanding @closePopup="courseModal = false" :mode="mode" />
    </vs-popup>
    <div class="landing landing-mini" id="customer_stories">
      <p class="montserrat-extra t-48 text-white mb-10">Customer stories</p>
      <carousel
        :scrollPerPage="false"
        :loop="true"
        :autoplay="true"
        :perPage="number"
        :paginationEnabled="false"
      >
        <slide class="stories">
          <span class="flex">
            <img
              class="stories-avatar mr-2 pb-3"
              src="@/assets/images/photo/photo1.svg"
            />
            <span class="flex flex-col justify-center">
              <p class="futura-heavy t-24">{{ $t("zerdeli_founder_name") }}</p>
              <p class="futura t-24 c-violet my-1">
                {{ $t("zerdeli_founder") }}
              </p>
              <custom-star-rating
                :show-rating="false"
                :star-size="18"
                readOnly
                :rating="5"
              />
            </span>
          </span>
          <p class="futura t-22" style="color: #6d839d">
            {{ $t("system_text") }}
          </p>
        </slide>
        <slide class="stories">
          <span class="flex">
            <img
              class="stories-avatar mr-2 pb-3"
              src="@/assets/images/photo/photo2.svg"
            />
            <span class="flex flex-col justify-center">
              <p class="futura-heavy t-24">
                {{ $t("coordinator_kazguu_name") }}
              </p>
              <p class="futura t-24 c-violet my-1">
                {{ $t("coordinator_kazguu") }}
              </p>
              <custom-star-rating
                :show-rating="false"
                :star-size="18"
                readOnly
                :rating="5"
              />
            </span>
          </span>
          <p class="futura t-22" style="color: #6d839d">
            {{ $t("system_interesting_format") }}
          </p>
        </slide>
        <slide class="stories">
          <span class="flex">
            <img
              class="stories-avatar mr-2 pb-3"
              src="@/assets/images/photo/photo3.svg"
            />
            <span class="flex flex-col justify-center">
              <p class="futura-heavy t-24">{{ $t("student_palace") }}</p>
              <p class="futura t-24 c-violet my-1">
                {{ $t("student_palace_name") }}
              </p>
              <custom-star-rating
                :show-rating="false"
                :star-size="18"
                readOnly
                :rating="5"
              />
            </span>
          </span>
          <p class="futura t-22" style="color: #6d839d">
            {{ $t("best_tool") }}
          </p>
        </slide>
        <slide class="stories">
          <span class="flex">
            <img
              class="stories-avatar mr-2 pb-3"
              src="@/assets/images/photo/photo4.png"
            />
            <span class="flex flex-col justify-center">
              <p class="futura-heavy t-24">
                {{ $t("director_alpha_design_name") }}
              </p>
              <p class="futura t-24 c-violet my-1">
                {{ $t("director_alpha_design") }}
              </p>
              <custom-star-rating
                :show-rating="false"
                :star-size="18"
                readOnly
                :rating="5"
              />
            </span>
          </span>
          <p class="futura t-22" style="color: #6d839d">
            {{ $t("review_1_text") }}
          </p>
        </slide>
        <!--                Один должен быть пустой-->
        <slide></slide>
      </carousel>
    </div>
    <div
      class="landing landing-email flex flex-col items-center"
      style="position: relative"
      id="contact_us"
    >
      <img
        src="@/assets/images/pages/landing/animation/triangle1.svg"
        class="animation-figure animation-figure-1"
      />
      <img
        src="@/assets/images/pages/landing/animation/triangle2.svg"
        class="animation-figure animation-figure-2"
      />
      <img
        src="@/assets/images/pages/landing/animation/circle2.svg"
        class="animation-figure animation-figure-3"
      />
      <img
        src="@/assets/images/pages/landing/animation/square1.svg"
        class="animation-figure animation-figure-4"
      />
      <p class="futura-heavy t-56 text-center" style="z-index: 2">
        {{ $t("contact_us") }}
      </p>
      <div class="email-card w-70 my-10" style="z-index: 2">
        <p class="futura-heavy t-20 mb-2">{{ $t("your_name") }}</p>
        <vs-input
          class="input-custom input-custom-name w-100 mb-4"
          v-model="form.name"
        />
        <p class="futura-heavy t-20 mb-2">{{ $t("phone_number") }}</p>
        <vs-input
          class="input-custom input-custom-phone w-100 mb-4"
          v-model="form.phone"
        />
        <p class="futura-heavy t-20 mb-2">Email</p>
        <vs-input
          class="input-custom input-custom-mail w-100 mb-4"
          v-model="form.email"
        />
        <p class="futura-heavy t-20 mb-2">{{ $t("comments") }}</p>
        <textarea
          class="course-textarea course-textarea-small w-100 mb-4"
          v-model="form.comment"
        />
        <vs-button
          class="round-button w-100 khula-bold t-24"
          @click="sendMail"
          >{{ $t("send") }}</vs-button
        >
      </div>
      <vs-popup :active.sync="confirmation1" class="landing-popup">
        <div
          class="py-10 flex flex-col justify-between items-center inter-div-popup"
          style="position: relative"
        >
          <img
            src="@/assets/images/icons/close.svg"
            class="close-button cursor"
            @click="confirmation1 = false"
          />
          <img src="@/assets/images/common/landing-popup-2.svg" class="mb-5" />
          <p class="montserrat-extra t-48 c-violet mb-5">
            {{ $t("your_request_was_sent") }}
          </p>
          <p class="futura t-28 mb-5" style="color: #7b7b7b">
            {{ $t("our_managers_will_answer") }}
            <span class="c-violet">+77013983687</span>
          </p>
        </div>
      </vs-popup>
    </div>
    <Footer />
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer";
import Service from "@/assets/images/pages/landing/services";
import NewCoursesLanding from "@/components/NewCoursesLanding";
import LandingCourseCard from "@/components/LandingCourseCard";
import anime from "animejs/lib/anime.es.js";
import { Carousel, Slide } from "vue-carousel";
import axios from "axios";
export default {
  components: {
    Navbar,
    Service,
    Footer,
    NewCoursesLanding,
    LandingCourseCard,
    Carousel,
    Slide,
  },
  data() {
    return {
      hover1: false,
      hover2: false,
      hover3: false,
      hover4: false,
      hover5: false,
      hover6: false,
      new_courses: [],
      popular_courses: [],
      courseModal: false,
      mode: "",
      number: 3,
      isAnimation: true,
      confirmation: false,
      confirmation1: false,
      form: {
        name: "",
        phone: "",
        email: "",
        comment: "",
      },
    };
  },
  methods: {
    getCourses() {
      this.new_courses = [
        {
          id: 1,
          color: "red",
          icon_url: "",
          title: "Business Law",
          instructor_name: "Saul Goodman",
          rating: 5,
        },
        {
          id: 2,
          color: "blue",
          icon_url: "",
          title: "General Chemistry I",
          instructor_name: "Walter White",
          rating: 5,
        },
        {
          id: 3,
          color: "green",
          icon_url: "",
          title: "Ethics",
          instructor_name: "Jesse Pinkman",
          rating: 5,
        },
      ];

      this.popular_courses = [
        {
          id: 1,
          color: "grey",
          icon_url: "",
          title: "Microeconomics",
          instructor_name: "Skyler White",
          rating: 5,
        },
        {
          id: 2,
          color: "yellow",
          icon_url: "",
          title: "Introduction to Business",
          instructor_name: "Michael Scott",
          rating: 5,
        },
        {
          id: 3,
          color: "orange",
          icon_url: "",
          title: "Information Security",
          instructor_name: "Mike Ehrmantraut",
          rating: 5,
        },
      ];
    },
    scrollToId(id) {
      let el = document.getElementById(id);
      el.scrollIntoView({ behavior: "smooth", inline: "start" });
    },
    getTranslateAnimeObject(x, y, z) {
      return {
        translateY: function () {
          return anime.random(x, y);
        },
        translateX: function () {
          return anime.random(x, z);
        },
      };
    },
    sendMail(e) {
      e.preventDefault();
      let _this = this;
      axios
        .post("/api/landing-mail", {
          name: this.form.name,
          phone: this.form.phone,
          email: this.form.email,
          comment: this.form.comment,
        })
        .then(function () {
          _this.confirmation1 = true;
        })
        .catch(function () {});
    },
    myEventHandler() {
      if (window.innerWidth >= 1100) {
        this.number = 3;
      } else if (window.innerWidth < 1100 && window.innerWidth > 700) {
        this.number = 2;
      } else {
        this.number = 1;
      }
      if (window.innerWidth >= 1250) {
        this.isAnimation = true;
        anime({
          targets:
            ".animation-image-1, .animation-image-2, .animation-image-3, .animation-image-4",
          keyframes: [
            this.getTranslateAnimeObject(-70, 70, 25),
            this.getTranslateAnimeObject(-70, 70, 25),
            this.getTranslateAnimeObject(-70, 70, 25),
            this.getTranslateAnimeObject(-70, 70, 25),
            this.getTranslateAnimeObject(-70, 70, 25),
            {
              translateY: 0,
              translateX: 0,
            },
          ],
          direction: "alternate",
          loop: true,
          easing: "easeInOutSine",
          duration: 30000,
        });
        anime({
          targets: ".animation-image-5",
          keyframes: [
            {
              translateY: 30,
            },
            {
              translateY: -30,
            },
            {
              translateY: 0,
            },
          ],
          direction: "alternate",
          easing: "easeInOutSine",
          duration: 10000,
          loop: true,
        });
        anime({
          targets: ".animation-image-6",
          keyframes: [
            {
              translateY: 50,
            },
            {
              translateY: -50,
            },
            {
              translateY: 0,
            },
          ],
          direction: "alternate",
          easing: "easeInOutSine",
          duration: 12000,
          loop: true,
        });
      } else {
        this.isAnimation = false;
        anime({
          targets:
            ".animation-image-1, .animation-image-2, .animation-image-3, .animation-image-4, .animation-image-5, .animation-image-6",
          translateX: 0,
          translateY: 0,
        });
      }
    },
  },
  created() {
    this.getCourses("new");
    this.getCourses("popular");
    window.addEventListener("resize", this.myEventHandler);
  },
  watch: {
    courseModal: function (val) {
      if (!val) {
        this.mode = "";
      }
    },
  },
  beforeRouteLeave(to, from, next) {
    this.courseModal = false;
    this.mode = "";
    next();
  },
  destroyed() {
    window.removeEventListener("resize", this.myEventHandler);
  },
  mounted() {
    if (window.innerWidth >= 1250) {
      this.isAnimation = true;
    } else {
      this.isAnimation = false;
    }
    if (window.innerWidth >= 1100) {
      this.number = 3;
    } else if (window.innerWidth < 1100 && window.innerWidth > 700) {
      this.number = 2;
    } else {
      this.number = 1;
    }
    if (this.isAnimation) {
      anime({
        targets:
          ".animation-image-1, .animation-image-2, .animation-image-3, .animation-image-4",
        keyframes: [
          this.getTranslateAnimeObject(-70, 70, 25),
          this.getTranslateAnimeObject(-70, 70, 25),
          this.getTranslateAnimeObject(-70, 70, 25),
          this.getTranslateAnimeObject(-70, 70, 25),
          this.getTranslateAnimeObject(-70, 70, 25),
          {
            translateY: 0,
            translateX: 0,
          },
        ],
        direction: "alternate",
        loop: true,
        easing: "easeInOutSine",
        duration: 30000,
      });
      anime({
        targets: ".animation-image-5",
        keyframes: [
          {
            translateY: 30,
          },
          {
            translateY: -30,
          },
          {
            translateY: 0,
          },
        ],
        direction: "alternate",
        easing: "easeInOutSine",
        duration: 10000,
        loop: true,
      });
      anime({
        targets: ".animation-image-6",
        keyframes: [
          {
            translateY: 50,
          },
          {
            translateY: -50,
          },
          {
            translateY: 0,
          },
        ],
        direction: "alternate",
        easing: "easeInOutSine",
        duration: 12000,
        loop: true,
      });
    }
    anime({
      targets: ".animation-figure",
      keyframes: [
        this.getTranslateAnimeObject(-400, 400, 400),
        this.getTranslateAnimeObject(-400, 400, 400),
        this.getTranslateAnimeObject(-400, 400, 400),
        this.getTranslateAnimeObject(-400, 400, 400),
        this.getTranslateAnimeObject(-400, 400, 400),
      ],
      rotate: 360,
      direction: "alternate",
      easing: "easeInOutSine",
      duration: 90000,
      loop: true,
    });
  },
};
</script>

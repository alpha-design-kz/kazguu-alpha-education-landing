<template>
  <div
    class="landing-course-card mb-4"
    style="text-align: left"
    @click.prevent="$emit('clicked', course.id)"
  >
    <!--                    Delete courses color classes-->
    <span class="colored-top" :style="{ 'background-color': course.color }">
      <img
        :src="course.icon_url"
        class="mr-3 course-card-image"
        style="height: 120px; max-width: 140px"
      />
      <span class="new-block futura-heavy t-12">{{ mode.toUpperCase() }}</span>
    </span>
    <div class="landing-course-bottom flex-col justify-between">
      <p class="montserrat-bold t-24">{{ course.title }}</p>
      <span>
        <p class="t-14 futura c-violet-light my-4">
          Instructor: {{ course.instructor_name }}
        </p>
        <span class="flex justify-between items-center">
          <custom-star-rating
            :show-rating="false"
            :star-size="18"
            readOnly
            :rating="+course.rating"
          />
          <p class="khula-bold t-20 mb-0 rating-res">{{ course.rating }}</p>
          <router-link
            tag="button"
            class="blue-button blue-button-large khula-bold t-10 mt-0 p-2 px-4"
          >
            {{ $t("see_plans") }}
          </router-link>
        </span>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    course: {
      type: Object,
      required: true,
    },
    mode: {
      type: String,
      default: "NEW",
    },
  },
};
</script>

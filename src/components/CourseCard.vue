<template>
  <div class="new-course-card mr-3 mb-5" @click="openCourse(course)">
    <span class="flex course-parent-card-res">
      <img
        :src="course.icon_url"
        class="mr-3 course-card-image"
        style="height: 120px; max-width: 140px"
      />
      <span class="flex flex-col justify-between">
        <p class="montserrat-bold t-18 title t-18-18">{{ course.title }}</p>
        <span class="flex items-center">
          <custom-star-rating
            :show-rating="false"
            :rating="4"
            :star-size="11"
            read-only
            class="mr-3"
          />
          <p class="futura t-14 c-gray mb-0">{{ course.instructor_name }}</p>
        </span>
      </span>
    </span>
    <p class="futura t-14 mt-3 new-course-card-description">
      {{ course.description }}
    </p>
  </div>
</template>
<script>
export default {
  props: {
    course: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      min: 10,
      max: 100,
      random: "",
    };
  },
  methods: {
    openCourse(course) {
      this.$router.push({ name: "courses-item", params: { id: course.id } });
    },
  },
  created() {
    this.random =
      Math.floor(Math.random() * (+this.max - +this.min)) + +this.min;
  },
  components: {},
};
</script>

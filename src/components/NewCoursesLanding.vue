<template>
  <div class="content-block pt-5">
    <div>
      <div class="mt-3">
        <p class="khula-bold t-30 w-full" style="margin-bottom: 20px">
          <span class="capitalize">{{ mode }}</span> courses
        </p>
        <div class="w-full flex justify-between flex-row mt-2 flex-wrap mb-4">
          <LandingCourseCard
            v-for="course in courses"
            :key="course.id"
            :course="course"
            :mode="mode"
            @closePopup="$emit('closePopup')"
          >
          </LandingCourseCard>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import LandingCourseCard from "./LandingCourseCard";

export default {
  props: {
    mode: {
      type: String,
      default: "new",
    },
  },
  data() {
    return {
      path: [
        {
          title: "Курсы",
          url: "/courses",
          active: true,
        },
      ],
      courses: [],
      filterData: {
        faculty_id: "",
        degree_id: "",
        pagination_amount: 20,
        page: 1,
      },
      paginationData: {},
      user: {},
    };
  },
  methods: {
    getCourses() {
      console.log("get courses");
    },
  },
  created() {
    this.getCourses();
  },
  components: {
    LandingCourseCard,
  },
};
</script>

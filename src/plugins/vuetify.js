import Vue from "vue";
import Vuetify, {
  VTimePicker,
  VDialog,
  VTextField,
  VBtn,
  VDatePicker,
  VCalendar,
  VSheet,
  VMenu,
  VList,
  VListItem,
  VToolbar,
  VIcon,
  VToolbarTitle,
  VRow,
  VCol,
} from "vuetify/lib";

Vue.use(Vuetify, {
  components: {
    VTimePicker,
    VDialog,
    VTextField,
    VBtn,
    VDatePicker,
    VCalendar,
    VSheet,
    VMenu,
    VListItem,
    VList,
    VToolbar,
    VIcon,
    VToolbarTitle,
    VRow,
    VCol,
  },
});

const opts = {};

export default new Vuetify(opts);

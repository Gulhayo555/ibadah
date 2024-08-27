import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueSplide from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";

import { Splide, SplideSlide } from "@splidejs/vue-splide";

// import Vue3Autocounter from "vue3-autocounter";
import "bootstrap/dist/css/bootstrap.min.css";
import bootstrap from "bootstrap/dist/js/bootstrap.js";

createApp(App)
  // .component("vue3-autocounter", Vue3Autocounter)
  .use(store)
  .use(router)
  .use(bootstrap)
  .use(VueSplide)
  .mount("#app");

// var owl = $(".owl-carousel");
// owl.owlCarousel({
//   items: 4,
//   loop: true,
//   margin: 10,
//   autoplay: true,
//   autoplayTimeout: 1000,
//   autoplayHoverPause: true,
// });
// $(".play").on("click", function () {
//   owl.trigger("play.owl.autoplay", [1000]);
// });
// $(".stop").on("click", function () {
//   owl.trigger("stop.owl.autoplay");
// });

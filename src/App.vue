<template>
    <div id="progress" :style="progressStyle">
      <span id="progress-value">
        <i class="fas fa-arrow-up"></i>
      </span>
    </div>
  <router-link to="/"></router-link>
  <router-link to="/about"></router-link>
  <router-view />
  <Header></Header>
  <Times></Times>
  <Heading />
  <Courses />
  <Ourcourses />
  <Listen />
  <Pillars />
  <Facts />
  <Ayat />
  <Navigating />
  <Community />
  <Latest />
  <Footer></Footer>
  <!-- <Audio/> -->
</template>

<script>

import Header from "@/components/Header.vue";
import Times from "@/components/Times.vue";
import Heading from "@/components/Heading.vue";
import Courses from "@/components/Courses.vue";
import Ourcourses from "@/components/Ourcourses.vue";
import Listen from "@/components/Listen.vue";
import Pillars from "@/components/Pillars.vue";
import Facts from "@/components/Facts.vue";
import Ayat from "@/components/Ayat.vue";
import Navigating from "@/components/Navigating.vue";
import Community from "@/components/Community.vue";
import Latest from "@/components/Latest.vue";
import Footer from "@/components/Footer.vue";
// import Audio from "@/components/Audio.vue";


export default {
  name: "App",
  components: {
    Header,
    Times,
    Heading,
    Courses,
    Ourcourses,
    Listen,
    Pillars,
    Facts,
    Ayat,
    Navigating,
    Community,
    Latest,
    Footer,
    // Audio
  },
  data() {
    return {
      scrollValue: 0,
    };
  },
  computed: {
    progressStyle() {
      return {
        background: `conic-gradient(#007d3a ${this.scrollValue}%, #fff ${this.scrollValue}%)`,
      };
    },
  },
  methods: {
    updateScrollPercentage() {
      const pos = document.documentElement.scrollTop;
      const calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      this.scrollValue = Math.round((pos * 100) / calcHeight);
    },
  },
  mounted() {
    this.updateScrollPercentage();
    window.addEventListener('scroll', this.updateScrollPercentage);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.updateScrollPercentage);
  },
};
</script>

<style lang="scss">
@import "./assets/main.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#progress {
  width: 47px;
  height: 47px;
  border-radius: 50%;
  position: fixed;
  bottom: 20px;
  right: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  display: grid;
  place-items: center;
  z-index: 99;
}

#progress-value {
  display: block;
  height: calc(105% - 10px);
  width: calc(105% - 10px);
  background-color: #ffffff;
  border-radius: 50%;
  display: grid;
  place-items: center;
  z-index: 99;
}
#progress-value i{
  font-size: 18px;
}
.fa-up-long:before {
    content: "\f30c";
}
</style>

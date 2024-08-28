<template>
  <div class="header">
    <Nav />
    <Splide
      :options="{
        type: 'loop',
        autoplay: true,
        interval: 4000,
        arrows: false,
        pauseOnHover: false,
      }"
      aria-label="My Favorite Images"
    >
      <SplideSlide>
        <div class="item">
          <div class="container">
            <div class="row title">
              <div class="col-lg-6">
                <div class="hero-text">
                  <h1>Allah is the Best of Providers</h1>
                  <p>
                    When things are too hard to handle, retreat & count your
                    blessings instead
                  </p>
                  <a href="#!" class="hero_btn">Discover Courses</a>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="hero-img">
                  <img src="../assets/images/hero-img-1.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <img class="item_img" src="../assets/images/hero-img.jpg" alt="" />
        </div>
      </SplideSlide>
      <SplideSlide>
        <div class="item">
          <div class="container">
            <div class="row title">
              <div class="col-lg-6">
                <div class="hero-text">
                  <h1>Allah is the Best of Providers</h1>
                  <p>
                    When things are too hard to handle, retreat & count your
                    blessings instead
                  </p>
                  <a href="#!" class="hero_btn">Discover Courses</a>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="hero-img">
                  <img src="../assets/images/hero-img-1.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <img
            class="item_img"
            src="../assets/images/hero-img-back-1.jpg"
            alt=""
          />
        </div>
      </SplideSlide>
      <SplideSlide>
        <div class="item">
          <div class="container">
            <div class="row title">
              <div class="col-lg-6 d-flex">
                <div class="hero-text">
                  <h1>Allah is the Best of Providers</h1>
                  <p>
                    When things are too hard to handle, retreat & count your
                    blessings instead
                  </p>
                  <a href="#!" class="hero_btn">Discover Courses</a>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="hero-img">
                  <img src="../assets/images/hero-img-1.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <img
            class="item_img"
            src="../assets/images/hero-img-back-2.jpg"
            alt=""
          />
        </div>
   
      </SplideSlide>
    </Splide>
  </div>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { defineComponent } from "vue";
import Nav from "./Nav.vue";

export default defineComponent({
  components: {
    Splide,
    SplideSlide,
    Nav,
  },
});
</script>

<style lang="scss" scoped>
.header {
  height: 100vh;
  position: relative;
}
.hero-img img {
  width: auto;
}
.Splide {
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
}
.splide__slide {
  height: 100vh;
  &.is-active .item_img {
    animation: zoomIn 4s ease-in-out forwards;
  }
  @keyframes zoomIn {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.1);
    }
  }
}
.splide__pagination.splide__pagination--ltr {
  justify-content: flex-start !important;
}
.splide__pagination {
  justify-content: flex-start !important;
}
.splide__pagination__page {
  background-color: #fbc50b !important ;
  height: 2px !important;
  width: 36px !important;
  transform: scale(1) !important;
  transition: 150ms ease-in-out;
  &.is-active {
    opacity: 1;
    width: 36px;
    background-color: #fbc50b !important;
  }
}
.splide__pagination {
  justify-content: flex-start;
}
.title {
  align-items: center;
  justify-content: center;
  display: flex;
  flex-grow: 1;
}
.hero-text {
  text-align: left;
  h1 {
    font-size: 80px;
    color: #fff;
    font-weight: 300;
    padding-bottom: 10px;
    font-family: var(--common-font);
  }
  p {
    padding-bottom: 58px;
    color: #fff;
    font-size: 22px;
    width: 98%;
  }
}
.item {
  padding-top: 320px;
  padding-bottom: 200px;
  display: grid;
  place-content: center;
  position: relative;
  z-index: 1;
  height: 100vh;
  background-color: green;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  &_img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.hero_btn {
  text-transform: capitalize;
  border-radius: 50px;
  color: #000 !important;
  line-height: 16px;
  overflow: hidden;
  padding: 20px 50px;
  position: relative;
  font-weight: 700;
  text-align: center;
  white-space: pre;
  z-index: 1;
  border: 0;
  background-color: var(--theme-colour);
  padding: 20px 43px;
  border-radius: 55px;
  color: #000;
  font-weight: bold;
}
.hero_btn::after {
  content: "";
  color: #1c1e211f !important;
  border-radius: 50%;
  height: 167px;
  min-width: 167px;
  position: absolute;
  top: 100%;
  transition: transform 0.7s cubic-bezier(0.66, 0, 0.34, 1);
  width: 100%;
  z-index: -1;
  left: 0;
}
.hero_btn:hover .hero_btn::after {
  top: -75%;
  transform: scale(1.2);
}
.hero-img {
  display: flex;
  justify-content: end;
}
.row.title {
  padding-top: 240px;
  padding-bottom: 90px;
}
.search-active .search-popup {
  transform: translateY(0%);
  margin-top: 0;
}
.search-popup {
  width: 100%;
}

.search-popup {
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100%;
  z-index: 99999;
  margin-top: -540px;
  transform: translateY(-100%);
  background-color: rgba(0, 0, 0, 0.9);
  -webkit-transition: all 500ms cubic-bezier(0.86, 0, 0.07, 1);
  -moz-transition: all 500ms cubic-bezier(0.86, 0, 0.07, 1);
  -o-transition: all 500ms cubic-bezier(0.86, 0, 0.07, 1);
  transition: all 1500ms cubic-bezier(0.86, 0, 0.07, 1);
  -webkit-transition-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
  -moz-transition-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
  -o-transition-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
  transition-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
}
.search-popup .form-group input[type="text"],
.search-popup .form-group input[type="search"] {
  position: relative;
  display: block;
  font-size: 18px;
  line-height: 50px;
  color: #000000;
  height: 70px;
  width: 100%;
  padding: 10px 30px;
  background-color: #ffffff;
  -webkit-transition: all 500ms ease;
  -moz-transition: all 500ms ease;
  -ms-transition: all 500ms ease;
  -o-transition: all 500ms ease;
  transition: all 500ms ease;
  font-weight: 500;
  text-transform: capitalize;
  outline: none;
}
.search-popup .form-group input[type="submit"],
.search-popup .form-group button {
  position: absolute;
  right: 30px;
  top: 0px;
  height: 70px;
  line-height: 70px;
  background: transparent;
  text-align: center;
  font-size: 24px;
  color: var(--common-colour);
  padding: 0;
  cursor: pointer;
  transition: all 500ms ease;
  border: none;
}
.fa-close:before,
.fa-multiply:before,
.fa-remove:before,
.fa-times:before,
.fa-xmark:before {
  content: "\f00d";
}
button.close-search i {
  font-size: 18px;
  color: #000;
  display: inline-block;
}
@media (max-width: 1400px) {
  .row .title {
    height: auto;
  }
}
@media (max-width: 1400px) {
  .splide__pagination {
    left: 8%;
    bottom: 26px;
  }
  .hero-text h1 {
    font-size: 60px;
  }
  .hero-text p {
    padding-bottom: 38px;
    font-size: 20px;
    width: 91%;
  }
  .hero-img img {
    width: 50% !important;
  }
}
@media (max-width: 1400px) {
  .row .title img.hero-img-style {
    position: absolute;
    top: 0;
    height: 100%;
  }
}
@media (max-width: 1200px) {
  .hero-text h1 {
    font-size: 48px;
  }
  .row .title {
    height: auto;
  }

  .mobile-nav .open {
    width: 50%;
  }
}
@media (max-width: 1200px) {
  img.hero-img-style {
    width: 100% !important;
  }
}
@media (max-width: 993px) {
  .hero-img img {
    width: 30% !important;
  }
  .hero-text p,
  .heading {
    width: 100%;
  }
  .row .title {
    text-align: center;
  }
  .hero-img {
    justify-content: center;
    margin-top: 40px;
  }
  .row .title {
    text-align: center;
  }
  .hero-text {
    text-align: center;
  }
  .row.title {
    padding-top: 70px;
    padding-bottom: 80px;
  }
}
@media (max-width: 768px) {
  .row.title {
    padding-top: 70px;
    padding-bottom: 80px;
  }
}
@media (max-width: 576px) {
  .hero-text h1 {
    font-size: 38px;
  }
  .hero-img img {
    width: 34% !important;
  }
  .mobile-nav .open {
    width: 100%;
  }
}
@media (max-width: 403px) {
  .hero-img img {
    width: 50% !important;
  }
}
@media (max-width: 375px) {
  .hero-text h1 {
    font-size: 30px;
  }
  .hero-text p {
    font-size: 18px;
  }
  .hero-img img {
    width: 50% !important;
  }
}
@media (max-width: 353px) {
  .splide__pagination.splide__pagination--ltr {
    bottom: -1.5em !important;
  }
}
</style>

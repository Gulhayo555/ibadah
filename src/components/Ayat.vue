<template>
  <section class="gap islamic-ayat no-bottom">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="heading">
            <p>Quranic Verses With Translation</p>
            <h2>Islamic ayat with translation</h2>
          </div>
        
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
          <SplideSlide class="splide_panigation">
                <div class="slide-ayat">
                    <div class="ayat">
                <img src="../assets/images/ayat.png" alt="" />
                <h4>
                  O you who have believed, Seek help through patience and
                  prayers.
                </h4>
                <h5>Al-Baqrah (1) : 153</h5>
              </div>
                </div>
           
            </SplideSlide>
            <SplideSlide>
                <div class="slide-ayat">
                    <div class="ayat">
                <img src="../assets/images/ayat.png" alt="" />
                <h4>
                  O you who have believed, Seek help through patience and
                  prayers.
                </h4>
                <h5>Al-Baqrah (1) : 153</h5>
              </div>
                </div>
             
            </SplideSlide>
            <SplideSlide>
                <div class="slide-ayat">
                    <div class="ayat">
                <img src="../assets/images/ayat.png" alt="" />
                <h4>
                  O you who have believed, Seek help through patience and
                  prayers.
                </h4>
                <h5>Al-Baqrah (1) : 153</h5>
              </div>
                </div>
            </SplideSlide>
          </Splide>
        </div>
        <div class="col-lg-6">
          <div class="ayat-img">
            <img src="../assets/images/ayat-with-man.png" alt="img" />
          </div>
        </div>
      </div>
    </div>
    <img
      src="../assets/images/ayat-with.jpg"
      class="ayat-with-img"
      alt="ayat-with"
    />
  </section>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    Splide,
    SplideSlide,
  },
});
</script>

<style>
.splide__pagination .splide_panigation{
left:  36% !important;
bottom: -10% !important;
bottom: 0 !important;
align-items: end !important ;
}
.splide__pagination__page {
  background-color: #fbc50b !important ;
  height: 3px !important;
  width: 36px !important;
  transform: scale(1) !important;
  border-radius: 2px;
  transition: 150ms ease-in-out;
  &.is-active {
    opacity: 1;
    width: 36px;
    background-color: #fbc50b !important;
  }
}
.islamic-ayat {
  position: relative;

}
.no-bottom{
  padding-bottom: 0 !important;
}
.col-lg-6 {
  flex: 0 0 auto;
  width: 50%;
}
.islamic-ayat .heading {
  width: 100%;
}
.heading p {
  color: #444;
  padding-top: 24px;
  font-family: var(--common-font);
  text-transform: uppercase;
   font-size: 16px;
    line-height: 30px;
    margin: 0;
    font-weight: 400;
}
.ayat h5 {
  font-size: 16px;
  background-color: var(--theme-colour);
  display: inline-block;
  padding: 5px 30px;
  font-weight: bold;
  border-radius: 51px;
}
.heading h2 {
  font-family: var(--common-font);
  font-size: 60px;
}
.ayat {
  padding: 51px;
  border: 3px solid var(--theme-colour);
  text-align: center;
  background-color: #fff7dc;
  padding-bottom: 40px;
  padding-top: 64px;
  border-radius: 227px;
  border-top-right-radius: 0;
}
.ayat h4 {
  padding-top: 20px;
  font-size: 22px;
  padding-bottom: 20px;
  line-height: 32px;
}
.ayat h5 {
  font-size: 16px;
  background-color: var(--theme-colour);
  display: inline-block;
  padding: 5px 30px;
  font-weight: bold;
  border-radius: 51px;
}
.ayat-img img {
  position: relative;
  z-index: 1;

}

.islamic-ayat img.ayat-with-img {
  border-top-left-radius: 500px;
  position: absolute;
  right: 0;
  bottom: 0;
  overflow: hidden;
}
.ayat-img {
  margin-top: 230px;
  margin-left: 40px;
}
@media (max-width: 1400px) {
  .heading h2 {
        font-size: 46px;
    }
}
@media (max-width: 1400px) {
.splide__slide img{
width: 100%;
} 
}
@media (max-width: 991px) {


}

@media (max-width: 993px) {
  .heading h2 {
        font-size: 40px;
    }
    .islamic-ayat img.ayat-with-img {
    display: none;
  }
.ayat-with-img{
  display: none;
}
.ayat-with{
  display: none;
}
.ayat-img {
    display: none;
  }
}
@media (max-width: 576px) {
    .heading p {
        font-size: 14px;
        padding-top: 16px;
        font-size: 14px;
    }
}
@media (max-width: 768px) {
   .heading h2 {
        font-size: 38px;
    }
}
@media (max-width: 450px) {
    .ayat h4 {
        padding-top: 7px;
        font-size: 17px;
        padding-bottom: 20px;
        line-height: 26px;
    }
}
@media (max-width: 450px) {
    .ayat h5 {
        font-size: 14px;
        padding: 5px 16px;
    }
}
</style>

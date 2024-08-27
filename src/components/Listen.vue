<template>
  <section class="listen-holy">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="heading two">
            <p>Listen Holy Quran</p>
            <h2>Recite & Listen the Holy Quran Online</h2>
            <h6>
              Duis aute irure dolor in reprehenit in voluptate velit esse cillum
              dolo re eu fugiat nulla pariatur.
            </h6>
            <div class="wrapper">
              <h4>Surah Falaq</h4>
              <h5>(Abd-ur-Rahman)</h5>
                <audio
                ref="audio"
                @timeupdate="updateTime"
                :src="audioSrc"
                style="width: 0px; height: 0px; visibility: hidden"
              ></audio>

              <div class="audioplayer">
                <div class="audioplayer-playpause">
                 <a @click="togglePlayPause" v-if="togglePlayPause" href="#!"><i :class="isPlaying ? 'fas fa-pause' : 'fas fa-play' "></i></a>
                  <a @click="togglePlayPause" v-else href="#!"><i class="fas fa-pause"></i></a>
                </div>
                <div class="audioplayer-time audioplayer-time-current">
                  {{ currentTime }}
                </div>
                <!-- <div class="audioplayer-bar">
                  <div
                    class="audioplayer-bar-played"
                    :style="{ width: progressBarWidth }"
                  ></div>
                </div> -->
                <div class="progress-container">
                  <div
                    class="audio-progress"
                    :style="{ width: progressBarWidth }"
                  ></div>
                </div>
                <div class="audioplayer-time audioplayer-time-duration">
                  {{ totalTime }}
                </div>
                <div class="audioplayer-volume">
                  <div @click="toggleMute" class="audioplayer-volume-button">
                    <a href="#!"><i :class=" isMuted ? 'fas fa-volume-mute' : 'fas fa-volume-up'"></i></a>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    v-model="volume"
                    @input="updateVolume"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="offset-lg-1 col-lg-5">
          <div class="support-us">
            <h4>Support us, we need your help.</h4>
            <div class="progressbar">
              <div class="circle" data-parent="85">
                <canvas
                  width="175"
                  height="175"
                  style="height: 140px; width: 140px"
                >
                </canvas>
                <div>85%</div>
              </div> 
            </div>
            <h6>$71,000</h6>
            <span>Donation Collected</span>
            <a href="#!" ref="btn" class="listen_btn">Donate Now</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isPlaying: false,
      volume: 1, // Default volume level (1 = 100%)
      audioSrc: require("@/assets/audio/surah-al-falaq.mp3"), // Use require to handle static assets
      currentTime: "0:00",
      totalTime: "0:00",
      isMuted:false,
      progressBarWidth: "0%",

    };
  },

  // computed: {
  //   progressBarWidth() {
  //     const audio = this.$refs.audio;
  //     if (audio?.duration) {
  //       return `${(audio.currentTime / audio.duration) * 100}%`;
  //     }
  //     return '0%';
  //   },
  // },
  methods: {
    togglePlayPause() {
      const audio = this.$refs.audio;
      if (this.isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      this.isPlaying = !this.isPlaying;
    },
    updateVolume() {
      this.$refs.audio.volume = this.volume;
    },
    updateTime() {
      const audio = this.$refs.audio;
      const currentTime = audio.currentTime;
      const duration = audio.duration;

      this.currentTime = this.formatTime(currentTime);
      this.totalTime = this.formatTime(duration);
    },
    formatTime(time) {
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60);
      return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    },
    toggleMute() {
      const audio = this.$refs.audio;
      audio.muted = !audio.muted;
      this.isMuted = audio.muted;
    },
    updateProgress() {
      // const audio = this.$refs.myAudio;
      // const duration = audio.duration;
      // const currentTime = audio.currentTime;
      // this.progressBarWidth = ((currentTime / duration) * 100) + '%';

      const audio = this.$refs.audio;
      this.audio.currentTime = formatTime(currentTime);
      this.audio.totalTime = formatTime(duration);
      this.progressBarWidth = ((this.audio.currentTime / this.audio.totalTime) * 100) +'%';
    },
  },

};

</script>

<style>

.audioplayer-volume{
  display: flex;
  justify-content: center;
  align-items: center;
}
.audioplayer-volume i{
  color: #000;
  display: flex;
  justify-content: center;
  align-items: start;
}
.progress-container {
  height: 7px;
  margin: 0 10px;
  width: 80%;
  background-color:#feedb5;
}
.audio-progress {
  width: 100%;
  height: 100%;
  background-color: #4caf50;
}
.circle canvas {
  position: relative;
  width: 147px;
  height: 147px;
}
.support-us {
  background-image: url(../assets/images/color-bg.jpg);
  /* height: 460px; */
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
}
.circle div {
  color: #fff;
  position: absolute;
  top: 46%;
  left: 54%;
  margin: -20px 0 0 -86px;
  width: 100%;
  text-align: center;
  line-height: 40px;
  font-size: 26px;
  transform: translate(10px, 10px);
  font-weight: bold;
  border-radius: 50%;
/* background: radial-gradient(closest-side, transparent 79% , transparent 80% 100%),
conic-gradient(yellow 75%, transparent 0 );
  width: 100px;
  height: 100px; */
}
.support-us h4 {
  color: #fff;
  font-size: 46px;
  font-family: var(--common-font);
  padding-bottom: 20px;
}
.support-us h6 {
  font-size: 48px;
  color: #fff;
  padding-top: 20px;
  font-weight: bold;
}
.support-us span {
  font-weight: bold;
  font-size: 20px;
  color: #fff;
  display: block;
  padding-bottom: 26px;
  padding-top: 4px;
}
.support-us {
  padding: 50px;
  text-align: center;
  padding-bottom: 100px;
  width: 100%;
  padding-top: 84px;
  border-bottom-left-radius: 300px;
  border-bottom-right-radius: 300px;
}
.listen_btn {
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
  transition: 0.5s;
  display: inline-block;
}

.listen_btn:after {
  background-color: #1c1e211f;
  border-radius: 50%;
  content: "";
  height: 167px;
  min-width: 167px;
  position: absolute;
  top: 100%;
  transition: transform 0.7s cubic-bezier(0.66, 0, 0.34, 1);
  width: 100%;
  z-index: -1;
  left: 0;
}
.listen_btn:hover::after {
  transform: scale(2.47);
}
.circle {
  width: 143px;
  height: 141px;
  margin: 0 auto;
  margin-top: 10px;
  display: inline-block;
  position: relative;
  text-align: center;
  position: relative;
  z-index: 1;
}
.circle canvas {
  vertical-align: middle;
  border-radius: 50%;
  height: 140px;
  width: 140px;
}

.row {
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex;
  /* flex-wrap: wrap; */
  margin-top: calc(-1 * var(--bs-gutter-y));
  margin-right: calc(-0.5 * var(--bs-gutter-x));
  margin-left: calc(-0.5 * var(--bs-gutter-x));
  justify-content: space-between;
}
.col-lg-6 {
  flex: 0 0 auto;
  width: 50%;
  z-index: 2;
  position: relative;
}
.offset-lg-1 {
  position: relative;
  z-index: 2;
}
.heading.two {
  width: 100%;
  position: relative;
  text-align: left;
}
.wrapper h4,
.wrapper h5 {
  color: #000;
  font-size: 16px;
  padding-left: 66px;
}
.listen-holy .heading.two {
  padding-top: 160px;
  padding-bottom: 0;
}
.listen-holy {
  background-image: url(../assets/images/holy-quran.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  padding-bottom: 76px;
}
.listen-holy:before {
  content: "";
  background-color: #000;
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  z-index: 2;
  top: 0;
  left: 0;
}
.heading {
  & h2 {
    font-family: var(--common-font);
  }

  & h6 {
    font-size: 18px;
    padding-top: 34px;
    line-height: 30px;
    width: 90%;
    margin-bottom: 30px;
  }
}

.listen-holy .heading.two h2,
.listen-holy .heading.two p,
.listen-holy .heading.two h6 {
  color: #fff;
}

.wrapper {
  background: #fff;
  padding: 20px 30px;
  border: 3px solid #fbc50b;
  border-radius: 10px;
  padding-top: 30px;
  & h4 {
    font-weight: bold;
    padding-bottom: 4px;
    text-transform: capitalize;
  }
  & h5 {
    color: #000;
    font-size: 16px;
    padding-left: 66px;
    padding-bottom: 6px;
  }
}
.audioplayer {
  display: flex;
  width: 100%;
  align-items: center;
  border-radius: 4px;
  margin-top: 15px;
}
.audioplayer-time {
  display: flex;
  width: 40px;
  justify-content: center;
  font-size: 12px;
  color: rgb(0 0 0);
  font-weight: bold;
}
.audioplayer:not(.audioplayer-playing) .audioplayer-playpause {
  background: #007d3a;
  color: #fff;
  margin-top: -100px !important;
}
.audioplayer-playpause a{
  color: #fff;
}
/* .audioplayer:not(.audioplayer-playing) .audioplayer-playpause a {
  content: "";
  justify-content: center;
  width: 0;
  height: 0;
  margin-left: 2px;
  border-top: 7px solid transparent;
  border-right: none;
  border-bottom: 7px solid transparent;
  border-left: 12px solid #ffffff;
} */
.audioplayer-playing .audioplayer-playpause a {
  content: "";
  display: flex;
  justify-content: space-between;
  width: 12px;
  height: 14px;
}
.audioplayer-time-current {
  margin-left: -45px;
}
.audioplayer-playing .audioplayer-playpause a::before,
.audioplayer-playing .audioplayer-playpause a::after {
  content: "";
  width: 4px;
  height: 14px;
  background-color: #fff;
}

.audioplayer-bar {
  position: relative;
  display: flex;
  margin: 0 12px;
  height: 10px;
  flex-basis: 0;
  flex-grow: 1;
  cursor: pointer;
  width: 100%;
  background-color: #feedb5;
}
.audioplayer-volume-adjust div div {
  position: absolute;
  top: 0;
  left: -8px;
  height: 6px;
  background-color: #feedb5;
}

.audioplayer-volume-button a:after {
    content: '';
    position: absolute;
}
.audioplayer-volume-button a:before,
.audioplayer-volume-button a:after {
  content: "";
  position: absolute;
}
.audioplayer-volume input {
  background-color: #feedb5;
  width: 60px;
  height: 6px;
  outline: none;
  appearance: none;
 border-radius: 0;
}
input[type="range"]::-webkit-slider-thumb{
appearance: none;
background-color: #f3bf0b;
width: 8px;
height: 5px;
}
.circle canvas {
  vertical-align: middle;
  border-radius: 50%;
}
.circle div {
  color: #fff;
  position: absolute;
  top: 46%;
  left: 54%;
  margin: -20px 0 0 -86px;
  width: 100%;
  text-align: center;
  line-height: 40px;
  font-size: 26px;
  transform: translate(10px, 10px);
  font-weight: bold;
}

.audioplayer-volume-button {
  justify-content: center;
  border-radius: 50%;
  display: flex;
  align-items: center;
  width: 40px;
  height: 40px;
  cursor: pointer;
  border: 1px solid #fbc50b;
}
.audioplayer-playpause {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 63px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}
.audioplayer-bar > div {
  position: absolute;
  left: 0;
  top: 5px;
}
.audioplayer-bar-loaded {
  z-index: 1;
  height: 10px;
  background: #feedb5;
}
.audioplayer-bar-played {
  flex-direction: row-reverse;
  z-index: 7;
  background: #f3bf0b;
  width: 100%;
  height: 100%;
}
.audioplayer-volume-adjust {
  display: flex;
  align-items: center;
  margin-left: 8px;
}
.audioplayer-volume {
  display: flex;
  align-items: center;
  margin-top: -100px;
  flex-direction: row-reverse;
}
.audioplayer-volume-button {
  justify-content: center;
  border-radius: 50%;
  display: flex;
  align-items: center;
  width: 40px;
  height: 40px;
  cursor: pointer;
  border: 1px solid #fbc50b;
}
.audioplayer-volume-adjust div div {
  position: absolute;
  top: 0;
  left: -8px;
  height: 6px;
  background-color: #feedb5;
}
.audioplayer-volume-adjust > div {
  margin-left: -65px;
  position: relative;
  display: flex;
  width: 60px;
  height: 6px;
  cursor: pointer;
  background-color: #fbc50b;
}
.btn:after {
  background-color: #1c1e211f;
  border-radius: 50%;
  content: "";
  height: 167px;
  min-width: 167px;
  position: absolute;
  top: 100%;
  transition: transform 0.7s cubic-bezier(0.66, 0, 0.34, 1);
  width: 100%;
  z-index: -1;
  left: 0;
}

.support-us {
  padding: 50px;
  text-align: center;
  padding-bottom: 100px;
  width: 100%;
  padding-top: 84px;
  border-bottom-left-radius: 300px;
  border-bottom-right-radius: 300px;
}

@media (max-width: 1400px) {
  .support-us {
    padding-bottom: 80px;
    padding-top: 70px;
  }
  .listen-holy .heading.two {
    padding-top: 120px;
  }
  .heading h2 {
    font-size: 46px;
  }
  .support-us h6 {
    font-size: 40px;
    padding-top: 14px;
  }
}
@media (max-width: 1200px) {
  .heading h2 {
    font-size: 46px;
  }
  .support-us h4 {
    font-size: 32px;
    padding-bottom: 14px;
  }
  .listen-holy .heading.two {
    padding-top: 100px;
  }
}
@media (max-width: 993px) {
  .support-us {
    padding-bottom: 60px;
    padding-top: 60px;
    border-radius: 0;
    margin-top: 40px;
  }
  .listen-holy .heading.two {
    padding-top: 100px;
  }
}
@media (max-width: 768px) {
  .heading h2 {
    font-size: 38px;
  }
}
@media (max-width: 480px) {
  .heading h2 {
    font-size: 30px;
  }
  .support-us h4 {
    font-size: 28px;
  }
}
@media (max-width: 576px) {
  .listen-holy .heading.two {
    padding-top: 60px;
    padding-bottom: 60px;
  }
}
@media (max-width: 509px) {
  .audioplayer-volume-adjust {
    display: none;
  }
  .audioplayer {
    justify-content: space-evenly;
  }
}
@media (max-width: 387px) {
  .audioplayer-volume input{
    display: none;
  }
}

</style>

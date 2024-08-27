<!-- <template>
  <div class="audio-player">
    <audio ref="audio" @timeupdate="updateTime" :src="audioSrc"></audio>
    <button @click="togglePlayPause">{{ isPlaying ? 'Pause' : 'Play' }}</button>
    <input type="range" min="0" max="1" step="0.01" v-model="volume" @input="updateVolume" />
    <div class="progress-bar" :style="{ width: progressBarWidth }"></div>
    <div class="time-display">
      <span>{{ currentTime }}</span> / <span>{{ totalTime }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPlaying: false,
      volume: 1, // Default volume level (1 = 100%)
      audioSrc: require('@/assets/audio/surah-al-falaq.mp3'), // Use require to handle static assets
      currentTime: '0:00',
      totalTime: '0:00',
    };
  },
  computed: {
    progressBarWidth() {
      const audio = this.$refs.audio;
      if (audio?.duration) {
        return `${(audio.currentTime / audio.duration) * 100}%`;
      }
      return '0%';
    },
  },
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
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    },
  },
};
</script>

<style scoped>
.audio-player {
  width: 400px;
  margin: 20px;
}

.progress-bar {
  height: 5px;
  background: #3498db;
}

.time-display {
  margin-top: 10px;
}
</style> -->

<template>
  <div class="item" ref="item">
    <div class="card" v-for="(timer, index) in timers" :key="index">
      <p class="timer">{{ timer.value }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timers: [
        { count: 150, value: 0 },
        { count: 250, value: 0 },
        { count: 300, value: 0 },
        { count: 180, value: 0 },
      ],
      hasAnimated: false // Track if animation has already occurred
    };
  },
  methods: {
    animateTimers() {
      const item = this.$refs.item;
      if (window.scrollY > item.offsetTop - item.clientHeight * 2 && !this.hasAnimated) {
        this.hasAnimated = true; // Prevent re-animation
        this.timers.forEach(timer => {
          const count = timer.count;
          let value = 0;

          const animate = () => {
            value += 1;
            if (value <= count) {
              timer.value = value;
              requestAnimationFrame(animate);
            }
          };

          animate();
        });

        window.removeEventListener("scroll", this.handleScroll);
      }
    },
    handleScroll() {
      this.animateTimers();
    }
  },
  mounted() {
    this.handleScroll = this.handleScroll.bind(this); // Ensure correct `this` context
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style scoped>
.item {
  width: 1140px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-top: 150px;
}

.card {
  width: 250px;
  height: 250px;
  background-color: aqua;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: cursive;
  font-weight: 700;
}

.timer {
  font-size: 50px;
  color: red; /* Use a color name or hex value instead of a CSS variable for simplicity */
}

.btn {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: blue;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}
</style>
<template>
  <section>
    <div class="container">
      <div class="fun-facts" ref="item">
        <div class="islamic-mosque" >
          <div class="count-style">
            <h2 data-max="62" class="ms-animated">62<sup>+</sup></h2>
          </div>
          <h5>Islamic Mosque</h5>
          <img src="../assets/images/fun-facts-1.png" alt="" />
        </div>
        <div class="islamic-mosque">
          <div class="count-style">
            <h2 data-max="14" class="ms-animated">14<sup>K</sup></h2>
          </div>
          <h5>Learning Students</h5>
          <img src="../assets/images/fun-facts-2.png" alt="" />
        </div>
        <div class="islamic-mosque">
          <div class="count-style">
            <h2 data-max="317" class="ms-animated">317<sup>+</sup></h2>
          </div>
          <h5>Inspirational Courses</h5>
          <img src="../assets/images/fun-facts-3.png" alt="" />
        </div>
        <div class="islamic-mosque">
          <div class="count-style">
            <h2 data-max="26" class="ms-animated">26<sup>+</sup></h2>
          </div>
          <h5>Islamic Scholars</h5>
          <img src="../assets/images/fun-facts-4.png" alt="" />
        </div>
      </div>
    </div>
  
  </section>
</template>

<script>
//  v-for="(timer, index) in timers" :key="index"  
//  export default {
//   data() {
//     return {
//       timers:
//       [
//         { count: 62,  value: 0,
//           title:'Islamic Mosque',
//           images:require("@/assets/images/fun-facts-1.png"),
        
//         },
//         { count: 14,  value: 0,
//           title:'Learning Students',
//           images:"../assets/images/fun-facts-2.png"
//         },
//         { count: 317, value: 0,
//           title:'Inspirational Courses',
//           images:"../assets/images/fun-facts-3.png" 
//         },
//         { count: 26, value: 0, 
//           title:'Islamic Scholars',
//           images:"../assets/images/fun-facts-4.png"
//         },
//       ],
//       title:'Islamic Mosque',


//       hasAnimated: false // Track if animation has already occurred
//     };
//   },
//   methods: {
//     animateTimers() {
//       const item = this.$refs.item;
//       if (window.scrollY > item.offsetTop - item.clientHeight * 2 && !this.hasAnimated) {
//         this.hasAnimated = true; // Prevent re-animation
//         this.timers.forEach(timer => {
//           const count = timer.count;
//           let value = 0;

//           const animate = () => {
//             value += 1;
//             if (value <= count) {
//               timer.value = value;
//               requestAnimationFrame(animate);
//             }
//           };

//           animate();
//         });

//         window.removeEventListener("scroll", this.handleScroll);
//       }
//     },
//     handleScroll() {
//       this.animateTimers();
//     }
//   },
//   mounted() {
//     this.handleScroll = this.handleScroll.bind(this); // Ensure correct `this` context
//     window.addEventListener("scroll", this.handleScroll);
//   },
//   beforeDestroy() {
//     window.removeEventListener("scroll", this.handleScroll);
//   }
// };
</script>



<style scoped>
.fun-facts {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.islamic-mosque {
  background-image: url(../assets/images/color-bg.jpg);
  text-align: center;
  width: 24.9%;
  padding: 70px 0;
  border-bottom-left-radius: 300px;
  border-bottom-right-radius: 300px;
}
.islamic-mosque{
  height: 351px;
}
.count-style h2 {
  font-size: 80px;
  font-weight: bold;
  color: var(--theme-colour);
}
.islamic-mosque h5 {
  color: #fff;
  padding-top: 4px;
  padding-bottom: 36px;
}
sub,
sup {
  position: relative;
  font-size: 0.75em;
  line-height: 0;
  vertical-align: baseline;
}
img,
svg {
  vertical-align: middle;
}
@media (max-width: 1400px) {
    .islamic-mosque {
        padding: 53px 0;
    }
    .count-style h2 {
        font-size: 60px;
    }
}
@media (max-width: 1200px) {
    .islamic-mosque h5 {
        padding-top: 4px;
        padding-bottom: 28px;
        font-size: 16px;
    }
}
@media (max-width: 450px) {
    .ayat h5 {
        font-size: 14px;
        padding: 5px 16px;
    }
}
  
@media (max-width: 993px) {
    .fun-facts {
        flex-wrap: wrap;
    }
    .islamic-mosque {
        width: 49.9%;
        margin-bottom: 40px;
    }
}
@media (max-width: 480px) {
    .islamic-mosque {
        width: 100%;
    }
    .islamic-mosque {
        margin-bottom: 15px;
    }
}
</style>

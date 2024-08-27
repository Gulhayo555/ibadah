<template>
  <section class="community_gap">
    <div class="container">
      <div class="join-our-community">
        <h2>Serving the community, working in partnership</h2>
        <p>
          We believe that our primary role is to serve the needs of the local
          community
        </p>
        <a href="#!" class="com_btn">Join Our Community</a>
        <div class="join-our-img">
          <img src="../assets/images/join-our-1.jpg" alt="img" />
          <img src="../assets/images/join-our-2.jpg" alt="img" />
          <img src="../assets/images/join-our-3.jpg" alt="img" />
          <img src="../assets/images/join-our-4.jpg" alt="img" />
        </div>
      </div>
    </div>
  </section>
</template>
<style>
.community_gap {
  padding-top: 120px;
}
.join-our-community {
  background-image: url(../assets/images/color-bg.jpg);
  position: relative;
  border-radius: 500px;
  border-top-left-radius: 0;
  padding: 105px 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.join-our-img img {
  border-radius: 50%;
  position: absolute;
}
.join-our-img img:nth-child(1) {
  left: 4%;
  top: 10%;
  animation: animation02 15s infinite;
}
@keyframes animation02 {
  0% {
    transform: translate(0px, 0px);
  }
  25% {
    transform: translate(-10px, 10px);
  }
  50% {
    transform: translate(0px, 0px);
  }
  75% {
    transform: translate(10px, 10px) rotate(-5deg);
  }
  100% {
    transform: translate(0px, 0px);
  }
}

.join-our-img img:nth-child(2) {
  left: 13%;
  bottom: 16%;
  animation: animation01 3s infinite;
}
@keyframes animation01 {
  0% {
    transform: scale(1);
  }
 25%{
  transform: scale(1.025);
 }
 40%{
  transform: scale(1.05);
 }
  50% {
    transform:scale(1.07);
  }
63%{
  transform:scale(1.05);

}
  75% {
    transform:scale(1.025);
  }
  100% {
    transform: scale(1);
  }
}

.join-our-img img:nth-child(3) {
  right: 7%;
  top: 10%;
  animation: 6s infinite animation01;
}

.join-our-img img:nth-child(4) {
  right: 10%;
  bottom: 20%;
  animation: animation02 6s infinite;
}
.join-our-community h2 {
  color: #fff;
  font-family: var(--common-font);
  width: 74%;
  margin: auto;
  font-size: 50px;
}
.join-our-community p {
  padding-top: 20px;
  padding-bottom: 40px;
  font-size: 20px;
  color: #fff;
  text-align: center;
}
.com_btn {
  text-transform: capitalize;
    border-radius: 50px;
    color: #000 !important;
    line-height: 16px;
    overflow: hidden !important;
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
    display: block;
    width: fit-content;
}
.com_btn:after {
    background-color: #1c1e211f;
    border-radius: 50%;
    content: '';
    height: 167px;
    min-width: 167px;
    position: absolute;
    top: 100%;
    transition: transform .7s cubic-bezier(.66, .00, .34, 1.00);
    width: 100%;
    z-index: -1;
    left: 0;
}

.com_btn:hover:after{
  transform: scale(2.47);
}
@media (max-width: 1400px) {
    .btn {
        padding: 18px 36px;
    }
}
@media (max-width: 1200px) {
    .join-our-community h2 {
        width: 72%;
        font-size: 44px;
    }
}
@media (max-width: 993px) {
    .gap {
        padding-top: 80px;
        padding-bottom: 80px;
    }
}
@media (max-width: 993px) {
    .join-our-community {
        padding: 60px 15px;
    text-align: center;

    }
    .join-our-img{
      display: none;
    }
    .join-our-community h2 {
        font-size: 33px;
        width: 98%;
    }
   .join-our-community p {
    padding: 15px 20px;
   }
   .join-our-community .btn{
    padding: 15px 35px;
   }
}
@media (max-width: 764px) {
.join-our-community .btn{
  padding: 10px 25px;
}
}
@media (max-width: 576px) {
    .community_gap {
        padding-top: 60px;
        padding-bottom: 60px;
    }
}
@media (max-width: 576px) {
    p {
        font-size: 14px;
    }
}
@media (max-width: 451px) {
    .join-our-community p {
     font-size: 16px; 
    }
    .join-our-community h2 {
    font-size: 28px;
    }
  }
  @media (max-width: 345px) {
    .join-our-community {
padding: 50x 10px;

    }
    .join-our-community h2 {
    font-size: 25px;
    }
  }
</style>

<template>
  <section>
    <div class="container">
      <div class="heading">
        <img src="../assets/images/heading-img.png" alt="" />
        <p>WELCOME TO THE ISLAMIC CENTER</p>
        <h2>Know The Real History of Islam</h2>
      </div>
      <div class="row">
        <div class="col-lg-5">
          <div class="islamic-history">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscsed do eiusmod
              tempor incididunt ut labore etedum dolor sit a ad minim veniam,
              quis nostr incididunt ut laborcitationn tempor incididunt ut
              labore um dolor sit amet, consectetur adipiscsed do eiu agna a
              liqua. Ut enim ad minim veniam, quis nostr incididunt ut
              laborcitation.
            </p>
            <ul class="list">
              <li>Astonishing Facilities</li>
              <li>Helping CommunitiesLeads</li>
              <li>Charity EventsSchooling Children</li>
              <li>Feeding Hungry People</li>
            </ul>
            <a href="#!" class="btn">Read Our History</a>
          </div>
        </div>
        <div class="col-lg-7">
          <div class="row-2 align-items-end ">
            <div class="col-lg-5 col-6">
              <div class="circle-text">
                <img
                  src="../assets/images/text-circle.png"
                  class="circle-text-img"
                  alt="circle-img"
                />
                <figure class="circle-img">
                  <img src="../assets/images/circle-img.png" alt="" />
                </figure>
              </div>
              <div class="real-history-book book hoverimg">
                <figure>
                  <img src="../assets/images/real-history-book.jpg" alt="" />
                </figure>
              </div>
            </div>
            <div class="col-lg-7 col-6">
              <div class="real-history-book man hoverimg">
                <figure>
                  <img src="../assets/images/real-history-boy.jpg" alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
</script>
<style scoped>
.row-2 {
  display: flex;
  gap: 15px 
}

.hoverimg figure {
  position: relative;
}
figure {
  overflow: hidden;
}
.hoverimg figure::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, .3) 100%);
  transform: translateX(-150%) skewX(-25deg);
  z-index: 2;
}

.real-history-book.hoverimg:hover figure::before {
  transform: translateX(250%) skewX(-25deg);
  transition: 500ms ease-in-out;
}

.real-history-book.man::before {
  z-index: -1;
  left: -77%;
  content: "";
  position: absolute;
  background-image: url(../assets/images/background-history.png);
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  mix-blend-mode: difference;
  bottom: 11%;
}
.circle-text {
  position: relative;
  text-align: center;
}
.circle-text img.circle-text-img {
  top: 6%;
  position: absolute;
  left: 23%;
  animation: rotate 25s infinite;
}
@keyframes rotate {
  0% {
    rotate: 0deg;
  }
  100% {
    rotate: 360deg;
  }
}
.circle-text figure.circle-img {
  width: 194px;
  height: 194px;
  background-color: var(--theme-colour);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin: auto;
}

.circle-text figure.circle-img img {
  border: 1px solid;
  width: 118px;
  padding: 30px;
  border-radius: 50%;
}
.heading {
  text-align: center;
  width: 60%;
  margin: auto;
  padding-bottom: 50px;
  & h2 {
    font-family: "Sawarabi Mincho", serif;
    font-weight: 400;
    color: #000;
    font-size: 60px;
  }
  & p {
    color: #444;
    padding-top: 24px;
    font-family: var(--common-font);
    text-transform: uppercase;
  }
}
.islamic-history {
  width: 100%;
}
.islamic-history a.btn::after {
  background-color: var(--theme-colour);
  overflow: hidden;
}
.islamic-history p {
  padding-bottom: 30px;
  font-size: 18px;
  line-height: 30px;
  color: #555;
  margin: 0;
  font-weight: 400;
  text-align: start;
}

.islamic-history a.btn {
  background-color: transparent;
  border: 3px solid var(--theme-colour);
  margin-top: 30px;
}
.row .btn {
  text-transform: capitalize;
  border-radius: 50px;
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
.courses-img a i {
    color: #fff;
    top: 50%;
    position: absolute;
    width: 60px;
    height: 60px;
    align-items: center;
    justify-content: center;
    display: flex;
    border-radius: 50%;
    border: solid 3px var(--theme-colour);
    color: red;
}
.btn:after {
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
.row btn:hover::after {
  z-index: 1;
}
ul.list li {
  padding-bottom: 14px;
  position: relative;
  padding-left: 20px;
  font-size: 18px;
  text-align: start;
}
ul.list li:before {
  content: "";
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: var(--common-colour);
  border-radius: 50%;
  top: 7px;
  left: 0;
}
.real-history-book {
  margin-top: 50px;
  position: relative;
  overflow: hidden;
}
.real-history-book.book img {
  border-bottom-left-radius: 150px;
  border-bottom-right-radius: 150px;
}

.real-history-book.man {
  border-radius: 0;
  border-top-left-radius: 250px;
  border-top-right-radius: 250px;
}
.row{
  width: 100%;  
}
@media (max-width: 1400px) {
    .blog-two img, .blog-two figure, .real-history-book img, .real-history-book figure {
        width: 100%;
    }
    .circle-text img.circle-text-img {
        top: 6%;
        left: 18%;
    }
   .heading {
    & h2 {
        font-size: 46px;
    }
   }
   .real-history-book {
        margin-top: 18px;
    }
    .islamic-history .btn {
        padding: 18px 36px;
    }
}
@media (max-width: 1200px) {
    .circle-text img.circle-text-img {
        top: 6%;
        left: 18%;
        width: 64%;
    }
    .islamic-history p {
        line-height: 26px;
        font-size: 16px;
    }
    .circle-text figure.circle-img img {
        width: 105px; 
         padding: 24px;
    }
    .circle-img img{
      width: 100%;
    }

    .islamic-history a.btn {
        margin-top: 14px;
    }
    ul.list li {
        font-size: 16px;
    }
   
    .circle-text figure.circle-img {
        width: 152px;
        height: 152px;
    }
    .islamic-history p {
        line-height: 26px;
        font-size: 16px;
    }
    .heading {
    & h2 {
        font-size: 40px;
    }
   }
   .heading {
        padding-bottom: 30px;
    }
}
@media (max-width: 993px) {
    .circle-text img.circle-text-img {
        top: 8%;
        left: 6%;
        width: 87%;
    }
    .circle-text figure.circle-img img {
            width: 103px;
            padding: 19px;
          
        }
    .hero-text p, .heading {
        width: 100%;
    }
    .heading {
        width: 100%;
    }
    ul.list li {
        font-size: 16px;
    }
    .heading {
    & h2 {
        font-size: 38px;
    }
   }
   .circle-text {
        margin-top: 17px;
        width: fit-content;
    }
}
@media (max-width: 768px) {
  .heading {
    & h2 {
        font-size: 35px;
    }
   }
}
@media (max-width: 576px) {
   .hero-text  p {
        font-size: 14px;
    }
    .islamic-history p{
      font-size:14px
    }
}
@media (max-width: 480px) {
.islamic-history ul{
  padding-left: unset;
}
    .islamic-history .btn {
        font-size: 14px;
        padding: 16px 34px;
    }
    .circle-text img.circle-text-img {
        top: 6%;
        left: 4%;
        width: 90%;
    }
    .circle-text figure.circle-img {
        /* width: 120px;
        height: 120px; */
    }
}
@media (max-width: 480px) {
  .heading {
    & h2 {
        font-size: 30px;
    }
   }
}
</style>

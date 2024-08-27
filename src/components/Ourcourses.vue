<template>
    <section class="our-courses-section sec_gap" >
    <div class="container">
        <div class="heading">
            <img src="../assets/images/heading-img.png" alt="">
            <p>Islamic Classes and Courses</p>
            <h2>Our Courses</h2>
        </div>
        <div class="row">
            <div class="col-lg-3 col-sm-6">
                <div class="courses">
                    <div class="courses-img">
                        <figure>
                            <img src="../assets/images/courses-1.jpg" alt="">
                        </figure>
                        <a href="#!"><i class="fas fa-arrow-right"></i></a>
                    </div>
                    <div class="scholar">
                        <img src="../assets/images/scholar.jpg" alt="">
                        <div>
                            <h4>Habib Al Noor</h4>
                            <span>Arabic scholar</span>
                        </div>
                    </div>
                    <div class="courses-text">
                        <a href="#!">Quran Intermediate Course Brother</a>
                        <h4>$16.00</h4>
                        <span>Course Free</span>
                    </div>
                    <div class="courses-weeks">
                        <h6>10 weeks</h6>
                        <div class="border"></div>
                        <h6>50 enroll</h6>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6">
                <div class="courses">
                    <div class="courses-img">
                        <figure>
                            <img src="../assets/images/courses-2.jpg" alt="">
                        </figure>
                        <a href="#!"><i class="fas fa-arrow-right"></i></a>
                    </div>
                    <div class="scholar">
                        <img src="../assets/images/scholar.jpg" alt="">
                        <div>
                            <h4>Habib Al Noor</h4>
                            <span>Arabic scholar</span>
                        </div>
                    </div>
                    <div class="courses-text">
                        <a href="#!">Quran Intermediate Course Brother</a>
                        <h4>$16.00</h4>
                        <span>Course Free</span>
                    </div>
                    <div class="courses-weeks">
                        <h6>10 weeks</h6>
                        <div class="border"></div>
                        <h6>50 enroll</h6>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6">
                <div class="courses">
                    <div class="courses-img">
                        <figure>
                            <img src="../assets/images/courses-3 (1).jpg" alt="">
                        </figure>
                        <a href="#!"><i class="fas fa-arrow-right"></i></a>
                    </div>
                    <div class="scholar">
                        <img src="../assets/images/scholar.jpg" alt="">
                        <div>
                            <h4>Habib Al Noor</h4>
                            <span>Arabic scholar</span>
                        </div>
                    </div>
                    <div class="courses-text">
                        <a href="#!">Quran Intermediate Course Brother</a>
                        <h4>$16.00</h4>
                        <span>Course Free</span>
                    </div>
                    <div class="courses-weeks">
                        <h6>10 weeks</h6>
                        <div class="border"></div>
                        <h6>50 enroll</h6>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6">
                <div class="courses">
                    <div class="courses-img">
                        <figure>
                            <img src="../assets/images/courses-4.jpg" alt="">
                        </figure>
                        <a href="#!"><i class="fas fa-arrow-right"></i></a>
                    </div>
                    <div class="scholar">
                        <img src="../assets/images/scholar.jpg" alt="">
                        <div>
                            <h4>Habib Al Noor</h4>
                            <span>Arabic scholar</span>
                        </div>
                    </div>
                    <div class="courses-text">
                        <a href="#!">Quran Intermediate Course Brother</a>
                        <h4>$16.00</h4>
                        <span>Course Free</span>
                    </div>
                    <div class="courses-weeks">
                        <h6>10 weeks</h6>
                        <div class="border"></div>
                        <h6>50 enroll</h6>
                    </div>
                </div>
            </div>
           
        </div>
        <div class="logos-heading">
                <h3>Subscribe via Your <span>Preferred Podcast App.</span></h3>
                <ul class="logos">
                    <li><img src="../assets/images/logos-1.png" alt="icon"></li>
                    <li><img src="../assets/images/logos-2.png" alt="icon"></li>
                    <li><img src="../assets/images/logos-3.png" alt="icon"></li>
                </ul>
            </div>
    </div>
    </section>
</template>
<style>
.sec_gap {
    padding-top: 120px;
    padding-bottom: 120px;
}
.heading {
    text-align: center;
    width: 60%;
    margin: auto;
    padding-bottom: 50px;
}
.col-lg-3 {
        flex: 0 0 auto;
        width: 25%;
    }
    .courses {
    width: 97%;
    background-color: #fff;
    border-top-left-radius: 200px;
    border-top-right-radius: 200px;
    &-text{
    width: 85%;
    margin: auto;
    }
}
.courses-text span {
    color: var(--common-colour);
    font-weight: bold;
    text-align: start;
    display: block;
}
figure {
    overflow: hidden;
}
.courses-img{
    position: relative;
}
.courses-img::before {
    background-color: var(--common-colour);
    content: "";
    opacity: .5;
    position: absolute;
    width: 100%;
    height: 0%;
    bottom: 0;
    left: 0; /* tekshirib ko'ring */
    border-top-left-radius: 200px;
    border-top-right-radius: 200px;
    transition: .4s ease-in-out;
    box-sizing: border-box;
}
.courses:hover .courses-img:before {
    height: 100%;
}
.courses-img a i {
    color: #fff;
    position: absolute;
    width: 60px;
    height: 60px;
    align-items: center;
    justify-content: center;
    display: flex;
    border-radius: 50%;
    border: solid 3px #fbc50b;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(323deg) scale(0);
    transition: .4s ease-in-out;
}
.courses:hover .courses-img a i{
    transform: translate(-50%, -50%) rotate(323deg) scale(1);
}
.courses-img a i:hover{

     color: #000;
     background-color: #fbc50b;
     transform: rotate(-323deg);
}

.courses-text a {
    font-size: 22px;
    line-height: 32px;
    padding-bottom: 20px;
    display: block;
    font-family: var(--common-font);
    text-align: start;
    color: #000
}
.courses-text h4 {
    font-size: 22px;
    color: #444;
    font-weight: 800;
    margin-top: 0;
    margin-bottom: .5rem;
    font-weight: 500;
    line-height: 1.2;
    color: var(--bs-heading-color);
    text-align: start;
}
.courses .border {
    border: 1px solid #000000 !important;
    height: 50px;
    margin-top: -30px;
}
.courses-weeks h6 {
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    color: #000;
    margin: 0;
}
.courses-weeks {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 26px;
    background-color: var(--theme-colour);
    margin-top: 23px;
}
.courses .border {
    border: 1px solid #000000 !important;
    height: 50px;
    margin-top: -30px;
}
.our-courses-section {
    background-image: url(../assets/images/courses-back.png);
    width: 100%;
    background-color: #f5f5f5;
    background-repeat: no-repeat;
    background-position: right;
    background-size: contain;
}
.courses-img img {
    border-top-left-radius: 200px;
    border-top-right-radius: 200px;
    width: 100%;
}
.scholar {
    display: flex;
    align-items: center;
    background-color: var(--common-colour);
    padding: 10px;
    border-radius: 50px;
    width: 85%;
    margin: auto;
    margin-top: -30px;
    z-index: 1;
    position: relative;
    margin-bottom: 20px;
    & h4{
        font-size: 16px;
    color: #fff;
    font-weight: bold;
    }
    & span{
        font-size: 13px;
    color: #fff
    }
}
.scholar img {
    border-radius: 50%;
    margin-right: 13px;
}   
.courses-img a i {
    color: #fff;
    position: absolute;
    width: 60px;
    height: 60px;
    align-items: center;
    justify-content: center;
    display: flex;
    border-radius: 50%;
    border: solid 3px var(--theme-colour);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(323deg) scale(0);
}
.courses-text {
    width: 85%;
    margin: auto;
}
.logos-heading {
    margin-top: 120px;
    text-align: center;
}
.logos-heading h3 {
    font-size: 40px;
    padding-bottom: 50px;
    font-family: var(--common-font);
    & span{
        display: inline-block;
    border-bottom: 5px solid var(--theme-colour);
    }
}
.logos {
    display: flex;
    align-items: center;
    justify-content: center;
    & li{
    border: 1px solid #ddd;
    padding: 20px 40px;
    background-color: #fff;
    border-radius: 51px;
    margin-right: 20px;
    transition: .4s ease-in-out;
    }
}
.logos li:hover{
    box-shadow: 6px 6px 15px rgba(0, 0, 0, 0.3);
}
@media (max-width: 1400px) {
    .sec_gap {
        padding-top: 100px;
        padding-bottom: 100px;
    }
    .logos-heading h3 {
        font-size: 35px;
        padding-bottom: 30px;
    }
    .heading {
        padding-bottom: 30px;
    }
    .courses-text a {
        font-size: 20px;
        line-height: 30px;
        padding-bottom: 14px;
    }
}
@media (max-width: 1308px) {
.logos{
    flex-wrap: wrap;
    margin-bottom: 20px;
}
.logos li {
        margin-bottom: 20px;
    }
}
@media (max-width: 1200px) {
    .logos-heading h3 {
        font-size: 32px;
    }
    .courses-weeks {
        padding: 14px 16px;
    }
    .courses-text a {
        font-size: 18px;
        line-height: 28px;
        padding-bottom: 14px;
    }
}
@media (max-width: 1068px) {
    .logos-heading {
        margin-top: 80px;
    }
}
@media (max-width: 993px) {
    .logos-heading {
        margin-top: 60px;
    }
    .sec_gap {
        padding-top: 80px;
        padding-bottom: 80px;
    }
    .our-courses-section {
        background-size: cover;
    }
   .heading h2 {
        font-size: 40px;
    }
    .logos li {
        padding: 18px 28px;
    }
    .sec_gap {
        padding-top: 80px;
        padding-bottom: 80px;
    }
    .logos li img {
        width: 100%;
    }
    .hero-text p, .heading {
        width: 100%;
    }
    .heading h2 {
        font-size: 40px;
    }
    .courses {
        margin-bottom: 40px;
    }
    .courses-text a {
        font-size: 18px;
        line-height: 25px;
    }
}

@media (max-width: 768px) {
    .logos li {
        margin-bottom: 20px;
    }
    .logos-heading {
        margin-top: 50px;
    }
    .heading h2 {
        font-size: 38px;
    }
    .courses {
        width: 100%;
    }
}
@media (max-width: 576px) {
    .heading p {
        font-size: 14px;
        padding-top: 16px;
    }
    .sec_gap {
        padding-top: 60px;
        padding-bottom: 60px;
    }
}
@media (max-width: 576px) {
  
}
@media (max-width: 480px) {
   .heading h2 {
        font-size: 30px;
    }
}
@media (max-width: 480px) {
    p {
        line-height: 26px;
    }
}
@media (max-width: 450px) {
    .logos-heading h3 {
        font-size: 28px;
    }
    .courses-img img {
        object-fit: cover;
        height: 280px;
    }
    .logos-heading {
        margin-top: 30px;
    }
    .sec_gap{
        padding-top: 40px;
        padding-bottom: 40px;  
    }
    .logos{
        margin-bottom: unset;
    }
}

</style>
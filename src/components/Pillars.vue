<template>

    <section class="pillars_gap">
        <div class="container">
            <div class="heading">
                <img src="../assets/images/heading-img.png" alt="">
                <p>Islamic Classes and Courses</p>
                <h2>Pillars of Islam </h2>
            </div>
            <div class="pillars">
                <div class="pillars-name">
                    <figure><img src="../assets/images/pillars-name-1.png" alt=""></figure>
                    <img src="../assets/images/pillars-1.jpg" alt="">
                    <a href="#!">Shahadah</a>
                    <span> ( Faith ) </span>
                </div>
                <div class="pillars-name">
                    <figure><img src="../assets/images/pillars-name-2.png" alt=""></figure>
                    <img src="../assets/images/pillars-2.jpg" alt="">
                    <a href="#!">Salah</a>
                    <span>  ( Prayer )  </span>
                </div>
                <div class="pillars-name">
                    <figure><img src="../assets/images/pillars-name-3.png" alt=""></figure>
                    <img src="../assets/images/pillars-3.jpg" alt="">
                    <a href="#!">Sawm</a>
                    <span>  ( Fasting ) </span>
                </div>
                <div class="pillars-name">
                    <figure><img src="../assets/images/pillars-name-4.png" alt=""></figure>
                    <img src="../assets/images/pillars-4.jpg" alt="">
                    <a href="#!">Zakat</a>
                    <span>  ( Almsgiving ) </span>
                </div>
                <div class="pillars-name">
                    <figure><img src="../assets/images/pillars-name-3.png" alt=""></figure>
                    <img src="../assets/images/pillars-5.jpg" alt="">
                    <a href="#!">Hajj</a>
                    <span>  ( Pilgrimage )  </span>
                </div>
            </div>
          
        </div>
    </section>
</template>
<style>
.pillars_gap {
    padding-top: 120px;
    padding-bottom: 120px;
}
.pillars {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.pillars-name {
    position: relative;
    padding-bottom: 30px;
    border-radius: 127px;
    border-bottom-left-radius: 0;
    border: 1px solid #bcbcbc;
    text-align: left;
}
.pillars-name img {
    border-radius: 127px;
    border-bottom-left-radius: 0;
    vertical-align: middle;
}
.pillars-name figure {
    background-color: var(--theme-colour);
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    border-radius: 50%;
    justify-content: center;
    position: absolute;
    overflow: hidden;
    margin-bottom: 0;
}
.pillars-name a {
    font-size: 26px;
    font-family: var(--common-font);
    display: block;
    padding-top: 17px;
    padding-bottom: 4px;
    padding-left: 20px;
    transition: .4s ease-in-out;
    color: #000;
}
.pillars-name span {
    color: var(--common-colour);
    font-family: var(--common-font);
    padding-left: 20px;
}
@media (max-width:1410px){
    .pillars{
        flex-wrap: wrap;
     gap: 30px;
     justify-content: center;
    }
}
@media (max-width: 1400px) {
    .heading h2 {
        font-size: 46px;
    }
}
@media (max-width: 1200px) {
    .heading h2 {
        font-size: 46px;
    }
}
@media (max-width: 993px) {
    .pillars {
        justify-content: center;
        flex-wrap: wrap;
    }
    .heading  h2 {
        font-size: 40px;
    }
    .pillars_gap {
        padding-top: 80px;
        padding-bottom: 80px;
    }
}
@media (max-width: 576px) {
    .pillars_gap {
        padding-top: 60px;
        padding-bottom: 60px;
    }
}
@media (max-width: 500px) {
    .heading p {
        font-size: 14px;
        width: 100%;
    }
}
@media (max-width: 480px) {
    p {
        font-size: 16px;
        line-height: 26px;
    }
}

   


</style>
<template>
<section class="gap no-top">
<div class="container">
    <div class="heading">
        <img src="../assets/images/heading-img (1).png" alt="">
        <p>Articles & Updates</p>
        <h2>Latest News</h2>
    </div>
    <div class="row">
   <div class="col-lg-4 col-md-6">
    <div class="blog hoverimg">
        <h4>26 <span>dec, 2024</span></h4>
        <figure><img src="../assets/images/blog-img-1.jpg" alt=""></figure>
        <h5><a href="#!">Embarking on a Journey of Reflection</a></h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipisci mod tempor incididunt ut labore et dolore magna minim veniam, quis nostrud exercitation.</p>
        <div class="blog-man d-flex align-items-center">
            <img src="../assets/images/blog-man.jpg" alt="img" class="me-3">
            <h6>by <a href="#!">Thomas Walimes</a></h6>
        </div>
    </div>
   </div>
   <div class="col-lg-4 col-md-6">
    <div class="blog hoverimg">
        <h4>26 <span>dec, 2024</span></h4>
        <figure><img src="../assets/images/blog-img-2.jpg" alt=""></figure>
        <h5><a href="#!">Embarking on a Journey of Reflection</a></h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipisci mod tempor incididunt ut labore et dolore magna minim veniam, quis nostrud exercitation.</p>
        <div class="blog-man d-flex align-items-center">
            <img src="../assets/images/blog-man.jpg" alt="img" class="me-3">
            <h6>by <a href="#!">Thomas Walimes</a></h6>
        </div>
    </div>
   </div>
   <div class="col-lg-4 col-md-6">
    <div class="blog hoverimg">
        <h4>26 <span>dec, 2024</span></h4>
        <figure><img src="../assets/images/blog-img-3.jpg" alt=""></figure>
        <h5><a href="#!">Embarking on a Journey of Reflection</a></h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipisci mod tempor incididunt ut labore et dolore magna minim veniam, quis nostrud exercitation.</p>
        <div class="blog-man d-flex align-items-center">
            <img src="../assets/images/blog-man.jpg" alt="img" class="me-3">
            <h6>by <a href="#!">Thomas Walimes</a></h6>
        </div>
    </div>
   </div>
    </div>
</div>
</section>


</template>
<style>
.no-top {
    padding-top: 0;
}
.gap{
    padding-top: 120px;
    padding-bottom: 120px;
}
.blog {
    position: relative;
    text-align: left;

    & h4 {
    position: absolute;
    background-color: var(--theme-colour);
    margin: 0;
    font-size: 40px;
    font-weight: bold;
    display: inline-block;
    line-height: 40px;
    text-align: center;
    border-radius: 50%;
    width: 120px;
    height: 120px;
    z-index: 1;
    padding-top: 27px;
    color: #000
} 
    & p{
    padding-bottom: 26px;
    font-size: 16px;
    line-height: 30px;
    color: #555;
    margin: 0;
    font-weight: 400;
    text-align: start;
    }
}
.blog h5 a {
    font-family: var(--common-font);
    font-size: 28px;
    color: #000;
    margin: 0;}

    .blog-man h6 {
    font-weight: 900;
    text-transform: capitalize;
}
.blog-man img {
    border-radius: 50%;
    box-shadow: 0px 0px 35px -1px rgba(0, 0, 0, 0.20);
    -webkit-box-shadow: 0px 0px 35px -1px rgba(0, 0, 0, 0.20);
    -moz-box-shadow: 0px 0px 35px -1px rgba(0, 0, 0, 0.09);
    border: 3px solid #fff;
}
.blog-man h6 a {
    border-bottom: 1px solid;
    color: #000;
}
.hoverimg figure::before {
    position: absolute;
    top: 0;
    left: -75%;
    z-index: 2;
    display: block;
    content: '';
    width: 50%;
    height: 100%;
    background: -webkit-linear-gradient(left, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, .3) 100%);
    background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, .3) 100%);
    -webkit-transform: skewX(-25deg);
    transform: skewX(-25deg);
}
.blog.hoverimg:hover figure::before{
left: 150%;
transition: 500ms ease-in-out;
}
.blog figure > img {
    width: 100%;
    display: flex;
    align-items: center;
    border-top-left-radius: 150px;
    border-top-right-radius: 150px;
}
  
.blog h4 span {
    display: block;
    font-size: 14px;
    line-height: 20px;
}
@media (max-width: 1200px) {
    .blog h4 {
        font-size: 34px;
        width: 102px;
        height: 102px;
        padding-top: 17px;
    }
}
@media (max-width:1039px) {
    .heading h2{
        font-size: 46px;
    }
    .gap {
        padding-top: 80px;
        padding-bottom: 80px;
    }
    .row{
        flex-wrap: wrap;
        justify-content: center;
    }
    figure{
        width: 100%;
    }
}
@media (max-width: 993px) {
    .heading h2 {
        font-size: 40px;
    }
}
@media (max-width:768px) {
.Information{
    align-items: center;
    justify-content: center;
}
.gap {
        padding-top: 60px;
        padding-bottom: 60px;
    }
    .heading h2 {
        font-size: 36px;
    }
}  
    @media (max-width: 500px) {
    .heading h2 {
        font-size: 32px;
    }
    .heading p{
        font-size: 14px;
        width: 100%;
    }
}
@media (max-width: 459px) {
    .blog h4 {
        font-size: 26px;
        width: 85px;
        height: 85px;
        padding-top: 9px;
    }
}
@media (max-width: 380px) {
.heading{
    padding-bottom: 35px;
}
/* .d-flex.align-items-center{
    flex-wrap: wrap;
    justify-content: center;;
} */
}
@media (max-width: 353px) {
    .heading h2 {
        font-size: 28px;
    }
}
@media (max-width: 360px) {
    .gap {
        padding-top: 36px;
        padding-bottom: 36px;
    }

}
</style>
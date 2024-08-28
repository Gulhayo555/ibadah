<template>
<section class="section-navigating navig_gap" >
<div class="container">
    <div class="row align-items-center">
        <div class="col-lg-3 col-6">
            <div class="img-navigating hoverimg">
                <figure><img src="../assets/images/navigating-1.jpg" alt="img"></figure>
            </div>
        </div>
        <div class="col-lg-3 col-6">
            <div class="img-navigating hoverimg">
                <figure><img src="../assets/images/navigating-2.jpg" alt="img"></figure>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="navigating-life">
                <div class="d-flex  align-items-center">
                    <div class="location">
                        <i class="far fa-clock"></i>
                        <span>Dec 25, 2024 @5:00 PM</span>
                    </div>
                        <div class="location">
                            <i class="fas fa-map-marker-alt"></i>
                            <span> Town 21, United State</span>
                        </div>

                </div>
                <h2>Navigating Life's Journey with Faith</h2>
                        <div id="countdown">
                            <ul>
                                <li><span id="days">9</span>days </li>
                                <li><span id="hours">9</span>Hour</li>
                                <li><span id="minutes">35</span>Min</li>
                                <li class="mb-0"><span id="seconds">8</span>Sec</li>
                            </ul>
                        </div>
                        <div class="btn-video d-flex align-items-center">
                            <a href="#!" class="navig_btn">Join Now</a>
                            <div class="video">
                             <a data-fancybox href="https://www.youtube.com/watch?v=1La4QzGeaaQ"> <i>
                                   <svg width="15" height="22" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                     <path d="M11 8.5L0.5 0.272758L0.5 16.7272L11 8.5Z" fill="#fff"></path>
                                   </svg>
                                </i> Watch Video</a>
                            
                            </div>
                        </div>
            </div>


        </div>
        
    </div>
</div>
</section>

</template>
<style>

 a{
    text-decoration: none!important;
}
.count-style sup {
    top: 0;
}
.video .fas.fa-play{
    color: #fff;
}
.navigating-life {
    padding-left: 60px;
}
.navigating-life .location span {
    color: #000;
    padding-right: 20px;
}
.navig_gap{
    padding-top: 120px;
    padding-bottom: 120px;
}

.section-navigating{
    background-image: url(../assets/images/background-navigating.jpg);
    background-color: #f5f5f5;
    background-repeat: no-repeat;
    background-position: right;
    background-position-y: bottom;
}
.btn-video{
    display: flex;
    align-items: center;
}

.img-navigating img {
    border-radius: 410px;
    border-top-right-radius: 0;
    border-top-left-radius: 680px;
    width: 100%;
}
#countdown ul {
    display: flex;
    align-items: center;
    justify-content: start;
    text-align: center;
}
.hoverimg figure::before {
    position: absolute;
    top: 0;
    left: -75%;
    z-index: 2;
    display: block;
    content: '';
    width: 50%;
    height: 100% ;               
    /* background: -webkit-linear-gradient(left, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, .3) 100%);
    background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, .3) 100%);
    -webkit-transform: skewX(-25deg);
    transform: skewX(-25deg); */
    background-color: red;
}
.img-navigating.hoverimg:hover figure::before{
   left:150%;
 transition: 500ms ease-in-out;

}
.navig_btn {
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

.navig_btn:after {
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
.navig_btn:hover::after{
transform: scale(2.47);
}
.video {
    position: relative;
    text-align: center;
}
video a{
    content: '';
    justify-content: center;
    width: 0;
    height: 0;
    margin-left: 2px;
    border-top: 7px solid transparent;
    border-right: none;
    border-bottom: 7px solid transparent;
    border-left: 12px solid #ffffff;
}
.video:before {
    z-index: -1;
    left: -8%;
    content: "";
    position: absolute;
    /* background-image: url(../assets/images/background-history.png); */
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    mix-blend-mode: difference;
    bottom: 1%;
}
.navigating-life .video i {
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--common-colour);
    border-radius: 50%;
    margin-left: 22px;
    margin-right: 14px;
}
.navigating-life .video i svg {
    width: 19px;
    height: auto;
    padding: 0;
    padding-left: 10px;
}   
.navigating-life .video a {
    color: black;
    display: flex;
    align-items: center;
    text-transform: capitalize;
    font-weight: 900;
    font-size: 16px;
    position: relative;
    top: 0;
    left: 0;
    transform: initial;
}
.navigating-life span {
    padding-right: 20px;
}
.navigating-life i {
    color: var(--common-colour);
    font-size: 20px;
    padding-right: 8px;
}
.navigating-life h2 {
    font-family: var(--common-font);
    padding-top: 10px;
    padding-bottom: 30px;
    font-size: 60px;
    color: #000;
    margin: 0;
    font-weight: 500;
    line-height: 1.2;
}
#countdown ul li {
    text-align: center;
    color: #000;
    margin-right: 10px;
}
#countdown ul li {
    text-align: center;
    width: 120px;
    height: 120px;
    padding: 20px;
    background-color: #ffd40d;
    border-radius: 150px;
    border-top-left-radius: 0;
    text-transform: uppercase;
    margin-bottom: 4px;
    background-color: #fff;
    border: 3px solid var(--theme-colour);
    display: block;
}
#countdown ul li span {
    display: flex;
    justify-content: center;
    font-size: 40px;
    font-weight: bold;
    line-height: 26px;
    margin-top: 8px;
    color: var(--common-colour);
    padding: 0;
    padding-bottom: 9px;
}
@media (max-width: 1400px) {
    .navigating-life h2 {
        font-size: 46px;
    }
    .navigating-life {
        padding-left: 30px;
    }
 
}
@media (max-width: 993px) {
    .navig_gap {
        padding-top: 80px;
        padding-bottom: 80px;
    }
}
@media (min-width: 992px) {
    .col-lg-3 {
        flex: 0 0 auto;
        width: 25%;
    }
    .col-6 {
    flex: 0 0 auto;
    width: 50%;
} 
.navigating-life h2 {
        font-size: 40px;
    }          
}

@media (max-width: 576px) {
    #countdown ul li {
        width: 84px;
        height: 84px;
        padding: 7px;
    }
}
@media (max-width: 768px) {
    .navigating-life h2 {
        font-size: 38px;
    }
}
@media (max-width: 480px) {
    .navigating-life .video a {
        font-size: 14px;
    }
    .navigating-life h2 {
        font-size: 30px;
    }
    .navig_btn {
        font-size: 14px;
        padding: 16px 34px;
    }
}
@media (max-width: 450px) {
    #countdown ul li {
        margin-right: -10px;
    }
    #countdown ul {
    padding-left: 0.5rem;
    }
     .navigating-life{
        padding-left: 15px;
    }
    .navigating-life .video i{
      margin-left: 15px;
      margin-right: 8px;
    }
}
@media (max-width: 353px) {
    .navigating-life .video a{
        line-height: 16px;
    } 

}
    </style>
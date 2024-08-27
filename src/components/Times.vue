<template>

    <section class="timing_gap">
        <div class="container">
            <div class="namaz-timing ">
                <div class="namaz-time">
                    <img src="../assets/images/namaz-time-icon-1.png" alt="">
                    <h4>Fajr</h4>
                    <h5>3:24 AM <span>Iqamah:4:15 AM</span></h5>
                   
                </div>
                <div class="namaz-time">
                    <img src="../assets/images/namaz-time-icon-2.png" alt="">
                    <h4>Zuhr</h4>
                    <h5>01:09 PM <span>Iqamah:1:30 PM</span></h5>
                   
                </div>
                <div class="namaz-time">
                    <img src="../assets/images/namaz-time-icon-3.png" alt="">
                    <h4>Asr</h4>
                    <h5>6:29 PM <span>Iqamah:7:30 PM</span></h5>
                </div>
                <div class="namaz-time">
                    <img src="../assets/images/namaz-time-icon-4.png" alt="">
                    <h4>Magrib</h4>
                    <h5>9:01 PM <span>Iqamah:9:01 PM</span></h5>
                 
                </div>
                <div class="namaz-time">
                    <img src="../assets/images/namaz-time-icon-5.png" alt="">
                    <h4>Isha</h4>
                    <h5>10:10 PM  <span>Iqamah:10:45 PM</span></h5>
                </div>
                <div class="namaz-time">
                    <img src="../assets/images/jummah.png" alt="">
                    <h4>Jummah</h4>
                    <h5>01:10 PM <span>Iqamah:02:45 PM</span></h5>
                </div>
            </div>
        </div>
    </section>
</template>
<style>
.timing_gap{
    padding-bottom: 120px;
}
.namaz-timing{
    display: flex;  
    align-items: center;
    justify-content: space-between;
}
.namaz-time{
    position: relative;
    text-align: center;
    width: 17%;
    padding-top: 36px;
    border: 1px solid #bcbcbc;
    border-bottom-left-radius: 150px;
    border-bottom-right-radius: 151px;
    padding-bottom: 100px;
    background-image: url('../assets/images/color-bg.jpg    ' );
    overflow: hidden;
    margin-left: -1px;
    border-top: 0;
    margin-top: -1px;
    transition: .4s ease-in-out;
    
  & img{
  position: relative;
}

   & h4 {
    font-size: 36px;
    color: var(--common-colour);
    padding-top: 6px;
    padding-bottom: 20px;
    font-family: "Sawarabi Mincho", serif;
    font-weight: 400;
    font-style: normal;
    position: relative;

}
&:hover h5, &:hover h4{
    color: #fff;
}

&:hover h4{
        color: #fff;
    }
    &:hover h5 span{
        color: #fff;
    }

   & h5 {
    position: relative;
    font-size: 20px;
    color: #000;
    margin: 0;
    transition: 0.4s ease-in-out;
    font-weight: 500;
}
    & h5 span {
    display: block;
    font-size: 16px;
    padding-top: 4px;
    transition: 0.4s ease-in-out;
 }
} 

.namaz-time h5 span {
    display: block;
    font-size: 16px;
    padding-top: 4px;
    color: #000;
}

    .namaz-time::before{
    background-color: #fff;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: 0.4s ease-in-out;
    }
    .namaz-time:hover:before {
    bottom: 0;
    height: 0;
}

    .namaz-time::after{
        position: absolute;
        content: '';
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 4px solid #fbc50b;
        bottom: 40px;
        left: 44%;
    }
    @media (max-width: 1400px) {
    .namaz-time {
        padding-top: 15px;
        padding-bottom: 90px;
    }
    .namaz-time h5 {
        font-size: 18px;
    }
    .namaz-time h4 {
        font-size: 28px;
        padding-top: 6px;
        padding-bottom: 16px;
    }
    .timing_gap {
        padding-top: 100px;
        padding-bottom: 100px;
    }
}
    @media (max-width:1251px) {
        .namaz-timing{
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
         }
    }
    @media (max-width: 1200px) {
    .namaz-time h4 {
        font-size: 22px;
    }
}
    @media (max-width: 993px) {
    .namaz-time {
        border: 1px solid #bcbcbc;
        width: 33%;
        margin-top: 30px
    }
    @media (max-width: 993px) {
    .timing_gap {
        padding-top: 80px;
        padding-bottom: 80px;
    }
}
    .namaz-timing {
        flex-wrap: wrap;
    }
}
@media (max-width: 576px) {
    .namaz-time {
        width: 49%;
    }

    .timing_gap {
        padding-top: 60px;
        padding-bottom: 60px;
    }
}
@media (max-width: 450px) {
        .timing_gap {
            padding-top: 40px;
            padding-bottom: 40px;
        }
    }
</style>
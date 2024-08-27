<template>
  <!-- search-popup -->
  <div :class="[{ search_active: isSearch }, 'search-popup']" id="search-popup">
    <button @click="this.isSearch = false" class="close-search">
      <i class="fas fa-times"></i>
    </button>
    <form action="#" method="post">
      <div class="form-group">
        <input
          type="search"
          name="search-field"
          value=""
          placeholder="Search Here"
          required
          id=""
        />
        <button type="submit"><i class="fa fa-search"></i></button>
      </div>
    </form>
  </div>
  <!-- serach-popup end -->
  <nav class="inner-header">
    <div class="container">
      <div class="top-bar">
        <div class="top-bar_row aligin-items-center">
          <div class="row-col-xl-5">
            <div class="row-time">
              <div class="row_icon">
                <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5001M17.6859 17.69L18.5 18.5001M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
                    stroke="#fbc50b"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <h4>Sunrise At<b>:4:44AM</b></h4>
              </div>
              <div class="row_icon">
                <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 6V3M18.5 12V7M14.5 4.5H11.5M21 9.5H16M15.5548 16.8151C16.7829 16.8151 17.9493 16.5506 19 16.0754C17.6867 18.9794 14.7642 21 11.3698 21C6.74731 21 3 17.2527 3 12.6302C3 9.23576 5.02061 6.31331 7.92462 5C7.44944 6.05072 7.18492 7.21708 7.18492 8.44523C7.18492 13.0678 10.9322 16.8151 15.5548 16.8151Z"
                    stroke="#fbc50b"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <h4>Sunrise At<b>:7:35PM</b></h4>
              </div>
            </div>
          </div>
          <div class="col-xl-2">
            <div>
              <ul class="social-media">
                <li>
                  <a class="media_icon" href=""
                    ><i class="fab fa-facebook-f icon"></i
                  ></a>
                </li>
                <li>
                  <a class="media_icon twit" href=""
                    ><i class="fab fa-twitter icon"></i
                  ></a>
                </li>
                <li>
                  <a class="media_icon" href=""
                    ><i class="fab fa-linkedin"></i
                  ></a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-xl-5 map_location">
            <div class="d-flex align-items-center">
              <div class="location">
                <a href=""
                  ><i>
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="-4 0 32 32"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                    >
                      <g
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        <g
                          transform="translate(-104.000000, -411.000000)"
                          fill="#fbc50b"
                        >
                          <path
                            d="M116,426 C114.343,426 113,424.657 113,423 C113,421.343 114.343,420 116,420 C117.657,420 119,421.343 119,423 C119,424.657 117.657,426 116,426 L116,426 Z M116,418 C113.239,418 111,420.238 111,423 C111,425.762 113.239,428 116,428 C118.761,428 121,425.762 121,423 C121,420.238 118.761,418 116,418 L116,418 Z M116,440 C114.337,440.009 106,427.181 106,423 C106,417.478 110.477,413 116,413 C121.523,413 126,417.478 126,423 C126,427.125 117.637,440.009 116,440 L116,440 Z M116,411 C109.373,411 104,416.373 104,423 C104,428.018 114.005,443.011 116,443 C117.964,443.011 128,427.95 128,423 C128,416.373 122.627,411 116,411 L116,411 Z"
                          ></path>
                        </g>
                      </g>
                    </svg> </i></a
                ><span> New Street Town 2445x United State</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="navbar">
        <div class="logo">
          <a href="">
            <img src="../assets/images/logo.png" alt="logo" />
          </a>
        </div>
        <div class="bar-menu" @click="this.isOpen = true">
          <i class="fas fa-bars"></i>
        </div>
        <ul class="navbar-links">
          <li class="navbar-dropdown">
            <a href="#">Home</a>
            <div class="dropdown">
              <a href="#">home 1</a>
              <a href="#">home 2</a>
            </div>
          </li>
          <li class="navbar-dropdown"><a href="#">About</a></li>
          <li class="navbar-dropdown">
            <a href="#">Courses</a>
            <div class="dropdown">
              <a href="#!">our courses</a>
              <a href="#">courses details</a>
            </div>
          </li>
          <li class="navbar-dropdown">
            <a href="#">Campaigns</a>
            <div class="dropdown">
              <a href="#">our campaigns</a>
              <a href="#">campaign details</a>
            </div>
          </li>
          <li class="navbar-dropdown">
            <a href="#">Pages</a>
            <div class="dropdown">
              <a href="#">our scholar</a>
              <a href="#">scholar details</a>
              <a href="#">our events</a>
              <a href="#">pricing packages</a>
              <a href="#">404</a>
            </div>
          </li>
          <li class="navbar-dropdown">
            <a href="#">News</a>
            <div class="dropdown">
              <a href="#">our blog</a>
              <a href="#">blog details</a>
            </div>
          </li>
          <li class="navbar-dropdown"><a href="#">Contact</a></li>
        </ul>
        <div class="navbar-header-search">
          <a href="callto:+(00)123-345-11"
            ><i class="fas fa-headphones-alt icon"></i>+(00)123-345-11</a
          >
          <div class="navbar-search" @click="this.isSearch = true">
            <a href="#!">
              <svg
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="_12" data-name="12">
                  <path
                    d="m21.71 20.29-2.83-2.82a9.52 9.52 0 1 0 -1.41 1.41l2.82 2.83a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zm-17.71-8.79a7.5 7.5 0 1 1 7.5 7.5 7.5 7.5 0 0 1 -7.5-7.5z"
                  ></path>
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="bottom-bar"></div>
    </div>

    <div
      :class="[{ open: isOpen }, 'mobile-nav', 'hamburger-menu']"
      id="mobile-nav"
      style="display: block"
    >
      <div class="res-log">
        <a href="#">
          <img
            src="../assets/images/logo.png"
            alt="Responsive Logo"
            class="white-logo"
          />
        </a>
      </div>
     
      <ul  class="" v-for="(item, index) in items"
          :key="index"
          >
          <li></li>
        <li   :class="{ active: activeIndex === index }" 
          @click="setActive(index)" 
          class="menu-item-has-children" > <a href="#!">Home</a>
          <ul class="sub-menu" >
            <li><a href="#">{{item.li[1]}}  </a></li>
            <li><a href="#">{{item.li[2]}}</a></li>
  
          </ul>
        </li>
        <li><a href="#">about</a></li>
         <!-- <li class="menu-item-has-children"
         >
          <a href="#!">Courses</a> -->
          <!-- <ul class="sub-menu">
            <li><a href="#">{{item.li1}}our courses</a></li>
            <li><a href="#">{{item.li2}}courses details</a></li>
          </ul>  -->
        <!-- </li>   -->
         <!-- <li
          class="menu-item-has-children" >
          <a href="#!">campaigns</a> -->
        <!-- <ul class="sub-menu">
            <li><a href="#">{{item.li1}}our campaigns</a></li>
            <li><a href="#">{{item.li2}}campaign details</a></li>
          </ul>  -->
        <!-- </li>  -->
        <!-- <li
          class="menu-item-has-children" 
        > 
         <a href="#!">pages</a> -->
          <!-- <ul class="sub-menu">
            <li><a href="#">{{item.list[1]}}our scholar</a></li>
            <li><a href="#">{{item.list[2]}}scholar details</a></li>
            <li><a href="#">{{item.li3}}our events</a></li>
            <li><a href="#">{{item.li4}}pricing packages</a></li>
            <li><a href="#">404</a></li>
          </ul> -->
        <!-- </li> -->
        <!-- <li
           class="menu-item-has-children"
        >
          <a href="#!">News</a> -->
          <!-- <ul class="sub-menu">
            <li><a href="#">{{item.li1}}our blog</a></li>
            <li><a href="#">{{item.li2}}blog details</a></li>
          </ul> -->
        <!-- </li>  -->
        <li><a href="#">Contact</a></li>
      </ul>
      <div id="res-cross" @click="this.isOpen = false"></div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      isSearch: false,
      activeIndex: null,
      items: [
     {
       li:["home 1",  "home 2"]
     },
     {
    
      li: [ "our courses",  "courses details "]
     },
     {
      
      li:[  "our campaigns",  "campaign details"]
     },
     {
    
      li:[  "our scholar",  "scholar details" ,"our events", "pricing packages"]
     },
     {
      li:[  "our blog",  "blog details"]
     },
         
        ]
    };
  },
  methods: {
    setActive(index) {
      this.activeIndex = index;
    }
  },
};
</script>

<style lang="scss" scoped>
.navbar-search svg {
  fill: #fff;
  width: 20px;
  margin-right: 16px;
}
.inner-header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 40;
}
.top-bar {
  padding: 15px 0;
}
.top-bar_row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  &-time {
    display: flex;
  }
  &-icon {
    display: flex;
    color: #ffff;
  }
  &_icon h4,
  b {
    font-size: 16px;
    padding-left: 6px;
    color: #ffff;
    font-weight: 600;
  }
  .media_icon {
    color: #fff;
    margin-right: 10px;
  }
  .media_icon.twit {
    border-right: 1px solid #ffff 12px;
  }
}
.row-time {
  display: flex;
  align-items: center;
}
.row_icon {
  display: flex;
  margin-right: 3rem;
  & h4 {
    padding-left: 6px;
    font-size: 16px;
    color: #fff;
  }
}
.fas.fa-headphones-alt.icon {
  margin-right: 10px;
}
ul.social-media li:not(:last-child):after {
  top: 5px;
  content: "";
  width: 1px;
  height: 14px;
  position: absolute;
  background-color: white;
  right: -6px;
}
.social-media {
  display: flex;
  justify-content: center;
  gap: 10px;
  color: #ffff;
  & li {
    position: relative;
    display: block;
  }
}
ul.social-media li {
  margin-right: 10px;
}
.map_location {
  display: flex;
  justify-content: end;
  align-items: center;
}
.location span {
  font-size: 16px;
  color: #fff;
  margin-left: 4px;
}
.location a {
  color: #fbc50b;
}
.navbar-header-search {
  display: flex;
  justify-content: end;
  align-items: center;
}
.navbar {
  padding: 15px 34px;
  border-radius: 10px;
  height: 94px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--common-colour);
  &-links {
    display: flex;
    align-items: center;
  }
  &-search {
    width: 58px;
    height: 45px;
    margin-left: 40px;
    border-left: 1px solid #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    font-style: 18px;
    color: #fff;
  }
  &-search a {
    color: #fff;
    font-weight: 500;
    font-size: 18px;
  }
  &-dropdown {
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    position: relative;
  }
  &-header-search a {
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    position: relative;
  }
}
.navbar-links li a {
  display: block;
  text-decoration: none;
  color: #707070;
  transition: 0.4s all;
  padding-bottom: 10px;
  padding-top: 10px;
  text-align: left;
}
.navbar-links li > a {
  border-bottom: 5px solid transparent;
  color: white;
  text-transform: capitalize;
  font-size: 18px;
  font-weight: 500;
}
.navbar-links li.navbar-dropdown .dropdown {
  visibility: hidden;
  opacity: 0;
  position: absolute;
  top: 100%;
  transform: translatex(50px);
  left: 0;
  width: 230px;
  box-shadow: 0px 10px 10px 3px hsl(0deg 0% 0% / 16%);
  z-index: 111;
  transition: 0.4s all;
}
.navbar-links li:not(:last-child) {
  padding-right: 40px;
}
.navbar-links li.navbar-dropdown:hover .dropdown {
  visibility: visible;
  opacity: 1;
  transform: translateX(0);
}
.navbar-links li > a:hover {
  border-bottom: 5px solid #fbc50b;
}
.navbar-links li.navbar-dropdown .dropdown a {
  font-size: 16px;
  padding-left: 25px;
  padding-top: 15px;
  padding-bottom: 15px;
  font-weight: 700;
  border: 0;
  position: relative;
  text-transform: capitalize;
  color: #000;
  background-color: #fff;
}
.navbar-links li.navbar-dropdown .dropdown a:not(:last-child):before {
  content: "";
  z-index: 11;
  position: absolute;
  height: 1px;
  background-color: #58585829;
  width: 75%;
  bottom: 0;
}
.bar-menu {
  display: none;
  color: #fff;
}
.bar-menu i {
  font-size: 24px;
  margin-right: 20px;
}
.mobile-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 30%;
  height: 100%;
  background-color: #000;
  padding: 50px 40px 15px;
  z-index: 5;
  transition: 0.45s ease-in-out;
  transform: translateX(-101%);
  -webkit-transform: translateX(-101%);
  -moz-transform: translateX(-101%);
  -o-transform: translateX(-101%);
  overflow-y: auto;
  display: block;
}
.mobile-nav.open {
  transform: translateX(0) !important;
  z-index: 33333333;
  box-shadow: 3px 3px 39px -4px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 3px 3px 39px -4px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 3px 3px 39px -4px rgba(0, 0, 0, 0.75);
}
.mobile-nav > ul > li.menu-item-has-children.active:before {
  transform: rotate(90deg);
  color: var(--theme-colour);
}
.mobile-nav > ul li > a {
  font-size: 14px;
  line-height: 26px;
  text-transform: capitalize;
  color: #fff;
}
.res-log {
  margin-bottom: 30px;
}
.res-log img {
  width: auto;
  display: flex;
  align-items: flex-start;
}
.mobile-nav > ul > li {
  position: relative;
  border-bottom: 0px solid #d4d4d4;
  padding: 10px 0;
  display: block;
  text-align: left;
  font-family: "DM Sans", sans-serif;
}
.mobile-nav > ul > li:not(:last-child) {
  border-bottom: 1px solid #5b5b5b;
}
.mobile-nav #res-cross:before {
  content: "\f057";
  font-family: "Font Awesome 5 Free";
  display: inline-block;
  padding-right: 3px;
  vertical-align: middle;
  font-weight: 900;
  width: 35px;
  height: 35px;
  background-repeat: no-repeat;
  position: absolute;
  top: 15px;
  right: 20px;
  color: #fff;
  font-size: 28px;
}
.mobile-nav > ul > li.menu-item-has-children:before {
  color: #fff;
  position: absolute;
  top: 17px;
  right: 0;
  font-family: "Font Awesome 5 Free";
  content: "\f054";
  display: inline-block;
  padding-right: 3px;
  vertical-align: middle;
  font-weight: 900;
  font-size: 11px;
}
.mobile-nav > ul > li.menu-item-has-children > ul.sub-menu {
  padding-left: 25px;
  padding-top: 10px;
  padding-bottom: 5px;
  position: absolute;
  height: 0;
  opacity: 0;
  visibility: hidden;
  transform: translatey(15px);
  border-top: 1px solid #5b5b5b;
  margin-top: 8px;
}
.mobile-nav > ul > li.menu-item-has-children.active > ul.sub-menu{
  position: relative;
  height: auto;
  opacity: 1;
  visibility: visible;
  transform: translatey(0);
  transition: 0.5s;
}
.mobile-nav > ul > li > a {
  font-size: 16px;
  line-height: 30px;
  text-transform: capitalize;
  color: #fff;
  font-weight: 400;
}
.mobile-nav > ul > li.menu-item-has-children > ul.sub-menu li:before  {
  content: "";
  width: 6px;
  height: 6px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: -13px;
  background-color: var(--theme-colour);
}
#search-popup {
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100%;
  z-index: 99;
  margin-top: -540px;
  transform: translateY(-100%);
  background-color: rgba(0, 0, 0, 0.9);
  transition: all 1500ms cubic-bezier(0.86, 0, 0.07, 1);
  transition-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
}
#search-popup.search_active {
  transform: translateY(0%);
  margin-top: 0px;
}
#search-popup.search_active .close-search {
  visibility: visible;
  opacity: 1;
  transition-delay: 1500ms;
}
// ishlatib ko'ring
.fa-remove:before,
.fa-times:before,
.fa-xmark:before {
  content: "\f00d";
}
.search-popup .close-search {
  top: 6%;
  position: absolute;
  left: 94%;
  margin: 0 auto;
  border-radius: 50%;
  text-align: center;
  background-color: var(--theme-colour);
  width: 50px;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  transition: all 500ms ease;
  height: 50px;
  line-height: 50px;
  text-align: center;
}
.search-active .search-popup form {
  transform: scaleX(1);
  transition-delay: 1200ms;
}
.search-popup .form-group {
  position: relative;
  margin: 0px;
  overflow: hidden;
}
input .search-popup .form-group button {
  position: absolute;
  right: 30px;
  top: 0px;
  height: 70px;
  line-height: 70px;
  background: transparent;
  text-align: center;
  font-size: 24px;
  color: var(--common-colour);
  padding: 0;
  cursor: pointer;
  transition: all 500ms ease;
  border: none;
}
.search-popup .form-group button {
  position: absolute;
  right: 30px;
  top: 0px;
  height: 70px;
  line-height: 70px;
  background: transparent;
  text-align: center;
  font-size: 24px;
  color: var(--common-colour);
  padding: 0;
  cursor: pointer;
  transition: all 500ms ease;
  border: none;
}
.search-popup .form-group input {
  position: relative;
  display: block;
  font-size: 18px;
  line-height: 50px;
  color: #000000;
  height: 70px;
  width: 100%;
  padding: 10px 30px;
  background-color: #ffffff;
  -webkit-transition: all 500ms ease;
  -moz-transition: all 500ms ease;
  -ms-transition: all 500ms ease;
  -o-transition: all 500ms ease;
  transition: all 500ms ease;
  font-weight: 500;
  text-transform: capitalize;
  outline: none;
  border: 0;
  margin: 0;
  font-family: inherit;
}
.search-popup form {
  position: absolute;
  max-width: 700px;
  top: 50%;
  left: 15px;
  right: 15px;
  margin: -35px auto 0;
  transform: scaleX(0);
  transform-origin: center;
  background-color: #111111;
  -webkit-transition: all 300ms ease;
  -moz-transition: all 300ms ease;
  -ms-transition: all 300ms ease;
  -o-transition: all 300ms ease;
  transition: all 300ms ease;
  transform: scaleX(1);
  -webkit-transition-delay: 1200ms;
  -moz-transition-delay: 1200ms;
  -ms-transition-delay: 1200ms;
  -o-transition-delay: 1200ms;
  transition-delay: 1200ms;
}

@import "../assets/main.scss";
@include media($xl) {
}
@media (max-width: 1328px) {
  .navbar {
    padding: 8px 15px;
  }
  .navbar-links li:not(:last-child) {
    padding-right: 20px;
  }
  .navbar-search {
    margin-left: 20px;
  }
}
@media (max-width: 1200px) {
  .open {
    width: 50%;
  }
}
@media (max-width: 1148px) {
  .navbar-links li > a {
    font-size: 14px;
  }
  .navbar-header-search a {
    font-size: 14px;
  }
}
@media (max-width: 993px) {
  .navbar-links {
    display: none;
    position: absolute;
    left: 0;
    top: 0;
  }
  .inner-header {
    background-color: #007d3a;
  }
  .navbar-header-search {
    display: none;
  }
  .top-bar {
    display: none;
  }
  .bar-menu {
    display: block;
  }
  .navbar {
    display: flex;
    justify-content: space-between;
  }
  .nav {
    position: relative !important;
    background-color: #007d3a !important;
    width: 100% !important;
    z-index: 2 !important;
  }
}
@media (max-width: 768px) {
  .open {
    width: 70%;
  }
}
@media (max-width: 576px) {
  .open {
    width: 100%;
  }
}
</style>

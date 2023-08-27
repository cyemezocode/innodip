<template>
    <div class="block md:flex relative">
        <div class="hidden md:block w-full md:w-[20%] sticky top-0 h-[100vh] mobile-menu">
            <menuNav></menuNav>
        </div>
        <div class="w-[100%] md-[80%]">
        <headerNavVue @userData="getUser"></headerNavVue>
        <div class="p-4 justify-center content">
        <div class="flex flex-col md:flex-row flex-wrap items-center justify-between gap-4">
            <div class="flex items-center w-full md:w-auto px-2 md:px-0">
                <svg class="w-16 h-16 text-secondary" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                <h1 class="text-4xl text-gray-500">My Resume</h1>
            </div>
            <div class="w-full md:w-auto px-2 md:px-0">
            </div>
        </div>
        </div>
        <div class="grid p-4">
            <div class="rela-block page" id="resumePage" v-if="isLoaded">
<div class="rela-block top-bar bg-primary">
    <div class="caps name"><div class="abs-center">{{ profile.fname }} {{ profile.lname }}</div></div>
</div>
<div class="side-bar bg-secondary">
    <div class="mugshot">
        <div class="logo">
          <img :src="selectedFilePreview" alt="image">
        </div>
    </div>
    <p>Phone: {{ profile.phone }}</p>
    <p>Email Address: {{ profile.email }}</p>
    <p>Birth Date: {{ profile.dob }}</p>
    <p>National ID: {{ profile.nid }}</p>
    <p>Address: <span v-for="add in profile.address" :key="add">{{ add }} - </span></p><br>
</div>
<div class="rela-block content-container">
    <h2 class="rela-block caps title">Resume</h2>
    <div class="rela-block separator"></div>
    <!-- <div class="rela-block caps greyed">Profile</div> -->
    <p class="long-margin">{{ profile.headline }}</p>
    <div class="rela-block caps greyed">Experience</div>
                      <ol class="border-l border-neutral-300 dark:border-neutral-500">
                        <!--First item-->
                        <li v-for="(acad, key) in profile.workExperience" :key="key">
                          <div class="flex-start flex items-center pt-3">
                            <div
                              class="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
                            <p class="text-sm text-neutral-900">
                              {{ acad.from }} - {{ acad.to }}
                            </p>
                          </div>
                          <div class="mb-6 ml-4 mt-2">
                            <h4 class="mb-1.5 text-xl font-semibold">{{ acad.position }}</h4>
                            <p class="mb-3">
                              {{ acad.employer }}
                            </p>
                            <p class="mb-3">
                             Skills: <span class="text-sm">{{ acad.employer }}</span>
                            </p>
                          </div>
                        </li>
                      </ol>                
      <div class="rela-block caps greyed">Education</div>
      <div
                        v-for="(acad, key) in profile.academicProfile"
                        :key="key"
                      >
                        <div class="m-b30">
                          <div class="job-post-info">
                                <i class="fa fa-map-marker"></i> Institution:
                                {{ acad.school }}
                              <br />
                                <i class="fa fa-bookmark"></i> Qualification:
                                : {{ acad.specialization }}
                              <br />
                                <i class="fa fa-clock-o"></i> Graduation Year: 
                                {{ acad.graduated }}
                              <br />
                                <i class="fa fa-book"></i> Degree:
                                {{ acad.degreeObtained }}
                          </div>
                        </div>
                      </div>
    <div class="rela-block caps greyed">Reference</div>

                    <div v-for="(acad, key) in profile.workExperience"
                        :key="key">
                        <div class="m-b30">
                          <div class="job-post-info">
                                <i class="fa fa-map-marker"></i> Institution:
                                {{ acad.employer }}
                              <br />
                                <i class="fa fa-bookmark"></i> Position: 
                                {{ acad.refereePosition }}
                              <br />
                                <i class="fa fa-user"></i> Referee Name: 
                                {{ acad.refereeName }}
                              <br />
                                <i class="fa fa-envelope"></i> Email Address:
                                {{ acad.refereeEmail }}
                              <br />
                                <i class="fa fa-phone"></i> Phone Number: 
                                {{ acad.refereePhone }}
                              <br />
                          </div>
                        </div>
                      </div>
                      </div>
    
</div>
      </div>
      <pageFooterVue></pageFooterVue>

        </div>
    </div>
</template>

<script>
import headerNavVue from '../seeker/utils/headerNav.vue'
import menuNav from '../seeker/utils/menuNav.vue'
import pageFooterVue from '../seeker/utils/pageFooter.vue'
// import FormButton from '../utils/FormButton.vue';
import apiService from '../../assets/api/apiService.js'
    export default {
        name: 'profilePage',
        data(){
            return{
                username: 'cyemezo',
                profile:[],
                activeCat:'',
                isLoaded:false,
                baseUrl : 'http://innodip.rw:8004/',
                selectedFilePreview:''
            }
        },
        components:{
            headerNavVue,
            menuNav,
            pageFooterVue,
            // FormInput,
            // FormButton, 
        },
        mounted(){
            
            const btn = document.querySelector(".toggleMobile");
            const menu = document.querySelector(".mobile-menu");
            const content = document.querySelector(".content");

            btn.addEventListener("click", () => {
                menu.classList.toggle("hidden");
                content.classList.toggle("content");
            });
        },
        methods:{
            getUser(data){
              this.profile = JSON.parse(data);
              this.selectedFilePreview = this.baseUrl+this.profile.picture
              this.isLoaded = true;
              document.title=this.profile.fname+" Personal Information";
              this.profile.dob = apiService.calendarDate(this.profile.dod)
            },
            
            
          
        }
    }
</script>

<style scoped>

.job-time span {
  cursor: pointer;
}
.job-time.mr-auto span {
  background: #e65b65 !important;
  color: #fff;
}
ul {
  width: 100% !important;
}


* {
  box-sizing: border-box;
  transition: 0.35s ease;
}
.rela-block {
  display: block;
  position: relative;
  margin: auto;
}
.rela-inline {
  display: inline-block;
  position: relative;
  margin: auto;
}
.floated {
  display: inline-block;
  position: relative;
  margin: 0;
  float: left;
}
.abs-center {
  display: false;
  position: absolute;
  margin: false;
  top: 50%;
  left: 50%;
  right: false;
  bottom: false;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 88%;
}
body {
  font-family: 'Open Sans';
  font-size: 18px;
  letter-spacing: 0px;
  font-weight: 400;
  line-height: 28px;
  background: url("http://kingofwallpapers.com/leaves/leaves-016.jpg") right no-repeat;
  background-size: cover;
}
body:before {
  content: "";
  display: false;
  position: fixed;
  margin: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255,255,255,0.92);
}
.caps {
  text-transform: uppercase;
}
.justified {
  text-align: justify;
}
p.light {
  color: #777;
}
h2 {
  font-family: 'Open Sans';
  font-size: 30px;
  letter-spacing: 5px;
  font-weight: 600;
  line-height: 40px;
  color: #000;
}
h3 {
  font-family: 'Open Sans';
  font-size: 21px;
  letter-spacing: 1px;
  font-weight: 600;
  line-height: 28px;
  color: #000;
}
.page {
  width: 100%;
  max-width: 1200px;
  /* margin: 80px auto; */
  background-color: #fff;
  box-shadow: 6px 10px 28px 0px rgba(0,0,0,0.4);
}
.top-bar {
  height: 220px;
  /* background-color: #03396C; */
  color: #fff;
}
.name {
  display: false;
  position: absolute;
  margin: false;
  top: false;
  left: calc(350px + 5%);
  right: 0;
  bottom: 0;
  height: 120px;
  text-align: center;
  font-family: 'Raleway';
  font-size: 58px;
  letter-spacing: 8px;
  font-weight: 100;
  line-height: 60px;
}
.name div {
  width: 94%;
}
.side-bar {
  display: false;
  position: absolute;
  margin: false;
  top: 60px;
  left: 5%;
  right: false;
  bottom: 0;
  width: 350px;
  color: #fff;
  /* background-color: #2E55FA; */
  padding: 320px 30px 50px;
}
.mugshot {
  display: flex;
  position: absolute;
  margin: 0;
  justify-content: center;
  align-items: center;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  width: 210px;
}
.mugshot .logo {
  border-radius: 50%;
  overflow: hidden;
  width: 100%;
  aspect-ratio: 1/1;
}
.mugshot .logo img{
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.logo {
  display: false;
  position: absolute;
  margin: false;
  top: 0;
  left: 0;
  z-index: 100;
  margin: 0;
  color: #000;
}
.logo .logo-svg {
  height: 100%;
  width: 100%;
  stroke: #000;
  cursor: pointer;
}
.logo .logo-text {
  display: false;
  position: absolute;
  margin: false;
  top: 58%;
  right: 16%;
  cursor: pointer;
  font-family: "Montserrat";
  font-size: 55px;
  letter-spacing: 0px;
  font-weight: 400;
  line-height: 58.333333333333336px;
}
.social {
  padding-left: 60px;
  margin-bottom: 20px;
  cursor: pointer;
}
.social:before {
  content: "";
  display: false;
  position: absolute;
  margin: false;
  top: -4px;
  left: 10px;
  right: false;
  bottom: false;
  height: 35px;
  width: 35px;
  background-size: cover !important;
}
.social.twitter:before {
  background: url("https://cdn3.iconfinder.com/data/icons/social-media-2026/60/Socialmedia_icons_Twitter-07-128.png") center no-repeat;
}
.social.pinterest:before {
  background: url("https://cdn3.iconfinder.com/data/icons/social-media-2026/60/Socialmedia_icons_Pinterest-23-128.png") center no-repeat;
}
.social.linked-in:before {
  background: url("https://cdn3.iconfinder.com/data/icons/social-media-2026/60/Socialmedia_icons_LinkedIn-128.png") center no-repeat;
}
.side-header {
  font-family: 'Open Sans';
  font-size: 18px;
  letter-spacing: 4px;
  font-weight: 600;
  line-height: 28px;
  margin: 60px auto 10px;
  padding-bottom: 5px;
  border-bottom: 1px solid #888;
}
.list-thing {
  padding-left: 25px;
  margin-bottom: 10px;
}
.content-container {
  margin-right: 0;
  width: calc(95% - 350px);
  padding: 25px 40px 50px;
}
.content-container > * {
  margin: 0 auto 25px;
}
.content-container > h3 {
  margin: 0 auto 5px;
}
.content-container > p.long-margin {
  margin: 0 auto 50px;
}
.title {
  width: 80%;
  text-align: center;
}
.separator {
  width: 240px;
  height: 2px;
  background-color: #999;
}
.greyed {
  background-color: #ddd;
  width: 100%;
  max-width: 580px;
  text-align: center;
  font-family: 'Open Sans';
  font-size: 18px;
  letter-spacing: 6px;
  font-weight: 600;
  line-height: 28px;
}
@media screen and (max-width: 1150px) {
  .name {
    color: #fff;
    font-family: 'Raleway';
    font-size: 38px;
    letter-spacing: 6px;
    font-weight: 100;
    line-height: 48px;
  }
}
</style>
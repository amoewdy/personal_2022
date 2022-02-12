<template>
  <div id="app">
    <div class="nav">
        <div class="nav-title" onclick="window.location.href='/'" style="cursor: pointer;"><img src="./assets/muben logo 2.png" width="20rem">  SIXUAN LI</div>
        <ul>
            <li onclick="window.location.href='/'">WORK</li>
            <li onclick="window.location.href='/#/playground'">PLAYGROUND</li>
            <!-- <li ><a href="" @click="custormAnchor('project-overview')">WORK</a></li> -->

             <!-- <li onclick="https://drive.google.com/file/d/1PDsDDt2Ex-EwX7r8kiax3OM7ld3jfxjm/view?usp=sharing'">Resume</li> -->
            <!-- <li><a target="blank" style="text-decoration: none;" href="https://drive.google.com/file/d/1bODZzJw4iro1DvaifTJIBmCNg3S7XKlX/view?usp=sharing">RESUME</a></li> -->
            <li onclick="window.location.href='/#/about'">ABOUT</li> 
        </ul>
    </div>
    <router-view/>
    <div class="copyright">
        <div class="image-middle-container">
            <img src="./assets/muben logo 2.png" width="24px" hight="24px" style="margin: 20px 0" >
        </div>
        Designed &  Coded with  ♫  by Sixuan Li &copy; 2022
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted: function() {
        this.$nextTick(()=>[
                    this.custormAnchor(window.location.hash)
                ])
    },
  methods: {
    // custormAnchor:function(anchorName){ 
    //   var anchor = this.$el.querySelector(anchorName)
    //   console.log('get anchor')
    // //   if(anchor) {anchor.scrollIntoView(); }
    //     // chrome
    //     document.body.scrollTop = anchor.offsetTop;
    //     // firefox
    //     document.documentElement.scrollTop = anchor.offsetTop;
    //       }     
        }
    }


// add google statistics later
</script>

<style>
.recent-project .right-large h1{
    Font-weight:900;
    font-family: Source Sans Pro;
    font-style: normal;
    font-size: 36px;
    line-height: 50px;
    letter-spacing: 0.1em;
    margin-bottom: 0;

}
.recent-project .right-large h2{
font-family: Source Sans Pro;
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 32px;
/* or 133% */

letter-spacing: 0.1em;
    /* margin-top:-10px; */
}
@media (max-width: 1100px) {
.recent-project .right-large h1{
    font-size: 24px;
}
.recent-project .right-large h2{
    font-size:18px;
    line-height: 24px;
}
}

.recent-project .right-large .tags{
    margin-top:2px;
}
.recent-project .right-large .tags span{
    display: inline-block;
    margin-bottom: 2px;
    margin-right:6px;
    font-family: Source Sans Pro;
    letter-spacing: 0.1em;
    font-weight: normal;
    font-size: 16px;
}
.recent-project .right-large .tags .tag{
    background-color: #F2F2F2;
    border-radius: 2px;
    padding:4px 10px;
    /* color: #4F4F4F; */
    color: #000000;
}
.company-logo-container{
    display:block;
}

.recent-content .company-logo{
    margin: 10px auto;
    width:64px;
    display: block;
}
@media (max-width: 1200px) {
     .recent-content .company-logo{
    display:none;
}   
}

.recent-content .partner{
    margin: auto;
    padding:0 60px;
    font-size: 17px;
    text-align: center;
    line-height: 26px;
    font-family: Source Sans Pro;
    letter-spacing: 0.1em;
    margin-top:1rem;
    /* margin-bottom:0.5rem; */
    color:#333333;
}
@media (max-width: 1200px) {
.recent-content .partner{
    padding:0;
    font-size: 14px;
}
.recent-content .company-logo{
    width:40px;
}
.recent-project .right-large .tags .tag{
    background-color: #F2F2F2;
    border-radius: 2px;
    padding:2px 6px;
    color: #000000;
}
.recent-project .right-large .tags span{
    margin-bottom: 0px;
    margin-right:4px;
    font-family: Source Sans Pro;
    letter-spacing: 0.1em;
    font-weight: normal;
    font-size: 12px;
}

}



#app {
  font-family: Source Sans Pro;
letter-spacing: 0.1em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #000000;
  margin: 3rem 0rem 0rem 0rem;
}
.container{
    margin: 10rem 0rem 5rem 0rem;
    float: middle;
}
.icon {
    width: 1.2em;
    height: 1.2em;
    vertical-align: -0.15em;
    /* fill: currentColor;  */
    fill: rgb(190, 190, 190);
    overflow: hidden;
    display: inline;
    margin: 0.6rem 0.7rem 0.2rem 0.1rem;
    position:relative;
    float:left;
}
a {
    color: #000000;
}
.nav {
    /* added for fixed header*/
    display:block;

    /* position: relative; */
    margin: 0rem 1rem 0rem 1rem;
    padding-top:2rem;
    /* height: 10rem; */
    position: fixed;
    margin:auto;
    top:0rem;
    /* background-color: #ffffff; */
    /* width: 96vw;  */
    width: 100vw;
    z-index: 1;
}


body{
  margin:0;
  padding:0;
}

.nav .nav-title {
    position: absolute;
    left: 18rem;
    /* float: left; */
    height: 3rem;
    font-family: Source Sans Pro;
    letter-spacing: 0.3em;
    vertical-align: middle;
    /* font-family: 'Open Sans', sans-serif; */
    /* font-family: 'Rosario', sans-serif; */
    /* font-family: 'Arsenal', sans-serif;  */
    line-height: normal;
    font-size: 24px;
    color: #202020;
    font-style: normal;
    font-weight: 900;
    

}
.nav >ul{
    list-style-type:none;
    float: right;
    right: 0;
    margin-right: 18rem;
    font-weight: normal;
    font-family: Source Sans Pro;
    letter-spacing: 0.1em;
    font-size: 14px;
    color: #000000;
}
.nav >ul >li {
    font-style: normal;
    font-weight: 700;
    letter-spacing: 0.1em;
    margin: 0 2rem;
    text-decoration: none;
    list-style: none;
    display: inline;
    transition: 0.2s;
    font-size: 14px;
    color:#202020;
    font-family: 'Source Sans Pro', sans-serif;

}
.nav >ul >li:hover {
    color: #959595;
    cursor: pointer;
    /* font-weight: 900; */
    transition: 0.2s;
}

.copyright{
    float:center;
    padding: 4rem 0;
    text-align: center;
    font-size: 16px;
    font-family: Source Sans Pro;
    letter-spacing: 0.1em;
    /* font-family: Myriadpro; */
    color: #333333; 
    margin-top: 1rem;
}
.image-middle-container{
    text-align: center;
}
figcaption{
    font-weight: 400;
    font-size: 14px;
    line-height: 1.4;
    color: rgba(0,0,0,.68);
    text-align: center;
    font-family: Source Sans Pro;
    letter-spacing: 0.1em;
}
blockquote{
    margin-top:30px;
    margin-bottom:30px;
    font-size: 24px;
    line-height: 1.6;
    /* letter-spacing: 0.006em; */
    font-weight: 400;
    font-style: italic;
    font-family: Source Sans Pro;
    letter-spacing: 0.1em;
    color: rgba(0,0,0,.68);
}
@media (max-width: 40em)  {
  /* Pull out the header and footer */
    #app {
  margin: 2rem 0rem 0rem 0rem;
    }

  .nav{
    margin:0;
    position: relative;
    top:0rem;
    padding-top:1rem;
  }


  .nav .nav-title {
    left: 0rem;
    font-size: 30px;
  }
  .nav >ul{
    list-style-type:none;
    right: 0rem;
    margin-right: 0rem;
}
.nav >ul >li {
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: 700;
    letter-spacing: 0.1em;
    margin: 0 0.5rem;
}
  .copyright {
    text-align: center;
    margin: 0 auto;
    bottom: 0;
    float:center;
    padding: 4rem 0; 
    margin-top: 1rem;
  }
  /* Start the vertical centering */
  .image-middle-container {
    vertical-align: middle;
  }
  /* Handle the widths */
  .nav {
    width: 100%; /* Must be percentage or pixels for horizontal alignment */
  }
}

@media (max-width: 70em)and (min-width: 40em) {
  /* Pull out the header and footer */
    .nav{
      margin:auto;
  }
  .nav .nav-title {
    left: 5rem;
  }
    .nav >ul{
    list-style-type:none;
    right: 0rem;
    margin-right: 5rem;
    }
  
  .copyright {
    text-align: center;
    margin: 0 auto;
    bottom: 0;
  }
  /* Start the vertical centering */
  .image-middle-container {
    vertical-align: middle;
  }
  /* Handle the widths */
  .nav {
    width: 100%; /* Must be percentage or pixels for horizontal alignment */
  }
}

.parent{
    display: flex;
    margin:4rem;
}
.left{
    /* flex: 0 0 100px; */
    flex:1;
    margin-right: 4rem;
    }
.info{
    margin-top:3rem;
    display: flex;
}
.left .info .left-left{
    flex: 0 0 100px;
}
.left .info .left-right{
    flex: 1;
    margin-right: 4rem;
}
.right{
    /* height: 100px; */
    flex: 0 0 200px;
    /* background-color: #f8f8f8; */
    background:linear-gradient(to right,#ffffff 0%,#ffffff 10%, #f7f7f7 0, #f7f7f7 60%,#ffffff 0%,#ffffff 20%);
    background-size: 190px;
}
.dark-page{
    position: relative;
    background-color: #f7f7f7;
    padding: 20px 20px 60px;
}
.light-page{
    position: relative;
    background-color: #ffffff;
    padding: 20px 20px 60px;
}
.first-page{
    position: relative;
    background-color: #fff;
    padding: 20px 20px 60px;
}
.paragraph{
    margin: 0rem 0rem;
}


.bannner{
    width: 100%;
    /* margin-top: 60px; */
}
.child + .child{
    margin-left: 20px;
}
.content-container-title{
    max-width:890px;
    margin: auto;
}
.content-container{
    max-width:800px;
    margin: auto;
}
.content-container-large{
    max-width:1100px;
    margin: auto;
    float: middle;
    vertical-align: middle;
    text-align: center;
}
.title{
    margin-top: 40px;
    margin-bottom: 30px;
    padding-left: 0px;
    vertical-align: left;
    display:flex;
    /* border-left: 20px dashed #DEDEDE; */
}
.title .title-text{
        flex: 1;
}
.title .title-text>h4{
    margin: 0;
    font-weight: bold;
    font-family: Source Sans Pro;
    font-size: 29px;
    color:#9d9d9d;
    vertical-align: left;
}
.title .title-text>h5{
    margin-top: 0.1rem;
    font-weight: bold;
    font-family: Source Sans Pro;
    letter-spacing: 0.1em;
    font-size: 20px;
    color:#000000;
    vertical-align: left;
}
.title .title-color1{
    margin: 8px 19px 20px 0;
    flex: 0 0 17px;
    background:linear-gradient( #e2e2e2 0, #e2e2e2 27%, #f7f7f7 0%, #f7f7f7 73%)
}
.title .title-color2{
    margin: 8px 19px 20px 0;
    flex: 0 0 17px;
    background:linear-gradient( #ebebeb 0, #ebebeb 27%, #ffffff 0%, #ffffff 73%)
}
.title .title-color3{
    margin: 8px 19px 20px 0;
    flex: 0 0 17px;
    background:linear-gradient( #cecece 0, #cecece 27%, #e0e0e0 0%, #e0e0e0 73%)
}
.ending-pointer{
    text-align: right;
    margin: 20px 40px;
}

.ending-pointer>div{
    display: inline-block;
    line-height: 30px;
}

.ending-pointer>div:hover{
    cursor: pointer;
}
span{
    font-weight: normal;
    font-family: Source Sans Pro;
    letter-spacing: 0.1em;
    font-size: 16px;
    color: #000000;
    margin: 10px 0 20px 0;
    text-align:left;
}
.next{
    font-family: Source Sans Pro;
    font-size: 20px;
    font-weight: bold;
    /* color: #9d9d9d; */
    color:#afafaf;
}

.project{
    font-size: 24px;
    font-weight: bold;
}



</style>

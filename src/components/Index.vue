<template>
    <div class = 'container-snow-large' >
        <div class ="animated fadeIn delay-0.5s">
            <div class='intro'>
                <div class='part1'>
                    <img src="/static/Title image.png" id="img-snow" style="display:none"></img>
                    <canvas id="canvas"  class="animated fadeIn delay-0.8s"></canvas>
                </div>
            <div class='part2'>
                <h1>
                I solve complex puzzles.</h1>
                <div class='content'>
                    <h2 class="longtext">
                 Hi, I’m Sixuan, a product designer with 2 years of experience in designing and launching SaaS products.
                    </h2>
                    <h2 class="longtext">
                        With strong technical skills and product thinking, I strive to create innovative, elegant, and delightful solutions in the tech domain.
                    </h2>
                    <h2 class="longtext">
                        Currently, I work at 
                    <a style="text-decoration: none; color: rgb(0, 0, 0);border-bottom:1px solid rgb(160, 160, 160);" href="https://www.usertesting.com/" target="blank">
                    UserTesting</a>, bringing customer empathy to more organizations.
                    </h2>
                </div>
                <div class='icon-element'>
                <ul>
                <li><a class='icon' href="Mailto:sixuanli@outlook.com" target="blank"><i class="fa fa-envelope"></i></a></li>
                <li><a class='icon' href="https://github.com/amoewdy" target="blank"><i class="fa fa-github"></i></a></li>
                <li><a class='icon' href="https://www.linkedin.com/in/sixuan-li-69a171155/" target="blank"><i class="fa fa-linkedin"></i></a></li>
                <li><a class='icon' href="https://medium.com/@sixuanli" target="blank"><i class="fa fa-medium"></i></a></li>
                </ul>
                </div>

            </div>
        </div>
        <!-- <div class='content-left'>
            <h2 class="longtext">
                 “The worthwhile problems are the ones you can really solve or help solve, the ones you can really contribute something to…” 
                <br/>—Richard Feynman
            </h2>
        </div> -->
    </div>
    <div class="imageContainer">
    <div class="project-menu" style="margin-top:-5rem">
        <label @click="custormAnchor('#project-recent')"> RECENT WORK ↓ </label>
    </div>

    <a id="project-recent"></a>
    <!-- it seems it's strange to give that much self-intro in homepage. -->
    
    <!-- <div class='recent-project' style='margin-top:2rem;margin-bottom:0rem'>
    <div class='self-intro'>
        <p style='line-height: 28px;font-family:Lato, sans-serif;margin-top:1.4rem;margin-bottom:0rem;'>
            I design elegant solutions in the technical domains. 
            <br>I enjoy engaging with users and advocating for users.
            <br>I care about the tradeoff between desirability and feasibility. 
            <br>
            <br>I recently worked as a Design Technologist at Punchcut. 
            <br>I will join UserTesting as a Product Design Intern this summer.
        </p>
    </div>
    </div> -->

    <div class='recent-project'>
        <div class="left-large">
            <div class="triggerOnScroll">
                <img class="itemImg" style="cursor:default" src="/static/home/Interactive Path Flow.png" alt="" width="100%" /> 
            </div>
        </div>
        <div class='right-large' id='recent-border' style='position: relative;'>
                        <h1>Interactive Path Flow <img src="/static/home/icons/lock.png" width="32rem"></h1>
                        <h2 class="subtitle">
                        Vision development
                        </h2>
                        <h2 >Revealing insights from test videos automatically</h2>
                        <div class='tags'>
                            <span class="tag">Data-driven design</span> 
                            <span class="tag">Machine intelligence</span> 
                            <span class="tag">HCI research</span>
                        </div>
                         <div class='recent-content'>
                            <!-- <div class="company-logo-container">
                            <img class="company-logo" src="/static/home/JBL_Logo.png"/>
                            </div>
                            <p class="partner"> <b>Partner with HARMAN JBL Lifestyle Division</b>
                            </p> -->
                            <h2 style="color:#9d9d9d" >Read more</h2>
                            <h2 class="subtitle">
                            <a style="text-decoration:none;border-bottom:1px solid rgb(160, 160, 160); cursor: pointer;" href="https://www.usertesting.com/blog/instant-insight" target="blank" >
                            Identify takeaways faster with instant insight
                            </a><br>
                            <a style="text-decoration:none;border-bottom:1px solid rgb(160, 160, 160); cursor: pointer;" href="https://www.usertesting.com/blog/machine-learning-visualizations-sentiment-path-intent-path" target="blank" >
                            Save time with ML-powered data visualizations
                            </a>
                            </h2>

                        </div>
        </div>
    </div>



    <div class='recent-project'>
        <div class='right-large' style='position: relative;'>
            <h1>Video Player <img src="/static/home/icons/lock.png" width="32rem"></h1>
                <h2 class="subtitle">
                Redesign
                </h2>
                <h2 >Helping users analyze test videos more efficiently</h2>
                <div class='tags'>
                    <span class="tag">Web</span>    
                    <span class="tag">User research</span>
                    <span class="tag">End-to-end</span> 
                    <span class="tag">Design iteration</span> 
                </div>
                <div class='recent-content'>
                    <!-- <div class="company-logo-container">
                         <img class="company-logo" style="width:180px;margin-left:0px;margin-bottom:6px" src="/static/home/UT_logo.png"/>
                    </div> -->
                    <p class="partner" style="padding-left:0; text-align: left;"> 
                        <h2 class="subtitle" onclick="window.location.href='/#/usertesting'">
                        <a style="border-bottom:1px solid rgb(160, 160, 160); cursor: pointer;">
                        Case Study Preview
                        </a>
                        </h2>
                    </p>            
                </div>
        </div>
        <div class="left-large">
            <div class="triggerOnScroll">
                <img class="itemImg" style="cursor:default" src="/static/home/Video Player.png" alt="" width="100%"/> 
            </div>
        </div>
    </div>

    <div class='recent-project'>
        <div class="left-large">
            <div class="triggerOnScroll">
                <img class="itemImg" src="/static/home/harmonica2.png" alt="" width="100%"  onclick="window.location.href='/#/harmonica'"/> 
            </div>
        </div>
        <div class='right-large' id='recent-border' style='position: relative;'>
                        <h1>Harmonica</h1>
                        <h2 class="subtitle">
                        Partner with HARMAN, JBL Lifestyle Division
                        </h2>
                        <h2 >Enhanced audio experience with ambient awareness</h2>
                        <div class='tags'>
                            <span class="tag">Audio experience</span> 
                            <span class="tag">User research</span> 
                            <span class="tag">Co-creation</span>
                            <span class="tag">Machine learning</span>    
                            <span class="tag">Product management</span>
                        </div>
                         <div class='recent-content'>
                            <!-- <div class="company-logo-container">
                            <img class="company-logo" src="/static/home/JBL_Logo.png"/>
                            </div>
                            <p class="partner"> <b>Partner with HARMAN JBL Lifestyle Division</b>
                            </p> -->
                            
                        </div>
        </div>
    </div>

    <div class='recent-project'>
        <div class='right-large' style='position: relative;'>
            <h1>A-watch</h1>
                <h2 class="subtitle">
                    Partner with School of Nursing, University of Washington
                </h2>
                <h2 >Child Asthma Management Toolkit</h2>
                <div class='tags'>
                    <span class="tag">IoT</span>    
                    <span class="tag">Product design</span>
                    <span class="tag">Front-end</span> 
                    <span class="tag">Data visualization</span> 
                </div>
                <div class='recent-content'>
                    <!-- <div class="company-logo-container">
                    </div> -->
                    <!-- <p class="partner" style="padding:0 20px 0 0;text-align: left;"> <b>Partner with School of Nursing, University of Washington</b>
                    </p>             -->
                    <!-- <p class="partner" style="padding-left:0; text-align: left;" > <b>Partner with School of Nursing University of Washington</b>
                    </p>               -->
                </div>
        </div>
        <div class="left-large">
            <div class="triggerOnScroll">
                <img class="itemImg" src="/static/home/a-watch.png" alt="" width="100%"  onclick="window.location.href='/#/camt'"/> 
            </div>
        </div>
    </div>

    <div class='recent-project'>
        <div class="left-large">
            <div class="triggerOnScroll">
                <img class="itemImg" src="/static/home/sketch slicer 2.png" alt="" width="100%"  onclick="window.location.href='/#/sketchslicer'"/> 
            </div>
        </div>
        <div class='right-large' id='recent-border' style='position: relative;'>
                        <h1>Sketch slicer</h1>
                        <h2 class="subtitle">
                        Internal tool
                        </h2>
                        <h2 >A productivity tool that helps get your design assets faster</h2>
                        <div class='tags'>
                            <span class="tag">Web development</span> 
                            <span class="tag">React</span>    
                            <span class="tag">OpenCV</span>
                            <span class="tag">Python</span>
                            <span class="tag">AWS Lambda</span>  
                            <span class="tag">API Gateway</span>   
                        </div>
                         <div class='recent-content'>
                            <!-- <div class="company-logo-container">
                            <img class="company-logo" style="width:120px;margin:10px auto" src="/static/home/PCT_Logo.png"/>
                            </div>
                            <p class="partner"> <b>Design Technologist Internship</b>
                            </p>     -->
                        </div>

        </div>
    </div>


    <div class='recent-project'>
        <div class='right-large' style='position: relative;'>
            <h1>Phone backup <img src="/static/home/icons/lock.png" width="32rem"> </h1>
                <h2 class="subtitle">
                    Client project
                </h2>
                <h2 >A holistic cloud backup solution for Andoird users</h2>
                <div class='tags'>
                    <span class="tag">Mobile App</span>
                    <span class="tag">Web Portal</span> 
                    <span class="tag">Interaction Design</span> 
                </div>
                <div class='recent-content'>
                    <!-- <div class="company-logo-container">
                         <img class="company-logo" style="width:50px;margin-left:10px;margin-bottom:6px" src="/static/home/Lock_Logo.png"/>
                    </div>
                    <p class="partner" style="padding-left:0; text-align: left;"> <b>Internship at Punchcut. Please contact me if you are interested in this story : )</b>
                    </p>            
             -->
                    <h2 class="subtitle" onclick="window.location.href='/#/backupUX'">
                        <a style="border-bottom:1px solid rgb(160, 160, 160); cursor: pointer;">
                        Case Study Preview
                        </a>
                    </h2>
                </div>
        </div>
        <div class="left-large">
            <div class="triggerOnScroll">
                <img class="itemImg" style="cursor:default" src="/static/home/gam_sol.png" alt="" width="100%"/> 
            </div>
        </div>
    </div>


    

    <!-- <a id="project-overview"></a> -->
    
    </div>
  </div>
</template>

<script>
export default {
    name: 'image',
    data () {
        return {
        seen:false,  
        imgSrc: '../static/home/Title image.png',
        showAll:true,
        projectType:'',
        fontWeightAll:700,
        fontWeightDesign:300,
        fontWeightBuild:300,
        fontWeightCraft:300,
        }
    },
    mounted: function() {
        this.snow();
        this.indexAnimation();
        // this.changeCanvas();
    },
    created() {  
        var delayInMilliseconds = 800;
        setTimeout(function() {
            document.body.removeChild(document.getElementById('Loading'))   
        }, delayInMilliseconds); 
    },
    methods: {
        // IndexImageMoveIn:function(){
        //     this.seen = ture;
        // },
        // IndexImageMoveOut:function(){
        //     this.seen = false;
        // },
        custormAnchor:function(anchorName){ 
            var anchor = this.$el.querySelector(anchorName)
            console.log('get anchor')
            //   if(anchor) {anchor.scrollIntoView(); }
                // chrome
                // document.body.scrollTop = anchor.offsetTop;
                // document.body.animate({scrollTop: anchor.offsetTop},'slow');
                $('html,body').animate({scrollTop: anchor.offsetTop},'slow');
                // firefox
                // $('html,body').animate({scrollTop: anchor.offsetTop},'slow');
                document.documentElement.scrollTop = anchor.offsetTop;
          },
        indexAnimation:function(){
            const sections = document.querySelectorAll('.triggerOnScroll');
            const observerConfig = {
            root: null,
            // rootMargin: '600px 0px 0px',
            threshold: 0
            };
            const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                entry.target.classList.add('active');
                } else {
                entry.target.classList.remove('active');
                }
            });
            }, observerConfig);

            sections.forEach(section => {
            observer.observe(section);
            });
        },
        snow:function(){
            // (function() {
            //     var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame ||
            //     function(callback) {
            //         window.setTimeout(callback, 1000 / 60);
            //     };
            //     window.requestAnimationFrame = requestAnimationFrame;
            // })();

            var flakes = [],
            canvas = document.getElementById("canvas"),
            ctx = canvas.getContext("2d"),
            flakeCount = 120,
            mX = -100,
            mY = -100
            // canvas.width = 0.806* window.innerWidth;
            // canvas.height = 0.550* window.innerHeight;
            canvas.width = window.innerWidth;
            canvas.height = 0.74*window.innerHeight;
            // var imgs = document.getElementById('img-snow');
            // ctx.drawImage(imgs,0,0,canvas.width,canvas.height);
            // var imgs = new Image();
            // imgs.src = "/static/snowBackgroudLarge.png";
            // window.onload = function(){
            // ctx.drawImage(imgs,canvas.width,canvas.height);
            // var bg = ctx.createPattern(imgs,"no-repeat");
            // var bg = ctx.drawImage(imgs,"no-repeat");
            // ctx.fillStyle = bg;
            // ctx.fillRect(0,0,canvas.width,canvas.height);
            // };


            function snow2() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                for (var i = 0; i < flakeCount; i++) {
                    var flake = flakes[i],
                        x = mX,
                        y = mY,
                        minDist = 250,
                        x2 = flake.x,
                        y2 = flake.y;

                    var dist = Math.sqrt((x2 - x) * (x2 - x) + (y2 - y) * (y2 - y)),
                        dx = x2 - x,
                        dy = y2 - y;

                    if (dist < minDist) {
                        var force = minDist / (dist * dist),
                            xcomp = (x - x2) / dist,
                            ycomp = (y - y2) / dist,
                            deltaV = force / 2;

                        flake.velX -= deltaV * xcomp;
                        flake.velY -= deltaV * ycomp;

                    } else {
                        flake.velX *= .98;
                        if (flake.velY <= flake.speed) {
                            flake.velY = flake.speed
                        }
                        flake.velX += Math.cos(flake.step += .05) * flake.stepSize;
                    }
                    ctx.fillStyle = "rgba(255,255,255," + flake.opacity + ")";
                    flake.y += flake.velY;
                    flake.x += flake.velX;
                        
                    if (flake.y >= canvas.height || flake.y <= 0) {
                        reset(flake);
                    }


                    if (flake.x >= canvas.width || flake.x <= 0) {
                        reset(flake);
                    }

                    ctx.beginPath();
                    ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);
                    ctx.fill();
                }
                requestAnimationFrame(snow2);
            };

            function reset(flake) {
                flake.x = Math.floor(Math.random() * canvas.width);
                flake.y = 0;
                flake.size = (Math.random() * 3) + 2.4;
                flake.speed = (Math.random() * 1) + 1.1
                flake.velY = flake.speed;
                flake.velX = 0;
                // flake.opacity = (Math.random() * 0.5) + 0.6;
                flake.opacity = 1;
            }

            function init() {
                for (var i = 0; i < flakeCount; i++) {
                    var x = Math.floor(Math.random() * canvas.width),
                        y = Math.floor(Math.random() * canvas.height),
                        size = (Math.random() * 3) + 2.3,
                        speed = (Math.random() * 1) + 1.1,
                        // opacity = (Math.random() * 0.5) + 0.5;
                        opacity = 1;

                    flakes.push({
                        speed: speed,
                        velY: speed,
                        velX: 0,
                        x: x,
                        y: y,
                        size: size,
                        stepSize: (Math.random()) / 30,
                        step: 0,
                        opacity: opacity
                    });
                }
            }


            canvas.addEventListener("mousemove", function(e) {
                let rect = canvas.getBoundingClientRect();
                mX = e.clientX;
                mY = e.clientY;
                mX = mX - rect.left * (canvas.width/rect.width);
                mY = mY - rect.top * (canvas.height/rect.height);
            });

            window.addEventListener("resize",function(){
                // canvas.width = window.innerWidth;
                // canvas.height = window.innerHeight;
                canvas.width = window.innerWidth;
                canvas.height = 0.74*window.innerHeight;

            })
            init();
            snow2();
        }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
// $zease: cubic-bezier(0.165, 0.84, 0.44, 1);
$zease: cubic-bezier(0.12, 0.6, 0.2, 1);
$easeOutBack: cubic-bezier(0.175, 0.885, 0.32, 1.275);

.triggerOnScroll{
  opacity: 0;
  will-change: transform, scale, opacity;
  transform: translateY(3rem) scale(0.93);
  transition:0.8s $zease;
}
.active{
  opacity: 1;
  transform: translateY(0) scale(1);
  }


.container{
    margin: 10rem 2rem 5rem 2rem;
    float: middle;
}
.container-snow-large{
    margin: 2rem 2rem 6rem 0rem;
    float: middle;
}
.icon-elements{
  margin-bottom:100px;
}
ul{
//   width:400px;
//   margin:0 auto;
    margin-top:0rem;
  vertical-align:left;
  padding:0px;
    content: "";
    display: table;
    clear: both;
}
ul:after {
    content: "";
    display: table;
    clear: both;
  }

  li{
    list-style:none;
    float:left;
    margin:5px 5px 10px 0px;
    backface-visibility:hidden;
  }
  a.icon{
    color:#C4C4C4;
    padding:0px 10px 20px 10px;
    border:1px solid #C4C4C4;
    /* border-radius:50px; */
  }
 
  .fa-facebook{
    padding:0px 4px 3px 3px;
  }
  .fa-dribbble{
    padding:0px 2px 3px 2px;
  }
  .fa-envelope{
    padding:0px 2px 3px 2px;
  }
  .fa-linkedin{
    padding:0px 2px 3px 3px;
  }
  .fa-github{
    padding:0px 2px 3px 2px;
  }
  .fa-medium{
    padding:0px 2px 3px 2px;
  }

a:hover{
    color:#000000 !important;
    border-color:#000000 !important;
    transition: 0.8s ease;
}

a:hover i{
    -webkit-transform:scale(1.4);
    -moz-transform:scale(1.4);
    -o-transform:scale(1.4);
    -ms-transform:scale(1.4);
    transform:scale(1.4);
    color:#000000;
    transition: 0.3s ease;
}
.project-menu{
    // margin:auto;
    text-align: center;
    float:middle;
    margin-bottom: 6rem;
}

.part2 h1{
    font-weight: 900;
    line-height: 60px;
    letter-spacing: 0.1em;
    /* letter-spacing:2px; */
    font-family: Source Sans Pro;
    font-size: 56px;
    color: #000000;
    margin: 0px 0 0px 0px;
    text-align:left;
    // text-transform:uppercase;
}
h1 b{
    background-image: linear-gradient(180deg,transparent 70%,#3F67FF 0);
    transition: background-size .4s ease;
}

//for previous version
// h1{
//     font-weight: 900;
//     /* letter-spacing:2px; */
//     font-family: 'Lato', sans-serif;
//     font-size: 38px;
//     color: #202020;
//     margin: 10px 0 12px 0px;
//     text-align:left;
//     letter-spacing:16px;
//     text-transform:uppercase;
// }

p{
    font-family: Source Sans Pro;
    margin:20px 20px 20px 0px;
    line-height: 29px;
    font-size: 16px;
    letter-spacing: 0.05em;
    font-weight: 500;
    color: #000000;
    text-align:left;
    /* margin-bottom:5rem; */
}
h2{
    font-family: Source Sans Pro;
    // font-family: Lora;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0.1em;
    color: #000000; 
    margin:20px 30px 0 0 ;
    text-align:left;
}
h2.longtext{
font-family: Source Sans Pro;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 32px;
/* or 156% */
letter-spacing: 0.1em;
color: #000000;
margin:10px 80px 10px 0;
}
h2.subtitle{
    font-family: Source Sans Pro;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 32px;
/* or 156% */
letter-spacing: 0.1em;
color: #000000;
margin:0;
}

h3{
    font-weight: 600;
    letter-spacing:0.1em;
    font-family: Source Sans Pro;
    font-size: 20px;
    color: #000000; 
    // color: rgb(0, 0, 0);
    margin:12px 0 2px 0 ;
    letter-spacing:1.2px;
    text-align:left;
}
.part1{
    width:100%;
    z-index:-1 !important;
}
.part1 .icon-container{
    margin-top:1rem;
}
.part2{
    float:right;
    position:absolute;
    margin:auto;
    margin-top:-38rem;
    margin-left:56%;
    margin-right:6%;
}
.part2 .content{
    margin:20px 0 20px 0;
}
.content-left{
    float:left;
   margin:-180px 0 20px 12%; 
   width:44%;
}
.intro{
    position:relative;
    margin: 12rem 0rem 5rem 0rem;
    float: middle;
}
i{
    float:left;
    margin: 0.8rem 0.5rem 0 0;
}
p{
    margin-top: 0.2rem !important;
    // line-height: 29px;
    font-size: 17px;
    letter-spacing: 0.04em;
    font-weight: 300;
    // font-weight: lighter;
    color: #000000;
    text-align:left;
}
label{
    font-family:Source Sans Pro;
    font-size: 18px;
    color: #000000;
    letter-spacing: 0.1em;
    font-weight: 800;
    margin-bottom: 5rem;
}
label:hover{
    color: #BDBDBD;

}


#canvas{
    /* background-image: url('/static/snowBackgroundFigma.png');    */
    background-image: url('/static/Title image.png');   
    background-size:     cover;                      
    background-repeat:   no-repeat;
    background-position: center center;
    // width:450px; 
    // width : 896px; 
    // width : 1075px;
    // // // height:611px; 
    // height:733px;
    width : 100%;
    // height :100%;
}
.imageContainer{
    margin-top:80px;
    margin-left:2rem;
    float:medium;
}
#root {
    margin:auto;
     width: 350px;
     column-count: 2;
     column-width: 120px;
     column-gap: 10px;
}
/* @media (max-width: 90em) and (min-width: 80em) {
    .part1{
    text-align:center;
    margin: 0 auto;
    }
    .part2{
    text-align:center;
    margin: 0 auto;
}
} */
@media (max-width: 60em) and (min-width: 50em) {
    // .part1{
    // float:none;
    // text-align:center;
    // margin: 2rem 2rem 2rem 2rem;
    // }
    .item-blank {
    display: none;
    margin-bottom: 5px;
    pointer-events: none;
    cursor: default;
    opacity: 0.6;
    }

    .recent-project{
    display: flex;
    width:60%;
    margin:2rem auto;
    }
    .left-large{
        flex:2.5;
        margin-right: 3%;
    }
    .right-large{
        flex:0.4;
        // flex: 0 0 385px;
    }
    


    .part1 .icon-container{
    margin-top:1rem;
    }
    .part2{
    float:right;
    position:absolute;
    margin:auto;
    margin-top:-30rem;
    margin-left:34%;
    }
    
//     .part2{
//     display:block;
//     float:none;
//     text-align:center;
//     margin: auto;
// }
    .container{
    margin: 12rem 0rem 5rem 0rem;
    float: middle;
}
}
@media (max-width: 40em){
    .part1{
    display:none;
    }
    .part2{
    // float:right;
    display:block;
    position:relative;
    margin:auto;
    margin-top:2rem;
    margin-bottom:2rem;
    margin-left:10%;
    }
    label{
    font-size: 16px;
    }
}

@media (max-width: 50em)  {

    #root { 
     margin:auto;
     width: 320px;
     column-count: 1;
     column-width: 150px;
     column-gap: 10px;
    } 
    .part1 .icon-container{
    margin-top:1rem;
    }   

    // .part2{
    // // float:right;
    // float:right;
    // position:absolute;
    // margin:auto;
    // margin-top:-10rem;
    // margin-left:34%;
    // }
    .part2{
    display:block;
    position:relative;
    margin:auto;
    margin-top:2rem;
    margin-bottom:2rem;
    margin-left:10%;
    }
    .container{
    margin: 5rem 0rem 5rem 0rem;
    float: middle;
}
//     .intro{
//     margin: 0rem 0rem 5rem 1rem;
//     float: middle;
// }
//     #canvas{
//     width:350px; 
//     height:350px;
// }   
    p{
    font-family: Source Sans Pro;
    margin:0;
    line-height: 22px;
    font-size: 13px;
    }
    .part2 h1{
    font-weight: bold;
    font-weight: 900;
    letter-spacing: 0.1em;
    font-size: 38px;
    line-height: 40px;
}  
    // .item .hint {
    // display:none;
// }
    .item-blank {
    display: none;
    margin-bottom: 5px;
    pointer-events: none;
    cursor: default;
    opacity: 0.6;
    }

}

@media (min-width: 560px) { 
    // .recent-project{
    // display: flex;
    // width:100%;
    // margin:2rem auto;
    // }
    // .left-large{
    // cursor: pointer;
    //     flex:2.05;
    //     margin-right: 3%;
    // }
    // .right-large{
    //     flex:1;
    //     // flex: 0 0 385px;
    // }
    h1{
        font-size: 20px;
    }

    #root { 
     margin:auto;
     width: 600px;
     column-count: 2;
     column-width: 150px;
     column-gap: 15px;
    }
    .item-blank {
    display: none;
    margin-bottom: 5px;
    pointer-events: none;
    cursor: default;
    opacity: 0.6;
    } 
} 
@media (max-width: 900px) {
        //edit for Mar 2020 new layou
    .recent-project{
    display: block;
    width:90%;
    margin:2rem auto;
    }
    .left-large{
    cursor: pointer;
        display: block;
    }
    .right-large{
        display: block;
        margin-bottom: 2rem;
        // flex: 0 0 385px;
    }

    .right-large h1{
    font-size: 18px;
    letter-spacing: 0.2rem;
    display: block; 
    }
    .recent-project h2{
    display: none; 
    }
    .recent-content{
    margin:auto;
    position:relative !important;  
    position: relative;
    display: block;
    // bottom: 0;
    // left: 0; 
    }


    #recent-border{
    padding-bottom: 2rem; 
    border-bottom: 1px solid #C4C4C4;
    }


} 
@media (min-width: 900px) {
    //edit for Mar 2020 new layou
    .recent-project{
    display: flex;
    width:90%;
    margin:2rem auto;
    }
    .left-large{
    cursor: pointer;
        flex:2.05;
        margin-right: 3%;
    }
    .right-large{
        flex:1;
        // flex: 0 0 385px;
    }

    #root { 
     margin:auto;
     width: 900px;
     column-count: 3;
     column-width: 180px;
     column-gap: 15px;
    }
    .item-blank {
    z-index: -1;
    display: none;
    margin-bottom: 5px;
    pointer-events: none;
    cursor: default;
    opacity: 0;
    } 
}


@media (min-width: 1200px) {

//for column-count == 4 only
    .grid-item { 
    width: 200px; 
    display: inline-block;
    margin-bottom: 5px;
    break-inside: avoid;
    background: no-repeat;
    background-size: cover;
    }

    #root { 
    margin:auto;
    width: 1250px;
    column-count: 4;
    // column-width: 160px;
    column-gap: 15px;
    -moz-column-count: 4;
    -webkit-column-count: 4; 
    }
    .item-blank {
    z-index: -2;
    display: inline-block;
    margin-bottom: 5px;
    break-inside: avoid;
    background: no-repeat;
    background-size: cover;
    pointer-events: none;
    cursor: default;
    opacity: 0;
    //  border-radius: 5px;
    // transition: 1.5s ease;
}

    .recent-project{
    display: flex;
    width:1250px;
    margin:10rem auto;
    }
    .left-large{
        flex:2.05;
        margin-right: 3%;
        cursor: pointer;

    }
    .right-large{
         flex:1;
        // flex: 0 0 385px;
        // cursor: pointer;
    }
    

}
.item {
    display: inline-block;
     margin-bottom: 5px;
     break-inside: avoid;
     background: no-repeat;
     background-size: cover;
    cursor: pointer;
    // overflow: hidden;
    //  border-radius: 5px;
    // transition: 1.5s ease;
}

// .item img{
//     -webkit-transform: scale(1);
// 	transform: scale(1);
// 	-webkit-transition: .3s ease-in-out;
// 	transition: .3s ease-in-out;
// }
// .item:hover img {
// 	-webkit-transform: scale(1.1);
// 	transform: scale(1.1);
// }

.itemImg:hover{
    transition: 0.2s ease-in-out;
    // box-shadow: 0px 10px 0px #315CFD;  
    box-shadow: 0px 10px 0px #000000;
    cursor: pointer;
}


// .item:hover {
//      /* box-shadow: 5px 5px 20px rgba(0, 0, 0, .06); */
//      transition: 0.3s ease;
//      box-shadow: 8px 8px 0px #f2f2f2;
//     /* margin-top: -2px; */
//     /* border-radius:10px; */

// }

.hint-hind{
    /* display: none; */
    transition: 0.5s;
}
.item .hint {
    position:relative;
    // background-color: #ffffffad;
    width: 100%;
    height:80%;
    transition: 0.5s;
    cursor: pointer;
    font-family: Source Sans Pro;
    font-size: 17px;
    text-align: center;
    letter-spacing: 0.1em;
    color: #a2a2a2;
    font-weight: bolder;
    line-height: 1.3rem;
    margin: 0.5rem 0 1rem 0 ;
}

/* .item .hint >div{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width:100%;
} */
/* .item .hint >div >p{
    font-family: 'Lora', serif;
    font-size: 14px;
    text-align: center;
    letter-spacing: 0.05em;
    color: #000000;
} */
/* .item .hint >div >h3{
    font-family: 'Lato', sans-serif;
    line-height: bold;
    font-size: 23px;
    color: #000000;
} */
.recent-content{
    // position:relative;
    // margin-top:12rem;
    // text-align: bottom;
    width:100%;
    position: absolute;
    bottom: 0;
    left: 0;
}

</style>

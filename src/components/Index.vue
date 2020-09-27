<template>
    <div class = 'container-snow-large' >
        <div class ="animated fadeIn delay-0.5s">
            <div class='intro'>
        <!-- <div class='parent'> -->
            <div class='part1'>
        <!-- <div class='left'> -->
                <img src="/static/snowWidth3.png" id="img-snow" style="display:none"></img>
                <canvas id="canvas"  class="animated fadeIn delay-0.8s"></canvas>
          <!-- <img v-bind:src=imgSrc width='450px'> -->
            </div>
            <div class='part2'>
    <!-- <div class='right' style='background:none'> -->
     <!-- <h1>Hello, </h1>
     <h1>I'm Sixuan.</h1> -->
                <h1>
                I bring <b>warmth</b> to tech,
                </br><b>delight</b> to design.</h1>
                <h2>Hello, I'm Sixuan. <br>A Product Designer who Codes and Innovates.</h2><br>
     <!-- A product designer with background in Technology Innovation. -->
                <div class='icon-element'>
                <ul>
                <li><a class='icon' href="Mailto:sixuanli@outlook.com" target="blank"><i class="fa fa-envelope"></i></a></li>
                <!-- <li><a class='icon' href="#"><i class="fa fa-dribbble"></i></a></li> -->
                <li><a class='icon' href="https://github.com/amoewdy" target="blank"><i class="fa fa-github"></i></a></li>
                <li><a class='icon' href="https://www.linkedin.com/in/sixuan-li-69a171155/" target="blank"><i class="fa fa-linkedin"></i></a></li>
                <li><a class='icon' href="https://medium.com/@sixuanli" target="blank"><i class="fa fa-medium"></i></a></li>
                <!-- <li><a class='icon' href="#"><i class="fa fa-facebook"></i></a></li> -->
                </ul>
                </div>
     <!-- <p>
        I'm currently a master student on<br>
        Technology Innovation @<br>
        Global Innovation Exchange,<br>
        University of Washington<br>
        <br>
        I work on creating things that<br> assist people in an intuitive,<br> inspiring and un-intrusive way :-)
     </p> -->
    <!-- <div class="icon-container">
        <svg class="icon" aria-hidden="true">
            <a xlink:href="Mailto:sixuanli@outlook.com" target="blank">
            <rect x="0" y="0" width="300" height="30" rx="10" ry="10"
              style="fill:white"/>
        <use xlink:href="#icon-mail" fill="lightgray"></use>
            </a>
        </svg>
        <svg class="icon" aria-hidden="true">
            <a xlink:href="https://www.linkedin.com/in/sixuan-li-69a171155/" target="blank">
            <rect x="0" y="0" width="300" height="30" rx="10" ry="10"
              style="fill:white"/>
        <use xlink:href="#icon-linkedin" fill="lightgray"></use>
            </a>
        </svg>
        <svg class="icon" aria-hidden="true">
            <a xlink:href="https://github.com/amoewdy" target="blank" >
            <rect x="0" y="0" width="300" height="30" rx="10" ry="10"
              style="fill:white"/>
        <use xlink:href="#icon-github" fill="lightgray"></use>
            </a>
        </svg>
    </div> -->

            </div>
        </div>
    </div>
    <div class="imageContainer">
    <div class="project-menu" style="margin-top:-5rem">
        <label style="font-weight:600" @click="custormAnchor('#project-recent')"> RECENT WORK ↓ </label>
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
        <div class='right-large' style='position: relative;'>
            <h1>USERTESTING</h1>
                <h2 >Get insights from raw feedback efficiently</h2>
                <div class='tags'>
                    <span class="tag">Product Design</span>    
                    <span class="tag">Productivity Tool</span>
                    <span class="tag">Web</span> 
                    <span class="tag">Cross-Functional Team</span> 
                </div>
                <div class='recent-content'>
                    <div class="company-logo-container">
                         <img class="company-logo" style="width:180px;margin-left:0px;margin-bottom:6px" src="/static/home/UT_logo.png"/>
                    </div>
                    <p class="partner" style="padding-left:0; text-align: left;"> <b>Product Design Internship</b>
                    </p>            
                </div>
        </div>
        <div class="left-large">
            <div class="triggerOnScroll">
                <img class="itemImg" src="/static/home/UserTesting.png" alt="" width="100%"  onclick="window.location.href='/#/usertesting'"/> 
            </div>
        </div>
    </div>

    <div class='recent-project'>
        <div class="left-large">
            <div class="triggerOnScroll">
                <img class="itemImg" src="/static/home/harmonica.png" alt="" width="100%"  onclick="window.location.href='/#/harmonica'"/> 
            </div>
        </div>
        <div class='right-large' id='recent-border' style='position: relative;'>
                        <h1>HARMONICA</h1>
                        <h2 >Enhanced audio experience with ambient awareness</h2>
                        <div class='tags'>
                            <span class="tag">Audio UX</span>    
                            <span class="tag">User Research</span>
                            <span class="tag">Feature Define</span>
                            <span class="tag">Machine Learning</span> 
                            <span class="tag">Product Management</span> 
                        </div>
                         <div class='recent-content'>
                            <div class="company-logo-container">
                            <img class="company-logo" src="/static/home/JBL_Logo.png"/>
                            </div>
                            <p class="partner"> <b>Partner with HARMAN JBL Lifestyle Division</b>
                            </p>
                            
                        </div>
        </div>
    </div>

    <div class='recent-project'>
        <div class='right-large' style='position: relative;'>
            <h1>A-WATCH</h1>
                <h2 >Child Asthma Management Toolkit</h2>
                <div class='tags'>
                    <span class="tag">IoT</span>    
                    <span class="tag">Product Design</span>
                    <span class="tag">Front-end Development</span> 
                    <span class="tag">Data Visualization</span> 
                    <span class="tag">Cross-Functional Team</span>
                </div>
                <div class='recent-content'>
                    <div class="company-logo-container">
                    </div>
                    <!-- <p class="partner" style="padding:0 20px 0 0;text-align: left;"> <b>Partner with School of Nursing, University of Washington</b>
                    </p>             -->
                    <p class="partner" style="padding-left:0; text-align: left;" > <b>Partner with School of Nursing University of Washington</b>
                    </p>              
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
                        <h1>SKETCH SLICER</h1>
                        <h2 >A productivity tool that helps get your design assets faster</h2>
                        <div class='tags'>
                            <span class="tag">React</span>    
                            <span class="tag">OpenCV</span>
                            <span class="tag">Python</span>
                            <span class="tag">AWS Lambda</span>  
                            <span class="tag">API Gateway</span>   
                            <span class="tag">Web Design</span> 
                        </div>
                         <div class='recent-content'>
                            <div class="company-logo-container">
                            <img class="company-logo" style="width:120px;margin:10px auto" src="/static/home/PCT_Logo.png"/>
                            </div>
                            <p class="partner"> <b>Design Technologist Internship</b>
                            </p>    
                        </div>

        </div>
    </div>


    <div class='recent-project'>
        <div class='right-large' style='position: relative;'>
            <h1>PHONE BACKUP</h1>
                <h2 >A holistic cloud backup solution for Andoird users</h2>
                <div class='tags'>
                    <span class="tag">Client Project</span>    
                    <span class="tag">Mobile App</span>
                    <span class="tag">Web Portal</span> 
                    <span class="tag">Internship</span> 
                </div>
                <div class='recent-content'>
                    <div class="company-logo-container">
                         <img class="company-logo" style="width:50px;margin-left:10px;margin-bottom:6px" src="/static/home/Lock_Logo.png"/>
                    </div>
                    <p class="partner" style="padding-left:0; text-align: left;"> <b>Internship at Punchcut. Please contact me if you are interested in this story : )</b>
                    </p>            
            
                </div>
        </div>
        <div class="left-large">
            <div class="triggerOnScroll">
                <img class="itemImg" src="/static/home/gam_sol.png" alt="" width="100%" onclick="window.location.href='/#/backupUX'"/> 
            </div>
        </div>
    </div>


    
    <div class="project-menu" style="margin-top:4rem">
        <label v-on:click="show('all')" v-bind:style="{ fontWeight: fontWeightAll}" >ALL</label>
        <label> ・ </label>
        <label v-on:click="show('design')" v-bind:style="{ fontWeight: fontWeightDesign}" >DESIGN</label>
        <label> ・ </label>
        <label v-on:click="show('build')" v-bind:style="{ fontWeight: fontWeightBuild}" >BUILD</label>
        <label> ・ </label>
        <label v-on:click="show('craft')"v-bind:style="{ fontWeight: fontWeightCraft}" >CRAFT</label>
    </div>
     <a id="project-overview"></a>
    <div id="root">

        <div v-show="showAll==true||projectType=='design'" >
        <div class="item triggerOnScroll">
            <img class="itemImg" src="/static/home/shelfClock.png" alt="" width="100%"  onclick="window.location.href='/#/shelfclock'"/>
            <div class="hint">
                <h3><b>ShelfClock</b></h3>
                <!-- <p style='line-height: 22px;font-family:Lato, sans-serif;margin-top:0.3rem '> Explore student organizations <br/>| User Research | UX Design |</p> -->
                <p style='line-height: 22px;font-family:Lato, sans-serif;margin-top:0.3rem;margin-bottom:0.5rem '>Smart Home ・ Google Nest</p>
           
            </div>
        </div>
        </div>

        <div v-show="showAll==true||projectType=='craft'">
        <div class="item triggerOnScroll">
            <img class="itemImg" src="/static/home/img5.png" alt="" width="100%"  onclick="window.location.href='/#/daydreaming'"/>
            <div class="hint">
                    <h3><b>Daydreaming</b></h3>
                    <!-- <p style='line-height: 22px;font-family:Lato, sans-serif;margin-top:0.3rem '>The tension between dream and reality<br/>| Interactive Installation |</p> -->
                    <p style='line-height: 22px;font-family:Lato, sans-serif;margin-top:0.3rem;margin-bottom:0.5rem '>Interactive Installation</p>   
            </div>
        </div>
        </div>




        <div v-show="showAll==true||projectType=='design'">
        <div class="item triggerOnScroll">
            <img class="itemImg" src="/static/home/img7.png" alt="" width="100%"  onclick="window.location.href='/#/hemago'" />
            <div class="hint">
                    <h3><b>HEMA-GO Fresh</b></h3>
                    <!-- <p style='line-height: 22px;font-family:Lato, sans-serif;margin-top:0.3rem '>Your connected shopping experience <br/>| Business Design |</p> -->
                    <p style='line-height: 22px;font-family:Lato, sans-serif;margin-top:0.3rem;margin-bottom:0.5rem '>Business Design ・ Service Design</p>
            </div>
        </div>
        </div>

        <div v-show="showAll==false&&projectType=='design'" >
        <div class="item triggerOnScroll">
            <img class="itemImg" src="/static/home/clubHusky 2.png" alt="" width="100%"  onclick="window.location.href='/#/clubhusky'"/>
            <div class="hint">
                <h3><b>clubHusky</b></h3>
                <!-- <p style='line-height: 22px;font-family:Lato, sans-serif;margin-top:0.3rem '> Explore student organizations <br/>| User Research | UX Design |</p> -->
                <p style='line-height: 22px;font-family:Lato, sans-serif;margin-top:0.3rem;margin-bottom:0.5rem '>Design Challenge</p>
           
            </div>
        </div>
        </div>
        

        <div v-show="showAll==true" >
        <div class="item triggerOnScroll">
            <img class="itemImg" src="/static/home/clubHusky 2.png" alt="" width="100%"  onclick="window.location.href='/#/clubhusky'"/>
            <div class="hint">
                <h3><b>clubHusky</b></h3>
                <!-- <p style='line-height: 22px;font-family:Lato, sans-serif;margin-top:0.3rem '> Explore student organizations <br/>| User Research | UX Design |</p> -->
                <p style='line-height: 22px;font-family:Lato, sans-serif;margin-top:0.3rem;margin-bottom:0.5rem '>Design Challenge</p>
           
            </div>
        </div>
        </div>





        <div v-show="showAll==true">
        <div class="item triggerOnScroll">
            <img class="itemImg" src="/static/home/img3.png" alt="" width="100%"  onclick="window.location.href='/#/wandpoint'"/>
            <div class="hint">
                    <h3><b>Wandpoint</b></h3>
                    <!-- <p style='line-height: 22px;font-family:Lato, sans-serif;margin-top:0.3rem '>Adding a new dimension to reality <br/>| Product Design | Augmented Reality |</p> -->
                    <p style='line-height: 22px;font-family:Lato, sans-serif;margin-top:0.3rem;margin-bottom:0.5rem '>Product Design ・ AR</p>
            
            </div>
        </div>
        </div>

        <div v-show="showAll==true||projectType=='design'" >
       <div class="item triggerOnScroll">
            <img class="itemImg" src="/static/home/iCushion May12.png" alt="" width="100%"  onclick="window.location.href='/#/icushion'"/>
            <div class="hint">
                <h3><b>iCushion</b></h3>
                <!-- <p style='line-height: 22px;font-family:Lato, sans-serif;margin-top:0.3rem '> A smart cushion that helps children improve their sitting posture <br/>| Design Research | UX Design |</p> -->
                <p style='line-height: 22px;font-family:Lato, sans-serif;margin-top:0.3rem;margin-bottom:0.5rem '>Design Research ・ UX Design</p>
            </div>
        </div>
        </div>

        <div v-show="showAll==false&&projectType=='design'">
        <div class="item triggerOnScroll">
            <img class="itemImg" src="/static/home/img3.png" alt="" width="100%"  onclick="window.location.href='/#/wandpoint'"/>
            <div class="hint">
                    <h3><b>Wandpoint</b></h3>
                    <!-- <p style='line-height: 22px;font-family:Lato, sans-serif;margin-top:0.3rem '>Adding a new dimension to reality <br/>| Product Design | Augmented Reality |</p> -->
                    <p style='line-height: 22px;font-family:Lato, sans-serif;margin-top:0.3rem;margin-bottom:0.5rem '>Product Design ・ AR</p>
            
            </div>
        </div>
        </div>

        <div v-show="showAll==false&&projectType=='design'" >
        <div class="item-blank" >
            <!-- <img class="itemImg"  src="/static/home/img10.png" alt="" width="100%" onmousemove="IndexImageMoveIn(this)" onmouseout="IndexImageMoveOut(this)" onclick="window.location.href='/#/camt'"/> -->
            <img class="itemImg"  src="/static/home/blank.png" alt="" width="100%" />
            <div class="hint">
                    <h3><b></b></h3>
                    <!-- <p style='line-height: 22px;font-family:Lato, sans-serif;margin-top:0.3rem '>61 Days from Concept to Delivery <br/>| IoT | Web App |</p> -->
                    <p style='line-height: 22px;font-family:Lato, sans-serif;margin-top:0.3rem;margin-bottom:0.5rem; '></p>
            
            </div>
        </div>
        </div>



        <div v-show="showAll==true||projectType=='build'" >
        <div class="item triggerOnScroll" :key="componentKey"  >
            <!-- <img class="itemImg"  src="/static/home/img10.png" alt="" width="100%" onmousemove="IndexImageMoveIn(this)" onmouseout="IndexImageMoveOut(this)" onclick="window.location.href='/#/camt'"/> -->
            <img class="itemImg"  src="/static/home/pika May12.png" alt="" width="100%"  onclick="window.location.href='/#/pika'"/>
            <div class="hint">
                    <h3><b>Pika</b></h3>
                    <!-- <p style='line-height: 22px;font-family:Lato, sans-serif;margin-top:0.3rem '>61 Days from Concept to Delivery <br/>| IoT | Web App |</p> -->
                    <p style='line-height: 22px;font-family:Lato, sans-serif;margin-top:0.3rem;margin-bottom:0.5rem; '> Social Robot ・ Web Development</p>
            
            </div>
        </div>
        </div>


        <div v-show="showAll==true||projectType=='design'">
        <div class="item triggerOnScroll">
            <img class="itemImg"  src="/static/home/sandword May12.png" alt="" width="100%" onclick="window.location.href='/#/sandword'"/>
            <div class="hint">
                    <h3><b>SandWord</b></h3>
                    <!-- <p style='line-height: 22px;font-family:Lato, sans-serif;margin-top:0.3rem '>A self-help APP that alleviates emotional problems <br/>| App Development | UX Design |</p> -->
                    <p style='line-height: 22px;font-family:Lato, sans-serif;margin-top:0.3rem;margin-bottom:0.5rem '>iOS ・ Interaction Design ・ Unity</p>   
            </div>
        </div>
        </div>

        <div v-show="showAll==false&&projectType=='design'" >
        <div class="item-blank" >
            <!-- <img class="itemImg"  src="/static/home/img10.png" alt="" width="100%" onmousemove="IndexImageMoveIn(this)" onmouseout="IndexImageMoveOut(this)" onclick="window.location.href='/#/camt'"/> -->
            <img class="itemImg"  src="/static/home/blank.png" alt="" width="100%" />
            <div class="hint">
                    <h3><b></b></h3>
                    <!-- <p style='line-height: 22px;font-family:Lato, sans-serif;margin-top:0.3rem '>61 Days from Concept to Delivery <br/>| IoT | Web App |</p> -->
                    <p style='line-height: 22px;font-family:Lato, sans-serif;margin-top:0.3rem;margin-bottom:0.5rem; '></p>
            
            </div>
        </div>
        </div>


        <div v-show="showAll==true" >
        <div class="item-blank" >
            <!-- <img class="itemImg"  src="/static/home/img10.png" alt="" width="100%" onmousemove="IndexImageMoveIn(this)" onmouseout="IndexImageMoveOut(this)" onclick="window.location.href='/#/camt'"/> -->
            <img class="itemImg"  src="/static/home/blank.png" alt="" width="100%" />
            <div class="hint">
                    <h3><b></b></h3>
                    <!-- <p style='line-height: 22px;font-family:Lato, sans-serif;margin-top:0.3rem '>61 Days from Concept to Delivery <br/>| IoT | Web App |</p> -->
                    <p style='line-height: 22px;font-family:Lato, sans-serif;margin-top:0.3rem;margin-bottom:0.5rem; '></p>
            
            </div>
        </div>
        </div>



        <div v-show="showAll==true||projectType=='build'">
        <div class="item triggerOnScroll">
            <img class="itemImg" src="/static/home/img9-2.png" alt="" width="100%"  onclick="window.location.href='/#/spimo'" />
            <!-- <img class="itemImg" src="/static/home/img9.png" alt="" width="100%"  onclick="window.location.href='https://medium.com/@sixuanli/spimo-3afbf13eda85'" />  -->
            <div class="hint">
                    <h3><b>Spimo</b></h3>
                    <!-- <p style='line-height: 22px;font-family:Lato, sans-serif;margin-top:0.3rem '>Your connected shopping experience <br/>| Business Design |</p> -->
                    <p style='line-height: 22px;font-family:Lato, sans-serif;margin-top:0.3rem;margin-bottom:0.5rem '>IoT・ Machine Learning</p>
            </div>
        </div>
        </div>

        <div v-show="showAll==true||projectType=='craft'">
        <div class="item triggerOnScroll">
            <img class="itemImg" src="/static/home/china.png" alt="" width="100%"  onclick="window.location.href='/#/Porcelain'" />
            <div class="hint">
                    <h3><b>Misc.</b></h3>
                    <!-- <p style='line-height: 22px;font-family:Lato, sans-serif;margin-top:0.3rem '>Your connected shopping experience <br/>| Business Design |</p> -->
                    <p style='line-height: 22px;font-family:Lato, sans-serif;margin-top:0.3rem;margin-bottom:0.5rem '>Craft, Porcelain, and Drawings</p>
            </div>
        </div>
        </div>

        <!-- <div class="item">
            <img class="itemImg" src="/static/home/img6.png" alt="" width="100%"/>
            <div class="hint">
                <h2>Lumii</h2>
                <p style='line-height: 22px;font-family:Lato, sans-serif;margin-top:0.3rem '> A Cozy Spiritual Home <br/>| Smart Home | Product Design |</p>
            </div>
        </div> -->
    </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'image',
    data () {
        return {
        seen:false,  
        imgSrc: '../static/home/snowBackgroundFigma.png',
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
        show:function(type){
        if(type=='design'){
            this.projectType='design';
            this.showAll=false;
            this.fontWeightDesign=700;
            this.fontWeightAll=300;
            this.fontWeightBuild=300;
            this.fontWeightCraft=300;
            console.log('click desig',this.projectType,this.showAll);
        }
        else if(type=='build'){
            this.projectType='build';
            this.showAll=false;
            this.fontWeightDesign=300;
            this.fontWeightAll=300;
            this.fontWeightBuild=700;
            this.fontWeightCraft=300;
            console.log('click build',this.projectType,this.showAll);
        }
        else if(type=='craft'){
            this.projectType='craft';
            this.showAll=false;
            this.fontWeightDesign=300;
            this.fontWeightAll=300;
            this.fontWeightBuild=300;
            this.fontWeightCraft=700;
            console.log('click craft',this.projectType,this.showAll);
        }
        else if(type=='all'){
            this.showAll=true; 
            this.fontWeightDesign=300;
            this.fontWeightAll=700;
            this.fontWeightBuild=300;
            this.fontWeightCraft=300;  
            console.log('click all',this.projectType,this.showAll);  
       
        }
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
            flakeCount = 800,
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
                flake.opacity = (Math.random() * 0.5) + 0.6;
            }

            function init() {
                for (var i = 0; i < flakeCount; i++) {
                    var x = Math.floor(Math.random() * canvas.width),
                        y = Math.floor(Math.random() * canvas.height),
                        size = (Math.random() * 3) + 2.3,
                        speed = (Math.random() * 1) + 1.1,
                        opacity = (Math.random() * 0.5) + 0.5;

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
    margin-top:-0.6rem;
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
    color:#C70C00 !important;
    border-color:#C70C00 !important;
    transition: 0.8s ease;
}

a:hover i{
    -webkit-transform:scale(1.4);
    -moz-transform:scale(1.4);
    -o-transform:scale(1.4);
    -ms-transform:scale(1.4);
    transform:scale(1.4);
    color:#C70C00;
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
    /* letter-spacing:2px; */
    font-family: 'Lato', sans-serif;
    font-size: 38px;
    color: #202020;
    margin: 10px 0 12px 0px;
    text-align:left;
    letter-spacing:9px;
    // text-transform:uppercase;
}
h1 b{
    background-image: linear-gradient(180deg,transparent 70%,#D14343 0);
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
h2{
    font-family: 'Lato', sans-serif;

    // font-family: Lora;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0.09em;
    color: #333333; 
    margin:20px 20px 0 0 ;
    text-align:left;
}
h3{
    font-weight: 600;
    letter-spacing:1px;
    font-family: 'Lato', sans-serif;
    font-size: 20px;
    color: #333333; 
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
    margin-top:-30rem;
    margin-left:56%;
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
    font-family:'Lato', sans-serif;
    font-size: 18px;
    color: #333333;
    letter-spacing: 0.1em;
    font-weight: 300;
    margin-bottom: 5rem;
}
label:hover{
    color: #BDBDBD;
    font-weight: 300;

}


#canvas{
    /* background-image: url('/static/snowBackgroundFigma.png');    */
    background-image: url('/static/snowWidth2.png');   
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
    font-family: 'Lora', serif;
    margin:0;
    line-height: 22px;
    font-size: 13px;
    }
    .part2 h1{
    font-weight: bold;
    letter-spacing:10px;
    font-family: 'Lato', sans-serif;
    font-size: 32px;
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
    box-shadow: 0px 10px 0px #D14343;  
    // box-shadow: 0px 10px 0px #333333;
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
    font-family: 'Lato', sans-serif;
    font-size: 17px;
    text-align: center;
    letter-spacing: 0.05em;
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

<template>
    <div class = 'container-snow-large' style = "margin-top:8rem" >
        <div class="project-menu" style="margin-top:4rem">
            <label v-on:click="show('all')" v-bind:style="{ fontWeight: fontWeightAll}" >All</label>
            <label> ・ </label>
            <label v-on:click="show('design')" v-bind:style="{ fontWeight: fontWeightDesign}" >Design</label>
            <label> ・ </label>
            <label v-on:click="show('build')" v-bind:style="{ fontWeight: fontWeightBuild}" >Build</label>
            <label> ・ </label>
            <label v-on:click="show('craft')"v-bind:style="{ fontWeight: fontWeightCraft}" >Craft</label>
        </div>
        <a id="project-overview"></a>
        <div id="root">

        <div v-show="showAll==true||projectType=='design'" >
        <div class="item triggerOnScroll">
            <img class="itemImg" src="/static/home/shelfClock.png" alt="" width="100%"  onclick="window.location.href='/#/shelfclock'"/>
            <div class="hint">
                <h3><b>ShelfClock</b></h3>
                <h2 class="subtitle">Smart Home ・ Google Nest</h2>
           
            </div>
        </div>
        </div>

        <div v-show="showAll==true||projectType=='craft'">
        <div class="item triggerOnScroll">
            <img class="itemImg" src="/static/home/img5.png" alt="" width="100%"  onclick="window.location.href='/#/daydreaming'"/>
            <div class="hint">
                    <h3><b>Daydreaming</b></h3>
                    <h2 class="subtitle">Interactive Installation</h2>   
            </div>
        </div>
        </div>
        <div v-show="showAll==true||projectType=='design'">
        <div class="item triggerOnScroll">
            <img class="itemImg" src="/static/home/img7.png" alt="" width="100%"  onclick="window.location.href='/#/hemago'" />
            <div class="hint">
                    <h3><b>HEMA-GO Fresh</b></h3>
                    <h2 class="subtitle">Business Design ・ Service Design</h2>
            </div>
        </div>
        </div>

        <div v-show="showAll==false&&projectType=='design'" >
        <div class="item triggerOnScroll">
            <img class="itemImg" src="/static/home/clubhusky2.png" alt="" width="100%"  onclick="window.location.href='/#/clubhusky'"/>
            <div class="hint">
                <h3><b>clubHusky</b></h3>
                <h2 class="subtitle">Design Challenge</h2>
           
            </div>
        </div>
        </div>
        

        <div v-show="showAll==true" >
        <div class="item triggerOnScroll">
            <img class="itemImg" src="/static/home/clubhusky2.png" alt="" width="100%"  onclick="window.location.href='/#/clubhusky'"/>
            <div class="hint">
                <h3><b>clubHusky</b></h3>
                <h2 class="subtitle">Design Challenge</h2>
            </div>
        </div>
        </div>


        <div v-show="showAll==true">
        <div class="item triggerOnScroll">
            <img class="itemImg" src="/static/home/img3.png" alt="" width="100%"  onclick="window.location.href='/#/wandpoint'"/>
            <div class="hint">
                    <h3><b>Wandpoint</b></h3>
                    <h2 class="subtitle">Product Design ・ AR</h2>
            
            </div>
        </div>
        </div>

        <div v-show="showAll==true||projectType=='design'" >
       <div class="item triggerOnScroll">
            <img class="itemImg" src="/static/home/iCushion May12.png" alt="" width="100%"  onclick="window.location.href='/#/icushion'"/>
            <div class="hint">
                <h3><b>iCushion</b></h3>
                <h2 class="subtitle">Design Research ・ UX Design</h2>
            </div>
        </div>
        </div>

        <div v-show="showAll==false&&projectType=='design'">
        <div class="item triggerOnScroll">
            <img class="itemImg" src="/static/home/img3.png" alt="" width="100%"  onclick="window.location.href='/#/wandpoint'"/>
            <div class="hint">
                    <h3><b>Wandpoint</b></h3>
                    <h2 class="subtitle">Product Design ・ AR</h2>
            
            </div>
        </div>
        </div>

        <div v-show="showAll==false&&projectType=='design'" >
        <div class="item-blank" >
            <!-- <img class="itemImg"  src="/static/home/img10.png" alt="" width="100%" onmousemove="IndexImageMoveIn(this)" onmouseout="IndexImageMoveOut(this)" onclick="window.location.href='/#/camt'"/> -->
            <img class="itemImg"  src="/static/home/blank.png" alt="" width="100%" />
            <div class="hint">
                    <h3><b></b></h3>
                    <h2 class="subtitle"></h2>
            
            </div>
        </div>
        </div>



        <div v-show="showAll==true||projectType=='build'" >
        <div class="item triggerOnScroll" :key="componentKey"  >
            <!-- <img class="itemImg"  src="/static/home/img10.png" alt="" width="100%" onmousemove="IndexImageMoveIn(this)" onmouseout="IndexImageMoveOut(this)" onclick="window.location.href='/#/camt'"/> -->
            <img class="itemImg"  src="/static/home/pika May12.png" alt="" width="100%"  onclick="window.location.href='/#/pika'"/>
            <div class="hint">
                    <h3><b>Pika</b></h3>
                    <h2 class="subtitle">Social Robot ・ Web Development</h2>
            
            </div>
        </div>
        </div>


        <div v-show="showAll==true||projectType=='design'">
        <div class="item triggerOnScroll">
            <img class="itemImg"  src="/static/home/sandword May12.png" alt="" width="100%" onclick="window.location.href='/#/sandword'"/>
            <div class="hint">
                    <h3><b>SandWord</b></h3>
                    <h2 class="subtitle">iOS ・ Interaction Design ・ Unity</h2>   
            </div>
        </div>
        </div>

        <div v-show="showAll==false&&projectType=='design'" >
        <div class="item-blank" >
            <!-- <img class="itemImg"  src="/static/home/img10.png" alt="" width="100%" onmousemove="IndexImageMoveIn(this)" onmouseout="IndexImageMoveOut(this)" onclick="window.location.href='/#/camt'"/> -->
            <img class="itemImg"  src="/static/home/blank.png" alt="" width="100%" />
            <div class="hint">
                    <h3><b></b></h3>
                    <h2 class="subtitle"></h2>
            
            </div>
        </div>
        </div>


        <div v-show="showAll==true" >
        <div class="item-blank" >
            <!-- <img class="itemImg"  src="/static/home/img10.png" alt="" width="100%" onmousemove="IndexImageMoveIn(this)" onmouseout="IndexImageMoveOut(this)" onclick="window.location.href='/#/camt'"/> -->
            <img class="itemImg"  src="/static/home/blank.png" alt="" width="100%" />
            <div class="hint">
                    <h3><b></b></h3>
                    <h2 class="subtitle"></h2>
            
            </div>
        </div>
        </div>



        <div v-show="showAll==true||projectType=='build'">
        <div class="item triggerOnScroll">
            <img class="itemImg" src="/static/home/img9-2.png" alt="" width="100%"  onclick="window.location.href='/#/spimo'" />
            <!-- <img class="itemImg" src="/static/home/img9.png" alt="" width="100%"  onclick="window.location.href='https://medium.com/@sixuanli/spimo-3afbf13eda85'" />  -->
            <div class="hint">
                    <h3><b>Spimo</b></h3>
                    <h2 class="subtitle">IoT・ Machine Learning</h2>
            </div>
        </div>
        </div>

        <div v-show="showAll==true||projectType=='craft'">
        <div class="item triggerOnScroll">
            <img class="itemImg" src="/static/home/china.png" alt="" width="100%"  onclick="window.location.href='/#/Porcelain'" />
            <div class="hint">
                    <h3><b>Misc.</b></h3>
                    <h2 class="subtitle">Craft, Porcelain, and Drawings</h2>
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
        fontWeightDesign:500,
        fontWeightBuild:500,
        fontWeightCraft:500,
        }
    },
    mounted: function() {
        this.indexAnimation();
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
            this.fontWeightAll=500;
            this.fontWeightBuild=500;
            this.fontWeightCraft=500;
            console.log('click desig',this.projectType,this.showAll);
        }
        else if(type=='build'){
            this.projectType='build';
            this.showAll=false;
            this.fontWeightDesign=500;
            this.fontWeightAll=500;
            this.fontWeightBuild=700;
            this.fontWeightCraft=500;
            console.log('click build',this.projectType,this.showAll);
        }
        else if(type=='craft'){
            this.projectType='craft';
            this.showAll=false;
            this.fontWeightDesign=500;
            this.fontWeightAll=500;
            this.fontWeightBuild=500;
            this.fontWeightCraft=700;
            console.log('click craft',this.projectType,this.showAll);
        }
        else if(type=='all'){
            this.showAll=true; 
            this.fontWeightDesign=500;
            this.fontWeightAll=700;
            this.fontWeightBuild=500;
            this.fontWeightCraft=500;  
            console.log('click all',this.projectType,this.showAll);  
       
        }
        },
    }
}
</script>
<style lang="scss" scoped>
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
    letter-spacing:1px;
    font-family: Source Sans Pro;
    font-size: 20px;
    color: #000000; 
    // color: rgb(0, 0, 0);
    margin:12px 0 2px 0 ;
    letter-spacing:0.1em;
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

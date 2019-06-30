<template>
  <div class = 'container'>
      <div class='intro'>
      <div class='part1'>
          <canvas id="canvas"  class="animated fadeIn delay-0.8s"></canvas>
          <!-- <img v-bind:src=imgSrc width='450px'> -->
      </div>
      <div class='part2'>
     <h1>Hi~ I‘m Sixuan</h1>
     <h2>Product Designer  / Developer  /  Maker</h2><br>
     <p>
        I'm currently a master student on<br>
        Technology Innovation @<br>
        Global Innovation Exchange,<br>
        University of Washington<br>
        <br>
        I work on creating things that<br> assist people in an intuitive,<br> inspiring and un-intrusive way :-)
     </p>
    <div class="icon-container">
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
         <!-- <svg class="icon" aria-hidden="true">
             <a xlink:href="https://www.facebook.com/sixuan.li.75" target="blank" >
             <rect x="0" y="0" width="300" height="30" rx="10" ry="10"
              style="fill:white"/>
        <use xlink:href="#icon-facebook" fill="lightgray"></use>
            </a>
        </svg> -->
    </div>
    </div>
    </div>
    <div class="imageContainer">
    <div id="root">
        <div class="item">
            <img class="itemImg"  src="/static/home/img8.png" alt="" width="100%" onmousemove="IndexImageMoveIn(this)" onmouseout="IndexImageMoveOut(this)" onclick="window.location.href='/#/camt'"/>
            <div class="hint">
                    <h2>Child Asthma Management Toolkit</h2>
                    <p style='line-height: 22px;font-family:Lato, sans-serif;margin-top:0.3rem '>61 Days from Concept to Delivery <br/>| IoT | Web App |</p>
            </div>
        </div>
        <div class="item">
            <img class="itemImg" src="/static/home/img3.png" alt="" width="100%" onmousemove="IndexImageMoveIn(this)" onmouseout="IndexImageMoveOut(this)" onclick="window.location.href='/#/wandpoint'"/>
            <div class="hint">
                    <h2>Wandpoint</h2>
                    <p style='line-height: 22px;font-family:Lato, sans-serif;margin-top:0.3rem '>Adding a new dimension to reality <br/>| Product Design | Augmented Reality |</p>
            </div>
        </div>
        <div class="item">
            <img class="itemImg"  src="/static/home/sandword img.png" alt="" width="100%" onmousemove="IndexImageMoveIn(this)" onmouseout="IndexImageMoveOut(this)" onclick="window.location.href='/#/sandword'"/>
            <div class="hint">
                    <h2>SandWord</h2>
                    <p style='line-height: 22px;font-family:Lato, sans-serif;margin-top:0.3rem '>A self-help APP that alleviates emotional problems <br/>| App Development | UX Design |</p>
            </div>
        </div>
        <div class="item">
            <img class="itemImg" src="/static/home/clubhusky.png" alt="" width="100%" onmousemove="IndexImageMoveIn(this)" onmouseout="IndexImageMoveOut(this)" onclick="window.location.href='/#/clubhusky'"/>
            <div class="hint">
                <h2>clubHusky</h2>
                <p style='line-height: 22px;font-family:Lato, sans-serif;margin-top:0.3rem '> Explore student organizations <br/>| User Research | UX Design |</p>
            </div>
        </div>
        <div class="item">
            <img class="itemImg" src="/static/home/img5.png" alt="" width="100%" onmousemove="IndexImageMoveIn(this)" onmouseout="IndexImageMoveOut(this)" onclick="window.location.href='/#/daydreaming'"/>
            <div class="hint">
                    <h2>Daydreaming</h2>
                    <p style='line-height: 22px;font-family:Lato, sans-serif;margin-top:0.3rem '>The tension between dream and reality<br/>| Interactive Installation |</p>
            </div>
        </div>
        <div class="item">
            <img class="itemImg" src="/static/home/img2.png" alt="" width="100%" onmousemove="IndexImageMoveIn(this)" onmouseout="IndexImageMoveOut(this)" onclick="window.location.href='/#/icushion'"/>
            <div class="hint">
                <h2>iCushion</h2>
                <p style='line-height: 22px;font-family:Lato, sans-serif;margin-top:0.3rem '> A smart cushion that helps children improve their sitting posture <br/>| Design Research | UX Design |</p>
            </div>
        </div>
        <div class="item">
            <img class="itemImg" src="/static/home/img7.png" alt="" width="100%" onmousemove="IndexImageMoveIn(this)" onmouseout="IndexImageMoveOut(this)" onclick="window.location.href='/#/hemago'" />
            <div class="hint">
                    <h2>HEMA-GO Fresh</h2>
                    <p style='line-height: 22px;font-family:Lato, sans-serif;margin-top:0.3rem '>Your connected shopping experience <br/>| Business Design |</p>
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
        imgSrc: '../static/home/snowBackgroundFigma.png'
        }
    },
    mounted: function() {
        this.snow();
    },
    methods: {
        IndexImageMoveIn:function(){
            this.seen = ture;
        },
        IndexImageMoveOut:function(){
            this.seen = false;
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
                flakeCount = 400,
                mX = -100,
                mY = -100
                // canvas.width = window.innerWidth;
                // canvas.height = window.innerHeight;
                canvas.width = 450;
                canvas.height =450;

            function snow2() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                for (var i = 0; i < flakeCount; i++) {
                    var flake = flakes[i],
                        x = mX,
                        y = mY,
                        minDist = 150,
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
                flake.size = (Math.random() * 3) + 1.8;
                flake.speed = (Math.random() * 1) + 0.5;
                flake.velY = flake.speed;
                flake.velX = 0;
                flake.opacity = (Math.random() * 0.5) + 0.5;
            }

            function init() {
                for (var i = 0; i < flakeCount; i++) {
                    var x = Math.floor(Math.random() * canvas.width),
                        y = Math.floor(Math.random() * canvas.height),
                        size = (Math.random() * 3) + 1.7,
                        speed = (Math.random() * 1) + 0.5,
                        opacity = (Math.random() * 0.5) + 0.4;

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
                canvas.width = 450;
                canvas.height = 450;
            })
            init();
            snow2();
        }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
    margin: 10rem 2rem 5rem 2rem;
    float: middle;
}
h1{
    font-weight: bold;
    letter-spacing:2px;
    font-family: 'Lato', sans-serif;
    font-size: 28px;
    color: #202020;
    margin: 20px 0 0 0;
    text-align:left;
}
h2{
    font-weight: bold;
    letter-spacing:1px;
    font-family: 'Lato', sans-serif;
    font-size: 14px;
    /* color: #C9C9C9; */
    color: rgb(189, 189, 189);
    margin:10px 0 0 0 ;
    text-align:left;
}
.part1{
    float: left;
    margin: 0rem 0rem 3rem 15rem;
}
.part1 .icon-container{
    margin-top:1rem;
}
.part2{
    float: right;
    margin: 0rem 20rem 7rem 0rem;
}

.intro{
    margin: 0rem 5rem 5rem 5rem;
    float: middle;
}
i{
    float:left;
    margin: 0.8rem 0.5rem 0 0;
}
p{
    font-family: 'Lora', serif;
    margin:0;
    line-height: 29px;
    font-size: 14px;
    letter-spacing: 0.04em;
    font-weight: lighter;
    color: #000000;
    text-align:left;
}
#canvas{
    /* background-image: url('/static/snowBackgroundFigma.png');    */
    background-image: url('/static/snowBackground2.png');   
    background-size:     cover;                      
    background-repeat:   no-repeat;
    background-position: center center;
    width:450px; 
    height:450px;
}
.imageContainer{
    margin-top:80px;
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
    .part1{
    float:none;
    text-align:center;
    margin: 2rem 2rem 2rem 2rem;
    }
    .part2{
    display:block;
    float:none;
    text-align:center;
    margin: auto;
}
    .container{
    margin: 12rem 0rem 5rem 0rem;
    float: middle;
}
}
@media (max-width: 50em)  {
    .part1{
    float:none;
    text-align:center;
    margin: 0rem 0rem 0rem 0rem;
    }
    .part2{
    float:none;
    text-align:center;
    margin: 0rem 0rem 0rem 0rem;
}
    .container{
    margin: 5rem 0rem 5rem 0rem;
    float: middle;
}
    .intro{
    margin: 0rem 0rem 5rem 1rem;
    float: middle;
}
    #canvas{
    width:350px; 
    height:350px;
}   
    p{
    font-family: 'Lora', serif;
    margin:0;
    line-height: 22px;
    font-size: 13px;
    }
    h1{
    font-weight: bold;
    letter-spacing:2px;
    font-family: 'Lato', sans-serif;
    font-size: 24px;
}  
    .item .hint {
    display:none;
}


}

@media (min-width: 500px) { 
    #root { 
     margin:auto;
     width: 600px;
     column-count: 2;
     column-width: 150px;
     column-gap: 15px;
    } 
} 
@media (min-width: 1200px) { 
    #root { 
     margin:auto;
     width: 900px;
     column-count: 3;
     column-width: 200px;
     column-gap: 15px;
    }
}
.item {
     margin-bottom: 5px;
     break-inside: avoid;
     background: no-repeat;
     background-size: cover;
     /* background: #fff; */
    transition: 0.2s;
}
.item:hover {
     box-shadow: 5px 5px 13px rgba(0, 0, 0, .1);
     transition: 0.2s;
}

.hint-hind{
    /* display: none; */
    transition: 0.5s;
}
.item .hint {
    position:relative;
    background-color: #ffffffad;
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

</style>

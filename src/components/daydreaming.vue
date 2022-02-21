<template>
    <div class="animated fadeIn delay-0.5s">
  <div class = 'container'>
    <div class="content-container-large">
            <img src="https://miro.medium.com/max/1400/1*ygpQIuoD5rritYdYJ37NkQ.png" width='100%' class='large-img'>
    </div>
    <div class="first-page">
        <div class="content-container-title">
            <div class="parent">
                <div class = "left">
                    <div class="paragraph">
                        <h1>Daydreaming </h1>
                        <h6>The tension between dream and reality</h6>
                        <p>When we talked about dreams, I think of “Starry Sky”, the star track and a quiet city under the night sky. On the ground is our daily life, and the starry sky above us is the ultimate dream of mankind.<br>
                        <br>We believe that there is some subtle connection between reality and the dream. When we wake up, we feel lost. In the final project, we want to explore this emotional tension people feel when they switch between the dream and the reality.
                        </p>
                    </div>
                    <div class="info">
                        <div class = "left-left">
                        <h3>Duration</h3>
                        <h3>Topic</h3>
                        <h3>Team</h3>
                        </div>
                        <div class= "left-right">
                            <p>Nov 2018 - Dec 2018<br>
                            Interactive Installation<br>      
                            Sixuan Li, Evie Zhang</p>
                        </div>
                    </div>
                </div>
                <div class = "right">
                    <div class="paragraph">
                        <h2>My role</h2>
                            <p>
                                Product Designer </br>
                                Maker
                            </p>
                        <h2>Skills</h2>
                            <p>
                                Interaction Design<br/>
                                3D Modeling & Printing<br>
                                Woodworking<br>
                                Physical Computing
                            </p>
                        <h2>Toos</h2>
                            <p>
                                Arduino<br/>
                                Rhino & Grasshopper<br>
                                3D Printer<br/>
                                Laser Cutter<br>
                            </p>     
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="light-page">
        <div class="content-container">
            <div class="title">
                <div class = "title-color2"> </div>
                <div class="title-text">
                    <h4>Overview</h4>
                    <h5>Why we built it</h5>
                </div>
            </div>
             <div class="paragraph">
            <p>
                Daydreaming is our team project during the Fabrication course at University of Washington under the guidance of prof. Brock R Craft. During the ten-week course, we learn the skills and techniques of physical prototyping, and finish the final project in the last 4 weeks.
            </p>
            <p class="video">
            <iframe width="100%" height="480" src="https://www.youtube.com/embed/XX8Yq4Maqls" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </p>
            <h4>Description</h4>
            <p>
                The installation mainly consists of two objects: the key and the dream scene, and they are represented by a <b>top</b> and a <b>cube box</b>.
            </p>
            <div class='interview' >
                    <div class='left_p'>
                        <img src="https://miro.medium.com/max/1260/1*isUHeZFS9L86RYZAcBwRvQ.png" width="100%">
                    </div>
                    <div class="right_p">
                        <p>The spinning top in the film Inception gave us inspiration of using a top as the key to the dream. The top works as the trigger of the dream scene, which includes a mini city with a lot of buildings and a galaxy over the city. When the top is placed in the scene, light will become brighter and warmer; when it’s token away, the scene becomes dim. With this dramatic change, We try to visualize how people feel when they wake up from their dreams.

                        </p>
                    </div>
                </div>
            </div>
            <div class="paragraph">
                <h4>System Flowchart</h4>
                <div class='image-middle-container' style='margin-top: 30px'>
                        <img src="https://miro.medium.com/max/1400/1*ay1ANIdtFPzNmrMO_m-Hog.png" width="100%">
                </div>
                <p>Throughout the whole system, we used two Adafruit Circuit Playground micro-controllers to control the dream scene and the top. Each section has its own power supply, charging module and a switch. The connectors (Bourns male contact) connected to the two parts determine the current state by detecting the high and low level signals, then the micro-controller issues a command to change the light.
                </p>
            </div>
        </div>
    </div>
    <div class="light-page">
        <div class="content-container">
            <div class="title">
                <div class = "title-color2"> </div>
                <div class="title-text">
                    <h4>Software</h4>
                    <h5>Implementation</h5>
                </div>
            </div>
            <div class="paragraph">
                <p>
                    <a style="text-decoration: none; color: rgb(0, 0, 0);border-bottom:1px dashed rgb(160, 160, 160);" href="https://github.com/evie9z/daydreaming" target="blank">
                <b>Arduino Code</b></a><br>
                As for the programming part, we wrote two different colors of breathing lights. The main program is very simple, using only one conditional sentence to distinguish between the two states. We add a buffer state between each state transition. When the two parts are connected, only the current breathing light cycle is ended, which means the brightness value becomes 0, the color of the light would change from one to another. This makes the switch of the lights very soft and smooth.
                </p>
            </div>       
        </div>
    </div>
    <div class="light-page">
        <div class="content-container">
            <div class="title">
                <div class = "title-color2"> </div>
                <div class="title-text">
                    <h4>Hardware</h4>
                    <h5>Iterations & Implementation</h5>
                </div>
            </div>
            <div class='paragraph'>
                <p>
                    We spent most of our time on hardware development <a style="text-decoration: none; color: rgb(0, 0, 0);border-bottom:1px dashed rgb(160, 160, 160);" href="https://drive.google.com/file/d/1P63ksYbpyyjfkGguY2IU_1RyNjhudeP4/view" target="blank">
                <b>(see sketchbook）</b></a>
                     . The hardware includes the top, dream scene, enclosures, as well as the circuits inside.
                </p>  
                <h4>The Top (that doesn’t rotate lol)</h4>
                    <div class='interview' >
                        <div class='left_p'>
                            <img src="https://miro.medium.com/max/1400/1*fQTgY1zQAtY5rfWxFU5lmQ.png" width="100%">
                        </div>
                        <div class="right_p">
                            <p>The most challenging part of the top enclosure is to design a structure that we can put every electric components inside and place them steadily.
                            <br>
                        The original idea is to build an elegant top that looks like the one in Inception. However, after several iterations, we change it to cylindrical side face to make it stronger.
                        </p>
                        </div>
                    </div> 
                    <h4>Iterations of the enclosure</h4>
                    <div class='image-middle-container' style='margin-top:30px'>
                        <img src="https://miro.medium.com/max/1400/1*wFI94MRoVo9Qfu6MX3NsHQ.png" width="100%">
                    </div>
                    <div class='image-middle-container' style='margin-top:30px'>
                        <img src="https://miro.medium.com/max/1400/1*g1X8fX0lRzG2Kzdj1GoWjA.png" width="100%">
                    </div>
                    <p><br>
                    In addition to adjustments in measurements, we made major changes in how to put the three parts together, and how to place the circuits.
                    <br>
                    After testing, we used thread to fix the three parts, and changed the curved side face to cylindrical to increase strength. The top was fully functional but slightly brittle.</p>                           
                <div class='image-middle-container' style='margin-top:30px'>
                    <img src="https://miro.medium.com/max/1400/1*XeOj_d8phgpbhsswagOWyw.png" width="100%">
                </div>
                <div class='image-middle-container' style='margin-top:30px'>
                    <img src="https://miro.medium.com/max/1330/1*w18d0R6IvOXLh2q_iLAm-w.png" width="100%">
                </div>
                <div class='image-middle-container' style='margin-top:30px'>
                    <img src="https://miro.medium.com/max/1400/1*299MWlS9Vj7plgystGhUZw.png" width="100%">
                </div>
                <p><br>We used buckles and limit structure to fix the two object together. In order to fix the top and the base properly, we 3D printed several bases and each time adjusted the measurements slightly.
                </p>
                <div class='image-middle-container' style='margin-top:30px'>
                    <img src="https://miro.medium.com/max/1400/1*yALRki5nybWqXoycWvZ43w.png" width="100%">
                </div>
                <p><br>
                    The final iteration of the top is very robust and stable after we change the 3D printing material. The base and the top can be connected tightly.
                </p>
                </div>
            <div class='paragraph'>
                <h4>The light guide in the top</h4>
                <p>
                    We made an annular light guide with Acrylic by laser cutting.
                </p> 
                <div class='image-middle-container' style='margin-top:30px'>
                    <img src="https://miro.medium.com/max/1400/1*QEpUg1_txrKYrT2roJBxzg.png" width="100%">
                </div>
                <div class='image-middle-container' style='margin-top:30px'>
                    <img src="https://miro.medium.com/max/1400/1*7sP0hDdSltBW-rp1XYle8w.png" width="100%">
                </div>
            </div> 
            <div class='paragraph'>
                <h4>The circuit inside the top</h4>
                <div class='image-middle-container' style='margin-top:30px'>
                    <img src="https://miro.medium.com/max/1400/0*I1WBPrb-8e0IcxOz.png" width="100%">
                </div>
                <p>
                    The circuits inside the top and the box are the same. The two objects are both sender and receiver at the same time.
                </p> 
                <p>
                    The most challenging task was to solder all the components properly. There was only limited space inside the top, so we had to try different ways to fix the position of the components, which ultimately took us several hours to succeed.
                </p>
                <div class='image-middle-container' style='margin-top:30px'>
                    <img src="https://miro.medium.com/max/1400/1*B6tzhvxv3LyRjJ6j6DHQ9A.png" width="100%">
                </div>
            </div>
            <div class='paragraph'>
                <h4>The light guide of the Dream Scene</h4>
                <div class='image-middle-container' style='margin-top:30px'>
                    <img src="https://miro.medium.com/max/1400/1*5JfFAeNUw5SD6Foj_bnhkg.png" width="100%">
                </div>
                <p><br>
                    We paid special attention to the light guide here, and did a lot of crazy experiments here. After these early experiments, we decided to use laser-cut Acrylic.
               </p> 
               <div class='image-middle-container' style='margin-top:30px'>
                    <img src="https://miro.medium.com/max/1400/1*AU_H2ga3GJ480spbohR3ww.png" width="100%">
                </div>
                <p><br>
                    There are two kinds of light guide. The primary light guide is used to conduct LED light from the circuit board to the stage plane and the stars, and secondary light guide is used to illuminate the architecture model.
                </p>
                <p>
                    Although it seemed like an infeasible solution at first, the primary light guide worked well and result was beyond expectation.
                </p>
                 <div class='image-middle-container' style='margin-top:30px'>
                    <img src="https://miro.medium.com/max/1400/1*Sq0UzGnfu1tLu_S8jor59g.png" width="100%">
                </div>
                <p><br>
                The difficult part of designing the primary light guide is to get the right shape and measurements. The design requirements include:
                </p>             
            </div> 
            <div class='interview' >
                    <div class='left_p'>
                        <img src="https://miro.medium.com/max/942/1*iHbA7rv8Fq1_vFjmGqZJSQ.png" width="100%">
                    </div>
                    <div class="right_p">
                        <p>- The curve of the edges needs to be smooth to reduce light scattering<br>
                        - They need to be placed exactly above each LEDs on the playground circuit board<br>
                        - They need to fit into the narrow space of the wood cage<br>
                        - They should conduct the light to the destination we designed for both the building and the stars<br>
                        </p>
                    </div>
            </div> 
            <div class='paragraph' style="margin-top:20px">
                <p>
                The light guide certainly couldn’t meet all the requirement at the first attempt. We adjusted the measurements as we tested the light guides, and after three iterations they could work properly.
                </p>
                <div class='image-middle-container' style='margin-top:30px'>
                    <img src="https://miro.medium.com/max/1400/1*fWR1czRmvMSCy4wkz-VUSQ.png" width="100%">
                </div>
                <p>
                    The secondary light guide is made of Acrylic rod. We cut it with the saw, and sand it with sanding machine then by hand.
                </p>
                <div class='image-middle-container' style='margin-top:30px'>
                    <img src="https://miro.medium.com/max/1400/1*TsQzvPzxqXGSZcPN-TNlig.png" width="100%">
                </div>
                <div class='image-middle-container' style='margin-top:30px'>
                    <img src="https://miro.medium.com/max/1400/1*KM9BP9fXhJ0Wp528fNHZmw.png" width="100%">
                </div>
                <p><br>
                    At first we worried about the light intensity, and it seemed that the light would be so dim after conducted by the two light guides. However, the result was very impressive. Actually we were surprised by the soft light when we test the frosted acrylic.
                </p>
                <div class='image-middle-container' style='margin-top:30px'>
                    <img src="https://miro.medium.com/max/1400/1*U0B6W9fvlqAD4TyeDVPuuQ.png" width="100%">
                </div>
            </div>    
            <div class='paragraph' style="margin-top:20px">
            <h4>Stars</h4>
                <p>
                    In order to create a dream-like atmosphere, we decided to add voronoi balls to the scene. They look like planets when illuminated ( and they look strange compared with other shapes).
                </p>
                <div class='image-middle-container' style='margin-top:30px'>
                    <img src="https://miro.medium.com/max/1400/1*rnw7qOPGPmquV0qR1E6-6g.png" width="100%">
                </div>
            </div>  
            <div class='paragraph' style="margin-top:20px">
                <h4>The cube cage</h4>
                <p>
                    We drew several sketches and made low-fidelity prototypes before laser cutting wood to make sure the measurements are right.</p>
                <div class='image-middle-container' style='margin-top:30px'>
                    <img src="https://miro.medium.com/max/1400/1*oI0DbX5IS-ZlLZOW7-BRgw.png" width="100%">
                </div>
                <div class='image-middle-container' style='margin-top:30px'>
                    <img src="https://miro.medium.com/max/1400/1*d4lmPJJRsGkFs-MQc6eFTw.png" width="100%">
                </div>
                <p><br>
                    We also design an enclosure to fix the circuit board and other components. Thanks to the careful calculation and sketching, we were able to 3d print the enclosure successfully at the first attempt.
                </p>
                <div class='image-middle-container' style='margin-top:30px'>
                    <img src="https://miro.medium.com/max/1400/1*mSQTE0U8BxqzsKRWvfiz2Q.png" width="100%">
                </div>
                <p><br>
                   To give the box a more pleasing appearance, we fixed its faces with screws instead of glue, and added a layer of acrylic over the wooden board as a protective surface.
                   </p>
                <div class='image-middle-container' style='margin-top:30px'>
                    <img src="https://miro.medium.com/max/1400/1*HmJUh9an8bqhj9Cc235cbg.png" width="100%">
                </div>
            </div>   
             <div class='paragraph' style="margin-top:20px">
                <h4>The stage curtain</h4>
                <p>
                    In order to enhance the sense of the scene, we decided to add a curtain to the stage. Again, we used screws only to fix the components for aesthetic reasons.
                </p>
                <div class='image-middle-container' style='margin-top:30px'>
                    <img src="https://miro.medium.com/max/1400/1*0E1jkYqMQLTYnF7u18fvOw.png" width="100%">
                </div>
            </div>              
        </div>
    </div>
    <div class="light-page">
        <div class="content-container">
            <div class="title">
                <div class = "title-color2"> </div>
                <div class="title-text">
                    <h4>Project Gallery</h4>
                    <h5>Final version</h5>
                </div>
            </div>
            <div class='paragraph'>
                <div class='image-middle-container' style='margin-top:30px'>
                    <img src="https://miro.medium.com/max/1400/1*r-FmqferkXYcH2WkhBxMNg.png" width="100%">
                </div>
                <div class='image-middle-container' style='margin-top:30px'>
                    <img src="https://miro.medium.com/max/1400/1*G-RfhZoYiOzCBx2Nn5V3rA.png" width="100%">
                </div>
                <div class='image-middle-container' style='margin-top:30px'>
                    <img src="https://miro.medium.com/max/1400/1*0rem25tzMCWMz2UuyrXQUw.png" width="100%">
                </div>
                <div class='image-middle-container' style='margin-top:30px'>
                    <img src="https://miro.medium.com/max/1400/1*sIMQvJrMnpGTqc4Bed5-7g.png" width="100%">
                </div>
            </div>

   
        </div>
    </div>
    <div class="light-page">
        <div class="content-container">
            <div class="ending-pointer">
                <div onclick="window.location.href='/#/hemago'">
                    <span class="next">Next Project</span><br/>
                    <span class="project">HemaGo</span>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</template>

<script>
export default {
        created() {  
        var delayInMilliseconds = 800;
        setTimeout(function() {
            document.body.removeChild(document.getElementById('Loading'))   
        }, delayInMilliseconds); 
    },
}
</script>


<style>

p{
    font-family: 'Source Sans Pro', sans-serif;
    margin:0 0 10px 0;
    line-height: 29px;
    font-size: 16px;
    letter-spacing: 0.05em;
    font-weight: 500;
    color: #000000;
    text-align:left;
    /* margin-bottom:5rem; */
}
h1{
    font-weight: bold;
    letter-spacing:0.1em;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 30px;
    line-height: 2.4rem;
    color: #202020;
    margin: 10px 0 0 0;
    text-align:left;
}
h2{
    font-weight: bold;
    letter-spacing:0.1em;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 20px;
    color: #202020;
    margin: 18px 0 11px 0;
    text-align:left;
}
h3{
    font-weight: bold;
    letter-spacing:0.1em;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 18px;
    color: #202020;
    line-height: 29px;
    text-align:left;
    /* text-transform: uppercase; */
    margin:0;
}
h4{
    font-weight:bolder;
    /* font-weight:1000; */
    letter-spacing:0.1em;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 24px;
    color:#000000;
    text-align:left;
    margin-top:0rem;
    margin-bottom:1rem;

}

h6{
    font-weight: bold;
    letter-spacing:1px;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 22px;
    color: #9d9d9d;
    margin: 12px 0 20px 0;
    text-align:left;

}
.paragraph{
    margin-top:2rem;
    margin-bottom:2rem;
}

p.video{
    margin: 30px 0 80px;
    text-align: center;
}
.quote{
    position: relative;
    border-left: dashed #a4a4a4 1px;
    margin: 20px;
    margin-right: 0;
    margin-left: 25px;
    padding-left: 8px;
    /* margin-bottom:20px; */
    /* font-style: italic; */
}

.quote>p>b.yellow{
    color: #F3D884;
}
.quote>p>b.orange{
    color: #F2994A;
}
.interview{
    display: flex;
    margin-top:4rem;
}
.interview2{
    display: flex;
}
.right_p{
    flex:1;
    margin-left: 3rem;
    }
.right_p2{
    flex:1;
    }
.left_p2{
    flex: 0 0 7rem;
}
.left_p{
    flex: 0 0 300px;
}
img{
    /* margin: 0px 0 5px 0; */
}
.large-img{
    margin:3rem 0 3rem 0;
}
.table-3>tbody>tr>td{
    padding: 20px 30px;
    font-family: Microsoft YaHei UI;
    font-style: normal;
    font-weight: normal;
    line-height: 29px;
    font-size: 15px;
    letter-spacing: 0.04em;
    border: 0;
    vertical-align: top;
}

.table-3>tbody>tr>td>h3{
    margin: 0;
}

.table-3-left{
    width: 35%;
}
.table>tbody>tr>td, .table>tbody>tr>th{
    border: solid #ffffff 2px;
    padding: 10px;
    vertical-align: middle;
    font-family: Microsoft YaHei UI;
    line-height: 27px;
    font-size: 15px;
    letter-spacing: 0.04em;
}

.table>tbody>tr>td{
    text-align: left;
}

.table>tbody>tr>th{
    text-align: center;
}

h3.black{
    font-family: Microsoft YaHei UI;
    font-style: normal;
    font-weight: bold;
    line-height: 29px;
    font-size: 15px;
    letter-spacing: 0.04em;
    color: #000000;
}

h3.gray{
    font-family: Microsoft YaHei UI;
    font-style: normal;
    font-weight: normal;
    line-height: 29px;
    font-size: 15px;
    letter-spacing: 0.04em;

    color: #828282;
}

td.dark-td{
    background-color: #f2f2f2; ;
    padding:15px 20px;
}

td.light-td{
    background-color: #ffffff; ;
    padding:15px 20px;
}
.dark-dark-page{
    position: relative;
    background-color: #E0E0E0;
    padding: 20px 20px 60px;
}
</style>
<template>
    <div class="animated fadeIn delay-0.5s">

    <!-- <div id="Loading">
        <div class="loader-inner ball-beat">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div> -->

  <div class = 'container'>
     <div class="content-container-large">
            <img src="static/pika/1.png" width='100%' class='large-img'>
    </div>
    <div class="first-page">
        <div class="content-container-title">
            <div class="parent">
                <div class = "left">
                    <div class="paragraph">
                        <!-- <h1>A-Watch</br>Child Asthma Management Toolkit</h1> -->
                        <h1>Welcome home</h1>
                        <h6>Pika, a web-based social robot</h6>
                        <p>
                        Pika is a social robot based on webcam that interacts with users through facial expressions on a touch-screen, facial recognition, and connections with the smart home system.
                        </p>
                    </div>
                    <div class="info">
                        <div class = "left-left">
                        <h3>TIMELINE</h3>
                        <h3>TOPIC</h3>
                        <h3>TEAM</h3>
                        </div>
                        <div class= "left-right">
                            <p>Nov 2018, 2 Weeks</p>
                            <p>Social Robot</p>  
                            <p>Personal Project</p>
                            </div>
                    </div>
                </div>
                <div class = "right">
                    <div class="paragraph">
                        <h2>My role</h2>
                            <p>
                                Designer<br>
                                Developer
                            </p>
                        <h2>Skills</h2>
                            <p>
                                Web Development<br>
                                Computer Vision
                            </p>
                        <h2>Toos</h2>
                            <p> 
                                Python<br>
                                OpenCV<br>
                                JavaScript<br>
                                Flask<br>
                                IFTTT APIs
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
                    <h5>&nbsp</h5>
                </div>
            </div>
            <div class="paragraph">
                <p class="video">
                <iframe width="100%" height="480" src="https://www.youtube.com/embed/j3pP9l7od_A" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </p>
                <h4>Why do we need a smart home assistant robot?</h4>
                <p>
                A social robot can act as a social interface for users to program their smart homes through more <b>natural interactions</b>, especially for those with <b>lower technology literacy</b>, such as older adults.   
                </p>
            </div>
            <div class='paragraph'>
                <h4>Input/Output Channel</h4>
                <div class="interview">
                <div class='left-p' style="width:50%">
                <p>
                <b>Input</b>
                <br>Touch screen
                <br>Camera
                </p>
                </div>
                <div class='right-p'>
                <p>
                <b>Output</b>
                <br>Text on screen
                <br>Gaze and facial expressions
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
                    <h4>Functionalities</h4>
                    <h5>&nbsp</h5>
                </div>
            </div>
            <div class="paragraph">
                <h4>USE CASES</h4>
                <div class='image-middle-container text-image' style='width:70%'>
                    <img src="/static/pika/greetings.gif" width="100%">
                </div>
                <h4>Greet you with facial expressions</h4>
                <p>The facial expression of the robot is coded with HTML Canvas and JavaScript. When you come home, she will greet you with a big smile.
                </p>
                <div class='image-middle-container text-image' style='width:70%'>
                    <img src="/static/pika/browser.gif" width="100%">
                </div>
            </div>
            <div class="paragraph">
                <h4>Recognition you and your families</h4>
                <p>
                After you ring the doorbell, Pika will start the camera and recognize people at the front door with face tracking and face recognition.
                </p>
            </div>
            <div class="paragraph">
                <h4>Unlock the door if you bring the key</h4>
                <p>
                After the robot recognizes you, it will start the key(QR code) detector automatically and welcome you in.
                </p>
            </div>
            <div class="paragraph">
                <h4>Connection with other devices</h4>
                <p>
                Pika opens the door for you, at the same time will trigger the applets of IFTTT to help you turn on the light or call your families.
                </p>
            </div>
            <div class="paragraph">
                <h4>SYSTEM DIAGRAM</h4>
                <div class='image-middle-container text-image' style='width:80%'>
                    <img src="/static/pika/4.png" width="100%">
                </div>
            </div>
            <div class="paragraph">
                <h4>Reflections</h4>
                <p>
                    Building things is fun!<br>
                    This might seem to be a pretty simple project, but for me, it was the first time I got exposed to interface programming and web development. Since then, I have learned more software/hardware technologies and prototyping tools, and gradually found where my passion lies.
                </p>
            </div>
        </div>
    </div>    

    <div class="light-page">
        <div class="content-container">
            <div class="ending-pointer">
                <div onclick="window.location.href='/#/spimo'">
                    <span class="next">Next Project</span><br/>
                    <span class="project">Spimo</span>
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
.title{
    margin-top: 20px;
    margin-bottom: 0px;
    padding-left: 0px;
    vertical-align: left;
    display:flex;
}



p{
    font-family: 'Lora', serif;
    margin:0;
    line-height: 29px;
    font-size: 16px;
    letter-spacing: 0.05em;
    font-weight: lighter;
    color: #000000;
    text-align:left;
    /* margin-bottom:5rem; */
}
h1{
    font-weight: bold;
    letter-spacing:2px;
    font-family: 'Lato', sans-serif;
    font-size: 30px;
    line-height: 2.4rem;
    color: #202020;
    margin: 10px 0 0 0;
    text-align:left;
}
h2{
    font-weight: bold;
    letter-spacing:0.8px;
    font-family: 'Lato', sans-serif;
    font-size: 20px;
    color: #202020;
    margin: 18px 0 11px 0;
    text-align:left;
}
h3{
    font-weight: bold;
    letter-spacing:0.8px;
    font-family: 'Lato', sans-serif;
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
    letter-spacing:0.6px;
    font-family: 'Lato', sans-serif;
    font-size: 24px;
    color:#000000;
    text-align:left;
    margin-top:0rem;
    margin-bottom:1rem;

}

h6{
    font-weight: bold;
    letter-spacing:1px;
    font-family: 'Lora', serif;
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
.image-middle-container{
    margin: 40px auto;
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
.text-image{
    width:86%;
    margin:40px auto;
}
.findings{
    margin:20px auto;
}
</style>

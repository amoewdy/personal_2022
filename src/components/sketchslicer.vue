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
            <img src="static/sketch slicer/title.png" width='100%' class='large-img'>
    </div>
    <div class="first-page">
        <div class="content-container-title">
            <div class="parent">
                <div class = "left">
                    <div class="paragraph">
                        <!-- <h1>A-Watch</br>Child Asthma Management Toolkit</h1> -->
                        <h1>Sketch Slicer</h1>
                        <h6>Get your assets faster.</h6>
                        <p>
                        A web-based image slicing tool that helps streamline the brand design workflow. It’s an internal tool I built for Punchcut as a Design Technologist Intern.    
                        <br>
                        </p>
                        <p>
                            <a style="text-decoration: none;color: rgb(0, 0, 0);border-bottom:1px dashed rgb(160, 160, 160);" href="https://prototype.punchcut.com/sketchslicer/" target="blank">
                            prototype.punchcut.com
                            </a>   
                        </p> 
                        
                    </div>
                    <div class="info">
                        <div class = "left-left">
                        <h3>TIMELINE</h3>
                        <h3>TOPIC</h3>
                        <h3>TEAM</h3>
                        <h3>TECH</h3>
                        </div>
                        <div class= "left-right">
                            <p>Feb - Mar 2020, 4 Weeks</p>
                            <p>Design tool</p>  
                            <p>
                            <p>Sixuan Li</p>
                            <p>
                                ReactJS<br>
                                Chalice, OpenCV<br> 
                                AWS Lambda/API Gateway
                            </p>

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
                                Interaction Design<br>
                                Software Development<br>
                            </p>
                        <h2>Toos</h2>
                            <p> 
                                Figma<br>
                                Python<br>
                                JavaScript/HTML/CSS
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
                    <h4>OVERVIEW</h4>
                    <h5>&nbsp</h5>
                </div>
            </div>
             <div class="paragraph">
                <h4>PROBLEM</h4>
                <p>
                Designers were spending a lot of time on tasks that could be <b>automated</b>.
                <br>One of which was visual designers having to convert their physical sketches into a digital form. They needed to individually crop, edit, and format their sketches in Adobe Photoshop or Illustrator, which usually took more than 10 minutes. 
                <br>And they seemed to have been <b>repeating</b> this process for a long time.
                </p>
            </div>
            <div class="paragraph">
                <div class='image-middle-container'>
                    <img src="/static/sketch slicer/problem.png" width="100%">
                </div>
            </div>
            <div class="paragraph">
                <h4>SOLUTION</h4>
                <p class="video">
                <iframe width="100%" height="480" src="https://www.youtube.com/embed/LgFAOAVAujU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </p>
                <p>
                    A web-based image slicing tool that:
                    <br>. Detect bounding boxes of any size on a sketch template
                    <br>. Auto enhance and crop the images
                    <br>. Save the selected sketches separately in a ZIP file   
                </p>
            </div>
            <div class="paragraph">
                <h4>Tech Stack</h4>
                <p>
                Front-end: Javascript, HTML/CSS, React<br>
                Back-end: Python, OpenCV, Chalice, AWS Lambda/API Gateway  
                </p>
            </div>
        </div>
    </div>
    <div class="light-page">
        <div class="content-container">
            <div class="title">
                <div class = "title-color2"> </div>
                <div class="title-text">
                    <h4>IMPLEMENTATION</h4>
                    <h5>&nbsp</h5>
                </div>
            </div>
            <div class="paragraph">
                <h4>User Journey</h4>
                <div class='image-middle-container text-image' style='width:100%'>
                    <img src="/static/sketch slicer/current workflow.png" width="100%">
                    <figcaption>Current workflow of VI design</figcaption>
                </div>
                <p>
                    To reduce the influence on the current workflow, I decide to build a tool that takes in scanned sketches and return organized images.
                    </p>
            </div>
            <div class="paragraph">
                <h4>Function Journey</h4>
                <p>
                    What I did with OpenCV to automate this process…
                </p>
                <div class='image-middle-container text-image' style='width:100%'>
                    <img src="/static/sketch slicer/function journey.png" width="100%">
                </div>

            </div> 
            <div class="paragraph">
                <h4>Functional Testing</h4>
                <p>
                    Improve performance for edge cases with more testing samples
                </p>
                <div class='image-middle-container text-image' style='width:100%'>
                    <img src="/static/sketch slicer/functional testing.png" width="100%">
                    <figcaption>Testing samples collected from my colleagues</figcaption>
                </div>
            </div>
            <div class="paragraph">
                <h4>Deployment</h4>
                <div class='image-middle-container text-image'>
                    <img src="/static/sketch slicer/deployment.png" width="100%">
                </div>
                <p>
                    The back-end is packaged into API and deployed to AWS Lambda, so it can be accessible for anyone from anywhere.
                    <br>The front-end is migrated to React so it can be integrated into the current internal toolkits with reusable components. Also, it helps to make sure all internal tools share one design system and belong to the same brand visually.
                </p>
            </div>
            <div class="paragraph">
                <h4>Future Steps</h4>
                <p>
                    A visionary version of this tool would be…
                </p>
                <p class="video">
                <iframe width="100%" height="480" src="https://www.youtube.com/embed/UVqAlS2X0dY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </p>
                <p>
                    P2 Features:
                    <br>. <b>Auto grouping</b> based on physical tags
                    <br>. <b>Enhancing settings</b> based on the pens, such as vectorization and contrast
                </p>
            </div>
         </div>
    </div>

    <div class="light-page">
        <div class="content-container">
            <div class="title">
                <div class = "title-color2"> </div>
                <div class="title-text">
                    <h4>REFLECTIONS</h4>
                    <h5>&nbsp</h5>
                </div>
            </div>
            <div class="paragraph">
                 <h4>Prototyping & Production</h4>
                <p>
                    It's relatively easy to achieve a proof of concept. 90% of the engineering work when building something to a production level is dealing with details, config, and edge cases. It might not be as fun as prototyping, but that’s what makes things work.
                </p>
                <div class="quote">
                    <p>
                        Functionality comes before usability.
                    </p>
                </div>
            </div>
            <div class="paragraph">
                 <h4>Design for Sustainability & Scale</h4>
                <p>
                After I built the proof of concept running on my laptop, I started doing research on how I could make it easy to maintain and iterate after I left the company.
                <br>The advantage of using serverless architecture is that it can easily scale. For an internal tool, which is expected to iterate frequently after it’s put to use, serverless would provide the flexibility we need at lower costs.
                </p>
            </div>
            <div class="paragraph">
                <h4>Seeking Guidance & Self-learning</h4>
                <p>
                Self-learning is an important capability that we couldn’t emphasize more, but that doesn’t mean we should sit in a corner and learn everything by ourselves silently. Whenever we get into a new area, it’ll never be wrong to ask experts for advice so we can be in the right direction.
               </p>
            </div>

        </div>
    </div>

    <div class="light-page">
        <div class="content-container">
            <div class="ending-pointer">
                <div onclick="window.location.href='/#/backupUX'">
                    <span class="next">Next Project</span><br/>
                    <span class="project">Phone Backup</span>
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
    color: #202020;
    margin: 10px 0 3px 0;
    text-align:left;
}
h2{
    font-weight: bold;
    letter-spacing:1px;
    font-family: 'Lato', sans-serif;
    font-size: 18px;
    color: #202020;
    margin: 18px 0 11px 0;
    text-align:left;
}
h3{
    font-weight: bold;
    letter-spacing:1px;
    font-family: 'Lato', sans-serif;
    font-size: 16px;
    color: #202020;
    line-height: 29px;
    text-align:left;
    /* text-transform: uppercase; */
    margin:0;
}
h4{
    font-weight:bolder;
    /* font-weight:1000; */
    letter-spacing:0.1px;
    font-family: 'Lato', sans-serif;
    font-size: 24px;
    color:#000000;
    text-align:left;
    margin-top:1.8rem;
    margin-bottom:0.8rem;

}

h6{
    font-weight: bold;
    letter-spacing:1px;
    font-family: 'Lato', sans-serif;
    font-size: 22px;
    color: #9d9d9d;
    margin: 0 0 20px 0;
    text-align:left;

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

<template>
    <div class="animated fadeIn delay-0.5s">
  <div class = 'container'>
     <div class="content-container-large">
            <img src="static/spimo/1.png" width='100%' class='large-img'>
    </div>
    <div class="first-page">
        <div class="content-container-title">
            <div class="parent">
                <div class = "left">
                    <div class="paragraph">
                        <h1>Spimo</h1>
                        <h6>Monitoring for Incentive Spirometry</h6>
                        <p>
                            Spimo is a device for recording, monitoring and analyzing patient’s recovery after lung surgery. It‘s our solution for Lung Technologies LLC during the Software/Hardware Lab at the University of Washington under the guidance of prof. John Ratti. </p>  
                    </div>
                    <div class="info">
                        <div class = "left-left">
                        <h3>TIMELINE</h3>
                        <h3>TOPIC</h3>
                        <h3>TEAM</h3>
                        <h3>SPONSOR</h3>
                        </div>
                        <div class= "left-right">
                            <p>Jan - Mar 2019, 10 Weeks<br>
                            IoT, Medical Device, Machine Learning<br>      
                            Chris Tran, Tian Feng, Sixuan Li<br>
                            Kerry Curran @Lung Technologies LLC </p>
                        </div>
                    </div>
                </div>
                <div class = "right">
                    <div class="paragraph">
                        <h2>My role</h2>
                            <p>
                                Product Designer </br>
                                Developer
                            </p>
                        <h2>Skills</h2>
                            <p>
                                Software Prototyping<br>
                                Interaction Design<br>
                            </p>
                        <h2>Toos</h2>
                            <p>
                                Raspberry Pi<br>
                                OpenCV<br>
                                TensorFlow Lite<br>
                                Bootstrap<br>                                
                                Arduino
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
                    <h4>Problem Scoping</h4>
                    <h5>&nbsp</h5>
                </div>
            </div>
            <div class="paragraph">
                <h4>The Incentive Spirometer</h4>
                <div class='image-middle-container'>
                    <img src="/static/spimo/2.png" width="100%">
                    <figcaption>Typical incentive spirometers</figcaption>
                </div>
                <p>
                    An incentive spirometer is a medical device used to help patients improve the functioning of their lungs and promote recovery after lung surgery or when they have a lung-related illness, such as pneumonia. Using the incentive spirometer teaches patient how to take slow deep breaths.
                </p>
            </div>
            <div class="paragraph">
                <h4>Why it doesn’t work well?</h4>
                <p>
                    The incentive spirometer is purely mechanical and has not had a major update in over 20 years. The doctors have no access to their patient’s spirometer usage and must trust that patients are using it as prescribed. However, that’s not always true.
                </p>
                <div class='image-middle-container'>
                    <img src="/static/spimo/3.png" width="100%">
                    <figcaption>The gap between the doctors and the patients</figcaption>
                </div>
            </div>
            <div class="paragraph">
                <h4>Original Design Goal</h4>
                <blockquote>
                    How can we improve the incentive spirometer to record and display the patient’s actual spirometer usage to the pulmonologists?
                </blockquote>
            </div>
        </div>
    </div>
    <div class="light-page">
        <div class="content-container">
            <div class="title">
                <div class = "title-color2"> </div>
                <div class="title-text">
                    <h4>User Research</h4>
                    <h5>&nbsp</h5>
                </div>
            </div>
            <div class="paragraph">
                <p>
                We indirectly interviewed patients and pulmonologists to find out the details of usage scenarios and what their pain points are in the current usage of spirometers.    
                </p>
            </div>
            <div class="paragraph">
                <h4>Patients</h4>
                <p>
                    We interviewed two people whose family has experienced lung surgery and used the incentive spirometer.
                </p>
            </div>
            <div class="paragraph">
                <h4>Pulmonologists</h4>
                <p>
                We interviewed pulmonologists indirectly through our client Lung Technologies LLC via emails.    
                </p>
            </div>
            <div class="paragraph">
                <h4>Touchpoints Analysis</h4>
                <div class='image-middle-container'>
                    <img src="/static/spimo/4.png" width="100%">
                    <figcaption>Blueprint of Treatment</figcaption>
                </div>
                <p>
                    The true pain point is <b>communication and execution</b>. Pulmonologist needs a more efficient way to know the recovery status of their patients' lungs, and patients need to perform breathing as prescribed in order to recover.
                </p>
            </div>  
            <div class="paragraph">
                <h4>Refined Design Goal</h4>
                <blockquote>
                How can we improve the incentive spirometer to help patients use it in the right way, and help pulmonologist to monitor the recovery of patients?    
                </blockquote>
            </div>
            <div class="paragraph">
                <h4>Insights</h4>
                <p>
                    Spimo should have two interfaces/aspects based on the different needs of the doctors and the patients. For patients, it should provide minimum information; for pulmonologist, it should be comprehensive.
                </p>
            </div>
            <div class="paragraph">
                <h4>Ideation</h4>
                <div class='image-middle-container'>
                    <img src="/static/spimo/5.png" width="100%">
                    <figcaption>Original Idea of Spimo</figcaption>
                </div>
                <p>
                    The original idea of Spimo is like a typical IoT device with cloud server doing all the computing.
                </p>
            </div>            
        </div>
    </div>
    <div class="light-page">
        <div class="content-container">
            <div class="title">
                <div class = "title-color2"> </div>
                <div class="title-text">
                    <h4>Design Constraints</h4>
                    <h5>&nbsp</h5>
                </div>
            </div>
            <div class="parent">
                <div class = "left" style="margin-top:0">
                        <div class='image-middle-container'style="margin-top:0">
                        <img src="/static/spimo/6.png" width="100%">
                        <figcaption>Stakeholder Map</figcaption>
                        </div>
                </div>
                <div class="right" style='background:none'>
                    <p>
                    After ideation, we interviewed production expert on medical products, collected design constraints, and took them into consideration during the concept design phase.    
                    </p>
                </div>
            </div>
            <div class="paragraph">
                <div class='image-middle-container'>
                    <img src="/static/spimo/7.png" width="100%">
                </div>
            </div> 
        </div>
    </div>
    <div class="light-page">
        <div class="content-container">
            <div class="title">
                <div class = "title-color2"> </div>
                <div class="title-text">
                    <h4>Product Design</h4>
                    <h5>&nbsp</h5>
                </div>
            </div>
            <div class="paragraph">
                <p>
                    After three iterations, we developed our final prototypes. The detailed report can be found <a style="text-decoration: none; color: rgb(0, 0, 0);border-bottom:1px dashed rgb(160, 160, 160);" href="https://docs.google.com/document/d/1lYISXqZL0g1TyaKzP_IOMxkH0jOTZy5tmiyPd0yLoGo/edit?usp=sharing" target="blank">here</a>.
                </p>
                <div class='image-middle-container'>
                    <img src="/static/spimo/8.png" width="100%">
                </div>
            </div>
            <div class="paragraph">
                <h4>
                    System Diagram
                </h4>
                <div class='image-middle-container'style="margin-top:0">
                    <img src="/static/spimo/9.png" width="100%">
                    <figcaption>Software (left) and hardware (right) diagram</figcaption>
                </div>
                <div class='image-middle-container'style="margin-top:0">
                    <img src="/static/spimo/10.png" width="100%">
                    <figcaption>Hardware Design</figcaption>
                </div>
                <div class='image-middle-container'style="margin-top:0">
                    <img src="/static/spimo/11.png" width="100%">
                    <figcaption>User Interface</figcaption>
                </div>
            </div>
            <div class="paragraph">
                <h4>
                    User Flow
                </h4>
                <div class='image-middle-container'style="margin-top:0">
                    <img src="/static/spimo/12.png" width="100%">
                    <figcaption>User flor of Spimo</figcaption>
                </div>
                <p>
                    In our solution, communication and execution problems are solved with a machine learning model and data visualization methods.
                </p>
                <p class="video">
                <iframe width="100%" height="480" src="https://www.youtube.com/embed/rCFL3LBgypQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </p>
            </div>
        </div>
    </div>

    <div class="light-page">
        <div class="content-container">
            <div class="ending-pointer">
                <div onclick="window.location.href='/#/sandword'">
                    <span class="next">Next Project</span><br/>
                    <span class="project">SandWord</span>
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
    font-family: 'Lora', serif;
    margin:0 0 10px 0;
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
</style>
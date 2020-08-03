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
            <img src="static/usertesting/title image.png" width='100%' class='large-img'>
    </div>
    <div class="first-page">
        <div class="content-container-title">
            <div class="parent">
                <div class = "left">
                    <div class="paragraph">
                        <!-- <h1>A-Watch</br>Child Asthma Management Toolkit</h1> -->
                        <h1>Product Design Internship at UserTesting</h1>
                        <h6>Building a video analysis tool for 260k users</h6>
                        <p>
                            This summer, I collaborated with a cross-functional team on the redesign of the video player sidebar to elevate the synthesis experience for 260k users on our remote user testing platform.
                        </p>
                        <br>
                        <p>
                            The process covers competitor research, usability testing, flow analysis, group brainstorming, wireframing, and deep collaboration with stakeholders.
                        </p>
                        
                    </div>
                    <div class="info">
                        <div class = "left-left">
                        <h3>TIMELINE</h3>
                        <h3>TEAM</h3>
                        <h3> &nbsp</h3>
                        </div>
                        <div class= "left-right">
                            <p>Jun 2020 - Aug 2020, 8 Weeks</p>
                            <p>Product Designer(me), User Researcher, PM, Engineers, Data Scientists</p>  
                            </div>
                    </div>
                </div>
                <div class = "right">
                    <div class="paragraph">
                        <h2>My role</h2>
                            <p>
                                Product Designer<br>
                            </p>
                        <h2>Skills</h2>
                            <p>
                                Interaction Design<br>
                                User Research<br>
                                Project Management<br>
                            </p>
                        <h2>Toos</h2>
                            <p> 
                                Paper & Pen<br>
                                Figma<br>
                                Sketch<br>
                                InVision<br>
                                Trello<br>
                                Mural
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
                <h4>User testing videos can be very long</h4>
                <p>
                When you conduct a remote user testing, the video sessions you receive from participants can be very long (usually 30 min each). But time is a valuable resource and you certainly don't want to spend hours processing the videos. You want to get insights quickly.
                </p>
                <p><br>
                The Current Video Player Sidebar is not satisfactory in doing this job. The workflow is pretty confusing, tools are hidden by complex interactions. This synthesis experience needs to be improved.
                </p>
            </div>
            <div class="paragraph">
                <div class='image-middle-container'>
                    <img src="/static/usertesting/current video player.png" width="100%">
                </div>
            </div>
            <div class="paragraph">
                <h4>Speed to Insights</h4>
                <p>
                How can we streamline the video analysis process, reduce the time user spend watching videos, and get insights more quickly with higher quality?</p>
            <p>
                <br>
                Please <a style="text-decoration: none;color: rgb(0, 0, 0);border-bottom:1px dashed rgb(160, 160, 160);" href="Mailto:sixuanli@outlook.com" target="blank"><b>contact me</b></a> if you are interested in this story : )

            </p>
            </div>
        </div>
    </div>


    <div class="light-page">
        <div class="content-container">
            <div class="ending-pointer">
                <div onclick="window.location.href='/#/camt'">
                    <span class="next">Next Project</span><br/>
                    <span class="project">A-Watch</span>
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

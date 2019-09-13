<template>
    <div class="animated fadeIn delay-0.5s">
        <div class="container">
            <!-- <div class="light-page"> -->
                <div class="content-container">
                <div class="parent-about">
                    <div class="title">
                    </div>
                    <div class="left-about">
                        <img src="/static/about/me.jpg" width="100%">
                    </div>
                    <div class="right-about">
                    <h2>Hello! This is Sixuan. </h2>
                    <p>
                        I'm currently a master student studying Technology Innovation at Global Innovation Exchange, University of Washington. With a background in Industrial Design, I work on creating things that assist people in a delightful way and exploring scenarios for emerging technologies.
                    </p>
                    <p>
                        I'm passionate about designing the dialog between machine and human. Trying to spice up the cold world of tech and incorporate human touch into smart devices, I equipped myself with skills in both human-centered design and software/hardware prototyping. 
                    </p>
                    <p>
                        Hope you enjoy my work : D
                    </p>
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
    margin:0.8rem auto;
    line-height: 29px;
    font-size: 14px;
    letter-spacing: 0.04em;
    font-weight: lighter;
    color: #000000;
    text-align:left;
    /* margin-bottom:5rem; */
}
h2{
    font-weight: 600;
    letter-spacing:1px;
    font-family: 'Lato', sans-serif;
    font-size: 30px;
    /* color: #333333;  */
    color: rgb(0, 0, 0);
    margin:20px 0 0 0 ;
    letter-spacing:0.6px;
    text-align:left;
}

.content-container {
    max-width: 1000px;
    margin: auto;
}
.parent-about{
    /* width:80%; */
    display:flex;
    /* margin:5rem 20rem; */
    float:middle;
}
.left-about{
    flex:1;
    margin-top:2rem;
    margin-right:4rem;
}
.right-about{
    margin-top:0rem;
    flex:1.2;
}

</style>

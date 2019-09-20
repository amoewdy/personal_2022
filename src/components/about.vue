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
                    <!-- <h2>Hello! This is Sixuan. </h2> -->
                    <h2 class='about-h2'>HELLO, </br>I'M SIXUAN. </h2>
                    <!-- <h2 class='about-h2'>WELCOME!</h2> -->
                    <p class='about-paragraph'>
                        I'm currently a master student studying Technology Innovation at Global Innovation Exchange, University of Washington. With a background in Industrial Design, I work on creating things that assist people in a delightful way and exploring scenarios for emerging technologies.
                    </p>
                    <p class='about-paragraph'>
                        I'm passionate about designing the dialog between machine and human. Trying to spice up the cold world of tech and incorporate human touch into smart devices, I equipped myself with skills in both human-centered design and software/hardware prototyping. 
                    </p>
                    <p class='about-paragraph'>
                        Hope you enjoy my work : D
                    </p>
                    <div class='icon-element-about'>
                        <ul>
                            <li><a class='icon' href="Mailto:sixuanli@outlook.com" target="blank"><i class="fa fa-envelope"></i></a></li>
                            <!-- <li><a class='icon' href="#"><i class="fa fa-dribbble"></i></a></li> -->
                            <li><a class='icon' href="https://github.com/amoewdy" target="blank"><i class="fa fa-github"></i></a></li>
                            <li><a class='icon' href="https://www.linkedin.com/in/sixuan-li-69a171155/" target="blank"><i class="fa fa-linkedin"></i></a></li>
                            <li><a class='icon' href="https://medium.com/@sixuanli" target="blank"><i class="fa fa-medium"></i></a></li>
                            <!-- <li><a class='icon' href="#"><i class="fa fa-facebook"></i></a></li> -->
                        </ul>
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

p.about-paragraph{
    font-family: 'Lora', serif;
    margin:1.2rem auto;
    line-height: 29px;
    font-size: 14px;
    letter-spacing: 0.04em;
    font-weight: lighter;
    color: #000000;
    text-align:left;
    /* margin-bottom:5rem; */
}
h2.about-h2{
    font-weight: 600;
    letter-spacing:1px;
    font-family: 'Lato', sans-serif;
    font-size: 30px;
    /* color: #333333;  */
    color: rgb(0, 0, 0);
    margin:20px 0 0 0 ;
    letter-spacing:1rem;
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
    flex:1.1;
}

 li{
    list-style:none;
    float:left;
    margin:0px 5px 10px 0px;
    backface-visibility:hidden;
  }
  a.icon{
    color:#C4C4C4;
    padding:0px 10px 20px 10px;
    border:1px solid #C4C4C4;
    /* border-radius:50px; */
  }
  .fa-facebook{
    padding:12px 4px 3px 3px;
  }
  .fa-dribbble{
    padding:12px 2px 3px 2px;
  }
  .fa-envelope{
    padding:12px 2px 3px 2px;
  }
  .fa-linkedin{
    padding:12px 2px 3px 3px;
  }
  .fa-github{
    padding:12px 2px 3px 2px;
  }
  .fa-medium{
    padding:12px 2px 3px 2px;
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
.icon-element-about{
    margin-left:-2.5rem;
    }

</style>

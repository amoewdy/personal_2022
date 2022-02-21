<template>
    <div class="animated fadeIn delay-0.5s">
        <div class = 'container'>
            <!-- <div class="light-page"> -->
                <div class="content-container">
                    <div class="title">
                    </div>
                    <div class="paragraph">
                    <div class='image-middle-container' style='margin-top:30px'>
                    <img src="/static/craft/china.png" width="100%">
                    </div>
                    </div>
                    <div class="paragraph">
                    <p>
                    In the summer of 2015, I learned how to draw blue-and-white porcelain and make porcelain in Jingdezhen, the home of ceramics. Unlike painting on paper, blue-and-white porcelain pigments are very viscous, so it takes more time to draw.
                    </p>
                    </div>
                
                    <div class="paragraph">
                    <div class='image-middle-container' style='margin-top:30px'>
                    <img src="/static/craft/architecture.png" width="100%">
                    <p>
                        The picture on the left is the architectural model I made for Esplanade at Singapore. It looks like a durian :)
                    </p>
                    </div> 
                    </div>
                        <div class="light-page">
                            <div class="content-container">
                                <div class="ending-pointer">
                                    <div onclick="window.location.href='/#/'">
                                        <span class="next">Next Project</span><br/>
                                        <span class="project">To Be Continued</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            <!-- </div> -->
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
    margin:0;
    line-height: 29px;
    font-size: 16px;
    letter-spacing: 0.05em;
    font-weight: 500;
    color: #000000;
    text-align:left;
    /* margin-bottom:5rem; */
}
</style>

---
layout: home
background: "/assets/image/ouroboros/ouro-bg.png"
---
<style>
body {
  backdrop-filter: brightness(10%); blur(10px);
  background-image: url(/assets/image/bg.jpg);
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
.constraint {
  position: relative;
  margin: auto;
  width: 0%;
  padding: 150px;
   animation: float 6s ease-in-out infinite;
}
.logo {
  position: absolute;
  top: 0;
  left: 0;
}

@keyframes float {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-5px);
  }

  100% {
    transform: translateY(0);
  }
}
.message {
    background-image: linear-gradient(#fff, rgba(153, 153, 153, 1));
    color: transparent;
    background-clip: text;
}

</style>
<div class="constraint">
<img id="azlogo" class="logo" src="/assets/image/ouroboros/ouro-az.png" alt="alpha.zero" width="300"/>
<img id="ouroboros" class="logo" src="/assets/image/ouroboros/ouro-snek.png" alt="OUROBOROS" width="300"/>
</div>

<br>
<p align="center"><font size="5"><a href="/music/10/page.html"><span class="message"> OUROBOROS <br> NOVEMBER 15TH </span></a></font></p>
<br>
<p align="center"><font size="6">
<span id="about">
<a href="/about/"><font color ="#FFBEBE">ABOUT</font></a> 
</span>
/ 
<span id="posts">
<a href="/blog/"><font color ="#FFBEBE">BLOG</font></a>
</span>
/
<span id="music">
<a href="/music/"><font color ="#FFBEBE">MUSIC</font></a>
</span>


</font></p>
<script>
var speed = 33
var i = 0
function rotate() {
    document.getElementById("ouroboros").style.transform = "rotate(-"+ (0.2*i) +"deg)";
    if (0.2*i >= 360){
      i = 0;
    }
    i++;
    setTimeout(rotate, speed);
}
rotate()
</script>
<br>
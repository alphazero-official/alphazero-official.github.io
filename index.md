---
layout: home
background: "/assets/image/ouroboros/ouro-bg.png"
---
<style>
.constraint {
  position: relative;
  margin: auto;
  width: 0%;
  padding: 150px;
}
.logo {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
<div class="constraint">
<img id="azlogo" class="logo" src="/assets/image/ouroboros/ouro-az.png" alt="alpha.zero" width="300"/>
<img id="ouroboros" class="logo" src="/assets/image/ouroboros/ouro-snek.png" alt="OUROBOROS" width="300"/>
</div>

<br>
<p align="center"><font size="5"><a href="/music/9/page.html"><span id="message"> OUROBOROS <br> NOVEMBER 15TH </span></a></font></p>
<br>
<p align="center"><font size="6">
<span id="about">
<a href="/about/"><font color ="#AAAAFF">ABOUT</font></a> 
</span>
/ 
<span id="posts">
<a href="/blog/"><font color ="#AAAAFF">BLOG</font></a>
</span>
/
<span id="music">
<a href="/music/"><font color ="#AAAAFF">MUSIC</font></a>
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
---
layout: home
---

<p align="center"><img id="azlogo" src="/assets/image/AZ2022.png" alt="AZ2022" width="200"/></p>
<br>
<p align="center"><font size="5"><span id="message"> i messed up </span></font></p>
<script>
const messages = ["Welcome.", "Greetings.", "Hey", "aloha zero", "oopsie", "Good grief", "alpha.zero", "ohohohoho", "//////////", "/\\/\\/\\", "mmmmmmmmmmmmmmmmmmmmmmmmmmm", "Falkoyre was here", "w", "                                                   sorry"]
const rand = Math.floor(Math.random() * messages.length)
var time = new Date().getHours();
if (time>=6 && time<12)
{messages[5] = "Good morning";}
if (time>=12 && time<18)
{messages[5] = "Good afternoon";}
if (time>=18 || time<2)
{messages[5] = "Good evening";}
if (time>=2 && time<6)
{messages[5] = "Kinda late innit?";}
console.log(rand+1);
if (rand == 4) { document.getElementById("azlogo").style.transform = "rotate("+ (25 % 360) +"deg)" }


var i = 0;
var txt = messages[rand]; /* The text */
var speed = 25; /* The speed/duration of the effect in milliseconds */
function typeWriter() {

  if (i < txt.length) {
    document.getElementById("message").textContent += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
document.getElementById("message").textContent="";
typeWriter();
</script>
<br>
<p align="center"><font size="6">
<span id="about">
<a href="/about/"><font color ="#AAAAFF">ABOUT</font></a> 
</span>
/ 
<span id="music">
<a href="/music/"><font color ="#AAAAFF">MUSIC</font></a>
</span>
/
<span id="posts">
<a href="/posts/"><font color ="#AAAAFF">POSTS</font></a>
</span>

</font></p>
<br>
<p align="center"><font color="#BBBBBB" size="4">We're still under development. Be patient!</font></p>
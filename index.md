---
layout: home
---

<p align="center"><img id="azlogo" src="/assets/image/AZ2022.png" alt="AZ2022" width="200"/></p>
<br>
<p align="center"><font size="5"><span id="message"> Javascript error! help </span></font></p>
<script>
const messages = ["Welcome.", "Greetings.", "Hey", "aloha zero", "oopsie", "Good grief"]
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
document.getElementById("message").textContent=messages[rand];
console.log(rand+1);
if (rand == 4) { document.getElementById("azlogo").style.transform = "rotate("+ (25 % 360) +"deg)" }
</script>
<br>
<p align="center"><font size="6">
<a href="/about/"><font color ="#AAAAFF">ABOUT</font></a> 
/ 
<a href="/posts/"><font color ="#AAAAFF">POSTS</font></a>
</font></p>
<br>
<p align="center"><font color="#BBBBBB" size="4">We're still under development. Be patient!</font></p>
<p align="center"><font color="#AAAAAA" size="3">(Everything is subject to change)</font></p>
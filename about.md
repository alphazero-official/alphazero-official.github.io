---
layout: page
title: About
permalink: /about/
header: true
---
**alpha.zero** (stylised &alpha;lpha.zero) is a development studio and community started by 1oolm in 2022. <br>
Its purpose is to express myself and create unique content, whether it be games, music or more.
<br><br>
[TBA]
<br>
<style>
.credit {
text-align:left;
}
</style>
### alpha.zero is:   
{% for member in site.data.staff %}
<h4>
<a href="{{ member.link }}"><font color="{{ member.color }}">{{ member.name }}</font></a> <div class="credit">{{ member.credit }}</div>
</h4>
{% endfor %}
<br>
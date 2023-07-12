---
layout: page
title: About
permalink: /about/
---
alpha.zero is a development studio started by 1oolm in 2022. We do uhh.. can we update this page later? Somehow nothing happened in an entire year.   

    
### alpha.zero is:   
{% for member in site.about %}
<h4>
<a href="{{ member.link }}"><font color="{{ member.color }}">{{ member.name }}</font></a>: {{ member.credit }}
</h4>
{% endfor %}
[TBA] <font color="#AAAAAA">some other people too?</font>

---
layout: page
title: Team
permalink: /team/
---

### alpha.zero is:   
{% for member in site.about %}
<h4>
<a href="{{ member.link }}"><font color="{{ member.color }}">{{ member.name }}</font></a>: {{ member.credit }}
</h4>
{% endfor %}
[TBA] <font color="#AAAAAA">some other people too?</font> <br>
<br>
<br>

#### You can also view lists of [contributors](/contributors/), [acknowledgements](/acknowledgements/) and [special thanks](/specialthanks/)

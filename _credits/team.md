---
layout: page
title: Team
permalink: /team/
---
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
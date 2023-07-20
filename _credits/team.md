---
layout: page
title: Team
permalink: /team/
---
<font color="#CCCCCC" size="5"> <a href="/contributors/">Contributors</a> / <a href="/acknowledgements/">Acknowledgements</a></font>
<br>
  <div id="line"><hr /></div>
<br>
### alpha.zero is:   
{% for member in site.data.staff %}
<h4>
<a href="{{ member.link }}"><font color="{{ member.color }}">{{ member.name }}</font></a>: {{ member.credit }}
</h4>
{% endfor %}
[TBA] <font color="#AAAAAA">some other people too?</font> <br>
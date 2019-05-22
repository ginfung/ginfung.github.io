---
layout: page
title: PDF repo
permalink: /pdf/
---
{% for file in site.pdf %}
<p>{{ file.url }}</p>
{% endfor %}
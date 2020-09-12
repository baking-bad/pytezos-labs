{%- extends 'markdown.tpl' -%}

{% block stream %}
<div class="{{ output.name }}">
    <pre><span class="stream-name">{{ output.name }}</span><br/>{{ output.text | e }}</pre>
</div>
{% endblock stream %}

{% block data_html %}
<div class="embedded-html">
{{ output.data['text/html'] }}
</div>
{% endblock data_html %}

{% block data_text %}
<div class="result">
    <pre>{{ output.data['text/plain'] | e }}</pre>
</div>
{% endblock data_text %}

{% block error %}
<div class="error">
    <pre>{{ output.ename }}: {{ output.evalue }}</pre>
</div>
{% endblock error %}
---
title: Lab Updates
layout: hero_page
fallback_color: 7695ce
hero_image: img/hero_backgrounds/Lab-Updates.jpg
---
<div class="layout--archive js-all">
  {%- include tags.html -%}
  <div class="js-result layout--archive__result d-none">
    {%- include article-list.html articles=site.posts type='brief' show_info=true reverse=true group_by='year' -%}
  </div>
</div>

<script>
  {%- include scripts/archieve.js -%}
</script>

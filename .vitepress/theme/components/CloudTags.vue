<template>
  <div class="cloud-tags">
    <ul
      class="cloud"
      data-show-value
      role="navigation"
      aria-label="Webdev tag cloud"
    >
      <li><a data-weight="4" href="/tag/http">HTTP</a></li>
      <li><a data-weight="2" href="/tag/ember">Ember</a></li>
      <li><a data-weight="5" href="/tag/sass">Sass</a></li>
      <li><a data-weight="8" href="/tag/html">HTML</a></li>
      <li><a data-weight="6" href="/tag/flexbox">FlexBox</a></li>
      <li><a data-weight="4" href="/tag/api">API</a></li>
      <li><a data-weight="5" href="/tag/vuejs">VueJS</a></li>
      <li><a data-weight="6" href="/tag/grid">Grid</a></li>
      <li><a data-weight="3" href="/tag/rest">Rest</a></li>
      <li><a data-weight="9" href="/tag/javascript">JavaScript</a></li>
      <li><a data-weight="3" href="/tag/animation">Animation</a></li>
      <li><a data-weight="7" href="/tag/react">React</a></li>
      <li><a data-weight="8" href="/tag/css">CSS</a></li>
      <li><a data-weight="1" href="/tag/cache">Cache</a></li>
      <li><a data-weight="3" href="/tag/less">Less</a></li>
    </ul>
  </div>
</template>
<script setup>

</script>
<style lang='scss' scope>
.cloud {
  list-style: none;
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 40rem;
  line-height: 2.5rem;
  background: #fff;
  padding: 0.5rem;
  box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.3);
}

ul.cloud a {
  color: #a33;
  display: block;
  font-size: 1.5rem;
  padding: 0.125rem 0.25rem;
  text-decoration: none;
  position: relative;
}

ul.cloud a[data-weight="1"] {
  --size: 1;
}

ul.cloud a[data-weight="2"] {
  --size: 2;
}

ul.cloud a[data-weight="3"] {
  --size: 3;
}

ul.cloud a[data-weight="4"] {
  --size: 4;
}

ul.cloud a[data-weight="5"] {
  --size: 5;
}

ul.cloud a[data-weight="6"] {
  --size: 6;
}

ul.cloud a[data-weight="7"] {
  --size: 7;
}

ul.cloud a[data-weight="8"] {
  --size: 8;
}

ul.cloud a[data-weight="9"] {
  --size: 9;
}

ul.cloud a {
  --size: 4;
  font-size: calc(var(--size) * 0.25rem + 0.5rem);
  /* ... */
}

ul.cloud[data-show-value] a::after {
  content: " (" attr(data-weight) ")";
  font-size: 1rem;
}

ul.cloud li:nth-child(n + 1) a {
  --color: #a33;
}

ul.cloud li:nth-child(2n + 1) a {
  --color: #181;
}

ul.cloud li:nth-child(3n + 1) a {
  --color: #33a;
}

ul.cloud li:nth-child(4n + 1) a {
  --color: #c38;
}

ul.cloud li a {
  color: var(--color);
}

ul.cloud a::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  width: 0;
  height: 100%;
  background: var(--color);
  transform: translate(-50%, 0);
  opacity: 0.15;
  transition: width 0.25s;
}

ul.cloud a:focus::before,
ul.cloud a:hover::before {
  width: 100%;
}

@media (prefers-reduced-motion) {
  ul.cloud * {
    transition: none !important;
  }
}
</style>




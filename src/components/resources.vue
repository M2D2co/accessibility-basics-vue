<template>
  <aside id="resources" class="card">
    <h2 class="title">Links</h2>
    <ul>
      <li>
        Conformance Testing
        <ul>
          <li><a class="resource" href="https://accessibilityinsights.io/docs/en/web/overview" rel="noopener" target="_blank">Accessibility Insights for Web</a></li>
          <li><a class="resource" href="https://www.deque.com/axe/" rel="noopener" target="_blank">Axe</a></li>
          <li><a class="resource" href="https://developers.google.com/web/tools/lighthouse/" rel="noopener"
              target="_blank">Lighthouse</a></li>
        </ul>
      </li>
      <li>
        Development Environment
        <ul>
          <li><a class="resource" href="https://stylelint.io/" rel="noopener" target="_blank">stylelint</a></li>
          <li><a class="resource" href="https://eslint.org/" rel="noopener" target="_blank">ESLint</a></li>
          <li><a class="resource" href="https://github.com/htmlhint/HTMLHint" rel="noopener" target="_blank">HTMLHint</a></li>
        </ul>
      </li>
      <li>
        Validators
        <ul>
          <li><a class="resource" href="https://jigsaw.w3.org/css-validator/" rel="noopener" target="_blank">W3C CSS Validation Serivce</a></li>
          <li><a class="resource" href="https://validator.w3.org/" rel="noopener" target="_blank">W3C Markup Validation Serivce</a></li>
        </ul>
      </li>
      <li>
        Visualization
        <ul>
          <li><a class="resource" href="http://khan.github.io/tota11y/" rel="noopener" target="_blank">Tota11y</a></li>
          <li><a class="resource" href="https://wave.webaim.org/extension/" rel="noopener" target="_blank">Wave</a></li>
        </ul>
      </li>
      <li>
        Other
        <ul>
          <li><a class="resource" href="./pages/accessibility-statement.html">
            Accessibility Statement</a>
          </li>
        </ul>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'Resources',
};
</script>

<style lang="scss" scoped>
  @use '../assets/sass/theme';
  ul {
    ul { font-size: smaller; }
    & > li { padding-top: 1ex; }
  }
  li { list-style-type: none; }
  ul { padding-left: 0; }
  .resource {
    display: block;
    padding: .25ex 1ch;
    &:before {
      content: url('../assets/img/link.svg');
      display: inline-block;
      vertical-align: middle;
      margin-right: 1ch;
    }
  }
</style>

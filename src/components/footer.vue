<template>
  <footer id="footer" class="footer">
    <div>Happy Coding!</div>
    <div class="twitter">
      <a href="https://twitter.com/Martine_Dowden" rel="noopener" target="_blank">@Martine_Dowden</a>
      <a href="https://twitter.com/mrdowden" rel="noopener" target="_blank">@mrdowden</a>
    </div>
  </footer>
</template>

<script>

export default {
  name: 'Footer',
};
</script>

<style lang="scss" scoped>
  @use '../assets/sass/theme';

  .footer {
    border-top: solid 1px theme.$accent2;
    margin-top: auto;
    text-align: center;
    padding: theme.$default-padding;
  }
  .twitter {
    display: flex;
    justify-content: space-around;
    & a:before {
      content: url('../assets/img/twitter.svg');
      display: inline-block;
      width: 1.5rem;
    }
  }

  @media(min-width: theme.$small) {
    .footer {
      align-items: center;
      display: flex;
      justify-content: space-between;
    }
    .twitter a { margin-left: 3ch; }
  }
</style>

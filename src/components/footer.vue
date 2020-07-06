<template>
  <div id="footer" class="footer">
    <div>Happy Coding!</div>
    <div class="twitter">
      <div class="link" v-on:click="navigate('https://twitter.com/Martine_Dowden')">@Martine_Dowden</div>
      <div class="link"  v-on:click="navigate('https://twitter.com/Martine_Dowden')">@mrdowden</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Footer',
  methods: {
    navigate(val) { this.$window.location.href = val; },
  },
};
</script>

<style lang="scss" scoped>
  @use '../assets/sass/theme';

  .footer {
    color: theme.$accent;
    border-top: solid 1px theme.$accent2;
    margin-top: auto;
    text-align: center;
    padding: theme.$default-padding;
  }
  .twitter {
    display: flex;
    justify-content: space-around;
    & .link:before {
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
    .twitter .link { margin-left: 3ch; }
  }
</style>

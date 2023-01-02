<template>
  <div class="main bg_White">
    <div class="mainBox">
      <Toast />
      <header class="title">THUMBNAILㅡ<br />MAKER</header>
      <Nuxt class="bd_Gray" />
      <p class="copyright Caption1 ft_Black_40">
        Copyright 2023. samankeyc All rights reserved.
      </p>
    </div>
  </div>
</template>

<script>
import Toast from '~/components/default/default/toast';
export default {
  components: {
    Toast
  }
}
</script>

<style lang="scss" scoped>
.main {
  @include flex-item(center);
  height: 100%;

  .mainBox {
    .title {
      border-radius: 6.25rem;
      font-size: 3.75rem;
      font-weight: 700;
    }

    .copyright {
      padding-top: 0.5rem;
    }
  }
}
</style>

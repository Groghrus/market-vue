<template>
  <div class="home-title">
    <h1><span class="text-animation">Market</span></h1>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';

.home-title {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  h1 {
    text-align: center;
    font-size: 10rem;
    color: #000000;
    text-transform: uppercase;
    @include mediaSm {
      font-size: 4rem;
    }
  }
}

.text-animation {
  animation: textColor 2s ease infinite;
  @keyframes textColor {
    0% {
      color: #3F51B5;
    }
    50% {
      color: #9d6fe8;
    }
    100% {
      color: #3F51B5;
    }
  }
}

</style>

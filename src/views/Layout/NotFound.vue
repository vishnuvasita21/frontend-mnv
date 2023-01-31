<template>
  <div class="w-100vh h-100vh text-center">
    <div class="p-4">
      <span style="font-size: 40px">Page not found!!</span>
      <lottie-animation path="4041.json" :width="500" :height="500" />
    </div>
  </div>
</template>
<script>
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue"; // import lottie-vuejs

export default {
  components: {
    LottieAnimation,
  },
};
</script>

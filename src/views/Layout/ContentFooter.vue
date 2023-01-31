<template>
  <footer class="footer px-4 mx-2">
    <div>
      <div>
        <div class="copyright text-right text-lg-right text-muted">
          <div class="d-flex justify-content-end align-items-center">
            <div class="m-0 p-0">
              © {{ year }}
              <a
                href="https://www.creative-tim.com"
                class="font-weight-bold ml-1"
                target="_blank"
                >Crafted by Infinity group
              </a>
            </div>
            <div class="m-0 p-0">
              <lottie-animation class="m-0 p-0" path="infi.json" :width="30" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue"; // import lottie-vuejs

export default {
  components: {
    LottieAnimation,
  },
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>
<style></style>

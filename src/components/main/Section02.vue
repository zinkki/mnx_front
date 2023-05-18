<template>
  <section class="js__parallax-window" id="move">
    <div class="container">
      <div class="mt-5">
        <h1>
          <b class="bold">오토매닉스는</b> 귀사의 <span class="text-white" id="typed1"></span><br />
          이벤트와 함께합니다
        </h1>
      </div>
      <div id="typed-strings1">
        <h1>도전적인</h1>
        <h1>진취적인</h1>
        <h1>성공적인</h1>
      </div>
    </div>
  </section>
</template>

<script>
import Typed from "typed.js";
import script from "../../assets/js/parallax";
export default {
  name: "Section02-",
  components: {},
  created() {
    script;
  },
  mounted() {
    if (document.getElementById("typed1")) {
      // eslint-disable-next-line no-unused-vars
      var typed = new Typed("#typed1", {
        stringsElement: "#typed-strings1",
        typeSpeed: 120,
        backSpeed: 120,
        backDelay: 500,
        startDelay: 1000,
        loop: true,
      });
    }
  },
};
</script>

<style></style>

<template>
  <header class="masthead">
    <div class="container">
      <div class="masthead-subheading-top">
        <span class="text-white" id="typed"></span>
      </div>
      <div id="typed-strings">
        <h1>전문성, 신뢰성, 차별성</h1>
      </div>
      <div class="masthead-heading">
        자동차 & 모터스포츠<br />
        비즈니스 솔루션 전문 기업
      </div>
      <div class="masthead-subheading">
        자동차에 열정을 가진 이들이 모여 만든 오토매닉스는<br />
        국내외 자동차 유관 최고의 클라이언트들과<br />
        파트너십 관계를 맺고 있습니다.<br />
        자동차 유관기업 행사 및 제휴, BTL프로모션,<br />
        모터스포츠 대회 기획 및 운영, E스포츠까지<br />
        자동차를 주제로 다양한 분야의 전문가들로 이루어져 있습니다.
      </div>
    </div>
  </header>
</template>

<script>
import Typed from "typed.js";

export default {
  name: "Header-",
  components: {},
  data() {
    return {};
  },
  mounted() {
    if (document.getElementById("typed")) {
      // eslint-disable-next-line no-unused-vars
      var typed = new Typed("#typed", {
        stringsElement: "#typed-strings",
        typeSpeed: 90,
        backSpeed: 90,
        backDelay: 200,
        startDelay: 500,
        loop: true,
      });
    }
  },
};
</script>

<style></style>

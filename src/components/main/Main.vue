<template>
  <Header />
  <!-- <Section01 /> -->
  <Section00 />
  <Section02 />
  <Section03 />
  <Section04 />
  <Section05 />
  <Section06 />
  <Section07 />
  <Section08 />
</template>

<script>
import Header from "./Header.vue";
import Section00 from "./Section00.vue";
// import Section01 from "./Section01.vue";
import Section02 from "./Section02.vue";
import Section03 from "./Section03.vue";
import Section04 from "./Section04.vue";
import Section05 from "./Section05.vue";
import Section06 from "./Section06.vue";
import Section07 from "./Section07.vue";
import Section08 from "./Section08.vue";
export default {
  name: "Main-",
  components: {
    Header: Header,
    Section00: Section00,
    // Section01: Section01,
    Section02: Section02,
    Section03: Section03,
    Section04: Section04,
    Section05: Section05,
    Section06: Section06,
    Section07: Section07,
    Section08: Section08,
  },
  data() {
    return {};
  },
};
</script>

<style></style>

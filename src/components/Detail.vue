<template>
  <section class="page-section">
    <div class="container">
      <div v-if="getData">
        <h1>/:id 값 : {{ $route.params.id }}</h1>
        <h2>Detail.vue</h2>
        <h3>글 제목:{{ getData[$route.params.id].board_title }}</h3>
        <h3>글 내용: {{ getData[$route.params.id].board_content }}</h3>
        <p>작성자: {{ getData[$route.params.id].board_user_id }}</p>

        <router-view />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Detail-",
  props: {
    getData: Array,
  },
  components: {},
};
</script>

<style></style>

<template>
  <section class="page-section">
    <div class="container">
      <div v-if="getData">
        <div v-for="(getData, idx) in getData" :key="idx">
          <h5 @click="$router.push(`/detail/${idx}`)">{{ getData.board_title }}</h5>
          <p>{{ getData.board_content }}</p>
          <p>author:{{ getData.board_user_id }}</p>
          <p>{{ getData.board_date }}</p>
          <hr />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "List-",
  components: {},
  methods: {},
  props: {
    getData: Array,
  },
};
</script>

<style></style>

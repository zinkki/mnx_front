<template>
  <div>
    <Navi />
    <!-- /list => <List/>, / => <Home/> -->
    <router-view :getData="getData" />
  </div>
</template>

<script>
import "./assets/css/styles.css";
import Navi from "./components/Nav.vue";
//import axios from "axios";
export default {
  name: "App",
  components: {
    Navi: Navi,
  },
  data() {
    return {
      getData: null,
    };
  },
  created() {
    //   axios
    //     .get("/api/test")
    //     .then((res) => {
    //       this.getData = res.data;
    //       console.log("axios success...");
    //     })
    //     .catch((err) => console.log(err));
  },
};
</script>

<style></style>

<template>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
    <div class="container">
      <a class="navbar-brand" href="/"><img src="../assets/img/logo.svg" alt="..." /></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i class="fas fa-bars ms-1"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
          <li class="nav-item"><a class="nav-link" href="/">KR</a></li>
          <li class="nav-item"><a class="nav-link" href="/">EN</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import script from "../assets/js/scripts";
export default {
  name: "Nav-",
  components: {},
  created() {
    script;
  },
};
</script>

<style></style>

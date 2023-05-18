<template>
  <section class="page-section" id="map"></section>
</template>

<script>
export default {
  name: "Section07-",
  components: {},
  mounted() {
    const {kakao} = window;
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.42278225290876, 126.88704357661686),
      level: 4,
    };
    const map = new kakao.maps.Map(container, options);

    const markerPosition = new kakao.maps.LatLng(37.42278225290876, 126.88704357661686);
    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    marker.setMap(map);
  },
};
</script>

<style></style>

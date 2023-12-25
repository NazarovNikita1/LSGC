<template>
  <div
    style="
      display: flex;
      flex-direction: row;
      padding: 4vh;
      justify-content: space-between;
      background-color: #2b303a;
    "
  >
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style scoped>
.vertical-line {
  border-left: 1px solid #ffffff; /* Change the color as needed */
  height: 100%; /* Change the height as needed */
  width: 0;
}
.footer-block {
  display: flex;
  flex-direction: column;
  gap: 1.5vh;
  color: #fff;
}
</style>

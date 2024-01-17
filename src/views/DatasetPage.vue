<template>
  <div class="dataset-container">
    <p>
      In the following links you can find examples for testing your systems:
      <br />
      <a :href="getDownloadLink(1)" download>Text 1</a>
      <br />
      <a :href="getDownloadLink(2)" download>Text 2</a>
      <br />
      <a :href="getDownloadLink(3)" download>Text 3</a>
      <br />
      <a :href="getDownloadLink(4)" download>Text 4</a>
      <br />
      <a :href="getDownloadLink(5)" download>Text 5</a>
    </p>
  </div>
</template>

<script>
export default {
  methods: {
    getDownloadLink(number) {
      return `/src/views/big_zachini_for_edition_${number}.txt`;
    }
  }
}
</script>

<style>
.dataset-container {
  z-index: 10;
  padding: 5vh;
  color: white;
  font-size: 1.2em;
}
</style>

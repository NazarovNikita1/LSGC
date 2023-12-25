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
    <div class="footer-block">
      <p>ООО "НТР"</p>
      <p>
        127521, ГОРОД МОСКВА, 12-Й ПРОЕЗД МАРЬИНОЙ РОЩИ, ДОМ 9, СТРОЕНИЕ 1, ЭТАЖ
        2
      </p>
      <p>info@ntr.ai</p>
      <p>+7 495 230-08-99</p>
      <p>ОГРН: 1087746626549</p>
      <p>ИНН: 7718704197</p>
    </div>
    <div class="footer-block">
      <div class="vertical-line"></div>
    </div>
    <div class="footer-block">
      <p>ООО "НТР Томск"</p>
      <p>634055, ГОРОД ТОМСК, ПРОСПЕКТ РАЗВИТИЯ, 3, ОФ.607</p>
      <p>info@ntr.ai</p>
      <p>+7 3822 48-85-32</p>
      <p>ОГРН: 1057000156927</p>
      <p>ИНН: 7017118839</p>
    </div>
  </div>
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

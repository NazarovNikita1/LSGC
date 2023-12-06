<template>
  <div class="app-container">
    <NavBar />
    <router-view />
    <vue-particles
      class="vue-particles"
      color="#dedede"
      :particleOpacity="0.7"
      :particlesNumber="50"
      shapeType="circle"
      :particleSize="4"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="165"
      :moveSpeed="2"
      :hoverEffect="false"
      hoverMode="grab"
      :clickEffect="false"
      clickMode="repulse"
    />
    <FooterComponent />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import FooterComponent from "./components/FooterComponent.vue";
import "./styles/reset.css";

export default {
  name: "App",
  components: {
    FooterComponent,
    NavBar,
  },
};

/*
2B303A grey
7C7C7C secondary blue
92DCE5 blue accent
D64933 red accent
*/
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500;700&display=swap");

.vue-particles {
  position: absolute;
  top: 10vh;
  left: 0;
  width: 100%;
  height: 110vh;
  z-index: -1;
}

#app {
  font-family: "Josefin Sans", sans-serif;
  z-index: 10;
}

body {
  background-color: #454a54;
}

a {
  color: #92dce5;
  text-decoration: none;
}

strong {
  font-weight: bold;
}

h1 {
  color: #ffffff;
  font-size: 2em;
  font-weight: 700;
}

h2 {
  color: #ffffff;
  font-size: 1.5em;
  font-weight: 500;
}
</style>

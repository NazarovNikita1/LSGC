<template>
  <div class="navbar-container">
    <span
      style="position: absolute; left: 0; margin-left: 2vw; font-weight: 700"
      >Long Story Generation Challenge</span
    >
    <div
      style="
        display: flex;
        margin-right: 2vw;
        position: absolute;
        right: 0;
        gap: 4vw;
        font-weight: 100;
      "
    >
      <router-link to="/"> <font-awesome-icon icon="home" /> Home </router-link>
      <router-link to="/prompts">
        <font-awesome-icon icon="database" /> Prompts
      </router-link>
      <router-link to="/baseline">
        <font-awesome-icon icon="database" /> Baseline
      </router-link>
      <router-link to="/starters">
        <font-awesome-icon icon="database" /> Starters
      </router-link>
      <router-link to="/cfp">
        <font-awesome-icon icon="database" /> CFP
      </router-link>
      <router-link to="/participate">
        <font-awesome-icon icon="user" /> Participate
      </router-link>
    </div>
  </div>
</template>

<style>
.navbar-container {
  width: 100vw;
  height: 10vh;
  position: sticky;
  left: 0;
  top: 0;
  z-index: 10;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #2b303a;
  font-size: 1.5rem;
  color: #fff;
}
</style>

<template>
  <div class="participate-container">
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSccYqEgpFmut4613Y8ybY_mz0BQ-lHS3mLqcFvIXxO-DA697Q/viewform?embedded=true"
      width="640"
      height="927"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
      >Загрузка…</iframe
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      teamName: "",
      memberNames: "",
      email: "",
      contacts: "",
    };
  },
  methods: {
    submitForm() {
      console.log({
        teamName: this.teamName,
        memberNames: this.memberNames,
        email: this.email,
        contacts: this.contacts,
      });
      this.teamName = "";
      this.memberNames = "";
      this.email = "";
      this.contacts = "";
    },
  },
};
</script>

<style>
.participate-container {
  color: #fff;
  z-index: 10;
  height: 100vh;
  padding: 5vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.participate-container form {
  display: flex;
  flex-direction: column;
  font-family: "Josefin Sans", sans-serif;
  gap: 1rem;
}

.participate-container form label {
  font-size: 1.5rem;
  color: #fff;
}

.participate-container form input {
  padding: 0.5rem;
  font-size: 1rem;
  border: none;
  font-family: "Josefin Sans", sans-serif;
  border-radius: 5px;
}

.participate-container form button {
  padding: 0.5rem;
  font-size: 1.5rem;
  font-family: "Josefin Sans", sans-serif;
  color: #fff;
  background-color: #2b303a;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.participate-container form button:hover {
  background-color: #92dce5;
}
</style>

<template>
  <div class="participate-container">
    <form @submit.prevent="submitForm">
      <div style="display: flex; justify-content: end">
        <label>
          Team Name:
          <input v-model="teamName" type="text" required />
        </label>
      </div>
      <div style="display: flex; justify-content: end">
        <label>
          Member Names:
          <input
            v-model="memberNames"
            type="text"
            required
            placeholder="Separate names with commas"
          />
        </label>
      </div>
      <div style="display: flex; justify-content: end">
        <label>
          Email:
          <input v-model="email" type="email" required />
        </label>
      </div>
      <div style="display: flex; justify-content: end">
        <label>
          Contacts:
          <input v-model="contacts" type="text" required />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
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
    async submitForm() {
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          teamName: this.teamName,
          memberNames: this.memberNames,
          email: this.email,
          contacts: this.contacts,
        }),
      });

      const data = await response.json();
      console.log(data.message);
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

<template>
  <div class="participate-container">
    <form
      method="POST"
      action="https://docs.google.com/forms/d/e/1FAIpQLSccYqEgpFmut4613Y8ybY_mz0BQ-lHS3mLqcFvIXxO-DA697Q/viewform"
      target="_blank"
    >
      <div style="display: flex; justify-content: end">
        <label>
          Team Name:
          <input
            v-model="teamName"
            type="text"
            name="entry.1609912934"
            required
          />
        </label>
      </div>
      <div style="display: flex; justify-content: end">
        <label>
          Member Names:
          <input
            v-model="memberNames"
            type="text"
            name="entry.243315525"
            required
            placeholder="Separate names with commas"
          />
        </label>
      </div>
      <div style="display: flex; justify-content: end">
        <label>
          Email:
          <input v-model="email" type="email" name="entry.676774802" required />
        </label>
      </div>
      <div style="display: flex; justify-content: end">
        <label>
          Contacts:
          <input
            v-model="contacts"
            type="text"
            name="entry.1364162779"
            required
          />
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

<template>
  <div class="register">
    <h1>Sign Up</h1>
    <input type="text" placeholder="Enter your Name" v-model="name" />
    <input type="number" placeholder="Enter your Number" v-model="number" />
    <input type="email" placeholder="Enter your Email" v-model="email" />
    <input
      type="password"
      placeholder="Enter your Password"
      v-model="password"
    />
    <button v-on:click="signUp">Sign Up</button>
    <button>
      <router-link to="/">Login</router-link>
    </button>
  </div>
</template>

<script>
export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      number: "",
      email: "",
      password: "",
    };
  },
  methods: {
    signUp() {},
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ name: "HelloWorld" });
    }
  },
};
</script>

<style scoped>
.register h1 {
  text-align: center;
  color: #333;
}
.register {
  background: #e4e3e3;
}
.register input {
  padding-left: 30px;
  width: 80%;
  height: 50px;
  display: block;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid rgb(23, 23, 196);
}
.register button {
  width: 80%;
  padding: 10px;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.3s;
}
</style>

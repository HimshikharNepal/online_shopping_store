<template>
  <div class="login">
    <div class="container">
      <h1>Login Page</h1>
      <input type="email" placeholder="Enter your Email" />
      <input type="Password" placeholder="Enter your Password" />
      <button>LogIn</button>
      <button>
        <router-link to="/SingUp">Singup</router-link>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "LogIn ",
};
</script>
<style scoped>
.login {
  background-color: rgb(195, 197, 199);
}
.login h1 {
  text-align: center;
  color: rgb(5, 122, 122);
}
.login input {
  width: 300px;
  height: 30px;
  padding-left: 10px;
  display: block;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  border: 2px solid skyblue;
}
.login button {
  width: 300px;
  height: 30px;
  display: block;
  padding-left: 10px;
  border: 1px solid skyblue;
  background-color: rgb(84, 84, 249);
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
  border: none;
}
</style>

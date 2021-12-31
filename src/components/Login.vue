<template>
  <div class="login">
    <h1>Login</h1>
    <form class="login-form">
      <p v-if="isError" class="error">Error: {{ this.errorMsg }}*</p>

      <div class="email-input">
        <label for="Email"> Email</label>
        <input
          id="Email"
          type="email"
          v-model="email"
          placeholder="Type your ID"
          required="true"
          v-on:change="validate"
        />
      </div>
      <div class="password-input">
        <label for="Password"> Password</label>
        <input
          id="Password"
          type="password"
          v-model="password"
          placeholder="Type your Password"
          required="true"
          @change="validate"
        />
      </div>
      <div class="login-button">
        <button :disabled="isDisabled" id="Login_Button" type="Submit">
          Login
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isError: false,
      isDisabled: true,
      email: "",
      password: "",
      errorMsg: "",
    };
  },
  methods: {
    validate() {
      console.log("triggered");
      if (this.email === "" || this.password === "") {
        this.isError = true;
        this.errorMsg = "Please fill all datas";
      }
      var pattern = new RegExp(
        /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/
      );
      if (!pattern.test("!@#123asdf!@#") && this.email && this.password) {
        this.isError = true;
        this.errorMsg =
          "Passwords should have a check for at least one uppercase letter, numbers and a special character";
      }
      if (!this.isError) this.isDisabled = false;
    },
    resetData() {
      this.isError = false;
      this.isDisabled = false;
      this.email = "";
      this.password = "";
      this.errorMsg = "";
    },
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.login {
  background-color: #F5F4F4;
  width: 500px;
  height: 500px;
  position: absolute;
  top: 50px;
  left: 35%;
}
.login-form {
  position: relative;
  padding-top: 20px;
  padding-left: 40px;
}

.login input {
  padding: 10px;
  margin: 10px;
  left: 0;
  width: 80%;
}
.email-input,
.password-input {
  margin-left: 0;
  margin-top: 10px;
  text-align: left;
  margin-right: 10px;
}
label {
  float: left;
  clear: left;
  width: 100px;
  font-size: 20px;
  margin-left: 20px;
  margin-top: 20px;
}
.error {
  display: block;
  color: red;
  font-weight: bold;
  margin-top: 0px;
  text-align: center;
  font-size: 12px;
}
button {
  display: inline-block;
  background-color: #00303F;
  border-radius: 10px;
  border: 4px double #00303F;
  color: white;
  text-align: center;
  font-size: 18px;
  padding: 10px 20px 30px 20px;
  width: 100px;
  height: 40px;
  cursor: pointer;
  margin: 20px 20px 20px 0px;
}
.login-button {
  margin-left: 0;
}
#Login_Button:disabled {
  opacity: 0.4;
  cursor: no-drop;
}
input:focus {
  outline: solid 3px #CAE4DB;
}
</style>
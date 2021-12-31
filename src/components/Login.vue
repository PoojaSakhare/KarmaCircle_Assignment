<template>
  <div class="login">
    <h1>Login</h1>
    <form class="login-form" @submit.prevent="submit">
      <p v-if="this.errorMsg.length > 0" class="error">
        ERROR!! {{ this.errorMsg[0] }}*
      </p>

      <div class="email-input">
        <label for="Email"> Email</label>
        <input
          id="Email"
          type="email"
          v-model="email"
          placeholder="Type your ID"
          required="true"
          @blur="$v.email.$touch()"
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
          @blur="$v.email.$touch()"
        />
      </div>
      <div class="login-button">
        <button id="Login_Button" type="Submit" @click="validate($event)">
          Login
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { required, email, minLength } from "vuelidate/lib/validators";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      errorMsg: [],
      submitted: false,
    };
  },
  methods: {
    validate(e) {
      this.errorMsg = [];
      if (this.email === "" || this.password === "") {
        this.errorMsg.push("Please fill all datas");
      }
      var patternPassword = new RegExp(
        /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/
      );
      var patternEmail = /^\w+@\w+\.\w{2,3}$/;

      if (!patternEmail.test(this.email) && this.email && this.password) {
        this.errorMsg.push("Incorrect Email");
      }
      if (!patternPassword.test(this.password) && this.email && this.password) {
        this.errorMsg.push(
          "Passwords should have at least one uppercase letter, numbers and a special character"
        );
      }
      if (this.errorMsg.length === 0) {
        console.log(this.email, this.password);
        this.resetData();
      }
      e.preventDefault();
    },
    resetData() {
      this.email = "";
      this.password = "";
      this.errorMsg = "";
    },
    submit() {
      this.submitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return false; // stop here if form is invalid
      } else {
        alert("Form Valid");
      }
    },
  },
  watch: {
    email: function () {
      this.errorMsg = [];
    },
    password: function () {
      this.errorMsg = [];
    },
  },
  validations: {
    email: {
      required,
      email,
    },
    password: { required, minLength: minLength(6) },
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
  padding: 20px 40px;
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
  font-weight: bold;
  margin-top: 0px;
  border-radius: 10px;
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
form p {
  background-color: #D5BFBF;
  height: 30px;
  color: black;
  padding: 10px;
}
</style>
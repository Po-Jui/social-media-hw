<template>
  <div class="container m-5">
    <form @submit.prevent="userRegistration">
      <h1>註冊</h1>

      <div class="form-group">
        <h3>名字</h3>
        <input
          type="text"
          class="form-control form-control-lg"
          v-model.trim="user.name"
        />
      </div>

      <div class="form-group">
        <h3>信箱</h3>
        <input
          type="email"
          class="form-control form-control-lg"
          v-model.trim="user.email"
        />
      </div>

      <div class="form-group">
        <h3>密碼</h3>
        <input
          type="password"
          class="form-control form-control-lg"
          v-model.trim="user.password"
        />
      </div>

      <button type="submit" class="btn btn-dark btn-lg btn-block">
        註冊
      </button>

      <p class="forgot-password text-right mt-4 mb-8">
        已經註冊過了?
        <router-link to="/login">登入</router-link>
      </p>
    </form>
  </div>
</template>

<script>
import { firebaseAuth } from "@/config/firebaseConfig.js";

export default {
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    userRegistration() {
      firebaseAuth
        .createUserWithEmailAndPassword(this.user.email, this.user.password)
        .then((res) => {
          res.user
            .updateProfile({
              displayName: this.user.name,
            })
            .then(() => {
              firebaseAuth.signOut().then(() =>{
                alert("註冊成功將返回登入頁面!!!")
                this.name = "";
                this.user.email = "";
                this.user.password = "";
                this.$router.push("/login");
              }) 
            });
        })
        .catch((error) => {
          alert(error.message);
        });
    },
  },
};
</script>

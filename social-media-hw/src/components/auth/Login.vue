<template>
  <div class="container m-5">
    <form @submit.prevent="userLogin" v-if="islogin">
      <h1>登入</h1>

      <div class="form-group">
        <h4>郵件地址</h4>
        <input
          type="email"
          class="form-control form-control-lg"
          v-model.trim="user.email"
        />
      </div>

      <div class="form-group">
        <h4>密碼</h4>
        <input
          type="password"
          class="form-control form-control-lg"
          v-model.trim="user.password"
        />
      </div>

      <button type="submit" class="btn btn-dark btn-lg btn-block">登入</button>

      <p class="forgot-password text-right mt-4 mb-8">
        <router-link to="/forgot-password">忘記密碼?</router-link>
      </p>
    </form>
    <form v-if="!islogin">
      <h3>您已經登入!!!三秒後回到貼文頁面</h3>
    </form>
  </div>
</template>

<script>
import { firebaseAuth } from "@/config/firebaseConfig.js";

export default {
  data() {
    return {
      user: {
        email: "",
        password: ""
      },
      islogin:false
    };
  },
  created() {
    firebaseAuth.onAuthStateChanged((user) => {
      if (user != null) {
        this.islogin = false;
        setTimeout(() => {
          this.$router.push('/posts')
        }, 3000); 
      } else {
        this.islogin = true;
        
      }
    });
  },
  methods: {
    userLogin() {
      firebaseAuth
        .signInWithEmailAndPassword(this.user.email, this.user.password)
        .then(() => {
          this.$router.push("/posts");
        })
        .catch((error) => {
          alert(error.message);
        });
    },
  },
};
</script>

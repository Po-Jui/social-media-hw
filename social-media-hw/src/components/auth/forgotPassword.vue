<template>
    <div class="container m-5">
        <form @submit.prevent="forgetPassword">
            <h1>忘記密碼</h1>

            <div class="form-group">
                <h3>信箱</h3>
                <input type="email" class="form-control form-control-lg" v-model.trim ="user.email" />
            </div>

            <button type="submit" class="btn btn-dark btn-lg btn-block">重新設定密碼</button>
        </form>
    </div>
</template>

<script>
import { firebaseAuth } from "@/config/firebaseConfig.js";

export default {
  data() {
    return {
      user: {   
        email: ''
      }
    };
  },
  methods: {
    forgetPassword() {
        firebaseAuth
        .sendPasswordResetEmail(this.user.email)
        .then(() => {
            alert('請查看您的信箱以重設密碼!!!')
            this.user = {   
              email: ''
            }
        }).catch((error) => {
          alert(error)
        })
    }
  }
};
</script>
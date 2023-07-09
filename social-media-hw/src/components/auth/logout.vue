<template>
    <div class="container m-5" >
      <div v-if="islogin">
        <h1>個人資料</h1>
           <h2>使用者名稱:{{user.displayName}}</h2>
           <h2>電子信箱:{{user.email}}</h2>
        <button 
        type="submit" 
        class="btn btn-dark btn-lg btn-block"
        @click="logOut()">
            登出
        </button>
      </div>
      <div v-if="!islogin">
        <h1>您尚未登入!!!三秒後回到登入頁面</h1>
      </div>
        
    </div>
</template>

<script>
import { firebaseAuth } from "@/config/firebaseConfig.js";

export default {
  data() {
    return {
      user: null,
      islogin: false
    };
  },
  created() {
    firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
        this.islogin = true;
      } else {
        this.user = null;
        setTimeout(() => {
          this.$router.push('/login')
        }, 3000);  
      }
    });
  },
  methods: {
    logOut() {
      firebaseAuth.signOut().then(() => {
        firebaseAuth.onAuthStateChanged(() => {
          this.$router.push('/login')
        })
      })
    }
  }
};
</script>
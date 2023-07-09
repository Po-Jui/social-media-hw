<template>
  <div id="add-blog">
    <form v-if="islogin">
        <h2>新增一篇貼文</h2>
      <form v-if="!submitted">
        <label>標題:</label>
        <input type="text" v-model.lazy="blog.title" required />
        <label>內容:</label>
        <textarea v-model.lazy.trim="blog.content"></textarea>
        <hr />
        <button @click.prevent="post">新增貼文</button>
      </form>
      <div id="preview">
        <h3>預覽</h3>
        <p>標題: {{ blog.title }}</p>
        <p>內容:</p>
        <p style="white-space: pre">{{ blog.content }}</p>
        <ul>
          <li v-for="category in blog.hashTags" :key="category.id">
            {{ category }}
          </li>
        </ul>
      </div>
    </form>
    <h3 v-if="!islogin">
      請先登入再發文!!!三秒後回到登入頁面
    </h3>
    
  </div>
</template>

<script>
import { db } from "@/config/firebaseConfig.js";
import { firebaseAuth } from "@/config/firebaseConfig.js";

export default {
  data() {
    return {
      blog: {
        title: "",
        content: "",
        displayName : ""
      },
      submitted: false,
      user: null,
      islogin: false
    };
  },
  created() {
    firebaseAuth.onAuthStateChanged((user) => {
      
      if (user != null) {
        this.displayName = user.displayName;
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
    async post() {
      if (this.blog.title && this.blog.content) {
        await db.collection("blogs").add({
          title: this.blog.title,
          content: this.blog.content,
          displayName: this.displayName,
          createTime: this.$moment(this.createTime).format('YYYY-MM-DD HH:mm:ss')
        });
        alert('恭喜您新增了一篇貼文!!!');
        this.blog.title = "";
        this.blog.content = "";
      } else {
        alert('請填入標題及內容!!!');
      }
    },
  }
};
</script>

<style>
#add-blog * {
  box-sizing: border-box;
}
#add-blog {
  margin: 20px auto;
  max-width: 500px;
}
label {
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],
textarea {
  display: block;
  width: 100%;
  padding: 8px;
}
#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3 {
  margin-top: 10px;
}
</style>

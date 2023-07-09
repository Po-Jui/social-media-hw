<template>
  <div>
    <b-container>
      <b-col class="m-8 text-center">
        <h1 style="font-size: 50px;">貼文</h1>
        <h3 v-if="!islogin">(登入後取得完整功能)</h3>
      </b-col>
      <b-row align-h="center" class="m-5">
      </b-row>
      <b-row align-h="center" class="m-3">
        <b-card
          v-for="blog in blogs"
          :key="blog.id"
          :title="blog.title"
          img-src="https://lurl.cc/boUqnQ"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="m-3"
        >
          <b-card-text>
            內容: {{ blog.content }}
          </b-card-text>
          <b-card-text>
            發文時間: {{ blog.createTime }}
          </b-card-text>
          <b-card-text>
            發文者: {{ blog.displayName }}
          </b-card-text>
          <b-button v-if="islogin" @click="deleteMessage(blog.id)" variant="primary">刪除</b-button>
        </b-card>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { db } from "@/config/firebaseConfig.js";
import { firebaseAuth } from "@/config/firebaseConfig.js";

export default { 
  // inject:['reload'], 
  data() {
    return {
      blogs: [],
      user: null,
      islogin: false
    };
  },
  mounted() {
    this.getBlogs();
  },
  created() {
    firebaseAuth.onAuthStateChanged((user) => {
      if (user != null) {
        this.islogin = true;
      } else {
        this.user = null;
      }
    });
  },        
  methods: {    
    async getBlogs() {
      let dbBlogs = await db.collection("blogs").get();
      const blogs = [];
      dbBlogs.forEach((doc) => {
        let appData = doc.data();
        appData.id = doc.id;
        blogs.push({
          id: appData.id,
          title: appData.title,
          content: appData.content,
          displayName: appData.displayName,
          createTime: appData.createTime
        });
      });
      this.blogs = blogs;
    },
    deleteMessage(id) {     
      db.collection('blogs').doc(id).delete();
      this.getBlogs();
      // this.reload();
    },  
  }
};
</script>
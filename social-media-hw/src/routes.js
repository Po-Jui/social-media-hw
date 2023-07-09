// import homePage from "./components/Home.vue";
import Post from "./components/Post.vue";
import addPost from "./components/addPost.vue";
import Logout from "./components/auth/logout.vue";
import Login from "./components/auth/Login.vue";
import Register from "./components/auth/Register.vue";
import ForgotPassword from './components/auth/forgotPassword.vue';


export default [
  { path: "/", component: Post },
  { path: "/posts", component: Post },
  { path: "/addPost", component: addPost },
  {
    path: "/logout",
    component: Logout,
  },
  {
    path: "/forgot-password",
    component: ForgotPassword,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  }
];

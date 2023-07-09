<template>
  <div>
    <b-navbar type="dark" variant="dark" class="navbar">
      <b-navbar-brand class="navbar">
        <img
          src="https://cdn.iconscout.com/icon/free/png-512/vue-282497.png"
          width="60rem"
          class="d-inline-block align-top"
          alt="vue_icon"
        />
        social media
      </b-navbar-brand>
      <b-navbar-nav>
        <b-nav-item><router-link to="/posts" exact>貼文</router-link></b-nav-item>
        <b-nav-item><router-link to="/addPost" exact>發文</router-link></b-nav-item>
        <b-nav-item-dropdown text="使用者" right class="navbar">
          <b-dropdown-item><router-link to="/login">登入</router-link></b-dropdown-item>
          <b-dropdown-item><router-link to="/register">註冊</router-link></b-dropdown-item>
          <b-dropdown-item><router-link to="/logout">個人資料</router-link></b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>

</script>

<style scoped>
.navbar{
  font-size: 50px;
}

p {
  color: #ff9900;
}

li a {
  text-decoration: none;
  color: #ff9900;
  font-size: 50px;
}
</style>

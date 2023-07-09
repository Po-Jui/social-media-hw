<template>
  <div>
    <!-- component -->
    <AppHeader />
    <router-view></router-view>
  </div>
</template>
<script>
import AppHeader from './components/AppHeader';

export default {
  provide() {    
    return {
      reload: this.reload      
    }
  },
  data() {
    return {
      isRouterAlive: true,
    }
  },
  methods:{
    reload () {
      console.log('reload occure');
      this.isRouterAlive = false;           
      this.$nextTick(()=>{
        this.isRouterAlive = true
      });
    },
  },
  components: {
    AppHeader,
  },
  
}
</script>

<style>
</style>

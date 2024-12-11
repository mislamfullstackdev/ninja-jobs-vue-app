<template>
  <div class="">
    <nav>
      <router-link to="/">Home</router-link> 
      <router-link to="/about">About</router-link> 
      <router-link :to="{name: 'jobs'}">Jobs</router-link> 
    </nav>
    <button @click="redirect">Redirect</button>
    <button @click="forward">Go Forward</button>
    <button @click="back">Go Back</button>
    <router-view/>
  </div>
</template>
<script>
export default{
  methods:{
    redirect(){
      this.$router.push({name: 'home'})
    },
    forward(){
      this.$router.go(+1)
    },
    back(){
      this.$router.go(-1)
    },
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 5px;
}

nav a.router-link-exact-active {
  background: #d00606;
  color: white;


}
</style>

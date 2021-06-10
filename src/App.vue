<template>
  <div id="app">
    <Navbar/>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Home from './views/Home.vue'
import ProductHome from './views/ProductHome.vue'
import Login from './views/Login'
import Profile from './views/Profile.vue'

export default {
  name: 'App',
  components: {
    Navbar, Home, ProductHome, Login, Profile
  }
}
</script>
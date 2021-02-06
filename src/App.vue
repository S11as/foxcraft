<template>
  <Header/>
  <register/>
  <router-view></router-view>
  <Footer/>
</template>

<script>
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Register from '@/components/Auth/Register'
export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Register
  }
}
</script>

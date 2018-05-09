<template>
  <div>
    <h2>Register</h2>
    <input 
      type="email" 
      name="email" 
      v-model="email"
      placeholder="example123@gmail.com">
    <br>
    <input 
      type="password" 
      name="password"
      v-model="password">
  	<br>
  	<button 
  	  @click="register">
  	  Sign Up
  	</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'Register',
  data () {
    return {
    	email: '',
    	password: ''
    }
  },
  methods: {
  	async register () {
  		const response = await AuthenticationService.register({
  			email: this.email,
  			password: this.password
  		})
  		console.log(response.data)
  	}
  }
  // watch: {
  // 	email (value) {
  // 		console.log(value);
  // 	}
  // }
}
</script>

<style scoped>
</style>

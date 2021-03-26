<template>
  <nav class="navbar navbar-expand-md navbar-light bg-light mb-4">
    <div class="container">
      <a class="navbar-brand" href="#">Weblogx</a>

      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'home' }"
            >Home</router-link
          >
        </li>
        <li class="nav-item" v-if="isWriter">
          <router-link class="nav-link" :to="{ name: 'blogs.create' }"
            >New Blog</router-link
          >
        </li>
		<li>
			<button @click="test">Test</button>
		</li>
      </ul>

      <div class="float-end">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <template v-if="auth">
            <li class="nav-item">
              <a class="nav-link" href="#" @click="logout">Logout</a>
            </li>
          </template>
          <template v-else>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'login' }"
                >Login</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'register' }"
                >Register</router-link
              >
            </li>
          </template>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["auth", "isWriter"]),
  },
  methods: {
	  ...mapActions([
		  'logout'
	  ]),
	  test() {
		  
		  console.log(this.$store.getters.isWriter);
		  
		  
	  }
  },
};
</script>
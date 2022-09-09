<script>
import SignUp from './components/SignUp.vue';
export default {
  components: { SignUp },
  data() {
    return {
      email: 'john.doe@gmail.com'
    }
  }
}
</script>

<template>
  <SignUp :prefilled-email="email" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

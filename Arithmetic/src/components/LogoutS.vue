<template>
  <div>
    <h1>Logout</h1>
    <p>You have been logged out.</p>
  </div>
</template>

<script>
export default {
  name: 'LogoutV',
  mounted() {
    this.logout();
  },
  methods: {
    logout() {
      localStorage.removeItem('token');
      this.$router.push('/login');
    }
  }
};
</script>

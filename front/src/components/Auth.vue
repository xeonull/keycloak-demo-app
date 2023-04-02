<template>
  <v-form @submit.prevent="loginUser" class="auth-form">
    <v-text-field v-model="email" label="Email Address" outlined required></v-text-field>
    <v-text-field v-model="password" label="Password" outlined required type="password"></v-text-field>
    <v-btn type="submit" color="primary" :loading="loading"> Login </v-btn>
  </v-form>
</template>

<script lang="ts">
export default {
  data: () => ({
    email: "",
    password: "",
    loading: false,
  }),
  methods: {
    async loginUser() {
      try {
        this.loading = true;

        const delay = (ms: number) => {
          return new Promise(function (resolve) {
            setTimeout(resolve, ms);
          });
        };
        const response = await delay(1000);

        // const response = await axios.post("/api/auth", {
        //   email: this.email,
        //   password: this.password,
        // });
        // handle successful login
      } catch (error) {
        // handle login error
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
.auth-form {
  min-width: 400px;
}
</style>

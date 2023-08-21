<template>
  <v-container fluid>
    <v-row justify="center" align="center">
      <v-col cols="12" md="4">
        <v-card>
          <v-card-title> Login </v-card-title>
          <v-card-text>
            <v-text-field v-model="email" label="Email" required></v-text-field>
            <v-text-field
              v-model="password"
              label="Password"
              type="password"
              required
            ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-btn @click="handleLogin">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'LoginComponent',
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async handleLogin() {
      try {
        const response = await this.$axios.post('/api/login', {
          email: this.email,
          password: this.password
        });

        if (response.data.success) {
        } else {
        }
      } catch (error) {
        console.error('Login error:', error);
      }
    }
  }
};
</script>

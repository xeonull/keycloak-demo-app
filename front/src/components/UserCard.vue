<template>
  <div class="user-profile">
    <v-card class="user-card">
      <v-card-title> User Profile </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field v-model="userProfile.id" label="ID" :readonly="true"></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-text-field v-model="userProfile.firstName" label="First Name" :readonly="true"></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-text-field v-model="userProfile.lastName" label="Last Name" :readonly="true"></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-text-field v-model="userProfile.email" label="Email" :readonly="true"></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-text-field v-model="userProfile.username" label="User Name" :readonly="true"></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="saveChanges" :disabled="true"> Save Changes </v-btn>
        <v-btn color="error" @click="cancelChanges" :disabled="true"> Cancel </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script lang="ts" setup>
import { KeycloakProfile } from "keycloak-js";

const props = defineProps<{
  userProfile: KeycloakProfile;
}>();

const saveChanges = async (): Promise<void> => {};

const cancelChanges = async (): Promise<void> => {};
</script>

<style scoped>
.user-profile {
  max-width: 800px;
}
.user-card {
  width: 400px;
}
</style>

<template>
  <div class="title-app">Demo Keycloak Application</div>
  <div>
    <h4>Authentication: {{ isAuth ? "Success" : "Failed" }}</h4>
  </div>
  <v-btn @click="loadProfile">{{buttonProfileText}}</v-btn>
  <div v-if="!!userProfile">
    <UserCard :userProfile="userProfile"></UserCard>
  </div>
  <!-- <router-view /> -->
</template>

<script setup lang="ts">
import { ref, Ref } from "vue";
import { useKeycloak } from "@/composables/useAuth";
import UserCard from "@/components/UserCard.vue";
import { KeycloakProfile } from "keycloak-js";
const userProfile: Ref<KeycloakProfile | undefined> = ref(undefined);
const buttonProfileText: Ref<string> = ref("Show Profile");

const { isAuth, keycloak } = useKeycloak();

const loadProfile = async (): Promise<void> => {
  if (userProfile.value) {
    userProfile.value = undefined;
    buttonProfileText.value = "Show Profile";
  } else {
    await keycloak.loadUserProfile();
    userProfile.value = keycloak.profile;
    buttonProfileText.value = "Hide Profile";
  }
};
</script>

<style scoped>
.title-app {
  margin-bottom: 20px;
  color: rgb(var(--v-theme-primary));
  font-size: x-large;
}
</style>

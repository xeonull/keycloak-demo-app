<template>
  <div class="area__profile">
    <UserCard :userProfile="kcUserProfile" />
  </div>
</template>

<script lang="ts" setup>
import { KeycloakProfile } from "keycloak-js";
import { useKeycloak } from "@/composables/useAuth";

const { keycloak } = await useKeycloak();
await keycloak.loadUserProfile();
const kcUserProfile: KeycloakProfile | undefined = keycloak.profile;
</script>

<style scoped>
.area__profile {
  display: flex;
  flex-direction: row;
}
</style>

import { ref } from "@vue/reactivity";
import Keycloak, { KeycloakConfig, KeycloakProfile } from "keycloak-js";

// Параметры для подключения к Keycloak
const initOptions: KeycloakConfig = {
  url: import.meta.env.V_KEYCLOAK_URL, // Адрес Keycloak
  realm: import.meta.env.V_KEYCLOAK_REALM, // Имя нашего realm в Keycloak
  clientId: import.meta.env.V_KEYCLOAK_CLIENT, // Идентификатор клиента в Keycloak
};

const keycloak = new Keycloak(initOptions);
const isAuth = ref(false);

export async function initKeycloak() {
  isAuth.value = await keycloak.init({ onLoad: "login-required" });
}

export function useKeycloak() {
  return { isAuth, keycloak };
}

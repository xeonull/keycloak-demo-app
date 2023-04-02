import { createApp } from "vue";
import "@/style.css";
import App from "@/App.vue";
import Router from "@/router";
import Axios from "axios";

// Vuetify
import "vuetify/styles";
import { createVuetify, ThemeDefinition } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import { initKeycloak, useKeycloak } from "@/composables/useAuth";

const customDarkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    primary: "#9ac1e4",
    background: "#213547",
  },
};

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "customDarkTheme",
    themes: {
      customDarkTheme,
    },
  },
});

export async function authenticateAgainstKeycloak(): Promise<void> {
  await initKeycloak();
  const { isAuth } = useKeycloak();

  if (!isAuth) {
    window.location.reload();
  } else {
    console.log("Authenticated");
    console.log("env:", import.meta.env);
    //await Router.push("/");
  }
  // if (keycloak.token) {
  //   window.localStorage.setItem("keycloakToken", keycloak.token);
  // }
  //});
}

// if (!window.localStorage.getItem("keycloakToken"))
authenticateAgainstKeycloak().then(() => {
  createApp(App).use(Router).use(vuetify).mount("#app");
});

Axios.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    console.log(error);
    if (error.reponse.status === 403) {
      await authenticateAgainstKeycloak();
      return error;
    }
    return error;
  }
);

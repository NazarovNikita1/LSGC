import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueParticles from "vue-particles";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faHome, faDatabase, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faHome, faDatabase, faUser);

createApp(App)
  .use(router)
  .use(VueParticles)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
/* import specific icons */
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
library.add(faPenToSquare, faCheck, faXmark, faCircleCheck);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");

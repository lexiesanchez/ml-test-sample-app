import { createApp } from 'vue'
import App from './App.vue'
import ComponentLib from 'ml-test-vue-components';
import "ml-test-vue-components/dist/style.css"
import './css/main.scss'

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { MdInfo, MdError, IoWarning, BiCheckCircleFill } from "oh-vue-icons/icons";

addIcons(MdInfo, MdError, IoWarning, BiCheckCircleFill);

const app = createApp(App);

app.use(ComponentLib);
app.component("v-icon", OhVueIcon);

app.mount('#app');

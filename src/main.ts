import { createApp } from 'vue';
import { macOsKernelPinia } from 'tsnh-macos-kernel';
import './style.css';
import App from './exposes/App.vue';

const app = createApp(App);

app.use(macOsKernelPinia);
app.mount('#app');

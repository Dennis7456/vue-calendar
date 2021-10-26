import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: "AIzaSyAb70gw1cbw_kwdXhu0XPZ8D_zDzXeyy-s",
  authDomain: "vue-calendar-a8133.firebaseapp.com",
  projectId: "vue-calendar-a8133",
  storageBucket: "vue-calendar-a8133.appspot.com",
  messagingSenderId: "890277196802",
  appId: "1:890277196802:web:3e78fa5ac476c73bbf631b"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

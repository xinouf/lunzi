import Vue from 'vue';
import Button from './button'
import Icon from "./icon";

Vue.component('g-button',Button)
Vue.component('icon',Icon)
new Vue({
    el: '#app',
})
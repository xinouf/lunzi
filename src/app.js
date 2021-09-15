import Vue from 'vue';
import Button from './button/button'
import Icon from "./icon";
import ButtonGroup from "./button/button-group";
import Input from "./input"
import Row from "./grid/row"
import Col from "./grid/col"
import Layout from "./layout/layout"
import Header from "./layout/header"
import Content from "./layout/content"
import Footer from "./layout/footer"
import Sider from "./layout/sider"
import Toast from "./toast"
import plugin from "./plugin"
import Tabs from "./tabs/tabs"
import TabsHead from "./tabs/tabs-head"
import TabsBody from "./tabs/tabs-body"
import TabsItem from "./tabs/tabs-item"
import TabsPane from "./tabs/tabs-pane"
import Popover from "./popover/popover"
import Collapse from "./collapse/collapse"
import CollapseItem from "./collapse/collapse-item"

Vue.component('g-button', Button)
Vue.component('icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-layout', Layout)
Vue.component('g-header', Header)
Vue.component('g-content', Content)
Vue.component('g-footer', Footer)
Vue.component('g-sider', Sider)
Vue.component('g-toast', Toast)
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-pane', TabsPane)
Vue.component('g-popover', Popover)
Vue.component('g-collapse', Collapse)
Vue.component('g-collapse-item', CollapseItem)

Vue.use(plugin)

import createElement from 'vue'
const h = createElement
new Vue({
    el: '#app',
    data: {
       /* loading1: false,
        loading2: false,
        loading3: false,*/
        selectedTab:['2']
    },

   /* methods: {
        showToast1(){
            this.showToast('top');
        },
        showToast2(){
            this.showToast('middle');
        },
        showToast3(){
            this.showToast('bottom');
        },
        showToast(position) {
            console.log('123')
            this.$toast(`${parseInt(Math.random()*100)}`, {
                position,
                enableHtml: true,
                closeButton: {
                    text: '已充值s',
                    callback() {
                        console.log('dfsdfds')
                    }
                },
                autoClose: false,
                autoCloseDelay: 3
            })
        }

    },*/
})

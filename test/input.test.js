import Button from "../src/button/button";

const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
    it('存在.', () => {
        expect(Input).to.be.ok
    })
    it('接收.', () => {
        const Constructor = Vue.extend(Input)
        const vm = new Constructor({
            propsData: {
                icon: '1234'
            }
        }).$mount()
        const useElement = vm.$el.querySelector('input')
        expect(useElement.value).to.equal('1234')
        vm.$destroy()
    })
    })
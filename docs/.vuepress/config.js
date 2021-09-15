const path = require('path')
module.exports = {
    base:"/lunzi/",
    title: 'Play UI',
    description: 'UI框架',
    themeConfig: {
        nav:[
            {text:'主页',link:'/'},
            {text:'文档',link:'/guide/'},
            {text:'交流',link:'http://google.com'},
        ],
        sidebar: [
            '/install/',
            '/get-started/',
            {
                title:"组件",
                children:['/components/button',
                    '/components/collapse',
                    '/components/tabs',
                    '/components/popover',
                    '/components/grid',
                    '/components/layout',
                    '/components/toast',
                    '/components/input',
                 ],

            },

        ]
    },
    scss:{
        includePaths: [path.join(__dirname, '../../styles')]
    }
}
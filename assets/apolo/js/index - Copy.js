var nav = [
    {
        link:'link1',
        text:'Comprar un Auto'
    },
    {
        link:'link2',
        text:'Vender tu Auto'
    },
    {
        link:'link3',
        text:'Acerca de Kavak',
        submenu:[
            {
                link:'submenu1',
                text:'Action 1'
            },
            {
                link:'submenu2',
                text:'Action 2'
            },
            {
                link:'submenu3',
                text:'Action 3'
            },
        ] 
    },
    {
        link:'link4',
        text:'Registro' 
    },
    {
        link:'link5',
        text:'¡Contáctanos!'
    } 
];

var social = [
    {
        icon:'fa fa-facebook',
        link:'facebook' 
    },
    {
        icon:'fa fa-twitter',
        link:'twitter' 
    },
    {
        icon:'fa fa-google-plus',
        link:'google-plus' 
    },
    {
        icon:'fa fa-youtube',
        link:'youtube' 
    },
    {
        icon:'fa fa-linkedin',
        link:'linkedin' 
    },
    {
        icon:'fa fa-instagram',
        link:'instagram' 
    }, 
];
var app_title = new Vue({
    el: '#app-title',
    data: {
        title: 'Vue JS / Laracast', 
    }
})

Vue.component('social-i', {
    template:'<i><slot></slot></i>',
});
Vue.component('social-a', {
    template:'<i><social-i></social-i></i>',
});
Vue.component('social', {
    template:'<li><social-a></social-a></li>',
});
Vue.component('socials', {
    template:'<ul></ul>',
});

var app_main = new Vue({
    el: '#app-main',
    data: {
        nav: nav,
        social:social,
        search: 'Search',
    }
})
// app 2 title
var app_title = new Vue({
    el:'#app-title',
    data:{
        title:'Vue Kavak'
    } 
});
let nav  = [
        {
            link:'#compra', 
            text:'Compra un Auto', 
            submenu:false,
            active:true
        },
        {
            link:'#vende', 
            text:'Vende tu Auto', 
            submenu:false,
            active:false
        },
        {
            link:'#acerca', 
            text:'Acerca de Kavak', 
            submenu:[
                {
                    link:'#inspeccion',
                    text:'Inspección'
                },
                {
                    link:'#financiamiento',
                    text:'Financiamiento'
                },
                {
                    link:'#garantia',
                    text:'Garantia'
                },
                {
                    link:'#faq',
                    text:'Preguntas Frecuentes'
                },
            ],
            active:false
        },
        {
            link:'#registrate', 
            text:'Registrate',
            submenu:false,
            active:false
        },
        {
            link:'#contactanos', 
            text:'Contáctanos',
            submenu:false,
            active:false
        }, 

];
let footer = {
    logo:'assets/apolo/img/general/kavak_logo.jpg',
    social:[
        {
            link:'facebook',
            icon:'fa-facebook'
        },
        {
            link:'twitter',
            icon:'fa-twitter'
        },
        {
            link:'facebook',
            icon:'fa-facebook'
        },
        {
            link:'instagram',
            icon:'fa-instagram'
        },
        {
            link:'youtube',
            icon:'fa-youtube'
        },
        {
            link:'google-plus',
            icon:'fa-google-plus'
        },
        {
            link:'linkedin',
            icon:'fa-linkedin'
        }
    ], 
    footerNav:[
        {
            link:'Acerca',
            text:'Acerca de Kavak'
        },
        {
            link:'Testimonio',
            text:'Testimonios'
        },
        {
            link:'Contactanos',
            text:'Contáctanos'
        },
        {
            link:'Vender',
            text:'Cómo Vender Autos'
        },
        {
            link:'Buscar',
            text:'Buscar Autos en Venta'
        },
        {
            link:'FAQ',
            text:'Preguntas Frecuentes'
        }
    ],
    footerPolicy:[
        {
            link:'1',
            text:'Políticas de Privacidad'
        },
        {
            link:'2',
            text:'Términos y Condiciones'
        }
    ], 
    footerCopy:[
        {
            link:'1',
            text:'Copyright 2017 Kavak'
        },
    ]

};
let home = {
        banner:{
            title:'¡Un Auto. Una Experiencia Única!',
            buttons:[
                {
                    link:'#comprar',
                    text:'Comprar tu Auto Kavak'
                },  
                {
                    link:'#vender',
                    text:'Vender tu Auto Kavak'
                }
            ],
            videoTitle:'Cómo Funciona Kavak',
            image:'assets/apolo/img/home/banner_car.png', 
            more: 'Conoce más'
        }, 
        middleNav:[
            {
                link:'#porque-comprar',
                text:'Porque comprar un auto Kavak'
            },
            {
                link:'#compara',
                text:'Comparanos con la competencia'
            },
            {
                link:'#vender-auto',
                text:'Vender tu auto en Kavak es muy fácil'
            },
            {
                link:'#testimonios',
                text:'Testimoniales'
            },
        ],
        comprar:{
            title:'Porque comprar un auto en Kavak', 
            tab:{
                nav:[
                    {
                        active:true,
                        tabBody:'#home',
                        image:'assets/apolo/img/home/iconos-02.png',
                        text:'Ofrecemos el mejor precio' 
                    },
                    {
                        active:false,
                        tabBody:'#profile',
                        image:'assets/apolo/img/home/iconos-02.png',
                        text:'Mejor precios del Mercado' 
                    },
                    {
                        active:false,
                        tabBody:'#messages',
                        image:'assets/apolo/img/home/iconos-02.png',
                        text:'Garantizado con inspección de 240 pts' 
                    },
                    {
                        active:false,
                        tabBody:'#settings',
                        image:'assets/apolo/img/home/iconos-02.png',
                        text:'Entregado a tu puerta' 
                    },
                    {
                        active:false,
                        tabBody:'#certificado',
                        image:'assets/apolo/img/home/iconos-02.png',
                        text:'Inspeccionado y certificado' 
                    }
                ],
                body:[
                    {
                        active:true,
                        tabBody:'home',
                        image:'assets/apolo/img/home/ilustracion-desde-casa.png',
                        title:'Ofrecemos el mejor precio',
                        body:'1111111111xaxaxalorem qhkwjdhkjw qw kdhqwkdjqkwjd qkwdgqwjd qwjdgqjwdgqkjwd qkwjdgkqjwdgkqw kqwjd qkwjdgqk wdkqwjdg qkwjdgqkwjdgkqwjdg qwd'
                    },
                    {
                        active:false,
                        tabBody:'profile',
                        image:'assets/apolo/img/home/ilustracion-desde-casa.png',
                        title:'Mejor precios del Mercado',
                        body:'22222222222lorem qhkwjdhkjw qw kdhqwkdjqkwjd qkwdgqwjd qwjdgqjwdgqkjwd qkwjdgkqjwdgkqw kqwjd qkwjdgqk wdkqwjdg qkwjdgqkwjdgkqwjdg qwd'
                    },
                    {
                        active:false,
                        tabBody:'messages',
                        image:'assets/apolo/img/home/ilustracion-desde-casa.png',
                        title:'Garantizado con inspección de 240 pts',
                        body:'33333333333lorem qhkwjdhkjw qw kdhqwkdjqkwjd qkwdgqwjd qwjdgqjwdgqkjwd qkwjdgkqjwdgkqw kqwjd qkwjdgqk wdkqwjdg qkwjdgqkwjdgkqwjdg qwd'
                    },
                    {
                        active:false,
                        tabBody:'settings',
                        image:'assets/apolo/img/home/ilustracion-desde-casa.png',
                        title:'Entregado a tu puerta',
                        body:'4444444444lorem qhkwjdhkjw qw kdhqwkdjqkwjd qkwdgqwjd qwjdgqjwdgqkjwd qkwjdgkqjwdgkqw kqwjd qkwjdgqk wdkqwjdg qkwjdgqkwjdgkqwjdg qwd'
                    },
                    {
                        active:false,
                        tabBody:'certificado',
                        image:'assets/apolo/img/home/ilustracion-desde-casa.png',
                        title:'Inspeccionado y certificado',
                        body:'555555555lorem qhkwjdhkjw qw kdhqwkdjqkwjd qkwdgqwjd qwjdgqjwdgqkjwd qkwjdgkqjwdgkqw kqwjd qkwjdgqk wdkqwjdg qkwjdgqkwjdgkqwjdg qwd'
                    }
                ]
            }, 
            btn:{
                link:'#compra-btn',
                text:'Compra un auto Kavak'
            }
        },
        compara:{
            title:'Comparanos con los demas', 
            header:{
                comparaKavak:{
                    logo :'assets/apolo/img/general/kavak_logo.jpg', 
                    icon :'assets/apolo/img/home/bitmap.png'
                },
                comparaVs:{
                    vs   : 'vs'
                },
                comparaOther:{
                    text :'Otras altenativas de compra', 
                    icon :'assets/apolo/img/home/bitmap.png'
                }
            }, 
            body:[
                {
                    cardHeader:{
                        id     :'collapse-1',
                        left   :'Precio promedio',
                        center :20000,
                        right  :'Precio promedio', 
                    }, 
                    cardBody:{
                        mobileTabs:[
                            {
                                active : true,
                                tab    : 'assets/apolo/img/home/bitmap.png', 
                                text   : '11111 ipsum dolor sit amet, consectetur adipisicing elit. Sed repellat numquam tempora, natus dolorem maxime ex vitae beatae hic animi quos eaque error eligendi ea, ab, fugiat sunt molestiae saepe.'
                            },
                            {
                                active : false,
                                tab    : 'assets/apolo/img/home/bitmap.png', 
                                text   : '12222 ipsum dolor sit amet, consectetur adipisicing elit. Sed repellat numquam tempora, natus dolorem maxime ex vitae beatae hic animi quos eaque error eligendi ea, ab, fugiat sunt molestiae saepe.'
                            } 
                        ], 

                    }
                }, 
                {
                    cardHeader:{
                        id     :'collapse-2',
                        left   :'Precio promedio',
                        center :18000,
                        right  :'Precio promedio', 
                    }, 
                    cardBody:{
                        mobileTabs:[
                            {
                                active : true,
                                tab    : 'assets/apolo/img/home/bitmap.png', 
                                text   : '22222 ipsum dolor sit amet, consectetur adipisicing elit. Sed repellat numquam tempora, natus dolorem maxime ex vitae beatae hic animi quos eaque error eligendi ea, ab, fugiat sunt molestiae saepe.'
                            },
                            {
                                active : false,
                                tab    : 'assets/apolo/img/home/bitmap.png', 
                                text   : '23333 ipsum dolor sit amet, consectetur adipisicing elit. Sed repellat numquam tempora, natus dolorem maxime ex vitae beatae hic animi quos eaque error eligendi ea, ab, fugiat sunt molestiae saepe.'
                            } 
                        ], 

                    }
                }, 
                {
                    cardHeader:{
                        id     :'collapse-3',
                        left   :'Precio promedio',
                        center :12000,
                        right  :'Precio promedio', 
                    }, 
                    cardBody:{
                        mobileTabs:[
                            {
                                active : true,
                                tab    : 'assets/apolo/img/home/bitmap.png', 
                                text   : '33333 ipsum dolor sit amet, consectetur adipisicing elit. Sed repellat numquam tempora, natus dolorem maxime ex vitae beatae hic animi quos eaque error eligendi ea, ab, fugiat sunt molestiae saepe.'
                            },
                            {
                                active : false,
                                tab    : 'assets/apolo/img/home/bitmap.png', 
                                text   : '34444 ipsum dolor sit amet, consectetur adipisicing elit. Sed repellat numquam tempora, natus dolorem maxime ex vitae beatae hic animi quos eaque error eligendi ea, ab, fugiat sunt molestiae saepe.'
                            } 
                        ], 

                    }
                },
                {
                    cardHeader:{
                        id     :'collapse-4',
                        left   :'Precio promedio',
                        center :10000,
                        right  :'Precio promedio', 
                    }, 
                    cardBody:{
                        mobileTabs:[
                            {
                                active : true,
                                tab    : 'assets/apolo/img/home/bitmap.png', 
                                text   : '44444 ipsum dolor sit amet, consectetur adipisicing elit. Sed repellat numquam tempora, natus dolorem maxime ex vitae beatae hic animi quos eaque error eligendi ea, ab, fugiat sunt molestiae saepe.'
                            },
                            {
                                active : false,
                                tab    : 'assets/apolo/img/home/bitmap.png', 
                                text   : '45555 ipsum dolor sit amet, consectetur adipisicing elit. Sed repellat numquam tempora, natus dolorem maxime ex vitae beatae hic animi quos eaque error eligendi ea, ab, fugiat sunt molestiae saepe.'
                            } 
                        ], 

                    }
                }
            ],
            footer:{
                left:'Total de Ahorros',
                center:60000,
                right:'Compra tu auto Kavak'
            } 
        }, 
        vender:{
            title:'Vender tu auto en Kavak es muy sencillo', 
            tab:{
                nav:[
                    {
                        active:true,
                        tabBody:'#home1',
                        image:'assets/apolo/img/home/iconos-02.png',
                        text:'Recibe una oferta instantanea' 
                    },
                    {
                        active:false,
                        tabBody:'#profile1',
                        image:'assets/apolo/img/home/iconos-02.png',
                        text:'Garantizado con inspección de 240 pts' 
                    },
                    {
                        active:false,
                        tabBody:'#messages1',
                        image:'assets/apolo/img/home/iconos-02.png',
                        text:'Recibe tu pago sin complicaciones' 
                    }
                ],
                body:[
                    {
                        active:true,
                        tabBody:'home',
                        image:'assets/apolo/img/home/ilustracion-desde-casa.png',
                        title:'Ofrecemos el mejor precio',
                        body:'1111111111xaxaxalorem qhkwjdhkjw qw kdhqwkdjqkwjd qkwdgqwjd qwjdgqjwdgqkjwd qkwjdgkqjwdgkqw kqwjd qkwjdgqk wdkqwjdg qkwjdgqkwjdgkqwjdg qwd'
                    },
                    {
                        active:false,
                        tabBody:'profile',
                        image:'assets/apolo/img/home/ilustracion-desde-casa.png',
                        title:'Mejor precios del Mercado',
                        body:'22222222222lorem qhkwjdhkjw qw kdhqwkdjqkwjd qkwdgqwjd qwjdgqjwdgqkjwd qkwjdgkqjwdgkqw kqwjd qkwjdgqk wdkqwjdg qkwjdgqkwjdgkqwjdg qwd'
                    },
                    {
                        active:false,
                        tabBody:'messages',
                        image:'assets/apolo/img/home/ilustracion-desde-casa.png',
                        title:'Garantizado con inspección de 240 pts',
                        body:'33333333333lorem qhkwjdhkjw qw kdhqwkdjqkwjd qkwdgqwjd qwjdgqjwdgqkjwd qkwjdgkqjwdgkqw kqwjd qkwjdgqk wdkqwjdg qkwjdgqkwjdgkqwjdg qwd'
                    }
                ]
            }, 
            btn:{
                link:'#compra-btn',
                text:'Vendenos tu auto'
            }
        },
        testimonios:{
            title:'Testimonios Kavak',
            list:[
                {
                    name      :'Luis Hernandez',
                    excerpt   :'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, voluptate ratione quas, minus velit pariatur dolores accusamus, illum libero provident maiores nisi optio repudiandae praesentium vero repellendus modi, animi ex?',
                    cite      :'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, voluptate ratione quas, minus velit pariatur dolores accusamus, illum libero provident maiores nisi optio repudiallendus modi, animi ex?',
                    thumbnail :'http://www.kavak.com/assets/uploads/1475381544Rodrigo-Díaz-Jetta-A6.jpg',
                    video     :'https://www.youtube.com/embed/L7mNq2HFARk?list=PLeRyxUiDHhaqbExNXO-QnHcCaw5Xw6NZI'
                },
                {
                    name      :'Erick Vargas',
                    excerpt   :'Erick Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, voluptate ratione quas, minus velit pariatur dolores accusamus, illum libero provident maiores nisi optio repudiandae praesentium vero repellendus modi, animi ex?',
                    cite      :'Vargas Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, voluptate ratione quas, minus velit pariatur dolores accusamus, illum libero provident maiores nisi optio repudiallendus modi, animi ex?',
                    thumbnail :'http://www.kavak.com/assets/uploads/1475381544Rodrigo-Díaz-Jetta-A6.jpg',
                    video     :'https://www.youtube.com/embed/BOOljk_LOcs?list=PLeRyxUiDHhaqbExNXO-QnHcCaw5Xw6NZI'
                },
                {
                    name      :'Test Hernandez',
                    excerpt   :'testLorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, voluptate ratione quas, minus velit pariatur dolores accusamus, illum libero provident maiores nisi optio repudiandae praesentium vero repellendus modi, animi ex?',
                    cite      :'testLorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, voluptate ratione quas, minus velit pariatur dolores accusamus, illum libero provident maiores nisi optio repudiallendus modi, animi ex?',
                    thumbnail :'http://www.kavak.com/assets/uploads/1475381544Rodrigo-Díaz-Jetta-A6.jpg',
                    video     :'https://www.youtube.com/embed/uJJ2c0FFt9Y?list=PLeRyxUiDHhaqbExNXO-QnHcCaw5Xw6NZI'
                }
            ],
        },
        prensa:{
            title:'En la prensa',
            articles:[
                {
                    link:'http://www.forbes.com.mx/esta-startup-te-garantiza-vender-tu-auto-usado-en-menos-de-30-dias/#gs.grgH1YI',
                    img :'http://www.kavak.com/assets/uploads/1481918034Forbes-logo-vector.png',
                    text:'Esta startup te garantiza vender tu auto usado en menos de 30 días'
                },
                {
                    link:'http://www.forbes.com.mx/esta-startup-te-garantiza-vender-tu-auto-usado-en-menos-de-30-dias/#gs.grgH1YI',
                    img :'http://www.kavak.com/assets/uploads/1481918034Forbes-logo-vector.png',
                    text:'Esta startup te garantiza vender tu auto usado en menos de 30 días'
                },
                {
                    link:'http://www.forbes.com.mx/esta-startup-te-garantiza-vender-tu-auto-usado-en-menos-de-30-dias/#gs.grgH1YI',
                    img :'http://www.kavak.com/assets/uploads/1481918034Forbes-logo-vector.png',
                    text:'Esta startup te garantiza vender tu auto usado en menos de 30 días'
                },
                {
                    link:'http://www.forbes.com.mx/esta-startup-te-garantiza-vender-tu-auto-usado-en-menos-de-30-dias/#gs.grgH1YI',
                    img :'http://www.kavak.com/assets/uploads/1481918034Forbes-logo-vector.png',
                    text:'Esta startup te garantiza vender tu auto usado en menos de 30 días'
                },
                {
                    link:'http://www.sinembargo.mx/11-12-2016/3123913',
                    img :'http://www.kavak.com/assets/uploads/1480369589atraccion360.png',
                    text:'KAVAK cierra ronda de inversión por 3MDD, de las más grandes de América Latina',
                },
                {
                    link:'http://www.sinembargo.mx/11-12-2016/3123913',
                    img :'http://www.kavak.com/assets/uploads/1480369589atraccion360.png',
                    text:'KAVAK cierra ronda de inversión por 3MDD, de las más grandes de América Latina',
                },
                {
                    link:'http://bit.ly/2g3QrAk',
                    img :'http://www.kavak.com/assets/uploads/1480107696ebusinesshoy.png',
                    text:'México, un mercado con alto potencial para el e-commerce: Kavak',
                },
                {
                    link:'http://www.sinembargo.mx/11-12-2016/3123913',
                    img :'http://www.kavak.com/assets/uploads/1480369589atraccion360.png',
                    text:'KAVAK cierra ronda de inversión por 3MDD, de las más grandes de América Latina',
                },
                {
                    link:'http://bit.ly/2g3QrAk',
                    img :'http://www.kavak.com/assets/uploads/1480107696ebusinesshoy.png',
                    text:'México, un mercado con alto potencial para el e-commerce: Kavak',
                },
                {
                    link:'http://www.eluniversal.com.mx/articulo/autopistas/2016/11/25/una-apuesta-de-lujo-por-los-autos-de-segunda-mano',
                    img :'http://www.kavak.com/assets/uploads/1480369589atraccion360.png',
                    text:'México, un mercado con alto potencial para el e-commerce: Kavak',
                },
                {
                    link:'http://bit.ly/2g3QrAk',
                    img :'http://www.kavak.com/assets/uploads/1480107696ebusinesshoy.png',
                    text:'Dos venezolanos quieren acelerar la compraventa de autos en Latinoamérica',
                }
            ]
        }
};

let data =  {
                nav : nav,
                home: home,
                footer:footer,
                personas:[],
                personasAxios:[],
                isLoad:true,
};

var app_main = new Vue({

    el      :'#app-main',
    data:data,
    methods : {

        addSocial(){
            this.redes.push(this.newSocial);
            this.newSocial = '';
        }
        ,
        toggleClass(){
            this.isLoading = !this.isLoading;
            this.reverseMessage();
        }
    },
    computed: {
        preload(){
            $('.preloading').removeClass('preloading', function(){

                new WOW().init();
                $('#preload').addClass('out').text('hola');

                $(".wow-delay").children().each(function(index, el) {
                    var tiempo;
                    tiempo = (index*0.3);
                    $(this).attr("data-wow-delay", tiempo+'s');
                });
            })
        },
        reverseMessage(){
            this.computed = this.computed.split('').reverse().join('') ;
        }, 

        availableSocial(){
            return this.redes.filter(red => red.available);
        },

        unavailableSocial(){
            return this.redes.filter(red => !red.available);
        }

    }, 
    mounted(){
        this.cargarPersonas();
        this.cargarPersonasAxios();
    }, 
    methods: {
        cargarPersonas(){
            this.$http.get('https://randomuser.me/api/?results=10')
            .then((respuesta) => {
                // console.log(respuesta);
                this.personas = respuesta.body.results;
            })
        }, 
        cargarPersonasAxios(){
            axios.get('https://randomuser.me/api/?results=15')
            .then((respuesta) => {
                this.personasAxios = respuesta.data.results;
            })
        }
    }

});
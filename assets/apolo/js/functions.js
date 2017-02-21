
$(function(){
    $('.video-embed').fadeOut(10);

    // animacion con delay
    $(".wow-delay").children().each(function(index, el) {
        var tiempo;
        tiempo = (index*0.1);
        $(this).attr("data-wow-delay", tiempo+'s');
    });
    var ancho = $(window).width();
    if (ancho < 991) {
        $('.tab-content-mobile').removeClass('tab-content');
        $('.tab-content-body').parent().find('p').addClass('p-mobile');
        $('.wrap-mobile').on('click',function(){
            var wrap = $(this);
            $('.tab-content-body').parent().find('p').removeClass('open');
            wrap.parent().find('.p-mobile').toggleClass('open');
        });
    }
    if (ancho < 1200) {
        
        $('#main-nav-collapse').removeClass('show');
        $('.hvr-underline-from-center').removeClass('hvr-underline-from-center');

        $('#main-nav-collapse-btn').click(function(){
            $('#main-nav-collapse').toggleClass('show');
            $('#video-kavak-close').trigger('click');
        })
    }


    var elements = $('.lazyframe');

    lazyframe(elements, {
       apikey: undefined,
       debounce: 250,
       lazyload: true,

       // Callbacks
        onLoad: function(){
            
        }
    })

    // video play
    $('#video-kavak-play').click(function(e){
        e.preventDefault();
        $('.video-embed').fadeIn(500).addClass('active');
    })
    $('#video-kavak-close').click(function(e){
        e.preventDefault();
        $('.video-embed').fadeOut(500).removeClass('active');
    })


    // scroll ani
    var height_nav = 110;
    // linkInterno = $('a[href^="#"]:not(.nav-tabs li a)');
    linkInterno = $('a.anchor');
    linkInterno.on('click',function(e) {
        e.preventDefault();
        var href = $(this).attr('href');
        $('html, body').animate({ scrollTop : $( href ).offset().top - height_nav}, 'slow');
    });

    // slider
    if ($('#testimonials-gallery').children().length >1) {
        $('#testimonials-gallery').bxSlider(
            {
                pager:false, 
                onSliderLoad: function(){
                    // dom modifications
                    $('body').find('.bx-prev').html('<i class="fa fa-angle-left fa-3x"></i>');
                    $('body').find('.bx-next').html('<i class="fa fa-angle-right fa-3x"></i>');
                }
            }
        );
    }
    if ($('#prensa-gallery').children().length >5) {
        $('#prensa-gallery').bxSlider({
          minSlides: 1,
          maxSlides: 8,
          slideWidth: 185,
          slideMargin: 0, 
          // controls: false,
          auto: false,
          speed:2000,
          swipeThreshold:20,
          pager:false, 
                onSliderLoad: function(){
                    // dom modifications
                    $('body').find('.bx-prev').html('<i class="fa fa-angle-left fa-3x"></i>');
                    $('body').find('.bx-next').html('<i class="fa fa-angle-right fa-3x"></i>');
                }
        });
        $(document).on("ready", "bx-pager-item", function(){
            if ($('.bx-pager-item').length <2) {
                $('.bx-pager').addClass('hidden');
            }
        })
    }

    // $('.screen').on('scrollSpy:enter', function() {
    //     console.log('enter:', $(this).attr('id'));
    // });

    // $('.screen').on('scrollSpy:exit', function() {
    //     console.log('exit:', $(this).attr('id'));
    // });

    var main_nav      = $(".main-nav");
    var main_banner   = $(".main-banner");
    var middle_nav    = $(".middle-nav");
    var main_nav_h    = parseInt(main_nav.outerHeight());
    var main_banner_h = parseInt(main_banner.outerHeight());
    var middle_nav_h  = parseInt(middle_nav.outerHeight());

    $(window).scroll(function(event) {
        height = $(event.target).scrollTop();
        var ancho = $(window).width();
        var nav_banner = parseInt(main_nav_h + main_banner_h - 2*middle_nav_h);
        if (ancho>767) {
            if (height > main_nav_h) {
                main_nav.addClass("nav-small");
            }else{
                main_nav.removeClass("nav-small");
            }
            if (height > nav_banner) {
                middle_nav.addClass("middle-nav-fixed");
            }else{
                middle_nav.removeClass("middle-nav-fixed");
            }
        }
    })

    //scroolspy a pata

    $.fn.extend({   
        // Devuelve true si el elemento está en window
        isInScene : function(arg)
        {   
            // Fuerza que arg sea un objeto
            arg = arg || {};
            // Valor por defecto de desfase
            arg.desfase = 150;
            arg.desfase = arg.desfase || 0;
            // Fuerza a que desfase sea númerico
            arg.desfase = parseInt(arg.desfase,10);
     
            // Posición vertical del elemento respecto al principio del documento
            var pos_container = $(this).offset().top;
     
            // Altura del elemento
            var container_height = $(this).outerHeight();
     
            // Posición vertical de document
            var pos_document = $(document).scrollTop();
     
            // Alto ventana
            var window_height = $(window).height(); 
     
            return (pos_document+window_height > pos_container+arg.desfase && pos_container+container_height > pos_document+arg.desfase);
        }
    });
    
    function activeInScene(element){
        $('#middle-nav a').each(function(){
            if ($(this).data('ref')== element) {
                $('#middle-nav').find('li').removeClass('active');
                $(this).parent().addClass('active');
            }
        })
    }

    //elementos a espiar
    var elements = [
        '#porque-comprar', 
        '#compara', 
        '#vender-auto', 
        '#testimonios'
    ];

    // Utilizamos el método isInScene & activeInScene
    $(document).scroll(function(e)
    {   
        for (var i = 0; i < elements.length; i++) {
            if( $(elements[i]).isInScene()){
                activeInScene(elements[i]);
            }
        }
    });

    // notas: los links deben tener un data-ref igual al id del bloque a espiar

})
/*vue components start*/
    // main nav bar
    Vue.component('nav-fixed-top', {
        props   : ['nav'],
        template: `<ul class="navbar-nav mr-auto">
                        <li 
                            v-for="link in nav" 
                            class="hvr-underline-from-center nav-item" 
                            v-bind:class="{dropdown:link.submenu!=false, active:link.active}"
                            >
                            <a 
                                class="nav-link" 
                                v-bind:class="{'dropdown-toggle':link.submenu!=false}" 
                                v-bind:href="link.link" 
                                id="navbarDropdownMenuLink" 
                                data-toggle="dropdown" 
                                aria-haspopup="true" 
                                aria-expanded="false"
                                >{{link.text}}</a>

                            <div 
                                v-if="link.submenu.length > 0" 
                                class="dropdown-menu" 
                                aria-labelledby="navbarDropdownMenuLink"
                                >
                                <a 
                                    v-for="sub in link.submenu" 
                                    class="hvr-underline-from-center 
                                    dropdown-item" 
                                    v-bind:href="sub.link"
                                    >{{sub.text}}</a>
                            </div>
                        </li>
                    </ul>`
    });
    // main nav bar
    Vue.component('search-form', {
        props   : [],
        template: `<form class="form-inline my-2 my-lg-0 hidden">
                      <input class="form-control mr-sm-2" type="text" placeholder="Search">
                      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>`
    });
    // main nav bar
    Vue.component('middle-nav', {
        props   : ['nav'],
        template: `<nav class="middle-nav nav" id="middle-nav">
                                <ul class="anchor-nav">
                                    <li v-for="link in nav">
                                        <a class="anchor" v-bind:data-ref="link.link" v-bind:href="link.link">
                                            {{link.text}}
                                        </a>
                                    </li>
                                </ul>
                            </nav>`
    });


/*vue components end*/
var app_title = new Vue({
    el:'#app-title',
    data:{
        title:'Vue Kavak'
    } 
});

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
            title:'Comparanos con los demas'
        }
    };

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
let data =  {
                nav : nav,
                home: home,
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
            },

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
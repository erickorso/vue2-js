
$(function(){

// delay animation
    $(".wow-delay").children().each(function(index, el) {
        var tiempo;
        tiempo = (index*0.1);
        $(this).attr("data-wow-delay", tiempo+'s');
    });
//mobile behavior
    var ancho = $(window).width();
    if (ancho < 767) {
        // home / why kavak section
        $('.tab-content-mobile').removeClass('tab-content');
        $('.tab-content-body').parent().find('p').addClass('p-mobile');
        $('.wrap-mobile').on('click',function(){
            var wrap = $(this);
            $('.tab-content-body').parent().find('.p-mobile').fadeOut(200,function(){
                wrap.parent().find('.p-mobile').fadeIn(200);
            });
        });
    }
    if (ancho < 991) {
        // main nav
        $('#main-nav-collapse').removeClass('show');
        $('.hvr-underline-from-center').removeClass('hvr-underline-from-center');

        $('#main-nav-collapse-btn').click(function(){
            $('#main-nav-collapse').toggleClass('show');
            $('#video-kavak-close').trigger('click');
        })
        // home / compare section
        $('.nav-compare img').click(function(){
            var el   = $(this);
            var item = el.data('item');
            el.parent().find('.active').removeClass('active');
            el.addClass('active');
            el.parent().parent().find('.item').slideUp(400, function(){
                el.parent().parent().find('.item').removeClass('active');
                el.parent().parent().find('.item').slideDown(400, function(){
                    el.parent().parent().find(item).addClass('active');
                })
            })
        })
    }

// video lazyframe
    var elements = $('.lazyframe');

    lazyframe(elements, {
       apikey: undefined,
       debounce: 250,
       lazyload: true,

       // Callbacks
        onLoad: function(){
            
        }
    })

// home / how works  -- hide video onload
    $('.video-embed').fadeOut(10);

    $('#video-kavak-play').click(function(e){
        e.preventDefault();
        $('.video-embed').fadeIn(500).addClass('active');
    })
    $('#video-kavak-close').click(function(e){
        e.preventDefault();
        $('.video-embed').fadeOut(500).removeClass('active');
    })


// scroll animate
    var height_nav = 110;
    linkInterno = $('a.anchor');
    linkInterno.on('click',function(e) {
        e.preventDefault();
        var href = $(this).attr('href');
        $('html, body').animate({ scrollTop : $( href ).offset().top - height_nav}, 'slow');
    });

// testimonial slider
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
// prensa slider
    if ($('#prensa-gallery').children().length >5) {
        // adjust 2 mobile
        if (ancho > 767) {
            var slideWidth  = 185;
        }else{
            var slideWidth  = 150;
        }
        $('#prensa-gallery').bxSlider({
          minSlides: 1,
          maxSlides: 8,
          slideWidth: slideWidth,
          slideMargin: 0, 
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

//middle nav fixed on scroll
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

    //spy elements
    var elements = [
        '#porque-comprar', 
        '#compara', 
        '#vender-auto', 
        '#testimonios'
    ];

    // apply isInScene & activeInScene
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

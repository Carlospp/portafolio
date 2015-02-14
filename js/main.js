/**
 * Created by carlos Porras on 07/02/15.
 */
/*******************
 main  navigation
 ********************/
var contentSections = $('main section');
//open navigation on mobile
$('.cd-nav-trigger').on('click', function(){
    $('header').toggleClass('nav-is-visible');
});
//smooth scroll to the selected section
$('.cd-main-nav a[href^="#"]').on('click', function(event){
    event.preventDefault();
    $('header').removeClass('nav-is-visible');
    var target= $(this.hash),
        topMargin = target.css('marginTop').replace('px', ''),
        hedearHeight = $('header').height();
    $('body,html').animate({'scrollTop': parseInt(target.offset().top - hedearHeight - topMargin)}, 200);
});
//update selected navigation element
$(window).on('scroll', function(){
    updateNavigation();
});

function updateNavigation() {
    contentSections.each(function(){
        var actual = $(this),
            actualHeight = actual.height(),
            topMargin = actual.css('marginTop').replace('px', ''),
            actualAnchor = $('.cd-main-nav').find('a[href="#'+actual.attr('id')+'"]');

        if ( ( parseInt(actual.offset().top - $('.cd-main-nav').height() - topMargin )<= $(window).scrollTop() ) && ( parseInt(actual.offset().top +  actualHeight - topMargin )  > $(window).scrollTop() +1 ) ) {
            actualAnchor.addClass('selected');
        }else {
            actualAnchor.removeClass('selected');
        }
    });

};

var a = jQuery.noConflict();
a(document).ready(function() {
    a('#carousel').infiniteCarousel({

        imagePath: '',
        transitionSpeed:14000,
        displayTime: 0,
        thumbnailType: 'none',
        customClass: 'myCarousel',
        easeLeft: 'linear',
        easeRight:'linear',
        inView: 1,
        advance: 1,
        autoPilot: true,
        displayProgressRing: false,
        showControls: false,
        prevNextInternal: false

    });

});

//salir del foco de contactenos
function entroEnFoco(elemento){
    elemento.className='enfoco';
}
function salioDeFoco(elemento){
    elemento.className='';
}
//para menu hamburguesa
$(function() {
    var pull    = $('#pull');
    menu    = $('nav ul');
    menuHeight  = menu.height();

    $(pull).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });

    $(window).resize(function(){
        var w = $(window).width();
        if(w > 320 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });
});
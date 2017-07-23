/* global $, alert, console */
$(function() {
    //scroll to section About 
    $('.header-content-inner i').click(function() {
        $('html, body').animate({
            scrollTop: $('.About').offset().top
        }, 1000);
    });
    
    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });
    
});
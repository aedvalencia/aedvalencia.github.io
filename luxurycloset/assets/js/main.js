$(window).load(function() {
    $('.carousel').fadeIn(4000);
    $('.overlay').fadeIn(3500);
});

//PRELOADER
//<![CDATA[
$(window).load(function() { // makes sure the whole site is loaded
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(800).fadeOut('slow'); // will fade out the white DIV that covers the website.

})
//]]>

$(document).ready(function () {
    //menu nav toggle
    $('.selector').click(function(){
        $(this).toggleClass('active');
        $('.menu-items').toggleClass('show');
    });

    //full search toggle
    $('.search').click(function(){
        $(this).toggleClass('active');
        $('.searchform').toggleClass('show');
    });
});



$(window).scroll(function(){
    //scroll to top script(default for mobile and parallax pages)

    if ($(window).scrollTop() > 100) {
        $('header').addClass('show');
    } else {
        $('header').removeClass('show');
    }
});

function scrollToTop() {
    verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
    element = $('body');
    offset = element.offset();
    offsetTop = offset.top;
    $('html, body').animate({scrollTop: offsetTop}, 500, 'linear');
}

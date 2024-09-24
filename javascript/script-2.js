
// NAVIGATION BAR
$(window).on('load', function () {
    $(".inner-header-icon").click(function () {
        $(this).toggleClass("inner-header-icon-click inner-header-icon-out");
        $(".inner-nav").slideToggle(250);
    });

    $(".inner-nav").click(function () {
        $(".inner-header-icon").click();
    });

    $(".inner-nav a").each(function (index) {
        $(this).css({ 'animation-delay': (index / 10) + 's' });
    });
});

$(window).on('load', function () {
    const navItems = $(".navbar-nav .nav-item");
    
    // Fungsi mouseenter hanya aktif jika lebar layar lebih dari 640px
    navItems.mouseenter(function () {
        if ($(window).width() > 640) {
            const navHei = $(this).data('navHeight');
            $('.nav-box-view').css('--nav-active-height', navHei || '250px');
            $(this).addClass('active');

            if ($('.subnav-group', this).length) {
                $('.nav-box-view').addClass('active');
                $('.subnav-group', this).stop(true, true).slideDown(250).css('opacity', 1); // Slide down and show
            } else {
                $('.nav-box-view').removeClass('active');
            }
        }
    });

    // Fungsi mouseleave hanya aktif jika lebar layar lebih dari 640px
    $('.nav-box-view').mouseleave(function () {
        if ($(window).width() > 640) {
            navItems.filter('.active').removeClass('active');
            $('.nav-box-view').removeClass('active');
            $('.subnav-group').stop(true, true).slideUp(250).css('opacity', 0); // Slide up and hide
        }
    });
});



// ANIMATION
AOS.init(); 


// SWIPER HERO
var swiper = new Swiper(".swiper-container", {
speed: 1200,
loop: true,
autoplay: {
    delay: 2500,
    disableOnInteraction: false,
},
allowTouchMove: true,
threshold: 10,
longSwipesMs: 300,
longSwipesRatio: 0.3,
pagination: {
    el: ".swiper-pagination",
    clickable: true,
},
on: {
  init: function (swiper) {
slide = this.slides.eq(0);
slide.addClass("ani-slide");
},
transitionStart: function () {
for (i = 0; i < this.slides.length; i++) {
  slide = this.slides.eq(i);
  slide.removeClass("ani-slide");
}
},
transitionEnd: function () {
slide = this.slides.eq(this.activeIndex);
slide.addClass("ani-slide");
},
},
});


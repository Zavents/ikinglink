
(() => {
    const itemTotal = $('.app-thumbs li').length;
    const itemWidth = $('.uniq-apps .app-intro li').eq(0).width();

    const activeApp = (idx) => {
        console.log("::>> active app", idx);
        
        // Move text
        $(".uniq-apps .app-intro").css(
            "transform",
            `translateX(${-idx * itemWidth}px)`
        );

        // Move images
        const orders = new Array(itemTotal).fill(null).map((_, index) => index);
        const ends = orders.splice(0, idx);
        orders.push(...ends);

        const items = orders.map(index => {
            return $(`.app-thumbs li[data-idx="${index + 1}"]`);
        });

        $('.uniq-apps .app-thumbs').html('');
        items.forEach(item => $('.app-thumbs').append(item));
    };

    const indicators = $('.uniq-apps .slider .indicator li').click(function () {
        indicators.removeClass('active');
        $(this).addClass('active');
        const idx = indicators.index(this);
        activeApp(idx);
    });

    $('.uniq-apps .btns a').click(function () {
        let idx = indicators.index(indicators.filter('.active'));

        console.log('::>> current', idx);
        if ($(this).hasClass('prev')) {
            idx--;
            console.log('::>> prev', idx);
        } else {
            idx++;
            console.log('::>> next', idx);
        }
        if (idx < 0) idx = itemTotal - 1;
        else if (idx >= itemTotal) idx = 0;

        activeApp(idx);

        indicators.removeClass('active');
        indicators.eq(idx).addClass('active');
    });
})();





  
  $(window).on('load', function () {
    $(".inner-header-icon").click(function () {
        // Cek apakah lebar layar di bawah 768px
        if ($(window).width() < 768) {
            $(this).toggleClass("inner-header-icon-click inner-header-icon-out");
            $(".inner-nav").slideToggle(250);
  
            // Aktifkan nav-box-view dan subnav-group saat inner-header-icon diklik
            if ($(this).hasClass('inner-header-icon-click')) {
                $('.nav-box-view').addClass('active'); // Aktifkan nav-box-view
                $('.subnav-group').stop(true, true).slideDown(250).css('opacity', 1); // Slide down dan tampilkan subnav
            } else {
                $('.nav-box-view').removeClass('active'); // Nonaktifkan nav-box-view
                $('.subnav-group').stop(true, true).slideUp(250).css('opacity', 0); // Slide up dan sembunyikan subnav
            }
        }
    });
  
    $(".inner-nav").click(function () {
        // Hanya jalankan ini jika lebar layar di bawah 768px
        if ($(window).width() < 768) {
            $(".inner-header-icon").click();
        }
    });
  
    $(".inner-nav a").each(function (index) {
        $(this).css({ 'animation-delay': (index / 10) + 's' });
    });
  
    const navItems = $(".navbar-nav .nav-item");
  
    navItems.mouseenter(function () {
        const navHei = $(this).data('navHeight');
        $('.nav-box-view').css('--nav-active-height', navHei || '250px');
        $(this).addClass('active');
  
        if ($('.subnav-group', this).length) {
            $('.nav-box-view').addClass('active');
            $('.subnav-group', this).stop(true, true).slideDown(250).css('opacity', 1); // Slide down dan tampilkan
        } else {
            $('.nav-box-view').removeClass('active');
        }
    });
  
    $('.nav-box-view').mouseleave(function () {
        navItems.filter('.active').removeClass('active');
        $('.nav-box-view').removeClass('active');
        $('.subnav-group').stop(true, true).slideUp(250).css('opacity', 0); // Slide up dan sembunyikan
    });
  });
  
  
  
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

    const navItems = $(".navbar-nav .nav-item");
    
    navItems.mouseenter(function () {
        const navHei = $(this).data('navHeight');
        $('.nav-box-view').css('--nav-active-height', navHei || '250px');
        $(this).addClass('active');
        
        if ($('.subnav-group', this).length) {
            $('.nav-box-view').addClass('active');
            $('.subnav-group', this).stop(true, true).slideDown(250).css('opacity', 1); // Slide down and show
        } else {
            $('.nav-box-view').removeClass('active');
        }
    });

    $('.nav-box-view').mouseleave(function () {
        navItems.filter('.active').removeClass('active');
        $('.nav-box-view').removeClass('active');
        $('.subnav-group').stop(true, true).slideUp(250).css('opacity', 0); // Slide up and hide
    });
});
AOS.init(); 

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
(() => {
    const itemtotal = $(`.app-thumbs li`).length;
    const itemWidth = $(".uniq-apps .app-intro li").eq(0).width();

    const activeApp = (idx) => {
      console.log("::>> active app", idx);
      const orders = new Array(itemtotal).fill(null).map((_, idx) => idx);
      const ends = orders.splice(0, idx);
      orders.push(...ends);
      const items = orders.map((idx) => {
        return $(`.app-thumbs li[data-idx="${idx + 1}"]`);
      });

      $(`.uniq-apps .app-thumbs`).html("");
      items.forEach((item) => $(`.app-thumbs`).append(item));
      //   $(`.app-thumbs`).append(items);

      $(".uniq-apps .app-intro").css(
        "transform",
        `translateX(${-idx * itemWidth}px)`
      );
    };

    const indicators = $(".uniq-apps .slider .indicator li").click(function () {
      indicators.removeClass("active");
      $(this).addClass("active");
      const idx = indicators.index(this);
      activeApp(idx);
    });

    $(".uniq-apps .btns a").click(function () {
      let idx = indicators.index(indicators.filter(".active"));

      console.log("::>> current", idx);
      if ($(this).hasClass("prev")) {
        idx--;
        console.log("::>> prev", idx);
      } else {
        idx++;
        console.log("::>> next", idx);
      }
      if (idx < 0) idx = itemtotal - 1;
      else if (idx >= itemtotal) idx = 0;

      activeApp(idx);

      indicators.removeClass("active");
      indicators.eq(idx).addClass("active");
    });
  })();
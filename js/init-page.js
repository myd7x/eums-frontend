
  // تهيئة كل حاجة بعد ما كل الـ components تتحمّل
  document.addEventListener('components:loaded', function () {
    // الريفوليوشن سلايدر
    if (typeof dz_rev_slider_2 === 'function') dz_rev_slider_2();

    // التهيئة للكاروُسيلات (أرقام العناصر نفس الديمو)
    if ($.fn.owlCarousel) {
      $('.gallery-carousel').owlCarousel({
        loop:true, margin:30, nav:true, dots:false,
        responsive:{0:{items:1},576:{items:2},992:{items:3}}
      });

      $('.kinder-carousel').owlCarousel({
        loop:true, margin:30, nav:true, dots:false,
        responsive:{0:{items:1},768:{items:2},1200:{items:4}}
      });

      $('.blog-carousel.kinder-blog-area').owlCarousel({
        loop:true, margin:30, nav:true, dots:false,
        responsive:{0:{items:1},768:{items:2},1200:{items:3}}
      });

      $('.client-carousel').owlCarousel({
        loop:true, margin:30, nav:true, dots:false,
        responsive:{0:{items:1},768:{items:2},1200:{items:3}}
      });
    }

    // لايت جاليري
    if ($.fn.lightGallery) $('#lightgallery').lightGallery({ selector: '.check-km' });

    // Lazy (لو موجودة)
    if ($.fn.lazy) $('.lazy').Lazy();
  });


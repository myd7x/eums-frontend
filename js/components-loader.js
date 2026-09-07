
// Lightweight HTML includes + plugin inits
(function(){
  function includeAll(){
    const targets = document.querySelectorAll('[data-include]');
    const chain = Array.from(targets).reduce((p, el) => {
      return p.then(async () => {
        const file = el.getAttribute('data-include');
        try{
          const res = await fetch(file);
          const html = await res.text();
          el.outerHTML = html; // replace wrapper
        }catch(e){ console.error('Include failed:', file, e); }
      });
    }, Promise.resolve());

    chain.then(function(){
      // Init after components are in DOM
      if (window.WOW) { new WOW().init(); }
      if (window.jQuery){
        var $ = window.jQuery;
        if ($.fn.lazy) $('.lazy').Lazy();
        // Revolution Slider init (fallback-safe)
        if (typeof window.dz_rev_slider_5 === 'function') window.dz_rev_slider_5();
        else if ($.fn.revolution) {
          try { $('#rev_slider_11_1').show().revolution({ sliderType:'standard', sliderLayout:'auto' }); } catch(e){}
        }
      }
      // Hide loader if exists
      var ld = document.getElementById('loading-area');
      if (ld) ld.style.display = 'none';
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', includeAll);
  else includeAll();
})();
// مثال بسيط لوَدّيك حدث بعد ما كل الـ includes تخلص
(function () {
  const targets = document.querySelectorAll('[data-include]');
  if (!targets.length) return document.dispatchEvent(new Event('components:loaded'));

  let left = targets.length;
  targets.forEach(el => {
    fetch(el.getAttribute('data-include'))
      .then(r => r.text())
      .then(html => { el.outerHTML = html; })
      .finally(() => {
        if (--left === 0) document.dispatchEvent(new Event('components:loaded'));
      });
  });
})();
document.dispatchEvent(new Event('includes:ready'));

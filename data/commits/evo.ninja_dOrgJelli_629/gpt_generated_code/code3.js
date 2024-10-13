   const viewport = document.querySelector('meta[name=viewport]');

   function disableZoom() {
       viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
   }

   function restoreZoom() {
       viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
   }

   document.querySelectorAll('input, textarea, select').forEach((element) => {
       element.addEventListener('focus', disableZoom);
       element.addEventListener('blur', restoreZoom);
   });
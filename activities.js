

document.addEventListener('click', function (e) {
  var trigger = e.target.closest('[data-lightbox], [data-lightbox-trigger]');
  if (!trigger) return;

  var container = trigger.closest('.doc-viewer-body');
  var img = container ? container.querySelector('img') : trigger;
  if (!img || !img.src) return;

  openLightbox(img.src, img.alt);
});

document.addEventListener('click', function (e) {
  if (e.target.id === 'lightboxClose' || e.target.id === 'lightbox') {
    closeLightbox();
  }
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeLightbox();
});

function openLightbox(src, alt) {
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightboxImg');
  if (!lightbox || !lightboxImg) return;
  lightboxImg.src = src;
  lightboxImg.alt = alt || '';
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  var lightbox = document.getElementById('lightbox');
  if (!lightbox) return;
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}

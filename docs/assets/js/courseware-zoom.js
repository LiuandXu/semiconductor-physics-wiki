// 课件图片点击放大
document.addEventListener('DOMContentLoaded', function() {
  function bindCoursewareZoom() {
    document.querySelectorAll('.courseware-gallery figure img').forEach(function(img) {
      if (img.dataset.zoomBound) return;
      img.dataset.zoomBound = 'true';
      img.addEventListener('click', function() {
        var lb = document.createElement('div');
        lb.className = 'courseware-lightbox';
        var clone = img.cloneNode();
        clone.style.cssText = '';
        lb.appendChild(clone);
        lb.addEventListener('click', function() {
          lb.style.animation = 'mermaidFadeOut 0.15s ease';
          setTimeout(function() { lb.remove(); }, 150);
        });
        document.body.appendChild(lb);
      });
    });
  }
  bindCoursewareZoom();
  // MkDocs navigation
  if (typeof document$ !== 'undefined') {
    document$.subscribe(bindCoursewareZoom);
  }
});

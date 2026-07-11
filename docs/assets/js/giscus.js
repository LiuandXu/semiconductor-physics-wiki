// giscus 评论系统
// 使用 GitHub Discussions 存储评论
document.addEventListener('DOMContentLoaded', function () {
  const giscusDiv = document.getElementById('giscus-comments');
  if (!giscusDiv) return;

  // 在 MkDocs Material 中匹配当前颜色模式
  const palette = __md_get ? __md_get('__palette') : null;
  const isDark = palette && palette.color && palette.color.scheme === 'slate';
  const theme = isDark ? 'noborder_dark' : 'noborder_light';

  // 动态获取 palette 变化
  if (typeof __md_get !== 'undefined') {
    const setGiscusTheme = function () {
      const p = __md_get('__palette');
      if (p && typeof p.color === 'object') {
        const t = p.color.scheme === 'slate' ? 'noborder_dark' : 'noborder_light';
        const iframe = document.querySelector('iframe.giscus-frame');
        if (iframe) {
          iframe.contentWindow.postMessage(
            { giscus: { setConfig: { theme: t } } },
            'https://giscus.app'
          );
        }
      }
    };
    // 监听 palette 切换
    document.addEventListener('palette-changed', setGiscusTheme);
  }

  const script = document.createElement('script');
  script.src = 'https://giscus.app/client.js';
  script.setAttribute('data-repo', 'LiuandXu/semiconductor-physics-wiki');
  script.setAttribute('data-repo-id', 'R_kgDOTU5Ypg');
  script.setAttribute('data-category', 'General');
  script.setAttribute('data-category-id', 'DIC_kwDOTU5Yps4DA92s');
  script.setAttribute('data-mapping', 'pathname');
  script.setAttribute('data-strict', '0');
  script.setAttribute('data-reactions-enabled', '1');
  script.setAttribute('data-emit-metadata', '0');
  script.setAttribute('data-input-position', 'top');
  script.setAttribute('data-theme', theme);
  script.setAttribute('data-lang', 'zh-CN');
  script.setAttribute('data-loading', 'lazy');
  script.setAttribute('crossorigin', 'anonymous');
  script.async = true;

  giscusDiv.appendChild(script);
});

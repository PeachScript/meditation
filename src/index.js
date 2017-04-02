import hljs from './assets/lib/highlightjs/highlight.pack';
import Parallax from './js/parallax';
import Share from './js/share';

require('./sass/main.scss');

const shareIns = new Share(document.querySelector('.post-detail-wrapper .post-share'));

/**
 * Enable parallax for the post list
 */
Array.prototype.forEach.call(document.querySelectorAll('.post-item'), elm => new Parallax(elm, 50));

/**
 * Set target to new window for all hyperlinks in the post content
 */
(() => {
  const links = document.querySelectorAll('.post-content a');

  Array.prototype.forEach.call(links, (link) => {
    if (/^(https?|ftp|\/)/.test(link.href)) {
      link.setAttribute('target', '_blank');
    }
  });
})();

/**
 * Enable hightlighjs
 */
hljs.initHighlightingOnLoad();


/**
 * Export configuration tool
 */
if (typeof window !== 'undefined') {
  window.$meditationTool = {
    setShareButtons(btns) {
      shareIns.setShare(btns);
      return this;
    },
    setCopyright(html) {
      const container = document.querySelector('.post-copyright');

      if (container) {
        container.innerHTML = html;
      }

      delete this.setCopyright; // For security can only be set once
      return this;
    },
  };
}

/**
 * Initlize share buttons and copyright
 */
setTimeout(() => {
  if (document.querySelector('.post-detail-wrapper .post-share')) {
    shareIns.render();
  }

  // For security remove copyright set method
  if (window.$meditationTool && window.$meditationTool.setCopyright) {
    delete window.$meditationTool.setCopyright;
  }
}, 0);

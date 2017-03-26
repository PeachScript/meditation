import Parallax from './js/parallax';
import Share from './js/share';

require('./sass/main.scss');

/**
 * Enable parallax for the post list
 */
Array.prototype.forEach.call(document.querySelectorAll('.post-item'), elm => new Parallax(elm, 50));

/**
 * Enable share buttons for the post detail page
 */
if (document.querySelector('.post-detail-wrapper .post-share')) {
  new Share(document.querySelector('.post-detail-wrapper .post-share')).render();
}

/**
 *  Set target to new windows for all hyperlinks in the post content
 */
(() => {
  const links = document.querySelectorAll('.post-content a');

  Array.prototype.forEach.call(links, (link) => {
    if (/^(https?|ftp|\/)/.test(link.href)) {
      link.setAttribute('target', '_blank');
    }
  });
})();

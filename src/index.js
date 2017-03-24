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

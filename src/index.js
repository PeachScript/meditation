import Parallax from './js/parallax';

require('./sass/main.scss');

/**
 * Enable parallax for the post list
 */
Array.prototype.forEach.call(document.querySelectorAll('.post-item'), elm => new Parallax(elm, 50));


/**
 * Parallax 3D Class
 * @author      Peach<scdzwyxst@gmail.com>
 * @created     2017-03-19
 */

/**
 * start event handle
 * @param  {Event} ev  event object
 */
function startHandler(ev) {
  const wrapperHalfWidth = parseInt(getComputedStyle(this.wrapper).width, 10) / 2;
  const wrapperHalfHeight = parseInt(getComputedStyle(this.wrapper).height, 10) / 2;
  const offsetX = (ev.pageX || ev.touches[0].pageX) - this.wrapper.offsetLeft;
  const offsetY = (ev.pageY || ev.touches[0].pageY) - this.wrapper.offsetTop;

  this.wrapper.style.transform = `rotateX(${(wrapperHalfHeight - offsetY) / this.rotateRatio}deg) rotateY(${(offsetX - wrapperHalfWidth) / this.rotateRatio}deg)`;
  this.wrapper.style.webkitTransform = this.wrapper.style.transform;
  this.wrapper.style.msTransform = this.wrapper.style.transform;
  this.wrapper.style.MozTransform = this.wrapper.style.transform;
  this.wrapper.style.OTransform = this.wrapper.style.transform;
}

/**
 * end event handler
 */
function endHandler() {
  this.wrapper.style.transform = 'rotateX(0) rotateY(0)';
  this.wrapper.style.webkitTransform = this.wrapper.style.transform;
  this.wrapper.style.msTransform = this.wrapper.style.transform;
  this.wrapper.style.MozTransform = this.wrapper.style.transform;
  this.wrapper.style.OTransform = this.wrapper.style.transform;
}

/**
 * Initilize
 * @param {DOM}     wrapper     parallax wrapper
 * @param {Number}  rotateRatio transform ratio between the rotate and mousemove
 */
function Parallax(wrapper, rotateRatio = 10) {
  this.wrapper = wrapper;

  // Recalculate rotateRatio
  window.addEventListener('resize', (() => {
    function setRatio() {
      this.rotateRatio = rotateRatio / (1280 / document.documentElement
                                                       .getBoundingClientRect().width);
    }
    return setRatio.bind(this)() || setRatio.bind(this);
  })());

  // Get child parallax elements and sort them
  this.parallaxElms = [...this.wrapper.querySelectorAll('*[role^="parallax"]')].sort((prev, next) => {
    const prevIndex = prev.getAttribute('role').split('-')[1] || 0;
    const nextIndex = next.getAttribute('role').split('-')[1] || 0;
    return prevIndex - nextIndex;
  });

  // Initilize child parallax elements
  this.parallaxElms.forEach((elm, i) => {
    elm.style.transform = `translateZ(${(i + 1) * 15}px)`; // eslint-disable-line no-param-reassign
    elm.style.webkitTransform = elm.style.transform; // eslint-disable-line no-param-reassign
    elm.style.MozTransform = elm.style.transform; // eslint-disable-line no-param-reassign
    elm.style.msTransform = elm.style.transform; // eslint-disable-line no-param-reassign
    elm.style.OTransform = elm.style.transform; // eslint-disable-line no-param-reassign
  });

  // Initilize wrapper sytles
  this.wrapper.style.perspective = '2000px';
  this.wrapper.style.webkitPerspective = this.wrapper.style.perspective;
  this.wrapper.style.MozPerspective = this.wrapper.style.perspective;
  this.wrapper.style.transformStyle = 'preserve-3d';
  this.wrapper.style.webkitTransformStyle = this.wrapper.style.transformStyle;
  this.wrapper.style.MozTransformStyle = this.wrapper.style.transformStyle;
  this.wrapper.style.transition = `${getComputedStyle(this.wrapper).transition}, transform .1s linear`;
  this.wrapper.style.webkitTransition = `${getComputedStyle(this.wrapper).webkitTransition}, -webkit-transform .1s linear`;
  this.wrapper.style.msTransition = `${getComputedStyle(this.wrapper).msTransition}, -ms-transform .1s linear`;
  this.wrapper.style.MozTransition = `${getComputedStyle(this.wrapper).MozTransition}, -moz-transform .1s linear`;
  this.wrapper.style.OTransition = `${getComputedStyle(this.wrapper).OTransition}, -o-transform .1s linear`;

  // Handle mousemove
  this.wrapper.addEventListener('mousemove', startHandler.bind(this));
  this.wrapper.addEventListener('touchmove', startHandler.bind(this));
  this.wrapper.addEventListener('touchstart', startHandler.bind(this));

  // Handle mouseleave
  this.wrapper.addEventListener('mouseleave', endHandler.bind(this));
  this.wrapper.addEventListener('touchend', endHandler.bind(this));
}

export default Parallax;

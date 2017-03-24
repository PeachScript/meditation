import QRCode from 'qrcodejs3/qrcode';

/**
 * Share class
 * @author      Peach<scdzwyxst@gmail.com>
 * @created     2017-03-24
 */

const supportShares = {
  DOUBAN: {
    url: 'https://www.douban.com/share/service?href={{ url }}&amp;name={{ title }}',
    icon: 'douban',
  },
  WEIBO: {
    url: 'http://service.weibo.com/share/share.php?url={{ url }}&amp;title={{ title }}&amp;searchPic=true',
    icon: 'weibo',
  },
  RENREN: {
    url: 'http://widget.renren.com/dialog/share?resourceUrl={{ url }}&amp;srcUrl={{ url }}&amp;title={{ title }}',
    icon: 'renren',
  },
  QZONE: {
    url: 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url={{ url }}&amp;title={{ title }}',
    icon: 'qzone',
  },
  GPLUS: {
    url: 'https://plus.google.com/share?url={{ url }}',
    icon: 'google-plus',
  },
  FACEBOOK: {
    url: 'https://www.facebook.com/sharer/sharer.php?u={{ url }}',
    icon: 'facebook',
  },
  TWITTER: {
    url: 'https://twitter.com/intent/tweet?text={{ title }}&amp;url={{ url }}',
    icon: 'twitter',
  },
};

/**
 * Share initialize
 * @param {DOM} wrapper share wrap element
 */
function Share(wrapper) {
  this.wrapper = wrapper;
  this.setShare([
    ['DOUBAN', 'WEIBO', 'RENREN', 'QZONE'],
    ['GPLUS', 'FACEBOOK', 'TWITTER', 'QRCODE'],
  ]);
}

/**
 * Render share url
 * @param  {String} name share target
 * @return {String}      url
 */
function renderShareURL(name) {
  return supportShares[name].url.replace(/{{ ?url ?}}/g, encodeURIComponent(location.href))
                                .replace(/{{ ?title ?}}/g, encodeURIComponent(document.title));
}

/**
 * Replace the default shares
 * @param {Array} shares   the new share methods, you can use two-dimensional array to
 *                         render share button line by line, and the item must be:
 *                         'DOUBAN', 'WEIBO', 'RENREN', 'QZONE',
 *                         'GPLUS', 'FACEBOOK', 'TWITTER' or 'QRCODE'
 */
Share.prototype.setShare = function setShare(shares) {
  if (Array.isArray(shares)) {
    this.shares = shares;
  } else {
    throw new Error('Share: the parameter that passing to setShare() must be an array!');
  }

  return this;
};

/**
 * Render share buttons
 */
Share.prototype.render = function render() {
  const shareLine = document.createElement('p');

  this.shares.forEach((item) => {
    if (Array.isArray(item)) {
      Share.prototype.render.call({ wrapper: this.wrapper, shares: item });
    } else if (supportShares[item]) {
      shareLine.innerHTML += `<a target="_blank" href="javascript:open('${renderShareURL(item)}', 'Share', 'width=600,height=500');">
                                <i class="icon-${supportShares[item].icon}"></i>
                              </a>`;
    } else if (item === 'QRCODE') {
      shareLine.innerHTML += `<a href="javascript:;" class="plugin-share-qrcode-wrapper">
                                <i class="icon-qrcode"></i>
                                <span class="plugin-share-qrcode"></span>
                                <style>
                                  .plugin-share-qrcode-wrapper {
                                    position: relative;
                                  }
                                  .plugin-share-qrcode-wrapper:hover .plugin-share-qrcode,
                                  .plugin-share-qrcode-wrapper:focus .plugin-share-qrcode {
                                    display: block;
                                  }
                                  .plugin-share-qrcode {
                                    display: none;
                                    position: absolute;
                                    z-index: 10;
                                    bottom: 100%;
                                    right: 0;
                                    padding: 8px;
                                    background-color: #fff;
                                    box-shadow: 0 2px 8px rgba(0,0,0,.1);
                                  }
                                </style>
                              </a>`;
      new QRCode(shareLine.querySelector('.plugin-share-qrcode'), { // eslint-disable-line no-new
        text: location.href,
        width: 128,
        height: 128,
        colorDark: '#345e7e',
      });
    } else {
      throw new Error(`Share: not support share target - ${item}`);
    }
  });

  this.wrapper.appendChild(shareLine);
};

export default Share;

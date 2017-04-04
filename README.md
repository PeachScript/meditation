# meditation
[![version](https://img.shields.io/github/release/PeachScript/meditation.svg)]() [![downloads](https://img.shields.io/github/downloads/PeachScript/meditation/total.svg)]() [![license](https://img.shields.io/github/license/PeachScript/meditation.svg)]()

A deep and refined theme for the Ghost blog engine.

You can see a [demo](http://www.peachis.me/) in my own blog.

## Features

- Responsive
- QRCode share
- Social share buttons
- Focus on reading experience (base on [typo.css](https://github.com/sofish/typo.css/))
- Source code highlight (base on [highlight.js](https://github.com/isagalaev/highlight.js))

## Installation

1. Download the latest version from release page;
2. Unzip into `path/to/your/ghost/content/themes` folder;
3. Activate `mediation` in the `Ghost` General settings.

## Configuration

You can configure share buttons and copyright information with `$meditationTool` by the Ghost code injection feature:

Write configuration code in Ghost Admin > Settings -> Code Injection -> Blog Footer:
```javascript
<script>
  $meditationTool.setShareButtons(['FACEBOOK', 'TWITTER'])
                 .setCopyright('<p>Author: PeachScript</p>');
</script>
```

### $meditationTool

#### methods

**setShareButtons**

Configure share buttons in the post page. Support the following enumeration values:

| Name     | Meaning                                  |
| -------- | ---------------------------------------- |
| DOUBAN   | Add the [Douban](https://www.douban.com) share button |
| WEIBO    | Add the [Weibo](https://www.weibo.com) share button |
| RENREN   | Add the [Renren](http://www.renren.com) share button |
| QZONE    | Add the [QQ Zone](https://qzone.qq.com) share button |
| GPLUS    | Add the [Google Plus](https://plus.google.com) share button |
| FACEBOOK | Add the [Facebook](https://www.facebook.com) share button |
| TWITTER  | Add the [Twitter](https://www.twitter.com) share button |
| QRCODE   | Add the QRCode button to share by mobile phone |

Usage:
```javascript
// Passing an array to set share buttons
$meditationTool.setShareButtons(['GPLUS', 'FACEBOOK']);

// You also can passing a two-dimensional array to render multi-line share buttons
$meditationTool.setShareButtons([
  ['FACEBOOK'],
  ['GPLUS', 'TWITTER'],
  ['DOUBAN', 'WEIBO', 'RENREN']
]);
```

**setCopyright**

Configure copyright information in the post page. Support HTML tags.

*Notice: For security you only can call the method once in synchronized manner.*

Usage:
```javascript
$meditationTool.setCopyright('<p>Any code you want to insert to the copyright label</p>');
```

## Development setup

```bash
# install dependencies
npm install

# start webpack-dev-server
npm run dev
```

## Thanks to

1. [typo.css](https://github.com/sofish/typo.css/)
2. [highlight.js](https://github.com/isagalaev/highlight.js)
3. [normalize.css](https://github.com/necolas/normalize.css/)
4. [qrcodejs](https://github.com/davidshimjs/qrcodejs)
5. [webpack](https://github.com/webpack/webpack)
6. [uno-zen](https://github.com/Kikobeats/uno-zen)

## License

MIT License

Copyright (c) 2017 PeachScript

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

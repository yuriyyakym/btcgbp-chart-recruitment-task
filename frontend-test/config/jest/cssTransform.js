'use strict';

module.exports = {
  process() {
    return `
      const proxy = new Proxy({}, {
        get(obj, prop) {
          return prop;
        }
      });

      Object.defineProperty(exports, '__esModule', {
        value: proxy
      });

      Object.defineProperty(exports, 'default', {
        value: proxy
      });
    `;
  },
  getCacheKey() {
    return 'css-proxy';
  },
};

const withSass = require('@zeit/next-sass')
const withFonts = require('nextjs-fonts');


module.exports = withSass(withFonts({
    webpack(config, options) {
        const originalEntry = config.entry;

        config.entry = async () => {
          const entries = await originalEntry();
    
          // add custom polyfills into specific next.js bundle
          // https://github.com/zeit/next.js/issues/10794
          const nextPolyfillPath = 'static/runtime/polyfills.js';
          const nextPolyfills = entries[nextPolyfillPath];
          if (nextPolyfills) {
            entries[nextPolyfillPath] = [nextPolyfills, './polyfills.js'];
          }
    
          return entries;
        };
        return config;
    },
}));
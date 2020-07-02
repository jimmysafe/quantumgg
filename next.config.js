const withPlugins = require('next-compose-plugins');

const withSass = require('@zeit/next-sass')
const withFonts = require('nextjs-fonts');
// const css = require('@zeit/next-css');

const nextConfig = {
    webpack(config, options) {
        return config;
    },
}

module.exports = withPlugins([
    withSass,
    withFonts
], nextConfig)




// const withSass = require('@zeit/next-sass')
// const withFonts = require('nextjs-fonts');


// module.exports = withSass(withFonts({
//     webpack(config, options) {
//         return config;
//     },
// }));
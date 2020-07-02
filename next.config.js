const withPlugins = require('next-compose-plugins');

const sass = require('@zeit/next-sass')
const fonts = require('nextjs-fonts');
const css = require('@zeit/next-css');

const nextConfig = {
    webpack(config, options) {
        return config;
    },
}

module.exports = withPlugins([
    [sass],
    [
        css,
        {
            postcssLoaderOptions: {
                parser: true,
            },
        },
    ],
    [fonts]
], nextConfig)




// const withSass = require('@zeit/next-sass')
// const withFonts = require('nextjs-fonts');


// module.exports = withSass(withFonts({
//     webpack(config, options) {
//         return config;
//     },
// }));
const path = require('path');

module.exports = {
    resolve: {
        alias: {
            '@': path.resolve('resources/js'),
        },
    },
    // module: {
    //     rules: [
    //       {
    //         test: /\.(jsx|js|vue)$/,
    //         loader: 'eslint-loader',
    //         enforce: 'pre',
    //         exclude: /(node_modules)/,
    //         // options: {
    //         //   formatter: require('eslint-friendly-formatter')
    //         // }
    //       }
    //     ]
    //   }
};

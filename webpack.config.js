const MODE = 'development';
const enabledSourceMap = MODE === "development";

module.exports = {
  mode: MODE,
  entry: './slickgrid-src.js',
  output: {
    path: `${__dirname}`,
    filename: 'slickgrid.js'
  },
  module: {
    rules: [
      {
        test: /\.scss/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              url: true,
              sourceMap: enabledSourceMap,

              // 0 => no loaders (default);
              // 1 => postcss-loader;
              // 2 => postcss-loader, sass-loader
              importLoaders: 2
            }
          },
          {
            loader: "resolve-url-loader",
            options: {
              sourceMap: enabledSourceMap
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: enabledSourceMap
            }
          }
        ]
      },
      {
        test: /\.(gif|png|jpg|eot|wof|woff|woff2|ttf|svg)$/,
        loader: "url-loader"
      }
    ]
  }
};
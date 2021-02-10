module.exports = {
    components: 'src/components/*/*.js',
    webpackConfig: {
        module: {
          rules: [
            // Babel loader, will use your project’s babel.config.js
            {
              test: /\.jsx?$/,
              exclude: /node_modules/,
              loader: 'babel-loader'
            },
            // Other loaders that are needed for your components
            {
              test: /\.css$/,
              use: ['style-loader', 'css-loader']
            }
          ]
      }
    },
    pagePerSection: true,
    sections: [
      {
        name: 'Introduction',
        content: 'src/markdown/Introduction.md'
      },
      {
        name: 'Components',
        content: 'src/markdown/Components.md',
        components: 'src/components/*/*.js',
        sectionDepth: 2
      },
      {
        name: 'Usage',
        content: './src/markdown/Usage.md'
      }

    ],
}
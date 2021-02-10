module.exports = {
    title: 'moleculum',
    components: 'docs/*.js',
    theme: {
      color: {
        base: '#F5F5F5',
        light: '#BDBDBD',
        link: '#64B5F6',
        linkHover: '#2196F3',
        baseBackground: '#212121',
        ribbonBackground: '#FFF',
        sidebarBackground: '#616161'
      }
    },
    pagePerSection: true,
    sections: [
      {
        name: 'Introduction',
        content: 'docs/Introduction.md'
      },
      {
        name: 'Components',
        sections: [
          {
            name: 'Atoms',
            content: 'docs/atoms/Atoms.md',
            components: 'docs/atoms/*.js',
          },
          {
            name: 'Molecules',
            components: 'docs/molecules/*.js'
          },
          {
            name: 'Cells',
            components: 'docs/cells/*.js'
          }
        ],
        sectionDepth: 3
      }
    ],
    styles: {
      Playground: {
        preview: {
          background: "#E0E0E0",
          overflow: 'hidden',
          resize: 'horizontal'
        }
      },
      Pathline: {
        pathline: {
          display: 'none'
        }
      }
    },
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
      }
  }
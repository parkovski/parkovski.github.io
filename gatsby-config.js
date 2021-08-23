const path = require('path');

module.exports = {
  siteMetadata: {
    title: `parkovski.com`,
    description: `Parker's Website`,
    author: `Parker Snell`,
    siteUrl: `https://www.parkovski.com/`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-root-import`,
      options:
        // Generate paths from tsconfig.json.
        Object.entries(require('./tsconfig.json').compilerOptions.paths)
          .reduce((a, c) => {
            if (!c[0].endsWith('/*') || !c[1][0].endsWith('/*')) {
              throw `tsconfig.json path parse error: "${c[0]}": ["${c[1][0]}"].`;
            }
            c[0] = c[0].substr(0, c[0].length - 2);
            c[1] = c[1][0].substr(0, c[1][0].length - 2);
            a[c[0]] = path.join(__dirname, c[1]);
            return a;
          }, {}),
    },
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-plugin-react-helmet`,
      options: {
        icon: `src/images/p.png`,
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `parkovski.com`,
        short_name: `parkovski`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/p.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
};

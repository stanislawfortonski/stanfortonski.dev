const path = require('path');

module.exports = {
    siteMetadata: {
        title: 'Stanisław Fortoński',
        description: 'site.description',
        author: 'Stanisław Fortoński',
        siteUrl: 'https://stanfortonski.dev',
        recaptcha_public: process.env.recaptcha_public,
    },
    plugins: [
        {
            resolve: `gatsby-plugin-alias-imports`,
            options: {
                alias: {
                    '@': path.resolve(__dirname, 'src'),
                },
                extensions: ['js', 'css', 'ts', 'tsx'],
            },
        },
        {
            resolve: 'gatsby-plugin-i18n',
            options: {
                langKeyDefault: 'en',
                useLangKeyLayout: true,
            },
        },
        'gatsby-plugin-postcss',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-image',
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        {
            resolve: `gatsby-source-github-api`,
            options: {
                url: 'https://api.github.com/graphql',
                token: process.env.github_token,
                graphQLQuery: `{
          viewer {
            avatarUrl

            bestRepositories: repositories(isFork: false, isLocked: false, isArchived: false, orderBy: {field: STARGAZERS, direction: DESC}, privacy: PUBLIC, first: 7) {
              edges {
                node {
                  id
                  stargazerCount
                  forkCount
                  name
                  descriptionHTML
                  createdAt
                  url
                }
              }
            }
          }
        }`,
            },
        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'Stanisław Fortoński',
                short_name: 'stanfortonski.dev',
                start_url: '/',
                background_color: '#203748',
                theme_color: '#37bba5',
                display: 'standalone',
                icon: 'src/images/favicon.png',
            },
        },
    ],
};

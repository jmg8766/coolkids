module.exports = {
  siteMetadata: {
    title: `Cool Kids Koozie Club`,
    description: ``,
    author: `Justin Gottshall`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },
    {
		  resolve: `gatsby-source-filesystem`,
			options: {
		    name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-137251873-3`,
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`
  ],
}

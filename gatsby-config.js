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
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`
  ],
}

import config from "./src/data/config";

require("dotenv").config();

export default {
  siteMetadata: {
    title: config.title,
    description: config.description,
    image: config.featuredImage,
    siteUrl: config.siteUrl,
    author: config.author,
    fbid: config.fbid,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: { placeholder: "blurred" },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.title,
        short_name: config.title,
        start_url: `/`,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: `standalone`,
        icon: config.icon,
        cache_busting_mode: "none",
      },
    },
    {
      resolve: "gatsby-source-shopify",
      options: {
        password: process.env.SHOPIFY_SHOP_PASSWORD,
        storeUrl: process.env.GATSBY_SHOPIFY_STORE_URL,
        shopifyConnections: ["orders", "collections", "locations"],
      },
    },
    {
      resolve: `gatsby-plugin-graphql-codegen`,
      options: {
        fileName: `./gatsby-graphql.ts`,
        documentPaths: ["./src/**/*.{ts,tsx}", "./node_modules/gatsby-*/**/*.js"],
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint: process.env.MAILCHIMP_ENDPOINT, // string; add your MC list endpoint here; see instructions below
        timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
    },
  ],
};

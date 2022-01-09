import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";
import { MySiteMetaDataQuery } from "../../../gatsby-graphql";
import PropTypes from "prop-types";

interface SeoProps {
  title?: string;
  image?: string;
  description?: string;
  children?: React.ReactNode;
  location?: string;
}

const Seo = ({ title, image, description, location }: SeoProps) => {
  const { site }: MySiteMetaDataQuery = useStaticQuery(graphql`
    query mySiteMetaData {
      site {
        siteMetadata {
          defaultTitle: title
          defaultDescription: description
          defaultImage: image
          siteUrl
          author
          fbid
        }
      }
    }
  `);

  const seo = {
    title: title ?? site?.siteMetadata?.defaultTitle,
    description: description ?? site?.siteMetadata?.defaultDescription,
    image: image ?? site?.siteMetadata?.siteUrl! + site?.siteMetadata?.defaultImage,
    siteUrl: `${site?.siteMetadata?.siteUrl}${location ?? ""}`,
  };

  return (
    <Helmet>
      <html lang="en" dir="ltr" />
      <link rel="canonical" href={seo.siteUrl!} />
      <link rel="preload" as="font" />
      <title>{seo.title!}</title>
      <meta name="description" content={seo.description!} />
      {seo.image && <meta name="image" content={seo.image} />}

      <meta property="og:url" content={seo.siteUrl!} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seo.title!} />
      <meta property="og:description" content={seo.description!} />
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta property="fb:app_id" content={site?.siteMetadata?.fbid!} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={site?.siteMetadata?.author!} />
      <meta name="twitter:title" content={seo.title!} />
      <meta name="twitter:description" content={seo.description!} />
      {seo.image && <meta name="twitter:image:src" content={seo.image} />}
    </Helmet>
  );
};

Seo.propTypes = {
  title: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  description: PropTypes.string,
  location: PropTypes.string,
};

export default Seo;

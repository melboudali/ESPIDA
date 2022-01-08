import path from "path";
import { CreatePagesArgs } from "gatsby";
import { resPostType, postType, resCollectionType, collectionType } from "./src/types";

const turnProductsIntoPages = async (args: CreatePagesArgs) => {
  const { actions, graphql } = args;
  const postTemplate = path.resolve("./src/templates/product.tsx");
  const res: resPostType = await graphql(`
    query createShopifyProduct {
      products: allShopifyProduct {
        nodes {
          handle
          id
          productType
        }
      }
    }
  `);

  res.data?.products.nodes.forEach(({ id, productType, handle }: postType) => {
    actions.createPage({
      path: `collections/${productType}/${handle}`,
      component: postTemplate,
      context: { id },
    });
  });
};

const turnCollectionsIntoPages = async (args: CreatePagesArgs) => {
  const { actions, graphql } = args;
  const collectionTemplate = path.resolve("./src/templates/collection.tsx");
  const res: resCollectionType = await graphql(`
    query createShopifyCollection {
      collections: allShopifyCollection {
        nodes {
          id
          title
          handle
        }
      }
    }
  `);

  res.data?.collections.nodes.forEach(({ id, handle, title }: collectionType) => {
    actions.createPage({
      path: `collections/${handle}`,
      component: collectionTemplate,
      context: { id, title },
    });
  });
};

exports.createPages = async (params: CreatePagesArgs) => {
  await Promise.all([turnProductsIntoPages(params), turnCollectionsIntoPages(params)]);
};

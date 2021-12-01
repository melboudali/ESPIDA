import path from "path";
import { CreatePagesArgs } from "gatsby";
import { resType, postType } from "./src/types";

const turnProductsIntoPages = async (args: CreatePagesArgs) => {
  const { actions, graphql } = args;
  const postTemplate = path.resolve("./src/templates/product.tsx");
  const res: resType = await graphql(`
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

  res.data?.products.nodes.forEach((post: postType) => {
    actions.createPage({
      path: `${post.productType!}/${post.handle!}`,
      component: postTemplate,
      context: { id: post.id },
    });
  });
};

exports.createPages = async (params: CreatePagesArgs) => {
  await Promise.all([turnProductsIntoPages(params)]);
};

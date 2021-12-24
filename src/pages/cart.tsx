import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import React from "react";
import { StoreContext } from "../context";

interface Props {}

const cart = (props: Props) => {
  const { checkout } = React.useContext(StoreContext);

  const items = checkout ? checkout.lineItems : [];

  const quantity = items.reduce((total: any, item: any) => {
    return total + item.quantity;
  }, 0);
  console.log(items[0]);
  return (
    <div>
      you have {quantity} item
      <a href={checkout.webUrl} target="_blank">
        click me
      </a>
      {items && (
        <div>
          {checkout.lineItems.map((qtty: any) => (
            <div key={qtty.id}>
              <p>title: {qtty.title}</p>
              <p>quantity: {qtty.quantity}</p>
              <p>variant id: {qtty.variant.id}</p>
              {/* {qtty.variant.image && (
                <GatsbyImage image={qtty.variant.image} alt="product_image" className="gatsby_image" style={{ width: "100px" }} />
              )} */}
              <img src={qtty.variant.image.src} alt="jackets" style={{ width: "100px" }} />
              <p>variant title: {qtty.variant.title}</p>
              <p>variant price: {qtty.variant.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default cart;

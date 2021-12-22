import React from "react";
import { StoreContext } from "../context";

interface Props {}

const cart = (props: Props) => {
  const { checkout } = React.useContext(StoreContext);

  const items = checkout ? checkout.lineItems : [];

  const quantity = items.reduce((total: any, item: any) => {
    return total + item.quantity;
  }, 0);

  return (
    <div>
      you have {quantity} item
      <a href={checkout.webUrl} target="_blank">
        click me
      </a>
      <div>
        {checkout.lineItems.map((qtty: any) => (
          <p>
            {qtty.title} {qtty.variant.title}
          </p>
        ))}
      </div>
    </div>
  );
};

export default cart;

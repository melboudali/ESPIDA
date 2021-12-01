import React from "react";

interface Props {
  pageContext: { id: string };
}

const product = (props: Props) => {
  return <div>hello world {props.pageContext.id}</div>;
};

export default product;

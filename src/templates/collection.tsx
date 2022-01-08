import React from "react";

interface Props {
  pageContext: { id: string; title: string };
}

const Collection = ({ pageContext: { id, title } }: Props) => {
  return (
    <div>
      <p>id: {id}</p>
      <p>{title}</p>
    </div>
  );
};

export default Collection;

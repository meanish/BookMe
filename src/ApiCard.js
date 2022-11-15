import React from "react";

const ApiCard = (props) => {
  console.log(props);
  const { hints: Hints } = props.container;
  console.log(Hints);
  return (
    <>
      <p>Dtasta found</p>
    </>
  );
};

export default ApiCard;

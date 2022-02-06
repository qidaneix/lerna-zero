import React from "react";
import { useSum } from "hooks";

export const App = (props) => {
  const tsum = useSum(props.arr);
  console.log(useSum(props.arr));

  return (
    <>
      <div>This is Apppppp</div>
      <div>sum: {tsum}</div>
    </>
  );
};

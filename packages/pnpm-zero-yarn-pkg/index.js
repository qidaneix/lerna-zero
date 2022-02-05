import React from "react";
import JSON5 from "json5";

export const App = () => {
  return (
    <>
      <div>This is Apppppp</div>
      <div>{JSON5.stringify({ sb: "sb" })}</div>
    </>
  );
};

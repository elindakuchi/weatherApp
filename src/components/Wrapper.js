import React from "react";

const Wrapper = ({ title, children }) => {
  return (
    <>
      <p style={{ marginLeft: "30px", color: "lightgrey" }}>{title}</p>
      {children}
    </>
  );
};
export default Wrapper;

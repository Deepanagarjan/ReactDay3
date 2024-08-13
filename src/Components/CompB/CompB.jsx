import React from "react";
import "./CompB.css";

const CompB = ({ obj }) => {
  return (
    <>
      <h1 className="head">HELLO</h1>
      <h2>Name:{obj.name}</h2>
      <h3>age:{obj.age}</h3>
    </>
  );
};

export default CompB;

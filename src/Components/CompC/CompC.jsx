import React from "react";

const CompC = ({ arr }) => {
  const handleSubmit = () => {
    alert("Iam Fine Thanks for Asking");
  };

  return (
    <>
      <h1>HOW ARE YOU ?</h1>
      <button onClick={handleSubmit}>Click To Know</button>
      {arr.map((element, index) => {
        return (
          <>
            <div key={index}>
              <h1>{element}</h1>
            </div>
          </>
        );
      })}
    </>
  );
};

export default CompC;

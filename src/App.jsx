import React from 'react';
import CompB from './Components/CompB/CompB';
import CompA from './Components/CompA/CompA';
import CompC from './Components/CompC/CompC';
import CompD from './Components/CompD/CompD';



const App = () => {
  const a = 15;
  const arr=[1, 2, 3, 4, 5];
  const obj={name:"test", age:5};
  const arrobj=[
    {id: 1, name:"deepa", age:5},
    {id: 1, name:"rohan", age:6},
    {id: 1, name:"amir", age:7},

  ];
  return (
    <>
      <h1> App Component</h1>
      <CompA a={a} />
      <CompB obj={obj} />
      <CompC arr={arr}/>
      <CompD arrobj={arrobj}/>
    </>
  );
};

export default App;
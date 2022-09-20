import { useState } from 'react';
import AddDeal from "../AddDeal";
import CardContainer from '../CardContainer';

function App() {
  const [deals, setDeals] = useState([]);

  const addNewDeal = (descr, importance, day) =>{
    setDeals([...deals,
    {
      id: Date.now(),
      descr, importance, day
    }]);
    console.log(deals);
  };



  return (
    <>
      <AddDeal addNewDeal={addNewDeal}/>
      <CardContainer deals={deals}/>
    </>
  );
}

export default App;
import { useState } from 'react';
import AddDeal from "../AddDeal";
import CardContainer from '../CardContainer';

const start_deals = [
  {
    id: 1,
    descr: 'поесть',
    importance: '0',
    day: "1"
  },
  {
    id: 2,
    descr: 'поесть 1',
    importance: '1',
    day: "1"
  },
  {
    id: 3,
    descr: 'поесть 2',
    importance: '1',
    day: "2"
  }
]

function App() {
  const [deals, setDeals] = useState(start_deals);

  const addNewDeal = (descr, importance, day) =>{
    setDeals([...deals,
    {
      id: Date.now(),
      descr, importance, day
    }]);
  };



  return (
    <>
      <AddDeal addNewDeal={addNewDeal}/>
      <CardContainer deals={deals}/>
    </>
  );
}

export default App;
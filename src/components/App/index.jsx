import { useState, useEffect } from 'react';
import AddDeal from "../AddDeal";
import CardContainer from '../CardContainer';
import EmptyDeals from '../EmptyDeals';

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
  const [deals, _setDeals] = useState(start_deals);

  const setDeals = (state)=>{
    _setDeals(state);
    localStorage.setItem('deals', JSON.stringify(state));
  }

  useEffect(() =>{
    const deals = JSON.parse(localStorage.getItem('deals')) ?? [];
    setDeals(deals);
  }, []);

  const addNewDeal = (descr, importance, day) =>{
    setDeals([...deals,
    {
      id: Date.now(),
      descr, importance, day
    }]);
  };

  const deleteDeal = (id)=>{
    setDeals(deals.filter(elem => elem.id !== id));
  };

  const deleteDay = (day_num)=>{
    setDeals(deals.filter(elem => elem.day !== day_num));
  };

  return (
    <>
      <AddDeal addNewDeal={addNewDeal}/>
      <CardContainer deals={deals} deleteDeal={deleteDeal} deleteDay={deleteDay}/>
    </>
  );
}

export default App;
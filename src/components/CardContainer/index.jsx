import React from 'react'
import EmptyDeals from '../EmptyDeals';
import WeekdayCard from '../WeekdayCard'
import s from './style.module.sass'

export default function CardContainer({deals, deleteDeal, deleteDay}) {
  const result = [];

  deals.forEach(deal => {
    const day = result.find(day => day.day_num === deal.day);

    if (day !== undefined){
      day.deals.push(deal);
    }else{
      result.push({
        day_num: deal.day,
        deals: [deal]
      })
    }
  });

  result.sort((a, b)=> +a.day_num - +b.day_num);

  return (
    <div className={s.container}>
        {
            deals.length === 0
            ? <EmptyDeals />
            : result.map(day => 
              <WeekdayCard 
                key={day.day_num} 
                label={day.day_num} 
                deals={day.deals}
                deleteDeal={deleteDeal}
                deleteDay={deleteDay}/>)
        }
    </div>
  )
}

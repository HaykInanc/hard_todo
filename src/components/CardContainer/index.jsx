import React from 'react'
import WeekdayCard from '../WeekdayCard'
import s from './style.module.sass'

export default function CardContainer({deals}) {
  const result = [];

  deals.forEach(deal => {
    const day = result.find(day => day.day_num === deal.day);

    if (day !== undefined){
      day.deals.push(deal)
    }else{
      result.push({
        day_num: deal.day,
        deals: [deal]
      })
    }
});

  return (
    <div className={s.container}>
        {
          result.map(day => 
            <WeekdayCard 
              key={day.day_num} 
              label={day.day_num} 
              deals={day.deals}/>)
        }
    </div>
  )
}

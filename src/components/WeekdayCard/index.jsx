import React from 'react'
import DealCard from '../DealCard'
import s from './style.module.sass'
import Close from '../UI/Close';
import { week_label } from './weekLabels';

export default function WeekdayCard({label, deals, deleteDeal, deleteDay}) {
  return (
    <div className={s.container}>
        <div className={s.label}>
            {week_label[label]}
        </div>
        <div className={s.deals}>
            {
                deals.map(deal => <DealCard key={deal.id} {...deal} deleteDeal={deleteDeal}/>)
            }
        </div>
        <div className={s.close}>
          <Close onClick={()=>deleteDay(label)}/>
        </div>
        
    </div>
  )
}

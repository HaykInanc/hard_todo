import React from 'react'
import DealCard from '../DealCard'
import s from './style.module.sass'
import Close from '../UI/Close';

export default function WeekdayCard({label, deals}) {
  return (
    <div className={s.container}>
        <div className={s.label}>
            {label}
        </div>
        <div className={s.deals}>
            {
                deals.map(deal => <DealCard key={deal.id} {...deal}/>)
            }
        </div>
        <div className={s.close}>
          <Close />
        </div>
        
    </div>
  )
}

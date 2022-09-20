import React from 'react'
import WeekdayCard from '../WeekdayCard'
import s from './style.module.sass'

export default function CardContainer({deals}) {
  return (
    <div className={s.container}>
        <WeekdayCard label={'ПН'} deals={deals}/>
    </div>
  )
}

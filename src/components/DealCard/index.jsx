import React from 'react'
import Close from '../UI/Close';
import s from './style.module.sass';

export default function DealCard({id, descr, importance, deleteDeal}) {

  const style = {
    backgroundColor: importance === '0' ? '#1ABC9C' : '#E74C3C'
  };

  return (
    <div style={style} className={s.card}>
        {descr}
        <div className={s.close}>
          <Close onClick={()=>deleteDeal(id)}/>
        </div>
    </div>
  )
}
import React from 'react';
import s from './style.module.sass';

export default function EmptyDeals() {
  return (
    <div className={s.container}>На данный момент у вас нет дел</div>
  )
}

// если нет дел должен выводиться EmptyDeals
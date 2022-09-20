import React from 'react'
import Select from 'react-select'
import Button from '../UI/Button';
import s from './style.module.sass'

export default function AddDeal({addNewDeal}) {

  const day_options = [
    { value: 1, label: 'Понедельник' },
    { value: 2, label: 'Вторник' },
    { value: 3, label: 'Среда' },
    { value: 4, label: 'Четверг' },
    { value: 5, label: 'Пятница' },
    { value: 6, label: 'Суббота' },
    { value: 7, label: 'Воскресенье' },
  ];

  const importance_options = [
    {value: 0, label: 'Не важное'},
    {value: 1, label: 'Важное'},
  ]
    
  const submit = event => {
    event.preventDefault();
    const {day, importance, descr} = event.target;
    addNewDeal(descr.value, importance.value, day.value);
  }

  return (
    <form className={s.container} onSubmit={submit}>
        <div className={s.input_container}>
            <Select 
              placeholder='День' 
              name='day' 
              options={day_options} />
            <Select 
              placeholder='Важность' 
              name='importance' 
              options={importance_options} />
            <input placeholder='Описание' className={s.descr} type="text" name='descr'/>
        </div>
        <Button>Добавить</Button>
    </form>
  )
}


// создать компонент CardContainer
// создать компонент DealCard и вывести все дела
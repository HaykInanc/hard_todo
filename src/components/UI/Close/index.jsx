import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' 
import s from './style.module.sass'

export default function Close() {
  return (
    <button className={s.close}>
        X
    </button>
  )
}

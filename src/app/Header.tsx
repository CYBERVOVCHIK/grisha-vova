import React from 'react';
import s from './header.module.css'

export default function Header() {
  return (
    <div className={s.header}>
      <div className={`${s.title} ${s.nav_item}`}>Республика Татарстан</div>
    </div>
  )
}

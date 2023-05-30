import React from "react";
import s from "./header.module.css";

export default function Header() {
  return (
    <header className={s.header}>
      <div className={s.title}>Республика Татарстан</div>
      <div className={s.menu}>
        <ul className={s.nav_items}>
          <li>
            <a href="#" className={s.nav_item}>
              <span className={s.active}>Карта ДТП</span>
            </a>
          </li>
          <li>
            <a href="#" className={s.nav_item}>
              <span>История авторизаций</span>
            </a>
          </li>
        </ul>
      </div>

      <a href="#" className={s.quit}>
        <span>Выйти</span>
      </a>
    </header>
  );
}

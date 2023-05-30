"use client";
import React, { useState } from "react";
import Input_item1 from "./Input_item1";
import Input_item2 from "./Input_item2";
import f from "./filter.module.css";

export default function Filter() {
  const [date_start, setDate_start] = useState("")
  const [date_end, setDate_end] = useState("")
  const [area, setArea] = useState("")

  const onSubmitHandler = () => {
    console.log(date_start)
    console.log(date_end)
    console.log(area)
  }

  return (
    <div className={f.filter}>
      <form className={f.form} action="" onSubmit={onSubmitHandler}>
        <div className={f.inputs}>
          <div>
            <label className={f.label} htmlFor="date_start" >
              Начало периода
            </label>
            <Input_item1 id="date_start" setDate_start = {setDate_start} date_start = {date_start}/>
          </div>
          <div>
            <label className={f.label} htmlFor="date_end" >
              Конец периода
            </label>
            <Input_item2 id="date_end" setDate_end = {setDate_end} date_end = {date_end}/>
          </div>
          <div className={f.div_select}>
            <div className={f.select_icon}></div>
            <label
              className={`${f.label} ${f.margin_left_40}`}
              htmlFor="area_select"
            >
              Районы республики
            </label>
            <select
              id="area_select"
              className={`${f.input} ${f.select} ${f.margin_left_40}`}
              onChange={event => {setArea(event.target.value)}}
            >
              <option hidden className={`${f.option} ${f.select_title}`}>Выберите нужные районы</option>
              <option className={f.option} value="Район 1">Район 1</option>
              <option className={f.option} value="Район 2">Район 2</option>
              <option className={f.option} value="Район 3">Район 3</option>
            </select>
          </div>
          <input className={f.submit} type="submit" value={"Применить"}></input>
        </div>
      </form>
    </div>
  );
}

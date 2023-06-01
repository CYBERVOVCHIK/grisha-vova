"use client";
import React, { useState } from "react";
import Input_item1 from "./Input_item1";
import Input_item2 from "./Input_item2";
import f from "./filter.module.css";

export default function Filter() {
  const [date_start, setDate_start] = useState("");
  const [date_end, setDate_end] = useState("");

  const [checkedState, setCheckedState] = useState(new Array(3).fill(""));
  const handleOnChange = (id) => {
    console.log(id);
  };
  const [expanded, setExpanded] = useState(false);

  const onSubmitHandler = () => {
    if (date_start.length !== 16 || date_end.length !== 16) {
      console.log("Некорректный ввод");
    } else {
      console.log(date_start);
      console.log(date_end);
      console.log(checkedState);
    }
  };

  return (
    <div className={f.filter}>
      <form className={f.form} action="" onSubmit={onSubmitHandler}>
        <div className={f.inputs}>
          <div>
            <label
              className={f.label}
              htmlFor="date_start"
              onClick={onSubmitHandler}
            >
              Начало периода
            </label>
            <Input_item1
              id="date_start"
              setDate_start={setDate_start}
              date_start={date_start}
            />
          </div>
          <div>
            <label className={f.label} htmlFor="date_end">
              Конец периода
            </label>
            <Input_item2
              id="date_end"
              setDate_end={setDate_end}
              date_end={date_end}
            />
          </div>

          <div className={f.multiselect}>
            <div
              onClick={() => setExpanded(!expanded)}
              className={
                expanded
                  ? `${f.select_icon} ${f.select_icon_upside}`
                  : `${f.select_icon} `
              }
            ></div>
            <label className={`${f.label}`} htmlFor="area_select">
              Районы республики
            </label>
            <div
              className={
                expanded ? `${f.selectBox}` : `${f.selectBox} ${f.can_hover}`
              }
              onClick={() => setExpanded(!expanded)}
            >
              <select
                className={
                  expanded
                    ? `${f.select} ${f.selectBoxChecked}`
                    : `${f.input} ${f.select}`
                }
              >
                <option hidden>Выберите нужные районы</option>
              </select>
              <div className={f.overSelect}></div>
            </div>
            <div className={expanded ? `${f.checkboxes}` : `${f.none}`}>
              <label htmlFor="one">
                <input className={f.checkbox} type="checkbox" id="one" />{" "}
                {/* надо через map добавлять населенные пункты и каждому элементу приписывать айди и этот айди передавать в handleOnChange*/}
                Населенный пункт
              </label>
              <label htmlFor="two">
                <input className={f.checkbox} type="checkbox" id="two" />{" "}
                {/* надо через map добавлять населенные пункты и каждому элементу приписывать айди и этот айди передавать в handleOnChange*/}
                Населенный пункт
              </label>
              <label htmlFor="three">
                <input className={f.checkbox} type="checkbox" id="three" />{" "}
                {/* надо через map добавлять населенные пункты и каждому элементу приписывать айди и этот айди передавать в handleOnChange*/}
                Населенный пункт
              </label>
            </div>
          </div>

          <button className={`${f.submit}`}><span className={f.btn_text}>Применить</span></button>
        </div>
      </form>
    </div>
  );
}

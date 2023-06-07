"use client";
import React, { useState } from "react";
import Select from "react-select";
import Input_item1 from "./Input_item1";
import Input_item2 from "./Input_item2";
import f from "./filter.module.css";

const colourOptions = [
  { value: 1, label: "Населенный пункт 1"},
  { value: 2, label: "Населенный пункт 2"},
  { value: 3, label: "Населенный пункт 3"},
];

export default function Filter() {
  const [date_start, setDate_start] = useState("");
  const [date_end, setDate_end] = useState("");

  const [districts, setDistricts] = useState([])

  const onChange = (newValue: any) => {
    setDistricts(newValue.map((v:any) => v.value))
  }
  const [expanded, setExpanded] = useState(false);

  const onSubmitHandler = () => {

    console.log(date_start);
    console.log(date_end);
    console.log(districts);

  };

  return (
    <div className={f.filter}>
      <div className={f.inputs}>
        <div>
          <label className={f.label} htmlFor="date_start">
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
      <label className={f.label} htmlFor="select">Районы республики
        <Select
          defaultValue={[colourOptions[2], colourOptions[3]]}
          isMulti
          name="colors"
          options={colourOptions}
          className={f.select}
          classNamePrefix="select"
          onChange={onChange}
          id="select"
        />
        </label>
        {/* должен быть input type=submit или button? */}
        <button className={`${f.submit}`} onClick={onSubmitHandler}>
          <span className={f.btn_text}>Применить</span>
        </button>
      </div>
    </div>
  );
}

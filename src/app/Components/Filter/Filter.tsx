"use client";
import React, { useState } from "react";
import Input_item from "./Input_item";
import f from "./filter.module.css";

export default function Filter() {
  const Submition = () => {
    console.log()
  }
  return (
    <div className={f.filter}>
      <form className={f.form} action="" >
        <div className={f.inputs}>
          <div>
            <label className={f.label} htmlFor="date_start">
              Начало периода
            </label>
            <Input_item id="date_start" />
          </div>
          <div>
            <label className={f.label} htmlFor="date_end">
              Конец периода
            </label>
            <Input_item id="date_end" />
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
            >
              <option
                value=""
                hidden
                className={`${f.option} ${f.select_title}`}
              >
                Выберите нужные районы
              </option>
              <option className={f.option}>Район 1</option>
              <option className={f.option}>Район 2</option>
              <option className={f.option}>Район 3</option>
            </select>
          </div>
          <input className={f.submit} type="submit" value={"Применить"}></input>
        </div>
      </form>
    </div>
  );
}

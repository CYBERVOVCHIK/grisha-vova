"use client"
import React from "react";
import { ChangeEvent, useState, useRef } from 'react';
import e from "./excelUpload.module.css";

export default function ExcelUpload() {

  const file2 = useRef<File>(null);
  const [file, setFile] = useState<File>();
  const [selected, setSelected] = useState(false);
  const [found, setFound] = useState("Файл не найден");
  
  const reduction = (name:string) => {
    if(name.length < 14) {
      return name;
    } else {
      return name.substring(0, 14) + "...";
    }
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
      if(e.target.files.length === 1){
        setSelected(true);
        setFound("");
      } else {
        setSelected(false)
        setFound("Файл не найден");
      }
      
    }
  };

  const handleUploadClick = () => {
    if (!file) {
      return;
    }


    fetch('https://httpbin.org/post', {
      method: 'POST',
      body: file,

      headers: {
        'content-type': file.type,
        'content-length': `${file.size}`, 
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  };


  return (
    <div className={e.container}>
      <div className={e.block}>
        <span className={e.block_header}>
          Добавить записи<br/>о ДТП из Excel файла
        </span>
        <form className={e.block_row_2}>
          <label className={e.input_file}>
            <input type="file" name="file" ref={file2} onChange={handleFileChange}/>
            <span className={!selected? e.input_file_text : e.input_file_text_selected}>{`${found}${selected? (file2 && `${reduction(file2.name)}`) : ""}`}</span>
            <span className={e.input_file_btn}>Загрузить</span>
          </label>
        </form>
        {/*  react-data-export библиотека для работы с экселем */}
        <button className={selected? e.submit : e.submit_disabled} disabled={!selected} onClick={() => console.log(123)}><span className={e.btn_text}>Применить</span></button>
      </div>
      <div className={e.block}>
        <span className={e.block_header}>
          Добавить записи<br/>о ДТП из Excel файла
        </span>
      </div>
      <div className={e.block}>
        <span className={e.block_header}>
          Обновить стационарные комплексы и районы передвижных комплексов
        </span>
      </div>
      <div className={e.block}>
        <span className={e.block_header}>
          Обновить данные<br/>по районам ДТП и комплексов
        </span>
      </div>
    </div>
  );
}

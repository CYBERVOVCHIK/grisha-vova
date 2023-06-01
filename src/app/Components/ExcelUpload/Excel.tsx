import React from "react";
import e from "./excelUpload.module.css";

export default function ExcelUpload() {
  let downloaded = "Файл не загружен";
  return (
    <div className={e.container}>
      <div className={e.block}>
        <span className={e.block_header}>
          Добавить записи<br></br>о ДТП из Excel файла
        </span>
        <form className={e.block_row_2}>
          <label className={e.input_file}>
            <input type="file" name="file"></input>
            <span className={e.input_file_text}>{downloaded}</span>
            <span className={e.input_file_btn}>Загрузить</span>
          </label>
        </form>
      </div>
      <div className={e.block}>
        <span className={e.block_header}>
          Добавить записи<br></br>о ДТП из Excel файла
        </span>
      </div>
      <div className={e.block}>
        <span className={e.block_header}>
          Обновить стационарные комплексы и районы передвижных комплексов
        </span>
      </div>
      <div className={e.block}>
        <span className={e.block_header}>
          Обновить данные<br></br>по районам ДТП и комплексов
        </span>
      </div>
    </div>
  );
}

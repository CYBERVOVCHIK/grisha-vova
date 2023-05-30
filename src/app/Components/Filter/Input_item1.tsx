import React from "react";
import f from "./filter.module.css";

export default function Input_item(props) {
  const [type, setType] = React.useState(true);
  const onFocus = (): void => setType(false);
  const onBlur = (): void => setType(true);

  return (
    <div>
      <input
        type={type ? "text" : "datetime-local"}
        onFocus={onFocus}
        onBlur={onBlur}
        className={f.input}
        placeholder="дд. мм. гг.  00:00"
        id={props.id}
        value={props.date_start}
        onChange={(event) => props.setDate_start(event.target.value)}
      ></input>
    </div>
  );
}

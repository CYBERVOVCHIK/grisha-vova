import React from "react";
import f from "./filter.module.css";

export default function Input_item({ id }: { id: string }) {
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
        id={id}
      ></input>
    </div>
  );
}

import React, { useContext } from "react";
import { Context } from "../Context";

export default function Input({ type, catagory, name, index, size }) {
  const [updateItem] = useContext(Context);

  return (
    <input
      type="text"
      inputmode="numeric"
      pattern="[0-9]*"
      onChange={({ target }) => updateItem(catagory, index, size, target.value)}
      name={name.replace(" ", "-").toLowerCase()}
    />
  );
}

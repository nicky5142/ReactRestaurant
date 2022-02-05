import React, { useState } from "react";

export const Context = React.createContext();

export const Provider = (props) => {
  const [items, setItems] = useState({});

  const updateItem = (type, catagory, index, size, count) => {
    const key = `${catagory.toLowerCase()}-${index}-${size}`;
    const amount = Number.isNaN(Number(count)) ? 0 : Number(count);

    setItems({ ...items, [key]: Number(amount) });
  };

  return (
    <Context.Provider value={[items, updateItem]}>
      {props.children}
    </Context.Provider>
  );
};

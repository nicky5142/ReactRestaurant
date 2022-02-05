import React from "react";
import Input from "./Input";

export default function Extras({ type, catagory, items }) {
  return (
    <section className="extras">
      <h2 className="extras-heading">{type}</h2>
      {items.map((item, index) => (
        <article className="menu-item" key={index}>
          <div className="extras-name">{item.name}</div>
          <Input
            type={type}
            catagory={catagory}
            name={item.name}
            index={index}
            size="small"
          />
          <strong className="extras-price">${item.small_price}</strong>
          <Input
            type={type}
            catagory={catagory}
            name={item.name}
            index={index}
            size="large"
          />
          <strong className="extras-price">${item.large_price}</strong>
        </article>
      ))}
    </section>
  );
}

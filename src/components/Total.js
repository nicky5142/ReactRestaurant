import React, { useContext } from "react";
import { Context } from "../Context";
import data from "../data";

export default function Total() {
  const [items] = useContext(Context);

  const totalPrice = Object.keys(items).reduce((acc, curr) => {
    const [group, item, size] = curr.split("-");
    var amount = 0;
    if (size === "small") amount = items[curr] * data[group][item].small_price;
    else if (size === "large")
      amount = items[curr] * data[group][item].large_price;
    else amount = items[curr] * data[group][item].price;
    return acc + amount;
  }, 0);

  return (
    <div className="total">
      <span className="total-title">Total:</span>
      <span className="total-price">${totalPrice}</span>
    </div>
  );
}

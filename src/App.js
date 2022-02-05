import React from "react";
import Logo from "./components/Logo";
import Mains from "./components/Mains";
import Extras from "./components/Extras";
import Rice from "./components/Rice";
import Total from "./components/Total";
import { Provider } from "./Context";
import { mains, rice, sides } from "./data";

import "./styles.css";

export default function App() {
  return (
    <Provider>
      <div className="menu">
        <Logo />
        <Mains meals={mains} />
        <aside className="aside">
          <Rice type="米食" catagory="rice" items={rice} />
          <Extras type="小菜" catagory="sides" items={sides} />
        </aside>
        <Total />
      </div>
    </Provider>
  );
}

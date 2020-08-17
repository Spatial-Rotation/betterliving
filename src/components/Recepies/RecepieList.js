import React from "react";
import { RecepieContextValue } from "./RecepieProvider";

function RecepieList() {
  const [{ recepies }] = RecepieContextValue();
  console.log(recepies);

  return (
    <ul className="list-group">
      {recepies.map((Recepie, index) => {
        const { recepiename, category } = Recepie;
        return (
          <li key={index} className="list-group-item active">
            {recepiename} {category}
          </li>
        );
      })}
    </ul>
  );
}

export default RecepieList;

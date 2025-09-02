
import {TabContext} from "../context/TabContext"
import { useContext } from "react";
function Menu() {
  const menu = useContext(TabContext);
  console.log(menu)
  return (
    <div className="box">
      <nav>
        <h1>Menu</h1>
        <ul>
          {menu.map((item, index) => (
            <li key={index}>
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Menu;




import {country} from "../../data/countryData.jsx"
import "./coutry.scss"
 function Country() {
   return (
     <div className="country">
       <h2>Danh sách các quốc gia</h2>
       <ul>
         {(country || []).map((item) => (   // xử lý nếu mảng null or undefined
            <ul className="country">
                <li  className="country-item" key={item.id}>
                   <span className="country-text"> {item.name}</span>
                    </li>
                <ul>
                  {(item.city||[]).map((city) => (
                    <li className="country-subitem" key={city.id}>
                        <span className="country-subtext">{city.name}</span>
                    </li>
                  ))}
                </ul>
            </ul>
         ))}
       </ul>
     </div>
   );
 }
export default Country;
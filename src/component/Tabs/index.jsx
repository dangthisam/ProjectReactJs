import { useEffect, useState } from "react";
import "./tabs.scss"
function Tabs(){
    const [activeTab, setActiveTab] = useState("products");
    const [data, setData] = useState([]);

    useEffect(() => {
       fetch(`https://dummyjson.com/${activeTab}`)
           .then((response) => response.json())
           .then((data) => {
               setData(data[activeTab]);
           });
    }, [activeTab]);

    return (
       <>
     <div className="tabs">
        <div className="tabs__item" onClick={() => setActiveTab("products")}>
          Products
        </div>
        <div className="tabs__item" onClick={() => setActiveTab("users")}>
          Users
        </div>
        <div className="tabs__item" onClick={() => setActiveTab("posts")}>
          Posts
        </div>
     </div>

     <div className="tabs__content">
        <ul>
 { data.map(item => (
         <li key={item.id} className="tabs__item">
           {item.title || item.firstName}
         </li>
       ))}
        </ul>
      
     </div>
       </>
    );
}

export default Tabs;

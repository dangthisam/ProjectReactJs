
import { useState } from "react";
function Lamp (){
   const [status, setStatus] = useState(false);

   const toggleLamp = () => {
       setStatus(!status);
   };

    return (
        <div className={`lamp ${status ? "on" : "off"}`}>
            <button onClick={toggleLamp}>
                {status ? "Tắt đèn" : "Bật đèn"}
            </button>
            <div className="lamp-status">
                {status ? "Đèn đang bật" : "Đèn đang tắt"}
            </div>
        </div>
    );
}


export default Lamp;
import {  useEffect , useState } from "react";

function UseEffect (){
    const [data , setData]=useState([]);
    useEffect(() => {
        // Fetch data from API or perform some side effect
        fetch("https://dummyjson.com/products")
            .then(response => response.json())
            .then(data => setData(data.products))
            .catch(error => console.error("Error fetching data:", error));
    }, []); // Empty dependency array means this effect runs once on mount
console.log(data)
    return (
        <>
          <div>
            {data.map(item => (
              <div key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </>
    )
}

export default UseEffect;

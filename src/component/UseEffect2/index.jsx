import { useEffect , useState } from "react";
import "./products.scss"
function UseEffect2(){
    const limit=10;
    const [data, setData] =useState([]);
    const [pageActive, setPageActive] =useState(0);
    const [quantityPage, setQuantityPage] =useState(0);

    useEffect(()=>{
        fetch(`https://dummyjson.com/products?skip=${pageActive * limit}&limit=${limit}`)
        .then((response)=>response.json())
        .then((data)=>{
            setData(data.products);
            setQuantityPage(Math.ceil(data.total / limit));
        })
    },[pageActive])


    return (
        <>
        <div className="products__list">
            {data.map((product) => (
                <div className="product__item" key={product.id}>
                    <img src={product.thumbnail} alt={product.title} />
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                    <span>{product.price}</span>
                </div>
            ))}
        </div>
        <ul className="pagination">
            {[...Array(quantityPage)].map((_, index) => (
                <li key={index} onClick={() => setPageActive(index)}>
                    {index + 1}
                </li>
            ))}
        </ul>
        
        </>
    )
}

export default UseEffect2;
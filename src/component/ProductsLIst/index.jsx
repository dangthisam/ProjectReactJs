import { productlist } from "../../data/data.jsx";
import GetProductList from "./productData.jsx"
function ProductsList() {
  return (
    <>
     <div className="product-list">
              {
                productlist.map((item) => (
                 <GetProductList item={item}  key={item.id}/>
                ))}
              
     </div>
    </>
  );
}

export default ProductsList;

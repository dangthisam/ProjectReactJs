import { useState } from "react";

function Cart(){
    const [cartItems, setCartItems] = useState(1);
    const handleSetCartItems = (e) => {
        const value = parseInt(e.target.value);
        setCartItems(value);
    };
    const unitPrice = 100000; // Giá đơn vị của sản phẩm

    return (
        <table>
            <thead>
                <tr>
                    <th>Tên sản phẩm</th>
                    <th>Giá</th>
                    <th>Số lượng</th>
                    <th>Tổng</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Sản phẩm 1</td>
                    <td>{unitPrice.toLocaleString()}đ</td>
                    <td>
                        <input
                            type="number"
                            value={cartItems}
                            onChange={handleSetCartItems}
                        />
                    </td>
                    <td>{cartItems * unitPrice}đ</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Cart;
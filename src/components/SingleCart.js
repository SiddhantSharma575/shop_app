import React from 'react'
import "./SingleCart.css"
import { useDispatch } from "react-redux"
import { updateItem, remove } from "../redux/slices/cartSlice"

const SingleCart = ({ item }) => {
    // const { cart } = useSelector((state) => state);
    const dispatch = useDispatch();
    const increaseQuantity = () => {
        dispatch(updateItem({ ...item, qty: item.qty + 1 }))
    }

    const decreaseQuantity = () => {
        if (item.qty > 1) {
            dispatch(updateItem({ ...item, qty: item.qty - 1 }))
        } else {
            dispatch(remove(item))
        }
    }


    return (
        <div className="single__cart__container">
            <div className="left">
                <img src={item.image} alt={item.title} width={200} height={200} />
            </div>
            <div className='right'>
                <h5>{item.title}</h5>
                <p>Price : ₹{item.price}</p>
                <div className="quant__container">
                    <button onClick={() => increaseQuantity()}>+</button>
                    <span>{item.qty}</span>
                    <button onClick={() => decreaseQuantity()}>-</button>
                </div>
                <p>Total : ₹{item.price * item.qty}</p>
            </div>
        </div>
    )
}

export default SingleCart;
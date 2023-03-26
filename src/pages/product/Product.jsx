import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import "./Product.css"
import { useSelector, useDispatch } from "react-redux"
import { add, remove } from "../../redux/slices/cartSlice"

const Product = () => {
    const { cart } = useSelector((state) => state);
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate()
    const removeFromCart = () => {
        dispatch(remove(location.state.product))
    }
    const addToCart = () => {
        dispatch(add({ ...location.state.product, qty: 1 }))
    }
    return (
        <div className='prduct__container'>
            <div className="left">
                <img src={location.state.product.image} alt={location.state.product.title} width={200} height={300} />
            </div>
            <div className='right'>
                <h3>{location.state.product.title}</h3>
                <p>{location.state.product.description}</p>
                <p>Category : {location.state.product.category}</p>
                <p>Price :  ₹{location.state.product.price}</p>
                {
                    (cart.filter((item) => item.id === location.state.product.id)).length > 0 ? <button onClick={() => removeFromCart()}>Remove from Cart</button> :
                        <button onClick={() => addToCart()}>Add to Cart</button>
                }
                <button style={{ marginLeft: "1rem" }} onClick={() => navigate("/carts")}>Go to Carts</button>
            </div>
        </div>
    )
}

export default Product;
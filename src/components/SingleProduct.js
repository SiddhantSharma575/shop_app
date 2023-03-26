import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./SingleProduct.css"
import { useDispatch, useSelector } from "react-redux"
import { add, remove } from "../redux/slices/cartSlice"

const SingleProduct = ({ product }) => {
    const navigate = useNavigate()
    const { cart } = useSelector((state) => state)
    const dispatch = useDispatch()

    const addToCart = (pro) => {
        dispatch(add({ ...product, qty: 1 }))
    }
    const removeFromCart = (pro) => {
        dispatch(remove(product))
    }

    return (
        <div className="single__product__container">
            <div className="img__container">
                <img src={product.image} alt={product.title} width={200} height={200} />
            </div>
            <div className="bottom__container">
                <h4>{product.title.substring(0, 20)}...</h4>
                <p>Price : ₹{product.price}</p>
                {
                    (cart.filter((item) => item.id === product.id)).length > 0 ? <button onClick={() => removeFromCart(product)}>Remove from Cart</button> :
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                }
                <button onClick={() => navigate(`/product/${product.id}`, {
                    state: {
                        product: product
                    }
                })}>View Product Details..</button>
            </div>
        </div>
    )
}

export default SingleProduct;
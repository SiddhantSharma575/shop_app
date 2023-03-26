import React, { useEffect, useState } from 'react'
import './Carts.css'
import { useSelector } from "react-redux"
import SingleCart from '../../components/SingleCart'

const Carts = () => {
    const { cart } = useSelector((state) => state)
    const [total, setTotal] = useState(0)
    // const dispatch = useDispatch()
    useEffect(() => {
        const calcTotal = () => {
            let res = 0;
            for (let i = 0; i < cart.length; i++) {
                res += cart[i].qty * cart[i].price;
            }
            res = res.toFixed(2);
            setTotal(res);
        }
        calcTotal()
    }, [cart])

    return cart.length === 0 ? (
        <div className="error__container">
            <h3>Cart is Empty 😢</h3>
        </div>
    ) : (
        <>
            <div className="carts__container">
                {
                    cart.map((ca) => (
                        <SingleCart key={ca.id} item={ca} />
                    ))
                }
            </div>
            <div className="amount__cont">
                <h3>Total Amount : ₹{total}</h3>
            </div>
        </>
    )
}

export default Carts;
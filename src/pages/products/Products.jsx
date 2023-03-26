import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import SingleProduct from '../../components/SingleProduct';
import './product.css'

const Products = () => {
    const [query, setQuery] = useState("")
    const [products, setAllProducts] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        setLoading(true);
        const getData = async () => {
            const { data } = await axios.get("https://fakestoreapi.com/products")
            setAllProducts(data);
            setLoading(false);
        }
        getData()
    }, [])

    const handleChange = (e) => {
        const result = products.filter((curr) => {
            if (e.target.value === "") {
                return products;
            } else {
                return curr.title.toLowerCase().includes(e.target.value.toLowerCase())
            }
        })
        setQuery(e.target.value);
        setFilteredData(result)
    }

    return (
        <div className="main__products__conntainer">
            <div className="search__conntainer">
                <input type="text" placeholder="search products..." value={query} onChange={handleChange} />
                <button onClick={() => navigate("/carts")}>Go to Carts</button>
            </div>
            {
                loading ? <div className="loading__container">
                    <h1>Loading...</h1>
                </div> : <div className="all__products__container">
                    {query !== "" ? filteredData.map((product) => (
                        <SingleProduct key={product.id} product={product} />
                    )) :
                        products.map((product) => (
                            <SingleProduct key={product.id} product={product} />
                        ))
                    }
                </div>
            }
        </div>
    )
}

export default Products;
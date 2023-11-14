import { useState, useEffect } from "react"
import Card from "./card"
import './products.scss'
import { getProducts } from "../../http/productAPI"


const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {

        getProducts().then(({ data }) => {
            console.log(data)
            setProducts(data)
        })
    }, [])

    return (
        <div className="cards">
             {products.length ? products.map(product =>
                           <Card product={product} />
                         ) : null}
        </div>
    )
}

export default Products
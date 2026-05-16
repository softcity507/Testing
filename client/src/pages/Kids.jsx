import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Products from '../components/Products';

const Kids = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;
        const fetchData = async () => {
            if (isMounted) {
                const staticData = [
                    { _id: "k1", img: "/GenInfo/adidas.jpg", title: "Kids Runner", sellPrice: 1200, brand: "Adidas", category: "child", mrp: 1800, discount: 33, rating: 4.4, reviews: 90 },
                    { _id: "k2", img: "/GenInfo/skechers.jpg", title: "Light Up Shoes", sellPrice: 2000, brand: "Skechers", category: "child", mrp: 2500, discount: 20, rating: 4.7, reviews: 210 },
                    { _id: "k3", img: "/GenInfo/puma.jpg", title: "Playtime Sneakers", sellPrice: 1600, brand: "Puma", category: "child", mrp: 2000, discount: 20, rating: 4.3, reviews: 65 },
                ];
                const sorted = staticData.sort((a, b) => parseInt(b.reviews) - parseInt(a.reviews))
                setProducts(sorted);
                setLoading(false);
            }
        }
        fetchData();
        return () => {
            isMounted = false;
        }
    }, [])
    return (
        <>

            <Products loading={loading} error={error} products={products} />
        </>
    )
}

export default Kids
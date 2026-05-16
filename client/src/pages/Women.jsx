import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Products from '../components/Products';

const Women = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;
        const fetchData = async () => {
            if (isMounted) {
                const staticData = [
                    { _id: "w1", img: "/GenInfo/skechers.jpg", title: "Comfort Walk", sellPrice: 2800, brand: "Skechers", category: "women", mrp: 3500, discount: 20, rating: 4.6, reviews: 150 },
                    { _id: "w2", img: "/GenInfo/nike.png", title: "Zoom Training", sellPrice: 3800, brand: "Nike", category: "women", mrp: 4500, discount: 15, rating: 4.9, reviews: 400 },
                    { _id: "w3", img: "/GenInfo/puma.jpg", title: "Casual Slip-on", sellPrice: 1500, brand: "Puma", category: "women", mrp: 2000, discount: 25, rating: 4.1, reviews: 75 },
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

export default Women
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Products from '../components/Products';

const Men = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;
        const fetchData = async () => {
            if (isMounted) {
                const staticData = [
                    { _id: "m1", img: "/GenInfo/adidas.jpg", title: "Classic Sneakers", sellPrice: 2500, brand: "Adidas", category: "men", mrp: 3000, discount: 15, rating: 4.5, reviews: 120 },
                    { _id: "m2", img: "/GenInfo/nike.png", title: "Running Shoes", sellPrice: 3200, brand: "Nike", category: "men", mrp: 4000, discount: 20, rating: 4.8, reviews: 300 },
                    { _id: "m3", img: "/GenInfo/puma.jpg", title: "Sportswear", sellPrice: 1800, brand: "Puma", category: "men", mrp: 2200, discount: 18, rating: 4.2, reviews: 85 },
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

export default Men
import React, { useEffect, useState } from 'react'
import Card from './Card';

let allProducts = [];

const ControleArea = () => {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);


    const ApiData = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products/categories');
            const data = await response.json();
            setCategories(data)
            const response2 = await fetch('https://fakestoreapi.com/products');
            const data2 = await response2.json();
            allProducts = [...data2];
            setProducts(data2)
            setIsLoading(false)

        } catch (error) {
            console.log(error.message);
            setIsLoading(false)
            setIsError(error); 
        }

    }

    useEffect(() => {
        ApiData();
    }, []);

    const handleCategoriesWise = (e) => {
        const categorizedProducts = allProducts.filter((product) => product.category === e.target.value)
        setProducts(categorizedProducts);
    };
    if (isLoading) return <h2>Loading...</h2>
    if (isError) return <h4>Oops, something went wrong while fetching the data...</h4>

    return (
       <div className='container'>
            <h1>Miscellaneous Store</h1>
            <hr />
            <div className='d-flex justify-content-evenly'>
                <button type="button" className="btn btn-success mx-4" onClick={() => setProducts(allProducts)} >All Products</button>
                {categories.map((category) => <button type="button" className="btn btn-success mx-4" value={category} onClick={handleCategoriesWise} key={category}>{category}</button>)}
            </div>
            <div className='row row-cols-1 row-cols-md-4 g-4 mt-3'>
                {products.map((product) => <Card product={product} key={product.id} />)}
            </div>

        </div>
    )    
}

export default ControleArea; 
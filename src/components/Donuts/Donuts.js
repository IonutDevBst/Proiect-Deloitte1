import React from 'react'
import Cards from '../Cards/Cards'
import image2 from '../resources/Group 1446.png'
import './Donuts.css'
import { getListProducts } from '../../api'
import { useState,useEffect } from 'react'


const Donuts = (props) => {
    const [product,setProduct] = useState([]);
    useEffect(()=>{
        getData();
    },[])
    
    const getData = async () =>{
        const result = await getListProducts()
        setProduct(result)
    }
    return (<div>
                <div className="text-to-image">
                    <img src={image2} alt="donut area" className="image-style"/>
                    <div className="centered">DONUTS</div>
                </div>
                <h2 className="title-container">TOP SELLING DONUTS</h2>
                <div className="cards-container">
                    {
                        product.map((result) =>(
                            <Cards 
                            id={result.id}
                            title={result.title}
                            description={result.description}
                            price={result.price}
                            />
                        ))
                    }
                    
                </div>
                
            </div>);
}

export default Donuts
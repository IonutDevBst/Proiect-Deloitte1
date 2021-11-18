import React from 'react'
import Cards from '../Cards/Cards'
import image2 from '../resources2/Group 1446.png'
import { getListProducts } from '../../api'
import { useState,useEffect } from 'react'


const Gelato = () => {
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
                    <div className="centered">GELATO</div>
                </div>
                <h2 className="title-container">TOP SELLING ICE CREAM &amp; GELATO</h2>
                <div className="cards-container">
                    {
                        product.filter(({category}) => category === 'Gelato').map((result) =>(
                            
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

export default Gelato
import React from 'react'
import Cards from '../Cards/Cards'
import image2 from '../resources2/Group 1446.png'
import './Donuts.css'
import { getListProducts } from '../../api'
import { useState,useEffect } from 'react'
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';


const Donuts = () => {
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
                        product.filter(({category}) => category === 'Top selling').map((result) =>(
                            
                            <Cards 
                            id={result.id}                           
                            title={result.title}
                            description={result.description}
                            price={result.price}                           
                            />                          
                        ))
                    }
                    
                </div>
                <h2 className="title-container">All DONUTS PRODUCTS</h2>
                <div className="cards-container">
                    {
                        product.filter(({category}) => category === 'All selling').map((result) =>(
                            
                            <Cards 
                            id={result.id}
                            title={result.title}
                            description={result.description}
                            price={result.price}                       
                            />                           
                        ))
                    }
                    
                </div>
                <div className="custom-button-group">
                    <ButtonGroup variant="outlined" aria-label="outlined primary button group">
                        <Button className="previous-button">Previous</Button>
                        <Button className="first-donut-page-button">1</Button>
                        <Button className="next-button">2</Button>
                        <Button className="next-button">3</Button>
                        <Button className="next-button">Next</Button>
                    </ButtonGroup>
                </div>
            </div>);
}

export default Donuts
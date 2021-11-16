import React from 'react'
import Cards from '../Cards/Cards'
import image from '../Cards/images/Mask Group 1.png'
import image2 from '../Cards/images/Group 1446.png'
import './Donuts.css'

const Donuts = () => {
    return (<div>
                <div className="text-to-image">
                    <img src={image2} alt="donut area" className="image-style"/>
                    <div className="centered">DONUTS</div>
                </div>
                <h2 className="title-container">TOP SELLING DONUTS</h2>
                <div className="cards-container">
                    <Cards 
                        imageURL={image}
                        title="Chocolate Donuts"
                        description="Treat yourself to ice cream infused with smooth burbon sprinkled"
                        price="$ 2.50"
                        button="Add to basket"/>
                    <Cards 
                        imageURL={image}
                        title="Strawberry Donuts"
                        description="Treat yourself to ice cream infused with smooth burbon sprinkled"
                        price="$ 2.50"
                        button="Add to basket"/>
                    <Cards 
                        imageURL={image}
                        title="Simple Donuts"
                        description="Treat yourself to ice cream infused with smooth burbon sprinkled"
                        price="$ 2.50"
                        button="Add to basket"/>
                    <Cards 
                        imageURL={image}
                        title="Chocolate Sprinkled Donuts"
                        description="Treat yourself to ice cream infused with smooth burbon sprinkled"
                        price="$ 2.50"
                        button="Add to basket"/>
                </div>
                
            </div>);
}

export default Donuts
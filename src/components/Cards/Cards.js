import React from 'react'
import image from './images/Mask Group 1.png'
import './Cards.css'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea, CardActions } from '@mui/material'

function Cards({imageUrl,title,description,price,button}) {
    return (
        <div className="card-container">
        <Card sx={{ maxWidth: 350 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="250"
                    image={image}
                    alt="donuts"      
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" className="card-text-style">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" className="card-description-style">
                        {description}
                    </Typography>
                    <Typography className="card-price-style">
                        {price}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" className="card-button-style">
                    {button}
                </Button>
            </CardActions>
    </Card>
    </div>
    )
}

export default Cards

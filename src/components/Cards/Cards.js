import React from 'react'
import './Cards.css'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActions } from '@mui/material'

function Cards(props) {
    const {id,title,description,price} = props;
    return (
        <div className="card-container">
        <Card sx={{ maxWidth: 450 }}>
                <CardMedia
                    component="img"
                    height="250"
                    image={`/images/${id}.png`}
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
            <CardActions>
                <Button size="small" className="card-button-style">
                    Add to bucket
                </Button>
            </CardActions>
    </Card>
    </div>
    )
}

export default Cards

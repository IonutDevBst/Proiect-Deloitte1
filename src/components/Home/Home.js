import React from "react";
import image from "../resoruces2/Group 1443.png";
import "./Home.css";
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import {Button, CardActions} from '@mui/material'

const Home = () => {
  return (
    <div className="cardmedia-style">
    <Card sx={{ width: 590 }} className="root">
                <CardMedia
                    component="img"
                    height="640"
                    image={image}
                    alt="donuts"   
                />
                <Typography
                    gutterBottom
                    variant="h4"
                    component="h4"
                    className="font"
                 >
                    ICE CREAM &amp; GELATO
                </Typography>
                <CardActions className="font-button">
                    <Button className="font-button1">
                        Explore options
                    </Button>
                </CardActions>
    </Card>
    <Card sx={{ width: 590 }} className="root">
                <CardMedia
                    component="img"
                    height="640"
                    image={image}
                    alt="donuts"   
                />
                <Typography
                    gutterBottom
                    variant="h4"
                    component="h4"
                    className="font"
                 >
                    DELICIOUS DONUTS
                </Typography>
                <CardActions className="font-button">
                    <Button className="font-button1">
                        Explore options
                    </Button>
                </CardActions>
    </Card>
    <Card sx={{ width: 590 }} className="root">
                <CardMedia
                    component="img"
                    height="640"
                    image={image}
                    alt="donuts"   
                />
                <Typography
                    gutterBottom
                    variant="h4"
                    component="h4"
                    className="font"
                 >
                    FAMILY / CORPORATE
                </Typography>
                <CardActions className="font-button">
                    <Button className="font-button1">
                        Explore options
                    </Button>
                </CardActions>
    </Card>
    </div>
  );
};

export default Home;

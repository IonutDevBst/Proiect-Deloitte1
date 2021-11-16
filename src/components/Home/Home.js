import React from "react";
import image from "../resoruces2/Group 1443.png";
import "./Home.css";
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import {CardActionArea} from '@mui/material'

const Home = () => {
  return (
    <div className="cardmedia-style">
    <Card sx={{ width: 590 }}>
            <CardActionArea >
                <CardMedia
                    component="img"
                    height="640"
                    image={image}
                    alt="donuts"   
                />
            </CardActionArea>
    </Card>
    <Card sx={{ width: 590 }}>
            <CardActionArea >
                <CardMedia
                    component="img"
                    height="640"
                    image={image}
                    alt="donuts"   
                />
            </CardActionArea>
    </Card>
    <Card sx={{ width: 590 }}>
            <CardActionArea >
                <CardMedia
                    component="img"
                    height="640"
                    image={image}
                    alt="donuts"   
                />
            </CardActionArea>
    </Card>
    </div>
  );
};

export default Home;

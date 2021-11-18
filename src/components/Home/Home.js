import React from "react";
import image from "../resources2/Group 1443.png";
import "./Home.css";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActions} from "@mui/material";
import { Link } from 'react-router-dom';
import Cards from "../Cards/Cards";
import { ReactComponent as NextButton } from "../resources2/Group 1340.svg";
import { useState, useEffect } from "react";
import { getListProducts } from "../../api";
import image2 from "../resources2/Group 1444.png";
import image3 from "../resources2/Group 1445.png";


const Home = (props) => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const result = await getListProducts();
    setProduct(result);
  };
  return (
    <div>
      <div className="cardmedia-style">
        <Card sx={{ width: 590 }} className="root">
          <CardMedia component="img" height="640" image={image} alt="donuts" />
          <Typography gutterBottom variant="h4" component="h4" className="font">
            ICE CREAM &amp; GELATO
          </Typography>
          <CardActions className="font-button">
            <Button component={Link} to="../Gelato"  className="font-button1">Explore options</Button>
          </CardActions>
        </Card>
        <Card sx={{ width: 590 }} className="root">
          <CardMedia component="img" height="640" image={image2} alt="donuts" />
          <Typography gutterBottom variant="h4" component="h4" className="font">
            DELICIOUS DONUTS
          </Typography>
          <CardActions className="font-button">
            <Button component={Link} to="../Donuts" className="font-button1">Explore options</Button>
          </CardActions>
        </Card>
        <Card sx={{ width: 590 }} className="root">
          <CardMedia component="img" height="640" image={image3} alt="donuts" />
          <Typography gutterBottom variant="h4" component="h4" className="font">
            FAMILY / CORPORATE
          </Typography>
          <CardActions className="font-button">
            <Button component={Link} to="../DonutsForSpecialNeeds" className="font-button1">Explore options</Button>
          </CardActions>
        </Card>
      </div>
      <div className="allign-text">
        <Button disabled>
          <h2 className="title-icecream">TOP SELLING ICE CREAM &amp; GELATO</h2>
        </Button>
        <Button component={Link} to="../Gelato" className="btn-icon">
          <h2 className="button-next">EXPLORE ALL </h2>
          <NextButton />
        </Button>
      </div>
      <div className="cards-container">
        {product
          .filter(({ category }) => category === "Gelato")
          .map((result) => (
            <Cards
              id={result.id}
              title={result.title}
              description={result.description}
              price={result.price}
            />
          ))}
      </div>

      <div className="allign-text">
        <Button disabled>
          <h2 className="title-icecream">TOP SELLING DONUTS </h2>
        </Button>
        <Button component={Link} to="../Donuts" className="btn-icon">
          <h2 className="button-next">EXPLORE ALL </h2>
          <NextButton />
        </Button>
      </div>
      <div className="cards-container">
        {product
          .filter(({ category }) => category === "Top selling")
          .map((result) => (
            <Cards
              id={result.id}
              title={result.title}
              description={result.description}
              price={result.price}
            />
          ))}
      </div>

      <div className="allign-text"> 
    <Button disabled>
    <h2 className="title-icecream">MERCHANDISE</h2></Button>
    </div>
    <div className="cards-container-merch">
        {product
          .filter(({ category }) => category === "Merch")
          .map((result) => (
            <Cards
              id={result.id}
              title={result.title}
              description={result.description}
              price={result.price}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;

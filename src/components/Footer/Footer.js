import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading
} from "./FooterStyles";
import { Toolbar, Typography } from "@mui/material";
import { textAlign } from "@mui/system";

const Footer = () => {
  return (
    <Box>
     
      <Container>
        <Row>
          <Column>
            <Heading>USEFUL INFO</Heading>
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Term &amp; Conditions</FooterLink>
            <FooterLink href="#">Cookie Policy</FooterLink>
            <FooterLink href="#">FAQs</FooterLink>
          </Column>
          <Column>
            <Heading>YOU CAN FIND US IN</Heading>
            <FooterLink href="#">London, UK</FooterLink>
            <FooterLink href="#">Bucharest, RO</FooterLink>
            <FooterLink href="#">Paris, FR</FooterLink>
            <FooterLink href="#">Sofia, BG</FooterLink>
          </Column>
          <Column>
            <Heading>ABOUT GELATO &amp; DONUTS</Heading>
            <FooterLink href="#">About us</FooterLink>
            <FooterLink href="#">Store locator</FooterLink>
            <FooterLink href="#">Franchise</FooterLink>
            <FooterLink href="#">Careers</FooterLink>
            <FooterLink href="#">Contact us</FooterLink>
          </Column>
          <Column>
            <Heading>NEWSLETTER</Heading>
            <FooterLink href="#">
            <form>
      <label>
        <input type="text" name="newsletter" />
        </label>
        
      <button>Subscribe</button>
    </form>
            </FooterLink>
            
          </Column>
        </Row>
      </Container>

    <div>
      <h5 className="copyright" style={{color:'white',textAlign:'center',width:'100%',height:'59px'}}>@2021 Gelato &amp; Donuts</h5>
    </div>
  
    </Box>
   
  );
};
export default Footer;
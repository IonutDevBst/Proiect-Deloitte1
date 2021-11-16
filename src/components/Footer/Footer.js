import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  
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
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
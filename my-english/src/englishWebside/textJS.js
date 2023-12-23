import React from "react";
import { Container, Menu, Input } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import Footer from "./informationJS";
import BodyOne from "./textJS/oneBodyJS";
import BodyTwo from "./textJS/twoBodyJS";

const  TextJS = () => {

  return (
    <>
    <Menu fixed='top' pointing inverted>
      <Container>
        <Menu.Item as={Link} to='/home'>
          <img alt="logo" src='logo192.png' />
        </Menu.Item>
      <Menu.Item as={Link} to='/home'>Home</Menu.Item>
      <Menu.Item as={Link} to='/class'>Class</Menu.Item>
      <Menu.Item as={Link} to='/content'>Content</Menu.Item>
      <Menu.Item as={Link} to='/about'>About</Menu.Item>
      <Menu.Item position='right'>
        <Input action={{ type: 'submit', content: 'Search' }} placeholder='Search...' />
      </Menu.Item>
    </Container>
  </Menu>

  <BodyOne/>
  <BodyTwo/>
  <Footer/>
        </>
    );
}
export default TextJS;

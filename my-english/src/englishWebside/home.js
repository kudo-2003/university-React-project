/**home page */
import { Container, Grid, Input, Menu, Segment } from 'semantic-ui-react'
import React from 'react';
import { Link } from "react-router-dom";
import Footer from './informationJS';
import * as CallFunction from './home/indexJS';


function App() {
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
  
      <Segment style={{ padding: '8em 0em' }} vertical>
        <Grid container stackable verticalAlign='middle'>
        {/** */}
          <Grid.Row>
            <CallFunction.TextHome/>
            <CallFunction.ImageHome/>
          </Grid.Row>
        {/** */}
          <Grid.Row>
            <CallFunction.ButtonHome/>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment style={{ padding: '0em' }} vertical>
        <Grid celled='internally' columns='equal' stackable>
          <Grid.Row textAlign='center'>
          {/** */}
            <CallFunction.StudentHome/>
          {/** */}
          <CallFunction.TeacherHome/>
          </Grid.Row>
        </Grid>
      </Segment>
      <Footer/>
    </>
  );
}

export default App;
                
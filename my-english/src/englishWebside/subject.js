import React from "react";
import {Grid, Card, Image, Popup, Rating, Segment, Header } from 'semantic-ui-react';
import { Menu, Container, Input } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import Footer from "./informationJS";

const SubjectLevel = () => {

    return(
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

  <Segment style={{ padding: '5em 0em' }} vertical>
  <br/>
  <Header as='h1' size="huge" textAlign='center' color="orange" content="Course information 🍚!"/>
  <br/>
  <Grid container>
        <Grid.Column>
        <div className="card-group">
        <Card.Group>
          <Popup
          trigger={
            <Card>
              <Image src='https://th.bing.com/th/id/OIP.tHBgQX-HFoiqCUpMz4R1JgHaFH?w=241&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' />
              <Card.Content>
                <Card.Header>English level 1 (Cơ Bản 😂)</Card.Header>
                <Card.Description>
                  Two sisters move to the country with their father in order to be
                  closer to their hospitalized mother,<Image src='hon-00.gif' size='mini' spaced /> and discover the surrounding
                  trees are inhabited by magical spirits.
                </Card.Description>
              </Card.Content>
            </Card>
          }>
          <Popup.Header>User Rating</Popup.Header>
          <Popup.Content>
            <Rating icon='star' defaultRating={5} maxRating={5} />
          </Popup.Content>
        </Popup>
        
        
        <Popup
        trigger={
          <Card>
            <Image src='https://th.bing.com/th/id/OIP.h4-60VShZSlq7Z52bSalUAAAAA?w=178&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' />
            <Card.Content>
              <Card.Header>English level 2 (Nâng Cao 🤨)</Card.Header>
              <Card.Description>
                Two sisters move to the country with their father in order to be
                closer to their hospitalized mother, and discover the surrounding
                trees are inhabited by magical spirits.
              </Card.Description>
            </Card.Content>
          </Card>
        }>

        <Popup.Header>User Rating</Popup.Header>
        <Popup.Content>
          <Rating icon='star' defaultRating={4} maxRating={5} />
        </Popup.Content>
        </Popup>
        
        
        <Popup
        trigger={
          <Card>
            <Image src='https://th.bing.com/th/id/OIP.nQpr9uXfdAOOpJIfXaI2twHaFG?w=282&h=194&c=7&r=0&o=5&dpr=1.1&pid=1.7' />
            <Card.Content>
              <Card.Header>English level 3 (Nâng Cao Cấp 1 🤬)</Card.Header>
              <Card.Description>
                Two sisters move to the country with their father in order to be
                closer to their hospitalized mother, and discover the surrounding
                trees are inhabited by magical spirits.
              </Card.Description>
            </Card.Content>
          </Card>
        }>

        <Popup.Header>User Rating</Popup.Header>
        <Popup.Content>
          <Rating icon='star' defaultRating={5} maxRating={5} />
        </Popup.Content>
        </Popup>
         </Card.Group> 
         </div>
        </Grid.Column>
        </Grid>
        </Segment>
        <Footer/>
        </>
    );
}
export default SubjectLevel;
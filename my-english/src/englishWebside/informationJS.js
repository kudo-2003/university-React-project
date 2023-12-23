import React from 'react';
import { Container, Grid, Header, Segment, Step } from 'semantic-ui-react';
import { DepositMoneyHere, EnglishGames, TransportingBooks } from './imformation/productsJS';
import * as InformationJS from './imformation/imformationHome';

const Footer = () => {

  const asHeader = 'h3';
  const contentHeader = 'Follow Us';
  
  return(
/** body Footer*/
  <Segment inverted vertical style={{ padding: '0em 0em' }}>
    <Container>
      <Grid divided inverted stackable>
        {/**one Footer*/}
        <Grid.Row>
          {/**imformation/ */}
          <InformationJS.ImformationAbout/>
          <InformationJS.ImformationServices/>
          <InformationJS.ImformationFounder/>
          <InformationJS.ImformationDonors/>
        </Grid.Row>
      </Grid>
    </Container>
    <br/>
    <Container>
      <Grid divided inverted stackable>
        <Grid.Column width={25}>
          <Header as={asHeader} inverted content={contentHeader}/>
          <InformationJS.AllButton/>  <br/>  <br/>
          <InformationJS.AllButtonCircular/>  <br/>
          <Step.Group>
            <TransportingBooks/>
            <DepositMoneyHere/>
            <EnglishGames/>
          </Step.Group>
        </Grid.Column>
      </Grid>
    </Container>
  </Segment>
);
}

export default Footer;

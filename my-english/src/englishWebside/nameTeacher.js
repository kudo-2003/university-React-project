import React from "react";
import { Menu, Container, Input, Segment, Grid, Header, Table} from 'semantic-ui-react';
import { Link } from "react-router-dom";
import Footer from "./informationJS";
import NameTeacherHeader from "./nameTeacher/headerJS";
import { NameGroup } from "./nameTeacher/teacherGroupJS";
import ThreeDiv from "./nameTeacher/menuthreeJS";
import TableRank from "./nameTeacher/tableHeaderRankJS";
import ClassHeader from "./nameTeacher/classHeaderTableJS";
import { BodyOne, BodyTwo, BodyThree, BodyFour } from './nameTeacher/tableBodyRankJS';
import { BodyClassOne, BodyClassTwo, BodyClassThree, BodyClassFour, BodyClassFive } from './nameTeacher/classBodyJS';

const TeacherEnglish = () => {

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
      {/**Body */}
  <Segment style={{ padding: '5em 0em' }} vertical>
      <ThreeDiv/>

    <br/>
    <NameTeacherHeader/>
    <br/>
    <Grid container>
    {/**name teachers */}
      <NameGroup/>
    </Grid>
  </Segment>

<Header as='h1' textAlign="center" content='Student transcript!'/>
<Segment style={{ padding: '5em 0em' }} vertical>
<Grid container>

  <Table celled padded>
  
    <TableRank/>

    <Table.Body>
      <BodyOne/>
      <BodyTwo/>
      <BodyThree/>
      <BodyFour/>
    </Table.Body>
  </Table>
  </Grid>
  </Segment>

  <Header as='h1' textAlign="center" content='My class'/>
  <Segment style={{ padding: '5em 0em' }} vertical>
<Grid container>
  <Table basic='very' celled collapsing>

    <ClassHeader/>

    <Table.Body>
      <BodyClassOne/>
      <BodyClassTwo/>
      <BodyClassThree/>
      <BodyClassFour/>
      <BodyClassFive/>

    </Table.Body>
  </Table>

  </Grid>
  </Segment>
  <Footer/>
  </>
    );
}

export default TeacherEnglish;
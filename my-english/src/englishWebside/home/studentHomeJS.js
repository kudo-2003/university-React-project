import { Grid, Header, Image } from 'semantic-ui-react';

const StudentHome = () => {

  const h1 = 'h1';
  const content = 'Students';
  const CSSgridColumn = { paddingBottom: '5em', paddingTop: '5em' };
  const CSSheader = { fontSize: '2em' };
  const CSSp = { fontSize: '1.33em' };
  const Text = 'We want to learn knowledge here 🎁!';
  const srcImage = 'https://react.semantic-ui.com/images/avatar/small/joe.jpg';

    return(
      <Grid.Column style={CSSgridColumn}>
        <Header as={h1} content={content} style={CSSheader}/>
        <p style={CSSp}>
          <Image avatar src={srcImage}/>
          {Text}
        </p>
      </Grid.Column>
  );
}

export default StudentHome;
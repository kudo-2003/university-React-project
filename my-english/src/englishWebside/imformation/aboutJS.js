import { Header, Grid, List } from 'semantic-ui-react';

const ImformationAbout = () =>{

  const contentList = [
    'Contact Us', 'Student', 'Teacher', 'More information'
  ];
  const h3 = 'h3';
  const content = 'About';
  const as = 'a';

  return(
    <Grid.Column width={3}>
      <Header inverted as={h3} content={content} />
      <List link inverted>
        {contentList.map((item, index) =>(
          <List.Item key={index} as={as} content={item}/>
        ))}
      </List>
  </Grid.Column>
  );
}
export default ImformationAbout;
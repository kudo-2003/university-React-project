import { Grid, Header, List } from 'semantic-ui-react';

const ImformationDonors = () => {

  const as = 'h3';
  const content = 'Donors';
  const asList = 'a';
  const AllList = [
    'FPT Corporation🎀', 'Viettel Group🎃', 'React Corporation🎨', 'Google corporation🥎'
  ];

  return (
    <Grid.Column width={4}>
      <Header inverted as={as} content={content} />
      <List link inverted>
        {AllList.map((item) =>(
          <List.Item as={asList} content={item}/>
            ))}
      </List>
    </Grid.Column>
  );
}

export default ImformationDonors;
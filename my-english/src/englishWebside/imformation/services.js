import { Grid, Header, List} from 'semantic-ui-react';

const ImformationServices = () => {

  const asHeader = 'h3';
  const contentHeader = 'Services';
  const asList = 'a';
  const allListItem = [
    'FPT WI-FI', 'HTML - CSS', 'React and JS', 'Webside Top'
  ];

  return(
    <Grid.Column width={3}>
      <Header inverted as={asHeader} content={contentHeader} />
      <List link inverted>
        {allListItem.map((item) =>(
        <List.Item as={asList} content={item}/>
          ))}
      </List>
    </Grid.Column>
  );
}
export default ImformationServices;
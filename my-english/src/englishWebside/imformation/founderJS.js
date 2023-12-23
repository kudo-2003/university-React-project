import { Grid, Header, List} from 'semantic-ui-react';

const ImformationFounder = () => {

  const asList = 'a';
  const asHeader = 'h3';
  const content = 'Founder';
  const contentListItem = [
    'Quang Hung💦', 'Thu Huyen㊙', 'Trong Duc🥩', 'Quynh Nhu🍘'
  ];

  return(
    <Grid.Column width={4}>
      <Header inverted as={asHeader} content={content} />
      <List link inverted>
        {contentListItem.map((item) =>(
          <List.Item as={asList} content={item}/>
        ))}
      </List>
    </Grid.Column>
  );
}

export default ImformationFounder;


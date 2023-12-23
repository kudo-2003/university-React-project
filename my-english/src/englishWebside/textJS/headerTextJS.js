import { Header, Icon, Image } from 'semantic-ui-react';
function HeaderText() {

  const asHeader = 'h1';
  const textAlignHeader = 'center';

    return (
      <Header as={asHeader} textAlign={textAlignHeader} color="yellow" >
        <Icon name='users' size="big"/>
        Important knowledge 🥧!
      </Header>
    );
}
export default HeaderText;
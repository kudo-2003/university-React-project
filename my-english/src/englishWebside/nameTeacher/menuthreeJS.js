import { Menu, Icon, Label } from 'semantic-ui-react';

const ThreeDiv = () => {

  return(
    <div style={{ textAlign: 'right' }}>
      <Menu compact>
        <Menu.Item as='a'>
          <Icon name='mail'  color="red"/> Messages
          <Label color='red' floating content='22'/>
        </Menu.Item>
        <Menu.Item as='a'>
          <Icon name='users' color='teal'/> Friends
          <Label content='97' color='teal' floating/>
        </Menu.Item>
        <Menu.Item as='a'>
          <Icon name='address card' color='yellow'/> Students
          <Label content='3000' color='yellow' floating/>
        </Menu.Item>
        <Menu.Item></Menu.Item>
</Menu>
</div>
    );
}

export default ThreeDiv;
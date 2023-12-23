// import { Button, Label, Icon } from 'semantic-ui-react';

// const AllButton = () => (
//     <>
//     <Button as='div' labelPosition='right'>
//       <Button color='red' content='Like' icon={<Icon name='heart'/>}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      />
//       <Label as='a' basic color='red' pointing='left' content='5,478'/>
//     </Button>

//     <Button as='div' labelPosition='right'>
//       <Button color='yellow' content='students' icon={<Icon name='users' />}/>
//       <Label as='a' basic color='yellow' pointing='left' content='12,203'/>
//     </Button>

//   <Button as='div' labelPosition='right'>
//     <Button color='green' content='Follow' icon={<Icon name='fork' />}/>
//     <Label as='a' basic color='green' pointing='left' content='2,048'/>
//   </Button>

//   <Button as='div' labelPosition='right'>
//       <Button color='purple' content='Expert' icon={<Icon name='phone'/>} />
//       <Label as='a' basic color='purple' pointing='left' content='9,521' />
//   </Button>
//     </>
// );
// export default AllButton;

import { Button, Label, Icon } from 'semantic-ui-react';

const ButtonWithLabel = ({color, content, icon, lableContent}) => {

  const as= 'a';
  const asDiv = 'div';
  const labelPosition = 'right';
  const pointing = 'left';

  return(
    <Button as={asDiv} labelPosition={labelPosition}>
      <Button color={color} content={content} icon={<Icon name={icon}/>}/>
      <Label as={as} basic color={color} pointing={pointing} content={lableContent} />
    </Button>
  );
};

export default function AllButton(){

  const AllButton = [
    { color: 'red', content: 'Like', icon: 'heart', labelContent: '5,478'},
    { color: 'yellow', content: 'Students', icon: 'users', labelContent: '12,203'},
    { color: 'green', content: 'Follow', icon: 'fork', labelContent: '2,048'},
    { color: 'purple', content: 'Expert', icon: 'phone', labelContent: '9,521'},
  ];
  
  return(
    <>
    {AllButton.map((button, index) =>(
      <ButtonWithLabel key={index}
        color={button.color}
        content={button.content}
        icon={button.icon}
        lableContent={button.labelContent}/>
    ))}
    </>
  );
}
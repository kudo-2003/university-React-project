import { Table, Header, Label, Image, Rating } from 'semantic-ui-react';

export const BodyOne = () => {

    return (
        <Table.Row>
        <Table.Cell>
          <Header as='h2' textAlign='center' content='A'/>
        </Table.Cell>
      <Table.Cell singleLine>
      <Image src='https://react.semantic-ui.com/images/avatar/small/veronika.jpg' size='tiny'/>
        <Label as='a' size='big' content='Hung'/>
      </Table.Cell>
        <Table.Cell>
          <Rating icon='star' defaultRating={3} maxRating={3} />
        </Table.Cell>
        <Table.Cell textAlign='right'>
          100% <br />
        </Table.Cell>
        <Table.Cell>
        You are truly amazing! Your dedication, intelligence, and kindness never cease to inspire me.
         Your ability to tackle challenges with grace and determination is admirable.
          Your positive attitude and genuine compassion make the world a better place. 
          Thank you for being an incredible person. Keep shining bright!
        </Table.Cell>
      </Table.Row>
    );
}

export const BodyTwo = () => {

    return(
        <Table.Row>
        <Table.Cell>
          <Header as='h2' textAlign='center' content='D'/>
        </Table.Cell>
        <Table.Cell singleLine>
        <Image src='https://react.semantic-ui.com/images/avatar/small/stevie.jpg' size='tiny'/>
        <Label as='a' size='big' content='Ngan'/>
    </Table.Cell>
        <Table.Cell>
          <Rating icon='star' defaultRating={3} maxRating={3} />
        </Table.Cell>
        <Table.Cell textAlign='right'>
          100% <br />
          <a href='#'>65 studies</a>
        </Table.Cell>
        <Table.Cell>
        You are such an excellent student! Your dedication and constant effort in studying is admirable. You always complete all assignments and tests excellently, and always achieve high results. You are a great source of motivation for other students in class.
         Continue to maintain the spirit of learning and success will always come to you.
          Congratulations on your great achievements!
        </Table.Cell>
      </Table.Row>
    );
}

export const BodyThree = () => {

    return(
        <Table.Row>
        <Table.Cell>
          <Header as='h2' textAlign='center'>
            A
          </Header>
        </Table.Cell>
        <Table.Cell singleLine>
           <Image src='https://react.semantic-ui.com/images/avatar/small/lindsay.png' size='tiny'/>
        <Label as='a' size='big' content='Hanh'/>
    </Table.Cell>
        <Table.Cell>
          <Rating icon='star' defaultRating={3} maxRating={3} />
        </Table.Cell>
        <Table.Cell textAlign='right'>
          100% <br />
          <a href='#'>65 studies</a>
        </Table.Cell>
        <Table.Cell>
        You are such an excellent student! Your dedication and constant effort in studying is admirable. You always complete all assignments and tests excellently, and always achieve high results. You are a great source of motivation for other students in class.
         Continue to maintain the spirit of learning and success will always come to you.
          Congratulations on your great achievements!
        </Table.Cell>
      </Table.Row>
    );
}

export const BodyFour = () => {

    return(
        <Table.Row>
        <Table.Cell>
          <Header as='h2' textAlign='center'>
            C
          </Header>
        </Table.Cell>
        <Table.Cell singleLine>
        <Image src='https://react.semantic-ui.com/images/avatar/small/daniel.jpg' size="tiny"/>
        <Label as='a' size="big" content='Hieu'/>
    </Table.Cell>
        <Table.Cell>
          <Rating icon='star' defaultRating={3} maxRating={3} />
        </Table.Cell>
        <Table.Cell textAlign='right'>
          100% <br />
          <a href='#'>65 studies</a>
        </Table.Cell>
        <Table.Cell>
        You are such an excellent student! Your dedication and constant effort in studying is admirable. You always complete all assignments and tests excellently, and always achieve high results. You are a great source of motivation for other students in class.
         Continue to maintain the spirit of learning and success will always come to you.
          Congratulations on your great achievements!
        </Table.Cell>
      </Table.Row>
    );
}
import { Card, Image} from 'semantic-ui-react';

export const QuangHung = () => {
    
    return(
        <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'/>
        <Card.Header>Quang Hung 🍩</Card.Header>
        <Card.Meta>Instructions and Documentation</Card.Meta>
        <Card.Description>
        specializes in <strong>English</strong> documents and design!
        </Card.Description>
      </Card.Content>
    );
}
export const ThuHuyen = () => {

    return(
        <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='https://react.semantic-ui.com/images/avatar/large/molly.png'
        />
        <Card.Header>Thu Huyen 🧁</Card.Header>
        <Card.Meta>The teacher teaches👩</Card.Meta>
        <Card.Description>
        The teacher has <strong>5 years</strong> of experience.
        </Card.Description>
      </Card.Content>
    );
}

export const TrongDuc = () => {

    return(
        <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg'
        />
        <Card.Header>Trong Duc ☕</Card.Header>
        <Card.Meta>Teacher teaches <strong>English grammar.</strong></Card.Meta>
        <Card.Description>
        The teacher has been teaching for <strong>10 years.</strong>
        </Card.Description>
      </Card.Content>
    );
}

export const QuynhNhu = () => {

    return(
        <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='https://react.semantic-ui.com/images/avatar/small/joe.jpg'
        />
        <Card.Header>Quynh Nhu 🍏</Card.Header>
        <Card.Meta>Foreign teacher</Card.Meta>
        <Card.Description>
        Teachers have ranked <strong>Top</strong> in the market
        </Card.Description>
      </Card.Content>
    );
}
export const Enna = () => {

    return(
        <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='https://react.semantic-ui.com/images/avatar/small/helen.jpg'
        />
        <Card.Header>Enna 🍓</Card.Header>
        <Card.Meta><strong>Top 2</strong> teacher in Vietnam</Card.Meta>
        <Card.Description>
        The most popular teacher in Vietnam!
        </Card.Description>
      </Card.Content>
    );
}

export const KuDo = () => {

    return(
        <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='https://react.semantic-ui.com/images/avatar/small/christian.jpg'
        />
        <Card.Header>KuDo 🍌</Card.Header>
        <Card.Meta>English course teacher</Card.Meta>
        <Card.Description>
        Fully support students
        </Card.Description>
      </Card.Content>
    );
}
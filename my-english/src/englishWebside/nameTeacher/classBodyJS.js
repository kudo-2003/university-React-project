import { Table, Header} from 'semantic-ui-react';
import { ImageUserFive, ImageUserOne, ImageUserTwo, ImageUserThree, ImageUserFour } from '../imageLink/imageUsersJS';

export const BodyClassOne = () => {

  return(
    <Table.Row>
        <Table.Cell>
          <Header as='h3' image>
            <ImageUserOne/>
            <Header.Content>Tuan
              <Header.Subheader>📧 tuan86754@donga.edu.vn</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>70 points</Table.Cell>
        <Table.Cell>US23A1A</Table.Cell>
      </Table.Row>
  );
}

export const BodyClassTwo = () => {

    return(
      <Table.Row>
        <Table.Cell>
          <Header as='h3' image>
            <ImageUserTwo/>
            <Header.Content>Huyen
              <Header.Subheader>📧 huyen87643@donga.edu.vn</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>100 points</Table.Cell>
        <Table.Cell>US23A1A</Table.Cell>
      </Table.Row>
    );
}

export const BodyClassThree = () => {

  return(
    <Table.Row>
      <Table.Cell>
        <Header as='h3' image>
          <ImageUserThree/>
          <Header.Content>Nhu
            <Header.Subheader>📧 nhu99855@donga.edu.vn</Header.Subheader>
          </Header.Content>
        </Header>
      </Table.Cell>
      <Table.Cell>80 points</Table.Cell>
      <Table.Cell>US23A1A</Table.Cell>
    </Table.Row>
  );
}

export const BodyClassFour = () => {

  return(
    <Table.Row>
      <Table.Cell>
        <Header as='h3' image>
          <ImageUserFour/>
          <Header.Content>Hung
            <Header.Subheader>📧 hung94079@donga.edu.vn</Header.Subheader>
          </Header.Content>
        </Header>
      </Table.Cell>
      <Table.Cell>100 points</Table.Cell>
      <Table.Cell>US23A1A</Table.Cell>
    </Table.Row>
  );
}

export const BodyClassFive = () => {

  return(
    <Table.Row>
      <Table.Cell>
        <Header as='h3' image>
          <ImageUserFive/>
          <Header.Content>Hieu
            <Header.Subheader>📧 hieu55221@donga.edu.vn</Header.Subheader>
          </Header.Content>
        </Header>
      </Table.Cell>
      <Table.Cell>100 points</Table.Cell>
      <Table.Cell>US23A1A</Table.Cell>
    </Table.Row>
  );
}
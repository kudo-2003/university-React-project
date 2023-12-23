import { Card } from 'semantic-ui-react';
import { QuangHung, ThuHuyen, TrongDuc, QuynhNhu, Enna, KuDo } from './nameTeachersJS'; 
import { QuangHungButton, TrongDucButton, ThuHuyenButton, EnnaButton, KuDoButton, QuynhNhuButton } from './buttonInformationJS';

export const NameGroup = () => (
  <Card.Group > 
    {/**Quang Hung */}
    <Card>
      <QuangHung/>
      <QuangHungButton/>
    </Card>
    {/**Thu Huyen */}
    <Card>
      <ThuHuyen/>
      <ThuHuyenButton/>
    </Card>
    {/**Trong Duc */}
    <Card>
      <TrongDuc/>
      <TrongDucButton/>
    </Card>
    {/**Quynh Nhu */}
    <Card>
      <QuynhNhu/>
      <QuynhNhuButton/>
    </Card>
    {/**Enna */}
    <Card>
      <Enna/>
      <EnnaButton/>
    </Card>
    {/**KuDo */}
    <Card>
      <KuDo/>
      <KuDoButton/>
    </Card>
  </Card.Group>
);

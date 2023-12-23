import { Image, Header } from 'semantic-ui-react';

const AdminImage = () =>{
    const imageUrl = 'logo192.png';

    return(
        <Header as='h2' color='teal' textAlign='center'>
          <Image src={imageUrl} />Admin password
        </Header>
    );
}
export default AdminImage;
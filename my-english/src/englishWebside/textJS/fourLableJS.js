import { Label } from 'semantic-ui-react';

function LableText() {
    return(
      <div style={{ textAlign: 'right' }}>
        <Label as='a' color='green' content='Listening' tag/>
        <Label as='a' color='red' content='Reading' tag/>
        <Label as='a' color='teal' content='Writing' tag/>
        <Label as='a' color='pink' content='Speaking' tag/>
      </div>
    );
}
export default LableText;
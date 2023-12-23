import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

const LinkLogIn = () =>{

  const colorButton = 'teal';
  const sizeButton = 'large';
  const contentButton = 'Return to the login page';

  return(
    <Link to="/">
      <Button color={colorButton} fluid size={sizeButton} content={contentButton}/>
    </Link>
  );
}
export default LinkLogIn;
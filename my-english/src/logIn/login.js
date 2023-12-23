import React, { useState } from 'react';
import { Button, Form, Grid, Segment, Checkbox } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import handleLogin from '../API/logInAPI';
import LoginHeader from './loginHeader';
import LoginMessage from './loginMessage';
import InputForm from './loginForm';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

// const handleLoginClick = () => {
//   if (!isChecked) {
//     setError('You have not checked yet 🙄!');
//   } else {
//     handleLogin(email, password, setError, navigate);
//   }
// };

  const handleLoginClick = () => (handleLogin(email, password, setError, navigate));
  const handleAdminLoginClick = () => (navigate('/adminpassword'));
  const onChangeCheckbox = () => setIsChecked(!isChecked);

  const labelCheckbox = 'Click in here to check😅!';
  const textAlignGrid = 'center';
  const styleGrid = { height: '100vh' };
  const verticalAlignGrid = 'middle';
  const styleColumnGrid = { maxWidth: 450 };
  const sizeForm = 'large';
  const colorButtonLogIn = 'teal';
  const sizeButtonLogIn  = 'large';
  const contentButtonLogIn = 'Logn In';
  const colorButtonAdmin = 'blue';
  const styleButtonAdmin = { position: 'absolute', right: 0, bottom: 0 };
  const contentButtonAdmin = 'Admin Login';

  return (
    <>
    <Grid textAlign={textAlignGrid} style={styleGrid} verticalAlign={verticalAlignGrid}>
      <Grid.Column style={styleColumnGrid}>
        <LoginHeader/>
        <Form size={sizeForm}>
          <Segment stacked>
            {/**at here InputForm is two email and password*/}
            <InputForm 
              email={email} 
              setEmail={setEmail} 
              password={password} 
              setPassword={setPassword} 
              />
            {error && <p>{error}</p>}

            <Checkbox
              label={labelCheckbox} 
              onChange={onChangeCheckbox}
              />

            <Button 
              fluid 
              color={colorButtonLogIn}
              size={sizeButtonLogIn}
              onClick={handleLoginClick} 
              content={contentButtonLogIn}
              />

          </Segment>
        </Form>
        {/**note and sign up */}
        <LoginMessage/>
      </Grid.Column>
    </Grid>
    <Button 
        color={colorButtonAdmin}
        style={styleButtonAdmin}
        content={contentButtonAdmin}
        onClick={handleAdminLoginClick}
      />
    </>
  );
};

export default LoginForm;

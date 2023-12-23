import React, { useState } from 'react';
import { Button, Form, Grid, Segment } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import AdminImage from './imageAdmin';
import handleLogin from '../API/adminAPI';


function AdminLogin() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  
  const verticalAlign = 'middle';
  const textAlign = 'center';
  const color = 'teal';
  const size = 'large';
  const iconPosition = 'left';
  const type = 'password';
  const icon = 'lock';
  const ImageAdmin = <AdminImage/>;
  const placeholder = 'Enter password';
  const onchangePassword = (e) => setPassword(e.target.value);
  const onClickLogIn = () => handleLogin(password, setError, navigate);

  return (
    <Grid textAlign={textAlign} style={{ height: '100vh' }} verticalAlign={verticalAlign}>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Form size={size}>
          <Segment stacked>
            <Form.Input
              fluid
              label={ImageAdmin}
              icon={icon}
              iconPosition={iconPosition}
              placeholder={placeholder}
              type={type}
              value={password} 
              onChange={onchangePassword} 
            />
            {error && <p>{error}</p>}
            <Button color={color} fluid size={size} onClick={onClickLogIn}>
              Đăng nhập
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
}

export default AdminLogin;

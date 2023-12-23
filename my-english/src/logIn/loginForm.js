import React from 'react';
import { Form } from 'semantic-ui-react';

const InputForm = ({ email, setEmail, password, setPassword }) => {

  const onChangeValueEmail = e => setEmail(e.target.value);
  const onChangeValuePassword = e => setPassword(e.target.value);

  const iconEmail = 'user';
  const iconPositionEmail = 'left';
  const placeholderEmail = 'Enter email';
  const iconPassword = 'lock';
  const iconPositionPassword = 'left';
  const placeholderPassword = 'Enter password';
  const typePassword = 'password';


  return (
    <>
      <Form.Input
        fluid
        icon={iconEmail}
        iconPosition={iconPositionEmail}
        placeholder={placeholderEmail}
        value={email}
        onChange={onChangeValueEmail}
      />

      <Form.Input
        fluid
        icon={iconPassword}
        iconPosition={iconPositionPassword}
        placeholder={placeholderPassword}
        type={typePassword}
        value={password}
        onChange={onChangeValuePassword}
      />
    </>
  );
};

export default InputForm;

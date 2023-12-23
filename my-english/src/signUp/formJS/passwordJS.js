import {Form } from 'semantic-ui-react';

const Password = ({password, setPassword}) =>{

    const label = "Password";
    const icon = 'lock';
    const iconPosition = 'left';
    const placeholder = 'Enter password';
    const type = 'password';
    const onChangeValue = e => setPassword(e.target.value);
    
    return(
        <Form.Input
              fluid
              required
              label={label}
              icon={icon}
              iconPosition={iconPosition}
              placeholder={placeholder}
              type={type}
              value={password} 
              onChange={onChangeValue} 
            />
    );
}
export default Password;
import { Form, Icon} from 'semantic-ui-react';

const EmailForm = ({email, setEmail}) => {
    
    const type = 'email';
    const label = "Email";
    const icon = <Icon name='mail'/>;
    const iconPosition = 'left';
    const placeholder = 'Enter email';
    const onChangeValue = e => setEmail(e.target.value);
    
    return(
        <Form.Input
              fluid 
              required
              type={type}
              label={label}
              icon={icon}
              iconPosition={iconPosition}
              placeholder={placeholder}
              value={email} 
              onChange={onChangeValue}
            />
    ); 
}

export default EmailForm;
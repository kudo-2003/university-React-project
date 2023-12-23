import { Form } from 'semantic-ui-react';

const PhoneRorm = ({phone, setPhone}) =>{

    const type = 'tel';
    const label = 'Phone';
    const icon = 'phone';
    const iconPosition = 'left';
    const placeholder = 'number phone';
    const onChangeValue = e => setPhone(e.target.value);
    
    return(
        <Form.Input
              type={type}
              required
              label={label}
              icon={icon}
              iconPosition= {iconPosition}
              value={phone}
              placeholder={placeholder}
              onChange={onChangeValue}
              />
    );
}

export default PhoneRorm;
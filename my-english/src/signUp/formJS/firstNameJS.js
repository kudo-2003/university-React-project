import {Form} from 'semantic-ui-react';

const FirstName = ({firstName, setFirstName}) => {

    const label = "First Name";
    const icon = 'user';
    const iconPosition = 'left';
    const placeholder = 'Enter first name';
    const onChangeValue = e => setFirstName(e.target.value);
    
    return(
        <Form.Input
            fluid
            required
            label={label}
            icon={icon}
            iconPosition={iconPosition}
            placeholder={placeholder}
            value={firstName}
            onChange={onChangeValue}
          />
    );
}
export default FirstName;
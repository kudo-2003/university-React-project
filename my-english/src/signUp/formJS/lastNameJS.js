import { Form } from 'semantic-ui-react';

const LastName = ({lastName, setLastName}) =>{

    const label = "Last Name";
    const icon = 'user';
    const iconPosition = 'left';
    const placeholder = 'Enter last name';
    const onChangeValue = e => setLastName(e.target.value);

    return(
        <Form.Input
              fluid
              required
              label={label}
              icon={icon}
              iconPosition={iconPosition}
              placeholder={placeholder}
              value={lastName}
              onChange={onChangeValue}
            />
    );
}

export default LastName;
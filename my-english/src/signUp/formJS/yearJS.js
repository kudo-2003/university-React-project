import { Form } from 'semantic-ui-react';

const YearRorm = ({birthYear, setBirthYear}) =>{

    const type = 'number';
    const label = 'Year';
    const icon = 'calendar';
    const iconPosition = 'left';
    const placeholder = 'BirthYear of you';
    const onChangeValue = e => setBirthYear(e.target.value);

    return(
        <Form.Input
              required
              type={type}
              label={label}
              icon={icon}
              iconPosition={iconPosition}
              value={birthYear}
              placeholder={placeholder}
              onChange={onChangeValue}
            />
    );
}

export default YearRorm;
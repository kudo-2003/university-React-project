import React, { useState } from 'react';
import { Button, Form, Grid, Segment } from 'semantic-ui-react';
import handleSubmitSignUp from '../API/signUpAPI';
import * as SignUpHome from './homeSignUp/homeSignUp';
import * as SignUpForm from './formJS/allForm';
import { ImageEnglishOne } from '../englishWebside/imageLink/imageEnglishJS';

// import checkEnter from './evenSignUp';
function SignUp() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [password, setPassword] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [showImage, setShowImage] = useState(false);

  const handleClick = () => {
    if (handleSubmitSignUp(email, firstName, lastName, phone, birthYear, password)) {
      setShowSuccess(true);
      setShowImage(true);
    }
  };

  const textAlignGrid = 'center';
  const styleGrid = { height: '100vh' };
  const verticalAlignGrid = 'middle';
  const styleColumnGrid = { maxWidth: 600 };
  const sizeForm = 'large';
  const colorButton = 'teal';
  const sizeButton = 'large';
  const contentButton = 'Sign Up';

  return (
    <Grid textAlign={textAlignGrid} style={styleGrid} verticalAlign={verticalAlignGrid}>
      <Grid.Column style={styleColumnGrid}>
        <SignUpHome.HeaderSignUp/>
        <Form size={sizeForm} >
          <Segment stacked>
            {/** form email */}
            <SignUpForm.EmailForm email={email} setEmail={setEmail} />   
            {/** form password */}
            <SignUpForm.Password password={password} setPassword={setPassword} />
            {/** form firstName */}
            <SignUpForm.FirstName firstName={firstName} setFirstName={setFirstName} />
            {/** form lastName */}
            <SignUpForm.LastName lastName={lastName} setLastName={setLastName} />
            {/** form phone */}
            <SignUpForm.PhoneRorm phone={phone} setPhone={setPhone} />
            {/** form birthYear */}
            <SignUpForm.YearRorm birthYear={birthYear} setBirthYear={setBirthYear}/>
            <Button color={colorButton} fluid size={sizeButton} onClick={handleClick} content={contentButton}/>
            {showSuccess && <div>You have successfully registered😁!</div>}
            {showImage && <ImageEnglishOne/>}
          </Segment>
          <SignUpHome.LinkLogIn/>
        </Form>
        <SignUpHome.NoteSignUp/>
      </Grid.Column>
    </Grid>
  );
}
export default SignUp;
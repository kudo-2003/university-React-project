import { Message, Button } from "semantic-ui-react";
import { useNavigate } from 'react-router-dom';

const LoginMessage = () => {

    const navigate = useNavigate();
    /**click open page Sign Up */
    const handleSignUp = () => (navigate('/signup'));

    const colorMessage = 'brown';
    const colorButton = 'teal';
    const contentButtonSignUp = 'Sign Up';
    const text = [
        'If you hava not registered?',
        'If you forget your email or password, please call the administrator via phone number (⛳15008080)'
    ];
    
    return (      
        <Message color={colorMessage}>
            {text[0]}
                <Button 
                color={colorButton} 
                content={contentButtonSignUp} 
                onClick={handleSignUp}
                />
            {text[1]}
        </Message>
    );
}
export default LoginMessage;

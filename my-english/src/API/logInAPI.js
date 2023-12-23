import axios from 'axios';

/**API check login 😜 */
const handleLogin = async (email, password, setError, navigate) => {
  const APILogIn = 'http://localhost:4000/api/LogIn'
  try {
    const response = await axios.post(APILogIn, { email, password });
    if (response.status === 200) {
      navigate('/home');
    }
  } catch (err) {
    if (err.response) {
      setError(err.response.data);
    } else if (err.request) {
      setError('error to Sever🤣');
    } else {
      setError('An error occurred while setting up the request 🙂!');
    }
  }
};

export default handleLogin;
import axios from 'axios';

/**API check Admin 😜 */
const handleLogin = async ( password, setError, navigate) => {
  const APIAdmin = 'http://localhost:4000/api/Admin';

  try {
    const response = await axios.post(APIAdmin, { password });
    if (response.status === 200) {
      navigate('/admin');
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
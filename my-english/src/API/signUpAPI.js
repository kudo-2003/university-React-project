import axios from "axios";

const handleSubmitSignUp = async ( email, firstName, lastName, phone, birthYear, password) => {
    /**run live😀*/
    // await axios.post('http://localhost:4000/api/SignUp', { email, firstName, lastName, phone, birthYear, password});
    /**Getting event errors😉! */
    const APISignUp = 'http://localhost:4000/api/SignUp';
    const Save = 'User registered successfully🤪!';
    const ErrorSignUp = '😫Error in register:';
    const ErrorrSever = '😌Error registering user';
    try {
      await axios.post(APISignUp, { email, firstName, lastName, phone, birthYear, password});
      alert(Save);
    } catch (err) {
      console.error(ErrorSignUp, err);
      alert(ErrorrSever);
    }
};
export default handleSubmitSignUp;
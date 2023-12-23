/**Here all files are processed🤑!*/
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './logIn/login.js';
import SignUp from './signUp/signup.js';
import AdminLogin from './admin/adminLogIn.js';
import HomeEnglish from './englishWebside/home.js';
import AdminHome from './homeAdmin/homeAdminJS.js';
import SubjectLevel from './englishWebside/subject.js';
import TextJS from './englishWebside/textJS.js';
import TeacherEnglish from './englishWebside/nameTeacher.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element = {<LoginForm />} />
        <Route path="/signup" element = {<SignUp />} /> 
        <Route path="/adminpassword" element = {<AdminLogin/>}/>
        <Route path="/admin" element = {<AdminHome/>}/>
        <Route path="/home" element = {<HomeEnglish/>}/>
        <Route path="/about" element= {<SubjectLevel/>}/>
        <Route path="/class" element = {<TeacherEnglish/>}/>
        <Route path="/content" element = {<TextJS/>}/>
      </Routes>
    </Router>
  );
}

export default App;

/**Menu */
// import React from 'react';
// import MenuON from './testApp/appbar';
// const MyApp = () => {
//     return (
//         <MenuON/>
//     );
// }
// export default MyApp;



// import React from 'react';
// import ButtonShow from './testApp/buttonShow';

// const MyApp = () => {
//     return (
//         <ButtonShow/>
//     );
// }
// export default MyApp;

/** Qua trang khác */
// import React from 'react';
// import ButtonPage from './testApp/buttonPage';

// const MyApp = () => {
//     return (
//         <ButtonPage/>
//     );
// }
// export default MyApp;


/**Lưa chọn yes no */
// import React from 'react';
// import YesNo from './testApp/yesAndNo';
// const MyApp = () => {
//     return (
//         <YesNo/>
//     );
// }
// export default MyApp;

// import React from 'react';
// import ShowWork from './testApp/showTextAndWork';
// const MyApp = () => {
//     return (
//         <ShowWork/>
//     );
// }
// export default MyApp;

/**dữ phần home */
// import React from 'react';
// import RunFlo from './testApp/runFollo';
// const MyApp = () => {
//     return (
//         <RunFlo/>
//     );
// }
// export default MyApp;

/**Icon click */
// import React from 'react';
// import ClickIcons from './testApp/clickIcon';
// const MyApp = () => {
//     return (
//         <ClickIcons/>
//     );
// }
// export default MyApp;


/** Mouse Show*/
// import React from 'react';
// import MouseShow from './testApp/mouseShow';
// const MyApp = () => {
//     return (
//         <MouseShow/>
//     );
// }
// export default MyApp;



/**Button And Button */
// import React from 'react';
// import ButtonAndButton from './testApp/bunttonIn';
// const MyApp = () => {
//     return (
//         <ButtonAndButton/>
//     );
// }
// export default MyApp;

// import React from 'react';
// import TableAccount from './testApp/tableAccount';

// const MyApp = () => {
//     return (
//         <TableAccount/>
//     );
// }
// export default MyApp;

// import React from 'react';
// import TableTest from './testApp/tableTest';

// const MyApp = () => {
//     return (
//         <TableTest/>
//     );
// }
// export default MyApp;


// import React from 'react';
// import TableColorOn from './testApp/tableColorOn';

// const MyApp = () => {
//     return (
//         <TableColorOn/>
//     );
// }
// export default MyApp;


// import React from 'react';
// import TableColor from './testApp/tableColor';

// const MyApp = () => {
//     return (
//         <TableColor/>
//     );
// }
// export default MyApp;

/**API save sign up */
// import React from "react";
// import SignUp from './signUp/signup';
// const MyApp = () => {
//     return (<SignUp/>);
// };
// export default MyApp;

// /**Get API to web */
// import React from "react";
// import GetAPIwebside from './getAPI/test';
// const MyApp = () => {
//     return (<GetAPIwebside/>);
// };
// export default MyApp;




// /**testsiginUp/ clein.js
//  * 
//  */
// import React from "react";
// import MyApp from "./testsiginUp/clein";

// export default function MyApptest(){
//     return (
//       <MyApp/>
//     );
// }
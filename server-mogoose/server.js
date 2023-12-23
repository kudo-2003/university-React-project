const Users = require('./mongoose/createUsers');
const Admin = require('./mongoose/createAdmin');
const EnglishFourContent = require('./mongoose/createContentFour');
const express = require('express');
const app = express();
const cors = require('cors');
const port = 4000;
const bodyParser = require('body-parser');




/**it is did at file mongoose/base.js */
// const mongoose = require('mongoose');
// const URL_MONGOOSE = 'mongodb://localhost:27017/All_Users';

app.use(bodyParser.json());
app.use(cors());

/**Cách 1 : it is did at file mongoose/base.js */
// mongoose.connect(URL_MONGOOSE,{ 
//     useNewUrlParser: true,
//     useUnifiedTopology: true},
//     // (err) => {
//     //     if (err) {
//     //       console.error('Error connecting to MongoDB:', err);
//     //     } else {
//     //       console.log('Connected to MongoDB');
//     //     }
//     // }
//   );

/**Cách 2:  it is did at file mongoose/base.js */
    // mongoose.connect(URL_MONGOOSE,{ 
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true},
    //   ).then(() => console.log('Connected to MongoDB successfully'))
    //   .catch(err => console.error('Error connecting to MongoDB:', err));

/**it is at file /mongoose/creatUsers */
// const userSchema = new mongoose.Schema({
//     lastName: String,
//     firstName:String,
//     email: String,
//     password: String,
//     phone: Number,
//     birthYear: Number,
// });
/**creat Users */
// const Users = mongoose.model('Users', userSchema);


/**save webside about mongoose
 * get API save save mongoose
 */
app.post('/api/SignUp', async (req, res) => {
    try {
        const { email, firstName, lastName, phone, birthYear, password} = req.body;
        const users = new Users({ email, firstName, lastName, phone, birthYear, password});
        await users.save();
        res.send('User registered successfully 😁!');
      } catch (err) {
        console.error('Error in /register:', err);
        res.status(500).send('Server error');
      }
});

/**checked it enter log in true or false */
app.post('/api/LogIn', async (req, res) => {
  const { email, password } = req.body;
  const user = await Users.findOne({ email });
  if (!user) {
    /**send error on webside  */
    return res.status(400).send('Email is not correct 🙄!');
  }
  if (user.password !== password) {
    /**send error on webside  */
    return res.status(400).send('Incorrect password 🤔!');
  }
  res.send('Logged in successfully 🍌!');
});

app.post('/api/Admin', async (req, res) => {
  const { password } = req.body;
  const checkpassword = await Admin.findOne({ password });
  if (!checkpassword) {
    /**send error on webside  */
    return res.status(400).send('Incorrect password 🙄!');
  }
  res.send('Đăng nhập thành công 😈!');
});


/**get data of Mongoose to webside
 * get the API to the website
 */
app.get('/api/AllFourEnglish', async (req, res) => {
  const fourEnglish = await EnglishFourContent.find();
  res.json(fourEnglish);
});


app.listen(port, () => console.log(`http://localhost:4000 ${port}
 API post "/api/SignUp" , API get '/api/Webside',
  API "/api/LogIn" `));
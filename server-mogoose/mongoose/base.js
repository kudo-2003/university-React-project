const mongoose = require('mongoose');
const URL_MONGOOSE = 'mongodb://localhost:27017/All_Users';
// cácch 1
mongoose.connect(URL_MONGOOSE,{ 
    useNewUrlParser: true,
    useUnifiedTopology: true},
    // (err) => {
    //     if (err) {
    //       console.error('Error connecting to MongoDB:', err);
    //     } else {
    //       console.log('Connected to MongoDB');
    //     }
    // }
);

/**Cách 2 */
    // mongoose.connect(URL_MONGOOSE,{ 
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true},
    //   ).then(() => console.log('Connected to MongoDB successfully'))
    //   .catch(err => console.error('Error connecting to MongoDB:', err));

module.exports = mongoose;
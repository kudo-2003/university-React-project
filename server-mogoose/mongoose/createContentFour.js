const mongoose = require('./base');

const ContentFourSchema = new mongoose.Schema({
    content: String
});

const EnglishFourContent = mongoose.model('EnglishFourContent', ContentFourSchema);

// const speaking = new EnglishFourContent({ content: 'Speaking is an essential skill for communication. To improve speaking skills, one can practice speaking with native speakers or language partners, join conversation groups or language exchange programs, and focus on pronunciation and fluency. It is also helpful to record and listen to oneself speaking to identify areas for improvement.' });
// speaking.save();

// const writing = new EnglishFourContent({ content: 'Writing is a skill that allows us to express our thoughts and ideas in written form. To improve writing skills, one can practice writing regularly, start with simple sentences and gradually build up to more complex paragraphs. It is also important to proofread and edit our writing to improve accuracy and clarity.' });
// writing.save();

// const deading  = new EnglishFourContent({ content: 'Reading is a great way to expand vocabulary, improve grammar, and gain knowledge about different topics. To improve reading skills, one can start with simple texts and gradually move on to more complex ones. It is also helpful to read regularly and try to understand the main ideas and details of the text.' });
// deading.save();

// const listening  = new EnglishFourContent({ content: 'Listening is an important skill in language learning. It helps us understand spoken language and improve our overall comprehension. To improve listening skills, one can listen to podcasts, watch movies or TV shows in English, or practice with listening exercises.' });
// listening.save();


module.exports = EnglishFourContent;



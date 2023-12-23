import axios from 'axios';

export const AllfourAPI = async (setfourEnglish) => {
  const response = await axios.get('http://localhost:4000/api/AllFourEnglish');
  setfourEnglish(response.data);
};

// /**From here down there is no use 🥼! */
// export const SpeakAPI = async (setSpeaking) => {
//   const response = await axios.get('http://localhost:4000/api/Speaking');
//   setSpeaking(response.data);
// };

// export const ReadAPI = async (setReading) => {
//   const response = await axios.get('http://localhost:4000/api/Reading');
//   setReading(response.data);
// };

// export const WriteAPI = async (setWriting) => {
//   const response = await axios.get('http://localhost:4000/api/Writing');
//   setWriting(response.data);
// };

// export const ListenAPI = async (setListening) => {
//   const response = await axios.get('http://localhost:4000/api/Listening');
//   setListening(response.data);
// };
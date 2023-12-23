import React from 'react';
import { Message } from 'semantic-ui-react';

const NoteSignUp = () => (
  <Message
    error
    header='You need must note:'
    list={[
      'Please enter correct information.',
      'We ask that you remember your Email and Passwork.',
    ]}
  />
)

export default NoteSignUp;
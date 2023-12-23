
import React, { useState } from 'react';
import { Grid, Button, Modal} from 'semantic-ui-react';
import ReactPlayer from 'react-player';

const ButtonHome = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const size = 'huge';
  const content = 'Watch class videos';
  const video = "https://youtu.be/OIuLjrPWtCs?si=0Nfk-W0gW_qUc-h3";

  return (
    <Grid.Column textAlign='center'>
      <Button size={size} onClick={handleOpen} content={content}/>
      <Modal open={open} onClose={handleClose}>
        <Modal.Content>
          <ReactPlayer url={video} />
        </Modal.Content>
      </Modal>
    </Grid.Column>
  );
};

export default ButtonHome;
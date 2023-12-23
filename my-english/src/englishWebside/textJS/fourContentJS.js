import { Grid, Header } from 'semantic-ui-react';
import { AllfourAPI } from '../../API/englishFourAPI';
import{ useState, useEffect } from 'react';
// import {SpeakAPI, ReadAPI, WriteAPI, ListenAPI } from '../../API/englishFourAPI';

const FourEnglish = () => {
    const [allFourEnglish, setfourEnglish] = useState([]);
    // const [speaking, setSpeaking] = useState([]);
    // const [reading, setReading] = useState([]);
    // const [writing, setWriting] = useState([]);
    // const [Listening, setListening] = useState([]);

    useEffect(() => {
        AllfourAPI(setfourEnglish);
        // SpeakAPI(setSpeaking);
        // ReadAPI(setReading);
        // WriteAPI(setWriting);
        // ListenAPI(setListening);
      }, []);

    return (

        <>
        
        {allFourEnglish.length > 0 && allFourEnglish[0] && allFourEnglish[0].content && (
            <Grid.Column >
                    <Header as='h2' content='📢 Speaking (Nói):'/>
                  <p>{allFourEnglish[0].content}</p>
                    </Grid.Column>
          )}
             <br/>
          {allFourEnglish.length > 0 && allFourEnglish[1] && allFourEnglish[1].content && (
            <Grid.Column >
            <Header as='h2' content='🖍 Writing (Viết):'/>
                  <p>{allFourEnglish[1].content}</p>
                    </Grid.Column>
          )}
          <br/>
          {allFourEnglish.length > 0 && allFourEnglish[2] && allFourEnglish[2].content && (
            <Grid.Column >
            <Header as='h2' content='🎤 Reading (Đọc):'/>
                  <p>{allFourEnglish[2].content}</p>
                    </Grid.Column>
          )}
          <br/>
          {allFourEnglish.length > 0 && allFourEnglish[3] && allFourEnglish[3].content && (
            <Grid.Column >
            <Header as='h2' content='🔊 Listening(Nghe hiểu):'/>
                  <p>{allFourEnglish[3].content}</p>
                    </Grid.Column>
          )}

        </>
    );
}

export default FourEnglish;

// {/** API loaded🎎!*/}
//         {speaking.length > 0 && (
//         <Grid.Column key={speaking[0]._id}>
//         <Header as='h2' content='📢 Speaking (Nói):'/>
//         <p>{speaking[0].content}</p>
//         </Grid.Column>
//         )}

//         {/** API loaded🎎!*/}
//         {writing.length > 0 && (
//         <Grid.Column key={setWriting[1]._id}>
//         <Header as='h2' content='🖍 Writing (Viết):'/>
//         <p>{setWriting[1].content}</p>
//         </Grid.Column>
//         )}
          
//         {/** API loaded🎎!*/}
//         {reading.length > 0 && (
//         <Grid.Column key={setReading[2]._id}>
//         <Header as='h2' content='🎤 Reading (Đọc):'/>
//         <p>{reading[1].content}</p>
//         </Grid.Column>
//         )}

//         {/** API loaded🎎!*/}
//         {Listening.length > 0 && (
//         <Grid.Column key={setListening[3]._id}>
//         <Header as='h2' content='🔊 Listening(Nghe hiểu):'/>
//         <p>{Listening[1].content}</p>
//         </Grid.Column>
//         )}
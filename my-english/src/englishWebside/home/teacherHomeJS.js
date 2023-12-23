import { Grid, Image, Header } from 'semantic-ui-react';

const TeacherHome = () =>{

    const GridColumnCSS = { paddingBottom: '5em', paddingTop: '5em' };
    const h1 = 'h1';
    const content = 'Teachers';
    const headerCSS = { fontSize: '2em' };
    const pCSS = { fontSize: '1.33em' };
    const urlImage = 'https://react.semantic-ui.com/images/avatar/large/nan.jpg';
    const Text = [
        'Quang Hung💦','We will teach all we have 😘!'
    ];

    return(
        <Grid.Column style={GridColumnCSS}>
        <Header as={h1} content={content} style={headerCSS}/>
        <p style={pCSS}>
            <Image avatar src={urlImage}/>
            <b>{Text[0]}</b>{Text[1]}
        </p>
    </Grid.Column>
);
}

export default TeacherHome;
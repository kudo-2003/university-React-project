import { Grid, Header } from 'semantic-ui-react';
import { OfHeaderOne, OfHeaderTwo } from './data';

const TextHome = () => {

    const TextHeader = [
        'Welcome to our English class ❤!',
        'See how to teach 💥!'
    ];
    const h3 = 'h3';
    const headerCSS = { fontSize: '2em' };
    const pCSS = { fontSize: '1.33em' };

    return(
        <Grid.Column width={8}>
            <Header as={h3} content={TextHeader[0]} style={headerCSS}/>
                <p style={pCSS}>
                    <OfHeaderOne/>
                </p>
            <Header as={h3} content={TextHeader[1]} style={headerCSS}/>
                <p style={pCSS}>
                    <OfHeaderTwo/>
                </p>
            </Grid.Column>
    );
}
export default TextHome;
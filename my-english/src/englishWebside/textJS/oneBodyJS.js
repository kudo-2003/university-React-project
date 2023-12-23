import { Segment, Grid, Container } from 'semantic-ui-react';
import LableText from './fourLableJS';
import HeaderText from './headerTextJS';
import FourEnglish from './fourContentJS';

const BodyOne = () =>{

    const styleSegment = { padding: '3em 0em' };

    return(
        <Segment style={styleSegment} vertical>  <br/>
            <LableText/>
            <HeaderText/>
            <Grid container>
                <Grid.Row columns={20} divided>
                    <Container fluid>
                        <FourEnglish/>
                    </Container>
                </Grid.Row>
            </Grid>
        </Segment>
    );
}

export default BodyOne;
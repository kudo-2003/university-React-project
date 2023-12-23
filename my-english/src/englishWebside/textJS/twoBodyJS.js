import { Segment, Header, Grid, Container} from 'semantic-ui-react';
import { ItemOne, ItemTwo, ItemThree, ItemFour, ItemFive, ItemSix } from "./allContentItemJS";

function HeaderBody(){

    const asHeader = 'h1';
    const textAlignHeader ="center";
    const contentHeader = 'We are here!';

    return(
        <Header 
            as={asHeader} 
            textAlign={textAlignHeader}
            content={contentHeader}
        /> 
    );
}

const BodyTwo = () => {

    const styleSegment = { padding: '5em 0em' };

    return(
    <Segment style={styleSegment} vertical> 
        <HeaderBody/>
        <Grid container>
            <Grid.Row columns={20} divided>
                <Container fluid>
                    <Grid columns={3}>
                        <Grid.Row>
                            <ItemOne/>
                            <ItemTwo/>
                            <ItemThree/>
                        </Grid.Row>
                    </Grid>
                    <Grid columns={3}>
                        <Grid.Row>
                            <ItemFour/>
                            <ItemFive/>
                            <ItemSix/>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Grid.Row>
        </Grid>
    </Segment>
);
}

export default BodyTwo;
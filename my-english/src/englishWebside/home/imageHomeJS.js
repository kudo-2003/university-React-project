import { Grid, Image } from 'semantic-ui-react';
import '../../CSS/homeWebside.css';

const ImageHome = () =>{

  const floated = 'right';
  const size = 'large';
  const srcImage = 'logo512.png';
  const className= 'rotate-image';
  //rounded == circular
  
  return(
    <Grid.Column floated={floated} width={6}>
      <Image bordered circular size={size} src={srcImage} className={className}/>
    </Grid.Column>
    );
}
    
export default ImageHome;


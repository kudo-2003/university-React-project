import { Button } from 'semantic-ui-react';
import { Facebook, Google, Linkedin, Twitter } from './evenImformationJS';

const AllButtonCircular = () => {

    const NameApp = [
        { name: 'facebook', onClick: Facebook },
        { name: 'twitter', onClick: Twitter },
        { name: 'linkedin', onClick: Linkedin                                       },
        { name: 'google plus', onClick: Google }
    ];

    return(
        <>
        {NameApp.map((app, index) =>(
            <Button
             key={index} 
             circular 
             color={app.name} 
             icon={app.name} 
             onClick={app.onClick}/>
        ))}
    </>
);
}

export default AllButtonCircular;
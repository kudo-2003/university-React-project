import { Header, Image } from 'semantic-ui-react';

function LoginHeader(){

  const asHeader = 'h2';
  const colorHeader = 'teal';
  const textAlignHeader = 'center';
  const text = 'Sign in to your account english';
  const srcImage = 'logo192.png';

  return (
    <Header 
      as={asHeader} 
      color={colorHeader} 
      textAlign={textAlignHeader}>
        <Image src={srcImage} />
      {text}
    </Header>
  );
}

export default LoginHeader;
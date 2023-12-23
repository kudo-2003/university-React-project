import React from "react";
import { Header, Image } from 'semantic-ui-react';

const HeaderSignUp = () => {

  const asHeader = 'h2';
  const colorHeader = 'teal';
  const textAlignHeader = 'center';
  const srcImage = 'logo192.png';
  const textHeader = 'Account Sign Up';

  return (
    <Header as={asHeader} color={colorHeader} textAlign={textAlignHeader}>
      <Image src={srcImage}/>{textHeader}
    </Header>
  );
}
export default HeaderSignUp;
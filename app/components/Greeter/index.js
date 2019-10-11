import React from 'react';
import {
  GreeterWrapper, GreeterContent, GreeterUserName, GreeterContentWrapper
} from './styled';

function Greeter({ username }) {
  return (
    <GreeterWrapper>
      <GreeterContentWrapper>
        <GreeterContent>Selamat Datang</GreeterContent>
        <GreeterUserName>{username}</GreeterUserName>
      </GreeterContentWrapper>
    </GreeterWrapper>
  );
}

export default Greeter;

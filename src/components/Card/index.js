import React from 'react';

import { Container, Label } from './styles';

function Card() {
  return (
    <Container >
      <header>
        <Label color="#7159C1"/>
      </header>
      <p>Fazer migração completa do servidor</p>    
      <img src="https://api.adorable.io/avatars/212/abott@adorable.png" alt="Avatar" />
    </Container>
  );
}

export default Card;
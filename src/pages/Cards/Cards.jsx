import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Titulo } from '../../components/Titulo/Titulo';
import { CardWrapper } from '../../components/CardWrapper/CardWrapper';

import image1 from '../../assets/image.jpg';

const BackgroundWrapper = styled.div`
  height: 200px;
  width: 200px;

  background-image: url(${image1});
  background-repeat: no-repeat;
`;

export const Cards = () => {
  return (
    <>
      <Titulo valor="Aula 01 - React" />
      <CardWrapper />

      <BackgroundWrapper />

      <Link to={'/login'}>Ir para o login</Link>
    </>
  );
};

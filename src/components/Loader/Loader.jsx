import React from 'react';
import { Ellipsis, LoaderContainer } from './Loader.styled';

function Loader() {
  return (
    <LoaderContainer>
      <Ellipsis>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </Ellipsis>
    </LoaderContainer>
  );
}

export default Loader;

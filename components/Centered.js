import React from 'react';
import styled from 'styled-components';
import { layout } from '../helpers/styles';

const S_div_wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const S_div_container = styled.div`
  width: 100%;
  max-width: ${layout.maxWidth}px;
`;

const Centered = props => (
  <S_div_wrapper>
    <S_div_container>{props.children}</S_div_container>
  </S_div_wrapper>
);

export default Centered;

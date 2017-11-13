import React from 'react';
import styled from 'styled-components';
import Centered from './Centered';

const S_div_footer = styled.footer`
  background: #f0f0f0;
  padding: 20px;
  font-size: 14px;
  line-height: 1;
`;

const Footer = () =>
  <S_div_footer>
    <Centered>
      Google Analytics is used here. There are some cookies involved with that.
      Just so you know.
    </Centered>
  </S_div_footer>;

export default Footer;

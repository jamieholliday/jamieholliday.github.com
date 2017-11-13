import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Centered from './Centered';
import Link from 'next/link';

const S_header = styled.header`
  margin-bottom: 20px;
  background: #323a45;
  display: flex;
  padding: 20px;
  align-items: center;
`;

const S_header_content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const S_ul_links = styled.ul`
  display: flex;
  align-items: center;
`;

const S_li_link = styled.li`margin-left: 20px;`;

const Header = () => (
  <S_header>
    <Centered>
      <S_header_content>
        <Link href={'/'}>
          <a>
            <Logo />
          </a>
        </Link>
        <S_ul_links>
          <S_li_link>
            <a href="http://employjamie.com">CV</a>
          </S_li_link>
          <S_li_link>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </S_li_link>
        </S_ul_links>
      </S_header_content>
    </Centered>
  </S_header>
);

export default Header;

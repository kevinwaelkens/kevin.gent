import React from 'react';
import * as Styled from './styles';
import Link from 'next/link';

interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = () => {
  return (
    <Styled.NavigationContainer>
      <Styled.Navigation>
        <Link href="/about">
          <Styled.Page>about</Styled.Page>
        </Link>
        <Link href="/">
          <Styled.LogoLink>
            <Styled.Logo src="./images/logo.png" alt="KW Logo" />
          </Styled.LogoLink>
        </Link>
        <Link href="/contact">
          <Styled.Page>contact</Styled.Page>
        </Link>
      </Styled.Navigation>
    </Styled.NavigationContainer>
  );
};

export default Navigation;

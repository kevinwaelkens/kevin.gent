import styled from 'styled-components';
import { mediaQueries } from 'helpers/mediaQueries';
import styles from 'helpers/styles';

export const NavigationContainer = styled.section`
  height: 80px;
  width: 100%;
  background: ${styles.navigationBackground};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const Navigation = styled.nav`
  height: 100%;
  width: 100%;
  max-width: 520px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavigationInteraction = styled.a`
  &:hover {
    opacity: 0.82;
    cursor: pointer;
  }

  ${mediaQueries[0]} {
    &:hover {
      opacity: 1;
    }
  }
`;

export const Page = styled(NavigationInteraction)`
  color: ${styles.navigationLink};
  text-decoration: none;
  margin: 0 30px;
`;

export const LogoLink = styled(NavigationInteraction)``;

export const Logo = styled.img`
  width: 40px;
`;

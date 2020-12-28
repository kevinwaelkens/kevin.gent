import { mediaQueries } from 'helpers/mediaQueries';
import styles from 'helpers/styles';
import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1 0 auto;
  padding: 35px;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 750px;
  display: flex;
  align-items: center;

  ${mediaQueries[0]} {
    max-width: 600px;
  }

  ${mediaQueries[1]} {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
  border-radius: 15px;

  ${mediaQueries[1]} {
    height: 260px;
    object-fit: cover;
  }
`;

export const ImageContainer = styled.div`
  width: 40%;

  ${mediaQueries[1]} {
    width: 60%;
  }
`;

export const Text = styled.div`
  font-size: 18px;
  line-height: 25px;

  ${mediaQueries[0]} {
    font-size: 17px;
    line-height: 23px;
  }
`;

export const Link = styled.a`
  color: ${styles.link};

  &:hover {
    opacity: 0.82;
  }
`;

export const TextContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0 0 40px;

  ${mediaQueries[1]} {
    padding: 40px 0 0 0;
    width: 80%;
  }
`;

export const External = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 15px;

  img {
    width: 50px;
    display: block;
    object-fit: contain;

    &:hover {
      cursor: pointer;
      opacity: 0.82;
    }
  }
`;

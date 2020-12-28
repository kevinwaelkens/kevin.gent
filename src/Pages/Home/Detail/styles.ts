import styled from 'styled-components';
import styles from 'helpers/styles';
import { mediaQueries } from 'helpers/mediaQueries';

export const Container = styled.div`
  position: fixed;
  overflow: scroll;
  background: rgba(0, 0, 0, 0.82);
  top: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: ${styles.imageControls};
`;

export const Action = styled.img`
  width: 30px;
  ${mediaQueries[0]} {
    width: 15px;
  }
`;

export const Previous = styled(Action)`
  position: absolute;
  left: 5%;
  transform: rotate(180deg);
  user-select: none;

  &:hover {
    cursor: pointer;
    opacity: 0.82;
  }
`;

export const Image = styled.img`
  width: 100vw;
  object-fit: contain;
  max-height: 100%;
`;

export const Next = styled(Action)`
  position: absolute;
  right: 5%;
  user-select: none;

  &:hover {
    cursor: pointer;
    opacity: 0.82;
  }
`;

export const Close = styled(Action)`
  position: absolute;
  right: 5%;
  top: 5%;
  user-select: none;

  &:hover {
    cursor: pointer;
    opacity: 0.82;
  }
`;

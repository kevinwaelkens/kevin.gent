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
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  row-gap: 16px;
  column-gap: 16px;

  ${mediaQueries[0]} {
    max-width: 600px;
  }

  ${mediaQueries[1]} {
    flex-direction: column;
  }
`;

export const Preview = styled.video`
  width: 100%;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const VideoContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;

  position: relative;
`;

export const CloseVideoButton = styled.span`
  position: absolute;
  font-size: 24px;
  right: 12px;
  top: 12px;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const Video = styled.video`
  width: 100%;
`;

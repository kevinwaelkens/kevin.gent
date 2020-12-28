import { mediaQueries } from 'helpers/mediaQueries';
import styled, { css } from 'styled-components';

export const PreviewWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: calc(100% - 80px);
  overflow: auto;
`;

export const filterInteraction = css`
  background: rgba(0, 0, 0, 0.82);
  color: white;
  cursor: pointer;
`;

export const Filter = styled.li<{ isActive: Boolean }>`
  padding: 10px;

  &:not(:last-child) {
    margin-right: 20px;
  }

  &:hover {
    ${filterInteraction}
  }

  ${({ isActive }) => isActive && filterInteraction}
`;

export const FilterContainer = styled.ul`
  padding: 1%;
  margin: 1% 0 0 0;
  list-style: none;
  display: flex;

  ${mediaQueries[0]} {
    flex-shrink: 0;
  }
`;

export const filtered = css`
  text-transform: capitalize;
`;

export const PreviewContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  ${mediaQueries[0]} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Preview = styled.img`
  width: 24%;
  margin: 0.5%;

  &:hover {
    cursor: pointer;
    opacity: 0.82;
  }

  ${mediaQueries[0]} {
    width: 85%;
    margin: 2.5%;
    flex-shrink: 0;
  }
`;

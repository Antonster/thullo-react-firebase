import styled from 'styled-components';

export const ContentContainer = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
  background: #f8f9fd;

  @media (max-width: 786px) {
    height: calc(100vh - 100px);
  }

  @media (max-width: 320px) {
    height: calc(100vh - 130px);
  }
`;

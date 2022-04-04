import styled from 'styled-components';

export const ContentContainer = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
  background: #f8f9fd;
  overflow: auto;

  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar {
    width: 6px;
    background: #e7e7e7;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 15px;
    background: #b3b3b3;
  }

  @media (max-width: 786px) {
    height: calc(100vh - 100px);
  }

  @media (max-width: 320px) {
    height: calc(100vh - 130px);
  }
`;

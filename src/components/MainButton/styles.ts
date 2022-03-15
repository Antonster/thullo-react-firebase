import styled from 'styled-components';

export const MainButton = styled.button`
  display: flex;
  align-items: center;
  color: #828282;
  padding: 5px 15px;
  background: #f2f2f2;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.4s;

  &:hover {
    background: #1aa3de;
    color: #ffffff;
  }

  @media (max-width: 1024px) {
    padding: 5px 10px;
  }
`;

export const MainText = styled.div`
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.035em;
  margin: 0 0 0 10px;
`;

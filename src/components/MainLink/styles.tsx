import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MainLink = styled(Link)`
  color: #1aa3de;
  cursor: pointer;
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.035em;
  transition: all 0.4s;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    margin: 6px 0;
  }
`;

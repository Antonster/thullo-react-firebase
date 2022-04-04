import styled from 'styled-components';
import { IStyledMainButton, IStyledMainButtonText } from 'src/interfaces';

export const MainButton = styled.button<IStyledMainButton>`
  ${({ $fullWidth }) => ($fullWidth ? 'width: 100%;' : '')}
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 15px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.4s;

  ${({ $style }) => {
    switch ($style) {
      case 'primary':
        return `
          color: #ffffff;
          background: #1aa3de;
        `;
      case 'secondary':
        return `
          color: #828282;
          background: #f2f2f2;
        `;
      default:
        return '';
    }
  }};

  & > svg {
    margin: 0 10px 0 0;
  }

  &:hover {
    ${({ $style }) => {
      switch ($style) {
        case 'primary':
          return `
            opacity: 0.7;
          `;
        case 'secondary':
          return `
            color: #ffffff;
            background: #1aa3de;
          `;
        default:
          return '';
      }
    }};
  }

  @media (max-width: 1024px) {
    padding: 5px 10px;
  }
`;

export const Text = styled.div<IStyledMainButtonText>`
  font-family: 'Poppins';
  font-weight: 500;
  letter-spacing: -0.035em;
  ${({ $size }) => {
    switch ($size) {
      case 'big':
        return `
          font-size: 18px;
          line-height: 24px;
          padding: 3px 0;
        `;
      case 'small':
        return `
          font-size: 14px;
          line-height: 18px;
        `;
      default:
        return `
          font-size: 16px;
          line-height: 20px;
        `;
    }
  }};
`;

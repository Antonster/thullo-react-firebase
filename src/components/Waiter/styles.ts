import styled from 'styled-components';

import type {
  IStyledWaiterSquare,
  IStyledWaiterSquarePart,
} from 'src/interfaces';

export const Waiter = styled.div`
  position: absolute;
  z-index: 1200;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Square = styled.div<IStyledWaiterSquare>`
  position: relative;
  width: ${({ $size }) => $size || '1em'};
  height: ${({ $size }) => $size || '1em'};
  transform-origin: 50% 50%;
  animation: translate_square 1s infinite;

  @keyframes translate_square {
    0% {
      transform: rotate(-45deg);
    }
    75% {
      transform: rotate(-45deg);
    }
    100% {
      transform: rotate(45deg);
    }
  }
`;

export const SquarePart = styled.div<IStyledWaiterSquarePart>`
  position: absolute;
  display: block;
  width: 50%;
  height: 50%;
  background: #1aa3de;
  transform-origin: 50% 50%;

  ${({ $part }) => {
    switch ($part) {
      case 'first':
        return `
          top: 0;
          left: 0;
          animation: translate_part-1 1s infinite;
        `;
      case 'second':
        return `
          top: 0;
          right: 0;
          animation: translate_part-2 1s infinite;
        `;
      case 'third':
        return `
          bottom: 0;
          left: 0;
          animation: translate_part-3 1s infinite;
        `;
      case 'fourth':
        return `
          bottom: 0;
          right: 0;
          animation: translate_part-4 1s infinite;
        `;
      default:
        return '';
    }
  }}

  @keyframes translate_part-1 {
    0% {
      transform: translate(0%, 0%);
    }
    25% {
      transform: translate(-50%, -50%);
    }
    50% {
      transform: translate(-50%, -50%) rotate(-90deg);
    }
    75% {
      transform: translate(0%, 0%) rotate(-90deg);
    }
    100% {
      transform: translate(0%, 0%) rotate(-90deg);
    }
  }
  @keyframes translate_part-2 {
    0% {
      transform: translate(0%, 0%);
    }
    25% {
      transform: translate(50%, -50%);
    }
    50% {
      transform: translate(50%, -50%) rotate(-90deg);
    }
    75% {
      transform: translate(0%, 0%) rotate(-90deg);
    }
    100% {
      transform: translate(0%, 0%) rotate(-90deg);
    }
  }
  @keyframes translate_part-3 {
    0% {
      transform: translate(0%, 0%);
    }
    25% {
      transform: translate(-50%, 50%);
    }
    50% {
      transform: translate(-50%, 50%) rotate(-90deg);
    }
    75% {
      transform: translate(0%, 0%) rotate(-90deg);
    }
    100% {
      transform: translate(0%, 0%) rotate(-90deg);
    }
  }
  @keyframes translate_part-4 {
    0% {
      transform: translate(0%, 0%);
    }
    25% {
      transform: translate(50%, 50%);
    }
    50% {
      transform: translate(50%, 50%) rotate(-90deg);
    }
    75% {
      transform: translate(0%, 0%) rotate(-90deg);
    }
    100% {
      transform: translate(0%, 0%) rotate(-90deg);
    }
  }
`;

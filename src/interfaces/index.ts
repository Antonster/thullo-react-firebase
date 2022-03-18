import type { ReactElement } from 'react';

export interface IMainButton {
  icon: ReactElement;
  text: string;
}

export interface IWaiter {
  size?: string;
}

export interface IStyledWaiterSquare {
  $size?: string;
}

export interface IStyledWaiterSquarePart {
  $part?: 'first' | 'second' | 'third' | 'fourth';
}

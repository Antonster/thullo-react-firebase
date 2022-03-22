import type { ReactElement } from 'react';

export interface ISecondaryButton {
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

export interface IMainWrapper {
  width?: string;
  height?: string;
  padding?: string;
}

export interface IStyledMainWrapper {
  $width?: string;
  $height?: string;
  $padding?: string;
}

export interface IPrimaryButton {
  text: string;
}

import type { ReactElement } from 'react';

export interface IMainButton {
  icon?: ReactElement;
  text: string;
  type: 'button' | 'submit' | 'reset';
  $style: 'primary' | 'secondary';
  $size?: 'big' | 'small';
  $fullWidth?: boolean;
}

export interface IStyledMainButton {
  $style: 'primary' | 'secondary';
  $fullWidth?: boolean;
}

export interface IStyledMainButtonText {
  $size?: 'big' | 'small';
}

export interface IStyledWaiterSquare {
  $size?: string;
}

export interface IStyledWaiterSquarePart {
  $part?: 'first' | 'second' | 'third' | 'fourth';
}

export interface IStyledMainWrapper {
  $width?: string;
  $height?: string;
  $padding?: string;
}

export interface IUserData {
  email: string;
  password: string;
}

export interface IResetPassword {
  actionCode: string;
  newPassword: string;
}

export interface IAuthReducer {
  login: string | undefined;
  createUserStatus: string | undefined;
  signInStatus: string | undefined;
  signOutStatus: string | undefined;
  sendPasswordResetEmailStatus: string | undefined;
  resetPasswordStatus: string | undefined;
  waiter: boolean;
  initialLoading: boolean;
}

export interface IStatusMessages {
  [key: string]: string;
}

export interface IStyledMessage {
  $color?: 'error' | 'success' | string;
}

export interface IBoardsCard {
  image?: string;
  title: string;
  description?: string;
}

import type { ReactElement } from 'react';

export interface ISecondaryButton {
  icon: ReactElement;
  text: string;
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

export interface IPrimaryButton {
  text: string;
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
  login: boolean;
  createUserStatus: string | undefined;
  signInStatus: string | undefined;
  signOutStatus: string | undefined;
  sendPasswordResetEmailStatus: string | undefined;
  resetPasswordStatus: string | undefined;
  waiter: boolean;
}

export interface IStatusMessages {
  [key: string]: string;
}

export interface IStyledMessage {
  $color?: 'error' | 'success' | string;
}

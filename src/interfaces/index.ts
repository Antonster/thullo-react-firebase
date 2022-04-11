import type { ReactElement } from 'react';

export interface IStyledMainButton {
  $style: 'primary' | 'secondary' | 'empty';
  $gap?: string;
  $fullWidth?: boolean;
}

export interface IStyledMainButtonText {
  $size?: 'big' | 'small';
}

export interface IMainButton extends IStyledMainButton, IStyledMainButtonText {
  icon?: ReactElement;
  text: string;
  type: 'button' | 'submit' | 'reset';
  onClick?: () => void;
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

export interface IBoardsHeader {
  onOpenModal: () => void;
}

export interface IBoardCreationForm {
  onCloseModal: () => void;
  addBoard: (image: string, title: string, description: string) => void;
  modal: boolean;
}

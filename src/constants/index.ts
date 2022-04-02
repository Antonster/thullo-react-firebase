import { IStatusMessages } from 'src/interfaces';

export const signUpStatusMessages: IStatusMessages = {
  'auth/email-already-in-use': 'Email already in use',
  'auth/invalid-email': 'Invalid email',
  'auth/operation-not-allowed': 'Operation not allowed',
  'auth/weak-password': 'Weak password',
};

export const signInStatusMessages: IStatusMessages = {
  'auth/invalid-email': 'Invalid email',
  'auth/user-disabled': 'User disabled',
  'auth/user-not-found': 'User not found',
  'auth/wrong-password': 'Wrong password',
};

export const resetPasswordStatusMessages: IStatusMessages = {
  'auth/expired-action-code': 'Expired action code',
  'auth/invalid-action-code': 'Invalid action code',
  'auth/user-disabled': 'User disabled',
  'auth/user-not-found': 'User not found',
  'auth/weak-password': 'Weak password',
};

export const forgotPasswordStatusMessages: IStatusMessages = {
  'auth/invalid-email': 'Invalid email',
  'auth/missing-android-pkg-name': 'Missing android pkg name',
  'auth/missing-continue-uri': 'Missing continue uri',
  'auth/missing-ios-bundle-id': 'Missing ios bundle id',
  'auth/invalid-continue-uri': 'Invalid continue uri',
  'auth/unauthorized-continue-uri': 'Unauthorized continue uri',
  'auth/user-not-found': 'User not found',
};

import { FC } from 'react';

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
  SpinnerButton
} from './button.styles';

export enum BUTTON_TYPES_CLASSES {
  base = 'base',
  google = 'google-sign-in',
  inverted = 'inverted',
};

const getButton = (buttonType = BUTTON_TYPES_CLASSES.base) : typeof BaseButton =>
  ({
    [BUTTON_TYPES_CLASSES.base]: BaseButton,
    [BUTTON_TYPES_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPES_CLASSES.inverted]: InvertedButton,
  } as Record<BUTTON_TYPES_CLASSES, typeof BaseButton>)[buttonType];


export type ButtonProps = {
  children: React.ReactNode;
  buttonType?: BUTTON_TYPES_CLASSES;
  isLoading?: boolean
}

const Button: FC<ButtonProps> = ({ children, buttonType,isLoading, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton disabled={isLoading} {...otherProps}>
  {isLoading ? <SpinnerButton/> : children}
  </CustomButton>;
};

export default Button;
import { ButtonSmallDefault, IButtonSmallDefaultProps } from "./Default";
import { ButtonSmallError } from "./Error";
import { ButtonSmallErrorOutline } from "./ErrorOutline";
import { ButtonSmallOutlineGrey } from "./OutlineGrey";
import { ButtonSmallPrimary } from "./Primary";
import { ButtonSmallPrimaryOutline } from "./PrimaryOutline";
import { ButtonSmallSuccess } from "./Success";
import { ButtonSmallWarning } from "./Warning";

export const ButtonSmall = {
  Default: ButtonSmallDefault,
  Primary: ButtonSmallPrimary,
  PrimaryOutline: ButtonSmallPrimaryOutline,
  Error: ButtonSmallError,
  ErrorOutline: ButtonSmallErrorOutline,
  Warning: ButtonSmallWarning,
  Success: ButtonSmallSuccess,
  OutlineGrey: ButtonSmallOutlineGrey,
};

export type ButtonSmallProps = IButtonSmallDefaultProps;

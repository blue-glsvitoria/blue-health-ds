import { ButtonSmallDefault, IButtonSmallDefaultProps } from "./Default";
import { ButtonSmallError } from "./Error";
import { ButtonSmallOutlineGrey } from "./OutlineGrey";
import { ButtonSmallPrimary } from "./Primary";
import { ButtonSmallSuccess } from "./Success";
import { ButtonSmallWarning } from "./Warning";

export const ButtonSmall = {
  Default: ButtonSmallDefault,
  Primary: ButtonSmallPrimary,
  Error: ButtonSmallError,
  Warning: ButtonSmallWarning,
  Success: ButtonSmallSuccess,
  OutlineGrey: ButtonSmallOutlineGrey,
};

export type ButtonSmallProps = IButtonSmallDefaultProps;

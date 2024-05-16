import { ButtonDefault, IButtonDefaultProps } from "./Default";
import { ButtonOutlineGrey } from "./OutlineGrey";
import { ButtonPrimary } from "./Primary";

export const Button = {
  Default: ButtonDefault,
  Primary: ButtonPrimary,
  OutlineGrey: ButtonOutlineGrey,
};

export type ButtonProps = IButtonDefaultProps;

import { TextFieldDefault, TextFieldDefaultProps } from "./Default";
import { TextFieldExternalLabel } from "./ExternalLabel";
import { TextFieldIcon } from "./Icon";
import { TextFieldInternalLabel } from "./InternalLabel";

export const TextField = {
  Default: TextFieldDefault,
  Icon: TextFieldIcon,
  ExternalLabel: TextFieldExternalLabel,
  InternalLabel: TextFieldInternalLabel,
};

export type TextFieldProps = TextFieldDefaultProps;

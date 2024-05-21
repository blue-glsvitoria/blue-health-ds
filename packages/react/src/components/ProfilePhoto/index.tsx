import { radii } from "@blue-health/tokens";
import { Avatar, AvatarProps, SxProps } from "@mui/material";

import ProfileBlue from "../../assets/profile.svg";

export type ProfilePhotoProps = {
  src: string;
} & AvatarProps;

export const ProfilePhoto = ({ src, ...props }: ProfilePhotoProps) => {
  const sxStyles: SxProps = {
    width: 42,
    height: 42,
    borderRadius: radii.sm,
  };

  return (
    <Avatar
      {...props}
      src={src ? src : ProfileBlue}
      sx={{
        ...sxStyles,
        ...props.sx,
      }}
    />
  );
};

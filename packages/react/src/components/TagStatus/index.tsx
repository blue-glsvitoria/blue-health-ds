import { fontSizes, fontWeights, radii, space } from "@blue-health/tokens";
import {
  Stack,
  StackProps,
  SxProps,
  Typography,
  useTheme,
} from "@mui/material";

export type TagStatusProps = {
  variant: "approve" | "reject" | "pending" | "black" | "blue" | "others";
  children: string;
} & StackProps;

export const TagStatus = ({ variant, children, ...props }: TagStatusProps) => {
  const theme = useTheme();
  let styleSx: SxProps = {};

  switch (variant) {
    case "approve":
      styleSx = {
        backgroundColor: "#2E7D3240",
        color: theme.palette.success.main,
      };
      break;
    case "reject":
      styleSx = {
        backgroundColor: "#D32F2F40",
        color: theme.palette.error.main,
      };
      break;
    case "pending":
      styleSx = {
        backgroundColor: "#EF6C0040",
        color: theme.palette.warning.main,
      };
      break;
    case "black":
      styleSx = {
        backgroundColor: "#2B2B2B40",
        color: theme.palette.text.primary,
      };
      break;
    case "blue":
      styleSx = {
        backgroundColor: "#2500CF40",
        color: theme.palette.primary.main,
      };
      break;
    case "others":
      styleSx = {
        backgroundColor: "#E8EDFF",
        color: "#7A8A9D",
      };
      break;
  }
  return (
    <Stack
      {...props}
      sx={{
        borderRadius: radii.xs,
        px: space[4],
        py: space[2],
        ...styleSx,
        ...props.sx,
      }}
    >
      <Typography
        sx={{
          color: "inherit",
          fontSize: fontSizes.sm,
          fontWeight: fontWeights.semibold,
        }}
      >
        {children}
      </Typography>
    </Stack>
  );
};

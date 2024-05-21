import { fontWeights } from "@blue-health/tokens";
import { TaskAlt } from "@mui/icons-material";
import {
  Stack,
  StackProps,
  SxProps,
  Typography,
  useTheme,
} from "@mui/material";

export type ProgressBarItem = {
  variant: "waiting" | "active" | "completed";
  label: string;
  step: number;
} & StackProps;

export const ProgressBarItem = ({
  variant,
  label,
  step,
  ...props
}: ProgressBarItem) => {
  const theme = useTheme();

  let sxStyles: SxProps = {};

  switch (variant) {
    case "waiting":
      sxStyles = {
        borderColor: "#94ADFF",
        backgroundColor: "#E8EDFF",
      };
      break;
    case "active":
      sxStyles = {
        borderColor: theme.palette.primary.main,
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
      };
      break;
    case "completed":
      sxStyles = {
        borderColor: theme.palette.primary.main,
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
      };
      break;
  }

  return (
    <Stack
      {...props}
      sx={{
        gap: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "fit-content",
        zIndex: 1,
        ...props.sx,
      }}
    >
      <Stack
        sx={{
          width: 32,
          height: 32,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          borderWidth: 2,
          borderStyle: "solid",
          ...sxStyles,
        }}
      >
        {variant !== "completed" ? (
          step
        ) : (
          <TaskAlt
            sx={{
              width: 18,
              height: 18,
            }}
          />
        )}
      </Stack>
      <Typography
        variant="body1"
        sx={{
          fontWeight: fontWeights.semibold,
          width: "max-content",
        }}
      >
        {label}
      </Typography>
    </Stack>
  );
};

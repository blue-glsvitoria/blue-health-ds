import { ErrorOutline } from "@mui/icons-material";
import { FormControl, Stack, Typography, useTheme } from "@mui/material";
import { forwardRef } from "react";

import { TextField, TextFieldProps } from "..";

export type TextFieldInternalLabelProps = {
  errorMessage?: string;
} & TextFieldProps;

export const TextFieldInternalLabel = forwardRef<
  HTMLDivElement,
  TextFieldInternalLabelProps
>(({ errorMessage, ...props }, ref) => {
  const theme = useTheme();

  return (
    <FormControl
      fullWidth
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
      }}
    >
      <TextField.Default
        {...props}
        ref={ref}
        variant="filled"
        sx={{
          "& .MuiFormLabel-root": {
            color: props.error
              ? theme.palette.error.main
              : theme.palette.info.main,
            fontWeight: 600,
          },
          "& .MuiInputBase-root": {
            borderRadius: "14px",
            backgroundColor: "transparent",
          },
          ":focus": {
            "& .MuiFormLabel-root": {
              color: props.error
                ? theme.palette.error.main
                : theme.palette.info.main,
            },
          },
          ...props.sx,
        }}
        InputProps={{
          disableUnderline: true,
          ...props.InputProps,
        }}
      />

      {props?.error && (
        <Stack
          sx={{
            color: theme.palette.error.main,
            flexDirection: "row",
            gap: 1,
          }}
        >
          <ErrorOutline
            sx={{
              width: 16,
              height: 16,
            }}
          />
          <Typography
            variant="caption"
            sx={{
              fontSize: 12,
            }}
          >
            {errorMessage}
          </Typography>
        </Stack>
      )}
    </FormControl>
  );
});

TextFieldInternalLabel.displayName = "Internal Label";

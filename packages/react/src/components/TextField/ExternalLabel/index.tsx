import { ErrorOutline, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  IconButton,
  InputAdornment,
  InputLabel,
  InputLabelProps,
  Stack,
  StackProps,
  Typography,
  useTheme,
} from "@mui/material";
import { forwardRef, useState } from "react";
import { Link } from "react-router-dom";

import { TextField, TextFieldProps } from "..";

type ITextFieldExternalLabelProps = {
  label: string;
  visibilityChange?: boolean;
  containerProps?: StackProps;
  labelProps?: InputLabelProps;
  errorMessage?: string;
} & TextFieldProps;

export const TextFieldExternalLabel = forwardRef<
  HTMLDivElement,
  ITextFieldExternalLabelProps
>(
  (
    {
      containerProps,
      label,
      visibilityChange = false,
      labelProps,
      errorMessage,
      ...props
    },
    ref,
  ) => {
    const theme = useTheme();
    const [canSeeValue, setCanSeeValue] = useState(label !== "Senha");

    const handleChangeCanSeeValue = () => {
      setCanSeeValue((prev) => !prev);
    };

    return (
      <Stack
        {...containerProps}
        sx={{
          gap: 1,
        }}
      >
        <Stack
          sx={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <InputLabel
            {...labelProps}
            sx={{
              fontSize: 16,
              fontWeight: 600,
              color: props.error
                ? theme.palette.error.main
                : theme.palette.text.primary,
            }}
            htmlFor={label}
          >
            {label}
          </InputLabel>

          {label === "Senha" && (
            <Box
              component={Link}
              sx={{
                color: "#000",
              }}
              to="/acesso/recuperar"
            >
              Esqueci minha senha
            </Box>
          )}
        </Stack>

        <TextField.Default
          {...props}
          ref={ref}
          id={label}
          type={canSeeValue ? "text" : "password"}
          sx={{
            "& ::placeholder": {
              color: theme.palette.info.main,
              opacity: 1,
            },
            ...props.sx,
          }}
          InputProps={{
            endAdornment: visibilityChange && (
              <InputAdornment position="end">
                <IconButton
                  aria-label="Altere a visibilidade"
                  onClick={handleChangeCanSeeValue}
                  edge="end"
                >
                  {canSeeValue ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
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
      </Stack>
    );
  },
);

TextFieldExternalLabel.displayName = "External Label";

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __restKey = (key) => typeof key === "symbol" ? key : key + "";
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

// ../tokens/dist/index.mjs
var colors = {
  "primary-main": "#000CFF",
  "primary-dark": "#1F00AE",
  "secondary-main": "#00D8FF",
  "secondary-dark": "#00B9DB",
  "error-main": "#D32F2F",
  "error-dark": "#C62828",
  "success-main": "#2E7D32",
  "success-dark": "#1B5E20",
  "text-primary": "#2b2b2b",
  "text-secondary": "#D7D7D7"
};
var fontSizes = {
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.3125rem",
  "2xl": "1.5rem",
  "3xl": "2rem"
};
var fontWeights = {
  regular: 400,
  medium: 500,
  bold: 700
};
var fonts = {
  default: "Figtree, sans-serif"
};
var radii = {
  sm: "6px",
  md: "12px",
  lg: "24px",
  full: "9999px"
};
var space = {
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  10: "2.5rem",
  12: "3rem",
  16: "4rem",
  20: "5rem",
  40: "10rem",
  64: "16rem",
  80: "20rem"
};

// src/components/Button/index.tsx
import {
  Button as MUIButton,
  SvgIcon,
  useTheme
} from "@mui/material";
import { jsx, jsxs } from "react/jsx-runtime";
var Button = (_a) => {
  var _b = _a, {
    buttonVariant = "primary",
    size = "large",
    icon,
    iconPosition,
    children
  } = _b, props = __objRest(_b, [
    "buttonVariant",
    "size",
    "icon",
    "iconPosition",
    "children"
  ]);
  const theme2 = useTheme();
  let buttonStyles = {
    alignItems: "center",
    border: "1px solid transparent",
    borderRadius: radii.lg,
    display: "flex",
    fontWeight: fontWeights.bold,
    fontSize: size === "small" ? fontSizes.xs : fontSizes.lg,
    gap: 1,
    justifyContent: "center",
    px: space[4],
    textTransform: "none",
    transition: "all 0.2s",
    ":disabled": {
      backgroundColor: theme2.palette.text.secondary,
      borderColor: theme2.palette.text.secondary,
      color: "#2b2b2b61"
    }
  };
  switch (buttonVariant) {
    case "primary":
      buttonStyles = __spreadProps(__spreadValues({}, buttonStyles), {
        backgroundColor: theme2.palette.primary.main,
        color: "white",
        ":hover": {
          backgroundColor: theme2.palette.primary.dark
        }
      });
      break;
    case "primary-outline":
      buttonStyles = __spreadProps(__spreadValues({}, buttonStyles), {
        backgroundColor: "white",
        borderColor: theme2.palette.primary.main,
        color: theme2.palette.primary.main,
        ":hover": {
          backgroundColor: "rgba(37, 0, 207, 0.15)"
        }
      });
      break;
    case "error":
      buttonStyles = __spreadProps(__spreadValues({}, buttonStyles), {
        backgroundColor: theme2.palette.error.main,
        color: "white",
        ":hover": {
          background: theme2.palette.error.dark
        }
      });
      break;
    case "error-outline":
      buttonStyles = __spreadProps(__spreadValues({}, buttonStyles), {
        backgroundColor: "white",
        borderColor: theme2.palette.error.main,
        color: theme2.palette.error.main,
        ":hover": {
          background: "rgba(198, 40, 40, 0.38)"
        }
      });
      break;
    case "never":
      break;
  }
  const removeProperty = (obj, propToRemove) => {
    const _a2 = obj, { [propToRemove]: propValue } = _a2, newObj = __objRest(_a2, [__restKey(propToRemove)]);
    return newObj;
  };
  return /* @__PURE__ */ jsxs(
    MUIButton,
    __spreadProps(__spreadValues(__spreadValues({
      sx: __spreadValues(__spreadValues({}, buttonStyles), props.sx)
    }, props), removeProperty(props, "sx")), {
      children: [
        icon && iconPosition === "left" && /* @__PURE__ */ jsx(SvgIcon, { component: icon }),
        children,
        icon && iconPosition === "right" && /* @__PURE__ */ jsx(SvgIcon, { component: icon })
      ]
    })
  );
};

// src/styles/theme.ts
import { createTheme } from "@mui/material";
var theme = createTheme({
  palette: {
    primary: {
      main: colors["primary-main"],
      dark: colors["primary-dark"]
    },
    secondary: {
      main: colors["secondary-main"],
      dark: colors["secondary-dark"]
    },
    error: {
      main: colors["error-main"],
      dark: colors["error-dark"]
    },
    success: {
      main: colors["success-main"],
      dark: colors["success-dark"]
    },
    text: {
      primary: colors["text-primary"],
      secondary: colors["text-secondary"]
    }
  },
  typography: {
    fontFamily: fonts.default
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: "h1",
          h2: "h2",
          h4: "h4",
          body1: "p",
          body2: "span"
        }
      }
    }
  }
});
export {
  Button,
  theme
};

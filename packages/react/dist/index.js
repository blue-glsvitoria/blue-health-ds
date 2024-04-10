"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  Button: () => Button,
  TextField: () => TextField,
  theme: () => theme
});
module.exports = __toCommonJS(src_exports);

// ../tokens/dist/index.mjs
var colors = {
  primary: "#000CFF",
  primaryDark: "#1F00AE",
  secondary: "#00D8FF",
  secondaryDark: "#00B9DB",
  error: "#D32F2F",
  errorDark: "#C62828",
  success: "#2E7D32",
  successDark: "#1B5E20",
  textPrimary: "#2b2b2b",
  textSecondary: "#D7D7D7"
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
  xs: "4px",
  sm: "8px",
  md: "16px",
  lg: "26px",
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
var import_material = require("@mui/material");
var import_jsx_runtime = require("react/jsx-runtime");
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
  const theme2 = (0, import_material.useTheme)();
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    import_material.Button,
    __spreadProps(__spreadValues(__spreadValues({
      sx: __spreadValues(__spreadValues({}, buttonStyles), props.sx)
    }, props), removeProperty(props, "sx")), {
      children: [
        icon && iconPosition === "left" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_material.SvgIcon, { component: icon }),
        children,
        icon && iconPosition === "right" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_material.SvgIcon, { component: icon })
      ]
    })
  );
};
Button.displayName = "Button";

// src/components/TextField/index.tsx
var import_material2 = require("@mui/material");
var import_react = require("react");
var import_jsx_runtime2 = require("react/jsx-runtime");
var TextField = (0, import_react.forwardRef)(
  (_a, ref) => {
    var _b = _a, { icon, iconPosition, iconProps } = _b, props = __objRest(_b, ["icon", "iconPosition", "iconProps"]);
    const theme2 = (0, import_material2.useTheme)();
    const removeProperty = (obj, propToRemove) => {
      const _a2 = obj, { [propToRemove]: propValue } = _a2, newObj = __objRest(_a2, [__restKey(propToRemove)]);
      return newObj;
    };
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_material2.FormControl, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        import_material2.InputLabel,
        {
          shrink: true,
          htmlFor: props.name,
          sx: {
            color: theme2.palette.text.primary
          },
          children: props.label
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        import_material2.TextField,
        __spreadValues({
          ref,
          id: props.name,
          sx: {
            marginTop: 1.5,
            fontSize: 12
          },
          InputProps: {
            sx: {
              height: 40,
              borderRadius: radii.lg,
              px: 2,
              border: "1px solid #E0E0E0",
              backgroundColor: props.disabled ? "#E0E0E0" : "transparent"
            },
            endAdornment: icon && iconPosition === "right" ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_material2.InputAdornment, { position: "end", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_material2.SvgIcon, __spreadValues({ component: icon }, iconProps)) }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_jsx_runtime2.Fragment, {}),
            startAdornment: icon && iconPosition === "left" ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_material2.InputAdornment, { position: "start", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_material2.SvgIcon, __spreadValues({ component: icon }, iconProps)) }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_jsx_runtime2.Fragment, {})
          }
        }, removeProperty(props, "label"))
      )
    ] });
  }
);
TextField.displayName = "TextField";

// src/styles/theme.ts
var import_material3 = require("@mui/material");
var theme = (0, import_material3.createTheme)({
  palette: {
    primary: {
      main: colors.primary,
      dark: colors.primaryDark
    },
    secondary: {
      main: colors.secondary,
      dark: colors.secondaryDark
    },
    error: {
      main: colors.error,
      dark: colors.errorDark
    },
    success: {
      main: colors.success,
      dark: colors.successDark
    },
    text: {
      primary: colors.textPrimary,
      secondary: colors.textSecondary
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  TextField,
  theme
});

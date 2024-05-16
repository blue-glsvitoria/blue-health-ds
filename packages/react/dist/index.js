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
  ButtonSmall: () => ButtonSmall,
  TextField: () => TextField,
  theme: () => theme
});
module.exports = __toCommonJS(src_exports);

// src/components/Button/Default/index.tsx
var import_material = require("@mui/material");
var import_jsx_runtime = require("react/jsx-runtime");
function ButtonDefault(_a) {
  var _b = _a, { children } = _b, props = __objRest(_b, ["children"]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_material.Button,
    __spreadProps(__spreadValues({}, props), {
      sx: __spreadValues({
        borderRadius: 1,
        px: 2,
        py: 1,
        fontSize: 16,
        fontWeight: 700,
        textTransform: "none",
        width: "100%"
      }, props.sx),
      children
    })
  );
}

// src/components/Button/OutlineGrey/index.tsx
var import_material2 = require("@mui/material");
var import_jsx_runtime2 = require("react/jsx-runtime");
var ButtonOutlineGrey = (_a) => {
  var _b = _a, {
    children
  } = _b, props = __objRest(_b, [
    "children"
  ]);
  const theme2 = (0, import_material2.useTheme)();
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    Button.Default,
    __spreadProps(__spreadValues({}, props), {
      sx: __spreadValues({
        backgroundColor: "#FAFAFA",
        borderColor: "#E8EDFF",
        borderStyle: "solid",
        borderWidth: 2,
        color: theme2.palette.info.main,
        transition: "all 0.3s",
        "&:hover": {
          backgroundColor: "#E8EDFF"
        },
        ":disabled": {
          backgroundColor: "#D7D7D7",
          color: theme2.palette.common.white,
          borderWidth: 0
        }
      }, props.sx),
      children
    })
  );
};

// src/components/Button/Primary/index.tsx
var import_material3 = require("@mui/material");
var import_jsx_runtime3 = require("react/jsx-runtime");
var ButtonPrimary = (_a) => {
  var _b = _a, { children } = _b, props = __objRest(_b, ["children"]);
  const theme2 = (0, import_material3.useTheme)();
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    Button.Default,
    __spreadProps(__spreadValues({}, props), {
      sx: __spreadValues({
        backgroundColor: theme2.palette.primary.main,
        color: theme2.palette.common.white,
        transition: "all 0.3s",
        ":hover": {
          backgroundColor: theme2.palette.primary.dark
        },
        ":disabled": {
          backgroundColor: "#D7D7D7",
          color: theme2.palette.common.white
        }
      }, props.sx),
      children
    })
  );
};

// src/components/Button/index.ts
var Button = {
  Default: ButtonDefault,
  Primary: ButtonPrimary,
  OutlineGrey: ButtonOutlineGrey
};

// src/components/ButtonSmall/Default/index.tsx
var import_material4 = require("@mui/material");
var import_jsx_runtime4 = require("react/jsx-runtime");
var ButtonSmallDefault = (_a) => {
  var _b = _a, {
    children
  } = _b, props = __objRest(_b, [
    "children"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    import_material4.Button,
    __spreadProps(__spreadValues({}, props), {
      sx: __spreadValues({
        borderRadius: 2,
        px: 2,
        fontSize: 14,
        fontWeight: 700,
        textTransform: "none",
        transition: "all 0.3s",
        width: "100%",
        borderWidth: 2,
        borderStyle: "solid"
      }, props.sx),
      children
    })
  );
};

// src/components/ButtonSmall/Error/index.tsx
var import_material5 = require("@mui/material");
var import_jsx_runtime5 = require("react/jsx-runtime");
var ButtonSmallError = (_a) => {
  var _b = _a, {
    children
  } = _b, props = __objRest(_b, [
    "children"
  ]);
  const theme2 = (0, import_material5.useTheme)();
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    ButtonSmall.Default,
    __spreadProps(__spreadValues({}, props), {
      sx: __spreadValues({
        backgroundColor: theme2.palette.error.main,
        borderColor: "inherit",
        color: theme2.palette.common.white,
        "&:hover": {
          backgroundColor: theme2.palette.error.dark
        },
        ":disabled": {
          backgroundColor: "#D7D7D7",
          color: theme2.palette.common.white
        }
      }, props.sx),
      children
    })
  );
};

// src/components/ButtonSmall/OutlineGrey/index.tsx
var import_material6 = require("@mui/material");
var import_jsx_runtime6 = require("react/jsx-runtime");
var ButtonSmallOutlineGrey = (_a) => {
  var _b = _a, {
    children
  } = _b, props = __objRest(_b, [
    "children"
  ]);
  const theme2 = (0, import_material6.useTheme)();
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    ButtonSmall.Default,
    __spreadProps(__spreadValues({}, props), {
      sx: __spreadValues({
        backgroundColor: theme2.palette.common.white,
        borderColor: theme2.palette.info.main,
        color: theme2.palette.info.main,
        ":hover": {
          backgroundColor: "#E8EDFF"
        },
        ":disabled": {
          backgroundColor: "#D7D7D7",
          color: theme2.palette.common.white,
          borderColor: "#D7D7D7"
        }
      }, props.sx),
      children
    })
  );
};

// src/components/ButtonSmall/Primary/index.tsx
var import_material7 = require("@mui/material");
var import_jsx_runtime7 = require("react/jsx-runtime");
var ButtonSmallPrimary = (_a) => {
  var _b = _a, {
    children
  } = _b, props = __objRest(_b, [
    "children"
  ]);
  const theme2 = (0, import_material7.useTheme)();
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    ButtonSmall.Default,
    __spreadProps(__spreadValues({}, props), {
      sx: __spreadValues({
        backgroundColor: theme2.palette.primary.main,
        borderColor: "inherit",
        color: theme2.palette.common.white,
        ":hover": {
          backgroundColor: theme2.palette.primary.dark
        },
        ":disabled": {
          backgroundColor: "#D7D7D7",
          color: theme2.palette.common.white
        }
      }, props.sx),
      children
    })
  );
};

// src/components/ButtonSmall/Success/index.tsx
var import_material8 = require("@mui/material");
var import_jsx_runtime8 = require("react/jsx-runtime");
var ButtonSmallSuccess = (_a) => {
  var _b = _a, {
    children
  } = _b, props = __objRest(_b, [
    "children"
  ]);
  const theme2 = (0, import_material8.useTheme)();
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    ButtonSmall.Default,
    __spreadProps(__spreadValues({}, props), {
      sx: __spreadValues({
        backgroundColor: theme2.palette.success.main,
        borderColor: "inherit",
        color: theme2.palette.common.white,
        "&:hover": {
          backgroundColor: theme2.palette.success.dark
        },
        ":disabled": {
          backgroundColor: "#D7D7D7",
          color: theme2.palette.common.white
        }
      }, props.sx),
      children
    })
  );
};

// src/components/ButtonSmall/Warning/index.tsx
var import_material9 = require("@mui/material");
var import_jsx_runtime9 = require("react/jsx-runtime");
var ButtonSmallWarning = (_a) => {
  var _b = _a, {
    children
  } = _b, props = __objRest(_b, [
    "children"
  ]);
  const theme2 = (0, import_material9.useTheme)();
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
    ButtonSmall.Default,
    __spreadProps(__spreadValues({}, props), {
      sx: __spreadValues({
        backgroundColor: theme2.palette.warning.main,
        borderColor: "inherit",
        color: theme2.palette.common.white,
        "&:hover": {
          backgroundColor: theme2.palette.warning.dark
        },
        ":disabled": {
          backgroundColor: "#D7D7D7",
          color: theme2.palette.common.white
        }
      }, props.sx),
      children
    })
  );
};

// src/components/ButtonSmall/index.ts
var ButtonSmall = {
  Default: ButtonSmallDefault,
  Primary: ButtonSmallPrimary,
  Error: ButtonSmallError,
  Warning: ButtonSmallWarning,
  Success: ButtonSmallSuccess,
  OutlineGrey: ButtonSmallOutlineGrey
};

// src/components/TextField/Default/index.tsx
var import_material10 = require("@mui/material");
var import_react = require("react");

// src/utils/masks.ts
var masks = ({ type, data }) => {
  switch (type) {
    case "cpf":
      return data.replace(/\D/g, "").replace(/(\d{3})(\d)/, "$1.$2").replace(/(\d{3})(\d)/, "$1.$2").replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    case "cnpj":
      return data.replace(/\D/g, "").replace(/(\d{2})(\d)/, "$1.$2").replace(/(\d{3})(\d)/, "$1.$2").replace(/(\d{3})(\d)/, "$1/$2").replace(/(\d{4})(\d)/, "$1-$2").replace(/(-\d{2})\d+?$/, "$1");
    case "cep":
      return data.replace(/\D/g, "").replace(/(\d{5})(\d)/, "$1-$2").replace(/(-\d{3})\d+?$/, "$1");
    case "phone":
      return data.replace(/\D/g, "").replace(/(\d{2})(\d)/, "($1) $2").replace(/(\d{5})(\d)/, "$1-$2").replace(/(-\d{4})(\d)/, "$1");
    case "date":
      return data.replace(/\D/g, "").replace(/(\d{2})(\d)/, "$1/$2").replace(/(\d{2})(\d)/, "$1/$2").replace(/(\d{4})\d+?$/, "$1");
    case "currency":
      return data.replace(/\D/g, "").replace(/(\d{1,})(\d{2})$/, "$1,$2").replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    case "code":
      return data.replace(/\D/g, "").slice(0, 6);
    default:
      return data;
  }
};

// src/components/TextField/Default/index.tsx
var import_jsx_runtime10 = require("react/jsx-runtime");
var TextFieldDefault = (0, import_react.forwardRef)((_a, ref) => {
  var _b = _a, { mask } = _b, props = __objRest(_b, ["mask"]);
  const theme2 = (0, import_material10.useTheme)();
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
    import_material10.TextField,
    __spreadProps(__spreadValues({}, props), {
      ref,
      sx: __spreadValues({
        "& fieldset": { border: "none" },
        width: "100%",
        backgroundColor: props.disabled ? "#D7D7D7" : "#FAFAFA",
        borderRadius: "14px",
        borderWidth: 1,
        borderStyle: "solid",
        border: (props == null ? void 0 : props.error) ? `1px solid ${theme2.palette.error.main}` : "1px solid #E0E0E0",
        transition: "all 0.3s",
        ":hover": {
          backgroundColor: props.disabled ? "#D7D7D7" : "#F5F5F5"
        }
      }, props.sx),
      onChange: (event) => {
        var _a2;
        if (mask) {
          event.target.value = masks({
            data: event.target.value,
            type: mask
          });
        }
        (_a2 = props.onChange) == null ? void 0 : _a2.call(props, event);
      }
    })
  );
});
TextFieldDefault.displayName = "Default";

// src/components/TextField/ExternalLabel/index.tsx
var import_icons_material = require("@mui/icons-material");
var import_material11 = require("@mui/material");
var import_react2 = require("react");
var import_react_router_dom = require("react-router-dom");
var import_jsx_runtime11 = require("react/jsx-runtime");
var TextFieldExternalLabel = (0, import_react2.forwardRef)(
  (_a, ref) => {
    var _b = _a, {
      containerProps,
      label,
      visibilityChange = false,
      labelProps,
      errorMessage
    } = _b, props = __objRest(_b, [
      "containerProps",
      "label",
      "visibilityChange",
      "labelProps",
      "errorMessage"
    ]);
    const theme2 = (0, import_material11.useTheme)();
    const [canSeeValue, setCanSeeValue] = (0, import_react2.useState)(label !== "Senha");
    const handleChangeCanSeeValue = () => {
      setCanSeeValue((prev) => !prev);
    };
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
      import_material11.Stack,
      __spreadProps(__spreadValues({}, containerProps), {
        sx: {
          gap: 1
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
            import_material11.Stack,
            {
              sx: {
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center"
              },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
                  import_material11.InputLabel,
                  __spreadProps(__spreadValues({}, labelProps), {
                    sx: {
                      fontSize: 16,
                      fontWeight: 600,
                      color: props.error ? theme2.palette.error.main : theme2.palette.text.primary
                    },
                    htmlFor: label,
                    children: label
                  })
                ),
                label === "Senha" && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
                  import_material11.Box,
                  {
                    component: import_react_router_dom.Link,
                    sx: {
                      color: "#000"
                    },
                    to: "/acesso/recuperar",
                    children: "Esqueci minha senha"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
            TextField.Default,
            __spreadProps(__spreadValues({}, props), {
              ref,
              id: label,
              type: canSeeValue ? "text" : "password",
              sx: __spreadValues({
                "& ::placeholder": {
                  color: theme2.palette.info.main,
                  opacity: 1
                }
              }, props.sx),
              InputProps: {
                endAdornment: visibilityChange && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_material11.InputAdornment, { position: "end", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
                  import_material11.IconButton,
                  {
                    "aria-label": "Altere a visibilidade",
                    onClick: handleChangeCanSeeValue,
                    edge: "end",
                    children: canSeeValue ? /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_icons_material.VisibilityOff, {}) : /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_icons_material.Visibility, {})
                  }
                ) })
              }
            })
          ),
          (props == null ? void 0 : props.error) && /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
            import_material11.Stack,
            {
              sx: {
                color: theme2.palette.error.main,
                flexDirection: "row",
                gap: 1
              },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
                  import_icons_material.ErrorOutline,
                  {
                    sx: {
                      width: 16,
                      height: 16
                    }
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
                  import_material11.Typography,
                  {
                    variant: "caption",
                    sx: {
                      fontSize: 12
                    },
                    children: errorMessage
                  }
                )
              ]
            }
          )
        ]
      })
    );
  }
);
TextFieldExternalLabel.displayName = "External Label";

// src/components/TextField/Icon/index.tsx
var import_material12 = require("@mui/material");
var import_react3 = require("react");
var import_jsx_runtime12 = require("react/jsx-runtime");
var TextFieldIcon = (0, import_react3.forwardRef)(
  (_a, ref) => {
    var _b = _a, { icon } = _b, props = __objRest(_b, ["icon"]);
    var _a2;
    const theme2 = (0, import_material12.useTheme)();
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
      TextField.Default,
      __spreadProps(__spreadValues({}, props), {
        ref,
        sx: __spreadValues({
          "& ::placeholder": {
            color: theme2.palette.info.main,
            fontWeight: 600,
            opacity: 1
          }
        }, props.sx),
        InputProps: __spreadValues({
          sx: __spreadValues({
            height: 52
          }, (_a2 = props.InputProps) == null ? void 0 : _a2.sx),
          startAdornment: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_material12.InputAdornment, { position: "start", children: icon })
        }, props.InputProps)
      })
    );
  }
);
TextFieldIcon.displayName = "Icon";

// src/components/TextField/InternalLabel/index.tsx
var import_icons_material2 = require("@mui/icons-material");
var import_material13 = require("@mui/material");
var import_react4 = require("react");
var import_jsx_runtime13 = require("react/jsx-runtime");
var TextFieldInternalLabel = (0, import_react4.forwardRef)((_a, ref) => {
  var _b = _a, { errorMessage } = _b, props = __objRest(_b, ["errorMessage"]);
  const theme2 = (0, import_material13.useTheme)();
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
    import_material13.FormControl,
    {
      fullWidth: true,
      sx: {
        display: "flex",
        flexDirection: "column",
        gap: 1
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          TextField.Default,
          __spreadProps(__spreadValues({}, props), {
            ref,
            variant: "filled",
            sx: __spreadValues({
              "& .MuiFormLabel-root": {
                color: props.error ? theme2.palette.error.main : theme2.palette.info.main,
                fontWeight: 600
              },
              "& .MuiInputBase-root": {
                borderRadius: "14px",
                backgroundColor: "transparent"
              },
              ":focus": {
                "& .MuiFormLabel-root": {
                  color: props.error ? theme2.palette.error.main : theme2.palette.info.main
                }
              }
            }, props.sx),
            InputProps: __spreadValues({
              disableUnderline: true
            }, props.InputProps)
          })
        ),
        (props == null ? void 0 : props.error) && /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
          import_material13.Stack,
          {
            sx: {
              color: theme2.palette.error.main,
              flexDirection: "row",
              gap: 1
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                import_icons_material2.ErrorOutline,
                {
                  sx: {
                    width: 16,
                    height: 16
                  }
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                import_material13.Typography,
                {
                  variant: "caption",
                  sx: {
                    fontSize: 12
                  },
                  children: errorMessage
                }
              )
            ]
          }
        )
      ]
    }
  );
});
TextFieldInternalLabel.displayName = "Internal Label";

// src/components/TextField/index.ts
var TextField = {
  Default: TextFieldDefault,
  Icon: TextFieldIcon,
  ExternalLabel: TextFieldExternalLabel,
  InternalLabel: TextFieldInternalLabel
};

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
  warning: "#EF6C00",
  warningDark: "#D86100",
  textPrimary: "#2b2b2b",
  textSecondary: "#D7D7D7",
  info: "#7A8A9D"
};
var fonts = {
  default: "Figtree, sans-serif"
};

// src/styles/theme.ts
var import_material14 = require("@mui/material");
var theme = (0, import_material14.createTheme)({
  palette: {
    primary: {
      main: colors.primary,
      dark: colors.primaryDark
    },
    secondary: {
      main: colors.secondary,
      dark: colors.secondaryDark
    },
    common: {
      white: "#FFFFFF",
      black: "#000000"
    },
    error: {
      main: colors.error,
      dark: colors.errorDark
    },
    success: {
      main: colors.success,
      dark: colors.successDark
    },
    warning: {
      main: colors.warning,
      dark: colors.warningDark
    },
    text: {
      primary: colors.textPrimary,
      secondary: colors.textSecondary
    },
    info: {
      main: colors.info
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
  ButtonSmall,
  TextField,
  theme
});

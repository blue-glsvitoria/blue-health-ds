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
  semibold: 600,
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

// src/components/Button/Default/index.tsx
import {
  Button as ButtonMUI
} from "@mui/material";
import { jsx } from "react/jsx-runtime";
function ButtonDefault(_a) {
  var _b = _a, { children } = _b, props = __objRest(_b, ["children"]);
  return /* @__PURE__ */ jsx(
    ButtonMUI,
    __spreadProps(__spreadValues({}, props), {
      sx: __spreadValues({
        borderRadius: radii.md,
        px: space[4],
        py: space[2],
        borderStyle: "solid",
        borderWidth: 2,
        fontSize: fontSizes.md,
        fontWeight: fontWeights.bold,
        transition: "all 0.3s",
        textTransform: "none",
        width: "100%"
      }, props.sx),
      children
    })
  );
}

// src/components/Button/OutlineGrey/index.tsx
import { useTheme } from "@mui/material";
import { jsx as jsx2 } from "react/jsx-runtime";
var ButtonOutlineGrey = (_a) => {
  var _b = _a, {
    children
  } = _b, props = __objRest(_b, [
    "children"
  ]);
  const theme2 = useTheme();
  return /* @__PURE__ */ jsx2(
    Button.Default,
    __spreadProps(__spreadValues({}, props), {
      sx: __spreadValues({
        backgroundColor: "#FAFAFA",
        borderColor: theme2.palette.info.main,
        color: theme2.palette.info.main,
        "&:hover": {
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

// src/components/Button/Primary/index.tsx
import { useTheme as useTheme2 } from "@mui/material";
import { jsx as jsx3 } from "react/jsx-runtime";
var ButtonPrimary = (_a) => {
  var _b = _a, { children } = _b, props = __objRest(_b, ["children"]);
  const theme2 = useTheme2();
  return /* @__PURE__ */ jsx3(
    Button.Default,
    __spreadProps(__spreadValues({}, props), {
      sx: __spreadValues({
        backgroundColor: theme2.palette.primary.main,
        color: theme2.palette.common.white,
        borderColor: "inherit",
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
import {
  Button as ButtonMUI2
} from "@mui/material";
import { jsx as jsx4 } from "react/jsx-runtime";
var ButtonSmallDefault = (_a) => {
  var _b = _a, {
    children
  } = _b, props = __objRest(_b, [
    "children"
  ]);
  return /* @__PURE__ */ jsx4(
    ButtonMUI2,
    __spreadProps(__spreadValues({}, props), {
      sx: __spreadValues({
        borderRadius: radii.md,
        px: space[4],
        fontSize: fontSizes.sm,
        fontWeight: fontWeights.bold,
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
import { useTheme as useTheme3 } from "@mui/material";
import { jsx as jsx5 } from "react/jsx-runtime";
var ButtonSmallError = (_a) => {
  var _b = _a, {
    children
  } = _b, props = __objRest(_b, [
    "children"
  ]);
  const theme2 = useTheme3();
  return /* @__PURE__ */ jsx5(
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
import { useTheme as useTheme4 } from "@mui/material";
import { jsx as jsx6 } from "react/jsx-runtime";
var ButtonSmallOutlineGrey = (_a) => {
  var _b = _a, {
    children
  } = _b, props = __objRest(_b, [
    "children"
  ]);
  const theme2 = useTheme4();
  return /* @__PURE__ */ jsx6(
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
import { useTheme as useTheme5 } from "@mui/material";
import { jsx as jsx7 } from "react/jsx-runtime";
var ButtonSmallPrimary = (_a) => {
  var _b = _a, {
    children
  } = _b, props = __objRest(_b, [
    "children"
  ]);
  const theme2 = useTheme5();
  return /* @__PURE__ */ jsx7(
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
import { useTheme as useTheme6 } from "@mui/material";
import { jsx as jsx8 } from "react/jsx-runtime";
var ButtonSmallSuccess = (_a) => {
  var _b = _a, {
    children
  } = _b, props = __objRest(_b, [
    "children"
  ]);
  const theme2 = useTheme6();
  return /* @__PURE__ */ jsx8(
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
import { useTheme as useTheme7 } from "@mui/material";
import { jsx as jsx9 } from "react/jsx-runtime";
var ButtonSmallWarning = (_a) => {
  var _b = _a, {
    children
  } = _b, props = __objRest(_b, [
    "children"
  ]);
  const theme2 = useTheme7();
  return /* @__PURE__ */ jsx9(
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

// src/components/Logo/index.tsx
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

// src/assets/icon.svg
var icon_default = "./icon-YVYQOXLC.svg";

// src/assets/logo.svg
var logo_default = "./logo-EOLDLCYN.svg";

// src/components/Logo/index.tsx
import { jsx as jsx10 } from "react/jsx-runtime";
var Logo = ({ variant = "standard" }) => {
  return /* @__PURE__ */ jsx10(Link, { to: "/", draggable: false, children: /* @__PURE__ */ jsx10(
    Box,
    {
      sx: {
        display: "flex",
        justifyCOntent: "center",
        alignItems: "center"
      },
      children: variant === "standard" ? /* @__PURE__ */ jsx10(
        Box,
        {
          component: "img",
          src: logo_default,
          alt: "Logo da blue",
          sx: { height: 38, width: 112 },
          draggable: false
        }
      ) : /* @__PURE__ */ jsx10(
        Box,
        {
          component: "img",
          src: icon_default,
          alt: "\xCDcone da blue",
          sx: { height: 38, width: 33 },
          draggable: false
        }
      )
    }
  ) });
};

// src/components/NavLink/index.tsx
import { ChevronRight } from "@mui/icons-material";
import { Box as Box2, Collapse, Typography, useTheme as useTheme8 } from "@mui/material";
import { useEffect, useState } from "react";
import * as RouterDOM from "react-router-dom";
import { jsx as jsx11, jsxs } from "react/jsx-runtime";
var NavLink2 = ({
  icon = "",
  label = "",
  to = "",
  subItens: items = [],
  variant = "standard",
  onClick
}) => {
  const theme2 = useTheme8();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = RouterDOM.useLocation();
  useEffect(() => {
    var _a;
    if ((_a = items == null ? void 0 : items.some) == null ? void 0 : _a.call(items, (item) => {
      var _a2, _b;
      return (_b = (_a2 = location == null ? void 0 : location.pathname) == null ? void 0 : _a2.includes) == null ? void 0 : _b.call(_a2, item == null ? void 0 : item.to);
    })) {
      setIsCollapsed(true);
    } else {
      setIsCollapsed(false);
    }
  }, [items, location == null ? void 0 : location.pathname]);
  const handleCollapse = () => {
    setIsCollapsed((prev) => !prev);
  };
  const handleClickIcon = () => {
    onClick == null ? void 0 : onClick();
    if (!isCollapsed) {
      setIsCollapsed(true);
    }
  };
  if (items.length > 0) {
    return /* @__PURE__ */ jsxs(
      Box2,
      {
        sx: {
          width: "100%",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden"
        },
        children: [
          /* @__PURE__ */ jsxs(
            Box2,
            {
              onClick: variant === "icon" ? handleClickIcon : handleCollapse,
              sx: {
                width: "100%",
                height: 24,
                px: space[4],
                display: "flex",
                alignItems: "center",
                gap: space[4],
                cursor: "pointer",
                color: isCollapsed ? theme2.palette.primary.main : theme2.palette.text.primary,
                fontSize: fontSizes.sm,
                fontWeight: isCollapsed ? fontWeights.semibold : fontWeights.regular,
                transition: "all 0.1s ease-in-out",
                whiteSpace: "nowrap",
                userSelect: "none",
                ":hover": {
                  color: theme2.palette.primary.main
                },
                "> *": {
                  marginRight: variant === "icon" ? "auto" : 0
                }
              },
              children: [
                !!icon && /* @__PURE__ */ jsx11(Box2, { sx: { width: 24, height: 24 }, children: icon }),
                variant === "standard" && !!label && label,
                /* @__PURE__ */ jsx11(
                  Box2,
                  {
                    sx: {
                      display: variant === "icon" ? "none" : "flex",
                      justifyContent: "end",
                      width: "100%"
                    },
                    children: /* @__PURE__ */ jsx11(
                      Box2,
                      {
                        sx: {
                          backgroundColor: isCollapsed ? theme2.palette.primary.main : "transparent",
                          color: isCollapsed ? "white" : theme2.palette.text.primary,
                          borderRadius: 1,
                          padding: 1 / 7,
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          transition: "all 0.1s ease-in-out"
                        },
                        children: /* @__PURE__ */ jsx11(
                          ChevronRight,
                          {
                            fontSize: "small",
                            style: {
                              transform: isCollapsed ? "rotate(90deg)" : "rotate(0deg)",
                              transition: "all 0.1s ease"
                            }
                          }
                        )
                      }
                    )
                  }
                )
              ]
            }
          ),
          variant === "standard" && /* @__PURE__ */ jsx11(
            Collapse,
            {
              in: isCollapsed,
              sx: {
                userSelect: "none"
              },
              children: /* @__PURE__ */ jsx11(
                Box2,
                {
                  sx: {
                    display: "flex",
                    flexDirection: "column",
                    gap: space[6],
                    marginTop: space[4]
                  },
                  children: items == null ? void 0 : items.map((item, index) => /* @__PURE__ */ jsx11(
                    RouterDOM.NavLink,
                    {
                      to: item == null ? void 0 : item.to,
                      style: { textDecoration: "none" },
                      draggable: false,
                      children: ({ isActive }) => {
                        return /* @__PURE__ */ jsxs(
                          Box2,
                          {
                            sx: {
                              height: 24,
                              width: "100%",
                              px: space[8],
                              display: "flex",
                              justifyContent: "start",
                              alignItems: "center",
                              gap: 1,
                              color: isActive ? theme2.palette.primary.main : theme2.palette.text.primary,
                              fontSize: 14,
                              fontWeight: isActive ? 600 : 400,
                              transition: "all 0.1s ease-in-out",
                              whiteSpace: "nowrap",
                              userSelect: "none",
                              ":hover": {
                                color: theme2.palette.primary.main
                              }
                            },
                            children: [
                              !!(item == null ? void 0 : item.icon) && /* @__PURE__ */ jsx11(Box2, { sx: { height: 24, width: 24 }, children: item == null ? void 0 : item.icon }),
                              variant === "standard" && !!(item == null ? void 0 : item.label) && (item == null ? void 0 : item.label)
                            ]
                          }
                        );
                      }
                    },
                    index
                  ))
                }
              )
            }
          )
        ]
      }
    );
  }
  return /* @__PURE__ */ jsx11(
    Box2,
    {
      sx: {
        borderRadius: radii.md,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        userSelect: "none",
        width: "100%"
      },
      children: /* @__PURE__ */ jsx11(
        RouterDOM.NavLink,
        {
          to,
          style: { textDecoration: "none" },
          draggable: false,
          children: ({ isActive }) => {
            console.log(isActive);
            return /* @__PURE__ */ jsxs(
              Box2,
              {
                sx: {
                  height: 24,
                  width: "100%",
                  px: space[2],
                  display: "flex",
                  alignItems: "center",
                  gap: space[2],
                  color: isActive ? theme2.palette.primary.main : theme2.palette.text.primary,
                  fontWeight: isActive ? fontWeights.semibold : fontWeights.regular,
                  transition: "all 0.1s ease-in-out",
                  whiteSpace: "nowrap",
                  ":hover": {
                    color: theme2.palette.primary.main
                  },
                  "> *": {
                    mr: variant === "icon" ? "auto" : 0
                  }
                },
                children: [
                  !!icon && /* @__PURE__ */ jsx11(Box2, { sx: { width: 24, height: 24 }, children: icon }),
                  variant === "standard" && !!label && /* @__PURE__ */ jsx11(
                    Typography,
                    {
                      variant: "body2",
                      sx: {
                        fontSize: fontSizes.sm,
                        fontWeight: "inherit"
                      },
                      children: label
                    }
                  )
                ]
              }
            );
          }
        }
      )
    }
  );
};

// src/components/TextField/Default/index.tsx
import {
  TextField as TextFieldMUI,
  useTheme as useTheme9
} from "@mui/material";
import { forwardRef } from "react";

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
import { jsx as jsx12 } from "react/jsx-runtime";
var TextFieldDefault = forwardRef((_a, ref) => {
  var _b = _a, { mask } = _b, props = __objRest(_b, ["mask"]);
  const theme2 = useTheme9();
  return /* @__PURE__ */ jsx12(
    TextFieldMUI,
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
import { ErrorOutline, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box as Box3,
  IconButton,
  InputAdornment,
  InputLabel,
  Stack,
  Typography as Typography2,
  useTheme as useTheme10
} from "@mui/material";
import { forwardRef as forwardRef2, useState as useState2 } from "react";
import { Link as Link2 } from "react-router-dom";
import { jsx as jsx13, jsxs as jsxs2 } from "react/jsx-runtime";
var TextFieldExternalLabel = forwardRef2(
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
    const theme2 = useTheme10();
    const [canSeeValue, setCanSeeValue] = useState2(label !== "Senha");
    const handleChangeCanSeeValue = () => {
      setCanSeeValue((prev) => !prev);
    };
    return /* @__PURE__ */ jsxs2(
      Stack,
      __spreadProps(__spreadValues({}, containerProps), {
        sx: {
          gap: 1
        },
        children: [
          /* @__PURE__ */ jsxs2(
            Stack,
            {
              sx: {
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center"
              },
              children: [
                /* @__PURE__ */ jsx13(
                  InputLabel,
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
                label === "Senha" && /* @__PURE__ */ jsx13(
                  Box3,
                  {
                    component: Link2,
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
          /* @__PURE__ */ jsx13(
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
                endAdornment: visibilityChange && /* @__PURE__ */ jsx13(InputAdornment, { position: "end", children: /* @__PURE__ */ jsx13(
                  IconButton,
                  {
                    "aria-label": "Altere a visibilidade",
                    onClick: handleChangeCanSeeValue,
                    edge: "end",
                    children: canSeeValue ? /* @__PURE__ */ jsx13(VisibilityOff, {}) : /* @__PURE__ */ jsx13(Visibility, {})
                  }
                ) })
              }
            })
          ),
          (props == null ? void 0 : props.error) && /* @__PURE__ */ jsxs2(
            Stack,
            {
              sx: {
                color: theme2.palette.error.main,
                flexDirection: "row",
                gap: 1
              },
              children: [
                /* @__PURE__ */ jsx13(
                  ErrorOutline,
                  {
                    sx: {
                      width: 16,
                      height: 16
                    }
                  }
                ),
                /* @__PURE__ */ jsx13(
                  Typography2,
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
import { InputAdornment as InputAdornment2, useTheme as useTheme11 } from "@mui/material";
import { forwardRef as forwardRef3 } from "react";
import { jsx as jsx14 } from "react/jsx-runtime";
var TextFieldIcon = forwardRef3(
  (_a, ref) => {
    var _b = _a, { icon } = _b, props = __objRest(_b, ["icon"]);
    var _a2;
    const theme2 = useTheme11();
    return /* @__PURE__ */ jsx14(
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
          startAdornment: /* @__PURE__ */ jsx14(InputAdornment2, { position: "start", children: icon })
        }, props.InputProps)
      })
    );
  }
);
TextFieldIcon.displayName = "Icon";

// src/components/TextField/InternalLabel/index.tsx
import { ErrorOutline as ErrorOutline2 } from "@mui/icons-material";
import { FormControl, Stack as Stack2, Typography as Typography3, useTheme as useTheme12 } from "@mui/material";
import { forwardRef as forwardRef4 } from "react";
import { jsx as jsx15, jsxs as jsxs3 } from "react/jsx-runtime";
var TextFieldInternalLabel = forwardRef4((_a, ref) => {
  var _b = _a, { errorMessage } = _b, props = __objRest(_b, ["errorMessage"]);
  const theme2 = useTheme12();
  return /* @__PURE__ */ jsxs3(
    FormControl,
    {
      fullWidth: true,
      sx: {
        display: "flex",
        flexDirection: "column",
        gap: 1
      },
      children: [
        /* @__PURE__ */ jsx15(
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
        (props == null ? void 0 : props.error) && /* @__PURE__ */ jsxs3(
          Stack2,
          {
            sx: {
              color: theme2.palette.error.main,
              flexDirection: "row",
              gap: 1
            },
            children: [
              /* @__PURE__ */ jsx15(
                ErrorOutline2,
                {
                  sx: {
                    width: 16,
                    height: 16
                  }
                }
              ),
              /* @__PURE__ */ jsx15(
                Typography3,
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

// src/styles/theme.ts
import { createTheme } from "@mui/material";
var theme = createTheme({
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
export {
  Button,
  ButtonSmall,
  Logo,
  NavLink2 as NavLink,
  TextField,
  theme
};

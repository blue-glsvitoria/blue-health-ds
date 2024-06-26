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

// src/components/ButtonSmall/ErrorOutline/index.tsx
import { useTheme as useTheme4 } from "@mui/material";
import { jsx as jsx6 } from "react/jsx-runtime";
var ButtonSmallErrorOutline = (_a) => {
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
        borderColor: theme2.palette.error.main,
        color: theme2.palette.error.main,
        "&:hover": {
          backgroundColor: theme2.palette.error.main,
          color: theme2.palette.common.white
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
import { useTheme as useTheme5 } from "@mui/material";
import { jsx as jsx7 } from "react/jsx-runtime";
var ButtonSmallOutlineGrey = (_a) => {
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
import { useTheme as useTheme6 } from "@mui/material";
import { jsx as jsx8 } from "react/jsx-runtime";
var ButtonSmallPrimary = (_a) => {
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

// src/components/ButtonSmall/PrimaryOutline/index.tsx
import { useTheme as useTheme7 } from "@mui/material";
import { jsx as jsx9 } from "react/jsx-runtime";
var ButtonSmallPrimaryOutline = (_a) => {
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
        backgroundColor: theme2.palette.common.white,
        borderColor: theme2.palette.primary.main,
        color: theme2.palette.primary.main,
        ":hover": {
          backgroundColor: theme2.palette.primary.main,
          color: theme2.palette.common.white
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
import { useTheme as useTheme8 } from "@mui/material";
import { jsx as jsx10 } from "react/jsx-runtime";
var ButtonSmallSuccess = (_a) => {
  var _b = _a, {
    children
  } = _b, props = __objRest(_b, [
    "children"
  ]);
  const theme2 = useTheme8();
  return /* @__PURE__ */ jsx10(
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
import { useTheme as useTheme9 } from "@mui/material";
import { jsx as jsx11 } from "react/jsx-runtime";
var ButtonSmallWarning = (_a) => {
  var _b = _a, {
    children
  } = _b, props = __objRest(_b, [
    "children"
  ]);
  const theme2 = useTheme9();
  return /* @__PURE__ */ jsx11(
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
  PrimaryOutline: ButtonSmallPrimaryOutline,
  Error: ButtonSmallError,
  ErrorOutline: ButtonSmallErrorOutline,
  Warning: ButtonSmallWarning,
  Success: ButtonSmallSuccess,
  OutlineGrey: ButtonSmallOutlineGrey
};

// src/components/IconButton/index.tsx
import {
  IconButton as IconButtonMUI,
  useTheme as useTheme10
} from "@mui/material";
import { jsx as jsx12 } from "react/jsx-runtime";
var IconButton = (_a) => {
  var _b = _a, {
    icon,
    active = false
  } = _b, props = __objRest(_b, [
    "icon",
    "active"
  ]);
  const theme2 = useTheme10();
  return /* @__PURE__ */ jsx12(
    IconButtonMUI,
    __spreadProps(__spreadValues({}, props), {
      sx: {
        width: 32,
        height: 32,
        borderRadius: radii.sm,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#E8EDFF",
        background: active ? theme2.palette.primary.main : theme2.palette.common.white,
        color: active ? theme2.palette.common.white : "#94ADFF",
        p: space[1],
        transition: "all 0.3s",
        ":hover": {
          background: theme2.palette.common.white,
          borderColor: theme2.palette.primary.main,
          color: theme2.palette.primary.main
        }
      },
      children: icon
    })
  );
};

// src/components/Logo/index.tsx
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

// src/assets/icon.svg
var icon_default = "./icon-YVYQOXLC.svg";

// src/assets/logo.svg
var logo_default = "./logo-EOLDLCYN.svg";

// src/components/Logo/index.tsx
import { jsx as jsx13 } from "react/jsx-runtime";
var Logo = ({ variant = "standard" }) => {
  return /* @__PURE__ */ jsx13(Link, { to: "/", draggable: false, children: /* @__PURE__ */ jsx13(
    Box,
    {
      sx: {
        display: "flex",
        justifyCOntent: "center",
        alignItems: "center"
      },
      children: variant === "standard" ? /* @__PURE__ */ jsx13(
        Box,
        {
          component: "img",
          src: logo_default,
          alt: "Logo da blue",
          sx: { height: 38, width: 112 },
          draggable: false
        }
      ) : /* @__PURE__ */ jsx13(
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
import { Box as Box2, Collapse, Typography, useTheme as useTheme11 } from "@mui/material";
import { useEffect, useState } from "react";
import * as RouterDOM from "react-router-dom";
import { jsx as jsx14, jsxs } from "react/jsx-runtime";
var NavLink2 = ({
  icon = "",
  label = "",
  to = "",
  subItens: items = [],
  variant = "standard",
  onClick
}) => {
  const theme2 = useTheme11();
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
                !!icon && /* @__PURE__ */ jsx14(Box2, { sx: { width: 24, height: 24 }, children: icon }),
                variant === "standard" && !!label && label,
                /* @__PURE__ */ jsx14(
                  Box2,
                  {
                    sx: {
                      display: variant === "icon" ? "none" : "flex",
                      justifyContent: "end",
                      width: "100%"
                    },
                    children: /* @__PURE__ */ jsx14(
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
                        children: /* @__PURE__ */ jsx14(
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
          variant === "standard" && /* @__PURE__ */ jsx14(
            Collapse,
            {
              in: isCollapsed,
              sx: {
                userSelect: "none"
              },
              children: /* @__PURE__ */ jsx14(
                Box2,
                {
                  sx: {
                    display: "flex",
                    flexDirection: "column",
                    gap: space[6],
                    marginTop: space[4]
                  },
                  children: items == null ? void 0 : items.map((item, index) => /* @__PURE__ */ jsx14(
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
                              !!(item == null ? void 0 : item.icon) && /* @__PURE__ */ jsx14(Box2, { sx: { height: 24, width: 24 }, children: item == null ? void 0 : item.icon }),
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
  return /* @__PURE__ */ jsx14(
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
      children: /* @__PURE__ */ jsx14(
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
                  !!icon && /* @__PURE__ */ jsx14(Box2, { sx: { width: 24, height: 24 }, children: icon }),
                  variant === "standard" && !!label && /* @__PURE__ */ jsx14(
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

// src/components/ProfilePhoto/index.tsx
import { Avatar } from "@mui/material";

// src/assets/profile.svg
var profile_default = "./profile-QQJZGDJN.svg";

// src/components/ProfilePhoto/index.tsx
import { jsx as jsx15 } from "react/jsx-runtime";
var ProfilePhoto = (_a) => {
  var _b = _a, { src } = _b, props = __objRest(_b, ["src"]);
  const sxStyles = {
    width: 42,
    height: 42,
    borderRadius: radii.sm
  };
  return /* @__PURE__ */ jsx15(
    Avatar,
    __spreadProps(__spreadValues({}, props), {
      src: src ? src : profile_default,
      sx: __spreadValues(__spreadValues({}, sxStyles), props.sx)
    })
  );
};

// src/components/ProgressBar/Item/index.tsx
import { TaskAlt } from "@mui/icons-material";
import {
  Stack,
  Typography as Typography2,
  useTheme as useTheme12
} from "@mui/material";
import { jsx as jsx16, jsxs as jsxs2 } from "react/jsx-runtime";
var ProgressBarItem = (_a) => {
  var _b = _a, {
    variant,
    label,
    step
  } = _b, props = __objRest(_b, [
    "variant",
    "label",
    "step"
  ]);
  const theme2 = useTheme12();
  let sxStyles = {};
  switch (variant) {
    case "waiting":
      sxStyles = {
        borderColor: "#94ADFF",
        backgroundColor: "#E8EDFF"
      };
      break;
    case "active":
      sxStyles = {
        borderColor: theme2.palette.primary.main,
        backgroundColor: theme2.palette.primary.main,
        color: theme2.palette.common.white
      };
      break;
    case "completed":
      sxStyles = {
        borderColor: theme2.palette.primary.main,
        backgroundColor: theme2.palette.primary.main,
        color: theme2.palette.common.white
      };
      break;
  }
  return /* @__PURE__ */ jsxs2(
    Stack,
    __spreadProps(__spreadValues({}, props), {
      sx: __spreadValues({
        gap: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "fit-content",
        zIndex: 1
      }, props.sx),
      children: [
        /* @__PURE__ */ jsx16(
          Stack,
          {
            sx: __spreadValues({
              width: 32,
              height: 32,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              borderWidth: 2,
              borderStyle: "solid"
            }, sxStyles),
            children: variant !== "completed" ? step : /* @__PURE__ */ jsx16(
              TaskAlt,
              {
                sx: {
                  width: 18,
                  height: 18
                }
              }
            )
          }
        ),
        /* @__PURE__ */ jsx16(
          Typography2,
          {
            variant: "body1",
            sx: {
              fontWeight: fontWeights.semibold,
              width: "max-content"
            },
            children: label
          }
        )
      ]
    })
  );
};

// src/components/ProgressBar/Root/index.tsx
import { Stack as Stack2, useTheme as useTheme13 } from "@mui/material";
import { Fragment, jsx as jsx17, jsxs as jsxs3 } from "react/jsx-runtime";
var ProgressBarRoot = ({
  steps,
  currentStep = 0
}) => {
  const theme2 = useTheme13();
  const variantSelector = (index) => {
    if (index + 1 < currentStep) {
      return "completed";
    } else if (index + 1 === currentStep) {
      return "active";
    } else {
      return "waiting";
    }
  };
  return /* @__PURE__ */ jsx17(
    Stack2,
    {
      sx: {
        flexDirection: "row",
        alignItems: "start",
        justifyContent: "center"
      },
      children: steps.map((step, index) => {
        console.log(index, variantSelector(index), currentStep);
        return /* @__PURE__ */ jsxs3(Fragment, { children: [
          /* @__PURE__ */ jsx17(
            ProgressBar.Item,
            {
              label: step,
              variant: variantSelector(index),
              step: index + 1
            }
          ),
          index !== steps.length - 1 && /* @__PURE__ */ jsx17(
            Stack2,
            {
              sx: {
                width: "100%",
                height: 4,
                mt: "14px",
                mx: -4,
                zIndex: 0,
                backgroundColor: variantSelector(index + 1) === "waiting" ? "#94ADFF" : theme2.palette.primary.main
              }
            }
          )
        ] });
      })
    }
  );
};

// src/components/ProgressBar/index.ts
var ProgressBar = {
  Item: ProgressBarItem,
  Root: ProgressBarRoot
};

// src/components/Sidebar/Container/index.tsx
import { useCallback, useEffect as useEffect2, useState as useState3 } from "react";
import { Outlet } from "react-router-dom";

// src/components/Sidebar/Context/index.tsx
import { useMediaQuery, useTheme as useTheme14 } from "@mui/material";
import { createContext, useContext, useState as useState2 } from "react";
import { jsx as jsx18 } from "react/jsx-runtime";
var SidebarContext = createContext({});
var SidebarProvider = ({ children }) => {
  const theme2 = useTheme14();
  const downMd = useMediaQuery(theme2.breakpoints.down("md"));
  const initialStatus = !downMd;
  const [sidebarIsOpen, setSidebarIsOpen] = useState2(initialStatus);
  const openSidebar = () => setSidebarIsOpen(true);
  const closeSidebar = () => setSidebarIsOpen(false);
  const toggleSidebar = () => setSidebarIsOpen((prev) => !prev);
  return /* @__PURE__ */ jsx18(
    SidebarContext.Provider,
    {
      value: { openSidebar, closeSidebar, sidebarIsOpen, toggleSidebar },
      children
    }
  );
};
var useSidebar = () => {
  return useContext(SidebarContext);
};

// src/components/Sidebar/Container/index.tsx
import { Fragment as Fragment2, jsx as jsx19, jsxs as jsxs4 } from "react/jsx-runtime";
var Container = ({ navigation }) => {
  const hasPermission = useCallback((module) => !!module, []);
  const { toggleSidebar, sidebarIsOpen } = useSidebar();
  const [isFiltering, setIsFiltering] = useState3(true);
  const [links, setLinks] = useState3(navigation);
  const checkPermissions = useCallback(
    (item) => {
      if (item == null ? void 0 : item.subItens) {
        const filteredSubItens = item.subItens.filter(
          (subItem) => hasPermission(subItem == null ? void 0 : subItem.module)
        );
        return filteredSubItens == null ? void 0 : filteredSubItens.length;
      }
      return hasPermission(item.module);
    },
    [hasPermission]
  );
  useEffect2(() => {
    setLinks((prev) => prev == null ? void 0 : prev.filter(checkPermissions));
    setIsFiltering(false);
  }, [checkPermissions, hasPermission]);
  return /* @__PURE__ */ jsxs4(Fragment2, { children: [
    /* @__PURE__ */ jsxs4(Sidebar.Root, { children: [
      /* @__PURE__ */ jsx19(
        Sidebar.Header,
        {
          logo: /* @__PURE__ */ jsx19(Logo, {}),
          shrunkenLogo: /* @__PURE__ */ jsx19(Logo, { variant: "icon" })
        }
      ),
      /* @__PURE__ */ jsxs4(Sidebar.Content.Wrapper, { children: [
        /* @__PURE__ */ jsx19(Sidebar.Content.Title, { children: "Menu" }),
        /* @__PURE__ */ jsx19(Sidebar.Content.Items, { children: !isFiltering && (links == null ? void 0 : links.map((item, index) => {
          var _a, _b, _c, _d, _e;
          if ((item == null ? void 0 : item.subItens) && ((_a = item == null ? void 0 : item.subItens) == null ? void 0 : _a.length) > 0) {
            return /* @__PURE__ */ jsx19(
              NavLink2,
              {
                onClick: toggleSidebar,
                icon: item.icon,
                label: (_b = item == null ? void 0 : item.label) != null ? _b : "",
                variant: sidebarIsOpen ? "standard" : "icon",
                subItens: (_c = item.subItens) != null ? _c : []
              },
              index
            );
          } else if (item) {
            return /* @__PURE__ */ jsx19(
              NavLink2,
              {
                to: (_d = item == null ? void 0 : item.to) != null ? _d : "",
                icon: item == null ? void 0 : item.icon,
                label: (_e = item == null ? void 0 : item.label) != null ? _e : "",
                variant: sidebarIsOpen ? "standard" : "icon"
              },
              index
            );
          }
        })) })
      ] }),
      /* @__PURE__ */ jsx19(Sidebar.Footer, { text: "Powered by Nuv Tech", shrunkenText: "Nuv Tech" })
    ] }),
    /* @__PURE__ */ jsx19(Sidebar.Page, { children: /* @__PURE__ */ jsx19(Outlet, {}) })
  ] });
};

// src/components/Sidebar/Content/Items/index.tsx
import { Box as Box3 } from "@mui/material";
import { jsx as jsx20 } from "react/jsx-runtime";
var ContentItems = ({ children }) => {
  return /* @__PURE__ */ jsx20(
    Box3,
    {
      component: "nav",
      sx: {
        display: "flex",
        flexDirection: "column",
        gap: 3
      },
      children
    }
  );
};

// src/components/Sidebar/Content/Title/index.tsx
import { Box as Box4, Typography as Typography3 } from "@mui/material";
import { jsx as jsx21 } from "react/jsx-runtime";
var ContentTitle = ({ children }) => {
  const { sidebarIsOpen } = useSidebar();
  return /* @__PURE__ */ jsx21(
    Box4,
    {
      sx: {
        paddingY: 1,
        borderBottom: 1,
        borderColor: "divider",
        display: "flex"
      },
      children: /* @__PURE__ */ jsx21(
        Typography3,
        {
          fontSize: 12,
          sx: {
            marginLeft: sidebarIsOpen ? 0 : 1 / 2,
            transition: "margin 0.2s ease-in"
          },
          children
        }
      )
    }
  );
};

// src/components/Sidebar/Content/Wrapper/index.tsx
import { Box as Box5, useTheme as useTheme15 } from "@mui/material";
import { jsx as jsx22 } from "react/jsx-runtime";
var ContentWrapper = ({ children }) => {
  const theme2 = useTheme15();
  const { sidebarIsOpen } = useSidebar();
  const width = sidebarIsOpen ? 242 : 89;
  return /* @__PURE__ */ jsx22(
    Box5,
    {
      sx: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: 3,
        paddingY: 2,
        paddingX: 3,
        width,
        transition: theme2.transitions.create(["width"], {
          easing: theme2.transitions.easing.sharp,
          duration: theme2.transitions.duration.enteringScreen
        }),
        userSelect: "none"
      },
      children
    }
  );
};

// src/components/Sidebar/Content/index.ts
var Content = {
  Wrapper: ContentWrapper,
  Title: ContentTitle,
  Items: ContentItems
};

// src/components/Sidebar/Footer/index.tsx
import { Box as Box6, useTheme as useTheme16 } from "@mui/material";
import { jsxs as jsxs5 } from "react/jsx-runtime";
var Footer = ({ shrunkenText = "", text = "" }) => {
  const { sidebarIsOpen } = useSidebar();
  const theme2 = useTheme16();
  const width = sidebarIsOpen ? 242 : 89;
  return /* @__PURE__ */ jsxs5(
    Box6,
    {
      sx: {
        width,
        height: 48,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: theme2.palette.primary.main,
        fontSize: 12,
        fontWeight: 600,
        whiteSpace: "nowrap",
        backgroundColor: "background.paper",
        borderTop: 1,
        borderTopColor: "divider",
        userSelect: "none",
        transition: theme2.transitions.create(["width"], {
          easing: theme2.transitions.easing.sharp,
          duration: theme2.transitions.duration.enteringScreen
        })
      },
      children: [
        sidebarIsOpen && text,
        !sidebarIsOpen && shrunkenText
      ]
    }
  );
};

// src/components/Sidebar/Header/index.tsx
import { ChevronRight as ChevronRight2 } from "@mui/icons-material";
import { Box as Box7, useTheme as useTheme17 } from "@mui/material";
import { jsx as jsx23, jsxs as jsxs6 } from "react/jsx-runtime";
var Header = ({ logo, shrunkenLogo }) => {
  const theme2 = useTheme17();
  const { sidebarIsOpen, toggleSidebar } = useSidebar();
  const width = sidebarIsOpen ? 242 : 89;
  return /* @__PURE__ */ jsxs6(
    Box7,
    {
      sx: {
        display: "flex",
        height: 80,
        borderBottom: 1,
        borderColor: "divider",
        justifyContent: sidebarIsOpen ? "initial" : "center",
        paddingX: 3,
        alignItems: "center",
        width,
        transition: theme2.transitions.create(["all"], {
          easing: theme2.transitions.easing.sharp,
          duration: theme2.transitions.duration.enteringScreen
        }),
        background: theme2.palette.common.white,
        overflow: "hidden",
        zIndex: 1,
        userSelect: "none"
      },
      children: [
        sidebarIsOpen ? logo : shrunkenLogo,
        /* @__PURE__ */ jsx23(
          Box7,
          {
            component: "button",
            sx: {
              display: "flex",
              position: "absolute",
              right: 0,
              backgroundColor: theme2.palette.primary.main,
              height: 48,
              alignItems: "center",
              justifyContent: "center",
              color: theme2.palette.common.white,
              borderTopLeftRadius: "10px",
              borderBottomLeftRadius: "10px",
              padding: 0,
              border: 0,
              cursor: "pointer"
            },
            onClick: toggleSidebar,
            children: /* @__PURE__ */ jsx23(
              Box7,
              {
                sx: {
                  transform: sidebarIsOpen ? "rotate(180deg)" : "rotate(0deg)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.2s ease-in-out"
                },
                children: /* @__PURE__ */ jsx23(ChevronRight2, { fontSize: "small" })
              }
            )
          }
        )
      ]
    }
  );
};

// src/components/Sidebar/Page/index.tsx
import { Box as Box8, useTheme as useTheme18 } from "@mui/material";
import { jsx as jsx24 } from "react/jsx-runtime";
var Page = ({ children }) => {
  const theme2 = useTheme18();
  const { sidebarIsOpen } = useSidebar();
  return /* @__PURE__ */ jsx24(
    Box8,
    {
      sx: {
        minHeight: "100vh",
        overflowY: "scroll",
        marginLeft: sidebarIsOpen ? theme2.spacing(30) : theme2.spacing(11),
        transition: theme2.transitions.create(["margin"], {
          easing: theme2.transitions.easing.sharp,
          duration: theme2.transitions.duration.enteringScreen
        })
      },
      children
    }
  );
};

// src/components/Sidebar/Root/index.tsx
import { Drawer } from "@mui/material";
import { jsx as jsx25 } from "react/jsx-runtime";
var Root = ({ children }) => {
  const { sidebarIsOpen } = useSidebar();
  return /* @__PURE__ */ jsx25(Drawer, { variant: "permanent", open: sidebarIsOpen, children });
};

// src/components/Sidebar/index.ts
var Sidebar = {
  Root,
  Page,
  Header,
  Footer,
  Content,
  Container,
  Provider: SidebarProvider
};

// src/components/TagStatus/index.tsx
import {
  Stack as Stack3,
  Typography as Typography4,
  useTheme as useTheme19
} from "@mui/material";
import { jsx as jsx26 } from "react/jsx-runtime";
var TagStatus = (_a) => {
  var _b = _a, { variant, children } = _b, props = __objRest(_b, ["variant", "children"]);
  const theme2 = useTheme19();
  let styleSx = {};
  switch (variant) {
    case "approve":
      styleSx = {
        backgroundColor: "#2E7D3240",
        color: theme2.palette.success.main
      };
      break;
    case "reject":
      styleSx = {
        backgroundColor: "#D32F2F40",
        color: theme2.palette.error.main
      };
      break;
    case "pending":
      styleSx = {
        backgroundColor: "#EF6C0040",
        color: theme2.palette.warning.main
      };
      break;
    case "black":
      styleSx = {
        backgroundColor: "#2B2B2B40",
        color: theme2.palette.text.primary
      };
      break;
    case "blue":
      styleSx = {
        backgroundColor: "#2500CF40",
        color: theme2.palette.primary.main
      };
      break;
    case "others":
      styleSx = {
        backgroundColor: "#E8EDFF",
        color: "#7A8A9D"
      };
      break;
  }
  return /* @__PURE__ */ jsx26(
    Stack3,
    __spreadProps(__spreadValues({}, props), {
      sx: __spreadValues(__spreadValues({
        borderRadius: radii.xs,
        px: space[4],
        py: space[2]
      }, styleSx), props.sx),
      children: /* @__PURE__ */ jsx26(
        Typography4,
        {
          sx: {
            color: "inherit",
            fontSize: fontSizes.sm,
            fontWeight: fontWeights.semibold
          },
          children
        }
      )
    })
  );
};

// src/components/TextField/Default/index.tsx
import {
  TextField as TextFieldMUI,
  useTheme as useTheme20
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
import { jsx as jsx27 } from "react/jsx-runtime";
var TextFieldDefault = forwardRef((_a, ref) => {
  var _b = _a, { mask } = _b, props = __objRest(_b, ["mask"]);
  const theme2 = useTheme20();
  return /* @__PURE__ */ jsx27(
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
  Box as Box9,
  IconButton as IconButton2,
  InputAdornment,
  InputLabel,
  Stack as Stack4,
  Typography as Typography5,
  useTheme as useTheme21
} from "@mui/material";
import { forwardRef as forwardRef2, useState as useState4 } from "react";
import { Link as Link2 } from "react-router-dom";
import { jsx as jsx28, jsxs as jsxs7 } from "react/jsx-runtime";
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
    const theme2 = useTheme21();
    const [canSeeValue, setCanSeeValue] = useState4(label !== "Senha");
    const handleChangeCanSeeValue = () => {
      setCanSeeValue((prev) => !prev);
    };
    return /* @__PURE__ */ jsxs7(
      Stack4,
      __spreadProps(__spreadValues({}, containerProps), {
        sx: {
          gap: 1
        },
        children: [
          /* @__PURE__ */ jsxs7(
            Stack4,
            {
              sx: {
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center"
              },
              children: [
                /* @__PURE__ */ jsx28(
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
                label === "Senha" && /* @__PURE__ */ jsx28(
                  Box9,
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
          /* @__PURE__ */ jsx28(
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
                endAdornment: visibilityChange && /* @__PURE__ */ jsx28(InputAdornment, { position: "end", children: /* @__PURE__ */ jsx28(
                  IconButton2,
                  {
                    "aria-label": "Altere a visibilidade",
                    onClick: handleChangeCanSeeValue,
                    edge: "end",
                    children: canSeeValue ? /* @__PURE__ */ jsx28(VisibilityOff, {}) : /* @__PURE__ */ jsx28(Visibility, {})
                  }
                ) })
              }
            })
          ),
          (props == null ? void 0 : props.error) && /* @__PURE__ */ jsxs7(
            Stack4,
            {
              sx: {
                color: theme2.palette.error.main,
                flexDirection: "row",
                gap: 1
              },
              children: [
                /* @__PURE__ */ jsx28(
                  ErrorOutline,
                  {
                    sx: {
                      width: 16,
                      height: 16
                    }
                  }
                ),
                /* @__PURE__ */ jsx28(
                  Typography5,
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
import { InputAdornment as InputAdornment2, useTheme as useTheme22 } from "@mui/material";
import { forwardRef as forwardRef3 } from "react";
import { jsx as jsx29 } from "react/jsx-runtime";
var TextFieldIcon = forwardRef3(
  (_a, ref) => {
    var _b = _a, { icon } = _b, props = __objRest(_b, ["icon"]);
    var _a2;
    const theme2 = useTheme22();
    return /* @__PURE__ */ jsx29(
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
          startAdornment: /* @__PURE__ */ jsx29(InputAdornment2, { position: "start", children: icon })
        }, props.InputProps)
      })
    );
  }
);
TextFieldIcon.displayName = "Icon";

// src/components/TextField/InternalLabel/index.tsx
import { ErrorOutline as ErrorOutline2 } from "@mui/icons-material";
import { FormControl, Stack as Stack5, Typography as Typography6, useTheme as useTheme23 } from "@mui/material";
import { forwardRef as forwardRef4 } from "react";
import { jsx as jsx30, jsxs as jsxs8 } from "react/jsx-runtime";
var TextFieldInternalLabel = forwardRef4((_a, ref) => {
  var _b = _a, { errorMessage } = _b, props = __objRest(_b, ["errorMessage"]);
  const theme2 = useTheme23();
  return /* @__PURE__ */ jsxs8(
    FormControl,
    {
      fullWidth: true,
      sx: {
        display: "flex",
        flexDirection: "column",
        gap: 1
      },
      children: [
        /* @__PURE__ */ jsx30(
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
        (props == null ? void 0 : props.error) && /* @__PURE__ */ jsxs8(
          Stack5,
          {
            sx: {
              color: theme2.palette.error.main,
              flexDirection: "row",
              gap: 1
            },
            children: [
              /* @__PURE__ */ jsx30(
                ErrorOutline2,
                {
                  sx: {
                    width: 16,
                    height: 16
                  }
                }
              ),
              /* @__PURE__ */ jsx30(
                Typography6,
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
  IconButton,
  Logo,
  NavLink2 as NavLink,
  ProfilePhoto,
  ProgressBar,
  Sidebar,
  TagStatus,
  TextField,
  theme
};

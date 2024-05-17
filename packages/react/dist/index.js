"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  Button: () => Button,
  ButtonSmall: () => ButtonSmall,
  NavLink: () => NavLink2,
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
var import_material = require("@mui/material");
var import_jsx_runtime = require("react/jsx-runtime");
function ButtonDefault(_a) {
  var _b = _a, { children } = _b, props = __objRest(_b, ["children"]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_material.Button,
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

// src/components/NavLink/index.tsx
var import_icons_material = require("@mui/icons-material");
var import_material10 = require("@mui/material");
var import_react = require("react");
var RouterDOM = __toESM(require("react-router-dom"));
var import_jsx_runtime10 = require("react/jsx-runtime");
var NavLink2 = ({
  icon = "",
  label = "",
  to = "",
  subItens: items = [],
  variant = "standard",
  onClick
}) => {
  const theme2 = (0, import_material10.useTheme)();
  const [isCollapsed, setIsCollapsed] = (0, import_react.useState)(false);
  const location = RouterDOM.useLocation();
  (0, import_react.useEffect)(() => {
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
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
      import_material10.Box,
      {
        sx: {
          width: "100%",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden"
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
            import_material10.Box,
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
                !!icon && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_material10.Box, { sx: { width: 24, height: 24 }, children: icon }),
                variant === "standard" && !!label && label,
                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                  import_material10.Box,
                  {
                    sx: {
                      display: variant === "icon" ? "none" : "flex",
                      justifyContent: "end",
                      width: "100%"
                    },
                    children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                      import_material10.Box,
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
                        children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                          import_icons_material.ChevronRight,
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
          variant === "standard" && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
            import_material10.Collapse,
            {
              in: isCollapsed,
              sx: {
                userSelect: "none"
              },
              children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                import_material10.Box,
                {
                  sx: {
                    display: "flex",
                    flexDirection: "column",
                    gap: space[6],
                    marginTop: space[4]
                  },
                  children: items == null ? void 0 : items.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                    RouterDOM.NavLink,
                    {
                      to: item == null ? void 0 : item.to,
                      style: { textDecoration: "none" },
                      draggable: false,
                      children: ({ isActive }) => {
                        return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
                          import_material10.Box,
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
                              !!(item == null ? void 0 : item.icon) && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_material10.Box, { sx: { height: 24, width: 24 }, children: item == null ? void 0 : item.icon }),
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
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
    import_material10.Box,
    {
      sx: {
        borderRadius: radii.md,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        userSelect: "none",
        width: "100%"
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
        RouterDOM.NavLink,
        {
          to,
          style: { textDecoration: "none" },
          draggable: false,
          children: ({ isActive }) => {
            console.log(isActive);
            return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
              import_material10.Box,
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
                  !!icon && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_material10.Box, { sx: { width: 24, height: 24 }, children: icon }),
                  variant === "standard" && !!label && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                    import_material10.Typography,
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
var import_material11 = require("@mui/material");
var import_react2 = require("react");

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
var import_jsx_runtime11 = require("react/jsx-runtime");
var TextFieldDefault = (0, import_react2.forwardRef)((_a, ref) => {
  var _b = _a, { mask } = _b, props = __objRest(_b, ["mask"]);
  const theme2 = (0, import_material11.useTheme)();
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
    import_material11.TextField,
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
var import_icons_material2 = require("@mui/icons-material");
var import_material12 = require("@mui/material");
var import_react3 = require("react");
var import_react_router_dom = require("react-router-dom");
var import_jsx_runtime12 = require("react/jsx-runtime");
var TextFieldExternalLabel = (0, import_react3.forwardRef)(
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
    const theme2 = (0, import_material12.useTheme)();
    const [canSeeValue, setCanSeeValue] = (0, import_react3.useState)(label !== "Senha");
    const handleChangeCanSeeValue = () => {
      setCanSeeValue((prev) => !prev);
    };
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
      import_material12.Stack,
      __spreadProps(__spreadValues({}, containerProps), {
        sx: {
          gap: 1
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
            import_material12.Stack,
            {
              sx: {
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center"
              },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
                  import_material12.InputLabel,
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
                label === "Senha" && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
                  import_material12.Box,
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
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
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
                endAdornment: visibilityChange && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_material12.InputAdornment, { position: "end", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
                  import_material12.IconButton,
                  {
                    "aria-label": "Altere a visibilidade",
                    onClick: handleChangeCanSeeValue,
                    edge: "end",
                    children: canSeeValue ? /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_icons_material2.VisibilityOff, {}) : /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_icons_material2.Visibility, {})
                  }
                ) })
              }
            })
          ),
          (props == null ? void 0 : props.error) && /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
            import_material12.Stack,
            {
              sx: {
                color: theme2.palette.error.main,
                flexDirection: "row",
                gap: 1
              },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
                  import_icons_material2.ErrorOutline,
                  {
                    sx: {
                      width: 16,
                      height: 16
                    }
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
                  import_material12.Typography,
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
var import_material13 = require("@mui/material");
var import_react4 = require("react");
var import_jsx_runtime13 = require("react/jsx-runtime");
var TextFieldIcon = (0, import_react4.forwardRef)(
  (_a, ref) => {
    var _b = _a, { icon } = _b, props = __objRest(_b, ["icon"]);
    var _a2;
    const theme2 = (0, import_material13.useTheme)();
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
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
          startAdornment: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_material13.InputAdornment, { position: "start", children: icon })
        }, props.InputProps)
      })
    );
  }
);
TextFieldIcon.displayName = "Icon";

// src/components/TextField/InternalLabel/index.tsx
var import_icons_material3 = require("@mui/icons-material");
var import_material14 = require("@mui/material");
var import_react5 = require("react");
var import_jsx_runtime14 = require("react/jsx-runtime");
var TextFieldInternalLabel = (0, import_react5.forwardRef)((_a, ref) => {
  var _b = _a, { errorMessage } = _b, props = __objRest(_b, ["errorMessage"]);
  const theme2 = (0, import_material14.useTheme)();
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
    import_material14.FormControl,
    {
      fullWidth: true,
      sx: {
        display: "flex",
        flexDirection: "column",
        gap: 1
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
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
        (props == null ? void 0 : props.error) && /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
          import_material14.Stack,
          {
            sx: {
              color: theme2.palette.error.main,
              flexDirection: "row",
              gap: 1
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
                import_icons_material3.ErrorOutline,
                {
                  sx: {
                    width: 16,
                    height: 16
                  }
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
                import_material14.Typography,
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
var import_material15 = require("@mui/material");
var theme = (0, import_material15.createTheme)({
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
  NavLink,
  TextField,
  theme
});

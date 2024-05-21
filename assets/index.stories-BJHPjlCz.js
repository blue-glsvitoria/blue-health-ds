import{j as e}from"./jsx-runtime-CKrituN3.js";import{S as r}from"./theme-BdzP4PyB.js";import{c as n,B as v}from"./VisibilityOff-D6BBgNQi.js";import{B as b,P as S,L as f}from"./People-BTK7XfJI.js";const g=n(e.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"Add"),j=n([e.jsx("path",{d:"M19.03 3.56c-1.67-1.39-3.74-2.3-6.03-2.51v2.01c1.73.19 3.31.88 4.61 1.92zM11 3.06V1.05c-2.29.2-4.36 1.12-6.03 2.51l1.42 1.42C7.69 3.94 9.27 3.25 11 3.06M4.98 6.39 3.56 4.97C2.17 6.64 1.26 8.71 1.05 11h2.01c.19-1.73.88-3.31 1.92-4.61M20.94 11h2.01c-.21-2.29-1.12-4.36-2.51-6.03l-1.42 1.42c1.04 1.3 1.73 2.88 1.92 4.61M7 12l3.44 1.56L12 17l1.56-3.44L17 12l-3.44-1.56L12 7l-1.56 3.44z"},"0"),e.jsx("path",{d:"M12 21c-3.11 0-5.85-1.59-7.46-4H7v-2H1v6h2v-2.7c1.99 2.84 5.27 4.7 9 4.7 4.87 0 9-3.17 10.44-7.56l-1.96-.45C19.25 18.48 15.92 21 12 21"},"1")],"AutoMode"),x=n(e.jsx("path",{d:"M12 7V3H2v18h20V7zm-2 12H4v-2h6zm0-4H4v-2h6zm0-4H4V9h6zm0-4H4V5h6zm10 12h-8V9h8zm-2-8h-4v2h4zm0 4h-4v2h4z"}),"CorporateFareOutlined"),C=n(e.jsx("path",{d:"M3 13h8V3H3zm0 8h8v-6H3zm10 0h8V11h-8zm0-18v6h8V3z"}),"Dashboard"),M={title:"Design System/Sidebar",component:r.Container,argTypes:{navigation:{control:{type:"object"}}},decorators:[z=>e.jsx(v,{children:e.jsx(r.Provider,{children:e.jsx(z,{})})})]},a={args:{}},o={args:{navigation:[{label:"Dashboard",icon:e.jsx(C,{fontSize:"small"}),module:"module"},{label:"Propostas",icon:e.jsx(b,{fontSize:"small"}),module:"module"},{label:"Beneficiários",icon:e.jsx(S,{fontSize:"small"}),module:"module"},{label:"Inconclusos",icon:e.jsx(j,{fontSize:"small"}),module:"module"}]}},s={args:{navigation:[{label:"Empresas",icon:e.jsx(x,{fontSize:"small"}),module:"empresas",subItens:[{label:"Listagem",icon:e.jsx(f,{fontSize:"small"}),to:"/empresas",module:"empresas"},{label:"Cadastrar empresa",to:"empresas/cadastro",icon:e.jsx(g,{fontSize:"small"}),module:"nova-empresa"}]}]}};var l,t,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {}
}`,...(m=(t=a.parameters)==null?void 0:t.docs)==null?void 0:m.source}}};var i,c,d;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    navigation: [{
      label: "Dashboard",
      icon: <Dashboard fontSize="small" />,
      module: "module"
    }, {
      label: "Propostas",
      icon: <BarChart fontSize="small" />,
      module: "module"
    }, {
      label: "Beneficiários",
      icon: <People fontSize="small" />,
      module: "module"
    }, {
      label: "Inconclusos",
      icon: <AutoMode fontSize="small" />,
      module: "module"
    }]
  }
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,u,h;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    navigation: [{
      label: "Empresas",
      icon: <CorporateFareOutlined fontSize="small" />,
      module: "empresas",
      subItens: [{
        label: "Listagem",
        icon: <List fontSize="small" />,
        to: "/empresas",
        module: "empresas"
      }, {
        label: "Cadastrar empresa",
        to: "empresas/cadastro",
        icon: <Add fontSize="small" />,
        module: "nova-empresa"
      }]
    }]
  }
}`,...(h=(u=s.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};const H=["Default","WithNavigation","WithNavigationCollapse"],P=Object.freeze(Object.defineProperty({__proto__:null,Default:a,WithNavigation:o,WithNavigationCollapse:s,__namedExportsOrder:H,default:M},Symbol.toStringTag,{value:"Module"}));export{a as D,P as S,o as W,s as a};

"use strict";(self.webpackChunkapi=self.webpackChunkapi||[]).push([[9501],{65408:(v,l,n)=>{n.r(l),n.d(l,{InternalErrorPage:()=>p});var t=n(67294),s=n(185),c=n(53979),h=n(49066),x=n(89722),E=n(57993),i=n(37323),u=n(20550),g=n(86896);const p=()=>{const{formatMessage:m}=(0,g.Z)();return(0,E.go)(),t.createElement(s.o,{labelledBy:"title"},t.createElement(c.T,{id:"title",title:m({id:"content-manager.pageNotFound",defaultMessage:"Page not found"})}),t.createElement(h.D,null,t.createElement(x.x,{action:t.createElement(E.Qj,{variant:"secondary",endIcon:t.createElement(i.Z,null),to:"/"},m({id:"app.components.NotFoundPage.back",defaultMessage:"Back to homepage"})),content:m({id:"notification.error",defaultMessage:"An error occured"}),hasRadius:!0,icon:t.createElement(u.Z,{width:"10rem"}),shadow:"tableShadow"})))}},49066:(v,l,n)=>{n.d(l,{D:()=>c});var t=n(85893),s=n(41580);const c=({children:h})=>(0,t.jsx)(s.x,{paddingLeft:10,paddingRight:10,children:h})},53979:(v,l,n)=>{n.d(l,{T:()=>p});var t=n(85893),s=n(67294),c=n(88972);const h=e=>{const a=(0,s.useRef)(null),[d,r]=(0,s.useState)(!0),o=([_])=>{r(_.isIntersecting)};return(0,s.useEffect)(()=>{const _=a.current,f=new IntersectionObserver(o,e);return _&&f.observe(a.current),()=>{_&&f.disconnect()}},[a,e]),[a,d]};var x=n(79698);const E=(e,a)=>{const d=(0,x.W)(a);(0,s.useLayoutEffect)(()=>{const r=new ResizeObserver(d);return Array.isArray(e)?e.forEach(o=>{o.current&&r.observe(o.current)}):e.current&&r.observe(e.current),()=>{r.disconnect()}},[e,d])};var i=n(41580),u=n(11047),g=n(75515);const p=e=>{const a=(0,s.useRef)(null),[d,r]=(0,s.useState)(null),[o,_]=h({root:null,rootMargin:"0px",threshold:0});return E(o,()=>{o.current&&r(o.current.getBoundingClientRect())}),(0,s.useEffect)(()=>{a.current&&r(a.current.getBoundingClientRect())},[a]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{style:{height:d?.height},ref:o,children:_&&(0,t.jsx)(M,{ref:a,...e})}),!_&&(0,t.jsx)(M,{...e,sticky:!0,width:d?.width})]})};p.displayName="HeaderLayout";const m=(0,c.ZP)(i.x)`
  width: ${({width:e})=>e?`${e/16}rem`:void 0};
  z-index: ${({theme:e})=>e.zIndices[1]};
`,M=s.forwardRef(({navigationAction:e,primaryAction:a,secondaryAction:d,subtitle:r,title:o,sticky:_,width:f,...P},D)=>{const j=typeof r=="string";return _?(0,t.jsx)(m,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:f,"data-strapi-header-sticky":!0,children:(0,t.jsxs)(u.k,{justifyContent:"space-between",children:[(0,t.jsxs)(u.k,{children:[e&&(0,t.jsx)(i.x,{paddingRight:3,children:e}),(0,t.jsxs)(i.x,{children:[(0,t.jsx)(g.Z,{variant:"beta",as:"h1",...P,children:o}),j?(0,t.jsx)(g.Z,{variant:"pi",textColor:"neutral600",children:r}):r]}),d?(0,t.jsx)(i.x,{paddingLeft:4,children:d}):null]}),(0,t.jsx)(u.k,{children:a?(0,t.jsx)(i.x,{paddingLeft:2,children:a}):void 0})]})}):(0,t.jsxs)(i.x,{ref:D,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:e?6:8,background:"neutral100","data-strapi-header":!0,children:[e?(0,t.jsx)(i.x,{paddingBottom:2,children:e}):null,(0,t.jsxs)(u.k,{justifyContent:"space-between",children:[(0,t.jsxs)(u.k,{minWidth:0,children:[(0,t.jsx)(g.Z,{as:"h1",variant:"alpha",...P,children:o}),d?(0,t.jsx)(i.x,{paddingLeft:4,children:d}):null]}),a]}),j?(0,t.jsx)(g.Z,{variant:"epsilon",textColor:"neutral600",as:"p",children:r}):r]})})},185:(v,l,n)=>{n.d(l,{o:()=>x});var t=n(85893),s=n(88972),c=n(41580);const h=(0,s.ZP)(c.x)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,x=({labelledBy:E="main-content-title",...i})=>(0,t.jsx)(h,{"aria-labelledby":E,as:"main",id:"main-content",tabIndex:-1,...i})},37323:(v,l,n)=>{n.d(l,{Z:()=>c});var t=n(85893);const s=h=>(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...h,children:(0,t.jsx)("path",{fill:"#212134",d:"M0 10.7c0-.11.09-.2.2-.2h18.06l-8.239-8.239a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L23.86 11.86a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L10.02 22.02a.2.2 0 0 1 0-.282L18.26 13.5H.2a.2.2 0 0 1-.2-.2v-2.6Z"})}),c=s}}]);
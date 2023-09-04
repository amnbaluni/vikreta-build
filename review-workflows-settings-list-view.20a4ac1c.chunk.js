"use strict";(self.webpackChunkapi=self.webpackChunkapi||[]).push([[349],{52713:(O,f,t)=>{t.d(f,{r:()=>u});var e=t(67294),n=t(41580),o=t(45697),m=t.n(o),E=t(99168);function c(g,r,s){if(!g||!r)return{display:"none"};const{x:a,y:l}=s;return{transform:`translate(${a}px, ${l}px)`}}function u({renderItem:g}){const{itemType:r,isDragging:s,item:a,initialOffset:l,currentOffset:y,mouseOffset:h}=(0,E.useDragLayer)(T=>({item:T.getItem(),itemType:T.getItemType(),initialOffset:T.getInitialSourceClientOffset(),currentOffset:T.getSourceClientOffset(),isDragging:T.isDragging(),mouseOffset:T.getClientOffset()}));return s?e.createElement(n.x,{height:"100%",left:0,position:"fixed",pointerEvents:"none",top:0,zIndex:100,width:"100%"},e.createElement(n.x,{style:c(l,y,h)},g({type:r,item:a}))):null}u.propTypes={renderItem:m().func.isRequired}},75021:(O,f,t)=>{t.d(f,{q:()=>m});var e=t(67294),n=t(57993),o=t(88767);function m({enabled:E}={enabled:!0}){const{get:c}=(0,n.kY)(),{data:u,isError:g,isLoading:r}=(0,o.useQuery)(["ee","license-limit-info"],async()=>{const{data:{data:l}}=await c("/admin/license-limit-information");return l},{enabled:E}),s=e.useMemo(()=>u??{},[u]),a=e.useCallback(l=>(s?.features??[]).find(h=>h.name===l)?.options??{},[s?.features]);return{license:s,getFeature:a,isError:g,isLoading:r}}},43390:(O,f,t)=>{t.d(f,{eJ:()=>D,lx:()=>P,h4:()=>v,fC:()=>I});var e=t(67294),n=t(17034),o=t(185),m=t(49066),E=t(53979),c=t(57993),u=t(67109),g=t(86896),r=t(52713),s=t(86978),a=t(11047),l=t(75515),y=t(12645),h=t(45697),T=t.n(h),A=t(88972);const W=(0,A.ZP)(a.k)`
  svg path {
    fill: ${({theme:w})=>w.colors.neutral600};
  }
`;function C({name:w}){return e.createElement(a.k,{background:"primary100",borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",gap:3,hasRadius:!0,padding:3,shadow:"tableShadow",width:(0,c.Q1)(300)},e.createElement(W,{alignItems:"center",background:"neutral200",borderRadius:"50%",height:6,justifyContent:"center",width:6},e.createElement(y.Z,{width:`${8/16}rem`})),e.createElement(l.Z,{fontWeight:"bold"},w))}C.propTypes={name:T().string.isRequired};function R({type:w,item:p}){switch(w){case s.uL.STAGE:return e.createElement(C,{...p});default:return null}}function P(){return e.createElement(r.r,{renderItem:R})}function I({children:w}){return e.createElement(n.A,null,e.createElement(o.o,{tabIndex:-1},e.createElement(m.D,null,w)))}function D({href:w}){const{formatMessage:p}=(0,g.Z)();return e.createElement(c.rU,{startIcon:e.createElement(u.Z,null),to:w},p({id:"global.back",defaultMessage:"Back"}))}function v({title:w,subtitle:p,navigationAction:M,primaryAction:L}){return e.createElement(e.Fragment,null,e.createElement(c.SL,{name:w}),e.createElement(E.T,{navigationAction:M,primaryAction:L,title:w,subtitle:p}))}},38705:(O,f,t)=>{t.d(f,{uT:()=>R,fC:()=>D,Dx:()=>C});var e=t(67294),n=t(75515),o=t(11047),m=t(42866),E=t(59946),c=t(41580),u=t(12028),g=t(80994),r=t(70968),s=t(45697),a=t.n(s),l=t(86896),y=t(88972);const h=t.p+"0cd5f8915b265d5b1856.png",T="limits-title",A="https://strapi.io/pricing-cloud",W="https://strapi.io/contact-sales";function C({children:v}){return e.createElement(n.Z,{variant:"alpha",id:T},v)}C.propTypes={children:a().node.isRequired};function R({children:v}){return e.createElement(n.Z,{variant:"omega"},v)}R.propTypes={children:a().node.isRequired};function P(){const{formatMessage:v}=(0,l.Z)();return e.createElement(o.k,{gap:2,paddingTop:4},e.createElement(g.Q,{variant:"default",isExternal:!0,href:A},v({id:"Settings.review-workflows.limit.cta.learn",defaultMessage:"Learn more"})),e.createElement(g.Q,{variant:"tertiary",isExternal:!0,href:W},v({id:"Settings.review-workflows.limit.cta.sales",defaultMessage:"Contact Sales"})))}const I=y.ZP.img`
  // Margin top|right reverse the padding of ModalBody
  margin-right: ${({theme:v})=>`-${v.spaces[7]}`};
  margin-top: ${({theme:v})=>`-${v.spaces[7]}`};
  width: 360px;
`;function D({children:v,isOpen:w,onClose:p}){const{formatMessage:M}=(0,l.Z)();return w?e.createElement(m.P,{labelledBy:T},e.createElement(E.f,null,e.createElement(o.k,{gap:2,paddingLeft:7,position:"relative"},e.createElement(o.k,{alignItems:"start",direction:"column",gap:2,width:"60%"},v,e.createElement(P,null)),e.createElement(o.k,{justifyContent:"end",height:"100%",width:"40%"},e.createElement(I,{src:h,"aria-hidden":!0,alt:"",loading:"lazy"}),e.createElement(c.x,{display:"flex",position:"absolute",right:0,top:0},e.createElement(u.h,{icon:e.createElement(r.Z,null),"aria-label":M({id:"global.close",defaultMessage:"Close"}),onClick:p})))))):null}D.defaultProps={isOpen:!1},D.propTypes={children:a().node.isRequired,isOpen:a().bool,onClose:a().func.isRequired}},86978:(O,f,t)=>{t.d(f,{$k:()=>g,Ef:()=>y,FT:()=>a,Nj:()=>u,Ot:()=>c,VS:()=>r,_X:()=>h,gu:()=>o,lv:()=>s,qZ:()=>m,sN:()=>n,uL:()=>l,x4:()=>E});var e=t(42675);const n="settings_review-workflows",o="Settings/Review_Workflows/RESET_WORKFLOW",m="Settings/Review_Workflows/SET_WORKFLOW",E="Settings/Review_Workflows/WORKFLOW_DELETE_STAGE",c="Settings/Review_Workflows/WORKFLOW_ADD_STAGE",u="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE",g="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE_POSITION",r="Settings/Review_Workflows/WORKFLOW_UPDATE",s={primary600:"Blue",primary200:"Lilac",alternative600:"Violet",alternative200:"Lavender",success600:"Green",success200:"Pale Green",danger500:"Cherry",danger200:"Pink",warning600:"Orange",warning200:"Yellow",secondary600:"Teal",secondary200:"Baby Blue",neutral400:"Gray",neutral0:"White"},a=e.W.colors.primary600,l={STAGE:"stage"},y="numberOfWorkflows",h="stagesPerWorkflow"},52258:(O,f,t)=>{t.d(f,{n:()=>o});var e=t(57993),n=t(88767);function o(m={}){const{get:E}=(0,e.kY)(),{id:c="",...u}=m,g={populate:"stages"},{data:r,isLoading:s,status:a,refetch:l}=(0,n.useQuery)(["review-workflows","workflows",c],async()=>(await E(`/admin/review-workflows/workflows/${c}`,{params:{...g,...u}})).data);let y=[];return c&&r?.data?y=[r.data]:Array.isArray(r?.data)&&(y=r.data),{meta:r?.meta??{},workflows:y,isLoading:s,status:a,refetch:l}}},26259:(O,f,t)=>{t.r(f),t.d(f,{default:()=>X});var e=t(67294),n=t(57993),o=t(86706),m=t(36364),E=t(11047),c=t(77197),u=t(38939),g=t(49386),r=t(8060),s=t(79031),a=t(37909),l=t(75515),y=t(63237),h=t(15234),T=t(12028),A=t(96315),W=t(4585),C=t(20022),R=t(86896),P=t(88767),I=t(16550),D=t(88972),v=t(92686),w=t(75021),p=t(43390),M=t(38705),L=t(86978),Y=t(52258);const V=(0,D.ZP)(n.rU)`
  align-items: center;
  height: ${(0,n.Q1)(32)};
  display: flex;
  justify-content: center;
  padding: ${({theme:i})=>`${i.spaces[2]}}`};
  width: ${(0,n.Q1)(32)};

  svg {
    height: ${(0,n.Q1)(12)};
    width: ${(0,n.Q1)(12)};

    path {
      fill: ${({theme:i})=>i.colors.neutral500};
    }
  }

  &:hover,
  &:focus {
    svg {
      path {
        fill: ${({theme:i})=>i.colors.neutral800};
      }
    }
  }
`;function z(){const{formatMessage:i}=(0,R.Z)(),{push:F}=(0,I.k6)(),{collectionTypes:J,singleTypes:b,isLoading:q}=(0,v.G)(),{meta:x,workflows:K,isLoading:Z,refetch:_}=(0,Y.n)(),[N,$]=e.useState(null),[ee,B]=e.useState(!1),{del:te}=(0,n.kY)(),{formatAPIError:ne}=(0,n.So)(),U=(0,n.lm)(),{getFeature:ae,isLoading:G}=(0,w.q)(),{trackUsage:Q}=(0,n.rS)(),se=(0,o.v9)(m._),{allowedActions:{canCreate:H,canDelete:le}}=(0,n.ss)(se.settings["review-workflows"]),S=ae("review-workflows"),{mutateAsync:oe,isLoading:re}=(0,P.useMutation)(async({workflowId:d,stages:k})=>{const{data:{data:j}}=await te(`/admin/review-workflows/workflows/${d}`,{data:k});return j},{onSuccess(){U({type:"success",message:{id:"notification.success.deleted",defaultMessage:"Deleted"}})}}),ie=d=>[...J,...b].find(j=>j.uid===d).info.displayName,de=d=>{$(d)},ce=()=>{$(null)},fe=async()=>{try{const d=await oe({workflowId:N});return await _(),$(null),d}catch(d){return U({type:"warning",message:ne(d)}),null}};return e.useEffect(()=>{!Z&&!G&&S?.[L.Ef]&&x?.workflowCount>parseInt(S[L.Ef],10)&&B(!0)},[G,Z,S,x?.workflowCount,x.workflowsTotal]),e.createElement(e.Fragment,null,e.createElement(p.h4,{primaryAction:H&&e.createElement(n.Qj,{startIcon:e.createElement(A.Z,null),size:"S",to:"/settings/review-workflows/create",onClick:d=>{S?.[L.Ef]&&x?.workflowCount>=parseInt(S[L.Ef],10)?(d.preventDefault(),B(!0)):Q("willCreateWorkflow")}},i({id:"Settings.review-workflows.list.page.create",defaultMessage:"Create new workflow"})),subtitle:i({id:"Settings.review-workflows.list.page.subtitle",defaultMessage:"Manage your content review process"}),title:i({id:"Settings.review-workflows.list.page.title",defaultMessage:"Review Workflows"})}),e.createElement(p.fC,null,Z||q?e.createElement(E.k,{justifyContent:"center"},e.createElement(c.a,null,i({id:"Settings.review-workflows.page.list.isLoading",defaultMessage:"Workflows are loading"}))):e.createElement(u.i,{colCount:3,footer:H&&e.createElement(g.c,{icon:e.createElement(A.Z,null),onClick:()=>{S?.[L.Ef]&&x?.workflowCount>=parseInt(S[L.Ef],10)?B(!0):(F("/settings/review-workflows/create"),Q("willCreateWorkflow"))}},i({id:"Settings.review-workflows.list.page.create",defaultMessage:"Create new workflow"})),rowCount:1},e.createElement(r.h,null,e.createElement(s.Tr,null,e.createElement(a.Th,null,e.createElement(l.Z,{variant:"sigma"},i({id:"Settings.review-workflows.list.page.list.column.name.title",defaultMessage:"Name"}))),e.createElement(a.Th,null,e.createElement(l.Z,{variant:"sigma"},i({id:"Settings.review-workflows.list.page.list.column.stages.title",defaultMessage:"Stages"}))),e.createElement(a.Th,null,e.createElement(l.Z,{variant:"sigma"},i({id:"Settings.review-workflows.list.page.list.column.contentTypes.title",defaultMessage:"Content Types"}))),e.createElement(a.Th,null,e.createElement(y.T,null,i({id:"Settings.review-workflows.list.page.list.column.actions.title",defaultMessage:"Actions"}))))),e.createElement(h.p,null,K.map(d=>e.createElement(s.Tr,{...(0,n.X7)({fn(k){k.target.nodeName!=="BUTTON"&&F(`/settings/review-workflows/${d.id}`)}}),key:`workflow-${d.id}`},e.createElement(a.Td,{width:(0,n.Q1)(250)},e.createElement(l.Z,{textColor:"neutral800",fontWeight:"bold",ellipsis:!0},d.name)),e.createElement(a.Td,null,e.createElement(l.Z,{textColor:"neutral800"},d.stages.length)),e.createElement(a.Td,null,e.createElement(l.Z,{textColor:"neutral800"},(d?.contentTypes??[]).map(ie).join(", "))),e.createElement(a.Td,null,e.createElement(E.k,{alignItems:"center",justifyContent:"end"},e.createElement(V,{to:`/settings/review-workflows/${d.id}`,"aria-label":i({id:"Settings.review-workflows.list.page.list.column.actions.edit.label",defaultMessage:"Edit {name}"},{name:d.name})},e.createElement(W.Z,null)),K.length>1&&le&&e.createElement(T.h,{"aria-label":i({id:"Settings.review-workflows.list.page.list.column.actions.delete.label",defaultMessage:"Delete {name}"},{name:"Default workflow"}),icon:e.createElement(C.Z,null),noBorder:!0,onClick:()=>{de(d.id)}}))))))),e.createElement(n.QH,{bodyText:{id:"Settings.review-workflows.list.page.delete.confirm.body",defaultMessage:"If you remove this worfklow, all stage-related information will be removed for this content-type. Are you sure you want to remove it?"},isConfirmButtonLoading:re,isOpen:!!N,onToggleDialog:ce,onConfirm:fe}),e.createElement(M.fC,{isOpen:ee,onClose:()=>B(!1)},e.createElement(M.Dx,null,i({id:"Settings.review-workflows.list.page.workflows.limit.title",defaultMessage:"You\u2019ve reached the limit of workflows in your plan"})),e.createElement(M.uT,null,i({id:"Settings.review-workflows.list.page.workflows.limit.body",defaultMessage:"Delete a workflow or contact Sales to enable more workflows."})))))}function X(){const i=(0,o.v9)(m._);return e.createElement(n.O4,{permissions:i.settings["review-workflows"].main},e.createElement(z,null))}},49386:(O,f,t)=>{t.d(f,{c:()=>r});var e=t(85893),n=t(88972),o=t(41580),m=t(70004),E=t(11047),c=t(75515);const u=(0,n.ZP)(o.x)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:s})=>s.colors.primary600};
  }
`,g=(0,n.ZP)(o.x)`
  border-radius: 0 0 ${({theme:s})=>s.borderRadius} ${({theme:s})=>s.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,r=({children:s,icon:a,...l})=>(0,e.jsxs)("div",{children:[(0,e.jsx)(m.i,{}),(0,e.jsx)(g,{as:"button",background:"primary100",padding:5,...l,children:(0,e.jsxs)(E.k,{children:[(0,e.jsx)(u,{"aria-hidden":!0,background:"primary200",children:a}),(0,e.jsx)(o.x,{paddingLeft:3,children:(0,e.jsx)(c.Z,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:s})})]})})]})},67109:(O,f,t)=>{t.d(f,{Z:()=>o});var e=t(85893);const n=m=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...m,children:(0,e.jsx)("path",{fill:"#212134",d:"M24 13.3a.2.2 0 0 1-.2.2H5.74l8.239 8.239a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L.14 12.14a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L13.98 1.98a.2.2 0 0 1 0 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6Z"})}),o=n}}]);

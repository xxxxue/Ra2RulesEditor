(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3832:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return M}});r(9240);var t=r(1951),i=(r(8510),r(8652)),l=(r(8862),r(1280)),a=r(6004),s=r(6017),o=r.n(s),u=r(959),c=r(3318),d=r(365),m=r.n(d)().create({baseURL:"http://localhost:5000/Editor",timeout:15e3});function v(){return m.get("GetSettingList")}function f(){return m.get("GetTypesList")}m.interceptors.request.use((function(e){return e.headers&&(e.headers.authorization="Bearer "),e}),(function(e){return Promise.reject(e)})),m.interceptors.response.use((function(e){return 200!=e.status&&console.warn("\u670d\u52a1\u5668\u8fd4\u56de\u7684\u5f02\u5e38:",e),e.data}),(function(e){return console.error(e),Promise.reject(e)}));var x=r(9803),h=r.n(x),j=r(6116),p=r(1218),y=r(9080),N=r(6846),b=r(1096),k=(r(4550),r(9994)),w=r(1803),g=r(1527);var C=function(e){return(0,g.jsx)("div",{className:"m-2 space-y-2 ",children:(0,w.Z)(new Array(e.trCount)).map((function(n,r){return(0,g.jsx)("div",{className:"flex space-x-2",children:(0,w.Z)(new Array(e.tdCount)).map((function(e,n){return(0,g.jsx)("div",{className:"w-full",children:(0,g.jsx)(k.Z.Input,{active:!0,className:"w-full min-w-0"})},"TrTdSkeleton-td"+r+"-"+n)}))},"TrTdSkeleton-tr"+r)}))})},S=(r(6523),r(8712)),Z=(r(7985),r(6834)),O=r(6838),T=r(3180),V=r(1149),L=r(3134),P=r(887),_=r(7284),R=r(1907),E=r(5423),F=(0,E.Ry)({id:(0,E.Rx)(),keyName:(0,E.Z_)().required("\u540d\u79f0\u5fc5\u987b\u586b\u5199"),currentValue:(0,E.Z_)(),remark:(0,E.Z_)(),keyType:(0,E.Rx)(),sectionName:(0,E.Z_)()});function D(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function I(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?D(Object(r),!0).forEach((function(n){(0,O.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var G=function e(n){var r;(0,u.useEffect)((function(){void 0!=n.name&&(d(n.name),w([n.prefixTitle,n.name,n.remark].join(" ").trim()))}),[n.name,n.prefixTitle,n.remark]);var t=(0,u.useState)(),s=t[0],d=t[1];(0,u.useEffect)((function(){}),[]);var v=(0,u.useState)(!1),f=v[0],x=v[1],h=(0,u.useState)(),p=h[0],N=h[1],b=(0,u.useState)(),k=b[0],w=b[1],O=function(e){""!=s&&void 0!=s?(N(void 0!=e?I({},e):void 0),x(!0)):R.ZP.error("\u5f53\u524d\u4e0d\u53ef\u4f7f\u7528\u6b64\u529f\u80fd.")},P=(0,u.useMemo)((function(){return["GetRulesListBySectionName",s]}),[s]),_=(0,y.useQuery)(P,(0,a.Z)(o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r=s,m.get("GetRulesListBySectionName",{params:{sectionName:r}});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}var r}),e)}))),{enabled:void 0!=s}),E=(0,y.useMutation)((function(e){return n=I(I({},e),{},{sectionName:s}),m.post("AddOrUpdateRulesInfo",n);var n}),{onSuccess:function(e,n,r){!0===e&&_.refetch()}}),F=(0,j.Z)((function(e){B(e)}),500,{maxWait:2e3}),D=(0,u.useState)(""),G=D[0],B=D[1],M=(0,u.useMemo)((function(){var e,n,r,t=null!==(e=null===G||void 0===G||null===(n=G.trim())||void 0===n?void 0:n.toLowerCase())&&void 0!==e?e:"";return t.length>0?null===(r=_.data)||void 0===r?void 0:r.filter((function(e){var n,r,i,l,a,s,o;return(null===(n=e.keyName)||void 0===n?void 0:n.toString().toLowerCase().includes(t))||(null===(r=e.currentValue)||void 0===r||null===(i=r.toString())||void 0===i||null===(l=i.toLowerCase())||void 0===l?void 0:l.includes(t))||(null===(a=e.remark)||void 0===a||null===(s=a.toString())||void 0===s||null===(o=s.toLowerCase())||void 0===o?void 0:o.includes(t))})):_.data}),[_.data,G]),Q=function(e){void 0!=(null===e||void 0===e?void 0:e.sectionName)&&void 0!=(null===e||void 0===e?void 0:e.keyName)&&function(e){var n=e.sectionName,r=e.keyName;return console.log(n,r),m.post("DeleteRule",{sectionName:n,keyName:r})}(e).then((function(e){!0===e&&_.refetch()}))},W=(0,u.useState)(!1),X=W[0],U=W[1],q=(0,u.useState)(""),z=q[0],H=q[1],Y=(0,u.useState)(""),J=Y[0],K=Y[1];return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("div",{className:"w-full h-full",children:[(0,g.jsxs)("div",{className:"flex items-center justify-center py-2 space-x-2 border-b-2",children:[(0,g.jsx)("span",{children:k}),(0,g.jsx)(l.Z,{icon:(0,g.jsx)(T.Z,{}),onClick:function(){O(void 0)},children:"\u6dfb\u52a0rule"}),(0,g.jsx)(i.Z,{className:"w-96",placeholder:"\u641c\u7d22",onChange:function(e){return F(e.currentTarget.value)}})]}),_.isFetching&&(0,g.jsx)(C,{trCount:4,tdCount:5}),(0,g.jsx)(c.Ym,{width:1e3,height:500,columnCount:1,columnWidth:1e3,rowCount:null!==(r=null===M||void 0===M?void 0:M.length)&&void 0!==r?r:0,rowHeight:50,className:"w-full",overscanRowCount:20,children:function(e){var n,r,t,i,a,s=null===M||void 0===M?void 0:M[e.rowIndex];return void 0==s?(0,g.jsx)(g.Fragment,{}):(0,g.jsxs)("div",{className:"flex justify-center w-full border-b",style:e.style,children:[(0,g.jsx)("div",{className:"w-[80px] flex justify-center items-center border-r",children:s.id}),(0,g.jsx)("div",{className:"w-[300px] flex justify-center items-center border-r",children:["Primary","ElitePrimary","Secondary","EliteSecondary","Projectile","Warhead"].includes(s.keyName)?(0,g.jsx)(g.Fragment,{children:(0,g.jsx)("span",{onClick:function(){return e=null===s||void 0===s?void 0:s.currentValue,n=null===s||void 0===s?void 0:s.remark,U(!0),H(e),void K(n);var e,n},className:"w-full cursor-pointer bg-[lightgoldenrodyellow] text-center",children:s.keyName})}):s.keyName}),(0,g.jsx)("div",{className:"w-[160px] flex justify-center items-center border-r",children:(null!==(n=null===(r=s.currentValue)||void 0===r?void 0:r.length)&&void 0!==n?n:0)>40?(0,g.jsx)(Z.Z,{title:s.keyName,content:s.currentValue,children:(0,g.jsx)(l.Z,{children:"\u67e5\u770b"})}):null===(t=s.currentValue)||void 0===t?void 0:t.toString()}),(0,g.jsx)("div",{className:"w-[600px] flex justify-center items-center border-r",children:(null!==(i=null===(a=s.remark)||void 0===a?void 0:a.length)&&void 0!==i?i:0)>40?(0,g.jsx)(Z.Z,{title:s.keyName,content:s.remark,children:(0,g.jsx)(l.Z,{children:"\u67e5\u770b"})}):s.remark}),(0,g.jsx)("div",{className:"w-[100px] flex justify-center items-center border-r",children:(0,g.jsxs)("div",{className:"flex space-x-2",children:[(0,g.jsx)(l.Z,{icon:(0,g.jsx)(V.Z,{}),onClick:function(){return O(s)}}),(0,g.jsx)(l.Z,{icon:(0,g.jsx)(L.Z,{}),danger:!0,onClick:function(){return Q(s)}})]})})]},"".concat(s.keyName).concat(s.id))}})]}),(0,g.jsx)(A,{modalTitle:k,isOpen:f,onClose:function(){x(!1)},formData:p,onSubmit:function(e){E.mutateAsync(e)}}),(0,g.jsx)(S.Z,{visible:X,footer:null,width:"100%",destroyOnClose:!0,onCancel:function(){U(!1)},children:X&&(0,g.jsx)(e,{name:z,remark:J,prefixTitle:k})})]})},A=function(e){var n,r,t,i=(0,_.cI)({mode:"all",resolver:(0,P.X)(F.pick(["keyName"]))}),a=i.register,s=i.handleSubmit,o=i.formState.errors,c=i.setValue,d=i.reset;(0,u.useEffect)((function(){d();var n=e.formData;if(void 0!=n)for(var r=0,t=Object.keys(n);r<t.length;r++){var i=t[r];c(i,n[i])}}),[e.formData,d,c]);var v=(0,u.useState)(),f=v[0],x=v[1],y=(0,u.useState)(!1),N=y[0],b=y[1],k=function(){x([])},w=(0,j.Z)((function(e){var n;""!=e.replace(/\s*/g,"")?0==N&&(b(!0),(n=e,m.get("SearchRulesInfo",{params:{keyName:n}})).then((function(e){x(e),b(!1)}))):k()}),1e3,{maxWait:2e3});return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(S.Z,{visible:e.isOpen,footer:null,onCancel:function(){k(),e.onClose()},children:(0,g.jsxs)("form",{onSubmit:s((function(n){e.onSubmit((0,p.Z)(n)),e.onClose()})),children:[(0,g.jsxs)("span",{className:"text-sm",children:["\u6b63\u5728\u64cd\u4f5c \u3010",e.modalTitle,"\u3011"]}),(0,g.jsxs)("div",{className:"flex flex-col py-4",children:[(0,g.jsxs)("div",{className:"w-full max-w-xs form-control",children:[(0,g.jsxs)("label",{className:"label",children:[(0,g.jsxs)("span",{className:"label-text",children:["\u540d\u79f0 ",(0,g.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,g.jsx)("span",{className:"text-red-500 label-text-alt",children:null===(n=o.keyName)||void 0===n?void 0:n.message})]}),(0,g.jsxs)("div",{className:"relative z-50 w-72",children:[(0,g.jsx)("input",I(I({},a("keyName")),{},{type:"text",className:h()("input input-bordered w-full max-w-xs",{"input-error":null!=(null===(r=o.keyName)||void 0===r?void 0:r.message)}),autoComplete:"off",onInput:function(e){return w(e.currentTarget.value)}})),(null!==(t=null===f||void 0===f?void 0:f.length)&&void 0!==t?t:0)>0&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("label",{onClick:function(){k()},className:"absolute btn-sm btn btn-circle -right-9 top-14",children:"X"}),(0,g.jsx)("div",{className:"absolute w-full overflow-y-auto bg-white border border-red-600 top-14 h-52",children:null===f||void 0===f?void 0:f.map((function(e){var n;return(0,g.jsxs)("p",{onClick:function(){c("keyName",e.keyName),c("remark",e.remark),k()},className:"hover:bg-gray-200 ",children:[e.keyName," ",(0,g.jsx)("span",{className:"text-xs text-orange-500",children:null===(n=e.remark)||void 0===n?void 0:n.substring(0,20)})]},e.id)}))})]})]})]}),(0,g.jsxs)("div",{className:"w-full max-w-xs form-control",children:[(0,g.jsx)("label",{className:"label",children:(0,g.jsx)("span",{className:"label-text",children:"\u5f53\u524d\u503c"})}),(0,g.jsx)("input",I(I({},a("currentValue")),{},{className:"w-full max-w-xs input input-bordered",type:"text"}))]}),(0,g.jsxs)("div",{className:"form-control",children:[(0,g.jsx)("label",{className:"label",children:(0,g.jsx)("span",{className:"label-text",children:"\u5907\u6ce8"})}),(0,g.jsx)("textarea",I(I({},a("remark")),{},{className:"h-24 textarea textarea-bordered"}))]})]}),(0,g.jsxs)("div",{className:"space-x-2 text-right",children:[(0,g.jsx)(l.Z,{onClick:e.onClose,children:"\u5173\u95ed"}),(0,g.jsx)(l.Z,{htmlType:"submit",type:"primary",children:"\u786e\u5b9a"})]})]})})})},B=(0,u.memo)(G);var M=function(){var e,n,r,s=(0,y.useQueryClient)(),d=((0,b.useRouter)(),(0,u.useState)()),x=d[0],k=d[1],w=(0,u.useState)(),S=w[0],Z=w[1],O=(0,u.useState)(!1),T=O[0],V=O[1],L=(0,u.useState)(""),P=L[0],_=L[1],R=(0,y.useIsFetching)(),E=(0,y.useQuery)(["GetSettingList"],v),F=(0,y.useQuery)(["GetTypesList"],f),D=(0,u.useMemo)((function(){return["GetRulesListByTypesName",S]}),[S]),I=(0,y.useQuery)(D,(0,a.Z)(o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r=S,m.get("GetRulesListByTypesName",{params:{typesName:r}});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}var r}),e)}))),{enabled:void 0!=S}),G=(0,u.useState)(""),A=G[0],M=G[1],Q=(0,j.Z)((function(e){M(e)}),500,{maxWait:2e3}),W=(0,u.useMemo)((function(){var e,n,r,t=null!==(e=null===A||void 0===A||null===(n=A.trim())||void 0===n?void 0:n.toLowerCase())&&void 0!==e?e:"";return t.length>0?null===(r=I.data)||void 0===r?void 0:r.filter((function(e){var n,r,i,l,a,s,o;return(null===(n=e.keyName)||void 0===n?void 0:n.toString().toLowerCase().includes(t))||(null===(r=e.currentValue)||void 0===r||null===(i=r.toString())||void 0===i||null===(l=i.toLowerCase())||void 0===l?void 0:l.includes(t))||(null===(a=e.remark)||void 0===a||null===(s=a.toString())||void 0===s||null===(o=s.toLowerCase())||void 0===o?void 0:o.includes(t))})):I.data}),[I.data,A]),X=(0,u.useState)(),U=X[0],q=X[1],z=function(e){var n;k(e);var r=null===(n=I.data)||void 0===n?void 0:n.find((function(n){return n.currentValue==e}));q(null===r||void 0===r?void 0:r.remark),V(!1)},H=(0,y.useMutation)((function(e){return n=e.sectionName,r=e.remark,m.post("AddOrUpdateSectionRemark",{keyName:n,remark:r});var n,r}),{onSuccess:function(e,n,r){!0===e&&s.setQueryData(D,(0,N.ZP)((0,p.Z)(I.data),(function(e){var r=null===e||void 0===e?void 0:e.find((function(e){return e.currentValue===n.sectionName}));void 0!=r&&(r.remark=n.remark)})))}});return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("div",{className:"w-full h-full",children:[R>0&&(0,g.jsx)("p",{className:"fixed top-0 left-2",children:"\u6b63\u5728\u83b7\u53d6\u670d\u52a1\u5668\u6570\u636e..."}),(0,g.jsxs)("div",{className:"flex items-center justify-center py-2 space-x-2 border-b-2",children:[null===(e=E.data)||void 0===e?void 0:e.map((function(e){return(0,g.jsx)(l.Z,{onClick:function(){return z(e.keyName)},children:e.remark},e.keyName)})),null===(n=F.data)||void 0===n?void 0:n.map((function(e){return(0,g.jsx)(l.Z,{onClick:function(){return n=e.keyName,V(!0),void Z(n);var n},children:e.remark},e.keyName)}))]}),(0,g.jsx)(B,{name:x,remark:U})]}),(0,g.jsxs)(t.Z,{placement:"left",visible:T,closeIcon:null,title:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(i.Z,{placeholder:"\u641c\u7d22",onChange:function(e){return Q(e.currentTarget.value)}}),S,"   ",I.isFetching&&"\u6b63\u5728\u66f4\u65b0..."]}),onClose:function(){return V(!1)},children:[I.isFetching&&(0,g.jsx)(C,{trCount:4,tdCount:3}),(0,g.jsx)(c.Ym,{width:250,height:500,columnCount:1,columnWidth:250,rowCount:null!==(r=null===W||void 0===W?void 0:W.length)&&void 0!==r?r:0,rowHeight:50,className:"w-full",overscanRowCount:20,children:function(e){var n=null===W||void 0===W?void 0:W[e.rowIndex];return void 0==n?(0,g.jsx)(g.Fragment,{}):(0,g.jsxs)("div",{style:e.style,className:h()("flex w-full border-b justify-center",{"border-l border-r border-t border-red-500":x==n.currentValue}),children:[(0,g.jsx)("div",{className:"w-[100px] flex items-center justify-center border-r",children:n.keyName}),(0,g.jsx)("div",{className:"w-[200px] flex items-center justify-center border-r",onClick:function(){var e;return z(null!==(e=null===n||void 0===n?void 0:n.currentValue)&&void 0!==e?e:"")},children:(0,g.jsx)("span",{className:"bg-yellow-200 border",children:n.currentValue})}),(0,g.jsx)("div",{className:"w-[200px] flex items-center justify-center border-r",onClick:function(){return _(null===n||void 0===n?void 0:n.currentValue)},children:P==n.currentValue?(0,g.jsx)(i.Z,{defaultValue:n.remark,onBlur:function(e){var r=e.currentTarget.value;(null===n||void 0===n?void 0:n.remark)!=r&&(H.mutateAsync({sectionName:null===n||void 0===n?void 0:n.currentValue,remark:null!==r&&void 0!==r?r:""}),_(""))}}):n.remark})]},"".concat(n.keyName).concat(n.id).concat(n.currentValue))}})]})]})}},9081:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(3832)}])}},function(e){e.O(0,[273,774,888,179],(function(){return n=9081,e(e.s=n);var n}));var n=e.O();_N_E=n}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[328],{6092:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/share-template",function(){return a(9440)}])},4533:function(e,t,a){"use strict";a.d(t,{zx:function(){return c},p0:function(){return f},Wn:function(){return p},xv:function(){return i}});var s=a(5893),n=a(512),l=a(7851);let r=function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,l.m)((0,n.Z)(...t))},i=e=>{let{className:t,children:a,font:n="gothic",...l}=e;return(0,s.jsx)("span",{...l,className:r("text-base text-chalk-50 tracking-[0.16px]",{druk:"font-[Druk-medium]",gothic:"font-[TradeGothicLTStd]"}[n],t),children:a})},c=e=>{let{className:t,children:a,loading:n=!1,loadingText:l="",textClass:c,...o}=e;return(0,s.jsx)("button",{...o,className:r("flex justify-center items-center skew-y-[1deg] hover:skew-y-[1.5deg]","w-full px-6 py-2 max-w-[12rem] text-center bg-tomato-50","disabled:cursor-not-allowed disabled:opacity-50",t),children:(0,s.jsx)("div",{className:"flex items-center space-x-3 justify-center",children:(0,s.jsx)(i,{className:r("text-sm text-chalk-50 font-bold","md:text-base uppercase skew-y-[-1deg] font-[Druk-bold]",c),children:l&&n?l:a})})})};var o=a(7294),d=a(5675),u=a.n(d);let f=e=>{let{onFileSelect:t,title:a,subTitle:n,acceptType:l,maxWidth:c,maxHeight:d}=e,[f,m]=(0,o.useState)(!1),[p,x]=(0,o.useState)(""),h=(0,o.useRef)(null),v=async e=>{var a,s,n;(null==e?void 0:null===(a=e.target)||void 0===a?void 0:a.files)&&(null==e?void 0:null===(s=e.target)||void 0===s?void 0:s.files[0])&&t&&"function"==typeof t&&(d&&c?j(e.target.files[0]):(x(null===(n=e.target.files[0])||void 0===n?void 0:n.name),t(e.target.files[0])))},g=async e=>{var a,s,n;e.preventDefault(),m(!1);let l=(null==e?void 0:null===(a=e.dataTransfer)||void 0===a?void 0:a.files[0])||"";l&&t&&"function"==typeof t?d&&c&&j(l):(x(null==e?void 0:null===(n=e.dataTransfer)||void 0===n?void 0:null===(s=n.files[0])||void 0===s?void 0:s.name),t(l))},w=(e,t,a)=>{let s=window.URL||window.webkitURL,n=new(u()),l=s.createObjectURL(e),r=new Promise((e,r)=>{n.onload=function(){this.width<=t&&this.height<=a?e(!0):r(!1),s.revokeObjectURL(l)},n.onerror=r});return n.src=l,r},j=async e=>{try{let a=await w(e,c,d);a?(x(null==e?void 0:e.name),t(e)):(x(""),t(""))}catch(e){x(""),t("")}};return(0,s.jsx)("div",{onDragOver:e=>{e.preventDefault(),m(!0)},onDragLeave:e=>{e.preventDefault(),m(!1)},onDrop:g,children:(0,s.jsxs)("div",{className:r("flex items-center justify-between","cursor-pointer px-[15px] py-[10px] skew-y-[-1deg]",{"bg-primary-300":f,"border border-tomato-50 bg-secondary-50":!f}),onClick:()=>{h.current&&h.current.click()},children:[(0,s.jsx)("div",{className:"",children:(0,s.jsxs)("p",{className:"font-bold tracking-[0.18px] text-[18px]",children:[p||a,(0,s.jsx)(i,{className:"tracking-[0.16px] block text-graphite-100",children:n})]})}),(0,s.jsx)(u(),{src:"/cloud-red.svg",className:"",alt:"cloud-icon",width:34,height:34}),(0,s.jsx)("input",{ref:h,className:"hidden",accept:l,type:"file",onChange:v})]})})};var m=a(2777);let p=e=>{let{jsonObjects:t,name:a,onSelectFrame:n,selectedFrameName:l="",forwardedRef:i}=e,[c,d]=(0,o.useState)(""),[u,f]=(0,o.useState)(!0);o.useImperativeHandle(i,()=>({downloadAsImage:p})),(0,o.useEffect)(()=>{let e=new m.fabric.StaticCanvas(a);e.loadFromJSON(t,()=>{let t=e.toDataURL({format:"png",left:0,top:0,width:325,height:563});d(t),f(!1)})},[]);let p=()=>{if(c){let e=document.createElement("a");e.href=c,e.download="downloaded-template.png",e.click()}};return(0,s.jsx)("div",{className:"w-full",children:u?(0,s.jsx)("div",{className:"w-full animate-pulse h-96 bg-primary-200"}):(0,s.jsx)("div",{className:r("p-[10px]",l===a&&"bg-tomato-200"),onClick:()=>n&&n(a),children:(0,s.jsx)("img",{className:"",src:c,alt:a})})})}},9440:function(e,t,a){"use strict";a.r(t);var s=a(5893),n=a(7294),l=a(512),r=a(5675),i=a.n(r),c=a(4533);t.default=()=>{let[e,t]=(0,n.useState)(""),a=(0,n.useRef)(null);return(0,n.useEffect)(()=>{let e=localStorage.getItem("temp")&&JSON.parse(localStorage.getItem("temp")||"");return(null==e?void 0:e.name)&&t(e),()=>{localStorage.clear()}},[]),(0,s.jsx)("div",{className:(0,l.Z)("bg-cover bg-center bg-no-repeat bg-download-page","flex flex-col justify-center items-center min-h-screen"),children:(0,s.jsxs)("div",{className:"w-[80%] flex justify-center items-center text-chalk-50",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)(i(),{className:"relative left-[-52px]",src:"/logoHWD.svg",alt:"logo",width:200,height:99}),(0,s.jsxs)("div",{className:"",children:[(0,s.jsx)(c.xv,{font:"druk",className:"tracking-[0px] text-9xl uppercase",children:"E… A\xc7\xc3O!"}),(0,s.jsx)("p",{className:"text-[24px] uppercase w-[85%] my-4 leading-[23px]",children:"AQUI TENS O TEU POSTER VER\xc3O DE A\xc7\xc3O, QUE PROMETE SER O NOVO SUCESSO NAS BILHETEIRAS."}),(0,s.jsx)("p",{className:"uppercase my-2",children:"GUARDA E PARTILHA-O COM QUEM FEZ PARTE DESTE FILME!"}),(0,s.jsxs)("div",{className:"flex items-center gap-[10px] my-4",children:[(0,s.jsx)(i(),{className:"cursor-pointer",src:"/facebook.svg",alt:"facebook",width:49,height:49}),(0,s.jsx)(i(),{className:"cursor-pointer",src:"/instagram.svg",alt:"instagram",width:49,height:49}),(0,s.jsx)(i(),{className:"cursor-pointer",src:"/twitter.svg",alt:"twitter",width:49,height:49}),(0,s.jsx)(i(),{className:"cursor-pointer",src:"/whats-app.svg",alt:"whats-app",width:49,height:49}),(0,s.jsx)(i(),{className:"cursor-pointer",onClick:()=>{var e;return null==a?void 0:null===(e=a.current)||void 0===e?void 0:e.downloadAsImage()},src:"/download.svg",alt:"download",width:49,height:49})]})]})]}),e&&e.template&&(0,s.jsx)(c.Wn,{jsonObjects:null==e?void 0:e.template,name:null==e?void 0:e.name,forwardedRef:a})]})})}},4960:function(){},6759:function(){},6272:function(){}},function(e){e.O(0,[498,601,774,888,179],function(){return e(e.s=6092)}),_N_E=e.O()}]);
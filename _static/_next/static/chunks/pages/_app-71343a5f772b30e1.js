(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{3454:function(e,t,r){"use strict";var n,i;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(i=r.g.process)?void 0:i.env)?r.g.process:r(7663)},6840:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(2978)}])},9531:function(e,t,r){"use strict";r.d(t,{Lp:function(){return a},fr:function(){return o},xF:function(){return u}});var n=r(6997),i=r(3454);let a=new n.KU({url:"http://64.226.64.247/graphql",exchanges:[n.HG,n.Ek]});console.log("process.env.",i.env.REACT_APP_API_URL);let o=async e=>{try{let t=new FormData;t.append("file",e);let r=await fetch("http://64.226.64.247/upload-file",{method:"POST",body:t});if(null==r?void 0:r.ok)return await (null==r?void 0:r.json());{let e=await (null==r?void 0:r.json());return e||!1}}catch(e){return e}},u=async e=>{try{let t=await fetch("http://64.226.64.247/generateAIText",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(null==t?void 0:t.ok)return await (null==t?void 0:t.json());{let e=await (null==t?void 0:t.json());return e||!1}}catch(e){return e}}},8145:function(e,t,r){"use strict";r.d(t,{_:function(){return o},t:function(){return a}});var n=r(6997);function i(){var e,t;let r=(e=['\n  query {\n    paginationTemplate(\n      filter: { isPublished: "true" }\n      sort: _ID_DESC\n      page: 1\n      perPage: 4\n    ) {\n      items {\n        name\n        template\n        isPublished\n        _id\n        createdAt\n      }\n    }\n  }\n'],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return i=function(){return r},r}let a=(0,n.Ps)(i()),o="\nquery {\n  paginationFonts(sort: NAME_ASC) {\n    items{\n      name,\n      fontUrl\n    }\n  }\n}\n"},2978:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return c}});var n=r(5893),i=r(2432),a=r(9531),o=r(8145),u=r(7294),s=()=>{let[e]=(0,i.aM)({query:o._,requestPolicy:"network-only"}),{data:t}=e;return(0,u.useEffect)(()=>{var e,r;(null==t?void 0:null===(e=t.paginationFonts)||void 0===e?void 0:e.items)&&(null==t||null===(r=t.paginationFonts)||void 0===r||r.items.forEach(async e=>{let t=new FontFace(null==e?void 0:e.name,"url(".concat("http://64.226.64.247"+e.fontUrl,")")),r=await t.load();document.fonts.add(r)}))},[t]),null};function c(e){let{Component:t,pageProps:r}=e;return(0,n.jsxs)(i.zt,{value:a.Lp,children:[(0,n.jsx)(s,{}),(0,n.jsx)(t,{...r})]})}r(3077)},3077:function(){},7663:function(e){!function(){var t={229:function(e){var t,r,n,i=e.exports={};function a(){throw Error("setTimeout has not been defined")}function o(){throw Error("clearTimeout has not been defined")}function u(e){if(t===setTimeout)return setTimeout(e,0);if((t===a||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:a}catch(e){t=a}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var s=[],c=!1,l=-1;function f(){c&&n&&(c=!1,n.length?s=n.concat(s):l=-1,s.length&&d())}function d(){if(!c){var e=u(f);c=!0;for(var t=s.length;t;){for(n=s,s=[];++l<t;)n&&n[l].run();l=-1,t=s.length}n=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function v(e,t){this.fun=e,this.array=t}function p(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];s.push(new v(e,t)),1!==s.length||c||u(d)},v.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=p,i.addListener=p,i.once=p,i.off=p,i.removeListener=p,i.removeAllListeners=p,i.emit=p,i.prependListener=p,i.prependOnceListener=p,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},r={};function n(e){var i=r[e];if(void 0!==i)return i.exports;var a=r[e]={exports:{}},o=!0;try{t[e](a,a.exports,n),o=!1}finally{o&&delete r[e]}return a.exports}n.ab="//";var i=n(229);e.exports=i}()},2432:function(e,t,r){"use strict";r.d(t,{aM:function(){return h},zt:function(){return u}});var n=r(6138),i=r(7294),a=r(3496),o=i.createContext({}),u=o.Provider;o.Consumer,o.displayName="UrqlContext";var s=()=>i.useContext(o),c={fetching:!1,stale:!1,error:void 0,data:void 0,extensions:void 0,operation:void 0},l=(e,t)=>e===t||!(!e||!t||e.key!==t.key),f=(e,t)=>{var r={...e,...t,data:void 0!==t.data||t.error?t.data:e.data,fetching:!!t.fetching,stale:!!t.stale};return((e,t)=>{for(var r in e)if(!(r in t))return!0;for(var n in t)if("operation"===n?!l(e[n],t[n]):e[n]!==t[n])return!0;return!1})(e,r)?r:e},d=(e,t)=>{for(var r=0,n=t.length;r<n;r++)if(e[r]!==t[r])return!0;return!1};i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;var v=e=>{if(!e._react){var t=new Set,r=new Map;e.operations$&&(0,a.Ld)(e=>{"teardown"===e.kind&&t.has(e.key)&&(t.delete(e.key),r.delete(e.key))})(e.operations$),e._react={get:e=>r.get(e),set(e,n){t.delete(e),r.set(e,n)},dispose(e){t.add(e)}}}return e._react},p=(e,t)=>e.suspense&&(!t||!1!==t.suspense);function h(e){var t,r,o,u=s(),l=v(u),h=p(u,e.context),y=(t=e.query,r=e.variables,o=i.useRef(void 0),i.useMemo(()=>{var e=(0,n.h)(t,r);return void 0!==o.current&&o.current.key===e.key?o.current:(o.current=e,e)},[t,r])),m=i.useMemo(()=>{if(e.pause)return null;var t=u.executeQuery(y,{requestPolicy:e.requestPolicy,...e.context});return h?(0,a.Mq)(e=>{l.set(y.key,e)})(t):t},[l,u,y,h,e.pause,e.requestPolicy,e.context]),g=i.useCallback((e,t)=>{if(!e)return{fetching:!1};var r=l.get(y.key);if(r){if(t&&null!=r&&"then"in r)throw r}else{var n,i=(0,a.Ld)(e=>{r=e,n&&n(r)})((0,a.oE)(()=>t&&!n||!r)(e));if(null==r&&t){var o=new Promise(e=>{n=e});throw l.set(y.key,o),o}i.unsubscribe()}return r||{fetching:!0}},[l,y]),k=[u,y,e.requestPolicy,e.context,e.pause],[x,b]=i.useState(()=>[m,f(c,g(m,h)),k]),w=x[1];return m!==x[0]&&d(x[2],k)&&b([m,w=f(x[1],g(m,h)),k]),i.useEffect(()=>{var e=x[0],t=x[2][1],r=!1,n=e=>{r=!0,b(t=>{var r=f(t[1],e);return t[1]!==r?[t[0],r,t[2]]:t})};if(e){var i=(0,a.Ld)(n)((0,a.ok)(()=>{n({fetching:!1})})(e));return r||n({fetching:!0}),()=>{l.dispose(t.key),i.unsubscribe()}}n({fetching:!1})},[l,x[0],x[2][1]]),[w,i.useCallback(t=>{var r={requestPolicy:e.requestPolicy,...e.context,...t};b(e=>[h?(0,a.Mq)(e=>{l.set(y.key,e)})(u.executeQuery(y,r)):u.executeQuery(y,r),e[1],k])},[u,l,y,h,e.requestPolicy,e.context,e.pause])]}},6155:function(e,t,r){"use strict";r.d(t,{Qc:function(){return T},S0:function(){return D},__:function(){return o},hY:function(){return a}});var n,i,a={NAME:"Name",DOCUMENT:"Document",OPERATION_DEFINITION:"OperationDefinition",VARIABLE_DEFINITION:"VariableDefinition",SELECTION_SET:"SelectionSet",FIELD:"Field",ARGUMENT:"Argument",FRAGMENT_SPREAD:"FragmentSpread",INLINE_FRAGMENT:"InlineFragment",FRAGMENT_DEFINITION:"FragmentDefinition",VARIABLE:"Variable",INT:"IntValue",FLOAT:"FloatValue",STRING:"StringValue",BOOLEAN:"BooleanValue",NULL:"NullValue",ENUM:"EnumValue",LIST:"ListValue",OBJECT:"ObjectValue",OBJECT_FIELD:"ObjectField",DIRECTIVE:"Directive",NAMED_TYPE:"NamedType",LIST_TYPE:"ListType",NON_NULL_TYPE:"NonNullType"};class o extends Error{constructor(e,t,r,n,i,a,o){super(e),this.name="GraphQLError",this.message=e,i&&(this.path=i),t&&(this.nodes=Array.isArray(t)?t:[t]),r&&(this.source=r),n&&(this.positions=n),a&&(this.originalError=a);var u=o;if(!u&&a){var s=a.extensions;s&&"object"==typeof s&&(u=s)}this.extensions=u||{}}toJSON(){return{...this,message:this.message}}toString(){return this.message}get[Symbol.toStringTag](){return"GraphQLError"}}function u(e){return new o(`Syntax Error: Unexpected token at ${i} in ${e}`)}function s(e){if(e.lastIndex=i,e.test(n))return n.slice(i,i=e.lastIndex)}var c=/ +(?=[^\s])/y;function l(){for(var e=0|n.charCodeAt(i++);9===e||10===e||13===e||32===e||35===e||44===e||65279===e;e=0|n.charCodeAt(i++))if(35===e)for(;10!==(e=n.charCodeAt(i++))&&13!==e;);i--}var f=/[_A-Za-z]\w*/y;function d(){var e;if(e=s(f))return{kind:"Name",value:e}}var v=/(?:null|true|false)/y,p=/\$[_A-Za-z]\w*/y,h=/-?\d+/y,y=/(?:\.\d+)?[eE][+-]?\d+|\.\d+/y,m=/\\/g,g=/"""(?:"""|(?:[\s\S]*?[^\\])""")/y,k=/"(?:"|[^\r\n]*?[^\\]")/y;function x(e){if(r=s(v))t="null"===r?{kind:"NullValue"}:{kind:"BooleanValue",value:"true"===r};else if(!e&&(r=s(p)))t={kind:"Variable",name:{kind:"Name",value:r.slice(1)}};else if(r=s(h)){var t,r,a=r;t=(r=s(y))?{kind:"FloatValue",value:a+r}:{kind:"IntValue",value:a}}else if(r=s(f))t={kind:"EnumValue",value:r};else if(r=s(g))t={kind:"StringValue",value:function(e){for(var t=e.split("\n"),r="",n=0,i=0,a=t.length-1,o=0;o<t.length;o++)c.lastIndex=0,c.test(t[o])&&(o&&(!n||c.lastIndex<n)&&(n=c.lastIndex),i=i||o,a=o);for(var u=i;u<=a;u++)u!==i&&(r+="\n"),r+=t[u].slice(n).replace(/\\"""/g,'"""');return r}(r.slice(3,-3)),block:!0};else if(r=s(k))t={kind:"StringValue",value:m.test(r)?JSON.parse(r):r.slice(1,-1),block:!1};else if(t=function(e){var t;if(91===n.charCodeAt(i)){i++,l();for(var r=[];t=x(e);)r.push(t);if(93!==n.charCodeAt(i++))throw u("ListValue");return l(),{kind:"ListValue",values:r}}}(e)||function(e){if(123===n.charCodeAt(i)){i++,l();for(var t,r=[];t=d();){if(l(),58!==n.charCodeAt(i++))throw u("ObjectField");l();var a=x(e);if(!a)throw u("ObjectField");r.push({kind:"ObjectField",name:t,value:a})}if(125!==n.charCodeAt(i++))throw u("ObjectValue");return l(),{kind:"ObjectValue",fields:r}}}(e))return t;return l(),t}function b(e){var t=[];if(l(),40===n.charCodeAt(i)){for(i++,l();r=d();){if(l(),58!==n.charCodeAt(i++))throw u("Argument");l();var r,a=x(e);if(!a)throw u("Argument");t.push({kind:"Argument",name:r,value:a})}if(!t.length||41!==n.charCodeAt(i++))throw u("Argument");l()}return t}function w(e){var t=[];for(l();64===n.charCodeAt(i);){i++;var r=d();if(!r)throw u("Directive");l(),t.push({kind:"Directive",name:r,arguments:b(e)})}return t}var N=/on/y;function _(){if(s(N)){l();var e=d();if(!e)throw u("NamedType");return l(),{kind:"NamedType",name:e}}}var S=/\.\.\./y;function E(){var e;if(l(),123===n.charCodeAt(i)){i++,l();for(var t=[];e=function(){if(s(S)){l();var e,t=i;if((e=d())&&"on"!==e.value)return{kind:"FragmentSpread",name:e,directives:w(!1)};i=t;var r=_(),n=w(!1),a=E();if(!a)throw u("InlineFragment");return{kind:"InlineFragment",typeCondition:r,directives:n,selectionSet:a}}}()||function(){var e,t=d();if(t){if(l(),58===n.charCodeAt(i)){if(i++,l(),e=t,!(t=d()))throw u("Field");l()}return{kind:"Field",alias:e,name:t,arguments:b(!1),directives:w(!1),selectionSet:E()}}}();)t.push(e);if(!t.length||125!==n.charCodeAt(i++))throw u("SelectionSet");return l(),{kind:"SelectionSet",selections:t}}}var A=/fragment/y,O=/(?:query|mutation|subscription)/y;function T(e,t){return n="string"==typeof e.body?e.body:e,i=0,function(){l();for(var e,t=[];e=function(){if(s(A)){l();var e=d();if(!e)throw u("FragmentDefinition");l();var t=_();if(!t)throw u("FragmentDefinition");var r=w(!1),n=E();if(!n)throw u("FragmentDefinition");return{kind:"FragmentDefinition",name:e,typeCondition:t,directives:r,selectionSet:n}}}()||function(){var e,t,r=[],a=[];(e=s(O))&&(l(),t=d(),r=function(){var e,t=[];if(l(),40===n.charCodeAt(i)){for(i++,l();e=s(p);){if(l(),58!==n.charCodeAt(i++))throw u("VariableDefinition");var r=function e(){var t;if(l(),91===n.charCodeAt(i)){i++,l();var r=e();if(!r||93!==n.charCodeAt(i++))throw u("ListType");t={kind:"ListType",type:r}}else if(t=d())t={kind:"NamedType",name:t};else throw u("NamedType");return(l(),33===n.charCodeAt(i))?(i++,l(),{kind:"NonNullType",type:t}):t}(),a=void 0;if(61===n.charCodeAt(i)&&(i++,l(),!(a=x(!0))))throw u("VariableDefinition");l(),t.push({kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:e.slice(1)}},type:r,defaultValue:a,directives:w(!0)})}if(41!==n.charCodeAt(i++))throw u("VariableDefinition");l()}return t}(),a=w(!1));var o=E();if(o)return{kind:"OperationDefinition",operation:e||"query",name:t,variableDefinitions:r,directives:a,selectionSet:o}}();)t.push(e);return{kind:"Document",definitions:t}}()}var I=e=>!(!e||!e.length),q={OperationDefinition(e){if("query"===e.operation&&!e.name&&!I(e.variableDefinitions)&&!I(e.directives))return q.SelectionSet(e.selectionSet);var t=e.operation;return e.name&&(t+=" "+e.name.value),I(e.variableDefinitions)&&(e.name||(t+=" "),t+="("+e.variableDefinitions.map(q.VariableDefinition).join(", ")+")"),I(e.directives)&&(t+=" "+e.directives.map(q.Directive).join(" ")),t+" "+q.SelectionSet(e.selectionSet)},VariableDefinition(e){var t=q.Variable(e.variable)+": "+D(e.type);return e.defaultValue&&(t+=" = "+D(e.defaultValue)),I(e.directives)&&(t+=" "+e.directives.map(q.Directive).join(" ")),t},Field(e){var t=(e.alias?e.alias.value+": ":"")+e.name.value;if(I(e.arguments)){var r=e.arguments.map(q.Argument),n=t+"("+r.join(", ")+")";t=n.length>80?t+"(\n  "+r.join("\n").replace(/\n/g,"\n  ")+"\n)":n}return I(e.directives)&&(t+=" "+e.directives.map(q.Directive).join(" ")),e.selectionSet?t+" "+q.SelectionSet(e.selectionSet):t},StringValue:e=>e.block?'"""\n'+e.value.replace(/"""/g,'\\"""')+'\n"""':JSON.stringify(e.value),BooleanValue:e=>""+e.value,NullValue:e=>"null",IntValue:e=>e.value,FloatValue:e=>e.value,EnumValue:e=>e.value,Name:e=>e.value,Variable:e=>"$"+e.name.value,ListValue:e=>"["+e.values.map(D).join(", ")+"]",ObjectValue:e=>"{"+e.fields.map(q.ObjectField).join(", ")+"}",ObjectField:e=>e.name.value+": "+D(e.value),Document:e=>I(e.definitions)?e.definitions.map(D).join("\n\n"):"",SelectionSet:e=>"{\n  "+e.selections.map(D).join("\n").replace(/\n/g,"\n  ")+"\n}",Argument:e=>e.name.value+": "+D(e.value),FragmentSpread(e){var t="..."+e.name.value;return I(e.directives)&&(t+=" "+e.directives.map(q.Directive).join(" ")),t},InlineFragment(e){var t="...";return e.typeCondition&&(t+=" on "+e.typeCondition.name.value),I(e.directives)&&(t+=" "+e.directives.map(q.Directive).join(" ")),t+" "+D(e.selectionSet)},FragmentDefinition(e){var t="fragment "+e.name.value;return t+=" on "+e.typeCondition.name.value,I(e.directives)&&(t+=" "+e.directives.map(q.Directive).join(" ")),t+" "+D(e.selectionSet)},Directive(e){var t="@"+e.name.value;return I(e.arguments)&&(t+="("+e.arguments.map(q.Argument).join(", ")+")"),t},NamedType:e=>e.name.value,ListType:e=>"["+D(e.type)+"]",NonNullType:e=>D(e.type)+"!"};function D(e){return q[e.kind]?q[e.kind](e):""}},6138:function(e,t,r){"use strict";r.d(t,{d:function(){return D},e:function(){return C},f:function(){return Q},h:function(){return S},k:function(){return _},m:function(){return q},s:function(){return w}});var n=r(6155),i=r(3496),a=e=>e&&e.message&&(e.extensions||"GraphQLError"===e.name)?e:"object"==typeof e&&e.message?new n.__(e.message,e.nodes,e.source,e.positions,e.path,e,e.extensions||{}):new n.__(e);class o extends Error{constructor(e){var t=(e.graphQLErrors||[]).map(a),r=((e,t)=>{var r="";if(e)return`[Network] ${e.message}`;if(t)for(var n of t)r&&(r+="\n"),r+=`[GraphQL] ${n.message}`;return r})(e.networkError,t);super(r),this.name="CombinedError",this.message=r,this.graphQLErrors=t,this.networkError=e.networkError,this.response=e.response}toString(){return this.message}}var u=(e,t)=>{for(var r=0|(t||5381),n=0,i=0|e.length;n<i;n++)r=(r<<5)+r+e.charCodeAt(n);return r},s=new Set,c=new WeakMap,l=e=>{if(null===e||s.has(e))return"null";if("object"!=typeof e)return JSON.stringify(e)||"";if(e.toJSON)return l(e.toJSON());if(Array.isArray(e)){var t="[";for(var r of e)t.length>1&&(t+=","),t+=l(r)||"null";return t+"]"}if(p!==v&&e instanceof p||h!==v&&e instanceof h)return"null";var n=Object.keys(e).sort();if(!n.length&&e.constructor&&e.constructor!==Object){var i=c.get(e)||Math.random().toString(36).slice(2);return c.set(e,i),l({__key:i})}s.add(e);var a="{";for(var o of n){var u=l(e[o]);u&&(a.length>1&&(a+=","),a+=l(o)+":"+u)}return s.delete(e),a+"}"},f=(e,t,r)=>{if(null==r||"object"!=typeof r||r.toJSON||s.has(r));else if(Array.isArray(r))for(var n=0,i=r.length;n<i;n++)f(e,`${t}.${n}`,r[n]);else if(r instanceof p||r instanceof h)e.set(t,r);else for(var a of(s.add(r),Object.keys(r)))f(e,`${t}.${a}`,r[a])},d=e=>(s.clear(),l(e));class v{}var p="undefined"!=typeof File?File:v,h="undefined"!=typeof Blob?Blob:v,y=/("{3}[\s\S]*"{3}|"(?:\\.|[^"])*")/g,m=/(?:#[^\n\r]+)?(?:[\r\n]+|$)/g,g=(e,t)=>t%2==0?e.replace(m,"\n"):e,k=e=>e.split(y).map(g).join("").trim(),x=new Map,b=new Map,w=e=>{var t;return"string"==typeof e?t=k(e):e.loc&&b.get(e.__key)===e?t=e.loc.source.body:(t=x.get(e)||k((0,n.S0)(e)),x.set(e,t)),"string"==typeof e||e.loc||(e.loc={start:0,end:t.length,source:{body:t,name:"gql",locationOffset:{line:1,column:1}}}),t},N=e=>{var t=u(w(e));if(e.definitions){var r=E(e);r&&(t=u(`
# ${r}`,t))}return t},_=e=>{var t,r;return"string"==typeof e?(t=N(e),r=b.get(t)||(0,n.Qc)(e,{noLocation:!0})):(t=e.__key||N(e),r=b.get(t)||e),r.loc||w(r),r.__key=t,b.set(t,r),r},S=(e,t,r)=>{var n=t||{},i=_(e),a=d(n),o=i.__key;return"{}"!==a&&(o=u(a,o)),{key:o,query:i,variables:n,extensions:r}},E=e=>{for(var t of e.definitions)if(t.kind===n.hY.OPERATION_DEFINITION)return t.name?t.name.value:void 0},A=(e,t,r)=>{if(!("data"in t)&&!("errors"in t))throw Error("No Content");var n="subscription"===e.kind;return{operation:e,data:t.data,error:Array.isArray(t.errors)?new o({graphQLErrors:t.errors,response:r}):void 0,extensions:t.extensions?{...t.extensions}:void 0,hasNext:null==t.hasNext?n:t.hasNext,stale:!1}},O=(e,t)=>{if("object"==typeof e&&null!=e&&(!e.constructor||e.constructor===Object||Array.isArray(e))){for(var r of(e=Array.isArray(e)?[...e]:{...e},Object.keys(t)))e[r]=O(e[r],t[r]);return e}return t},T=(e,t,r)=>{var n=e.error?e.error.graphQLErrors:[],i=!!e.extensions||!!t.extensions,a={...e.extensions,...t.extensions},u=t.incremental;"path"in t&&(u=[t]);var s={data:e.data};if(u)for(var c of u){Array.isArray(c.errors)&&n.push(...c.errors),c.extensions&&(Object.assign(a,c.extensions),i=!0);for(var l="data",f=s,d=0,v=c.path.length;d<v;l=c.path[d++])f=f[l]=Array.isArray(f[l])?[...f[l]]:{...f[l]};if(c.items)for(var p=+l>=0?l:0,h=0,y=c.items.length;h<y;h++)f[p+h]=O(f[p+h],c.items[h]);else void 0!==c.data&&(f[l]=O(f[l],c.data))}else s.data=t.data||e.data,n=t.errors||n;return{operation:e.operation,data:s.data,error:n.length?new o({graphQLErrors:n,response:r}):void 0,extensions:i?a:void 0,hasNext:null!=t.hasNext?t.hasNext:e.hasNext,stale:!1}},I=(e,t,r)=>({operation:e,data:void 0,error:new o({networkError:t,response:r}),extensions:void 0,hasNext:!1,stale:!1});function q(e){return{query:e.extensions&&e.extensions.persistedQuery&&!e.extensions.persistedQuery.miss?void 0:w(e.query),operationName:E(e.query),variables:e.variables||void 0,extensions:e.extensions}}var D=(e,t)=>{var r="query"===e.kind&&e.context.preferGetMethod;if(!r||!t)return e.context.url;var n=new URL(e.context.url);for(var i in t){var a=t[i];a&&n.searchParams.set(i,"object"==typeof a?d(a):a)}var o=n.toString();return o.length>2047&&"force"!==r?(e.context.preferGetMethod=!1,e.context.url):o},j=(e,t)=>{if(t&&!("query"===e.kind&&e.context.preferGetMethod)){var r,n,i=d(t),a=(r=t.variables,n=new Map,(p!==v||h!==v)&&(s.clear(),f(n,"variables",r)),n);if(a.size){var o=new FormData;o.append("operations",i),o.append("map",d({...[...a.keys()].map(e=>[e])}));var u=0;for(var c of a.values())o.append(""+u++,c);return o}return i}},C=(e,t)=>{var r={accept:"subscription"===e.kind?"text/event-stream, multipart/mixed":"application/graphql-response+json, application/graphql+json, application/json, text/event-stream, multipart/mixed"},n=("function"==typeof e.context.fetchOptions?e.context.fetchOptions():e.context.fetchOptions)||{};if(n.headers)for(var i in n.headers)r[i.toLowerCase()]=n.headers[i];var a=j(e,t);return"string"!=typeof a||r["content-type"]||(r["content-type"]="application/json"),{...n,method:a?"POST":"GET",body:a,headers:r}},L="undefined"!=typeof TextDecoder?new TextDecoder:null,F=/boundary="?([^=";]+)"?/i,P=/data: ?([^\n]+)/,V=e=>"Buffer"===e.constructor.name?e.toString():L.decode(e);async function*M(e){if(e.body[Symbol.asyncIterator])for await(var t of e.body)yield V(t);else{var r,n=e.body.getReader();try{for(;!(r=await n.read()).done;)yield V(r.value)}finally{n.cancel()}}}async function*R(e,t){var r,n="";for await(var i of e)for(n+=i;(r=n.indexOf(t))>-1;)yield n.slice(0,r),n=n.slice(r+t.length)}async function*U(e,t,r){var n=!0,i=null;try{yield await Promise.resolve();var a,o,u=(a=await (e.context.fetch||fetch)(t,r)).headers.get("Content-Type")||"";if(/multipart\/mixed/i.test(u))o=async function*(e,t){var r,n=e.match(F),i="--"+(n?n[1]:"-"),a=!0;for await(var o of R(M(t),"\r\n"+i)){if(a){a=!1;var u=o.indexOf(i);if(!(u>-1))continue;o=o.slice(u+i.length)}try{yield r=JSON.parse(o.slice(o.indexOf("\r\n\r\n")+4))}catch(e){if(!r)throw e}if(r&&!1===r.hasNext)break}r&&!1!==r.hasNext&&(yield{hasNext:!1})}(u,a);else if(/text\/event-stream/i.test(u))o=async function*(e){var t;for await(var r of R(M(e),"\n\n")){var n=r.match(P);if(n){var i=n[1];try{yield t=JSON.parse(i)}catch(e){if(!t)throw e}if(t&&!1===t.hasNext)break}}t&&!1!==t.hasNext&&(yield{hasNext:!1})}(a);else if(/text\//i.test(u))throw Error(await a.text());else o=async function*(e){yield JSON.parse(await e.text())}(a);for await(var s of o)i=i?T(i,s,a):A(e,s,a),n=!1,yield i,n=!0;i||(yield i=A(e,{},a))}catch(t){if(!n)throw t;yield I(e,a&&(a.status<200||a.status>=300)&&a.statusText?Error(a.statusText):t,a)}}function Q(e,t,r){var n;return"undefined"!=typeof AbortController&&(r.signal=(n=new AbortController).signal),(0,i.ok)(()=>{n&&n.abort()})((0,i.hX)(e=>!!e)((0,i.fY)(U(e,t,r))))}},6997:function(e,t,r){"use strict";r.d(t,{Ek:function(){return k},HG:function(){return m},KU:function(){return w},Ps:function(){return p}});var n=r(6155),i=r(6138),a=r(3496),o=(e,t)=>{if(Array.isArray(e))for(var r of e)o(r,t);else if("object"==typeof e&&null!==e)for(var n in e)"__typename"===n&&"string"==typeof e[n]?t.add(e[n]):o(e[n],t);return t},u=e=>{if("definitions"in e){var t=[];for(var r of e.definitions){var i=u(r);t.push(i)}return{...e,definitions:t}}if("directives"in e&&e.directives&&e.directives.length){var a=[],o={};for(var s of e.directives){var c=s.name.value;"_"!==c[0]?a.push(s):c=c.slice(1),o[c]=s}e={...e,directives:a,_directives:o}}if("selectionSet"in e){var l=[],f=e.kind===n.hY.OPERATION_DEFINITION;if(e.selectionSet){for(var d of e.selectionSet.selections||[]){f=f||d.kind===n.hY.FIELD&&"__typename"===d.name.value&&!d.alias;var v=u(d);l.push(v)}return f||l.push({kind:n.hY.FIELD,name:{kind:n.hY.NAME,value:"__typename"},_generated:!0}),{...e,selectionSet:{...e.selectionSet,selections:l}}}}return e},s=new Map,c=e=>{var t=(0,i.k)(e),r=s.get(t.__key);return r||(s.set(t.__key,r=u(t)),Object.defineProperty(r,"__key",{value:t.__key,enumerable:!1})),r},l=(e,t)=>{if(!e||"object"!=typeof e)return e;if(Array.isArray(e))return e.map(e=>l(e));if(!e||"object"!=typeof e||!t&&!("__typename"in e))return e;var r={};for(var n in e)"__typename"===n?Object.defineProperty(r,"__typename",{enumerable:!1,value:e.__typename}):r[n]=l(e[n]);return r};function f(e){var t=t=>e(t);return t.toPromise=()=>(0,a.Vi)((0,a.qn)(1)((0,a.hX)(e=>!e.stale&&!e.hasNext)(t))),t.then=(e,r)=>t.toPromise().then(e,r),t.subscribe=e=>(0,a.Ld)(e)(t),t}function d(e,t,r){return{...t,kind:e,context:t.context?{...t.context,...r}:r||t.context}}var v=()=>{};function p(e){for(var t=new Map,r=[],a=[],o=Array.isArray(e)?e[0]:e||"",u=1;u<arguments.length;u++){var s=arguments[u];s&&s.definitions?a.push(s):o+=s,o+=arguments[0][u]}for(var c of(a.unshift((0,i.k)(o)),a))for(var l of c.definitions)if(l.kind===n.hY.FRAGMENT_DEFINITION){var f=l.name.value,d=(0,i.s)(l);t.has(f)||(t.set(f,d),r.push(l))}else r.push(l);return(0,i.k)({kind:n.hY.DOCUMENT,definitions:r})}var h=({kind:e})=>"mutation"!==e&&"query"!==e,y=e=>{var t=c(e.query);if(t===e.query)return e;var r=d(e.kind,e);return r.query=t,r},m=({forward:e,client:t,dispatchDebug:r})=>{var n=new Map,i=new Map,u=e=>"query"===e.kind&&"network-only"!==e.context.requestPolicy&&("cache-only"===e.context.requestPolicy||n.has(e.key));return r=>{var s=(0,a.UI)(e=>{var r=n.get(e.key);return"cache-and-network"===e.context.requestPolicy&&(r.stale=!0,g(t,e)),r})((0,a.hX)(e=>!h(e)&&u(e))(r)),c=(0,a.bw)(e=>{var{operation:r}=e;if(r){var a=r.context.additionalTypenames||[];if("subscription"!==e.operation.kind&&(a=[...o(e.data,new Set)].concat(a)),"mutation"===e.operation.kind||"subscription"===e.operation.kind){for(var u=new Set,s=0;s<a.length;s++){var c=a[s],l=i.get(c);for(var f of(l||i.set(c,l=new Set),l.values()))u.add(f);l.clear()}for(var d of u.values())n.has(d)&&(r=n.get(d).operation,n.delete(d),g(t,r))}else if("query"===r.kind&&e.data){n.set(r.key,e);for(var v=0;v<a.length;v++){var p=a[v],h=i.get(p);h||i.set(p,h=new Set),h.add(r.key)}}}})(e((0,a.hX)(e=>"query"!==e.kind||"cache-only"!==e.context.requestPolicy)((0,a.UI)(e=>e)((0,a.TS)([(0,a.UI)(y)((0,a.hX)(e=>!h(e)&&!u(e))(r)),(0,a.hX)(e=>h(e))(r)])))));return(0,a.TS)([s,c])}},g=(e,t)=>e.reexecuteOperation(d(t.kind,t,{requestPolicy:"network-only"})),k=({forward:e,dispatchDebug:t})=>t=>{var r=(0,a.zg)(e=>{var r=(0,i.m)(e),n=(0,i.d)(e,r),o=(0,i.e)(e,r);return(0,a.Rs)((0,a.hX)(t=>"teardown"===t.kind&&t.key===e.key)(t))((0,i.f)(e,n,o))})((0,a.hX)(e=>"teardown"!==e.kind&&("subscription"!==e.kind||!!e.context.fetchSubscriptions))(t)),n=e((0,a.hX)(e=>"teardown"===e.kind||"subscription"===e.kind&&!e.context.fetchSubscriptions)(t));return(0,a.TS)([r,n])},x=e=>({client:t,forward:r,dispatchDebug:n})=>e.reduceRight((e,r)=>r({client:t,forward:t=>(0,a.BN)(e((0,a.BN)(t))),dispatchDebug(e){}}),r),b=({dispatchDebug:e})=>e=>(0,a.hX)(e=>!1)(e),w=function e(t){var r=0,n=new Map,o=new Map,u=new Set,s=[],c={url:t.url,fetchSubscriptions:t.fetchSubscriptions,fetchOptions:t.fetchOptions,fetch:t.fetch,preferGetMethod:!!t.preferGetMethod,requestPolicy:t.requestPolicy||"cache-first"},p=(0,a.nN)();function h(e){"mutation"!==e.kind&&"teardown"!==e.kind&&u.has(e.key)||("teardown"===e.kind?u.delete(e.key):"mutation"!==e.kind&&u.add(e.key),p.next(e))}var y=!1;function m(e){if(e&&h(e),!y){for(y=!0;y&&(e=s.shift());)h(e);y=!1}}var g=e=>{var r=(0,a.Rs)((0,a.hX)(t=>"teardown"===t.kind&&t.key===e.key)(p.source))((0,a.hX)(t=>t.operation.kind===e.kind&&t.operation.key===e.key&&(!t.operation.context._instance||t.operation.context._instance===e.context._instance))(N));return t.maskTypename&&(r=(0,a.UI)(e=>({...e,data:l(e.data,!0)}))(r)),r="query"!==e.kind?(0,a.oE)(e=>!!e.hasNext,!0)(r):(0,a.wt)(t=>{var r=(0,a._A)(t);return t.stale||t.hasNext?r:(0,a.TS)([r,(0,a.UI)(()=>(t.stale=!0,t))((0,a.qn)(1)((0,a.hX)(t=>t.key===e.key)(p.source)))])})(r),r="mutation"!==e.kind?(0,a.ok)(()=>{u.delete(e.key),n.delete(e.key),o.delete(e.key),y=!1;for(var t=s.length-1;t>=0;t--)s[t].key===e.key&&s.splice(t,1);h(d("teardown",e,e.context))})((0,a.Mq)(t=>{if(t.stale){for(var r of s)if(r.key===t.operation.key){u.delete(r.key);break}}else t.hasNext||u.delete(e.key);n.set(e.key,t)})(r)):(0,a.Hr)(()=>{h(e)})(r),(0,a.BN)(r)},k=Object.assign(this instanceof e?this:Object.create(e.prototype),{suspense:!!t.suspense,operations$:p.source,reexecuteOperation(e){"teardown"===e.kind?m(e):("mutation"===e.kind||o.has(e.key))&&(s.push(e),Promise.resolve().then(m))},createRequestOperation:(e,t,n)=>(n||(n={}),d(e,t,{_instance:"mutation"===e?r=r+1|0:void 0,...c,...n,requestPolicy:n.requestPolicy||c.requestPolicy,suspense:n.suspense||!1!==n.suspense&&k.suspense})),executeRequestOperation:e=>"mutation"===e.kind?f(g(e)):f((0,a.Vo)(()=>{var t=o.get(e.key);t||o.set(e.key,t=g(e)),t=(0,a.Hr)(()=>{m(e)})(t);var r=n.get(e.key);return"query"===e.kind&&r&&(r.stale||r.hasNext)?(0,a.wt)(a._A)((0,a.TS)([t,(0,a.hX)(t=>t===n.get(e.key))((0,a._A)(r))])):t})),executeQuery(e,t){var r=k.createRequestOperation("query",e,t);return k.executeRequestOperation(r)},executeSubscription(e,t){var r=k.createRequestOperation("subscription",e,t);return k.executeRequestOperation(r)},executeMutation(e,t){var r=k.createRequestOperation("mutation",e,t);return k.executeRequestOperation(r)},readQuery(e,t,r){var n=null;return(0,a.Ld)(e=>{n=e})(k.query(e,t,r)).unsubscribe(),n},query:(e,t,r)=>k.executeQuery((0,i.h)(e,t),r),subscription:(e,t,r)=>k.executeSubscription((0,i.h)(e,t),r),mutation:(e,t,r)=>k.executeMutation((0,i.h)(e,t),r)}),w=x(t.exchanges),N=(0,a.BN)(w({client:k,dispatchDebug:v,forward:b({dispatchDebug:v})})(p.source));return(0,a.nY)(N),k}},3496:function(e,t,r){"use strict";r.d(t,{BN:function(){return h},Hr:function(){return p},Ld:function(){return S},Mq:function(){return v},Rs:function(){return g},TS:function(){return f},UI:function(){return c},Vi:function(){return A},Vo:function(){return x},_A:function(){return N},bw:function(){return v},fY:function(){return b},hX:function(){return s},nN:function(){return _},nY:function(){return E},oE:function(){return k},ok:function(){return d},qn:function(){return m},wt:function(){return y},zg:function(){return l}});var n=()=>{};function i(e){return{tag:0,0:e}}function a(e){return{tag:1,0:e}}var o=()=>"function"==typeof Symbol&&Symbol.asyncIterator||"@@asyncIterator",u=e=>e;function s(e){return t=>r=>{var i=n;t(t=>{0===t?r(0):0===t.tag?(i=t[0],r(t)):e(t[0])?r(t):i(0)})}}function c(e){return t=>r=>t(t=>{0===t||0===t.tag?r(t):r(a(e(t[0])))})}function l(e){return t=>r=>{var a=[],o=n,u=!1,s=!1;t(t=>{if(s);else if(0===t)s=!0,a.length||r(0);else if(0===t.tag)o=t[0];else{var i,c;u=!1,i=e(t[0]),c=n,i(e=>{if(0===e){if(a.length){var t=a.indexOf(c);t>-1&&(a=a.slice()).splice(t,1),a.length||(s?r(0):u||(u=!0,o(0)))}}else 0===e.tag?(a.push(c=e[0]),c(0)):a.length&&(r(e),c(0))}),u||(u=!0,o(0))}}),r(i(e=>{if(1===e){s||(s=!0,o(1));for(var t=0,r=a,n=a.length;t<n;t++)r[t](1);a.length=0}else{s||u?u=!1:(u=!0,o(0));for(var i=0,c=a,l=a.length;i<l;i++)c[i](0)}}))}}function f(e){var t;return t=w(e),l(u)(t)}function d(e){return t=>r=>{var n=!1;t(t=>{if(n);else if(0===t)n=!0,r(0),e();else if(0===t.tag){var a=t[0];r(i(t=>{1===t?(n=!0,a(1),e()):a(t)}))}else r(t)})}}function v(e){return t=>r=>{var n=!1;t(t=>{if(n);else if(0===t)n=!0,r(0);else if(0===t.tag){var a=t[0];r(i(e=>{1===e&&(n=!0),a(e)}))}else e(t[0]),r(t)})}}function p(e){return t=>r=>t(t=>{0===t?r(0):0===t.tag?(r(t),e()):r(t)})}function h(e){var t=[],r=n,a=!1;return n=>{t.push(n),1===t.length&&e(e=>{if(0===e){for(var n=0,i=t,o=t.length;n<o;n++)i[n](0);t.length=0}else if(0===e.tag)r=e[0];else{a=!1;for(var u=0,s=t,c=t.length;u<c;u++)s[u](e)}}),n(i(e=>{if(1===e){var i=t.indexOf(n);i>-1&&(t=t.slice()).splice(i,1),t.length||r(1)}else a||(a=!0,r(0))}))}}function y(e){return t=>r=>{var a=n,o=n,u=!1,s=!1,c=!1,l=!1;t(t=>{l||(0===t?(l=!0,c||r(0)):0===t.tag?a=t[0]:(c&&(o(1),o=n),u?u=!1:(u=!0,a(0)),c=!0,e(t[0])(e=>{c&&(0===e?(c=!1,l?r(0):u||(u=!0,a(0))):0===e.tag?(s=!1,(o=e[0])(0)):(r(e),s?s=!1:o(0)))})))}),r(i(e=>{1===e?(l||(l=!0,a(1)),c&&(c=!1,o(1))):(l||u||(u=!0,a(0)),c&&!s&&(s=!0,o(0)))}))}}function m(e){return t=>r=>{var a=n,o=!1,u=0;t(t=>{o||(0===t?(o=!0,r(0)):0===t.tag?e<=0?(o=!0,r(0),t[0](1)):a=t[0]:u++<e?(r(t),!o&&u>=e&&(o=!0,r(0),a(1))):r(t))}),r(i(t=>{1!==t||o?0===t&&!o&&u<e&&a(0):(o=!0,a(1))}))}}function g(e){return t=>r=>{var a=n,o=n,u=!1;t(t=>{u||(0===t?(u=!0,o(1),r(0)):0===t.tag?(a=t[0],e(e=>{0===e||(0===e.tag?(o=e[0])(0):(u=!0,o(1),a(1),r(0)))})):r(t))}),r(i(e=>{1!==e||u?u||a(0):(u=!0,a(1),o(1))}))}}function k(e,t){return r=>i=>{var a=n,o=!1;r(r=>{o||(0===r?(o=!0,i(0)):0===r.tag?(a=r[0],i(r)):e(r[0])?i(r):(o=!0,t&&i(r),i(0),a(1)))})}}function x(e){return t=>e()(t)}function b(e){return t=>{var r,n=e[o()]&&e[o()]()||e,u=!1,s=!1,c=!1;t(i(async e=>{if(1===e)u=!0,n.return&&n.return();else if(s)c=!0;else{for(c=s=!0;c&&!u;)if((r=await n.next()).done)u=!0,n.return&&await n.return(),t(0);else try{c=!1,t(a(r.value))}catch(e){if(n.throw)(u=!!(await n.throw(e)).done)&&t(0);else throw e}s=!1}}))}}var w=function(e){return e[Symbol.asyncIterator]?b(e):t=>{var r,n=e[Symbol.iterator](),o=!1,u=!1,s=!1;t(i(e=>{if(1===e)o=!0,n.return&&n.return();else if(u)s=!0;else{for(s=u=!0;s&&!o;)if((r=n.next()).done)o=!0,n.return&&n.return(),t(0);else try{s=!1,t(a(r.value))}catch(e){if(n.throw)(o=!!n.throw(e).done)&&t(0);else throw e}u=!1}}))}};function N(e){return t=>{var r=!1;t(i(n=>{1===n?r=!0:r||(r=!0,t(a(e)),t(0))}))}}function _(){var e,t,r;return{source:h((r=r=>(e=r.next,t=r.complete,n),e=>{var t=!1,n=r({next(r){t||e(a(r))},complete(){t||(t=!0,e(0))}});e(i(e=>{1!==e||t||(t=!0,n())}))})),next(t){e&&e(t)},complete(){t&&t()}}}function S(e){return t=>{var r=n,i=!1;return t(t=>{0===t?i=!0:0===t.tag?(r=t[0])(0):i||(e(t[0]),r(0))}),{unsubscribe(){i||(i=!0,r(1))}}}}function E(e){S(e=>{})(e)}function A(e){return new Promise(t=>{var r,i=n;e(e=>{0===e?Promise.resolve(r).then(t):0===e.tag?(i=e[0])(0):(r=e[0],i(0))})})}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(6885)}),_N_E=e.O()}]);
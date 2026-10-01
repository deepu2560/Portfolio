const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/loaded-SMPR6KZF-CyMeg3cy.js","assets/index-BPQ04nVH.js","assets/framework-vendor-CyVlaxPG.js","assets/index-CENnyE6x.js","assets/vite-runtime-BXl3LOEh.js","assets/three-vendor-BKHjSulT.js","assets/editor-vendor-Bs0Et9kz.js","assets/supabase-vendor-DYwll1P_.js","assets/loaded-JKA25A3T-Ur_kiKYZ.js","assets/loaded-36WRJPBT-C8iK3WV7.js","assets/full-7ZJV44EE-BvdqOjkQ.js","assets/Render-DQXAYUBI-BuHF9_A_.js","assets/chunk-2CNEFIQP-CrQ2EaVv.js","assets/Editor-44C53YAG-DDG9zMQE.js"])))=>i.map(i=>d[i]);
import{_ as gr}from"./vite-runtime-BXl3LOEh.js";import{p as Ad,r as y,j as p,b as Ao,R as es}from"./framework-vendor-CyVlaxPG.js";import{d as Pd,s as tl,e as Xi,f as Dr,g as Ne}from"./three-vendor-BKHjSulT.js";import{k as mg,l as _g,m as yg,n as bg}from"./editor-vendor-Bs0Et9kz.js";var kg=Object.create,rl=Object.defineProperty,xg=Object.defineProperties,wg=Object.getOwnPropertyDescriptor,Sg=Object.getOwnPropertyDescriptors,nl=Object.getOwnPropertyNames,ji=Object.getOwnPropertySymbols,Ig=Object.getPrototypeOf,ol=Object.prototype.hasOwnProperty,Dd=Object.prototype.propertyIsEnumerable,$c=(e,t,r)=>t in e?rl(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,D=(e,t)=>{for(var r in t||(t={}))ol.call(t,r)&&$c(e,r,t[r]);if(ji)for(var r of ji(t))Dd.call(t,r)&&$c(e,r,t[r]);return e},B=(e,t)=>xg(e,Sg(t)),At=(e,t)=>{var r={};for(var n in e)ol.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&ji)for(var n of ji(e))t.indexOf(n)<0&&Dd.call(e,n)&&(r[n]=e[n]);return r},Eg=(e,t)=>function(){return e&&(t=(0,e[nl(e)[0]])(e=0)),t},Cg=(e,t)=>function(){return t||(0,e[nl(e)[0]])((t={exports:{}}).exports,t),t.exports},zg=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of nl(t))!ol.call(e,o)&&o!==r&&rl(e,o,{get:()=>t[o],enumerable:!(n=wg(t,o))||n.enumerable});return e},jg=(e,t,r)=>(r=e!=null?kg(Ig(e)):{},zg(!e||!e.__esModule?rl(r,"default",{value:e,enumerable:!0}):r,e)),ke=(e,t,r)=>new Promise((n,o)=>{var i=l=>{try{s(r.next(l))}catch(c){o(c)}},a=l=>{try{s(r.throw(l))}catch(c){o(c)}},s=l=>l.done?n(l.value):Promise.resolve(l.value).then(i,a);s((r=r.apply(e,t)).next())}),z=Eg({"../tsup-config/react-import.js"(){}});z();var Md={RichTextEditor:"_RichTextEditor_5wzos_1","RichTextEditor--editor":"_RichTextEditor--editor_5wzos_50","RichTextEditor--disabled":"_RichTextEditor--disabled_5wzos_123","RichTextEditor--isActive":"_RichTextEditor--isActive_5wzos_159","RichTextEditor-menu":"_RichTextEditor-menu_5wzos_165"},ka,Hc;function Ag(){if(Hc)return ka;Hc=1,ka=r,r.flatten=r,r.unflatten=n;function e(o){return o&&o.constructor&&typeof o.constructor.isBuffer=="function"&&o.constructor.isBuffer(o)}function t(o){return o}function r(o,i){i=i||{};const a=i.delimiter||".",s=i.maxDepth,l=i.transformKey||t,c={};function d(u,f,v){v=v||1,Object.keys(u).forEach(function(h){const m=u[h],b=i.safe&&Array.isArray(m),S=Object.prototype.toString.call(m),x=e(m),_=S==="[object Object]"||S==="[object Array]",g=f?f+a+l(h):l(h);if(!b&&!x&&_&&Object.keys(m).length&&(!i.maxDepth||v<s))return d(m,g,v+1);c[g]=m})}return d(o),c}function n(o,i){i=i||{};const a=i.delimiter||".",s=i.overwrite||!1,l=i.transformKey||t,c={};if(e(o)||Object.prototype.toString.call(o)!=="[object Object]")return o;function u(h){const m=Number(h);return isNaN(m)||h.indexOf(".")!==-1||i.object?h:m}function f(h,m,b){return Object.keys(b).reduce(function(S,x){return S[h+a+x]=b[x],S},m)}function v(h){const m=Object.prototype.toString.call(h),b=m==="[object Array]",S=m==="[object Object]";if(h){if(b)return!h.length;if(S)return!Object.keys(h).length}else return!0}return o=Object.keys(o).reduce(function(h,m){const b=Object.prototype.toString.call(o[m]);return!(b==="[object Object]"||b==="[object Array]")||v(o[m])?(h[m]=o[m],h):f(m,h,r(o[m],i))},{}),Object.keys(o).forEach(function(h){const m=h.split(a).map(l);let b=u(m.shift()),S=u(m[0]),x=c;for(;S!==void 0;){if(b==="__proto__")return;const _=Object.prototype.toString.call(x[b]),g=_==="[object Object]"||_==="[object Array]";if(!s&&!g&&typeof x[b]<"u")return;(s&&!g||!s&&x[b]==null)&&(x[b]=typeof S=="number"&&!i.object?[]:{}),x=x[b],m.length>0&&(b=u(m.shift()),S=u(m[0]))}x[b]=n(o[h],i)}),c}return ka}var Pg=Ag();const Dg=Ad(Pg);z();z();z();var Td=(e,t)=>Object.keys(t).reduce((r,n)=>t[n].type==="slot"?D({[n]:[]},r):r,e),il=e=>!!e&&typeof e.then=="function",Wc=e=>e.reduce((t,r)=>D(D({},t),r),{}),ts=e=>e.some(il),al=({value:e,fields:t,mappers:r,propKey:n="",propPath:o="",id:i="",config:a,recurseSlots:s=!1})=>{var l,c,d,u;const f=(l=t[n])==null?void 0:l.type,v=r[f];if(v&&f==="slot"){const h=e||[],m=s?h.map(b=>{if(!a.components[b.type])throw new Error(`Could not find component config for ${b.type}`);return Mr(b,r,a,s)}):h;return ts(m)?Promise.all(m):v({value:m,parentId:i,propName:o,field:t[n],propPath:o})}else if(v&&t[n])return v({value:e,parentId:i,propName:n,field:t[n],propPath:o});if(e&&typeof e=="object")if(Array.isArray(e)){const h=((c=t[n])==null?void 0:c.type)==="array"?t[n].arrayFields:null;if(!h)return e;const m=e.map((b,S)=>al({value:b,fields:h,mappers:r,propKey:n,propPath:`${o}[${S}]`,id:i,config:a,recurseSlots:s}));return ts(m)?Promise.all(m):m}else{if("$$typeof"in e)return e;{const h=((d=t[n])==null?void 0:d.type)==="object"?t[n].objectFields:t;return Od({value:e,fields:h,mappers:r,id:i,getPropPath:m=>`${o}.${m}`,config:a,recurseSlots:s,ownedFields:((u=t[n])==null?void 0:u.type)==="object"})}}return e},Od=({value:e,fields:t,mappers:r,id:n,getPropPath:o,config:i,recurseSlots:a,ownedFields:s,keysToWalk:l})=>{const c=l??Object.keys(e);if(!l&&s)for(const u in t){const f=t[u].type;f!=="slot"&&r[f]&&!(u in e)&&c.push(u)}const d=c.map(u=>{const f={value:e[u],fields:t,mappers:r,propKey:u,propPath:o(u),id:n,config:i,recurseSlots:a},v=al(f);return il(v)?v.then(h=>({[u]:h})):{[u]:v}},{});return ts(d)?Promise.all(d).then(Wc):Wc(d)};function Mr(e,t,r,n=!1,o=!0,i){var a,s,l,c,d;const u="type"in e?e.type:"root",f=u==="root"?r.root:(a=r.components)==null?void 0:a[u],v=Od({value:o?Td((s=e.props)!=null?s:{},(l=f?.fields)!=null?l:{}):e.props,fields:(c=f?.fields)!=null?c:{},mappers:t,id:e.props&&(d=e.props.id)!=null?d:"root",getPropPath:h=>h,config:r,recurseSlots:n,ownedFields:!0,keysToWalk:i});return il(v)?v.then(h=>B(D({},e),{props:h})):B(D({},e),{props:v})}function Ld(e,t,r){var n,o;const i=c=>Mr(c,{slot:({value:d,parentId:u,propName:f})=>{var v;const h=d;return(v=r(h,{parentId:u,propName:f}))!=null?v:h}},t,!0);if("props"in e)return i(e);const a=e,s=(n=a.zones)!=null?n:{},l=a.content.map(i);return{root:i(a.root),content:(o=r(l,{parentId:"root",propName:"default-zone"}))!=null?o:l,zones:Object.keys(s).reduce((c,d)=>B(D({},c),{[d]:s[d].map(i)}),{})}}z();var Ar="root",rs="default-zone",Ge=`${Ar}:${rs}`;z();z();var Mg=(e,t)=>Mr(e,{slot:()=>null},t),{flatten:Tg,unflatten:Og}=Dg,Lg=e=>e!=null&&Object.prototype.toString.call(e)==="[object Object]",Rd="__puck_[]",Fd="__puck_{}";function Rg(e={}){const t={};for(const r in e){if(!Object.prototype.hasOwnProperty.call(e,r))continue;const n=e[r];Array.isArray(n)&&n.length===0?t[r]=Rd:Lg(n)&&Object.keys(n).length===0?t[r]=Fd:t[r]=n}return t}function Fg(e={}){const t={};for(const r in e){if(!Object.prototype.hasOwnProperty.call(e,r))continue;const n=e[r];n===Rd?t[r]=[]:n===Fd?t[r]={}:t[r]=n}return t}var Bg=(e,t)=>B(D({},e),{props:Rg(Tg(Mg(e,t).props))}),Bd=e=>{const t=Og(Fg(e.props));return B(D({},e),{props:t})};z();var bn=e=>"type"in e?e:B(D({},e),{props:B(D({},e.props),{id:"root"}),type:"root"});z();z();z();var Ng=e=>e?e&&e.indexOf(":")>-1?e.split(":"):[Ge,e]:[];function $g(e,t,r,n=[]){Object.entries(t.zones||{}).forEach(([o,i])=>{const[a]=Ng(o);a===e.props.id&&r(n,o,i)})}function ht(e,t,r=o=>o,n=o=>o){var o;let i={};const a={},s={},l=(_,g,j,w,A)=>{var E;const[I]=g.split(":"),k=((E=r(j,g,w))!=null?E:j)||[],[P,T]=g.split(":"),F=`${A||I}:${T}`,H=k.map((R,L)=>d(R,[..._,F],L));return a[F]={contentIds:H.map(R=>R.props.id),type:w},[F,H]},c=(_,g,j)=>{$g(_,e.data,(w,A,E)=>{const[I,k]=l(w,A,E,"dropzone",g);i[I]=k},j)},d=(_,g,j)=>{const w=n(_,g,j);if(!w)return _;const A=w.props.id,E=B(D({},Mr(w,{slot:({value:H,parentId:R,propPath:L})=>{const U=H,Y=`${R}:${L}`,[$,K]=l(g,Y,U,"slot",R);return K}},t).props),{id:A});c(_,A,g);const I=B(D({},w),{props:E}),k=g[g.length-1],[P,T]=k?k.split(":"):[null,""];s[A]={data:I,flatData:Bg(I,t),path:g,parentId:P,zone:T};const F=B(D({},I),{props:D({},I.props)});return E.id==="root"&&(delete F.type,delete F.props.id),F},u=e.data.zones||{},[f,v]=l([],Ge,e.data.content,"root"),h=v,m=Object.keys(i);Object.keys(u||{}).forEach(_=>{const[g]=_.split(":");if(m.includes(_))return;const[j,w]=l([Ge],_,u[_],"dropzone",g);i[_]=w},i);let b=bn({props:D({},(o=e.data.root.props)!=null?o:e.data.root)});e.data.root.readOnly&&(b.readOnly=e.data.root.readOnly);const S=d(b,[],-1),x=D(D({},e.data.root),S);return B(D({},e),{data:{root:x,content:h,zones:D(D({},e.data.zones),i)},indexes:{nodes:D(D({},e.indexes.nodes),s),zones:D(D({},e.indexes.zones),a)}})}z();var Nd=(e,t)=>{if(t===Ge)return e;const r=B(D({},e),{zones:e.zones?D({},e.zones):{}});return r.zones[t]=r.zones[t]||[],r};z();z();var Hg=(e,t,r)=>{if(typeof t.state=="object"){const n=D(D({},e),t.state);return t.state.indexes?n:(console.warn("`set` is expensive and may cause unnecessary re-renders. Consider using a more atomic action instead."),ht(n,r.config))}return D(D({},e),t.state(e))};z();z();var po=(e,t,r)=>{const n=Array.from(e||[]);return n.splice(t,0,r),n};z();z();z();var Wg=new Uint8Array(16);function qg(){return crypto.getRandomValues(Wg)}z();var qe=[];for(let e=0;e<256;++e)qe.push((e+256).toString(16).slice(1));function Vg(e,t=0){return(qe[e[t+0]]+qe[e[t+1]]+qe[e[t+2]]+qe[e[t+3]]+"-"+qe[e[t+4]]+qe[e[t+5]]+"-"+qe[e[t+6]]+qe[e[t+7]]+"-"+qe[e[t+8]]+qe[e[t+9]]+"-"+qe[e[t+10]]+qe[e[t+11]]+qe[e[t+12]]+qe[e[t+13]]+qe[e[t+14]]+qe[e[t+15]]).toLowerCase()}function Zg(e,t,r){return!t&&!e&&crypto.randomUUID?crypto.randomUUID():Ug(e,t,r)}function Ug(e,t,r){var n,o,i;e=e||{};const a=(i=(o=e.random)!=null?o:(n=e.rng)==null?void 0:n.call(e))!=null?i:qg();if(a.length<16)throw new Error("Random bytes length must be >= 16");if(a[6]=a[6]&15|64,a[8]=a[8]&63|128,t){if(r=r||0,r<0||r+16>t.length)throw new RangeError(`UUID byte range ${r}:${r+15} is out of buffer bounds`);for(let s=0;s<16;++s)t[r+s]=a[s];return t}return Vg(a)}var qc=Zg,lt=e=>e?`${e}-${qc()}`:qc();z();var fo=(e,t)=>{const[r]=e.split(":"),n=t.indexes.nodes[r];return(n?.path||[]).map(o=>o.split(":")[0])};z();var sl=(e,t,r=!1)=>{const n=lt(e.type);return Ld(B(D({},e),{props:r?B(D({},e.props),{id:n}):D({},e.props)}),t,o=>o.map(i=>{const a=lt(i.type);return B(D({},i),{props:r?B(D({},i.props),{id:a}):D({id:a},i.props)})}))};function $d(e,t,r){const n=t.id||lt(t.componentType),o=sl({type:t.componentType,props:B(D({},r.config.components[t.componentType].defaultProps||{}),{id:n})},r.config),[i]=t.destinationZone.split(":"),a=fo(t.destinationZone,e);return ht(e,r.config,(s,l)=>l===t.destinationZone?po(s||[],t.destinationIndex,o):s,(s,l)=>s.props.id===n||s.props.id===i||a.includes(s.props.id)||l.includes(t.destinationZone)?s:null)}z();var Yg=(e,t,r)=>{const[n]=t.destinationZone.split(":"),o=fo(t.destinationZone,e),i=e.indexes.zones[t.destinationZone].contentIds[t.destinationIndex];if(i!==t.data.props.id)throw new Error(`Can't change the id during a replace action. Please us "remove" and "insert" to define a new node.`);const s=[],l=Ld(t.data,r.config,(d,u)=>(s.push(`${u.parentId}:${u.propName}`),d.map(f=>{const v=lt(f.type);return B(D({},f),{props:D({id:v},f.props)})}))),c=B(D({},e),{ui:D(D({},e.ui),t.ui)});return Object.keys(e.indexes.zones).forEach(d=>{d.split(":")[0]===i&&(s.includes(d)||delete c.indexes.zones[d])}),ht(c,r.config,(d,u)=>{const f=[...d];return u===t.destinationZone&&(f[t.destinationIndex]=l),f},(d,u)=>{const f=u.map(v=>v.split(":")[0]);return d.props.id===l.props.id?l:d.props.id===n||o.indexOf(d.props.id)>-1||f.indexOf(l.props.id)>-1?d:null})};z();var Kg=(e,t,r)=>ht(e,r.config,n=>n,n=>n.props.id==="root"?B(D({},n),{props:D(D({},n.props),t.root.props),readOnly:t.root.readOnly}):n);z();z();function Qe(e,t){var r,n;const o=(r=t.indexes.zones)==null?void 0:r[e.zone||Ge];return o?(n=t.indexes.nodes[o.contentIds[e.index]])==null?void 0:n.data:void 0}function Xg(e,t,r){const n=Qe({index:t.sourceIndex,zone:t.sourceZone},e),o=fo(t.sourceZone,e),i=B(D({},n),{props:B(D({},n.props),{id:lt(n.type)})}),a=ht(e,r.config,(s,l)=>l===t.sourceZone?po(s,t.sourceIndex+1,n):s,(s,l,c)=>{const d=l[l.length-1];if(l.map(v=>v.split(":")[0]).indexOf(i.props.id)>-1)return B(D({},s),{props:B(D({},s.props),{id:lt(s.type)})});if(d===t.sourceZone&&c===t.sourceIndex+1)return i;const[f]=t.sourceZone.split(":");return f===s.props.id||o.indexOf(s.props.id)>-1?s:null});return B(D({},a),{ui:B(D({},a.ui),{itemSelector:{index:t.sourceIndex+1,zone:t.sourceZone}})})}z();z();z();var ns=(e,t)=>{const r=Array.from(e);return r.splice(t,1),r},Hd=(e,t,r)=>{if(t.sourceZone===t.destinationZone&&t.sourceIndex===t.destinationIndex)return e;const n=Qe({zone:t.sourceZone,index:t.sourceIndex},e);if(!n)return e;const o=fo(t.sourceZone,e),i=fo(t.destinationZone,e);return ht(e,r.config,(a,s)=>s===t.sourceZone&&s===t.destinationZone?po(ns(a,t.sourceIndex),t.destinationIndex,n):s===t.sourceZone?ns(a,t.sourceIndex):s===t.destinationZone?po(a,t.destinationIndex,n):a,(a,s)=>{const[l]=t.sourceZone.split(":"),[c]=t.destinationZone.split(":"),d=a.props.id;return l===d||c===d||n.props.id===d||o.indexOf(d)>-1||i.indexOf(d)>-1||s.includes(t.destinationZone)?a:null})},Gg=(e,t,r)=>Hd(e,{sourceIndex:t.sourceIndex,sourceZone:t.destinationZone,destinationIndex:t.destinationIndex,destinationZone:t.destinationZone},r);z();var Jg=(e,t,r)=>{const n=Qe({index:t.index,zone:t.zone},e),o=new Set([n.props.id]);Object.entries(e.indexes.nodes).forEach(([s,l])=>{l.path.map(d=>d.split(":")[0]).includes(n.props.id)&&o.add(s)});const i=ht(e,r.config,(s,l)=>l===t.zone?ns(s,t.index):s);Object.keys(i.data.zones||{}).forEach(s=>{const l=s.split(":")[0];o.has(l)&&i.data.zones&&delete i.data.zones[s]}),Object.keys(i.indexes.zones).forEach(s=>{const l=s.split(":")[0];o.has(l)&&delete i.indexes.zones[s]});const a=D({},i.ui.itemExpanded);return o.forEach(s=>{delete i.indexes.nodes[s],delete a[s]}),i.ui=B(D({},i.ui),{itemExpanded:a}),i};z();var vi={};function Qg(e,t){return vi[t.zone]?B(D({},e),{data:B(D({},e.data),{zones:B(D({},e.data.zones),{[t.zone]:vi[t.zone]})}),indexes:B(D({},e.indexes),{zones:B(D({},e.indexes.zones),{[t.zone]:B(D({},e.indexes.zones[t.zone]),{contentIds:vi[t.zone].map(r=>r.props.id),type:"dropzone"})})})}):B(D({},e),{data:Nd(e.data,t.zone)})}function em(e,t){const r=D({},e.data.zones||{}),n=D({},e.indexes.zones||{});return r[t.zone]&&(vi[t.zone]=r[t.zone],delete r[t.zone]),delete n[t.zone],B(D({},e),{data:B(D({},e.data),{zones:r}),indexes:B(D({},e.indexes),{zones:n})})}z();var tm=(e,t,r)=>typeof t.data=="object"?(console.warn("`setData` is expensive and may cause unnecessary re-renders. Consider using a more atomic action instead."),ht(B(D({},e),{data:D(D({},e.data),t.data)}),r.config)):ht(B(D({},e),{data:D(D({},e.data),t.data(e.data))}),r.config);z();var rm=(e,t)=>{var r,n;const o=t.itemSelector;if(!o)return t;const i=Qe(o,e);if(!i)return t;const s=((n=(r=e.indexes.nodes[i.props.id])==null?void 0:r.path)!=null?n:[]).map(c=>c.split(":")[0]).filter(c=>{var d,u;return c&&c!==Ar&&!((d=e.ui.itemExpanded)!=null&&d[c])&&!((u=t.itemExpanded)!=null&&u[c])});if(s.length===0)return t;const l=D(D({},e.ui.itemExpanded),t.itemExpanded);return s.forEach(c=>{l[c]=!0}),B(D({},t),{itemExpanded:l})},nm=(e,t)=>{const r=typeof t.ui=="object"?t.ui:t.ui(e.ui);return B(D({},e),{ui:D(D({},e.ui),rm(e,r))})};z();var ho=e=>{const{data:t,ui:r}=e;return{data:t,ui:r}};z();function om(e,t,r){return(n,o)=>{const i=e(n,o),a=!["registerZone","unregisterZone","setData","setUi","set"].includes(o.type);return(typeof o.recordHistory<"u"?o.recordHistory:a)&&t&&t(i),r?.(o,ho(i),ho(n)),i}}function Vc({record:e,onAction:t,appStore:r}){return om((n,o)=>o.type==="set"?Hg(n,o,r):o.type==="insert"?$d(n,o,r):o.type==="replace"?Yg(n,o,r):o.type==="replaceRoot"?Kg(n,o,r):o.type==="duplicate"?Xg(n,o,r):o.type==="reorder"?Gg(n,o,r):o.type==="move"?Hd(n,o,r):o.type==="remove"?Jg(n,o,r):o.type==="registerZone"?Qg(n,o):o.type==="unregisterZone"?em(n,o):o.type==="setData"?tm(n,o,r):o.type==="setUi"?nm(n,o):n,e,t)}var im=Object.getOwnPropertyNames,am=Object.getOwnPropertySymbols,sm=Object.prototype.hasOwnProperty;function Zc(e,t){return function(n,o,i){return e(n,o,i)&&t(n,o,i)}}function Xo(e){return function(r,n,o){if(!r||!n||typeof r!="object"||typeof n!="object")return e(r,n,o);var i=o.cache,a=i.get(r),s=i.get(n);if(a&&s)return a===n&&s===r;i.set(r,n),i.set(n,r);var l=e(r,n,o);return i.delete(r),i.delete(n),l}}function Uc(e){return im(e).concat(am(e))}var lm=Object.hasOwn||(function(e,t){return sm.call(e,t)});function Tr(e,t){return e===t||!e&&!t&&e!==e&&t!==t}var cm="__v",um="__o",dm="_owner",Yc=Object.getOwnPropertyDescriptor,Kc=Object.keys;function pm(e,t,r){var n=e.length;if(t.length!==n)return!1;for(;n-- >0;)if(!r.equals(e[n],t[n],n,n,e,t,r))return!1;return!0}function fm(e,t){return Tr(e.getTime(),t.getTime())}function hm(e,t){return e.name===t.name&&e.message===t.message&&e.cause===t.cause&&e.stack===t.stack}function vm(e,t){return e===t}function Xc(e,t,r){var n=e.size;if(n!==t.size)return!1;if(!n)return!0;for(var o=new Array(n),i=e.entries(),a,s,l=0;(a=i.next())&&!a.done;){for(var c=t.entries(),d=!1,u=0;(s=c.next())&&!s.done;){if(o[u]){u++;continue}var f=a.value,v=s.value;if(r.equals(f[0],v[0],l,u,e,t,r)&&r.equals(f[1],v[1],f[0],v[0],e,t,r)){d=o[u]=!0;break}u++}if(!d)return!1;l++}return!0}var gm=Tr;function mm(e,t,r){var n=Kc(e),o=n.length;if(Kc(t).length!==o)return!1;for(;o-- >0;)if(!Wd(e,t,r,n[o]))return!1;return!0}function Ln(e,t,r){var n=Uc(e),o=n.length;if(Uc(t).length!==o)return!1;for(var i,a,s;o-- >0;)if(i=n[o],!Wd(e,t,r,i)||(a=Yc(e,i),s=Yc(t,i),(a||s)&&(!a||!s||a.configurable!==s.configurable||a.enumerable!==s.enumerable||a.writable!==s.writable)))return!1;return!0}function _m(e,t){return Tr(e.valueOf(),t.valueOf())}function ym(e,t){return e.source===t.source&&e.flags===t.flags}function Gc(e,t,r){var n=e.size;if(n!==t.size)return!1;if(!n)return!0;for(var o=new Array(n),i=e.values(),a,s;(a=i.next())&&!a.done;){for(var l=t.values(),c=!1,d=0;(s=l.next())&&!s.done;){if(!o[d]&&r.equals(a.value,s.value,a.value,s.value,e,t,r)){c=o[d]=!0;break}d++}if(!c)return!1}return!0}function bm(e,t){var r=e.length;if(t.length!==r)return!1;for(;r-- >0;)if(e[r]!==t[r])return!1;return!0}function km(e,t){return e.hostname===t.hostname&&e.pathname===t.pathname&&e.protocol===t.protocol&&e.port===t.port&&e.hash===t.hash&&e.username===t.username&&e.password===t.password}function Wd(e,t,r,n){return(n===dm||n===um||n===cm)&&(e.$$typeof||t.$$typeof)?!0:lm(t,n)&&r.equals(e[n],t[n],n,n,e,t,r)}var xm="[object Arguments]",wm="[object Boolean]",Sm="[object Date]",Im="[object Error]",Em="[object Map]",Cm="[object Number]",zm="[object Object]",jm="[object RegExp]",Am="[object Set]",Pm="[object String]",Dm="[object URL]",Mm=Array.isArray,Jc=typeof ArrayBuffer=="function"&&ArrayBuffer.isView?ArrayBuffer.isView:null,Qc=Object.assign,Tm=Object.prototype.toString.call.bind(Object.prototype.toString);function Om(e){var t=e.areArraysEqual,r=e.areDatesEqual,n=e.areErrorsEqual,o=e.areFunctionsEqual,i=e.areMapsEqual,a=e.areNumbersEqual,s=e.areObjectsEqual,l=e.arePrimitiveWrappersEqual,c=e.areRegExpsEqual,d=e.areSetsEqual,u=e.areTypedArraysEqual,f=e.areUrlsEqual;return function(h,m,b){if(h===m)return!0;if(h==null||m==null)return!1;var S=typeof h;if(S!==typeof m)return!1;if(S!=="object")return S==="number"?a(h,m,b):S==="function"?o(h,m,b):!1;var x=h.constructor;if(x!==m.constructor)return!1;if(x===Object)return s(h,m,b);if(Mm(h))return t(h,m,b);if(Jc!=null&&Jc(h))return u(h,m,b);if(x===Date)return r(h,m,b);if(x===RegExp)return c(h,m,b);if(x===Map)return i(h,m,b);if(x===Set)return d(h,m,b);var _=Tm(h);return _===Sm?r(h,m,b):_===jm?c(h,m,b):_===Em?i(h,m,b):_===Am?d(h,m,b):_===zm?typeof h.then!="function"&&typeof m.then!="function"&&s(h,m,b):_===Dm?f(h,m,b):_===Im?n(h,m,b):_===xm?s(h,m,b):_===wm||_===Cm||_===Pm?l(h,m,b):!1}}function Lm(e){var t=e.circular,r=e.createCustomConfig,n=e.strict,o={areArraysEqual:n?Ln:pm,areDatesEqual:fm,areErrorsEqual:hm,areFunctionsEqual:vm,areMapsEqual:n?Zc(Xc,Ln):Xc,areNumbersEqual:gm,areObjectsEqual:n?Ln:mm,arePrimitiveWrappersEqual:_m,areRegExpsEqual:ym,areSetsEqual:n?Zc(Gc,Ln):Gc,areTypedArraysEqual:n?Ln:bm,areUrlsEqual:km};if(r&&(o=Qc({},o,r(o))),t){var i=Xo(o.areArraysEqual),a=Xo(o.areMapsEqual),s=Xo(o.areObjectsEqual),l=Xo(o.areSetsEqual);o=Qc({},o,{areArraysEqual:i,areMapsEqual:a,areObjectsEqual:s,areSetsEqual:l})}return o}function Rm(e){return function(t,r,n,o,i,a,s){return e(t,r,s)}}function Fm(e){var t=e.circular,r=e.comparator,n=e.createState,o=e.equals,i=e.strict;if(n)return function(l,c){var d=n(),u=d.cache,f=u===void 0?t?new WeakMap:void 0:u,v=d.meta;return r(l,c,{cache:f,equals:o,meta:v,strict:i})};if(t)return function(l,c){return r(l,c,{cache:new WeakMap,equals:o,meta:void 0,strict:i})};var a={cache:void 0,equals:o,meta:void 0,strict:i};return function(l,c){return r(l,c,a)}}var vo=mr();mr({strict:!0});mr({circular:!0});mr({circular:!0,strict:!0});mr({createInternalComparator:function(){return Tr}});mr({strict:!0,createInternalComparator:function(){return Tr}});mr({circular:!0,createInternalComparator:function(){return Tr}});mr({circular:!0,createInternalComparator:function(){return Tr},strict:!0});function mr(e){e===void 0&&(e={});var t=e.circular,r=t===void 0?!1:t,n=e.createInternalComparator,o=e.createState,i=e.strict,a=i===void 0?!1:i,s=Lm(e),l=Om(s),c=n?n(l):Rm(l);return Fm({circular:r,comparator:l,createState:o,equals:c,strict:a})}z();var go=[{width:360,height:"auto",icon:"Smartphone",label:"Small"},{width:768,height:"auto",icon:"Tablet",label:"Medium"},{width:1280,height:"auto",icon:"Monitor",label:"Large"},{width:"100%",height:"auto",icon:"FullWidth",label:"Full-width"}];z();z();var ll=(e,t)=>e?Object.keys(e.props||{}).reduce((r,n)=>{const o=e?.props||{},i=t?.props||{};return B(D({},r),{[n]:!vo(i[n],o[n])})},{}):{},Bm={lastChange:{}},qd=(e,t,...r)=>ke(null,[e,t,...r],function*(n,o,i={},a,s,l="replace",c=null,d={props:{}},u=Bm){const f="type"in n&&n.type!=="root"?o.components[n.type]:o.root,v=D({},n),h=f?.resolveData&&n.props,m="id"in n.props?n.props.id:"root";if(h){const{item:x=null,resolved:_={},parentId:g=null}=u.lastChange[m]||{},w=!(g===null)&&c?.props.id!==g,A=n&&!vo(n,x);if(l==="move"&&!w||l!=="move"&&l!=="force"&&!A)return{node:_,didChange:!1};const I=ll(n,x);a&&a(n);const{props:k,readOnly:P={}}=yield f.resolveData(n,{changed:I,lastData:x,metadata:D(D({},i),f.metadata),trigger:l,parent:c,root:d});v.props=D(D({},n.props),k),Object.keys(P).length&&(v.readOnly=P)}const b=bn(v);let S=yield Mr(v,{slot:x=>ke(null,[x],function*({value:_}){const g=_;return yield Promise.all(g.map(j=>ke(null,null,function*(){return(yield qd(j,o,i,a,s,l,b,d,u)).node})))})},o);return h&&s&&s(v),u.lastChange[m]={item:n,resolved:S,parentId:c?.props.id},{node:S,didChange:!vo(n,S)}});z();var os={data:{content:[],root:{},zones:{}},ui:{leftSideBarVisible:!0,rightSideBarVisible:!0,arrayState:{},itemSelector:null,componentList:{},isDragging:!1,itemExpanded:{},previewMode:"edit",viewports:{current:{width:go[0].width,height:go[0].height||"auto"},options:[],controlsVisible:!0},field:{focus:null},plugin:{current:null}},indexes:{nodes:{},zones:{}}},Nm=Cg({"../../node_modules/classnames/index.js"(e,t){z(),(function(){var r={}.hasOwnProperty;function n(){for(var a="",s=0;s<arguments.length;s++){var l=arguments[s];l&&(a=i(a,o(l)))}return a}function o(a){if(typeof a=="string"||typeof a=="number")return a;if(typeof a!="object")return"";if(Array.isArray(a))return n.apply(null,a);if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]"))return a.toString();var s="";for(var l in a)r.call(a,l)&&a[l]&&(s=i(s,l));return s}function i(a,s){return s?a?a+" "+s:a+s:a}typeof t<"u"&&t.exports?(n.default=n,t.exports=n):typeof define=="function"&&typeof define.amd=="object"&&define.amd?define("classnames",[],function(){return n}):window.classNames=n})()}});z();var $m=jg(Nm()),Hm=(e,t,r={baseClass:""})=>(n={})=>{if(typeof n=="string"){const o=n;return t[`${e}-${o}`]&&r.baseClass+t[`${e}-${o}`]||""}else if(typeof n=="object"){const o=n,i={};for(let s in o)i[t[`${e}--${s}`]]=o[s];const a=t[e];return r.baseClass+(0,$m.default)(D({[a]:!!a},i))}else return r.baseClass+t[e]||""},ee=Hm;z();z();var Vd={ActionBar:"_ActionBar_5vdfr_1","ActionBar-label":"_ActionBar-label_5vdfr_17",ActionBarAction:"_ActionBarAction_5vdfr_30","ActionBar-group":"_ActionBar-group_5vdfr_38","ActionBarAction--disabled":"_ActionBarAction--disabled_5vdfr_74","ActionBarAction--active":"_ActionBarAction--active_5vdfr_104","ActionBar-separator":"_ActionBar-separator_5vdfr_117"},mo=ee("ActionBar",Vd),Wm=ee("ActionBarAction",Vd),dt=({label:e,children:t})=>p.jsxs("div",{className:mo(),onClick:r=>{r.stopPropagation()},children:[e&&p.jsx(dt.Group,{children:p.jsx("div",{className:mo("label"),children:e})}),t]}),Gi=y.forwardRef((e,t)=>{var r=e,{children:n,label:o,onClick:i,active:a=!1,disabled:s}=r,l=At(r,["children","label","onClick","active","disabled"]);return p.jsx("button",B(D({type:"button"},l),{ref:t,className:Wm({active:a,disabled:s}),onClick:i,title:o,tabIndex:0,disabled:s,children:n}))});Gi.displayName="Action";var qm=({children:e})=>p.jsx("div",{className:mo("group"),children:e}),Vm=({label:e})=>p.jsx("div",{className:mo("label"),children:e}),Zm=()=>p.jsx("div",{className:mo("separator")});dt.Action=Gi;dt.Label=Vm;dt.Group=qm;dt.Separator=Zm;z();z();z();var Um=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Zd=(...e)=>e.filter((t,r,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===r).join(" ").trim();z();z();var Ym={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},Km=y.forwardRef((e,t)=>{var r=e,{color:n="currentColor",size:o=24,strokeWidth:i=2,absoluteStrokeWidth:a,className:s="",children:l,iconNode:c}=r,d=At(r,["color","size","strokeWidth","absoluteStrokeWidth","className","children","iconNode"]);return y.createElement("svg",D(B(D({ref:t},Ym),{width:o,height:o,stroke:n,strokeWidth:a?Number(i)*24/Number(o):i,className:Zd("lucide",s)}),d),[...c.map(([u,f])=>y.createElement(u,f)),...Array.isArray(l)?l:[l]])}),te=(e,t)=>{const r=y.forwardRef((n,o)=>{var i=n,{className:a}=i,s=At(i,["className"]);return y.createElement(Km,D({ref:o,iconNode:t,className:Zd(`lucide-${Um(e)}`,a)},s))});return r.displayName=`${e}`,r},cl=te("AlignLeft",[["path",{d:"M15 12H3",key:"6jk70r"}],["path",{d:"M17 18H3",key:"1amg6g"}],["path",{d:"M21 6H3",key:"1jwq7v"}]]);z();var Xm=te("Heading",[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]]);z();var Ji=te("List",[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]]);z();z();var Ud=te("AlignCenter",[["path",{d:"M17 12H7",key:"16if0g"}],["path",{d:"M19 18H5",key:"18s9l3"}],["path",{d:"M21 6H3",key:"1jwq7v"}]]);z();var Yd=te("AlignJustify",[["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 18h18",key:"1h113x"}],["path",{d:"M3 6h18",key:"d0wm0j"}]]);z();var Kd=te("AlignRight",[["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M21 18H7",key:"1ygte8"}],["path",{d:"M21 6H3",key:"1jwq7v"}]]);z();var Gm=te("Bold",[["path",{d:"M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8",key:"mg9rjx"}]]);z();var _o=te("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);z();var Xd=te("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);z();var Gd=te("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);z();var Jm=te("ChevronsDownUp",[["path",{d:"m7 20 5-5 5 5",key:"13a0gw"}],["path",{d:"m7 4 5 5 5-5",key:"1kwcof"}]]);z();var Qm=te("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);z();var e_=te("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);z();var ul=te("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);z();var t_=te("CornerLeftUp",[["polyline",{points:"14 9 9 4 4 9",key:"m9oyvo"}],["path",{d:"M20 20h-7a4 4 0 0 1-4-4V4",key:"1blwi3"}]]);z();var r_=te("EllipsisVertical",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]]);z();var n_=te("Expand",[["path",{d:"m21 21-6-6m6 6v-4.8m0 4.8h-4.8",key:"1c15vz"}],["path",{d:"M3 16.2V21m0 0h4.8M3 21l6-6",key:"1fsnz2"}],["path",{d:"M21 7.8V3m0 0h-4.8M21 3l-6 6",key:"hawz9i"}],["path",{d:"M3 7.8V3m0 0h4.8M3 3l6 6",key:"u9ee12"}]]);z();var eu=te("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);z();var o_=te("Hammer",[["path",{d:"m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9",key:"eefl8a"}],["path",{d:"m18 15 4-4",key:"16gjal"}],["path",{d:"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5",key:"b7pghm"}]]);z();var i_=te("Hash",[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]]);z();var a_=te("Heading1",[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"m17 12 3-2v8",key:"1hhhft"}]]);z();var s_=te("Heading2",[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1",key:"9jr5yi"}]]);z();var l_=te("Heading3",[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2",key:"68ncm8"}],["path",{d:"M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2",key:"1ejuhz"}]]);z();var c_=te("Heading4",[["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"M17 10v3a1 1 0 0 0 1 1h3",key:"tj5zdr"}],["path",{d:"M21 10v8",key:"1kdml4"}],["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}]]);z();var u_=te("Heading5",[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"M17 13v-3h4",key:"1nvgqp"}],["path",{d:"M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17",key:"2nebdn"}]]);z();var d_=te("Heading6",[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["circle",{cx:"19",cy:"16",r:"2",key:"15mx69"}],["path",{d:"M20 10c-2 2-3 3.5-3 6",key:"f35dl0"}]]);z();var p_=te("Italic",[["line",{x1:"19",x2:"10",y1:"4",y2:"4",key:"15jd3p"}],["line",{x1:"14",x2:"5",y1:"20",y2:"20",key:"bu0au3"}],["line",{x1:"15",x2:"9",y1:"4",y2:"20",key:"uljnxc"}]]);z();var Jd=te("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);z();var f_=te("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);z();var Qd=te("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);z();var ep=te("ListOrdered",[["path",{d:"M10 12h11",key:"6m4ad9"}],["path",{d:"M10 18h11",key:"11hvi2"}],["path",{d:"M10 6h11",key:"c7qv1k"}],["path",{d:"M4 10h2",key:"16xx2s"}],["path",{d:"M4 6h1v4",key:"cnovpq"}],["path",{d:"M6 18H4c0-1 2-2 2-3s-1-1.5-2-1",key:"m9a95d"}]]);z();var h_=te("LockOpen",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 9.9-1",key:"1mm8w8"}]]);z();var v_=te("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);z();var g_=te("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);z();var m_=te("Minimize2",[["polyline",{points:"4 14 10 14 10 20",key:"11kfnr"}],["polyline",{points:"20 10 14 10 14 4",key:"rlmsce"}],["line",{x1:"14",x2:"21",y1:"10",y2:"3",key:"o5lafz"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);z();var __=te("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);z();var tp=te("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);z();var y_=te("PanelLeft",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}]]);z();var b_=te("PanelRight",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);z();var k_=te("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);z();var x_=te("Quote",[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]]);z();var w_=te("RectangleEllipsis",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M17 12h.01",key:"1m0b6t"}],["path",{d:"M7 12h.01",key:"eqddd0"}]]);z();var S_=te("Redo2",[["path",{d:"m15 14 5-5-5-5",key:"12vg1m"}],["path",{d:"M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13",key:"6uklza"}]]);z();var I_=te("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);z();var E_=te("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);z();var C_=te("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);z();var z_=te("SquareCode",[["path",{d:"M10 9.5 8 12l2 2.5",key:"3mjy60"}],["path",{d:"m14 9.5 2 2.5-2 2.5",key:"1bir2l"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);z();var j_=te("Strikethrough",[["path",{d:"M16 4H9a3 3 0 0 0-2.83 4",key:"43sutm"}],["path",{d:"M14 12a4 4 0 0 1 0 8H6",key:"nlfj13"}],["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}]]);z();var A_=te("Tablet",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["line",{x1:"12",x2:"12.01",y1:"18",y2:"18",key:"1dp563"}]]);z();var P_=te("ToyBrick",[["rect",{width:"18",height:"12",x:"3",y:"8",rx:"1",key:"158fvp"}],["path",{d:"M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3",key:"s0042v"}],["path",{d:"M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3",key:"9wmeh2"}]]);z();var dl=te("Trash",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]]);z();var Qi=te("Type",[["polyline",{points:"4 7 4 4 20 4 20 7",key:"1nosan"}],["line",{x1:"9",x2:"15",y1:"20",y2:"20",key:"swin9y"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20",key:"1tx1rr"}]]);z();var D_=te("Underline",[["path",{d:"M6 4v6a6 6 0 0 0 12 0V4",key:"9kb039"}],["line",{x1:"4",x2:"20",y1:"20",y2:"20",key:"nun2al"}]]);z();var M_=te("Undo2",[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]]);z();var T_=te("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);z();var O_=te("ZoomIn",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);z();var L_=te("ZoomOut",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);z();z();z();var tu={ControlLeft:"ctrl",ControlRight:"ctrl",MetaLeft:"meta",MetaRight:"meta",ShiftLeft:"shift",ShiftRight:"shift",KeyA:"a",KeyB:"b",KeyC:"c",KeyD:"d",KeyE:"e",KeyF:"f",KeyG:"g",KeyH:"h",KeyI:"i",KeyJ:"j",KeyK:"k",KeyL:"l",KeyM:"m",KeyN:"n",KeyO:"o",KeyP:"p",KeyQ:"q",KeyR:"r",KeyS:"s",KeyT:"t",KeyU:"u",KeyV:"v",KeyW:"w",KeyX:"x",KeyY:"y",KeyZ:"z",Delete:"delete",Backspace:"backspace",AltRight:"altRight"},Ot=Pd()(tl(e=>({held:{},hold:t=>e(r=>r.held[t]?r:{held:B(D({},r.held),{[t]:!0})}),release:t=>e(r=>r.held[t]?{held:B(D({},r.held),{[t]:!1})}:r),reset:(t={})=>e(()=>({held:t})),triggers:{}}))),rp=e=>{const t=i=>{if(i.getModifierState("AltGraph")){Ot.getState().hold("altRight");return}const a=tu[i.code];if(a){Ot.getState().hold(a);const{held:s,triggers:l}=Ot.getState();Object.values(l).forEach(({combo:c,cb:d})=>{Object.entries(c).every(([f,v])=>v===!!s[f])&&Object.entries(s).every(([f,v])=>v===!!c[f])&&d(i)!==!1&&i.preventDefault()}),a!=="meta"&&a!=="ctrl"&&a!=="shift"&&Ot.getState().release(a)}},r=i=>{if(!i.getModifierState("AltGraph")&&i.code==="ControlRight"){Ot.getState().release("altRight");return}const a=tu[i.code];a&&(a==="meta"?Ot.getState().reset():Ot.getState().release(a))},n=i=>{document.visibilityState==="hidden"&&Ot.getState().reset()},o=()=>{Ot.getState().reset()};return window.addEventListener("blur",o),e.addEventListener("keydown",t),e.addEventListener("keyup",r),e.addEventListener("visibilitychange",n),()=>{e.removeEventListener("keydown",t),e.removeEventListener("keyup",r),e.removeEventListener("visibilitychange",n),window.removeEventListener("blur",o)}},R_=()=>{y.useEffect(()=>rp(document),[])},Rt=(e,t)=>{y.useEffect(()=>Ot.setState(r=>({triggers:B(D({},r.triggers),{[`${Object.keys(e).join("+")}`]:{combo:e,cb:t}})})),[])},ru=0;function F_(e,t=300){let r;return(...n)=>{clearTimeout(r),r=setTimeout(()=>{e(...n)},t)}}var nu=e=>B(D({},e),{ui:B(D({},e.ui),{field:B(D({},e.ui.field),{focus:null})})}),B_=(e,t)=>{const r=F_(n=>{const{histories:o,index:i}=t().history,a={state:n,id:lt("history")},s=[...o.slice(0,i+1),a];e({history:B(D({},t().history),{histories:s,index:s.length-1})})},250);return{initialAppState:{},index:ru,histories:[],hasPast:()=>t().history.index>ru,hasFuture:()=>t().history.index<t().history.histories.length-1,prevHistory:()=>{const{history:n}=t();return n.hasPast()?n.histories[n.index-1]:null},nextHistory:()=>{const n=t().history;return n.hasFuture()?n.histories[n.index+1]:null},currentHistory:()=>t().history.histories[t().history.index],back:()=>{var n;const{history:o,dispatch:i}=t();if(o.hasPast()){const a=nu(((n=o.prevHistory())==null?void 0:n.state)||o.initialAppState);i({type:"set",state:a}),e({history:B(D({},o),{index:o.index-1})})}},forward:()=>{var n;const{history:o,dispatch:i}=t();if(o.hasFuture()){const a=(n=o.nextHistory())==null?void 0:n.state;i({type:"set",state:a?nu(a):{}}),e({history:B(D({},o),{index:o.index+1})})}},setHistories:n=>{var o;const{dispatch:i,history:a}=t();i({type:"set",state:((o=n[n.length-1])==null?void 0:o.state)||a.initialAppState}),e({history:B(D({},a),{histories:n,index:n.length-1})})},setHistoryIndex:n=>{var o;const{dispatch:i,history:a}=t();i({type:"set",state:((o=a.histories[n])==null?void 0:o.state)||a.initialAppState}),e({history:B(D({},a),{index:n})})},record:r}};function N_(e,{histories:t,index:r,initialAppState:n}){y.useEffect(()=>e.setState({history:B(D({},e.getState().history),{histories:t,index:r,initialAppState:n})}),[t,r,n]);const o=()=>{e.getState().history.back()},i=()=>{e.getState().history.forward()};Rt({altRight:!1,meta:!0,z:!0},o),Rt({altRight:!1,meta:!0,shift:!0,z:!0},i),Rt({altRight:!1,meta:!0,y:!0},i),Rt({altRight:!1,ctrl:!0,z:!0},o),Rt({altRight:!1,ctrl:!0,shift:!0,z:!0},i),Rt({altRight:!1,ctrl:!0,y:!0},i)}z();var $_=(e,t)=>{const r=new Map;return{registerNode:(n,o)=>{r.set(n,o)},unregisterNode:n=>{r.delete(n)},syncNode:n=>{var o;n&&((o=r.get(n))==null||o.sync())},syncNodes:n=>{n.forEach(o=>{var i;o&&((i=r.get(o))==null||i.sync())})},setOverlayVisible:(n,o)=>{if(!n)return;const i=r.get(n);if(i){if(o){i.showOverlay();return}i.hideOverlay()}}}};z();z();var ou=(e,t)=>{const r=[];return ht(e,t,n=>n,n=>(r.push(n),n)),r},H_=(e,t)=>{const r=(...o)=>ke(null,[...o],function*(i={},a){const{state:s,permissions:l,config:c}=t(),{cache:d,globalPermissions:u}=l,f=(S,x=!1)=>ke(null,null,function*(){var _,g;const{config:j,state:w,setComponentLoading:A}=t(),E=d[S.props.id],I=w.indexes.nodes,k=(_=I[S.props.id])==null?void 0:_.parentId,P=k?I[k]:null,T=(g=P?.data)!=null?g:null,F=S.type==="root"?j.root:j.components[S.type];if(!F)return;const H=D(D({},u),F.permissions);if(F.resolvePermissions){const R=ll(S,E?.lastData),L=Object.values(R).some(Y=>Y===!0),U=E?.lastParentId!==k;if(L||U||x){const Y=A(S.props.id,!0,50),$=yield F.resolvePermissions(S,{changed:R,lastPermissions:E?.lastPermissions||null,permissions:H,appState:ho(w),lastData:E?.lastData||null,parent:T}),K=t().permissions;e({permissions:B(D({},K),{cache:B(D({},K.cache),{[S.props.id]:{lastParentId:k,lastData:S,lastPermissions:$}}),resolvedPermissions:B(D({},K.resolvedPermissions),{[S.props.id]:$})})}),Y()}}}),v=(S=!1)=>{const{state:x}=t();f({type:"root",props:B(D({},x.data.root.props),{id:"root"})},S)},{item:h,type:m,root:b}=i;h?yield f(h,a):m?ou(s,c).filter(S=>S.type===m).map(S=>ke(null,null,function*(){yield f(S,a)})):b?v(a):ou(s,c).map(S=>ke(null,null,function*(){yield f(S,a)}))});return{cache:{},globalPermissions:{drag:!0,edit:!0,delete:!0,duplicate:!0,insert:!0},resolvedPermissions:{},getPermissions:({item:o,type:i,root:a}={})=>{const{config:s,permissions:l}=t(),{globalPermissions:c,resolvedPermissions:d}=l;if(o){const u=s.components[o.type],f=D(D({},c),u?.permissions),v=d[o.props.id];return v?D(D({},c),v):f}else if(i){const u=s.components[i];return D(D({},c),u?.permissions)}else if(a){const u=s.root,f=D(D({},c),u?.permissions),v=d.root;return v?D(D({},c),v):f}return c},resolvePermissions:r,refreshPermissions:o=>r(o,!0)}},W_=(e,t)=>{y.useEffect(()=>{const{permissions:r}=e.getState(),{globalPermissions:n}=r;e.setState({permissions:B(D({},r),{globalPermissions:D(D({},n),t)})}),r.resolvePermissions()},[t]),y.useEffect(()=>e.subscribe(r=>r.state.data,()=>{e.getState().permissions.resolvePermissions()}),[]),y.useEffect(()=>e.subscribe(r=>r.config,()=>{e.getState().permissions.resolvePermissions()}),[])};z();var q_=(e,t)=>({fields:{},loading:!1,lastResolvedData:{},id:void 0}),V_=(e,t)=>{const r=y.useCallback(n=>ke(null,null,function*(){var o,i;const{fields:a,lastResolvedData:s}=e.getState().fields,l=e.getState().metadata,c=e.getState().state.indexes.nodes,d=c[t||"root"],u=d?.data,f=d?.parentId?c[d.parentId]:null,v=f?.data||null,{getComponentConfig:h,state:m,config:b}=e.getState(),S=h(u?.type);if(!u||!S)return;const x=S.fields||{},_=S.resolveFields;let g=a;if(n&&(e.setState(j=>({fields:B(D({},j.fields),{fields:x,id:t})})),g=x),_){const j=setTimeout(()=>{e.setState(I=>({fields:B(D({},I.fields),{loading:!0})}))},50),w=((o=s.props)==null?void 0:o.id)===t?s:null,A=ll(u,w),E=yield _(u,{changed:A,fields:x,lastFields:g,metadata:D(D({},l),S.metadata),lastData:w,appState:ho(m),parent:v});if(clearTimeout(j),((i=e.getState().selectedItem)==null?void 0:i.props.id)!==t||e.getState().config!==b)return;e.setState({fields:{fields:E,loading:!1,lastResolvedData:u,id:t}})}else e.setState(j=>({fields:B(D({},j.fields),{fields:x,id:t})}))}),[t]);y.useEffect(()=>{r(!0);const n=e.subscribe(i=>i.state.indexes.nodes[t||"root"],()=>r()),o=e.subscribe(i=>i.config,()=>r(!0));return()=>{n(),o()}},[t])};z();var Z_=e=>{if("type"in e&&e.type!=="root")throw new Error("Converting non-root item to root.");const{readOnly:t}=e;if(e.props){if("id"in e.props){const r=e.props,{id:n}=r;return{props:At(r,["id"]),readOnly:t}}return{props:e.props,readOnly:t}}return{props:{},readOnly:t}},U_={title:{type:"text"}},np=e=>Pd()(tl((t,r)=>{var n,o;return B(D({instanceId:lt(),state:os,config:{components:{}},componentState:{},plugins:[],overrides:{},viewports:go,zoomConfig:{autoZoom:1,rootHeight:0,zoom:1},status:"LOADING",iframe:{},_experimentalFullScreenCanvas:!1,_experimentalVirtualization:!1,metadata:{},dictionary:{},dnd:{},fieldTransforms:{}},e),{fields:q_(),history:B_(t,r),nodes:$_(),permissions:H_(t,r),getCurrentData:()=>{var i;const a=r();return(i=a.selectedItem)!=null?i:a.state.data.root},getComponentConfig:i=>{var a;const{config:s,selectedItem:l}=r(),c=((a=s.root)==null?void 0:a.fields)||U_;return i&&i!=="root"?s.components[i]:l?s.components[l.type]:B(D({},s.root),{fields:c})},selectedItem:(n=e?.state)!=null&&n.ui.itemSelector?Qe((o=e?.state)==null?void 0:o.ui.itemSelector,e.state):null,dispatch:i=>t(a=>{var s,l;const{record:c}=r().history,u=Vc({record:c,appStore:a})(a.state,i),f=u.ui.itemSelector?Qe(u.ui.itemSelector,u):null;return(l=(s=r()).onAction)==null||l.call(s,i,u,r().state),B(D({},a),{state:u,selectedItem:f})}),setZoomConfig:i=>t({zoomConfig:i}),setStatus:i=>t({status:i}),setComponentState:i=>t({componentState:i}),pendingLoadTimeouts:{},setComponentLoading:(i,a=!0,s=0)=>{const{setComponentState:l,pendingLoadTimeouts:c}=r(),d=lt(),u=()=>{var h;const{componentState:m}=r();l(B(D({},m),{[i]:B(D({},m[i]),{loadingCount:(((h=m[i])==null?void 0:h.loadingCount)||0)+1})}))},f=()=>{var h;const{componentState:m}=r();clearTimeout(v),delete c[d],t({pendingLoadTimeouts:c}),l(B(D({},m),{[i]:B(D({},m[i]),{loadingCount:Math.max((((h=m[i])==null?void 0:h.loadingCount)||0)-1,0)})}))},v=setTimeout(()=>{a?u():f(),delete c[d],t({pendingLoadTimeouts:c})},s);return t({pendingLoadTimeouts:B(D({},c),{[i]:v})}),f},unsetComponentLoading:i=>{const{setComponentLoading:a}=r();a(i,!1)},setUi:(i,a)=>t(s=>{const c=Vc({record:()=>{},appStore:s})(s.state,{type:"setUi",ui:i,recordHistory:a}),d=c.ui.itemSelector?Qe(c.ui.itemSelector,c):null;return B(D({},s),{state:c,selectedItem:d})}),resolveComponentData:(i,a)=>ke(null,null,function*(){var s,l;const{config:c,metadata:d,setComponentLoading:u,permissions:f,state:v}=r(),h="id"in i.props?i.props.id:"root",m=(s=v.indexes.nodes[h])==null?void 0:s.parentId,b=m?v.indexes.nodes[m]:null,S=(l=b?.data)!=null?l:null,x={};return yield qd(i,c,d,_=>{const g="id"in _.props?_.props.id:"root";x[g]=u(g,!0,50)},_=>ke(null,null,function*(){const g="id"in _.props?_.props.id:"root";"type"in _?yield f.refreshPermissions({item:_}):yield f.refreshPermissions({root:!0}),x[g]()}),a,S,v.data.root)}),resolveAndCommitData:()=>ke(null,null,function*(){const{config:i,state:a,dispatch:s,resolveComponentData:l}=r();ht(a,i,c=>c,(c,d)=>(d.length>1||l(c,"load").then(u=>{const{state:f}=r(),v=f.indexes.nodes[u.node.props.id];if(v&&u.didChange)if(u.node.props.id==="root")s({type:"replaceRoot",root:Z_(u.node)});else{const h=`${v.parentId}:${v.zone}`,b=f.indexes.zones[h].contentIds.indexOf(u.node.props.id);s({type:"replace",data:u.node,destinationIndex:b,destinationZone:h})}}),c))})})})),pl=y.createContext(null),xa=null,op=()=>(xa||(xa=np()),xa);function N(e){var t;const r=(t=y.useContext(pl))!=null?t:op();return Xi(r,e)}function me(){var e;return(e=y.useContext(pl))!=null?e:op()}z();z();var Y_={IconButton:"_IconButton_1pxxt_1","IconButton--active":"_IconButton--active_1pxxt_15","IconButton--disabled":"_IconButton--disabled_1pxxt_28"};z();z();z();z();var iu=(e,t,r)=>{const n=Array.from(e),[o]=n.splice(t,1);return n.splice(r,0,o),n};z();var K_=(e,t,r)=>{const n=Array.from(e);return n.splice(t,1),n.splice(t,0,r),n};z();z();z();z();var X_="Invariant failed";function G_(e,t){throw new Error(X_)}var Go=function(t){var r=t.top,n=t.right,o=t.bottom,i=t.left,a=n-i,s=o-r,l={top:r,right:n,bottom:o,left:i,width:a,height:s,x:i,y:r,center:{x:(n+i)/2,y:(o+r)/2}};return l},J_=function(t,r){return{top:t.top-r.top,left:t.left-r.left,bottom:t.bottom+r.bottom,right:t.right+r.right}},au=function(t,r){return{top:t.top+r.top,left:t.left+r.left,bottom:t.bottom-r.bottom,right:t.right-r.right}},wa={top:0,right:0,bottom:0,left:0},Q_=function(t){var r=t.borderBox,n=t.margin,o=n===void 0?wa:n,i=t.border,a=i===void 0?wa:i,s=t.padding,l=s===void 0?wa:s,c=Go(J_(r,o)),d=Go(au(r,a)),u=Go(au(d,l));return{marginBox:c,borderBox:Go(r),paddingBox:d,contentBox:u,margin:o,border:a,padding:l}},gt=function(t){var r=t.slice(0,-2),n=t.slice(-2);if(n!=="px")return 0;var o=Number(r);return isNaN(o)&&G_(),o},ey=function(t,r){var n={top:gt(r.marginTop),right:gt(r.marginRight),bottom:gt(r.marginBottom),left:gt(r.marginLeft)},o={top:gt(r.paddingTop),right:gt(r.paddingRight),bottom:gt(r.paddingBottom),left:gt(r.paddingLeft)},i={top:gt(r.borderTopWidth),right:gt(r.borderRightWidth),bottom:gt(r.borderBottomWidth),left:gt(r.borderLeftWidth)};return Q_({borderBox:t,margin:n,padding:o,border:i})},ip=function(t){var r=t.getBoundingClientRect(),n=window.getComputedStyle(t);return ey(r,n)},ty=(e,t,r)=>{const n=ip(t),{width:o,height:i}=n.contentBox,a=e.height==="auto"?i:e.height;let s=0,l=1;if(typeof e.width=="number"&&(e.width>o||a>i)){const c=Math.min(o/e.width,1),d=Math.min(i/a,1);r=c,c<d?s=a/r:(s=a,r=d),l=r}else l=1,r=1,s=a;return{autoZoom:l,rootHeight:s,zoom:r}},ap=e=>{const t=me();return n=>{const{state:o,zoomConfig:i,setZoomConfig:a}=t.getState(),{viewports:s}=o.ui,l=n?.viewports||s;e.current&&a(ty(l?.current,e.current,i.zoom))}};z();var ry={Loader:"_Loader_1w5zn_13","loader-animation":"_loader-animation_1w5zn_1"};z();z();var ny={"header-publish":"Publish","header-undo":"undo","header-redo":"redo","header-toggle-leftsidebar":"Toggle left sidebar","header-toggle-rightsidebar":"Toggle right sidebar","header-toggle-menubar":"Toggle menu bar","action-selectparent":"Select parent","action-duplicate":"Duplicate","action-delete":"Delete","label-page":"Page","label-component":"Component","outline-empty":"No items","outline-item-collapse":"Collapse","outline-item-expand":"Expand","outline-header-title":"Outline","outline-header-collapseall":"Collapse all","outline-item-duplicate":"Duplicate","outline-item-delete":"Delete","drawer-category-collapse":"Collapse {title}","drawer-category-expand":"Expand {title}","drawer-category-other":"Other","canvas-noconfig":"No configuration for {type}","field-readonly":"Read-only","field-arrayitem-summary":"Item #{index}","field-arrayitem-duplicate":"Duplicate","field-arrayitem-delete":"Delete","field-external-selectdata":"Select data","field-external-search":"Search","field-external-togglefilters":"Toggle filters","field-external-item":"External item","field-external-result-singular":"{count} result","field-external-result-plural":"{count} results","field-richtext-bold":"Bold","field-richtext-italic":"Italic","field-richtext-underline":"Underline","field-richtext-strikethrough":"Strikethrough","field-richtext-blockquote":"Blockquote","field-richtext-code-inline":"Inline code","field-richtext-code-block":"Code block","field-richtext-list-bullet":"Bullet list","field-richtext-list-ordered":"Ordered list","field-richtext-horizontalrule":"Horizontal rule","field-richtext-align-left":"Align left","field-richtext-align-center":"Align center","field-richtext-align-right":"Align right","field-richtext-align-justify":"Justify","field-richtext-select":"Select","field-richtext-headingselect-1":"Heading 1","field-richtext-headingselect-2":"Heading 2","field-richtext-headingselect-3":"Heading 3","field-richtext-headingselect-4":"Heading 4","field-richtext-headingselect-5":"Heading 5","field-richtext-headingselect-6":"Heading 6","field-richtext-alignselect-left":"Left","field-richtext-alignselect-center":"Center","field-richtext-alignselect-right":"Right","field-richtext-alignselect-justify":"Justify","field-richtext-listselect-bullet":"Bullet list","field-richtext-listselect-ordered":"Ordered list","viewport-zoom-in":"Zoom viewport in","viewport-zoom-out":"Zoom viewport out","viewport-zoom-auto":"{zoom}% (Auto)","viewport-toggle-menu":"Toggle viewport menu","viewport-switch":"Switch to {label} viewport","viewport-switch-default":"Switch viewport","plugin-blocks":"Blocks","plugin-outline":"Outline","plugin-fields":"Fields","plugin-components":"Components","layout-maximize":"maximize","layout-minimize":"minimize","loader-loading":"loading"},oy=(e,t)=>e.replace(/\{(\w+)\}/g,(r,n)=>t[n]!==void 0?String(t[n]):r),iy=(e,t,r)=>{var n;const o=(n=e[t])!=null?n:ny[t];return r?oy(o,r):o},J=(e,t)=>N(r=>iy(r.dictionary,e,t)),ay=ee("Loader",ry),Or=e=>{var t=e,{color:r,size:n=16}=t,o=At(t,["color","size"]);const i=J("loader-loading");return p.jsx("span",D({className:ay(),style:{width:n,height:n,color:r},"aria-label":i},o))},sy=ee("IconButton",Y_),Ue=y.forwardRef((e,t)=>{var r=e,{active:n=!1,children:o,href:i,onClick:a,type:s,disabled:l,tabIndex:c,newTab:d,fullWidth:u,title:f,suppressHydrationWarning:v}=r,h=At(r,["active","children","href","onClick","type","disabled","tabIndex","newTab","fullWidth","title","suppressHydrationWarning"]);const[m,b]=y.useState(!1),S=i?"a":"button";return p.jsxs(S,B(D({},h),{ref:t,className:sy({active:n,disabled:l,fullWidth:u}),onClick:x=>{a&&(b(!0),Promise.resolve(a(x)).then(()=>{b(!1)}))},type:s,disabled:l||m,tabIndex:c,target:d?"_blank":void 0,rel:d?"noreferrer":void 0,href:i,title:f,"aria-label":f,suppressHydrationWarning:v,children:[o,m&&p.jsxs(p.Fragment,{children:["  ",p.jsx(Or,{size:14})]})]}))});Ue.displayName="IconButton";z();var sp=y.createContext({}),Oe=()=>y.useContext(sp);z();z();z();var lp={Select:"_Select_1n4iv_1","Select-buttonInner":"_Select-buttonInner_1n4iv_6","Select-buttonIcon":"_Select-buttonIcon_1n4iv_11","Select--standalone":"_Select--standalone_1n4iv_17","Select--actionBar":"_Select--actionBar_1n4iv_22","Select-items":"_Select-items_1n4iv_27",SelectItem:"_SelectItem_1n4iv_38","SelectItem--isSelected":"_SelectItem--isSelected_1n4iv_53","SelectItem-icon":"_SelectItem-icon_1n4iv_59"};z();var Jo=ee("Select",lp),cp=ee("SelectItem",lp),ly=({children:e,isSelected:t,onClick:r})=>p.jsx("button",{className:cp({isSelected:t}),onClick:r,children:e}),cy=({children:e,options:t,onChange:r,value:n,defaultValue:o,mode:i,disabled:a=!1})=>{const[s,l]=y.useState(!1),c=J("field-richtext-select"),d=t.length>0,u=a||!d,f=p.jsxs("div",{className:Jo("buttonInner"),children:[p.jsx("span",{className:Jo("buttonIcon"),children:e}),p.jsx(_o,{size:12})]}),v=i==="actionBar"?p.jsx(Gi,{active:n!==o,disabled:u,children:f}):p.jsx(Ue,{title:c,active:n!==o,disabled:u,children:f});return p.jsx("div",{className:Jo({actionBar:i==="actionBar",standalone:i==="standalone"}),children:p.jsxs(mg,{open:s,onOpenChange:l,children:[d?p.jsx(_g,{asChild:!0,children:v}):v,t.length>0&&p.jsx(yg,{children:p.jsx(bg,{align:"start",children:p.jsx("ul",{className:Jo("items"),"data-puck-rte-menu":!0,children:t.map(h=>{const m=h.icon;return p.jsx("li",{children:p.jsxs(ly,{isSelected:n===h.value,onClick:()=>{r(h.value),l(!1)},children:[m&&p.jsx("div",{className:cp("icon"),children:p.jsx(m,{size:16})}),h.label]})},h.value)})})})})]})})};function fl({renderDefaultIcon:e,onChange:t,options:r,value:n,defaultValue:o}){var i,a;const{inline:s,readOnly:l}=Oe(),c=y.useMemo(()=>r.reduce((u,f)=>B(D({},u),{[f.value]:f}),{}),[r]),d=(a=n&&((i=c[n])==null?void 0:i.icon))!=null?a:e;return p.jsx(cy,{options:r,onChange:t,value:n,defaultValue:o,mode:s?"actionBar":"standalone",disabled:l,children:p.jsx(d,{})})}z();var uy={left:cl,center:Ud,right:Kd,justify:Yd},dy=e=>{var t;const r=J("field-richtext-alignselect-left"),n=J("field-richtext-alignselect-center"),o=J("field-richtext-alignselect-right"),i=J("field-richtext-alignselect-justify"),a={left:r,center:n,right:o,justify:i};let s=[];return e?.textAlign!==!1&&((t=e?.textAlign)!=null&&t.alignments?(e?.textAlign.alignments.includes("left")&&s.push("left"),e?.textAlign.alignments.includes("center")&&s.push("center"),e?.textAlign.alignments.includes("right")&&s.push("right"),e?.textAlign.alignments.includes("justify")&&s.push("justify")):s=["left","center","right","justify"]),y.useMemo(()=>s.map(l=>({value:l,label:a[l],icon:uy[l]})),[s,a])};z();var py={h1:a_,h2:s_,h3:l_,h4:c_,h5:u_,h6:d_},fy=e=>{var t;const r=J("field-richtext-headingselect-1"),n=J("field-richtext-headingselect-2"),o=J("field-richtext-headingselect-3"),i=J("field-richtext-headingselect-4"),a=J("field-richtext-headingselect-5"),s=J("field-richtext-headingselect-6"),l={h1:r,h2:n,h3:o,h4:i,h5:a,h6:s};let c=[];return e?.heading!==!1&&((t=e?.heading)!=null&&t.levels?(e?.heading.levels.includes(1)&&c.push("h1"),e?.heading.levels.includes(2)&&c.push("h2"),e?.heading.levels.includes(3)&&c.push("h3"),e?.heading.levels.includes(4)&&c.push("h4"),e?.heading.levels.includes(5)&&c.push("h5"),e?.heading.levels.includes(6)&&c.push("h6")):c=["h1","h2","h3","h4","h5","h6"]),y.useMemo(()=>c.map(d=>({value:d,label:l[d],icon:py[d]})),[c,l])};z();var hy={ul:Ji,ol:ep},vy=e=>{const t=J("field-richtext-listselect-bullet"),r=J("field-richtext-listselect-ordered"),n={ul:t,ol:r};let o=[];return e?.listItem!==!1&&(o=["ul","ol"]),y.useMemo(()=>o.map(i=>({value:i,label:n[i],icon:hy[i]})),[o,n])};z();z();var gy={RichTextMenu:"_RichTextMenu_1ve2j_1","RichTextMenu--form":"_RichTextMenu--form_1ve2j_7","RichTextMenu-group":"_RichTextMenu-group_1ve2j_21","RichTextMenu--inline":"_RichTextMenu--inline_1ve2j_39"};z();z();z();z();var my={Control:"_Control_id4pm_1","Control--inline":"_Control--inline_id4pm_6"},su=ee("Control",my);function ot({icon:e,disabled:t,active:r,onClick:n,title:o}){const{inline:i}=Oe();return i?p.jsx("span",{className:su({inline:!0}),children:p.jsx(Gi,{onClick:n,disabled:t,active:r,label:o,children:e})}):p.jsx("span",{className:su(),children:p.jsx(Ue,{onClick:n,disabled:t,active:r,title:o,children:e})})}function _y(){const{editor:e,editorState:t}=Oe(),r=J("field-richtext-align-left");return p.jsx(ot,{icon:p.jsx(cl,{}),onClick:n=>{n.stopPropagation(),e?.chain().focus().setTextAlign("left").run()},disabled:!t?.canAlignLeft,active:t?.isAlignLeft,title:r})}z();function yy(){const{editor:e,editorState:t}=Oe(),r=J("field-richtext-align-center");return p.jsx(ot,{icon:p.jsx(Ud,{}),onClick:n=>{n.stopPropagation(),e?.chain().focus().setTextAlign("center").run()},disabled:!t?.canAlignCenter,active:t?.isAlignCenter,title:r})}z();function by(){const{editor:e,editorState:t}=Oe(),r=J("field-richtext-align-right");return p.jsx(ot,{icon:p.jsx(Kd,{}),onClick:n=>{n.stopPropagation(),e?.chain().focus().setTextAlign("right").run()},disabled:!t?.canAlignRight,active:t?.isAlignRight,title:r})}z();function ky(){const{editor:e,editorState:t}=Oe(),r=J("field-richtext-align-justify");return p.jsx(ot,{icon:p.jsx(Yd,{}),onClick:n=>{n.stopPropagation(),e?.chain().focus().setTextAlign("justify").run()},disabled:!t?.canAlignJustify,active:t?.isAlignJustify,title:r})}z();z();function xy(){const e=Oe(),t=dy(e.options);return p.jsx(fl,{options:t,onChange:()=>{},value:"left",defaultValue:"left",renderDefaultIcon:cl})}var wy=y.lazy(()=>gr(()=>import("./loaded-SMPR6KZF-CyMeg3cy.js"),__vite__mapDeps([0,1,2,3,4,5,6,7])).then(e=>({default:e.AlignSelectLoaded}))),up=()=>p.jsx(y.Suspense,{fallback:p.jsx(xy,{}),children:p.jsx(wy,{})});z();function is(){const{editor:e,editorState:t}=Oe(),r=J("field-richtext-bold");return p.jsx(ot,{icon:p.jsx(Gm,{}),onClick:n=>{n.stopPropagation(),e?.chain().focus().toggleBold().run()},disabled:!t?.canBold,active:t?.isBold,title:r})}z();function as(){const{editor:e,editorState:t}=Oe(),r=J("field-richtext-italic");return p.jsx(ot,{icon:p.jsx(p_,{}),onClick:n=>{n.stopPropagation(),e?.chain().focus().toggleItalic().run()},disabled:!t?.canItalic,active:t?.isItalic,title:r})}z();function ss(){const{editor:e,editorState:t}=Oe(),r=J("field-richtext-underline");return p.jsx(ot,{icon:p.jsx(D_,{}),onClick:n=>{n.stopPropagation(),e?.chain().focus().toggleUnderline().run()},disabled:!t?.canUnderline,active:t?.isUnderline,title:r})}z();function Sy(){const{editor:e,editorState:t}=Oe(),r=J("field-richtext-strikethrough");return p.jsx(ot,{icon:p.jsx(j_,{}),onClick:n=>{n.stopPropagation(),e?.chain().focus().toggleStrike().run()},disabled:!t?.canStrike,active:t?.isStrike,title:r})}z();function Iy(){const{editor:e,editorState:t}=Oe(),r=J("field-richtext-code-inline");return p.jsx(ot,{icon:p.jsx(e_,{}),onClick:n=>{n.stopPropagation(),e?.chain().focus().toggleCode().run()},disabled:!t?.canInlineCode,active:t?.isInlineCode,title:r})}z();function Ey(){const{editor:e,editorState:t}=Oe(),r=J("field-richtext-list-bullet");return p.jsx(ot,{icon:p.jsx(Ji,{}),onClick:n=>{n.stopPropagation(),e?.chain().focus().toggleBulletList().run()},disabled:!t?.canBulletList,active:t?.isBulletList,title:r})}z();function Cy(){const{editor:e,editorState:t}=Oe(),r=J("field-richtext-list-ordered");return p.jsx(ot,{icon:p.jsx(ep,{}),onClick:n=>{n.stopPropagation(),e?.chain().focus().toggleOrderedList().run()},disabled:!t?.canOrderedList,active:t?.isOrderedList,title:r})}z();function zy(){const{editor:e,editorState:t}=Oe(),r=J("field-richtext-code-block");return p.jsx(ot,{icon:p.jsx(z_,{}),onClick:n=>{n.stopPropagation(),e?.chain().focus().toggleCodeBlock().run()},disabled:!t?.canCodeBlock,active:t?.isCodeBlock,title:r})}z();function jy(){const{editor:e,editorState:t}=Oe(),r=J("field-richtext-blockquote");return p.jsx(ot,{icon:p.jsx(x_,{}),onClick:n=>{n.stopPropagation(),e?.chain().focus().toggleBlockquote().run()},disabled:!t?.canBlockquote,active:t?.isBlockquote,title:r})}z();function Ay(){const{editor:e,editorState:t}=Oe(),r=J("field-richtext-horizontalrule");return p.jsx(ot,{icon:p.jsx(__,{}),onClick:n=>{n.stopPropagation(),e?.chain().focus().setHorizontalRule().run()},disabled:!t?.canHorizontalRule,title:r})}z();z();function Py(){const e=Oe(),t=fy(e.options);return p.jsx(fl,{options:t,onChange:()=>{},value:"p",defaultValue:"p",renderDefaultIcon:Xm})}var Dy=y.lazy(()=>gr(()=>import("./loaded-JKA25A3T-Ur_kiKYZ.js"),__vite__mapDeps([8,1,2,3,4,5,6,7])).then(e=>({default:e.HeadingSelectLoaded}))),dp=()=>p.jsx(y.Suspense,{fallback:p.jsx(Py,{}),children:p.jsx(Dy,{})});z();z();function My(){const e=Oe(),t=vy(e.options);return p.jsx(fl,{options:t,onChange:()=>{},value:"p",defaultValue:"p",renderDefaultIcon:Ji})}var Ty=y.lazy(()=>gr(()=>import("./loaded-36WRJPBT-C8iK3WV7.js"),__vite__mapDeps([9,1,2,3,4,5,6,7])).then(e=>({default:e.ListSelectLoaded}))),pp=()=>p.jsx(y.Suspense,{fallback:p.jsx(My,{}),children:p.jsx(Ty,{})}),fp=ee("RichTextMenu",gy),lu=({children:e})=>p.jsx(Le,{children:e}),Le=({children:e})=>{const{inline:t}=Oe();return p.jsx("div",{className:fp({inline:t,form:!t}),"data-puck-rte-menu":!0,children:e})},$n=({children:e})=>p.jsx("div",{className:fp("group"),children:e});Le.Group=$n;Le.Control=ot;Le.AlignCenter=yy;Le.AlignJustify=ky;Le.AlignLeft=_y;Le.AlignRight=by;Le.AlignSelect=up;Le.Blockquote=jy;Le.Bold=is;Le.BulletList=Ey;Le.CodeBlock=zy;Le.HeadingSelect=dp;Le.HorizontalRule=Ay;Le.InlineCode=Iy;Le.Italic=as;Le.ListSelect=pp;Le.OrderedList=Cy;Le.Strikethrough=Sy;Le.Underline=ss;var hp=({editor:e=null,editorState:t=null,field:r,readOnly:n,inline:o})=>{const{renderMenu:i,renderInlineMenu:a}=r,s=y.useMemo(()=>a||lu,[a]),l=y.useMemo(()=>i||lu,[i]);return p.jsx(sp.Provider,{value:{editor:e,editorState:t,inline:o,options:r.options,readOnly:n},children:o?p.jsx(s,{editor:e,editorState:t,readOnly:n,children:p.jsxs($n,{children:[p.jsx(is,{}),p.jsx(as,{}),p.jsx(ss,{})]})}):p.jsxs(l,{editor:e,editorState:t,readOnly:n,children:[p.jsxs($n,{children:[p.jsx(dp,{}),p.jsx(pp,{})]}),p.jsxs($n,{children:[p.jsx(is,{}),p.jsx(as,{}),p.jsx(ss,{})]}),p.jsx($n,{children:p.jsx(up,{})})]})})};z();var cu=ee("RichTextEditor",Md),vp=y.memo(({children:e,menu:t,readOnly:r=!1,field:n,inline:o=!1,editor:i,id:a})=>{const{initialHeight:s}=n,l=N(f=>{var v;return((v=f.currentRichText)==null?void 0:v.id)===a&&o===f.currentRichText.inline}),c=me(),d=y.useCallback(f=>{var v,h;(f.metaKey||f.ctrlKey)&&f.key.toLowerCase()==="i"&&(f.stopPropagation(),f.preventDefault(),(h=i==null?void 0:(v=i.commands).toggleItalic)==null||h.call(v)),f.key.toLowerCase()==="backspace"&&f.stopPropagation()},[i]),u=y.useCallback(f=>{var v,h;const m=!!((h=(v=f.relatedTarget)==null?void 0:v.closest)!=null&&h.call(v,"[data-puck-rte-menu]"));f.relatedTarget&&!m?c.setState({currentRichText:null}):f.stopPropagation()},[c]);return p.jsxs("div",{className:cu({editor:!o,inline:o,isActive:l,disabled:r}),style:o?{}:{height:s??192,overflowY:"auto"},onKeyDownCapture:d,onBlur:u,children:[!o&&p.jsx("div",{className:cu("menu"),children:t}),e]})});vp.displayName="EditorInner";z();var Oy=y.lazy(()=>gr(()=>import("./full-7ZJV44EE-BvdqOjkQ.js"),__vite__mapDeps([10,1,2,3,4,5,6,7])).then(e=>({default:e.LoadedRichTextMenuFull}))),Ly=e=>p.jsx(y.Suspense,{fallback:p.jsx(hp,D({},e)),children:p.jsx(Oy,D({},e))});z();z();z();z();z();z();var hl=(e,t=e)=>({slot:({value:r,propName:n,field:o,isReadOnly:i})=>{const a=i?t:e;return l=>a(B(D({allow:o?.type==="slot"?o.allow:[],disallow:o?.type==="slot"?o.disallow:[]},l),{zone:n,content:r}))}});z();z();z();function gp(e,t,r){const n={};return Object.keys(e).forEach(o=>{const i=o;n[i]=a=>{var s=a,{parentId:l}=s,c=At(s,["parentId"]);const d=c.propPath.replace(/\[\d+\]/g,"[*]"),u=t?.[c.propPath]||t?.[d]||r||!1,f=e[i];return f?.(B(D({},c),{field:c.field,isReadOnly:u,componentId:l}))}}),n}function Ry(e,t,r,n,o){const i=y.useMemo(()=>gp(r,n,o),[r,n,o]),a=y.useMemo(()=>Mr(t,i,e).props,[e,t,i]);return y.useMemo(()=>D(D({},t.props),a),[t.props,a])}function vl(e,t,r,n=r,o,i){return Ry(e,t,hl(r,n),o,i)}z();z();var Fy=ee("RichTextEditor",Md);function mp({content:e}){return p.jsx("div",{className:Fy(),children:p.jsx("div",{className:"rich-text",dangerouslySetInnerHTML:{__html:e}})})}z();var ls=(e,t,r)=>{if(!e)return null;if(t.length===0)return r(e);const[n,...o]=t;return Array.isArray(e)?e.map(i=>ls(i,t,r)):B(D({},e),{[n]:ls(e[n],o,r)})},By=y.lazy(()=>gr(()=>import("./Render-DQXAYUBI-BuHF9_A_.js"),__vite__mapDeps([11,12,3,2,4,5,6,7])).then(e=>({default:e.RichTextRender})));function ea(e,t){const r=(i,a=[])=>{if(!i)return[];const s=[];for(const[l,c]of Object.entries(i)){const d=[...a,l];c.type==="richtext"&&s.push({path:d,field:c}),c.type==="array"&&"arrayFields"in c&&s.push(...r(c.arrayFields,d)),c.type==="object"&&"objectFields"in c&&s.push(...r(c.objectFields,d))}return s},n=y.useMemo(()=>r(e),[e]);return y.useMemo(()=>{if(!n?.length)return{};let i=D({},t);for(const{path:a,field:s}of n)i=ls(i,a,l=>p.jsx(y.Suspense,{fallback:p.jsx(mp,{content:l}),children:p.jsx(By,{content:l,field:s})},a.join(".")));return i},[n,t,e])}z();var gl=e=>p.jsx(_p,D({},e)),Ny=({config:e,item:t,metadata:r})=>{const n=e.components[t.type],o=vl(e,t,a=>p.jsx(gl,B(D({},a),{config:e,metadata:r}))),i=ea(n.fields,o);return p.jsx(n.render,B(D(D({},o),i),{puck:B(D({},o.puck),{metadata:r||{}})}))},_p=y.forwardRef(function({className:t,style:r,content:n,config:o,metadata:i,as:a},s){const l=a??"div";return p.jsx(l,{className:t,style:r,ref:s,children:n.map(c=>o.components[c.type]?p.jsx(Ny,{config:o,item:c,metadata:i},c.props.id):null)})}),$y=Symbol.for("preact-signals");function ta(){if(Ut>1)Ut--;else{var e,t=!1;for((function(){var o=Pi;for(Pi=void 0;o!==void 0;){var i=o.S;if(i.v===o.v)for(var a=i.t;a!==void 0;a=a.x)a.i===o.i&&(a.i=i.i);o=o.o}})();io!==void 0;){var r=io;for(io=void 0,Ai++;r!==void 0;){var n=r.u;if(r.u=void 0,r.f&=-3,!(8&r.f)&&bp(r))try{r.c()}catch(o){t||(e=o,t=!0)}r=n}}if(Ai=0,Ut--,t)throw e}}function Ae(e){if(Ut>0)return e();cs=++Hy,Ut++;try{return e()}finally{ta()}}var oo,Se=void 0;function ue(e){var t=Se,r=oo;Se=void 0,oo=void 0;try{return e()}finally{Se=t,oo=r}}var io=void 0,Ut=0,Ai=0,Hy=0,cs=0,Pi=void 0,Di=0;function yp(e){if(Se!==void 0){var t=e.n;if(t===void 0||t.t!==Se)return t={i:0,S:e,p:Se.s,n:void 0,t:Se,e:void 0,x:void 0,r:t},Se.s!==void 0&&(Se.s.n=t),Se.s=t,e.n=t,32&Se.f&&e.S(t),t;if(t.i===-1)return t.i=0,t.n!==void 0&&(t.n.p=t.p,t.p!==void 0&&(t.p.n=t.n),t.p=Se.s,t.n=void 0,Se.s.n=t,Se.s=t),t}}function it(e,t){this.v=e,this.i=0,this.n=void 0,this.t=void 0,this.l=0,this.W=t?.watched,this.Z=t?.unwatched,this.name=t?.name}it.prototype.brand=$y;it.prototype.h=function(){return!0};it.prototype.S=function(e){var t=this,r=this.t;r!==e&&e.e===void 0&&(e.x=r,this.t=e,r!==void 0?r.e=e:ue(function(){var n;(n=t.W)==null||n.call(t)}))};it.prototype.U=function(e){var t=this;if(this.t!==void 0){var r=e.e,n=e.x;r!==void 0&&(r.x=n,e.e=void 0),n!==void 0&&(n.e=r,e.x=void 0),e===this.t&&(this.t=n,n===void 0&&ue(function(){var o;(o=t.Z)==null||o.call(t)}))}};it.prototype.subscribe=function(e){var t=this;return ct(function(){var r=t.value;ue(function(){return e(r)})},{name:"sub"})};it.prototype.valueOf=function(){return this.value};it.prototype.toString=function(){return this.value+""};it.prototype.toJSON=function(){return this.value};it.prototype.peek=function(){var e=this;return ue(function(){return e.value})};Object.defineProperty(it.prototype,"value",{get:function(){var e=yp(this);return e!==void 0&&(e.i=this.i),this.v},set:function(e){if(e!==this.v){if(Ai>100)throw new Error("Cycle detected");(function(r){Ut!==0&&Ai===0&&r.l!==cs&&(r.l=cs,Pi={S:r,v:r.v,i:r.i,o:Pi})})(this),this.v=e,this.i++,Di++,Ut++;try{for(var t=this.t;t!==void 0;t=t.x)t.t.N()}finally{ta()}}}});function kn(e,t){return new it(e,t)}function bp(e){for(var t=e.s;t!==void 0;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function kp(e){for(var t=e.s;t!==void 0;t=t.n){var r=t.S.n;if(r!==void 0&&(t.r=r),t.S.n=t,t.i=-1,t.n===void 0){e.s=t;break}}}function xp(e){for(var t=e.s,r=void 0;t!==void 0;){var n=t.p;t.i===-1?(t.S.U(t),n!==void 0&&(n.n=t.n),t.n!==void 0&&(t.n.p=n)):r=t,t.S.n=t.r,t.r!==void 0&&(t.r=void 0),t=n}e.s=r}function Lr(e,t){it.call(this,void 0,t),this.x=e,this.s=void 0,this.g=Di-1,this.f=4}Lr.prototype=new it;Lr.prototype.h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===Di))return!0;if(this.g=Di,this.f|=1,this.i>0&&!bp(this))return this.f&=-2,!0;var e=Se;try{kp(this),Se=this;var t=this.x();(16&this.f||this.v!==t||this.i===0)&&(this.v=t,this.f&=-17,this.i++)}catch(r){this.v=r,this.f|=16,this.i++}return Se=e,xp(this),this.f&=-2,!0};Lr.prototype.S=function(e){if(this.t===void 0){this.f|=36;for(var t=this.s;t!==void 0;t=t.n)t.S.S(t)}it.prototype.S.call(this,e)};Lr.prototype.U=function(e){if(this.t!==void 0&&(it.prototype.U.call(this,e),this.t===void 0)){this.f&=-33;for(var t=this.s;t!==void 0;t=t.n)t.S.U(t)}};Lr.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var e=this.t;e!==void 0;e=e.x)e.t.N()}};Object.defineProperty(Lr.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var e=yp(this);if(this.h(),e!==void 0&&(e.i=this.i),16&this.f)throw this.v;return this.v}});function uu(e,t){return new Lr(e,t)}function wp(e){var t=e.m;if(e.m=void 0,typeof t=="function"){Ut++;var r=Se;Se=void 0;try{t()}catch(n){throw e.f&=-2,e.f|=8,ml(e),n}finally{Se=r,ta()}}}function ml(e){for(var t=e.s;t!==void 0;t=t.n)t.S.U(t);e.x=void 0,e.s=void 0,wp(e)}function Wy(e){if(Se!==this)throw new Error("Out-of-order effect");xp(this),Se=e,this.f&=-2,8&this.f&&ml(this),ta()}function xn(e,t){this.x=e,this.m=void 0,this.s=void 0,this.u=void 0,this.f=32,this.name=t?.name,oo&&oo.push(this)}xn.prototype.c=function(){var e=this.S();try{if(8&this.f||this.x===void 0)return;var t=this.x();typeof t=="function"&&(this.m=t)}finally{e()}};xn.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,wp(this),kp(this),Ut++;var e=Se;return Se=this,Wy.bind(this,e)};xn.prototype.N=function(){2&this.f||(this.f|=2,this.u=io,io=this)};xn.prototype.d=function(){this.f|=8,1&this.f||ml(this)};xn.prototype.dispose=function(){this.d()};function ct(e,t){var r=new xn(e,t);try{r.c()}catch(o){throw r.d(),o}var n=r.d.bind(r);return n[Symbol.dispose]=n,n}var qy=Object.create,_l=Object.defineProperty,Vy=Object.defineProperties,Zy=Object.getOwnPropertyDescriptor,Uy=Object.getOwnPropertyDescriptors,du=Object.getOwnPropertySymbols,Yy=Object.prototype.hasOwnProperty,Ky=Object.prototype.propertyIsEnumerable,Xy=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),wn=e=>{throw TypeError(e)},us=(e,t,r)=>t in e?_l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Gy=(e,t)=>{for(var r in t||(t={}))Yy.call(t,r)&&us(e,r,t[r]);if(du)for(var r of du(t))Ky.call(t,r)&&us(e,r,t[r]);return e},Jy=(e,t)=>Vy(e,Uy(t)),pu=(e,t)=>_l(e,"name",{value:t,configurable:!0}),Qy=e=>{var t;return[,,,qy((t=void 0)!=null?t:null)]},Sp=["class","method","getter","setter","accessor","field","value","get","set"],Hn=e=>e!==void 0&&typeof e!="function"?wn("Function expected"):e,eb=(e,t,r,n,o)=>({kind:Sp[e],name:t,metadata:n,addInitializer:i=>r._?wn("Already initialized"):o.push(Hn(i||null))}),Ip=(e,t)=>us(t,Xy("metadata"),e[3]),yr=(e,t,r,n)=>{for(var o=0,i=e[t>>1],a=i&&i.length;o<a;o++)t&1?i[o].call(r):n=i[o].call(r,n);return n},Sn=(e,t,r,n,o,i)=>{var a,s,l,c,d,u=t&7,f=!!(t&8),v=!!(t&16),h=u>3?e.length+1:u?f?1:2:0,m=Sp[u+5],b=u>3&&(e[h-1]=[]),S=e[h]||(e[h]=[]),x=u&&(!v&&!f&&(o=o.prototype),u<5&&(u>3||!v)&&Zy(u<4?o:{get[r](){return mt(this,i)},set[r](g){return ir(this,i,g)}},r));u?v&&u<4&&pu(i,(u>2?"set ":u>1?"get ":"")+r):pu(o,r);for(var _=n.length-1;_>=0;_--)c=eb(u,r,l={},e[3],S),u&&(c.static=f,c.private=v,d=c.access={has:v?g=>tb(o,g):g=>r in g},u^3&&(d.get=v?g=>(u^1?mt:rb)(g,o,u^4?i:x.get):g=>g[r]),u>2&&(d.set=v?(g,j)=>ir(g,o,j,u^4?i:x.set):(g,j)=>g[r]=j)),s=(0,n[_])(u?u<4?v?i:x[m]:u>4?void 0:{get:x.get,set:x.set}:o,c),l._=1,u^4||s===void 0?Hn(s)&&(u>4?b.unshift(s):u?v?i=s:x[m]=s:o=s):typeof s!="object"||s===null?wn("Object expected"):(Hn(a=s.get)&&(x.get=a),Hn(a=s.set)&&(x.set=a),Hn(a=s.init)&&b.unshift(a));return u||Ip(e,o),x&&_l(o,r,x),v?u^4?i:x:o},yl=(e,t,r)=>t.has(e)||wn("Cannot "+r),tb=(e,t)=>Object(t)!==t?wn('Cannot use the "in" operator on this value'):e.has(t),mt=(e,t,r)=>(yl(e,t,"read from private field"),r?r.call(e):t.get(e)),Wn=(e,t,r)=>t.has(e)?wn("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),ir=(e,t,r,n)=>(yl(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r),rb=(e,t,r)=>(yl(e,t,"access private method"),r);function ds(e,t){if(t){let r;return uu(()=>{const n=e();return n&&r&&t(r,n)?r:(r=n,n)})}return uu(e)}function zt(e,t){if(Object.is(e,t))return!0;if(e===null||t===null)return!1;if(typeof e=="function"&&typeof t=="function")return e===t;if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(const r of e)if(!t.has(r))return!1;return!0}if(Array.isArray(e))return!Array.isArray(t)||e.length!==t.length?!1:!e.some((n,o)=>!zt(n,t[o]));if(typeof e=="object"&&typeof t=="object"){const r=Object.keys(e),n=Object.keys(t);return r.length!==n.length?!1:!r.some(i=>!zt(e[i],t[i]))}return!1}function de({get:e},t){return{init(r){return kn(r)},get(){return e.call(this).value},set(r){const n=e.call(this);n.peek()!==r&&(n.value=r)}}}function Me(e,t){const r=new WeakMap;return function(){let n=r.get(this);return n||(n=ds(e.bind(this)),r.set(this,n)),n.value}}function Sa(e=!0){return function(t,r){r.addInitializer(function(){const n=r.kind==="field"?this:r.static?this:Object.getPrototypeOf(this),o=Object.getOwnPropertyDescriptor(n,r.name);o&&Object.defineProperty(n,r.name,Jy(Gy({},o),{enumerable:e}))})}}function Po(...e){const t=e.map(r=>ct(r));return()=>t.forEach(r=>r())}var Ep,Cp,zp,jp,Ap,Pp,tt,bl,Ia,ps,fs,Xe,kl,Ea,Dp,hs,xl,Ca,vs,gs;Pp=[de],Ap=[de],jp=[de],zp=[Sa()],Cp=[Sa()],Ep=[Sa()];var Rr=class{constructor(e,t=Object.is){this.defaultValue=e,this.equals=t,yr(tt,5,this),Wn(this,Xe),Wn(this,bl,yr(tt,8,this)),yr(tt,11,this),Wn(this,kl,yr(tt,12,this)),yr(tt,15,this),Wn(this,xl,yr(tt,16,this)),yr(tt,19,this),this.reset=this.reset.bind(this),this.reset()}get current(){return mt(this,Xe,vs)}get initial(){return mt(this,Xe,ps)}get previous(){return mt(this,Xe,Dp)}set current(e){const t=ue(()=>mt(this,Xe,vs));e&&t&&this.equals(t,e)||Ae(()=>{mt(this,Xe,ps)||ir(this,Xe,e,fs),ir(this,Xe,t,hs),ir(this,Xe,e,gs)})}reset(e=this.defaultValue){Ae(()=>{ir(this,Xe,void 0,hs),ir(this,Xe,e,fs),ir(this,Xe,e,gs)})}};tt=Qy();bl=new WeakMap;Xe=new WeakSet;kl=new WeakMap;xl=new WeakMap;Ia=Sn(tt,20,"#initial",Pp,Xe,bl),ps=Ia.get,fs=Ia.set;Ea=Sn(tt,20,"#previous",Ap,Xe,kl),Dp=Ea.get,hs=Ea.set;Ca=Sn(tt,20,"#current",jp,Xe,xl),vs=Ca.get,gs=Ca.set;Sn(tt,2,"current",zp,Rr);Sn(tt,2,"initial",Cp,Rr);Sn(tt,2,"previous",Ep,Rr);Ip(tt,Rr);function za(e){return ue(()=>{const t={};for(const r in e)t[r]=e[r];return t})}var br,nb=class{constructor(){Wn(this,br,new WeakMap)}get(e,t){var r;return e?(r=mt(this,br).get(e))==null?void 0:r.get(t):void 0}set(e,t,r){var n;if(e)return mt(this,br).has(e)||mt(this,br).set(e,new Map),(n=mt(this,br).get(e))==null?void 0:n.set(t,r)}clear(e){var t;return e?(t=mt(this,br).get(e))==null?void 0:t.clear():void 0}};br=new WeakMap;var ob=Object.create,Mp=Object.defineProperty,ib=Object.getOwnPropertyDescriptor,fu=Object.getOwnPropertySymbols,ab=Object.prototype.hasOwnProperty,sb=Object.prototype.propertyIsEnumerable,Tp=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),ra=e=>{throw TypeError(e)},hu=Math.pow,ms=(e,t,r)=>t in e?Mp(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,lb=(e,t)=>{for(var r in t||(t={}))ab.call(t,r)&&ms(e,r,t[r]);if(fu)for(var r of fu(t))sb.call(t,r)&&ms(e,r,t[r]);return e},cb=e=>{var t;return[,,,ob((t=e?.[Tp("metadata")])!=null?t:null)]},Op=["class","method","getter","setter","accessor","field","value","get","set"],Lp=e=>e!==void 0&&typeof e!="function"?ra("Function expected"):e,ub=(e,t,r,n,o)=>({kind:Op[e],name:t,metadata:n,addInitializer:i=>r._?ra("Already initialized"):o.push(Lp(i||null))}),db=(e,t)=>ms(t,Tp("metadata"),e[3]),pb=(e,t,r,n)=>{for(var o=0,i=e[t>>1],a=i&&i.length;o<a;o++)i[o].call(r);return n},Rp=(e,t,r,n,o,i)=>{for(var a,s,l,c,d=t&7,u=!1,f=!1,v=2,h=Op[d+5],m=e[v]||(e[v]=[]),b=(o=o.prototype,ib(o,r)),S=n.length-1;S>=0;S--)l=ub(d,r,s={},e[3],m),l.static=u,l.private=f,c=l.access={has:x=>r in x},c.get=x=>x[r],a=(0,n[S])(b[h],l),s._=1,Lp(a)&&(b[h]=a);return b&&Mp(o,r,b),o},Fp=(e,t,r)=>t.has(e)||ra("Cannot "+r),fb=(e,t,r)=>(Fp(e,t,"read from private field"),t.get(e)),hb=(e,t,r)=>t.has(e)?ra("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),vb=(e,t,r,n)=>(Fp(e,t,"write to private field"),t.set(e,r),r),Je=class _s{constructor(t,r){this.x=t,this.y=r}static delta(t,r){return new _s(t.x-r.x,t.y-r.y)}static distance(t,r){return Math.hypot(t.x-r.x,t.y-r.y)}static equals(t,r){return t.x===r.x&&t.y===r.y}static from({x:t,y:r}){return new _s(t,r)}},xt=class kr{constructor(t,r,n,o){this.left=t,this.top=r,this.width=n,this.height=o,this.scale={x:1,y:1}}get inverseScale(){return{x:1/this.scale.x,y:1/this.scale.y}}translate(t,r){const{top:n,left:o,width:i,height:a,scale:s}=this,l=new kr(o+t,n+r,i,a);return l.scale=lb({},s),l}get boundingRectangle(){const{width:t,height:r,left:n,top:o,right:i,bottom:a}=this;return{width:t,height:r,left:n,top:o,right:i,bottom:a}}get center(){const{left:t,top:r,right:n,bottom:o}=this;return new Je((t+n)/2,(r+o)/2)}get area(){const{width:t,height:r}=this;return t*r}equals(t){if(!(t instanceof kr))return!1;const{left:r,top:n,width:o,height:i}=this;return r===t.left&&n===t.top&&o===t.width&&i===t.height}containsPoint(t){const{top:r,left:n,bottom:o,right:i}=this;return r<=t.y&&t.y<=o&&n<=t.x&&t.x<=i}intersectionArea(t){return t instanceof kr?gb(this,t):0}intersectionRatio(t){const{area:r}=this,n=this.intersectionArea(t);return n/(t.area+r-n)}get bottom(){const{top:t,height:r}=this;return t+r}get right(){const{left:t,width:r}=this;return t+r}get aspectRatio(){const{width:t,height:r}=this;return t/r}get corners(){return[{x:this.left,y:this.top},{x:this.right,y:this.top},{x:this.left,y:this.bottom},{x:this.right,y:this.bottom}]}static from({top:t,left:r,width:n,height:o}){return new kr(r,t,n,o)}static delta(t,r,n={x:"center",y:"center"}){const o=(i,a)=>{const s=n[a],l=a==="x"?i.left:i.top,c=a==="x"?i.width:i.height;return s=="start"?l:s=="end"?l+c:l+c/2};return Je.delta({x:o(t,"x"),y:o(t,"y")},{x:o(r,"x"),y:o(r,"y")})}static intersectionRatio(t,r){return kr.from(t).intersectionRatio(kr.from(r))}};function gb(e,t){const r=Math.max(t.top,e.top),n=Math.max(t.left,e.left),o=Math.min(t.left+t.width,e.left+e.width),i=Math.min(t.top+t.height,e.top+e.height),a=o-n,s=i-r;return n<o&&r<i?a*s:0}var Bp,Np,ys,gi,Do,na=class extends(ys=Rr,Np=[Me],Bp=[Me],ys){constructor(t){const r=Je.from(t);super(r,(n,o)=>Je.equals(n,o)),pb(Do,5,this),hb(this,gi,0),this.velocity={x:0,y:0}}get delta(){return Je.delta(this.current,this.initial)}get direction(){const{current:t,previous:r}=this;if(!r)return null;const n={x:t.x-r.x,y:t.y-r.y};return!n.x&&!n.y?null:Math.abs(n.x)>Math.abs(n.y)?n.x>0?"right":"left":n.y>0?"down":"up"}get current(){return super.current}set current(t){const{current:r}=this,n=Je.from(t),o={x:n.x-r.x,y:n.y-r.y},i=Date.now(),a=i-fb(this,gi),s=l=>Math.round(l/a*100);Ae(()=>{vb(this,gi,i),this.velocity={x:s(o.x),y:s(o.y)},super.current=n})}reset(t=this.defaultValue){super.reset(Je.from(t)),this.velocity={x:0,y:0}}};Do=cb(ys);gi=new WeakMap;Rp(Do,2,"delta",Np,na);Rp(Do,2,"direction",Bp,na);db(Do,na);function bs({x:e,y:t},r){const n=Math.abs(e),o=Math.abs(t);return typeof r=="number"?Math.sqrt(hu(n,2)+hu(o,2))>r:"x"in r&&"y"in r?n>r.x&&o>r.y:"x"in r?n>r.x:"y"in r?o>r.y:!1}var $p=(e=>(e.Horizontal="x",e.Vertical="y",e))($p||{}),Hp=Object.values($p),mb=Object.create,wl=Object.defineProperty,_b=Object.defineProperties,yb=Object.getOwnPropertyDescriptor,bb=Object.getOwnPropertyDescriptors,Mi=Object.getOwnPropertySymbols,Wp=Object.prototype.hasOwnProperty,qp=Object.prototype.propertyIsEnumerable,Vp=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),In=e=>{throw TypeError(e)},ks=(e,t,r)=>t in e?wl(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Sl=(e,t)=>{for(var r in t||(t={}))Wp.call(t,r)&&ks(e,r,t[r]);if(Mi)for(var r of Mi(t))qp.call(t,r)&&ks(e,r,t[r]);return e},Il=(e,t)=>_b(e,bb(t)),vu=(e,t)=>wl(e,"name",{value:t,configurable:!0}),Zp=(e,t)=>{var r={};for(var n in e)Wp.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&Mi)for(var n of Mi(e))t.indexOf(n)<0&&qp.call(e,n)&&(r[n]=e[n]);return r},En=e=>{var t;return[,,,mb((t=e?.[Vp("metadata")])!=null?t:null)]},Up=["class","method","getter","setter","accessor","field","value","get","set"],qn=e=>e!==void 0&&typeof e!="function"?In("Function expected"):e,kb=(e,t,r,n,o)=>({kind:Up[e],name:t,metadata:n,addInitializer:i=>r._?In("Already initialized"):o.push(qn(i||null))}),Fr=(e,t)=>ks(t,Vp("metadata"),e[3]),ce=(e,t,r,n)=>{for(var o=0,i=e[t>>1],a=i&&i.length;o<a;o++)t&1?i[o].call(r):n=i[o].call(r,n);return n},pe=(e,t,r,n,o,i)=>{var a,s,l,c,d,u=t&7,f=!!(t&8),v=!!(t&16),h=u>3?e.length+1:u?f?1:2:0,m=Up[u+5],b=u>3&&(e[h-1]=[]),S=e[h]||(e[h]=[]),x=u&&(!v&&!f&&(o=o.prototype),u<5&&(u>3||!v)&&yb(u<4?o:{get[r](){return De(this,i)},set[r](g){return pt(this,i,g)}},r));u?v&&u<4&&vu(i,(u>2?"set ":u>1?"get ":"")+r):vu(o,r);for(var _=n.length-1;_>=0;_--)c=kb(u,r,l={},e[3],S),u&&(c.static=f,c.private=v,d=c.access={has:v?g=>xb(o,g):g=>r in g},u^3&&(d.get=v?g=>(u^1?De:Yp)(g,o,u^4?i:x.get):g=>g[r]),u>2&&(d.set=v?(g,j)=>pt(g,o,j,u^4?i:x.set):(g,j)=>g[r]=j)),s=(0,n[_])(u?u<4?v?i:x[m]:u>4?void 0:{get:x.get,set:x.set}:o,c),l._=1,u^4||s===void 0?qn(s)&&(u>4?b.unshift(s):u?v?i=s:x[m]=s:o=s):typeof s!="object"||s===null?In("Object expected"):(qn(a=s.get)&&(x.get=a),qn(a=s.set)&&(x.set=a),qn(a=s.init)&&b.unshift(a));return u||Fr(e,o),x&&wl(o,r,x),v?u^4?i:x:o},El=(e,t,r)=>t.has(e)||In("Cannot "+r),xb=(e,t)=>Object(t)!==t?In('Cannot use the "in" operator on this value'):e.has(t),De=(e,t,r)=>(El(e,t,"read from private field"),r?r.call(e):t.get(e)),ve=(e,t,r)=>t.has(e)?In("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),pt=(e,t,r,n)=>(El(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r),Yp=(e,t,r)=>(El(e,t,"access private method"),r);function Kp(e,t){return{plugin:e,options:t}}function Mo(e){return t=>Kp(e,t)}function yo(e){return typeof e=="function"?{plugin:e,options:void 0}:e}var Xp,bo,Cl,mi;Xp=[de];var Ye=class{constructor(e,t){this.manager=e,this.options=t,ve(this,Cl,ce(bo,8,this,!1)),ce(bo,11,this),ve(this,mi,new Set)}enable(){this.disabled=!1}disable(){this.disabled=!0}isDisabled(){return ue(()=>this.disabled)}configure(e){this.options=e}registerEffect(e){const t=ct(e.bind(this));return De(this,mi).add(t),t}destroy(){De(this,mi).forEach(e=>e())}static configure(e){return Kp(this,e)}};bo=En(null);Cl=new WeakMap;mi=new WeakMap;pe(bo,4,"disabled",Xp,Ye,Cl);Fr(bo,Ye);var To=class extends Ye{},_i,ja=class{constructor(e){this.manager=e,this.instances=new Map,ve(this,_i,[])}get values(){return Array.from(this.instances.values())}set values(e){const t=e.map(yo).reduce((n,o)=>{const i=n.find(({plugin:a})=>a===o.plugin);return i?(i.options=o.options,n):[...n,o]},[]),r=t.map(({plugin:n})=>n);for(const n of De(this,_i))if(!r.includes(n)){if(n.prototype instanceof To)continue;this.unregister(n)}for(const{plugin:n,options:o}of t)this.register(n,o);pt(this,_i,r)}get(e){return this.instances.get(e)}register(e,t){const r=this.instances.get(e);if(r)return r.options!==t&&(r.options=t),r;const n=new e(this.manager,t);return this.instances.set(e,n),n}unregister(e){const t=this.instances.get(e);t&&(t.destroy(),this.instances.delete(e))}destroy(){for(const e of this.instances.values())e.destroy();this.instances.clear()}};_i=new WeakMap;function wb(e,t){return e.priority===t.priority?e.type===t.type?t.value-e.value:t.type-e.type:t.priority-e.priority}var Qo=[],Qr,en,Sb=class extends Ye{constructor(e){super(e),ve(this,Qr),ve(this,en),this.computeCollisions=this.computeCollisions.bind(this),pt(this,en,kn(Qo)),this.destroy=Po(()=>{const t=this.computeCollisions(),r=ue(()=>this.manager.dragOperation.position.current);if(t!==Qo){const n=De(this,Qr);if(pt(this,Qr,r),n&&r.x==n.x&&r.y==n.y)return}else pt(this,Qr,void 0);De(this,en).value=t},()=>{const{dragOperation:t}=this.manager;t.status.initialized&&this.forceUpdate()})}forceUpdate(e=!0){ue(()=>{e?De(this,en).value=this.computeCollisions():pt(this,Qr,void 0)})}computeCollisions(e,t){const{registry:r,dragOperation:n}=this.manager,{source:o,shape:i,status:a}=n;if(!a.initialized||!i)return Qo;const s=[],l=[];for(const c of e??r.droppables){if(c.disabled||o&&!c.accepts(o))continue;const d=t??c.collisionDetector;if(!d)continue;l.push(c),c.shape;const u=ue(()=>d({droppable:c,dragOperation:n}));u&&(c.collisionPriority!=null&&(u.priority=c.collisionPriority),s.push(u))}return l.length===0?Qo:(s.sort(wb),s)}get collisions(){return De(this,en).value}};Qr=new WeakMap;en=new WeakMap;var Gp,Jp,Qp,zl,ef,Ct,jl,ln,Al,Pl;Qp=[de],Jp=[de],Gp=[de];var Kt=class xr{constructor(t,r){ve(this,jl,ce(Ct,8,this)),ce(Ct,11,this),ve(this,ln),ve(this,Al,ce(Ct,12,this)),ce(Ct,15,this),ve(this,Pl,ce(Ct,16,this)),ce(Ct,19,this);const{effects:n,id:o,data:i={},disabled:a=!1,register:s=!0}=t;let l=o;pt(this,ln,kn(o)),this.manager=r,this.data=i,this.disabled=a,this.effects=()=>{var c;return[()=>{const{id:d,manager:u}=this;if(d!==l)return l=d,u?.registry.register(this),()=>u?.registry.unregister(this)},...(c=n?.())!=null?c:[]]},this.register=this.register.bind(this),this.unregister=this.unregister.bind(this),this.destroy=this.destroy.bind(this),r&&s&&queueMicrotask(this.register)}get id(){var t,r;const n=De(this,ln).value;return(r=(t=xr.pendingIdChanges)==null?void 0:t.get(this))!=null?r:n}set id(t){var r,n;const o=(n=(r=xr.pendingIdChanges)==null?void 0:r.get(this))!=null?n:De(this,ln).peek();t!==o&&(xr.pendingIdChanges||(xr.pendingIdChanges=new Map,queueMicrotask(()=>{var i;return Yp(i=xr,zl,ef).call(i)})),xr.pendingIdChanges.set(this,t))}register(){var t;return(t=this.manager)==null?void 0:t.registry.register(this)}unregister(){var t;(t=this.manager)==null||t.registry.unregister(this)}destroy(){var t;(t=this.manager)==null||t.registry.unregister(this)}};Ct=En(null);zl=new WeakSet;ef=function(){const e=Kt.pendingIdChanges;Kt.pendingIdChanges=null,e&&Ae(()=>{for(const[t,r]of e)De(t,ln).value=r})};jl=new WeakMap;ln=new WeakMap;Al=new WeakMap;Pl=new WeakMap;pe(Ct,4,"manager",Qp,Kt,jl);pe(Ct,4,"data",Jp,Kt,Al);pe(Ct,4,"disabled",Gp,Kt,Pl);ve(Kt,zl);Fr(Ct,Kt);Kt.pendingIdChanges=null;var oa=Kt,gu=class{constructor(){this.map=kn(new Map),this.cleanupFunctions=new WeakMap,this.register=(e,t)=>{const r=this.map.peek(),n=r.get(e),o=()=>this.unregister(e,t);if(n===t)return o;if(n&&n.id===e){const s=this.cleanupFunctions.get(n);s?.(),this.cleanupFunctions.delete(n)}const i=new Map(r);for(const[s,l]of r)if(l===t&&s!==e){i.delete(s);break}i.set(e,t),this.map.value=i;const a=Po(...t.effects());return this.cleanupFunctions.set(t,a),o},this.unregister=(e,t)=>{const r=this.map.peek();if(r.get(e)!==t)return;const n=this.cleanupFunctions.get(t);n?.(),this.cleanupFunctions.delete(t);const o=new Map(r);o.delete(e),this.map.value=o}}[Symbol.iterator](){return this.map.peek().values()}get value(){return this.map.value.values()}has(e){return this.map.value.has(e)}get(e){return this.map.value.get(e)}destroy(){for(const e of this){const t=this.cleanupFunctions.get(e);t?.(),e.destroy()}this.map.value=new Map}},tf,rf,nf,of,af,sf,xs,rt,Dl,Ml,Tl,Bt=class extends(xs=oa,sf=[de],af=[de],of=[de],nf=[Me],rf=[Me],tf=[Me],xs){constructor(t,r){var n=t,{modifiers:o,type:i,sensors:a,plugins:s,effects:l}=n,c=Zp(n,["modifiers","type","sensors","plugins","effects"]);super(Il(Sl({},c),{effects:()=>{var d;return[...(d=l?.())!=null?d:[],()=>{const{manager:u,plugins:f}=this;if(!(!u||!f))for(const v of f){const{plugin:h}=yo(v);u.registry.plugins.register(h)}}]}}),r),ce(rt,5,this),ve(this,Dl,ce(rt,8,this)),ce(rt,11,this),ve(this,Ml,ce(rt,12,this)),ce(rt,15,this),ve(this,Tl,ce(rt,16,this,this.isDragSource?"dragging":"idle")),ce(rt,19,this),this.type=i,this.sensors=a,this.modifiers=o,this.alignment=c.alignment,this.plugins=s}pluginConfig(t){if(this.plugins)for(const r of this.plugins){const n=yo(r);if(n.plugin===t)return n.options}}get isDropping(){return this.status==="dropping"&&this.isDragSource}get isDragging(){return this.status==="dragging"&&this.isDragSource}get isDragSource(){var t,r;return((r=(t=this.manager)==null?void 0:t.dragOperation.source)==null?void 0:r.id)===this.id}};rt=En(xs);Dl=new WeakMap;Ml=new WeakMap;Tl=new WeakMap;pe(rt,4,"type",sf,Bt,Dl);pe(rt,4,"modifiers",af,Bt,Ml);pe(rt,4,"status",of,Bt,Tl);pe(rt,2,"isDropping",nf,Bt);pe(rt,2,"isDragging",rf,Bt);pe(rt,2,"isDragSource",tf,Bt);Fr(rt,Bt);var lf,cf,uf,df,pf,ff,ws,Fe,Ol,Ll,Rl,Fl,Bl,Nt=class extends(ws=oa,ff=[de],pf=[de],df=[de],uf=[de],cf=[de],lf=[Me],ws){constructor(t,r){var n=t,{accept:o,collisionDetector:i,collisionPriority:a,type:s}=n,l=Zp(n,["accept","collisionDetector","collisionPriority","type"]);super(l,r),ce(Fe,5,this),ve(this,Ol,ce(Fe,8,this)),ce(Fe,11,this),ve(this,Ll,ce(Fe,12,this)),ce(Fe,15,this),ve(this,Rl,ce(Fe,16,this)),ce(Fe,19,this),ve(this,Fl,ce(Fe,20,this)),ce(Fe,23,this),ve(this,Bl,ce(Fe,24,this)),ce(Fe,27,this),this.accept=o,this.collisionDetector=i,this.collisionPriority=a,this.type=s}accepts(t){const{accept:r}=this;return r?typeof r=="function"?r(t):t.type?Array.isArray(r)?r.includes(t.type):t.type===r:!1:!0}get isDropTarget(){var t,r;return((r=(t=this.manager)==null?void 0:t.dragOperation.target)==null?void 0:r.id)===this.id}};Fe=En(ws);Ol=new WeakMap;Ll=new WeakMap;Rl=new WeakMap;Fl=new WeakMap;Bl=new WeakMap;pe(Fe,4,"accept",ff,Nt,Ol);pe(Fe,4,"type",pf,Nt,Ll);pe(Fe,4,"collisionDetector",df,Nt,Rl);pe(Fe,4,"collisionPriority",uf,Nt,Fl);pe(Fe,4,"shape",cf,Nt,Bl);pe(Fe,2,"isDropTarget",lf,Nt);Fr(Fe,Nt);var Ib=class{constructor(){this.registry=new Map}addEventListener(e,t){const{registry:r}=this,n=new Set(r.get(e));return n.add(t),r.set(e,n),()=>this.removeEventListener(e,t)}removeEventListener(e,t){const{registry:r}=this,n=new Set(r.get(e));n.delete(t),r.set(e,n)}dispatch(e,...t){const{registry:r}=this,n=r.get(e);if(n)for(const o of n)o(...t)}},Eb=class extends Ib{constructor(e){super(),this.manager=e}dispatch(e,t){const r=[t,this.manager];super.dispatch(e,...r)}};function yi(e,t=!0){let r=!1;return Il(Sl({},e),{cancelable:t,get defaultPrevented(){return r},preventDefault(){t&&(r=!0)}})}var Cb=class extends To{constructor(e){super(e);const t=(n,o)=>n.map(({id:i})=>i).join("")===o.map(({id:i})=>i).join("");let r=[];this.destroy=Po(()=>{const{dragOperation:n,collisionObserver:o}=e;n.status.initializing&&(r=[],o.enable())},()=>{const{collisionObserver:n,monitor:o}=e,{collisions:i}=n;if(n.isDisabled()||oa.pendingIdChanges)return;const a=yi({collisions:i});if(o.dispatch("collision",a),a.defaultPrevented||t(i,r))return;r=i;const[s]=i;ue(()=>{var l;s?.id!==((l=e.dragOperation.target)==null?void 0:l.id)&&(n.disable(),e.actions.setDropTarget(s?.id).then(()=>{n.enable()}))})})}},_t=(e=>(e[e.Lowest=0]="Lowest",e[e.Low=1]="Low",e[e.Normal=2]="Normal",e[e.High=3]="High",e[e.Highest=4]="Highest",e))(_t||{}),$t=(e=>(e[e.Collision=0]="Collision",e[e.ShapeIntersection=1]="ShapeIntersection",e[e.PointerIntersection=2]="PointerIntersection",e))($t||{}),hf,vf,gf,mf,_f,yf,bf,bt,Nl;bf=[de],yf=[Me],_f=[Me],mf=[Me],gf=[Me],vf=[Me],hf=[Me];var Xt=class{constructor(){ce(bt,5,this),ve(this,Nl,ce(bt,8,this,"idle")),ce(bt,11,this)}get current(){return this.value}get idle(){return this.value==="idle"}get initializing(){return this.value==="initializing"}get initialized(){const{value:e}=this;return e!=="idle"&&e!=="initialization-pending"}get dragging(){return this.value==="dragging"}get dropped(){return this.value==="dropped"}set(e){this.value=e}};bt=En(null);Nl=new WeakMap;pe(bt,4,"value",bf,Xt,Nl);pe(bt,2,"current",yf,Xt);pe(bt,2,"idle",_f,Xt);pe(bt,2,"initializing",mf,Xt);pe(bt,2,"initialized",gf,Xt);pe(bt,2,"dragging",vf,Xt);pe(bt,2,"dropped",hf,Xt);Fr(bt,Xt);var zb=class{constructor(e){this.manager=e}setDragSource(e){const{dragOperation:t}=this.manager;t.sourceIdentifier=typeof e=="string"||typeof e=="number"?e:e.id}setDropTarget(e){return ue(()=>{const{dragOperation:t}=this.manager,r=e??null;if(t.targetIdentifier===r)return Promise.resolve(!1);t.targetIdentifier=r;const n=yi({operation:t.snapshot()});return t.status.dragging&&this.manager.monitor.dispatch("dragover",n),this.manager.renderer.rendering.then(()=>n.defaultPrevented)})}start(e){return ue(()=>{const{dragOperation:t}=this.manager;if(e.source!=null&&this.setDragSource(e.source),!t.source)throw new Error("Cannot start a drag operation without a drag source");if(!t.status.idle)throw new Error("Cannot start a drag operation while another is active");const n=new AbortController,{event:o,coordinates:i}=e;Ae(()=>{t.status.set("initialization-pending"),t.shape=null,t.canceled=!1,t.activatorEvent=o??null,t.position.reset(i)});const a=yi({operation:t.snapshot()});return this.manager.monitor.dispatch("beforedragstart",a),a.defaultPrevented?(t.reset(),n.abort(),n):(t.status.set("initializing"),t.controller=n,this.manager.renderer.rendering.then(()=>{if(n.signal.aborted)return;const{status:s}=t;s.current==="initializing"&&Ae(()=>{t.status.set("dragging"),this.manager.monitor.dispatch("dragstart",{nativeEvent:o,operation:t.snapshot(),cancelable:!1})})}),n)})}move(e){return ue(()=>{var t,r;const{dragOperation:n}=this.manager,{status:o,controller:i}=n;if(!o.dragging||!i||i.signal.aborted)return;const a=yi({nativeEvent:e.event,operation:n.snapshot(),by:e.by,to:e.to},(t=e.cancelable)!=null?t:!0);((r=e.propagate)==null||r)&&this.manager.monitor.dispatch("dragmove",a),queueMicrotask(()=>{var s,l,c,d,u;if(a.defaultPrevented)return;const f=(u=e.to)!=null?u:{x:n.position.current.x+((l=(s=e.by)==null?void 0:s.x)!=null?l:0),y:n.position.current.y+((d=(c=e.by)==null?void 0:c.y)!=null?d:0)};n.position.current=f})})}stop(e={}){return ue(()=>{var t,r;const{dragOperation:n}=this.manager,{controller:o}=n;if(!o||o.signal.aborted)return;let i;const a=()=>{const l={resume:()=>{},abort:()=>{}};return i=new Promise((c,d)=>{l.resume=c,l.abort=d}),l};o.abort();const s=()=>{this.manager.renderer.rendering.then(()=>{n.status.set("dropped");const l=ue(()=>{var d;return((d=n.source)==null?void 0:d.status)==="dropping"}),c=()=>{n.controller===o&&(n.controller=void 0),n.reset()};if(l){const{source:d}=n,u=ct(()=>{d?.status==="idle"&&(u(),c())})}else this.manager.renderer.rendering.then(c)})};n.canceled=(t=e.canceled)!=null?t:!1,this.manager.monitor.dispatch("dragend",{nativeEvent:e.event,operation:n.snapshot(),canceled:(r=e.canceled)!=null?r:!1,suspend:a}),i?i.then(s).catch(()=>n.reset()):s()})}},pn=class extends Ye{constructor(e,t){super(e,t),this.manager=e,this.options=t}},jb=class extends AbortController{constructor(e,t){super(),this.constraints=e,this.onActivate=t,this.activated=!1;for(const r of e??[])r.controller=this}onEvent(e){var t;if(!this.activated)if((t=this.constraints)!=null&&t.length)for(const r of this.constraints)r.onEvent(e);else this.activate(e)}activate(e){this.activated||(this.activated=!0,this.onActivate(e))}abort(e){this.activated=!1,super.abort(e)}},bi,kf=class{constructor(e){this.options=e,ve(this,bi)}set controller(e){pt(this,bi,e),e.signal.addEventListener("abort",()=>this.abort())}activate(e){var t;(t=De(this,bi))==null||t.activate(e)}};bi=new WeakMap;var mu=class extends Ye{constructor(e,t){super(e,t),this.manager=e,this.options=t}apply(e){return e.transform}},Ab=class{constructor(e){this.draggables=new gu,this.droppables=new gu,this.plugins=new ja(e),this.sensors=new ja(e),this.modifiers=new ja(e)}register(e,t){if(e instanceof Bt)return this.draggables.register(e.id,e);if(e instanceof Nt)return this.droppables.register(e.id,e);if(e.prototype instanceof mu)return this.modifiers.register(e,t);if(e.prototype instanceof pn)return this.sensors.register(e,t);if(e.prototype instanceof Ye)return this.plugins.register(e,t);throw new Error("Invalid instance type")}unregister(e){if(e instanceof oa)return e instanceof Bt?this.draggables.unregister(e.id,e):e instanceof Nt?this.droppables.unregister(e.id,e):()=>{};if(e.prototype instanceof mu)return this.modifiers.unregister(e);if(e.prototype instanceof pn)return this.sensors.unregister(e);if(e.prototype instanceof Ye)return this.plugins.unregister(e);throw new Error("Invalid instance type")}destroy(){this.draggables.destroy(),this.droppables.destroy(),this.plugins.destroy(),this.sensors.destroy(),this.modifiers.destroy()}},xf,wf,Sf,If,Ef,Cf,zf,jf,Af,Vn,ki,tn,je,$l,Hl,Wl,ql,Vl,Zn;Af=[Me],jf=[de],zf=[de],Cf=[de],Ef=[de],If=[de],Sf=[Me],wf=[Me],xf=[Me];var Pt=class{constructor(e){ce(je,5,this),ve(this,Vn),ve(this,ki),ve(this,tn,new Rr(void 0,(t,r)=>t&&r?t.equals(r):t===r)),this.status=new Xt,ve(this,$l,ce(je,8,this,!1)),ce(je,11,this),ve(this,Hl,ce(je,12,this,null)),ce(je,15,this),ve(this,Wl,ce(je,16,this,null)),ce(je,19,this),ve(this,ql,ce(je,20,this,null)),ce(je,23,this),ve(this,Vl,ce(je,24,this,[])),ce(je,27,this),this.position=new na({x:0,y:0}),ve(this,Zn,{x:0,y:0}),pt(this,Vn,e)}get shape(){const{current:e,initial:t,previous:r}=De(this,tn);return!e||!t?null:{current:e,initial:t,previous:r}}set shape(e){e?De(this,tn).current=e:De(this,tn).reset()}get source(){var e;const t=this.sourceIdentifier;if(t==null)return null;const r=De(this,Vn).registry.draggables.get(t);return r&&pt(this,ki,r),(e=r??De(this,ki))!=null?e:null}get target(){var e;const t=this.targetIdentifier;return t!=null&&(e=De(this,Vn).registry.droppables.get(t))!=null?e:null}get transform(){const{x:e,y:t}=this.position.delta;let r={x:e,y:t};for(const n of this.modifiers)r=n.apply(Il(Sl({},this.snapshot()),{transform:r}));return pt(this,Zn,r),r}snapshot(){return ue(()=>({source:this.source,target:this.target,activatorEvent:this.activatorEvent,transform:De(this,Zn),shape:this.shape?za(this.shape):null,position:za(this.position),status:za(this.status),canceled:this.canceled}))}reset(){Ae(()=>{this.status.set("idle"),this.sourceIdentifier=null,this.targetIdentifier=null,De(this,tn).reset(),this.position.reset({x:0,y:0}),pt(this,Zn,{x:0,y:0}),this.modifiers=[]})}};je=En(null);Vn=new WeakMap;ki=new WeakMap;tn=new WeakMap;$l=new WeakMap;Hl=new WeakMap;Wl=new WeakMap;ql=new WeakMap;Vl=new WeakMap;Zn=new WeakMap;pe(je,2,"shape",Af,Pt);pe(je,4,"canceled",jf,Pt,$l);pe(je,4,"activatorEvent",zf,Pt,Hl);pe(je,4,"sourceIdentifier",Cf,Pt,Wl);pe(je,4,"targetIdentifier",Ef,Pt,ql);pe(je,4,"modifiers",If,Pt,Vl);pe(je,2,"source",Sf,Pt);pe(je,2,"target",wf,Pt);pe(je,2,"transform",xf,Pt);Fr(je,Pt);var Pb={get rendering(){return Promise.resolve()}};function jt(e,t){return typeof e=="function"?e(t):e??t}var Db=class{constructor(t){this.destroy=()=>{this.dragOperation.status.idle||this.actions.stop({canceled:!0}),this.dragOperation.modifiers.forEach(f=>f.destroy()),this.registry.destroy(),this.collisionObserver.destroy()};var r;const n=t??{},o=jt(n.plugins,[]),i=jt(n.sensors,[]),a=jt(n.modifiers,[]),s=(r=n.renderer)!=null?r:Pb,l=new Eb(this),c=new Ab(this);this.registry=c,this.monitor=l,this.renderer=s,this.actions=new zb(this),this.dragOperation=new Pt(this),this.collisionObserver=new Sb(this),this.plugins=[Cb,...o],this.modifiers=a,this.sensors=i;const{destroy:d}=this,u=Po(()=>{var f,v,h;const m=ue(()=>this.dragOperation.modifiers),b=this.modifiers;for(const S of m)b.includes(S)||S.destroy();this.dragOperation.modifiers=(h=(v=(f=this.dragOperation.source)==null?void 0:f.modifiers)==null?void 0:v.map(S=>{const{plugin:x,options:_}=yo(S);return new x(this,_)}))!=null?h:b});this.destroy=()=>{u(),d()}}get plugins(){return this.registry.plugins.values}set plugins(t){this.registry.plugins.values=t}get modifiers(){return this.registry.modifiers.values}set modifiers(t){this.registry.modifiers.values=t}get sensors(){return this.registry.sensors.values}set sensors(t){this.registry.sensors.values=t}},Pf=e=>{throw TypeError(e)},Zl=(e,t,r)=>t.has(e)||Pf("Cannot "+r),le=(e,t,r)=>(Zl(e,t,"read from private field"),t.get(e)),st=(e,t,r)=>t.has(e)?Pf("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),ut=(e,t,r,n)=>(Zl(e,t,"write to private field"),t.set(e,r),r),Df=(e,t,r)=>(Zl(e,t,"access private method"),r);function ia(e){return e?e instanceof KeyframeEffect?!0:"getKeyframes"in e&&typeof e.getKeyframes=="function":!1}function Mf(e,t){const r=e.getAnimations();let n=null;for(const o of r){if(o.playState!=="running")continue;const{effect:i}=o,s=(ia(i)?i.getKeyframes():[]).filter(t);s.length>0&&(n=[s[s.length-1],o])}return n}function aa(e){const{width:t,height:r,top:n,left:o,bottom:i,right:a}=e.getBoundingClientRect();return{width:t,height:r,top:n,left:o,bottom:i,right:a}}function Ul(e){const t=Object.prototype.toString.call(e);return t==="[object Window]"||t==="[object global]"}function Oo(e){return"nodeType"in e}function vt(e){var t,r,n;return e?Ul(e)?e:Oo(e)?"defaultView"in e?(t=e.defaultView)!=null?t:window:(n=(r=e.ownerDocument)==null?void 0:r.defaultView)!=null?n:window:window:window}function Yl(e){const{Document:t}=vt(e);return e instanceof t||"nodeType"in e&&e.nodeType===Node.DOCUMENT_NODE}function fr(e){return!e||Ul(e)?!1:e instanceof vt(e).HTMLElement||"namespaceURI"in e&&typeof e.namespaceURI=="string"&&e.namespaceURI.endsWith("html")}function Tf(e){return e instanceof vt(e).SVGElement||"namespaceURI"in e&&typeof e.namespaceURI=="string"&&e.namespaceURI.endsWith("svg")}function Cn(e){return e?Ul(e)?e.document:Oo(e)?Yl(e)?e:fr(e)||Tf(e)?e.ownerDocument:document:document:document}function Mb(e){var t,r,n,o;const{documentElement:i}=Cn(e),a=vt(e).visualViewport,s=(t=a?.width)!=null?t:i.clientWidth,l=(r=a?.height)!=null?r:i.clientHeight,c=(n=a?.offsetTop)!=null?n:0,d=(o=a?.offsetLeft)!=null?o:0;return{top:c,left:d,right:d+s,bottom:c+l,width:s,height:l}}function Tb(e,t){if(Ob(e)&&e.open===!1)return!1;const{overflow:r,overflowX:n,overflowY:o}=getComputedStyle(e);return r==="visible"&&n==="visible"&&o==="visible"}function Ob(e){return e.tagName==="DETAILS"}function ko(e,t=e.getBoundingClientRect(),r=0){var n,o,i,a,s;let l=t;const{ownerDocument:c}=e,d=(n=c.defaultView)!=null?n:window;let u=e.parentElement;for(;u&&u!==c.documentElement;){if(!Tb(u)){const _=u.getBoundingClientRect(),g=r*(_.bottom-_.top),j=r*(_.right-_.left),w=r*(_.bottom-_.top),A=r*(_.right-_.left);l={top:Math.max(l.top,_.top-g),right:Math.min(l.right,_.right+j),bottom:Math.min(l.bottom,_.bottom+w),left:Math.max(l.left,_.left-A),width:0,height:0},l.width=l.right-l.left,l.height=l.bottom-l.top}u=u.parentElement}const f=d.visualViewport,v=(o=f?.offsetTop)!=null?o:0,h=(i=f?.offsetLeft)!=null?i:0,m=(a=f?.width)!=null?a:d.innerWidth,b=(s=f?.height)!=null?s:d.innerHeight,S=r*b,x=r*m;return l={top:Math.max(l.top,v-S),right:Math.min(l.right,h+m+x),bottom:Math.min(l.bottom,v+b+S),left:Math.max(l.left,h-x),width:0,height:0},l.width=l.right-l.left,l.height=l.bottom-l.top,l.width<0&&(l.width=0),l.height<0&&(l.height=0),l}function fn(e){return{x:e.clientX,y:e.clientY}}var Of=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Ss(e=document,t=new Set){if(t.has(e))return[];t.add(e);const r=[e];for(const n of Array.from(e.querySelectorAll("iframe, frame")))try{const o=n.contentDocument;o&&!t.has(o)&&r.push(...Ss(o,t))}catch{}try{const n=e.defaultView;if(n&&n!==window.top){const o=n.parent;o&&o.document&&o.document!==e&&r.push(...Ss(o.document,t))}}catch{}return r}function Kl(){return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)}function Lf(){var e,t;const r=Kl()?window.visualViewport:null;return{x:(e=r?.offsetLeft)!=null?e:0,y:(t=r?.offsetTop)!=null?t:0}}function Xl(e){return!e||!Oo(e)?!1:e instanceof vt(e).ShadowRoot}function Ti(e){if(e&&Oo(e)){let t=e.getRootNode();if(Xl(t))return t;if(t instanceof Document)return t}return Cn(e)}function Gl(e){return e.matchMedia("(prefers-reduced-motion: reduce)").matches}function Lb(e){const t="input, textarea, select, canvas, [contenteditable]",r=e.cloneNode(!0),n=Array.from(e.querySelectorAll(t));return Array.from(r.querySelectorAll(t)).forEach((i,a)=>{const s=n[a];if(_u(i)&&_u(s)&&(i.type!=="file"&&(i.value=s.value),i.type==="radio"&&i.name&&(i.name=`Cloned__${i.name}`)),yu(i)&&yu(s)&&s.width>0&&s.height>0){const l=i.getContext("2d");l?.drawImage(s,0,0)}}),r}function _u(e){return"value"in e}function yu(e){return e.tagName==="CANVAS"}function Rf(e,{x:t,y:r}){const n=e.elementFromPoint(t,r);if(Rb(n)){const{contentDocument:o}=n;if(o){const{left:i,top:a}=n.getBoundingClientRect();return Rf(o,{x:t-i,y:r-a})}}return n}function Rb(e){return e?.tagName==="IFRAME"}var Is=new WeakMap;function Fb(e){return!!e.closest(`
      input:not([disabled]),
      select:not([disabled]),
      textarea:not([disabled]),
      button:not([disabled]),
      a[href],
      [contenteditable]:not([contenteditable="false"])
    `)}var Ff=class{constructor(){this.entries=new Set,this.clear=()=>{for(const e of this.entries){const[t,{type:r,listener:n,options:o}]=e;t.removeEventListener(r,n,o)}this.entries.clear()}}bind(e,t){const r=Array.isArray(e)?e:[e],n=Array.isArray(t)?t:[t],o=[];for(const a of r)for(const s of n){const{type:l,listener:c,options:d}=s,u=[a,s];a.addEventListener(l,c,d),this.entries.add(u),o.push(u)}const i=this.entries;return function(){for(const s of o){const[l,{type:c,listener:d,options:u}]=s;l.removeEventListener(c,d,u),i.delete(s)}}}};function hn(e){const t=e?.ownerDocument.defaultView;if(t&&t.self!==t.parent)return t.frameElement}function Bb(e){const t=new Set;let r=hn(e);for(;r;)t.add(r),r=hn(r);return t}function Nb(e,t){const r=setTimeout(e,t);return()=>clearTimeout(r)}function Bf(e,t){const r=()=>performance.now();let n,o;return function(...i){const a=this;o?(n?.(),n=Nb(()=>{e.apply(a,i),o=r()},t-(r()-o))):(e.apply(a,i),o=r())}}function $b(e,t){return e===t?!0:!e||!t?!1:e.top==t.top&&e.left==t.left&&e.right==t.right&&e.bottom==t.bottom}function Hb(e,t=e.getBoundingClientRect()){const{width:r,height:n}=ko(e,t);return r>0&&n>0}var Wb=Of?ResizeObserver:class{observe(){}unobserve(){}disconnect(){}},xi,qb=class extends Wb{constructor(e){super(t=>{if(!le(this,xi)){ut(this,xi,!0);return}e(t,this)}),st(this,xi,!1)}};xi=new WeakMap;var bu=Array.from({length:100},(e,t)=>t/100),Nf=75,wr,Oi,nr,Sr,Un,Ze,ao,Yn,Li,$f,Hf,Wf=class{constructor(e,t,r={debug:!1,skipInitial:!1}){this.element=e,this.callback=t,st(this,Li),this.disconnect=()=>{var i,a,s;ut(this,ao,!0),(i=le(this,nr))==null||i.disconnect(),(a=le(this,Sr))==null||a.disconnect(),le(this,Un).disconnect(),(s=le(this,Ze))==null||s.remove()},st(this,wr,!0),st(this,Oi),st(this,nr),st(this,Sr),st(this,Un),st(this,Ze),st(this,ao,!1),st(this,Yn,Bf(()=>{var i,a,s;const{element:l}=this;if((i=le(this,Sr))==null||i.disconnect(),le(this,ao)||!le(this,wr)||!l.isConnected)return;const c=(a=l.ownerDocument)!=null?a:document,{innerHeight:d,innerWidth:u}=(s=c.defaultView)!=null?s:window,f=l.getBoundingClientRect(),v=ko(l,f),{top:h,left:m,bottom:b,right:S}=v,x=-Math.floor(h),_=-Math.floor(m),g=-Math.floor(u-S),j=-Math.floor(d-b),w=`${x}px ${g}px ${j}px ${_}px`;this.boundingClientRect=f,ut(this,Sr,new IntersectionObserver(A=>{const[E]=A,{intersectionRect:I}=E;(E.intersectionRatio!==1?E.intersectionRatio:xt.intersectionRatio(I,ko(l)))!==1&&le(this,Yn).call(this)},{threshold:bu,rootMargin:w,root:c})),le(this,Sr).observe(l),Df(this,Li,$f).call(this)},Nf)),this.boundingClientRect=e.getBoundingClientRect(),ut(this,wr,Hb(e,this.boundingClientRect));let n=!0;this.callback=i=>{n&&(n=!1,r.skipInitial)||t(i)};const o=e.ownerDocument;r?.debug&&(ut(this,Ze,document.createElement("div")),le(this,Ze).style.background="rgba(0,0,0,0.15)",le(this,Ze).style.position="fixed",le(this,Ze).style.pointerEvents="none",o.body.appendChild(le(this,Ze))),ut(this,Un,new IntersectionObserver(i=>{var a,s;const l=i[i.length-1],{boundingClientRect:c,isIntersecting:d}=l,{width:u,height:f}=c,v=le(this,wr);ut(this,wr,d),!(!u&&!f)&&(v&&!d?((a=le(this,Sr))==null||a.disconnect(),this.callback(null),(s=le(this,nr))==null||s.disconnect(),ut(this,nr,void 0),le(this,Ze)&&(le(this,Ze).style.visibility="hidden")):le(this,Yn).call(this),d&&!le(this,nr)&&(ut(this,nr,new qb(le(this,Yn))),le(this,nr).observe(e)))},{threshold:bu,root:o})),le(this,wr)&&!r.skipInitial&&this.callback(this.boundingClientRect),le(this,Un).observe(e)}};wr=new WeakMap;Oi=new WeakMap;nr=new WeakMap;Sr=new WeakMap;Un=new WeakMap;Ze=new WeakMap;ao=new WeakMap;Yn=new WeakMap;Li=new WeakSet;$f=function(){le(this,ao)||(Df(this,Li,Hf).call(this),!$b(this.boundingClientRect,le(this,Oi))&&(this.callback(this.boundingClientRect),ut(this,Oi,this.boundingClientRect)))};Hf=function(){if(le(this,Ze)){const{top:e,left:t,width:r,height:n}=ko(this.element);le(this,Ze).style.overflow="hidden",le(this,Ze).style.visibility="visible",le(this,Ze).style.top=`${Math.floor(e)}px`,le(this,Ze).style.left=`${Math.floor(t)}px`,le(this,Ze).style.width=`${Math.floor(r)}px`,le(this,Ze).style.height=`${Math.floor(n)}px`}};var ei=new WeakMap,ti=new WeakMap;function Vb(e,t){let r=ei.get(e);return r||(r={disconnect:new Wf(e,o=>{const i=ei.get(e);i&&i.callbacks.forEach(a=>a(o))},{skipInitial:!0}).disconnect,callbacks:new Set}),r.callbacks.add(t),ei.set(e,r),()=>{r.callbacks.delete(t),r.callbacks.size===0&&(ei.delete(e),r.disconnect())}}function Zb(e,t){const r=new Set;for(const n of e){const o=Vb(n,t);r.add(o)}return()=>r.forEach(n=>n())}function Ub(e,t){var r;const n=e.ownerDocument;if(!ti.has(n)){const a=new AbortController,s=new Set;document.addEventListener("scroll",l=>s.forEach(c=>c(l)),{capture:!0,passive:!0,signal:a.signal}),ti.set(n,{disconnect:()=>a.abort(),listeners:s})}const{listeners:o,disconnect:i}=(r=ti.get(n))!=null?r:{};return!o||!i?()=>{}:(o.add(t),()=>{o.delete(t),o.size===0&&(i(),ti.delete(n))})}var Kn,Xn,wi,Es,Yb=class{constructor(e,t,r){this.callback=t,st(this,Kn),st(this,Xn,!1),st(this,wi),st(this,Es,Bf(a=>{if(!le(this,Xn)&&a.target&&"contains"in a.target&&typeof a.target.contains=="function"){for(const s of le(this,wi))if(a.target.contains(s)){this.callback(le(this,Kn).boundingClientRect);break}}},Nf));const n=Bb(e),o=Zb(n,t),i=Ub(e,le(this,Es));ut(this,wi,n),ut(this,Kn,new Wf(e,t,r)),this.disconnect=()=>{le(this,Xn)||(ut(this,Xn,!0),o(),i(),le(this,Kn).disconnect())}}};Kn=new WeakMap;Xn=new WeakMap;wi=new WeakMap;Es=new WeakMap;function Cs(e){return"showPopover"in e&&"hidePopover"in e&&typeof e.showPopover=="function"&&typeof e.hidePopover=="function"}function un(e){try{Cs(e)&&e.isConnected&&e.hasAttribute("popover")&&!e.matches(":popover-open")&&e.showPopover()}catch{}}function ku(e){return!Of||!e?!1:e===Cn(e).scrollingElement}function qf(e){var t,r;const n=vt(e),o=ku(e)?Mb(e):aa(e),i=n.visualViewport,a=ku(e)?{height:(t=i?.height)!=null?t:n.innerHeight,width:(r=i?.width)!=null?r:n.innerWidth}:{height:e.clientHeight,width:e.clientWidth},s={current:{x:e.scrollLeft,y:e.scrollTop},max:{x:e.scrollWidth-a.width,y:e.scrollHeight-a.height}},l=s.current.y<=0,c=s.current.x<=0,d=s.current.y>=s.max.y,u=s.current.x>=s.max.x;return{rect:o,position:s,isTop:l,isLeft:c,isBottom:d,isRight:u}}function Kb(e,t){const{isTop:r,isBottom:n,isLeft:o,isRight:i,position:a}=qf(e),{x:s,y:l}=t??{x:0,y:0},c=!r&&a.current.y+l>0,d=!n&&a.current.y+l<a.max.y,u=!o&&a.current.x+s>0,f=!i&&a.current.x+s<a.max.x;return{top:c,bottom:d,left:u,right:f,x:u||f,y:c||d}}var Jl=class{constructor(t){this.scheduler=t,this.pending=!1,this.tasks=new Set,this.resolvers=new Set,this.flush=()=>{const{tasks:r,resolvers:n}=this;this.pending=!1,this.tasks=new Set,this.resolvers=new Set;for(const o of r)o();for(const o of n)o()}}schedule(t){return this.tasks.add(t),this.pending||(this.pending=!0,this.scheduler(this.flush)),new Promise(r=>this.resolvers.add(r))}},Ri=new Jl(e=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(e):e()}),Xb=new Jl(e=>setTimeout(e,50)),Fi=new Map,Gb=Fi.clear.bind(Fi);function Dt(e,t=!1){if(!t)return xu(e);let r=Fi.get(e);return r||(r=xu(e),Fi.set(e,r),Xb.schedule(Gb),r)}function xu(e){return vt(e).getComputedStyle(e)}function Jb(e,t=Dt(e,!0)){return t.position==="fixed"||t.position==="sticky"}function Qb(e,t=Dt(e,!0)){const r=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some(o=>{const i=t[o];return typeof i=="string"?r.test(i):!1})}var ek={excludeElement:!0,escapeShadowDOM:!0};function zs(e,t=ek){const{limit:r,excludeElement:n,escapeShadowDOM:o}=t,i=new Set;function a(s){if(r!=null&&i.size>=r||!s)return i;if(Yl(s)&&s.scrollingElement!=null&&!i.has(s.scrollingElement))return i.add(s.scrollingElement),i;if(o&&Xl(s))return a(s.host);if(!fr(s))return Tf(s)?a(s.parentElement):i;if(i.has(s))return i;const l=Dt(s,!0);if(n&&s===e||Qb(s,l)&&i.add(s),Jb(s,l)){const{scrollingElement:c}=s.ownerDocument;return c&&i.add(c),i}return a(s.parentNode)}return e?a(e):i}function vn(e,t=window.frameElement){const r={x:0,y:0,scaleX:1,scaleY:1};if(!e)return r;let n=hn(e);for(;n;){if(n===t)return r;const o=aa(n),{x:i,y:a}=tk(n,o);r.x=r.x+o.left,r.y=r.y+o.top,r.scaleX=r.scaleX*i,r.scaleY=r.scaleY*a,n=hn(n)}return r}function tk(e,t=aa(e)){const r=Math.round(t.width),n=Math.round(t.height);if(fr(e))return{x:r/e.offsetWidth,y:n/e.offsetHeight};const o=Dt(e,!0);return{x:(parseFloat(o.width)||r)/r,y:(parseFloat(o.height)||n)/n}}function rk(e){if(e==="none")return null;const t=e.split(" "),r=parseFloat(t[0]),n=parseFloat(t[1]);return isNaN(r)&&isNaN(n)?null:{x:isNaN(r)?n:r,y:isNaN(n)?r:n}}function gn(e){if(e==="none")return null;const[t,r,n="0"]=e.split(" "),o={x:parseFloat(t),y:parseFloat(r),z:parseInt(n,10)};return isNaN(o.x)&&isNaN(o.y)?null:{x:isNaN(o.x)?0:o.x,y:isNaN(o.y)?0:o.y,z:isNaN(o.z)?0:o.z}}function sa(e){var t,r,n,o,i,a,s,l,c;const{scale:d,transform:u,translate:f}=e,v=rk(d),h=gn(f),m=nk(u);if(!m&&!v&&!h)return null;const b={x:(t=v?.x)!=null?t:1,y:(r=v?.y)!=null?r:1},S={x:(n=h?.x)!=null?n:0,y:(o=h?.y)!=null?o:0},x={x:(i=m?.x)!=null?i:0,y:(a=m?.y)!=null?a:0,scaleX:(s=m?.scaleX)!=null?s:1,scaleY:(l=m?.scaleY)!=null?l:1};return{x:S.x+x.x,y:S.y+x.y,z:(c=h?.z)!=null?c:0,scaleX:b.x*x.scaleX,scaleY:b.y*x.scaleY}}function nk(e){if(e.startsWith("matrix3d(")){const t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}else if(e.startsWith("matrix(")){const t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}var yt=(e=>(e[e.Idle=0]="Idle",e[e.Forward=1]="Forward",e[e.Reverse=-1]="Reverse",e))(yt||{}),ok={x:.2,y:.2},ik={x:10,y:10};function ak(e,t,r,n=25,o=ok,i=ik){const{x:a,y:s}=t,{rect:l,isTop:c,isBottom:d,isLeft:u,isRight:f}=qf(e),v=vn(e),h=Dt(e,!0),m=sa(h),b=m!==null?m?.scaleX<0:!1,S=m!==null?m?.scaleY<0:!1,x=new xt(l.left*v.scaleX+v.x,l.top*v.scaleY+v.y,l.width*v.scaleX,l.height*v.scaleY),_={x:0,y:0},g={x:0,y:0},j={height:x.height*o.y,width:x.width*o.x};return j.height>0&&(!c||S&&!d)&&s<=x.top+j.height&&r?.y!==1&&a>=x.left-i.x&&a<=x.right+i.x?(_.y=S?1:-1,g.y=n*Math.abs((x.top+j.height-s)/j.height)):j.height>0&&(!d||S&&!c)&&s>=x.bottom-j.height&&r?.y!==-1&&a>=x.left-i.x&&a<=x.right+i.x&&(_.y=S?-1:1,g.y=n*Math.abs((x.bottom-j.height-s)/j.height)),j.width>0&&(!f||b&&!u)&&a>=x.right-j.width&&r?.x!==-1&&s>=x.top-i.y&&s<=x.bottom+i.y?(_.x=b?-1:1,g.x=n*Math.abs((x.right-j.width-a)/j.width)):j.width>0&&(!u||b&&!f)&&a<=x.left+j.width&&r?.x!==1&&s>=x.top-i.y&&s<=x.bottom+i.y&&(_.x=b?1:-1,g.x=n*Math.abs((x.left+j.width-a)/j.width)),{direction:_,speed:g}}function Vf(e,{block:t="nearest",inline:r="nearest"}={}){if(!fr(e))return;const n=zs(e),o=[];for(const i of n){if(!fr(i))continue;const{top:a,left:s}=sk(e,i);let l=a,c=s;for(const d of o)l-=d.scrollTop,c-=d.scrollLeft;if(t!=="none"){const d=l<i.scrollTop,u=l+e.offsetHeight>i.scrollTop+i.clientHeight;d!==u&&(t==="center"?i.scrollTop=l-i.clientHeight/2+e.offsetHeight/2:d?i.scrollTop=l:i.scrollTop=l+e.offsetHeight-i.clientHeight)}if(r!=="none"){const d=c<i.scrollLeft,u=c+e.offsetWidth>i.scrollLeft+i.clientWidth;d!==u&&(r==="center"?i.scrollLeft=c-i.clientWidth/2+e.offsetWidth/2:d?i.scrollLeft=c:i.scrollLeft=c+e.offsetWidth-i.clientWidth)}o.push(i)}}function wu(e){let t=0,r=0,n=e;for(;n;){t+=n.offsetTop,r+=n.offsetLeft;const o=n.offsetParent;if(!fr(o))break;t+=o.clientTop,r+=o.clientLeft,n=o}return{top:t,left:r}}function sk(e,t){const r=wu(e),n=wu(t);return{top:r.top-n.top-t.clientTop,left:r.left-n.left-t.clientLeft}}function lk(e,t,r){const{scaleX:n,scaleY:o,x:i,y:a}=t,s=e.left+i+(1-n)*parseFloat(r),l=e.top+a+(1-o)*parseFloat(r.slice(r.indexOf(" ")+1)),c=n?e.width*n:e.width,d=o?e.height*o:e.height;return{width:c,height:d,top:l,right:s+c,bottom:l+d,left:s}}function ck(e,t,r){const{scaleX:n,scaleY:o,x:i,y:a}=t,s=e.left-i-(1-n)*parseFloat(r),l=e.top-a-(1-o)*parseFloat(r.slice(r.indexOf(" ")+1)),c=n?e.width/n:e.width,d=o?e.height/o:e.height;return{width:c,height:d,top:l,right:s+c,bottom:l+d,left:s}}function Zf({element:e,keyframes:t,options:r}){return e.animate(t,r).finished}function Su(e,t=Dt(e).translate,r=!0){if(r){const n=Mf(e,o=>"translate"in o);if(n){const{translate:o=""}=n[0];if(typeof o=="string"){const i=gn(o);if(i)return i}}}if(t){const n=gn(t);if(n)return n}return{x:0,y:0,z:0}}var uk=new Jl(e=>setTimeout(e,0)),so=new Map,dk=so.clear.bind(so);function pk(e){const t=e.ownerDocument;let r=so.get(t);if(r)return r;r=t.getAnimations(),so.set(t,r),uk.schedule(dk);const n=r.filter(o=>ia(o.effect)&&o.effect.target===e);return so.set(e,n),r}function fk(e,t){const r=pk(e).filter(n=>{var o,i;if(ia(n.effect)){const{target:a}=n.effect;if((i=a&&((o=t.isValidTarget)==null?void 0:o.call(t,a)))!=null?i:!0)return n.effect.getKeyframes().some(l=>{for(const c of t.properties)if(l[c])return!0})}}).map(n=>{const{effect:o,currentTime:i}=n,a=o?.getComputedTiming().duration;if(!(n.pending||n.playState==="finished")&&typeof a=="number"&&typeof i=="number"&&i<a)return n.currentTime=a,()=>{n.currentTime=i}});if(r.length>0)return()=>r.forEach(n=>n?.())}var kt=class extends xt{constructor(e,t={}){var r,n,o,i;const{frameTransform:a=vn(e),ignoreTransforms:s,getBoundingClientRect:l=aa}=t,c=fk(e,{properties:["transform","translate","scale","width","height"],isValidTarget:j=>(j!==e||Kl())&&j.contains(e)}),d=l(e);let{top:u,left:f,width:v,height:h}=d,m;const b=Dt(e),S=sa(b),x={x:(r=S?.scaleX)!=null?r:1,y:(n=S?.scaleY)!=null?n:1},_=hk(e,b);c?.(),S&&(m=ck(d,S,b.transformOrigin),(s||_)&&(u=m.top,f=m.left,v=m.width,h=m.height));const g={width:(o=m?.width)!=null?o:v,height:(i=m?.height)!=null?i:h};if(_&&!s&&m){const j=lk(m,_,b.transformOrigin);u=j.top,f=j.left,v=j.width,h=j.height,x.x=_.scaleX,x.y=_.scaleY}a&&(s||(f*=a.scaleX,v*=a.scaleX,u*=a.scaleY,h*=a.scaleY),f+=a.x,u+=a.y),super(f,u,v,h),this.scale=x,this.intrinsicWidth=g.width,this.intrinsicHeight=g.height}};function hk(e,t){const r=e.getAnimations();if(!r.length)return null;let n,o,i,a=!1;for(const s of r){if(s.playState!=="running")continue;const l=ia(s.effect)?s.effect.getKeyframes():[],c=l[l.length-1];if(!c)continue;const{transform:d,translate:u,scale:f}=c;typeof d=="string"&&d&&(n=d,a=!0),typeof u=="string"&&u&&(o=u,a=!0),typeof f=="string"&&f&&(i=f,a=!0)}return a?sa({transform:n??t.transform,translate:o??t.translate,scale:i??t.scale}):null}function lo(e){return"style"in e&&typeof e.style=="object"&&e.style!==null&&"setProperty"in e.style&&"removeProperty"in e.style&&typeof e.style.setProperty=="function"&&typeof e.style.removeProperty=="function"}var vk=class{constructor(e){this.element=e,this.initial=new Map}set(e,t=""){const{element:r}=this;if(lo(r))for(const[n,o]of Object.entries(e)){const i=`${t}${n}`;this.initial.has(i)||this.initial.set(i,r.style.getPropertyValue(i)),r.style.setProperty(i,typeof o=="string"?o:`${o}px`)}}remove(e,t=""){const{element:r}=this;if(lo(r))for(const n of e){const o=`${t}${n}`;r.style.removeProperty(o)}}reset(){const{element:e}=this;if(lo(e)){for(const[t,r]of this.initial)e.style.setProperty(t,r);e.getAttribute("style")===""&&e.removeAttribute("style")}}};function hr(e){return e?e instanceof vt(e).Element||Oo(e)&&e.nodeType===Node.ELEMENT_NODE:!1}function xo(e){if(!e)return!1;const{KeyboardEvent:t}=vt(e.target);return e instanceof t}function gk(e){if(!e)return!1;const{PointerEvent:t}=vt(e.target);return e instanceof t}function mk(e){if(!hr(e))return!1;const{tagName:t}=e;return t==="INPUT"||t==="TEXTAREA"||_k(e)}function _k(e){return e.hasAttribute("contenteditable")&&e.getAttribute("contenteditable")!=="false"}var Aa={};function js(e){const t=Aa[e]==null?0:Aa[e]+1;return Aa[e]=t,`${e}-${t}`}var yk=({dragOperation:e,droppable:t})=>{const r=e.position.current;if(!r)return null;const{id:n}=t;if(!t.shape)return null;if(t.shape.containsPoint(r)){const o=Je.distance(t.shape.center,r);return{id:n,value:1/o,type:$t.PointerIntersection,priority:_t.High}}return null},bk=({dragOperation:e,droppable:t})=>{const{shape:r}=e;if(!t.shape||!r?.current)return null;const n=r.current.intersectionArea(t.shape);if(n){const{position:o}=e,i=Je.distance(t.shape.center,o.current),s=n/(r.current.area+t.shape.area-n)/i;return{id:t.id,value:s,type:$t.ShapeIntersection,priority:_t.Normal}}return null},Uf=e=>{var t;return(t=yk(e))!=null?t:bk(e)},kk=e=>{const{dragOperation:t,droppable:r}=e,{shape:n,position:o}=t;if(!r.shape)return null;const i=n?xt.from(n.current.boundingRectangle).corners:void 0,s=xt.from(r.shape.boundingRectangle).corners.reduce((l,c,d)=>{var u;return l+Je.distance(Je.from(c),(u=i?.[d])!=null?u:o.current)},0)/4;return{id:r.id,value:1/s,type:$t.Collision,priority:_t.Normal}},xk=Object.create,Ql=Object.defineProperty,wk=Object.defineProperties,Sk=Object.getOwnPropertyDescriptor,Ik=Object.getOwnPropertyDescriptors,Bi=Object.getOwnPropertySymbols,Yf=Object.prototype.hasOwnProperty,Kf=Object.prototype.propertyIsEnumerable,Xf=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),zn=e=>{throw TypeError(e)},As=(e,t,r)=>t in e?Ql(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,wo=(e,t)=>{for(var r in t||(t={}))Yf.call(t,r)&&As(e,r,t[r]);if(Bi)for(var r of Bi(t))Kf.call(t,r)&&As(e,r,t[r]);return e},ec=(e,t)=>wk(e,Ik(t)),Iu=(e,t)=>Ql(e,"name",{value:t,configurable:!0}),Gf=(e,t)=>{var r={};for(var n in e)Yf.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&Bi)for(var n of Bi(e))t.indexOf(n)<0&&Kf.call(e,n)&&(r[n]=e[n]);return r},jn=e=>{var t;return[,,,xk((t=e?.[Xf("metadata")])!=null?t:null)]},Jf=["class","method","getter","setter","accessor","field","value","get","set"],Gn=e=>e!==void 0&&typeof e!="function"?zn("Function expected"):e,Ek=(e,t,r,n,o)=>({kind:Jf[e],name:t,metadata:n,addInitializer:i=>r._?zn("Already initialized"):o.push(Gn(i||null))}),Br=(e,t)=>As(t,Xf("metadata"),e[3]),Be=(e,t,r,n)=>{for(var o=0,i=e[t>>1],a=i&&i.length;o<a;o++)t&1?i[o].call(r):n=i[o].call(r,n);return n},wt=(e,t,r,n,o,i)=>{var a,s,l,c,d,u=t&7,f=!!(t&8),v=!!(t&16),h=u>3?e.length+1:u?f?1:2:0,m=Jf[u+5],b=u>3&&(e[h-1]=[]),S=e[h]||(e[h]=[]),x=u&&(!v&&!f&&(o=o.prototype),u<5&&(u>3||!v)&&Sk(u<4?o:{get[r](){return ye(this,i)},set[r](g){return nt(this,i,g)}},r));u?v&&u<4&&Iu(i,(u>2?"set ":u>1?"get ":"")+r):Iu(o,r);for(var _=n.length-1;_>=0;_--)c=Ek(u,r,l={},e[3],S),u&&(c.static=f,c.private=v,d=c.access={has:v?g=>Ck(o,g):g=>r in g},u^3&&(d.get=v?g=>(u^1?ye:Pr)(g,o,u^4?i:x.get):g=>g[r]),u>2&&(d.set=v?(g,j)=>nt(g,o,j,u^4?i:x.set):(g,j)=>g[r]=j)),s=(0,n[_])(u?u<4?v?i:x[m]:u>4?void 0:{get:x.get,set:x.set}:o,c),l._=1,u^4||s===void 0?Gn(s)&&(u>4?b.unshift(s):u?v?i=s:x[m]=s:o=s):typeof s!="object"||s===null?zn("Object expected"):(Gn(a=s.get)&&(x.get=a),Gn(a=s.set)&&(x.set=a),Gn(a=s.init)&&b.unshift(a));return u||Br(e,o),x&&Ql(o,r,x),v?u^4?i:x:o},tc=(e,t,r)=>t.has(e)||zn("Cannot "+r),Ck=(e,t)=>Object(t)!==t?zn('Cannot use the "in" operator on this value'):e.has(t),ye=(e,t,r)=>(tc(e,t,"read from private field"),r?r.call(e):t.get(e)),Te=(e,t,r)=>t.has(e)?zn("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),nt=(e,t,r,n)=>(tc(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r),Pr=(e,t,r)=>(tc(e,t,"access private method"),r),Eu={role:"button",roleDescription:"draggable"},zk="dnd-kit-description",jk="dnd-kit-announcement",Ak={draggable:"To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item in a given direction. Press space again to drop the item in its new position, or press escape to cancel."},Pk={dragstart({operation:{source:e}}){if(e)return`Picked up draggable item ${e.id}.`},dragover({operation:{source:e,target:t}}){if(!(!e||e.id===t?.id))return t?`Draggable item ${e.id} was moved over droppable target ${t.id}.`:`Draggable item ${e.id} is no longer over a droppable target.`},dragend({operation:{source:e,target:t},canceled:r}){if(e)return r?`Dragging was cancelled. Draggable item ${e.id} was dropped.`:t?`Draggable item ${e.id} was dropped over droppable target ${t.id}`:`Draggable item ${e.id} was dropped.`}};function Dk(e){const t=e.tagName.toLowerCase();return["input","select","textarea","a","button"].includes(t)}function Mk(e,t){const r=document.createElement("div");return r.id=e,r.style.setProperty("display","none"),r.textContent=t,r}function Tk(e){const t=document.createElement("div");return t.id=e,t.setAttribute("role","status"),t.setAttribute("aria-live","polite"),t.setAttribute("aria-atomic","true"),t.style.setProperty("position","fixed"),t.style.setProperty("width","1px"),t.style.setProperty("height","1px"),t.style.setProperty("margin","-1px"),t.style.setProperty("border","0"),t.style.setProperty("padding","0"),t.style.setProperty("overflow","hidden"),t.style.setProperty("clip","rect(0 0 0 0)"),t.style.setProperty("clip-path","inset(100%)"),t.style.setProperty("white-space","nowrap"),t}var Ok=["dragover","dragmove"],Lk=class extends Ye{constructor(e,t){super(e);const{id:r,idPrefix:{description:n=zk,announcement:o=jk}={},announcements:i=Pk,screenReaderInstructions:a=Ak,debounce:s=500}=t??{},l=r?`${n}-${r}`:js(n),c=r?`${o}-${r}`:js(o);let d,u,f,v;const h=(j=v)=>{!f||!j||f?.nodeValue!==j&&(f.nodeValue=j)},m=()=>Ri.schedule(h),b=Rk(m,s),S=Object.entries(i).map(([j,w])=>this.manager.monitor.addEventListener(j,(A,E)=>{const I=f;if(!I)return;const k=w?.(A,E);k&&I.nodeValue!==k&&(v=k,Ok.includes(j)?b():(m(),b.cancel()))})),x=()=>{let j=[];d?.isConnected||(d=Mk(l,a.draggable),j.push(d)),u?.isConnected||(u=Tk(c),f=document.createTextNode(""),u.appendChild(f),j.push(u)),j.length>0&&document.body.append(...j)},_=new Set;function g(){for(const j of _)j()}this.registerEffect(()=>{var j;_.clear();for(const w of this.manager.registry.draggables.value){const A=(j=w.handle)!=null?j:w.element;if(A){(!d||!u)&&_.add(x),(!Dk(A)||Kl())&&!A.hasAttribute("tabindex")&&_.add(()=>A.setAttribute("tabindex","0")),!A.hasAttribute("role")&&A.tagName.toLowerCase()!=="button"&&_.add(()=>A.setAttribute("role",Eu.role)),A.hasAttribute("aria-roledescription")||_.add(()=>A.setAttribute("aria-roledescription",Eu.roleDescription)),A.hasAttribute("aria-describedby")||_.add(()=>A.setAttribute("aria-describedby",l));for(const I of["aria-pressed","aria-grabbed"]){const k=String(w.isDragging);A.getAttribute(I)!==k&&_.add(()=>A.setAttribute(I,k))}const E=String(w.disabled);A.getAttribute("aria-disabled")!==E&&_.add(()=>A.setAttribute("aria-disabled",E))}}_.size>0&&Ri.schedule(g)}),this.destroy=()=>{super.destroy(),d?.remove(),u?.remove(),S.forEach(j=>j())}}};function Rk(e,t){let r;const n=()=>{clearTimeout(r),r=setTimeout(e,t)};return n.cancel=()=>clearTimeout(r),n}var Ni=new Map,Qf,eh,th,rh,Ps,co,Yt,rc,mn,nh,oh,ih,ah,vr=class extends(Ps=To,rh=[de],th=[Me],eh=[Me],Qf=[Me],Ps){constructor(t,r){super(t,r),Be(Yt,5,this),Te(this,mn),Te(this,co,new Set),Te(this,rc,Be(Yt,8,this,new Set)),Be(Yt,11,this),this.registerEffect(Pr(this,mn,nh))}register(t){return ye(this,co).add(t),()=>{ye(this,co).delete(t)}}addRoot(t){return ue(()=>{const r=new Set(this.additionalRoots);r.add(t),this.additionalRoots=r}),()=>{ue(()=>{const r=new Set(this.additionalRoots);r.delete(t),this.additionalRoots=r})}}get sourceRoot(){var t;const{source:r}=this.manager.dragOperation;return Ti((t=r?.element)!=null?t:null)}get targetRoot(){var t;const{target:r}=this.manager.dragOperation;return Ti((t=r?.element)!=null?t:null)}get roots(){const{status:t}=this.manager.dragOperation;if(t.initializing||t.initialized){const r=[this.sourceRoot,this.targetRoot].filter(n=>n!=null);return new Set([...r,...this.additionalRoots])}return new Set}};Yt=jn(Ps);co=new WeakMap;rc=new WeakMap;mn=new WeakSet;nh=function(){const{roots:e}=this,t=[];for(const r of e)for(const n of ye(this,co))t.push(Pr(this,mn,oh).call(this,r,n));return()=>{for(const r of t)r()}};oh=function(e,t){let r=Ni.get(e);r||(r=new Map,Ni.set(e,r));let n=r.get(t);if(!n){const i=Yl(e)?Pr(this,mn,ih).call(this,e,r,t):Pr(this,mn,ah).call(this,e,r,t);if(!i)return()=>{};n=i,r.set(t,n)}n.refCount++;let o=!1;return()=>{o||(o=!0,n.refCount--,n.refCount===0&&n.cleanup())}};ih=function(e,t,r){var n;const o=e.createElement("style"),{nonce:i}=(n=this.options)!=null?n:{};i&&o.setAttribute("nonce",i),o.textContent=r,e.head.prepend(o);const a=new MutationObserver(s=>{for(const l of s)for(const c of Array.from(l.removedNodes))if(c===o){e.head.prepend(o);return}});return a.observe(e.head,{childList:!0}),{refCount:0,cleanup:()=>{a.disconnect(),o.remove(),t.delete(r),t.size===0&&Ni.delete(e)}}};ah=function(e,t,r){"adoptedStyleSheets"in e&&Array.isArray(e.adoptedStyleSheets);const n=e.ownerDocument.defaultView,{CSSStyleSheet:o}=n??{};if(!o)return null;const i=new o;return i.replaceSync(r),e.adoptedStyleSheets.push(i),{refCount:0,cleanup:()=>{var a;if(Xl(e)&&((a=e.host)!=null&&a.isConnected)){const s=e.adoptedStyleSheets.indexOf(i);s!==-1&&e.adoptedStyleSheets.splice(s,1)}t.delete(r),t.size===0&&Ni.delete(e)}}};wt(Yt,4,"additionalRoots",rh,vr,rc);wt(Yt,2,"sourceRoot",th,vr);wt(Yt,2,"targetRoot",eh,vr);wt(Yt,2,"roots",Qf,vr);Br(Yt,vr);vr.configure=Mo(vr);var la=vr,Fk=class extends Ye{constructor(e,t){super(e,t),this.manager=e;const{cursor:r="grabbing"}=t??{},n=e.registry.plugins.get(la),o=n?.register(`* { cursor: ${r} !important; }`);if(o){const i=this.destroy.bind(this);this.destroy=()=>{o(),i()}}}},Lo="data-dnd-",Ds=`${Lo}dropping`,Ve="--dnd-",Lt=`${Lo}dragging`,$i=`${Lo}placeholder`,Bk=[Lt,$i,"popover","aria-pressed","aria-grabbing"],Nk=["view-transition-name"],$k=`
  :is(:root,:host) [${Lt}] {
    position: fixed !important;
    pointer-events: none !important;
    touch-action: none;
    z-index: calc(infinity);
    will-change: translate;
    top: var(${Ve}top, 0px) !important;
    left: var(${Ve}left, 0px) !important;
    right: unset !important;
    bottom: unset !important;
    width: var(${Ve}width, auto);
    max-width: var(${Ve}width, auto);
    height: var(${Ve}height, auto);
    max-height: var(${Ve}height, auto);
    transform: var(${Ve}transform, none) !important;
    transition: var(${Ve}transition) !important;
  }

  :is(:root,:host) [${$i}] {
    transition: none;
  }

  :is(:root,:host) [${$i}='hidden'] {
    visibility: hidden;
  }

  [${Lt}] * {
    pointer-events: none !important;
  }

  [${Lt}]:not([${Ds}]) {
    translate: var(${Ve}translate) !important;
  }

  [${Lt}][style*='${Ve}scale'] {
    scale: var(${Ve}scale) !important;
    transform-origin: var(${Ve}transform-origin) !important;
  }

  @layer dnd-kit {
    :where([${Lt}][popover]) {
      overflow: visible;
      background: unset;
      border: unset;
      margin: unset;
      padding: unset;
      color: inherit;

      &:is(input, button) {
        border: revert;
        background: revert;
      }
    }
  }
  [${Lt}]::backdrop, [${Lo}overlay]:not([${Lt}]) {
    display: none;
    visibility: hidden;
  }
`.replace(/\n+/g," ").replace(/\s+/g," ").trim();function Hk(e,t="hidden"){return ue(()=>{const{element:r,manager:n}=e;if(!r||!n)return;const o=Wk(r,n.registry.droppables),i=[],a=Lb(r),{remove:s}=a;return qk(o,a,i),Vk(a,t),a.remove=()=>{i.forEach(l=>l()),s.call(a)},a})}function Wk(e,t){const r=new Map;for(const n of t)if(n.element&&(e===n.element||e.contains(n.element))){const o=`${Lo}${js("dom-id")}`;n.element.setAttribute(o,""),r.set(n,o)}return r}function qk(e,t,r){for(const[n,o]of e){if(!n.element)continue;const i=`[${o}]`,a=t.matches(i)?t:t.querySelector(i);if(n.element.removeAttribute(o),!a)continue;const s=n.element;n.proxy=a,a.removeAttribute(o),Is.set(s,a),r.push(()=>{Is.delete(s),n.proxy=void 0})}}function Vk(e,t="hidden"){e.setAttribute("inert","true"),e.setAttribute("tab-index","-1"),e.setAttribute("aria-hidden","true"),e.setAttribute($i,t)}function sh(e,t){return e===t?!0:hn(e)===hn(t)}function Cu(e){const{target:t}=e;"newState"in e&&e.newState==="closed"&&hr(t)&&t.hasAttribute("popover")&&requestAnimationFrame(()=>un(t))}function Ms(e){return e.tagName==="TR"}function Zk(e,t,r){const n=new MutationObserver(o=>{let i=!1;for(const a of o){if(a.target!==e){i=!0;continue}if(a.type!=="attributes")continue;const s=a.attributeName;if(s.startsWith("aria-")||Bk.includes(s))continue;const l=e.getAttribute(s);if(s==="style"){if(lo(e)&&lo(t)){const c=e.style;for(const d of Array.from(t.style))c.getPropertyValue(d)===""&&t.style.removeProperty(d);for(const d of Array.from(c)){if(Nk.includes(d)||d.startsWith(Ve))continue;const u=c.getPropertyValue(d);t.style.setProperty(d,u)}}}else l!==null?t.setAttribute(s,l):t.removeAttribute(s)}i&&r&&t.replaceChildren(...e.cloneNode(!0).childNodes)});return n.observe(e,{attributes:!0,subtree:!0,childList:!0}),n}function Uk(e,t,r){const n=new MutationObserver(o=>{for(const i of o)if(i.addedNodes.length!==0)for(const a of Array.from(i.addedNodes)){if(a.contains(e)&&e.nextElementSibling!==t){e.insertAdjacentElement("afterend",t),un(r);return}if(a.contains(t)&&t.previousElementSibling!==e){t.insertAdjacentElement("beforebegin",e),un(r);return}}e.isConnected&&t.isConnected&&e.nextElementSibling!==t&&(e.insertAdjacentElement("afterend",t),un(r))});return n.observe(e.ownerDocument.body,{childList:!0,subtree:!0}),n}function Yk(e){return new ResizeObserver(()=>{var t,r,n;const o=new kt(e.placeholder,{frameTransform:e.frameTransform,ignoreTransforms:!0}),i=(t=e.transformOrigin)!=null?t:{x:1,y:1},a=(e.width-o.width)*i.x+e.delta.x,s=(e.height-o.height)*i.y+e.delta.y,l=Lf();if(e.styles.set({width:o.width-e.widthOffset,height:o.height-e.heightOffset,top:e.top+s+l.y,left:e.left+a+l.x},Ve),(r=e.getElementMutationObserver())==null||r.takeRecords(),Ms(e.element)&&Ms(e.placeholder)){const m=Array.from(e.element.cells),b=Array.from(e.placeholder.cells);e.getSavedCellWidths()||e.setSavedCellWidths(m.map(S=>S.style.width));for(const[S,x]of m.entries()){const _=b[S];x.style.width=`${_.getBoundingClientRect().width}px`}}const c=(n=e.getTranslate())!=null?n:{x:0,y:0},d=e.left+a+l.x+c.x,u=e.top+s+l.y+c.y,f=o.width-e.widthOffset,v=o.height-e.heightOffset,h=e.frameTransform;e.dragOperation.shape=new xt(d*h.scaleX+h.x,u*h.scaleY+h.y,f*h.scaleX,v*h.scaleY)})}var Kk=250,Xk="ease";function Gk(e){var t,r,n,o;const{animation:i}=e;if(typeof i=="function"){const x=i({source:e.source,element:e.element,feedbackElement:e.feedbackElement,placeholder:e.placeholder,translate:e.translate,moved:e.moved});Promise.resolve(x).then(()=>{e.cleanup(),requestAnimationFrame(e.restoreFocus)});return}const{duration:a=Kk,easing:s=Xk}=i??{};un(e.feedbackElement);const[,l]=(t=Mf(e.feedbackElement,x=>"translate"in x))!=null?t:[];l?.pause();const c=(r=e.placeholder)!=null?r:e.element,d={frameTransform:sh(e.feedbackElement,c)?null:void 0},u=new kt(e.feedbackElement,d),f=(n=gn(Dt(e.feedbackElement).translate))!=null?n:e.translate,v=new kt(c,d),h=xt.delta(u,v,e.alignment),m={x:f.x-h.x,y:f.y-h.y},b=Math.round(u.intrinsicHeight)!==Math.round(v.intrinsicHeight)?{minHeight:[`${u.intrinsicHeight}px`,`${v.intrinsicHeight}px`],maxHeight:[`${u.intrinsicHeight}px`,`${v.intrinsicHeight}px`]}:{},S=Math.round(u.intrinsicWidth)!==Math.round(v.intrinsicWidth)?{minWidth:[`${u.intrinsicWidth}px`,`${v.intrinsicWidth}px`],maxWidth:[`${u.intrinsicWidth}px`,`${v.intrinsicWidth}px`]}:{};e.styles.set({transition:e.transition},Ve),e.feedbackElement.setAttribute(Ds,""),(o=e.getElementMutationObserver())==null||o.takeRecords(),Zf({element:e.feedbackElement,keyframes:ec(wo(wo({},b),S),{translate:[`${f.x}px ${f.y}px 0`,`${m.x}px ${m.y}px 0`]}),options:{duration:Gl(vt(e.feedbackElement))?0:e.moved||e.feedbackElement!==e.element?a:0,easing:s}}).then(()=>{e.feedbackElement.removeAttribute(Ds),l?.finish(),e.cleanup(),requestAnimationFrame(e.restoreFocus)})}var lh,Ts,So,nc,Si,ch,uh,_n=class extends(Ts=Ye,lh=[de],Ts){constructor(t,r){super(t,r),Te(this,Si),Te(this,nc,Be(So,8,this)),Be(So,11,this),this.state={initial:{},current:{}};const n=t.registry.plugins.get(la),o=n?.register($k);if(o){const i=this.destroy.bind(this);this.destroy=()=>{o(),i()}}this.registerEffect(Pr(this,Si,ch).bind(this,n)),this.registerEffect(Pr(this,Si,uh))}};So=jn(Ts);nc=new WeakMap;Si=new WeakSet;ch=function(e){const{overlay:t}=this;if(!t||!e)return;const r=Ti(t);if(r)return e.addRoot(r)};uh=function(){var e,t,r,n,o,i,a;const{state:s,manager:l,options:c}=this,{dragOperation:d}=l,{position:u,source:f,status:v}=d;if(v.idle){s.current={},s.initial={};return}if(!f)return;const{element:h}=f,m=f.pluginConfig(_n),b=(t=(e=m?.feedback)!=null?e:c?.feedback)!=null?t:"default",S=typeof b=="function"?b(f,l):b;if(!h||S==="none"||!v.initialized||v.initializing)return;const{initial:x}=s,_=(r=this.overlay)!=null?r:h,g=vn(_),j=vn(h),w=!sh(h,_),A=new kt(h,{frameTransform:w?j:null,ignoreTransforms:!w}),E={x:j.scaleX/g.scaleX,y:j.scaleY/g.scaleY};let{width:I,height:k,top:P,left:T}=A;w&&(I=I/E.x,k=k/E.y);const F=new vk(_),H=Dt(h),{transition:R,translate:L,boxSizing:U,paddingBlockStart:Y,paddingBlockEnd:$,paddingInlineStart:K,paddingInlineEnd:oe,borderInlineStartWidth:Z,borderInlineEndWidth:re,borderBlockStartWidth:xe,borderBlockEndWidth:Q}=H,ie=R.split(",").filter(fe=>!/^\s*(transform|translate|scale)\b/.test(fe)).join(","),Ie=sa(H),V=H.transform,C=S==="clone",M=U==="content-box",O=M?parseInt(K)+parseInt(oe)+parseInt(Z)+parseInt(re):0,q=M?parseInt(Y)+parseInt($)+parseInt(xe)+parseInt(Q):0,W=S!=="move"&&!this.overlay?Hk(f,C?"clone":"hidden"):null,G=ue(()=>xo(l.dragOperation.activatorEvent));if(!x.translate){if(this.overlay&&Ie)x.translate={x:Ie.x,y:Ie.y};else if(L!=="none"){const fe=gn(L);fe&&(x.translate=fe)}}if(!x.transformOrigin){const fe=ue(()=>u.current),Pe=T+((n=Ie?.x)!=null?n:0),He=P+((o=Ie?.y)!=null?o:0);x.transformOrigin={x:(fe.x-Pe*g.scaleX-g.x)/(I*g.scaleX),y:(fe.y-He*g.scaleY-g.y)/(k*g.scaleY)}}const{transformOrigin:ne}=x,ge=P*g.scaleY+g.y,_e=T*g.scaleX+g.x;if(!x.coordinates&&(x.coordinates={x:_e,y:ge},E.x!==1||E.y!==1)){const{scaleX:fe,scaleY:Pe}=j,{x:He,y:Mt}=ne;x.coordinates.x+=(I*fe-I)*He,x.coordinates.y+=(k*Pe-k)*Mt}x.dimensions||(x.dimensions={width:I,height:k}),x.frameTransform||(x.frameTransform=g);const Ke={x:x.coordinates.x-_e,y:x.coordinates.y-ge},Re={width:(x.dimensions.width*x.frameTransform.scaleX-I*g.scaleX)*ne.x,height:(x.dimensions.height*x.frameTransform.scaleY-k*g.scaleY)*ne.y},ze={x:Ke.x/g.scaleX+Re.width,y:Ke.y/g.scaleY+Re.height},Ee={left:T+ze.x,top:P+ze.y};_.setAttribute(Lt,"true");const be=ue(()=>d.transform),St=(i=x.translate)!=null?i:{x:0,y:0},Ht=be.x*g.scaleX+St.x,$r=be.y*g.scaleY+St.y,Hr=Lf();F.set({width:I-O,height:k-q,top:Ee.top+Hr.y,left:Ee.left+Hr.x,translate:`${Ht}px ${$r}px 0`,transform:this.overlay?"none":V,transition:ie?`${ie}, translate 0ms linear`:"translate 0ms linear",scale:w?`${E.x} ${E.y}`:"","transform-origin":`${ne.x*100}% ${ne.y*100}%`},Ve),W&&(h.insertAdjacentElement("afterend",W),c?.rootElement&&(typeof c.rootElement=="function"?c.rootElement(f):c.rootElement).appendChild(h)),Cs(_)&&(_.hasAttribute("popover")||_.setAttribute("popover","manual"),un(_),_.addEventListener("beforetoggle",Cu));let Wt,Gt,Jt;const Mn=Yk({placeholder:W,element:h,feedbackElement:_,frameTransform:g,transformOrigin:ne,width:I,height:k,top:P,left:T,widthOffset:O,heightOffset:q,delta:ze,styles:F,dragOperation:d,getTranslate:()=>s.current.translate,getElementMutationObserver:()=>Wt,getSavedCellWidths:()=>Jt,setSavedCellWidths:fe=>{Jt=fe}}),ya=new kt(_);ue(()=>d.shape=ya);const Wr=vt(_),Tn=fe=>{this.manager.actions.stop({event:fe})},Zo=Gl(Wr);G&&Wr.addEventListener("resize",Tn),ue(()=>f.status)==="idle"&&requestAnimationFrame(()=>f.status="dragging"),W&&(Mn.observe(W),Wt=Zk(h,W,C),Gt=Uk(h,W,_));const On=(a=l.dragOperation.source)==null?void 0:a.id,Uo=()=>{var fe;if(!G||On==null)return;const Pe=l.registry.draggables.get(On),He=(fe=Pe?.handle)!=null?fe:Pe?.element;fr(He)&&He.focus()},_r=()=>{var fe;if(Wt?.disconnect(),Gt?.disconnect(),Mn.disconnect(),Wr.removeEventListener("resize",Tn),Cs(_)&&(_.removeEventListener("beforetoggle",Cu),_.removeAttribute("popover")),_.removeAttribute(Lt),F.reset(),Jt&&Ms(h)){const Mt=Array.from(h.cells);for(const[X,ae]of Mt.entries())ae.style.width=(fe=Jt[X])!=null?fe:""}f.status="idle";const Pe=s.current.translate!=null,He=d.status.dragging;W&&(!He&&Pe||W.parentElement!==_.parentElement)&&_.isConnected&&W.replaceWith(_),W?.remove()},Yo=c?.dropAnimation,Ko=this,ba=Po(()=>{var fe,Pe,He;const{transform:Mt,status:X}=d;if(!(!Mt.x&&!Mt.y&&!s.current.translate)&&X.dragging){const ae=(fe=x.translate)!=null?fe:{x:0,y:0},se={x:Mt.x/g.scaleX+ae.x,y:Mt.y/g.scaleY+ae.y},we=s.current.translate,We=ue(()=>d.modifiers),at=ue(()=>{var It;return(It=d.shape)==null?void 0:It.current}),et=c?.keyboardTransition,Qt=G&&!Zo&&et!==null?`${(Pe=et?.duration)!=null?Pe:250}ms ${(He=et?.easing)!=null?He:"cubic-bezier(0.25, 1, 0.5, 1)"}`:"0ms linear";if(F.set({transition:ie?`${ie}, translate ${Qt}`:`translate ${Qt}`,translate:`${se.x}px ${se.y}px 0`},Ve),Wt?.takeRecords(),at&&at!==ya&&we&&!We.length){const It=Je.delta(se,we);d.shape=xt.from(at.boundingRectangle).translate(It.x*g.scaleX,It.y*g.scaleY)}else d.shape=new kt(_);s.current.translate=se}},function(){if(d.status.dropped){this.dispose(),f.status="dropping";const fe=m?.dropAnimation!==void 0?m.dropAnimation:Ko.dropAnimation!==void 0?Ko.dropAnimation:Yo;let Pe=s.current.translate;const He=Pe!=null;if(!Pe&&h!==_&&(Pe={x:0,y:0}),!Pe||fe===null){_r();return}l.renderer.rendering.then(()=>{Gk({source:f,element:h,feedbackElement:_,placeholder:W,translate:Pe,moved:He,transition:R,alignment:f.alignment,styles:F,animation:fe??void 0,getElementMutationObserver:()=>Wt,cleanup:_r,restoreFocus:Uo})})}});return()=>{_r(),ba()}};wt(So,4,"overlay",lh,_n,nc);Br(So,_n);_n.configure=Mo(_n);var Ro=_n,Rn=!0,Jk=!1,dh,ph,fh,hh,sr,oc,ic;hh=(fh=[de],yt.Forward),ph=(dh=[de],yt.Reverse);var Io=class{constructor(){Te(this,oc,Be(sr,8,this,Rn)),Be(sr,11,this),Te(this,ic,Be(sr,12,this,Rn)),Be(sr,15,this)}isLocked(e){return e===yt.Idle?!1:e==null?this[yt.Forward]===Rn&&this[yt.Reverse]===Rn:this[e]===Rn}unlock(e){e!==yt.Idle&&(this[e]=Jk)}};sr=jn(null);oc=new WeakMap;ic=new WeakMap;wt(sr,4,hh,fh,Io,oc);wt(sr,4,ph,dh,Io,ic);Br(sr,Io);var Qk=[yt.Forward,yt.Reverse],zu=class{constructor(){this.x=new Io,this.y=new Io}isLocked(){return this.x.isLocked()&&this.y.isLocked()}},ex=class extends Ye{constructor(e){super(e);const t=kn(new zu);let r=null;this.signal=t,ct(()=>{const{status:n}=e.dragOperation;if(!n.initialized){r=null,t.value=new zu;return}const{delta:o}=e.dragOperation.position;if(r){const i={x:ju(o.x,r.x),y:ju(o.y,r.y)},a=t.peek();Ae(()=>{for(const s of Hp)for(const l of Qk)i[s]===l&&a[s].unlock(l);t.value=a})}r=o})}get current(){return this.signal.peek()}};function ju(e,t){return Math.sign(e-t)}var vh,Os,Eo,ac,or,Ls,Fo=class extends(Os=To,vh=[de],Os){constructor(e){super(e),Te(this,ac,Be(Eo,8,this,!1)),Be(Eo,11,this),Te(this,or),Te(this,Ls,()=>{if(!ye(this,or))return;const{element:i,by:a}=ye(this,or);a.y&&(i.scrollTop+=a.y),a.x&&(i.scrollLeft+=a.x)}),this.scroll=(i,a)=>{var s;if(this.disabled)return!1;const l=this.getScrollableElements();if(!l)return nt(this,or,void 0),!1;const{position:c}=this.manager.dragOperation,d=c?.current;if(d){const{by:u}=i??{},f=u?{x:Au(u.x),y:Au(u.y)}:void 0,v=f?void 0:this.scrollIntentTracker.current;if(v?.isLocked())return!1;for(const h of l){const m=Kb(h,u);if(m.x||m.y){const{speed:b,direction:S}=ak(h,d,f,a?.acceleration,a?.threshold);if(v)for(const x of Hp)v[x].isLocked(S[x])&&(b[x]=0,S[x]=0);if(S.x||S.y){const{x,y:_}=u??S,g=x*b.x,j=_*b.y;if(g||j){const w=(s=ye(this,or))==null?void 0:s.by;if(this.autoScrolling&&w&&(w.x&&!g||w.y&&!j))continue;return nt(this,or,{element:h,by:{x:g,y:j}}),Ri.schedule(ye(this,Ls)),!0}}}}}return nt(this,or,void 0),!1};let t=null,r=null;const n=ds(()=>{const{position:i,source:a}=e.dragOperation;if(!i)return null;const s=Rf(Ti(a?.element),i.current);return s&&(t=s),s??t}),o=ds(()=>{const i=n.value,{documentElement:a}=Cn(i);if(!i||i===a){const{target:s}=e.dragOperation,l=s?.element;if(l){const c=zs(l,{excludeElement:!1});return r=c,c}}if(i){const s=zs(i,{excludeElement:!1});return this.autoScrolling&&r&&s.size<r?.size?r:(r=s,s)}return r=null,null},zt);this.getScrollableElements=()=>o.value,this.scrollIntentTracker=new ex(e),this.destroy=e.monitor.addEventListener("dragmove",i=>{this.disabled||i.defaultPrevented||!xo(e.dragOperation.activatorEvent)||!i.by||this.scroll({by:i.by})&&i.preventDefault()})}};Eo=jn(Os);ac=new WeakMap;or=new WeakMap;Ls=new WeakMap;wt(Eo,4,"autoScrolling",vh,Fo,ac);Br(Eo,Fo);function Au(e){return e>0?yt.Forward:e<0?yt.Reverse:yt.Idle}var tx=class{constructor(e){this.scheduler=e,this.pending=!1,this.tasks=new Set,this.resolvers=new Set,this.flush=()=>{const{tasks:t,resolvers:r}=this;this.pending=!1,this.tasks=new Set,this.resolvers=new Set;for(const n of t)n();for(const n of r)n()}}schedule(e){return this.tasks.add(e),this.pending||(this.pending=!0,this.scheduler(this.flush)),new Promise(t=>this.resolvers.add(t))}},rx=new tx(e=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(e):e()}),nx=10,Rs=class extends Ye{constructor(t,r){super(t,r);const n=t.registry.plugins.get(Fo);if(!n)throw new Error("AutoScroller plugin depends on Scroller plugin");this.destroy=ct(()=>{var o,i,a;if(this.disabled)return;const{position:s,status:l}=t.dragOperation;if(l.dragging){const c={acceleration:(o=this.options)==null?void 0:o.acceleration,threshold:typeof((i=this.options)==null?void 0:i.threshold)=="number"?{x:this.options.threshold,y:this.options.threshold}:(a=this.options)==null?void 0:a.threshold};if(n.scroll(void 0,c)){n.autoScrolling=!0;const u=setInterval(()=>rx.schedule(()=>n.scroll(void 0,c)),nx);return()=>{clearInterval(u)}}else n.autoScrolling=!1}})}};Rs.configure=Mo(Rs);var sc=Rs,Pu={capture:!0,passive:!0},Jn,ox=class extends To{constructor(e){super(e),Te(this,Jn),this.handleScroll=()=>{ye(this,Jn)==null&&nt(this,Jn,setTimeout(()=>{this.manager.collisionObserver.forceUpdate(!1),nt(this,Jn,void 0)},50))};const{dragOperation:t}=this.manager;this.destroy=ct(()=>{var r,n,o;if(t.status.dragging){const a=(o=(n=(r=t.source)==null?void 0:r.element)==null?void 0:n.ownerDocument)!=null?o:document;return a.addEventListener("scroll",this.handleScroll,Pu),()=>{a.removeEventListener("scroll",this.handleScroll,Pu)}}})}};Jn=new WeakMap;var ix="* { user-select: none !important; -webkit-user-select: none !important; }",ax=class extends Ye{constructor(e){super(e),this.manager=e;const t=e.registry.plugins.get(la),r=t?.register(ix);if(this.destroy=ct(()=>{const{dragOperation:n}=this.manager;if(n.status.initialized)return Pa(),document.addEventListener("selectionchange",Pa,{capture:!0}),()=>{document.removeEventListener("selectionchange",Pa,{capture:!0})}}),r){const n=this.destroy.bind(this);this.destroy=()=>{r(),n()}}}};function Pa(){var e;(e=document.getSelection())==null||e.removeAllRanges()}var Qn=Object.freeze({offset:10,keyboardCodes:{start:["Space","Enter"],cancel:["Escape"],end:["Space","Enter","Tab"],up:["ArrowUp"],down:["ArrowDown"],left:["ArrowLeft"],right:["ArrowRight"]},preventActivation(e,t){var r;const n=(r=t.handle)!=null?r:t.element;return e.target!==n}}),rn,Hi=class extends pn{constructor(t,r){super(t),this.manager=t,this.options=r,Te(this,rn,[]),this.listeners=new Ff,this.handleSourceKeyDown=(n,o,i)=>{if(this.disabled||n.defaultPrevented||!hr(n.target)||o.disabled)return;const{keyboardCodes:a=Qn.keyboardCodes,preventActivation:s=Qn.preventActivation}=i??{};a.start.includes(n.code)&&this.manager.dragOperation.status.idle&&(s?.(n,o)||this.handleStart(n,o,i))}}bind(t,r=this.options){return ct(()=>{var o;const i=(o=t.handle)!=null?o:t.element,a=s=>{xo(s)&&this.handleSourceKeyDown(s,t,r)};if(i)return i.addEventListener("keydown",a),()=>{i.removeEventListener("keydown",a)}})}handleStart(t,r,n){const{element:o}=r;if(!o)throw new Error("Source draggable does not have an associated element");t.preventDefault(),t.stopImmediatePropagation(),Vf(o);const{center:i}=new kt(o);if(this.manager.actions.start({event:t,coordinates:{x:i.x,y:i.y},source:r}).signal.aborted)return this.cleanup();this.sideEffects();const s=Cn(o),l=[this.listeners.bind(s,[{type:"keydown",listener:c=>this.handleKeyDown(c,r,n),options:{capture:!0}}])];ye(this,rn).push(...l)}handleKeyDown(t,r,n){const{keyboardCodes:o=Qn.keyboardCodes}=n??{};if(Zr(t,[...o.end,...o.cancel])){t.preventDefault();const i=Zr(t,o.cancel);this.handleEnd(t,i);return}Zr(t,o.up)?this.handleMove("up",t):Zr(t,o.down)&&this.handleMove("down",t),Zr(t,o.left)?this.handleMove("left",t):Zr(t,o.right)&&this.handleMove("right",t)}handleEnd(t,r){this.manager.actions.stop({event:t,canceled:r}),this.cleanup()}handleMove(t,r){var n,o;const{shape:i}=this.manager.dragOperation,a=r.shiftKey?5:1;let s={x:0,y:0},l=(o=(n=this.options)==null?void 0:n.offset)!=null?o:Qn.offset;if(typeof l=="number"&&(l={x:l,y:l}),!!i){switch(t){case"up":s={x:0,y:-l.y*a};break;case"down":s={x:0,y:l.y*a};break;case"left":s={x:-l.x*a,y:0};break;case"right":s={x:l.x*a,y:0};break}(s.x||s.y)&&(r.preventDefault(),this.manager.actions.move({event:r,by:s}))}}sideEffects(){const t=this.manager.registry.plugins.get(sc);t?.disabled===!1&&(t.disable(),ye(this,rn).push(()=>{t.enable()}))}cleanup(){ye(this,rn).forEach(t=>t()),nt(this,rn,[])}destroy(){this.cleanup(),this.listeners.clear()}};rn=new WeakMap;Hi.configure=Mo(Hi);Hi.defaults=Qn;var sx=Hi;function Zr(e,t){return t.includes(e.code)}var Ir,lx=class extends kf{constructor(){super(...arguments),Te(this,Ir)}onEvent(e){switch(e.type){case"pointerdown":nt(this,Ir,fn(e));break;case"pointermove":if(!ye(this,Ir))return;const{x:t,y:r}=fn(e),n={x:t-ye(this,Ir).x,y:r-ye(this,Ir).y},{tolerance:o}=this.options;if(o&&bs(n,o)){this.abort();return}bs(n,this.options.value)&&this.activate(e);break;case"pointerup":this.abort();break}}abort(){nt(this,Ir,void 0)}};Ir=new WeakMap;var nn,Er,cx=class extends kf{constructor(){super(...arguments),Te(this,nn),Te(this,Er)}onEvent(e){switch(e.type){case"pointerdown":nt(this,Er,fn(e)),nt(this,nn,setTimeout(()=>this.activate(e),this.options.value));break;case"pointermove":if(!ye(this,Er))return;const{x:t,y:r}=fn(e),n={x:t-ye(this,Er).x,y:r-ye(this,Er).y};bs(n,this.options.tolerance)&&this.abort();break;case"pointerup":this.abort();break}}abort(){ye(this,nn)&&(clearTimeout(ye(this,nn)),nt(this,Er,void 0),nt(this,nn,void 0))}};nn=new WeakMap;Er=new WeakMap;var Zt=class{};Zt.Delay=cx;Zt.Distance=lx;var Fs=Object.freeze({activationConstraints(e,t){var r;const{pointerType:n,target:o}=e;if(!(n==="mouse"&&hr(o)&&(t.handle===o||(r=t.handle)!=null&&r.contains(o))))return n==="touch"?[new Zt.Delay({value:250,tolerance:5})]:mk(o)&&!e.defaultPrevented?[new Zt.Delay({value:200,tolerance:0})]:[new Zt.Delay({value:200,tolerance:10}),new Zt.Distance({value:5})]},preventActivation(e,t){var r;const{target:n}=e;return n===t.element||n===t.handle||!hr(n)||(r=t.handle)!=null&&r.contains(n)?!1:Fb(n)}}),on,Wi=class extends pn{constructor(t,r){super(t),this.manager=t,this.options=r,Te(this,on,new Set),this.listeners=new Ff,this.latest={event:void 0,coordinates:void 0},this.handleMove=()=>{const{event:n,coordinates:o}=this.latest;!n||!o||this.manager.actions.move({event:n,to:o})},this.handleCancel=this.handleCancel.bind(this),this.handlePointerUp=this.handlePointerUp.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this)}activationConstraints(t,r,n=this.options){const{activationConstraints:o=Fs.activationConstraints}=n??{};return typeof o=="function"?o(t,r):o}bind(t,r=this.options){return ct(()=>{var o;const i=new AbortController,{signal:a}=i,s=c=>{gk(c)&&this.handlePointerDown(c,t,r)};let l=[(o=t.handle)!=null?o:t.element];r?.activatorElements&&(Array.isArray(r.activatorElements)?l=r.activatorElements:l=r.activatorElements(t));for(const c of l)c&&(px(c.ownerDocument.defaultView),c.addEventListener("pointerdown",s,{signal:a}));return()=>i.abort()})}handlePointerDown(t,r,n){if(this.disabled||!t.isPrimary||t.button!==0||!hr(t.target)||r.disabled||ux(t)||!this.manager.dragOperation.status.idle)return;const{preventActivation:o=Fs.preventActivation}=n??{};if(o?.(t,r))return;const{target:i}=t,a=fr(i)&&i.draggable&&i.getAttribute("draggable")==="true",s=vn(r.element),{x:l,y:c}=fn(t);this.initialCoordinates={x:l*s.scaleX+s.x,y:c*s.scaleY+s.y};const d=this.activationConstraints(t,r,n);t.sensor=this;const u=new jb(d,m=>this.handleStart(r,m));u.signal.onabort=()=>this.handleCancel(t),u.onEvent(t),this.controller=u;const f=Ss(),v=this.listeners.bind(f,[{type:"pointermove",listener:m=>this.handlePointerMove(m,r)},{type:"pointerup",listener:this.handlePointerUp,options:{capture:!0}},{type:"pointercancel",listener:this.handleCancel},{type:"dragstart",listener:a?this.handleCancel:ri,options:{capture:!0}}]),h=()=>{v(),this.initialCoordinates=void 0};ye(this,on).add(h)}handlePointerMove(t,r){var n,o;if(((n=this.controller)==null?void 0:n.activated)===!1){(o=this.controller)==null||o.onEvent(t);return}if(this.manager.dragOperation.status.dragging){const i=fn(t),a=vn(r.element);i.x=i.x*a.scaleX+a.x,i.y=i.y*a.scaleY+a.y,t.preventDefault(),t.stopPropagation(),this.latest.event=t,this.latest.coordinates=i,Ri.schedule(this.handleMove)}}handlePointerUp(t){const{status:r}=this.manager.dragOperation;if(!r.idle){t.preventDefault(),t.stopPropagation();const n=!r.initialized;this.manager.actions.stop({event:t,canceled:n})}this.cleanup()}handleKeyDown(t){t.key==="Escape"&&(t.preventDefault(),this.handleCancel(t))}handleStart(t,r){const{manager:n,initialCoordinates:o}=this;if(!o||!n.dragOperation.status.idle||r.defaultPrevented)return;if(n.actions.start({coordinates:o,event:r,source:t}).signal.aborted)return this.cleanup();r.preventDefault();const s=Cn(r.target).body;try{s.setPointerCapture(r.pointerId)}catch{this.handleCancel(r);return}const l=hr(r.target)?[r.target,s]:s,c=this.listeners.bind(l,[{type:"touchmove",listener:ri,options:{passive:!1}},{type:"click",listener:ri},{type:"contextmenu",listener:ri},{type:"keydown",listener:this.handleKeyDown}]);ye(this,on).add(c)}handleCancel(t){const{dragOperation:r}=this.manager;r.status.initialized&&this.manager.actions.stop({event:t,canceled:!0}),this.cleanup()}cleanup(){const{controller:t}=this;this.controller=void 0,t&&!t.signal.aborted&&t.abort(),this.latest={event:void 0,coordinates:void 0},ye(this,on).forEach(r=>r()),ye(this,on).clear()}destroy(){this.cleanup(),this.listeners.clear()}};on=new WeakMap;Wi.configure=Mo(Wi);Wi.defaults=Fs;var gh=Wi;function ux(e){return"sensor"in e}function ri(e){e.preventDefault()}function dx(){}var Du=new WeakSet;function px(e){!e||Du.has(e)||(e.addEventListener("touchmove",dx,{capture:!1,passive:!1}),Du.add(e))}var dr={modifiers:[],plugins:[Lk,sc,Fk,Ro,ax],sensors:[gh,sx]},mh=class extends Db{constructor(e={}){const t=jt(e.plugins,dr.plugins),r=jt(e.sensors,dr.sensors),n=jt(e.modifiers,dr.modifiers);super(ec(wo({},e),{plugins:[ox,Fo,la,...t],sensors:r,modifiers:n}))}},_h,yh,Bs,lr,lc,cc,Bo=class extends(Bs=Bt,yh=[de],_h=[de],Bs){constructor(e,t){var r=e,{element:n,effects:o=()=>[],handle:i}=r,a=Gf(r,["element","effects","handle"]);super(wo({effects:()=>[...o(),()=>{var s,l;const{manager:c}=this;if(!c)return;const u=((l=(s=this.sensors)==null?void 0:s.map(yo))!=null?l:[...c.sensors]).map(f=>{const v=f instanceof pn?f:c.registry.register(f.plugin),h=f instanceof pn?void 0:f.options;return v.bind(this,h)});return function(){u.forEach(v=>v())}}]},a),t),Te(this,lc,Be(lr,8,this)),Be(lr,11,this),Te(this,cc,Be(lr,12,this)),Be(lr,15,this),this.element=n,this.handle=i}};lr=jn(Bs);lc=new WeakMap;cc=new WeakMap;wt(lr,4,"handle",yh,Bo,lc);wt(lr,4,"element",_h,Bo,cc);Br(lr,Bo);var bh,kh,Ns,cr,uc,Da,xh,wh,uo,dc,ca=class extends(Ns=Nt,kh=[de],bh=[de],Ns){constructor(e,t){var r=e,{element:n,effects:o=()=>[]}=r,i=Gf(r,["element","effects"]);const{collisionDetector:a=Uf}=i,s=c=>{const{manager:d,element:u}=this;if(!u||c===null){this.shape=void 0;return}if(!d)return;const f=new kt(u),v=ue(()=>this.shape);return f&&v?.equals(f)?v:(this.shape=f,f)},l=kn(!1);super(ec(wo({},i),{collisionDetector:a,effects:()=>[...o(),()=>{const{element:c,manager:d}=this;if(!d)return;const{dragOperation:u}=d,{source:f}=u;l.value=!!(f&&u.status.initialized&&c&&!this.disabled&&this.accepts(f))},()=>{const{element:c}=this;if(l.value&&c){const d=new Yb(c,s);return()=>{d.disconnect(),this.shape=void 0}}},()=>{var c;if((c=this.manager)!=null&&c.dragOperation.status.initialized)return()=>{this.shape=void 0}}]}),t),Te(this,uo),Te(this,uc,Be(cr,8,this)),Be(cr,11,this),Te(this,dc,Be(cr,12,this)),Be(cr,15,this),this.element=n,this.refreshShape=()=>s()}set element(e){nt(this,uo,e,wh)}get element(){var e;return(e=this.proxy)!=null?e:ye(this,uo,xh)}};cr=jn(Ns);uc=new WeakMap;uo=new WeakSet;dc=new WeakMap;Da=wt(cr,20,"#element",kh,uo,uc),xh=Da.get,wh=Da.set;wt(cr,4,"proxy",bh,ca,dc);Br(cr,ca);function fx(e){return e!=null&&typeof e=="object"&&"current"in e}function pr(e){var t;if(e!=null)return fx(e)?(t=e.current)!=null?t:void 0:e}var hx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",An=hx?y.useLayoutEffect:y.useEffect;function vx(){const e=y.useState(0)[1];return y.useCallback(()=>{e(t=>t+1)},[e])}function pc(e,t){const r=y.useRef(new Map),n=vx();return An(()=>{if(!e){r.current.clear();return}return ct(()=>{var o;let i=!1,a=!1;for(const s of r.current){const[l]=s,c=ue(()=>s[1]),d=e[l];c!==d&&(i=!0,r.current.set(l,d),a=(o=t?.(l,c,d))!=null?o:!1)}i&&(a?queueMicrotask(()=>Ao.flushSync(n)):n())})},[e]),y.useMemo(()=>e&&new Proxy(e,{get(o,i){const a=o[i];return r.current.set(i,a),a}}),[e])}function gx(e,t){e()}function Ur(e){const t=y.useRef(e);return An(()=>{t.current=e},[e]),t}function he(e,t,r=y.useEffect,n=Object.is){const o=y.useRef(e);r(()=>{const i=o.current;n(e,i)||(o.current=e,t(e,i))},[t,e])}function dn(e,t){const r=y.useRef(pr(e));An(()=>{const n=pr(e);n!==r.current&&(r.current=n,t(n))})}var mx=Object.defineProperty,_x=Object.defineProperties,yx=Object.getOwnPropertyDescriptors,qi=Object.getOwnPropertySymbols,Sh=Object.prototype.hasOwnProperty,Ih=Object.prototype.propertyIsEnumerable,Mu=(e,t,r)=>t in e?mx(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Eh=(e,t)=>{for(var r in t||(t={}))Sh.call(t,r)&&Mu(e,r,t[r]);if(qi)for(var r of qi(t))Ih.call(t,r)&&Mu(e,r,t[r]);return e},Ch=(e,t)=>_x(e,yx(t)),bx=(e,t)=>{var r={};for(var n in e)Sh.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&qi)for(var n of qi(e))t.indexOf(n)<0&&Ih.call(e,n)&&(r[n]=e[n]);return r},kx=new mh,zh=y.createContext(kx),xx=y.memo(y.forwardRef(({children:e},t)=>{const[r,n]=y.useState(0),o=y.useRef(null),i=y.useRef(null),a=y.useMemo(()=>({renderer:{get rendering(){var s;return(s=o.current)!=null?s:Promise.resolve()}},trackRendering(s){o.current||(o.current=new Promise(l=>{i.current=l})),y.startTransition(()=>{s(),n(l=>l+1)})}}),[]);return An(()=>{var s;(s=i.current)==null||s.call(i),o.current=null},[e,r]),y.useImperativeHandle(t,()=>a),null})),Ma=[void 0,zt];function fc(e){var t=e,{children:r,onCollision:n,onBeforeDragStart:o,onDragStart:i,onDragMove:a,onDragOver:s,onDragEnd:l}=t,c=bx(t,["children","onCollision","onBeforeDragStart","onDragStart","onDragMove","onDragOver","onDragEnd"]);const d=y.useRef(null),{plugins:u,modifiers:f,sensors:v}=c,h=jt(u,dr.plugins),m=jt(v,dr.sensors),b=jt(f,dr.modifiers),S=Ur(o),x=Ur(i),_=Ur(s),g=Ur(a),j=Ur(l),w=Ur(n),A=wx(()=>{var E;return(E=c.manager)!=null?E:new mh(c)});return y.useEffect(()=>{if(!d.current)throw new Error("Renderer not found");const{renderer:E,trackRendering:I}=d.current,{monitor:k}=A;A.renderer=E;const P=[k.addEventListener("beforedragstart",T=>{const F=S.current;F&&I(()=>F(T,A))}),k.addEventListener("dragstart",T=>{var F;return(F=x.current)==null?void 0:F.call(x,T,A)}),k.addEventListener("dragover",T=>{const F=_.current;F&&I(()=>F(T,A))}),k.addEventListener("dragmove",T=>{const F=g.current;F&&I(()=>F(T,A))}),k.addEventListener("dragend",T=>{const F=j.current;F&&I(()=>F(T,A))}),k.addEventListener("collision",T=>{var F;return(F=w.current)==null?void 0:F.call(w,T,A)})];return()=>P.forEach(T=>T())},[A]),he(h,()=>A&&(A.plugins=h),...Ma),he(m,()=>A&&(A.sensors=m),...Ma),he(b,()=>A&&(A.modifiers=b),...Ma),p.jsxs(zh.Provider,{value:A,children:[p.jsx(xx,{ref:d,children:r}),r]})}function wx(e){const t=y.useRef(null);return t.current||(t.current=e()),y.useInsertionEffect(()=>()=>{var r;return(r=t.current)==null?void 0:r.destroy()},[]),t.current}function jh(){return y.useContext(zh)}function hc(e){var t;const r=(t=jh())!=null?t:void 0,[n]=y.useState(()=>e(r));return n.manager!==r&&(n.manager=r),An(n.register,[r,n]),n}function Sx(e){const{disabled:t,data:r,element:n,handle:o,id:i,modifiers:a,sensors:s,plugins:l}=e,c=hc(u=>new Bo(Ch(Eh({},e),{register:!1,handle:pr(o),element:pr(n)}),u)),d=pc(c,Ix);return he(i,()=>c.id=i),dn(o,u=>c.handle=u),dn(n,u=>c.element=u),he(r,()=>r&&(c.data=r)),he(t,()=>c.disabled=t===!0),he(s,()=>c.sensors=s),he(a,()=>c.modifiers=a,void 0,zt),he(l,()=>c.plugins=l,void 0,zt),he(e.alignment,()=>c.alignment=e.alignment),{draggable:d,get isDragging(){return d.isDragging},get isDropping(){return d.isDropping},get isDragSource(){return d.isDragSource},handleRef:y.useCallback(u=>{c.handle=u??void 0},[c]),ref:y.useCallback(u=>{var f,v;!u&&((f=c.element)!=null&&f.isConnected)&&!((v=c.manager)!=null&&v.dragOperation.status.idle)||(c.element=u??void 0)},[c])}}function Ix(e,t,r){return!!(e==="isDragSource"&&!r&&t)}var Ex=Object.create,Ah=Object.defineProperty,Cx=Object.getOwnPropertyDescriptor,Ph=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),ua=e=>{throw TypeError(e)},zx=(e,t,r)=>t in e?Ah(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,jx=e=>{var t;return[,,,Ex((t=e?.[Ph("metadata")])!=null?t:null)]},Dh=["class","method","getter","setter","accessor","field","value","get","set"],Mh=e=>e!==void 0&&typeof e!="function"?ua("Function expected"):e,Ax=(e,t,r,n,o)=>({kind:Dh[e],name:t,metadata:n,addInitializer:i=>r._?ua("Already initialized"):o.push(Mh(i||null))}),Px=(e,t)=>zx(t,Ph("metadata"),e[3]),Dx=(e,t,r,n)=>{for(var o=0,i=e[t>>1],a=i&&i.length;o<a;o++)i[o].call(r);return n},Th=(e,t,r,n,o,i)=>{for(var a,s,l,c,d=t&7,u=!1,f=!1,v=2,h=Dh[d+5],m=e[v]||(e[v]=[]),b=(o=o.prototype,Cx(o,r)),S=n.length-1;S>=0;S--)l=Ax(d,r,s={},e[3],m),l.static=u,l.private=f,c=l.access={has:x=>r in x},c.get=x=>x[r],a=(0,n[S])(b[h],l),s._=1,Mh(a)&&(b[h]=a);return b&&Ah(o,r,b),o},Oh=(e,t,r)=>t.has(e)||ua("Cannot "+r),Mx=(e,t,r)=>(Oh(e,t,"read from private field"),t.get(e)),Tx=(e,t,r)=>t.has(e)?ua("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),Ox=(e,t,r,n)=>(Oh(e,t,"write to private field"),t.set(e,r),r),zr=class $s{constructor(t,r){this.x=t,this.y=r}static delta(t,r){return new $s(t.x-r.x,t.y-r.y)}static distance(t,r){return Math.hypot(t.x-r.x,t.y-r.y)}static equals(t,r){return t.x===r.x&&t.y===r.y}static from({x:t,y:r}){return new $s(t,r)}},Lh,Rh,Hs,Ii,No,vc=class extends(Hs=Rr,Rh=[Me],Lh=[Me],Hs){constructor(e){const t=zr.from(e);super(t,(r,n)=>zr.equals(r,n)),Dx(No,5,this),Tx(this,Ii,0),this.velocity={x:0,y:0}}get delta(){return zr.delta(this.current,this.initial)}get direction(){const{current:e,previous:t}=this;if(!t)return null;const r={x:e.x-t.x,y:e.y-t.y};return!r.x&&!r.y?null:Math.abs(r.x)>Math.abs(r.y)?r.x>0?"right":"left":r.y>0?"down":"up"}get current(){return super.current}set current(e){const{current:t}=this,r=zr.from(e),n={x:r.x-t.x,y:r.y-t.y},o=Date.now(),i=o-Mx(this,Ii),a=s=>Math.round(s/i*100);Ae(()=>{Ox(this,Ii,o),this.velocity={x:a(n.x),y:a(n.y)},super.current=r})}reset(e=this.defaultValue){super.reset(zr.from(e)),this.velocity={x:0,y:0}}};No=jx(Hs);Ii=new WeakMap;Th(No,2,"delta",Rh,vc);Th(No,2,"direction",Lh,vc);Px(No,vc);var Fh=(e=>(e.Horizontal="x",e.Vertical="y",e))(Fh||{});Object.values(Fh);var Lx=({dragOperation:e,droppable:t})=>{const r=e.position.current;if(!r)return null;const{id:n}=t;if(!t.shape)return null;if(t.shape.containsPoint(r)){const o=zr.distance(t.shape.center,r);return{id:n,value:1/o,type:$t.PointerIntersection,priority:_t.High}}return null},Rx=({dragOperation:e,droppable:t})=>{const{shape:r}=e;if(!t.shape||!r?.current)return null;const n=r.current.intersectionArea(t.shape);if(n){const{position:o}=e,i=zr.distance(t.shape.center,o.current),s=n/(r.current.area+t.shape.area-n)/i;return{id:t.id,value:s,type:$t.ShapeIntersection,priority:_t.Normal}}return null},Fx=e=>{var t;return(t=Lx(e))!=null?t:Rx(e)};function gc(e){const{collisionDetector:t,data:r,disabled:n,element:o,id:i,accept:a,type:s}=e,l=hc(d=>new ca(Ch(Eh({},e),{register:!1,element:pr(o)}),d)),c=pc(l);return he(i,()=>l.id=i),dn(o,d=>l.element=d),he(a,()=>l.accept=a,void 0,zt),he(t,()=>l.collisionDetector=t??Fx),he(r,()=>r&&(l.data=r)),he(n,()=>l.disabled=n===!0),he(s,()=>l.type=s),{droppable:c,get isDropTarget(){return c.isDropTarget},ref:y.useCallback(d=>{var u,f;!d&&((u=l.element)!=null&&u.isConnected)&&!((f=l.manager)!=null&&f.dragOperation.status.idle)||(l.element=d??void 0)},[l])}}var Bx=Object.create,Bh=Object.defineProperty,Nx=Object.defineProperties,$x=Object.getOwnPropertyDescriptor,Hx=Object.getOwnPropertyDescriptors,Vi=Object.getOwnPropertySymbols,Nh=Object.prototype.hasOwnProperty,$h=Object.prototype.propertyIsEnumerable,Wx=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),$o=e=>{throw TypeError(e)},Ws=(e,t,r)=>t in e?Bh(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Tu=(e,t)=>{for(var r in t||(t={}))Nh.call(t,r)&&Ws(e,r,t[r]);if(Vi)for(var r of Vi(t))$h.call(t,r)&&Ws(e,r,t[r]);return e},Ou=(e,t)=>Nx(e,Hx(t)),qx=(e,t)=>{var r={};for(var n in e)Nh.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&Vi)for(var n of Vi(e))t.indexOf(n)<0&&$h.call(e,n)&&(r[n]=e[n]);return r},Vx=e=>{var t;return[,,,Bx((t=void 0)!=null?t:null)]},Hh=["class","method","getter","setter","accessor","field","value","get","set"],eo=e=>e!==void 0&&typeof e!="function"?$o("Function expected"):e,Zx=(e,t,r,n,o)=>({kind:Hh[e],name:t,metadata:n,addInitializer:i=>r._?$o("Already initialized"):o.push(eo(i||null))}),Ux=(e,t)=>Ws(t,Wx("metadata"),e[3]),ni=(e,t,r,n)=>{for(var o=0,i=e[t>>1],a=i&&i.length;o<a;o++)t&1?i[o].call(r):n=i[o].call(r,n);return n},Wh=(e,t,r,n,o,i)=>{for(var a,s,l,c,d,u=t&7,f=!1,v=!1,h=e.length+1,m=Hh[u+5],b=e[h-1]=[],S=e[h]||(e[h]=[]),x=(o=o.prototype,$x({get[r](){return to(this,i)},set[r](g){return Cr(this,i,g)}},r)),_=n.length-1;_>=0;_--)c=Zx(u,r,l={},e[3],S),c.static=f,c.private=v,d=c.access={has:g=>r in g},d.get=g=>g[r],d.set=(g,j)=>g[r]=j,s=(0,n[_])({get:x.get,set:x.set},c),l._=1,s===void 0?eo(s)&&(x[m]=s):typeof s!="object"||s===null?$o("Object expected"):(eo(a=s.get)&&(x.get=a),eo(a=s.set)&&(x.set=a),eo(a=s.init)&&b.unshift(a));return x&&Bh(o,r,x),o},qh=(e,t,r)=>t.has(e)||$o("Cannot "+r),to=(e,t,r)=>(qh(e,t,"read from private field"),t.get(e)),Fn=(e,t,r)=>t.has(e)?$o("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),Cr=(e,t,r,n)=>(qh(e,t,"write to private field"),t.set(e,r),r);function jr(e){return e instanceof yc||e instanceof Yh}var oi=10,Yx=class extends Ye{constructor(e){super(e);const t=ct(()=>{const{dragOperation:n}=e;if(xo(n.activatorEvent)&&jr(n.source)&&n.status.initialized){const o=e.registry.plugins.get(Fo);if(o)return o.disable(),()=>o.enable()}}),r=e.monitor.addEventListener("dragmove",(n,o)=>{queueMicrotask(()=>{if(this.disabled||n.defaultPrevented||!n.nativeEvent)return;const{dragOperation:i}=o;if(!xo(n.nativeEvent)||!jr(i.source)||!i.shape)return;const{actions:a,collisionObserver:s,registry:l}=o,{by:c}=n;if(!c)return;const d=Kx(c),{source:u,target:f}=i,{center:v}=i.shape.current,h=[],m=[];Ae(()=>{for(const j of l.droppables){const{id:w}=j;if(!j.accepts(u)||w===f?.id&&jr(j)||!j.element)continue;let A=j.shape;const E=new kt(j.element,{getBoundingClientRect:I=>ko(I,void 0,.2)});!E.height||!E.width||(d=="down"&&v.y+oi<E.center.y||d=="up"&&v.y-oi>E.center.y||d=="left"&&v.x-oi>E.center.x||d=="right"&&v.x+oi<E.center.x)&&(h.push(j),j.shape=E,m.push(()=>j.shape=A))}}),n.preventDefault(),s.disable();const b=s.computeCollisions(h,kk);Ae(()=>m.forEach(j=>j()));const[S]=b;if(!S)return;const{id:x}=S,{index:_,group:g}=u.sortable;a.setDropTarget(x).then(()=>{const{source:j,target:w,shape:A}=i;if(!j||!jr(j)||!A)return;const{index:E,group:I,target:k}=j.sortable,P=_!==E||g!==I,T=P?k:w?.element;if(!T)return;Vf(T);const F=new kt(T);if(!F)return;const H=xt.delta(F,xt.from(A.current.boundingRectangle),j.alignment);a.move({by:H}),P?a.setDropTarget(j.id).then(()=>s.enable()):s.enable()})})});this.destroy=()=>{r(),t()}}};function Kx(e){const{x:t,y:r}=e;if(t>0)return"right";if(t<0)return"left";if(r>0)return"down";if(r<0)return"up"}var Xx=Object.defineProperty,Gx=Object.defineProperties,Jx=Object.getOwnPropertyDescriptors,Lu=Object.getOwnPropertySymbols,Qx=Object.prototype.hasOwnProperty,e1=Object.prototype.propertyIsEnumerable,Ru=(e,t,r)=>t in e?Xx(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Yr=(e,t)=>{for(var r in t||(t={}))Qx.call(t,r)&&Ru(e,r,t[r]);if(Lu)for(var r of Lu(t))e1.call(t,r)&&Ru(e,r,t[r]);return e},Kr=(e,t)=>Gx(e,Jx(t));function t1(e,t,r){if(t===r)return e;const n=e.slice();return n.splice(r,0,n.splice(t,1)[0]),n}function Ta(e){return"initialIndex"in e&&typeof e.initialIndex=="number"&&"index"in e&&typeof e.index=="number"}function r1(e,t,r){var n,o,i;const{source:a,target:s,canceled:l}=t.operation;if(!a||!s||l)return"preventDefault"in t&&t.preventDefault(),e;const c=(g,j)=>g===j||typeof g=="object"&&"id"in g&&g.id===j;if(Array.isArray(e)){const g=e.findIndex(w=>c(w,a.id)),j=e.findIndex(w=>c(w,s.id));if(g===-1||j===-1){if(Ta(a)){const w=a.initialIndex,A=a.index;return w===A||w<0||w>=e.length?("preventDefault"in t&&t.preventDefault(),e):r(e,w,A)}return e}if(!l&&"index"in a&&typeof a.index=="number"){const w=a.index;if(w!==g)return r(e,g,w)}return r(e,g,j)}const d=Object.entries(e);let u=-1,f,v=-1,h;for(const[g,j]of d)if(u===-1&&(u=j.findIndex(w=>c(w,a.id)),u!==-1&&(f=g)),v===-1&&(v=j.findIndex(w=>c(w,s.id)),v!==-1&&(h=g)),u!==-1&&v!==-1)break;if(u===-1&&Ta(a)){const g=a.initialGroup,j=a.initialIndex,w=a.group,A=a.index;if(g==null||w==null||!(g in e)||!(w in e)||g===w&&j===A)return"preventDefault"in t&&t.preventDefault(),e;if(g===w)return Kr(Yr({},e),{[g]:r(e[g],j,A)});const E=e[g][j];return Kr(Yr({},e),{[g]:[...e[g].slice(0,j),...e[g].slice(j+1)],[w]:[...e[w].slice(0,A),E,...e[w].slice(A)]})}if(!a.manager)return e;const{dragOperation:m}=a.manager,b=(o=(n=m.shape)==null?void 0:n.current.center)!=null?o:m.position.current;if(h==null&&s.id in e){const g=s.shape&&b.y>s.shape.center.y?e[s.id].length:0;h=s.id,v=g}if(f==null||h==null||f===h&&u===v){if(f!=null&&f===h&&u===v&&Ta(a)){const g=a.group!=null&&a.group!==f,j=a.index!==u;if(g||j){const w=(i=a.group)!=null?i:f;if(w in e){if(f===w)return Kr(Yr({},e),{[f]:r(e[f],u,a.index)});const A=e[f][u];return Kr(Yr({},e),{[f]:[...e[f].slice(0,u),...e[f].slice(u+1)],[w]:[...e[w].slice(0,a.index),A,...e[w].slice(a.index)]})}}}return"preventDefault"in t&&t.preventDefault(),e}if(f===h)return Kr(Yr({},e),{[f]:r(e[f],u,v)});const x=s.shape&&Math.round(b.y)>Math.round(s.shape.center.y)?1:0,_=e[f][u];return Kr(Yr({},e),{[f]:[...e[f].slice(0,u),...e[f].slice(u+1)],[h]:[...e[h].slice(0,v+x),_,...e[h].slice(v+x)]})}function n1(e,t){return r1(e,t,t1)}var Fu="__default__",o1=class extends Ye{constructor(e){super(e);const t=()=>{const n=new Map;for(const o of e.registry.droppables)if(o instanceof yc){const{sortable:i}=o,{group:a}=i;let s=n.get(a);s||(s=new Set,n.set(a,s)),s.add(i)}for(const[o,i]of n)n.set(o,new Set(ii(i)));return n},r=[e.monitor.addEventListener("dragover",(n,o)=>{if(this.disabled)return;const{dragOperation:i}=o,{source:a,target:s}=i;if(!jr(a)||!jr(s)||a.sortable===s.sortable)return;const l=t(),c=a.sortable.group===s.sortable.group,d=l.get(a.sortable.group),u=c?d:l.get(s.sortable.group);!d||!u||queueMicrotask(()=>{n.defaultPrevented||o.renderer.rendering.then(()=>{var f,v,h;const m=t();for(const[k,P]of l.entries()){const T=Array.from(P).entries();for(const[F,H]of T)if(H.index!==F||H.group!==k||!((f=m.get(k))!=null&&f.has(H)))return}const b=a.sortable.element,S=s.sortable.element;if(!S||!b||!c&&s.id===a.sortable.group)return;const x=ii(d),_=c?x:ii(u),g=(v=a.sortable.group)!=null?v:Fu,j=(h=s.sortable.group)!=null?h:Fu,w={[g]:x,[j]:_},A=n1(w,n);if(w===A)return;const E=A[j].indexOf(a.sortable),I=A[j].indexOf(s.sortable);o.collisionObserver.disable(),Bu(b,E,S,I),Ae(()=>{for(const[k,P]of A[g].entries())P.index=k;if(!c)for(const[k,P]of A[j].entries())P.group=s.sortable.group,P.index=k}),o.actions.setDropTarget(a.id).then(()=>o.collisionObserver.enable())})})}),e.monitor.addEventListener("dragend",(n,o)=>{if(!n.canceled)return;const{dragOperation:i}=o,{source:a}=i;jr(a)&&(a.sortable.initialIndex===a.sortable.index&&a.sortable.initialGroup===a.sortable.group||queueMicrotask(()=>{const s=t(),l=s.get(a.sortable.initialGroup);l&&o.renderer.rendering.then(()=>{for(const[v,h]of s.entries()){const m=Array.from(h).entries();for(const[b,S]of m)if(S.index!==b||S.group!==v)return}const c=ii(l),d=a.sortable.element,u=c[a.sortable.initialIndex],f=u?.element;!u||!f||!d||(Bu(d,u.index,f,a.index),Ae(()=>{for(const[v,h]of s.entries()){const m=Array.from(h).values();for(const b of m)b.index=b.initialIndex,b.group=b.initialGroup}}))})}))})];this.destroy=()=>{for(const n of r)n()}}};function Bu(e,t,r,n){const o=n<t?"afterend":"beforebegin";r.insertAdjacentElement(o,e)}function i1(e,t){return e.index-t.index}function ii(e){return Array.from(e).sort(i1)}var Nu=[Yx,o1],Vh={duration:250,easing:"cubic-bezier(0.25, 1, 0.5, 1)",idle:!1},ai=new nb,Zh,Uh,ur,mc,ro,no,_c,an;Uh=[de],Zh=[de];var da=class{constructor(e,t){Fn(this,mc,ni(ur,8,this)),ni(ur,11,this),Fn(this,ro),Fn(this,no),Fn(this,_c,ni(ur,12,this)),ni(ur,15,this),Fn(this,an),this.register=()=>(Ae(()=>{var f,v;(f=this.manager)==null||f.registry.register(this.droppable),(v=this.manager)==null||v.registry.register(this.draggable)}),()=>this.unregister()),this.unregister=()=>{Ae(()=>{var f,v;(f=this.manager)==null||f.registry.unregister(this.droppable),(v=this.manager)==null||v.registry.unregister(this.draggable)})},this.destroy=()=>{Ae(()=>{this.droppable.destroy(),this.draggable.destroy()})};var r=e,{effects:n=()=>[],group:o,index:i,sensors:a,type:s,transition:l=Vh,plugins:c}=r,d=qx(r,["effects","group","index","sensors","type","transition","plugins"]);const u=jt(c,Nu);this.droppable=new yc(d,t,this),this.draggable=new Yh(Ou(Tu({},d),{plugins:u,effects:()=>[()=>{var f,v,h;const m=(f=this.manager)==null?void 0:f.dragOperation.status;m?.initializing&&this.id===((h=(v=this.manager)==null?void 0:v.dragOperation.source)==null?void 0:h.id)&&ai.clear(this.manager),m?.dragging&&ai.set(this.manager,this.id,ue(()=>({initialIndex:this.index,initialGroup:this.group})))},()=>{const{index:f,group:v,manager:h}=this,m=to(this,no),b=to(this,ro);(f!==m||v!==b)&&(Cr(this,no,f),Cr(this,ro,v),this.animate())},()=>{var f,v;const{target:h}=this,{isDragSource:m}=this.draggable;((v=(f=this.draggable.pluginConfig(Ro))==null?void 0:f.feedback)!=null?v:"default")==="move"&&m&&(this.droppable.disabled=!h)},...n()],type:s,sensors:a}),t,this),Cr(this,an,d.element),this.manager=t,this.index=i,Cr(this,no,i),this.group=o,Cr(this,ro,o),this.type=s,this.transition=l}get initialIndex(){var e,t;return(t=(e=ai.get(this.manager,this.id))==null?void 0:e.initialIndex)!=null?t:this.index}get initialGroup(){var e,t;return(t=(e=ai.get(this.manager,this.id))==null?void 0:e.initialGroup)!=null?t:this.group}animate(){ue(()=>{const{manager:e,transition:t}=this,{shape:r}=this.droppable;if(!e)return;const{idle:n}=e.dragOperation.status;!r||!t||n&&!t.idle||e.renderer.rendering.then(()=>{const{element:o}=this;if(!o)return;for(const d of o.getAnimations())"transitionProperty"in d&&(d.transitionProperty==="transform"||d.transitionProperty==="translate"||d.transitionProperty==="scale")&&d.cancel();const i=this.refreshShape();if(!i)return;const a={x:r.boundingRectangle.left-i.boundingRectangle.left,y:r.boundingRectangle.top-i.boundingRectangle.top},{translate:s}=Dt(o),l=Su(o,s,!1),c=Su(o,s);if(a.x||a.y){const d=Gl(vt(o))?Ou(Tu({},t),{duration:0}):t;Zf({element:o,keyframes:{translate:[`${l.x+a.x}px ${l.y+a.y}px ${l.z}`,`${c.x}px ${c.y}px ${c.z}`]},options:d}).then(()=>{e.dragOperation.status.dragging||(this.droppable.shape=void 0)})}})})}get manager(){return this.draggable.manager}set manager(e){Ae(()=>{this.draggable.manager=e,this.droppable.manager=e})}set element(e){Ae(()=>{const t=to(this,an),r=this.droppable.element,n=this.draggable.element;(!r||r===t)&&(this.droppable.element=e),(!n||n===t)&&(this.draggable.element=e),Cr(this,an,e)})}get element(){var e,t;const r=to(this,an);if(r)return(t=(e=Is.get(r))!=null?e:r)!=null?t:this.droppable.element}set target(e){this.droppable.element=e}get target(){return this.droppable.element}set source(e){this.draggable.element=e}get source(){return this.draggable.element}get disabled(){return this.draggable.disabled&&this.droppable.disabled}set plugins(e){this.draggable.plugins=jt(e,Nu)}set disabled(e){Ae(()=>{this.droppable.disabled=e,this.draggable.disabled=e})}set data(e){Ae(()=>{this.droppable.data=e,this.draggable.data=e})}set handle(e){this.draggable.handle=e}set id(e){this.droppable.id=e,this.draggable.id=e}get id(){return this.droppable.id}set sensors(e){this.draggable.sensors=e}set modifiers(e){this.draggable.modifiers=e}set collisionPriority(e){this.droppable.collisionPriority=e}set collisionDetector(e){this.droppable.collisionDetector=e??Uf}set alignment(e){this.draggable.alignment=e}get alignment(){return this.draggable.alignment}set type(e){Ae(()=>{this.droppable.type=e,this.draggable.type=e})}get type(){return this.draggable.type}set accept(e){this.droppable.accept=e}get accept(){return this.droppable.accept}get isDropTarget(){return this.droppable.isDropTarget}get isDragSource(){return this.draggable.isDragSource}get isDragging(){return this.draggable.isDragging}get isDropping(){return this.draggable.isDropping}get status(){return this.draggable.status}refreshShape(){return this.droppable.refreshShape()}accepts(e){return this.droppable.accepts(e)}};ur=Vx();mc=new WeakMap;ro=new WeakMap;no=new WeakMap;_c=new WeakMap;an=new WeakMap;Wh(ur,4,"index",Uh,da,mc);Wh(ur,4,"group",Zh,da,_c);Ux(ur,da);var Yh=class extends Bo{constructor(e,t,r){super(e,t),this.sortable=r}get index(){return this.sortable.index}get initialIndex(){return this.sortable.initialIndex}get group(){return this.sortable.group}get initialGroup(){return this.sortable.initialGroup}},yc=class extends ca{constructor(e,t,r){super(e,t),this.sortable=r}get index(){return this.sortable.index}get group(){return this.sortable.group}},a1=Object.defineProperty,s1=Object.defineProperties,l1=Object.getOwnPropertyDescriptors,$u=Object.getOwnPropertySymbols,c1=Object.prototype.hasOwnProperty,u1=Object.prototype.propertyIsEnumerable,Hu=(e,t,r)=>t in e?a1(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Oa=(e,t)=>{for(var r in t||(t={}))c1.call(t,r)&&Hu(e,r,t[r]);if($u)for(var r of $u(t))u1.call(t,r)&&Hu(e,r,t[r]);return e},d1=(e,t)=>s1(e,l1(t));function bc(e){const{accept:t,collisionDetector:r,collisionPriority:n,id:o,data:i,element:a,handle:s,index:l,group:c,disabled:d,modifiers:u,sensors:f,target:v,type:h,plugins:m}=e,b=Oa(Oa({},Vh),e.transition),S=hc(_=>new da(d1(Oa({},e),{transition:b,register:!1,handle:pr(s),element:pr(a),target:pr(v)}),_)),x=pc(S,p1);return he(o,()=>S.id=o),An(()=>{Ae(()=>{S.group=c,S.index=l})},[S,c,l]),he(h,()=>S.type=h),he(t,()=>S.accept=t,void 0,zt),he(i,()=>i&&(S.data=i)),he(l,()=>{var _;(_=S.manager)!=null&&_.dragOperation.status.idle&&b?.idle&&S.refreshShape()},gx),dn(s,_=>S.handle=_),dn(a,_=>S.element=_),dn(v,_=>S.target=_),he(d,()=>S.disabled=d===!0),he(f,()=>S.sensors=f),he(r,()=>S.collisionDetector=r),he(n,()=>S.collisionPriority=n),he(m,()=>S.plugins=m,void 0,zt),he(b,()=>S.transition=b,void 0,zt),he(u,()=>S.modifiers=u,void 0,zt),he(e.alignment,()=>S.alignment=e.alignment),{sortable:x,get isDragging(){return x.isDragging},get isDropping(){return x.isDropping},get isDragSource(){return x.isDragSource},get isDropTarget(){return x.isDropTarget},handleRef:y.useCallback(_=>{S.handle=_??void 0},[S]),ref:y.useCallback(_=>{var g,j;!_&&((g=S.element)!=null&&g.isConnected)&&!((j=S.manager)!=null&&j.dragOperation.status.idle)||(S.element=_??void 0)},[S]),sourceRef:y.useCallback(_=>{var g,j;!_&&((g=S.source)!=null&&g.isConnected)&&!((j=S.manager)!=null&&j.dragOperation.status.idle)||(S.source=_??void 0)},[S]),targetRef:y.useCallback(_=>{var g,j;!_&&((g=S.target)!=null&&g.isConnected)&&!((j=S.manager)!=null&&j.dragOperation.status.idle)||(S.target=_??void 0)},[S])}}function p1(e,t,r){return!!(e==="isDragSource"&&!r&&t)}function Kh(e,t,r){var n=this,o=y.useRef(null),i=y.useRef(0),a=y.useRef(null),s=y.useRef([]),l=y.useRef(),c=y.useRef(),d=y.useRef(e),u=y.useRef(!0);y.useEffect(function(){d.current=e},[e]);var f=!t&&t!==0&&typeof window<"u";if(typeof e!="function")throw new TypeError("Expected a function");t=+t||0;var v=!!(r=r||{}).leading,h=!("trailing"in r)||!!r.trailing,m="maxWait"in r,b=m?Math.max(+r.maxWait||0,t):null;y.useEffect(function(){return u.current=!0,function(){u.current=!1}},[]);var S=y.useMemo(function(){var x=function(E){var I=s.current,k=l.current;return s.current=l.current=null,i.current=E,c.current=d.current.apply(k,I)},_=function(E,I){f&&cancelAnimationFrame(a.current),a.current=f?requestAnimationFrame(E):setTimeout(E,I)},g=function(E){if(!u.current)return!1;var I=E-o.current;return!o.current||I>=t||I<0||m&&E-i.current>=b},j=function(E){return a.current=null,h&&s.current?x(E):(s.current=l.current=null,c.current)},w=function E(){var I=Date.now();if(g(I))return j(I);if(u.current){var k=t-(I-o.current),P=m?Math.min(k,b-(I-i.current)):k;_(E,P)}},A=function(){var E=Date.now(),I=g(E);if(s.current=[].slice.call(arguments),l.current=n,o.current=E,I){if(!a.current&&u.current)return i.current=o.current,_(w,t),v?x(o.current):c.current;if(m)return _(w,t),x(o.current)}return a.current||_(w,t),c.current};return A.cancel=function(){a.current&&(f?cancelAnimationFrame(a.current):clearTimeout(a.current)),i.current=0,s.current=o.current=l.current=a.current=null},A.isPending=function(){return!!a.current},A.flush=function(){return a.current?j(Date.now()):c.current},A},[v,m,t,b,h,f]);return S}function f1(e,t){return e===t}function Wu(e){return typeof e=="function"?function(){return e}:e}function oI(e,t,r){var n,o,i=r&&r.equalityFn||f1,a=(n=y.useState(Wu(e)),o=n[1],[n[0],y.useCallback(function(u){return o(Wu(u))},[])]),s=a[0],l=a[1],c=Kh(y.useCallback(function(u){return l(u)},[l]),t,r),d=y.useRef(e);return i(d.current,e)||(c(e),d.current=e),[s,c]}function h1(e){return typeof e=="object"?e.key:e}function v1(e,t){const r=e.length;return new Proxy(e,{get(n,o,i){if(typeof o=="string"){const a=o.charCodeAt(0);if(a>=48&&a<=57){const s=+o;if(Number.isInteger(s)&&s>=0&&s<r){let l=n[s];if(typeof l!="object"){const c=t[s*2];l=n[s]={index:s,key:l,start:c,size:t[s*2+1],end:c+t[s*2+1],lane:0}}return l}}if(o==="length")return r}return Reflect.get(n,o,i)}})}function Xr(e,t,r){let n=r.initialDeps??[],o,i=!0;function a(){const s=e();return(s.length!==n.length||s.some((c,d)=>n[d]!==c))&&(n=s,o=t(...s),r?.onChange&&!(i&&r.skipInitialOnChange)&&r.onChange(o),i=!1),o}return a.updateDeps=s=>{n=s},a}function qu(e,t){if(e===void 0)throw new Error("Unexpected undefined");return e}const Vu=(e,t)=>Math.abs(e-t)<1.01,g1=(e,t,r)=>{let n;return Object.assign(function(...o){e.clearTimeout(n),n=e.setTimeout(()=>t.apply(this,o),r)},{cancel:()=>{e.clearTimeout(n)}})};let Bn;const La=()=>{if(Bn!==void 0)return Bn;if(typeof navigator>"u")return Bn=!1;if(/iP(hone|od|ad)/.test(navigator.userAgent))return Bn=!0;const e=navigator.maxTouchPoints;return Bn=navigator.platform==="MacIntel"&&e!==void 0&&e>0},Zu=e=>{const{offsetWidth:t,offsetHeight:r}=e;return{width:t,height:r}},m1=e=>e,kc=e=>{const t=Math.max(e.startIndex-e.overscan,0),n=Math.min(e.endIndex+e.overscan,e.count-1)-t+1,o=new Array(n);for(let i=0;i<n;i++)o[i]=t+i;return o},Xh=(e,t)=>{const r=e.scrollElement;if(!r)return;const n=e.targetWindow;if(!n)return;const o=a=>{const{width:s,height:l}=a;t({width:Math.round(s),height:Math.round(l)})};if(o(Zu(r)),!n.ResizeObserver)return()=>{};const i=new n.ResizeObserver(a=>{const s=()=>{const l=a[0];if(l?.borderBoxSize){const c=l.borderBoxSize[0];if(c){o({width:c.inlineSize,height:c.blockSize});return}}o(Zu(r))};e.options.useAnimationFrameWithResizeObserver?requestAnimationFrame(s):s()});return i.observe(r,{box:"border-box"}),()=>{i.unobserve(r)}},Co={passive:!0},_1=(e,t)=>{const r=e.scrollElement;if(!r)return;const n=()=>{t({width:r.innerWidth,height:r.innerHeight})};return n(),r.addEventListener("resize",n,Co),()=>{r.removeEventListener("resize",n)}},y1=typeof window>"u"?!0:"onscrollend"in window,Gh=(e,t,r)=>{const n=e.scrollElement;if(!n)return;const o=e.targetWindow;if(!o)return;const i=e.options.useScrollendEvent&&y1;let a=0;const s=i?null:g1(o,()=>t(r(n),!1),e.options.isScrollingResetDelay),l=u=>()=>{a=r(n),s?.(),t(a,u)},c=l(!0),d=l(!1);return n.addEventListener("scroll",c,Co),i&&n.addEventListener("scrollend",d,Co),()=>{n.removeEventListener("scroll",c),i&&n.removeEventListener("scrollend",d),s?.cancel()}},Jh=(e,t)=>Gh(e,t,r=>{const{horizontal:n,isRtl:o}=e.options;return n?r.scrollLeft*(o&&-1||1):r.scrollTop}),b1=(e,t)=>Gh(e,t,r=>e.options.horizontal?r.scrollX:r.scrollY),k1=(e,t,r)=>{if(r.options.useCachedMeasurements){const n=r.indexFromElement(e),o=r.options.getItemKey(n);return r.itemSizeCache.get(o)??r.options.estimateSize(n)}if(t?.borderBoxSize){const n=t.borderBoxSize[0];if(n)return Math.round(n[r.options.horizontal?"inlineSize":"blockSize"])}if(!t){const n=r.indexFromElement(e),o=r.options.getItemKey(n),i=r.itemSizeCache.get(o);if(i!==void 0)return i}return e[r.options.horizontal?"offsetWidth":"offsetHeight"]},Qh=(e,{adjustments:t=0,behavior:r},n)=>{var o,i;(i=(o=n.scrollElement)==null?void 0:o.scrollTo)==null||i.call(o,{[n.options.horizontal?"left":"top"]:e+t,behavior:r})},x1=Qh,ev=Qh;function w1(e,t,r,n){if(t===0)return!1;const o=n(0),i=new Set;let a=0;for(;a<e;){const l=r(a);if(l===o)break;i.add(l),a++}const s=e-a;if(s===0||s>=t)return!1;for(let l=0;l<s;l++)if(n(l)!==r(a+l))return!1;for(let l=s;l<t;l++)if(i.has(n(l)))return!1;return!0}class S1{constructor(t){this.unsubs=[],this.scrollElement=null,this.targetWindow=null,this.isScrolling=!1,this.scrollState=null,this.measurementsCache=[],this._singleLaneMeasurements=null,this.itemSizeCache=new Map,this.itemSizeCacheVersion=0,this.laneAssignments=new Map,this.pendingMin=null,this.prevLanes=void 0,this.lanesChangedFlag=!1,this.lanesSettling=!1,this.pendingScrollAnchor=null,this.scrollRect=null,this.scrollOffset=null,this.scrollDirection=null,this.scrollAdjustments=0,this._iosDeferredAdjustment=0,this._iosTouching=!1,this._iosJustTouchEnded=!1,this._iosTouchEndTimerId=null,this._intendedScrollOffset=null,this._clampedAdjustment=null,this.elementsCache=new Map,this.now=()=>{var r,n,o;return((o=(n=(r=this.targetWindow)==null?void 0:r.performance)==null?void 0:n.now)==null?void 0:o.call(n))??Date.now()},this.observer=(()=>{let r=null;const n=()=>r||(!this.targetWindow||!this.targetWindow.ResizeObserver?null:r=new this.targetWindow.ResizeObserver(o=>{o.forEach(i=>{const a=()=>{const s=i.target,l=this.indexFromElement(s);if(!s.isConnected){this.observer.unobserve(s);for(const[c,d]of this.elementsCache)if(d===s){this.elementsCache.delete(c);break}return}this.isIndexInRange(l)&&this.shouldMeasureDuringScroll(l)&&this.resizeItem(l,this.options.measureElement(s,i,this))};this.options.useAnimationFrameWithResizeObserver?requestAnimationFrame(a):a()})}));return{disconnect:()=>{var o;(o=n())==null||o.disconnect(),r=null},observe:o=>{var i;return(i=n())==null?void 0:i.observe(o,{box:"border-box"})},unobserve:o=>{var i;return(i=n())==null?void 0:i.unobserve(o)}}})(),this.range=null,this.setOptions=r=>{var n;const o={debug:!1,initialOffset:0,overscan:1,paddingStart:0,paddingEnd:0,scrollPaddingStart:0,scrollPaddingEnd:0,horizontal:!1,getItemKey:m1,rangeExtractor:kc,onChange:()=>{},measureElement:k1,initialRect:{width:0,height:0},scrollMargin:0,gap:0,indexAttribute:"data-index",initialMeasurementsCache:[],lanes:1,anchorTo:"start",followOnAppend:!1,scrollEndThreshold:1,isScrollingResetDelay:150,enabled:!0,isRtl:!1,useScrollendEvent:!1,useAnimationFrameWithResizeObserver:!1,laneAssignmentMode:"estimate",useCachedMeasurements:!1};for(const u in r){const f=r[u];f!==void 0&&(o[u]=f)}const i=this.options;let a=null,s=null,l=!1;if(i!==void 0&&i.enabled&&o.enabled&&o.anchorTo==="end"&&this.scrollElement!==null){const u=i.count,f=o.count,v=this.getMeasurements(),h=((n=this._singleLaneMeasurements)==null?void 0:n.items)??v,m=g=>h1(h[g]),b=u>0?m(0):null,S=u>0?m(u-1):null;if(f!==u||u>0&&f>0&&(o.getItemKey(0)!==b||o.getItemKey(f-1)!==S)){l=!0;const g=u>0?this.getVirtualItemForOffset(this.getScrollOffset())??v[0]:null;g&&(a=[g.key,this.getScrollOffset()-g.start]);const j=o.followOnAppend===!0?"auto":o.followOnAppend||null;j&&f>0&&this.isAtEnd(i.scrollEndThreshold)&&(u===0||o.getItemKey(f-1)!==S)&&(f>u||w1(u,f,m,o.getItemKey))&&(s=j)}}this.options=o,l&&(this.pendingMin=0,this.itemSizeCacheVersion++);let c=!1,d=0;if(a&&this.scrollOffset!==null){const[u,f]=a,v=this.getMeasurements(),{count:h,getItemKey:m}=this.options;let b=0;for(;b<h&&m(b)!==u;)b++;if(b<h){const S=v[b];if(S){const x=Math.max(0,S.start+f);!s&&x!==this.scrollOffset&&(d=x-this.scrollOffset,this.scrollOffset=x,c=!0)}}}(c||s)&&(this.pendingScrollAnchor=[c?a[0]:null,c?a[1]:0,s,d])},this.notify=r=>{var n,o;(o=(n=this.options).onChange)==null||o.call(n,this,r)},this.maybeNotify=Xr(()=>(this.calculateRange(),[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]),r=>{this.notify(r)},{key:!1,debug:()=>this.options.debug,initialDeps:[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]}),this.cleanup=()=>{this.unsubs.filter(Boolean).forEach(r=>r()),this.unsubs=[],this.observer.disconnect(),this.rafId!=null&&this.targetWindow&&(this.targetWindow.cancelAnimationFrame(this.rafId),this.rafId=null),this.scrollState=null,this.isScrolling=!1,this.scrollDirection=null,this._iosDeferredAdjustment=0,this._iosTouching=!1,this._iosJustTouchEnded=!1,this._clampedAdjustment=null,this.scrollElement=null,this.targetWindow=null},this._didMount=()=>()=>{this.cleanup()},this._willUpdate=()=>{var r,n;const o=this.options.enabled?this.options.getScrollElement():null;if(this.scrollElement!==o){if(this.cleanup(),!o){this.maybeNotify();return}if(this.scrollElement=o,this.scrollElement&&"ownerDocument"in this.scrollElement?this.targetWindow=this.scrollElement.ownerDocument.defaultView:this.targetWindow=((r=this.scrollElement)==null?void 0:r.window)??null,this.elementsCache.forEach(a=>{this.observer.observe(a)}),this.unsubs.push(this.options.observeElementRect(this,a=>{this.scrollRect=a,this.maybeNotify()})),this.unsubs.push(this.options.observeElementOffset(this,(a,s)=>{if(s&&this._intendedScrollOffset===null&&a===this.scrollOffset)return;this._intendedScrollOffset!==null&&Math.abs(a-this._intendedScrollOffset)<1.5&&(a=this._intendedScrollOffset),this._intendedScrollOffset=null,this._clampedAdjustment!==null&&Math.abs(a-this._clampedAdjustment.maxAtWrite)>=1.5&&(this._clampedAdjustment=null),this.scrollAdjustments=0;const l=this.getScrollOffset();this.scrollDirection=s?l===a?this.scrollDirection:l<a?"forward":"backward":null,this.scrollOffset=a,this.isScrolling=s,this._flushIosDeferredIfReady(),this.scrollState&&this.scheduleScrollReconcile(),this.maybeNotify()})),"addEventListener"in this.scrollElement){const a=this.scrollElement,s=()=>{this._iosTouching=!0,this._iosJustTouchEnded=!1,this._iosTouchEndTimerId!==null&&this.targetWindow!=null&&(this.targetWindow.clearTimeout(this._iosTouchEndTimerId),this._iosTouchEndTimerId=null)},l=()=>{this._iosTouching=!1,!(!La()||this.targetWindow==null)&&(this._iosJustTouchEnded=!0,this._iosTouchEndTimerId=this.targetWindow.setTimeout(()=>{this._iosJustTouchEnded=!1,this._iosTouchEndTimerId=null,this._flushIosDeferredIfReady()},150))};a.addEventListener("touchstart",s,Co),a.addEventListener("touchend",l,Co),this.unsubs.push(()=>{a.removeEventListener("touchstart",s),a.removeEventListener("touchend",l),this._iosTouchEndTimerId!==null&&this.targetWindow!=null&&(this.targetWindow.clearTimeout(this._iosTouchEndTimerId),this._iosTouchEndTimerId=null)})}this._scrollToOffset(this.getScrollOffset(),{adjustments:void 0,behavior:void 0})}const i=this.pendingScrollAnchor;if(this.pendingScrollAnchor=null,i&&this.scrollElement&&this.options.enabled){const[a,s,l,c]=i;a!==null&&!l&&(La()&&(this.isScrolling||this._iosTouching||this._iosJustTouchEnded)?c!==0&&(this._iosDeferredAdjustment+=c):((n=this.scrollState)==null?void 0:n.behavior)==="smooth"&&!Vu(this.getScrollOffset()-c,this.scrollState.lastTargetOffset)||this._scrollToOffset(this.getScrollOffset(),{adjustments:void 0,behavior:void 0})),l&&this.scrollToEnd({behavior:l})}this._retryClampedAdjustment()},this._retryClampedAdjustment=()=>{if(this._clampedAdjustment===null||!this.scrollElement||!this.options.enabled)return;const{target:r,maxAtWrite:n}=this._clampedAdjustment,o=this.getMaxScrollOffset();o>n+.5&&(this._clampedAdjustment=r>o+.5?{target:r,maxAtWrite:o}:null,this._scrollToOffset(r,{adjustments:void 0,behavior:void 0}))},this._flushIosDeferredIfReady=()=>{if(this._iosDeferredAdjustment===0||this.isScrolling||this._iosTouching||this._iosJustTouchEnded)return;const r=this.getScrollOffset(),n=this.getMaxScrollOffset();if(r<0||r>n)return;if(this._iosDeferredAdjustment<0&&r>=n-1){this._iosDeferredAdjustment=0;return}const o=this._iosDeferredAdjustment;this._iosDeferredAdjustment=0,this._scrollToOffset(r,{adjustments:this.scrollAdjustments+=o,behavior:void 0})},this.rafId=null,this.getSize=()=>this.options.enabled?(this.scrollRect=this.scrollRect??this.options.initialRect,this.scrollRect[this.options.horizontal?"width":"height"]):(this.scrollRect=null,0),this.getScrollOffset=()=>this.options.enabled?(this.scrollOffset=this.scrollOffset??(typeof this.options.initialOffset=="function"?this.options.initialOffset():this.options.initialOffset),this.scrollOffset):(this.scrollOffset=null,0),this.getMeasurementOptions=Xr(()=>[this.options.count,this.options.paddingStart,this.options.scrollMargin,this.options.getItemKey,this.options.enabled,this.options.lanes,this.options.laneAssignmentMode,this.options.gap],(r,n,o,i,a,s,l,c)=>(this.prevLanes!==void 0&&this.prevLanes!==s&&(this.lanesChangedFlag=!0),this.prevLanes=s,this.pendingMin=null,{count:r,paddingStart:n,scrollMargin:o,getItemKey:i,enabled:a,lanes:s,laneAssignmentMode:l,gap:c}),{key:!1}),this.isIndexInRange=r=>r>=0&&r<this.options.count,this.getMeasurements=Xr(()=>[this.getMeasurementOptions(),this.itemSizeCacheVersion],({count:r,paddingStart:n,scrollMargin:o,getItemKey:i,enabled:a,lanes:s,laneAssignmentMode:l,gap:c},d)=>{var u;const f=this.itemSizeCache;if(!a)return this.measurementsCache=[],this._singleLaneMeasurements=null,this.itemSizeCache.clear(),this.laneAssignments.clear(),[];if(this.laneAssignments.size>r)for(const x of this.laneAssignments.keys())x>=r&&this.laneAssignments.delete(x);this.lanesChangedFlag&&(this.lanesChangedFlag=!1,this.lanesSettling=!0,this.measurementsCache=[],this._singleLaneMeasurements=null,this.itemSizeCache.clear(),this.laneAssignments.clear(),this.pendingMin=null),this.measurementsCache.length===0&&!this.lanesSettling&&(this.measurementsCache=this.options.initialMeasurementsCache,this.measurementsCache.forEach(x=>{this.itemSizeCache.set(x.key,x.size)}));const v=this.lanesSettling?0:this.pendingMin??0;if(this.pendingMin=null,this.lanesSettling&&this.measurementsCache.length===r&&(this.lanesSettling=!1),s===1){const x=r*2;let _=(u=this._singleLaneMeasurements)==null?void 0:u.flat;if(!_||_.length<x){const A=new Float64Array(x);_&&v>0&&A.set(_.subarray(0,v*2)),_=A}const g=v===0?new Array(r):this._singleLaneMeasurements.items.slice();let j;if(v===0)j=n+o;else{const A=v-1;j=_[A*2]+_[A*2+1]+c}for(let A=v;A<r;A++){const E=i(A);g[A]=E;const I=f.get(E),k=typeof I=="number"?I:this.options.estimateSize(A);_[A*2]=j,_[A*2+1]=k,j+=k+c}this._singleLaneMeasurements={flat:_,items:g};const w=v1(g,_);return this.measurementsCache=w,w}const h=this.measurementsCache.slice(0,v),m=new Array(s).fill(void 0),b=new Float64Array(s);let S=0;for(let x=0;x<v;x++){const _=h[x];_&&(m[_.lane]===void 0&&S++,m[_.lane]=x,b[_.lane]=_.end)}for(let x=v;x<r;x++){const _=i(x),g=this.laneAssignments.get(x);let j,w;const A=l==="estimate"||f.has(_);if(g!==void 0&&this.options.lanes>1){j=g;const P=m[j],T=P!==void 0?h[P]:void 0;w=T?T.end+c:n+o}else if(S===s){let P=0,T=b[0],F=m[0];for(let H=1;H<s;H++){const R=b[H];(R<T||R===T&&m[H]<F)&&(P=H,T=R,F=m[H])}j=P,w=T+c,A&&this.laneAssignments.set(x,j)}else j=x%this.options.lanes,w=n+o,A&&this.laneAssignments.set(x,j);const E=f.get(_),I=typeof E=="number"?E:this.options.estimateSize(x),k=w+I;h[x]={index:x,start:w,size:I,end:k,key:_,lane:j},m[j]===void 0&&S++,m[j]=x,b[j]=k}return this.measurementsCache=h,h},{key:!1,debug:()=>this.options.debug}),this.calculateRange=Xr(()=>[this.getMeasurements(),this.getSize(),this.getScrollOffset(),this.options.lanes],(r,n,o,i)=>r.length===0||n===0?(this.range=null,null):(this.range=E1(r,n,o,i,i===1&&this._singleLaneMeasurements!==null?this._singleLaneMeasurements.flat:null),this.range),{key:!1,debug:()=>this.options.debug}),this.getVirtualIndexes=Xr(()=>{let r=null,n=null;const o=this.calculateRange();return o&&(r=o.startIndex,n=o.endIndex),this.maybeNotify.updateDeps([this.isScrolling,r,n]),[this.options.rangeExtractor,this.options.overscan,this.options.count,r,n]},(r,n,o,i,a)=>i===null||a===null?[]:r({startIndex:i,endIndex:a,overscan:n,count:o}),{key:!1,debug:()=>this.options.debug}),this.indexFromElement=r=>{const n=this.options.indexAttribute,o=r.getAttribute(n);return o?parseInt(o,10):(console.warn(`Missing attribute name '${n}={index}' on measured element.`),-1)},this.shouldMeasureDuringScroll=r=>{var n;if(!this.scrollState||this.scrollState.behavior!=="smooth")return!0;const o=this.scrollState.index??((n=this.getVirtualItemForOffset(this.scrollState.lastTargetOffset))==null?void 0:n.index);if(o!==void 0&&this.range){const i=Math.max(this.options.overscan,Math.ceil((this.range.endIndex-this.range.startIndex)/2)),a=Math.max(0,o-i),s=Math.min(this.options.count-1,o+i);return r>=a&&r<=s}return!0},this.measureElement=r=>{if(!r){this.elementsCache.forEach((a,s)=>{a.isConnected||(this.observer.unobserve(a),this.elementsCache.delete(s))});return}const n=this.indexFromElement(r);if(!this.isIndexInRange(n))return;const o=this.options.getItemKey(n),i=this.elementsCache.get(o);i!==r&&(i&&this.observer.unobserve(i),this.observer.observe(r),this.elementsCache.set(o,r)),(!this.isScrolling||this.scrollState)&&this.shouldMeasureDuringScroll(n)&&this.resizeItem(n,this.options.measureElement(r,void 0,this))},this.resizeItem=(r,n)=>{var o,i,a;if(!this.isIndexInRange(r))return;let s,l,c;const d=(o=this._singleLaneMeasurements)==null?void 0:o.flat;if(this.options.lanes===1&&d!=null)c=this.options.getItemKey(r),l=d[r*2],s=d[r*2+1];else{const v=this.measurementsCache[r];if(!v)return;c=v.key,l=v.start,s=v.size}const u=this.itemSizeCache.get(c)??s,f=n-u;if(f!==0){const v=this.options.anchorTo==="end"&&((i=this.scrollState)==null?void 0:i.behavior)!=="smooth"&&this.getVirtualDistanceFromEnd()<=this.options.scrollEndThreshold,h=v?this.getTotalSize():0,m=this.getScrollOffset()+this.scrollAdjustments,S=!this.itemSizeCache.has(c)?l<m:l+u<=m&&this.scrollDirection!=="backward",x=((a=this.scrollState)==null?void 0:a.behavior)!=="smooth"&&(this.shouldAdjustScrollPositionOnItemSizeChange!==void 0?this.shouldAdjustScrollPositionOnItemSizeChange(this.measurementsCache[r]??{index:r,key:c,start:l,size:s,end:l+s,lane:0},f,this):S);(this.pendingMin===null||r<this.pendingMin)&&(this.pendingMin=r),this.itemSizeCache.set(c,n),this.itemSizeCacheVersion++;let _=!1;v?_=this.applyScrollAdjustment(this.getTotalSize()-h):x&&(_=this.applyScrollAdjustment(f)),this.notify(_),this._retryClampedAdjustment()}},this.getVirtualItems=Xr(()=>[this.getVirtualIndexes(),this.getMeasurements()],(r,n)=>{const o=[];for(let i=0,a=r.length;i<a;i++){const s=r[i],l=n[s];o.push(l)}return o},{key:!1,debug:()=>this.options.debug}),this.getVirtualItemForOffset=r=>{var n;const o=this.getMeasurements();if(o.length===0)return;const i=(n=this._singleLaneMeasurements)==null?void 0:n.flat,a=this.options.lanes===1&&i!=null,s=tv(0,o.length-1,a?l=>i[l*2]:l=>qu(o[l]).start,r);return qu(o[s])},this.getMaxScrollOffset=()=>{if(!this.scrollElement)return 0;if("scrollHeight"in this.scrollElement)return this.options.horizontal?this.scrollElement.scrollWidth-this.scrollElement.clientWidth:this.scrollElement.scrollHeight-this.scrollElement.clientHeight;{const r=this.scrollElement.document.documentElement;return this.options.horizontal?r.scrollWidth-this.scrollElement.innerWidth:r.scrollHeight-this.scrollElement.innerHeight}},this.getVirtualDistanceFromEnd=()=>Math.max(this.getTotalSize()-this.getSize()-this.getScrollOffset(),0),this.getDistanceFromEnd=()=>Math.max(this.getMaxScrollOffset()-this.getScrollOffset(),0),this.isAtEnd=(r=this.options.scrollEndThreshold)=>this.getDistanceFromEnd()<=r,this.getOffsetForAlignment=(r,n,o=0)=>{if(!this.scrollElement)return 0;const i=this.getSize(),a=this.getScrollOffset();n==="auto"&&(n=r>=a+i?"end":"start"),n==="center"?r+=(o-i)/2:n==="end"&&(r-=i);const s=this.getMaxScrollOffset();return Math.max(Math.min(s,r),0)},this.getOffsetForIndex=(r,n="auto")=>{r=Math.max(0,Math.min(r,this.options.count-1));const o=this.getSize(),i=this.getScrollOffset(),a=this.measurementsCache[r];if(!a)return;if(n==="auto")if(a.end>=i+o-this.options.scrollPaddingEnd)n="end";else if(a.start<=i+this.options.scrollPaddingStart)n="start";else return[i,n];if(n==="end"&&r===this.options.count-1)return[this.getMaxScrollOffset(),n];const s=n==="end"?a.end+this.options.scrollPaddingEnd:a.start-this.options.scrollPaddingStart;return[this.getOffsetForAlignment(s,n,a.size),n]},this.scrollToOffset=(r,{align:n="start",behavior:o="auto"}={})=>{this._iosDeferredAdjustment=0;const i=this.getOffsetForAlignment(r,n),a=this.now();this.scrollState={index:null,align:n,behavior:o,startedAt:a,lastTargetOffset:i,stableFrames:0},this._scrollToOffset(i,{adjustments:void 0,behavior:o}),this.scheduleScrollReconcile()},this.scrollToIndex=(r,{align:n="auto",behavior:o="auto"}={})=>{this._iosDeferredAdjustment=0,r=Math.max(0,Math.min(r,this.options.count-1));const i=this.getOffsetForIndex(r,n);if(!i)return;const[a,s]=i,l=this.now();this.scrollState={index:r,align:s,behavior:o,startedAt:l,lastTargetOffset:a,stableFrames:0},this._scrollToOffset(a,{adjustments:void 0,behavior:o}),this.scheduleScrollReconcile()},this.scrollBy=(r,{behavior:n="auto"}={})=>{const o=this.getScrollOffset()+r,i=this.now();this.scrollState={index:null,align:"start",behavior:n,startedAt:i,lastTargetOffset:o,stableFrames:0},this._scrollToOffset(o,{adjustments:void 0,behavior:n}),this.scheduleScrollReconcile()},this.scrollToEnd=({behavior:r="auto"}={})=>{if(this.options.count>0){this.scrollToIndex(this.options.count-1,{align:"end",behavior:r});return}this.scrollToOffset(Math.max(this.getTotalSize()-this.getSize(),0),{behavior:r})},this.getTotalSize=()=>{var r,n;const o=this.getMeasurements();let i;if(o.length===0)i=this.options.paddingStart;else if(this.options.lanes===1){const a=o.length-1,s=(r=this._singleLaneMeasurements)==null?void 0:r.flat;s!=null?i=s[a*2]+s[a*2+1]:i=((n=o[a])==null?void 0:n.end)??0}else{const a=Array(this.options.lanes).fill(null);let s=o.length-1;for(;s>=0&&a.some(l=>l===null);){const l=o[s];a[l.lane]===null&&(a[l.lane]=l.end),s--}i=Math.max(...a.filter(l=>l!==null))}return Math.max(i-this.options.scrollMargin+this.options.paddingEnd,0)},this.takeSnapshot=()=>{const r=[];if(this.itemSizeCache.size===0)return r;const n=this.getMeasurements();for(const o of n)o&&this.itemSizeCache.has(o.key)&&r.push({index:o.index,key:o.key,start:o.start,size:o.size,end:o.end,lane:o.lane});return r},this._scrollToOffset=(r,{adjustments:n,behavior:o})=>{this._intendedScrollOffset=r+(n??0),this.options.scrollToFn(r,{behavior:o,adjustments:n},this)},this.measure=()=>{this.pendingMin=null,this.itemSizeCache.clear(),this.laneAssignments.clear(),this.itemSizeCacheVersion++,this.notify(!1)},this.setOptions(t)}applyScrollAdjustment(t,r){if(t===0)return!1;if(La()&&(this.isScrolling||this._iosTouching||this._iosJustTouchEnded))return this._iosDeferredAdjustment+=t,!1;{const n=this.getScrollOffset()+this.scrollAdjustments+t,o=this.scrollElement,i=o!==null&&("scrollHeight"in o||"document"in o)?this.getMaxScrollOffset():null;return this._clampedAdjustment=i!==null&&n>i+.5?{target:n,maxAtWrite:i}:null,this._scrollToOffset(this.getScrollOffset(),{adjustments:this.scrollAdjustments+=t,behavior:r}),this.scrollOffset!==null&&(this.scrollOffset+=this.scrollAdjustments,this.scrollOffset<0&&(this.scrollOffset=0),this.scrollAdjustments=0),!0}}scheduleScrollReconcile(){if(!this.targetWindow){this.scrollState=null;return}this.rafId==null&&(this.rafId=this.targetWindow.requestAnimationFrame(()=>{this.rafId=null,this.reconcileScroll()}))}reconcileScroll(){if(!this.scrollState||!this.scrollElement)return;if(this.now()-this.scrollState.startedAt>5e3){this.scrollState=null;return}const n=this.scrollState.index!=null?this.getOffsetForIndex(this.scrollState.index,this.scrollState.align):void 0,o=n?n[0]:this.scrollState.lastTargetOffset,i=1,a=o!==this.scrollState.lastTargetOffset;if(!a&&Vu(o,this.getScrollOffset())){if(this.scrollState.stableFrames++,this.scrollState.stableFrames>=i){this.getScrollOffset()!==o&&this._scrollToOffset(o,{adjustments:void 0,behavior:"auto"}),this.scrollState=null;return}}else if(this.scrollState.stableFrames=0,a){const s=this.getSize()||600,l=Math.abs(o-this.getScrollOffset()),c=this.scrollState.behavior==="smooth"&&l>s;this.scrollState.lastTargetOffset=o,c||(this.scrollState.behavior="auto"),this._scrollToOffset(o,{adjustments:void 0,behavior:c?"smooth":"auto"})}this.scheduleScrollReconcile()}}const tv=(e,t,r,n)=>{for(;e<=t;){const o=(e+t)/2|0,i=r(o);if(i<n)e=o+1;else if(i>n)t=o-1;else return o}return e>0?e-1:0};function I1(e,t,r){let n=0;for(;n<=t;){const o=(n+t)/2|0,i=e[o*2];if(i<r)n=o+1;else if(i>r)t=o-1;else return o}return n>0?n-1:0}function E1(e,t,r,n,o){const i=e.length-1;if(e.length<=n)return{startIndex:0,endIndex:i};if(n===1&&o!==null){const c=I1(o,i,r);let d=c;const u=r+t;for(;d<i&&o[d*2]+o[d*2+1]<u;)d++;return{startIndex:c,endIndex:d}}let s=tv(0,i,c=>e[c].start,r),l=s;if(n===1)for(;l<i&&e[l].end<r+t;)l++;else if(n>1){const c=Array(n).fill(0);for(;l<i&&c.some(u=>u<r+t);){const u=e[l];c[u.lane]=u.end,l++}const d=Array(n).fill(r+t);for(;s>=0&&d.some(u=>u>=r);){const u=e[s];d[u.lane]=u.start,s--}s=Math.max(0,s-s%n),l=Math.min(i,l+(n-1-l%n))}return{startIndex:s,endIndex:l}}const Ra=typeof document<"u"?y.useLayoutEffect:y.useEffect;function C1({useFlushSync:e=!0,directDomUpdates:t=!1,directDomUpdatesMode:r="transform",...n}){const o=y.useReducer(u=>u+1,0)[1],i=y.useRef({enabled:t,mode:r,container:null,lastSize:null,lastPositions:new WeakMap,prevRange:null});i.current.enabled=t,i.current.mode=r;const a=y.useRef(!1),s=u=>{const f=i.current;if(!f.enabled||!f.container)return;const v=u.getTotalSize();if(v!==f.lastSize){f.lastSize=v;const h=u.options.horizontal?"width":"height";f.container.style[h]=`${v}px`}},l=u=>{const f=i.current;if(!f.enabled||!f.container)return;s(u);const v=!!u.options.horizontal,h=f.mode==="transform",m=v?"left":"top",b=u.options.scrollMargin,S=u.getVirtualItems();for(const x of S){const _=x.start-b,g=u.elementsCache.get(x.key);g&&f.lastPositions.get(g)!==_&&(f.lastPositions.set(g,_),h?g.style.transform=v?`translate3d(${_}px, 0, 0)`:`translate3d(0, ${_}px, 0)`:g.style[m]=`${_}px`)}},c={...n,onChange:(u,f)=>{var v;const h=i.current;let m=!0;if(h.enabled){l(u);const b=u.range,S=h.prevRange;m=!S||S.isScrolling!==u.isScrolling||S.startIndex!==b?.startIndex||S.endIndex!==b?.endIndex,m&&(h.prevRange=b?{startIndex:b.startIndex,endIndex:b.endIndex,isScrolling:u.isScrolling}:null)}m&&(e&&f&&!a.current?Ao.flushSync(o):o()),(v=n.onChange)==null||v.call(n,u,f)}},[d]=y.useState(()=>{const u=new S1(c),f=u.measureElement;return u.measureElement=v=>{a.current=!0;try{f(v)}finally{a.current=!1}},Object.assign(u,{containerRef:v=>{const h=i.current;if(h.container=v,h.lastSize=null,v&&h.enabled){const m=u.getTotalSize();h.lastSize=m;const b=u.options.horizontal?"width":"height";v.style[b]=`${m}px`}}})});return d.setOptions(c),Ra(()=>d._didMount(),[]),Ra(()=>(s(d),d._willUpdate())),Ra(()=>{l(d)}),d}function rv(e){return C1({observeElementRect:Xh,observeElementOffset:Jh,scrollToFn:ev,...e})}function si(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Fa={exports:{}},Uu;function z1(){return Uu||(Uu=1,(function(e,t){(function(r){e.exports=r()})(function(){return(function r(n,o,i){function a(c,d){if(!o[c]){if(!n[c]){var u=typeof si=="function"&&si;if(!d&&u)return u(c,!0);if(s)return s(c,!0);throw new Error("Cannot find module '"+c+"'")}d=o[c]={exports:{}},n[c][0].call(d.exports,function(f){var v=n[c][1][f];return a(v||f)},d,d.exports,r,n,o,i)}return o[c].exports}for(var s=typeof si=="function"&&si,l=0;l<i.length;l++)a(i[l]);return a})({1:[function(r,n,o){(function(i,a,s,l,c,d,u,f,v){var h=r("crypto");function m(w,A){A=x(w,A);var E;return(E=A.algorithm!=="passthrough"?h.createHash(A.algorithm):new j).write===void 0&&(E.write=E.update,E.end=E.update),g(A,E).dispatch(w),E.update||E.end(""),E.digest?E.digest(A.encoding==="buffer"?void 0:A.encoding):(w=E.read(),A.encoding!=="buffer"?w.toString(A.encoding):w)}(o=n.exports=m).sha1=function(w){return m(w)},o.keys=function(w){return m(w,{excludeValues:!0,algorithm:"sha1",encoding:"hex"})},o.MD5=function(w){return m(w,{algorithm:"md5",encoding:"hex"})},o.keysMD5=function(w){return m(w,{algorithm:"md5",encoding:"hex",excludeValues:!0})};var b=h.getHashes?h.getHashes().slice():["sha1","md5"],S=(b.push("passthrough"),["buffer","hex","binary","base64"]);function x(w,A){var E={};if(E.algorithm=(A=A||{}).algorithm||"sha1",E.encoding=A.encoding||"hex",E.excludeValues=!!A.excludeValues,E.algorithm=E.algorithm.toLowerCase(),E.encoding=E.encoding.toLowerCase(),E.ignoreUnknown=A.ignoreUnknown===!0,E.respectType=A.respectType!==!1,E.respectFunctionNames=A.respectFunctionNames!==!1,E.respectFunctionProperties=A.respectFunctionProperties!==!1,E.unorderedArrays=A.unorderedArrays===!0,E.unorderedSets=A.unorderedSets!==!1,E.unorderedObjects=A.unorderedObjects!==!1,E.replacer=A.replacer||void 0,E.excludeKeys=A.excludeKeys||void 0,w===void 0)throw new Error("Object argument required.");for(var I=0;I<b.length;++I)b[I].toLowerCase()===E.algorithm.toLowerCase()&&(E.algorithm=b[I]);if(b.indexOf(E.algorithm)===-1)throw new Error('Algorithm "'+E.algorithm+'"  not supported. supported values: '+b.join(", "));if(S.indexOf(E.encoding)===-1&&E.algorithm!=="passthrough")throw new Error('Encoding "'+E.encoding+'"  not supported. supported values: '+S.join(", "));return E}function _(w){if(typeof w=="function")return/^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i.exec(Function.prototype.toString.call(w))!=null}function g(w,A,E){E=E||[];function I(k){return A.update?A.update(k,"utf8"):A.write(k,"utf8")}return{dispatch:function(k){return this["_"+((k=w.replacer?w.replacer(k):k)===null?"null":typeof k)](k)},_object:function(k){var P,T=Object.prototype.toString.call(k),F=/\[object (.*)\]/i.exec(T);if(F=(F=F?F[1]:"unknown:["+T+"]").toLowerCase(),0<=(T=E.indexOf(k)))return this.dispatch("[CIRCULAR:"+T+"]");if(E.push(k),s!==void 0&&s.isBuffer&&s.isBuffer(k))return I("buffer:"),I(k);if(F==="object"||F==="function"||F==="asyncfunction")return T=Object.keys(k),w.unorderedObjects&&(T=T.sort()),w.respectType===!1||_(k)||T.splice(0,0,"prototype","__proto__","constructor"),w.excludeKeys&&(T=T.filter(function(H){return!w.excludeKeys(H)})),I("object:"+T.length+":"),P=this,T.forEach(function(H){P.dispatch(H),I(":"),w.excludeValues||P.dispatch(k[H]),I(",")});if(!this["_"+F]){if(w.ignoreUnknown)return I("["+F+"]");throw new Error('Unknown object type "'+F+'"')}this["_"+F](k)},_array:function(k,H){H=H!==void 0?H:w.unorderedArrays!==!1;var T=this;if(I("array:"+k.length+":"),!H||k.length<=1)return k.forEach(function(R){return T.dispatch(R)});var F=[],H=k.map(function(R){var L=new j,U=E.slice();return g(w,L,U).dispatch(R),F=F.concat(U.slice(E.length)),L.read().toString()});return E=E.concat(F),H.sort(),this._array(H,!1)},_date:function(k){return I("date:"+k.toJSON())},_symbol:function(k){return I("symbol:"+k.toString())},_error:function(k){return I("error:"+k.toString())},_boolean:function(k){return I("bool:"+k.toString())},_string:function(k){I("string:"+k.length+":"),I(k.toString())},_function:function(k){I("fn:"),_(k)?this.dispatch("[native]"):this.dispatch(k.toString()),w.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(k.name)),w.respectFunctionProperties&&this._object(k)},_number:function(k){return I("number:"+k.toString())},_xml:function(k){return I("xml:"+k.toString())},_null:function(){return I("Null")},_undefined:function(){return I("Undefined")},_regexp:function(k){return I("regex:"+k.toString())},_uint8array:function(k){return I("uint8array:"),this.dispatch(Array.prototype.slice.call(k))},_uint8clampedarray:function(k){return I("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(k))},_int8array:function(k){return I("int8array:"),this.dispatch(Array.prototype.slice.call(k))},_uint16array:function(k){return I("uint16array:"),this.dispatch(Array.prototype.slice.call(k))},_int16array:function(k){return I("int16array:"),this.dispatch(Array.prototype.slice.call(k))},_uint32array:function(k){return I("uint32array:"),this.dispatch(Array.prototype.slice.call(k))},_int32array:function(k){return I("int32array:"),this.dispatch(Array.prototype.slice.call(k))},_float32array:function(k){return I("float32array:"),this.dispatch(Array.prototype.slice.call(k))},_float64array:function(k){return I("float64array:"),this.dispatch(Array.prototype.slice.call(k))},_arraybuffer:function(k){return I("arraybuffer:"),this.dispatch(new Uint8Array(k))},_url:function(k){return I("url:"+k.toString())},_map:function(k){return I("map:"),k=Array.from(k),this._array(k,w.unorderedSets!==!1)},_set:function(k){return I("set:"),k=Array.from(k),this._array(k,w.unorderedSets!==!1)},_file:function(k){return I("file:"),this.dispatch([k.name,k.size,k.type,k.lastModfied])},_blob:function(){if(w.ignoreUnknown)return I("[blob]");throw Error(`Hashing Blob objects is currently not supported
(see https://github.com/puleos/object-hash/issues/26)
Use "options.replacer" or "options.ignoreUnknown"
`)},_domwindow:function(){return I("domwindow")},_bigint:function(k){return I("bigint:"+k.toString())},_process:function(){return I("process")},_timer:function(){return I("timer")},_pipe:function(){return I("pipe")},_tcp:function(){return I("tcp")},_udp:function(){return I("udp")},_tty:function(){return I("tty")},_statwatcher:function(){return I("statwatcher")},_securecontext:function(){return I("securecontext")},_connection:function(){return I("connection")},_zlib:function(){return I("zlib")},_context:function(){return I("context")},_nodescript:function(){return I("nodescript")},_httpparser:function(){return I("httpparser")},_dataview:function(){return I("dataview")},_signal:function(){return I("signal")},_fsevent:function(){return I("fsevent")},_tlswrap:function(){return I("tlswrap")}}}function j(){return{buf:"",write:function(w){this.buf+=w},end:function(w){this.buf+=w},read:function(){return this.buf}}}o.writeToStream=function(w,A,E){return E===void 0&&(E=A,A={}),g(A=x(w,A),E).dispatch(w)}}).call(this,r("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},r("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_9a5aa49d.js","/")},{buffer:3,crypto:5,lYpoI2:11}],2:[function(r,n,o){(function(i,a,s,l,c,d,u,f,v){(function(h){var m=typeof Uint8Array<"u"?Uint8Array:Array,b=43,S=47,x=48,_=97,g=65,j=45,w=95;function A(E){return E=E.charCodeAt(0),E===b||E===j?62:E===S||E===w?63:E<x?-1:E<x+10?E-x+26+26:E<g+26?E-g:E<_+26?E-_+26:void 0}h.toByteArray=function(E){var I,k;if(0<E.length%4)throw new Error("Invalid string. Length must be a multiple of 4");var P=E.length,P=E.charAt(P-2)==="="?2:E.charAt(P-1)==="="?1:0,T=new m(3*E.length/4-P),F=0<P?E.length-4:E.length,H=0;function R(L){T[H++]=L}for(I=0;I<F;I+=4,0)R((16711680&(k=A(E.charAt(I))<<18|A(E.charAt(I+1))<<12|A(E.charAt(I+2))<<6|A(E.charAt(I+3))))>>16),R((65280&k)>>8),R(255&k);return P==2?R(255&(k=A(E.charAt(I))<<2|A(E.charAt(I+1))>>4)):P==1&&(R((k=A(E.charAt(I))<<10|A(E.charAt(I+1))<<4|A(E.charAt(I+2))>>2)>>8&255),R(255&k)),T},h.fromByteArray=function(E){var I,k,P,T,F=E.length%3,H="";function R(L){return"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(L)}for(I=0,P=E.length-F;I<P;I+=3)k=(E[I]<<16)+(E[I+1]<<8)+E[I+2],H+=R((T=k)>>18&63)+R(T>>12&63)+R(T>>6&63)+R(63&T);switch(F){case 1:H=(H+=R((k=E[E.length-1])>>2))+R(k<<4&63)+"==";break;case 2:H=(H=(H+=R((k=(E[E.length-2]<<8)+E[E.length-1])>>10))+R(k>>4&63))+R(k<<2&63)+"="}return H}})(o===void 0?this.base64js={}:o)}).call(this,r("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},r("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/base64-js/lib/b64.js","/node_modules/gulp-browserify/node_modules/base64-js/lib")},{buffer:3,lYpoI2:11}],3:[function(r,n,o){(function(i,a,b,l,c,d,u,f,v){var h=r("base64-js"),m=r("ieee754");function b(C,M,O){if(!(this instanceof b))return new b(C,M,O);var q,W,G,ne,ge=typeof C;if(M==="base64"&&ge=="string")for(C=(ne=C).trim?ne.trim():ne.replace(/^\s+|\s+$/g,"");C.length%4!=0;)C+="=";if(ge=="number")q=Y(C);else if(ge=="string")q=b.byteLength(C,M);else{if(ge!="object")throw new Error("First argument needs to be a number, array or string.");q=Y(C.length)}if(b._useTypedArrays?W=b._augment(new Uint8Array(q)):((W=this).length=q,W._isBuffer=!0),b._useTypedArrays&&typeof C.byteLength=="number")W._set(C);else if($(ne=C)||b.isBuffer(ne)||ne&&typeof ne=="object"&&typeof ne.length=="number")for(G=0;G<q;G++)b.isBuffer(C)?W[G]=C.readUInt8(G):W[G]=C[G];else if(ge=="string")W.write(C,0,M);else if(ge=="number"&&!b._useTypedArrays&&!O)for(G=0;G<q;G++)W[G]=0;return W}function S(C,M,O,q){return b._charsWritten=re((function(W){for(var G=[],ne=0;ne<W.length;ne++)G.push(255&W.charCodeAt(ne));return G})(M),C,O,q)}function x(C,M,O,q){return b._charsWritten=re((function(W){for(var G,ne,ge=[],_e=0;_e<W.length;_e++)ne=W.charCodeAt(_e),G=ne>>8,ne=ne%256,ge.push(ne),ge.push(G);return ge})(M),C,O,q)}function _(C,M,O){var q="";O=Math.min(C.length,O);for(var W=M;W<O;W++)q+=String.fromCharCode(C[W]);return q}function g(C,M,O,G){G||(V(typeof O=="boolean","missing or invalid endian"),V(M!=null,"missing offset"),V(M+1<C.length,"Trying to read beyond buffer length"));var W,G=C.length;if(!(G<=M))return O?(W=C[M],M+1<G&&(W|=C[M+1]<<8)):(W=C[M]<<8,M+1<G&&(W|=C[M+1])),W}function j(C,M,O,G){G||(V(typeof O=="boolean","missing or invalid endian"),V(M!=null,"missing offset"),V(M+3<C.length,"Trying to read beyond buffer length"));var W,G=C.length;if(!(G<=M))return O?(M+2<G&&(W=C[M+2]<<16),M+1<G&&(W|=C[M+1]<<8),W|=C[M],M+3<G&&(W+=C[M+3]<<24>>>0)):(M+1<G&&(W=C[M+1]<<16),M+2<G&&(W|=C[M+2]<<8),M+3<G&&(W|=C[M+3]),W+=C[M]<<24>>>0),W}function w(C,M,O,q){if(q||(V(typeof O=="boolean","missing or invalid endian"),V(M!=null,"missing offset"),V(M+1<C.length,"Trying to read beyond buffer length")),!(C.length<=M))return q=g(C,M,O,!0),32768&q?-1*(65535-q+1):q}function A(C,M,O,q){if(q||(V(typeof O=="boolean","missing or invalid endian"),V(M!=null,"missing offset"),V(M+3<C.length,"Trying to read beyond buffer length")),!(C.length<=M))return q=j(C,M,O,!0),2147483648&q?-1*(4294967295-q+1):q}function E(C,M,O,q){return q||(V(typeof O=="boolean","missing or invalid endian"),V(M+3<C.length,"Trying to read beyond buffer length")),m.read(C,M,O,23,4)}function I(C,M,O,q){return q||(V(typeof O=="boolean","missing or invalid endian"),V(M+7<C.length,"Trying to read beyond buffer length")),m.read(C,M,O,52,8)}function k(C,M,O,q,W){if(W||(V(M!=null,"missing value"),V(typeof q=="boolean","missing or invalid endian"),V(O!=null,"missing offset"),V(O+1<C.length,"trying to write beyond buffer length"),Q(M,65535)),W=C.length,!(W<=O))for(var G=0,ne=Math.min(W-O,2);G<ne;G++)C[O+G]=(M&255<<8*(q?G:1-G))>>>8*(q?G:1-G)}function P(C,M,O,q,W){if(W||(V(M!=null,"missing value"),V(typeof q=="boolean","missing or invalid endian"),V(O!=null,"missing offset"),V(O+3<C.length,"trying to write beyond buffer length"),Q(M,4294967295)),W=C.length,!(W<=O))for(var G=0,ne=Math.min(W-O,4);G<ne;G++)C[O+G]=M>>>8*(q?G:3-G)&255}function T(C,M,O,q,W){W||(V(M!=null,"missing value"),V(typeof q=="boolean","missing or invalid endian"),V(O!=null,"missing offset"),V(O+1<C.length,"Trying to write beyond buffer length"),ie(M,32767,-32768)),C.length<=O||k(C,0<=M?M:65535+M+1,O,q,W)}function F(C,M,O,q,W){W||(V(M!=null,"missing value"),V(typeof q=="boolean","missing or invalid endian"),V(O!=null,"missing offset"),V(O+3<C.length,"Trying to write beyond buffer length"),ie(M,2147483647,-2147483648)),C.length<=O||P(C,0<=M?M:4294967295+M+1,O,q,W)}function H(C,M,O,q,W){W||(V(M!=null,"missing value"),V(typeof q=="boolean","missing or invalid endian"),V(O!=null,"missing offset"),V(O+3<C.length,"Trying to write beyond buffer length"),Ie(M,34028234663852886e22,-34028234663852886e22)),C.length<=O||m.write(C,M,O,q,23,4)}function R(C,M,O,q,W){W||(V(M!=null,"missing value"),V(typeof q=="boolean","missing or invalid endian"),V(O!=null,"missing offset"),V(O+7<C.length,"Trying to write beyond buffer length"),Ie(M,17976931348623157e292,-17976931348623157e292)),C.length<=O||m.write(C,M,O,q,52,8)}o.Buffer=b,o.SlowBuffer=b,o.INSPECT_MAX_BYTES=50,b.poolSize=8192,b._useTypedArrays=(function(){try{var C=new ArrayBuffer(0),M=new Uint8Array(C);return M.foo=function(){return 42},M.foo()===42&&typeof M.subarray=="function"}catch{return!1}})(),b.isEncoding=function(C){switch(String(C).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},b.isBuffer=function(C){return!(C==null||!C._isBuffer)},b.byteLength=function(C,M){var O;switch(C+="",M||"utf8"){case"hex":O=C.length/2;break;case"utf8":case"utf-8":O=oe(C).length;break;case"ascii":case"binary":case"raw":O=C.length;break;case"base64":O=Z(C).length;break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":O=2*C.length;break;default:throw new Error("Unknown encoding")}return O},b.concat=function(C,M){if(V($(C),`Usage: Buffer.concat(list, [totalLength])
list should be an Array.`),C.length===0)return new b(0);if(C.length===1)return C[0];if(typeof M!="number")for(W=M=0;W<C.length;W++)M+=C[W].length;for(var O=new b(M),q=0,W=0;W<C.length;W++){var G=C[W];G.copy(O,q),q+=G.length}return O},b.prototype.write=function(C,M,O,q){isFinite(M)?isFinite(O)||(q=O,O=void 0):(_e=q,q=M,M=O,O=_e),M=Number(M)||0;var W,G,ne,ge,_e=this.length-M;switch((!O||_e<(O=Number(O)))&&(O=_e),q=String(q||"utf8").toLowerCase()){case"hex":W=(function(Ke,Re,ze,Ee){ze=Number(ze)||0;var be=Ke.length-ze;(!Ee||be<(Ee=Number(Ee)))&&(Ee=be),V((be=Re.length)%2==0,"Invalid hex string"),be/2<Ee&&(Ee=be/2);for(var St=0;St<Ee;St++){var Ht=parseInt(Re.substr(2*St,2),16);V(!isNaN(Ht),"Invalid hex string"),Ke[ze+St]=Ht}return b._charsWritten=2*St,St})(this,C,M,O);break;case"utf8":case"utf-8":G=this,ne=M,ge=O,W=b._charsWritten=re(oe(C),G,ne,ge);break;case"ascii":case"binary":W=S(this,C,M,O);break;case"base64":G=this,ne=M,ge=O,W=b._charsWritten=re(Z(C),G,ne,ge);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":W=x(this,C,M,O);break;default:throw new Error("Unknown encoding")}return W},b.prototype.toString=function(C,M,O){var q,W,G,ne,ge=this;if(C=String(C||"utf8").toLowerCase(),M=Number(M)||0,(O=O!==void 0?Number(O):ge.length)===M)return"";switch(C){case"hex":q=(function(_e,Ke,Re){var ze=_e.length;(!Ke||Ke<0)&&(Ke=0),(!Re||Re<0||ze<Re)&&(Re=ze);for(var Ee="",be=Ke;be<Re;be++)Ee+=K(_e[be]);return Ee})(ge,M,O);break;case"utf8":case"utf-8":q=(function(_e,Ke,Re){var ze="",Ee="";Re=Math.min(_e.length,Re);for(var be=Ke;be<Re;be++)_e[be]<=127?(ze+=xe(Ee)+String.fromCharCode(_e[be]),Ee=""):Ee+="%"+_e[be].toString(16);return ze+xe(Ee)})(ge,M,O);break;case"ascii":case"binary":q=_(ge,M,O);break;case"base64":W=ge,ne=O,q=(G=M)===0&&ne===W.length?h.fromByteArray(W):h.fromByteArray(W.slice(G,ne));break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":q=(function(_e,Ke,Re){for(var ze=_e.slice(Ke,Re),Ee="",be=0;be<ze.length;be+=2)Ee+=String.fromCharCode(ze[be]+256*ze[be+1]);return Ee})(ge,M,O);break;default:throw new Error("Unknown encoding")}return q},b.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},b.prototype.copy=function(C,M,O,q){if(M=M||0,(q=q||q===0?q:this.length)!==(O=O||0)&&C.length!==0&&this.length!==0){V(O<=q,"sourceEnd < sourceStart"),V(0<=M&&M<C.length,"targetStart out of bounds"),V(0<=O&&O<this.length,"sourceStart out of bounds"),V(0<=q&&q<=this.length,"sourceEnd out of bounds"),q>this.length&&(q=this.length);var W=(q=C.length-M<q-O?C.length-M+O:q)-O;if(W<100||!b._useTypedArrays)for(var G=0;G<W;G++)C[G+M]=this[G+O];else C._set(this.subarray(O,O+W),M)}},b.prototype.slice=function(C,M){var O=this.length;if(C=U(C,O,0),M=U(M,O,O),b._useTypedArrays)return b._augment(this.subarray(C,M));for(var q=M-C,W=new b(q,void 0,!0),G=0;G<q;G++)W[G]=this[G+C];return W},b.prototype.get=function(C){return console.log(".get() is deprecated. Access using array indexes instead."),this.readUInt8(C)},b.prototype.set=function(C,M){return console.log(".set() is deprecated. Access using array indexes instead."),this.writeUInt8(C,M)},b.prototype.readUInt8=function(C,M){if(M||(V(C!=null,"missing offset"),V(C<this.length,"Trying to read beyond buffer length")),!(C>=this.length))return this[C]},b.prototype.readUInt16LE=function(C,M){return g(this,C,!0,M)},b.prototype.readUInt16BE=function(C,M){return g(this,C,!1,M)},b.prototype.readUInt32LE=function(C,M){return j(this,C,!0,M)},b.prototype.readUInt32BE=function(C,M){return j(this,C,!1,M)},b.prototype.readInt8=function(C,M){if(M||(V(C!=null,"missing offset"),V(C<this.length,"Trying to read beyond buffer length")),!(C>=this.length))return 128&this[C]?-1*(255-this[C]+1):this[C]},b.prototype.readInt16LE=function(C,M){return w(this,C,!0,M)},b.prototype.readInt16BE=function(C,M){return w(this,C,!1,M)},b.prototype.readInt32LE=function(C,M){return A(this,C,!0,M)},b.prototype.readInt32BE=function(C,M){return A(this,C,!1,M)},b.prototype.readFloatLE=function(C,M){return E(this,C,!0,M)},b.prototype.readFloatBE=function(C,M){return E(this,C,!1,M)},b.prototype.readDoubleLE=function(C,M){return I(this,C,!0,M)},b.prototype.readDoubleBE=function(C,M){return I(this,C,!1,M)},b.prototype.writeUInt8=function(C,M,O){O||(V(C!=null,"missing value"),V(M!=null,"missing offset"),V(M<this.length,"trying to write beyond buffer length"),Q(C,255)),M>=this.length||(this[M]=C)},b.prototype.writeUInt16LE=function(C,M,O){k(this,C,M,!0,O)},b.prototype.writeUInt16BE=function(C,M,O){k(this,C,M,!1,O)},b.prototype.writeUInt32LE=function(C,M,O){P(this,C,M,!0,O)},b.prototype.writeUInt32BE=function(C,M,O){P(this,C,M,!1,O)},b.prototype.writeInt8=function(C,M,O){O||(V(C!=null,"missing value"),V(M!=null,"missing offset"),V(M<this.length,"Trying to write beyond buffer length"),ie(C,127,-128)),M>=this.length||(0<=C?this.writeUInt8(C,M,O):this.writeUInt8(255+C+1,M,O))},b.prototype.writeInt16LE=function(C,M,O){T(this,C,M,!0,O)},b.prototype.writeInt16BE=function(C,M,O){T(this,C,M,!1,O)},b.prototype.writeInt32LE=function(C,M,O){F(this,C,M,!0,O)},b.prototype.writeInt32BE=function(C,M,O){F(this,C,M,!1,O)},b.prototype.writeFloatLE=function(C,M,O){H(this,C,M,!0,O)},b.prototype.writeFloatBE=function(C,M,O){H(this,C,M,!1,O)},b.prototype.writeDoubleLE=function(C,M,O){R(this,C,M,!0,O)},b.prototype.writeDoubleBE=function(C,M,O){R(this,C,M,!1,O)},b.prototype.fill=function(C,M,O){if(M=M||0,O=O||this.length,V(typeof(C=typeof(C=C||0)=="string"?C.charCodeAt(0):C)=="number"&&!isNaN(C),"value is not a number"),V(M<=O,"end < start"),O!==M&&this.length!==0){V(0<=M&&M<this.length,"start out of bounds"),V(0<=O&&O<=this.length,"end out of bounds");for(var q=M;q<O;q++)this[q]=C}},b.prototype.inspect=function(){for(var C=[],M=this.length,O=0;O<M;O++)if(C[O]=K(this[O]),O===o.INSPECT_MAX_BYTES){C[O+1]="...";break}return"<Buffer "+C.join(" ")+">"},b.prototype.toArrayBuffer=function(){if(typeof Uint8Array>"u")throw new Error("Buffer.toArrayBuffer not supported in this browser");if(b._useTypedArrays)return new b(this).buffer;for(var C=new Uint8Array(this.length),M=0,O=C.length;M<O;M+=1)C[M]=this[M];return C.buffer};var L=b.prototype;function U(C,M,O){return typeof C!="number"?O:M<=(C=~~C)?M:0<=C||0<=(C+=M)?C:0}function Y(C){return(C=~~Math.ceil(+C))<0?0:C}function $(C){return(Array.isArray||function(M){return Object.prototype.toString.call(M)==="[object Array]"})(C)}function K(C){return C<16?"0"+C.toString(16):C.toString(16)}function oe(C){for(var M=[],O=0;O<C.length;O++){var q=C.charCodeAt(O);if(q<=127)M.push(C.charCodeAt(O));else for(var W=O,G=(55296<=q&&q<=57343&&O++,encodeURIComponent(C.slice(W,O+1)).substr(1).split("%")),ne=0;ne<G.length;ne++)M.push(parseInt(G[ne],16))}return M}function Z(C){return h.toByteArray(C)}function re(C,M,O,q){for(var W=0;W<q&&!(W+O>=M.length||W>=C.length);W++)M[W+O]=C[W];return W}function xe(C){try{return decodeURIComponent(C)}catch{return"�"}}function Q(C,M){V(typeof C=="number","cannot write a non-number as a number"),V(0<=C,"specified a negative value for writing an unsigned value"),V(C<=M,"value is larger than maximum value for type"),V(Math.floor(C)===C,"value has a fractional component")}function ie(C,M,O){V(typeof C=="number","cannot write a non-number as a number"),V(C<=M,"value larger than maximum allowed value"),V(O<=C,"value smaller than minimum allowed value"),V(Math.floor(C)===C,"value has a fractional component")}function Ie(C,M,O){V(typeof C=="number","cannot write a non-number as a number"),V(C<=M,"value larger than maximum allowed value"),V(O<=C,"value smaller than minimum allowed value")}function V(C,M){if(!C)throw new Error(M||"Failed assertion")}b._augment=function(C){return C._isBuffer=!0,C._get=C.get,C._set=C.set,C.get=L.get,C.set=L.set,C.write=L.write,C.toString=L.toString,C.toLocaleString=L.toString,C.toJSON=L.toJSON,C.copy=L.copy,C.slice=L.slice,C.readUInt8=L.readUInt8,C.readUInt16LE=L.readUInt16LE,C.readUInt16BE=L.readUInt16BE,C.readUInt32LE=L.readUInt32LE,C.readUInt32BE=L.readUInt32BE,C.readInt8=L.readInt8,C.readInt16LE=L.readInt16LE,C.readInt16BE=L.readInt16BE,C.readInt32LE=L.readInt32LE,C.readInt32BE=L.readInt32BE,C.readFloatLE=L.readFloatLE,C.readFloatBE=L.readFloatBE,C.readDoubleLE=L.readDoubleLE,C.readDoubleBE=L.readDoubleBE,C.writeUInt8=L.writeUInt8,C.writeUInt16LE=L.writeUInt16LE,C.writeUInt16BE=L.writeUInt16BE,C.writeUInt32LE=L.writeUInt32LE,C.writeUInt32BE=L.writeUInt32BE,C.writeInt8=L.writeInt8,C.writeInt16LE=L.writeInt16LE,C.writeInt16BE=L.writeInt16BE,C.writeInt32LE=L.writeInt32LE,C.writeInt32BE=L.writeInt32BE,C.writeFloatLE=L.writeFloatLE,C.writeFloatBE=L.writeFloatBE,C.writeDoubleLE=L.writeDoubleLE,C.writeDoubleBE=L.writeDoubleBE,C.fill=L.fill,C.inspect=L.inspect,C.toArrayBuffer=L.toArrayBuffer,C}}).call(this,r("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},r("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/buffer/index.js","/node_modules/gulp-browserify/node_modules/buffer")},{"base64-js":2,buffer:3,ieee754:10,lYpoI2:11}],4:[function(r,n,o){(function(i,a,h,l,c,d,u,f,v){var h=r("buffer").Buffer,m=4,b=new h(m);b.fill(0),n.exports={hash:function(S,x,_,g){for(var j=x((function(k,P){k.length%m!=0&&(T=k.length+(m-k.length%m),k=h.concat([k,b],T));for(var T,F=[],H=P?k.readInt32BE:k.readInt32LE,R=0;R<k.length;R+=m)F.push(H.call(k,R));return F})(S=h.isBuffer(S)?S:new h(S),g),8*S.length),x=g,w=new h(_),A=x?w.writeInt32BE:w.writeInt32LE,E=0;E<j.length;E++)A.call(w,j[E],4*E,!0);return w}}}).call(this,r("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},r("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/helpers.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{buffer:3,lYpoI2:11}],5:[function(r,n,o){(function(i,a,h,l,c,d,u,f,v){var h=r("buffer").Buffer,m=r("./sha"),b=r("./sha256"),S=r("./rng"),x={sha1:m,sha256:b,md5:r("./md5")},_=64,g=new h(_);function j(k,P){var T=x[k=k||"sha1"],F=[];return T||w("algorithm:",k,"is not yet supported"),{update:function(H){return h.isBuffer(H)||(H=new h(H)),F.push(H),H.length,this},digest:function(H){var R=h.concat(F),R=P?(function(L,U,Y){h.isBuffer(U)||(U=new h(U)),h.isBuffer(Y)||(Y=new h(Y)),U.length>_?U=L(U):U.length<_&&(U=h.concat([U,g],_));for(var $=new h(_),K=new h(_),oe=0;oe<_;oe++)$[oe]=54^U[oe],K[oe]=92^U[oe];return Y=L(h.concat([$,Y])),L(h.concat([K,Y]))})(T,P,R):T(R);return F=null,H?R.toString(H):R}}}function w(){var k=[].slice.call(arguments).join(" ");throw new Error([k,"we accept pull requests","http://github.com/dominictarr/crypto-browserify"].join(`
`))}g.fill(0),o.createHash=function(k){return j(k)},o.createHmac=j,o.randomBytes=function(k,P){if(!P||!P.call)return new h(S(k));try{P.call(this,void 0,new h(S(k)))}catch(T){P(T)}};var A,E=["createCredentials","createCipher","createCipheriv","createDecipher","createDecipheriv","createSign","createVerify","createDiffieHellman","pbkdf2"],I=function(k){o[k]=function(){w("sorry,",k,"is not implemented yet")}};for(A in E)I(E[A])}).call(this,r("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},r("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/index.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./md5":6,"./rng":7,"./sha":8,"./sha256":9,buffer:3,lYpoI2:11}],6:[function(r,n,o){(function(i,a,s,l,c,d,u,f,v){var h=r("./helpers");function m(w,A){w[A>>5]|=128<<A%32,w[14+(A+64>>>9<<4)]=A;for(var E=1732584193,I=-271733879,k=-1732584194,P=271733878,T=0;T<w.length;T+=16){var F=E,H=I,R=k,L=P,E=S(E,I,k,P,w[T+0],7,-680876936),P=S(P,E,I,k,w[T+1],12,-389564586),k=S(k,P,E,I,w[T+2],17,606105819),I=S(I,k,P,E,w[T+3],22,-1044525330);E=S(E,I,k,P,w[T+4],7,-176418897),P=S(P,E,I,k,w[T+5],12,1200080426),k=S(k,P,E,I,w[T+6],17,-1473231341),I=S(I,k,P,E,w[T+7],22,-45705983),E=S(E,I,k,P,w[T+8],7,1770035416),P=S(P,E,I,k,w[T+9],12,-1958414417),k=S(k,P,E,I,w[T+10],17,-42063),I=S(I,k,P,E,w[T+11],22,-1990404162),E=S(E,I,k,P,w[T+12],7,1804603682),P=S(P,E,I,k,w[T+13],12,-40341101),k=S(k,P,E,I,w[T+14],17,-1502002290),E=x(E,I=S(I,k,P,E,w[T+15],22,1236535329),k,P,w[T+1],5,-165796510),P=x(P,E,I,k,w[T+6],9,-1069501632),k=x(k,P,E,I,w[T+11],14,643717713),I=x(I,k,P,E,w[T+0],20,-373897302),E=x(E,I,k,P,w[T+5],5,-701558691),P=x(P,E,I,k,w[T+10],9,38016083),k=x(k,P,E,I,w[T+15],14,-660478335),I=x(I,k,P,E,w[T+4],20,-405537848),E=x(E,I,k,P,w[T+9],5,568446438),P=x(P,E,I,k,w[T+14],9,-1019803690),k=x(k,P,E,I,w[T+3],14,-187363961),I=x(I,k,P,E,w[T+8],20,1163531501),E=x(E,I,k,P,w[T+13],5,-1444681467),P=x(P,E,I,k,w[T+2],9,-51403784),k=x(k,P,E,I,w[T+7],14,1735328473),E=_(E,I=x(I,k,P,E,w[T+12],20,-1926607734),k,P,w[T+5],4,-378558),P=_(P,E,I,k,w[T+8],11,-2022574463),k=_(k,P,E,I,w[T+11],16,1839030562),I=_(I,k,P,E,w[T+14],23,-35309556),E=_(E,I,k,P,w[T+1],4,-1530992060),P=_(P,E,I,k,w[T+4],11,1272893353),k=_(k,P,E,I,w[T+7],16,-155497632),I=_(I,k,P,E,w[T+10],23,-1094730640),E=_(E,I,k,P,w[T+13],4,681279174),P=_(P,E,I,k,w[T+0],11,-358537222),k=_(k,P,E,I,w[T+3],16,-722521979),I=_(I,k,P,E,w[T+6],23,76029189),E=_(E,I,k,P,w[T+9],4,-640364487),P=_(P,E,I,k,w[T+12],11,-421815835),k=_(k,P,E,I,w[T+15],16,530742520),E=g(E,I=_(I,k,P,E,w[T+2],23,-995338651),k,P,w[T+0],6,-198630844),P=g(P,E,I,k,w[T+7],10,1126891415),k=g(k,P,E,I,w[T+14],15,-1416354905),I=g(I,k,P,E,w[T+5],21,-57434055),E=g(E,I,k,P,w[T+12],6,1700485571),P=g(P,E,I,k,w[T+3],10,-1894986606),k=g(k,P,E,I,w[T+10],15,-1051523),I=g(I,k,P,E,w[T+1],21,-2054922799),E=g(E,I,k,P,w[T+8],6,1873313359),P=g(P,E,I,k,w[T+15],10,-30611744),k=g(k,P,E,I,w[T+6],15,-1560198380),I=g(I,k,P,E,w[T+13],21,1309151649),E=g(E,I,k,P,w[T+4],6,-145523070),P=g(P,E,I,k,w[T+11],10,-1120210379),k=g(k,P,E,I,w[T+2],15,718787259),I=g(I,k,P,E,w[T+9],21,-343485551),E=j(E,F),I=j(I,H),k=j(k,R),P=j(P,L)}return Array(E,I,k,P)}function b(w,A,E,I,k,P){return j((A=j(j(A,w),j(I,P)))<<k|A>>>32-k,E)}function S(w,A,E,I,k,P,T){return b(A&E|~A&I,w,A,k,P,T)}function x(w,A,E,I,k,P,T){return b(A&I|E&~I,w,A,k,P,T)}function _(w,A,E,I,k,P,T){return b(A^E^I,w,A,k,P,T)}function g(w,A,E,I,k,P,T){return b(E^(A|~I),w,A,k,P,T)}function j(w,A){var E=(65535&w)+(65535&A);return(w>>16)+(A>>16)+(E>>16)<<16|65535&E}n.exports=function(w){return h.hash(w,m,16)}}).call(this,r("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},r("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/md5.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],7:[function(r,n,o){(function(i,a,s,l,c,d,u,f,v){n.exports=function(h){for(var m,b=new Array(h),S=0;S<h;S++)(3&S)==0&&(m=4294967296*Math.random()),b[S]=m>>>((3&S)<<3)&255;return b}}).call(this,r("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},r("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/rng.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{buffer:3,lYpoI2:11}],8:[function(r,n,o){(function(i,a,s,l,c,d,u,f,v){var h=r("./helpers");function m(x,_){x[_>>5]|=128<<24-_%32,x[15+(_+64>>9<<4)]=_;for(var g,j,w,A=Array(80),E=1732584193,I=-271733879,k=-1732584194,P=271733878,T=-1009589776,F=0;F<x.length;F+=16){for(var H=E,R=I,L=k,U=P,Y=T,$=0;$<80;$++){A[$]=$<16?x[F+$]:S(A[$-3]^A[$-8]^A[$-14]^A[$-16],1);var K=b(b(S(E,5),(K=I,j=k,w=P,(g=$)<20?K&j|~K&w:!(g<40)&&g<60?K&j|K&w|j&w:K^j^w)),b(b(T,A[$]),(g=$)<20?1518500249:g<40?1859775393:g<60?-1894007588:-899497514)),T=P,P=k,k=S(I,30),I=E,E=K}E=b(E,H),I=b(I,R),k=b(k,L),P=b(P,U),T=b(T,Y)}return Array(E,I,k,P,T)}function b(x,_){var g=(65535&x)+(65535&_);return(x>>16)+(_>>16)+(g>>16)<<16|65535&g}function S(x,_){return x<<_|x>>>32-_}n.exports=function(x){return h.hash(x,m,20,!0)}}).call(this,r("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},r("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/sha.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],9:[function(r,n,o){(function(i,a,s,l,c,d,u,f,v){function h(_,g){var j=(65535&_)+(65535&g);return(_>>16)+(g>>16)+(j>>16)<<16|65535&j}function m(_,g){var j,w=new Array(1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298),A=new Array(1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225),E=new Array(64);_[g>>5]|=128<<24-g%32,_[15+(g+64>>9<<4)]=g;for(var I,k,P=0;P<_.length;P+=16){for(var T=A[0],F=A[1],H=A[2],R=A[3],L=A[4],U=A[5],Y=A[6],$=A[7],K=0;K<64;K++)E[K]=K<16?_[K+P]:h(h(h((k=E[K-2],S(k,17)^S(k,19)^x(k,10)),E[K-7]),(k=E[K-15],S(k,7)^S(k,18)^x(k,3))),E[K-16]),j=h(h(h(h($,S(k=L,6)^S(k,11)^S(k,25)),L&U^~L&Y),w[K]),E[K]),I=h(S(I=T,2)^S(I,13)^S(I,22),T&F^T&H^F&H),$=Y,Y=U,U=L,L=h(R,j),R=H,H=F,F=T,T=h(j,I);A[0]=h(T,A[0]),A[1]=h(F,A[1]),A[2]=h(H,A[2]),A[3]=h(R,A[3]),A[4]=h(L,A[4]),A[5]=h(U,A[5]),A[6]=h(Y,A[6]),A[7]=h($,A[7])}return A}var b=r("./helpers"),S=function(_,g){return _>>>g|_<<32-g},x=function(_,g){return _>>>g};n.exports=function(_){return b.hash(_,m,32,!0)}}).call(this,r("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},r("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/sha256.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],10:[function(r,n,o){(function(i,a,s,l,c,d,u,f,v){o.read=function(h,m,b,S,P){var _,g,j=8*P-S-1,w=(1<<j)-1,A=w>>1,E=-7,I=b?P-1:0,k=b?-1:1,P=h[m+I];for(I+=k,_=P&(1<<-E)-1,P>>=-E,E+=j;0<E;_=256*_+h[m+I],I+=k,E-=8);for(g=_&(1<<-E)-1,_>>=-E,E+=S;0<E;g=256*g+h[m+I],I+=k,E-=8);if(_===0)_=1-A;else{if(_===w)return g?NaN:1/0*(P?-1:1);g+=Math.pow(2,S),_-=A}return(P?-1:1)*g*Math.pow(2,_-S)},o.write=function(h,m,b,S,x,T){var g,j,w=8*T-x-1,A=(1<<w)-1,E=A>>1,I=x===23?Math.pow(2,-24)-Math.pow(2,-77):0,k=S?0:T-1,P=S?1:-1,T=m<0||m===0&&1/m<0?1:0;for(m=Math.abs(m),isNaN(m)||m===1/0?(j=isNaN(m)?1:0,g=A):(g=Math.floor(Math.log(m)/Math.LN2),m*(S=Math.pow(2,-g))<1&&(g--,S*=2),2<=(m+=1<=g+E?I/S:I*Math.pow(2,1-E))*S&&(g++,S/=2),A<=g+E?(j=0,g=A):1<=g+E?(j=(m*S-1)*Math.pow(2,x),g+=E):(j=m*Math.pow(2,E-1)*Math.pow(2,x),g=0));8<=x;h[b+k]=255&j,k+=P,j/=256,x-=8);for(g=g<<x|j,w+=x;0<w;h[b+k]=255&g,k+=P,g/=256,w-=8);h[b+k-P]|=128*T}}).call(this,r("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},r("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/ieee754/index.js","/node_modules/gulp-browserify/node_modules/ieee754")},{buffer:3,lYpoI2:11}],11:[function(r,n,o){(function(i,a,s,l,c,d,u,f,v){var h,m,b;function S(){}(i=n.exports={}).nextTick=(m=typeof window<"u"&&window.setImmediate,b=typeof window<"u"&&window.postMessage&&window.addEventListener,m?function(x){return window.setImmediate(x)}:b?(h=[],window.addEventListener("message",function(x){var _=x.source;_!==window&&_!==null||x.data!=="process-tick"||(x.stopPropagation(),0<h.length&&h.shift()())},!0),function(x){h.push(x),window.postMessage("process-tick","*")}):function(x){setTimeout(x,0)}),i.title="browser",i.browser=!0,i.env={},i.argv=[],i.on=S,i.addListener=S,i.once=S,i.off=S,i.removeListener=S,i.removeAllListeners=S,i.emit=S,i.binding=function(x){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(x){throw new Error("process.chdir is not supported")}}).call(this,r("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},r("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/process/browser.js","/node_modules/gulp-browserify/node_modules/process")},{buffer:3,lYpoI2:11}]},{},[1])(1)})})(Fa)),Fa.exports}var j1=z1();const Ba=Ad(j1);z();z();z();var A1=e=>{if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return t===Object.prototype||t===null},Yu=e=>Array.isArray(e)?[...e]:A1(e)?D({},e):{};function pa(e,t,r){const n=t.split("."),o=D({},e);let i=o;for(let a=0;a<n.length;a++){const[s,l]=n[a].replace("]","").split("["),c=a===n.length-1;if(l!==void 0){i[s]=Array.isArray(i[s])?[...i[s]]:[];const d=Number(l);if(c){i[s][d]=r;continue}i[s][d]=Yu(i[s][d]),i=i[s][d];continue}if(c){i[s]=r;continue}i[s]=Yu(i[s]),i=i[s]}return o}z();z();var P1={Button:"_Button_oe4qj_1","Button--medium":"_Button--medium_oe4qj_34","Button--large":"_Button--large_oe4qj_62","Button-icon":"_Button-icon_oe4qj_89","Button--primary":"_Button--primary_oe4qj_93","Button--disabled":"_Button--disabled_oe4qj_123","Button--secondary":"_Button--secondary_oe4qj_135","Button--flush":"_Button--flush_oe4qj_171","Button--fullWidth":"_Button--fullWidth_oe4qj_179","Button-spinner":"_Button-spinner_oe4qj_184"};z();var D1=/^(data-.*)$/,M1=e=>{let t={};for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&D1.test(r)&&(t[r]=e[r]);return t},Na=ee("Button",P1),qs=e=>{var t=e,{children:r,href:n,onClick:o,variant:i="primary",type:a,disabled:s,tabIndex:l,newTab:c,fullWidth:d,icon:u,size:f="medium",loading:v=!1}=t,h=At(t,["children","href","onClick","variant","type","disabled","tabIndex","newTab","fullWidth","icon","size","loading"]);const[m,b]=y.useState(v);y.useEffect(()=>b(v),[v]);const S=n?"a":a?"button":"span",x=M1(h);return p.jsxs(S,B(D({className:Na({primary:i==="primary",secondary:i==="secondary",disabled:s,fullWidth:d,[f]:!0}),onClick:g=>{o&&(b(!0),Promise.resolve(o(g)).then(()=>{b(!1)}))},type:a,disabled:s||m,tabIndex:l,target:c?"_blank":void 0,rel:c?"noreferrer":void 0,href:n},x),{children:[u&&p.jsx("div",{className:Na("icon"),children:u}),r,m&&p.jsx("div",{className:Na("spinner"),children:p.jsx(Or,{size:14})})]}))};z();z();var Nr={InputWrapper:"_InputWrapper_qyenz_1","Input-label":"_Input-label_qyenz_5","Input-labelIcon":"_Input-labelIcon_qyenz_17","Input-disabledIcon":"_Input-disabledIcon_qyenz_24","Input-input":"_Input-input_qyenz_29","Input-select":"_Input-select_qyenz_61","Input-selectIcon":"_Input-selectIcon_qyenz_71",Input:"_Input_qyenz_1","Input--readOnly":"_Input--readOnly_qyenz_111","Input-radioGroupItems":"_Input-radioGroupItems_qyenz_150","Input-radio":"_Input-radio_qyenz_150","Input-radioInner":"_Input-radioInner_qyenz_179","Input-radioInput":"_Input-radioInput_qyenz_261"},Ei=ee("Input",Nr),nv=({children:e,icon:t,label:r,el:n="label",readOnly:o,className:i})=>{const a=n,s=J("field-readonly");return p.jsxs(a,{className:i,children:[p.jsxs("div",{className:Ei("label"),children:[t?p.jsx("div",{className:Ei("labelIcon"),children:t}):p.jsx(p.Fragment,{}),r,o&&p.jsx("div",{className:Ei("disabledIcon"),title:s,children:p.jsx(v_,{size:"12"})})]}),e]})},T1=({children:e,icon:t,label:r,el:n="label",readOnly:o})=>{const i=N(s=>s.overrides),a=y.useMemo(()=>i.fieldLabel||nv,[i]);return r?p.jsx(a,{label:r,icon:t,className:Ei({readOnly:o}),readOnly:o,el:n,children:e}):p.jsx(p.Fragment,{children:e})};z();z();z();z();var ov={ArrayField:"_ArrayField_62huh_5","ArrayField--isDraggingFrom":"_ArrayField--isDraggingFrom_62huh_30","ArrayField-addButton":"_ArrayField-addButton_62huh_38","ArrayField--hasItems":"_ArrayField--hasItems_62huh_58","ArrayField-inner":"_ArrayField-inner_62huh_93",ArrayFieldItem:"_ArrayFieldItem_62huh_101","ArrayFieldItem--isDragging":"_ArrayFieldItem--isDragging_62huh_110","ArrayFieldItem--isExpanded":"_ArrayFieldItem--isExpanded_62huh_114","ArrayFieldItem-summary":"_ArrayFieldItem-summary_62huh_132","ArrayFieldItem--noFields":"_ArrayFieldItem--noFields_62huh_167","ArrayField--addDisabled":"_ArrayField--addDisabled_62huh_176","ArrayFieldItem-body":"_ArrayFieldItem-body_62huh_228","ArrayFieldItem-fieldset":"_ArrayFieldItem-fieldset_62huh_237","ArrayFieldItem-rhs":"_ArrayFieldItem-rhs_62huh_250","ArrayFieldItem-actions":"_ArrayFieldItem-actions_62huh_256"};z();z();function Ft(e,t){const r=y.useContext(e);if(!r)throw new Error("useContextStore must be used inside context");return Xi(r,Ne(t))}function O1(e){return({children:r,value:n})=>{const[o]=y.useState(()=>Dr(()=>n));return p.jsx(e.Provider,{value:o,children:r})}}function L1(e){const t=y.createContext(Dr(tl(()=>e)));return{ctx:t,Provider:O1(t)}}var Ho=L1({}),fa=()=>y.useContext(Ho.ctx);function xc(e){const t=y.useContext(Ho.ctx);if(!t)throw new Error("useContextStore must be used inside context");return Xi(t,Ne(e))}z();z();var R1={DragIcon:"_DragIcon_5e515_1","DragIcon--disabled":"_DragIcon--disabled_5e515_10"},F1=ee("DragIcon",R1),iv=({isDragDisabled:e})=>p.jsx("div",{className:F1({disabled:e}),children:p.jsx("svg",{viewBox:"0 0 20 20",width:"12",fill:"currentColor",children:p.jsx("path",{d:"M7 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 2zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 14zm6-8a2 2 0 1 0-.001-4.001A2 2 0 0 0 13 6zm0 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 14z"})})});z();z();var{Delay:av,Distance:B1}=Zt,Ku=[new av({value:200,tolerance:10})],Xu=[new av({value:200,tolerance:10}),new B1({value:5})],wc=({other:e=Xu,mouse:t,touch:r=Ku}={touch:Ku,other:Xu})=>{const[n]=y.useState(()=>[gh.configure({activationConstraints(o,i){var a;const{pointerType:s,target:l}=o;return s==="mouse"&&hr(l)&&(i.handle===l||(a=i.handle)!=null&&a.contains(l))?t:s==="touch"?r:e}})]);return n};z();z();z();var sn=(e,t,r,n,o)=>{},$a="increasing",N1=(e,t)=>{var r;const{dragOperation:n,droppable:o}=e,{shape:i}=o,{position:a}=n,s=(r=n.shape)==null?void 0:r.current;if(!s||!i)return null;const l=i.center,c=Math.sqrt(Math.pow(l.x-t.x,2)+Math.pow(l.y-t.y,2)),d=Math.sqrt(Math.pow(l.x-a.current.x,2)+Math.pow(l.y-a.current.y,2));return $a=d===c?$a:d<c?"decreasing":"increasing",sn(s.center,l,o.id.toString()),$a==="decreasing"?{id:o.id,value:1,type:$t.Collision}:null};z();var sv=(e,t)=>e==="dynamic"?Math.abs(t.y)>Math.abs(t.x)?t.y===0?null:t.y>0?"down":"up":t.x===0?null:t.x>0?"right":"left":e==="x"?t.x===0?null:t.x>0?"right":"left":t.y===0?null:t.y>0?"down":"up";z();var $1=(e,t,r,n=0)=>{const o=e.boundingRectangle,i=t.center;if(r==="down"){const s=n*t.boundingRectangle.height;return o.bottom>=i.y+s}else if(r==="up"){const s=n*t.boundingRectangle.height;return o.top<i.y-s}else if(r==="left"){const s=n*t.boundingRectangle.width;return i.x-s>=o.left}const a=n*t.boundingRectangle.width;return o.right-a>=i.x};z();var Gu=10,Et={current:{x:0,y:0},delta:{x:0,y:0},previous:{x:0,y:0},direction:null},H1=(e,t="dynamic")=>(Et.current=e,Et.delta={x:e.x-Et.previous.x,y:e.y-Et.previous.y},Et.direction=sv(t,Et.delta)||Et.direction,(Math.abs(Et.delta.x)>Gu||Math.abs(Et.delta.y)>Gu)&&(Et.previous=Je.from(e)),Et);z();var lv=({dragOperation:e,droppable:t})=>{const r=e.position.current;if(!r)return null;const{id:n}=t;if(!t.shape)return null;if(t.shape.containsPoint(r)){const o=Je.distance(t.shape.center,r);return{id:n,value:1/o,type:$t.PointerIntersection,priority:_t.High}}return null},W1=e=>{const{dragOperation:t,droppable:r}=e,{shape:n,position:o}=t;if(!r.shape)return null;const i=n?xt.from(n.current.boundingRectangle).corners:void 0,s=xt.from(r.shape.boundingRectangle).corners.reduce((l,c,d)=>{var u;return l+Je.distance(Je.from(c),(u=i?.[d])!=null?u:o.current)},0)/4;return{id:r.id,value:1/s,type:$t.Collision,priority:_t.Normal}};z();var Vs=Dr(()=>({fallbackEnabled:!1})),Ha="",Sc=(e,t=.05)=>(r=>{var n,o,i,a,s;const{dragOperation:l,droppable:c}=r,{position:d}=l,u=(n=l.shape)==null?void 0:n.current,{shape:f}=c;if(!u||!f)return null;const{center:v}=u,{fallbackEnabled:h}=Vs.getState(),m=H1(d.current,e),b={direction:m.direction},{center:S}=f,x=$1(u,f,m.direction,t);if(((o=l.source)==null?void 0:o.id)===c.id){const j=N1(r,m.previous);if(sn(v,S,c.id.toString()),j)return B(D({},j),{priority:_t.Highest,data:b})}const _=u.intersectionArea(f),g=_/f.area;if(_&&x){sn(v,S,c.id.toString());const j={id:c.id,value:g,priority:_t.High,type:$t.Collision},w=Ha===c.id;return Ha="",B(D({},j),{id:w?"flush":j.id,data:b})}if(h&&((i=l.source)==null?void 0:i.id)!==c.id){const j=f.boundingRectangle.right>u.boundingRectangle.left&&f.boundingRectangle.left<u.boundingRectangle.right,w=f.boundingRectangle.bottom>u.boundingRectangle.top&&f.boundingRectangle.top<u.boundingRectangle.bottom;if(e==="y"&&j||w){const A=W1(r);if(A){const E=sv(e,{x:u.center.x-(((a=c.shape)==null?void 0:a.center.x)||0),y:u.center.y-(((s=c.shape)==null?void 0:s.center.y)||0)});return b.direction=E,_?(sn(v,S,c.id.toString()),Ha=c.id,B(D({},A),{priority:_t.Low,data:b})):(sn(v,S,c.id.toString()),B(D({},A),{priority:_t.Lowest,data:b}))}}}return sn(v,S,c.id.toString()),null});z();var Ic=(e,t="ltr")=>e==="up"||t==="ltr"&&e==="left"||t==="rtl"&&e==="right"?"before":"after",Ec=({position:e,sourceIndex:t,targetIndex:r,isSameZone:n})=>{let o=r;return n&&o>=t&&(o=o-1),e==="after"&&(o=o+1),o},q1=({children:e,onDragStart:t,onDragEnd:r,onMove:n})=>{const o=wc({mouse:[new Zt.Distance({value:5})]});return p.jsx(fc,{sensors:o,onDragStart:i=>{var a,s;return t((s=(a=i.operation.source)==null?void 0:a.id.toString())!=null?s:"")},onDragOver:(i,a)=>{var s;i.preventDefault();const{operation:l}=i,{source:c,target:d}=l;if(!c||!d)return;const u=c.data.index,f=d.data.index,v=(s=a.collisionObserver.collisions[0])==null?void 0:s.data;u!==f&&c.id!==d.id&&n({source:u,target:Ec({position:Ic(v?.direction),sourceIndex:u,targetIndex:f,isSameZone:!0})})},onDragEnd:()=>{setTimeout(()=>{r()},250)},children:e})},V1=({id:e,index:t,disabled:r,children:n,type:o="item"})=>{const{ref:i,isDragging:a,isDropping:s,handleRef:l}=bc({id:e,type:o,index:t,disabled:r,data:{index:t},collisionDetector:Sc("y")});return n({isDragging:a,isDropping:s,ref:i,handleRef:l})};z();var Zi=y.createContext({}),Cc=()=>{const e=y.useContext(Zi);return B(D({},e),{readOnlyFields:e.readOnlyFields||{}})},Z1=({children:e,name:t,subName:r,wildcardName:n=t,readOnlyFields:o})=>{const i=`${t}.${r}`,a=`${n}.${r}`,s=y.useMemo(()=>Object.keys(o).reduce((l,c)=>{if(c.indexOf(i)>-1||c.indexOf(a)>-1){const u=new RegExp(`^(${t}|${n}).`.replace(/\[/g,"\\[").replace(/\]/g,"\\]").replace(/\./g,"\\.").replace(/\*/g,"\\*")),f=c.replace(u,"");return B(D({},l),{[f]:o[c]})}return l},{}),[t,r,n,o]);return p.jsx(Zi.Provider,{value:{readOnlyFields:s,localName:r},children:e})};z();var ha=(e,t)=>t.split(".").reduce((n,o)=>{if(!n)return;const[i,a]=o.replace("]","").split("["),s=n[i];return a&&s?s[parseInt(a)]:s},e);z();var U1=({field:e,id:t,index:r,name:n,subName:o,localName:i,onChange:a,forceReadOnly:s})=>{const l=typeof r<"u"?`${n}[${r}]`:n,c=n?`${l}.${o}`:o,d=typeof r<"u"?`${i}[${r}]`:i??o,u=typeof r<"u"?`${i}[*]`:i,f=`${d}.${o}`,v=`${u}.${o}`,{readOnlyFields:h}=Cc(),m=s||(typeof h[c]<"u"?h[f]:h[v]),b=e.label||o;return p.jsx(Z1,{name:d,wildcardName:u,subName:o,readOnlyFields:h,children:p.jsx(pv,{name:c,label:b,id:t,readOnly:m,field:B(D({},e),{label:b}),onChange:(S,x)=>{a(S,x,o)}})})},cv=y.memo(U1),Wa=ee("ArrayField",ov),ar=ee("ArrayFieldItem",ov),Y1=({index:e,originalIndex:t,field:r,name:n})=>{const o=xc(s=>{const l=`${[n]}[${e}]`;return ha(s,l)}),i=J("field-arrayitem-summary",{index:t});return y.useMemo(()=>o&&r.getItemSummary?r.getItemSummary(o,e):i,[o,r,t,e,i])},K1=y.memo(Y1),X1=({id:e,arrayId:t,index:r,dragIndex:n,originalIndex:o,field:i,onChange:a,onToggleExpand:s,readOnly:l,actions:c,name:d,localName:u})=>{const f=N(m=>{var b;return((b=m.state.ui.arrayState[t])==null?void 0:b.openId)===e}),v=N(m=>m.permissions.getPermissions({item:m.selectedItem}).edit),h=y.useMemo(()=>i.arrayFields?Object.values(i.arrayFields).some(m=>m.type!=="slot"&&m.visible!==!1):!1,[i.arrayFields]);return p.jsx(V1,{id:e,index:n,disabled:l,children:({isDragging:m,ref:b,handleRef:S})=>p.jsxs("div",{ref:b,className:ar({isExpanded:f&&h,isDragging:m,noFields:!h}),children:[p.jsxs("div",{ref:S,onClick:x=>{m||(x.preventDefault(),x.stopPropagation(),h&&s(e,f))},className:ar("summary"),children:[p.jsx(K1,{index:r,originalIndex:o,field:i,name:d}),p.jsxs("div",{className:ar("rhs"),children:[!l&&p.jsx("div",{className:ar("actions"),children:c}),p.jsx("div",{children:p.jsx(iv,{})})]})]}),p.jsx("div",{className:ar("body"),children:f&&h&&p.jsx("fieldset",{className:ar("fieldset"),children:Object.keys(i.arrayFields).map(x=>{const _=i.arrayFields[x];return p.jsx(cv,{id:`${e}_${x}`,name:d,index:r,subName:x,localName:u,field:_,onChange:a,forceReadOnly:!v},`${e}_${x}_${r}`)})})})]})})},G1=y.memo(X1),J1=({field:e,onChange:t,id:r,name:n=r,label:o,labelIcon:i,readOnly:a,Label:s=l=>p.jsx("div",D({},l))})=>{const l=N(R=>R.setUi),c=me(),d=fa(),{localName:u=n}=Cc(),f=()=>{var R;return(R=ha(d.getState(),n))!=null?R:[]},v=y.useCallback(()=>{var R;const{state:L}=c.getState(),U=L.ui.arrayState[r];if((R=U?.items)!=null&&R.length)return U;const Y=f();return{items:Array.from(Y||[]).map(($,K)=>({_originalIndex:K,_currentIndex:K,_arrayId:`${r}-${K}`})),openId:""}},[c,r,f,n]),h=xc(()=>f().length),m=y.useMemo(v,[v]),b=N(R=>{const L=R.state.ui.arrayState[r];return L??m}),S=me(),x=y.useCallback(R=>{const L=S.getState().state;return{arrayState:B(D({},L.ui.arrayState),{[r]:D(D({},v()),R)})}},[S]),_=y.useCallback(()=>v().items.reduce((R,L)=>L._originalIndex>R?L._originalIndex:R,-1),[]),g=y.useCallback(R=>{let L=_();const U=v(),Y=Array.from(R||[]).map(($,K)=>{var oe,Z,re;const xe=U.items[K],Q={_originalIndex:(oe=xe?._originalIndex)!=null?oe:L+1,_currentIndex:(Z=xe?._currentIndex)!=null?Z:K,_arrayId:((re=U.items[K])==null?void 0:re._arrayId)||`${r}-${L+1}`};return Q._originalIndex>L&&(L=Q._originalIndex),Q});return B(D({},U),{items:Y})},[]),[j,w]=y.useState(""),A=!!j,E=y.useRef([]);y.useEffect(()=>{E.current=f()},[]);const I=y.useCallback(R=>{if(e.type!=="array"||!e.arrayFields)return;const L=S.getState().config;return al({value:R,fields:e.arrayFields,mappers:{slot:({value:U})=>U.map($=>sl($,L,!0))},config:L})},[S,e]),k=y.useCallback(()=>{const R=v(),L=R.items.map(($,K)=>B(D({},$),{_currentIndex:K})),U=S.getState().state,Y={arrayState:B(D({},U.ui.arrayState),{[r]:B(D({},R),{items:L})})};l(Y,!1)},[]),P=y.useCallback(R=>{const L=g(R);l(x(L),!1),t(R)},[g,l,x,t]);y.useEffect(()=>{const R=g(f());l(x(R),!1)},[h]);const T=J("field-arrayitem-duplicate"),F=J("field-arrayitem-delete");if(e.type!=="array"||!e.arrayFields)return null;const H=e.max!==void 0&&b?.items.length>=e.max||a;return p.jsx(s,{label:o||n,icon:i||p.jsx(Ji,{size:16}),el:"div",readOnly:a,children:p.jsx(q1,{onDragStart:R=>{E.current=f(),w(R),k()},onDragEnd:()=>{w(""),t(E.current);const R=d.getState();d.setState(pa(R,n,E.current)),k()},onMove:R=>{const L=v();if(L.items[R.source]._arrayId!==j)return;const U=iu(E.current,R.source,R.target),Y=iu(L.items,R.source,R.target),$=S.getState().state,K={arrayState:B(D({},$.ui.arrayState),{[r]:B(D({},L),{items:Y})})};l(K,!1),E.current=U},children:p.jsxs("div",{className:Wa({hasItems:h>0,addDisabled:H}),children:[b.items.length>0&&p.jsx("div",{className:Wa("inner"),"data-dnd-container":!0,children:b.items.map((R,L)=>{const{_arrayId:U=`${r}-${L}`,_originalIndex:Y=L,_currentIndex:$=L}=R;return p.jsx(G1,{index:$,dragIndex:L,originalIndex:Y,arrayId:r,id:U,readOnly:a,field:e,name:n,localName:u,onChange:(K,oe,Z)=>{const re=f(),xe=Array.from(re||[])[L]||{};t(K_(re,L,B(D({},xe),{[Z]:K})),oe)},onToggleExpand:(K,oe)=>{l(x(oe?{openId:""}:{openId:K}))},actions:p.jsxs(p.Fragment,{children:[p.jsx("div",{className:ar("action"),children:p.jsx(Ue,{type:"button",disabled:!!H,onClick:K=>{K.stopPropagation();const Z=[...f()||[]],re=I(Z[L]);Z.splice(L,0,re),P(Z)},title:T,children:p.jsx(ul,{size:16})})}),p.jsx("div",{className:ar("action"),children:p.jsx(Ue,{type:"button",disabled:e.min!==void 0&&e.min>=b.items.length,onClick:K=>{K.stopPropagation();const Z=[...f()||[]];Z.splice(L,1),P(Z)},title:F,children:p.jsx(dl,{size:16})})})]})},U)})}),!H&&p.jsx("button",{type:"button",className:Wa("addButton"),onClick:()=>{var R;if(A)return;const U=f()||[],Y=typeof e.defaultItemProps=="function"?e.defaultItemProps(U.length):(R=e.defaultItemProps)!=null?R:{},$=Td(I(Y),e.arrayFields),K=[...U,$];P(K)},children:p.jsx(k_,{size:21})})]})})})};z();z();z();var Wo=(e,t=!0)=>xc(r=>t?ha(r,e):void 0);z();var Q1=e=>N(t=>t.state.ui.field.focus===e),zc=(e,t,{tracked:r=!0,fallback:n}={})=>{const o=Wo(e,r),i=Q1(e),[a,s]=y.useState(o),l=y.useCallback((c,...d)=>{s(c),t(c,...d)},[t]);return y.useEffect(()=>{r&&(i||s(o))},[r,i,o]),r?[typeof n<"u"&&a==null?n:a,l]:[void 0,t]},e0=ee("Input",Nr),Ju=({field:e,onChange:t,readOnly:r,id:n,name:o=n,label:i,labelIcon:a,Label:s})=>{const[l,c]=zc(o,t,{fallback:""});return p.jsx(s,{label:i||o,icon:a||p.jsxs(p.Fragment,{children:[e.type==="text"&&p.jsx(Qi,{size:16}),e.type==="number"&&p.jsx(i_,{size:16})]}),readOnly:r,children:p.jsx("input",{className:e0("input"),autoComplete:"off",type:e.type,title:i||o,name:o,value:l,onChange:d=>{if(e.type==="number"){const u=Number(d.currentTarget.value);if(typeof e.min<"u"&&u<e.min||typeof e.max<"u"&&u>e.max)return;c(u)}else c(d.currentTarget.value)},readOnly:r,tabIndex:r?-1:void 0,id:n,min:e.type==="number"?e.min:void 0,max:e.type==="number"?e.max:void 0,placeholder:e.type==="text"||e.type==="number"?e.placeholder:void 0,step:e.type==="number"?e.step:void 0})})};z();z();z();var uv={"ExternalInput-actions":"_ExternalInput-actions_143vl_1","ExternalInput-button":"_ExternalInput-button_143vl_5","ExternalInput--dataSelected":"_ExternalInput--dataSelected_143vl_34","ExternalInput--readOnly":"_ExternalInput--readOnly_143vl_41","ExternalInput-detachButton":"_ExternalInput-detachButton_143vl_48",ExternalInput:"_ExternalInput_143vl_1",ExternalInputModal:"_ExternalInputModal_143vl_118","ExternalInputModal-grid":"_ExternalInputModal-grid_143vl_128","ExternalInputModal--filtersToggled":"_ExternalInputModal--filtersToggled_143vl_139","ExternalInputModal-filters":"_ExternalInputModal-filters_143vl_144","ExternalInputModal-masthead":"_ExternalInputModal-masthead_143vl_164","ExternalInputModal-tableWrapper":"_ExternalInputModal-tableWrapper_143vl_173","ExternalInputModal-table":"_ExternalInputModal-table_143vl_173","ExternalInputModal-thead":"_ExternalInputModal-thead_143vl_189","ExternalInputModal-th":"_ExternalInputModal-th_143vl_189","ExternalInputModal-td":"_ExternalInputModal-td_143vl_204","ExternalInputModal-tr":"_ExternalInputModal-tr_143vl_210","ExternalInputModal-tbody":"_ExternalInputModal-tbody_143vl_217","ExternalInputModal--hasData":"_ExternalInputModal--hasData_143vl_244","ExternalInputModal-loadingBanner":"_ExternalInputModal-loadingBanner_143vl_248","ExternalInputModal--isLoading":"_ExternalInputModal--isLoading_143vl_265","ExternalInputModal-searchForm":"_ExternalInputModal-searchForm_143vl_269","ExternalInputModal-search":"_ExternalInputModal-search_143vl_269","ExternalInputModal-searchIcon":"_ExternalInputModal-searchIcon_143vl_306","ExternalInputModal-searchIconText":"_ExternalInputModal-searchIconText_143vl_333","ExternalInputModal-searchInput":"_ExternalInputModal-searchInput_143vl_343","ExternalInputModal-searchActions":"_ExternalInputModal-searchActions_143vl_358","ExternalInputModal-searchActionIcon":"_ExternalInputModal-searchActionIcon_143vl_371","ExternalInputModal-footerContainer":"_ExternalInputModal-footerContainer_143vl_375","ExternalInputModal-footer":"_ExternalInputModal-footer_143vl_375","ExternalInputModal-field":"_ExternalInputModal-field_143vl_388"};z();z();var t0={Modal:"_Modal_g5xob_1","Modal--isOpen":"_Modal--isOpen_g5xob_15","Modal-inner":"_Modal-inner_g5xob_19"},Qu=ee("Modal",t0),r0=({children:e,onClose:t,isOpen:r})=>{const[n,o]=y.useState(null);return y.useEffect(()=>{o(document.getElementById("puck-portal-root"))},[]),n?Ao.createPortal(p.jsx("div",{className:Qu({isOpen:r}),onClick:t,children:p.jsx("div",{className:Qu("inner"),onClick:i=>i.stopPropagation(),children:e})}),n):p.jsx("div",{})};z();z();var n0={Heading:"_Heading_97eh4_1","Heading--xxxxl":"_Heading--xxxxl_97eh4_12","Heading--xxxl":"_Heading--xxxl_97eh4_18","Heading--xxl":"_Heading--xxl_97eh4_22","Heading--xl":"_Heading--xl_97eh4_26","Heading--l":"_Heading--l_97eh4_30","Heading--m":"_Heading--m_97eh4_34","Heading--s":"_Heading--s_97eh4_38","Heading--xs":"_Heading--xs_97eh4_42"},o0=ee("Heading",n0),va=({children:e,rank:t,size:r="m"})=>{const n=t?`h${t}`:"span";return p.jsx(n,{className:o0({[r]:!0}),children:e})};z();var li=ee("ExternalInput",uv),Ce=ee("ExternalInputModal",uv),i0=({count:e})=>{const t=J("field-external-result-singular",{count:e}),r=J("field-external-result-plural",{count:e});return p.jsx("span",{className:Ce("footer"),children:e===1?t:r})},qa={},a0=({field:e,onChange:t,value:r=null,name:n,id:o,readOnly:i})=>{var a;const{mapProp:s=L=>L,mapRow:l=L=>L,filterFields:c}=e||{},{enabled:d}=(a=e.cache)!=null?a:{enabled:!0},[u,f]=y.useState([]),[v,h]=y.useState(!1),[m,b]=y.useState(!0),S=!!c,[x,_]=y.useState(e.initialFilters||{}),[g,j]=y.useState(S),w=y.useMemo(()=>u.map(l),[u]),A=y.useMemo(()=>{const L=new Set;for(const U of w)for(const Y of Object.keys(U))(typeof U[Y]=="string"||typeof U[Y]=="number"||y.isValidElement(U[Y]))&&L.add(Y);return Array.from(L)},[w]),[E,I]=y.useState(e.initialQuery||""),k=y.useCallback((L,U)=>ke(null,null,function*(){b(!0);const Y=`${o}-${L}-${JSON.stringify(U)}`;let $;d&&qa[Y]?$=qa[Y]:$=yield e.fetchList({query:L,filters:U}),$&&(f($),b(!1),d&&(qa[Y]=$))}),[o,e]),P=y.useCallback(L=>e.renderFooter?e.renderFooter(L):p.jsx(i0,{count:L.items.length}),[e.renderFooter]);y.useEffect(()=>{k(E,x)},[]);const T=J("field-external-item"),F=J("field-external-search"),H=J("field-external-togglefilters"),R=J("field-external-selectdata");return p.jsxs("div",{className:li({dataSelected:!!r,modalVisible:v,readOnly:i}),id:o,children:[p.jsxs("div",{className:li("actions"),children:[p.jsx("button",{type:"button",onClick:()=>h(!0),className:li("button"),disabled:i,children:r?e.getItemSummary?e.getItemSummary(r):T:p.jsxs(p.Fragment,{children:[p.jsx(Qd,{size:"16"}),p.jsx("span",{children:e.placeholder})]})}),r&&p.jsx("button",{type:"button",className:li("detachButton"),onClick:()=>{t(null)},disabled:i,children:p.jsx(h_,{size:16})})]}),p.jsx(r0,{onClose:()=>h(!1),isOpen:v,children:p.jsxs("form",{className:Ce({isLoading:m,loaded:!m,hasData:w.length>0,filtersToggled:g}),onSubmit:L=>{L.preventDefault(),L.stopPropagation(),k(E,x)},children:[p.jsx("div",{className:Ce("masthead"),children:e.showSearch?p.jsxs("div",{className:Ce("searchForm"),children:[p.jsxs("label",{className:Ce("search"),children:[p.jsx("span",{className:Ce("searchIconText"),children:F}),p.jsx("div",{className:Ce("searchIcon"),children:p.jsx(I_,{size:"18"})}),p.jsx("input",{className:Ce("searchInput"),name:"q",type:"search",placeholder:e.placeholder,onChange:L=>{I(L.currentTarget.value)},autoComplete:"off",value:E})]}),p.jsxs("div",{className:Ce("searchActions"),children:[p.jsx(qs,{type:"submit",loading:m,fullWidth:!0,children:F}),S&&p.jsx("div",{className:Ce("searchActionIcon"),children:p.jsx(Ue,{type:"button",title:H,onClick:L=>{L.preventDefault(),L.stopPropagation(),j(!g)},children:p.jsx(E_,{size:20})})})]})]}):p.jsx(va,{rank:"2",size:"xs",children:e.placeholder||R})}),p.jsxs("div",{className:Ce("grid"),children:[S&&p.jsx("div",{className:Ce("filters"),children:S&&Object.keys(c).map(L=>{const U=c[L];return p.jsx("div",{className:Ce("field"),children:p.jsx(nv,{label:U.label||L,children:p.jsx(y0,{field:U,id:`external_field_${L}_filter`,value:x[L],onChange:Y=>{_($=>{const K=B(D({},$),{[L]:Y});return k(E,K),K})}})})},L)})}),p.jsxs("div",{className:Ce("tableWrapper"),children:[p.jsxs("table",{className:Ce("table"),children:[p.jsx("thead",{className:Ce("thead"),children:p.jsx("tr",{className:Ce("tr"),children:A.map(L=>p.jsx("th",{className:Ce("th"),style:{textAlign:"left"},children:L},L))})}),p.jsx("tbody",{className:Ce("tbody"),children:w.map((L,U)=>p.jsx("tr",{style:{whiteSpace:"nowrap"},className:Ce("tr"),onClick:()=>{t(s(u[U])),h(!1)},children:A.map(Y=>p.jsx("td",{className:Ce("td"),children:L[Y]},Y))},U))})]}),p.jsx("div",{className:Ce("loadingBanner"),children:p.jsx(Or,{size:24})})]})]}),p.jsx("div",{className:Ce("footerContainer"),children:p.jsx(P,{items:w})})]})})]})},s0=({field:e,onChange:t,id:r,name:n=r,label:o,labelIcon:i,Label:a,readOnly:s})=>{var l,c,d;const u=Wo(n),f=e,v=e,h=J("field-external-selectdata");return y.useEffect(()=>{v.adaptor&&console.error("Warning: The `adaptor` API is deprecated. Please use updated APIs on the `external` field instead. This will be a breaking change in a future release.")},[]),e.type!=="external"?null:p.jsx(a,{label:o||n,icon:i||p.jsx(Qd,{size:16}),el:"div",children:p.jsx(a0,{name:n,field:B(D({},f),{placeholder:(l=v.adaptor)!=null&&l.name?`Select from ${v.adaptor.name}`:f.placeholder||h,mapProp:((c=v.adaptor)==null?void 0:c.mapProp)||f.mapProp,mapRow:f.mapRow,fetchList:(d=v.adaptor)!=null&&d.fetchList?()=>ke(null,null,function*(){return yield v.adaptor.fetchList(v.adaptorParams)}):f.fetchList}),onChange:t,value:u,id:r,readOnly:s})})};z();var ci=ee("Input",Nr),l0=({field:e,onChange:t,readOnly:r,id:n,name:o=n,label:i,labelIcon:a,Label:s})=>{const l=Wo(o);return e.type!=="radio"||!e.options?null:p.jsx(s,{icon:a||p.jsx(Qm,{size:16}),label:i||o,readOnly:r,el:"div",children:p.jsx("div",{className:ci("radioGroupItems"),id:n,children:e.options.map(c=>{var d;return p.jsxs("label",{className:ci("radio"),children:[p.jsx("input",{type:"radio",className:ci("radioInput"),value:JSON.stringify({value:c.value}),name:o,onChange:u=>{t(JSON.parse(u.target.value).value)},disabled:r,checked:l===c.value}),p.jsx("div",{className:ci("radioInner"),children:c.label||((d=c.value)==null?void 0:d.toString())})]},c.label+c.value)})})})};z();var Va=ee("Input",Nr),c0=({field:e,onChange:t,label:r,labelIcon:n,Label:o,id:i,name:a=i,readOnly:s})=>{const l=Wo(a);return e.type!=="select"||!e.options?null:p.jsx(o,{label:r||a,icon:n||p.jsx(_o,{size:16}),readOnly:s,children:p.jsxs("div",{className:Va("select"),children:[p.jsx("select",{id:i,title:r||a,className:Va("input"),disabled:s,onChange:c=>{t(JSON.parse(c.target.value).value)},value:JSON.stringify({value:l}),children:e.options.map(c=>p.jsx("option",{label:c.label,value:JSON.stringify({value:c.value})},c.label+JSON.stringify(c.value)))}),p.jsx(_o,{size:18,className:Va("selectIcon")})]})})};z();var u0=ee("Input",Nr),d0=({field:e,onChange:t,readOnly:r,id:n,name:o=n,label:i,labelIcon:a,Label:s})=>{const[l,c]=zc(o,t,{fallback:""});return p.jsx(s,{label:i||o,icon:a||p.jsx(Qi,{size:16}),readOnly:r,children:p.jsx("textarea",{id:n,className:u0("input"),autoComplete:"off",name:o,value:l,onChange:d=>c(d.currentTarget.value),readOnly:r,tabIndex:r?-1:void 0,rows:5,placeholder:e.type==="textarea"?e.placeholder:void 0})})};z();z();var jc=y.memo(e=>{var t;return p.jsx(vp,B(D({},e),{editor:null,menu:p.jsx(hp,{field:e.field,editor:null,editorState:null,readOnly:(t=e.readOnly)!=null?t:!1}),children:p.jsx("div",{className:"rich-text",dangerouslySetInnerHTML:{__html:e.content},contentEditable:!0})}))});jc.displayName="EditorFallback";var p0=y.lazy(()=>gr(()=>import("./Editor-44C53YAG-DDG9zMQE.js"),__vite__mapDeps([13,12,3,2,1,4,5,6,7])).then(e=>({default:e.Editor}))),f0=({onChange:e,readOnly:t=!1,id:r,name:n=r,label:o,labelIcon:i,Label:a,field:s})=>{const l=Wo(n),c={onChange:e,content:l,readOnly:t,field:s,id:r,name:n};return p.jsx(p.Fragment,{children:p.jsx(a,{label:o||n,icon:i||p.jsx(Qi,{size:16}),readOnly:t,el:"div",children:p.jsx(y.Suspense,{fallback:p.jsx(jc,D({},c)),children:p.jsx(p0,D({},c))})})})};z();z();var h0={ObjectField:"_ObjectField_c5reb_1","ObjectField-fieldset":"_ObjectField-fieldset_c5reb_10"},ed=ee("ObjectField",h0),v0=({field:e,onChange:t,id:r,name:n=r,label:o,labelIcon:i,Label:a,readOnly:s})=>{const{localName:l=n}=Cc(),c=fa(),d=N(f=>f.permissions.getPermissions({item:f.selectedItem}).edit),u=()=>{var f;return(f=ha(c.getState(),n))!=null?f:{}};return e.type!=="object"||!e.objectFields?null:p.jsx(a,{label:o||n,icon:i||p.jsx(r_,{size:16}),el:"div",readOnly:s,children:p.jsx("div",{className:ed(),children:p.jsx("fieldset",{className:ed("fieldset"),children:Object.keys(e.objectFields).map(f=>{const v=e.objectFields[f],h=`${l}.${f}`;return p.jsx(cv,{id:`${r}_${f}`,name:n,subName:f,localName:l,field:v,forceReadOnly:!d,onChange:(m,b,S)=>{const x=u();x[S]!==m&&t(B(D({},x),{[S]:m}),b)}},h)})})})})};z();var ga=()=>{if(typeof es.useId<"u")return es.useId();const[e]=y.useState(lt());return e},g0=ee("Input",Nr),m0=ee("InputWrapper",Nr),Tt={array:J1,external:s0,object:v0,select:c0,textarea:d0,radio:l0,text:Ju,number:Ju,richtext:f0};function dv(e){var t,r,n;const o=N(F=>F.dispatch),i=N(F=>F.overrides),a=N(Ne(F=>{var H;return(H=F.selectedItem)==null?void 0:H.readOnly})),s=y.useContext(Zi),{id:l,Label:c=T1}=e,d=e.field,u=d.label,f=d.labelIcon,v=ga(),h=l||v,m=y.useMemo(()=>{var F,H,R,L,U,Y,$,K,oe,Z;return B(D({},i.fieldTypes),{custom:(F=i.fieldTypes)==null?void 0:F.custom,array:((H=i.fieldTypes)==null?void 0:H.array)||Tt.array,external:((R=i.fieldTypes)==null?void 0:R.external)||Tt.external,object:((L=i.fieldTypes)==null?void 0:L.object)||Tt.object,select:((U=i.fieldTypes)==null?void 0:U.select)||Tt.select,textarea:((Y=i.fieldTypes)==null?void 0:Y.textarea)||Tt.textarea,radio:(($=i.fieldTypes)==null?void 0:$.radio)||Tt.radio,text:((K=i.fieldTypes)==null?void 0:K.text)||Tt.text,number:((oe=i.fieldTypes)==null?void 0:oe.number)||Tt.number,richtext:((Z=i.fieldTypes)==null?void 0:Z.richtext)||Tt.richtext})},[i]),b=d.type==="custom"||!!((t=i.fieldTypes)!=null&&t[d.type]),S=(r=e.name)!=null?r:h,x=fa(),_=y.useMemo(()=>b?(F,H)=>{var R;(R=e.onChange)==null||R.call(e,F,H),x.setState(pa(x.getState(),S,F))}:e.onChange,[b,e.onChange,S,x]),[g,j]=zc(S,_,{tracked:b}),w=y.useMemo(()=>B(D({},e),{field:d,label:u,labelIcon:f,Label:c,id:h,value:g,onChange:j}),[e,d,u,f,c,h,g,j]),A=y.useCallback(F=>{w.name&&(F.target.nodeName==="INPUT"||F.target.nodeName==="TEXTAREA")&&(F.stopPropagation(),o({type:"setUi",ui:{field:{focus:w.name}}}))},[w.name]),E=y.useCallback(F=>{"name"in F.target&&o({type:"setUi",ui:{field:{focus:null}}})},[]);let I=y.useMemo(()=>d.type!=="custom"&&d.type!=="slot"?Tt[d.type]:F=>null,[d.type]);const k=d.type==="custom"?d.key:void 0;let P=y.useMemo(()=>{if(d.type==="custom"&&!m[d.type])return d.render?d.render:null;if(d.type!=="slot")return m[d.type]},[d.type,k,m]);const{visible:T=!0}=e.field;if(!T||d.type==="slot")return null;if(!P)throw new Error(`Field type for ${d.type} did not exist.`);return p.jsx(Zi.Provider,{value:{readOnlyFields:s.readOnlyFields||a||{},localName:(n=s.localName)!=null?n:w.name},children:p.jsx("div",{className:m0(),onFocus:A,onBlur:E,onClick:F=>{F.stopPropagation()},children:p.jsx(P,B(D({},w),{children:p.jsx(I,D({},w))}))})})}function pv(e){return p.jsx(dv,D({},e))}function _0(e){var t=e,{value:r}=t,n=At(t,["value"]);const o=y.useMemo(()=>l=>p.jsx("div",B(D({},l),{className:g0({readOnly:n.readOnly})})),[n.readOnly]),i=fa(),a=y.useCallback(s=>{n.id&&(i.setState({[n.id]:s}),n.onChange(s))},[i,n.onChange,n.id]);return y.useEffect(()=>{n.id&&i.setState({[n.id]:r})},[n.id,r,i]),p.jsx(dv,B(D({},n),{onChange:a,Label:o}))}function y0(e){const t=ga();return e.field.type==="slot"?null:p.jsx(Ho.Provider,{value:{[t]:e.value},children:p.jsx(_0,B(D({},e),{id:t}))})}z();z();z();z();var b0={DraggableComponent:"_DraggableComponent_1627v_1","DraggableComponent-overlayWrapper":"_DraggableComponent-overlayWrapper_1627v_6","DraggableComponent-overlay":"_DraggableComponent-overlay_1627v_6","DraggableComponent-loadingOverlay":"_DraggableComponent-loadingOverlay_1627v_38","DraggableComponent--hover":"_DraggableComponent--hover_1627v_54","DraggableComponent--isSelected":"_DraggableComponent--isSelected_1627v_72","DraggableComponent-actionsOverlay":"_DraggableComponent-actionsOverlay_1627v_89","DraggableComponent-actions":"_DraggableComponent-actions_1627v_89","DraggableComponent-actionsAction":"_DraggableComponent-actionsAction_1627v_111"};z();function td(e){let t={x:0,y:0},r=e;for(;r&&r!==document.documentElement;){const n=r.parentElement;n&&(t.x+=n.scrollLeft,t.y+=n.scrollTop),r=n}return t}z();var Pn=y.createContext(null),$e=y.createContext(Dr(()=>({zoneDepthIndex:{},nextZoneDepthIndex:{},areaDepthIndex:{},nextAreaDepthIndex:{},draggedItem:null,previewIndex:{},enabledIndex:{},hoveringComponent:null,registerRootVirtualizer:()=>{},unregisterRootVirtualizer:()=>{},scrollToComponent:()=>!1}))),k0=({children:e,store:t})=>p.jsx($e.Provider,{value:t,children:e}),zo=({children:e,value:t})=>{const r=N(i=>i.dispatch),n=y.useCallback(i=>{r({type:"registerZone",zone:i})},[r]),o=y.useMemo(()=>D({registerZone:n},t),[t]);return p.jsx(p.Fragment,{children:o&&p.jsx(Pn.Provider,{value:o,children:e})})};z();var fv=(e,t=[])=>{const r=me();return y.useCallback(()=>{let n=()=>{};const o=a=>{a?e(!1):(setTimeout(()=>{e(!0)},0),n&&n())},i=r.getState().state.ui.isDragging;return o(i),i&&(n=r.subscribe(a=>a.state.ui.isDragging,a=>{o(a)})),n},[r,...t])};z();z();z();var ft=()=>{if(typeof window>"u")return;let e=document.querySelector("#preview-frame");return e?.tagName==="IFRAME"?e.contentDocument||document:e?.ownerDocument||document};z();z();var hv=e=>typeof CSS<"u"&&typeof CSS.escape=="function"?CSS.escape(e):e,yn=e=>`[data-puck-component="${hv(e)}"]`,jo=e=>`[data-puck-dropzone="${hv(e)}"]`,Ac={duration:250,easing:"ease"},x0=10,Pc=e=>{var t,r;return(r=(t=e.defaultView)==null?void 0:t.matchMedia("(prefers-reduced-motion: reduce)").matches)!=null?r:!1},vv=(e,{zones:t,itemId:r,targetZone:n,getExpectedOrder:o,initialExpectedOrder:i=[]},a)=>{const s=new Set(i);let l=0;const c=()=>{var d;const u=e.querySelector(jo(n)),f=o(),v=r??f.find(g=>!s.has(g)),h=v&&(d=u?.querySelector(`:scope > ${yn(v)}:not([data-dnd-dragging]):not([data-dnd-placeholder])`))!=null?d:null,m=u?Array.from(u.querySelectorAll(":scope > [data-puck-component]:not([data-dnd-dragging]):not([data-dnd-placeholder])")).map(g=>g.getAttribute("data-puck-component")):[],b=new Set(m),S=f.filter(g=>b.has(g)),x=m.length===S.length&&m.every((g,j)=>g===S[j]),_=t.every(g=>g===n||!v||!e.querySelector(`${jo(g)} > ${yn(v)}`));if((!h||!x||!_)&&l<x0){l++,requestAnimationFrame(c);return}a(h)};requestAnimationFrame(c)},w0=(e,t)=>{var r,n;const o={x:0,y:0,scaleX:1,scaleY:1};let i=(r=e.ownerDocument.defaultView)==null?void 0:r.frameElement;for(;i&&i!==t;){const a=i.getBoundingClientRect(),s=i.offsetWidth?a.width/i.offsetWidth:1,l=i.offsetHeight?a.height/i.offsetHeight:1;o.x+=a.left,o.y+=a.top,o.scaleX*=s,o.scaleY*=l,i=(n=i.ownerDocument.defaultView)==null?void 0:n.frameElement}return o},S0=(e,t)=>{var r,n;const o=e.getBoundingClientRect();if(e.ownerDocument===t)return o;const i=w0(e,(n=(r=t.defaultView)==null?void 0:r.frameElement)!=null?n:null);return{left:o.left*i.scaleX+i.x,top:o.top*i.scaleY+i.y,width:o.width*i.scaleX,height:o.height*i.scaleY}},I0=({element:e,feedbackElement:t,placeholder:r,translate:n})=>{var o;if(Pc(t.ownerDocument))return;const i=r??e,s={frameTransform:t.ownerDocument===i.ownerDocument?null:void 0},l=new kt(t,s),c=new kt(i,s),d=(o=gn(Dt(t).translate))!=null?o:n,u={x:d.x-(l.center.x-c.center.x),y:d.y-(l.center.y-c.center.y)};return t.setAttribute("data-dnd-dropping",""),t.animate({translate:[`${d.x}px ${d.y}px 0`,`${u.x}px ${u.y}px 0`]},Ac).finished.catch(()=>{}).then(()=>{t.removeAttribute("data-dnd-dropping")})},E0=({feedbackElement:e,itemId:t,targetZone:r,getExpectedOrder:n})=>{var o;const i=e.ownerDocument,a=(o=ft())!=null?o:i;if(Pc(i))return;const s=e.getBoundingClientRect(),l=n(),c=e.cloneNode(!0);c.removeAttribute("id"),c.removeAttribute("popover"),c.removeAttribute("data-puck-component"),c.removeAttribute("data-puck-dnd"),c.removeAttribute("data-dnd-dragging"),c.setAttribute("inert","true"),Object.assign(c.style,{position:"fixed",left:`${s.left}px`,top:`${s.top}px`,width:`${s.width}px`,height:`${s.height}px`,margin:"0",overflow:"hidden",pointerEvents:"none",transform:"none",transition:"none",translate:"none",zIndex:"2147483647"});const d=a.createElement("style");d.textContent=`
    ${t?`${yn(t)} { visibility: hidden !important; }`:""}
    [data-puck-overlay] { opacity: 0 !important; }
  `,a.head.appendChild(d),i.body.appendChild(c);const u=()=>{c.remove(),d.remove()};vv(a,{zones:[r],itemId:t,targetZone:r,getExpectedOrder:n,initialExpectedOrder:l},f=>{if(!f){u();return}const v=f.getAttribute("data-puck-component");!t&&v&&(d.textContent+=`
          ${yn(v)} { visibility: hidden !important; }
        `);const h=S0(f,i);c.animate({left:[`${s.left}px`,`${h.left}px`],top:[`${s.top}px`,`${h.top}px`],width:[`${s.width}px`,`${h.width}px`],height:[`${s.height}px`,`${h.height}px`]},B(D({},Ac),{fill:"forwards"})).finished.catch(()=>{}).then(u)})},C0=(e,t)=>{var r,n,o;const i=(r=e.source.manager)==null?void 0:r.dragOperation;if(!(((n=i?.canceled)!=null?n:!1)||((o=i?.target)==null?void 0:o.type)==="void")&&t){E0(B(D({},t),{feedbackElement:e.feedbackElement}));return}return I0(e)};z();var Ui=(e,t)=>{var r,n;return(n=(r=e.indexes.zones[t])==null?void 0:r.contentIds)!=null?n:[]},gv=(e,t)=>{const r=me();return y.useCallback(n=>{var o;const i=Object.values((o=e.getState().previewIndex)!=null?o:{}),a=t?i.find(l=>l?.props.id===t&&!l.ghost):i.find(l=>l?.type==="insert"),s=t?a?.linePlaceholder||a?.type==="insert":!!a;return C0(n,a&&s?{itemId:a.type==="move"?t:void 0,targetZone:a.zone,getExpectedOrder:()=>Ui(r.getState().state,a.zone)}:void 0)},[r,e,t])};z();function z0(e,t){typeof e=="function"?e(t):e&&typeof e=="object"&&"current"in e&&(e.current=t)}function Zs(e,t){e.forEach(r=>{z0(r,t)})}var tr=ee("DraggableComponent",b0),j0=100,mv=8,A0=mv*6.5,P0=-44,rd=mv,D0=({label:e,children:t,parentAction:r})=>p.jsxs(dt,{children:[p.jsxs(dt.Group,{children:[r,e&&p.jsx(dt.Label,{label:e})]}),p.jsx(dt.Group,{children:t})]}),M0=({children:e})=>p.jsx(p.Fragment,{children:e}),T0=({children:e,depth:t,componentType:r,id:n,index:o,zoneCompound:i,isLoading:a=!1,isSelected:s=!1,debug:l,label:c,autoDragAxis:d,userDragAxis:u,inDroppableZone:f=!0,itemRef:v})=>{const h=N(X=>{var ae;return((ae=X.selectedItem)==null?void 0:ae.props.id)===n?X.zoomConfig.zoom:1}),m=N(X=>X._experimentalFullScreenCanvas),b=N(X=>X.overrides),S=N(X=>X.dispatch),x=N(X=>X.iframe),_=y.useRef(0),g=y.useContext(Pn),[j,w]=y.useState({}),A=y.useCallback((X,ae)=>{var se;(se=g?.registerLocalZone)==null||se.call(g,X,ae),w(we=>B(D({},we),{[X]:ae}))},[w]),E=y.useCallback(X=>{var ae;(ae=g?.unregisterLocalZone)==null||ae.call(g,X),w(se=>{const we=D({},se);return delete we[X],we})},[w]),I=Object.values(j).filter(Boolean).length>0,k=N(Ne(X=>{var ae;return(ae=X.state.indexes.nodes[n])==null?void 0:ae.path})),P=N(Ne(X=>{const ae=Qe({index:o,zone:i},X.state);return X.permissions.getPermissions({item:ae})})),T=y.useContext($e),F=me(),[H,R]=y.useState(u||d),L=y.useMemo(()=>Sc(H),[H]),U=gv(T,n),{ref:Y,isDragging:$,sortable:K}=bc({id:n,index:o,group:i,type:"component",data:{areaId:g?.areaId,zone:i,index:o,componentType:r,containsActiveZone:I,depth:t,path:k||[],inDroppableZone:f},collisionPriority:t,collisionDetector:L,transition:{duration:200,easing:"cubic-bezier(0.2, 0, 0, 1)"},plugins:X=>[...X,Ro.configure({feedback:"clone",dropAnimation:U})]});y.useEffect(()=>{const X=T.getState().enabledIndex[i];K.droppable.disabled=!X,K.draggable.disabled=!P.drag;const ae=T.subscribe(se=>{K.droppable.disabled=!se.enabledIndex[i]});return Z.current&&!P.drag?(Z.current.setAttribute("data-puck-disabled",""),()=>{var se;(se=Z.current)==null||se.removeAttribute("data-puck-disabled"),ae()}):ae},[P.drag,i]);const[,oe]=y.useState(0),Z=y.useRef(null),re=y.useCallback(X=>{Y(X),Z.current!==X&&(Z.current=X,oe(ae=>ae+1),v&&Zs([v],X))},[v,Y]),[xe,Q]=y.useState();y.useEffect(()=>{var X,ae,se;Q(x.enabled?(X=Z.current)==null?void 0:X.ownerDocument.body:(se=(ae=Z.current)==null?void 0:ae.closest("[data-puck-preview]"))!=null?se:document.body)},[x.enabled]);const ie=y.useCallback(()=>{var X,ae;if(!Z.current)return;const se=Z.current,we=se.getBoundingClientRect(),We=x.enabled?null:se.closest("[data-puck-preview]"),at=(()=>{let Vr=se;for(;Vr&&Vr!==document.documentElement;){if(getComputedStyle(Vr).position==="fixed")return!0;Vr=Vr.parentElement}return!1})(),et=We?.getBoundingClientRect(),Qt=We?td(We):{x:0,y:0},It=at?{x:0,y:0}:td(se),er=at?{x:0,y:0}:{x:It.x-Qt.x-((X=et?.left)!=null?X:0),y:It.y-Qt.y-((ae=et?.top)!=null?ae:0)};return{left:`${we.left+er.x}px`,top:`${we.top+er.y}px`,height:`${we.height}px`,width:`${we.width}px`,position:at?"fixed":void 0}},[x.enabled]),[Ie,V]=y.useState(),C=y.useRef(null),M=y.useRef(null),O=y.useCallback(()=>{V(ie()),v&&Zs([v],Z.current)},[ie,v]),q=y.useCallback(()=>{M.current==null&&(M.current=requestAnimationFrame(()=>{M.current=null,O()}))},[O]);y.useEffect(()=>()=>{M.current!=null&&(cancelAnimationFrame(M.current),M.current=null)},[]),y.useEffect(()=>{if(Z.current){const X=new ResizeObserver(()=>{q()});return X.observe(Z.current),()=>{X.disconnect()}}},[q,v]);const W=N(X=>X.nodes.registerNode),G=N(X=>X.nodes.unregisterNode),ne=y.useCallback(()=>{Gt(!1)},[]),ge=y.useCallback(()=>{Gt(!0)},[]),_e=y.useRef({sync:()=>null,hideOverlay:()=>null,showOverlay:()=>null});y.useLayoutEffect(()=>{_e.current.sync=O,_e.current.hideOverlay=ne,_e.current.showOverlay=ge},[ne,ge,O]),y.useEffect(()=>(W(n,_e.current),()=>{G(n)}),[n,W,G]);const Ke=y.useMemo(()=>b.actionBar||D0,[b.actionBar]),Re=y.useMemo(()=>b.componentOverlay||M0,[b.componentOverlay]),ze=y.useCallback(X=>{if(!!T.getState().draggedItem)return;X.target.closest("[data-puck-overlay-portal]")||X.stopPropagation(),S(m?{type:"setUi",ui:{itemSelector:s?null:{index:o,zone:i}}}:{type:"setUi",ui:{itemSelector:{index:o,zone:i}}})},[o,i,n,s,m]),Ee=y.useCallback(()=>{const{nodes:X,zones:ae}=F.getState().state.indexes,se=X[n],we=se?.parentId?X[se?.parentId]:null;if(!we||!se.parentId)return;const We=`${we.parentId}:${we.zone}`,at=ae[We].contentIds.indexOf(se.parentId);S({type:"setUi",ui:{itemSelector:{zone:We,index:at}}})},[g,k]),be=y.useCallback(()=>{S({type:"duplicate",sourceIndex:o,sourceZone:i})},[o,i]),St=y.useCallback(()=>{S({type:"remove",index:o,zone:i})},[o,i]),[Ht,$r]=y.useState(!1),Hr=Ft($e,X=>X.hoveringComponent===n);y.useEffect(()=>{if(!Z.current)return;const X=Z.current,ae=we=>{const We=!!T.getState().draggedItem;$r(We?!!$:!0),we.stopPropagation()},se=we=>{we.stopPropagation(),$r(!1)};return X.setAttribute("data-puck-component",n),X.setAttribute("data-puck-dnd",n),X.style.position="relative",X.addEventListener("click",ze),X.addEventListener("mouseover",ae),X.addEventListener("mouseout",se),()=>{X.removeAttribute("data-puck-component"),X.removeAttribute("data-puck-dnd"),X.removeEventListener("click",ze),X.removeEventListener("mouseover",ae),X.removeEventListener("mouseout",se)}},[Z.current,ze,I,i,n,$,f]);const[Wt,Gt]=y.useState(!1),[Jt,Mn]=y.useState(!0),[ya,Wr]=y.useTransition();y.useEffect(()=>{Wr(()=>{Ht||Hr||s?(q(),Gt(!0),Zo(!1)):Gt(!1)})},[Ht,Hr,s,x]);const[Tn,Zo]=y.useState(!1),On=fv(X=>{X?Wr(()=>{O(),Mn(!0)}):Mn(!1)});y.useEffect(()=>{$&&Zo(!0)},[$]),y.useEffect(()=>{if(Tn)return On()},[Tn,On]),y.useEffect(()=>{if(!Jt||!(s||$))return;const X=Z.current;if(!X)return;const ae=X.ownerDocument,se=ae.defaultView;if(!se)return;_.current=0,q();const we=()=>q(),We=()=>q();ae.addEventListener("scroll",we,!0),se.addEventListener("resize",We);let at=0;const et=Qt=>{if(Qt-_.current>=j0){_.current=Qt;const It=Z.current;if(It){const er=It.getBoundingClientRect(),qr=C.current;(!qr||Math.abs(er.x-qr.x)>.5||Math.abs(er.y-qr.y)>.5||Math.abs(er.width-qr.width)>.5||Math.abs(er.height-qr.height)>.5)&&(C.current=er,q())}}at=requestAnimationFrame(et)};return at=requestAnimationFrame(et),()=>{ae.removeEventListener("scroll",we,!0),se.removeEventListener("resize",We),cancelAnimationFrame(at)}},[Jt,s,$,q]);const Uo=y.useCallback(X=>{if(X&&X.ownerDocument.defaultView){const se=X.getBoundingClientRect(),We=se.x<0,et=se.y<0;We&&(X.style.transformOrigin="left top",X.style.left="0px"),et&&(X.style.top="12px",We||(X.style.transformOrigin="right top"))}},[h]),_r=y.useRef(null);y.useEffect(()=>{Uo(_r.current)},[_r.current,Uo]),y.useEffect(()=>{if(u){R(u);return}if(Z.current){const X=window.getComputedStyle(Z.current);if(X.display==="inline"||X.display==="inline-block"){R("x");return}}R(d)},[Z,u,d]);const Yo=J("action-selectparent"),Ko=J("action-duplicate"),ba=J("action-delete"),fe=y.useMemo(()=>g?.areaId&&g?.areaId!=="root"&&p.jsx(dt.Action,{onClick:Ee,label:Yo,children:p.jsx(t_,{size:16})}),[g?.areaId,Yo]),Pe=y.useMemo(()=>B(D({},g),{areaId:n,zoneCompound:i,index:o,depth:t+1,registerLocalZone:A,unregisterLocalZone:E}),[g,n,i,o,t,A,E]),He=N(X=>{var ae;return((ae=X.currentRichText)==null?void 0:ae.inlineComponentId)===n?X.currentRichText:null}),Mt=P.duplicate||P.delete;return p.jsxs(zo,{value:Pe,children:[Jt&&Wt&&Ao.createPortal(p.jsxs("div",{className:tr({isSelected:s,isDragging:$,hover:Ht||Hr}),style:D({},Ie),"data-puck-overlay":!0,children:[l,a&&p.jsx("div",{className:tr("loadingOverlay"),children:p.jsx(Or,{})}),p.jsx("div",{className:tr("actionsOverlay"),style:{top:A0/h},children:p.jsx("div",{className:tr("actions"),style:{transform:`scale(${1/h}`,top:P0/h,right:0,paddingLeft:rd,paddingRight:rd},ref:_r,children:p.jsxs(Ke,{parentAction:fe,label:c,children:[He&&p.jsxs(p.Fragment,{children:[p.jsx(Ly,{editor:He.editor,field:He.field,inline:!0,readOnly:!1}),Mt&&p.jsx(dt.Separator,{})]}),P.duplicate&&p.jsx(dt.Action,{onClick:be,label:Ko,children:p.jsx(ul,{className:tr("actionsAction")})}),P.delete&&p.jsx(dt.Action,{onClick:St,label:ba,children:p.jsx(dl,{className:tr("actionsAction")})})]})})}),p.jsx("div",{className:tr("overlayWrapper"),children:p.jsx(Re,{componentId:n,componentType:r,hover:Ht,isSelected:s,children:p.jsx("div",{className:tr("overlay")})})})]}),xe||document.body),e(re)]})};z();var _v={DropZone:"_DropZone_wc2ks_1","DropZone--hasChildren":"_DropZone--hasChildren_wc2ks_11","DropZone--isAreaSelected":"_DropZone--isAreaSelected_wc2ks_24","DropZone--hoveringOverArea":"_DropZone--hoveringOverArea_wc2ks_25","DropZone--isRootZone":"_DropZone--isRootZone_wc2ks_25","DropZone-item":"_DropZone-item_wc2ks_39","DropZone-linePlaceholder":"_DropZone-linePlaceholder_wc2ks_43","DropZone-hitbox":"_DropZone-hitbox_wc2ks_55","DropZone--isEnabled":"_DropZone--isEnabled_wc2ks_63","DropZone--isAnimating":"_DropZone--isAnimating_wc2ks_74"};z();var yv=(e,{allow:t,disallow:r})=>{if(!e)return!0;const n=new Set(t),o=new Set(r);return r?(o.has(e)&&n.has(e)&&o.delete(e),!o.has(e)):t?n.has(e):!0};z();z();var bv={Drawer:"_Drawer_1n90m_1","Drawer-draggable":"_Drawer-draggable_1n90m_8","Drawer-draggableBg":"_Drawer-draggableBg_1n90m_12","DrawerItem-draggable":"_DrawerItem-draggable_1n90m_22","DrawerItem--disabled":"_DrawerItem--disabled_1n90m_38",DrawerItem:"_DrawerItem_1n90m_22","Drawer--isDraggingFrom":"_Drawer--isDraggingFrom_1n90m_48","DrawerItem-name":"_DrawerItem-name_1n90m_72"};z();z();z();function O0(e,t){const r=setTimeout(e,t);return()=>clearTimeout(r)}function L0(e,t){const r=()=>performance.now();let n,o=0;return function(...i){const a=r(),s=this;a-o>=t?(e.apply(s,i),o=a):(n?.(),n=O0(()=>{e.apply(s,i),o=r()},t-(a-o)))}}z();var R0=class{constructor(e,t){this.scaleFactor=1,this.frameEl=null,this.frameRect=null;var r;this.target=e,this.original=t,this.frameEl=document.querySelector("iframe#preview-frame"),this.frameEl&&(this.frameRect=this.frameEl.getBoundingClientRect(),this.scaleFactor=this.frameRect.width/(((r=this.frameEl.contentWindow)==null?void 0:r.innerWidth)||1))}get x(){return this.original.x}get y(){return this.original.y}get global(){return document!==this.target.ownerDocument&&this.frameRect?{x:this.x*this.scaleFactor+this.frameRect.left,y:this.y*this.scaleFactor+this.frameRect.top}:this.original}get frame(){return document===this.target.ownerDocument&&this.frameRect?{x:(this.x-this.frameRect.left)/this.scaleFactor,y:(this.y-this.frameRect.top)/this.scaleFactor}:this.original}};z();var F0=typeof PointerEvent<"u"?PointerEvent:Event,kv=class extends F0{constructor(e,t){super(e,t),this._originalTarget=null,this.originalTarget=t.originalTarget}set originalTarget(e){this._originalTarget=e}get originalTarget(){return this._originalTarget}},B0=e=>e.sort((t,r)=>{const n=t.data,o=r.data;return n.depth>o.depth?1:o.depth>n.depth?-1:0}),N0=e=>{let t=e?.id;if(!e)return null;if(e.type==="component"){const r=e.data;r.containsActiveZone?t=null:t=r.zone}else if(e.type==="void")return"void";return t},ui=6,$0=(e,t)=>{const r=[];let n=e.target.ownerDocument.elementsFromPoint(e.x,e.y);const o=n.find(a=>a.getAttribute("data-puck-preview")),i=n.find(a=>a.getAttribute("data-puck-drawer"));if(i&&(n=[i]),o){const a=ft();a&&(n=a.elementsFromPoint(e.frame.x,e.frame.y))}if(n)for(let a=0;a<n.length;a++){const s=n[a],l=s.getAttribute("data-puck-dropzone"),c=s.getAttribute("data-puck-dnd"),d=s.hasAttribute("data-puck-dnd-void");if((l||c)&&!d){const u=s.getBoundingClientRect(),f={left:u.left+ui,right:u.right-ui,top:u.top+ui,bottom:u.bottom-ui};if(e.frame.x<f.left||e.frame.x>f.right||e.frame.y>f.bottom||e.frame.y<f.top)continue}if(l){const u=t.registry.droppables.get(l);u&&r.push(u)}if(c){const u=t.registry.droppables.get(c);u&&r.push(u)}}return r},H0=(e,t)=>{var r;const n=$0(e,t);if(n.length>0){const o=B0(n),i=t.dragOperation.source,a=o.findIndex(h=>h.id===i?.id),s=i?.id;let l=[...o];s&&a>-1&&l.splice(a,1),l=l.filter(h=>{const m=h.data;if(s&&a>-1&&m.path.indexOf(s)>-1)return!1;if(h.type==="dropzone"){const b=h.data;if(!b.isDroppableTarget||b.areaId===s)return!1}else if(h.type==="component"&&!h.data.inDroppableZone)return!1;return!0}),l.reverse();const c=l[0];if(!c)return{zone:null,area:null};const d=c.data,u="containsActiveZone"in d,f=N0(c),v=u&&d.containsActiveZone?l[0].id:(r=l[0])==null?void 0:r.data.areaId;return{zone:f,area:v}}return{zone:Ge,area:Ar}},W0=({onChange:e},t)=>class extends Ye{constructor(n,o){super(n),!(typeof window>"u")&&this.registerEffect(()=>{const a=L0(c=>{const d=c instanceof kv&&c.originalTarget||c.target,u=new R0(d,{x:c.clientX,y:c.clientY});document.elementsFromPoint(u.global.x,u.global.y).some(h=>h.id===t)&&e(H0(u,n),n)},50),s=c=>{a(c)};return document.body.addEventListener("pointermove",s,{capture:!0}),()=>{document.body.removeEventListener("pointermove",s,{capture:!0})}})}};z();var q0=({zones:e,itemId:t,targetZone:r,getExpectedOrder:n})=>{const o=ft();if(!o||Pc(o))return()=>{};const i=Array.from(new Set(e)).map(c=>`${jo(c)} > [data-puck-component]:not([data-dnd-dragging]):not([data-dnd-placeholder])`).join(", "),a=()=>{const c=new Map;return o.querySelectorAll(i).forEach(d=>{const u=d.getAttribute("data-puck-component");u&&u!==t&&c.set(u,{el:d,rect:d.getBoundingClientRect()})}),c},s=a(),l=n();return()=>{vv(o,{zones:e,itemId:t,targetZone:r,getExpectedOrder:n,initialExpectedOrder:l},()=>{a().forEach(({el:c,rect:d},u)=>{var f;const v=(f=s.get(u))==null?void 0:f.rect;if(!v)return;const h=v.x-d.x,m=v.y-d.y;Math.abs(h)<1&&Math.abs(m)<1||c.animate({translate:[`${h}px ${m}px 0`,"0px 0px 0"]},Ac)})})}};z();var Za=(e,{isDraggingBetweenSlots:t=!1,isNewComponent:r=!1}={})=>e==="auto"?t||r?"static":"fluid":e;z();z();z();var qo=(e,t)=>{const r=e.indexes.nodes[t];if(!r)return;const n=`${r.parentId}:${r.zone}`,o=e.indexes.zones[n].contentIds.indexOf(t);return{zone:n,index:o}};function Dn(e,t,r="force",n=!1,o){return ke(this,null,function*(){const i=yield t().resolveComponentData(e,r);if(!i.didChange&&!n)return;const a=qo(t().state,i.node.props.id);if(!a){console.warn(`Warning: Could not find component with id "${e.props.id}" to resolve its data. Component may have been removed or the id is invalid.`);return}t().dispatch({type:"replace",data:bn(i.node),destinationIndex:a.index,destinationZone:a.zone,ui:o})})}var V0=(e,t,r,n)=>ke(null,null,function*(){const{getState:o}=n,i=lt(e),a={type:"insert",componentType:e,destinationIndex:r,destinationZone:t,id:i},s=o().state,l=$d(s,a,o()),c=o().dispatch;c(B(D({},a),{recordHistory:!0}));const d={index:r,zone:t};c({type:"setUi",ui:{itemSelector:d}});const u=Qe(d,l);u&&(yield Dn(u,o,"insert"))});z();var xv=(e,t,r,n)=>ke(null,null,function*(){var o,i,a;const s=n.getState().dispatch;s({type:"move",sourceIndex:t.index,sourceZone:(o=t.zone)!=null?o:Ge,destinationIndex:r.index,destinationZone:(i=r.zone)!=null?i:Ge,recordHistory:!1});const l=(a=n.getState().state.indexes.nodes[e])==null?void 0:a.data;l&&(yield Dn(l,n.getState,"move"))});z();function wv(e){function t(r){return r?r.getAttribute("dir")||t(r.parentElement):"ltr"}return e?t(e):"ltr"}z();z();z();var Yi=(e,t,r)=>Math.max(t,Math.min(r,e)),Z0=(e,t)=>{const r=Yi(e.x,Math.min(t.x1,t.x2),Math.max(t.x1,t.x2)),n=Yi(e.y,Math.min(t.y1,t.y2),Math.max(t.y1,t.y2));return Math.hypot(e.x-r,e.y-n)};z();var U0=e=>{const t=e.replace(/\[[^\]]*\]/g," ").trim();return t&&t!=="none"?t.split(/\s+/).length:0},Sv=(e,t,r=t.getComputedStyle(e))=>{const n=r.display,o=wv(e)==="rtl";if(n==="flex"||n==="inline-flex"){const i=r.flexDirection;if(i.startsWith("row")){const a=i==="row-reverse";return{axis:"x",reversed:o?!a:a}}return{axis:"y",reversed:i==="column-reverse"}}return n==="grid"||n==="inline-grid"?r.gridAutoFlow.startsWith("column")||U0(r.gridTemplateColumns)>1?{axis:"x",reversed:o}:{axis:"y",reversed:!1}:{axis:"y",reversed:!1}},Iv=({axis:e,reversed:t})=>{const r=e==="x",n=t?-1:1;return{horizontal:r,reversed:t,forward:n,start:s=>r?t?s.right:s.left:t?s.bottom:s.top,end:s=>r?t?s.left:s.right:t?s.top:s.bottom,isBefore:(s,l)=>n>0?s<=l:s>=l}},nd=(e,t,r)=>{var n,o;const i=e.ownerDocument.defaultView;if(!i)return null;const a=new Map(r.map((j,w)=>[j,w])),s=Array.from(e.querySelectorAll(":scope > [data-puck-component]:not([data-dnd-dragging]):not([data-dnd-placeholder])")).map(j=>{var w,A;return{index:(A=a.get((w=j.getAttribute("data-puck-component"))!=null?w:""))!=null?A:-1,el:j}}).filter(j=>j.index!==-1).sort((j,w)=>j.index-w.index).map(({index:j,el:w})=>({index:j,rect:w.getBoundingClientRect()}));if(s.length===0)return 0;const l=Sv(e,i),{horizontal:c,reversed:d,start:u,end:f}=Iv(l),v=(j,w,A,E=[A])=>{let I=1/0,k=-1/0;for(const P of E)I=Math.min(I,c?P.top:P.left),k=Math.max(k,c?P.bottom:P.right);return c?{index:j,x1:w,x2:w,y1:A.top,y2:A.bottom,laneStart:I,laneEnd:k}:{index:j,x1:A.left,x2:A.right,y1:w,y2:w,laneStart:I,laneEnd:k}},h=[],m=(j,w,A)=>{const E=A==="before"?u(w):f(w);return v(j,E,w)};for(let j=0;j<=s.length;j++){const w=s[j-1],A=s[j];if(!A)h.push(m(w.index+1,w.rect,"after"));else if(!w)h.push(m(A.index,A.rect,"before"));else if(A.index-w.index>1)h.push(m(w.index+1,w.rect,"after")),h.push(m(A.index,A.rect,"before"));else if(d?f(w.rect)<u(A.rect):f(w.rect)>u(A.rect))h.push(m(A.index,A.rect,"before")),h.push(m(A.index,w.rect,"after"));else{const E=(f(w.rect)+u(A.rect))/2;h.push(v(A.index,E,A.rect,[w.rect,A.rect]))}}const b=c?t.y:t.x;let S=null,x=1/0,_=null,g=1/0;for(const j of h){const w=Z0(t,j);w<x&&(x=w,S=j),b>=j.laneStart&&b<=j.laneEnd&&w<g&&(g=w,_=j)}return(o=(n=_??S)==null?void 0:n.index)!=null?o:null};z();var od=(e,t)=>{var r;const n=document.querySelector("iframe#preview-frame");if(!n||e.ownerDocument!==n.contentDocument)return t;const o=n.getBoundingClientRect(),i=o.width/(((r=n.contentWindow)==null?void 0:r.innerWidth)||1);return i>0?{x:(t.x-o.left)/i,y:(t.y-o.top)/i}:t},Y0=e=>{const t=me(),r=y.useRef(null),n=y.useCallback(l=>{var c;const d=(c=ft())==null?void 0:c.querySelector("[data-puck-entry]");l?d?.setAttribute("data-puck-line-drag","true"):d?.removeAttribute("data-puck-line-drag")},[]),o=y.useCallback((l,c)=>{var d;const u=(d=ft())==null?void 0:d.querySelector(jo(l));if(!u)return null;const f=od(u,c.dragOperation.position.current),v=Ui(t.getState().state,l);return nd(u,f,v)},[t]),i=y.useCallback(l=>{var c;const{previewIndex:d={}}=e.getState(),u=Object.values(d).find(S=>S?.linePlaceholder);if(!u)return;const f=(c=ft())==null?void 0:c.querySelector(jo(u.zone));if(!f)return;const v=od(f,l.dragOperation.position.current),h=f.getBoundingClientRect();if(!(v.x>=h.left&&v.x<=h.right&&v.y>=h.top&&v.y<=h.bottom))return;const b=nd(f,v,Ui(t.getState().state,u.zone));b!==null&&b!==u.index&&e.setState({previewIndex:B(D({},d),{[u.zone]:B(D({},u),{index:b})})})},[t,e]),a=y.useCallback(()=>{var l;(l=r.current)==null||l.call(r),r.current=null},[]),s=y.useCallback(l=>{a();const c=ft();if(!c)return;let d=null;const u=()=>{d===null&&(d=requestAnimationFrame(()=>{d=null,i(l)}))};c.addEventListener("scroll",u,{capture:!0,passive:!0}),r.current=()=>{d!==null&&cancelAnimationFrame(d),c.removeEventListener("scroll",u,{capture:!0})}},[a,i]);return y.useEffect(()=>a,[a]),{getTargetIndex:o,setActive:n,startScrollTracking:s,stopScrollTracking:a,update:i}},Ev=y.createContext({dragListeners:{}});function K0(e,t,r=[]){const{setDragListeners:n}=y.useContext(Ev);y.useEffect(()=>{n&&n(o=>B(D({},o),{[e]:[...o[e]||[],t]}))},r)}var X0=100,G0=e=>{const t=y.useRef(null);return y.useCallback(r=>{Vs.setState({fallbackEnabled:!1});const n=lt();t.current=n,setTimeout(()=>{t.current===n&&(Vs.setState({fallbackEnabled:!0}),r.collisionObserver.forceUpdate(!0))},e)},[])},J0=({children:e,disableAutoScroll:t,behavior:r="auto"})=>{const n=N(I=>I.dispatch),o=N(I=>I.instanceId),i=me(),a=y.useRef(null),s=G0(100),[l]=y.useState(()=>{const I=new Map;return Dr(()=>({zoneDepthIndex:{},nextZoneDepthIndex:{},areaDepthIndex:{},nextAreaDepthIndex:{},draggedItem:null,previewIndex:{},enabledIndex:{},hoveringComponent:null,registerRootVirtualizer:(k,P)=>{I.set(k,P)},unregisterRootVirtualizer:k=>{I.delete(k)},scrollToComponent:k=>{const P=Array.from(I.values());if(P.length>0)for(const T of P){const F=T.resolveIndex(k);F<0||T.virtualizer.scrollToIndex(F,{behavior:"auto",align:"auto"})}else{const T=ft(),F=T?.querySelector(yn(k));F?.scrollIntoView({behavior:"smooth"})}}}))}),c=y.useCallback(I=>{const{zoneDepthIndex:k={},areaDepthIndex:P={}}=l.getState()||{},T=Object.keys(k).length>0,F=Object.keys(P).length>0;let H=!1,R=!1;return(I.zone&&!k[I.zone]||!I.zone&&T)&&(H=!0),(I.area&&!P[I.area]||!I.area&&F)&&(R=!0),{zoneChanged:H,areaChanged:R}},[l]),d=y.useCallback((I,k)=>{const{zoneChanged:P,areaChanged:T}=c(I);!P&&!T||(l.setState({zoneDepthIndex:I.zone?{[I.zone]:!0}:{},areaDepthIndex:I.area?{[I.area]:!0}:{}}),s(k),setTimeout(()=>{k.collisionObserver.forceUpdate(!0)},50),a.current=null)},[l]),u=Kh(d,X0),f=()=>{u.cancel(),a.current=null};y.useEffect(()=>{},[]);const[v]=y.useState(()=>[...t?dr.plugins.filter(I=>I!==sc):dr.plugins,W0({onChange:(I,k)=>{const P=l.getState(),{zoneChanged:T,areaChanged:F}=c(I),H=k.dragOperation.status.dragging;if(F||T){let R={},L={};I.zone&&(R={[I.zone]:!0}),I.area&&(L={[I.area]:!0}),l.setState({nextZoneDepthIndex:R,nextAreaDepthIndex:L})}if(I.zone!=="void"&&P?.zoneDepthIndex.void){d(I,k);return}if(F){if(H){const R=a.current;R&&R.area===I.area&&R.zone===I.zone||(f(),u(I,k),a.current=I)}else f(),d(I,k);return}T&&d(I,k),f()}},o)]),h=wc(),[m,b]=y.useState({}),S=y.useRef(null),x=y.useRef(void 0),{getTargetIndex:_,setActive:g,startScrollTracking:j,stopScrollTracking:w,update:A}=Y0(l),E=y.useMemo(()=>({mode:"edit",areaId:"root",depth:0}),[]);return p.jsx(Ev.Provider,{value:{dragListeners:m,setDragListeners:b},children:p.jsx(fc,{plugins:v,sensors:h,onDragEnd:(I,k)=>{var P,T;w();const F=(P=ft())==null?void 0:P.querySelector("[data-puck-entry]");F?.removeAttribute("data-puck-dragging");const{source:H,target:R}=I.operation;if(!H){g(!1),l.setState({draggedItem:null});return}const{zone:L,index:U}=H.data,{previewIndex:Y={}}=l.getState()||{},$=(T=Object.values(Y).find(re=>re?.props.id===H.id&&!re.ghost))!=null?T:null,K=!I.canceled&&R?.type!=="void"&&$?.linePlaceholder?q0({zones:x.current?[x.current.zone,$.zone]:[$.zone],itemId:$.type==="move"?$.props.id:void 0,targetZone:$.zone,getExpectedOrder:()=>Ui(i.getState().state,$.zone)}):null,oe=()=>{var re,xe,Q,ie,Ie;if(g(!1),l.setState({draggedItem:null}),I.canceled||R?.type==="void"){l.setState({previewIndex:{}}),(re=m.dragend)==null||re.forEach(M=>{M(I,k)}),n({type:"setUi",ui:{itemSelector:null,isDragging:!1}});return}const V=$&&$.linePlaceholder&&x.current&&$.zone===x.current.zone&&$.index>x.current.index?$.index-1:(xe=$?.index)!=null?xe:U;$&&(l.setState({previewIndex:{}}),$.type==="insert"?V0($.componentType,$.zone,$.index,i):x.current&&xv($.props.id,x.current,B(D({},$),{index:V}),i),K?.());const C=((Q=x.current)==null?void 0:Q.zone)!==$?.zone||((ie=x.current)==null?void 0:ie.index)!==V;n({type:"setUi",ui:{itemSelector:$?{index:V,zone:$.zone}:{index:U,zone:L},isDragging:!1},recordHistory:C}),(Ie=m.dragend)==null||Ie.forEach(M=>{M(I,k)})};let Z;Z=ct(()=>{H.status==="idle"&&(oe(),Z?.())})},onDragMove:(I,k)=>{var P;A(k),(P=m.dragmove)==null||P.forEach(T=>{T(I,k)})},onDragOver:(I,k)=>{var P,T,F,H,R,L;if(I.preventDefault(),!((P=l.getState())==null?void 0:P.draggedItem))return;f();const{source:Y,target:$}=I.operation;if(!$||!Y||$.type==="void")return;const[K]=Y.id.split(":"),[oe]=$.id.split(":"),Z=Y.data;let re=Z.zone,xe=Z.index,Q="",ie=0;if($.type==="component"){const V=$.data;Q=V.zone;const C=(T=k.collisionObserver.collisions[0])==null?void 0:T.data,M=Ic(C?.direction,wv($.element));ie=Ec({position:M,sourceIndex:xe,targetIndex:V.index,isSameZone:re===Q})}else Q=$.id.toString(),ie=0;const Ie=((F=i.getState().state.indexes.nodes[$.id])==null?void 0:F.path)||[];if(!(oe===K||Ie.find(V=>{const[C]=V.split(":");return C===K}))){if(S.current==="new"){const V=Za(r,{isNewComponent:!0})==="static";V&&(ie=(H=_(Q,k))!=null?H:ie),g(V),l.setState({previewIndex:{[Q]:{componentType:Z.componentType,type:"insert",index:ie,zone:Q,element:Y.element,props:{id:Y.id.toString()},linePlaceholder:V}}})}else{x.current||(x.current={zone:Z.zone,index:Z.index});const V=Qe(x.current,i.getState().state);if(V){const C=x.current.zone,M=C!==Q,O=Za(r,{isDraggingBetweenSlots:M})==="static";O&&(ie=(R=_(Q,k))!=null?R:ie),g(O);const q={[Q]:{componentType:Z.componentType,type:"move",index:ie,zone:Q,props:V.props,element:Y.element,linePlaceholder:O}};if(O&&M){const W=l.getState().previewIndex[C];let G=x.current.index;W&&!W.linePlaceholder&&(G=W.index),q[C]={componentType:Z.componentType,type:"move",index:G,zone:C,props:V.props,element:Y.element,ghost:!0}}l.setState({previewIndex:q})}}(L=m.dragover)==null||L.forEach(V=>{V(I,k)})}},onDragStart:(I,k)=>{var P;r!=="fluid"&&j(k);const{source:T}=I.operation;if(T?.type==="component"){const F=T.data,H={zone:F.zone,index:F.index};x.current=H;const R=Qe(H,i.getState().state);if(R){const L=Za(r)==="static";g(L),l.setState({previewIndex:{[F.zone]:{componentType:F.componentType,type:"move",index:F.index,zone:F.zone,props:R.props,element:T.element,linePlaceholder:L}}})}}(P=m.dragstart)==null||P.forEach(F=>{F(I,k)})},onBeforeDragStart:I=>{var k,P,T,F;const H=((k=I.operation.source)==null?void 0:k.type)==="drawer";S.current=H?"new":"existing",x.current=void 0,l.setState({draggedItem:I.operation.source}),((P=i.getState().selectedItem)==null?void 0:P.props.id)!==((T=I.operation.source)==null?void 0:T.id)?n({type:"setUi",ui:{itemSelector:null,isDragging:!0},recordHistory:!1}):n({type:"setUi",ui:{isDragging:!0},recordHistory:!1});const R=(F=ft())==null?void 0:F.querySelector("[data-puck-entry]");R?.setAttribute("data-puck-dragging","true"),g(!1)},children:p.jsx(k0,{store:l,children:p.jsx(zo,{value:E,children:e})})})})},Q0=({children:e,disableAutoScroll:t,behavior:r})=>N(o=>o.status)==="LOADING"?e:p.jsx(J0,{disableAutoScroll:t,behavior:r,children:e}),Ci=ee("Drawer",bv),Gr=ee("DrawerItem",bv),Us=({children:e,name:t,label:r,dragRef:n,isDragDisabled:o})=>{const i=y.useMemo(()=>e||(({children:a})=>p.jsx("div",{className:Gr("default"),children:a})),[e]);return p.jsx("div",{className:Gr({disabled:o}),ref:n,onMouseDown:a=>a.preventDefault(),"data-testid":n?`drawer-item:${t}`:"","data-puck-drawer-item":!0,children:p.jsx(i,{name:t,children:p.jsx("div",{className:Gr("draggableWrapper"),children:p.jsxs("div",{className:Gr("draggable"),children:[p.jsx("div",{className:Gr("name"),children:r??t}),p.jsx("div",{className:Gr("icon"),children:p.jsx(iv,{})})]})})})})},ew=({children:e,name:t,label:r,id:n,isDragDisabled:o})=>{const i=y.useContext($e),a=gv(i),{ref:s}=Sx({id:n,data:{componentType:t},disabled:o,type:"drawer",plugins:[Ro.configure({dropAnimation:a})]});return p.jsxs("div",{className:Ci("draggable"),children:[p.jsx("div",{className:Ci("draggableBg"),children:p.jsx(Us,{name:t,label:r,children:e})}),p.jsx("div",{className:Ci("draggableFg"),children:p.jsx(Us,{name:t,label:r,dragRef:s,isDragDisabled:o,children:e})})]})},tw=({name:e,children:t,id:r,label:n,index:o,isDragDisabled:i})=>{const a=r||e,[s,l]=y.useState(lt(a));return typeof o<"u"&&console.error("Warning: The `index` prop on Drawer.Item is deprecated and no longer required."),K0("dragend",()=>{l(lt(a))},[a]),p.jsx("div",{children:p.jsx(ew,{name:e,label:n,id:s,isDragDisabled:i,children:t})},s)},Dc=({children:e,droppableId:t,direction:r})=>{t&&console.error("Warning: The `droppableId` prop on Drawer is deprecated and no longer required."),r&&console.error("Warning: The `direction` prop on Drawer is deprecated and no longer required to achieve multi-directional dragging.");const n=ga(),{ref:o}=gc({id:n,type:"void",collisionPriority:0});return p.jsx("div",{className:Ci(),ref:o,"data-puck-dnd":n,"data-puck-drawer":!0,"data-puck-dnd-void":!0,children:e})};Dc.Item=tw;z();var id=(e,t)=>e.getState().state.indexes.zones[t].contentIds.length,rw=({zoneCompound:e,userMinEmptyHeight:t,ref:r})=>{const n=me(),[o,i]=y.useState(0),[a,s]=y.useState(!1),{draggedItem:l,isZone:c}=Ft($e,v=>{var h,m;return{draggedItem:((h=v.draggedItem)==null?void 0:h.data.zone)===e?v.draggedItem:null,isZone:((m=v.draggedItem)==null?void 0:m.data.zone)===e}}),d=y.useRef(0),u=fv(v=>{if(v){const h=id(n,e);if(i(0),h||d.current===0){s(!1);return}const m=n.getState().selectedItem,b=n.getState().state.indexes.zones,S=n.getState().nodes;S.setOverlayVisible(m?.props.id,!1),setTimeout(()=>{var x;const _=((x=b[e])==null?void 0:x.contentIds)||[];S.syncNodes(_),m&&setTimeout(()=>{S.syncNode(m.props.id),S.setOverlayVisible(m.props.id,!0)},200),s(!1)},100)}},[n,o,e]);y.useEffect(()=>{if(l&&r.current&&c){const v=r.current.getBoundingClientRect();return d.current=id(n,e),i(v.height),s(!0),u()}},[r.current,l,u]);const f=isNaN(Number(t))?t:`${t}px`;return[o?`${o}px`:f,a]};z();z();function nw(e,t){const r=jh();return y.useCallback((...n)=>ke(null,null,function*(){return yield r?.renderer.rendering,e(...n)}),[...t,r])}var ow=(e,t)=>{const r=y.useContext($e),n=Ft($e,d=>d.previewIndex[t]),o=N(d=>d.state.ui.isDragging),[i,a]=y.useState(e),[s,l]=y.useState(n),c=nw((d,u,f,v,h,m)=>{f&&!h||(u&&!u.linePlaceholder?a(po(d.filter(b=>b!==u.props.id),u.index,u.props.id)):a(h&&!m?d.filter(b=>b!==v):d),l(u))},[]);return y.useEffect(()=>{var d;const u=r.getState(),f=(d=u.draggedItem)==null?void 0:d.id,v=Object.values(u.previewIndex||{}),h=v.length>0,m=v.some(b=>b?.linePlaceholder);c(e,n,o,f,h,m)},[e,n,o]),[i,s]};z();var iw="dynamic",aw="x",ad="y",sw=(e,t)=>{const r=N(a=>a.status),[n,o]=y.useState(t||ad),i=y.useCallback(()=>{if(e.current){const a=window.getComputedStyle(e.current);a.display==="grid"?o(iw):a.display==="flex"&&a.flexDirection==="row"?o(aw):o(ad)}},[e.current]);return y.useEffect(()=>{const a=()=>{i()};return window.addEventListener("viewportchange",a),()=>{window.removeEventListener("viewportchange",a)}},[]),y.useEffect(i,[r,t]),[n,i]};z();var lw=({componentId:e,zone:t})=>{const r=N(i=>i.config),n=N(i=>i.metadata),o=N(Ne(i=>{var a,s;const l=i.state.indexes;return((s=(a=l.zones[`${e}:${t}`])==null?void 0:a.contentIds)!=null?s:[]).map(d=>l.nodes[d].flatData)}));return p.jsx(gl,{content:o,zone:t,config:r,metadata:n})};z();function Cv(e,t,r,n,o){const i=y.useRef(null),a=y.useRef(null),s=y.useRef(t.props),l=y.useMemo(()=>gp(r,n,o),[r,n,o]),c=y.useMemo(()=>{var u,f,v,h;const m=t.type==="root"?e.root:(u=e.components)==null?void 0:u[t.type],b=(f=m?.fields)!=null?f:{},S=i.current!==l;let x,_=!1;if(!a.current||S)for(const j in t.props)((v=b[j])==null?void 0:v.type)==="slot"&&(_=!0);else{x=["id"];const j=new Set([...Object.keys(t.props),...Object.keys(a.current)]);for(const w of j)t.props[w]!==a.current[w]&&(x.push(w),((h=b[w])==null?void 0:h.type)==="slot"&&(_=!0))}const g=Mr(t,l,e,!1,_,x).props;return a.current=t.props,i.current=l,s.current=x?D(D({},s.current),g):g,s.current},[e,t,l]);return y.useMemo(()=>D(D({},t.props),c),[t.props,c])}z();z();z();var zv=(e,t={})=>{if(!e)return;const{disableDrag:r=!1,disableDragOnFocus:n=!0}=t,o=s=>{s.stopPropagation()};e.addEventListener("mouseover",o,{capture:!0});const i=()=>{setTimeout(()=>{e.addEventListener("pointerdown",o,{capture:!0})},200)},a=()=>{e.removeEventListener("pointerdown",o,{capture:!0})};return r?e.addEventListener("pointerdown",o,{capture:!0}):n&&(e.addEventListener("focus",i,{capture:!0}),e.addEventListener("blur",a,{capture:!0})),e.setAttribute("data-puck-overlay-portal","true"),()=>{e.removeEventListener("mouseover",o,{capture:!0}),r?e.removeEventListener("pointerdown",o,{capture:!0}):n&&(e.removeEventListener("focus",i,{capture:!0}),e.removeEventListener("blur",a,{capture:!0})),e.removeAttribute("data-puck-overlay-portal")}};z();var cw={InlineTextField:"_InlineTextField_104qp_1"},uw=ee("InlineTextField",cw),dw=({propPath:e,componentId:t,value:r,isReadOnly:n,opts:o={}})=>{var i;const a=y.useRef(null),s=me(),l=(i=o.disableLineBreaks)!=null?i:!1;y.useEffect(()=>{const v=s.getState(),h=v.state.indexes.nodes[t].data;if(!v.getComponentConfig(h.type))throw new Error(`InlineTextField Error: No config defined for ${h.type}`);if(a.current){const b=r??"";b!==a.current.innerText&&a.current.replaceChildren(b);const S=zv(a.current),x=_=>ke(null,null,function*(){const j=s.getState().state.indexes.nodes[t];let w=_.target.innerText;l&&(w=w.replaceAll(/\n/gm,""));const A=pa(j.data.props,e,w);yield Dn(B(D({},j.data),{props:A}),s.getState,"replace",!0)});return a.current.addEventListener("input",x),()=>{var _;(_=a.current)==null||_.removeEventListener("input",x),S?.()}}},[s,a.current,r,l]);const[c,d]=y.useState(!1),[u,f]=y.useState(!1);return p.jsx("span",{className:uw(),ref:a,contentEditable:c||u?"plaintext-only":"false",onClick:v=>{v.preventDefault(),v.stopPropagation()},onClickCapture:v=>{v.preventDefault(),v.stopPropagation();const h=qo(s.getState().state,t);s.getState().setUi({itemSelector:h})},onKeyDown:v=>{v.stopPropagation(),(l&&v.key==="Enter"||n)&&v.preventDefault()},onKeyUp:v=>{v.stopPropagation(),v.preventDefault()},onMouseOverCapture:()=>d(!0),onMouseOutCapture:()=>d(!1),onFocus:()=>f(!0),onBlur:()=>f(!1)})},Ua=y.memo(dw),pw=()=>({text:({value:e,componentId:t,field:r,propPath:n,isReadOnly:o})=>r.contentEditable?p.jsx(Ua,{propPath:n,componentId:t,value:e,opts:{disableLineBreaks:!0},isReadOnly:o}):e,textarea:({value:e,componentId:t,field:r,propPath:n,isReadOnly:o})=>r.contentEditable?p.jsx(Ua,{propPath:n,componentId:t,value:e,isReadOnly:o}):e,custom:({value:e,componentId:t,field:r,propPath:n,isReadOnly:o})=>r.contentEditable&&typeof e=="string"?p.jsx(Ua,{propPath:n,componentId:t,value:e,isReadOnly:o}):e});z();var fw=y.lazy(()=>gr(()=>import("./Editor-44C53YAG-DDG9zMQE.js"),__vite__mapDeps([13,12,3,2,1,4,5,6,7])).then(e=>({default:e.Editor}))),jv=y.lazy(()=>gr(()=>import("./Render-DQXAYUBI-BuHF9_A_.js"),__vite__mapDeps([11,12,3,2,4,5,6,7])).then(e=>({default:e.RichTextRender}))),Av=y.memo(({value:e,componentId:t,propPath:r,field:n,id:o})=>{const i=y.useRef(null),a=me(),s=f=>{f.preventDefault(),f.stopPropagation()},l=f=>{f.preventDefault(),f.stopPropagation();const v=qo(a.getState().state,t);a.getState().setUi({itemSelector:v})};y.useEffect(()=>{if(!i.current)return;const f=zv(i.current,{disableDragOnFocus:!0});return()=>f?.()},[i.current]);const c=y.useCallback((f,v)=>ke(null,null,function*(){const m=a.getState().state.indexes.nodes[t],b=pa(m.data.props,r,f);yield Dn(B(D({},m.data),{props:b}),a.getState,"replace",!0,v)}),[a,t,r]),d=y.useCallback(f=>{a.setState({currentRichText:{inlineComponentId:t,inline:!0,field:n,editor:f,id:o}})},[n,t]);if(!n.contentEditable)return p.jsx(y.Suspense,{fallback:p.jsx(mp,{content:e}),children:p.jsx(jv,{content:e,field:n})});const u={content:e,onChange:c,field:n,inline:!0,onFocus:d,id:o,name:r};return p.jsx("div",{ref:i,onClick:s,onClickCapture:l,children:p.jsx(y.Suspense,{fallback:p.jsx(jc,D({},u)),children:p.jsx(fw,D({},u))})})});Av.displayName="InlineEditorWrapper";var hw=()=>({richtext:({value:e,componentId:t,field:r,propPath:n,isReadOnly:o})=>{const{contentEditable:i=!0,tiptap:a}=r;if(i===!1||o)return p.jsx(jv,{content:e,field:r});const s=`${t}_${r.type}_${n}`;return p.jsx(Av,{value:e,componentId:t,propPath:n,field:r,id:s},s)}});z();z();function vw(e,t,r=[]){if(Object.is(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null||Object.getPrototypeOf(e)!==Object.getPrototypeOf(t))return!1;const n=new Set(r),o=Object.keys(e).filter(a=>!n.has(a)),i=Object.keys(t).filter(a=>!n.has(a));if(o.length!==i.length)return!1;for(let a=0;a<o.length;a++){const s=o[a];if(!Object.prototype.hasOwnProperty.call(t,s))return!1;const l=e[s],c=t[s];if(!Object.is(l,c))return!1}return!0}var gw=({Component:e,componentProps:t})=>p.jsx(e,D({},t)),sd=y.memo(gw,(e,t)=>{let r=!0;return"puck"in e.componentProps&&"puck"in t.componentProps&&(r=vo(e.componentProps.puck,t.componentProps.puck)),e.Component===t.Component&&vw(e.componentProps,t.componentProps,["puck"])&&r});z();var mw=5,Pv=320,Dv=new Map,_w=e=>{var t;return(t=Dv.get(e))!=null?t:Pv},yw=(e,t)=>{t<=0||Dv.set(e,t)},bw=({contentIds:e,zoneCompound:t,renderItem:r})=>{const n=N(_=>{var g,j;return(j=(g=_.selectedItem)==null?void 0:g.props.id)!=null?j:null}),o=ft(),i=y.useContext($e),a=Ft($e,_=>{var g;const j=(g=_.draggedItem)==null?void 0:g.id;return j?String(j):null}),s=Ft($e,_=>{var g,j,w;if((g=_.draggedItem)!=null&&g.id){const[A]=(w=Object.entries((j=_.previewIndex)!=null?j:{}).find(([,E])=>!E?.ghost))!=null?w:[];return A?.split(":")[0]}return null}),l=o?.defaultView,c=y.useRef(new Map),d=me(),u=y.useCallback(_=>{var g,j,w,A;if(!_||_==="root")return-1;const E=e.indexOf(_);if(E>-1)return E;const I=(w=(j=(g=d.getState().state.indexes.nodes)==null?void 0:g[_])==null?void 0:j.path)!=null?w:[];for(let k=I.length-1;k>=0;k-=1){const P=(A=I[k])==null?void 0:A.split(":")[0];if(!P||P==="root")continue;const T=e.indexOf(P);if(T>-1)return T}return-1},[d,e]),f=y.useMemo(()=>{const _=new Set;return[n,a,s].forEach(g=>{const j=u(g);j>-1&&_.add(j)}),Array.from(_).sort((g,j)=>g-j)},[s,a,u,n]),v=y.useCallback(_=>{const g=kc(_);return f.forEach(j=>{g.includes(j)||g.push(j)}),g.sort((j,w)=>j-w),g},[f]),h=rv({count:e.length,getItemKey:_=>e[_],estimateSize:_=>_w(e[_]),getScrollElement:()=>l??null,overscan:mw,observeElementRect:(_,g)=>l?_1(_,g):Xh(_,g),observeElementOffset:(_,g)=>l?b1(_,g):Jh(_,g),scrollToFn:(_,g,j)=>l?x1(_,g,j):ev(_,g,j),rangeExtractor:v,initialOffset:()=>l?l.scrollY:0});y.useEffect(()=>(i.getState().registerRootVirtualizer(t,{resolveIndex:_=>u(_),virtualizer:h}),()=>{i.getState().unregisterRootVirtualizer(t)}),[u,h,t,i]);const m=y.useCallback(_=>{const g=c.current.get(_);if(g)return g;const j=w=>{if(!w)return;const A=Math.ceil(w.getBoundingClientRect().height)||Pv;typeof A=="number"&&A>0&&yw(_,A)};return c.current.set(_,j),j},[]);y.useEffect(()=>{const _=new Set(e);Array.from(c.current.keys()).forEach(g=>{_.has(g)||c.current.delete(g)})},[e]);const b=h.getVirtualItems(),S=h.getTotalSize(),x=y.useMemo(()=>{const _=[];let g=0,j=-1;b.forEach(A=>{if(!A)return;const E=e[A.index],I=Math.max(A.start-g,0);I>0&&_.push(p.jsx("div",{style:{height:`${I}px`}},`gap:${j}:${A.index}`)),_.push(r({componentId:E,index:A.index,measureRef:m(E)})),g=A.end,j=A.index});const w=Math.max(S-g,0);return w>0&&_.push(p.jsx("div",{style:{height:`${w}px`}},`gap:${j}:end`)),_},[S,b,m]);return p.jsx(p.Fragment,{children:x})};z();var kw=ee("DropZone",_v),ld="var(--puck-line-placeholder-width, 2px)",xw=({zoneRef:e,contentIds:t,index:r})=>{const[n,o]=y.useState();return y.useLayoutEffect(()=>{var i,a,s,l;const c=e.current,d=c?.ownerDocument.defaultView;if(!c||!d)return;const u=U=>U?d.getComputedStyle(U):void 0,f=U=>parseFloat(U??"")||0,v=U=>{const Y=t[U];if(typeof Y>"u")return;const $=c.querySelector(`:scope > ${yn(Y)}:not([data-dnd-dragging])`);if($)return{el:$,rect:$.getBoundingClientRect()}},h=c.getBoundingClientRect(),m=d.getComputedStyle(c),b=v(r-1),S=v(r),x=S??b,_=Sv(c,d,m),{horizontal:g,reversed:j,forward:w,start:A,end:E,isBefore:I}=Iv(_),k=f(g?m.columnGap:m.rowGap),P=(U,Y)=>{var $;const K=Y==="start"==!j?g?"marginLeft":"marginTop":g?"marginRight":"marginBottom";return f(($=u(U))==null?void 0:$[K])},T=f(m.borderLeftWidth),F=f(m.borderTopWidth),H=f(m.borderRightWidth),R=f(m.borderBottomWidth);let L;S?b&&I(E(b.rect),A(S.rect))?L=(E(b.rect)+A(S.rect))/2:L=A(S.rect)-w*(Math.max(P(S.el,"start"),k)/2):b?L=E(b.rect)+w*(Math.max(P(b.el,"end"),k)/2):L=g?j?h.right-H-f(m.paddingRight):h.left+T+f(m.paddingLeft):j?h.bottom-R-f(m.paddingBottom):h.top+F+f(m.paddingTop),o(g?{top:((i=x?.rect.top)!=null?i:h.top+F+f(m.paddingTop))-h.top+c.scrollTop-F,height:(a=x?.rect.height)!=null?a:h.height-F-R-f(m.paddingTop)-f(m.paddingBottom),left:Yi(L-h.left+c.scrollLeft-T,0,c.scrollWidth),width:ld,transform:"translateX(-50%)"}:{left:((s=x?.rect.left)!=null?s:h.left+T+f(m.paddingLeft))-h.left+c.scrollLeft-T,width:(l=x?.rect.width)!=null?l:h.width-T-H-f(m.paddingLeft)-f(m.paddingRight),top:Yi(L-h.top+c.scrollTop-F,0,c.scrollHeight),height:ld,transform:"translateY(-50%)"})},[e,t,r]),n?p.jsx("div",{className:kw("linePlaceholder"),style:n,"data-puck-line-placeholder":!0}):null},ww=ee("DropZone",_v),Sw=({element:e,label:t,override:r})=>e?p.jsx("div",{dangerouslySetInnerHTML:{__html:e.outerHTML}}):p.jsx(Us,{name:t,children:r}),Ys=e=>p.jsx(Mv,D({},e)),Iw=({zoneCompound:e,componentId:t,index:r,dragAxis:n,collisionAxis:o,inDroppableZone:i,itemRef:a})=>{var s,l,c,d;const u=N(Z=>Z.metadata),f=y.useContext(Pn),{depth:v=1}=f??{},h=y.useContext($e),m=N(Ne(Z=>{var re;return(re=Z.state.indexes.nodes[t])==null?void 0:re.flatData.props})),b=N(Z=>{var re;return(re=Z.state.indexes.nodes[t])==null?void 0:re.data.type}),S=N(Ne(Z=>{var re;return(re=Z.state.indexes.nodes[t])==null?void 0:re.data.readOnly})),x=me(),_=y.useMemo(()=>{if(m)return Bd({type:b,props:m});const Z=h.getState().previewIndex[e];return t===Z?.props.id?{type:Z.componentType,props:Z.props,previewType:Z.type,element:Z.element}:null},[x,t,e,b,m]),g=N(Z=>_?.type?Z.config.components[_.type]:null),j=y.useMemo(()=>({renderDropZone:Ys,isEditing:!0,dragRef:null,metadata:D(D({},u),g?.metadata)}),[u,g?.metadata]),w=N(Z=>Z.overrides),A=N(Z=>{var re;return((re=Z.componentState[t])==null?void 0:re.loadingCount)>0}),E=N(Z=>{var re;return((re=Z.selectedItem)==null?void 0:re.props.id)===t||!1}),I=J("label-component"),k=J("canvas-noconfig",{type:(l=(s=_?.type)==null?void 0:s.toString())!=null?l:""});let P=(d=(c=g?.label)!=null?c:_?.type.toString())!=null?d:I;const T=y.useMemo(()=>B(D(D({},g?.defaultProps),_?.props),{puck:j,editMode:!0}),[g?.defaultProps,_?.props,j]),F=y.useMemo(()=>{var Z;return{type:(Z=_?.type)!=null?Z:b,props:T}},[_?.type,b,T]),H=N(Z=>Z.config),R=N(Z=>Z.plugins),L=N(Z=>Z.fieldTransforms),U=y.useMemo(()=>D(D(D(D(D({},hl(Ys,Z=>p.jsx(lw,{componentId:t,zone:Z.zone}))),pw()),hw()),R.reduce((Z,re)=>D(D({},Z),re.fieldTransforms),{})),L),[R,L]),Y=Cv(H,F,U,S,A);if(!_)return;const $=g?g.render:()=>p.jsx("div",{style:{padding:48,textAlign:"center"},children:k});let K=_.type;const oe="previewType"in _?_.previewType==="insert":!1;return p.jsx(T0,{id:t,componentType:K,zoneCompound:e,depth:v+1,index:r,isLoading:A,isSelected:E,label:P,autoDragAxis:n,userDragAxis:o,inDroppableZone:i,itemRef:a,children:Z=>{var re;return g?.inline&&!oe?p.jsx(sd,{Component:$,componentProps:B(D({},Y),{puck:B(D({},Y.puck),{dragRef:Z})})}):p.jsx("div",{ref:Z,children:oe?p.jsx(Sw,{label:P,override:(re=w.componentItem)!=null?re:w.drawerItem,element:"element"in _&&_.element?_.element:void 0}):p.jsx(sd,{Component:$,componentProps:Y})})}})},cd=y.memo(Iw),Mv=y.forwardRef(function({zone:t,allow:r,disallow:n,style:o,className:i,minEmptyHeight:a="128px",collisionAxis:s,as:l},c){const d=y.useContext(Pn),u=me(),{areaId:f,depth:v=0,registerLocalZone:h,unregisterLocalZone:m}=d??{},b=N(Ne(C=>{var M;return f?(M=C.state.indexes.nodes[f])==null?void 0:M.path:null}));let S=Ge;f&&t!==Ge&&(S=`${f}:${t}`);const x=S===Ge||t===Ge||f==="root",_=Ft($e,C=>C.nextAreaDepthIndex[f||""]),g=N(Ne(C=>{var M;return(M=C.state.indexes.zones[S])==null?void 0:M.contentIds})),j=N(Ne(C=>{var M;return(M=C.state.indexes.zones[S])==null?void 0:M.type}));y.useEffect(()=>{(!j||j==="dropzone")&&d?.registerZone&&d?.registerZone(S)},[j,u]),y.useEffect(()=>{j==="dropzone"&&S!==Ge&&console.warn("DropZones have been deprecated in favor of slot fields and will be removed in a future version of Puck. Please see the migration guide: https://www.puckeditor.com/docs/guides/migrations/dropzones-to-slots")},[j]);const w=y.useMemo(()=>g||[],[g]),A=y.useRef(null),E=y.useCallback(C=>yv(C,{allow:r,disallow:n}),[r,n]),I=Ft($e,C=>{var M;const O=(M=C.draggedItem)==null?void 0:M.data.componentType;return E(O)}),k=_||x,P=Ft($e,C=>{var M;let O=!0;return O=(M=C.zoneDepthIndex[S])!=null?M:!1,O&&(O=I),O});y.useEffect(()=>(h&&h(S,I||P),()=>{m&&m(S)}),[I,P,S]);const[T,F]=ow(w,S),H=F&&!F.linePlaceholder?1:0,R=T.length===H,L=P&&R,U=y.useContext($e);y.useEffect(()=>{const{enabledIndex:C}=U.getState();U.setState({enabledIndex:B(D({},C),{[S]:P})})},[P,U,S]);const Y={id:S,collisionPriority:P?v:0,disabled:!L,collisionDetector:lv,type:"dropzone",data:{areaId:f,depth:v,isDroppableTarget:I,path:b||[]}},{ref:$}=gc(Y),K=N(C=>C?.selectedItem&&f===C?.selectedItem.props.id),[oe]=sw(A,s),[Z,re]=rw({zoneCompound:S,userMinEmptyHeight:a,ref:A}),xe=y.useCallback(C=>{Zs([A,$,c],C)},[$]),Q=N(C=>C._experimentalVirtualization),ie=l??"div",V=Q&&((f??Ar)===Ar&&v===0);return p.jsxs(ie,{className:`${ww({isRootZone:x,hoveringOverArea:k,isEnabled:P,isAreaSelected:K,hasChildren:w.length>0,isAnimating:re})}${i?` ${i}`:""}`,ref:xe,"data-testid":`dropzone:${S}`,"data-puck-dropzone":S,style:B(D({},o),{"--puck-slot-min-empty-height":Z,backgroundColor:o?.backgroundColor}),children:[V?p.jsx(bw,{contentIds:T,zoneCompound:S,renderItem:C=>p.jsx(cd,{zoneCompound:S,componentId:C.componentId,dragAxis:oe,index:C.index,collisionAxis:s,inDroppableZone:I,itemRef:C.measureRef},C.componentId)}):T.map((C,M)=>p.jsx(cd,{zoneCompound:S,componentId:C,dragAxis:oe,index:M,collisionAxis:s,inDroppableZone:I},C)),F?.linePlaceholder&&p.jsx(xw,{zoneRef:A,contentIds:w,index:F.index})]})}),Ew=({config:e,item:t,metadata:r})=>{const n=e.components[t.type],o=vl(e,t,s=>p.jsx(gl,B(D({},s),{config:e,metadata:r}))),i=y.useMemo(()=>({areaId:o.id,depth:1}),[o]),a=ea(n.fields,o);return p.jsx(zo,{value:i,children:p.jsx(n.render,B(D(D({},o),a),{puck:B(D({},o.puck),{renderDropZone:Ks,metadata:D(D({},r),n.metadata)})}))},o.id)},Ks=e=>p.jsx(Tv,D({},e)),Tv=y.forwardRef(function({className:t,style:r,zone:n,as:o},i){const a=y.useContext(Pn),{areaId:s="root"}=a||{},{config:l,data:c,metadata:d}=y.useContext(Gs);let u=`${s}:${n}`,f=c?.content||[];y.useEffect(()=>{f||a?.registerZone&&a?.registerZone(u)},[f]);const v=o??"div";return!c||!l?null:(u!==Ge&&(f=Nd(c,u).zones[u]),p.jsx(v,{className:t,style:r,ref:i,children:f.map(h=>l.components[h.type]?p.jsx(Ew,{config:l,item:h,metadata:d},h.props.id):null)}))}),Xs=e=>p.jsx(Cw,D({},e)),Cw=y.forwardRef(function(t,r){const n=y.useContext(Pn);return n?.mode==="edit"?p.jsx(p.Fragment,{children:p.jsx(Mv,B(D({},t),{ref:r}))}):p.jsx(p.Fragment,{children:p.jsx(Tv,B(D({},t),{ref:r}))})}),Gs=es.createContext({config:{components:{}},data:{root:{},content:[]},metadata:{}});function zw({config:e,data:t,metadata:r={}}){var n,o;const i=B(D({},t),{root:t.root||{},content:t.content||[]}),a="props"in i.root?i.root.props:i.root,s=a?.title||"",l=B(D({},a),{puck:{renderDropZone:Xs,isEditing:!1,dragRef:null,metadata:r},title:s,editMode:!1,id:"puck-root"}),c=vl(e,{type:"root",props:l},f=>p.jsx(_p,B(D({},f),{config:e,metadata:r}))),d=ea((n=e.root)==null?void 0:n.fields,l),u=y.useMemo(()=>({mode:"render",depth:0}),[]);return(o=e.root)!=null&&o.render?p.jsx(Gs.Provider,{value:{config:e,data:i,metadata:r},children:p.jsx(zo,{value:u,children:p.jsx(e.root.render,B(D(D({},c),d),{children:p.jsx(Ks,{zone:rs})}))})}):p.jsx(Gs.Provider,{value:{config:e,data:i,metadata:r},children:p.jsx(zo,{value:u,children:p.jsx(Ks,{zone:rs})})})}z();z();function jw(e,t,r){return ke(this,null,function*(){const n=t().state.indexes.nodes[e];if(!n){console.warn(`Warning: Could not find component with id "${e}" to resolve its data. Component may have been removed or the id is invalid.`);return}yield Dn(n.data,t,r)})}z();function Aw(e,t,r){return ke(this,null,function*(){const n=Qe(e,t().state);if(!n){console.warn(`Warning: Could not find component for selector "${JSON.stringify(e)}" to resolve its data. Component may have been removed or the selector is invalid.`);return}const o=bn(n);yield Dn(o,t,r)})}var ud=(e,t)=>{const r={back:e.history.back,forward:e.history.forward,setHistories:e.history.setHistories,setHistoryIndex:e.history.setHistoryIndex,hasPast:e.history.hasPast(),hasFuture:e.history.hasFuture(),histories:e.history.histories,index:e.history.index},n={appState:ho(e.state),config:e.config,dispatch:e.dispatch,getPermissions:e.permissions.getPermissions,refreshPermissions:e.permissions.refreshPermissions,resolveDataById:(o,i)=>jw(o,t,i),resolveDataBySelector:(o,i)=>Aw(o,t,i),history:r,selectedItem:e.selectedItem||null,getItemBySelector:o=>Qe(o,e.state),getItemById:o=>e.state.indexes.nodes[o].data,getSelectorForId:o=>qo(e.state,o),getParentById:o=>{const a=e.state.indexes.nodes[o].parentId;if(a===null)return;const s=e.state.indexes.nodes[a];if(s)return s.data},dictionary:e.dictionary};return n.__private={appState:e.state},n},Ov=y.createContext(null),dd=e=>({state:e.state,config:e.config,dispatch:e.dispatch,permissions:e.permissions,history:e.history,selectedItem:e.selectedItem,dictionary:e.dictionary}),Pw=e=>{const[t]=y.useState(()=>Dr(()=>ud(dd(e.getState()),e.getState)));return y.useEffect(()=>e.subscribe(r=>dd(r),r=>{t.setState(ud(r,e.getState))}),[]),t};function aI(){return function(t){const r=y.useContext(Ov);if(!r)throw new Error("usePuck must be used inside <Puck>.");return Xi(r,t??(o=>o))}}z();z();z();z();z();var Dw={ComponentList:"_ComponentList_htktj_1","ComponentList--isExpanded":"_ComponentList--isExpanded_htktj_5","ComponentList-content":"_ComponentList-content_htktj_9","ComponentList-title":"_ComponentList-title_htktj_17","ComponentList-titleIcon":"_ComponentList-titleIcon_htktj_63"},di=ee("ComponentList",Dw),Lv=({name:e,label:t})=>{var r;const n=N(i=>i.overrides),o=N(i=>i.permissions.getPermissions({type:e}).insert);return y.useEffect(()=>{n.componentItem&&console.warn("The `componentItem` override has been deprecated and renamed to `drawerItem`")},[n]),p.jsx(Dc.Item,{label:t,name:e,isDragDisabled:!o,children:(r=n.componentItem)!=null?r:n.drawerItem})},cn=({children:e,title:t,id:r})=>{const n=N(d=>d.config),o=N(d=>d.setUi),i=N(d=>d.state.ui.componentList),{expanded:a=!0}=i[r]||{},s=`puck-drawer-category-${r}`,l=J("drawer-category-collapse",{title:t??""}),c=J("drawer-category-expand",{title:t??""});return p.jsxs("div",{className:di({isExpanded:a}),children:[t&&p.jsxs("button",{type:"button",className:di("title"),"aria-expanded":a,"aria-controls":s,onClick:()=>o({componentList:B(D({},i),{[r]:B(D({},i[r]),{expanded:!a})})}),title:a?l:c,children:[p.jsx("div",{children:t}),p.jsx("div",{className:di("titleIcon"),children:a?p.jsx(Gd,{size:12}):p.jsx(_o,{size:12})})]}),p.jsx("div",{className:di("content"),id:s,children:p.jsx(Dc,{children:e||Object.keys(n.components).map(d=>{var u;return p.jsx(Lv,{label:(u=n.components[d].label)!=null?u:d,name:d},d)})})})]})};cn.Item=Lv;var Mw=()=>{const[e,t]=y.useState(),r=N(i=>i.config),n=N(i=>i.state.ui.componentList),o=J("drawer-category-other");return y.useEffect(()=>{var i,a,s;if(Object.keys(n).length>0){const l=[];let c;c=Object.entries(n).map(([u,f])=>{var v,h;return!f.components||(f.components.forEach(m=>{l.push(m)}),f.visible===!1)?null:p.jsx(cn,{id:u,title:((h=(v=r.categories)==null?void 0:v[u])==null?void 0:h.title)||f.title||u,children:f.components.map((m,b)=>{var S;const x=r.components[m]||{};return p.jsx(cn.Item,{label:(S=x.label)!=null?S:m,name:m,index:b},m)})},u)});const d=Object.keys(r.components).filter(u=>l.indexOf(u)===-1);d.length>0&&!((i=n.other)!=null&&i.components)&&((a=n.other)==null?void 0:a.visible)!==!1&&c.push(p.jsx(cn,{id:"other",title:((s=n.other)==null?void 0:s.title)||o,children:d.map((u,f)=>{var v;const h=r.components[u]||{};return p.jsx(cn.Item,{name:u,label:(v=h.label)!=null?v:u,index:f},u)})},"other")),t(c)}},[r.categories,r.components,n,o]),e},Rv=()=>{const e=N(n=>n.overrides),t=Mw(),r=y.useMemo(()=>(e.components&&console.warn("The `components` override has been deprecated and renamed to `drawer`"),e.components||e.drawer||"div"),[e]);return p.jsx(r,{children:t||p.jsx(cn,{id:"all"})})};z();var Tw={BlocksPlugin:"_BlocksPlugin_9af19_1"},Ow=ee("BlocksPlugin",Tw),Lw=(e={})=>{var t,r;return{name:"blocks",label:(t=e.label)!=null?t:"Blocks",render:()=>p.jsx("div",{className:Ow(),children:p.jsx(Rv,{})}),icon:(r=e.icon)!=null?r:p.jsx(o_,{})}};z();z();z();var Rw=(e,t)=>Object.keys(e.indexes.zones).filter(r=>r.split(":")[0]===t);z();z();z();z();z();z();z();function Fw(e,t){if(typeof e!="string")throw new Error(`Can't get field definition for path (${e}): Path should be a string`);if(!t||typeof t!="object")return;const r=e.split(/\.|\[\d+\]/).filter(Boolean);let n=t,o;for(let i=0;i<r.length;i++){const a=r[i];if(o=n[a],i===r.length-1)return o;if(!o||(o.type!=="object"||!o.objectFields)&&(o.type!=="array"||!o.arrayFields))return;o.type==="object"&&(n=o.objectFields),o.type==="array"&&(n=o.arrayFields)}}var Fv=(e,t,r)=>{var n;const[o,i]=e.split(":");if(!i)return;const a=(n=r[o])==null?void 0:n.data.type,s=a&&a!==Ar?t.components[a]:t.root;return Fw(i,s?.fields)},pd={},Bw=(e,t,r)=>{var n;if(((n=r.zones[e])==null?void 0:n.type)!=="slot")return pd;const o=Fv(e,t,r.nodes);return o?.type!=="slot"?pd:{allow:o.allow,disallow:o.disallow}},Bv="outline-item",Nw="outline-zone",Mc=(e,t,r)=>{const n=e.get(t);if(n!==void 0)return n;const o=r();return e.set(t,o),o},Ki=(e,t,r,n,o)=>Mc(e,`zone:${t}`,()=>{const i=Bw(t,n,o);return yv(r,i)}),$w=(e,t,r,n,o)=>Mc(e,`childZones:${t}`,()=>Object.keys(o.zones).some(i=>i.startsWith(`${t}:`)&&Ki(e,i,r,n,o))),Hw=(e,t,r,n)=>Mc(e,`subtree:${t}`,()=>{var o;return t===r?!0:(((o=n[t])==null?void 0:o.path)||[]).some(a=>a.split(":")[0]===r)}),Nv=(e,t)=>r=>{if(r.type!==Bv)return!1;const n=r.data,o=e.outlineStore.getState().acceptCache,{config:i,state:a}=e.appStore.getState(),s=a.indexes,l=t.kind==="row"?t.itemId:t.zoneCompound.split(":")[0];return Hw(o,l,n.itemId,s.nodes)?!1:t.kind==="zone"?Ki(o,t.zoneCompound,n.componentType,i,s):Ki(o,t.zoneCompound,n.componentType,i,s)||$w(o,t.itemId,n.componentType,i,s)};z();var Ww=600,$v=()=>{let e=null,t=null;const r=()=>{e!==null&&(clearTimeout(e),e=null),t=null};return Dr((n,o)=>({status:"idle",draggedRow:null,tempExpandedIds:new Set,expandCandidateId:null,indicator:null,drop:null,acceptCache:new Map,startDrag:i=>n({status:"dragging",draggedRow:i,acceptCache:new Map}),setTarget:(i,a)=>{var s,l,c,d;const u=o();((s=u.indicator)==null?void 0:s.targetId)===i.targetId&&((l=u.indicator)==null?void 0:l.position)===i.position&&((c=u.drop)==null?void 0:c.zone)===a.zone&&((d=u.drop)==null?void 0:d.index)===a.index||n({indicator:i,drop:a})},clearTarget:()=>{o().indicator===null&&o().drop===null||n({indicator:null,drop:null})},scheduleExpand:(i,a)=>{t===i||o().tempExpandedIds.has(i)||(r(),t=i,n({expandCandidateId:i}),e=setTimeout(()=>{e=null,t=null,n(s=>({tempExpandedIds:new Set(s.tempExpandedIds).add(i),expandCandidateId:null})),a()},Ww))},cancelPendingExpand:()=>{r(),o().expandCandidateId!==null&&n({expandCandidateId:null})},endDrag:()=>{r(),n({status:"dropping",indicator:null,drop:null,expandCandidateId:null})},reset:()=>{r(),n({status:"idle",draggedRow:null,tempExpandedIds:new Set,expandCandidateId:null,indicator:null,drop:null,acceptCache:new Map})}}))},Tc=y.createContext($v()),ma=()=>y.useContext(Tc),Oc=e=>Ft(Tc,e),qw=({kind:e,zoneCompound:t})=>{const r=me(),n=ma(),o=`${e}:${t}`,i=y.useMemo(()=>Nv({appStore:r,outlineStore:n},{kind:"zone",zoneCompound:t}),[r,n,t]),{ref:a}=gc({id:o,type:Nw,accept:i,collisionDetector:lv,data:{kind:"zone",zoneCompound:t}}),s=Oc(c=>{var d;return((d=c.indicator)==null?void 0:d.targetId)===o});return y.useMemo(()=>({isDropTarget:s,ref:a}),[s,a])},Hv=qw;z();z();var Vw={DropLine:"_DropLine_eyz3q_2","DropLine--top":"_DropLine--top_eyz3q_12","DropLine--bottom":"_DropLine--bottom_eyz3q_16","DropLine--outset":"_DropLine--outset_eyz3q_20"},Zw=ee("DropLine",Vw),Lc=({edge:e,outset:t})=>p.jsx("div",{className:Zw({top:e==="top",bottom:e==="bottom",outset:!!t})});z();z();z();z();var Uw=(...e)=>[...e].filter(Boolean).join(" "),Wv=Uw;z();var Yw={"LayerTree-helper":"_LayerTree-helper_1m7e4_2","LayerTree-helperRoot":"_LayerTree-helperRoot_1m7e4_11"},fd=ee("LayerTree",Yw),qv=({zoneCompound:e})=>{const{ref:t,isDropTarget:r}=Hv({kind:"empty",zoneCompound:e}),n=J("outline-empty"),[o]=e.split(":"),i=o===Ar;return p.jsxs("li",{className:Wv(fd("helper"),i?fd("helperRoot"):void 0),"data-puck-drop-target":r||void 0,ref:t,children:[n,r&&p.jsx(Lc,{edge:"top"})]})};z();z();var Kw=({componentType:e,index:t,itemId:r,zoneCompound:n})=>{const o=me(),i=ma(),a=y.useMemo(()=>Nv({appStore:o,outlineStore:i},{kind:"row",itemId:r,zoneCompound:n}),[o,i,r,n]),s=y.useMemo(()=>Sc("y"),[]),{handleRef:l,ref:c,isDragSource:d}=bc({id:r,index:t,group:n,type:Bv,accept:a,data:{kind:"row",itemId:r,zoneCompound:n,index:t,componentType:e},collisionPriority:1,collisionDetector:s,transition:{duration:0},plugins:m=>[...m,Ro.configure({feedback:"clone",dropAnimation:null})]}),{indicatorPosition:u,isExpandCandidate:f,isTempExpanded:v}=Oc(m=>{var b;return{indicatorPosition:((b=m.indicator)==null?void 0:b.targetId)===r?m.indicator.position:null,isExpandCandidate:m.expandCandidateId===r,isTempExpanded:m.tempExpandedIds.has(r)}});return{rowRef:y.useCallback(m=>{c(m),l(m)},[c,l]),isDragSource:d,indicatorPosition:u,isExpandCandidate:f,isTempExpanded:v}};z();var Xw={Layer:"_Layer_onfgu_1","Layer-inner":"_Layer-inner_onfgu_8","Layer--isSortable":"_Layer--isSortable_onfgu_18","Layer-content":"_Layer-content_onfgu_22","Layer-clickable":"_Layer-clickable_onfgu_29","Layer-caret":"_Layer-caret_onfgu_57","Layer--containsZone":"_Layer--containsZone_onfgu_68","Layer-title":"_Layer-title_onfgu_76","Layer-name":"_Layer-name_onfgu_85","Layer-icon":"_Layer-icon_onfgu_91","Layer-zones":"_Layer-zones_onfgu_101","Layer--isExpanded":"_Layer--isExpanded_onfgu_106","Layer--isSelected":"_Layer--isSelected_onfgu_115","Layer--isExpandCandidate":"_Layer--isExpandCandidate_onfgu_138","Layer--isDragSource":"_Layer--isDragSource_onfgu_143"};z();z();var Gw={LayerActions:"_LayerActions_d90t9_2","LayerActions--visible":"_LayerActions--visible_d90t9_18"},Jw=ee("LayerActions",Gw),Qw=({node:e,visible:t})=>{const r=N(c=>c.dispatch),n=ma(),o=N(Ne(c=>{const d=Qe({index:e.index,zone:e.zoneCompound},c.state),u=c.permissions.getPermissions({item:d});return{delete:u.delete,duplicate:u.duplicate}})),i=J("outline-item-duplicate"),a=J("outline-item-delete"),s=y.useCallback(c=>{c.stopPropagation(),n.getState().status==="idle"&&r({type:"remove",index:e.index,zone:e.zoneCompound})},[r,n,e]),l=y.useCallback(c=>{c.stopPropagation(),n.getState().status==="idle"&&r({type:"duplicate",sourceIndex:e.index,sourceZone:e.zoneCompound})},[r,n,e.index,e.zoneCompound]);return!o.delete&&!o.duplicate?null:p.jsxs("div",{className:Jw({visible:t}),children:[o.duplicate&&p.jsx(Ue,{onClick:l,title:i,type:"button",children:p.jsx(ul,{})}),o.delete&&p.jsx(Ue,{onClick:s,title:a,type:"button",children:p.jsx(dl,{})})]})},qt=ee("Layer",Xw),Vv=y.forwardRef(function({dataIndex:t,depth:r,isSelected:n,node:o,selectedId:i},a){const s=N(I=>I.dispatch),l=N(I=>{var k,P;return(P=(k=I.state.ui.itemExpanded)==null?void 0:k[o.itemId])!=null?P:!1}),c=Ft($e,I=>I.hoveringComponent===o.itemId),d=N(I=>{var k;const P=Qe({index:o.index,zone:o.zoneCompound},I.state);return(k=I.permissions.getPermissions({item:P}))==null?void 0:k.drag}),{indicatorPosition:u,isDragSource:f,isExpandCandidate:v,isTempExpanded:h,rowRef:m}=Kw({componentType:o.componentType,index:o.index,itemId:o.itemId,zoneCompound:o.zoneCompound}),b=y.useContext($e),S=ma(),x=J("outline-item-collapse"),_=J("outline-item-expand"),g=o.childZones.length>0,j=y.useCallback(I=>{s({type:"setUi",ui:{itemSelector:I}})},[s]),w=l||h,A=u!==null,E=o.childZones.length!==1;return p.jsxs("li",{ref:a,className:qt({containsZone:g,isDragSource:f,isExpandCandidate:v,isExpanded:w,isHovering:c,isSelected:n,isSortable:d}),"data-index":t,"data-puck-layer-tree-id":o.itemId,children:[A&&p.jsx(Lc,{edge:u==="before"?"top":"bottom",outset:!0}),p.jsxs("div",{className:qt("inner"),ref:m,onMouseEnter:I=>{I.stopPropagation(),S.getState().status==="idle"&&b.setState({hoveringComponent:o.itemId})},onMouseLeave:I=>{I.stopPropagation(),b.setState({hoveringComponent:null})},children:[p.jsx("div",{className:qt("caret"),children:p.jsx(Ue,{onClick:I=>{I.stopPropagation(),S.getState().status==="idle"&&s({type:"setUi",ui:k=>{var P;const T=D({},k.itemExpanded);return(P=k.itemExpanded)!=null&&P[o.itemId]?delete T[o.itemId]:T[o.itemId]=!0,{itemExpanded:T}},recordHistory:!1})},title:l?x:_,type:"button",children:p.jsx(Xd,{})})}),p.jsxs("div",{className:qt("content"),children:[p.jsx("button",{type:"button",className:qt("clickable"),onClick:()=>{S.getState().status==="idle"&&(j({index:o.index,zone:o.zoneCompound}),b.getState().scrollToComponent(o.itemId))},children:p.jsxs("div",{className:qt("title"),children:[p.jsx("div",{className:qt("icon"),children:o.componentType==="Text"||o.componentType==="Heading"?p.jsx(Qi,{}):p.jsx(f_,{})}),p.jsx("div",{className:qt("name"),children:o.label})]})}),p.jsx(Qw,{node:o,visible:c&&!f})]})]}),g&&w&&o.childZones.map(I=>p.jsx("div",{className:qt("zones"),children:p.jsx(Kv,{depth:E?r+1:r,selectedId:i,tree:E?I:B(D({},I),{label:void 0})})},I.zoneCompound))]})});z();var Zv={LayerTree:"_LayerTree_o5tyt_1","LayerTree--nested":"_LayerTree--nested_o5tyt_12"},e2=ee("LayerTree",Zv),t2=({depth:e,selectedId:t,tree:r})=>p.jsxs("ul",{className:e2({nested:e>0}),children:[r.items.length===0&&p.jsx(qv,{zoneCompound:r.zoneCompound}),r.items.map(n=>p.jsx(Vv,{depth:e,isSelected:t===n.itemId,node:n,selectedId:t},n.itemId))]});z();var r2=ee("LayerTree",Zv),Uv=32,n2=8,Yv=new Map,o2=e=>{var t;return(t=Yv.get(e))!=null?t:Uv},i2=(e,t)=>{t<=0||Yv.set(e,t)},a2=e=>{var t;let r=(t=e?.parentElement)!=null?t:null;for(;r;){const{overflow:n,overflowY:o}=getComputedStyle(r);if([n,o].some(i=>/auto|scroll/.test(i)))return r;r=r.parentElement}return null},s2=({depth:e,selectedId:t,tree:r})=>{const n=y.useRef(null),o=Oc(v=>{var h;return((h=v.draggedRow)==null?void 0:h.zoneCompound)===r.zoneCompound?v.draggedRow.index:null}),i=y.useCallback(v=>{const h=kc(v);return o!==null&&!h.includes(o)&&(h.push(o),h.sort((m,b)=>m-b)),h},[o]),a=rv({count:r.items.length,estimateSize:v=>o2(r.items[v].itemId),getItemKey:v=>r.items[v].itemId,getScrollElement:()=>a2(n.current),overscan:n2,rangeExtractor:i,measureElement:v=>{const h=Math.ceil(v.getBoundingClientRect().height),m=v.dataset.puckLayerTreeId;return m&&i2(m,h),h||Uv}}),s=a.getVirtualItems(),l=a.getTotalSize(),c=[];let d=0,u=-1;s.forEach(v=>{const h=r.items[v.index],m=Math.max(v.start-d,0);m>0&&c.push(p.jsx("li",{"aria-hidden":"true",style:{height:`${m}px`}},`gap:${r.zoneCompound}:${u}:${v.index}`)),c.push(p.jsx(Vv,{dataIndex:v.index,depth:e,isSelected:t===h.itemId,node:h,ref:a.measureElement,selectedId:t},h.itemId)),d=v.end,u=v.index});const f=Math.max(l-d,0);return f>0&&c.push(p.jsx("li",{"aria-hidden":"true",style:{height:`${f}px`}},`gap:${r.zoneCompound}:${u}:end`)),p.jsxs("ul",{className:r2({nested:e>0}),ref:n,children:[r.items.length===0&&p.jsx(qv,{zoneCompound:r.zoneCompound}),c]})};z();var l2={"LayerTree-zoneTitle":"_LayerTree-zoneTitle_fvhlh_2","LayerTree-zoneIcon":"_LayerTree-zoneIcon_fvhlh_19"},hd=ee("LayerTree",l2),c2=25,u2=({label:e,zoneCompound:t})=>{const{ref:r,isDropTarget:n}=Hv({kind:"label",zoneCompound:t});return p.jsxs("div",{className:hd("zoneTitle"),"data-puck-drop-target":n||void 0,ref:r,children:[p.jsx("div",{className:hd("zoneIcon"),children:p.jsx(Jd,{})}),e,n&&p.jsx(Lc,{edge:"bottom"})]})},Kv=({depth:e,selectedId:t,tree:r})=>{const n=e===0&&r.items.length>=c2;return p.jsxs(p.Fragment,{children:[r.label&&p.jsx(u2,{label:r.label,zoneCompound:r.zoneCompound}),n?p.jsx(s2,{depth:e,selectedId:t,tree:r}):p.jsx(t2,{depth:e,selectedId:t,tree:r})]})};z();z();z();function d2(e,t){return Object.keys(t).some(r=>r.startsWith(`${e}:`))}var p2=2,f2=60,h2=(e,t)=>{let r,n=0,o=0;const i=()=>{var a;const s=(a=ft())==null?void 0:a.querySelector(`[data-puck-component="${e}"]`),l=s?s.getBoundingClientRect().top:null;if(n=l===r?n+1:0,r=l,o+=1,n>=p2||o>=f2){t(e);return}requestAnimationFrame(i)};requestAnimationFrame(i)},Xv=e=>{if(typeof document>"u")return;const t=document.getElementById("preview-frame");e?t?.setAttribute("data-puck-outline-dragging","true"):t?.removeAttribute("data-puck-outline-dragging")},v2=(e,t)=>{const r=e.operation.source,n=r?.data;if(!r||!n)return;const o=t.appStore.getState(),i=Qe({zone:n.zoneCompound,index:n.index},o.state);if(!i||!o.permissions.getPermissions({item:i}).drag){e.preventDefault();return}t.outlineDndStore.getState().startDrag({itemId:n.itemId,zoneCompound:n.zoneCompound,index:n.index,componentType:n.componentType}),Xv(!0),o.dispatch({type:"setUi",ui:{isDragging:!0},recordHistory:!1})},vd=(e,t,r)=>{var n,o;const i=r.outlineDndStore.getState(),a=i.draggedRow;if(!a)return;const s=e.operation.target;if(!s){i.cancelPendingExpand(),i.clearTarget();return}const l=s.data;if(l.kind==="zone"){i.cancelPendingExpand(),i.setTarget({targetId:s.id.toString(),position:"inside"},{zone:l.zoneCompound,index:0});return}const{config:c,state:d}=r.appStore.getState(),u=d.indexes,f=i.acceptCache;if(Ki(f,l.zoneCompound,a.componentType,c,u)){const m=(n=t.collisionObserver.collisions[0])==null?void 0:n.data,b=Ic(m?.direction);i.setTarget({targetId:s.id.toString(),position:b},{zone:l.zoneCompound,index:Ec({position:b,sourceIndex:a.index,targetIndex:l.index,isSameZone:l.zoneCompound===a.zoneCompound})})}else i.clearTarget();const v=!!((o=d.ui.itemExpanded)!=null&&o[l.itemId])||i.tempExpandedIds.has(l.itemId),h=d2(l.itemId,u.zones);!v&&h?i.scheduleExpand(l.itemId,()=>{requestAnimationFrame(()=>t.collisionObserver.forceUpdate(!0))}):i.cancelPendingExpand()},g2=(e,t)=>{const{source:r}=e.operation,n=t.outlineDndStore.getState(),o=n.draggedRow,i=e.canceled?null:n.drop,a=t.appStore.getState().dispatch;if(Xv(!1),o&&i){xv(o.itemId,{zone:o.zoneCompound,index:o.index},{zone:i.zone,index:i.index},t.appStore);const l=i.zone!==o.zoneCompound||i.index!==o.index;a({type:"setUi",ui:{itemSelector:{zone:i.zone,index:i.index},isDragging:!1},recordHistory:l}),h2(o.itemId,t.scrollToComponent)}else a({type:"setUi",ui:{isDragging:!1},recordHistory:!1});n.endDrag();const s=()=>t.outlineDndStore.getState().reset();if(!r||r.status==="idle")s();else{const l=ct(()=>{r.status==="idle"&&(s(),l?.())})}},m2=[],_2=({children:e})=>{const t=me(),r=y.useContext($e),[n]=y.useState(()=>$v()),o=N(s=>{var l,c;return(c=(l=s.dnd)==null?void 0:l.disableOutlineDrag)!=null?c:!1}),i=wc({mouse:[new Zt.Distance({value:5})]}),a=y.useMemo(()=>({outlineDndStore:n,appStore:t,scrollToComponent:s=>r.getState().scrollToComponent(s)}),[n,t,r]);return p.jsx(Tc.Provider,{value:n,children:p.jsx(fc,{sensors:o?m2:i,onBeforeDragStart:s=>{v2(s,a)},onDragOver:(s,l)=>{s.preventDefault(),vd(s,l,a)},onDragMove:(s,l)=>{vd(s,l,a)},onDragEnd:s=>{g2(s,a)},children:e})})};z();var y2={LayerTreeRoot:"_LayerTreeRoot_1qowl_1"};z();var b2=e=>{const t={};return Object.keys(e).forEach(r=>{const[n]=r.split(":");n&&(t[n]||(t[n]=[]),t[n].push(r))}),t},k2=(e,t,r,n)=>{var o,i;if(n!==void 0)return n;const[,a]=e.split(":");if(a)return(i=(o=Fv(e,r,t))==null?void 0:o.label)!=null?i:a},x2=({config:e,itemId:t,index:r,nodes:n,zoneCompound:o,zones:i,zonesByParent:a,componentFallbackLabel:s})=>{var l,c,d,u;const f=n[t],v=(c=(l=f?.data.type)==null?void 0:l.toString())!=null?c:s,h=(u=(d=e.components[v])==null?void 0:d.label)!=null?u:v;return{childZones:(a[t]||[]).map(b=>Gv({config:e,nodes:n,zoneCompound:b,zones:i,zonesByParent:a})),componentType:v,index:r,itemId:t,label:h,zoneCompound:o}},Gv=({config:e,label:t,nodes:r,zoneCompound:n,zones:o,zonesByParent:i=b2(o),componentFallbackLabel:a})=>{var s,l;return{items:((l=(s=o[n])==null?void 0:s.contentIds)!=null?l:[]).map((d,u)=>x2({config:e,itemId:d,index:u,nodes:r,zoneCompound:n,zones:o,zonesByParent:i})),label:k2(n,r,e,t),zoneCompound:n}},w2=ee("LayerTreeRoot",y2),S2=({selectedId:e,trees:t})=>{const r=N(n=>{var o,i;return(i=(o=n.dnd)==null?void 0:o.disableOutlineDrag)!=null?i:!1});return p.jsx(_2,{children:p.jsx("div",{className:w2(),"data-puck-dnd-disabled":r||void 0,children:t.map(n=>p.jsx(Kv,{depth:0,selectedId:e,tree:n},n.zoneCompound))})})};z();z();var I2={CollapseAll:"_CollapseAll_1r4cy_1","CollapseAll-icon":"_CollapseAll-icon_1r4cy_5","CollapseAll--visible":"_CollapseAll--visible_1r4cy_10"},gd=ee("CollapseAll",I2);function E2({className:e}){const t=N(i=>{var a;return Object.keys((a=i.state.ui.itemExpanded)!=null?a:{}).length>0}),r=N(i=>i.dispatch),n=J("outline-header-collapseall"),o=()=>{r({type:"setUi",ui:{itemExpanded:{}}})};return p.jsx("div",{className:Wv(gd({visible:t}),e),children:p.jsx(Ue,{title:n,onClick:o,children:p.jsx(Jm,{className:gd("icon")})})})}var C2=E2;z();z();var z2={OutlineHeader:"_OutlineHeader_ntv8r_1"},j2=ee("OutlineHeader",z2),A2=({children:e,title:t})=>{const r=J("outline-header-title");return p.jsxs("div",{className:j2(),children:[p.jsx(va,{rank:"2",size:"xs",children:r??t}),e]})},P2=A2;z();var D2={OutlineWrapper:"_OutlineWrapper_b9ln0_1","OutlineWrapper-collapseAll":"_OutlineWrapper-collapseAll_b9ln0_9","OutlineWrapper-layers":"_OutlineWrapper-layers_b9ln0_15"},Js=ee("OutlineWrapper",D2),M2=({children:e})=>p.jsx("div",{className:Js(),children:e}),Jv=()=>{const e=N(c=>c.overrides.outline),t=N(c=>c.config),r=N(c=>c.state.indexes.nodes),n=N(c=>c.state.indexes.zones),o=N(c=>{var d;return((d=c.selectedItem)==null?void 0:d.props.id)||null}),i=J("label-component"),a=N(Ne(c=>Rw(c.state,"root"))),s=y.useMemo(()=>a.map(c=>Gv({config:t,label:a.length===1?"":c.split(":")[1],nodes:r,zoneCompound:c,zones:n,componentFallbackLabel:i})),[t,r,a,n,i]),l=y.useMemo(()=>e||M2,[e]);return p.jsxs(l,{children:[p.jsx(P2,{children:p.jsx(C2,{className:Js("collapseAll")})}),p.jsx("div",{className:Js("layers"),children:p.jsx(S2,{selectedId:o,trees:s})})]})};z();var T2={OutlinePlugin:"_OutlinePlugin_1ylsc_1"},O2=ee("OutlinePlugin",T2),L2=(e={})=>{var t,r;return{name:"outline",label:(t=e.label)!=null?t:"Outline",render:()=>p.jsx("div",{className:O2(),children:p.jsx(Jv,{})}),icon:(r=e.icon)!=null?r:p.jsx(Jd,{})}};z();z();z();var R2={Breadcrumbs:"_Breadcrumbs_8c6w5_1","Breadcrumbs-breadcrumbLabel":"_Breadcrumbs-breadcrumbLabel_8c6w5_7","Breadcrumbs-breadcrumb":"_Breadcrumbs-breadcrumb_8c6w5_7"};z();var F2=e=>{const t=N(s=>{var l;return(l=s.selectedItem)==null?void 0:l.props.id}),r=N(s=>s.config),n=N(s=>{var l;return(l=s.state.indexes.nodes[t])==null?void 0:l.path}),o=me(),i=J("label-page"),a=J("label-component");return y.useMemo(()=>{const s=n?.map(l=>{var c,d,u,f;const[v]=l.split(":");if(v==="root")return{label:((c=r?.root)==null?void 0:c.label)||i,selector:null};const h=o.getState().state.indexes.nodes[v],m=h.path[h.path.length-1],S=(((d=o.getState().state.indexes.zones[m])==null?void 0:d.contentIds)||[]).indexOf(v);return{label:h?(f=(u=r.components[h.data.type])==null?void 0:u.label)!=null?f:h.data.type:a,selector:h?{index:S,zone:h.path[h.path.length-1]}:null}})||[];return e?s.slice(s.length-e):s},[n,e,i,a])},Ya=ee("Breadcrumbs",R2),Qv=({children:e,numParents:t=1})=>{const r=N(o=>o.setUi),n=F2(t);return p.jsxs("div",{className:Ya(),children:[n.map((o,i)=>p.jsxs("div",{className:Ya("breadcrumb"),children:[p.jsx("button",{type:"button",className:Ya("breadcrumbLabel"),onClick:()=>r({itemSelector:o.selector}),children:o.label}),p.jsx(Xd,{size:16})]},i)),e]})};z();z();var B2={PuckFields:"_PuckFields_wnj25_1","PuckFields--isLoading":"_PuckFields--isLoading_wnj25_6","PuckFields-loadingOverlay":"_PuckFields-loadingOverlay_wnj25_10","PuckFields-loadingOverlayInner":"_PuckFields-loadingOverlayInner_wnj25_25","PuckFields-field":"_PuckFields-field_wnj25_32","PuckFields--wrapFields":"_PuckFields--wrapFields_wnj25_36"},zi=ee("PuckFields",B2),N2=({children:e})=>p.jsx(p.Fragment,{children:e}),$2=(e,t)=>(r,n)=>ke(null,null,function*(){const{dispatch:o,state:i,selectedItem:a,resolveComponentData:s}=t.getState(),{data:l,ui:c}=i,{itemSelector:d}=c,u=l.root.props||l.root,f=a?a.props:u,v=B(D({},f),{[e]:r});if(a&&d){const h=yield s(B(D({},a),{props:v}),"replace"),m=qo(t.getState().state,a.props.id);if(!m)return;o({type:"replace",destinationIndex:m.index,destinationZone:m.zone||Ge,data:h.node,ui:n});return}if(l.root.props){o({type:"replaceRoot",root:(yield s(B(D({},l.root),{props:v}),"replace")).node,ui:D(D({},c),n),recordHistory:!0});return}o({type:"setData",data:{root:v}})}),H2=({fieldName:e})=>{const t=N(c=>c.fields.fields[e]),r=N(c=>((c.selectedItem?c.selectedItem.readOnly:c.state.data.root.readOnly)||{})[e]),n=N(c=>t?c.selectedItem?`${c.selectedItem.props.id}_${t.type}_${e}`:`root_${t.type}_${e}`:null),o=N(Ne(c=>{const{selectedItem:d,permissions:u}=c;return d?u.getPermissions({item:d}):u.getPermissions({root:!0})})),i=me(),a=y.useCallback($2(e,i),[e]),{visible:s=!0}=t??{},l=y.useContext(Ho.ctx);return y.useEffect(()=>i.subscribe(c=>{var d;return(d=c.getCurrentData().props)==null?void 0:d[e]},c=>{l.setState({[e]:c})}),[i,l]),!t||!n||!s||t.type==="slot"?null:p.jsx("div",{className:zi("field"),children:p.jsx(pv,{field:t,name:e,id:n,readOnly:!o.edit||r,onChange:a})},n)},W2=({fieldName:e})=>{const t=me(),r=y.useMemo(()=>{var n;const o=(n=t.getState().getCurrentData().props)==null?void 0:n[e];return{[e]:o}},[]);return p.jsx(Ho.Provider,{value:r,children:p.jsx(H2,{fieldName:e})})},q2=y.memo(W2),V2=({wrapFields:e=!0})=>{const t=N(d=>d.overrides),r=N(d=>{var u,f;const v=d.selectedItem?(u=d.componentState[d.selectedItem.props.id])==null?void 0:u.loadingCount:(f=d.componentState.root)==null?void 0:f.loadingCount;return(v??0)>0}),n=N(Ne(d=>d.state.ui.itemSelector)),o=N(d=>{var u;return(u=d.selectedItem)==null?void 0:u.props.id}),i=me();V_(i,o);const a=N(d=>d.fields.loading),s=N(Ne(d=>d.fields.id===o?Object.keys(d.fields.fields):[])),l=a||r,c=y.useMemo(()=>t.fields||N2,[t]);return p.jsxs("form",{className:zi({wrapFields:e}),onSubmit:d=>{d.preventDefault()},children:[p.jsx(c,{isLoading:l,itemSelector:n,children:s.map(d=>p.jsx(q2,{fieldName:d},d))}),l&&p.jsx("div",{className:zi("loadingOverlay"),children:p.jsx("div",{className:zi("loadingOverlayInner"),children:p.jsx(Or,{size:16})})})]})},Rc=y.memo(V2);z();var Z2={FieldsPlugin:"_FieldsPlugin_18cj3_1","FieldsPlugin-header":"_FieldsPlugin-header_18cj3_7"},md=ee("FieldsPlugin",Z2),U2=()=>{const e=J("label-page"),t=N(r=>{var n,o;const i=r.selectedItem;return i?(o=(n=r.config.components[i.type])==null?void 0:n.label)!=null?o:i.type:null});return t??e},Y2=({desktopSideBar:e="right",label:t,icon:r}={})=>({name:"fields",label:t??"Fields",render:()=>p.jsxs("div",{className:md(),children:[p.jsx("div",{className:md("header"),children:p.jsx(Qv,{numParents:2,children:p.jsx(U2,{})})}),p.jsx(Rc,{})]}),icon:r??p.jsx(w_,{}),mobileOnly:e==="right"});z();z();z();z();z();var K2=`@import "https://rsms.me/inter/inter.css";

/* styles/color.css */
@layer puck-tokens {
  :root {
    --puck-color-rose-01: #4a001c;
    --puck-color-rose-02: #670833;
    --puck-color-rose-03: #87114c;
    --puck-color-rose-04: #a81a66;
    --puck-color-rose-05: #bc5089;
    --puck-color-rose-06: #cc7ca5;
    --puck-color-rose-07: #d89aba;
    --puck-color-rose-08: #e3b8cf;
    --puck-color-rose-09: #efd6e3;
    --puck-color-rose-10: #f6eaf1;
    --puck-color-rose-11: #faf4f8;
    --puck-color-rose-12: #fef8fc;
    --puck-color-azure-01: #00175d;
    --puck-color-azure-02: #002c77;
    --puck-color-azure-03: #014292;
    --puck-color-azure-04: #0158ad;
    --puck-color-azure-05: #3479be;
    --puck-color-azure-06: #6499cf;
    --puck-color-azure-07: #88b0da;
    --puck-color-azure-08: #abc7e5;
    --puck-color-azure-09: #cfdff0;
    --puck-color-azure-10: #e7eef7;
    --puck-color-azure-11: #f3f6fb;
    --puck-color-azure-12: #f7faff;
    --puck-color-green-01: #002000;
    --puck-color-green-02: #043604;
    --puck-color-green-03: #084e08;
    --puck-color-green-04: #0c680c;
    --puck-color-green-05: #1d882f;
    --puck-color-green-06: #2faa53;
    --puck-color-green-07: #56c16f;
    --puck-color-green-08: #7dd78b;
    --puck-color-green-09: #b8e8bf;
    --puck-color-green-10: #ddf3e0;
    --puck-color-green-11: #eff8f0;
    --puck-color-green-12: #f3fcf4;
    --puck-color-yellow-01: #211000;
    --puck-color-yellow-02: #362700;
    --puck-color-yellow-03: #4c4000;
    --puck-color-yellow-04: #645a00;
    --puck-color-yellow-05: #877614;
    --puck-color-yellow-06: #ab9429;
    --puck-color-yellow-07: #bfac4e;
    --puck-color-yellow-08: #d4c474;
    --puck-color-yellow-09: #e6deb1;
    --puck-color-yellow-10: #f3efd9;
    --puck-color-yellow-11: #f9f7ed;
    --puck-color-yellow-12: #fcfaf0;
    --puck-color-red-01: #4c0000;
    --puck-color-red-02: #6a0a10;
    --puck-color-red-03: #8a1422;
    --puck-color-red-04: #ac1f35;
    --puck-color-red-05: #bf5366;
    --puck-color-red-06: #ce7e8e;
    --puck-color-red-07: #d99ca8;
    --puck-color-red-08: #e4b9c2;
    --puck-color-red-09: #efd7db;
    --puck-color-red-10: #f6eaec;
    --puck-color-red-11: #faf4f5;
    --puck-color-red-12: #fff9fa;
    --puck-color-grey-01: #181818;
    --puck-color-grey-02: #292929;
    --puck-color-grey-03: #404040;
    --puck-color-grey-04: #5a5a5a;
    --puck-color-grey-05: #767676;
    --puck-color-grey-06: #949494;
    --puck-color-grey-07: #ababab;
    --puck-color-grey-08: #c3c3c3;
    --puck-color-grey-09: #dcdcdc;
    --puck-color-grey-10: #efefef;
    --puck-color-grey-11: #f5f5f5;
    --puck-color-grey-12: #fafafa;
    --puck-color-black: #000000;
    --puck-color-white: #ffffff;
  }
}

/* styles/tokens.css */
@layer puck-tokens {
  :root {
    --puck-color-surface: var(--puck-color-white);
    --puck-color-surface-muted: var(--puck-color-grey-11);
    --puck-color-surface-subtle: var(--puck-color-grey-12);
    --puck-color-surface-inverse: var(--puck-color-grey-01);
    --puck-color-border: var(--puck-color-grey-09);
    --puck-color-border-hover: var(--puck-color-grey-05);
    --puck-color-border-muted: var(--puck-color-grey-10);
    --puck-color-border-inverse: var(--puck-color-grey-05);
    --puck-color-text: var(--puck-color-black);
    --puck-color-text-secondary: var(--puck-color-grey-04);
    --puck-color-text-muted: var(--puck-color-grey-05);
    --puck-color-text-subtle: var(--puck-color-grey-07);
    --puck-color-text-inverse: var(--puck-color-white);
    --puck-opacity-text-inverse: 0.75;
    --puck-color-interactive: var(--puck-color-azure-04);
    --puck-color-interactive-hover: var(--puck-color-azure-03);
    --puck-color-interactive-active: var(--puck-color-azure-02);
    --puck-color-interactive-subtle: var(--puck-color-azure-10);
    --puck-color-interactive-soft: var(--puck-color-azure-11);
    --puck-color-interactive-soft-hover: var(--puck-color-azure-12);
    --puck-color-interactive-neutral-hover: var(--puck-color-grey-10);
    --puck-color-interactive-inverse-hover: var(--puck-color-azure-06);
    --puck-color-interactive-inverse-active: var(--puck-color-azure-07);
    --puck-color-focus-ring: var(--puck-color-azure-05);
    --puck-color-selection-bg: color-mix( in srgb, var(--puck-color-azure-09) 30%, transparent );
    --puck-color-selection-border: var(--puck-color-azure-08);
    --puck-color-line-placeholder: var(--puck-color-azure-06);
    --puck-color-highlight: var(--puck-color-rose-07);
    --puck-color-bg-disabled: var(--puck-color-grey-07);
    --puck-color-text-disabled: var(--puck-color-grey-03);
    --puck-color-overlay-backdrop: color-mix( in srgb, var(--puck-color-black) 75%, transparent );
    --puck-space-1: 4px;
    --puck-space-2: 8px;
    --puck-space-3: 12px;
    --puck-space-4: 16px;
    --puck-space-5: 24px;
    --puck-space-chrome-gutter: var(--puck-space-4);
    --puck-radius-none: 0;
    --puck-radius-xs: 2px;
    --puck-radius-s: 3px;
    --puck-radius-m: 4px;
    --puck-radius-l: 8px;
    --puck-radius-pill: 30px;
    --puck-radius-round: 100%;
    --puck-border-width-hairline: 0.5px;
    --puck-border-width-regular: 1px;
    --puck-border-width-focus: 2px;
    --puck-border-width-strong: 4px;
    --puck-duration-fast: 50ms;
    --puck-duration-medium: 150ms;
    --puck-duration-slow: 250ms;
    --puck-ease-exit: ease-in;
    --puck-ease-emphasized: ease-in-out;
    --puck-ease-entrance: ease-out;
    --puck-font-weight-regular: 400;
    --puck-font-weight-medium: 500;
    --puck-font-weight-semibold: 600;
    --puck-font-weight-bold: 700;
    --puck-font-weight-heavy: 800;
    --puck-letter-spacing-ui: 0.05ch;
    --puck-letter-spacing-heading: 0.08ch;
    --puck-icon-size-xs: 14px;
    --puck-icon-size-s: 16px;
    --puck-icon-size-m: 18px;
    --puck-icon-size-l: 24px;
    --puck-space-m-unitless: 24;
    --puck-user-sidebar-left-width: var(--puck-sidebar-width);
    --puck-user-sidebar-right-width: var(--puck-sidebar-width);
    --puck-slot-min-empty-height: 128px;
    --puck-line-placeholder-width: 2px;
  }
}

/* styles/typography.css */
@layer puck-tokens {
  :root {
    --puck-font-size-scale-base-unitless: 12;
    --puck-font-size-xxxs-unitless: 12;
    --puck-font-size-xxs-unitless: 14;
    --puck-font-size-xs-unitless: 16;
    --puck-font-size-s-unitless: 18;
    --puck-font-size-m-unitless: 21;
    --puck-font-size-l-unitless: 24;
    --puck-font-size-xl-unitless: 28;
    --puck-font-size-xxl-unitless: 36;
    --puck-font-size-xxxl-unitless: 48;
    --puck-font-size-xxxxl-unitless: 56;
    --puck-font-size-xxxs: calc( 1rem * var(--puck-font-size-xxxs-unitless) / 16 );
    --puck-font-size-xxs: calc(1rem * var(--puck-font-size-xxs-unitless) / 16);
    --puck-font-size-xs: calc(1rem * var(--puck-font-size-xs-unitless) / 16);
    --puck-font-size-s: calc(1rem * var(--puck-font-size-s-unitless) / 16);
    --puck-font-size-m: calc(1rem * var(--puck-font-size-m-unitless) / 16);
    --puck-font-size-l: calc(1rem * var(--puck-font-size-l-unitless) / 16);
    --puck-font-size-xl: calc(1rem * var(--puck-font-size-xl-unitless) / 16);
    --puck-font-size-xxl: calc(1rem * var(--puck-font-size-xxl-unitless) / 16);
    --puck-font-size-xxxl: calc( 1rem * var(--puck-font-size-xxxl-unitless) / 16 );
    --puck-font-size-xxxxl: calc( 1rem * var(--puck-font-size-xxxxl-unitless) / 16 );
    --puck-font-size-base: var(--puck-font-size-xs);
    --puck-line-height-reset: 1;
    --puck-line-height-xs: calc( var(--puck-space-m-unitless) / var(--puck-font-size-m-unitless) );
    --puck-line-height-s: calc( var(--puck-space-m-unitless) / var(--puck-font-size-s-unitless) );
    --puck-line-height-m: calc( var(--puck-space-m-unitless) / var(--puck-font-size-xs-unitless) );
    --puck-line-height-l: calc( var(--puck-space-m-unitless) / var(--puck-font-size-xxs-unitless) );
    --puck-line-height-xl: calc( var(--puck-space-m-unitless) / var(--puck-font-size-scale-base-unitless) );
    --puck-line-height-base: var(--puck-line-height-m);
    --puck-fallback-font-stack:
      -apple-system,
      BlinkMacSystemFont,
      Segoe UI,
      Helvetica Neue,
      sans-serif,
      Apple Color Emoji,
      Segoe UI Emoji,
      Segoe UI Symbol;
    --puck-font-family: Inter, var(--puck-fallback-font-stack);
    --puck-font-family-monospaced:
      ui-monospace,
      "Cascadia Code",
      "Source Code Pro",
      Menlo,
      Consolas,
      "DejaVu Sans Mono",
      monospace;
  }
  @supports (font-variation-settings: normal) {
    :root {
      --puck-font-family: InterVariable, var(--puck-fallback-font-stack);
    }
  }
}

/* bundle/core.css */
:root {
  --_puck-styles-loaded: "true";
}
#frame-root {
  height: 1px;
  min-height: 100vh;
}
[data-puck-entry] {
  position: relative;
  z-index: 0;
}

/* bundle/index.css */

/* css-module:/home/runner/work/puck/puck/packages/core/components/ActionBar/styles.module.css/#css-module-data */
._ActionBar_5vdfr_1 {
  align-items: center;
  cursor: default;
  display: flex;
  width: auto;
  padding-top: var(--puck-actionbar-space-y, var(--puck-space-1));
  padding-bottom: var(--puck-actionbar-space-y, var(--puck-space-1));
  padding-inline-start: var(--puck-actionbar-space-x, 0);
  padding-inline-end: var(--puck-actionbar-space-x, 0);
  border-radius: var(--puck-actionbar-radius, var(--puck-radius-l));
  background: var(--puck-actionbar-color-bg, var(--puck-color-surface-inverse));
  color: var(--puck-color-text-inverse);
  font-family: var(--puck-font-family);
  min-height: 26px;
}
._ActionBar-label_5vdfr_17 {
  color: var(--puck-actionbar-color-text, var(--puck-color-text-inverse));
  font-size: var(--puck-actionbar-font-size, var(--puck-font-size-xxxs));
  opacity: var(--puck-actionbar-opacity-text, var(--puck-opacity-text-inverse));
  font-weight: var(--puck-font-weight-medium);
  padding-inline-start: var(--puck-space-2);
  padding-inline-end: var(--puck-space-2);
  margin-inline-start: var(--puck-space-1);
  margin-inline-end: var(--puck-space-1);
  text-overflow: ellipsis;
  white-space: nowrap;
}
._ActionBarAction_5vdfr_30 + ._ActionBar-label_5vdfr_17 {
  padding-inline-start: 0;
}
._ActionBar-label_5vdfr_17 + ._ActionBarAction_5vdfr_30 {
  margin-inline-start: calc(var(--puck-space-1) * -1);
}
._ActionBar-group_5vdfr_38 {
  align-items: center;
  border-inline-start: var(--puck-border-width-hairline) solid var(--puck-actionbar-color-separator, var(--puck-color-border-inverse));
  display: flex;
  height: 100%;
  padding-inline-start: var(--puck-space-1);
  padding-inline-end: var(--puck-space-1);
}
._ActionBar-group_5vdfr_38:first-of-type {
  border-inline-start: 0;
}
._ActionBar-group_5vdfr_38:empty {
  display: none;
}
._ActionBarAction_5vdfr_30 {
  background: transparent;
  border: none;
  color: var(--puck-actionbar-color-text, var(--puck-color-text-inverse));
  cursor: pointer;
  padding: var(--puck-actionbar-action-space, 6px);
  margin-inline-start: var(--puck-space-1);
  margin-inline-end: var(--puck-space-1);
  border-radius: var(--puck-radius-m);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: var(--puck-actionbar-opacity-text, var(--puck-opacity-text-inverse));
  transition: color var(--puck-duration-fast) var(--puck-ease-exit), opacity var(--puck-duration-fast) var(--puck-ease-exit);
}
._ActionBarAction--disabled_5vdfr_74 {
  cursor: auto;
  color: var( --puck-actionbar-color-action-disabled, var(--puck-color-text-inverse) );
  opacity: var(--puck-actionbar-opacity-action-disabled, 0.54);
}
._ActionBarAction_5vdfr_30 svg {
  max-width: none !important;
}
._ActionBarAction_5vdfr_30:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: calc(var(--puck-border-width-focus) * -1);
}
@media (hover: hover) and (pointer: fine) {
  ._ActionBarAction_5vdfr_30:hover:not(._ActionBarAction--disabled_5vdfr_74) {
    color: var( --puck-actionbar-color-action-hover, var(--puck-color-interactive-inverse-hover) );
    opacity: 1;
    transition: none;
  }
}
._ActionBarAction_5vdfr_30:active:not(._ActionBarAction--disabled_5vdfr_74),
._ActionBarAction--active_5vdfr_104 {
  color: var( --puck-actionbar-color-action-active, var(--puck-color-interactive-inverse-active) );
  opacity: 1;
  transition: none;
}
._ActionBar-group_5vdfr_38 * {
  margin: 0;
}
._ActionBar-separator_5vdfr_117 {
  background: var( --puck-actionbar-color-separator, var(--puck-color-border-inverse) );
  margin-inline: var(--puck-space-1);
  width: var( --puck-border-width-hairline );
  height: 100%;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/AutoField/styles.module.css/#css-module-data */
._InputWrapper_qyenz_1 + ._InputWrapper_qyenz_1 {
  margin-top: var(--puck-space-3);
}
._Input-label_qyenz_5 {
  align-items: center;
  color: var(--puck-field-label-color-text, var(--puck-color-text-secondary));
  display: flex;
  padding-bottom: var(--puck-field-label-space-y, var(--puck-space-3));
  font-size: var(--puck-field-label-font-size, var(--puck-font-size-xxs));
  font-weight: var( --puck-field-label-font-weight, var(--puck-font-weight-semibold) );
}
._Input-labelIcon_qyenz_17 {
  color: var(--puck-field-label-color-icon, var(--puck-color-text-subtle));
  display: flex;
  margin-inline-end: var(--puck-space-1);
  padding-inline-start: var(--puck-space-1);
}
._Input-disabledIcon_qyenz_24 {
  color: var(--puck-color-text-muted);
  margin-inline-start: auto;
}
._Input-input_qyenz_29 {
  background: var(--puck-field-color-bg, var(--puck-color-surface));
  border-width: var( --puck-field-border-width, var(--puck-border-width-regular) );
  border-style: solid;
  border-color: var(--puck-field-color-border, var(--puck-color-border));
  border-radius: var(--puck-field-radius, var(--puck-radius-m));
  box-sizing: border-box;
  color: var(--puck-field-color-text, var(--puck-color-text));
  font-family: inherit;
  font-size: var(--puck-font-size-xs);
  padding: var(--puck-field-space-y, var(--puck-space-3)) var( --puck-field-space-x, calc( var(--puck-space-4) - var(--puck-field-border-width, var(--puck-border-width-regular)) ) );
  transition: border-color var(--puck-duration-fast) var(--puck-ease-exit);
  width: 100%;
  max-width: 100%;
}
@media (min-width: 458px) {
  ._Input-input_qyenz_29 {
    font-size: var(--puck-field-font-size, var(--puck-font-size-xxs));
  }
}
._Input-select_qyenz_61 {
  position: relative;
  width: 100%;
}
select._Input-input_qyenz_29 {
  appearance: none;
  cursor: pointer;
}
._Input-selectIcon_qyenz_71 {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  fill: var(--puck-field-color-border, var(--puck-color-border));
  stroke-width: 0;
}
._Input-selectIcon_qyenz_71:dir(rtl) {
  right: auto;
  left: 12px;
}
@media (hover: hover) and (pointer: fine) {
  ._Input_qyenz_1:has(> input):hover ._Input-input_qyenz_29:not([readonly]),
  ._Input_qyenz_1:has(> textarea):hover ._Input-input_qyenz_29:not([readonly]) {
    border-color: var( --puck-field-color-border-hover, var(--puck-color-border-hover) );
    transition: none;
  }
  ._Input_qyenz_1:has(> ._Input-select_qyenz_61):hover ._Input-input_qyenz_29:not([disabled]) {
    color: var( --puck-field-color-text-hover, var(--puck-field-color-text, var(--puck-color-text)) );
    background-color: var( --puck-field-color-bg-hover, var(--puck-color-interactive-soft-hover) );
    border-color: var( --puck-field-color-border-hover, var(--puck-color-border-hover) );
    transition: none;
  }
  ._Input_qyenz_1:not(._Input--readOnly_qyenz_111):has(> ._Input-select_qyenz_61):hover ._Input-selectIcon_qyenz_71 {
    fill: var(--puck-field-color-border-hover, var(--puck-color-border-hover));
  }
}
._Input-input_qyenz_29:focus {
  border-color: var( --puck-field-color-border-hover, var(--puck-color-border-hover) );
  outline: var(--puck-border-width-focus) solid var(--puck-field-color-border-focus, var(--puck-color-focus-ring));
  transition: none;
}
._Input--readOnly_qyenz_111 > ._Input-input_qyenz_29,
._Input--readOnly_qyenz_111 > ._Input-select_qyenz_61 > select._Input-input_qyenz_29 {
  background-color: var( --puck-field-color-bg-disabled, var(--puck-color-surface-muted) );
  border-color: var( --puck-field-color-border-disabled, var(--puck-color-border) );
  color: var( --puck-field-color-text-disabled, var(--puck-color-text-secondary) );
  cursor: default;
  opacity: 1;
  outline: 0;
  transition: none;
}
._Input--readOnly_qyenz_111 > ._Input-select_qyenz_61 > select._Input-input_qyenz_29 ~ ._Input-selectIcon_qyenz_71 {
  fill: var(--puck-field-color-text-disabled, var(--puck-color-text-secondary));
}
._Input-radioGroupItems_qyenz_150 {
  --_puck-field-radio-radius: var(--puck-field-radius, var(--puck-radius-m));
  --_puck-field-radio-border-width: var( --puck-field-border-width, var(--puck-border-width-regular) );
  --_puck-field-radio-border-color: var( --puck-field-color-border, var(--puck-color-border) );
  display: flex;
  border: var(--_puck-field-radio-border-width) solid var(--_puck-field-radio-border-color);
  border-radius: var(--_puck-field-radio-radius);
  flex-wrap: wrap;
}
._Input-radio_qyenz_150 {
  border-inline-end: var(--_puck-field-radio-border-width) solid var(--_puck-field-radio-border-color);
  flex-grow: 1;
}
._Input-radio_qyenz_150:first-of-type {
  border-bottom-left-radius: var(--_puck-field-radio-radius);
  border-top-left-radius: var(--_puck-field-radio-radius);
}
._Input-radio_qyenz_150:first-of-type ._Input-radioInner_qyenz_179 {
  border-bottom-left-radius: calc(var(--_puck-field-radio-radius) - var(--_puck-field-radio-border-width));
  border-top-left-radius: calc(var(--_puck-field-radio-radius) - var(--_puck-field-radio-border-width));
}
._Input-radio_qyenz_150:last-of-type {
  border-bottom-right-radius: var(--_puck-field-radio-radius);
  border-inline-end: 0;
  border-top-right-radius: var(--_puck-field-radio-radius);
}
._Input-radio_qyenz_150:last-of-type ._Input-radioInner_qyenz_179 {
  border-bottom-right-radius: calc(var(--_puck-field-radio-radius) - var(--_puck-field-radio-border-width));
  border-top-right-radius: calc(var(--_puck-field-radio-radius) - var(--_puck-field-radio-border-width));
}
._Input-radioInner_qyenz_179 {
  background-color: var(--puck-field-color-bg, var(--puck-color-surface));
  color: var(--puck-field-color-text, var(--puck-color-text));
  cursor: pointer;
  font-size: var(--puck-field-font-size, var(--puck-font-size-xxs));
  padding: var(--puck-field-space-y, var(--puck-space-3)) var( --puck-field-space-x, calc(var(--puck-space-4) - var(--_puck-field-radio-border-width)) );
  text-align: center;
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit), color var(--puck-duration-fast) var(--puck-ease-exit);
}
._Input-radio_qyenz_150:has(:focus-visible) {
  outline: var(--puck-border-width-focus) solid var(--puck-field-color-border-focus, var(--puck-color-focus-ring));
  outline-offset: var(--puck-border-width-focus);
  position: relative;
}
@media (hover: hover) and (pointer: fine) {
  ._Input-radioInner_qyenz_179:hover {
    background-color: var( --puck-field-color-bg-hover, var(--puck-color-interactive-soft-hover) );
    color: var( --puck-field-color-text-hover, var(--puck-field-color-text, var(--puck-color-text)) );
    transition: none;
  }
}
._Input--readOnly_qyenz_111 ._Input-radioGroupItems_qyenz_150 {
  border-color: var( --puck-field-color-border-disabled, var(--puck-color-border) );
}
._Input--readOnly_qyenz_111 ._Input-radioInner_qyenz_179 {
  background-color: var(--puck-field-color-bg, var(--puck-color-surface));
  color: var(--puck-field-color-text, var(--puck-color-text-secondary));
  cursor: default;
}
._Input--readOnly_qyenz_111 ._Input-radio_qyenz_150 {
  border-inline-end: var(--_puck-field-radio-border-width) solid var(--puck-field-color-border-disabled, var(--puck-color-border));
}
._Input--readOnly_qyenz_111 ._Input-radio_qyenz_150:last-of-type {
  border-inline-end: 0;
}
._Input-radio_qyenz_150 ._Input-radioInput_qyenz_261:checked ~ ._Input-radioInner_qyenz_179 {
  background-color: var( --puck-field-color-bg-active, var(--puck-color-interactive-soft) );
  color: var(--puck-field-color-text-active, var(--puck-color-interactive));
  font-weight: var(--puck-font-weight-medium);
}
._Input--readOnly_qyenz_111 ._Input-radioInput_qyenz_261:checked ~ ._Input-radioInner_qyenz_179 {
  background-color: var( --puck-field-color-bg-disabled, var(--puck-color-surface-muted) );
  color: var( --puck-field-color-text-disabled, var(--puck-color-text-secondary) );
}
._Input-radio_qyenz_150 ._Input-radioInput_qyenz_261 {
  clip: rect(0 0 0 0);
  clip-path: inset(100%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
textarea._Input-input_qyenz_29 {
  margin-bottom: calc(var(--puck-space-1) * -1);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/AutoField/fields/ArrayField/styles.module.css/#css-module-data */
._ArrayField_62huh_5 {
  --_puck-field-array-border-color: var( --puck-field-color-border, var(--puck-color-border) );
  --_puck-field-array-border-width: var( --puck-field-border-width, var(--puck-border-width-regular) );
  --_puck-field-array-radius: var(--puck-field-radius, var(--puck-radius-m));
  --_puck-field-array-radius-inner: calc( var(--_puck-field-array-radius) - var(--_puck-field-array-border-width) );
  display: flex;
  flex-direction: column;
  background: var( --puck-field-color-bg-active, var(--puck-color-interactive-soft) );
  border: var(--_puck-field-array-border-width) solid var(--_puck-field-array-border-color);
  border-radius: var(--_puck-field-array-radius);
}
._ArrayField--isDraggingFrom_62huh_30 {
  background-color: var( --puck-field-color-bg-active, var(--puck-color-interactive-soft) );
  overflow: hidden;
}
._ArrayField-addButton_62huh_38 {
  background-color: var(--puck-field-color-bg, var(--puck-color-surface));
  border: none;
  border-radius: var(--_puck-field-array-radius-inner);
  display: flex;
  color: var(--puck-field-array-add-color-icon, var(--puck-color-interactive));
  justify-content: center;
  cursor: pointer;
  width: 100%;
  margin: 0;
  padding: calc(var(--puck-field-space-y, var(--puck-space-3)) + 2px) var( --puck-field-space-x, calc(var(--puck-space-4) - var(--_puck-field-array-border-width)) );
  text-align: left;
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit);
}
._ArrayField--hasItems_62huh_58 > ._ArrayField-addButton_62huh_38 {
  border-top: var(--_puck-field-array-border-width) solid var(--_puck-field-array-border-color);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
._ArrayField-addButton_62huh_38:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
  position: relative;
}
@media (hover: hover) and (pointer: fine) {
  ._ArrayField_62huh_5:not(._ArrayField--isDraggingFrom_62huh_30) > ._ArrayField-addButton_62huh_38:hover {
    background: var( --puck-field-color-bg-hover, var(--puck-color-interactive-soft-hover) );
    color: var( --puck-field-color-text-hover, var(--puck-field-color-text, var(--puck-color-text)) );
    transition: none;
  }
}
._ArrayField_62huh_5:not(._ArrayField--isDraggingFrom_62huh_30) > ._ArrayField-addButton_62huh_38:active {
  background: var( --puck-field-color-bg-hover, var(--puck-color-interactive-soft-hover) );
  transition: none;
}
._ArrayField-inner_62huh_93 {
  margin-top: -1px;
}
._ArrayFieldItem_62huh_101 {
  display: block;
  position: relative;
  border-top-left-radius: var(--_puck-field-array-radius-inner);
  border-top-right-radius: var(--_puck-field-array-radius-inner);
  border-top: var(--_puck-field-array-border-width) solid var(--_puck-field-array-border-color);
}
._ArrayFieldItem--isDragging_62huh_110 {
  border-top: transparent;
}
._ArrayFieldItem--isExpanded_62huh_114::before {
  display: none;
}
._ArrayFieldItem--isExpanded_62huh_114 {
  border-bottom: 0;
  outline-offset: 0px !important;
  outline: var(--_puck-field-array-border-width) solid var(--puck-field-color-border-focus, var(--puck-color-focus-ring)) !important;
  z-index: 2;
}
._ArrayFieldItem--isDragging_62huh_110 {
  outline: var(--puck-border-width-focus) var(--puck-field-color-border-dragging, var(--puck-color-selection-border)) solid !important;
}
._ArrayFieldItem--isDragging_62huh_110 ._ArrayFieldItem-summary_62huh_132:active {
  background-color: var(--puck-field-color-bg, var(--puck-color-surface));
}
._ArrayFieldItem_62huh_101 + ._ArrayFieldItem_62huh_101 {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
._ArrayFieldItem-summary_62huh_132 {
  --_puck-drag-icon-color: var(--puck-field-color-text, var(--puck-color-text));
  --_puck-drag-icon-color-hover: var( --puck-field-color-text-hover, var(--puck-field-color-text, var(--puck-color-text)) );
  background: var(--puck-field-color-bg, var(--puck-color-surface));
  color: var(--puck-field-color-text, var(--puck-color-text));
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 2px;
  justify-content: space-between;
  font-size: var(--puck-field-font-size, var(--puck-font-size-xxs));
  list-style: none;
  padding: var(--puck-field-space-y, var(--puck-space-3)) var( --puck-field-space-x, calc(var(--puck-space-4) - var(--_puck-field-array-border-width)) );
  position: relative;
  overflow: hidden;
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit);
}
._ArrayFieldItem--noFields_62huh_167 > ._ArrayFieldItem-summary_62huh_132 {
  cursor: grab;
}
._ArrayFieldItem_62huh_101:first-of-type > ._ArrayFieldItem-summary_62huh_132 {
  border-top-left-radius: var(--_puck-field-array-radius-inner);
  border-top-right-radius: var(--_puck-field-array-radius-inner);
}
._ArrayField--addDisabled_62huh_176 > ._ArrayField-inner_62huh_93 > ._ArrayFieldItem_62huh_101:last-of-type:not(._ArrayFieldItem--isExpanded_62huh_114) > ._ArrayFieldItem-summary_62huh_132 {
  border-bottom-left-radius: var(--_puck-field-array-radius-inner);
  border-bottom-right-radius: var(--_puck-field-array-radius-inner);
}
._ArrayField--addDisabled_62huh_176 > ._ArrayField-inner_62huh_93 > ._ArrayFieldItem--isExpanded_62huh_114:last-of-type {
  border-bottom-left-radius: var(--_puck-field-array-radius-inner);
  border-bottom-right-radius: var(--_puck-field-array-radius-inner);
}
._ArrayFieldItem-summary_62huh_132:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
}
@media (hover: hover) and (pointer: fine) {
  ._ArrayFieldItem-summary_62huh_132:hover {
    background-color: var( --puck-field-color-bg-hover, var(--puck-color-interactive-soft-hover) );
    color: var( --puck-field-color-text-hover, var(--puck-field-color-text, var(--puck-color-text)) );
    transition: none;
  }
}
._ArrayFieldItem-summary_62huh_132:active {
  background-color: var( --puck-field-color-bg-hover, var(--puck-color-interactive-soft-hover) );
  transition: none;
}
._ArrayFieldItem--isExpanded_62huh_114 > ._ArrayFieldItem-summary_62huh_132 {
  background: var( --puck-field-color-bg-active, var(--puck-color-interactive-soft) );
  color: var(--puck-field-color-text-active, var(--puck-color-interactive));
  font-weight: var(--puck-font-weight-semibold);
  transition: none;
}
._ArrayFieldItem-body_62huh_228 {
  background: var(--puck-field-color-surface, var(--puck-color-surface));
  display: none;
}
._ArrayFieldItem--isExpanded_62huh_114 > ._ArrayFieldItem-body_62huh_228 {
  display: block;
}
._ArrayFieldItem-fieldset_62huh_237 {
  border: none;
  border-top: var(--_puck-field-array-border-width) solid var(--_puck-field-array-border-color);
  margin: 0;
  min-width: 0;
  padding: var(--puck-field-space-surface-y, var(--puck-space-4)) var( --puck-field-space-surface-x, calc(var(--puck-space-4) - var(--_puck-field-array-border-width)) );
}
._ArrayFieldItem-rhs_62huh_250 {
  display: flex;
  gap: var(--puck-space-1);
  align-items: center;
}
._ArrayFieldItem-actions_62huh_256 {
  color: var(--puck-color-text-secondary);
  display: flex;
  gap: var(--puck-space-1);
  opacity: 0;
}
._ArrayFieldItem-summary_62huh_132:focus-within > ._ArrayFieldItem-rhs_62huh_250 > ._ArrayFieldItem-actions_62huh_256,
._ArrayFieldItem-summary_62huh_132:hover > ._ArrayFieldItem-rhs_62huh_250 > ._ArrayFieldItem-actions_62huh_256 {
  opacity: 1;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/IconButton/IconButton.module.css/#css-module-data */
._IconButton_1pxxt_1 {
  align-items: center;
  background: var(--puck-iconbutton-color-bg, transparent);
  border: none;
  border-radius: var(--puck-iconbutton-radius, var(--puck-radius-m));
  color: var(--puck-iconbutton-color-icon, currentColor);
  display: flex;
  font-family: var(--puck-font-family);
  justify-content: center;
  padding: var(--puck-iconbutton-space, var(--puck-space-1));
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit), color var(--puck-duration-fast) var(--puck-ease-exit);
}
._IconButton--active_1pxxt_15 {
  color: var( --puck-iconbutton-color-icon-active, var(--puck-color-interactive) );
}
._IconButton_1pxxt_1:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: calc(var(--puck-border-width-focus) * -1);
}
@media (hover: hover) and (pointer: fine) {
  ._IconButton_1pxxt_1:hover:not(._IconButton--disabled_1pxxt_28) {
    background: var( --_puck-iconbutton-color-bg-hover, var( --puck-iconbutton-color-bg-hover, var(--puck-color-interactive-neutral-hover) ) );
    color: var( --puck-iconbutton-color-icon-hover, var(--puck-color-interactive) );
    cursor: pointer;
    transition: none;
  }
}
._IconButton_1pxxt_1:active {
  background: var( --puck-iconbutton-color-bg-active, var(--puck-color-interactive-soft) );
  transition: none;
}
._IconButton--disabled_1pxxt_28 {
  color: var( --puck-iconbutton-color-icon-disabled, var(--puck-color-text-subtle) );
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Loader/styles.module.css/#css-module-data */
@keyframes _loader-animation_1w5zn_1 {
  0% {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(180deg) scale(0.8);
  }
  100% {
    transform: rotate(360deg) scale(1);
  }
}
._Loader_1w5zn_13 {
  background: transparent;
  border-radius: var(--puck-radius-round);
  border: var(--puck-border-width-focus) solid currentColor;
  border-bottom-color: transparent;
  display: inline-block;
  animation: _loader-animation_1w5zn_1 1s 0s infinite linear;
  animation-fill-mode: both;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/DragIcon/styles.module.css/#css-module-data */
._DragIcon_5e515_1 {
  color: var(--_puck-drag-icon-color, var(--puck-color-text-muted));
  cursor: grab;
  padding: var(--puck-space-1);
  border-radius: var(--puck-radius-m);
}
._DragIcon--disabled_5e515_10 {
  cursor: no-drop;
}
@media (hover: hover) and (pointer: fine) {
  ._DragIcon_5e515_1:not(._DragIcon--disabled_5e515_10):hover {
    color: var(--_puck-drag-icon-color-hover, var(--puck-color-focus-ring));
  }
}

/* components/Sortable/styles.css */
[data-dnd-placeholder]:not([data-puck-line-drag] *) * {
  opacity: 0 !important;
}
[data-dnd-placeholder]:not([data-puck-line-drag] *) {
  background: var( --_puck-field-array-color-placeholder, var(--puck-color-azure-06) ) !important;
  border: none !important;
  color: transparent !important;
  opacity: 0.3 !important;
  outline: none !important;
  transition: none !important;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/ExternalInput/styles.module.css/#css-module-data */
._ExternalInput-actions_143vl_1 {
  display: flex;
}
._ExternalInput-button_143vl_5 {
  display: flex;
  gap: var(--puck-space-2);
  align-items: center;
  justify-content: center;
  background-color: var(--puck-field-color-bg, var(--puck-color-surface));
  border: var(--puck-field-border-width, var(--puck-border-width-regular)) solid var(--puck-field-color-border, var(--puck-color-border));
  border-radius: var(--puck-field-radius, var(--puck-radius-m));
  color: var(--puck-field-color-text-active, var(--puck-color-interactive));
  padding: var(--puck-field-space-y, var(--puck-space-3)) var( --puck-field-space-x, calc( var(--puck-space-4) - var(--puck-field-border-width, var(--puck-border-width-regular)) ) );
  font-size: var(--puck-field-font-size, var(--puck-font-size-xxs));
  font-weight: var(--puck-font-weight-medium);
  white-space: nowrap;
  text-overflow: ellipsis;
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit);
  position: relative;
  overflow: hidden;
  flex-grow: 1;
  cursor: pointer;
}
._ExternalInput--dataSelected_143vl_34 ._ExternalInput-button_143vl_5 {
  color: var(--puck-field-color-text, var(--puck-color-text));
  display: block;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
}
._ExternalInput--readOnly_143vl_41 ._ExternalInput-button_143vl_5 {
  background-color: var( --puck-field-color-bg-disabled, var(--puck-color-surface-muted) );
}
._ExternalInput-detachButton_143vl_48 {
  border: var(--puck-field-border-width, var(--puck-border-width-regular)) solid var(--puck-field-color-border, var(--puck-color-border));
  border-top-right-radius: var(--puck-field-radius, var(--puck-radius-m));
  border-bottom-right-radius: var(--puck-field-radius, var(--puck-radius-m));
  background-color: var( --puck-field-external-detach-color-bg, var(--puck-color-surface-subtle) );
  color: var( --puck-field-external-detach-color-text, var(--puck-color-text-muted) );
  display: flex;
  gap: var(--puck-space-2);
  align-items: center;
  justify-content: center;
  padding: var(--puck-space-2) var(--puck-space-3);
  position: relative;
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit), color var(--puck-duration-fast) var(--puck-ease-exit);
  margin-inline-start: -1px;
  cursor: pointer;
}
._ExternalInput-button_143vl_5:focus-visible,
._ExternalInput-detachButton_143vl_48:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
  z-index: 1;
}
@media (hover: hover) and (pointer: fine) {
  ._ExternalInput_143vl_1:not(._ExternalInput--readOnly_143vl_41) ._ExternalInput-button_143vl_5:hover,
  ._ExternalInput_143vl_1:not(._ExternalInput--readOnly_143vl_41) ._ExternalInput-detachButton_143vl_48:hover {
    background: var( --puck-field-color-bg-hover, var(--puck-color-interactive-soft-hover) );
    transition: none;
  }
  ._ExternalInput_143vl_1:not(._ExternalInput--readOnly_143vl_41) ._ExternalInput-detachButton_143vl_48:hover {
    color: var( --puck-field-color-text-hover, var(--puck-field-external-detach-color-text, var(--puck-color-text-muted)) );
  }
  ._ExternalInput--dataSelected_143vl_34:not(._ExternalInput--readOnly_143vl_41) ._ExternalInput-button_143vl_5:hover {
    color: var( --puck-field-color-text-hover, var(--puck-field-color-text, var(--puck-color-text)) );
  }
}
._ExternalInput_143vl_1:not(._ExternalInput--readOnly_143vl_41) ._ExternalInput-button_143vl_5:active,
._ExternalInput_143vl_1:not(._ExternalInput--readOnly_143vl_41) ._ExternalInput-detachButton_143vl_48:active {
  background: var( --puck-field-color-bg-hover, var(--puck-color-interactive-soft-hover) );
  transition: none;
}
._ExternalInputModal_143vl_118 {
  color: var(--puck-color-text);
  display: grid;
  grid-template-rows: min-content minmax(128px, 100%) min-content;
  grid-template-columns: 100%;
  position: relative;
  min-height: 50dvh;
  max-height: 90dvh;
}
._ExternalInputModal-grid_143vl_128 {
  display: flex;
  flex-direction: column;
}
@media (min-width: 458px) {
  ._ExternalInputModal-grid_143vl_128 {
    display: grid;
    grid-template-columns: 100%;
  }
  ._ExternalInputModal--filtersToggled_143vl_139 ._ExternalInputModal-grid_143vl_128 {
    grid-template-columns: 25% 75%;
  }
}
._ExternalInputModal-filters_143vl_144 {
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border);
}
._ExternalInputModal--filtersToggled_143vl_139 ._ExternalInputModal-filters_143vl_144 {
  display: none;
}
@media (min-width: 458px) {
  ._ExternalInputModal-filters_143vl_144 {
    border-inline-end: var(--puck-border-width-regular) solid var(--puck-color-border);
    display: none;
  }
  ._ExternalInputModal--filtersToggled_143vl_139 ._ExternalInputModal-filters_143vl_144 {
    display: block;
  }
}
._ExternalInputModal-masthead_143vl_164 {
  background-color: var(--puck-color-surface-subtle);
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border);
  display: flex;
  flex-wrap: wrap;
  gap: var(--puck-space-5);
  padding: var(--puck-space-5);
}
._ExternalInputModal-tableWrapper_143vl_173 {
  position: relative;
  overflow-x: auto;
  overflow-y: auto;
  flex-grow: 1;
}
._ExternalInputModal-table_143vl_173 {
  border-collapse: unset;
  border-spacing: 0px;
  color: var(--puck-color-text);
  position: relative;
  z-index: 0;
  min-width: 100%;
}
._ExternalInputModal-thead_143vl_189 {
  background-color: var(--puck-color-surface);
  position: sticky;
  top: 0;
  z-index: 1;
}
._ExternalInputModal-th_143vl_189 {
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border);
  color: var(--puck-color-text-secondary);
  font-weight: var(--puck-font-weight-medium);
  font-size: var(--puck-font-size-xxs);
  padding: var(--puck-space-4) var(--puck-space-5);
}
._ExternalInputModal-td_143vl_204 {
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border-muted);
  padding: var(--puck-space-4) var(--puck-space-5);
}
._ExternalInputModal-tr_143vl_210 ._ExternalInputModal-td_143vl_204:first-of-type {
  font-weight: var(--puck-font-weight-medium);
  width: 1%;
  white-space: nowrap;
}
@media (hover: hover) and (pointer: fine) {
  ._ExternalInputModal-tbody_143vl_217 ._ExternalInputModal-tr_143vl_210:hover {
    background: var(--puck-color-interactive-soft-hover);
    color: var(--puck-color-interactive);
    cursor: pointer;
    position: relative;
    margin-inline-start: -5px;
  }
  ._ExternalInputModal-tbody_143vl_217 ._ExternalInputModal-tr_143vl_210:hover ._ExternalInputModal-td_143vl_204:first-of-type {
    border-inline-start: var(--puck-border-width-strong) solid var(--puck-color-interactive);
    padding-inline-start: 20px;
  }
}
._ExternalInputModal-tbody_143vl_217 ._ExternalInputModal-tr_143vl_210:last-of-type ._ExternalInputModal-td_143vl_204 {
  border-bottom: none;
}
._ExternalInputModal-tableWrapper_143vl_173 {
  display: none;
}
._ExternalInputModal--hasData_143vl_244 ._ExternalInputModal-tableWrapper_143vl_173 {
  display: block;
}
._ExternalInputModal-loadingBanner_143vl_248 {
  display: none;
  background-color: color-mix(in srgb, var(--puck-color-surface) 90%, transparent);
  padding: 64px;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
._ExternalInputModal--isLoading_143vl_265 ._ExternalInputModal-loadingBanner_143vl_248 {
  display: flex;
}
._ExternalInputModal-searchForm_143vl_269 {
  display: flex;
  flex-wrap: wrap;
  gap: var(--puck-space-3);
  flex-grow: 1;
}
@media (min-width: 458px) {
  ._ExternalInputModal-searchForm_143vl_269 {
    flex-wrap: nowrap;
  }
}
._ExternalInputModal-search_143vl_269 {
  display: flex;
  background: var(--puck-color-surface);
  border-width: var(--puck-border-width-regular);
  border-style: solid;
  border-color: var(--puck-color-border);
  border-radius: var(--puck-radius-m);
  flex-grow: 1;
  transition: border-color var(--puck-duration-fast) var(--puck-ease-exit);
}
._ExternalInputModal-search_143vl_269:focus-within {
  border-color: var(--puck-color-border-hover);
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  transition: none;
}
@media (hover: hover) and (pointer: fine) {
  ._ExternalInputModal-search_143vl_269:hover {
    border-color: var(--puck-color-border-hover);
    transition: none;
  }
}
._ExternalInputModal-searchIcon_143vl_306 {
  align-items: center;
  background: var(--puck-color-surface-subtle);
  border-bottom-left-radius: var(--puck-radius-m);
  border-top-left-radius: var(--puck-radius-m);
  border-inline-end: var(--puck-border-width-regular) solid var(--puck-color-border);
  color: var(--puck-color-text-subtle);
  display: flex;
  justify-content: center;
  padding: var(--puck-space-3) calc(var(--puck-space-4) - var(--puck-border-width-regular));
  transition: color var(--puck-duration-fast) var(--puck-ease-exit);
}
._ExternalInputModal-search_143vl_269:focus-within ._ExternalInputModal-searchIcon_143vl_306 {
  color: var(--puck-color-text-secondary);
  transition: none;
}
@media (hover: hover) and (pointer: fine) {
  ._ExternalInputModal-search_143vl_269:hover ._ExternalInputModal-searchIcon_143vl_306 {
    color: var(--puck-color-text-secondary);
    transition: none;
  }
}
._ExternalInputModal-searchIconText_143vl_333 {
  clip: rect(0 0 0 0);
  clip-path: inset(100%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
._ExternalInputModal-searchInput_143vl_343 {
  border: none;
  border-radius: var(--puck-radius-m);
  background: var(--puck-color-surface);
  font-family: inherit;
  font-size: var(--puck-font-size-xxs);
  padding: var(--puck-space-3) calc(var(--puck-space-4) - var(--puck-border-width-regular));
  width: 100%;
}
._ExternalInputModal-searchInput_143vl_343:focus {
  outline: 0;
}
._ExternalInputModal-searchActions_143vl_358 {
  display: flex;
  gap: var(--puck-space-2);
  height: 44px;
  width: 100%;
}
@media (min-width: 458px) {
  ._ExternalInputModal-searchActions_143vl_358 {
    width: auto;
  }
}
._ExternalInputModal-searchActionIcon_143vl_371 {
  align-self: center;
}
._ExternalInputModal-footerContainer_143vl_375 {
  background-color: var(--puck-color-surface-subtle);
  border-top: var(--puck-border-width-regular) solid var(--puck-color-border);
  color: var(--puck-color-text-secondary);
  padding: var(--puck-space-4);
}
._ExternalInputModal-footer_143vl_375 {
  font-weight: var(--puck-font-weight-medium);
  font-size: var(--puck-font-size-xxs);
  text-align: right;
}
._ExternalInputModal-field_143vl_388 {
  color: var(--puck-color-text-secondary);
  margin: var(--puck-space-4);
  margin-bottom: var(--puck-space-3);
  display: block;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Modal/styles.module.css/#css-module-data */
._Modal_g5xob_1 {
  background: var(--puck-color-overlay-backdrop);
  display: none;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  padding: 32px;
}
._Modal--isOpen_g5xob_15 {
  display: flex;
}
._Modal-inner_g5xob_19 {
  width: 100%;
  max-width: 1024px;
  border-radius: var(--puck-radius-l);
  overflow: hidden;
  background: var(--puck-color-surface);
  display: flex;
  flex-direction: column;
  max-height: 90dvh;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Heading/styles.module.css/#css-module-data */
._Heading_97eh4_1 {
  display: block;
  color: var(--_puck-heading-color, var(--puck-color-text));
  font-weight: var(--puck-font-weight-bold);
  margin: 0;
}
._Heading_97eh4_1 b {
  font-weight: var(--puck-font-weight-bold);
}
._Heading--xxxxl_97eh4_12 {
  font-size: var(--puck-font-size-xxxxl);
  letter-spacing: var(--puck-letter-spacing-heading);
  font-weight: var(--puck-font-weight-heavy);
}
._Heading--xxxl_97eh4_18 {
  font-size: var(--puck-font-size-xxxl);
}
._Heading--xxl_97eh4_22 {
  font-size: var(--puck-font-size-xxl);
}
._Heading--xl_97eh4_26 {
  font-size: var(--puck-font-size-xl);
}
._Heading--l_97eh4_30 {
  font-size: var(--puck-font-size-l);
}
._Heading--m_97eh4_34 {
  font-size: var(--puck-font-size-m);
}
._Heading--s_97eh4_38 {
  font-size: var(--puck-font-size-s);
}
._Heading--xs_97eh4_42 {
  font-size: var(--puck-font-size-xs);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Button/Button.module.css/#css-module-data */
._Button_oe4qj_1 {
  --_puck-button-default-space-x: 20px;
  --_puck-button-default-font-size: var(--puck-font-size-xxs);
  --_puck-button-default-font-weight: var(--puck-font-weight-regular);
  --_puck-button-default-color-bg-disabled: var(--puck-color-bg-disabled);
  --_puck-button-default-color-text-disabled: var(--puck-color-text-disabled);
  appearance: none;
  background: none;
  border: var(--puck-border-width-regular) solid transparent;
  border-radius: var(--puck-button-radius, var(--puck-radius-m));
  color: var(--puck-color-text-inverse);
  display: inline-flex;
  align-items: center;
  gap: var(--puck-space-2);
  letter-spacing: var(--puck-letter-spacing-ui);
  font-family: var(--puck-font-family);
  box-sizing: border-box;
  line-height: 1;
  text-align: center;
  text-decoration: none;
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit), color var(--puck-duration-fast) var(--puck-ease-exit);
  cursor: pointer;
  white-space: nowrap;
  margin: 0;
}
._Button_oe4qj_1:hover,
._Button_oe4qj_1:active {
  transition: none;
}
._Button--medium_oe4qj_34 {
  min-height: 34px;
  padding-bottom: var( --puck-button-medium-space-y, calc(var(--puck-space-2) - var(--puck-border-width-regular)) );
  padding-inline-start: var( --puck-button-medium-space-x, calc(var(--_puck-button-default-space-x) - var(--puck-border-width-regular)) );
  padding-inline-end: var( --puck-button-medium-space-x, calc(var(--_puck-button-default-space-x) - var(--puck-border-width-regular)) );
  padding-top: var( --puck-button-medium-space-y, calc(var(--puck-space-2) - var(--puck-border-width-regular)) );
  font-weight: var( --puck-button-medium-font-weight, var(--_puck-button-default-font-weight) );
  font-size: var( --puck-button-medium-font-size, var(--_puck-button-default-font-size) );
}
._Button--large_oe4qj_62 {
  padding-bottom: var( --puck-button-large-space-y, calc(var(--puck-space-3) - var(--puck-border-width-regular)) );
  padding-inline-start: var( --puck-button-large-space-x, calc(var(--_puck-button-default-space-x) - var(--puck-border-width-regular)) );
  padding-inline-end: var( --puck-button-large-space-x, calc(var(--_puck-button-default-space-x) - var(--puck-border-width-regular)) );
  padding-top: var( --puck-button-large-space-y, calc(var(--puck-space-3) - var(--puck-border-width-regular)) );
  font-weight: var( --puck-button-large-font-weight, var(--_puck-button-default-font-weight) );
  font-size: var( --puck-button-large-font-size, var(--_puck-button-default-font-size) );
}
._Button-icon_oe4qj_89 {
  margin-top: 2px;
}
._Button--primary_oe4qj_93 {
  background: var( --puck-button-primary-color-bg, var(--puck-color-interactive) );
  border-color: var(--puck-button-primary-color-border, transparent);
  color: var(--puck-button-primary-color-text, var(--puck-color-text-inverse));
}
._Button_oe4qj_1:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
}
@media (hover: hover) and (pointer: fine) {
  ._Button--primary_oe4qj_93:hover {
    background-color: var( --puck-button-primary-color-bg-hover, var(--puck-color-interactive-hover) );
  }
}
._Button--primary_oe4qj_93:active {
  background-color: var( --puck-button-primary-color-bg-active, var(--puck-color-interactive-active) );
}
._Button--primary_oe4qj_93._Button--disabled_oe4qj_123,
._Button--primary_oe4qj_93._Button--disabled_oe4qj_123:hover {
  background-color: var( --puck-button-primary-color-bg-disabled, var(--_puck-button-default-color-bg-disabled) );
  color: var( --puck-button-primary-color-text-disabled, var(--_puck-button-default-color-text-disabled) );
}
._Button--secondary_oe4qj_135 {
  background: var(--puck-button-secondary-color-bg, transparent);
  border-color: var(--puck-button-secondary-color-border, currentColor);
  color: var(--puck-button-secondary-color-text, currentColor);
}
@media (hover: hover) and (pointer: fine) {
  ._Button--secondary_oe4qj_135:hover {
    background-color: var( --puck-button-secondary-color-bg-hover, var(--puck-color-interactive-soft) );
    color: var(--puck-button-secondary-color-text, var(--puck-color-text));
  }
}
._Button--secondary_oe4qj_135:active {
  background-color: var( --puck-button-secondary-color-bg-active, var(--puck-color-interactive-soft) );
  color: var(--puck-button-secondary-color-text, var(--puck-color-text));
}
._Button--secondary_oe4qj_135._Button--disabled_oe4qj_123,
._Button--secondary_oe4qj_135._Button--disabled_oe4qj_123:hover {
  background-color: var( --puck-button-secondary-color-bg-disabled, var(--_puck-button-default-color-bg-disabled) );
  color: var( --puck-button-secondary-color-text-disabled, var(--_puck-button-default-color-text-disabled) );
}
._Button--flush_oe4qj_171 {
  border-radius: var(--puck-radius-none);
}
._Button--disabled_oe4qj_123:hover {
  cursor: not-allowed;
}
._Button--fullWidth_oe4qj_179 {
  justify-content: center;
  width: 100%;
}
._Button-spinner_oe4qj_184 {
  padding-inline-start: var(--puck-space-2);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/RichTextMenu/styles.module.css/#css-module-data */
._RichTextMenu_1ve2j_1 {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
._RichTextMenu--form_1ve2j_7 {
  border-top-left-radius: var(--puck-field-radius, var(--puck-radius-m));
  border-top-right-radius: var(--puck-field-radius, var(--puck-radius-m));
  padding: var(--puck-field-richtext-menu-space-y, 6px) var(--puck-field-richtext-menu-space-x, 6px);
  background-color: var( --puck-field-richtext-menu-color-bg, var(--puck-color-surface-subtle) );
  position: relative;
  scrollbar-width: none;
  overflow-x: auto;
}
._RichTextMenu-group_1ve2j_21 {
  display: flex;
  align-items: space-between;
  flex-direction: row;
  flex-wrap: nowrap;
  padding-inline: 6px;
  gap: 2px;
  position: relative;
}
._RichTextMenu-group_1ve2j_21:first-of-type {
  padding-left: 0;
}
._RichTextMenu-group_1ve2j_21:last-of-type {
  padding-right: 0;
}
._RichTextMenu--inline_1ve2j_39 ._RichTextMenu-group_1ve2j_21 {
  color: var(--puck-color-text-inverse);
  gap: 0px;
  flex-wrap: nowrap;
}
._RichTextMenu-group_1ve2j_21 + ._RichTextMenu-group_1ve2j_21 {
  border-left: var(--puck-border-width-regular) solid var( --puck-field-richtext-menu-color-separator, var(--puck-color-border-muted) );
}
._RichTextMenu--inline_1ve2j_39 ._RichTextMenu-group_1ve2j_21 + ._RichTextMenu-group_1ve2j_21 {
  border-left: var(--puck-border-width-hairline) solid var(--puck-color-border-inverse);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/RichTextMenu/components/Control/styles.module.css/#css-module-data */
._Control_id4pm_1 .lucide {
  height: var(--puck-icon-size-m);
  width: var(--puck-icon-size-m);
}
._Control--inline_id4pm_6 .lucide {
  height: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
  width: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Select/styles.module.css/#css-module-data */
._Select_1n4iv_1 {
  position: relative;
  z-index: 1;
}
._Select-buttonInner_1n4iv_6 {
  align-items: center;
  display: flex;
}
._Select-buttonIcon_1n4iv_11 {
  align-items: center;
  display: flex;
  justify-content: center;
}
._Select--standalone_1n4iv_17 ._Select-buttonIcon_1n4iv_11 .lucide {
  height: var(--puck-icon-size-m);
  width: var(--puck-icon-size-m);
}
._Select--actionBar_1n4iv_22 ._Select-buttonIcon_1n4iv_11 .lucide {
  height: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
  width: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
}
._Select-items_1n4iv_27 {
  background: var(--puck-color-surface);
  border: var(--puck-border-width-regular) solid var(--puck-color-border);
  border-radius: var(--puck-radius-l);
  margin: 10px 8px;
  margin-left: 0;
  padding: var(--puck-space-1);
  z-index: 2;
  list-style: none;
}
._SelectItem_1n4iv_38 {
  background: transparent;
  border-radius: var(--puck-radius-m);
  border: none;
  color: var(--puck-color-text-secondary);
  cursor: pointer;
  display: flex;
  gap: var(--puck-space-2);
  align-items: center;
  font-size: var(--puck-font-size-xxs);
  margin: 0;
  padding: var(--puck-space-2) var(--puck-space-3);
  width: 100%;
}
._SelectItem--isSelected_1n4iv_53 {
  background: var(--puck-color-interactive-soft);
  color: var(--puck-color-interactive);
  font-weight: var(--puck-font-weight-medium);
}
._SelectItem--isSelected_1n4iv_53 ._SelectItem-icon_1n4iv_59 {
  color: var(--puck-color-interactive);
}
._SelectItem_1n4iv_38:hover {
  background: var(--puck-color-interactive-soft);
  color: var(--puck-color-interactive);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/RichTextEditor/styles.module.css/#css-module-data */
._RichTextEditor_5wzos_1 .ProseMirror {
  white-space: pre-wrap;
  word-wrap: break-word;
  cursor: text;
  outline: none;
  position: relative;
}
._RichTextEditor_5wzos_1 .rich-text * {
  white-space: pre-wrap;
  user-select: auto;
  -webkit-user-select: auto;
}
._RichTextEditor_5wzos_1 .rich-text blockquote {
  margin: 1em 0;
  padding: 0 1em;
  border-left: var(--puck-border-width-strong) solid var(--puck-color-border);
}
._RichTextEditor_5wzos_1 .rich-text code {
  background-color: var(--puck-color-surface-muted);
  padding: var(--puck-space-1) var(--puck-space-2);
  border-radius: var(--puck-radius-m);
}
._RichTextEditor_5wzos_1 .rich-text p:empty::before {
  content: "\\a0";
}
._RichTextEditor_5wzos_1 .rich-text pre code {
  display: block;
  padding: var(--puck-space-2) var(--puck-space-3);
}
._RichTextEditor_5wzos_1 .rich-text > *:first-child,
._RichTextEditor_5wzos_1 .ProseMirror > *:first-child,
._RichTextEditor_5wzos_1 .rich-text * p:first-of-type {
  margin-top: 0;
}
._RichTextEditor_5wzos_1 .rich-text > *:last-child,
._RichTextEditor_5wzos_1 .ProseMirror > *:last-child,
._RichTextEditor_5wzos_1 .rich-text * p:last-of-type {
  margin-bottom: 0;
}
._RichTextEditor--editor_5wzos_50 {
  color: var(--puck-field-color-text, var(--puck-color-text));
  background: var(--puck-field-color-bg, var(--puck-color-surface));
  border-width: var( --puck-field-border-width, var(--puck-border-width-regular) );
  border-style: solid;
  border-color: var(--puck-field-color-border, var(--puck-color-border));
  border-radius: var(--puck-field-radius, var(--puck-radius-m));
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  font-family: inherit;
  font-size: var(--puck-field-font-size, var(--puck-font-size-xxs));
  resize: vertical;
  text-align: initial;
  transition: border-color var(--puck-duration-fast) var(--puck-ease-exit);
  width: 100%;
  max-width: 100%;
  min-height: 128px;
}
._RichTextEditor--editor_5wzos_50 .rich-text {
  flex-grow: 1;
}
._RichTextEditor--editor_5wzos_50 .rich-text:not(:has(.ProseMirror)),
._RichTextEditor--editor_5wzos_50 .rich-text .ProseMirror {
  height: 100%;
  padding: var(--puck-field-space-y, var(--puck-space-3)) var( --puck-field-space-x, calc( var(--puck-space-4) - var(--puck-field-border-width, var(--puck-border-width-regular)) ) );
}
._RichTextEditor--editor_5wzos_50 .rich-text ul,
._RichTextEditor--editor_5wzos_50 .rich-text ol {
  padding-left: var(--puck-space-5);
}
._RichTextEditor--editor_5wzos_50 .rich-text li {
  line-height: 1.5;
}
._RichTextEditor--editor_5wzos_50 .rich-text p {
  margin-block: var(--puck-space-3);
}
._RichTextEditor--editor_5wzos_50 .rich-text ul {
  list-style: disc;
}
._RichTextEditor--editor_5wzos_50 .rich-text ol {
  list-style: decimal;
}
._RichTextEditor--editor_5wzos_50:focus-within {
  border-color: var( --puck-field-color-border-hover, var(--puck-color-border-hover) );
  outline: var(--puck-border-width-focus) solid var(--puck-field-color-border-focus, var(--puck-color-focus-ring));
  transition: none;
}
@media (hover: hover) and (pointer: fine) {
  ._RichTextEditor--editor_5wzos_50:hover:not(._RichTextEditor--disabled_5wzos_123) {
    border-color: var( --puck-field-color-border-hover, var(--puck-color-border-hover) );
    transition: none;
  }
}
._RichTextEditor--editor_5wzos_50._RichTextEditor--disabled_5wzos_123 {
  background: var( --puck-field-color-bg-disabled, var(--puck-color-surface-muted) );
  border-color: var( --puck-field-color-border-disabled, var(--puck-color-border) );
}
._RichTextEditor--editor_5wzos_50._RichTextEditor--disabled_5wzos_123 .rich-text:not(:has(.ProseMirror)),
._RichTextEditor--editor_5wzos_50._RichTextEditor--disabled_5wzos_123 .rich-text .ProseMirror {
  color: var( --puck-field-color-text-disabled, var(--puck-color-text-secondary) );
}
._RichTextEditor--editor_5wzos_50._RichTextEditor--disabled_5wzos_123 .ProseMirror[contenteditable=false] {
  cursor: default;
}
._RichTextEditor_5wzos_1:not(:focus-within):not(._RichTextEditor--isActive_5wzos_159) .ProseMirror ::selection {
  background-color: transparent;
}
._RichTextEditor-menu_5wzos_165 {
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border-muted);
  position: sticky;
  top: 0;
  z-index: 1;
}
._RichTextEditor--disabled_5wzos_123 ._RichTextEditor-menu_5wzos_165 {
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/AutoField/fields/ObjectField/styles.module.css/#css-module-data */
._ObjectField_c5reb_1 {
  display: flex;
  flex-direction: column;
  background-color: var(--puck-field-color-surface, var(--puck-color-surface));
  border: var(--puck-field-border-width, var(--puck-border-width-regular)) solid var(--puck-field-color-border, var(--puck-color-border));
  border-radius: var(--puck-field-radius, var(--puck-radius-m));
}
._ObjectField-fieldset_c5reb_10 {
  border: none;
  margin: 0;
  min-width: 0;
  padding: var(--puck-field-space-surface-y, var(--puck-space-4)) var( --puck-field-space-surface-x, calc( var(--puck-space-4) - var(--puck-field-border-width, var(--puck-border-width-regular)) ) );
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Drawer/styles.module.css/#css-module-data */
._Drawer_1n90m_1 {
  display: flex;
  flex-direction: column;
  font-family: var(--puck-font-family);
  gap: var(--puck-space-3);
}
._Drawer-draggable_1n90m_8 {
  position: relative;
}
._Drawer-draggableBg_1n90m_12 {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
  z-index: -1;
}
._DrawerItem-draggable_1n90m_22 {
  background: var(--puck-drawer-item-color-bg, var(--puck-color-surface));
  color: var(--puck-drawer-item-color-text, var(--puck-color-text));
  cursor: grab;
  padding: var(--puck-drawer-item-space, var(--puck-space-3));
  display: flex;
  border: var(--puck-drawer-item-border-width, var(--puck-border-width-regular)) var(--puck-drawer-item-color-border, var(--puck-color-border)) solid;
  border-radius: var(--puck-drawer-item-radius, var(--puck-radius-m));
  font-size: var(--puck-drawer-item-font-size, var(--puck-font-size-xxs));
  justify-content: space-between;
  align-items: center;
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit), color var(--puck-duration-fast) var(--puck-ease-exit);
}
._DrawerItem--disabled_1n90m_38 ._DrawerItem-draggable_1n90m_22 {
  background: var(--puck-color-surface-muted);
  color: var(--puck-color-text-muted);
  cursor: not-allowed;
}
._DrawerItem_1n90m_22:focus-visible {
  outline: 0;
}
._Drawer_1n90m_1:not(._Drawer--isDraggingFrom_1n90m_48) ._DrawerItem_1n90m_22:focus-visible ._DrawerItem-draggable_1n90m_22 {
  border-radius: var(--puck-radius-m);
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
}
@media (hover: hover) and (pointer: fine) {
  ._Drawer_1n90m_1:not(._Drawer--isDraggingFrom_1n90m_48) ._DrawerItem_1n90m_22:not(._DrawerItem--disabled_1n90m_38) ._DrawerItem-draggable_1n90m_22:hover {
    background-color: var( --puck-drawer-item-color-bg-hover, var(--puck-color-interactive-soft-hover) );
    color: var( --puck-drawer-item-color-text-hover, var(--puck-color-interactive) );
    transition: none;
  }
}
._DrawerItem-name_1n90m_72 {
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/DraggableComponent/styles.module.css/#css-module-data */
._DraggableComponent_1627v_1 {
  position: absolute;
  pointer-events: none;
}
._DraggableComponent-overlayWrapper_1627v_6 {
  height: 100%;
  width: 100%;
  top: 0;
  position: absolute;
  pointer-events: none;
  box-sizing: border-box;
  z-index: 1;
}
._DraggableComponent-overlay_1627v_6 {
  cursor: pointer;
  height: 100%;
  outline: var( --puck-slot-component-border-width, var(--puck-border-width-focus) ) var( --puck-slot-component-color-overlay-border, var(--puck-color-selection-border) ) solid;
  outline-offset: calc(var(--puck-slot-component-border-width, var(--puck-border-width-focus)) * -1);
  width: 100%;
}
._DraggableComponent_1627v_1:focus-visible > ._DraggableComponent-overlayWrapper_1627v_6 {
  outline: var(--puck-border-width-regular) solid var(--puck-color-focus-ring);
}
._DraggableComponent-loadingOverlay_1627v_38 {
  background: var(--puck-color-surface);
  color: var(--puck-color-text);
  border-radius: var(--puck-radius-m);
  display: flex;
  padding: var(--puck-space-2);
  top: var(--puck-space-2);
  right: var(--puck-space-2);
  position: absolute;
  z-index: 1;
  pointer-events: all;
  box-sizing: border-box;
  opacity: 0.8;
  z-index: 1;
}
._DraggableComponent--hover_1627v_54 > ._DraggableComponent-overlayWrapper_1627v_6 > ._DraggableComponent-overlay_1627v_6 {
  background: var( --puck-slot-component-color-overlay, var(--puck-color-selection-bg) );
  outline: var( --puck-slot-component-border-width, var(--puck-border-width-focus) ) var( --puck-slot-component-color-overlay-border, var(--puck-color-selection-border) ) solid;
}
._DraggableComponent--isSelected_1627v_72 > ._DraggableComponent-overlayWrapper_1627v_6 > ._DraggableComponent-overlay_1627v_6 {
  outline-color: var( --puck-slot-component-color-border-selected, var(--puck-color-selection-border) );
}
._DraggableComponent_1627v_1:has(._DraggableComponent--hover_1627v_54 > ._DraggableComponent-overlayWrapper_1627v_6) > ._DraggableComponent-overlayWrapper_1627v_6 {
  display: none;
}
._DraggableComponent-actionsOverlay_1627v_89 {
  position: sticky;
  opacity: 0;
  pointer-events: none;
  z-index: 2;
}
._DraggableComponent--isSelected_1627v_72 ._DraggableComponent-actionsOverlay_1627v_89 {
  opacity: 1;
  pointer-events: auto;
}
._DraggableComponent-actions_1627v_89 {
  position: absolute;
  width: auto;
  cursor: grab;
  display: flex;
  box-sizing: border-box;
  transform-origin: right top;
  min-height: 36px;
}
._DraggableComponent-actionsAction_1627v_111 {
  height: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
  width: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
}

/* components/DraggableComponent/styles.css */
[data-puck-component] * {
  pointer-events: none;
  user-select: none;
  -webkit-user-select: none;
}
[data-puck-component] {
  cursor: grab;
  pointer-events: auto !important;
  user-select: none;
  -webkit-user-select: none;
}
[data-puck-dropzone] {
  pointer-events: auto !important;
}
[data-puck-disabled] {
  cursor: pointer;
}
[data-dnd-placeholder]:not([data-puck-line-drag] *) {
  background: var( --puck-slot-component-color-placeholder, var(--puck-color-azure-06) ) !important;
  border: none !important;
  color: transparent !important;
  opacity: 0.3 !important;
  outline: none !important;
  transition: none !important;
}
[data-dnd-placeholder]:not([data-puck-line-drag] *) *,
[data-dnd-placeholder]:not([data-puck-line-drag] *)::after,
[data-dnd-placeholder]:not([data-puck-line-drag] *)::before {
  opacity: 0 !important;
}
[data-puck-line-drag] [data-dnd-placeholder] {
  opacity: 0.4 !important;
  outline: none !important;
  transition: none !important;
}
[data-puck-line-drag] [data-dnd-dragging][data-puck-component] {
  opacity: 0.9 !important;
}
[data-dnd-dragging][data-puck-component] {
  pointer-events: none !important;
  outline: var( --puck-slot-component-border-width, var(--puck-border-width-focus) ) var(--puck-slot-component-color-border-dragging, var(--puck-color-azure-09)) solid !important;
  outline-offset: calc(var(--puck-slot-component-border-width, var(--puck-border-width-focus)) * -1) !important;
}
[data-dnd-dragging][data-puck-component] > :first-child {
  margin-top: 0 !important;
}
[data-dnd-dragging][data-puck-component] > :last-child {
  margin-bottom: 0 !important;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/DropZone/styles.module.css/#css-module-data */
._DropZone_wc2ks_1 {
  position: relative;
  height: 100%;
  min-height: var(--puck-slot-min-empty-height);
  outline-offset: calc(var(--puck-slot-border-width, var(--puck-border-width-focus)) * -1);
  width: 100%;
}
._DropZone--hasChildren_wc2ks_11 {
  min-height: 0;
}
._DropZone_wc2ks_1:empty {
  min-height: var(--puck-slot-min-empty-height);
}
[data-puck-entry]:not([data-puck-dragging]) ._DropZone_wc2ks_1 {
  transition: min-height var(--puck-duration-medium) var(--puck-ease-exit);
}
._DropZone--isAreaSelected_wc2ks_24,
._DropZone--hoveringOverArea_wc2ks_25:not(._DropZone--isRootZone_wc2ks_25) {
  background: var(--puck-slot-color-bg, var(--puck-color-selection-bg));
  outline: var(--puck-slot-border-width, var(--puck-border-width-focus)) var(--puck-slot-border-style, dashed) var(--puck-slot-color-border, var(--puck-color-selection-border));
}
._DropZone_wc2ks_1:empty {
  background: var(--puck-slot-color-bg, var(--puck-color-selection-bg));
  outline: var(--puck-slot-border-width, var(--puck-border-width-focus)) var(--puck-slot-border-style, dashed) var(--puck-slot-color-border, var(--puck-color-selection-border));
}
._DropZone-item_wc2ks_39 {
  position: relative;
}
._DropZone-linePlaceholder_wc2ks_43 {
  background: var( --puck-slot-component-color-placeholder, var(--puck-color-line-placeholder) );
  border-radius: calc(var(--puck-line-placeholder-width, 2px) / 2);
  pointer-events: none;
  position: absolute;
  z-index: 1;
}
._DropZone-hitbox_wc2ks_55 {
  position: absolute;
  bottom: calc(var(--puck-space-3) * -1);
  height: var(--puck-space-5);
  width: 100%;
  z-index: 1;
}
[data-puck-dragging] ._DropZone--isEnabled_wc2ks_63 {
  outline: var(--puck-slot-border-width, var(--puck-border-width-focus)) var(--puck-slot-border-style, dashed) var(--puck-slot-color-border, var(--puck-color-selection-border));
}
._DropZone_wc2ks_1 > *:not([data-puck-component]):not([data-puck-line-placeholder]) {
  opacity: 0;
}
body:has(._DropZone--isAnimating_wc2ks_74:empty) [data-puck-overlay] {
  opacity: 0 !important;
}

/* lib/overlay-portal/styles.css */
[data-puck-overlay-portal],
[data-puck-overlay-portal] * {
  pointer-events: auto !important;
}
[data-puck-entry][data-puck-dragging] [data-puck-overlay-portal],
[data-puck-entry][data-puck-dragging] [data-puck-overlay-portal] * {
  pointer-events: none !important;
}
[data-puck-entry][data-puck-preview-mode=edit] [data-puck-overlay-portal]:hover {
  outline: 2px var(--puck-color-azure-09, #cfdff0) dashed;
  outline-offset: 2px;
}
[data-puck-entry][data-puck-preview-mode=edit] [data-puck-overlay-portal]:focus-within {
  outline: 2px var(--puck-color-azure-07, #88b0da) dashed;
  outline-offset: 2px;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/InlineTextField/styles.module.css/#css-module-data */
._InlineTextField_104qp_1 {
  cursor: text;
  display: inline-block;
  white-space: pre-wrap;
  text-decoration: inherit;
}
[data-dnd-dragging] ._InlineTextField_104qp_1 {
  cursor: none;
  caret-color: transparent;
}
[data-dnd-dragging] ._InlineTextField_104qp_1::selection {
  display: none;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Fields/styles.module.css/#css-module-data */
._PuckFields_wnj25_1 {
  position: relative;
  font-family: var(--puck-font-family);
}
._PuckFields--isLoading_wnj25_6 {
  min-height: 48px;
}
._PuckFields-loadingOverlay_wnj25_10 {
  background: var(--puck-color-surface);
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  top: 0px;
  position: absolute;
  z-index: 1;
  pointer-events: all;
  box-sizing: border-box;
  opacity: 0.8;
}
._PuckFields-loadingOverlayInner_wnj25_25 {
  display: flex;
  padding: var(--puck-space-4);
  position: sticky;
  top: 0;
}
._PuckFields-field_wnj25_32 * {
  box-sizing: border-box;
}
._PuckFields--wrapFields_wnj25_36 ._PuckFields-field_wnj25_32 {
  color: var(--puck-color-text-secondary);
  padding: var(--puck-space-4);
  padding-bottom: var(--puck-space-3);
  display: block;
}
._PuckFields--wrapFields_wnj25_36 ._PuckFields-field_wnj25_32 + ._PuckFields-field_wnj25_32 {
  border-top: var(--puck-border-width-regular) solid var(--puck-color-border);
  margin-top: var(--puck-space-2);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/ComponentList/styles.module.css/#css-module-data */
._ComponentList_htktj_1 {
  max-width: 100%;
}
._ComponentList--isExpanded_htktj_5 + ._ComponentList_htktj_1 {
  margin-top: var(--puck-space-3);
}
._ComponentList-content_htktj_9 {
  display: none;
}
._ComponentList--isExpanded_htktj_5 > ._ComponentList-content_htktj_9 {
  display: block;
}
._ComponentList-title_htktj_17 {
  background-color: transparent;
  border: 0;
  color: var(--puck-drawer-category-color-text, var(--puck-color-text-muted));
  cursor: pointer;
  display: flex;
  font: inherit;
  font-size: var(--puck-drawer-category-font-size, var(--puck-font-size-xxxs));
  list-style: none;
  margin-bottom: 6px;
  padding: var(--puck-drawer-category-space, var(--puck-space-2));
  text-transform: uppercase;
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit), color var(--puck-duration-fast) var(--puck-ease-exit);
  gap: var(--puck-space-1);
  border-radius: var(--puck-radius-m);
  width: 100%;
}
._ComponentList-title_htktj_17:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
}
@media (hover: hover) and (pointer: fine) {
  ._ComponentList-title_htktj_17:hover {
    background-color: var( --puck-drawer-category-color-bg-hover, var(--puck-color-interactive-soft) );
    color: var( --puck-drawer-category-color-text-hover, var(--puck-color-interactive) );
    transition: none;
  }
}
._ComponentList-title_htktj_17:active {
  background-color: var( --puck-drawer-category-color-bg-active, var(--puck-color-interactive-subtle) );
  transition: none;
}
._ComponentList-titleIcon_htktj_63 {
  margin-inline-start: auto;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Preview/styles.module.css/#css-module-data */
._PuckPreview_zbic3_1 {
  position: relative;
  height: 100%;
}
._PuckPreview-frame_zbic3_6 {
  border: none;
  height: 100%;
  width: 100%;
}
._PuckPreview-frame_zbic3_6[data-puck-outline-dragging] {
  pointer-events: none;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/LayerTree/components/drop-line/styles.module.css/#css-module-data */
._DropLine_eyz3q_2 {
  background: var(--_puck-outline-color-drop-indicator);
  border-radius: calc(var(--_puck-outline-drop-indicator-size) / 2);
  height: var(--_puck-outline-drop-indicator-size);
  inset-inline: 0;
  pointer-events: none;
  position: absolute;
  z-index: 1;
}
._DropLine--top_eyz3q_12 {
  top: 0;
}
._DropLine--bottom_eyz3q_16 {
  bottom: 0;
}
._DropLine--top_eyz3q_12._DropLine--outset_eyz3q_20 {
  top: calc(-1 * var(--_puck-outline-drop-indicator-size));
}
._DropLine--bottom_eyz3q_16._DropLine--outset_eyz3q_20 {
  bottom: calc(-1 * var(--_puck-outline-drop-indicator-size));
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/LayerTree/components/empty-zone-placeholder/styles.module.css/#css-module-data */
._LayerTree-helper_1m7e4_2 {
  color: var(--puck-outline-color-text-helper, var(--puck-color-text-subtle));
  padding-top: var(--puck-space-1);
  padding-bottom: var(--puck-space-1);
  padding-inline-start: var(--_puck-outline-label-indent);
  border: var(--_puck-outline-border-width) solid transparent;
}
._LayerTree-helperRoot_1m7e4_11 {
  padding-inline-start: var(--puck-space-3);
}
._LayerTree-helper_1m7e4_2[data-puck-drop-target] {
  position: relative;
  overflow: visible;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/LayerTree/components/layer/styles.module.css/#css-module-data */
._Layer_onfgu_1 {
  position: relative;
  border: var(--_puck-outline-border-width) solid transparent;
  border-radius: var(--_puck-outline-radius);
}
._Layer-inner_onfgu_8 {
  align-items: center;
  border: var(--_puck-outline-border-width) solid transparent;
  border-radius: var(--_puck-outline-radius);
  cursor: pointer;
  display: flex;
  position: relative;
  transition: color var(--puck-duration-fast) var(--puck-ease-exit);
}
._Layer--isSortable_onfgu_18 > ._Layer-inner_onfgu_8 {
  cursor: grab;
}
._Layer-content_onfgu_22 {
  display: flex;
  gap: var(--puck-space-4);
  flex: 1 1 auto;
  min-width: 0;
}
._Layer-clickable_onfgu_29 {
  align-items: center;
  background: none;
  border: 0;
  border-radius: var(--_puck-outline-radius);
  color: inherit;
  cursor: inherit;
  display: flex;
  flex: 1 1 auto;
  font: inherit;
  min-width: 0;
  padding: 0;
}
[data-puck-dnd-disabled] ._Layer-inner_onfgu_8,
[data-puck-dnd-disabled] ._Layer-clickable_onfgu_29 {
  cursor: pointer;
}
._Layer-clickable_onfgu_29:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
  position: relative;
  z-index: 1;
}
._Layer-caret_onfgu_57 {
  visibility: hidden;
  display: flex;
  flex-shrink: 0;
}
._Layer-caret_onfgu_57 svg {
  height: var(--_puck-outline-caret-size);
  width: var(--_puck-outline-caret-size);
}
._Layer--containsZone_onfgu_68 > ._Layer-inner_onfgu_8 > ._Layer-content_onfgu_22 {
  font-weight: var(--puck-font-weight-bold);
}
._Layer--containsZone_onfgu_68 > ._Layer-inner_onfgu_8 > ._Layer-caret_onfgu_57 {
  visibility: visible;
}
._Layer-title_onfgu_76 {
  display: flex;
  gap: var(--puck-space-2);
  align-items: center;
  overflow-x: hidden;
  margin: var(--puck-space-1);
  cursor: pointer;
}
._Layer-name_onfgu_85 {
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
._Layer-icon_onfgu_91 {
  color: var(--puck-outline-color-icon, var(--puck-color-text-subtle));
  margin-top: var(--puck-space-1);
}
._Layer-icon_onfgu_91 svg {
  height: var(--_puck-outline-icon-size);
  width: var(--_puck-outline-icon-size);
}
._Layer-zones_onfgu_101 {
  display: none;
  margin-inline-start: var(--puck-outline-space-indent, var(--puck-space-4));
}
._Layer--isExpanded_onfgu_106 > ._Layer-zones_onfgu_101 {
  display: block;
}
._Layer--isExpanded_onfgu_106 > ._Layer-inner_onfgu_8 > ._Layer-caret_onfgu_57 svg {
  transform: rotate(90deg);
}
@media (hover: hover) and (pointer: fine) {
  ._Layer_onfgu_1:not(._Layer--isSelected_onfgu_115) > ._Layer-inner_onfgu_8:hover {
    --_puck-outline-actions-color-bg: var(--_puck-outline-color-bg-hover);
    border-color: var(--_puck-outline-color-border-hover);
    background: var(--_puck-outline-color-bg-hover);
    transition: none;
  }
}
._Layer--isSelected_onfgu_115 > ._Layer-inner_onfgu_8 {
  border-color: var( --puck-outline-color-border-selected, var(--puck-color-selection-border) );
}
._Layer--isSelected_onfgu_115 > ._Layer-inner_onfgu_8 {
  --_puck-outline-actions-color-bg: var(--_puck-outline-color-bg-selected);
  background: var(--_puck-outline-color-bg-selected);
}
._Layer--isExpandCandidate_onfgu_138 > ._Layer-inner_onfgu_8 {
  border-color: var(--_puck-outline-color-border-hover);
  background: var(--_puck-outline-color-bg-hover);
}
._Layer--isDragSource_onfgu_143 > ._Layer-inner_onfgu_8 {
  color: var(--puck-color-text-muted);
  background: transparent;
}
._Layer--isDragSource_onfgu_143 > ._Layer-zones_onfgu_101 {
  opacity: 0.5;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/LayerTree/components/layer-actions/styles.module.css/#css-module-data */
._LayerActions_d90t9_2 {
  position: sticky;
  inset-inline-end: calc(var(--puck-space-1) * -1);
  padding-inline: var(--puck-space-1);
  display: flex;
  visibility: hidden;
  flex-shrink: 0;
  color: var(--_puck-outline-color-text);
  background: var(--_puck-outline-actions-color-bg);
  border-top-right-radius: var(--_puck-outline-radius);
  border-bottom-right-radius: var(--_puck-outline-radius);
}
._LayerActions--visible_d90t9_18 {
  visibility: visible;
}
._LayerActions_d90t9_2 svg {
  height: var(--_puck-outline-caret-size);
  width: var(--_puck-outline-caret-size);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/LayerTree/components/layer-tree-items/styles.module.css/#css-module-data */
._LayerTree_o5tyt_1 {
  color: var(--_puck-outline-color-text);
  font-family: var(--puck-outline-font-family, var(--puck-font-family));
  font-size: var(--puck-outline-font-size, var(--puck-font-size-xxxs));
  margin: 0;
  position: relative;
  list-style: none;
  padding: 0;
}
._LayerTree--nested_o5tyt_12 {
  margin-inline-start: var(--puck-outline-space-indent, var(--puck-space-3));
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/LayerTree/components/layer-tree-zone/styles.module.css/#css-module-data */
._LayerTree-zoneTitle_fvhlh_2 {
  color: var(--_puck-outline-zone-color-text);
  font-size: var( --puck-outline-zone-font-size, calc(var(--puck-font-size-xxxs) * 0.9) );
  display: flex;
  gap: var(--puck-space-2);
  align-items: center;
  overflow-x: hidden;
  padding-top: var(--puck-space-1);
  padding-bottom: var(--puck-space-1);
  padding-inline-start: var(--_puck-outline-label-indent);
  border: var(--_puck-outline-border-width) solid transparent;
}
._LayerTree-zoneIcon_fvhlh_19 {
  margin-top: var(--puck-space-1);
}
._LayerTree-zoneIcon_fvhlh_19 svg {
  height: var(--_puck-outline-icon-size);
  width: var(--_puck-outline-icon-size);
}
._LayerTree-zoneTitle_fvhlh_2[data-puck-drop-target] {
  color: var(--_puck-outline-color-text-hover);
  position: relative;
  overflow: visible;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/LayerTree/styles.module.css/#css-module-data */
._LayerTreeRoot_1qowl_1 {
  min-width: max-content;
  --_puck-iconbutton-color-bg-hover: transparent;
  --_puck-outline-color-text: var( --puck-outline-color-text, var(--puck-color-text-primary) );
  --_puck-outline-border-width: var( --puck-outline-border-width, var(--puck-border-width-regular) );
  --_puck-outline-radius: var(--puck-outline-radius, var(--puck-radius-m));
  --_puck-outline-caret-size: var( --puck-outline-action-size, var(--puck-icon-size-s) );
  --_puck-outline-icon-size: var( --puck-outline-icon-size, var(--puck-icon-size-xs) );
  --_puck-outline-color-bg-selected: var( --puck-outline-color-bg-selected, var(--puck-color-interactive-subtle) );
  --_puck-outline-color-bg-hover: var( --puck-outline-color-bg-hover, var(--puck-color-interactive-soft) );
  --_puck-outline-color-border-hover: var( --puck-outline-color-border-hover, var(--puck-color-interactive-subtle) );
  --_puck-outline-color-text-hover: var( --puck-outline-color-text-hover, var(--puck-color-interactive) );
  --_puck-outline-color-drop-indicator: var( --puck-outline-color-drop-indicator, var(--puck-color-line-placeholder) );
  --_puck-outline-drop-indicator-size: var(--puck-line-placeholder-width);
  --_puck-outline-zone-color-text: var( --puck-outline-zone-color-text, var(--puck-color-text-muted) );
  --_puck-outline-actions-color-bg: transparent;
  --_puck-outline-caret-slot: calc( var(--_puck-outline-caret-size) + var(--puck-iconbutton-space, var(--puck-space-1)) * 2 );
  --_puck-outline-label-indent: calc( var(--_puck-outline-caret-slot) + var(--puck-space-2) + var(--_puck-outline-border-width) );
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Outline/components/collapse-all/styles.module.css/#css-module-data */
._CollapseAll_1r4cy_1 {
  visibility: hidden;
}
._CollapseAll-icon_1r4cy_5 {
  height: var(--puck-icon-size-m);
  width: var(--puck-icon-size-m);
}
._CollapseAll--visible_1r4cy_10 {
  visibility: visible;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Outline/components/outline-header/styles.module.css/#css-module-data */
._OutlineHeader_ntv8r_1 {
  display: flex;
  align-items: center;
  width: 100%;
  gap: var(--puck-space-2);
  padding-block: var(--puck-space-3);
  padding-inline: var(--puck-space-4);
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border);
  box-sizing: border-box;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Outline/styles.module.css/#css-module-data */
._OutlineWrapper_b9ln0_1 {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-height: 0;
  min-width: 0;
}
._OutlineWrapper-collapseAll_b9ln0_9 {
  display: flex;
  align-items: center;
  margin-inline-start: auto;
}
._OutlineWrapper-layers_b9ln0_15 {
  flex-grow: 1;
  min-height: 0;
  overflow: auto;
  padding: var(--puck-space-1);
  box-sizing: border-box;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Layout/styles.module.css/#css-module-data */
._Puck_tzaxg_19 {
  font-family: var(--puck-font-family);
  overflow-x: hidden;
  visibility: visible !important;
}
@media (min-width: 766px) {
  ._Puck_tzaxg_19 {
    overflow-x: auto;
  }
}
._Puck-portal_tzaxg_31 {
  position: relative;
  z-index: 2;
}
._PuckLayout_tzaxg_36 {
  height: 100dvh;
}
._PuckLayout-inner_tzaxg_40 {
  --puck-frame-width: auto;
  --puck-pluginbar-width: min-content;
  --puck-sidebar-width: 0px;
  --puck-sidebar-left-width: var( --puck-user-sidebar-left-width, var(--puck-sidebar-width) );
  --puck-sidebar-right-width: var( --puck-user-sidebar-right-width, var(--puck-sidebar-width) );
  background-color: var(--puck-color-surface-subtle);
  display: grid;
  grid-template-areas: "header" "editor" "left" "right" "sidenav";
  grid-template-columns: var(--puck-frame-width);
  grid-template-rows: min-content auto 0 0 var(--puck-pluginbar-width);
  height: 100%;
  position: relative;
  transition: grid-template-rows var(--puck-duration-medium) var(--puck-ease-exit);
  z-index: 0;
  overflow: hidden;
}
@media (min-width: 638px) {
  ._PuckLayout-inner_tzaxg_40 {
    --puck-pluginbar-width: 68px;
    grid-template-areas: "header header header header" "sidenav left editor right";
    grid-template-columns: var(--puck-pluginbar-width) 0 var(--puck-frame-width) 0;
    grid-template-rows: min-content auto;
  }
  ._Puck--hidePlugins_tzaxg_73 ._PuckLayout-inner_tzaxg_40 {
    --puck-pluginbar-width: 0;
  }
}
._PuckLayout--mounted_tzaxg_78 ._PuckLayout-inner_tzaxg_40 {
  --puck-sidebar-width: 186px;
}
._PuckLayout--mobilePanelHeightToggle_tzaxg_82._PuckLayout--leftSideBarVisible_tzaxg_82 ._PuckLayout-inner_tzaxg_40 {
  grid-template-rows: 0 auto 30% 0 var(--puck-pluginbar-width);
  transition: grid-template-rows var(--puck-duration-medium) var(--puck-ease-entrance);
}
._PuckLayout--mobilePanelHeightToggle_tzaxg_82._PuckLayout--leftSideBarVisible_tzaxg_82._PuckLayout--isExpanded_tzaxg_90 ._PuckLayout-inner_tzaxg_40 {
  grid-template-rows: 0 auto 55% 0 var(--puck-pluginbar-width);
  transition: grid-template-rows var(--puck-duration-medium) var(--puck-ease-entrance);
}
@media (min-width: 638px) {
  ._PuckLayout--mobilePanelHeightToggle_tzaxg_82._PuckLayout--leftSideBarVisible_tzaxg_82 ._PuckLayout-inner_tzaxg_40 {
    grid-template-columns: var(--puck-pluginbar-width) var(--puck-sidebar-left-width) var( --puck-frame-width ) 0;
    grid-template-rows: min-content auto;
  }
}
._PuckLayout--mobilePanelHeightMinContent_tzaxg_110._PuckLayout--leftSideBarVisible_tzaxg_82 ._PuckLayout-inner_tzaxg_40,
._PuckLayout--mobilePanelHeightMinContent_tzaxg_110._PuckLayout--leftSideBarVisible_tzaxg_82._PuckLayout--isExpanded_tzaxg_90 ._PuckLayout-inner_tzaxg_40 {
  grid-template-rows: 0 auto min-content 0 var(--puck-pluginbar-width);
}
@media (min-width: 638px) {
  ._PuckLayout--mobilePanelHeightToggle_tzaxg_82._PuckLayout--leftSideBarVisible_tzaxg_82 ._PuckLayout-inner_tzaxg_40,
  ._PuckLayout--mobilePanelHeightToggle_tzaxg_82._PuckLayout--leftSideBarVisible_tzaxg_82._PuckLayout--isExpanded_tzaxg_90 ._PuckLayout-inner_tzaxg_40,
  ._PuckLayout--mobilePanelHeightMinContent_tzaxg_110._PuckLayout--leftSideBarVisible_tzaxg_82 ._PuckLayout-inner_tzaxg_40,
  ._PuckLayout--mobilePanelHeightMinContent_tzaxg_110._PuckLayout--leftSideBarVisible_tzaxg_82._PuckLayout--isExpanded_tzaxg_90 ._PuckLayout-inner_tzaxg_40 {
    grid-template-columns: var(--puck-pluginbar-width) var(--puck-sidebar-left-width) var( --puck-frame-width ) 0;
    grid-template-rows: min-content auto;
  }
}
@media (min-width: 638px) {
  ._PuckLayout--rightSideBarVisible_tzaxg_137 ._PuckLayout-inner_tzaxg_40 {
    grid-template-columns: var(--puck-pluginbar-width) 0 var(--puck-frame-width) var(--puck-sidebar-right-width);
  }
}
@media (min-width: 638px) {
  ._PuckLayout--leftSideBarVisible_tzaxg_82._PuckLayout--rightSideBarVisible_tzaxg_137 ._PuckLayout-inner_tzaxg_40 {
    grid-template-columns: var(--puck-pluginbar-width) var(--puck-sidebar-left-width) var( --puck-frame-width ) var(--puck-sidebar-right-width);
  }
}
@media (min-width: 458px) {
  ._PuckLayout-mounted_tzaxg_156 ._PuckLayout-inner_tzaxg_40 {
    --puck-frame-width: minmax(266px, auto);
  }
}
@media (min-width: 638px) {
  ._PuckLayout_tzaxg_36 ._PuckLayout-inner_tzaxg_40 {
    --puck-sidebar-width: minmax(186px, 250px);
  }
}
@media (min-width: 766px) {
  ._PuckLayout_tzaxg_36 ._PuckLayout-inner_tzaxg_40 {
    --puck-frame-width: auto;
  }
}
@media (min-width: 990px) {
  ._PuckLayout_tzaxg_36 ._PuckLayout-inner_tzaxg_40 {
    --puck-sidebar-width: 256px;
  }
}
@media (min-width: 1198px) {
  ._PuckLayout_tzaxg_36 ._PuckLayout-inner_tzaxg_40 {
    --puck-sidebar-width: 274px;
  }
}
@media (min-width: 1398px) {
  ._PuckLayout_tzaxg_36 ._PuckLayout-inner_tzaxg_40 {
    --puck-sidebar-width: 290px;
  }
}
@media (min-width: 1598px) {
  ._PuckLayout_tzaxg_36 ._PuckLayout-inner_tzaxg_40 {
    --puck-sidebar-width: 320px;
  }
}
._PuckLayout-nav_tzaxg_197 {
  border-top: var(--puck-border-width-regular) solid var(--puck-color-border);
  background-color: var( --puck-pluginbar-color-bg, var(--puck-color-surface-subtle) );
  grid-area: sidenav;
  overflow: hidden;
  width: 100%;
}
@media (min-width: 638px) {
  ._PuckLayout-nav_tzaxg_197 {
    border-top: 0;
    border-right: var(--puck-border-width-regular) solid var(--puck-color-border);
    box-sizing: border-box;
  }
}
._PuckLayout-header_tzaxg_217 {
  grid-area: header;
}
._PuckLayout--leftSideBarVisible_tzaxg_82 ._PuckLayout-header_tzaxg_217 {
  overflow: hidden;
}
@media (min-width: 638px) {
  ._PuckLayout--leftSideBarVisible_tzaxg_82 ._PuckLayout-header_tzaxg_217 {
    overflow: auto;
  }
}
._PuckPluginTab_tzaxg_231 {
  display: none;
  flex-grow: 1;
  max-height: 100%;
}
._PuckPluginTab--visible_tzaxg_237 {
  display: flex;
  flex-direction: column;
  min-height: 0;
}
._PuckPluginTab-body_tzaxg_243 {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  max-height: 100%;
  min-height: 0;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/MenuBar/styles.module.css/#css-module-data */
._MenuBar_1hxnj_1 {
  background-color: var(--_puck-menu-bar-color-bg, var(--puck-color-surface));
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border);
  display: none;
  left: 0;
  margin-top: 1px;
  padding: var(--puck-space-2) var(--puck-space-4);
  position: absolute;
  right: 0;
  top: 100%;
  z-index: 2;
}
._MenuBar--menuOpen_1hxnj_14 {
  display: block;
}
@media (min-width: 638px) {
  ._MenuBar_1hxnj_1 {
    border: none;
    display: block;
    margin-top: 0;
    overflow-y: visible;
    padding: 0;
    position: static;
  }
}
._MenuBar-inner_1hxnj_29 {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: var(--puck-space-2) var(--puck-space-4);
  justify-content: flex-end;
}
@media (min-width: 638px) {
  ._MenuBar-inner_1hxnj_29 {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }
}
._MenuBar-history_1hxnj_45 {
  display: flex;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Header/styles.module.css/#css-module-data */
._PuckHeader_c2nei_1 {
  --_puck-menu-bar-color-bg: var( --puck-header-color-bg, var(--puck-color-surface) );
  background: var(--puck-header-color-bg, var(--puck-color-surface));
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border);
  color: var(--puck-header-color-text, var(--puck-color-text));
  --_puck-heading-color: var(--puck-header-color-text, var(--puck-color-text));
  grid-area: header;
  position: relative;
  max-width: 100vw;
}
@media (min-width: 638px) {
  ._PuckHeader_c2nei_1 {
    padding-left: 67px;
  }
  ._PuckHeader--hidePlugins_c2nei_21 {
    padding-left: 0;
  }
}
._PuckHeader-inner_c2nei_26 {
  align-items: end;
  display: grid;
  gap: var(--puck-space-chrome-gutter);
  grid-template-areas: "left middle right";
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: auto;
  padding: var(--puck-space-chrome-gutter);
}
@media (min-width: 638px) {
  ._PuckHeader-inner_c2nei_26 {
    border-left: var(--puck-border-width-regular) solid var(--puck-color-border);
  }
  ._PuckHeader--hidePlugins_c2nei_21 ._PuckHeader-inner_c2nei_26 {
    border-left: none;
  }
}
._PuckHeader-toggle_c2nei_46 {
  display: flex;
  margin-inline-start: calc(var(--puck-space-1) * -1);
  padding-top: 2px;
}
._PuckHeader-rightSideBarToggle_c2nei_52,
._PuckHeader-leftSideBarToggle_c2nei_53 {
  display: none;
}
@media (min-width: 638px) {
  ._PuckHeader-rightSideBarToggle_c2nei_52,
  ._PuckHeader-leftSideBarToggle_c2nei_53 {
    display: block;
  }
}
._PuckHeader-title_c2nei_64 {
  align-self: center;
}
._PuckHeader-path_c2nei_68 {
  font-family: var(--puck-font-family-monospaced);
  font-size: var(--puck-font-size-xxs);
  font-weight: normal;
  word-break: break-all;
}
._PuckHeader-tools_c2nei_75 {
  display: flex;
  gap: var(--puck-space-4);
  justify-content: flex-end;
}
._PuckHeader-menuButton_c2nei_81 {
  color: var(--puck-color-text-muted);
  margin-inline-start: calc(var(--puck-space-1) * -1);
}
._PuckHeader--menuOpen_c2nei_86 ._PuckHeader-menuButton_c2nei_81 {
  color: var(--puck-color-text);
}
@media (min-width: 638px) {
  ._PuckHeader-menuButton_c2nei_81 {
    display: none;
  }
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/SidebarSection/styles.module.css/#css-module-data */
._SidebarSection_1uv88_1 {
  display: flex;
  position: relative;
  flex-direction: column;
  color: var(--puck-color-text);
}
._SidebarSection_1uv88_1:last-of-type {
  flex-grow: 1;
}
._SidebarSection-title_1uv88_12 {
  background: var(--_puck-sidebar-section-color-bg, var(--puck-color-surface));
  padding: var(--puck-space-4);
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border);
  border-top: var(--puck-border-width-regular) solid var(--puck-color-border);
  overflow-x: auto;
}
._SidebarSection--noBorderTop_1uv88_20 > ._SidebarSection-title_1uv88_12 {
  border-top: 0px;
}
._SidebarSection-content_1uv88_24:last-child {
  padding-bottom: var(--puck-space-1);
}
._SidebarSection_1uv88_1:last-of-type ._SidebarSection-content_1uv88_24 {
  border-bottom: none;
  flex-grow: 1;
}
._SidebarSection-breadcrumbLabel_1uv88_33 {
  background: none;
  border: 0;
  border-radius: var(--puck-radius-xs);
  color: var(--puck-color-interactive);
  cursor: pointer;
  font: inherit;
  flex-shrink: 0;
  padding: 0;
  transition: color var(--puck-duration-fast) var(--puck-ease-exit);
}
._SidebarSection-breadcrumbLabel_1uv88_33:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
}
@media (hover: hover) and (pointer: fine) {
  ._SidebarSection-breadcrumbLabel_1uv88_33:hover {
    color: var(--puck-color-interactive-hover);
    transition: none;
  }
}
._SidebarSection-breadcrumbLabel_1uv88_33:active {
  color: var(--puck-color-interactive-active);
  transition: none;
}
._SidebarSection-breadcrumbs_1uv88_62 {
  align-items: center;
  display: flex;
  gap: var(--puck-space-1);
}
._SidebarSection-breadcrumb_1uv88_33 {
  align-items: center;
  display: flex;
  gap: var(--puck-space-1);
}
._SidebarSection-heading_1uv88_74 {
  padding-inline-end: var(--puck-space-4);
}
._SidebarSection-loadingOverlay_1uv88_78 {
  background: var(--puck-color-surface);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  top: 0;
  position: absolute;
  z-index: 1;
  pointer-events: all;
  box-sizing: border-box;
  opacity: 0.8;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Breadcrumbs/styles.module.css/#css-module-data */
._Breadcrumbs_8c6w5_1 {
  align-items: center;
  display: flex;
  gap: var(--puck-space-1);
}
._Breadcrumbs-breadcrumbLabel_8c6w5_7 {
  background: none;
  border: 0;
  border-radius: var(--puck-radius-xs);
  color: var(--puck-color-interactive);
  cursor: pointer;
  font: inherit;
  flex-shrink: 0;
  padding: 0;
  transition: color var(--puck-duration-fast) var(--puck-ease-exit);
}
._Breadcrumbs-breadcrumbLabel_8c6w5_7:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
}
@media (hover: hover) and (pointer: fine) {
  ._Breadcrumbs-breadcrumbLabel_8c6w5_7:hover {
    color: var(--puck-color-interactive-hover);
    transition: none;
  }
}
._Breadcrumbs-breadcrumbLabel_8c6w5_7:active {
  color: var(--puck-color-interactive-active);
  transition: none;
}
._Breadcrumbs-breadcrumb_8c6w5_7 {
  align-items: center;
  display: flex;
  gap: var(--puck-space-1);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/ViewportControls/styles.module.css/#css-module-data */
._ViewportControls_v26yb_1 {
  position: relative;
}
._ViewportControls--fullScreen_v26yb_5 {
  border-radius: 32px;
  display: flex;
  position: absolute;
  bottom: var(--puck-space-3);
  right: var(--puck-space-3);
  overflow: hidden;
}
._ViewportControls-toggleButton_v26yb_14 {
  display: none;
}
._ViewportControls--fullScreen_v26yb_5 ._ViewportControls-toggleButton_v26yb_14 {
  align-items: center;
  background-color: var(--puck-color-surface-inverse);
  border: var(--puck-border-width-regular) solid var(--puck-color-border-inverse);
  border-radius: var(--puck-radius-pill);
  cursor: pointer;
  color: var(--puck-color-text-inverse);
  display: flex;
  justify-content: center;
  width: 42px;
  height: 42px;
  z-index: 1;
}
._ViewportControls--fullScreen_v26yb_5 ._ViewportControls-toggleButton_v26yb_14:hover {
  color: var(--puck-color-interactive-inverse-hover);
  border: var(--puck-border-width-regular) solid var(--puck-color-interactive-inverse-hover);
}
._ViewportControls-actions_v26yb_39 {
  display: flex;
}
._ViewportControls-actionsInner_v26yb_43 {
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  z-index: 0;
  overflow: hidden;
}
._ViewportControls--fullScreen_v26yb_5 ._ViewportControls-actionsInner_v26yb_43 {
  background: var(--puck-color-surface-muted);
  border: var(--puck-border-width-regular) solid var(--puck-color-border);
  border-radius: var(--puck-radius-pill);
  margin-left: none;
  margin-right: none;
  padding-right: 42px;
}
._ViewportControls--fullScreen_v26yb_5 ._ViewportControls-actionsInner_v26yb_43 {
  transform: translateX(100%);
  transition: transform var(--puck-duration-medium) var(--puck-ease-emphasized);
}
._ViewportControls--fullScreen_v26yb_5._ViewportControls--isExpanded_v26yb_67 ._ViewportControls-actionsInner_v26yb_43 {
  transform: translateX(42px);
}
._ViewportControls-divider_v26yb_72 {
  border-inline-end: var(--puck-border-width-regular) solid var(--puck-color-border);
  margin-bottom: var(--puck-space-2);
  margin-top: var(--puck-space-2);
}
._ViewportControls-zoomSelect_v26yb_79 {
  appearance: none;
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='%23c3c3c3'><polygon points='0,0 100,0 50,50'/></svg>") no-repeat;
  background-size: 10px;
  color: currentColor;
  background-position: calc(100% - 12px) calc(50% + 3px);
  background-repeat: no-repeat;
  border: 0;
  font-size: var(--puck-font-size-xxxs);
  padding: 0;
  padding-left: var(--puck-space-2);
  width: 96px;
}
._ViewportControls--fullScreen_v26yb_5 ._ViewportControls-zoom_v26yb_79 {
  display: none;
}
@media (min-width: 638px) {
  ._ViewportControls-zoom_v26yb_79,
  ._ViewportControls--fullScreen_v26yb_5 ._ViewportControls-zoom_v26yb_79 {
    display: flex;
    justify-content: center;
  }
}
._ViewportControls-zoomSelect_v26yb_79:dir(rtl) {
  background-position: 12px calc(50% + 3px);
}
._ViewportButton-inner_v26yb_110 {
  align-items: center;
  display: flex;
  justify-content: center;
  height: 32px;
  width: 32px;
}
._ViewportButton--isActive_v26yb_118 ._ViewportButton-inner_v26yb_110 {
  color: var(--puck-color-interactive);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Canvas/styles.module.css/#css-module-data */
._PuckCanvas_zw9iy_1 {
  color: var(--puck-canvas-color-text, var(--puck-color-text));
  background: var(--puck-canvas-color-bg, var(--puck-color-surface-muted));
  display: flex;
  grid-area: editor;
  flex-direction: column;
  padding: var(--puck-space-chrome-gutter);
  position: relative;
  overflow: auto;
}
@media (min-width: 1198px) {
  ._PuckCanvas_zw9iy_1 {
    padding: calc(var(--puck-space-chrome-gutter) * 1.5);
    padding-top: calc(var(--puck-space-chrome-gutter) * 0.5);
  }
  ._PuckCanvas_zw9iy_1:not(._PuckCanvas_zw9iy_1:has(._PuckCanvas-controls_zw9iy_18)) {
    padding-top: calc(var(--puck-space-chrome-gutter) * 1.5);
  }
}
._PuckCanvas--fullScreen_zw9iy_23 {
  padding: 0;
  overflow: hidden;
}
@media (min-width: 1198px) {
  ._PuckCanvas--fullScreen_zw9iy_23 {
    padding: 0;
  }
}
._PuckCanvas-inner_zw9iy_34 {
  display: flex;
  height: 100%;
  justify-content: center;
  min-width: 288px;
  position: relative;
  width: 100%;
}
._PuckCanvas-root_zw9iy_43 {
  background: var(--puck-canvas-preview-color-bg, var(--puck-color-surface));
  outline: var(--puck-border-width-regular) solid var(--puck-color-border);
  box-sizing: content-box;
  min-width: 321px;
  position: absolute;
  pointer-events: none;
  transform-origin: top;
  top: 0;
  bottom: 0;
  opacity: 0;
}
@media (min-width: 1198px) {
  ._PuckCanvas-root_zw9iy_43 {
    min-width: unset;
  }
}
@media (prefers-reduced-motion: reduce) {
  ._PuckCanvas-root_zw9iy_43 {
    transition: none !important;
  }
}
._PuckCanvas--ready_zw9iy_68 ._PuckCanvas-root_zw9iy_43 {
  pointer-events: unset;
  opacity: 1;
}
._PuckCanvas-loader_zw9iy_73 {
  align-items: center;
  color: var(--puck-color-text-subtle);
  display: flex;
  height: 100%;
  justify-content: center;
  transition: opacity var(--puck-duration-slow) var(--puck-ease-entrance);
  opacity: 0;
  pointer-events: none;
}
._PuckCanvas--showLoader_zw9iy_84 ._PuckCanvas-loader_zw9iy_73 {
  opacity: 1;
}
._PuckCanvas--showLoader_zw9iy_84._PuckCanvas--ready_zw9iy_68 ._PuckCanvas-loader_zw9iy_73 {
  opacity: 0;
  height: 0;
  transition: none;
}
._PuckCanvas-controls_zw9iy_18 {
  padding-bottom: calc(var(--puck-space-chrome-gutter) * 0.5);
}
._PuckCanvas--fullScreen_zw9iy_23 ._PuckCanvas-controls_zw9iy_18 {
  padding-bottom: 0;
  z-index: 1;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/ResizeHandle/styles.module.css/#css-module-data */
@media (min-width: 766px) {
  ._ResizeHandle_144bf_2 {
    position: absolute;
    width: 5px;
    height: 100%;
    cursor: col-resize;
    z-index: 10;
    background: transparent;
    top: 0;
  }
  ._ResizeHandle_144bf_2:hover {
    background: rgba(0, 0, 0, 0.1);
  }
  ._ResizeHandle--left_144bf_16 {
    right: -3px;
  }
  ._ResizeHandle--right_144bf_20 {
    left: -3px;
  }
}

/* components/Puck/components/ResizeHandle/styles.css */
[data-resize-overlay] {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  cursor: col-resize;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Sidebar/styles.module.css/#css-module-data */
._Sidebar_16oed_1 {
  border-block-start: var(--puck-border-width-regular) solid var(--puck-color-border);
  position: relative;
  display: none;
  flex-direction: column;
  overflow-y: auto;
}
._Sidebar--isVisible_16oed_10 {
  display: flex;
}
._Sidebar--left_16oed_14 {
  --_puck-sidebar-section-color-bg: var( --puck-sidebar-left-color-bg, var(--puck-color-surface) );
  background: var( --puck-sidebar-left-color-bg, var(--puck-color-surface-subtle) );
  grid-area: left;
}
@media (min-width: 766px) {
  ._Sidebar--left_16oed_14 {
    border-block-start: 0;
    border-inline-end: var(--puck-border-width-regular) solid var(--puck-color-border);
  }
}
._Sidebar--right_16oed_34 {
  --_puck-sidebar-section-color-bg: var( --puck-sidebar-right-color-bg, var(--puck-color-surface) );
  background: var(--puck-sidebar-right-color-bg, var(--puck-color-surface));
  grid-area: right;
}
@media (min-width: 766px) {
  ._Sidebar--right_16oed_34 {
    border-block-start: 0;
    border-inline-start: var(--puck-border-width-regular) solid var(--puck-color-border);
  }
}
._Sidebar-resizeHandle_16oed_51 {
  position: absolute;
  height: 100%;
}
._Sidebar--left_16oed_14 + ._Sidebar-resizeHandle_16oed_51 {
  grid-area: left;
  justify-self: end;
}
._Sidebar--right_16oed_34 + ._Sidebar-resizeHandle_16oed_51 {
  grid-area: right;
  justify-self: start;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Nav/styles.module.css/#css-module-data */
._Nav_vll2r_1 {
  display: flex;
}
._Nav-list_vll2r_5 {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  overflow-x: auto;
  gap: var(--puck-space-2);
}
@media (min-width: 638px) {
  ._Nav-list_vll2r_5 {
    padding-top: 32px;
    flex-direction: column;
    gap: var(--puck-space-4);
    width: 100%;
  }
}
._Nav-mobileActions_vll2r_23 {
  align-items: center;
  display: flex;
  justify-content: center;
  margin-inline-start: auto;
  padding: var(--puck-space-1) var(--puck-space-4);
  border-inline-start: var(--puck-border-width-regular) solid var(--puck-color-border);
}
@media (min-width: 638px) {
  ._Nav-mobileActions_vll2r_23 {
    display: none;
  }
}
._NavItem-link_vll2r_39 {
  text-align: center;
  align-items: center;
  color: var(--puck-pluginbar-color-text, var(--puck-color-text-secondary));
  display: flex;
  gap: var(--puck-space-2);
  text-decoration: none;
  cursor: pointer;
  border-radius: var(--puck-radius-m);
  padding: var(--puck-space-2) var(--puck-space-1);
  width: 64px;
  box-sizing: border-box;
}
@media (min-width: 638px) {
  ._NavItem-link_vll2r_39 {
    width: auto;
  }
}
._NavItem_vll2r_39:first-of-type {
  padding-left: var(--puck-space-4);
}
._NavItem_vll2r_39:last-of-type {
  padding-right: var(--puck-space-4);
}
@media (min-width: 638px) {
  ._NavItem_vll2r_39:first-of-type,
  ._NavItem_vll2r_39:last-of-type {
    padding: 0;
  }
}
._NavItem-link_vll2r_39 {
  border-top: var(--puck-border-width-strong) solid transparent;
  border-bottom: var(--puck-border-width-strong) solid transparent;
  border-radius: var(--puck-radius-none);
  flex-direction: column;
  font-size: var(--puck-pluginbar-font-size, var(--puck-font-size-xxxs));
}
@media (min-width: 638px) {
  ._NavItem-link_vll2r_39 {
    border: 0;
    border-left: var(--puck-border-width-strong) solid transparent;
    border-right: var(--puck-border-width-strong) solid transparent;
  }
}
._NavItem-linkIcon_vll2r_90 {
  height: 2em;
  width: 2em;
}
._NavItem-linkIcon_vll2r_90 svg {
  height: 100%;
  width: 100%;
}
._NavItem--active_vll2r_100 > ._NavItem-link_vll2r_39 {
  background-color: var(--puck-color-interactive-subtle);
  color: var( --puck-pluginbar-color-text-selected, var(--puck-color-interactive) );
  font-weight: var(--puck-font-weight-semibold);
}
._NavItem--active_vll2r_100 > ._NavItem-link_vll2r_39 {
  background-color: transparent;
  border-top-color: var(--puck-color-interactive);
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  font-weight: var(--puck-font-weight-semibold);
}
@media (min-width: 638px) {
  ._NavItem--active_vll2r_100 > ._NavItem-link_vll2r_39 {
    border-top-color: transparent;
    border-right-color: var( --puck-pluginbar-color-text-selected, var(--puck-color-interactive) );
  }
}
._NavItem_vll2r_39:not(._NavItem--active_vll2r_100) > ._NavItem-link_vll2r_39:hover {
  background-color: var( --puck-pluginbar-color-bg-hover, var(--puck-color-interactive-soft) );
  color: var(--puck-pluginbar-color-text-hover, var(--puck-color-interactive));
}
@media (min-width: 638px) {
  ._NavItem--mobileOnly_vll2r_136 {
    display: none;
  }
}
._NavItem--desktopOnly_vll2r_141 {
  display: none;
}
@media (min-width: 638px) {
  ._NavItem--desktopOnly_vll2r_141 {
    display: block;
  }
}

/* css-module:/home/runner/work/puck/puck/packages/core/plugins/blocks/styles.module.css/#css-module-data */
._BlocksPlugin_9af19_1 {
  padding: var(--puck-drawer-space, var(--puck-space-4));
  height: 100%;
  overflow-y: auto;
  box-sizing: border-box;
}

/* css-module:/home/runner/work/puck/puck/packages/core/plugins/outline/styles.module.css/#css-module-data */
._OutlinePlugin_1ylsc_1 {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-height: 0;
  min-width: 0;
  position: relative;
}

/* css-module:/home/runner/work/puck/puck/packages/core/plugins/fields/styles.module.css/#css-module-data */
._FieldsPlugin_18cj3_1 {
  background: var(--puck-color-surface);
  height: 100%;
  overflow-y: auto;
}
._FieldsPlugin-header_18cj3_7 {
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border);
  font-weight: var(--puck-font-weight-semibold);
  padding-bottom: var(--puck-space-2);
  padding-left: var(--puck-space-4);
  padding-right: var(--puck-space-4);
  padding-top: var(--puck-space-2);
}
@media (min-width: 638px) {
  ._FieldsPlugin-header_18cj3_7 {
    padding: var(--puck-space-4);
  }
}`,X2=`/* styles/color.css */
@layer puck-tokens {
  :root {
    --puck-color-rose-01: #4a001c;
    --puck-color-rose-02: #670833;
    --puck-color-rose-03: #87114c;
    --puck-color-rose-04: #a81a66;
    --puck-color-rose-05: #bc5089;
    --puck-color-rose-06: #cc7ca5;
    --puck-color-rose-07: #d89aba;
    --puck-color-rose-08: #e3b8cf;
    --puck-color-rose-09: #efd6e3;
    --puck-color-rose-10: #f6eaf1;
    --puck-color-rose-11: #faf4f8;
    --puck-color-rose-12: #fef8fc;
    --puck-color-azure-01: #00175d;
    --puck-color-azure-02: #002c77;
    --puck-color-azure-03: #014292;
    --puck-color-azure-04: #0158ad;
    --puck-color-azure-05: #3479be;
    --puck-color-azure-06: #6499cf;
    --puck-color-azure-07: #88b0da;
    --puck-color-azure-08: #abc7e5;
    --puck-color-azure-09: #cfdff0;
    --puck-color-azure-10: #e7eef7;
    --puck-color-azure-11: #f3f6fb;
    --puck-color-azure-12: #f7faff;
    --puck-color-green-01: #002000;
    --puck-color-green-02: #043604;
    --puck-color-green-03: #084e08;
    --puck-color-green-04: #0c680c;
    --puck-color-green-05: #1d882f;
    --puck-color-green-06: #2faa53;
    --puck-color-green-07: #56c16f;
    --puck-color-green-08: #7dd78b;
    --puck-color-green-09: #b8e8bf;
    --puck-color-green-10: #ddf3e0;
    --puck-color-green-11: #eff8f0;
    --puck-color-green-12: #f3fcf4;
    --puck-color-yellow-01: #211000;
    --puck-color-yellow-02: #362700;
    --puck-color-yellow-03: #4c4000;
    --puck-color-yellow-04: #645a00;
    --puck-color-yellow-05: #877614;
    --puck-color-yellow-06: #ab9429;
    --puck-color-yellow-07: #bfac4e;
    --puck-color-yellow-08: #d4c474;
    --puck-color-yellow-09: #e6deb1;
    --puck-color-yellow-10: #f3efd9;
    --puck-color-yellow-11: #f9f7ed;
    --puck-color-yellow-12: #fcfaf0;
    --puck-color-red-01: #4c0000;
    --puck-color-red-02: #6a0a10;
    --puck-color-red-03: #8a1422;
    --puck-color-red-04: #ac1f35;
    --puck-color-red-05: #bf5366;
    --puck-color-red-06: #ce7e8e;
    --puck-color-red-07: #d99ca8;
    --puck-color-red-08: #e4b9c2;
    --puck-color-red-09: #efd7db;
    --puck-color-red-10: #f6eaec;
    --puck-color-red-11: #faf4f5;
    --puck-color-red-12: #fff9fa;
    --puck-color-grey-01: #181818;
    --puck-color-grey-02: #292929;
    --puck-color-grey-03: #404040;
    --puck-color-grey-04: #5a5a5a;
    --puck-color-grey-05: #767676;
    --puck-color-grey-06: #949494;
    --puck-color-grey-07: #ababab;
    --puck-color-grey-08: #c3c3c3;
    --puck-color-grey-09: #dcdcdc;
    --puck-color-grey-10: #efefef;
    --puck-color-grey-11: #f5f5f5;
    --puck-color-grey-12: #fafafa;
    --puck-color-black: #000000;
    --puck-color-white: #ffffff;
  }
}

/* styles/tokens.css */
@layer puck-tokens {
  :root {
    --puck-color-surface: var(--puck-color-white);
    --puck-color-surface-muted: var(--puck-color-grey-11);
    --puck-color-surface-subtle: var(--puck-color-grey-12);
    --puck-color-surface-inverse: var(--puck-color-grey-01);
    --puck-color-border: var(--puck-color-grey-09);
    --puck-color-border-hover: var(--puck-color-grey-05);
    --puck-color-border-muted: var(--puck-color-grey-10);
    --puck-color-border-inverse: var(--puck-color-grey-05);
    --puck-color-text: var(--puck-color-black);
    --puck-color-text-secondary: var(--puck-color-grey-04);
    --puck-color-text-muted: var(--puck-color-grey-05);
    --puck-color-text-subtle: var(--puck-color-grey-07);
    --puck-color-text-inverse: var(--puck-color-white);
    --puck-opacity-text-inverse: 0.75;
    --puck-color-interactive: var(--puck-color-azure-04);
    --puck-color-interactive-hover: var(--puck-color-azure-03);
    --puck-color-interactive-active: var(--puck-color-azure-02);
    --puck-color-interactive-subtle: var(--puck-color-azure-10);
    --puck-color-interactive-soft: var(--puck-color-azure-11);
    --puck-color-interactive-soft-hover: var(--puck-color-azure-12);
    --puck-color-interactive-neutral-hover: var(--puck-color-grey-10);
    --puck-color-interactive-inverse-hover: var(--puck-color-azure-06);
    --puck-color-interactive-inverse-active: var(--puck-color-azure-07);
    --puck-color-focus-ring: var(--puck-color-azure-05);
    --puck-color-selection-bg: color-mix( in srgb, var(--puck-color-azure-09) 30%, transparent );
    --puck-color-selection-border: var(--puck-color-azure-08);
    --puck-color-line-placeholder: var(--puck-color-azure-06);
    --puck-color-highlight: var(--puck-color-rose-07);
    --puck-color-bg-disabled: var(--puck-color-grey-07);
    --puck-color-text-disabled: var(--puck-color-grey-03);
    --puck-color-overlay-backdrop: color-mix( in srgb, var(--puck-color-black) 75%, transparent );
    --puck-space-1: 4px;
    --puck-space-2: 8px;
    --puck-space-3: 12px;
    --puck-space-4: 16px;
    --puck-space-5: 24px;
    --puck-space-chrome-gutter: var(--puck-space-4);
    --puck-radius-none: 0;
    --puck-radius-xs: 2px;
    --puck-radius-s: 3px;
    --puck-radius-m: 4px;
    --puck-radius-l: 8px;
    --puck-radius-pill: 30px;
    --puck-radius-round: 100%;
    --puck-border-width-hairline: 0.5px;
    --puck-border-width-regular: 1px;
    --puck-border-width-focus: 2px;
    --puck-border-width-strong: 4px;
    --puck-duration-fast: 50ms;
    --puck-duration-medium: 150ms;
    --puck-duration-slow: 250ms;
    --puck-ease-exit: ease-in;
    --puck-ease-emphasized: ease-in-out;
    --puck-ease-entrance: ease-out;
    --puck-font-weight-regular: 400;
    --puck-font-weight-medium: 500;
    --puck-font-weight-semibold: 600;
    --puck-font-weight-bold: 700;
    --puck-font-weight-heavy: 800;
    --puck-letter-spacing-ui: 0.05ch;
    --puck-letter-spacing-heading: 0.08ch;
    --puck-icon-size-xs: 14px;
    --puck-icon-size-s: 16px;
    --puck-icon-size-m: 18px;
    --puck-icon-size-l: 24px;
    --puck-space-m-unitless: 24;
    --puck-user-sidebar-left-width: var(--puck-sidebar-width);
    --puck-user-sidebar-right-width: var(--puck-sidebar-width);
    --puck-slot-min-empty-height: 128px;
    --puck-line-placeholder-width: 2px;
  }
}

/* styles/typography.css */
@layer puck-tokens {
  :root {
    --puck-font-size-scale-base-unitless: 12;
    --puck-font-size-xxxs-unitless: 12;
    --puck-font-size-xxs-unitless: 14;
    --puck-font-size-xs-unitless: 16;
    --puck-font-size-s-unitless: 18;
    --puck-font-size-m-unitless: 21;
    --puck-font-size-l-unitless: 24;
    --puck-font-size-xl-unitless: 28;
    --puck-font-size-xxl-unitless: 36;
    --puck-font-size-xxxl-unitless: 48;
    --puck-font-size-xxxxl-unitless: 56;
    --puck-font-size-xxxs: calc( 1rem * var(--puck-font-size-xxxs-unitless) / 16 );
    --puck-font-size-xxs: calc(1rem * var(--puck-font-size-xxs-unitless) / 16);
    --puck-font-size-xs: calc(1rem * var(--puck-font-size-xs-unitless) / 16);
    --puck-font-size-s: calc(1rem * var(--puck-font-size-s-unitless) / 16);
    --puck-font-size-m: calc(1rem * var(--puck-font-size-m-unitless) / 16);
    --puck-font-size-l: calc(1rem * var(--puck-font-size-l-unitless) / 16);
    --puck-font-size-xl: calc(1rem * var(--puck-font-size-xl-unitless) / 16);
    --puck-font-size-xxl: calc(1rem * var(--puck-font-size-xxl-unitless) / 16);
    --puck-font-size-xxxl: calc( 1rem * var(--puck-font-size-xxxl-unitless) / 16 );
    --puck-font-size-xxxxl: calc( 1rem * var(--puck-font-size-xxxxl-unitless) / 16 );
    --puck-font-size-base: var(--puck-font-size-xs);
    --puck-line-height-reset: 1;
    --puck-line-height-xs: calc( var(--puck-space-m-unitless) / var(--puck-font-size-m-unitless) );
    --puck-line-height-s: calc( var(--puck-space-m-unitless) / var(--puck-font-size-s-unitless) );
    --puck-line-height-m: calc( var(--puck-space-m-unitless) / var(--puck-font-size-xs-unitless) );
    --puck-line-height-l: calc( var(--puck-space-m-unitless) / var(--puck-font-size-xxs-unitless) );
    --puck-line-height-xl: calc( var(--puck-space-m-unitless) / var(--puck-font-size-scale-base-unitless) );
    --puck-line-height-base: var(--puck-line-height-m);
    --puck-fallback-font-stack:
      -apple-system,
      BlinkMacSystemFont,
      Segoe UI,
      Helvetica Neue,
      sans-serif,
      Apple Color Emoji,
      Segoe UI Emoji,
      Segoe UI Symbol;
    --puck-font-family: Inter, var(--puck-fallback-font-stack);
    --puck-font-family-monospaced:
      ui-monospace,
      "Cascadia Code",
      "Source Code Pro",
      Menlo,
      Consolas,
      "DejaVu Sans Mono",
      monospace;
  }
  @supports (font-variation-settings: normal) {
    :root {
      --puck-font-family: InterVariable, var(--puck-fallback-font-stack);
    }
  }
}

/* bundle/core.css */
:root {
  --_puck-styles-loaded: "true";
}
#frame-root {
  height: 1px;
  min-height: 100vh;
}
[data-puck-entry] {
  position: relative;
  z-index: 0;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/ActionBar/styles.module.css/#css-module-data */
._ActionBar_5vdfr_1 {
  align-items: center;
  cursor: default;
  display: flex;
  width: auto;
  padding-top: var(--puck-actionbar-space-y, var(--puck-space-1));
  padding-bottom: var(--puck-actionbar-space-y, var(--puck-space-1));
  padding-inline-start: var(--puck-actionbar-space-x, 0);
  padding-inline-end: var(--puck-actionbar-space-x, 0);
  border-radius: var(--puck-actionbar-radius, var(--puck-radius-l));
  background: var(--puck-actionbar-color-bg, var(--puck-color-surface-inverse));
  color: var(--puck-color-text-inverse);
  font-family: var(--puck-font-family);
  min-height: 26px;
}
._ActionBar-label_5vdfr_17 {
  color: var(--puck-actionbar-color-text, var(--puck-color-text-inverse));
  font-size: var(--puck-actionbar-font-size, var(--puck-font-size-xxxs));
  opacity: var(--puck-actionbar-opacity-text, var(--puck-opacity-text-inverse));
  font-weight: var(--puck-font-weight-medium);
  padding-inline-start: var(--puck-space-2);
  padding-inline-end: var(--puck-space-2);
  margin-inline-start: var(--puck-space-1);
  margin-inline-end: var(--puck-space-1);
  text-overflow: ellipsis;
  white-space: nowrap;
}
._ActionBarAction_5vdfr_30 + ._ActionBar-label_5vdfr_17 {
  padding-inline-start: 0;
}
._ActionBar-label_5vdfr_17 + ._ActionBarAction_5vdfr_30 {
  margin-inline-start: calc(var(--puck-space-1) * -1);
}
._ActionBar-group_5vdfr_38 {
  align-items: center;
  border-inline-start: var(--puck-border-width-hairline) solid var(--puck-actionbar-color-separator, var(--puck-color-border-inverse));
  display: flex;
  height: 100%;
  padding-inline-start: var(--puck-space-1);
  padding-inline-end: var(--puck-space-1);
}
._ActionBar-group_5vdfr_38:first-of-type {
  border-inline-start: 0;
}
._ActionBar-group_5vdfr_38:empty {
  display: none;
}
._ActionBarAction_5vdfr_30 {
  background: transparent;
  border: none;
  color: var(--puck-actionbar-color-text, var(--puck-color-text-inverse));
  cursor: pointer;
  padding: var(--puck-actionbar-action-space, 6px);
  margin-inline-start: var(--puck-space-1);
  margin-inline-end: var(--puck-space-1);
  border-radius: var(--puck-radius-m);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: var(--puck-actionbar-opacity-text, var(--puck-opacity-text-inverse));
  transition: color var(--puck-duration-fast) var(--puck-ease-exit), opacity var(--puck-duration-fast) var(--puck-ease-exit);
}
._ActionBarAction--disabled_5vdfr_74 {
  cursor: auto;
  color: var( --puck-actionbar-color-action-disabled, var(--puck-color-text-inverse) );
  opacity: var(--puck-actionbar-opacity-action-disabled, 0.54);
}
._ActionBarAction_5vdfr_30 svg {
  max-width: none !important;
}
._ActionBarAction_5vdfr_30:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: calc(var(--puck-border-width-focus) * -1);
}
@media (hover: hover) and (pointer: fine) {
  ._ActionBarAction_5vdfr_30:hover:not(._ActionBarAction--disabled_5vdfr_74) {
    color: var( --puck-actionbar-color-action-hover, var(--puck-color-interactive-inverse-hover) );
    opacity: 1;
    transition: none;
  }
}
._ActionBarAction_5vdfr_30:active:not(._ActionBarAction--disabled_5vdfr_74),
._ActionBarAction--active_5vdfr_104 {
  color: var( --puck-actionbar-color-action-active, var(--puck-color-interactive-inverse-active) );
  opacity: 1;
  transition: none;
}
._ActionBar-group_5vdfr_38 * {
  margin: 0;
}
._ActionBar-separator_5vdfr_117 {
  background: var( --puck-actionbar-color-separator, var(--puck-color-border-inverse) );
  margin-inline: var(--puck-space-1);
  width: var( --puck-border-width-hairline );
  height: 100%;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/DraggableComponent/styles.module.css/#css-module-data */
._DraggableComponent_1627v_1 {
  position: absolute;
  pointer-events: none;
}
._DraggableComponent-overlayWrapper_1627v_6 {
  height: 100%;
  width: 100%;
  top: 0;
  position: absolute;
  pointer-events: none;
  box-sizing: border-box;
  z-index: 1;
}
._DraggableComponent-overlay_1627v_6 {
  cursor: pointer;
  height: 100%;
  outline: var( --puck-slot-component-border-width, var(--puck-border-width-focus) ) var( --puck-slot-component-color-overlay-border, var(--puck-color-selection-border) ) solid;
  outline-offset: calc(var(--puck-slot-component-border-width, var(--puck-border-width-focus)) * -1);
  width: 100%;
}
._DraggableComponent_1627v_1:focus-visible > ._DraggableComponent-overlayWrapper_1627v_6 {
  outline: var(--puck-border-width-regular) solid var(--puck-color-focus-ring);
}
._DraggableComponent-loadingOverlay_1627v_38 {
  background: var(--puck-color-surface);
  color: var(--puck-color-text);
  border-radius: var(--puck-radius-m);
  display: flex;
  padding: var(--puck-space-2);
  top: var(--puck-space-2);
  right: var(--puck-space-2);
  position: absolute;
  z-index: 1;
  pointer-events: all;
  box-sizing: border-box;
  opacity: 0.8;
  z-index: 1;
}
._DraggableComponent--hover_1627v_54 > ._DraggableComponent-overlayWrapper_1627v_6 > ._DraggableComponent-overlay_1627v_6 {
  background: var( --puck-slot-component-color-overlay, var(--puck-color-selection-bg) );
  outline: var( --puck-slot-component-border-width, var(--puck-border-width-focus) ) var( --puck-slot-component-color-overlay-border, var(--puck-color-selection-border) ) solid;
}
._DraggableComponent--isSelected_1627v_72 > ._DraggableComponent-overlayWrapper_1627v_6 > ._DraggableComponent-overlay_1627v_6 {
  outline-color: var( --puck-slot-component-color-border-selected, var(--puck-color-selection-border) );
}
._DraggableComponent_1627v_1:has(._DraggableComponent--hover_1627v_54 > ._DraggableComponent-overlayWrapper_1627v_6) > ._DraggableComponent-overlayWrapper_1627v_6 {
  display: none;
}
._DraggableComponent-actionsOverlay_1627v_89 {
  position: sticky;
  opacity: 0;
  pointer-events: none;
  z-index: 2;
}
._DraggableComponent--isSelected_1627v_72 ._DraggableComponent-actionsOverlay_1627v_89 {
  opacity: 1;
  pointer-events: auto;
}
._DraggableComponent-actions_1627v_89 {
  position: absolute;
  width: auto;
  cursor: grab;
  display: flex;
  box-sizing: border-box;
  transform-origin: right top;
  min-height: 36px;
}
._DraggableComponent-actionsAction_1627v_111 {
  height: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
  width: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Drawer/styles.module.css/#css-module-data */
._Drawer_1n90m_1 {
  display: flex;
  flex-direction: column;
  font-family: var(--puck-font-family);
  gap: var(--puck-space-3);
}
._Drawer-draggable_1n90m_8 {
  position: relative;
}
._Drawer-draggableBg_1n90m_12 {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
  z-index: -1;
}
._DrawerItem-draggable_1n90m_22 {
  background: var(--puck-drawer-item-color-bg, var(--puck-color-surface));
  color: var(--puck-drawer-item-color-text, var(--puck-color-text));
  cursor: grab;
  padding: var(--puck-drawer-item-space, var(--puck-space-3));
  display: flex;
  border: var(--puck-drawer-item-border-width, var(--puck-border-width-regular)) var(--puck-drawer-item-color-border, var(--puck-color-border)) solid;
  border-radius: var(--puck-drawer-item-radius, var(--puck-radius-m));
  font-size: var(--puck-drawer-item-font-size, var(--puck-font-size-xxs));
  justify-content: space-between;
  align-items: center;
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit), color var(--puck-duration-fast) var(--puck-ease-exit);
}
._DrawerItem--disabled_1n90m_38 ._DrawerItem-draggable_1n90m_22 {
  background: var(--puck-color-surface-muted);
  color: var(--puck-color-text-muted);
  cursor: not-allowed;
}
._DrawerItem_1n90m_22:focus-visible {
  outline: 0;
}
._Drawer_1n90m_1:not(._Drawer--isDraggingFrom_1n90m_48) ._DrawerItem_1n90m_22:focus-visible ._DrawerItem-draggable_1n90m_22 {
  border-radius: var(--puck-radius-m);
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
}
@media (hover: hover) and (pointer: fine) {
  ._Drawer_1n90m_1:not(._Drawer--isDraggingFrom_1n90m_48) ._DrawerItem_1n90m_22:not(._DrawerItem--disabled_1n90m_38) ._DrawerItem-draggable_1n90m_22:hover {
    background-color: var( --puck-drawer-item-color-bg-hover, var(--puck-color-interactive-soft-hover) );
    color: var( --puck-drawer-item-color-text-hover, var(--puck-color-interactive) );
    transition: none;
  }
}
._DrawerItem-name_1n90m_72 {
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/DropZone/styles.module.css/#css-module-data */
._DropZone_wc2ks_1 {
  position: relative;
  height: 100%;
  min-height: var(--puck-slot-min-empty-height);
  outline-offset: calc(var(--puck-slot-border-width, var(--puck-border-width-focus)) * -1);
  width: 100%;
}
._DropZone--hasChildren_wc2ks_11 {
  min-height: 0;
}
._DropZone_wc2ks_1:empty {
  min-height: var(--puck-slot-min-empty-height);
}
[data-puck-entry]:not([data-puck-dragging]) ._DropZone_wc2ks_1 {
  transition: min-height var(--puck-duration-medium) var(--puck-ease-exit);
}
._DropZone--isAreaSelected_wc2ks_24,
._DropZone--hoveringOverArea_wc2ks_25:not(._DropZone--isRootZone_wc2ks_25) {
  background: var(--puck-slot-color-bg, var(--puck-color-selection-bg));
  outline: var(--puck-slot-border-width, var(--puck-border-width-focus)) var(--puck-slot-border-style, dashed) var(--puck-slot-color-border, var(--puck-color-selection-border));
}
._DropZone_wc2ks_1:empty {
  background: var(--puck-slot-color-bg, var(--puck-color-selection-bg));
  outline: var(--puck-slot-border-width, var(--puck-border-width-focus)) var(--puck-slot-border-style, dashed) var(--puck-slot-color-border, var(--puck-color-selection-border));
}
._DropZone-item_wc2ks_39 {
  position: relative;
}
._DropZone-linePlaceholder_wc2ks_43 {
  background: var( --puck-slot-component-color-placeholder, var(--puck-color-line-placeholder) );
  border-radius: calc(var(--puck-line-placeholder-width, 2px) / 2);
  pointer-events: none;
  position: absolute;
  z-index: 1;
}
._DropZone-hitbox_wc2ks_55 {
  position: absolute;
  bottom: calc(var(--puck-space-3) * -1);
  height: var(--puck-space-5);
  width: 100%;
  z-index: 1;
}
[data-puck-dragging] ._DropZone--isEnabled_wc2ks_63 {
  outline: var(--puck-slot-border-width, var(--puck-border-width-focus)) var(--puck-slot-border-style, dashed) var(--puck-slot-color-border, var(--puck-color-selection-border));
}
._DropZone_wc2ks_1 > *:not([data-puck-component]):not([data-puck-line-placeholder]) {
  opacity: 0;
}
body:has(._DropZone--isAnimating_wc2ks_74:empty) [data-puck-overlay] {
  opacity: 0 !important;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/InlineTextField/styles.module.css/#css-module-data */
._InlineTextField_104qp_1 {
  cursor: text;
  display: inline-block;
  white-space: pre-wrap;
  text-decoration: inherit;
}
[data-dnd-dragging] ._InlineTextField_104qp_1 {
  cursor: none;
  caret-color: transparent;
}
[data-dnd-dragging] ._InlineTextField_104qp_1::selection {
  display: none;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Loader/styles.module.css/#css-module-data */
@keyframes _loader-animation_1w5zn_1 {
  0% {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(180deg) scale(0.8);
  }
  100% {
    transform: rotate(360deg) scale(1);
  }
}
._Loader_1w5zn_13 {
  background: transparent;
  border-radius: var(--puck-radius-round);
  border: var(--puck-border-width-focus) solid currentColor;
  border-bottom-color: transparent;
  display: inline-block;
  animation: _loader-animation_1w5zn_1 1s 0s infinite linear;
  animation-fill-mode: both;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/RichTextMenu/styles.module.css/#css-module-data */
._RichTextMenu_1ve2j_1 {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
._RichTextMenu--form_1ve2j_7 {
  border-top-left-radius: var(--puck-field-radius, var(--puck-radius-m));
  border-top-right-radius: var(--puck-field-radius, var(--puck-radius-m));
  padding: var(--puck-field-richtext-menu-space-y, 6px) var(--puck-field-richtext-menu-space-x, 6px);
  background-color: var( --puck-field-richtext-menu-color-bg, var(--puck-color-surface-subtle) );
  position: relative;
  scrollbar-width: none;
  overflow-x: auto;
}
._RichTextMenu-group_1ve2j_21 {
  display: flex;
  align-items: space-between;
  flex-direction: row;
  flex-wrap: nowrap;
  padding-inline: 6px;
  gap: 2px;
  position: relative;
}
._RichTextMenu-group_1ve2j_21:first-of-type {
  padding-left: 0;
}
._RichTextMenu-group_1ve2j_21:last-of-type {
  padding-right: 0;
}
._RichTextMenu--inline_1ve2j_39 ._RichTextMenu-group_1ve2j_21 {
  color: var(--puck-color-text-inverse);
  gap: 0px;
  flex-wrap: nowrap;
}
._RichTextMenu-group_1ve2j_21 + ._RichTextMenu-group_1ve2j_21 {
  border-left: var(--puck-border-width-regular) solid var( --puck-field-richtext-menu-color-separator, var(--puck-color-border-muted) );
}
._RichTextMenu--inline_1ve2j_39 ._RichTextMenu-group_1ve2j_21 + ._RichTextMenu-group_1ve2j_21 {
  border-left: var(--puck-border-width-hairline) solid var(--puck-color-border-inverse);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/RichTextMenu/components/Control/styles.module.css/#css-module-data */
._Control_id4pm_1 .lucide {
  height: var(--puck-icon-size-m);
  width: var(--puck-icon-size-m);
}
._Control--inline_id4pm_6 .lucide {
  height: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
  width: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
}

/* components/DraggableComponent/styles.css */
[data-puck-component] * {
  pointer-events: none;
  user-select: none;
  -webkit-user-select: none;
}
[data-puck-component] {
  cursor: grab;
  pointer-events: auto !important;
  user-select: none;
  -webkit-user-select: none;
}
[data-puck-dropzone] {
  pointer-events: auto !important;
}
[data-puck-disabled] {
  cursor: pointer;
}
[data-dnd-placeholder]:not([data-puck-line-drag] *) {
  background: var( --puck-slot-component-color-placeholder, var(--puck-color-azure-06) ) !important;
  border: none !important;
  color: transparent !important;
  opacity: 0.3 !important;
  outline: none !important;
  transition: none !important;
}
[data-dnd-placeholder]:not([data-puck-line-drag] *) *,
[data-dnd-placeholder]:not([data-puck-line-drag] *)::after,
[data-dnd-placeholder]:not([data-puck-line-drag] *)::before {
  opacity: 0 !important;
}
[data-puck-line-drag] [data-dnd-placeholder] {
  opacity: 0.4 !important;
  outline: none !important;
  transition: none !important;
}
[data-puck-line-drag] [data-dnd-dragging][data-puck-component] {
  opacity: 0.9 !important;
}
[data-dnd-dragging][data-puck-component] {
  pointer-events: none !important;
  outline: var( --puck-slot-component-border-width, var(--puck-border-width-focus) ) var(--puck-slot-component-color-border-dragging, var(--puck-color-azure-09)) solid !important;
  outline-offset: calc(var(--puck-slot-component-border-width, var(--puck-border-width-focus)) * -1) !important;
}
[data-dnd-dragging][data-puck-component] > :first-child {
  margin-top: 0 !important;
}
[data-dnd-dragging][data-puck-component] > :last-child {
  margin-bottom: 0 !important;
}

/* lib/overlay-portal/styles.css */
[data-puck-overlay-portal],
[data-puck-overlay-portal] * {
  pointer-events: auto !important;
}
[data-puck-entry][data-puck-dragging] [data-puck-overlay-portal],
[data-puck-entry][data-puck-dragging] [data-puck-overlay-portal] * {
  pointer-events: none !important;
}
[data-puck-entry][data-puck-preview-mode=edit] [data-puck-overlay-portal]:hover {
  outline: 2px var(--puck-color-azure-09, #cfdff0) dashed;
  outline-offset: 2px;
}
[data-puck-entry][data-puck-preview-mode=edit] [data-puck-overlay-portal]:focus-within {
  outline: 2px var(--puck-color-azure-07, #88b0da) dashed;
  outline-offset: 2px;
}`,eg="data-puck-style-source",tg="puck",G2="data-puck-style-id",rg={uiDefault:"ui-default",iframeInteractions:"iframe-styles"},_d=new WeakMap,J2=e=>{if(e)return e;if(!(typeof document>"u"))return document},Q2=e=>{const t=_d.get(e);if(t)return t;const r=new Map;return _d.set(e,r),r},ng=(e,t,r=!1)=>{const n=e.head;if(n){if(t.parentElement!==n){r?n.prepend(t):n.append(t);return}r&&n.firstChild!==t&&n.prepend(t),!r&&n.lastChild!==t&&n.append(t)}},eS=(e,t,r,n=!1)=>{const o=e.createElement("style");return o.setAttribute(eg,tg),o.setAttribute(G2,t),o.textContent=r,ng(e,o,n),o},og=e=>e?.getAttribute(eg)===tg,ig=e=>{const t=J2(e?.document);y.useInsertionEffect(()=>{if(!e||!t)return;const r=Q2(t),n=r.get(e.id);if(n)n.count=n.count+1,n.el.textContent!==e.cssText&&(n.el.textContent=e.cssText),ng(t,n.el,e.prepend);else{const o=eS(t,e.id,e.cssText,e.prepend);r.set(e.id,{count:1,el:o})}return()=>{const o=r.get(e.id);o&&(o.count=o.count-1,o.count<=0&&(o.el.remove(),r.delete(e.id)))}},[e?.cssText,e?.id,e?.prepend,e?.document,t])},pi=null,tS=()=>pi!==null?pi:typeof document>"u"?!1:(pi=getComputedStyle(document.documentElement).getPropertyValue("--_puck-styles-loaded").trim()!=="",pi),rS=()=>{const e=tS();ig(e?null:{cssText:K2,id:rg.uiDefault,prepend:!0}),y.useEffect(()=>{},[])},nS=e=>{ig(e?{cssText:X2,document:e,id:rg.iframeInteractions}:null)},Fc='style, link[rel="stylesheet"]',Ka="data-puck-style-mirror",ag=e=>!e.matches(Fc)||og(e)?!1:e.tagName==="STYLE"?!!e.innerHTML.trim():!0,oS=e=>{const t=[];return e.querySelectorAll(Fc).forEach(r=>{ag(r)&&t.push(r)}),t},yd=e=>Array.from(document.styleSheets).find(t=>t.ownerNode.href===e.href),iS=e=>{if(e)try{return Array.from(e.cssRules).map(t=>t.cssText).join("")}catch{console.warn("Access to stylesheet %s is denied. Ignoring…",e.href)}return""},bd=(e,t)=>{const r=e.attributes;r?.length>0&&Array.from(r).forEach(n=>{t.setAttribute(n.name,n.value)})},kd=e=>setTimeout(e,0),aS=({children:e,debug:t=!1,onStylesLoaded:r=()=>null,syncHostStyles:n=!0})=>{const{document:o,window:i}=sS();return nS(o),y.useEffect(()=>{if(!i||!o)return()=>{};let a=[];const s={},l=()=>{a.forEach(({mirror:g})=>{g.remove()}),a=[],Array.from(o.head.querySelectorAll(`[${Ka}="true"]`)).forEach(g=>{g.remove()}),Object.keys(s).forEach(g=>{delete s[g]})},c=g=>a.findIndex(j=>j.original===g),d=(g,j=!1)=>ke(null,null,function*(){let w;if(g.nodeName==="LINK"&&j){w=document.createElement("style"),w.type="text/css";let A=yd(g);A||(yield new Promise(I=>{const k=()=>{I(),g.removeEventListener("load",k)};g.addEventListener("load",k)}),A=yd(g));const E=iS(A);if(!E){t&&console.warn("Tried to load styles for link element, but couldn't find them. Skipping...");return}w.innerHTML=E,w.setAttribute("data-href",g.getAttribute("href"))}else w=g.cloneNode(!0);return w.setAttribute(Ka,"true"),w}),u=g=>ke(null,null,function*(){const j=c(g);if(j>-1){t&&console.log("Tried to add an element that was already mirrored. Updating instead..."),a[j].mirror.innerText=g.innerText;return}const w=yield d(g);if(!w)return;const A=Ba(w.outerHTML);if(s[A]){t&&console.log("iframe already contains element that is being mirrored. Skipping...");return}s[A]=!0,o.head.append(w),a.push({original:g,mirror:w}),t&&console.log(`Added style node ${g.outerHTML}`)}),f=g=>{var j,w;const A=c(g);if(A===-1){t&&console.log("Tried to remove an element that did not exist. Skipping...");return}const E=Ba(g.outerHTML);(w=(j=a[A])==null?void 0:j.mirror)==null||w.remove(),delete s[E],t&&console.log(`Removed style node ${g.outerHTML}`)},v=new MutationObserver(g=>{g.forEach(j=>{j.type==="childList"&&(j.addedNodes.forEach(w=>{if(w.nodeType===Node.TEXT_NODE||w.nodeType===Node.ELEMENT_NODE){const A=w.nodeType===Node.TEXT_NODE?w.parentElement:w;A&&ag(A)&&kd(()=>u(A))}}),j.removedNodes.forEach(w=>{if(w.nodeType===Node.TEXT_NODE||w.nodeType===Node.ELEMENT_NODE){const A=w.nodeType===Node.TEXT_NODE?w.parentElement:w;A&&A.matches(Fc)&&!og(A)&&kd(()=>f(A))}}))})});if(!n)return r(),()=>{v.disconnect(),l()};const h=i.parent.document,m=oS(h),b=[];let S=0;const x=h.getElementsByTagName("html")[0];bd(x,o.documentElement);const _=h.getElementsByTagName("body")[0];return bd(_,o.body),Promise.all(m.map((g,j)=>ke(null,null,function*(){if(g.nodeName==="LINK"){const A=g.href;if(b.indexOf(A)>-1)return;b.push(A)}const w=yield d(g);if(w)return a.push({original:g,mirror:w}),w}))).then(g=>{const j=g.filter(w=>typeof w<"u");j.forEach(w=>{w.onload=()=>{S=S+1,S>=j.length&&r()},w.onerror=()=>{const A=w instanceof HTMLLinkElement?w.href:void 0;console.warn(`AutoFrame couldn't load a stylesheet${A?`: ${A}`:""}. This can happen if the parent document's stylesheet is blocked by the iframe's CSP, returns a non-2xx status, or fails to reach the network.`),S=S+1,S>=j.length&&r()}}),o.head.querySelectorAll(`[${Ka}="true"]`).forEach(w=>{w.remove()}),o.head.append(...j),j.forEach(w=>{w.nodeName==="STYLE"&&(S=S+1)}),S>=j.length&&r(),v.observe(h.head,{childList:!0,subtree:!0}),j.forEach(w=>{const A=Ba(w.outerHTML);s[A]=!0})}),()=>{v.disconnect(),l()}},[n]),p.jsx(p.Fragment,{children:e})},Bc=y.createContext({}),sS=()=>y.useContext(Bc);function sg(e){var t=e,{children:r,className:n,debug:o,id:i,onReady:a=()=>{},onNotReady:s=()=>{},frameRef:l,syncHostStyles:c=!0}=t,d=At(t,["children","className","debug","id","onReady","onNotReady","frameRef","syncHostStyles"]);const[u,f]=y.useState(!1),[v,h]=y.useState({}),[m,b]=y.useState(),[S,x]=y.useState(!1);return y.useEffect(()=>{u&&x(!c)},[u,c]),y.useEffect(()=>{var _;if(l.current){const g=l.current.contentDocument,j=l.current.contentWindow;h({document:g||void 0,window:j||void 0}),b((_=l.current.contentDocument)==null?void 0:_.getElementById("frame-root")),g&&j&&S?a():s()}},[l,u,S]),p.jsx("iframe",B(D({},d),{className:n,id:i,srcDoc:'<!DOCTYPE html><html><head></head><body><div id="frame-root" data-puck-entry></div></body></html>',ref:l,onLoad:()=>{f(!0)},children:p.jsx(Bc.Provider,{value:v,children:u&&m&&p.jsx(aS,{debug:o,onStylesLoaded:()=>x(!0),syncHostStyles:c,children:Ao.createPortal(r,m)})})}))}sg.displayName="AutoFrame";var lS=sg;z();var cS=hl(Ys),lg=y.memo(()=>{var e,t,r,n;const o=N(Ne(u=>{var f;return(f=u.state.indexes.nodes.root)==null?void 0:f.flatData.props})),i=N(u=>u.config),a=N(u=>u.metadata),s=y.useMemo(()=>{const u=bn({props:o??{}});return Bd(u)},[o]),l=Cv(i,s,cS),c=y.useMemo(()=>B(D({},l),{children:p.jsx(Xs,{zone:Ge}),puck:{renderDropZone:Xs,isEditing:!0,dragRef:null,metadata:a},editMode:!0}),[l,a]),d=ea((t=(e=i.root)==null?void 0:e.fields)!=null?t:{},c);return(r=i.root)!=null&&r.render?(n=i.root)==null?void 0:n.render(B(D(D({},c),d),{id:"puck-root"})):p.jsx(p.Fragment,{children:c.children})});lg.displayName="EditorPage";var uS=lg;z();var dS={PuckPreview:"_PuckPreview_zbic3_1","PuckPreview-frame":"_PuckPreview-frame_zbic3_6"},Xa=ee("PuckPreview",dS),pS=e=>{const t=N(r=>r.status);y.useEffect(()=>{if(e.current&&t==="READY"){const r=e.current,n=a=>{const s=new kv("pointermove",B(D({},a),{bubbles:!0,cancelable:!1,clientX:a.clientX,clientY:a.clientY,pointerId:a.pointerId,pointerType:a.pointerType,isPrimary:a.isPrimary,originalTarget:a.target}));r.dispatchEvent(s)},o=()=>{var a;i(),(a=r.contentDocument)==null||a.addEventListener("pointermove",n,{capture:!0})},i=()=>{var a;(a=r.contentDocument)==null||a.removeEventListener("pointermove",n)};return o(),()=>{i()}}},[t])},fS=e=>{const t=N(o=>o.state.ui.previewMode),r=N(o=>o.status),n=N(o=>o.iframe.enabled);y.useEffect(()=>{var o,i;const a=n?(i=(o=e.current)==null?void 0:o.contentDocument)==null?void 0:i.querySelector("[data-puck-entry]"):e.current;a?.setAttribute("data-puck-preview-mode",t)},[t,r,n])},cg=({id:e="puck-preview"})=>{const t=N(u=>u.dispatch),r=N(u=>u.config),n=N(u=>u.setStatus),o=N(u=>u.iframe),i=N(u=>u.overrides),a=N(u=>u.metadata),s=N(u=>u.state.ui.previewMode==="edit"?null:u.state.data),l=y.useMemo(()=>i.iframe,[i]),c=y.useRef(null);pS(c),fS(c);const d=s?p.jsx(zw,{data:s,config:r,metadata:a}):p.jsx(uS,{});return y.useEffect(()=>{o.enabled||n("READY")},[o.enabled]),p.jsx("div",{className:Xa(),id:e,"data-puck-preview":!0,onClick:u=>{const f=u.target;!f.hasAttribute("data-puck-component")&&!f.hasAttribute("data-puck-dropzone")&&t({type:"setUi",ui:{itemSelector:null}})},children:o.enabled?p.jsx(lS,{id:"preview-frame",className:Xa("frame"),"data-rfd-iframe":!0,syncHostStyles:o.syncHostStyles,onReady:()=>{n("READY")},onNotReady:()=>{n("MOUNTED")},frameRef:c,children:p.jsx(Bc.Consumer,{children:({document:u})=>l?p.jsx(l,{document:u,children:d}):d})}):p.jsx("div",{id:"preview-frame",className:Xa("frame"),ref:c,"data-puck-entry":!0,children:d})})};z();z();var hS=({overrides:e,plugins:t})=>{const r=D({},e);return t?.forEach(n=>{n.overrides&&Object.keys(n.overrides).forEach(o=>{var i;const a=o;if(!((i=n.overrides)!=null&&i[a]))return;if(a==="fieldTypes"){const c=n.overrides.fieldTypes;Object.keys(c).forEach(d=>{r.fieldTypes=r.fieldTypes||{};const u=r.fieldTypes[d],f=v=>c[d](B(D({},v),{children:u?u(v):v.children}));r.fieldTypes[d]=f});return}const s=r[a],l=c=>n.overrides[a](B(D({},c),{children:s?s(c):c.children}));r[a]=l})}),r},vS=({overrides:e,plugins:t})=>y.useMemo(()=>hS({overrides:e,plugins:t}),[t,e]);z();z();var Nc={Puck:"_Puck_tzaxg_19","Puck-portal":"_Puck-portal_tzaxg_31",PuckLayout:"_PuckLayout_tzaxg_36","PuckLayout-inner":"_PuckLayout-inner_tzaxg_40","Puck--hidePlugins":"_Puck--hidePlugins_tzaxg_73","PuckLayout--mounted":"_PuckLayout--mounted_tzaxg_78","PuckLayout--mobilePanelHeightToggle":"_PuckLayout--mobilePanelHeightToggle_tzaxg_82","PuckLayout--leftSideBarVisible":"_PuckLayout--leftSideBarVisible_tzaxg_82","PuckLayout--isExpanded":"_PuckLayout--isExpanded_tzaxg_90","PuckLayout--mobilePanelHeightMinContent":"_PuckLayout--mobilePanelHeightMinContent_tzaxg_110","PuckLayout--rightSideBarVisible":"_PuckLayout--rightSideBarVisible_tzaxg_137","PuckLayout-mounted":"_PuckLayout-mounted_tzaxg_156","PuckLayout-nav":"_PuckLayout-nav_tzaxg_197","PuckLayout-header":"_PuckLayout-header_tzaxg_217",PuckPluginTab:"_PuckPluginTab_tzaxg_231","PuckPluginTab--visible":"_PuckPluginTab--visible_tzaxg_237","PuckPluginTab-body":"_PuckPluginTab-body_tzaxg_243"};z();var Qs=({children:e})=>p.jsx(p.Fragment,{children:e});z();var gS=()=>{const e=me(),t=y.useCallback(()=>{const r=e.getState().dispatch;r({type:"setUi",ui:n=>({previewMode:n.previewMode==="edit"?"interactive":"edit"})})},[e]);Rt({meta:!0,i:!0},t),Rt({ctrl:!0,i:!0},t)};z();z();z();var mS={MenuBar:"_MenuBar_1hxnj_1","MenuBar--menuOpen":"_MenuBar--menuOpen_1hxnj_14","MenuBar-inner":"_MenuBar-inner_1hxnj_29","MenuBar-history":"_MenuBar-history_1hxnj_45"},Ga=ee("MenuBar",mS);function _S({menuOpen:e=!1,renderHeaderActions:t,setMenuOpen:r}){const n=N(c=>c.history.back),o=N(c=>c.history.forward),i=N(c=>c.history.hasFuture()),a=N(c=>c.history.hasPast()),s=J("header-undo"),l=J("header-redo");return p.jsx("div",{className:Ga({menuOpen:e}),onClick:c=>{var d;const u=c.target;window.matchMedia("(min-width: 638px)").matches||u.tagName==="A"&&((d=u.getAttribute("href"))!=null&&d.startsWith("#"))&&r(!1)},children:p.jsxs("div",{className:Ga("inner"),children:[p.jsxs("div",{className:Ga("history"),children:[p.jsx(Ue,{type:"button",title:s,disabled:!a,onClick:n,children:p.jsx(M_,{size:21})}),p.jsx(Ue,{type:"button",title:l,disabled:!i,onClick:o,children:p.jsx(S_,{size:21})})]}),p.jsx(p.Fragment,{children:t&&t()})]})})}z();var yS={PuckHeader:"_PuckHeader_c2nei_1","PuckHeader--hidePlugins":"_PuckHeader--hidePlugins_c2nei_21","PuckHeader-inner":"_PuckHeader-inner_c2nei_26","PuckHeader-toggle":"_PuckHeader-toggle_c2nei_46","PuckHeader-rightSideBarToggle":"_PuckHeader-rightSideBarToggle_c2nei_52","PuckHeader-leftSideBarToggle":"_PuckHeader-leftSideBarToggle_c2nei_53","PuckHeader-title":"_PuckHeader-title_c2nei_64","PuckHeader-path":"_PuckHeader-path_c2nei_68","PuckHeader-tools":"_PuckHeader-tools_c2nei_75","PuckHeader-menuButton":"_PuckHeader-menuButton_c2nei_81","PuckHeader--menuOpen":"_PuckHeader--menuOpen_c2nei_86"},Vt=ee("PuckHeader",yS),bS=({hidePlugins:e})=>{const{onPublish:t,renderHeader:r,renderHeaderActions:n,headerTitle:o,headerPath:i,iframe:a}=_a(),s=N(E=>E.dispatch),l=me(),c=y.useMemo(()=>r?(console.warn("`renderHeader` is deprecated. Please use `overrides.header` and the `usePuck` hook instead"),I=>{var k=I,{actions:P}=k,T=At(k,["actions"]);const F=r,H=N(R=>R.state);return p.jsx(F,B(D({},T),{dispatch:s,state:H,children:P}))}):Qs,[r]),d=y.useMemo(()=>n?(console.warn("`renderHeaderActions` is deprecated. Please use `overrides.headerActions` and the `usePuck` hook instead."),I=>{const k=n,P=N(T=>T.state);return p.jsx(k,B(D({},I),{dispatch:s,state:P}))}):Qs,[n]),u=N(E=>E.overrides.header||c),f=N(E=>E.overrides.headerActions||d),[v,h]=y.useState(!1),m=N(E=>{var I,k;return(k=((I=E.state.indexes.nodes.root)==null?void 0:I.data).props.title)!=null?k:""}),b=N(E=>E.state.ui.leftSideBarVisible),S=N(E=>E.state.ui.rightSideBarVisible),x=y.useCallback(E=>{const I=window.matchMedia("(min-width: 638px)").matches,k=E==="left"?b:S,P=E==="left"?"rightSideBarVisible":"leftSideBarVisible";s({type:"setUi",ui:D({[`${E}SideBarVisible`]:!k},I?{}:{[P]:!1})})},[s,b,S]),_=J("header-publish"),g=J("label-page"),j=J("header-toggle-leftsidebar"),w=J("header-toggle-rightsidebar"),A=J("header-toggle-menubar");return p.jsx(u,{actions:p.jsx(p.Fragment,{children:p.jsx(f,{children:p.jsx(qs,{onClick:()=>{const E=l.getState().state.data;t&&t(E)},icon:p.jsx(eu,{size:"14px"}),children:_})})}),children:p.jsx("header",{className:Vt({leftSideBarVisible:b,rightSideBarVisible:S,hidePlugins:e}),children:p.jsxs("div",{className:Vt("inner"),children:[p.jsxs("div",{className:Vt("toggle"),children:[p.jsx("div",{className:Vt("leftSideBarToggle"),children:p.jsx(Ue,{type:"button",onClick:()=>{x("left")},title:j,children:p.jsx(y_,{focusable:"false"})})}),p.jsx("div",{className:Vt("rightSideBarToggle"),children:p.jsx(Ue,{type:"button",onClick:()=>{x("right")},title:w,children:p.jsx(b_,{focusable:"false"})})})]}),p.jsx("div",{className:Vt("title"),children:p.jsxs(va,{rank:"2",size:"xs",children:[o||m||g,i&&p.jsxs(p.Fragment,{children:[" ",p.jsx("code",{className:Vt("path"),children:i})]})]})}),p.jsxs("div",{className:Vt("tools"),children:[p.jsx("div",{className:Vt("menuButton"),children:p.jsx(Ue,{type:"button",onClick:()=>h(!v),title:A,children:v?p.jsx(Gd,{focusable:"false"}):p.jsx(_o,{focusable:"false"})})}),p.jsx(_S,{dispatch:s,onPublish:t,menuOpen:v,renderHeaderActions:()=>p.jsx(f,{children:p.jsx(qs,{onClick:()=>{const E=l.getState().state.data;t&&t(E)},icon:p.jsx(eu,{size:"14px"}),children:_})}),setMenuOpen:h})]})]})})})},kS=y.memo(bS);z();z();var xS={SidebarSection:"_SidebarSection_1uv88_1","SidebarSection-title":"_SidebarSection-title_1uv88_12","SidebarSection--noBorderTop":"_SidebarSection--noBorderTop_1uv88_20","SidebarSection-content":"_SidebarSection-content_1uv88_24","SidebarSection-breadcrumbLabel":"_SidebarSection-breadcrumbLabel_1uv88_33","SidebarSection-breadcrumbs":"_SidebarSection-breadcrumbs_1uv88_62","SidebarSection-breadcrumb":"_SidebarSection-breadcrumb_1uv88_33","SidebarSection-heading":"_SidebarSection-heading_1uv88_74","SidebarSection-loadingOverlay":"_SidebarSection-loadingOverlay_1uv88_78"},Jr=ee("SidebarSection",xS),wS=({children:e,title:t,background:r,showBreadcrumbs:n,noBorderTop:o,isLoading:i})=>p.jsxs("div",{className:Jr({noBorderTop:o}),style:{background:r},children:[p.jsx("div",{className:Jr("title"),children:p.jsxs("div",{className:Jr("breadcrumbs"),children:[n&&p.jsx(Qv,{}),p.jsx("div",{className:Jr("heading"),children:p.jsx(va,{rank:"2",size:"xs",children:t})})]})}),p.jsx("div",{className:Jr("content"),children:e}),i&&p.jsx("div",{className:Jr("loadingOverlay"),children:p.jsx(Or,{size:32})})]});z();z();z();var ug={ViewportControls:"_ViewportControls_v26yb_1","ViewportControls--fullScreen":"_ViewportControls--fullScreen_v26yb_5","ViewportControls-toggleButton":"_ViewportControls-toggleButton_v26yb_14","ViewportControls-actions":"_ViewportControls-actions_v26yb_39","ViewportControls-actionsInner":"_ViewportControls-actionsInner_v26yb_43","ViewportControls--isExpanded":"_ViewportControls--isExpanded_v26yb_67","ViewportControls-divider":"_ViewportControls-divider_v26yb_72","ViewportControls-zoomSelect":"_ViewportControls-zoomSelect_v26yb_79","ViewportControls-zoom":"_ViewportControls-zoom_v26yb_79","ViewportButton-inner":"_ViewportButton-inner_v26yb_110","ViewportButton--isActive":"_ViewportButton--isActive_v26yb_118"},xd={Smartphone:p.jsx(C_,{size:16}),Tablet:p.jsx(A_,{size:16}),Monitor:p.jsx(tp,{size:16}),FullWidth:p.jsx(n_,{size:16})},rr=ee("ViewportControls",ug),wd=ee("ViewportButton",ug),el=({children:e,title:t,onClick:r,isActive:n,disabled:o})=>p.jsx("span",{className:wd({isActive:n}),suppressHydrationWarning:!0,children:p.jsx(Ue,{type:"button",title:t,disabled:o||n,onClick:r,suppressHydrationWarning:!0,children:p.jsx("span",{className:wd("inner"),children:e})})}),Sd=[{label:"25%",value:.25},{label:"50%",value:.5},{label:"75%",value:.75},{label:"100%",value:1},{label:"125%",value:1.25},{label:"150%",value:1.5},{label:"200%",value:2}],SS=({viewport:e,isActive:t,onClick:r})=>{var n;const o=J("viewport-switch",{label:(n=e.label)!=null?n:""}),i=J("viewport-switch-default");return p.jsx(el,{title:e.label?o:i,onClick:r,isActive:t,children:typeof e.icon=="string"?xd[e.icon]||e.icon:e.icon||xd.Smartphone})},IS=({autoZoom:e,zoom:t,onViewportChange:r,onZoom:n,fullScreen:o})=>{var i,a;const s=N(_=>_.viewports),l=N(_=>_.state.ui.viewports),c=Sd.find(_=>_.value===e),d=J("viewport-zoom-auto",{zoom:(e*100).toFixed(0)}),u=y.useMemo(()=>[...Sd,...c?[]:[{value:e,label:d}]].filter(_=>_.value<=e).sort((_,g)=>_.value>g.value?1:-1),[e,d]),[f,v]=y.useState(l.current.width);y.useEffect(()=>{v(l.current.width)},[l.current]);const[h,m]=y.useState(!1),b=J("viewport-zoom-out"),S=J("viewport-zoom-in"),x=J("viewport-toggle-menu");return p.jsxs("div",{className:rr({isExpanded:h,fullScreen:o}),suppressHydrationWarning:!0,children:[p.jsx("div",{className:rr("actions"),children:p.jsxs("div",{className:rr("actionsInner"),children:[s.map((_,g)=>p.jsx(SS,{viewport:_,onClick:()=>{v(_.width),r(_)},isActive:f===_.width},g)),p.jsx("div",{className:rr("divider")}),p.jsx(el,{title:b,disabled:t<=((i=u[0])==null?void 0:i.value),onClick:_=>{_.stopPropagation(),n(u[Math.max(u.findIndex(g=>g.value===t)-1,0)].value)},children:p.jsx(L_,{size:16})}),p.jsx(el,{title:S,disabled:t>=((a=u[u.length-1])==null?void 0:a.value),onClick:_=>{_.stopPropagation(),n(u[Math.min(u.findIndex(g=>g.value===t)+1,u.length-1)].value)},children:p.jsx(O_,{size:16})}),p.jsxs("div",{className:rr("zoom"),children:[p.jsx("div",{className:rr("divider")}),p.jsx("select",{className:rr("zoomSelect"),value:t.toString(),onClick:_=>{_.stopPropagation()},onChange:_=>{n(parseFloat(_.currentTarget.value))},children:u.map(_=>p.jsx("option",{value:_.value,label:_.label},_.label))})]})]})}),p.jsx("button",{className:rr("toggleButton"),title:x,onClick:()=>m(_=>!_),children:h?p.jsx(T_,{size:16}):p.jsx(tp,{size:16})})]})};z();var ES={PuckCanvas:"_PuckCanvas_zw9iy_1","PuckCanvas-controls":"_PuckCanvas-controls_zw9iy_18","PuckCanvas--fullScreen":"_PuckCanvas--fullScreen_zw9iy_23","PuckCanvas-inner":"_PuckCanvas-inner_zw9iy_34","PuckCanvas-root":"_PuckCanvas-root_zw9iy_43","PuckCanvas--ready":"_PuckCanvas--ready_zw9iy_68","PuckCanvas-loader":"_PuckCanvas-loader_zw9iy_73","PuckCanvas--showLoader":"_PuckCanvas--showLoader_zw9iy_84"};z();var dg=y.createContext(null),CS=({children:e})=>{const t=y.useRef(null),r=y.useMemo(()=>({frameRef:t}),[]);return p.jsx(dg.Provider,{value:r,children:e})},pg=()=>{const e=y.useContext(dg);if(e===null)throw new Error("useCanvasFrame must be used within a FrameProvider");return e},Nn=ee("PuckCanvas",ES),Ja=150,zS=()=>{var e;const{frameRef:t}=pg(),r=ap(t),{viewports:n=go,ui:o}=_a(),{dispatch:i,overrides:a,setUi:s,zoomConfig:l,setZoomConfig:c,status:d,iframe:u,_experimentalFullScreenCanvas:f}=N(Ne(P=>({dispatch:P.dispatch,overrides:P.overrides,setUi:P.setUi,zoomConfig:P.zoomConfig,setZoomConfig:P.setZoomConfig,status:P.status,iframe:P.iframe,_experimentalFullScreenCanvas:P._experimentalFullScreenCanvas}))),{leftSideBarVisible:v,rightSideBarVisible:h,leftSideBarWidth:m,rightSideBarWidth:b,viewports:S}=N(Ne(P=>({leftSideBarVisible:P.state.ui.leftSideBarVisible,rightSideBarVisible:P.state.ui.rightSideBarVisible,leftSideBarWidth:P.state.ui.leftSideBarWidth,rightSideBarWidth:P.state.ui.rightSideBarWidth,viewports:P.state.ui.viewports}))),[x,_]=y.useState(!1),g=y.useRef(!1),j=y.useMemo(()=>({children:T})=>p.jsx(p.Fragment,{children:T}),[]),w=y.useMemo(()=>a.preview||j,[a]),A=y.useCallback(()=>{if(t.current){const P=t.current,T=ip(P);return{width:T.contentBox.width,height:T.contentBox.height}}return{width:0,height:0}},[t]);y.useEffect(()=>{r()},[t,v,h,m,b,S]),y.useEffect(()=>{const{height:P}=A();S.current.height==="auto"&&c(B(D({},l),{rootHeight:P/l.zoom}))},[l.zoom,A,c]),y.useEffect(()=>{r()},[S.current.width,S]),y.useEffect(()=>{if(!t.current)return;const P=new ResizeObserver(()=>{g.current||r()});return P.observe(t.current),()=>{P.disconnect()}},[t.current]);const[E,I]=y.useState(!1);y.useEffect(()=>{setTimeout(()=>{I(!0)},500)},[]);const k=me();return y.useEffect(()=>{var P,T;if(typeof window>"u"||(P=o?.viewports)!=null&&P.current)return;const F=window.innerWidth,H=(T=t.current)==null?void 0:T.getBoundingClientRect().width;if(!F||!H||n.length===0)return;const R=Object.values(n).find($=>$.width==="100%"),L=!!R;let Y=Object.entries(n).filter(([$,K])=>K.width!=="100%").map(([$,K])=>({key:$,diff:Math.abs(F-(typeof K.width=="string"?F:K.width)),value:K})).sort(($,K)=>$.diff>K.diff?1:-1)[0].value;if(Y.width<H&&L&&(Y=R),u.enabled){const $=k.getState(),K={state:B(D({},$.state),{ui:B(D({},$.state.ui),{viewports:B(D({},$.state.ui.viewports),{current:B(D({},$.state.ui.viewports.current),{height:Y?.height||"auto",width:Y?.width})})})})};let oe=$.history;$.history.histories.length===1&&(oe=B(D({},oe),{histories:[K]})),k.setState(B(D({},K),{history:oe}))}},[n,t.current,u,k,(e=o?.viewports)==null?void 0:e.current]),p.jsxs("div",{className:Nn({ready:d==="READY"||!u.enabled||!u.waitForStyles,showLoader:E,fullScreen:f}),onClick:P=>{const T=P.target;!T.hasAttribute("data-puck-component")&&!T.hasAttribute("data-puck-dropzone")&&i({type:"setUi",ui:{itemSelector:null},recordHistory:!1})},children:[S.controlsVisible&&u.enabled&&p.jsx("div",{className:Nn("controls"),children:p.jsx(IS,{fullScreen:f,autoZoom:l.autoZoom,zoom:l.zoom,onViewportChange:P=>{_(!0),g.current=!0;const T=B(D({},P),{height:P.height||"auto",zoom:l.zoom}),F={viewports:B(D({},S),{current:T})};s(F),r({viewports:B(D({},S),{current:T})})},onZoom:P=>{_(!0),g.current=!0,c(B(D({},l),{zoom:P}))}})}),p.jsxs("div",{className:Nn("inner"),ref:t,children:[p.jsx("div",{className:Nn("root"),style:{width:u.enabled?S.current.width:"100%",height:l.rootHeight,transform:u.enabled?`scale(${l.zoom})`:void 0,transition:x?`width ${Ja}ms ease-out, height ${Ja}ms ease-out, transform ${Ja}ms ease-out`:"",overflow:u.enabled?void 0:"auto"},suppressHydrationWarning:!0,id:"puck-canvas-root",onTransitionEnd:()=>{_(!1),g.current=!1},children:p.jsx(w,{children:p.jsx(cg,{})})}),p.jsx("div",{className:Nn("loader"),children:p.jsx(Or,{size:24})})]})]})};z();function Id(e,t){const[r,n]=y.useState(null),o=y.useRef(null),i=N(s=>e==="left"?s.state.ui.leftSideBarWidth:s.state.ui.rightSideBarWidth);y.useEffect(()=>{if(typeof window<"u"&&!i)try{const s=localStorage.getItem("puck-sidebar-widths");if(s){const c=JSON.parse(s)[e];c&&t({type:"setUi",ui:{[e==="left"?"leftSideBarWidth":"rightSideBarWidth"]:c}})}}catch(s){console.error(`Failed to load ${e} sidebar width from localStorage`,s)}},[t,e,i]),y.useEffect(()=>{i!==void 0&&n(i)},[i]);const a=y.useCallback(s=>{t({type:"setUi",ui:{[e==="left"?"leftSideBarWidth":"rightSideBarWidth"]:s}});let l={};try{const c=localStorage.getItem("puck-sidebar-widths");l=c?JSON.parse(c):{}}catch(c){console.error(`Failed to save ${e} sidebar width to localStorage`,c)}finally{localStorage.setItem("puck-sidebar-widths",JSON.stringify(B(D({},l),{[e]:s})))}window.dispatchEvent(new CustomEvent("viewportchange",{bubbles:!0,cancelable:!1}))},[t,e]);return{width:r,setWidth:n,sidebarRef:o,handleResizeEnd:a}}z();z();z();var jS={ResizeHandle:"_ResizeHandle_144bf_2","ResizeHandle--left":"_ResizeHandle--left_144bf_16","ResizeHandle--right":"_ResizeHandle--right_144bf_20"},AS=ee("ResizeHandle",jS),PS=({position:e,sidebarRef:t,onResize:r,onResizeEnd:n})=>{const{frameRef:o}=pg(),i=ap(o),a=y.useRef(null),s=y.useRef(!1),l=y.useRef(0),c=y.useRef(0),d=y.useCallback(v=>{if(!s.current)return;const h=v.clientX-l.current,m=e==="left"?c.current+h:c.current-h,b=Math.max(192,m);r(b),v.preventDefault()},[r,e]),u=y.useCallback(()=>{var v;if(!s.current)return;s.current=!1,document.body.style.cursor="",document.body.style.userSelect="";const h=document.getElementById("resize-overlay");h&&document.body.removeChild(h),document.removeEventListener("mousemove",d),document.removeEventListener("mouseup",u);const m=((v=t.current)==null?void 0:v.getBoundingClientRect().width)||0;n(m),i()},[n]),f=y.useCallback(v=>{var h;s.current=!0,l.current=v.clientX,c.current=((h=t.current)==null?void 0:h.getBoundingClientRect().width)||0,document.body.style.cursor="col-resize",document.body.style.userSelect="none";const m=document.createElement("div");m.id="resize-overlay",m.setAttribute("data-resize-overlay",""),document.body.appendChild(m),document.addEventListener("mousemove",d),document.addEventListener("mouseup",u),v.preventDefault()},[e,d,u]);return p.jsx("div",{ref:a,className:AS({[e]:!0}),onMouseDown:f})};z();var DS={Sidebar:"_Sidebar_16oed_1","Sidebar--isVisible":"_Sidebar--isVisible_16oed_10","Sidebar--left":"_Sidebar--left_16oed_14","Sidebar--right":"_Sidebar--right_16oed_34","Sidebar-resizeHandle":"_Sidebar-resizeHandle_16oed_51"},Ed=ee("Sidebar",DS),Cd=({position:e,sidebarRef:t,isVisible:r,onResize:n,onResizeEnd:o,children:i})=>p.jsxs(p.Fragment,{children:[p.jsx("div",{ref:t,className:Ed({[e]:!0,isVisible:r}),children:i}),p.jsx("div",{className:`${Ed("resizeHandle")}`,children:p.jsx(PS,{position:e,sidebarRef:t,onResize:n,onResizeEnd:o})})]});z();var MS=e=>{let t=e;for(;t&&t!==document.body;){const r=window.getComputedStyle(t);if(r.display==="none"||r.visibility==="hidden"||r.opacity==="0"||t.getAttribute("aria-hidden")==="true"||t.hasAttribute("hidden"))return!1;t=t.parentElement}return!0},TS=e=>{var t;if(e?.defaultPrevented)return!0;const r=((t=e?.composedPath)==null?void 0:t.call(e)[0])||e?.target||document.activeElement;if(r instanceof HTMLElement){const o=r.tagName.toLowerCase();if(o==="input"||o==="textarea"||o==="select"||r.isContentEditable)return!0;const i=r.getAttribute("role");if(i==="textbox"||i==="combobox"||i==="searchbox"||i==="listbox"||i==="grid")return!0}const n=document.querySelector('dialog[open], [aria-modal="true"], [role="dialog"], [role="alertdialog"]');return!!(n&&MS(n))},OS=()=>{const e=me(),t=y.useCallback(r=>{var n;if(TS(r))return!1;const{state:o,dispatch:i,permissions:a,selectedItem:s}=e.getState(),l=(n=o.ui)==null?void 0:n.itemSelector;return!l?.zone||!s||!a.getPermissions({item:s}).delete||i({type:"remove",index:l.index,zone:l.zone}),!0},[e]);Rt({delete:!0},t),Rt({backspace:!0},t)};z();z();var fg={Nav:"_Nav_vll2r_1","Nav-list":"_Nav-list_vll2r_5","Nav-mobileActions":"_Nav-mobileActions_vll2r_23","NavItem-link":"_NavItem-link_vll2r_39",NavItem:"_NavItem_vll2r_39","NavItem-linkIcon":"_NavItem-linkIcon_vll2r_90","NavItem--active":"_NavItem--active_vll2r_100","NavItem--mobileOnly":"_NavItem--mobileOnly_vll2r_136","NavItem--desktopOnly":"_NavItem--desktopOnly_vll2r_141"},Qa=ee("Nav",fg),fi=ee("NavItem",fg),LS=({label:e,icon:t,onClick:r,isActive:n,mobileOnly:o,desktopOnly:i})=>p.jsx("li",{className:fi({active:n,mobileOnly:o,desktopOnly:i}),children:r&&p.jsxs("div",{className:fi("link"),onClick:r,children:[t&&p.jsx("span",{className:fi("linkIcon"),children:t}),p.jsx("span",{className:fi("linkLabel"),children:e})]})}),RS=({items:e,mobileActions:t})=>p.jsxs("nav",{className:Qa(),children:[p.jsx("ul",{className:Qa("list"),children:Object.entries(e).map(([r,n])=>p.jsx(LS,D({},n),r))}),t&&p.jsx("div",{className:Qa("mobileActions"),children:t})]});z();var hg=e=>D({enabled:!0,waitForStyles:!0,syncHostStyles:!0},e),zd=ee("Puck",Nc),hi=ee("PuckLayout",Nc),jd=ee("PuckPluginTab",Nc),FS=typeof window>"u"?y.useEffect:y.useLayoutEffect,BS=()=>{const e=J("label-page"),t=N(r=>{var n,o,i;return r.selectedItem?(o=(n=r.config.components[r.selectedItem.type])==null?void 0:n.label)!=null?o:r.selectedItem.type.toString():(i=r.config.root)==null?void 0:i.label});return p.jsx(wS,{noBorderTop:!0,showBreadcrumbs:!0,title:t||e,children:p.jsx(Rc,{})})},NS=({children:e,visible:t,mobileOnly:r})=>p.jsx("div",{className:jd({visible:t,mobileOnly:r}),children:p.jsx("div",{className:jd("body"),children:e})}),vg=({children:e})=>{var t,r;const{iframe:n,initialHistory:o,plugins:i,height:a}=_a(),s=N(Q=>Q.dnd),l=y.useMemo(()=>hg(n),[n]);rS();const c=N(Q=>Q.dispatch),d=N(Q=>Q.state.ui.leftSideBarVisible),u=N(Q=>Q.state.ui.rightSideBarVisible),f=N(Q=>Q.instanceId),{width:v,setWidth:h,sidebarRef:m,handleResizeEnd:b}=Id("left",c),{width:S,setWidth:x,sidebarRef:_,handleResizeEnd:g}=Id("right",c);y.useEffect(()=>{window.matchMedia("(min-width: 638px)").matches||c({type:"setUi",ui:{leftSideBarVisible:!1,rightSideBarVisible:!1}});const Q=()=>{window.matchMedia("(min-width: 638px)").matches||c({type:"setUi",ui:ie=>D(D({},ie),ie.rightSideBarVisible?{leftSideBarVisible:!1}:{})})};return window.addEventListener("resize",Q),()=>{window.removeEventListener("resize",Q)}},[]);const j=N(Q=>Q.overrides),w=y.useMemo(()=>j.puck||Qs,[j]),[A,E]=y.useState(!1);FS(()=>{E(!0)},[]);const I=N(Q=>Q.status==="READY");R_(),y.useEffect(()=>{if(I&&l.enabled){const Q=ft();if(Q)return rp(Q)}},[I,l.enabled]),gS(),OS();const k={};v&&(k["--puck-user-sidebar-left-width"]=`${v}px`),S&&(k["--puck-user-sidebar-right-width"]=`${S}px`);const P=N(Q=>Q.setUi),T=N(Q=>{var ie;return(ie=Q.state.ui.plugin)==null?void 0:ie.current}),F=me(),H=y.useMemo(()=>!!i?.find(Q=>Q.name==="legacy-side-bar"),[i]),R=J("plugin-blocks"),L=J("plugin-outline"),U=J("plugin-fields"),Y=y.useMemo(()=>{const Q={},ie=[Lw({label:R}),L2({label:L})],Ie=C=>C.name==="legacy-side-bar"?-1:0,V=[...ie,...i??[]].sort((C,M)=>Ie(C)-Ie(M));return i?.some(C=>C.name==="fields")||V.push(Y2({label:U})),V?.forEach(C=>{var M,O,q;C.name&&C.render&&(Q[C.name]&&delete Q[C.name],Q[C.name]={label:(M=C.label)!=null?M:C.name,icon:(O=C.icon)!=null?O:p.jsx(P_,{}),onClick:()=>{C.name===T?P(d?{leftSideBarVisible:!1}:{leftSideBarVisible:!0}):C.name&&P({plugin:{current:C.name},leftSideBarVisible:!0})},isActive:d&&T===C.name,render:C.render,mobilePanelHeight:(q=C.mobilePanelHeight)!=null?q:"toggle",mobileOnly:H||C.mobileOnly,desktopOnly:C.name==="legacy-side-bar"||C.desktopOnly})}),Q},[i,T,F,d,R,L,U]),$=T??Object.keys(Y)[0],K=(r=(t=Y[$])==null?void 0:t.mobilePanelHeight)!=null?r:"toggle";y.useEffect(()=>{if(!T){const Q=Object.keys(Y);P({plugin:{current:Q[0]}})}},[Y,T]);const oe=Y.fields&&Y.fields.mobileOnly===!1,Z=N(Q=>{var ie;return(ie=Q.state.ui.mobilePanelExpanded)!=null?ie:!1}),re=J("layout-maximize"),xe=J("layout-minimize");return p.jsxs("div",{className:`Puck ${zd({hidePlugins:H})}`,id:f,style:{height:a,visibility:"hidden"},children:[p.jsx(Q0,{disableAutoScroll:s?.disableAutoScroll,behavior:s?.behavior,children:p.jsx(w,{children:e||p.jsx(CS,{children:p.jsx("div",{className:hi({leftSideBarVisible:d,mounted:A,rightSideBarVisible:!oe&&u,isExpanded:Z,mobilePanelHeightToggle:K==="toggle",mobilePanelHeightMinContent:K==="min-content"}),style:{height:a},children:p.jsxs("div",{className:hi("inner"),style:k,children:[p.jsx("div",{className:hi("header"),children:p.jsx(kS,{hidePlugins:H})}),p.jsx("div",{className:hi("nav"),children:p.jsx(RS,{items:Y,mobileActions:d&&K==="toggle"&&p.jsx(Ue,{type:"button",title:Z?xe:re,onClick:()=>{P({mobilePanelExpanded:!Z})},children:Z?p.jsx(m_,{size:21}):p.jsx(g_,{size:21})})})}),p.jsx(Cd,{position:"left",sidebarRef:m,isVisible:d,onResize:h,onResizeEnd:b,children:Object.entries(Y).map(([Q,{mobileOnly:ie,render:Ie,label:V}])=>p.jsx(NS,{visible:T===Q,mobileOnly:ie,children:p.jsx(Ie,{})},Q))}),p.jsx(zS,{}),!oe&&p.jsx(Cd,{position:"right",sidebarRef:_,isVisible:u,onResize:x,onResizeEnd:g,children:p.jsx(BS,{})})]})})})})}),p.jsx("div",{id:"puck-portal-root",className:zd("portal")})]})},gg=y.createContext({});function $S(e){return p.jsx(gg.Provider,{value:e,children:e.children})}var _a=()=>y.useContext(gg);function HS({children:e}){const{config:t,data:r,ui:n,onChange:o,permissions:i={},plugins:a,overrides:s,viewports:l=go,iframe:c,dnd:d,initialHistory:u,metadata:f,dictionary:v,onAction:h,fieldTransforms:m,_experimentalFullScreenCanvas:b,_experimentalVirtualization:S}=_a(),x=y.useMemo(()=>hg(c),[c]),[_]=y.useState(()=>{var R,L,U;const Y=D(D({},os.ui),n);let $={};Object.keys(r?.root||{}).length>0&&!((R=r?.root)!=null&&R.props)&&console.warn("Warning: Defining props on `root` is deprecated. Please use `root.props`, or republish this page to migrate automatically.");const K=((L=r?.root)==null?void 0:L.props)||r?.root||{},oe=D(D({},(U=t.root)==null?void 0:U.defaultProps),K),Z=sl(bn(B(D({},r?.root),{props:oe})),t),re=B(D({},os),{data:B(D({},r),{root:B(D({},r?.root),{props:Z.props}),content:r.content||[]}),ui:B(D(D({},Y),$),{componentList:t.categories?Object.entries(t.categories).reduce((xe,[Q,ie])=>B(D({},xe),{[Q]:{title:ie.title,components:ie.components,expanded:ie.defaultExpanded,visible:ie.visible}}),{}):{}})});return ht(re,t)}),{appendData:g=!0}=u||{},[j]=y.useState([...u?.histories||[],...g?[{state:_}]:[]].map(R=>{let L=D(D({},_),R.state);return R.state.indexes||(L=ht(L,t)),B(D({},R),{state:L})})),w=y.useMemo(()=>u?.index!==void 0&&u?.index>=0&&u?.index<j.length?u?.index:j.length-1,[]),A=j[w].state,E=vS({overrides:s,plugins:a}),I=y.useMemo(()=>{const L=(a||[]).reduce((U,Y)=>D(D({},U),Y.fieldTransforms),{});return D(D({},L),m)},[m,a]),k=ga(),P=y.useCallback(R=>({instanceId:k,state:R,config:t,plugins:a||[],overrides:E,viewports:l,iframe:x,_experimentalFullScreenCanvas:!!b,_experimentalVirtualization:!!S,onAction:h,metadata:f,dictionary:v||{},dnd:d,fieldTransforms:I}),[k,A,t,a,E,l,x,b,S,h,f,v,d,I]),[T]=y.useState(()=>np(P(A)));y.useEffect(()=>{},[T]),y.useEffect(()=>{const R=T.getState().state;T.setState(D({},P(R)))},[P]),N_(T,{histories:j,index:w,initialAppState:A});const F=y.useRef(null);y.useEffect(()=>T.subscribe(R=>R.state.data,R=>{if(o){if(vo(R,F.current))return;o(R),F.current=R}}),[o]),W_(T,i);const H=Pw(T);return y.useEffect(()=>{const{resolveAndCommitData:R}=T.getState();setTimeout(()=>{R()},0)},[]),p.jsx(pl.Provider,{value:T,children:p.jsx(Ov.Provider,{value:H,children:e})})}function Vo(e){return p.jsx($S,B(D({},e),{children:p.jsx(HS,B(D({},e),{children:p.jsx(vg,{children:e.children})}))}))}Vo.Components=Rv;Vo.Fields=Rc;Vo.Layout=vg;Vo.Outline=Jv;Vo.Preview=cg;z();z();z();z();z();z();z();z();z();z();z();z();z();z();export{cl as A,vp as E,Xm as H,Ly as L,Vo as P,fl as S,B as _,N as a,D as b,hp as c,Oe as d,dy as e,fy as f,ee as g,vy as h,z as i,Ji as j,aI as k,oI as o,Md as s,me as u};

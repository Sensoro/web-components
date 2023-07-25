import{x as k,A as y,T,i as _}from"./lit-element-09a219a1.js";import{i as A,t as E,e as O,S as V,o as j,n as S,a as H,A as B}from"./AccountBookFilled-8e9b622d.js";/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const G=Symbol.for(""),N=t=>{if((t==null?void 0:t.r)===G)return t==null?void 0:t._$litStatic$},$=new Map,P=t=>(e,...n)=>{const r=n.length;let o,i;const s=[],u=[];let l,c=0,h=!1;for(;c<r;){for(l=e[c];c<r&&(i=n[c],(o=N(i))!==void 0);)l+=o+e[++c],h=!0;c!==r&&u.push(i),s.push(l),c++}if(c===r&&s.push(e[r]),h){const v=s.join("$$lit$$");(e=$.get(v))===void 0&&(s.raw=s,$.set(v,e=s)),n=u}return t(e,...n)},z=P(k);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class d extends A{constructor(e){if(super(e),this.et=y,e.type!==E.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===y||e==null)return this.ft=void 0,this.et=e;if(e===T)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.ft;this.et=e;const n=[e];return n.raw=n,this.ft={_$litType$:this.constructor.resultType,strings:n,values:[]}}}d.directiveName="unsafeHTML",d.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class f extends d{}f.directiveName="unsafeSVG",f.resultType=2;const I=O(f),L=_`
  /* stylelint-disable no-duplicate-selectors */
  /* stylelint-disable */
  /* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */
  .s-icon {
    display: inline-flex;
    align-items: center;
    color: inherit;
    font-style: normal;
    line-height: 0;
    text-align: center;
    text-transform: none;
    vertical-align: -0.125em;
    text-rendering: optimizeLegibility;
  }
  .s-icon > * {
    line-height: 1;
  }
  .s-icon svg {
    display: inline-block;
  }
  .s-icon::before {
    display: none;
  }
  .s-icon[tabindex] {
    cursor: pointer;
  }
  .s-icon-spin,
  .s-icon-spin::before {
    display: inline-block;
    animation: loadingCircle 1s infinite linear;
  }
  @-webkit-keyframes loadingCircle {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes loadingCircle {
    100% {
      transform: rotate(360deg);
    }
  }
`,M={primaryColor:"#333",secondaryColor:"#E6E6E6"};function D(t,e={}){if(typeof t.icon=="function"){const n=e.placeholders||M;return g(t.icon(n.primaryColor,n.secondaryColor),e)}return g(t.icon,e)}function g(t,e){const n=t.tag==="svg"?{...t.attrs,...e.extraSVGAttrs||{}}:t.attrs,r=Object.keys(n).reduce((s,u)=>{const l=u,c=n[l],h=`${l}="${c}"`;return s.push(h),s},[]),o=r.length?" "+r.join(" "):"",i=(t.children||[]).map(s=>g(s,e)).join("");return i&&i.length?`<${t.tag}${o}>${i}</${t.tag}>`:`<${t.tag}${o} />`}var F=Object.defineProperty,q=Object.getOwnPropertyDescriptor,m=(t,e,n,r)=>{for(var o=r>1?void 0:r?q(e,n):e,i=t.length-1,s;i>=0;i--)(s=t[i])&&(o=(r?s(e,n,o):s(o))||o);return r&&o&&F(e,n,o),o};const b="s-icon";let a=class extends V{constructor(){super(...arguments),this.spin=!1,this.icon=null}connectedCallback(){super.connectedCallback()}render(){return z`
      <span
        role="img"
        class=${j({[b]:!0,[`${b}-spin`]:this.spin})}
      >
        ${this.icon?I(D(this.icon,{extraSVGAttrs:{width:"1em",height:"1em",fill:"currentcolor"}})):""}
      </span>
    `}};a.styles=L;m([S({type:Boolean,reflect:!0})],a.prototype,"spin",2);m([S({type:Object})],a.prototype,"icon",2);a=m([H("s-icon")],a);const J={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v584zM639.5 414h-45c-3 0-5.8 1.7-7.1 4.4L514 563.8h-2.8l-73.4-145.4a8 8 0 0 0-7.1-4.4h-46c-1.3 0-2.7.3-3.8 1-3.9 2.1-5.3 7-3.2 10.9l89.3 164h-48.6c-4.4 0-8 3.6-8 8v21.3c0 4.4 3.6 8 8 8h65.1v33.7h-65.1c-4.4 0-8 3.6-8 8v21.3c0 4.4 3.6 8 8 8h65.1V752c0 4.4 3.6 8 8 8h41.3c4.4 0 8-3.6 8-8v-53.8h65.4c4.4 0 8-3.6 8-8v-21.3c0-4.4-3.6-8-8-8h-65.4v-33.7h65.4c4.4 0 8-3.6 8-8v-21.3c0-4.4-3.6-8-8-8h-49.1l89.3-164.1c.6-1.2 1-2.5 1-3.8.1-4.4-3.4-8-7.9-8z"}}]},name:"account-book",theme:"outlined"},K=J;new a;const U={title:"Icon",render:()=>k`
      <span>
        <s-icon .icon=${B}></s-icon>
        <s-icon .icon=${K}></s-icon>
      </span>
    `,tags:["docsPage"],argTypes:{color:{options:["default","primary"],control:{type:"select"}}},args:{type:"primary"}},p={args:{}};var x,C,w;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {}
}`,...(w=(C=p.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};const W=["Color"];export{p as Color,W as __namedExportsOrder,U as default};
//# sourceMappingURL=icon.stories-3bcdfacd.js.map

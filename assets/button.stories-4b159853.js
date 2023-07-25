import{A as R,i as V,x as p}from"./lit-element-09a219a1.js";import{S as j,o as F,n as c,a as G,A as I}from"./AccountBookFilled-8e9b622d.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H=({finisher:e,descriptor:t})=>(o,r)=>{var s;if(r===void 0){const n=(s=o.originalKey)!==null&&s!==void 0?s:o.key,l=t!=null?{kind:"method",placement:"prototype",key:n,descriptor:t(o.key)}:{...o,key:n};return e!=null&&(l.finisher=function(q){e(q,n)}),l}{const n=o.constructor;t!==void 0&&Object.defineProperty(o,r,t(r)),e==null||e(n,r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function K(e,t){return H({descriptor:o=>{const r={get(){var s,n;return(n=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(e))!==null&&n!==void 0?n:null},enumerable:!0,configurable:!0};if(t){const s=typeof o=="symbol"?Symbol():"__"+o;r.get=function(){var n,l;return this[s]===void 0&&(this[s]=(l=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(e))!==null&&l!==void 0?l:null),this[s]}}return r}})}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const U=e=>e??R;class X{constructor(t,...o){this.slotNames=[],this.handleSlotChange=r=>{const s=r.target;(this.slotNames.includes("[default]")&&!s.name||s.name&&this.slotNames.includes(s.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=o}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===t.ELEMENT_NODE){const o=t;if(o.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!o.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}}const J={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",stroke:"none"},children:[{tag:"defs",attrs:{},children:[{tag:"linearGradient",attrs:{id:"sen__30__a",x1:"100%",x2:"100%",y1:"80%",y2:"0%"},children:[{tag:"stop",attrs:{offset:"0%","stop-color":"currentColor","stop-opacity":".5"}},{tag:"stop",attrs:{offset:"100%","stop-color":"currentColor"}}]},{tag:"linearGradient",attrs:{id:"sen__30__b",x1:"0%",x2:"0%",y1:"0%",y2:"80%"},children:[{tag:"stop",attrs:{offset:"0%","stop-color":"currentColor","stop-opacity":"0"}},{tag:"stop",attrs:{offset:"100%","stop-color":"currentColor","stop-opacity":".5"}}]}]},{tag:"path",attrs:{fill:"url(#sen__30__a)",d:"M512 64v76.03A369.92 369.92 0 0 0 248.96 248.9 370.43 370.43 0 0 0 140.03 512a369.92 369.92 0 0 0 108.93 263.04A370.43 370.43 0 0 0 512 883.97V960a448 448 0 0 1 0-896z"}},{tag:"path",attrs:{fill:"url(#sen__30__b)",d:"M960 512a448 448 0 0 1-432.64 447.74L512 960v-76.03c50.3 0 99-9.8 144.64-29.19a372.03 372.03 0 0 0 118.4-79.8A369.09 369.09 0 0 0 883.97 512l76.03.06z"}}]},name:"loading",theme:"purely"},Q=J,W=V`
  /* stylelint-disable no-duplicate-selectors */
  /* stylelint-disable */
  /* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */
  .s-btn {
    outline: none;
    position: relative;
    display: inline-block;
    font-weight: 400;
    white-space: nowrap;
    text-align: center;
    background-image: none;
    background-color: transparent;
    border: var(--s-line-width) solid transparent;
    cursor: pointer;
    user-select: none;
    touch-action: manipulation;
    color: var(--s-color-text);
    font-size: var(--s-font-size);
    height: var(--s-control-height);
    line-height: var(--s-line-height);
    padding: 4px 11px;
    border-radius: var(--s-border-radius-small);
  }
  .s-btn .s-btn-icon {
    line-height: 0;
  }
  .s-btn[disabled] {
    cursor: not-allowed;
  }
  .s-btn:disabled > * {
    pointer-events: none;
  }
  .s-btn > span {
    display: inline-block;
  }
  .s-btn-default {
    background-color: var(--s-color-grey-opacity-1);
  }
  .s-btn-default:hover:not(:disabled) {
    background-color: var(--s-color-grey-opacity-3);
  }
  .s-btn-default:focus:not(:disabled),
  .s-btn-default:active:not(:disabled) {
    background-color: var(--s-color-grey-opacity-4);
  }
  .s-btn-default:disabled {
    color: var(--s-color-grey-opacity-6);
    background: var(--s-color-grey-opacity-2);
  }
  .s-btn-primary {
    border-color: var(--s-color-primary);
    background-color: var(--s-color-primary);
    color: var(--s-color-white);
  }
  .s-btn-primary:focus:not(:disabled),
  .s-btn-primary:hover:not(:disabled) {
    border-color: var(--s-color-primary-hover);
    background-color: var(--s-color-primary-hover);
  }
  .s-btn-primary:active:not(:disabled) {
    border-color: var(--s-color-primary-active);
    background-color: var(--s-color-primary-active);
  }
  .s-btn-primary:disabled {
    border-color: var(--s-color-primary-disabled);
    background-color: var(--s-color-primary-disabled);
  }
  .s-btn-dashed {
    color: var(--s-color-primary);
    border-style: dashed;
    border-color: var(--s-color-grey-opacity-4);
    background-color: var(--s-color-grey-opacity-1);
  }
  .s-btn-dashed:focus:not(:disabled),
  .s-btn-dashed:hover:not(:disabled) {
    background-color: var(--s-color-grey-opacity-3);
  }
  .s-btn-dashed:active:not(:disabled) {
    background-color: var(--s-color-grey-opacity-4);
  }
  .s-btn-dashed:disabled {
    color: var(--s-color-primary-disabled);
  }
  .s-btn-block {
    width: 100%;
  }
  .s-btn-icon-only {
    width: var(--s-control-height);
    padding-inline-start: 0;
    padding-inline-end: 0;
  }
  .s-btn-loading {
    pointer-events: none;
    cursor: not-allowed;
  }
  .s-btn-loading .s-btn-icon {
    display: none;
  }
  .s-btn-circle {
    min-width: var(--s-control-height);
    padding-inline-start: 0;
    padding-inline-end: 0;
    border-radius: 50%;
  }
  .s-btn-sm {
    font-size: var(--s-font-size-sm);
    height: var(--s-control-height-sm);
    line-height: var(--s-line-height-sm);
    padding: 1.6px 7px;
  }
  .s-btn-sm.s-btn-icon-only {
    width: var(--s-control-height-sm);
    padding-inline-start: 0;
    padding-inline-end: 0;
  }
  .s-btn-sm.s-btn-circle {
    width: var(--s-control-height-sm);
    padding-inline-start: 0;
    padding-inline-end: 0;
    border-radius: 50%;
  }
  .s-btn-lg {
    font-size: var(--s-font-size-lg);
    height: var(--s-control-height-lg);
    line-height: var(--s-line-height-lg);
    padding: 6.4px 15px;
  }
  .s-btn-lg.s-btn-icon-only {
    width: var(--s-control-height-lg);
    padding-inline-start: 0;
    padding-inline-end: 0;
  }
  .s-btn-lg.s-btn-circle {
    width: var(--s-control-height-lg);
    padding-inline-start: 0;
    padding-inline-end: 0;
    border-radius: 50%;
  }
`;var Y=Object.defineProperty,Z=Object.getOwnPropertyDescriptor,i=(e,t,o,r)=>{for(var s=r>1?void 0:r?Z(t,o):t,n=e.length-1,l;n>=0;n--)(l=e[n])&&(s=(r?l(t,o,s):l(s))||s);return r&&s&&Y(t,o,s),s};const d="s-btn",ee={small:"sm",middle:void 0,large:"lg"};let a=class extends j{constructor(){super(...arguments),this.hasSlotController=new X(this,"[default]","icon"),this.type="default",this.shape="default",this.disabled=!1,this.loading=!1,this.ghost=!1,this.danger=!1,this.block=!1,this.href=""}isLink(){return!!this.href}render(){const e=this.isLink(),t=this.size&&ee[this.size]||"";return p`
      <button
        part="base"
        class=${F({[d]:!0,[`${d}-icon-only`]:!this.hasSlotController.test("[default]")&&this.hasSlotController.test("icon"),[`${d}-${this.shape}`]:this.shape!=="default"&&this.shape,[`${d}-${this.type}`]:this.type,[`${d}-${t}`]:!!t,[`${d}-block`]:this.block,[`${d}-loading`]:this.loading,[`${d}-dangerous`]:this.danger})}
        ?disabled=${U(e?void 0:this.disabled)}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
      >
        ${this.loading?p`<s-icon spin .icon=${Q}></s-icon>`:""}
        <slot name="icon" part="icon" class="${d}-icon"></slot>
        <slot part="label"></slot>
      </button>
    `}};a.styles=W;i([K(`.${d}`)],a.prototype,"button",2);i([c({reflect:!0})],a.prototype,"type",2);i([c({reflect:!0})],a.prototype,"shape",2);i([c({reflect:!0})],a.prototype,"size",2);i([c({type:Boolean,reflect:!0})],a.prototype,"disabled",2);i([c({type:Boolean,reflect:!0})],a.prototype,"loading",2);i([c({type:Boolean,reflect:!0})],a.prototype,"ghost",2);i([c({type:Boolean,reflect:!0})],a.prototype,"danger",2);i([c({type:Boolean,reflect:!0})],a.prototype,"block",2);i([c()],a.prototype,"href",2);a=i([G("s-button")],a);const f=/^[\u4e00-\u9fa5]{2}$/;f.test.bind(f);const te=["default","primary","ghost","dashed","link","text"],se=["default","circle","round"],oe={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.6 854.5 649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"}}]},name:"search",theme:"outlined"},M=oe;new a;const ae={title:"Button",component:"s-button",tags:["docsPage"],argTypes:{type:{description:"设置按钮类型",options:te,table:{defaultValue:{summary:"default"}},control:{type:"select"}},shape:{description:"设置按钮形状",options:se,table:{defaultValue:{summary:"default"}},control:{type:"select"}},size:{description:"设置按钮大小",options:["small","middle","large"],table:{defaultValue:{summary:"middle"}},control:{type:"select"}},disabled:{description:"设置按钮失效状态",control:{type:"boolean"}},loading:{description:"设置按钮载入状态",control:{type:"boolean"}},block:{description:"将按钮宽度调整为其父宽度的选项",control:{type:"boolean"}}},parameters:{docs:{description:{component:`
按钮用于开始一个即时操作。

## 何时使用

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

我们提供了五种按钮。

- 主按钮：用于主行动点，一个操作区域只能有一个主按钮。
- 默认按钮：用于没有主次之分的一组行动点。
- 虚线按钮：常用于添加操作。
- 文本按钮：用于最次级的行动点。
- 链接按钮：一般用于链接，即导航至某位置。
        `}}},args:{type:"default",size:"middle"}},b={name:"default",render:e=>p`
    <s-button
      type=${e.type}
      size=${e.size}
      ?loading=${e.loading}
      ?disabled=${e.disabled}
    >
      默认按钮
    </s-button>
  `,args:{}},u={name:"type",render:e=>p`
    <s-button type="primary" size=${e.size} ?disabled=${e.disabled}>主要按钮</s-button>
    <s-button size=${e.size} ?disabled=${e.disabled}>默认按钮</s-button>
    <s-button type="dashed" size=${e.size} ?disabled=${e.disabled}>虚框按钮</s-button>
  `,args:{type:"primary"}},h={name:"icon",render:e=>p`
    <s-button type=${e.type} ?loading=${e.loading} size=${e.size} ?disabled=${e.disabled}>
      <s-icon slot="icon" .icon=${I}></s-icon>
      主要按钮
    </s-button>
    <s-button type=${e.type} ?loading=${e.loading} size=${e.size} ?disabled=${e.disabled}>
      <s-icon slot="icon" .icon=${M}></s-icon>
    </s-button>
  `,args:{}},g={name:"size",render:e=>p`
    <s-button size="large" ?disabled=${e.disabled} type=${e.type}>主要按钮</s-button>
    <s-button size="middle" ?disabled=${e.disabled} type=${e.type}>默认按钮</s-button>
    <s-button size="small" ?disabled=${e.disabled} type=${e.type}>虚框按钮</s-button>
  `,args:{size:"small"}},y={name:"block",render:e=>p` <s-button type=${e.type} block>主要按钮</s-button> `,args:{type:"primary"}},m={name:"circle",render:e=>p`
    <s-button type=${e.type} size=${e.size} ?disabled=${e.disabled} shape="circle">A</s-button>
    <s-button type=${e.type} size=${e.size} ?disabled=${e.disabled} shape="circle">
      <s-icon slot="icon" .icon=${M}></s-icon>
    </s-button>
  `,args:{type:"primary"}};var $,v,z;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'default',
  render: args => html\`
    <s-button
      type=\${args.type}
      size=\${args.size}
      ?loading=\${args.loading}
      ?disabled=\${args.disabled}
    >
      默认按钮
    </s-button>
  \`,
  args: {}
}`,...(z=(v=b.parameters)==null?void 0:v.docs)==null?void 0:z.source}}};var k,S,C;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'type',
  render: args => html\`
    <s-button type="primary" size=\${args.size} ?disabled=\${args.disabled}>主要按钮</s-button>
    <s-button size=\${args.size} ?disabled=\${args.disabled}>默认按钮</s-button>
    <s-button type="dashed" size=\${args.size} ?disabled=\${args.disabled}>虚框按钮</s-button>
  \`,
  args: {
    type: 'primary'
  }
}`,...(C=(S=u.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var _,w,x;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'icon',
  render: args => html\`
    <s-button type=\${args.type} ?loading=\${args.loading} size=\${args.size} ?disabled=\${args.disabled}>
      <s-icon slot="icon" .icon=\${AccountBookFilled}></s-icon>
      主要按钮
    </s-button>
    <s-button type=\${args.type} ?loading=\${args.loading} size=\${args.size} ?disabled=\${args.disabled}>
      <s-icon slot="icon" .icon=\${SearchOutlined}></s-icon>
    </s-button>
  \`,
  args: {}
}`,...(x=(w=h.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var B,N,O;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'size',
  render: args => html\`
    <s-button size="large" ?disabled=\${args.disabled} type=\${args.type}>主要按钮</s-button>
    <s-button size="middle" ?disabled=\${args.disabled} type=\${args.type}>默认按钮</s-button>
    <s-button size="small" ?disabled=\${args.disabled} type=\${args.type}>虚框按钮</s-button>
  \`,
  args: {
    size: 'small'
  }
}`,...(O=(N=g.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var A,E,L;y.parameters={...y.parameters,docs:{...(A=y.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'block',
  render: args => html\` <s-button type=\${args.type} block>主要按钮</s-button> \`,
  args: {
    type: 'primary'
  }
}`,...(L=(E=y.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var T,D,P;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'circle',
  render: args => html\`
    <s-button type=\${args.type} size=\${args.size} ?disabled=\${args.disabled} shape="circle">A</s-button>
    <s-button type=\${args.type} size=\${args.size} ?disabled=\${args.disabled} shape="circle">
      <s-icon slot="icon" .icon=\${SearchOutlined}></s-icon>
    </s-button>
  \`,
  args: {
    type: 'primary'
  }
}`,...(P=(D=m.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};const ie=["ButtonDefault","Type","Icon","Size","Block","Circle"];export{y as Block,b as ButtonDefault,m as Circle,h as Icon,g as Size,u as Type,ie as __namedExportsOrder,ae as default};
//# sourceMappingURL=button.stories-4b159853.js.map

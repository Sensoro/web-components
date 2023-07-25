import{T as h,s as u}from"./lit-element-09a219a1.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const v={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},p=e=>(...t)=>({_$litDirective$:e,values:t});let f=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,n){this._$Ct=t,this._$AM=i,this._$Ci=n}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const A=p(class extends f{constructor(e){var t;if(super(e),e.type!==v.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var i,n;if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in t)t[s]&&!(!((i=this.nt)===null||i===void 0)&&i.has(s))&&this.it.add(s);return this.render(t)}const r=e.element.classList;this.it.forEach(s=>{s in t||(r.remove(s),this.it.delete(s))});for(const s in t){const o=!!t[s];o===this.it.has(s)||!((n=this.nt)===null||n===void 0)&&n.has(s)||(o?(r.add(s),this.it.add(s)):(r.remove(s),this.it.delete(s)))}return h}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $=e=>t=>typeof t=="function"?((i,n)=>(customElements.define(i,n),n))(e,t):((i,n)=>{const{kind:r,elements:s}=n;return{kind:r,elements:s,finisher(o){customElements.define(i,o)}}})(e,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const m=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(i){i.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}},E=(e,t,i)=>{t.constructor.createProperty(i,e)};function l(e){return(t,i)=>i!==void 0?E(e,t,i):m(e,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var c;((c=window.HTMLSlotElement)===null||c===void 0?void 0:c.prototype.assignedElements)!=null;var y=Object.defineProperty,T=Object.getOwnPropertyDescriptor,a=(e,t,i,n)=>{for(var r=n>1?void 0:n?T(t,i):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(r=(n?o(t,i,r):o(r))||r);return n&&r&&y(t,i,r),r};class d extends u{emit(t,i){const n=new CustomEvent(t,{bubbles:!0,cancelable:!1,composed:!0,detail:{},...i});return this.dispatchEvent(n),n}}a([l()],d.prototype,"dir",2);a([l()],d.prototype,"lang",2);const _={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zM648.3 426.8l-87.7 161.1h45.7c5.5 0 10 4.5 10 10v21.3c0 5.5-4.5 10-10 10h-63.4v29.7h63.4c5.5 0 10 4.5 10 10v21.3c0 5.5-4.5 10-10 10h-63.4V752c0 5.5-4.5 10-10 10h-41.3c-5.5 0-10-4.5-10-10v-51.8h-63.1c-5.5 0-10-4.5-10-10v-21.3c0-5.5 4.5-10 10-10h63.1v-29.7h-63.1c-5.5 0-10-4.5-10-10v-21.3c0-5.5 4.5-10 10-10h45.2l-88-161.1c-2.6-4.8-.9-10.9 4-13.6 1.5-.8 3.1-1.2 4.8-1.2h46c3.8 0 7.2 2.1 8.9 5.5l72.9 144.3 73.2-144.3a10 10 0 0 1 8.9-5.5h45c5.5 0 10 4.5 10 10 .1 1.7-.3 3.3-1.1 4.8z"}}]},name:"account-book",theme:"filled"},w=_;export{w as A,d as S,$ as a,p as e,f as i,l as n,A as o,v as t};
//# sourceMappingURL=AccountBookFilled-8e9b622d.js.map

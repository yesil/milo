/* eslint-disable */
/* Generated by Milo */

import{html as h,SizedMixin as v,SpectrumElement as d}from"/libs/features/spectrum-web-components/dist/base.js";import{property as f}from"/libs/features/spectrum-web-components/dist/base.js";import{css as c}from"/libs/features/spectrum-web-components/dist/base.js";var l=c`
:host([size=s]){--spectrum-buttongroup-spacing-horizontal:var(--spectrum-spacing-200);--spectrum-buttongroup-spacing-vertical:var(--spectrum-spacing-200)}:host,:host([size=l]),:host([size=xl]){--spectrum-buttongroup-spacing-horizontal:var(--spectrum-spacing-300);--spectrum-buttongroup-spacing-vertical:var(--spectrum-spacing-300)}:host{display:flex;flex-wrap:wrap;gap:var(
--mod-buttongroup-spacing-horizontal,var(--spectrum-buttongroup-spacing-horizontal)
);justify-content:var(--mod-buttongroup-justify-content,normal)}::slotted(*){flex-shrink:0}:host([vertical]){display:inline-flex;flex-direction:column;gap:var(
--mod-buttongroup-spacing-vertical,var(--spectrum-buttongroup-spacing-vertical)
)}:host([vertical]) ::slotted(sp-action-button){--spectrum-actionbutton-label-flex-grow:1}:host([dir=ltr][vertical]) ::slotted(sp-action-button){--spectrum-actionbutton-label-text-align:left}:host([dir=rtl][vertical]) ::slotted(sp-action-button){--spectrum-actionbutton-label-text-align:right}
`,p=l;var u=Object.defineProperty,m=Object.getOwnPropertyDescriptor,g=(a,r,o,s)=>{for(var t=s>1?void 0:s?m(r,o):r,i=a.length-1,n;i>=0;i--)(n=a[i])&&(t=(s?n(r,o,t):n(t))||t);return s&&t&&u(r,o,t),t},e=class extends v(d,{noDefaultSize:!0}){constructor(){super(...arguments),this.vertical=!1}static get styles(){return[p]}handleSlotchange({target:r}){r.assignedElements().forEach(o=>{o.size=this.size})}render(){return h`
            <slot @slotchange=${this.handleSlotchange}></slot>
        `}};g([f({type:Boolean,reflect:!0})],e.prototype,"vertical",2);import{defineElement as b}from"/libs/features/spectrum-web-components/dist/base.js";b("sp-button-group",e);

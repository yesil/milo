/* eslint-disable */
/* Generated by Milo */

import{html as c,nothing as v,SizedMixin as x,SpectrumElement as k}from"/libs/features/spectrum-web-components/dist/base.js";import{property as o,query as y}from"/libs/features/spectrum-web-components/dist/base.js";import"/libs/features/spectrum-web-components/dist/icons-ui.js";import z from"/libs/features/spectrum-web-components/dist/icons/asterisk.js";import{conditionAttributeWithId as w,conditionAttributeWithoutId as E}from"/libs/features/spectrum-web-components/dist/base.js";import{ElementResolutionController as T,elementResolverUpdatedSymbol as A}from"/libs/features/spectrum-web-components/dist/reactive-controllers.js";import{css as u}from"/libs/features/spectrum-web-components/dist/base.js";var h=u`
:host{--spectrum-fieldlabel-color:var(
--spectrum-neutral-subdued-content-color-default
);--spectrum-fieldlabel-font-weight:var(--spectrum-regular-font-weight);--spectrum-fieldlabel-line-height:var(--spectrum-line-height-100);--spectrum-fieldlabel-line-height-cjk:var(--spectrum-cjk-line-height-100)}:host([size=s]){--spectrum-fieldlabel-min-height:var(--spectrum-component-height-75);--spectrum-fieldlabel-top-to-text:var(--spectrum-component-top-to-text-75);--spectrum-fieldlabel-bottom-to-text:var(
--spectrum-component-bottom-to-text-75
);--spectrum-fieldlabel-font-size:var(--spectrum-font-size-75);--spectrum-fieldlabel-side-margin-block-start:var(
--spectrum-field-label-top-margin-small
);--spectrum-fieldlabel-side-padding-right:var(--spectrum-spacing-100);--spectrum-field-label-text-to-asterisk:var(
--spectrum-field-label-text-to-asterisk-small
)}:host{--spectrum-fieldlabel-min-height:var(--spectrum-component-height-75);--spectrum-fieldlabel-top-to-text:var(--spectrum-component-top-to-text-75);--spectrum-fieldlabel-bottom-to-text:var(
--spectrum-component-bottom-to-text-75
);--spectrum-fieldlabel-font-size:var(--spectrum-font-size-75);--spectrum-fieldlabel-side-margin-block-start:var(
--spectrum-field-label-top-margin-medium
);--spectrum-fieldlabel-side-padding-right:var(--spectrum-spacing-200);--spectrum-field-label-text-to-asterisk:var(
--spectrum-field-label-text-to-asterisk-medium
)}:host([size=l]){--spectrum-fieldlabel-min-height:var(--spectrum-component-height-100);--spectrum-fieldlabel-top-to-text:var(
--spectrum-component-top-to-text-100
);--spectrum-fieldlabel-bottom-to-text:var(
--spectrum-component-bottom-to-text-100
);--spectrum-fieldlabel-font-size:var(--spectrum-font-size-100);--spectrum-fieldlabel-side-margin-block-start:var(
--spectrum-field-label-top-margin-large
);--spectrum-fieldlabel-side-padding-right:var(--spectrum-spacing-200);--spectrum-field-label-text-to-asterisk:var(
--spectrum-field-label-text-to-asterisk-large
)}:host([size=xl]){--spectrum-fieldlabel-min-height:var(--spectrum-component-height-200);--spectrum-fieldlabel-top-to-text:var(
--spectrum-component-top-to-text-200
);--spectrum-fieldlabel-bottom-to-text:var(
--spectrum-component-bottom-to-text-200
);--spectrum-fieldlabel-font-size:var(--spectrum-font-size-200);--spectrum-fieldlabel-side-margin-block-start:var(
--spectrum-field-label-top-margin-extra-large
);--spectrum-fieldlabel-side-padding-right:var(--spectrum-spacing-200);--spectrum-field-label-text-to-asterisk:var(
--spectrum-field-label-text-to-asterisk-extra-large
)}:host{box-sizing:border-box;font-size:var(
--mod-fieldlabel-font-size,var(--spectrum-fieldlabel-font-size)
);font-weight:var(
--mod-fieldlabel-font-weight,var(--spectrum-fieldlabel-font-weight)
);line-height:var(
--mod-fieldlabel-line-height,var(--spectrum-fieldlabel-line-height)
);min-block-size:var(
--mod-fieldlabel-min-height,var(--spectrum-fieldlabel-min-height)
);padding-block:var(
--mod-field-label-top-to-text,var(--spectrum-fieldlabel-top-to-text)
) var(
--mod-field-label-bottom-to-text,var(--spectrum-fieldlabel-bottom-to-text)
);-webkit-font-smoothing:subpixel-antialiased;-moz-osx-font-smoothing:auto;color:var(--spectrum-fieldlabel-color);display:block;padding-inline:0}:host(:lang(ja)),:host(:lang(ko)),:host(:lang(zh)){line-height:var(
--mod-fieldlabel-line-height-cjk,var(--spectrum-fieldlabel-line-height-cjk)
)}.required-icon{margin-block:0;margin-inline:var(
--mod-field-label-text-to-asterisk,var(--spectrum-field-label-text-to-asterisk)
) 0;vertical-align:var(--mod-field-label-asterisk-vertical-align,baseline)}:host([side-aligned=end]),:host([side-aligned=start]){display:inline-block;margin-block-end:0;margin-block-start:var(
--mod-fieldlabel-side-margin-block-start,var(--spectrum-fieldlabel-side-margin-block-start)
);margin-inline-end:var(
--mod-fieldlabel-side-padding-right,var(--spectrum-fieldlabel-side-padding-right)
);vertical-align:top}:host([side-aligned=end]){text-align:end}:host([disabled]),:host([disabled]) .required-icon{color:var(
--highcontrast-disabled-content-color,var(
--mod-disabled-content-color,var(--spectrum-disabled-content-color)
)
)}@media (forced-colors:active){:host{--highcontrast-disabled-content-color:GrayText}}label{display:inline-block}
`,m=h;var f=Object.defineProperty,g=Object.getOwnPropertyDescriptor,s=(d,e,i,t)=>{for(var l=t>1?void 0:t?g(e,i):e,a=d.length-1,n;a>=0;a--)(n=d[a])&&(l=(t?n(e,i,l):n(l))||l);return t&&l&&f(e,i,l),l},r=class p extends x(k,{noDefaultSize:!0}){constructor(){super(...arguments),this.disabled=!1,this.id="",this.for="",this.required=!1,this.resolvedElement=new T(this)}static get styles(){return[m,z]}handleClick(e){if(!this.target||this.disabled||e.defaultPrevented)return;this.target.focus();let i=this.getRootNode(),t=this.target,l=t.getRootNode(),a=l.host;l===i&&t.forceFocusVisible?t.forceFocusVisible():a&&a.forceFocusVisible&&a.forceFocusVisible()}applyTargetLabel(e){if(this.target=e||this.target,this.target){let i=this.target.applyFocusElementLabel,t=this.target.focusElement||this.target,l=t.getRootNode();typeof i<"u"?i(this.labelText):l===this.getRootNode()?(e?w:E)(t,"aria-labelledby",[this.id]):e?t.setAttribute("aria-label",this.labelText):t.removeAttribute("aria-label")}}async manageTarget(){this.applyTargetLabel();let e=this.resolvedElement.element;if(!e){this.target=e;return}e.localName.search("-")>0&&await customElements.whenDefined(e.localName),typeof e.updateComplete<"u"&&await e.updateComplete,this.applyTargetLabel(e)}get labelText(){let e=this.slotEl.assignedNodes({flatten:!0});return e.length?e.map(i=>(i.textContent||"").trim()).join(" "):""}render(){return c`
            <label>
                <slot></slot>
                ${this.required?c`
                          <sp-icon-asterisk100
                              class="required-icon spectrum-UIIcon-Asterisk100"
                          ></sp-icon-asterisk100>
                      `:v}
            </label>
        `}firstUpdated(e){super.firstUpdated(e),this.addEventListener("click",this.handleClick)}willUpdate(e){this.hasAttribute("id")||this.setAttribute("id",`${this.tagName.toLowerCase()}-${p.instanceCount++}`),e.has("for")&&(this.resolvedElement.selector=this.for?`#${this.for}`:""),(e.has("id")||e.has(A))&&this.manageTarget()}};r.instanceCount=0,s([o({type:Boolean,reflect:!0})],r.prototype,"disabled",2),s([o({type:String})],r.prototype,"id",2),s([o({type:String})],r.prototype,"for",2),s([o({type:Boolean,reflect:!0})],r.prototype,"required",2),s([y("slot")],r.prototype,"slotEl",2),s([o({type:String,reflect:!0,attribute:"side-aligned"})],r.prototype,"sideAligned",2);var b=r;import{defineElement as C}from"/libs/features/spectrum-web-components/dist/base.js";C("sp-field-label",b);

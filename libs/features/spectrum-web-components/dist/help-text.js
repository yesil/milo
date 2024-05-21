/* eslint-disable */
/* Generated by Milo */

import{html as a,nothing as b,SizedMixin as w,SpectrumElement as k}from"/libs/features/spectrum-web-components/dist/base.js";import{property as h}from"/libs/features/spectrum-web-components/dist/base.js";import"/libs/features/spectrum-web-components/dist/icons-workflow.js";import{css as d}from"/libs/features/spectrum-web-components/dist/base.js";var v=d`
    :host{--spectrum-helptext-line-height:var(--spectrum-line-height-100);--spectrum-helptext-content-color-default:var(--spectrum-neutral-subdued-content-color-default);--spectrum-helptext-icon-color-default:var(--spectrum-neutral-subdued-content-color-default);--spectrum-helptext-disabled-content-color:var(--spectrum-disabled-content-color)}:host([variant=neutral]){--spectrum-helptext-content-color-default:var(--spectrum-neutral-subdued-content-color-default);--spectrum-helptext-icon-color-default:var(--spectrum-neutral-subdued-content-color-default)}:host([variant=negative]){--spectrum-helptext-content-color-default:var(--spectrum-negative-color-900);--spectrum-helptext-icon-color-default:var(--spectrum-negative-color-900)}:host([disabled]){--spectrum-helptext-content-color-default:var(--spectrum-helptext-disabled-content-color);--spectrum-helptext-icon-color-default:var(--spectrum-helptext-disabled-content-color)}:host(:lang(ja)),:host(:lang(zh)),:host(:lang(ko)){--spectrum-helptext-line-height-cjk:var(--spectrum-cjk-line-height-100)}:host([size=s]){--spectrum-helptext-min-height:var(--spectrum-component-height-75);--spectrum-helptext-icon-size:var(--spectrum-workflow-icon-size-75);--spectrum-helptext-font-size:var(--spectrum-font-size-75);--spectrum-helptext-text-to-visual:var(--spectrum-text-to-visual-75);--spectrum-helptext-top-to-workflow-icon:var(--spectrum-help-text-top-to-workflow-icon-small);--spectrum-helptext-bottom-to-workflow-icon:var(--spectrum-helptext-top-to-workflow-icon);--spectrum-helptext-top-to-text:var(--spectrum-component-top-to-text-75);--spectrum-helptext-bottom-to-text:var(--spectrum-component-bottom-to-text-75)}:host{--spectrum-helptext-min-height:var(--spectrum-component-height-75);--spectrum-helptext-icon-size:var(--spectrum-workflow-icon-size-100);--spectrum-helptext-font-size:var(--spectrum-font-size-75);--spectrum-helptext-text-to-visual:var(--spectrum-text-to-visual-75);--spectrum-helptext-top-to-workflow-icon:var(--spectrum-help-text-top-to-workflow-icon-medium);--spectrum-helptext-bottom-to-workflow-icon:var(--spectrum-helptext-top-to-workflow-icon);--spectrum-helptext-top-to-text:var(--spectrum-component-top-to-text-75);--spectrum-helptext-bottom-to-text:var(--spectrum-component-bottom-to-text-75)}:host([size=l]){--spectrum-helptext-min-height:var(--spectrum-component-height-100);--spectrum-helptext-icon-size:var(--spectrum-workflow-icon-size-200);--spectrum-helptext-font-size:var(--spectrum-font-size-100);--spectrum-helptext-text-to-visual:var(--spectrum-text-to-visual-100);--spectrum-helptext-top-to-workflow-icon:var(--spectrum-help-text-top-to-workflow-icon-large);--spectrum-helptext-bottom-to-workflow-icon:var(--spectrum-helptext-top-to-workflow-icon);--spectrum-helptext-top-to-text:var(--spectrum-component-top-to-text-100);--spectrum-helptext-bottom-to-text:var(--spectrum-component-bottom-to-text-100)}:host([size=xl]){--spectrum-helptext-min-height:var(--spectrum-component-height-200);--spectrum-helptext-icon-size:var(--spectrum-workflow-icon-size-300);--spectrum-helptext-font-size:var(--spectrum-font-size-200);--spectrum-helptext-text-to-visual:var(--spectrum-text-to-visual-200);--spectrum-helptext-top-to-workflow-icon:var(--spectrum-help-text-top-to-workflow-icon-extra-large);--spectrum-helptext-bottom-to-workflow-icon:var(--spectrum-helptext-top-to-workflow-icon);--spectrum-helptext-top-to-text:var(--spectrum-component-top-to-text-200);--spectrum-helptext-bottom-to-text:var(--spectrum-component-bottom-to-text-200)}@media (forced-colors:active){:host{--highcontrast-helptext-content-color-default:CanvasText;--highcontrast-helptext-icon-color-default:CanvasText;forced-color-adjust:none}.icon,.text{forced-color-adjust:none}}:host{color:var(--highcontrast-helptext-content-color-default,var(--mod-helptext-content-color-default,var(--spectrum-helptext-content-color-default)));font-size:var(--mod-helptext-font-size,var(--spectrum-helptext-font-size));min-block-size:var(--mod-helptext-min-height,var(--spectrum-helptext-min-height));display:flex}.icon{block-size:var(--mod-helptext-icon-size,var(--spectrum-helptext-icon-size));inline-size:var(--mod-helptext-icon-size,var(--spectrum-helptext-icon-size));flex-shrink:0;margin-inline-end:var(--mod-helptext-text-to-visual,var(--spectrum-helptext-text-to-visual));padding-block-start:var(--mod-helptext-top-to-workflow-icon,var(--spectrum-helptext-top-to-workflow-icon));padding-block-end:var(--mod-helptext-bottom-to-workflow-icon,var(--spectrum-helptext-bottom-to-workflow-icon))}.text{line-height:var(--mod-helptext-line-height,var(--spectrum-helptext-line-height));padding-block-start:var(--mod-helptext-top-to-text,var(--spectrum-helptext-top-to-text));padding-block-end:var(--mod-helptext-bottom-to-text,var(--spectrum-helptext-bottom-to-text))}:host(:lang(ja)) .text,:host(:lang(zh)) .text,:host(:lang(ko)) .text{line-height:var(--mod-helptext-line-height-cjk,var(--spectrum-helptext-line-height-cjk))}:host([variant=neutral]) .text{color:var(--highcontrast-helptext-content-color-default,var(--mod-helptext-content-color-default,var(--spectrum-helptext-content-color-default)))}:host([variant=neutral]) .icon{color:var(--highcontrast-helptext-icon-color-default,var(--mod-helptext-icon-color-default,var(--spectrum-helptext-icon-color-default)))}:host([variant=negative]) .text{color:var(--highcontrast-helptext-content-color-default,var(--mod-helptext-content-color-default,var(--spectrum-helptext-content-color-default)))}:host([variant=negative]) .icon{color:var(--highcontrast-helptext-icon-color-default,var(--mod-helptext-icon-color-default,var(--spectrum-helptext-icon-color-default)))}:host([disabled]) .text{color:var(--highcontrast-helptext-content-color-default,var(--mod-helptext-content-color-default,var(--spectrum-helptext-content-color-default)))}:host([disabled]) .icon{color:var(--highcontrast-helptext-icon-color-default,var(--mod-helptext-icon-color-default,var(--spectrum-helptext-icon-color-default)))}
`,c=v;var f=Object.defineProperty,g=Object.getOwnPropertyDescriptor,p=(n,t,e,r)=>{for(var o=r>1?void 0:r?g(t,e):t,s=n.length-1,i;s>=0;s--)(i=n[s])&&(o=(r?i(t,e,o):i(o))||o);return r&&o&&f(t,e,o),o},l=class extends w(k,{noDefaultSize:!0}){constructor(){super(...arguments),this.icon=!1,this.variant="neutral"}static get styles(){return[c]}render(){return a`
            ${this.variant==="negative"&&this.icon?a`
                      <sp-icon-alert class="icon"></sp-icon-alert>
                  `:b}
            <div class="text"><slot></slot></div>
        `}};a([m({type:Boolean,reflect:!0})],s.prototype,"icon",2),a([m({reflect:!0})],s.prototype,"variant",2);import{defineElement as k}from"/libs/features/spectrum-web-components/dist/base.js";k("sp-help-text",s);import{html as z}from"/libs/features/spectrum-web-components/dist/base.js";import{ifDefined as T}from"/libs/features/spectrum-web-components/dist/base.js";import{conditionAttributeWithId as I}from"/libs/features/spectrum-web-components/dist/base.js";import{randomID as u}from"/libs/features/spectrum-web-components/dist/shared.js";var n=class{constructor(t,{mode:e}={mode:"internal"}){this.mode="internal",this.handleSlotchange=({target:r})=>{this.handleHelpText(r),this.handleNegativeHelpText(r)},this.host=t,this.id=`sp-help-text-${u()}`,this.mode=e}get isInternal(){return this.mode==="internal"}render(t){return z`
            <div id=${T(this.isInternal?this.id:void 0)}>
                <slot
                    name=${t?"negative-help-text":`pass-through-help-text-${u()}`}
                    @slotchange=${this.handleSlotchange}
                >
                    <slot name="help-text"></slot>
                </slot>
            </div>
        `}addId(){let t=this.helpTextElement?this.helpTextElement.id:this.id;this.conditionId=I(this.host,"aria-describedby",t),this.host.hasAttribute("tabindex")&&(this.previousTabindex=parseFloat(this.host.getAttribute("tabindex"))),this.host.tabIndex=0}removeId(){this.conditionId&&(this.conditionId(),delete this.conditionId),!this.helpTextElement&&(this.previousTabindex?this.host.tabIndex=this.previousTabindex:this.host.removeAttribute("tabindex"))}handleHelpText(t){if(this.isInternal)return;this.helpTextElement&&this.helpTextElement.id===this.id&&this.helpTextElement.removeAttribute("id"),this.removeId();let e=t.assignedElements()[0];this.helpTextElement=e,e&&(e.id||(e.id=this.id),this.addId())}handleNegativeHelpText(t){t.name==="negative-help-text"&&t.assignedElements().forEach(e=>e.variant="negative")}};function E(l,{mode:t}={mode:"internal"}){class e extends l{constructor(){super(...arguments),this.helpTextManager=new n(this,{mode:t})}get helpTextId(){return this.helpTextManager.id}renderHelpText(o){return this.helpTextManager.render(o)}}return e}export{E as ManageHelpText};

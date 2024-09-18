/* eslint-disable */
/* Generated by Milo */

import{html as s,SpectrumElement as h}from"./base.js";import{property as u}from"./base.js";import"./button.js";import"./icons-workflow.js";import"./icons-workflow.js";import"./icons-workflow.js";import{FocusVisiblePolyfillMixin as b}from"./shared.js";import{css as p}from"./base.js";var m=p`
    :host{--spectrum-toast-font-weight:var(--spectrum-regular-font-weight);--spectrum-toast-font-size:var(--spectrum-font-size-100);--spectrum-toast-corner-radius:var(--spectrum-corner-radius-100);--spectrum-toast-block-size:var(--spectrum-toast-height);--spectrum-toast-max-inline-size:var(--spectrum-toast-maximum-width);--spectrum-toast-border-width:var(--spectrum-border-width-100);--spectrum-toast-line-height:var(--spectrum-line-height-100);--spectrum-toast-line-height-cjk:var(--spectrum-cjk-line-height-100);--spectrum-toast-spacing-icon-to-text:var(--spectrum-text-to-visual-100);--spectrum-toast-spacing-start-edge-to-text-and-icon:var(--spectrum-spacing-300);--spectrum-toast-spacing-text-and-action-button-to-divider:var(--spectrum-spacing-300);--spectrum-toast-spacing-top-edge-to-divider:var(--spectrum-spacing-100);--spectrum-toast-spacing-bottom-edge-to-divider:var(--spectrum-spacing-100);--spectrum-toast-spacing-top-edge-to-icon:var(--spectrum-toast-top-to-workflow-icon);--spectrum-toast-spacing-text-to-action-button-horizontal:var(--spectrum-spacing-300);--spectrum-toast-spacing-close-button:var(--spectrum-spacing-100);--spectrum-toast-spacing-block-start:var(--spectrum-spacing-100);--spectrum-toast-spacing-block-end:var(--spectrum-spacing-100);--spectrum-toast-spacing-top-edge-to-text:var(--spectrum-toast-top-to-text);--spectrum-toast-spacing-bottom-edge-to-text:var(--spectrum-toast-bottom-to-text);--spectrum-toast-negative-background-color-default:var(--spectrum-negative-background-color-default);--spectrum-toast-positive-background-color-default:var(--spectrum-positive-background-color-default);--spectrum-toast-informative-background-color-default:var(--spectrum-informative-background-color-default);--spectrum-toast-text-and-icon-color:var(--spectrum-white);--spectrum-toast-divider-color:var(--spectrum-transparent-white-300)}@media (forced-colors:active){:host{--highcontrast-toast-border-color:ButtonText;border:var(--mod-toast-border-width,var(--spectrum-toast-border-width))solid var(--highcontrast-toast-border-color,transparent)}}:host{box-sizing:border-box;min-block-size:var(--mod-toast-block-size,var(--spectrum-toast-block-size));max-inline-size:var(--mod-toast-max-inline-size,var(--spectrum-toast-max-inline-size));border-radius:var(--mod-toast-corner-radius,var(--spectrum-toast-corner-radius));font-size:var(--mod-toast-font-size,var(--spectrum-toast-font-size));font-weight:var(--mod-toast-font-weight,var(--spectrum-toast-font-weight));-webkit-font-smoothing:antialiased;background-color:var(--highcontrast-toast-background-color-default,var(--mod-toast-background-color-default,var(--spectrum-toast-background-color-default)));color:var(--highcontrast-toast-background-color-default,var(--mod-toast-background-color-default,var(--spectrum-toast-background-color-default)));flex-direction:row;align-items:stretch;padding-inline-start:var(--mod-toast-spacing-start-edge-to-text-and-icon,var(--spectrum-toast-spacing-start-edge-to-text-and-icon));display:inline-flex}:host([variant=negative]){background-color:var(--highcontrast-toast-negative-background-color-default,var(--mod-toast-negative-background-color-default,var(--spectrum-toast-negative-background-color-default)))}:host([variant=negative]),:host([variant=negative]) .closeButton:focus-visible:not(:active){color:var(--highcontrast-toast-negative-background-color-default,var(--mod-toast-negative-background-color-default,var(--spectrum-toast-negative-background-color-default)))}:host([variant=info]){background-color:var(--highcontrast-toast-informative-background-color-default,var(--mod-toast-informative-background-color-default,var(--spectrum-toast-informative-background-color-default)))}:host([variant=info]),:host([variant=info]) .closeButton:focus-visible:not(:active){color:var(--highcontrast-toast-informative-background-color-default,var(--mod-toast-informative-background-color-default,var(--spectrum-toast-informative-background-color-default)))}:host([variant=positive]){background-color:var(--highcontrast-toast-positive-background-color-default,var(--mod-toast-positive-background-color-default,var(--spectrum-toast-positive-background-color-default)))}:host([variant=positive]),:host([variant=positive]) .closeButton:focus-visible:not(:active){color:var(--highcontrast-toast-positive-background-color-default,var(--mod-toast-positive-background-color-default,var(--spectrum-toast-positive-background-color-default)))}.type{flex-grow:0;flex-shrink:0;margin-block-start:var(--mod-toast-spacing-top-edge-to-icon,var(--spectrum-toast-spacing-top-edge-to-icon));margin-inline-start:0;margin-inline-end:var(--mod-toast-spacing-icon-to-text,var(--spectrum-toast-spacing-icon-to-text))}.content,.type{color:var(--highcontrast-toast-text-and-icon-color,var(--mod-toast-text-and-icon-color,var(--spectrum-toast-text-and-icon-color)))}.content{box-sizing:border-box;line-height:var(--mod-toast-line-height,var(--spectrum-toast-line-height));text-align:start;flex:auto;padding-block-start:calc(var(--mod-toast-spacing-top-edge-to-text,var(--spectrum-toast-spacing-top-edge-to-text)) - var(--mod-toast-spacing-block-start,var(--spectrum-toast-spacing-block-start)));padding-block-end:calc(var(--mod-toast-spacing-bottom-edge-to-text,var(--spectrum-toast-spacing-bottom-edge-to-text)) - var(--mod-toast-spacing-block-end,var(--spectrum-toast-spacing-block-end)));padding-inline-start:0;padding-inline-end:var(--mod-toast-spacing-text-to-action-button-horizontal,var(--spectrum-toast-spacing-text-to-action-button-horizontal));display:inline-block}.content:lang(ja),.content:lang(ko),.content:lang(zh){line-height:var(--mod-toast-line-height-cjk,var(--spectrum-toast-line-height-cjk))}.buttons{border-inline-start-color:var(--mod-toast-divider-color,var(--spectrum-toast-divider-color));flex:none;align-items:flex-start;margin-block-start:var(--mod-toast-spacing-top-edge-to-divider,var(--spectrum-toast-spacing-top-edge-to-divider));margin-block-end:var(--mod-toast-spacing-bottom-edge-to-divider,var(--spectrum-toast-spacing-bottom-edge-to-divider));padding-inline-end:var(--mod-toast-spacing-close-button,var(--spectrum-toast-spacing-close-button));display:flex}.buttons .spectrum-CloseButton{align-self:flex-start}.body{flex-wrap:wrap;flex:auto;align-self:center;align-items:center;padding-block-start:var(--mod-toast-spacing-block-start,var(--spectrum-toast-spacing-block-start));padding-block-end:var(--mod-toast-spacing-block-end,var(--spectrum-toast-spacing-block-end));display:flex}.body ::slotted([slot=action]){margin-inline-start:auto;margin-inline-end:var(--mod-toast-spacing-text-and-action-button-to-divider,var(--spectrum-toast-spacing-text-and-action-button-to-divider))}.body ::slotted([slot=action]:dir(rtl)),:host([dir=rtl]) .body ::slotted([slot=action]){margin-inline-end:auto;margin-inline-end:var(--mod-toast-spacing-text-and-action-button-to-divider,var(--spectrum-toast-spacing-text-and-action-button-to-divider))}.body+.buttons{border-inline-start-style:solid;border-inline-start-width:1px;padding-inline-start:var(--mod-toast-spacing-close-button,var(--spectrum-toast-spacing-close-button))}:host{--spectrum-toast-background-color-default:var(--system-spectrum-toast-background-color-default)}:host{--spectrum-overlay-animation-distance:var(--spectrum-spacing-100);--spectrum-overlay-animation-duration:var(--spectrum-animation-duration-100);opacity:0;pointer-events:none;transition:transform var(--spectrum-overlay-animation-duration)ease-in-out,opacity var(--spectrum-overlay-animation-duration)ease-in-out,visibility 0s linear var(--spectrum-overlay-animation-duration);visibility:hidden}:host([open]){opacity:1;pointer-events:auto;visibility:visible;transition-delay:0s}
`,l=m;var v=Object.defineProperty,g=Object.getOwnPropertyDescriptor,d=(i,t,o,r)=>{for(var a=r>1?void 0:r?g(t,o):t,n=i.length-1,c;n>=0;n--)(c=i[n])&&(a=(r?c(t,o,a):c(a))||a);return r&&a&&v(t,o,a),a},f=["negative","positive","info","error","warning"],e=class extends b(h){constructor(){super(...arguments),this.open=!1,this._timeout=null,this._variant="",this.countdownStart=0,this.nextCount=-1,this.doCountdown=t=>{this.countdownStart||(this.countdownStart=performance.now()),t-this.countdownStart>this._timeout?(this.shouldClose(),this.countdownStart=0):this.countdown()},this.countdown=()=>{cancelAnimationFrame(this.nextCount),this.nextCount=requestAnimationFrame(this.doCountdown)},this.holdCountdown=()=>{this.stopCountdown(),this.addEventListener("focusout",this.resumeCountdown)},this.resumeCountdown=()=>{this.removeEventListener("focusout",this.holdCountdown),this.countdown()}}static get styles(){return[l]}set timeout(t){let o=typeof t!==null&&t>0?Math.max(6e3,t):null,r=this.timeout;o&&this.countdownStart&&(this.countdownStart=performance.now()),this._timeout=o,this.requestUpdate("timeout",r)}get timeout(){return this._timeout}set variant(t){if(t===this.variant)return;let o=this.variant;f.includes(t)?(this.setAttribute("variant",t),this._variant=t):(this.removeAttribute("variant"),this._variant=""),this.requestUpdate("variant",o)}get variant(){return this._variant}renderIcon(t){switch(t){case"info":return s`
                    <sp-icon-info
                        label="Information"
                        class="type"
                    ></sp-icon-info>
                `;case"negative":case"error":case"warning":return s`
                    <sp-icon-alert label="Error" class="type"></sp-icon-alert>
                `;case"positive":case"success":return s`
                    <sp-icon-checkmark-circle
                        label="Success"
                        class="type"
                    ></sp-icon-checkmark-circle>
                `;default:return s``}}startCountdown(){this.countdown(),this.addEventListener("focusin",this.holdCountdown)}stopCountdown(){cancelAnimationFrame(this.nextCount),this.countdownStart=0}shouldClose(){this.dispatchEvent(new CustomEvent("close",{composed:!0,bubbles:!0,cancelable:!0}))&&this.close()}close(){this.open=!1}render(){return s`
            ${this.renderIcon(this.variant)}
            <div class="body" role="alert">
                <div class="content">
                    <slot></slot>
                </div>
                <slot name="action"></slot>
            </div>
            <div class="buttons">
                <sp-close-button
                    @click=${this.shouldClose}
                    label="Close"
                    static="white"
                ></sp-close-button>
            </div>
        `}updated(t){super.updated(t),t.has("open")&&(this.open?this.timeout&&this.startCountdown():this.timeout&&this.stopCountdown()),t.has("timeout")&&(this.timeout!==null&&this.open?this.startCountdown():this.stopCountdown())}};d([u({type:Boolean,reflect:!0})],e.prototype,"open",2),d([u({type:Number})],e.prototype,"timeout",1),d([u({type:String})],e.prototype,"variant",1);import{defineElement as k}from"./base.js";k("sp-toast",e);

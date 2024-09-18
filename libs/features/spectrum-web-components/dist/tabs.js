/* eslint-disable */
/* Generated by Milo */

import{css as B,html as L,SizedMixin as U}from"./base.js";import{property as n,query as x}from"./base.js";import{classMap as D,ifDefined as y}from"./base.js";var u=class{constructor(t,{target:e,config:o,callback:s,skipInitial:i}){this.t=new Set,this.o=!1,this.i=!1,this.h=t,e!==null&&this.t.add(e??t),this.o=i??this.o,this.callback=s,window.IntersectionObserver?(this.u=new IntersectionObserver(c=>{let A=this.i;this.i=!1,this.o&&A||(this.handleChanges(c),this.h.requestUpdate())},o),t.addController(this)):console.warn("IntersectionController error: browser does not support IntersectionObserver.")}handleChanges(t){this.value=this.callback?.(t,this.u)}hostConnected(){for(let t of this.t)this.observe(t)}hostDisconnected(){this.disconnect()}async hostUpdated(){let t=this.u.takeRecords();t.length&&this.handleChanges(t)}observe(t){this.t.add(t),this.u.observe(t),this.i=!0}unobserve(t){this.t.delete(t),this.u.unobserve(t)}disconnect(){this.u.disconnect()}};var v=class{constructor(t,{target:e,config:o,callback:s,skipInitial:i}){this.t=new Set,this.o=!1,this.i=!1,this.h=t,e!==null&&this.t.add(e??t),this.l=o,this.o=i??this.o,this.callback=s,window.ResizeObserver?(this.u=new ResizeObserver(c=>{this.handleChanges(c),this.h.requestUpdate()}),t.addController(this)):console.warn("ResizeController error: browser does not support ResizeObserver.")}handleChanges(t){this.value=this.callback?.(t,this.u)}hostConnected(){for(let t of this.t)this.observe(t)}hostDisconnected(){this.disconnect()}async hostUpdated(){!this.o&&this.i&&this.handleChanges([]),this.i=!1}observe(t){this.t.add(t),this.u.observe(t,this.l),this.i=!0,this.h.requestUpdate()}unobserve(t){this.t.delete(t),this.u.unobserve(t)}disconnect(){this.u.disconnect()}};import{Focusable as j}from"./shared.js";import{RovingTabindexController as R}from"./reactive-controllers.js";import{css as T}from"./base.js";var E=T`
    #list{--spectrum-tabs-item-height:var(--spectrum-tab-item-height-medium);--spectrum-tabs-item-horizontal-spacing:var(--spectrum-tab-item-to-tab-item-horizontal-medium);--spectrum-tabs-item-vertical-spacing:var(--spectrum-tab-item-to-tab-item-vertical-medium);--spectrum-tabs-start-to-edge:var(--spectrum-tab-item-start-to-edge-medium);--spectrum-tabs-top-to-text:var(--spectrum-tab-item-top-to-text-medium);--spectrum-tabs-bottom-to-text:var(--spectrum-tab-item-bottom-to-text-medium);--spectrum-tabs-icon-size:var(--spectrum-workflow-icon-size-75);--spectrum-tabs-icon-to-text:var(--spectrum-text-to-visual-100);--spectrum-tabs-top-to-icon:var(--spectrum-tab-item-top-to-workflow-icon-medium);--spectrum-tabs-color:var(--spectrum-neutral-subdued-content-color-default);--spectrum-tabs-color-selected:var(--spectrum-neutral-subdued-content-color-down);--spectrum-tabs-color-hover:var(--spectrum-neutral-subdued-content-color-hover);--spectrum-tabs-color-key-focus:var(--spectrum-neutral-subdued-content-color-key-focus);--spectrum-tabs-color-disabled:var(--spectrum-gray-500);--spectrum-tabs-font-family:var(--spectrum-sans-font-family-stack);--spectrum-tabs-font-style:var(--spectrum-default-font-style);--spectrum-tabs-font-size:var(--spectrum-font-size-100);--spectrum-tabs-line-height:var(--spectrum-line-height-100);--spectrum-tabs-focus-indicator-width:var(--spectrum-focus-indicator-thickness);--spectrum-tabs-focus-indicator-border-radius:var(--spectrum-corner-radius-100);--spectrum-tabs-focus-indicator-gap:var(--spectrum-tab-item-focus-indicator-gap-medium);--spectrum-tabs-focus-indicator-color:var(--spectrum-focus-indicator-color);--spectrum-tabs-selection-indicator-color:var(--spectrum-neutral-subdued-content-color-down);--spectrum-tabs-list-background-direction:top;--spectrum-tabs-divider-background-color:var(--spectrum-gray-300);--spectrum-tabs-divider-size:var(--spectrum-border-width-200);--spectrum-tabs-divider-border-radius:1px;--spectrum-tabs-animation-duration:var(--spectrum-animation-duration-100);--spectrum-tabs-animation-ease:var(--spectrum-animation-ease-in-out)}:host([emphasized]) #list{--mod-tabs-color-selected:var(--mod-tabs-color-selected-emphasized,var(--spectrum-accent-content-color-default));--mod-tabs-color-hover:var(--mod-tabs-color-hover-emphasized,var(--spectrum-accent-content-color-hover));--mod-tabs-color-key-focus:var(--mod-tabs-color-key-focus-emphasized,var(--spectrum-accent-content-color-key-focus));--mod-tabs-selection-indicator-color:var(--mod-tabs-selection-indicator-color-emphasized,var(--spectrum-accent-content-color-default))}:host([direction^=vertical]) #list{--mod-tabs-list-background-direction:var(--mod-tabs-list-background-direction-vertical,right)}:host([direction^=vertical-right]) #list{--mod-tabs-list-background-direction:var(--mod-tabs-list-background-direction-vertical-right,left)}:host([direction^=vertical]) #list:dir(rtl),:host([dir=rtl][direction^=vertical]) #list{--mod-tabs-list-background-direction:var(--mod-tabs-list-background-direction-vertical,left)}:host([direction^=vertical-right]) #list:dir(rtl),:host([dir=rtl][direction^=vertical-right]) #list{--mod-tabs-list-background-direction:var(--mod-tabs-list-background-direction-vertical,right)}:host([compact]) #list{--mod-tabs-item-height:var(--mod-tabs-item-height-compact,var(--spectrum-tab-item-compact-height-medium));--mod-tabs-top-to-text:var(--mod-tabs-top-to-text-compact,var(--spectrum-tab-item-top-to-text-compact-medium));--mod-tabs-bottom-to-text:var(--mod-tabs-bottom-to-text-compact,var(--spectrum-tab-item-top-to-text-compact-medium));--mod-tabs-top-to-icon:var(--mod-tabs-top-to-icon-compact,var(--spectrum-tab-item-top-to-workflow-icon-compact-medium))}#list{z-index:0;vertical-align:top;background:linear-gradient(to var(--mod-tabs-list-background-direction,var(--spectrum-tabs-list-background-direction)),var(--highcontrast-tabs-divider-background-color,var(--mod-tabs-divider-background-color,var(--spectrum-tabs-divider-background-color)))0 var(--mod-tabs-divider-size,var(--spectrum-tabs-divider-size)),transparent var(--mod-tabs-divider-size,var(--spectrum-tabs-divider-size)));margin:0;padding-block:0;display:flex;position:relative}::slotted([selected]:not([slot])){color:var(--highcontrast-tabs-color-selected,var(--mod-tabs-color-selected,var(--spectrum-tabs-color-selected)))}::slotted([disabled]:not([slot])){cursor:default;color:var(--highcontrast-tabs-color-disabled,var(--mod-tabs-color-disabled,var(--spectrum-tabs-color-disabled)))}#selection-indicator{background-color:var(--highcontrast-tabs-selection-indicator-color,var(--mod-tabs-selection-indicator-color,var(--spectrum-tabs-selection-indicator-color)));z-index:0;transition:transform var(--mod-tabs-animation-duration,var(--spectrum-tabs-animation-duration))var(--mod-tabs-animation-ease,var(--spectrum-tabs-animation-ease));transform-origin:0 0;border-radius:var(--mod-tabs-divider-border-radius,var(--spectrum-tabs-divider-border-radius));position:absolute;inset-inline-start:0}:host([direction^=horizontal]) #list{align-items:center}:host([direction^=horizontal]) #list ::slotted(:not([slot])){vertical-align:top}:host([direction^=horizontal]) ::slotted(:not(:first-child)){margin-inline-start:var(--mod-tabs-item-horizontal-spacing,var(--spectrum-tabs-item-horizontal-spacing))}:host([direction^=horizontal]) #list #selection-indicator{block-size:var(--mod-tabs-divider-size,var(--spectrum-tabs-divider-size));position:absolute;inset-block-end:0}:host([direction^=horizontal][compact]) #list{box-sizing:initial;align-items:end}:host([quiet]) #list{background:0 0;border-color:#0000;display:inline-flex}:host([quiet]) #selection-indicator{padding-inline-start:var(--mod-tabs-start-to-item-quiet,var(--spectrum-tabs-start-to-item-quiet))}:host([direction^=vertical]) #list,:host([direction^=vertical-right]) #list{flex-direction:column;padding:0;display:inline-flex}:host([direction^=vertical-right][quiet]) #list,:host([direction^=vertical][quiet]) #list{border-color:#0000}:host([direction^=vertical]) #list ::slotted(:not([slot])),:host([direction^=vertical-right]) #list ::slotted(:not([slot])){block-size:var(--mod-tabs-item-height,var(--spectrum-tabs-item-height));line-height:var(--mod-tabs-item-height,var(--spectrum-tabs-item-height));margin-block-end:var(--mod-tabs-item-vertical-spacing,var(--spectrum-tabs-item-vertical-spacing));margin-inline-start:var(--mod-tabs-start-to-edge,var(--spectrum-tabs-start-to-edge));margin-inline-end:var(--mod-tabs-start-to-edge,var(--spectrum-tabs-start-to-edge));padding-block:0}:host([direction^=vertical]) #list ::slotted(:not([slot])):before,:host([direction^=vertical-right]) #list ::slotted(:not([slot])):before{inset-inline-start:calc(var(--mod-tabs-focus-indicator-gap,var(--spectrum-tabs-focus-indicator-gap))*-1)}:host([direction^=vertical]) #list #selection-indicator,:host([direction^=vertical-right]) #list #selection-indicator{inline-size:var(--mod-tabs-divider-size,var(--spectrum-tabs-divider-size));position:absolute;inset-block-start:0;inset-inline-start:0}:host([direction^=vertical-right]) #list #selection-indicator{inset-inline:auto 0}@media (forced-colors:active){#list{--highcontrast-tabs-divider-background-color:var(--spectrum-gray-500);--highcontrast-tabs-selection-indicator-color:Highlight;--highcontrast-tabs-focus-indicator-color:CanvasText;--highcontrast-tabs-focus-indicator-background-color:Highlight;--highcontrast-tabs-color:ButtonText;--highcontrast-tabs-color-hover:ButtonText;--highcontrast-tabs-color-selected:HighlightText;--highcontrast-tabs-color-key-focus:ButtonText;--highcontrast-tabs-color-disabled:GrayText;forced-color-adjust:none}#list ::slotted([selected]:not([slot])):before{background-color:var(--highcontrast-tabs-focus-indicator-background-color)}:host([direction^=vertical][compact]) #list #list ::slotted(:not([slot])):before{block-size:100%;inset-block-start:0}:host([quiet]) #list{background:linear-gradient(to var(--mod-tabs-list-background-direction,var(--spectrum-tabs-list-background-direction)),var(--highcontrast-tabs-divider-background-color,var(--mod-tabs-divider-background-color,var(--spectrum-tabs-divider-background-color)))0 var(--mod-tabs-divider-size,var(--spectrum-tabs-divider-size)),transparent var(--mod-tabs-divider-size,var(--spectrum-tabs-divider-size)))}}#list{--spectrum-tabs-font-weight:var(--system-spectrum-tabs-font-weight)}:host{grid-template-columns:100%;display:grid;position:relative}:host(:not([direction^=vertical])){grid-template-rows:auto 1fr}:host([direction^=vertical]){grid-template-columns:auto 1fr}:host([dir=rtl]) #selection-indicator{left:0;right:auto}:host([direction=vertical-right]) #list #selection-indicator{inset-inline:auto 0}#list{justify-content:var(--swc-tabs-list-justify-content)}:host([disabled]) #list{pointer-events:none}:host([disabled]) #list #selection-indicator{background-color:var(--mod-tabs-color-disabled,var(--spectrum-tabs-color-disabled))}:host([disabled]) ::slotted(sp-tab){color:var(--mod-tabs-color-disabled,var(--spectrum-tabs-color-disabled))}:host([direction=vertical-right]) #list #selection-indicator,:host([direction=vertical]) #list #selection-indicator{inset-block-start:0}#selection-indicator.first-position{transition:none}:host([dir][direction=horizontal]) #list.scroll{scrollbar-width:none;overflow:auto hidden}:host([dir][direction=horizontal]) #list.scroll::-webkit-scrollbar{display:none}
`,g=E;import{css as $}from"./base.js";var q=$`
    :host([size=s]) #list{--spectrum-tabs-item-height:var(--spectrum-tab-item-height-small);--spectrum-tabs-item-horizontal-spacing:var(--spectrum-tab-item-to-tab-item-horizontal-small);--spectrum-tabs-item-vertical-spacing:var(--spectrum-tab-item-to-tab-item-vertical-small);--spectrum-tabs-start-to-edge:var(--spectrum-tab-item-start-to-edge-small);--spectrum-tabs-top-to-text:var(--spectrum-tab-item-top-to-text-small);--spectrum-tabs-bottom-to-text:var(--spectrum-tab-item-bottom-to-text-small);--spectrum-tabs-icon-size:var(--spectrum-workflow-icon-size-50);--spectrum-tabs-icon-to-text:var(--spectrum-text-to-visual-75);--spectrum-tabs-top-to-icon:var(--spectrum-tab-item-top-to-workflow-icon-small);--spectrum-tabs-focus-indicator-gap:var(--spectrum-tab-item-focus-indicator-gap-small);--spectrum-tabs-font-size:var(--spectrum-font-size-75)}:host([size=l]) #list{--spectrum-tabs-item-height:var(--spectrum-tab-item-height-large);--spectrum-tabs-item-horizontal-spacing:var(--spectrum-tab-item-to-tab-item-horizontal-large);--spectrum-tabs-item-vertical-spacing:var(--spectrum-tab-item-to-tab-item-vertical-large);--spectrum-tabs-start-to-edge:var(--spectrum-tab-item-start-to-edge-large);--spectrum-tabs-top-to-text:var(--spectrum-tab-item-top-to-text-large);--spectrum-tabs-bottom-to-text:var(--spectrum-tab-item-bottom-to-text-large);--spectrum-tabs-icon-size:var(--spectrum-workflow-icon-size-100);--spectrum-tabs-icon-to-text:var(--spectrum-text-to-visual-200);--spectrum-tabs-top-to-icon:var(--spectrum-tab-item-top-to-workflow-icon-large);--spectrum-tabs-focus-indicator-gap:var(--spectrum-tab-item-focus-indicator-gap-large);--spectrum-tabs-font-size:var(--spectrum-font-size-200)}:host([size=xl]) #list{--spectrum-tabs-item-height:var(--spectrum-tab-item-height-extra-large);--spectrum-tabs-item-horizontal-spacing:var(--spectrum-tab-item-to-tab-item-horizontal-extra-large);--spectrum-tabs-item-vertical-spacing:var(--spectrum-tab-item-to-tab-item-vertical-extra-large);--spectrum-tabs-start-to-edge:var(--spectrum-tab-item-start-to-edge-extra-large);--spectrum-tabs-top-to-text:var(--spectrum-tab-item-top-to-text-extra-large);--spectrum-tabs-bottom-to-text:var(--spectrum-tab-item-bottom-to-text-extra-large);--spectrum-tabs-icon-size:var(--spectrum-workflow-icon-size-200);--spectrum-tabs-icon-to-text:var(--spectrum-text-to-visual-300);--spectrum-tabs-top-to-icon:var(--spectrum-tab-item-top-to-workflow-icon-extra-large);--spectrum-tabs-focus-indicator-gap:var(--spectrum-tab-item-focus-indicator-gap-extra-large);--spectrum-tabs-font-size:var(--spectrum-font-size-300)}:host([size=s]) #list.spectrum-Tabs--compact{--mod-tabs-item-height:var(--mod-tabs-item-height-compact,var(--spectrum-tab-item-compact-height-small));--mod-tabs-top-to-text:var(--mod-tabs-top-to-text-compact,var(--spectrum-tab-item-top-to-text-compact-small));--mod-tabs-bottom-to-text:var(--mod-tabs-bottom-to-text-compact,var(--spectrum-tab-item-top-to-text-compact-small));--mod-tabs-top-to-icon:var(--mod-tabs-top-to-icon-compact,var(--spectrum-tab-item-top-to-workflow-icon-compact-small))}:host([size=l]) #list.spectrum-Tabs--compact{--mod-tabs-item-height:var(--mod-tabs-item-height-compact,var(--spectrum-tab-item-compact-height-large));--mod-tabs-top-to-text:var(--mod-tabs-top-to-text-compact,var(--spectrum-tab-item-top-to-text-compact-large));--mod-tabs-bottom-to-text:var(--mod-tabs-bottom-to-text-compact,var(--spectrum-tab-item-top-to-text-compact-large));--mod-tabs-top-to-icon:var(--mod-tabs-top-to-icon-compact,var(--spectrum-tab-item-top-to-workflow-icon-compact-large))}:host([size=xl]) #list.spectrum-Tabs--compact{--mod-tabs-item-height:var(--mod-tabs-item-height-compact,var(--spectrum-tab-item-compact-height-extra-large));--mod-tabs-top-to-text:var(--mod-tabs-top-to-text-compact,var(--spectrum-tab-item-top-to-text-compact-extra-large));--mod-tabs-bottom-to-text:var(--mod-tabs-bottom-to-text-compact,var(--spectrum-tab-item-top-to-text-compact-extra-large));--mod-tabs-top-to-icon:var(--mod-tabs-top-to-icon-compact,var(--spectrum-tab-item-top-to-workflow-icon-compact-extra-large))}
`,f=q;var O=Object.defineProperty,P=Object.getOwnPropertyDescriptor,l=(r,t,e,o)=>{for(var s=o>1?void 0:o?P(t,e):t,i=r.length-1,c;i>=0;i--)(c=r[i])&&(s=(o?c(t,e,s):c(s))||s);return o&&s&&O(t,e,s),s},b={baseSize:100,noSelectionStyle:"transform: translateX(0px) scaleX(0) scaleY(0)",transformX(r,t){let e=t/this.baseSize;return`transform: translateX(${r}px) scaleX(${e});`},transformY(r,t){let e=t/this.baseSize;return`transform: translateY(${r}px) scaleY(${e});`},baseStyles(){return B`
            :host([direction='vertical-right']) #selection-indicator,
            :host([direction='vertical']) #selection-indicator {
                height: ${this.baseSize}px;
            }
            :host([dir][direction='horizontal']) #selection-indicator {
                width: ${this.baseSize}px;
            }
        `}},a=class extends U(j,{noDefaultSize:!0}){constructor(){super(),this.auto=!1,this.compact=!1,this.direction="horizontal",this.emphasized=!1,this.label="",this.enableTabsScroll=!1,this.quiet=!1,this.selectionIndicatorStyle=b.noSelectionStyle,this.shouldAnimate=!1,this.selected="",this._tabs=[],this.resizeController=new v(this,{callback:()=>{this.updateSelectionIndicator()}}),this.rovingTabindexController=new R(this,{focusInIndex:t=>{let e=0;return t.find((o,s)=>{let i=this.selected?!o.disabled&&o.value===this.selected:!o.disabled;return e=s,i})?e:-1},direction:()=>"both",elementEnterAction:t=>{this.auto&&(this.shouldAnimate=!0,this.selectTarget(t))},elements:()=>this.tabs,isFocusableElement:t=>!t.disabled,listenerScope:()=>this.tabList}),this.onTabsScroll=()=>{this.dispatchEvent(new Event("sp-tabs-scroll",{bubbles:!0,composed:!0}))},this.onClick=t=>{if(this.disabled)return;let e=t.composedPath().find(o=>o.parentElement===this);!e||e.disabled||(this.shouldAnimate=!0,this.selectTarget(e))},this.onKeyDown=t=>{if(t.code==="Enter"||t.code==="Space"){t.preventDefault();let e=t.target;e&&this.selectTarget(e)}},this.updateCheckedState=()=>{if(this.tabs.forEach(t=>{t.removeAttribute("selected")}),this.selected){let t=this.tabs.find(e=>e.value===this.selected);t?t.selected=!0:this.selected=""}else{let t=this.tabs[0];t&&t.setAttribute("tabindex","0")}this.updateSelectionIndicator()},this.updateSelectionIndicator=async()=>{let t=this.tabs.find(s=>s.selected);if(!t){this.selectionIndicatorStyle=b.noSelectionStyle;return}await Promise.all([t.updateComplete,document.fonts?document.fonts.ready:Promise.resolve()]);let{width:e,height:o}=t.getBoundingClientRect();this.selectionIndicatorStyle=this.direction==="horizontal"?b.transformX(t.offsetLeft,e):b.transformY(t.offsetTop,o)},new u(this,{config:{root:null,rootMargin:"0px",threshold:[0,1]},callback:()=>{this.updateSelectionIndicator()}})}static get styles(){return[f,g,b.baseStyles()]}set tabs(t){t!==this.tabs&&(this._tabs.forEach(e=>{this.resizeController.unobserve(e)}),t.forEach(e=>{this.resizeController.observe(e)}),this._tabs=t,this.rovingTabindexController.clearElementCache())}get tabs(){return this._tabs}get focusElement(){return this.rovingTabindexController.focusInElement||this}scrollTabs(t,e="smooth"){var o;(o=this.tabList)==null||o.scrollBy({left:t,top:0,behavior:e})}get scrollState(){if(this.tabList){let{scrollLeft:t,clientWidth:e,scrollWidth:o}=this.tabList,s=Math.abs(t)>0,i=Math.ceil(Math.abs(t))<o-e;return{canScrollLeft:this.dir==="ltr"?s:i,canScrollRight:this.dir==="ltr"?i:s}}return{}}async getUpdateComplete(){let t=await super.getUpdateComplete(),e=[...this.children].map(o=>typeof o.updateComplete<"u"?o.updateComplete:Promise.resolve(!0));return await Promise.all(e),t}async scrollToSelection(){if(!this.enableTabsScroll||!this.selected)return;await this.updateComplete;let t=this.tabs.find(e=>e.value===this.selected);t?.scrollIntoView()}updated(t){super.updated(t),t.has("selected")&&this.scrollToSelection()}managePanels({target:t}){t.assignedElements().map(e=>{let{value:o,id:s}=e,i=this.querySelector(`[role="tab"][value="${o}"]`);i&&(i.setAttribute("aria-controls",s),e.setAttribute("aria-labelledby",i.id)),e.selected=o===this.selected})}render(){return L`
            <div
                class=${D({scroll:this.enableTabsScroll})}
                aria-label=${y(this.label?this.label:void 0)}
                @click=${this.onClick}
                @keydown=${this.onKeyDown}
                @scroll=${this.onTabsScroll}
                id="list"
                role="tablist"
                part="tablist"
            >
                <slot @slotchange=${this.onSlotChange}></slot>
                <div
                    id="selection-indicator"
                    class=${y(this.shouldAnimate?void 0:"first-position")}
                    style=${this.selectionIndicatorStyle}
                    role="presentation"
                ></div>
            </div>
            <slot name="tab-panel" @slotchange=${this.managePanels}></slot>
        `}willUpdate(t){if(!this.hasUpdated){let e=this.querySelector(":scope > [selected]");e&&this.selectTarget(e)}if(super.willUpdate(t),t.has("selected")){if(this.tabs.length&&this.updateCheckedState(),t.get("selected")){let o=this.querySelector(`[role="tabpanel"][value="${t.get("selected")}"]`);o&&(o.selected=!1)}let e=this.querySelector(`[role="tabpanel"][value="${this.selected}"]`);e&&(e.selected=!0)}t.has("direction")&&(this.direction==="horizontal"?this.removeAttribute("aria-orientation"):this.setAttribute("aria-orientation","vertical")),t.has("dir")&&this.updateSelectionIndicator(),t.has("disabled")&&(this.disabled?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled")),!this.shouldAnimate&&typeof t.get("shouldAnimate")<"u"&&(this.shouldAnimate=!0)}selectTarget(t){let e=t.getAttribute("value");if(e){let o=this.selected;this.selected=e,this.dispatchEvent(new Event("change",{cancelable:!0}))||(this.selected=o)}}onSlotChange(){this.tabs=this.slotEl.assignedElements().filter(t=>t.getAttribute("role")==="tab"),this.updateCheckedState()}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this.updateSelectionIndicator),"fonts"in document&&document.fonts.addEventListener("loadingdone",this.updateSelectionIndicator)}disconnectedCallback(){window.removeEventListener("resize",this.updateSelectionIndicator),"fonts"in document&&document.fonts.removeEventListener("loadingdone",this.updateSelectionIndicator),super.disconnectedCallback()}};l([n({type:Boolean})],a.prototype,"auto",2),l([n({type:Boolean,reflect:!0})],a.prototype,"compact",2),l([n({reflect:!0})],a.prototype,"dir",2),l([n({reflect:!0})],a.prototype,"direction",2),l([n({type:Boolean,reflect:!0})],a.prototype,"emphasized",2),l([n()],a.prototype,"label",2),l([n({type:Boolean})],a.prototype,"enableTabsScroll",2),l([n({type:Boolean,reflect:!0})],a.prototype,"quiet",2),l([n({attribute:!1})],a.prototype,"selectionIndicatorStyle",2),l([n({attribute:!1})],a.prototype,"shouldAnimate",2),l([x("slot")],a.prototype,"slotEl",2),l([x("#list")],a.prototype,"tabList",2),l([n({reflect:!0})],a.prototype,"selected",2);import{defineElement as F}from"./base.js";F("sp-tabs",a);import{html as k,nothing as w,SpectrumElement as _}from"./base.js";import{property as h}from"./base.js";import{FocusVisiblePolyfillMixin as K}from"./shared.js";import{ObserveSlotPresence as V}from"./shared.js";import{ObserveSlotText as W}from"./shared.js";import{randomID as G}from"./shared.js";import{css as M}from"./base.js";var X=M`
    :host{box-sizing:border-box;block-size:calc(var(--mod-tabs-item-height,var(--spectrum-tabs-item-height)) - var(--mod-tabs-divider-size,var(--spectrum-tabs-divider-size)));z-index:1;white-space:nowrap;color:var(--highcontrast-tabs-color,var(--mod-tabs-color,var(--spectrum-tabs-color)));transition:color var(--mod-tabs-animation-duration,var(--spectrum-tabs-animation-duration))ease-out;cursor:pointer;outline:none;-webkit-text-decoration:none;text-decoration:none;position:relative}::slotted([slot=icon]){block-size:var(--mod-tabs-icon-size,var(--spectrum-tabs-icon-size));inline-size:var(--mod-tabs-icon-size,var(--spectrum-tabs-icon-size));margin-block-start:var(--mod-tabs-top-to-icon,var(--spectrum-tabs-top-to-icon))}[name=icon]+#item-label{margin-inline-start:var(--mod-tabs-icon-to-text,var(--spectrum-tabs-icon-to-text))}:host:before{content:"";box-sizing:border-box;block-size:calc(100% - var(--mod-tabs-top-to-text,var(--spectrum-tabs-top-to-text)));inline-size:calc(100% + var(--mod-tabs-focus-indicator-gap,var(--spectrum-tabs-focus-indicator-gap))*2);border:var(--mod-tabs-focus-indicator-width,var(--spectrum-tabs-focus-indicator-width))solid transparent;border-radius:var(--mod-tabs-focus-indicator-border-radius,var(--spectrum-tabs-focus-indicator-border-radius));pointer-events:none;position:absolute;inset-block-start:calc(var(--mod-tabs-top-to-text,var(--spectrum-tabs-top-to-text))/2);inset-inline-start:calc(var(--mod-tabs-focus-indicator-gap,var(--spectrum-tabs-focus-indicator-gap))*-1);inset-inline-end:calc(var(--mod-tabs-focus-indicator-gap,var(--spectrum-tabs-focus-indicator-gap))*-1)}@media (hover:hover){:host(:hover){color:var(--highcontrast-tabs-color-hover,var(--mod-tabs-color-hover,var(--spectrum-tabs-color-hover)))}}:host([selected]){color:var(--highcontrast-tabs-color-selected,var(--mod-tabs-color-selected,var(--spectrum-tabs-color-selected)))}:host([disabled]){cursor:default;color:var(--highcontrast-tabs-color-disabled,var(--mod-tabs-color-disabled,var(--spectrum-tabs-color-disabled)))}:host([disabled]) #item-label{cursor:default}:host(:focus-visible){color:var(--highcontrast-tabs-color-key-focus,var(--mod-tabs-color-key-focus,var(--spectrum-tabs-color-key-focus)))}:host(:focus-visible):before{border-color:var(--highcontrast-tabs-focus-indicator-color,var(--mod-tabs-focus-indicator-color,var(--spectrum-tabs-focus-indicator-color)))}#item-label{cursor:pointer;vertical-align:top;font-family:var(--mod-tabs-font-family,var(--spectrum-tabs-font-family));font-style:var(--mod-tabs-font-style,var(--spectrum-tabs-font-style));font-size:var(--mod-tabs-font-size,var(--spectrum-tabs-font-size));font-weight:var(--mod-tabs-font-weight,var(--spectrum-tabs-font-weight));line-height:var(--mod-tabs-line-height,var(--spectrum-tabs-line-height));margin-block-start:var(--mod-tabs-top-to-text,var(--spectrum-tabs-top-to-text));margin-block-end:var(--mod-tabs-bottom-to-text,var(--spectrum-tabs-bottom-to-text));-webkit-text-decoration:none;text-decoration:none;display:inline-block}#item-label:empty{display:none}:host{scroll-margin-inline:var(--mod-tabs-item-horizontal-spacing,var(--spectrum-tabs-item-horizontal-spacing))}:host([disabled]){pointer-events:none}#item-label[hidden]{display:none}@media (forced-colors:active){:host:before{background-color:buttonface}:host ::slotted([slot=icon]){z-index:1;color:inherit;position:relative}#item-label{z-index:1;position:relative}:host([selected]),:host([selected]) ::slotted([slot=icon]),:host([selected]) #item-label{color:highlighttext}}:host([vertical]){flex-direction:column;justify-content:center;align-items:center;height:auto;display:flex}:host([dir][vertical]) slot[name=icon]+#item-label{margin-inline-start:0;margin-block:calc(var(--mod-tabs-top-to-text,var(--spectrum-tabs-top-to-text))/2)calc(var(--mod-tabs-bottom-to-text,var(--spectrum-tabs-bottom-to-text))/2)}:host([vertical]) ::slotted([slot=icon]){margin-block-start:calc(var(--mod-tabs-top-to-icon,var(--spectrum-tabs-top-to-icon))/2)}
`,z=X;var H=Object.defineProperty,Y=Object.getOwnPropertyDescriptor,p=(r,t,e,o)=>{for(var s=o>1?void 0:o?Y(t,e):t,i=r.length-1,c;i>=0;i--)(c=r[i])&&(s=(o?c(t,e,s):c(s))||s);return o&&s&&H(t,e,s),s},d=class extends K(W(V(_,'[slot="icon"]'),"")){constructor(){super(...arguments),this.disabled=!1,this.label="",this.selected=!1,this.vertical=!1,this.value=""}static get styles(){return[z]}get hasIcon(){return this.slotContentIsPresent}get hasLabel(){return!!this.label||this.slotHasContent}render(){return k`
            ${this.hasIcon?k`
                      <slot name="icon"></slot>
                  `:w}
            <label id="item-label" ?hidden=${!this.hasLabel}>
                ${this.slotHasContent?w:this.label}
                <slot>${this.label}</slot>
            </label>
        `}firstUpdated(t){super.firstUpdated(t),this.setAttribute("role","tab"),this.hasAttribute("id")||(this.id=`sp-tab-${G()}`)}updated(t){super.updated(t),t.has("selected")&&(this.setAttribute("aria-selected",this.selected?"true":"false"),this.setAttribute("tabindex",this.selected?"0":"-1")),t.has("disabled")&&(this.disabled?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled"))}};p([h({type:Boolean,reflect:!0})],d.prototype,"disabled",2),p([h({reflect:!0})],d.prototype,"label",2),p([h({type:Boolean,reflect:!0})],d.prototype,"selected",2),p([h({type:Boolean,reflect:!0})],d.prototype,"vertical",2),p([h({type:String,reflect:!0})],d.prototype,"value",2);import{defineElement as J}from"./base.js";J("sp-tab",d);import{html as et,SpectrumElement as ot}from"./base.js";import{property as I}from"./base.js";import{randomID as st}from"./shared.js";import{css as N}from"./base.js";var Q=N`
    :host{display:inline-flex}:host(:not([selected])){display:none}
`,S=Q;var Z=Object.defineProperty,tt=Object.getOwnPropertyDescriptor,C=(r,t,e,o)=>{for(var s=o>1?void 0:o?tt(t,e):t,i=r.length-1,c;i>=0;i--)(c=r[i])&&(s=(o?c(t,e,s):c(s))||s);return o&&s&&Z(t,e,s),s},m=class extends ot{constructor(){super(...arguments),this.selected=!1,this.value=""}handleFocusin(){this.removeAttribute("tabindex")}handleFocusout(){this.tabIndex=this.selected?0:-1}render(){return et`
            <slot
                @focusin=${this.handleFocusin}
                @focusout=${this.handleFocusout}
            ></slot>
        `}firstUpdated(){this.slot="tab-panel",this.setAttribute("role","tabpanel"),this.tabIndex=0,this.hasAttribute("id")||(this.id=`sp-tab-panel-${st()}`)}updated(t){t.has("selected")&&(this.selected?(this.removeAttribute("aria-hidden"),this.tabIndex=0):(this.setAttribute("aria-hidden","true"),this.tabIndex=-1))}};m.styles=[S],C([I({type:Boolean,reflect:!0})],m.prototype,"selected",2),C([I({type:String,reflect:!0})],m.prototype,"value",2);import{defineElement as it}from"./base.js";it("sp-tab-panel",m);

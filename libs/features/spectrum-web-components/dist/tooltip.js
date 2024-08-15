// node_modules/@spectrum-web-components/tooltip/src/Tooltip.js
import { html as p, SpectrumElement as h } from "/libs/features/spectrum-web-components/dist/base.js";
import { property as a, query as d } from "/libs/features/spectrum-web-components/dist/base.js";
import { ifDefined as u } from "/libs/features/spectrum-web-components/dist/base.js";

// node_modules/@spectrum-web-components/tooltip/src/tooltip.css.js
import { css as t } from "/libs/features/spectrum-web-components/dist/base.js";
var o = t`
    #tooltip{pointer-events:none;visibility:hidden;opacity:0;transition:transform var(--mod-overlay-animation-duration,var(--spectrum-animation-duration-100,.13s))ease-in-out,opacity var(--mod-overlay-animation-duration,var(--spectrum-animation-duration-100,.13s))ease-in-out,visibility 0s linear var(--mod-overlay-animation-duration,var(--spectrum-animation-duration-100,.13s))}:host([open]) #tooltip{pointer-events:auto;visibility:visible;opacity:1;transition-delay:var(--mod-overlay-animation-duration-opened,var(--spectrum-animation-duration-0,0s))}#tooltip{--spectrum-tooltip-animation-duration:var(--spectrum-animation-duration-100);--spectrum-tooltip-margin:0px;--spectrum-tooltip-height:var(--spectrum-component-height-75);--spectrum-tooltip-max-inline-size:var(--spectrum-tooltip-maximum-width);--spectrum-tooltip-border-radius:var(--spectrum-corner-radius-100);--spectrum-tooltip-icon-width:var(--spectrum-workflow-icon-size-50);--spectrum-tooltip-icon-height:var(--spectrum-workflow-icon-size-50);--spectrum-tooltip-font-size:var(--spectrum-font-size-75);--spectrum-tooltip-line-height:var(--spectrum-line-height-100);--spectrum-tooltip-cjk-line-height:var(--spectrum-cjk-line-height-100);--spectrum-tooltip-font-weight:var(--spectrum-regular-font-weight);--spectrum-tooltip-spacing-inline:var(--spectrum-component-edge-to-text-75);--spectrum-tooltip-spacing-block-start:var(--spectrum-component-top-to-text-75);--spectrum-tooltip-spacing-block-end:var(--spectrum-component-bottom-to-text-75);--spectrum-tooltip-icon-spacing-inline-start:var(--spectrum-text-to-visual-75);--spectrum-tooltip-icon-spacing-inline-end:var(--spectrum-text-to-visual-75);--spectrum-tooltip-icon-spacing-block-start:var(--spectrum-component-top-to-workflow-icon-75);--spectrum-tooltip-background-color-informative:var(--spectrum-informative-background-color-default);--spectrum-tooltip-background-color-positive:var(--spectrum-positive-background-color-default);--spectrum-tooltip-background-color-negative:var(--spectrum-negative-background-color-default);--spectrum-tooltip-content-color:var(--spectrum-white);--spectrum-tooltip-tip-inline-size:var(--spectrum-tooltip-tip-width);--spectrum-tooltip-tip-block-size:var(--spectrum-tooltip-tip-height);--spectrum-tooltip-tip-square-size:var(--spectrum-tooltip-tip-inline-size);--spectrum-tooltip-tip-height-percentage:50%;--spectrum-tooltip-tip-antialiasing-inset:.5px;--spectrum-tooltip-pointer-corner-spacing:var(--spectrum-corner-radius-100);--spectrum-tooltip-background-color-default:var(--spectrum-tooltip-backgound-color-default-neutral)}@media (forced-colors:active){#tooltip{border:1px solid #0000}#tip{forced-color-adjust:none;--highcontrast-tooltip-background-color-default:CanvasText;--highcontrast-tooltip-background-color-informative:CanvasText;--highcontrast-tooltip-background-color-positive:CanvasText;--highcontrast-tooltip-background-color-negative:CanvasText}}#tooltip{box-sizing:border-box;vertical-align:top;inline-size:auto;padding-inline:var(--mod-tooltip-spacing-inline,var(--spectrum-tooltip-spacing-inline));border-radius:var(--mod-tooltip-border-radius,var(--spectrum-tooltip-border-radius));block-size:auto;min-block-size:var(--mod-tooltip-height,var(--spectrum-tooltip-height));max-inline-size:var(--mod-tooltip-max-inline-size,var(--spectrum-tooltip-max-inline-size));background-color:var(--highcontrast-tooltip-background-color-default,var(--mod-tooltip-background-color-default,var(--spectrum-tooltip-background-color-default)));color:var(--mod-tooltip-content-color,var(--spectrum-tooltip-content-color));font-size:var(--mod-tooltip-font-size,var(--spectrum-tooltip-font-size));font-weight:var(--mod-tooltip-font-weight,var(--spectrum-tooltip-font-weight));line-height:var(--mod-tooltip-line-height,var(--spectrum-tooltip-line-height));word-break:break-word;-webkit-font-smoothing:antialiased;cursor:default;-webkit-user-select:none;user-select:none;flex-direction:row;align-items:center;display:inline-flex;position:relative}:host(:lang(ja)) #tooltip,:host(:lang(ko)) #tooltip,:host(:lang(zh)) #tooltip{line-height:var(--mod-tooltip-cjk-line-height,var(--spectrum-tooltip-cjk-line-height))}#tooltip p{margin:0}:host([variant=info]) #tooltip{background-color:var(--highcontrast-tooltip-background-color-informative,var(--mod-tooltip-background-color-informative,var(--spectrum-tooltip-background-color-informative)))}:host([variant=positive]) #tooltip{background-color:var(--highcontrast-tooltip-background-color-positive,var(--mod-tooltip-background-color-positive,var(--spectrum-tooltip-background-color-positive)))}:host([variant=negative]) #tooltip{background-color:var(--highcontrast-tooltip-background-color-negative,var(--mod-tooltip-background-color-negative,var(--spectrum-tooltip-background-color-negative)))}#tip{block-size:var(--mod-tooltip-tip-square-size,var(--spectrum-tooltip-tip-square-size));inline-size:var(--mod-tooltip-tip-square-size,var(--spectrum-tooltip-tip-square-size));background-color:var(--highcontrast-tooltip-background-color-default,var(--mod-tooltip-background-color-default,var(--spectrum-tooltip-background-color-default)));clip-path:polygon(0 calc(0% - var(--mod-tooltip-tip-antialiasing-inset,var(--spectrum-tooltip-tip-antialiasing-inset))),50% var(--mod-tooltip-tip-height-percentage,var(--spectrum-tooltip-tip-height-percentage)),100% calc(0% - var(--mod-tooltip-tip-antialiasing-inset,var(--spectrum-tooltip-tip-antialiasing-inset))));inset-block-start:100%;position:absolute;left:50%;transform:translate(-50%)}:host([variant=info]) #tooltip #tip{background-color:var(--highcontrast-tooltip-background-color-informative,var(--mod-tooltip-background-color-informative,var(--spectrum-tooltip-background-color-informative)))}:host([variant=positive]) #tooltip #tip{background-color:var(--highcontrast-tooltip-background-color-positive,var(--mod-tooltip-background-color-positive,var(--spectrum-tooltip-background-color-positive)))}:host([variant=negative]) #tooltip #tip{background-color:var(--highcontrast-tooltip-background-color-negative,var(--mod-tooltip-background-color-negative,var(--spectrum-tooltip-background-color-negative)))}:host([placement*=top]) #tooltip #tip,.spectrum-Tooltip--top-end #tip,.spectrum-Tooltip--top-left #tip,.spectrum-Tooltip--top-right #tip,.spectrum-Tooltip--top-start #tip{inset-block-start:100%}:host([placement*=bottom]) #tooltip #tip,.spectrum-Tooltip--bottom-end #tip,.spectrum-Tooltip--bottom-left #tip,.spectrum-Tooltip--bottom-right #tip,.spectrum-Tooltip--bottom-start #tip{clip-path:polygon(50% calc(100% - var(--mod-tooltip-tip-height-percentage,var(--spectrum-tooltip-tip-height-percentage))),0 calc(100% + var(--mod-tooltip-tip-antialiasing-inset,var(--spectrum-tooltip-tip-antialiasing-inset))),100% calc(100% + var(--mod-tooltip-tip-antialiasing-inset,var(--spectrum-tooltip-tip-antialiasing-inset))));inset-block:auto 100%}.spectrum-Tooltip--bottom-end #tip,.spectrum-Tooltip--bottom-left #tip,.spectrum-Tooltip--bottom-right #tip,.spectrum-Tooltip--bottom-start #tip,.spectrum-Tooltip--top-end #tip,.spectrum-Tooltip--top-left #tip,.spectrum-Tooltip--top-right #tip,.spectrum-Tooltip--top-start #tip{transform:none}.spectrum-Tooltip--bottom-left #tip,.spectrum-Tooltip--top-left #tip{inset-inline-start:var(--mod-tooltip-pointer-corner-spacing,var(--spectrum-tooltip-pointer-corner-spacing))}.spectrum-Tooltip--bottom-right #tip,.spectrum-Tooltip--top-right #tip{inset-inline:auto var(--mod-tooltip-pointer-corner-spacing,var(--spectrum-tooltip-pointer-corner-spacing))}.spectrum-Tooltip--bottom-start #tip,.spectrum-Tooltip--top-start #tip{inset-inline:var(--mod-tooltip-pointer-corner-spacing,var(--spectrum-tooltip-pointer-corner-spacing))auto}.spectrum-Tooltip--bottom-start #tip:dir(rtl),.spectrum-Tooltip--top-start #tip:dir(rtl),:host([dir=rtl]) .spectrum-Tooltip--bottom-start #tip,:host([dir=rtl]) .spectrum-Tooltip--top-start #tip{right:var(--mod-tooltip-pointer-corner-spacing,var(--spectrum-tooltip-pointer-corner-spacing));left:auto}.spectrum-Tooltip--bottom-end #tip,.spectrum-Tooltip--top-end #tip{inset-inline:auto var(--mod-tooltip-pointer-corner-spacing,var(--spectrum-tooltip-pointer-corner-spacing))}.spectrum-Tooltip--bottom-end #tip:dir(rtl),.spectrum-Tooltip--top-end #tip:dir(rtl),:host([dir=rtl]) .spectrum-Tooltip--bottom-end #tip,:host([dir=rtl]) .spectrum-Tooltip--top-end #tip{left:var(--mod-tooltip-pointer-corner-spacing,var(--spectrum-tooltip-pointer-corner-spacing));right:auto}.spectrum-Tooltip--end #tip,.spectrum-Tooltip--end-bottom #tip,.spectrum-Tooltip--end-top #tip,:host([placement*=left]) #tooltip #tip,.spectrum-Tooltip--left-bottom #tip,.spectrum-Tooltip--left-top #tip,:host([placement*=right]) #tooltip #tip,.spectrum-Tooltip--right-bottom #tip,.spectrum-Tooltip--right-top #tip,.spectrum-Tooltip--start #tip,.spectrum-Tooltip--start-bottom #tip,.spectrum-Tooltip--start-top #tip{inset-block-start:50%;transform:translateY(-50%)}.spectrum-Tooltip--end-bottom #tip,.spectrum-Tooltip--end-top #tip,.spectrum-Tooltip--left-bottom #tip,.spectrum-Tooltip--left-top #tip,.spectrum-Tooltip--right-bottom #tip,.spectrum-Tooltip--right-top #tip,.spectrum-Tooltip--start-bottom #tip,.spectrum-Tooltip--start-top #tip{inset-block-start:auto;transform:none}.spectrum-Tooltip--end #tip,.spectrum-Tooltip--end-bottom #tip,.spectrum-Tooltip--end-top #tip,:host([placement*=right]) #tooltip #tip,.spectrum-Tooltip--right-bottom #tip,.spectrum-Tooltip--right-top #tip{clip-path:polygon(calc(100% - var(--mod-tooltip-tip-height-percentage,var(--spectrum-tooltip-tip-height-percentage)))50%,calc(100% + var(--mod-tooltip-tip-antialiasing-inset,var(--spectrum-tooltip-tip-antialiasing-inset)))100%,calc(100% + var(--mod-tooltip-tip-antialiasing-inset,var(--spectrum-tooltip-tip-antialiasing-inset)))0);inset-inline:auto 100%}:host([placement*=left]) #tooltip #tip,.spectrum-Tooltip--left-bottom #tip,.spectrum-Tooltip--left-top #tip,.spectrum-Tooltip--start #tip,.spectrum-Tooltip--start-bottom #tip,.spectrum-Tooltip--start-top #tip{clip-path:polygon(calc(0% - var(--mod-tooltip-tip-antialiasing-inset,var(--spectrum-tooltip-tip-antialiasing-inset)))0,calc(0% - var(--mod-tooltip-tip-antialiasing-inset,var(--spectrum-tooltip-tip-antialiasing-inset)))100%,var(--mod-tooltip-tip-height-percentage,var(--spectrum-tooltip-tip-height-percentage))50%);inset-inline-start:100%}.spectrum-Tooltip--end-top #tip,.spectrum-Tooltip--left-top #tip,.spectrum-Tooltip--right-top #tip,.spectrum-Tooltip--start-top #tip{inset-block-start:var(--mod-tooltip-pointer-corner-spacing,var(--spectrum-tooltip-pointer-corner-spacing))}.spectrum-Tooltip--end-bottom #tip,.spectrum-Tooltip--left-bottom #tip,.spectrum-Tooltip--right-bottom #tip,.spectrum-Tooltip--start-bottom #tip{inset-block-end:var(--mod-tooltip-pointer-corner-spacing,var(--spectrum-tooltip-pointer-corner-spacing))}.spectrum-Tooltip--end #tip:dir(rtl),.spectrum-Tooltip--end-bottom #tip:dir(rtl),.spectrum-Tooltip--end-top #tip:dir(rtl),:host([placement*=left]) #tooltip #tip:dir(rtl),.spectrum-Tooltip--left-bottom #tip:dir(rtl),.spectrum-Tooltip--left-top #tip:dir(rtl),:host([dir=rtl]) .spectrum-Tooltip--end #tip,:host([dir=rtl]) .spectrum-Tooltip--end-bottom #tip,:host([dir=rtl]) .spectrum-Tooltip--end-top #tip,:host([dir=rtl][placement*=left]) #tooltip #tip,:host([dir=rtl]) .spectrum-Tooltip--left-bottom #tip,:host([dir=rtl]) .spectrum-Tooltip--left-top #tip{clip-path:polygon(calc(0% - var(--mod-tooltip-tip-antialiasing-inset,var(--spectrum-tooltip-tip-antialiasing-inset)))0,calc(0% - var(--mod-tooltip-tip-antialiasing-inset,var(--spectrum-tooltip-tip-antialiasing-inset)))100%,var(--mod-tooltip-tip-height-percentage,var(--spectrum-tooltip-tip-height-percentage))50%);left:100%;right:auto}:host([placement*=right]) #tooltip #tip:dir(rtl),.spectrum-Tooltip--right-bottom #tip:dir(rtl),.spectrum-Tooltip--right-top #tip:dir(rtl),.spectrum-Tooltip--start #tip:dir(rtl),.spectrum-Tooltip--start-bottom #tip:dir(rtl),.spectrum-Tooltip--start-top #tip:dir(rtl),:host([dir=rtl][placement*=right]) #tooltip #tip,:host([dir=rtl]) .spectrum-Tooltip--right-bottom #tip,:host([dir=rtl]) .spectrum-Tooltip--right-top #tip,:host([dir=rtl]) .spectrum-Tooltip--start #tip,:host([dir=rtl]) .spectrum-Tooltip--start-bottom #tip,:host([dir=rtl]) .spectrum-Tooltip--start-top #tip{clip-path:polygon(var(--mod-tooltip-tip-height-percentage,var(--spectrum-tooltip-tip-height-percentage))50%,calc(100% + var(--mod-tooltip-tip-antialiasing-inset,var(--spectrum-tooltip-tip-antialiasing-inset)))100%,calc(100% + var(--mod-tooltip-tip-antialiasing-inset,var(--spectrum-tooltip-tip-antialiasing-inset)))0);left:auto;right:100%}::slotted([slot=icon]){inline-size:var(--mod-tooltip-icon-width,var(--spectrum-tooltip-icon-width));block-size:var(--mod-tooltip-icon-height,var(--spectrum-tooltip-icon-height));flex-shrink:0;align-self:flex-start;margin-block-start:var(--mod-tooltip-icon-spacing-block-start,var(--spectrum-tooltip-icon-spacing-block-start));margin-inline-start:calc(var(--mod-tooltip-icon-spacing-inline-start,var(--spectrum-tooltip-icon-spacing-inline-start)) - var(--mod-tooltip-spacing-inline,var(--spectrum-tooltip-spacing-inline)));margin-inline-end:var(--mod-tooltip-icon-spacing-inline-end,var(--spectrum-tooltip-icon-spacing-inline-end))}#label{line-height:var(--mod-tooltip-line-height,var(--spectrum-tooltip-line-height));margin-block-start:var(--mod-tooltip-spacing-block-start,var(--spectrum-tooltip-spacing-block-start));margin-block-end:var(--mod-tooltip-spacing-block-end,var(--spectrum-tooltip-spacing-block-end))}#tooltip,:host([placement*=top]) #tooltip,.spectrum-Tooltip--top-end,.spectrum-Tooltip--top-left,.spectrum-Tooltip--top-right,.spectrum-Tooltip--top-start{margin-block-end:calc(var(--mod-tooltip-tip-block-size,var(--spectrum-tooltip-tip-block-size)) + var(--mod-tooltip-margin,var(--spectrum-tooltip-margin)))}:host([open]) .spectrum-Tooltip--top-end,:host([open]) .spectrum-Tooltip--top-left,:host([open]) .spectrum-Tooltip--top-right,:host([open]) .spectrum-Tooltip--top-start,:host([placement*=top][open]) #tooltip,:host([open]) #tooltip{transform:translateY(calc(var(--mod-tooltip-animation-distance,var(--spectrum-tooltip-animation-distance))*-1))}:host([placement*=bottom]) #tooltip,.spectrum-Tooltip--bottom-end,.spectrum-Tooltip--bottom-left,.spectrum-Tooltip--bottom-right,.spectrum-Tooltip--bottom-start{margin-block-start:calc(var(--mod-tooltip-tip-block-size,var(--spectrum-tooltip-tip-block-size)) + var(--mod-tooltip-margin,var(--spectrum-tooltip-margin)))}:host([open]) .spectrum-Tooltip--bottom-end,:host([open]) .spectrum-Tooltip--bottom-left,:host([open]) .spectrum-Tooltip--bottom-right,:host([open]) .spectrum-Tooltip--bottom-start,:host([placement*=bottom][open]) #tooltip{transform:translateY(var(--mod-tooltip-animation-distance,var(--spectrum-tooltip-animation-distance)))}:host([placement*=right]) #tooltip,.spectrum-Tooltip--right-bottom,.spectrum-Tooltip--right-top{margin-left:calc(var(--mod-tooltip-tip-block-size,var(--spectrum-tooltip-tip-block-size)) + var(--mod-tooltip-margin,var(--spectrum-tooltip-margin)))}:host([open]) .spectrum-Tooltip--right-bottom,:host([open]) .spectrum-Tooltip--right-top,:host([placement*=right][open]) #tooltip{transform:translateX(var(--mod-tooltip-animation-distance,var(--spectrum-tooltip-animation-distance)))}:host([placement*=left]) #tooltip,.spectrum-Tooltip--left-bottom,.spectrum-Tooltip--left-top{margin-right:calc(var(--mod-tooltip-tip-block-size,var(--spectrum-tooltip-tip-block-size)) + var(--mod-tooltip-margin,var(--spectrum-tooltip-margin)))}:host([open]) .spectrum-Tooltip--left-bottom,:host([open]) .spectrum-Tooltip--left-top,:host([placement*=left][open]) #tooltip{transform:translateX(calc(var(--mod-tooltip-animation-distance,var(--spectrum-tooltip-animation-distance))*-1))}.spectrum-Tooltip--start,.spectrum-Tooltip--start-bottom,.spectrum-Tooltip--start-top{margin-inline-end:calc(var(--mod-tooltip-tip-block-size,var(--spectrum-tooltip-tip-block-size)) + var(--mod-tooltip-margin,var(--spectrum-tooltip-margin)))}:host([open]) .spectrum-Tooltip--start-bottom,:host([open]) .spectrum-Tooltip--start-top,:host([open]) .spectrum-Tooltip--start{transform:translateX(calc(var(--mod-tooltip-animation-distance,var(--spectrum-tooltip-animation-distance))*-1))}:host([open]) .spectrum-Tooltip--start-bottom:dir(rtl),:host([open]) .spectrum-Tooltip--start-top:dir(rtl),:host([open]) .spectrum-Tooltip--start:dir(rtl),:host([dir=rtl][open]) .spectrum-Tooltip--start-bottom,:host([dir=rtl][open]) .spectrum-Tooltip--start-top,:host([dir=rtl][open]) .spectrum-Tooltip--start{transform:translateX(var(--mod-tooltip-animation-distance,var(--spectrum-tooltip-animation-distance)))}.spectrum-Tooltip--end,.spectrum-Tooltip--end-bottom,.spectrum-Tooltip--end-top{margin-inline-start:calc(var(--mod-tooltip-tip-block-size,var(--spectrum-tooltip-tip-block-size)) + var(--mod-tooltip-margin,var(--spectrum-tooltip-margin)))}:host([open]) .spectrum-Tooltip--end-bottom,:host([open]) .spectrum-Tooltip--end-top,:host([open]) .spectrum-Tooltip--end{transform:translateX(var(--mod-tooltip-animation-distance,var(--spectrum-tooltip-animation-distance)))}:host([open]) .spectrum-Tooltip--end-bottom:dir(rtl),:host([open]) .spectrum-Tooltip--end-top:dir(rtl),:host([open]) .spectrum-Tooltip--end:dir(rtl),:host([dir=rtl][open]) .spectrum-Tooltip--end-bottom,:host([dir=rtl][open]) .spectrum-Tooltip--end-top,:host([dir=rtl][open]) .spectrum-Tooltip--end{transform:translateX(calc(var(--mod-tooltip-animation-distance,var(--spectrum-tooltip-animation-distance))*-1))}#tooltip{--spectrum-tooltip-backgound-color-default-neutral:var(--system-spectrum-tooltip-backgound-color-default-neutral)}:host{white-space:initial;display:contents}#tooltip{inline-size:max-content}#tip{clip-path:polygon(0 -5%,50% 50%,100% -5%);width:var(--spectrum-tooltip-tip-inline-size)!important;height:var(--spectrum-tooltip-tip-inline-size)!important}#tip[style]{transform:none!important}:host(:not([placement*=top])) #tooltip{margin-bottom:0}:host([placement*=top]) #tooltip #tip{inset-block-start:100%}:host([placement*=bottom]) #tooltip #tip{clip-path:polygon(50% 50%,0 105%,100% 105%);inset-block-end:100%;top:auto}:host([placement*=left]) #tooltip #tip,:host([placement*=right]) #tooltip #tip{inset-block-start:50%;transform:translateY(-50%)}:host([placement*=right]) #tooltip #tip{clip-path:polygon(50% 50%,105% 100%,105% 0);inset-inline:calc(var(--mod-tooltip-tip-block-size,var(--spectrum-tooltip-tip-block-size))*-2)100%}:host([placement*=left]) #tooltip #tip{clip-path:polygon(-5% 0,-5% 100%,50% 50%);inset-inline-start:100%}sp-overlay:not(:defined){display:none}
`;
var tooltip_css_default = o;

// node_modules/@spectrum-web-components/tooltip/src/Tooltip.js
import { focusableSelector as b } from "/libs/features/spectrum-web-components/dist/shared.js";
import { DependencyManagerController as f } from "/libs/features/spectrum-web-components/dist/reactive-controllers.js";
var c = Object.defineProperty;
var m = Object.getOwnPropertyDescriptor;
var o2 = (r, s, e2, t2) => {
  for (var n = t2 > 1 ? void 0 : t2 ? m(s, e2) : s, i = r.length - 1, l; i >= 0; i--)
    (l = r[i]) && (n = (t2 ? l(s, e2, n) : l(n)) || n);
  return t2 && n && c(s, e2, n), n;
};
var g = class extends HTMLElement {
  constructor() {
    super();
    this._open = false;
    this._placement = "top";
    this.addEventListener("sp-opened", this.redispatchEvent), this.addEventListener("sp-closed", this.redispatchEvent);
  }
  redispatchEvent(e2) {
    e2.stopPropagation(), this.tooltip.dispatchEvent(new CustomEvent(e2.type, { bubbles: e2.bubbles, composed: e2.composed, detail: e2.detail }));
  }
  get tooltip() {
    return this.getRootNode().host;
  }
  static get observedAttributes() {
    return ["open", "placement"];
  }
  attributeChangedCallback(e2, t2, n) {
    switch (e2) {
      case "open":
        this.open = n !== null;
        break;
      case "placement":
        this.placement = n;
        break;
    }
  }
  set open(e2) {
    this._open = e2;
    const { tooltip: t2 } = this;
    t2 && (t2.open = e2);
  }
  get open() {
    return this._open;
  }
  set placement(e2) {
    this._placement = e2;
    const { tooltip: t2 } = this;
    t2 && (t2.placement = e2);
  }
  get placement() {
    return this._placement;
  }
  get tipElement() {
    return this.tooltip.tipElement;
  }
};
customElements.get("sp-tooltip-openable") || customElements.define("sp-tooltip-openable", g);
var Tooltip = class extends h {
  constructor() {
    super(...arguments);
    this.delayed = false;
    this.dependencyManager = new f(this);
    this.disabled = false;
    this.selfManaged = false;
    this.offset = 0;
    this.open = false;
    this._variant = "";
    this.handleOpenOverlay = () => {
      this.open = true;
    };
    this.handleCloseOverlay = () => {
      this.open = false;
    };
  }
  static get styles() {
    return [tooltip_css_default];
  }
  get variant() {
    return this._variant;
  }
  set variant(e2) {
    if (e2 !== this.variant) {
      if (["info", "positive", "negative"].includes(e2)) {
        this.setAttribute("variant", e2), this._variant = e2;
        return;
      }
      this.removeAttribute("variant"), this._variant = "";
    }
  }
  forwardTransitionEvent(e2) {
    this.dispatchEvent(new TransitionEvent(e2.type, { bubbles: true, composed: true, propertyName: e2.propertyName }));
  }
  get triggerElement() {
    var i;
    let e2 = this.assignedSlot || this, t2 = e2.getRootNode();
    if (t2 === document)
      return null;
    let n = e2.parentElement || t2.host || t2;
    for (; !((i = n == null ? void 0 : n.matches) != null && i.call(n, b)); ) {
      if (e2 = n.assignedSlot || n, t2 = e2.getRootNode(), t2 === document)
        return null;
      n = e2.parentElement || t2.host || t2;
    }
    return n;
  }
  render() {
    const e2 = p`
            <sp-tooltip-openable
                id="tooltip"
                placement=${u(this.placement)}
                @transitionrun=${this.forwardTransitionEvent}
                @transitionend=${this.forwardTransitionEvent}
                @transitioncancel=${this.forwardTransitionEvent}
            >
                <slot name="icon"></slot>
                <span id="label"><slot></slot></span>
                <span id="tip" aria-hidden="true"></span>
            </sp-tooltip-openable>
        `;
    return this.selfManaged ? (this.dependencyManager.add("sp-overlay"), import("/libs/features/spectrum-web-components/dist/overlay.js"), p`
                <sp-overlay
                    ?open=${this.open && !this.disabled && this.dependencyManager.loaded}
                    ?delayed=${this.delayed}
                    ?disabled=${this.disabled}
                    offset=${this.offset}
                    .placement=${this.placement}
                    type="hint"
                    .tipPadding=${this.tipPadding}
                    .triggerInteraction=${"hover"}
                    @sp-opened=${this.handleOpenOverlay}
                    @sp-closed=${this.handleCloseOverlay}
                >
                    ${e2}
                </sp-overlay>
            `) : e2;
  }
  connectedCallback() {
    super.connectedCallback(), this.updateComplete.then(() => {
      if (!this.selfManaged)
        return;
      const e2 = this.overlayElement;
      if (e2) {
        const t2 = this.triggerElement;
        e2.triggerElement = t2;
      }
    });
  }
};
o2([a({ type: Boolean })], Tooltip.prototype, "delayed", 2), o2([a({ type: Boolean })], Tooltip.prototype, "disabled", 2), o2([a({ type: Boolean, attribute: "self-managed" })], Tooltip.prototype, "selfManaged", 2), o2([a({ type: Number })], Tooltip.prototype, "offset", 2), o2([a({ type: Boolean, reflect: true })], Tooltip.prototype, "open", 2), o2([d("sp-overlay")], Tooltip.prototype, "overlayElement", 2), o2([a({ reflect: true })], Tooltip.prototype, "placement", 2), o2([d("#tip")], Tooltip.prototype, "tipElement", 2), o2([a({ type: Number })], Tooltip.prototype, "tipPadding", 2), o2([a({ type: String })], Tooltip.prototype, "variant", 1);

// node_modules/@spectrum-web-components/tooltip/sp-tooltip.js
import { defineElement as e } from "/libs/features/spectrum-web-components/dist/base.js";
e("sp-tooltip", Tooltip);
//# sourceMappingURL=tooltip.js.map

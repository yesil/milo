// node_modules/@spectrum-web-components/checkbox/src/Checkbox.js
import { html as t, SizedMixin as u2, SpectrumElement as p2 } from "/libs/features/spectrum-web-components/dist/base.js";
import { property as a2 } from "/libs/features/spectrum-web-components/dist/base.js";

// node_modules/@spectrum-web-components/checkbox/src/CheckboxMixin.js
import { html as u } from "/libs/features/spectrum-web-components/dist/base.js";
import { property as h, query as s } from "/libs/features/spectrum-web-components/dist/base.js";
import { ifDefined as d } from "/libs/features/spectrum-web-components/dist/base.js";
var a = Object.defineProperty;
var p = Object.getOwnPropertyDescriptor;
var c = (i, e, r2, n) => {
  for (var t2 = n > 1 ? void 0 : n ? p(e, r2) : e, o3 = i.length - 1, l; o3 >= 0; o3--)
    (l = i[o3]) && (t2 = (n ? l(e, r2, t2) : l(t2)) || t2);
  return n && t2 && a(e, r2, t2), t2;
};
function CheckboxMixin(i) {
  class e extends i {
    constructor() {
      super(...arguments);
      this.checked = false;
      this.readonly = false;
    }
    handleChange() {
      if (this.readonly) {
        this.inputElement.checked = this.checked;
        return;
      }
      this.checked = this.inputElement.checked;
      const t2 = new CustomEvent("change", { bubbles: true, cancelable: true, composed: true });
      this.dispatchEvent(t2) || (this.checked = !this.inputElement.checked, this.inputElement.checked = this.checked);
    }
    render() {
      return u`
                <input
                    id="input"
                    name=${d(this.name || void 0)}
                    type="checkbox"
                    .checked=${this.checked}
                    ?disabled=${this.readonly}
                    @change=${this.handleChange}
                />
            `;
    }
  }
  return c([h({ type: Boolean, reflect: true })], e.prototype, "checked", 2), c([h({ type: String, reflect: true })], e.prototype, "name", 2), c([h({ type: Boolean, reflect: true })], e.prototype, "readonly", 2), c([s("#input")], e.prototype, "inputElement", 2), e;
}

// node_modules/@spectrum-web-components/checkbox/src/checkbox.css.js
import { css as o } from "/libs/features/spectrum-web-components/dist/base.js";
var c2 = o`
    :host{--spectrum-checkbox-content-color-default:var(--spectrum-neutral-content-color-default);--spectrum-checkbox-content-color-hover:var(--spectrum-neutral-content-color-hover);--spectrum-checkbox-content-color-down:var(--spectrum-neutral-content-color-down);--spectrum-checkbox-content-color-focus:var(--spectrum-neutral-content-color-key-focus);--spectrum-checkbox-focus-indicator-color:var(--spectrum-focus-indicator-color);--spectrum-checkbox-content-color-disabled:var(--spectrum-disabled-content-color);--spectrum-checkbox-control-color-disabled:var(--spectrum-disabled-content-color);--spectrum-checkbox-checkmark-color:var(--spectrum-gray-75);--spectrum-checkbox-invalid-color-default:var(--spectrum-negative-color-900);--spectrum-checkbox-invalid-color-hover:var(--spectrum-negative-color-1000);--spectrum-checkbox-invalid-color-down:var(--spectrum-negative-color-1100);--spectrum-checkbox-invalid-color-focus:var(--spectrum-negative-color-1000);--spectrum-checkbox-emphasized-color-default:var(--spectrum-accent-color-900);--spectrum-checkbox-emphasized-color-hover:var(--spectrum-accent-color-1000);--spectrum-checkbox-emphasized-color-down:var(--spectrum-accent-color-1100);--spectrum-checkbox-emphasized-color-focus:var(--spectrum-accent-color-1000);--spectrum-checkbox-control-selected-color-default:var(--spectrum-neutral-background-color-selected-default);--spectrum-checkbox-control-selected-color-hover:var(--spectrum-neutral-background-color-selected-hover);--spectrum-checkbox-control-selected-color-down:var(--spectrum-neutral-background-color-selected-down);--spectrum-checkbox-control-selected-color-focus:var(--spectrum-neutral-background-color-selected-key-focus);--spectrum-checkbox-font-size:var(--spectrum-font-size-100);--spectrum-checkbox-line-height:var(--spectrum-line-height-100);--spectrum-checkbox-line-height-cjk:var(--spectrum-cjk-line-height-100);--spectrum-checkbox-height:var(--spectrum-component-height-100);--spectrum-checkbox-control-size:var(--spectrum-checkbox-control-size-medium);--spectrum-checkbox-control-corner-radius:var(--spectrum-corner-radius-75);--spectrum-checkbox-focus-indicator-gap:var(--spectrum-focus-indicator-gap);--spectrum-checkbox-focus-indicator-thickness:var(--spectrum-focus-indicator-thickness);--spectrum-checkbox-border-width:var(--spectrum-border-width-200);--spectrum-checkbox-selected-border-width:calc(var(--spectrum-checkbox-control-size)/2);--spectrum-checkbox-top-to-text:var(--spectrum-component-top-to-text-100);--spectrum-checkbox-text-to-control:var(--spectrum-text-to-control-100);--spectrum-checkbox-animation-duration:var(--spectrum-animation-duration-100)}:host([size=s]){--spectrum-checkbox-font-size:var(--spectrum-font-size-75);--spectrum-checkbox-height:var(--spectrum-component-height-75);--spectrum-checkbox-control-size:var(--spectrum-checkbox-control-size-small);--spectrum-checkbox-top-to-text:var(--spectrum-component-top-to-text-75);--spectrum-checkbox-text-to-control:var(--spectrum-text-to-control-75)}:host{--spectrum-checkbox-font-size:var(--spectrum-font-size-100);--spectrum-checkbox-height:var(--spectrum-component-height-100);--spectrum-checkbox-control-size:var(--spectrum-checkbox-control-size-medium);--spectrum-checkbox-top-to-text:var(--spectrum-component-top-to-text-100);--spectrum-checkbox-text-to-control:var(--spectrum-text-to-control-100)}:host([size=l]){--spectrum-checkbox-font-size:var(--spectrum-font-size-200);--spectrum-checkbox-height:var(--spectrum-component-height-200);--spectrum-checkbox-control-size:var(--spectrum-checkbox-control-size-large);--spectrum-checkbox-top-to-text:var(--spectrum-component-top-to-text-200);--spectrum-checkbox-text-to-control:var(--spectrum-text-to-control-200)}:host([size=xl]){--spectrum-checkbox-font-size:var(--spectrum-font-size-300);--spectrum-checkbox-height:var(--spectrum-component-height-300);--spectrum-checkbox-control-size:var(--spectrum-checkbox-control-size-extra-large);--spectrum-checkbox-top-to-text:var(--spectrum-component-top-to-text-300);--spectrum-checkbox-text-to-control:var(--spectrum-text-to-control-300)}:host{color:var(--highcontrast-checkbox-content-color-default,var(--mod-checkbox-content-color-default,var(--spectrum-checkbox-content-color-default)));min-block-size:var(--mod-checkbox-height,var(--spectrum-checkbox-height));max-inline-size:100%;vertical-align:top;align-items:flex-start;display:inline-flex;position:relative}:host(:is(:active,[active])) #box:before{border-color:var(--highcontrast-checkbox-highlight-color-down,var(--mod-checkbox-control-color-down,var(--spectrum-checkbox-control-color-down)))}:host(:is(:active,[active])) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-highlight-color-down,var(--mod-checkbox-control-selected-color-down,var(--spectrum-checkbox-control-selected-color-down)))}:host(:is(:active,[active])) #label{color:var(--highcontrast-checkbox-content-color-down,var(--mod-checkbox-content-color-down,var(--spectrum-checkbox-content-color-down)))}:host([invalid][invalid]) #box:before,:host([invalid][invalid]) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-color-default,var(--mod-checkbox-invalid-color-default,var(--spectrum-checkbox-invalid-color-default)))}:host([invalid][invalid]) #input:focus-visible+#box:before,:host([invalid][invalid][indeterminate]) #input:focus-visible+#box:before{border-color:var(--highcontrast-checkbox-color-hover,var(--mod-checkbox-invalid-color-hover,var(--spectrum-checkbox-invalid-color-hover)))}:host([readonly]){border-color:var(--highcontrast-checkbox-color-default,var(--mod-checkbox-control-selected-color-default,var(--spectrum-checkbox-control-selected-color-default)))}:host([readonly]:is(:active,[active])) #box:before{border-color:var(--highcontrast-checkbox-selected-color-default,var(--mod-checkbox-control-selected-color-default,var(--spectrum-checkbox-control-selected-color-default)))}:host([readonly]) #input:checked:disabled+#box:before,:host([readonly]) #input:disabled+#box:before{border-color:var(--highcontrast-checkbox-color-default,var(--mod-checkbox-control-selected-color-default,var(--spectrum-checkbox-control-selected-color-default)));background-color:var(--highcontrast-checkbox-background-color-default,var(--mod-checkbox-checkmark-color,var(--spectrum-checkbox-checkmark-color)))}:host([readonly]) #input:checked:disabled~#label,:host([readonly]) #input:disabled~#label{forced-color-adjust:none;color:var(--highcontrast-checkbox-color-default,var(--mod-checkbox-content-color-default,var(--spectrum-checkbox-content-color-default)))}:host([indeterminate]) #box:before,:host([indeterminate]) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-highlight-color-default,var(--mod-checkbox-control-selected-color-default,var(--spectrum-checkbox-control-selected-color-default)));border-width:var(--mod-checkbox-selected-border-width,var(--spectrum-checkbox-selected-border-width))}:host([indeterminate]) #box #checkmark,:host([indeterminate]) #input:checked+#box #checkmark{display:none}:host([indeterminate]) #box #partialCheckmark,:host([indeterminate]) #input:checked+#box #partialCheckmark{opacity:1;display:block;transform:scale(1)}:host([indeterminate]) #input:focus-visible+#box:before{border-color:var(--highcontrast-checkbox-highlight-color-focus,var(--mod-checkbox-control-selected-color-focus,var(--spectrum-checkbox-control-selected-color-focus)))}:host([invalid][invalid][indeterminate]) #box:before,:host([invalid][invalid][indeterminate]) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-color-default,var(--mod-checkbox-invalid-color-default,var(--spectrum-checkbox-invalid-color-default)));border-width:var(--mod-checkbox-selected-border-width,var(--spectrum-checkbox-selected-border-width))}:host([emphasized]) #input:checked+#box:before,:host([emphasized][indeterminate]) #box:before,:host([emphasized][indeterminate]) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-highlight-color-default,var(--mod-checkbox-emphasized-color-default,var(--spectrum-checkbox-emphasized-color-default)))}:host([emphasized]) #input:focus-visible:checked+#box:before,:host([emphasized][indeterminate]) #input:focus-visible+#box:before{border-color:var(--highcontrast-checkbox-highlight-color-focus,var(--mod-checkbox-emphasized-color-focus,var(--spectrum-checkbox-emphasized-color-focus)))}:host([emphasized][invalid][invalid]) #input:focus-visible:checked+#box:before{border-color:var(--highcontrast-checkbox-color-default,var(--mod-checkbox-invalid-color-focus,var(--spectrum-checkbox-invalid-color-focus)))}@media (hover:hover){:host(:hover) #box:before{border-color:var(--highcontrast-checkbox-highlight-color-hover,var(--mod-checkbox-control-color-hover,var(--spectrum-checkbox-control-color-hover)))}:host(:hover) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-highlight-color-hover,var(--mod-checkbox-control-selected-color-hover,var(--spectrum-checkbox-control-selected-color-hover)))}:host(:hover) #label{color:var(--highcontrast-checkbox-content-color-hover,var(--mod-checkbox-content-color-hover,var(--spectrum-checkbox-content-color-hover)))}:host([invalid][invalid]:hover) #box:before,:host([invalid][invalid]:hover) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-color-hover,var(--mod-checkbox-invalid-color-hover,var(--spectrum-checkbox-invalid-color-hover)))}:host([readonly]:hover) #box:before{border-color:var(--highcontrast-checkbox-color-default,var(--mod-checkbox-control-selected-color-default,var(--spectrum-checkbox-control-selected-color-default)))}:host([indeterminate]:hover) #box:before,:host([indeterminate]:hover) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-highlight-color-hover,var(--mod-checkbox-control-selected-color-hover,var(--spectrum-checkbox-control-selected-color-hover)))}:host([invalid][invalid][indeterminate]:hover) #box:before,:host([invalid][invalid][indeterminate]:hover) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-color-default,var(--mod-checkbox-invalid-color-hover,var(--spectrum-checkbox-invalid-color-hover)))}:host([invalid][invalid][indeterminate]:hover) #label{color:var(--highcontrast-checkbox-content-color-hover,var(--mod-checkbox-content-color-hover,var(--spectrum-checkbox-content-color-hover)))}:host([emphasized][indeterminate]:hover) #box:before,:host([emphasized][indeterminate]:hover) #input:checked+#box:before,:host([emphasized]:hover) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-color-hover,var(--mod-checkbox-emphasized-color-hover,var(--spectrum-checkbox-emphasized-color-hover)))}:host([emphasized][invalid][invalid][indeterminate]:hover) #box:before,:host([emphasized][invalid][invalid][indeterminate]:hover) #input:checked+#box:before,:host([emphasized][invalid][invalid]:hover) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-color-hover,var(--mod-checkbox-invalid-color-hover,var(--spectrum-checkbox-invalid-color-hover)))}:host([emphasized][indeterminate]:hover) #box:before,:host([emphasized][indeterminate]:hover) #input:checked+#box:before,:host([emphasized]:hover) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-highlight-color-hover,var(--mod-checkbox-emphasized-color-hover,var(--spectrum-checkbox-emphasized-color-hover)))}}:host([emphasized][indeterminate]:is(:active,[active])) #box:before,:host([emphasized][indeterminate]:is(:active,[active])) #input:checked+#box:before,:host([emphasized]:is(:active,[active])) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-highlight-color-default,var(--mod-checkbox-emphasized-color-down,var(--spectrum-checkbox-emphasized-color-down)))}:host([emphasized][invalid][invalid]:is(:active,[active])) #box:before,:host([emphasized][invalid][invalid]:is(:active,[active])) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-highlight-color-default,var(--mod-checkbox-control-invalid-color-down,var(--spectrum-checkbox-invalid-color-down)))}:host([emphasized]:focus-visible) #box:before,:host([emphasized]:focus-visible) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-color-focus,var(--mod-checkbox-control-color-focus,var(--spectrum-checkbox-control-color-focus)))}#label{text-align:start;font-size:var(--mod-checkbox-font-size,var(--spectrum-checkbox-font-size));transition:color var(--mod-checkbox-animation-duration,var(--spectrum-checkbox-animation-duration))ease-in-out;line-height:var(--mod-checkbox-line-height,var(--spectrum-checkbox-line-height));margin-block-start:var(--mod-checkbox-top-to-text,var(--spectrum-checkbox-top-to-text));margin-inline-start:var(--mod-checkbox-text-to-control,var(--spectrum-checkbox-text-to-control))}#label:lang(ja),#label:lang(ko),#label:lang(zh){line-height:var(--mod-checkbox-line-height-cjk,var(--spectrum-checkbox-line-height-cjk))}#input{color:var(--mod-checkbox-control-color-default,var(--spectrum-checkbox-control-color-default));box-sizing:border-box;inline-size:100%;block-size:100%;opacity:.0001;z-index:1;cursor:pointer;margin:0;padding:0;font-family:inherit;font-size:100%;line-height:1.15;position:absolute;overflow:visible}#input:disabled{cursor:default}#input:checked+#box:before{border-color:var(--highcontrast-checkbox-highlight-color-default,var(--mod-checkbox-control-selected-color-default,var(--spectrum-checkbox-control-selected-color-default)));background-color:var(--mod-checkbox-checkmark-color,var(--spectrum-checkbox-checkmark-color));border-width:var(--mod-checkbox-selected-border-width,var(--spectrum-checkbox-selected-border-width))}#input:checked+#box #checkmark{opacity:1;transform:scale(1)}#input:focus-visible+#box:before{border-color:var(--highcontrast-checkbox-color-focus,var(--mod-checkbox-control-color-focus,var(--spectrum-checkbox-control-color-focus)))}#input:focus-visible+#box:after{forced-color-adjust:none;box-shadow:0 0 0 var(--mod-checkbox-focus-indicator-thinkness,var(--spectrum-checkbox-focus-indicator-thickness))var(--highcontrast-checkbox-focus-indicator-color,var(--mod-checkbox-focus-indicator-color,var(--spectrum-checkbox-focus-indicator-color)));margin:calc(var(--mod-checkbox-focus-indicator-gap,var(--spectrum-checkbox-focus-indicator-gap))*-1)}#input:focus-visible+#label{color:var(--highcontrast-checkbox-content-color-focus,var(--mod-checkbox-content-color-focus,var(--spectrum-checkbox-content-color-focus)))}#input:focus-visible:checked+#box:before{border-color:var(--highcontrast-checkbox-highlight-color-focus,var(--mod-checkbox-control-selected-color-focus,var(--spectrum-checkbox-control-selected-color-focus)))}#box{--spectrum-checkbox-spacing:calc(var(--mod-checkbox-height,var(--spectrum-checkbox-height)) - var(--mod-checkbox-control-size,var(--spectrum-checkbox-control-size)));margin:calc(var(--mod-checkbox-spacing,var(--spectrum-checkbox-spacing))/2)0;flex-grow:0;flex-shrink:0;justify-content:center;align-items:center;display:flex;position:relative}#box,#box:before{box-sizing:border-box;inline-size:var(--mod-checkbox-control-size,var(--spectrum-checkbox-control-size));block-size:var(--mod-checkbox-control-size,var(--spectrum-checkbox-control-size))}#box:before{forced-color-adjust:none;border-color:var(--highcontrast-checkbox-color-default,var(--mod-checkbox-control-color-default,var(--spectrum-checkbox-control-color-default)));z-index:0;content:"";border-radius:var(--mod-checkbox-control-corner-radius,var(--spectrum-checkbox-control-corner-radius));border-width:var(--mod-checkbox-border-width,var(--spectrum-checkbox-border-width));transition:border var(--mod-checkbox-animation-duration,var(--spectrum-checkbox-animation-duration))ease-in-out,box-shadow var(--mod-checkbox-animation-duration,var(--spectrum-checkbox-animation-duration))ease-in-out;border-style:solid;display:block;position:absolute}#box:after{border-radius:calc(var(--mod-checkbox-control-corner-radius,var(--spectrum-checkbox-control-corner-radius)) + var(--mod-checkbox-focus-indicator-gap,var(--spectrum-checkbox-focus-indicator-gap)));content:"";margin:var(--mod-checkbox-focus-indicator-gap,var(--spectrum-checkbox-focus-indicator-gap));transition:box-shadow var(--mod-checkbox-animation-duration,var(--spectrum-checkbox-animation-duration))ease-out,margin var(--mod-checkbox-animation-duration,var(--spectrum-checkbox-animation-duration))ease-out;display:block;position:absolute;inset-block:0;inset-inline:0;transform:translate(0)}#checkmark,#partialCheckmark{color:var(--highcontrast-checkbox-background-color-default,var(--mod-checkbox-checkmark-color,var(--spectrum-checkbox-checkmark-color)));opacity:0;transition:opacity var(--mod-checkbox-animation-duration,var(--spectrum-checkbox-animation-duration))ease-in-out,transform var(--mod-checkbox-animation-duration,var(--spectrum-checkbox-animation-duration))ease-in-out;transform:scale(0)}#partialCheckmark{display:none}#input:checked:disabled+#box:before,#input:disabled+#box:before{border-color:var(--highcontrast-checkbox-disabled-color-default,var(--mod-checkbox-control-color-disabled,var(--spectrum-checkbox-control-color-disabled)));background-color:var(--highcontrast-checkbox-background-color-default,var(--mod-checkbox-checkmark-color,var(--spectrum-checkbox-checkmark-color)))}#input:checked:disabled~#label,#input:disabled~#label{forced-color-adjust:none;color:var(--highcontrast-checkbox-disabled-color-default,var(--mod-checkbox-content-color-disabled,var(--spectrum-checkbox-content-color-disabled)))}@media (forced-colors:active){#input:focus-visible+#box{forced-color-adjust:none;outline-color:var(--highcontrast-checkbox-focus-indicator-color,var(--mod-checkbox-focus-indicator-color,var(--spectrum-checkbox-focus-indicator-color)));outline-offset:var(--highcontrast-checkbox-focus-indicator-gap,var(--mod-checkbox-focus-indicator-gap,var(--spectrum-checkbox-focus-indicator-gap)));outline-style:auto;outline-width:var(--mod-focus-indicator-thickness,var(--spectrum-focus-indicator-thickness))}#input:focus-visible+#box:after{box-shadow:0 0 0 0 var(--highcontrast-checkbox-focus-indicator-color,var(--mod-checkbox-focus-indicator-color,var(--spectrum-checkbox-focus-indicator-color)))}:host{--highcontrast-checkbox-content-color-default:CanvasText;--highcontrast-checkbox-content-color-hover:CanvasText;--highcontrast-checkbox-content-color-down:CanvasText;--highcontrast-checkbox-content-color-focus:CanvasText;--highcontrast-checkbox-background-color-default:Canvas;--highcontrast-checkbox-color-default:ButtonText;--highcontrast-checkbox-color-hover:ButtonText;--highcontrast-checkbox-color-focus:Highlight;--highcontrast-checkbox-highlight-color-default:Highlight;--highcontrast-checkbox-highlight-color-hover:Highlight;--highcontrast-checkbox-highlight-color-down:Highlight;--highcontrast-checkbox-highlight-color-focus:Highlight;--highcontrast-checkbox-disabled-color-default:GrayText;--highcontrast-checkbox-focus-indicator-color:CanvasText}}:host{--spectrum-checkbox-control-color-default:var(--system-spectrum-checkbox-control-color-default);--spectrum-checkbox-control-color-hover:var(--system-spectrum-checkbox-control-color-hover);--spectrum-checkbox-control-color-down:var(--system-spectrum-checkbox-control-color-down);--spectrum-checkbox-control-color-focus:var(--system-spectrum-checkbox-control-color-focus)}:host{vertical-align:top;display:inline-flex}:host(:focus){outline:none}:host([disabled]){pointer-events:none}:host(:empty) label{display:none}
`;
var checkbox_css_default = c2;

// node_modules/@spectrum-web-components/checkbox/src/Checkbox.js
import "/libs/features/spectrum-web-components/dist/icons-ui.js";
import "/libs/features/spectrum-web-components/dist/icons-ui.js";
import "/libs/features/spectrum-web-components/dist/icons-ui.js";
import "/libs/features/spectrum-web-components/dist/icons-ui.js";
import "/libs/features/spectrum-web-components/dist/icons-ui.js";
import "/libs/features/spectrum-web-components/dist/icons-ui.js";
import "/libs/features/spectrum-web-components/dist/icons-ui.js";
import "/libs/features/spectrum-web-components/dist/icons-ui.js";
import b from "/libs/features/spectrum-web-components/dist/icons/checkmark.js";
import f from "/libs/features/spectrum-web-components/dist/icons/dash.js";
var d2 = Object.defineProperty;
var m = Object.getOwnPropertyDescriptor;
var r = (n, s2, e, c3) => {
  for (var i = c3 > 1 ? void 0 : c3 ? m(s2, e) : s2, l = n.length - 1, o3; l >= 0; l--)
    (o3 = n[l]) && (i = (c3 ? o3(s2, e, i) : o3(i)) || i);
  return c3 && i && d2(s2, e, i), i;
};
var I = { s: () => t`
            <sp-icon-checkmark75
                id="checkmark"
                class="spectrum-Icon spectrum-UIIcon-Checkmark75"
            ></sp-icon-checkmark75>
        `, m: () => t`
            <sp-icon-checkmark100
                id="checkmark"
                class="spectrum-Icon spectrum-UIIcon-Checkmark100"
            ></sp-icon-checkmark100>
        `, l: () => t`
            <sp-icon-checkmark200
                id="checkmark"
                class="spectrum-Icon spectrum-UIIcon-Checkmark200"
            ></sp-icon-checkmark200>
        `, xl: () => t`
            <sp-icon-checkmark300
                id="checkmark"
                class="spectrum-Icon spectrum-UIIcon-Checkmark300"
            ></sp-icon-checkmark300>
        ` };
var v = { s: () => t`
            <sp-icon-dash75
                id="partialCheckmark"
                class="spectrum-Icon spectrum-UIIcon-Dash75"
            ></sp-icon-dash75>
        `, m: () => t`
            <sp-icon-dash100
                id="partialCheckmark"
                class="spectrum-Icon spectrum-UIIcon-Dash100"
            ></sp-icon-dash100>
        `, l: () => t`
            <sp-icon-dash200
                id="partialCheckmark"
                class="spectrum-Icon spectrum-UIIcon-Dash200"
            ></sp-icon-dash200>
        `, xl: () => t`
            <sp-icon-dash300
                id="partialCheckmark"
                class="spectrum-Icon spectrum-UIIcon-Dash300"
            ></sp-icon-dash300>
        ` };
var Checkbox = class extends u2(CheckboxMixin(p2), { noDefaultSize: true }) {
  constructor() {
    super(...arguments);
    this.disabled = false;
    this.indeterminate = false;
    this.invalid = false;
    this.emphasized = false;
    this.tabIndex = 0;
  }
  connectedCallback() {
    super.connectedCallback(), this.hasAttribute("autofocus") && this.updateComplete.then(() => {
      this.focus();
    });
  }
  static get styles() {
    return [checkbox_css_default, b, f];
  }
  click() {
    var e;
    this.disabled || (e = this.inputElement) == null || e.click();
  }
  handleChange() {
    this.indeterminate = false, super.handleChange();
  }
  render() {
    return t`
            ${super.render()}
            <span id="box">
                ${this.checked ? I[this.size]() : t``}
                ${this.indeterminate ? v[this.size]() : t``}
            </span>
            <label id="label" for="input"><slot></slot></label>
        `;
  }
  updated(e) {
    super.updated(e), e.has("disabled") && (typeof e.get("disabled") != "undefined" || this.disabled) && (this.disabled ? (this.inputElement.tabIndex = this.tabIndex, this.tabIndex = -1) : (this.tabIndex = this.inputElement.tabIndex, this.inputElement.removeAttribute("tabindex")), this.inputElement.disabled = this.disabled), e.has("indeterminate") && (this.inputElement.indeterminate = this.indeterminate), e.has("invalid") && (this.invalid ? this.inputElement.setAttribute("aria-invalid", "true") : this.inputElement.removeAttribute("aria-invalid"));
  }
};
Checkbox.shadowRootOptions = { ...p2.shadowRootOptions, delegatesFocus: true }, r([a2({ type: Boolean, reflect: true })], Checkbox.prototype, "disabled", 2), r([a2({ type: Boolean, reflect: true })], Checkbox.prototype, "indeterminate", 2), r([a2({ type: Boolean, reflect: true })], Checkbox.prototype, "invalid", 2), r([a2({ type: Boolean, reflect: true })], Checkbox.prototype, "emphasized", 2), r([a2({ reflect: true, type: Number, attribute: "tabindex" })], Checkbox.prototype, "tabIndex", 2);

// node_modules/@spectrum-web-components/checkbox/sp-checkbox.js
import { defineElement as o2 } from "/libs/features/spectrum-web-components/dist/base.js";
o2("sp-checkbox", Checkbox);
//# sourceMappingURL=checkbox.js.map

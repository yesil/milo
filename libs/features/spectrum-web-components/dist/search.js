/* eslint-disable */
/* Generated by Milo */

import{html as h,nothing as b}from"/libs/features/spectrum-web-components/dist/base.js";import{property as i,query as x}from"/libs/features/spectrum-web-components/dist/base.js";import{ifDefined as m}from"/libs/features/spectrum-web-components/dist/base.js";import{Textfield as g}from"/libs/features/spectrum-web-components/dist/textfield.js";import"/libs/features/spectrum-web-components/dist/button.js";import"/libs/features/spectrum-web-components/dist/icons-workflow.js";import{css as n}from"/libs/features/spectrum-web-components/dist/base.js";var p=n`
:host{--spectrum-search-inline-size:var(--spectrum-field-width);--spectrum-search-block-size:var(--spectrum-component-height-100);--spectrum-search-button-inline-size:var(--spectrum-search-block-size);--spectrum-search-min-inline-size:calc(var(--spectrum-search-field-minimum-width-multiplier)*var(--spectrum-search-block-size));--spectrum-search-icon-size:var(--spectrum-workflow-icon-size-100);--spectrum-search-text-to-icon:var(--spectrum-text-to-visual-100);--spectrum-search-to-help-text:var(--spectrum-help-text-to-component);--spectrum-search-top-to-text:var(--spectrum-component-top-to-text-100);--spectrum-search-bottom-to-text:var(
--spectrum-component-bottom-to-text-100
);--spectrum-search-focus-indicator-thickness:var(
--spectrum-focus-indicator-thickness
);--spectrum-search-focus-indicator-gap:var(--spectrum-focus-indicator-gap);--spectrum-search-focus-indicator-color:var(
--spectrum-focus-indicator-color
);--spectrum-search-font-family:var(--spectrum-sans-font-family-stack);--spectrum-search-font-weight:var(--spectrum-regular-font-weight);--spectrum-search-font-style:var(--spectrum-default-font-style);--spectrum-search-line-height:var(--spectrum-line-height-100);--spectrum-search-color-default:var(
--spectrum-neutral-content-color-default
);--spectrum-search-color-hover:var(--spectrum-neutral-content-color-hover);--spectrum-search-color-focus:var(--spectrum-neutral-content-color-focus);--spectrum-search-color-focus-hover:var(
--spectrum-neutral-content-color-focus-hover
);--spectrum-search-color-key-focus:var(
--spectrum-neutral-content-color-key-focus
);--spectrum-search-border-width:var(--spectrum-border-width-100);--spectrum-search-background-color:var(--spectrum-gray-50);--spectrum-search-color-disabled:var(--spectrum-disabled-content-color);--spectrum-search-background-color-disabled:var(
--spectrum-disabled-background-color
);--spectrum-search-border-color-disabled:var(
--spectrum-disabled-background-color
);--mod-textfield-font-family:var(
--mod-search-font-family,var(--spectrum-search-font-family)
);--mod-textfield-font-weight:var(
--mod-search-font-weight,var(--spectrum-search-font-weight)
);--mod-textfield-corner-radius:var(
--mod-search-border-radius,var(--spectrum-search-border-radius)
);--mod-textfield-border-width:var(
--mod-search-border-width,var(--spectrum-search-border-width)
);--mod-textfield-focus-indicator-gap:var(
--mod-search-focus-indicator-gap,var(--spectrum-search-focus-indicator-gap)
);--mod-textfield-focus-indicator-width:var(
--mod-search-focus-indicator-thickness,var(--spectrum-search-focus-indicator-thickness)
);--mod-textfield-focus-indicator-color:var(
--mod-search-focus-indicator-color,var(--spectrum-search-focus-indicator-color)
);--mod-textfield-text-color-default:var(
--mod-search-color-default,var(--spectrum-search-color-default)
);--mod-textfield-text-color-hover:var(
--mod-search-color-hover,var(--spectrum-search-color-hover)
);--mod-textfield-text-color-focus:var(
--mod-search-color-focus,var(--spectrum-search-color-focus)
);--mod-textfield-text-color-focus-hover:var(
--mod-search-color-focus-hover,var(--spectrum-search-color-focus-hover)
);--mod-textfield-text-color-keyboard-focus:var(
--mod-search-color-key-focus,var(--spectrum-search-color-key-focus)
);--mod-textfield-text-color-disabled:var(
--mod-search-color-disabled,var(--spectrum-search-color-disabled)
);--mod-textfield-border-color:var(
--mod-search-border-color-default,var(--spectrum-search-border-color-default)
);--mod-textfield-border-color-hover:var(
--mod-search-border-color-hover,var(--spectrum-search-border-color-hover)
);--mod-textfield-border-color-focus:var(
--mod-search-border-color-focus,var(--spectrum-search-border-color-focus)
);--mod-textfield-border-color-focus-hover:var(
--mod-search-border-color-focus-hover,var(--spectrum-search-border-color-focus-hover)
);--mod-textfield-border-color-keyboard-focus:var(
--mod-search-border-color-key-focus,var(--spectrum-search-border-color-key-focus)
);--mod-textfield-border-color-disabled:var(
--mod-search-border-color-disabled,var(--spectrum-search-border-color-disabled)
);--mod-textfield-background-color:var(
--mod-search-background-color,var(--spectrum-search-background-color)
);--mod-textfield-background-color-disabled:var(
--mod-search-background-color-disabled,var(--spectrum-search-background-color-disabled)
)}:host([size=s]){--spectrum-search-block-size:var(--spectrum-component-height-75);--spectrum-search-icon-size:var(--spectrum-workflow-icon-size-75);--spectrum-search-text-to-icon:var(--spectrum-text-to-visual-75)}:host([size=l]){--spectrum-search-block-size:var(--spectrum-component-height-200);--spectrum-search-icon-size:var(--spectrum-workflow-icon-size-200);--spectrum-search-text-to-icon:var(--spectrum-text-to-visual-200)}:host([size=xl]){--spectrum-search-block-size:var(--spectrum-component-height-300);--spectrum-search-icon-size:var(--spectrum-workflow-icon-size-300);--spectrum-search-text-to-icon:var(--spectrum-text-to-visual-300)}:host([quiet]){--spectrum-search-quiet-button-offset:calc(var(--mod-search-block-size, var(--spectrum-search-block-size))/2 - var(
--mod-workflow-icon-size-100,
var(--spectrum-workflow-icon-size-100)
)/2);--spectrum-search-background-color:transparent;--spectrum-search-background-color-disabled:transparent;--spectrum-search-border-color-disabled:var(
--spectrum-disabled-border-color
)}:host([quiet]) #textfield{--spectrum-search-border-radius:0;--spectrum-search-edge-to-visual:var(
--spectrum-field-edge-to-visual-quiet
)}@media (forced-colors:active){#textfield #textfield,#textfield #textfield .input{--highcontrast-search-color-default:CanvasText;--highcontrast-search-color-hover:CanvasText;--highcontrast-search-color-focus:CanvasText;--highcontrast-search-color-disabled:GrayText}#textfield #button .spectrum-ClearButton-fill{background-color:#0000;forced-color-adjust:none}}#textfield{display:inline-block;inline-size:var(
--mod-search-inline-size,var(--spectrum-search-inline-size)
);min-inline-size:var(
--mod-search-min-inline-size,var(--spectrum-search-min-inline-size)
);position:relative}#textfield .spectrum-HelpText{margin-block-start:var(
--mod-search-to-help-text,var(--spectrum-search-to-help-text)
)}#button{inset-block-start:0;inset-inline-end:0;position:absolute}#button,#button .spectrum-ClearButton-fill{border-radius:var(
--mod-search-border-radius,var(--spectrum-search-border-radius)
)}#textfield.is-disabled #button{display:none}#textfield{inline-size:100%}.icon-search{--spectrum-search-color:var(
--highcontrast-search-color-default,var(--mod-search-color-default,var(--spectrum-search-color-default))
);color:var(--spectrum-search-color);display:block;inset-block:0;margin-block:auto;position:absolute}#textfield.is-focused .icon-search{--spectrum-search-color:var(
--highcontrast-search-color-focus,var(--mod-search-color-focus,var(--spectrum-search-color-focus))
)}#textfield.is-keyboardFocused .icon-search{--spectrum-search-color:var(
--highcontrast-search-color-focus,var(
--mod-search-color-key-focus,var(--spectrum-search-color-key-focus)
)
)}#textfield.is-disabled .icon-search{--spectrum-search-color:var(
--highcontrast-search-color-disabled,var(--mod-search-color-disabled,var(--spectrum-search-color-disabled))
)}@media (hover:hover){#textfield:hover .icon-search{--spectrum-search-color:var(
--highcontrast-search-color-hover,var(--mod-search-color-hover,var(--spectrum-search-color-hover))
)}#textfield.is-focused:hover .icon-search{--spectrum-search-color:var(
--highcontrast-search-color-focus,var(
--mod-search-color-focus-hover,var(--spectrum-search-color-focus-hover)
)
)}#textfield.is-disabled:hover .icon-search{--spectrum-search-color:var(
--highcontrast-search-color-disabled,var(
--mod-search-color-disabled,var(--spectrum-search-color-disabled)
)
)}}.input{-webkit-appearance:none}.input::-webkit-search-cancel-button,.input::-webkit-search-decoration{-webkit-appearance:none}.input{block-size:var(--mod-search-block-size,var(--spectrum-search-block-size));font-style:var(--mod-search-font-style,var(--spectrum-search-font-style));line-height:var(
--mod-search-line-height,var(--spectrum-search-line-height)
);padding-block-end:calc(var(--mod-search-bottom-to-text, var(--spectrum-search-bottom-to-text)) - var(--mod-search-border-width, var(--spectrum-search-border-width)));padding-block-start:calc(var(--mod-search-top-to-text, var(--spectrum-search-top-to-text)) - var(--mod-search-border-width, var(--spectrum-search-border-width)))}:host(:not([quiet])) #textfield .icon-search{inset-inline-start:var(
--mod-search-edge-to-visual,var(--spectrum-search-edge-to-visual)
)}:host(:not([quiet])) #textfield .input{padding-inline-end:calc(var(
--mod-search-button-inline-size,
var(--spectrum-search-button-inline-size)
) - var(--mod-search-border-width, var(--spectrum-search-border-width)));padding-inline-start:calc(var(--mod-search-edge-to-visual, var(--spectrum-search-edge-to-visual)) - var(--mod-search-border-width, var(--spectrum-search-border-width)) + var(--mod-search-icon-size, var(--spectrum-search-icon-size)) + var(--mod-search-text-to-icon, var(--spectrum-search-text-to-icon)))}:host([quiet]) #button{transform:translateX(var(
--mod-search-quiet-button-offset,var(--spectrum-search-quiet-button-offset)
))}:host([quiet]) #textfield .input{border-radius:var(
--mod-search-border-radius,var(--spectrum-search-border-radius)
);padding-block-start:var(
--mod-search-top-to-text,var(--spectrum-search-top-to-text)
);padding-inline-end:calc(var(
--mod-search-button-inline-size,
var(--spectrum-search-button-inline-size)
) - var(
--mod-search-quiet-button-offset,
var(--spectrum-search-quiet-button-offset)
));padding-inline-start:calc(var(--mod-search-edge-to-visual, var(--spectrum-search-edge-to-visual)) + var(--mod-search-icon-size, var(--spectrum-search-icon-size)) + var(--mod-search-text-to-icon, var(--spectrum-search-text-to-icon)))}:host{--spectrum-search-border-radius:var(
--system-spectrum-search-border-radius
);--spectrum-search-edge-to-visual:var(
--system-spectrum-search-edge-to-visual
);--spectrum-search-border-color-default:var(
--system-spectrum-search-border-color-default
);--spectrum-search-border-color-hover:var(
--system-spectrum-search-border-color-hover
);--spectrum-search-border-color-focus:var(
--system-spectrum-search-border-color-focus
);--spectrum-search-border-color-focus-hover:var(
--system-spectrum-search-border-color-focus-hover
);--spectrum-search-border-color-key-focus:var(
--system-spectrum-search-border-color-key-focus
)}:host([size=s]){--spectrum-search-border-radius:var(
--system-spectrum-search-sizes-border-radius
);--spectrum-search-edge-to-visual:var(
--system-spectrum-search-sizes-edge-to-visual
)}:host{--spectrum-search-border-radius:var(
--system-spectrum-search-sizem-border-radius
);--spectrum-search-edge-to-visual:var(
--system-spectrum-search-sizem-edge-to-visual
)}:host([size=l]){--spectrum-search-border-radius:var(
--system-spectrum-search-sizel-border-radius
);--spectrum-search-edge-to-visual:var(
--system-spectrum-search-sizel-edge-to-visual
)}:host([size=xl]){--spectrum-search-border-radius:var(
--system-spectrum-search-sizexl-border-radius
);--spectrum-search-edge-to-visual:var(
--system-spectrum-search-sizexl-edge-to-visual
)}:host{--mod-textfield-spacing-inline:var(
--spectrum-alias-infieldbutton-full-height-m
);--mod-clear-button-padding:0}input::-webkit-search-cancel-button{display:none}:host([size=xs]){--spectrum-icon-size:var(--spectrum-workflow-icon-size-50)}:host([size=s]){--spectrum-icon-size:var(--spectrum-workflow-icon-size-75)}:host([size=m]){--spectrum-icon-size:var(--spectrum-workflow-icon-size-100)}:host([size=l]){--spectrum-icon-size:var(--spectrum-workflow-icon-size-200)}:host([size=xl]){--spectrum-icon-size:var(--spectrum-workflow-icon-size-300)}:host([size=xxl]){--spectrum-icon-size:var(--spectrum-workflow-icon-size-400)}@media (forced-colors:active){sp-clear-button{--spectrum-clearbutton-fill-background-color:transparent;--spectrum-clearbutton-fill-background-color-disabled:transparent;--spectrum-clearbutton-fill-background-color-down:transparent;--spectrum-clearbutton-fill-background-color-hover:transparent;--spectrum-clearbutton-fill-background-color-key-focus:transparent}}
`,l=p;var v=Object.defineProperty,f=Object.getOwnPropertyDescriptor,c=(t,r,s,a)=>{for(var o=a>1?void 0:a?f(r,s):r,u=t.length-1,d;u>=0;u--)(d=t[u])&&(o=(a?d(r,s,o):d(o))||o);return a&&o&&v(r,s,o),o},k=t=>t.stopPropagation(),e=class extends g{constructor(){super(...arguments),this.action="",this.label="Search",this.placeholder="Search"}static get styles(){return[...super.styles,l]}handleSubmit(r){this.dispatchEvent(new Event("submit",{cancelable:!0,bubbles:!0}))||r.preventDefault()}handleKeydown(r){let{code:s}=r;!this.value||s!=="Escape"||this.reset()}async reset(){this.value="",await this.updateComplete,this.focusElement.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.focusElement.dispatchEvent(new InputEvent("change",{bubbles:!0}))}renderField(){return h`
            <form
                action=${this.action}
                id="form"
                method=${m(this.method)}
                @submit=${this.handleSubmit}
                @reset=${this.reset}
                @keydown=${this.handleKeydown}
            >
                <sp-icon-magnify
                    class="icon magnifier icon-workflow icon-search"
                ></sp-icon-magnify>
                ${super.renderField()}
                ${this.value?h`
                          <sp-clear-button
                              id="button"
                              label="Reset"
                              tabindex="-1"
                              type="reset"
                              size=${m(this.size)}
                              @keydown=${k}
                          ></sp-clear-button>
                      `:b}
            </form>
        `}firstUpdated(r){super.firstUpdated(r),this.inputElement.setAttribute("type","search")}willUpdate(){this.multiline=!1}};c([i()],e.prototype,"action",2),c([i()],e.prototype,"label",2),c([i()],e.prototype,"method",2),c([i()],e.prototype,"placeholder",2),c([x("#form")],e.prototype,"form",2);import{defineElement as z}from"/libs/features/spectrum-web-components/dist/base.js";z("sp-search",e);

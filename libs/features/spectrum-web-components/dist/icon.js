/* Generated by Milo*/
/* eslint-disable */

// node_modules/@spectrum-web-components/icon/src/IconBase.js
import { html as m, SpectrumElement as b } from "/libs/features/spectrum-web-components/dist/base.js";
import { property as u } from "/libs/features/spectrum-web-components/dist/base.js";

// node_modules/@spectrum-web-components/icon/src/icon.css.js
import { css as i } from "/libs/features/spectrum-web-components/dist/base.js";
var s = i`
:host{fill:currentColor;color:var(--mod-icon-color,inherit);display:inline-block;pointer-events:none}:host(:not(:root)){overflow:hidden}@media (forced-colors:active){:host{forced-color-adjust:auto}}:host{--spectrum-icon-size-s:var(
--spectrum-alias-workflow-icon-size-s,var(--spectrum-global-dimension-size-200)
);--spectrum-icon-size-m:var(
--spectrum-alias-workflow-icon-size-m,var(--spectrum-global-dimension-size-225)
);--spectrum-icon-size-l:var(--spectrum-alias-workflow-icon-size-l);--spectrum-icon-size-xl:var(
--spectrum-alias-workflow-icon-size-xl,var(--spectrum-global-dimension-size-275)
);--spectrum-icon-size-xxl:var(--spectrum-global-dimension-size-400)}:host([size=s]){height:var(--spectrum-icon-size-s);width:var(--spectrum-icon-size-s)}:host([size=m]){height:var(--spectrum-icon-size-m);width:var(--spectrum-icon-size-m)}:host([size=l]){height:var(--spectrum-icon-size-l);width:var(--spectrum-icon-size-l)}:host([size=xl]){height:var(--spectrum-icon-size-xl);width:var(--spectrum-icon-size-xl)}:host([size=xxl]){height:var(--spectrum-icon-size-xxl);width:var(--spectrum-icon-size-xxl)}:host{--spectrum-icon-size-xxs:var(
--spectrum-alias-workflow-icon-size-xxs,var(--spectrum-global-dimension-size-150)
);--spectrum-icon-size-xs:var(
--spectrum-alias-workflow-icon-size-xs,var(--spectrum-global-dimension-size-175)
);height:var(
--spectrum-icon-tshirt-size-height,var(
--spectrum-alias-workflow-icon-size,var(--spectrum-global-dimension-size-225)
)
);width:var(
--spectrum-icon-tshirt-size-width,var(
--spectrum-alias-workflow-icon-size,var(--spectrum-global-dimension-size-225)
)
)}:host([size=xxs]){height:var(--spectrum-icon-size-xxs);width:var(--spectrum-icon-size-xxs)}:host([size=xs]){height:var(--spectrum-icon-size-xs);width:var(--spectrum-icon-size-xs)}#container{height:100%}::slotted(*),img,svg{color:inherit;height:100%;vertical-align:top;width:100%}@media (forced-colors:active){::slotted(*),img,svg{forced-color-adjust:auto}}
`;
var icon_css_default = s;

// node_modules/@spectrum-web-components/icon/src/IconBase.js
var a = Object.defineProperty;
var d = Object.getOwnPropertyDescriptor;
var p = (i2, r, t, l2) => {
  for (var e = l2 > 1 ? void 0 : l2 ? d(r, t) : r, s2 = i2.length - 1, o2; s2 >= 0; s2--)
    (o2 = i2[s2]) && (e = (l2 ? o2(r, t, e) : o2(e)) || e);
  return l2 && e && a(r, t, e), e;
};
var IconBase = class extends b {
  constructor() {
    super(...arguments);
    this.label = "";
  }
  static get styles() {
    return [icon_css_default];
  }
  update(t) {
    t.has("label") && (this.label ? this.removeAttribute("aria-hidden") : this.setAttribute("aria-hidden", "true")), super.update(t);
  }
  render() {
    return m`
            <slot></slot>
        `;
  }
};
p([u()], IconBase.prototype, "label", 2), p([u({ reflect: true })], IconBase.prototype, "size", 2);

// node_modules/@spectrum-web-components/icon/src/Icon.js
import { html as c } from "/libs/features/spectrum-web-components/dist/base.js";
import { property as d2, query as m2 } from "/libs/features/spectrum-web-components/dist/base.js";
import { ifDefined as u2 } from "/libs/features/spectrum-web-components/dist/base.js";

// node_modules/@spectrum-web-components/iconset/src/iconset-registry.js
var IconsetRegistry = class _IconsetRegistry {
  constructor() {
    this.iconsetMap = /* @__PURE__ */ new Map();
  }
  static getInstance() {
    return _IconsetRegistry.instance || (_IconsetRegistry.instance = new _IconsetRegistry()), _IconsetRegistry.instance;
  }
  addIconset(e, t) {
    this.iconsetMap.set(e, t);
    const n = new CustomEvent("sp-iconset-added", { bubbles: true, composed: true, detail: { name: e, iconset: t } });
    setTimeout(() => window.dispatchEvent(n), 0);
  }
  removeIconset(e) {
    this.iconsetMap.delete(e);
    const t = new CustomEvent("sp-iconset-removed", { bubbles: true, composed: true, detail: { name: e } });
    setTimeout(() => window.dispatchEvent(t), 0);
  }
  getIconset(e) {
    return this.iconsetMap.get(e);
  }
};

// node_modules/@spectrum-web-components/icon/src/Icon.js
var p2 = Object.defineProperty;
var l = Object.getOwnPropertyDescriptor;
var o = (s2, r, e, t) => {
  for (var i2 = t > 1 ? void 0 : t ? l(r, e) : r, n = s2.length - 1, a2; n >= 0; n--)
    (a2 = s2[n]) && (i2 = (t ? a2(r, e, i2) : a2(i2)) || i2);
  return t && i2 && p2(r, e, i2), i2;
};
var Icon = class extends IconBase {
  constructor() {
    super(...arguments);
    this.iconsetListener = (e) => {
      if (!this.name)
        return;
      const t = this.parseIcon(this.name);
      e.detail.name === t.iconset && (this.updateIconPromise = this.updateIcon());
    };
  }
  connectedCallback() {
    super.connectedCallback(), window.addEventListener("sp-iconset-added", this.iconsetListener);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), window.removeEventListener("sp-iconset-added", this.iconsetListener);
  }
  firstUpdated() {
    this.updateIconPromise = this.updateIcon();
  }
  attributeChangedCallback(e, t, i2) {
    super.attributeChangedCallback(e, t, i2), this.updateIconPromise = this.updateIcon();
  }
  announceIconImageSrcError() {
    this.dispatchEvent(new Event("error", { cancelable: false, bubbles: false, composed: false }));
  }
  render() {
    return this.name ? c`
                <div id="container"></div>
            ` : this.src ? c`
                <img
                    src="${this.src}"
                    alt=${u2(this.label)}
                    @error=${this.announceIconImageSrcError}
                />
            ` : super.render();
  }
  async updateIcon() {
    if (this.updateIconPromise && await this.updateIconPromise, !this.name)
      return Promise.resolve();
    const e = this.parseIcon(this.name), t = IconsetRegistry.getInstance().getIconset(e.iconset);
    return !t || !this.iconContainer ? Promise.resolve() : (this.iconContainer.innerHTML = "", t.applyIconToElement(this.iconContainer, e.icon, this.size || "", this.label ? this.label : ""));
  }
  parseIcon(e) {
    const t = e.split(":");
    let i2 = "default", n = e;
    return t.length > 1 && (i2 = t[0], n = t[1]), { iconset: i2, icon: n };
  }
  async getUpdateComplete() {
    const e = await super.getUpdateComplete();
    return await this.updateIconPromise, e;
  }
};
o([d2()], Icon.prototype, "src", 2), o([d2()], Icon.prototype, "name", 2), o([m2("#container")], Icon.prototype, "iconContainer", 2);

// src/icon.js
export * from "/libs/features/spectrum-web-components/dist/icons/checkmark.js";
var icon_default = {};
export {
  Icon,
  IconBase,
  icon_default as default
};
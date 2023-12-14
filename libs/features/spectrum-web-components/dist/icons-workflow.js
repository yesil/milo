/* Generated by Milo*/
/* eslint-disable */

// node_modules/@spectrum-web-components/icons-workflow/src/elements/IconHelp.js
import { html as e } from "/libs/features/spectrum-web-components/dist/base.js";
import { IconBase as t2 } from "/libs/features/spectrum-web-components/dist/icon.js";

// node_modules/@spectrum-web-components/icons-workflow/src/custom-tag.js
var t;
var tag = function(e4, ...a) {
  return t ? t(e4, ...a) : a.reduce((r2, p, l2) => r2 + p + e4[l2 + 1], e4[0]);
};
var setCustomTemplateLiteralTag = (e4) => {
  t = e4;
};

// node_modules/@spectrum-web-components/icons-workflow/src/icons/Help.js
var HelpIcon = ({ width: e4 = 24, height: a = 24, hidden: t6 = false, title: l2 = "Help" } = {}) => tag`<svg
    xmlns="http://www.w3.org/2000/svg"
    height=${a}
    viewBox="0 0 36 36"
    width=${e4}
    aria-hidden=${t6 ? "true" : "false"}
    role="img"
    fill="currentColor"
    aria-label=${l2}
  >
    <path
      d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2Zm.047 26.876a2.69 2.69 0 1 1 0-5.375 2.62 2.62 0 0 1 2.8 2.67 2.581 2.581 0 0 1-2.8 2.705Zm3.566-12.818-.2.21c-.789.829-1.684 1.768-1.684 2.351a2.771 2.771 0 0 0 .359 1.348l.145.277-.113.429a.617.617 0 0 1-.567.378h-2.682a.867.867 0 0 1-.65-.235 4.111 4.111 0 0 1-.845-2.525c0-1.677.934-2.714 2.225-4.15.2-.219.39-.42.575-.609.629-.651 1.013-1.071 1.013-1.515 0-.308 0-1.245-1.786-1.245a5.918 5.918 0 0 0-3.159.919.592.592 0 0 1-.653-.02l-.237-.169-.055-.443v-2.9a.879.879 0 0 1 .393-.819 8.275 8.275 0 0 1 4.3-1.1c3.291 0 5.5 2.117 5.5 5.272a6.131 6.131 0 0 1-1.879 4.546Z"
    />
  </svg>`;

// node_modules/@spectrum-web-components/icons-workflow/src/elements/IconHelp.js
var IconHelp = class extends t2 {
  render() {
    return setCustomTemplateLiteralTag(e), HelpIcon({ hidden: !this.label, title: this.label });
  }
};

// node_modules/@spectrum-web-components/icons-workflow/icons/sp-icon-help.js
import { defineElement as l } from "/libs/features/spectrum-web-components/dist/base.js";
l("sp-icon-help", IconHelp);

// node_modules/@spectrum-web-components/icons-workflow/src/elements/IconAlert.js
import { html as e2 } from "/libs/features/spectrum-web-components/dist/base.js";
import { IconBase as t3 } from "/libs/features/spectrum-web-components/dist/icon.js";

// node_modules/@spectrum-web-components/icons-workflow/src/icons/Alert.js
var AlertIcon = ({ width: a = 24, height: t6 = 24, hidden: e4 = false, title: r2 = "Alert" } = {}) => tag`<svg
    xmlns="http://www.w3.org/2000/svg"
    height=${t6}
    viewBox="0 0 36 36"
    width=${a}
    aria-hidden=${e4 ? "true" : "false"}
    role="img"
    fill="currentColor"
    aria-label=${r2}
  >
    <path
      d="M17.127 2.579.4 32.512A1 1 0 0 0 1.272 34h33.456a1 1 0 0 0 .872-1.488L18.873 2.579a1 1 0 0 0-1.746 0ZM20 29.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5Zm0-6a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-12a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5Z"
    />
  </svg>`;

// node_modules/@spectrum-web-components/icons-workflow/src/elements/IconAlert.js
var IconAlert = class extends t3 {
  render() {
    return setCustomTemplateLiteralTag(e2), AlertIcon({ hidden: !this.label, title: this.label });
  }
};

// node_modules/@spectrum-web-components/icons-workflow/icons/sp-icon-alert.js
import { defineElement as r } from "/libs/features/spectrum-web-components/dist/base.js";
r("sp-icon-alert", IconAlert);

// node_modules/@spectrum-web-components/icons-workflow/src/elements/IconLinkOutLight.js
import { html as e3 } from "/libs/features/spectrum-web-components/dist/base.js";
import { IconBase as t4 } from "/libs/features/spectrum-web-components/dist/icon.js";

// node_modules/@spectrum-web-components/icons-workflow/src/icons/LinkOutLight.js
var LinkOutLightIcon = ({ width: t6 = 24, height: a = 24, hidden: e4 = false, title: l2 = "Link Out Light" } = {}) => tag`<svg
    xmlns="http://www.w3.org/2000/svg"
    height=${a}
    viewBox="0 0 36 36"
    width=${t6}
    aria-hidden=${e4 ? "true" : "false"}
    role="img"
    fill="currentColor"
    aria-label=${l2}
  >
    <path
      d="M32 17.5V30H4V4h14.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H3a1 1 0 0 0-1 1v28a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1V17.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5Z"
    />
    <path
      d="m23.54 2.853 3.389 3.39-9.546 9.546a.5.5 0 0 0 0 .707l2.117 2.121a.5.5 0 0 0 .707 0l9.546-9.546 3.389 3.389a.5.5 0 0 0 .858-.353V2H23.893a.5.5 0 0 0-.353.853Z"
    />
  </svg>`;

// node_modules/@spectrum-web-components/icons-workflow/src/elements/IconLinkOutLight.js
var IconLinkOutLight = class extends t4 {
  render() {
    return setCustomTemplateLiteralTag(e3), LinkOutLightIcon({ hidden: !this.label, title: this.label });
  }
};

// node_modules/@spectrum-web-components/icons-workflow/icons/sp-icon-link-out-light.js
import { defineElement as t5 } from "/libs/features/spectrum-web-components/dist/base.js";
t5("sp-icon-link-out-light", IconLinkOutLight);

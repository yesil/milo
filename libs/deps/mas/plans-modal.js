// src/plans-modal.js
import { LitElement, html } from "../lit-all.min.js";

// ../node_modules/@spectrum-web-components/reactive-controllers/src/MatchMedia.js
var MatchMediaController = class {
  constructor(e, t) {
    this.key = Symbol("match-media-key");
    this.matches = false;
    this.host = e, this.host.addController(this), this.media = window.matchMedia(t), this.matches = this.media.matches, this.onChange = this.onChange.bind(this), e.addController(this);
  }
  hostConnected() {
    var e;
    (e = this.media) == null || e.addEventListener("change", this.onChange);
  }
  hostDisconnected() {
    var e;
    (e = this.media) == null || e.removeEventListener("change", this.onChange);
  }
  onChange(e) {
    this.matches !== e.matches && (this.matches = e.matches, this.host.requestUpdate(this.key, !this.matches));
  }
};

// src/plans-modal.css.js
import { css } from "../lit-all.min.js";
var styles = css`
    :host {
        --consonant-plan-modal-includes: hidden;
    }

    #container {
        display: flex;
        flex-direction: column;
    }

    #title {
        align-items: center;
        display: flex;
        gap: var(--consonant-merch-spacing-xs);
        order: 1;
    }

    h2 {
        margin: 0;
    }

    ul {
        list-style-type: none;
        padding-inline-start: 0;
        margin: 0;
    }

    #description {
        order: 2;
    }

    #actions {
        order: 3;
    }

    #includes {
        order: 4;
    }

    #seeMore {
        margin-top: var(--consonant-merch-spacing-xs);
    }

    #extra {
        order: 5;
    }

    #recommended {
        order: 6;
    }

    #includes ul {
        height: calc((var(--consonant-plan-modal-includes-limit, 5) * 36px));
        padding-inline-start: 0;
        overflow-y: var(--consonant-plan-modal-includes);
        scrollbar-width: none;
    }

    #extra li::before,
    #recommended li::before {
        content: '\\B7';
        margin-right: 8px;
    }

    @media screen and (min-width: 901px) {
        #includes ul {
            height: calc(
                min(max(var(--consonant-plan-modal-includes-limit), 5), 12) *
                    36px
            );
        }
        #container {
            max-width: 1000px;
            height: 637px;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: 52px min-content repeat(5, 1fr);
            overflow: hidden;
        }

        #title {
            grid-column: 1 / span 2;
            grid-row: 1;
            order: unset;
        }

        #description {
            display: flex;
            gap: var(--consonant-merch-spacing-xs);
            align-items: center;
            grid-column: 1 / span 2;
            grid-row: 2;
            order: unset;
        }

        #includes {
            grid-column: 1;
            grid-row: 3 / span 5;
            order: unset;
        }

        ul::-webkit-scrollbar {
            display: none;
        }

        #includes li {
            display: flex;
            gap: var(--consonant-merch-spacing-xs);
            align-items: center;
        }

        #extra {
            grid-column: 2;
            grid-row: 3 / span 2;
            order: unset;
        }

        #recommended {
            grid-column: 2;
            grid-row: 5 / span 2;
            order: unset;
        }

        merch-subscription-panel {
            grid-row: 1 / span 5;
            background-color: var(--spectrum-gray-100);
            order: unset;
        }
    }
`;
var plans_modal_css_default = styles;

// src/media.js
var MOBILE_LANDSCAPE = "(max-width: 767px)";

// src/plans-modal.js
var PlansModal = class extends LitElement {
  static properties = {
    trigger: {},
    title: {},
    description: { attribute: "description" },
    includesLimit: {
      type: Number,
      attribute: "includes-limit",
      reflect: true
    },
    includes: {
      type: Array
    },
    extra: {
      type: Array
    },
    recommended: {
      type: Array
    },
    backText: { type: String, attribute: "back-text" },
    ctaText: { type: String, attribute: "cta-text" },
    extraText: { type: String, attribute: "extra-text" },
    includesText: { type: String, attribute: "includes-text" },
    recommendedText: { type: String, attribute: "recommended-text" },
    seeMoreText: { type: String, attribute: "see-more-text" }
  };
  mobileDevice = new MatchMediaController(this, MOBILE_LANDSCAPE);
  constructor() {
    super();
    this.includesLimit = 5;
    this.seeMoreText = " + See more";
  }
  render() {
    return html`
            <sp-theme theme="spectrum" color="light" scale="large">
                <sp-dialog-wrapper
                    slot="click-content"
                    title="${this.title}"
                    dismissable
                    underlay
                    no-divider
                    cancel-label="${this.backText}"
                    confirm-label="${this.ctaText}"
                    @close="${this.remove}"
                    @cancel="${this.remove}"
                    mode="${this.mobileDevice.matches ? "fullscreenTakeover" : void 0}"
                >
                    <div id="container" part="container">
                        <div id="title">
                            <slot name="icon"></slot>
                            <h2>${this.title}</h2>
                        </div>
                        <div id="description">
                            <slot name="icon"></slot>
                            <p>${this.description}</p>
                        </div>
                        <div id="includes">
                            <h3>${this.includesText || "Includes"}</h3>
                            <ul>
                                ${this.includes}
                            </ul>
                            ${this.seeMoreButton}
                        </div>
                        <div id="extra">
                            <h3>${this.extraText || "Extra"}</h3>
                            <ul>
                                ${this.extra}
                            </ul>
                        </div>
                        <div id="recommended">
                            <h3>${this.recommendedText || "Recommended"}</h3>
                            <ul>
                                ${this.recommended}
                            </ul>
                        </div>
                        <div id="actions">${this.subscriptionPanel}</div>
                    </div>
                </sp-dialog-wrapper>
            </sp-theme>
        `;
  }
  updated(changedProperties) {
    if (changedProperties.has("includesLimit")) {
      this.style.setProperty(
        "--consonant-plan-modal-includes-limit",
        this.includesLimit
      );
    }
  }
  connectedCallback() {
    super.connectedCallback();
    this.updateComplete.then(async () => {
      this.prepareSlots();
      this.openModal();
    });
  }
  seeMore() {
    this.hideSeeMoreButton = true;
    this.includesLimit = this.includes.length;
    this.style.setProperty("--consonant-plan-modal-includes", "auto");
  }
  get seeMoreButton() {
    return this.hideSeeMoreButton ? void 0 : html`
                  <sp-button
                      id="seeMore"
                      size="s"
                      treatment="outline"
                      variant="secondary"
                      @click="${this.seeMore}"
                  >
                      ${this.seeMoreText}
                  </sp-button>
              `;
  }
  prepareSlots() {
    this.offers = this.querySelector("offer");
    this.subscriptionPanel = this.querySelector("merch-subscription-panel");
    this.includes = [...this.querySelectorAll('[slot="includes"] > li')];
    this.hideSeeMoreButton = this.includes.length <= this.includesLimit;
    this.extra = [...this.querySelectorAll('[slot="extra"] > li')];
    this.recommended = [
      ...this.querySelectorAll('[slot="recommended"] > li')
    ];
  }
  async openModal() {
    const options = {
      offset: 0,
      placement: "none",
      trigger: this.trigger,
      type: "auto"
    };
    const overlay = await Overlay.open(
      this.shadowRoot.querySelector("sp-dialog-wrapper"),
      options
    );
    this.shadowRoot.querySelector("sp-theme").append(overlay);
  }
  static styles = [plans_modal_css_default];
};
customElements.define("plans-modal", PlansModal);
export {
  PlansModal as default
};

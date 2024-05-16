// branch: catalog-fixes-1 commit: 6107b87917ef534d374155a9909ec53fb025a11c Thu, 16 May 2024 15:22:01 GMT
import{html as a,LitElement as A}from"/libs/deps/lit-all.min.js";import{unsafeHTML as b}from"/libs/deps/lit-all.min.js";var d=class{constructor(e,t){this.key=Symbol("match-media-key"),this.matches=!1,this.host=e,this.host.addController(this),this.media=window.matchMedia(t),this.matches=this.media.matches,this.onChange=this.onChange.bind(this),e.addController(this)}hostConnected(){var e;(e=this.media)==null||e.addEventListener("change",this.onChange)}hostDisconnected(){var e;(e=this.media)==null||e.removeEventListener("change",this.onChange)}onChange(e){this.matches!==e.matches&&(this.matches=e.matches,this.host.requestUpdate(this.key,!this.matches))}};var f="hashchange";function w(r=window.location.hash){let e=[],t=r.replace(/^#/,"").split("&");for(let o of t){let[n,i=""]=o.split("=");n&&e.push([n,decodeURIComponent(i.replace(/\+/g," "))])}return Object.fromEntries(e)}function p(r){let e=new URLSearchParams(window.location.hash.slice(1));Object.entries(r).forEach(([n,i])=>{i?e.set(n,i):e.delete(n)}),e.sort();let t=e.toString(),o=window.scrollY||document.documentElement.scrollTop;window.location.hash=t,window.scrollTo(0,o)}function E(r){let e=()=>{let t=w(window.location.hash);r(t)};return e(),window.addEventListener(f,e),()=>{window.removeEventListener(f,e)}}var g=(r,e={})=>{r.querySelectorAll("span[data-placeholder]").forEach(t=>{let{placeholder:o}=t.dataset;t.innerText=e[o]??""})};var x="(max-width: 1199px)",T="(min-width: 768px)",y="(min-width: 1200px)";import{css as _,unsafeCSS as C}from"/libs/deps/lit-all.min.js";var S=_`
    #header,
    #resultText,
    #footer {
        grid-column: 1 / -1;
        justify-self: stretch;
        color: var(--merch-color-grey-80);
    }

    sp-theme {
        display: contents;
    }

    #header {
        --mod-button-border-radius: 5px;
        order: -2;
        display: grid;
        justify-items: top;
        grid-template-columns: auto max-content;
        grid-template-rows: auto;
        row-gap: var(--consonant-merch-spacing-m);
        align-self: baseline;
    }

    #resultText {
        min-height: 32px;
    }

    merch-search {
        display: contents;
    }

    #searchBar {
        grid-column: 1 / -1;
        width: 100%;
        max-width: 302px;
    }

    #filtersButton {
        width: 92px;
        margin-inline-end: var(--consonant-merch-spacing-xxs);
    }

    #sortButton {
        justify-self: end;
    }

    sp-button {
        align-self: baseline;
    }

    sp-menu sp-button {
        min-width: 140px;
    }

    sp-menu {
        min-width: 180px;
    }

    #footer {
        order: 1000;
    }

    /* tablets */
    @media screen and ${C(T)} {
        #header {
            grid-template-columns: 1fr fit-content(100%) fit-content(100%);
        }

        #searchBar {
            grid-column: span 1;
        }

        #filtersButton {
            grid-column: span 1;
        }

        #sortButton {
            grid-column: span 1;
        }
    }

    /* Laptop */
    @media screen and ${C(y)} {
        #resultText {
            grid-column: span 2;
            order: -3;
        }

        #header {
            grid-column: 3 / -1;
            display: flex;
            justify-content: end;
        }
    }
`;var u=(r,e)=>r.querySelector(`[slot="${e}"]`).textContent.trim();var N="merch-card-collection",l={alphabetical:"alphabetical",authored:"authored"},R={filters:["noResultText","resultText","resultsText"],mobile:["noSearchResultsMobileText","searchResultMobileText","searchResultsMobileText"],desktop:["noSearchResultsText","searchResultText","searchResultsText"]},v=(r,{filter:e})=>r.filter(t=>t.filters.hasOwnProperty(e)),M=(r,{types:e})=>e?(e=e.split(","),r.filter(t=>e.some(o=>t.types.includes(o)))):r,L=r=>r.sort((e,t)=>(e.title??"").localeCompare(t.title??"","en",{sensitivity:"base"})),$=(r,{filter:e})=>r.sort((t,o)=>o.filters[e]?.order==null||isNaN(o.filters[e]?.order)?-1:t.filters[e]?.order==null||isNaN(t.filters[e]?.order)?1:t.filters[e].order-o.filters[e].order),k=(r,{search:e})=>e?.length?(e=e.toLowerCase(),r.filter(t=>(t.title??"").toLowerCase().includes(e))):r,m=class extends A{static properties={filter:{type:String,attribute:"filter",reflect:!0},filtered:{type:String,attribute:"filtered"},search:{type:String,attribute:"search",reflect:!0},sort:{type:String,attribute:"sort",default:l.authored,reflect:!0},types:{type:String,attribute:"types",reflect:!0},limit:{type:Number,attribute:"limit"},page:{type:Number,attribute:"page",reflect:!0},singleApp:{type:String,attribute:"single-app",reflect:!0},hasMore:{type:Boolean},displayResult:{type:Boolean,attribute:"display-result"},resultCount:{type:Number},sidenav:{type:Object}};#t;#e;mobileAndTablet=new d(this,x);constructor(){super(),this.filter="all",this.hasMore=!1,this.resultCount=void 0,this.#e=0,this.displayResult=!1}render(){return a`${this.header}
            <slot></slot>
            ${this.footer}`}updated(e){if(!this.querySelector("merch-card"))return;let t=[...this.children].filter(s=>s.tagName==="MERCH-CARD");if(t.length===0)return;e.has("singleApp")&&this.singleApp&&t.forEach(s=>{s.updateFilters(s.name===this.singleApp)});let o=this.sort===l.alphabetical?L:$,i=[v,M,k,o].reduce((s,h)=>h(s,this),t).map((s,h)=>[s,h]);if(this.resultCount=i.length,this.page&&this.limit){let s=this.page*this.limit;this.hasMore=i.length>s,i=i.filter(([,h])=>h<s)}let c=new Map(i);this.#e=(this.limit*(this.page-1)+1).toString(),t.forEach(s=>{c.has(s)?(s.style.order=c.get(s),s.style.order===this.#e&&(this.#t=s),s.size=s.filters[this.filter]?.size,s.style.removeProperty("display"),s.requestUpdate()):(s.style.display="none",s.size=void 0,s.style.removeProperty("order"))}),this.updateComplete.then(()=>{let s=this.shadowRoot.getElementById("resultText")?.firstElementChild?.assignedElements?.()?.[0];s&&g(s,{resultCount:this.resultCount,searchTerm:this.search,filter:this.sidenav?.filters.selectedText})})}connectedCallback(){super.connectedCallback(),this.filtered?(this.filter=this.filtered,this.page=1):this.startDeeplink(),this.sidenav=document.querySelector("merch-sidenav")}disconnectedCallback(){super.disconnectedCallback(),this.stopDeeplink?.()}get header(){if(!this.filtered)return a`<div id="header">
                <sp-theme theme="spectrum" color="light" scale="medium">
                    ${this.searchBar} ${this.filtersButton} ${this.sortButton}
                </sp-theme>
            </div>
            <div id="resultText">
                ${this.displayResult?a`<slot name="${this.resultTextSlotName}"></slot>`:""}
            </div>`}get footer(){if(!this.filtered)return a`<div id="footer">
            <sp-theme theme="spectrum" color="light" scale="medium">
                ${this.showMoreButton}
            </sp-theme>
        </div>`}get resultTextSlotName(){return R[this.search?this.mobileAndTablet.matches?"mobile":"desktop":"filters"][Math.min(this.resultCount,2)]}get showMoreButton(){if(this.hasMore)return a`<sp-button
            variant="secondary"
            treatment="outline"
            style="order: 1000;"
            @click="${this.showMore}"
        >
            <slot name="showMoreText"></slot>
        </sp-button>`}get filtersButton(){return this.mobileAndTablet.matches?a`<sp-button
                  id="filtersButton"
                  variant="secondary"
                  treatment="outline"
                  @click="${this.openFilters}"
                  ><slot name="filtersText"></slot
              ></sp-button>`:""}get searchBar(){let e=u(this,"searchText");return this.mobileAndTablet.matches?a`<merch-search deeplink="search">
                  <sp-search
                      id="searchBar"
                      placeholder="${e}"
                  ></sp-search>
              </merch-search>`:""}get sortButton(){let e=u(this,"sortText"),t=u(this,"popularityText"),o=u(this,"alphabeticallyText");if(!(e&&t&&o))return;let n=this.sort===l.alphabetical,i=n?"":"selected",c=n?"selected":"";return a`
            <sp-action-menu
                id="sortButton"
                size="m"
                @change="${this.sortChanged}"
            >
                <span slot="label-only"
                    >${e}:
                    ${n?o:t}</span
                >
                ${b(`<sp-menu-item
        value="${l.authored}"
        ${i}
        >${t}</sp-menu-item>`)} ${b(`<sp-menu-item
        value="${l.alphabetical}"
        ${c}
        >${o}</sp-menu-item
    >`)}
            </sp-action-menu>
        `}sortChanged(e){e.target.value===l.authored?p({sort:void 0}):p({sort:e.target.value})}async showMore(){let e=this.page+1;p({page:e}),this.page=e,await this.updateComplete}startDeeplink(){this.stopDeeplink=E(({category:e,filter:t,types:o,sort:n,search:i,single_app:c,page:s})=>{t=t||e,!this.filtered&&t&&t!==this.filter&&setTimeout(()=>{p({page:void 0}),this.page=1},1),this.filtered||(this.filter=t??this.filter),this.types=o??"",this.search=i??"",this.singleApp=c,this.sort=n,this.page=Number(s)||1})}openFilters({target:e}){this.sidenav?.showModal(e)}static styles=[S]};m.SortOrder=l;customElements.define(N,m);export{m as MerchCardCollection};

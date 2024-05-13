// branch: MWPW-147678 commit: 4bf0e77f2d7b0109bafc425c1416e6c818912b31 Mon, 13 May 2024 09:37:55 GMT
import{html as a,LitElement as v}from"/libs/deps/lit-all.min.js";import{unsafeHTML as w}from"/libs/deps/lit-all.min.js";var m=class{constructor(t,e){this.key=Symbol("match-media-key"),this.matches=!1,this.host=t,this.host.addController(this),this.media=window.matchMedia(e),this.matches=this.media.matches,this.onChange=this.onChange.bind(this),t.addController(this)}hostConnected(){var t;(t=this.media)==null||t.addEventListener("change",this.onChange)}hostDisconnected(){var t;(t=this.media)==null||t.removeEventListener("change",this.onChange)}onChange(t){this.matches!==t.matches&&(this.matches=t.matches,this.host.requestUpdate(this.key,!this.matches))}};var E="hashchange";function _(o=window.location.hash){let t=[],e=o.replace(/^#/,"").split("&");for(let r of e){let[i,c=""]=r.split("=");i&&t.push([i,decodeURIComponent(c.replace(/\+/g," "))])}return Object.fromEntries(t)}function p(o){let t=new URLSearchParams(window.location.hash.slice(1));Object.entries(o).forEach(([r,i])=>{i?t.set(r,i):t.delete(r)}),t.sort();let e=t.toString();e?window.location.hash=e:window.history.replaceState({},document.title,window.location.pathname+window.location.search)}function g(o){let t=e=>{let r=_(window.location.hash);o(r)};return t(),window.addEventListener(E,t),()=>{window.removeEventListener(E,t)}}var x=(o,t={})=>{o.querySelectorAll("span[data-placeholder]").forEach(e=>{let{placeholder:r}=e.dataset;e.innerText=t[r]??""})};var T="(max-width: 1199px)",y="(min-width: 768px)",C="(min-width: 1200px)";import{css as A,unsafeCSS as b}from"/libs/deps/lit-all.min.js";var S=A`
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
    @media screen and ${b(y)} {
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
    @media screen and ${b(C)} {
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
`;var u=(o,t)=>o.querySelector(`[slot="${t}"]`).textContent.trim();var N="merch-card-collection",l={alphabetical:"alphabetical",authored:"authored"},R={filters:["noResultText","resultText","resultsText"],mobile:["noSearchResultsMobileText","searchResultMobileText","searchResultsMobileText"],desktop:["noSearchResultsText","searchResultText","searchResultsText"]},M=(o,{filter:t})=>o.filter(e=>e.filters.hasOwnProperty(t)),L=(o,{types:t})=>t?(t=t.split(","),o.filter(e=>t.some(r=>e.types.includes(r)))):o,k=o=>o.sort((t,e)=>(t.title??"").localeCompare(e.title??"","en",{sensitivity:"base"})),$=(o,{filter:t})=>o.sort((e,r)=>r.filters[t]?.order==null||isNaN(r.filters[t]?.order)?-1:e.filters[t]?.order==null||isNaN(e.filters[t]?.order)?1:e.filters[t].order-r.filters[t].order),B=(o,{search:t})=>t?.length?(t=t.toLowerCase(),o.filter(e=>(e.title??"").toLowerCase().includes(t))):o,f=class extends v{static properties={filter:{type:String,attribute:"filter",reflect:!0},filtered:{type:String,attribute:"filtered"},search:{type:String,attribute:"search",reflect:!0},sort:{type:String,attribute:"sort",default:l.authored,reflect:!0},types:{type:String,attribute:"types",reflect:!0},limit:{type:Number,attribute:"limit"},page:{type:Number,attribute:"page",reflect:!0},singleApp:{type:String,attribute:"single-app",reflect:!0},hasMore:{type:Boolean},displayResult:{type:Boolean,attribute:"display-result"},resultCount:{type:Number},sidenav:{type:Object}};#e;#t;mobileAndTablet=new m(this,T);constructor(){super(),this.filter="all",this.hasMore=!1,this.resultCount=void 0,this.#t=0,this.displayResult=!1}render(){return a`${this.header}
            <slot></slot>
            ${this.footer}`}updated(t){let e=window.scrollY||document.documentElement.scrollTop;if(!this.querySelector("merch-card"))return;let r=[...this.children].filter(s=>s.tagName==="MERCH-CARD");if(r.length===0)return;t.has("singleApp")&&this.singleApp&&r.forEach(s=>{s.updateFilters(s.name===this.singleApp)});let i=this.sort===l.alphabetical?k:$,n=[M,L,B,i].reduce((s,h)=>h(s,this),r).map((s,h)=>[s,h]);if(this.resultCount=n.length,this.page&&this.limit){let s=this.page*this.limit;this.hasMore=n.length>s,n=n.filter(([,h])=>h<s)}let d=new Map(n);this.#t=(this.limit*(this.page-1)+1).toString(),r.forEach(s=>{d.has(s)?(s.style.order=d.get(s),s.style.order===this.#t&&(this.#e=s),s.size=s.filters[this.filter]?.size,s.style.removeProperty("display"),s.requestUpdate()):(s.style.display="none",s.size=void 0,s.style.removeProperty("order"))}),window.scrollTo(0,e),this.updateComplete.then(()=>{let s=this.shadowRoot.getElementById("resultText")?.firstElementChild?.assignedElements?.()?.[0];s&&x(s,{resultCount:this.resultCount,searchTerm:this.search,filter:this.sidenav?.filters.selectedText})})}connectedCallback(){super.connectedCallback(),this.filtered?(this.filter=this.filtered,this.page=1):this.startDeeplink(),this.sidenav=document.querySelector("merch-sidenav")}disconnectedCallback(){super.disconnectedCallback(),this.stopDeeplink?.()}get header(){if(!this.filtered)return a`<div id="header">
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
              ></sp-button>`:""}get searchBar(){let t=u(this,"searchText");return this.mobileAndTablet.matches?a`<merch-search deeplink="search">
                  <sp-search
                      id="searchBar"
                      placeholder="${t}"
                  ></sp-search>
              </merch-search>`:""}get sortButton(){let t=u(this,"sortText"),e=u(this,"popularityText"),r=u(this,"alphabeticallyText");if(!(t&&e&&r))return;let i=this.sort===l.alphabetical,c=i?"":"selected",n=i?"selected":"";return a`
            <overlay-trigger id="sortButton" placement="bottom" type="hint">
                <sp-button
                    slot="trigger"
                    variant="secondary"
                    treatment="outline"
                    >${t}:
                    ${i?r:e}</sp-button
                >
                <sp-popover slot="click-content" tip>
                    <sp-menu @click="${this.sortChanged}">
                        ${w(`<sp-menu-item
                                value="${l.authored}"
                                ${c}
                                >${e}</sp-menu-item>`)} ${w(`<sp-menu-item
                                value="${l.alphabetical}"
                                ${n}
                                >${r}</sp-menu-item
                            >`)}
                    </sp-menu>
                </sp-popover>
            </overlay-trigger>
        `}sortChanged(t){t.target.value===l.authored?p({sort:void 0}):p({sort:t.target.value})}async showMore(){let t=this.page+1;p({page:t}),this.page=t,await this.updateComplete}startDeeplink(){this.stopDeeplink=g(({category:t,filter:e,types:r,sort:i,search:c,single_app:n,page:d})=>{e=e||t,!this.filtered&&e&&e!==this.filter&&setTimeout(()=>{p({page:void 0}),this.page=1},1),this.filtered||(this.filter=e??this.filter),this.types=r??"",this.search=c??"",this.singleApp=n,this.sort=i,this.page=Number(d)||1})}openFilters({target:t}){this.sidenav?.showModal(t)}static styles=[S]};f.SortOrder=l;customElements.define(N,f);export{f as MerchCardCollection};
//# sourceMappingURL=merch-card-collection.js.map

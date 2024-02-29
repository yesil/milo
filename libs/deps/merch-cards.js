// Thu, 29 Feb 2024 19:11:55 GMT
import{html as a,LitElement as C}from"/libs/deps/lit-all.min.js";import"/libs/deps/lit-all.min.js";var d=class{constructor(t,e){this.key=Symbol("match-media-key"),this.matches=!1,this.host=t,this.host.addController(this),this.media=window.matchMedia(e),this.matches=this.media.matches,this.onChange=this.onChange.bind(this),t.addController(this)}hostConnected(){var t;(t=this.media)==null||t.addEventListener("change",this.onChange)}hostDisconnected(){var t;(t=this.media)==null||t.removeEventListener("change",this.onChange)}onChange(t){this.matches!==t.matches&&(this.matches=t.matches,this.host.requestUpdate(this.key,!this.matches))}};var f="hashchange";function w(r=window.location.hash){let t=[],e=r.replace(/^#/,"").split("&");for(let i of e){let[o,n=""]=i.split("=");o&&t.push([o,decodeURIComponent(n)])}return Object.fromEntries(t)}function c(r){let t=new URLSearchParams(window.location.hash.slice(1));Object.entries(r).forEach(([e,i])=>{i?t.set(e,i):t.delete(e)}),t.sort(),window.location.hash=decodeURIComponent(t.toString())}function g(r){let t=e=>{let i=w(window.location.hash);r(i)};return t(),window.addEventListener(f,t),()=>{window.removeEventListener(f,t)}}var x=(r,t={})=>{requestAnimationFrame(()=>{r.querySelectorAll("span[data-placeholder]").forEach(e=>{let{placeholder:i}=e.dataset;e.innerText=t[i]??""})})};var y="(max-width: 1200px)",T="(min-width: 768px)",E="(min-width: 1200px)";import{css as v,unsafeCSS as b}from"/libs/deps/lit-all.min.js";var S=v`
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
        order: -2;
        display: grid;
        justify-items: top;
        grid-template-columns: 1fr 1fr;
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
    @media screen and ${b(T)} {
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
    @media screen and ${b(E)} {
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
`;var p=(r,t)=>r.querySelector(`[slot="${t}"]`).textContent.trim();var A="merch-cards",l={alphabetical:"alphabetical",authored:"authored"},k={filters:["noResultText","resultText","resultsText"],mobile:["noSearchResultsMobileText","searchResultMobileText","searchResultsMobileText"],desktop:["noSearchResultsText","searchResultText","searchResultsText"]},M=(r,{filter:t})=>r.filter(e=>e.filters.hasOwnProperty(t)),B=(r,{types:t})=>t?(t=t.split(","),r.filter(e=>t.some(i=>e.types.includes(i)))):r,R=r=>r.sort((t,e)=>(t.title??"").localeCompare(e.title??"","en",{sensitivity:"base"})),$=(r,{filter:t})=>r.sort((e,i)=>i.filters[t]?.order==null||isNaN(i.filters[t]?.order)?-1:e.filters[t]?.order==null||isNaN(e.filters[t]?.order)?1:e.filters[t].order-i.filters[t].order),N=(r,{search:t})=>t?.length?(t=t.toLowerCase(),r.filter(e=>e.includes(t))):r,m=class extends C{static properties={filter:{type:String,attribute:"filter",reflect:!0},filtered:{type:String,attribute:"filtered"},search:{type:String,attribute:"search",reflect:!0},sort:{type:String,attribute:"sort",default:l.authored,reflect:!0},types:{type:String,attribute:"types",reflect:!0},limit:{type:Number,attribute:"limit"},page:{type:Number,attribute:"page",reflect:!0},singleApp:{type:String,attribute:"single-app",reflect:!0},hasMore:{type:Boolean},displayResult:{type:Boolean,attribute:"display-result"},resultCount:{type:Number},sidenav:{type:Object}};#e;#t;mobileAndTablet=new d(this,y);constructor(){super(),this.filter="all",this.hasMore=!1,this.resultCount=void 0,this.#t=0,this.displayResult=!1}render(){return a`${this.header}
            <slot></slot>
            ${this.footer}`}updated(t){if(!this.querySelector("merch-card"))return;let e=[...this.children].filter(s=>s.tagName==="MERCH-CARD");if(e.length===0)return;t.has("singleApp")&&this.singleApp&&e.forEach(s=>{s.updateFilters(s.name===this.singleApp)});let i=this.sort===l.alphabetical?R:$,n=[M,B,N,i].reduce((s,h)=>h(s,this),e).map((s,h)=>[s,h]);if(this.resultCount=n.length,this.page&&this.limit){let s=this.page*this.limit;this.hasMore=n.length>s,n=n.filter(([,h])=>h<s)}let u=new Map(n);this.#t=(this.limit*(this.page-1)+1).toString(),e.forEach(s=>{u.has(s)?(s.style.order=u.get(s),s.style.order===this.#t&&(this.#e=s),s.size=s.filters[this.filter]?.size,s.style.removeProperty("display")):(s.style.display="none",s.size=void 0,s.style.removeProperty("order"))}),this.updateComplete.then(()=>{let s=this.shadowRoot.getElementById("resultText")?.firstElementChild?.assignedElements?.()?.[0];s&&x(s,{resultCount:this.resultCount,searchTerm:this.search,filter:this.sidenav?.filters.selectedText})})}connectedCallback(){super.connectedCallback(),this.filtered?(this.filter=this.filtered,this.page=1):this.startDeeplink(),this.sidenav=document.querySelector("merch-sidenav")}disconnectedCallback(){super.disconnectedCallback(),this.stopDeeplink?.()}get header(){if(!this.filtered)return a`<div id="header">
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
        </div>`}get resultTextSlotName(){return k[this.search?this.mobileAndTablet.matches?"mobile":"desktop":"filters"][Math.min(this.resultCount,2)]}get showMoreButton(){if(this.hasMore)return a`<sp-button
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
              ></sp-button>`:""}get searchBar(){let t=p(this,"searchText");return this.mobileAndTablet.matches?a`<merch-search deeplink="search">
                  <sp-search
                      id="searchBar"
                      placeholder="${t}"
                  ></sp-search>
              </merch-search>`:""}get sortButton(){let t=p(this,"sortText"),e=p(this,"popularityText"),i=p(this,"alphabeticallyText");if(!(t&&e&&i))return;let o=this.sort===l.alphabetical;return a`
            <overlay-trigger id="sortButton" placement="bottom" type="hint">
                <sp-button
                    slot="trigger"
                    variant="secondary"
                    treatment="outline"
                    >${t}:
                    ${o?i:e}</sp-button
                >
                <sp-popover slot="click-content" tip>
                    <sp-menu @click="${this.sortChanged}">
                        <sp-menu-item
                            value="${l.authored}"
                            ?selected=${!o}
                            >${e}</sp-menu-item
                        ><sp-menu-item
                            value="${l.alphabetical}"
                            ?selected=${o}
                            >${i}</sp-menu-item
                        >
                    </sp-menu>
                </sp-popover>
            </overlay-trigger>
        `}sortChanged(t){t.target.value===l.authored?c({sort:void 0}):c({sort:t.target.value})}async showMore(){let t=this.page+1;c({page:t}),this.page=t,await this.updateComplete,this.#e.scrollIntoView({behavior:"smooth"})}startDeeplink(){this.stopDeeplink=g(({category:t,filter:e,types:i,sort:o,search:n,single_app:u,page:s})=>{e=e||t,!this.filtered&&e&&e!==this.filter&&setTimeout(()=>{c({page:void 0}),this.page=1},1),this.filtered||(this.filter=e??this.filter),this.types=i??"",this.search=n??"",this.singleApp=u,this.sort=o,this.page=Number(s)||1})}openFilters({target:t}){this.sidenav?.showModal(t)}static styles=[S]};m.SortOrder=l;customElements.define(A,m);export{m as MerchCards};
//# sourceMappingURL=merch-cards.js.map

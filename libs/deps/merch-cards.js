// Tue, 12 Mar 2024 13:17:46 GMT
import{html as a,LitElement as A}from"/libs/deps/lit-all.min.js";var m=class{constructor(t,e){this.key=Symbol("match-media-key"),this.matches=!1,this.host=t,this.host.addController(this),this.media=window.matchMedia(e),this.matches=this.media.matches,this.onChange=this.onChange.bind(this),t.addController(this)}hostConnected(){var t;(t=this.media)==null||t.addEventListener("change",this.onChange)}hostDisconnected(){var t;(t=this.media)==null||t.removeEventListener("change",this.onChange)}onChange(t){this.matches!==t.matches&&(this.matches=t.matches,this.host.requestUpdate(this.key,!this.matches))}};var g="hashchange";function v(r=window.location.hash){let t=[],e=r.replace(/^#/,"").split("&");for(let o of e){let[i,n=""]=o.split("=");i&&t.push([i,decodeURIComponent(n)])}return Object.fromEntries(t)}function u(r){let t=new URLSearchParams(window.location.hash.slice(1));Object.entries(r).forEach(([e,o])=>{o?t.set(e,o):t.delete(e)}),t.sort(),window.location.hash=decodeURIComponent(t.toString())}function x(r){let t=e=>{let o=v(window.location.hash);r(o)};return t(),window.addEventListener(g,t),()=>{window.removeEventListener(g,t)}}var y=(r,t={})=>{requestAnimationFrame(()=>{r.querySelectorAll("span[data-placeholder]").forEach(e=>{let{placeholder:o}=e.dataset;e.innerText=t[o]??""})})};var T="(max-width: 1200px)",b="(min-width: 768px)",E="(min-width: 1200px)";import{css as C,unsafeCSS as w}from"/libs/deps/lit-all.min.js";var S=C`
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
    @media screen and ${w(b)} {
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
    @media screen and ${w(E)} {
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
`;var d=(r,t)=>r.querySelector(`[slot="${t}"]`).textContent.trim();var k="merch-cards",l={alphabetical:"alphabetical",authored:"authored"},B={filters:["noResultText","resultText","resultsText"],mobile:["noSearchResultsMobileText","searchResultMobileText","searchResultsMobileText"],desktop:["noSearchResultsText","searchResultText","searchResultsText"]},M=(r,{filter:t})=>r.filter(e=>e.filters.hasOwnProperty(t)),$=(r,{types:t})=>t?(t=t.split(","),r.filter(e=>t.some(o=>e.types.includes(o)))):r,N=r=>r.sort((t,e)=>(t.title??"").localeCompare(e.title??"","en",{sensitivity:"base"})),R=(r,{filter:t})=>r.sort((e,o)=>o.filters[t]?.order==null||isNaN(o.filters[t]?.order)?-1:e.filters[t]?.order==null||isNaN(e.filters[t]?.order)?1:e.filters[t].order-o.filters[t].order),L=(r,{search:t})=>t?.length?(t=t.toLowerCase(),r.filter(e=>e.includes(t))):r,f=class extends A{static properties={filter:{type:String,attribute:"filter",reflect:!0},filtered:{type:String,attribute:"filtered"},search:{type:String,attribute:"search",reflect:!0},sort:{type:String,attribute:"sort",default:l.authored,reflect:!0},types:{type:String,attribute:"types",reflect:!0},limit:{type:Number,attribute:"limit"},page:{type:Number,attribute:"page",reflect:!0},singleApp:{type:String,attribute:"single-app",reflect:!0},hasMore:{type:Boolean},displayResult:{type:Boolean,attribute:"display-result"},resultCount:{type:Number},sidenav:{type:Object},cards:{type:Array,attribute:!1}};filtered;limit;cards;#t;mobileAndTablet=new m(this,T);constructor(){super(),this.filter="all",this.hasMore=!1,this.resultCount=void 0,this.displayResult=!1,this.cards=[]}render(){return a`${this.header}
            <slot></slot>
            ${this.footer}`}updated(t){if(this.cards.length===0)return;let e=[...this.cards];if(e.length===0)return;t.has("singleApp")&&this.singleApp&&e.forEach(s=>{s.updateFilters(s.name===this.singleApp)});let o=this.sort===l.alphabetical?N:R,n=[M,$,L,o].reduce((s,p)=>p(s,this),e).map((s,p)=>[s,p]);if(this.resultCount=n.length,this.page&&this.limit){let s=this.page*this.limit;this.hasMore=n.length>s,n=n.filter(([,p])=>p<s)}let h=new Map(n),c=[...h.keys()];this.#t=c[Math.max(0,c.length-this.limit)],e.forEach(s=>{h.has(s)?(s.style.order=h.get(s),s.size=s.filters[this.filter]?.size,s.style.removeProperty("display"),s.requestUpdate()):(s.style.display="none",s.size=void 0,s.style.removeProperty("order"),s.requestUpdate())}),this.querySelectorAll("merch-card").forEach(s=>s.remove()),this.append(...c),this.updateComplete.then(()=>{let s=this.shadowRoot.getElementById("resultText")?.firstElementChild?.assignedElements?.()?.[0];s&&y(s,{resultCount:this.resultCount,searchTerm:this.search,filter:this.sidenav?.filters.selectedText})})}connectedCallback(){super.connectedCallback(),this.filtered?(this.filter=this.filtered,this.page=1):this.startDeeplink(),this.sidenav=document.querySelector("merch-sidenav")}disconnectedCallback(){super.disconnectedCallback(),this.stopDeeplink?.()}get header(){if(!this.filtered)return a`<div id="header">
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
        </div>`}get resultTextSlotName(){return B[this.search?this.mobileAndTablet.matches?"mobile":"desktop":"filters"][Math.min(this.resultCount,2)]}get showMoreButton(){if(this.hasMore)return a`<sp-button
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
              ></sp-button>`:""}get searchBar(){let t=d(this,"searchText");return this.mobileAndTablet.matches?a`<merch-search deeplink="search">
                  <sp-search
                      id="searchBar"
                      placeholder="${t}"
                  ></sp-search>
              </merch-search>`:""}get sortButton(){let t=d(this,"sortText"),e=d(this,"popularityText"),o=d(this,"alphabeticallyText");if(!(t&&e&&o))return;let i=this.sort===l.alphabetical;return a`
            <overlay-trigger id="sortButton" placement="bottom" type="hint">
                <sp-button
                    slot="trigger"
                    variant="secondary"
                    treatment="outline"
                    >${t}:
                    ${i?o:e}</sp-button
                >
                <sp-popover slot="click-content" tip>
                    <sp-menu @click="${this.sortChanged}">
                        <sp-menu-item
                            value="${l.authored}"
                            ?selected=${!i}
                            >${e}</sp-menu-item
                        ><sp-menu-item
                            value="${l.alphabetical}"
                            ?selected=${i}
                            >${o}</sp-menu-item
                        >
                    </sp-menu>
                </sp-popover>
            </overlay-trigger>
        `}sortChanged(t){t.target.value===l.authored?u({sort:void 0}):u({sort:t.target.value})}async showMore(){let t=this.page+1;u({page:t}),this.page=t,await this.updateComplete,this.#t.scrollIntoView({behavior:"smooth"})}startDeeplink(){this.stopDeeplink=x(({category:t,filter:e,types:o,sort:i,search:n,single_app:h,page:c})=>{e=e||t,!this.filtered&&e&&e!==this.filter&&setTimeout(()=>{u({page:void 0}),this.page=1},1),this.filtered||(this.filter=e??this.filter),this.types=o??"",this.search=n??"",this.singleApp=h,this.sort=i,this.page=Number(c)||1})}openFilters({target:t}){this.sidenav?.showModal(t)}static styles=[S]};f.SortOrder=l;customElements.define(k,f);export{f as MerchCards};
//# sourceMappingURL=merch-cards.js.map

var T=window.adobeid?.authorize?.(),d={Authorization:`Bearer ${T}`,pragma:"no-cache","cache-control":"no-cache"};async function _({path:c,query:t}){let s={};c&&(s.path=c),t&&(s.fullText={text:encodeURIComponent(t),queryMode:"EXACT_WORDS"});let e=new URLSearchParams({query:JSON.stringify({filter:s})}).toString();return fetch(`${this.cfSearchUrl}?${e}`,{headers:d}).then(n=>n.json()).then(n=>n.items)}async function x(c){return fetch(`${this.cfFragmentsUrl}?path=${c}`,{headers:d}).then(t=>t.json()).then(({items:[t]})=>t)}var m=async c=>{let t=c.headers.get("Etag"),s=await c.json();return s.etag=t,s};async function N(c){return await fetch(`${this.cfFragmentsUrl}/${c}`,{headers:d}).then(m)}async function A(c){let{title:t,fields:s}=c;return await fetch(`${this.cfFragmentsUrl}/${c.id}`,{method:"PUT",headers:{"Content-Type":"application/json","If-Match":c.etag,...d},body:JSON.stringify({title:t,fields:s})}).then(m)}var E=class{sites={cf:{fragments:{search:_.bind(this),getCfByPath:x.bind(this),getCfById:N.bind(this),save:A.bind(this)}}};constructor(t){let e=`${`https://${t}.adobeaemcloud.com`}/adobe/sites`;this.cfFragmentsUrl=`${e}/cf/fragments`,this.cfSearchUrl=`${this.cfFragmentsUrl}/search`}};function i(c,t={},s){let e=document.createElement(c);s instanceof HTMLElement?e.appendChild(s):e.innerHTML=s;for(let[n,a]of Object.entries(t))e.setAttribute(n,a);return e}var u="aem-bucket",y={catalog:{name:"catalog",title:{tag:"h3",slot:"heading-xs"},prices:{tag:"h3",slot:"heading-xs"},description:{tag:"div",slot:"body-xs"},ctas:{size:"l"}},ah:{name:"ah",title:{tag:"h3",slot:"heading-xxs"},prices:{tag:"h3",slot:"heading-xs"},description:{tag:"div",slot:"body-xxs"},ctas:{size:"s"}},"ccd-action":{name:"ccd-action",title:{tag:"h3",slot:"heading-xs"},prices:{tag:"h3",slot:"heading-xs"},description:{tag:"div",slot:"body-xs"},ctas:{size:"l"}}};async function R(c,t,s){let e=c.fields.reduce((o,{name:r,multiple:l,values:h})=>(o[r]=l?h:h[0],o),{id:c.id});e.path=e.path,e.model=e.model;let{variant:n="ccd-action"}=e;s.setAttribute("variant",n);let a=y[n];if(e.icon?.forEach(o=>{let r=i("merch-icon",{slot:"icons",src:o,alt:"",href:"",size:"l"});t(r)}),e.title&&t(i(a.title.tag,{slot:a.title.slot},e.title)),e.prices){let o=e.prices,r=i(a.prices.tag,{slot:a.prices.slot},o);t(r)}if(e.description){let o=i(a.description.tag,{slot:a.description.slot},e.description);t(o)}if(e.ctas){let o=e.ctas,r=i("div",{slot:"footer"},o);[...r.querySelectorAll('[is="checkout-link"]')].forEach(l=>{let h=i("sp-button",{},l);h.addEventListener("click",C=>{C.stopPropagation(),l.click()}),r.appendChild(h)}),t(r)}}var f=class{#t=new Map;clear(){this.#t.clear()}add(...t){t.forEach(s=>{let{path:e}=s;e&&this.#t.set(e,s)})}has(t){return this.#t.has(t)}get(t){return this.#t.get(t)}remove(t){this.#t.delete(t)}},g=new f,p=class extends HTMLElement{#t;cache=g;refs=[];path;static get observedAttributes(){return["source","path"]}attributeChangedCallback(t,s,e){this[t]=e}connectedCallback(){let t=this.getAttribute(u)??document.querySelector("mas-studio")?.getAttribute(u);this.#t=new E(t),this.fetchData()}refresh(t=!0){this.refs.forEach(s=>s.remove()),this.refs=[],t&&this.cache.remove(this.path),this.fetchData()}async fetchData(){let t=g.get(this.path);if(t||(t=await this.#t.sites.cf.fragments.getCfByPath(this.path)),t){R(t,e=>{this.parentElement.appendChild(e),this.refs.push(e)},this.parentElement);return}}};customElements.define("merch-datasource",p);export{p as MerchDataSource};
//# sourceMappingURL=merch-datasource.js.map

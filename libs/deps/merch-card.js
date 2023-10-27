// Fri, 27 Oct 2023 13:30:14 GMT
var N=window,O=N.ShadowRoot&&(N.ShadyCSS===void 0||N.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,D=Symbol(),rt=new WeakMap,E=class{constructor(t,e,n){if(this._$cssResult$=!0,n!==D)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(O&&t===void 0){let n=e!==void 0&&e.length===1;n&&(t=rt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&rt.set(e,t))}return t}toString(){return this.cssText}},C=o=>new E(typeof o=="string"?o:o+"",void 0,D),I=(o,...t)=>{let e=o.length===1?o[0]:t.reduce((n,i,s)=>n+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[s+1],o[0]);return new E(e,o,D)},V=(o,t)=>{O?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{let n=document.createElement("style"),i=N.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=e.cssText,o.appendChild(n)})},L=O?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(let n of t.cssRules)e+=n.cssText;return C(e)})(o):o;var q,H=window,st=H.trustedTypes,Ct=st?st.emptyScript:"",at=H.reactiveElementPolyfillSupport,W={toAttribute(o,t){switch(t){case Boolean:o=o?Ct:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},ct=(o,t)=>t!==o&&(t==t||o==o),K={attribute:!0,type:String,converter:W,reflect:!1,hasChanged:ct},F="finalized",v=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach((e,n)=>{let i=this._$Ep(n,e);i!==void 0&&(this._$Ev.set(i,n),t.push(i))}),t}static createProperty(t,e=K){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){let n=typeof t=="symbol"?Symbol():"__"+t,i=this.getPropertyDescriptor(t,n,e);i!==void 0&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,n){return{get(){return this[e]},set(i){let s=this[t];this[e]=i,this.requestUpdate(t,s,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||K}static finalize(){if(this.hasOwnProperty(F))return!1;this[F]=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let e=this.properties,n=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(let i of n)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let n=new Set(t.flat(1/0).reverse());for(let i of n)e.unshift(L(i))}else t!==void 0&&e.push(L(t));return e}static _$Ep(t,e){let n=e.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,n;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)===null||n===void 0||n.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;let e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return V(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var n;return(n=e.hostConnected)===null||n===void 0?void 0:n.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var n;return(n=e.hostDisconnected)===null||n===void 0?void 0:n.call(e)})}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$EO(t,e,n=K){var i;let s=this.constructor._$Ep(t,n);if(s!==void 0&&n.reflect===!0){let r=(((i=n.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?n.converter:W).toAttribute(e,n.type);this._$El=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$El=null}}_$AK(t,e){var n;let i=this.constructor,s=i._$Ev.get(t);if(s!==void 0&&this._$El!==s){let r=i.getPropertyOptions(s),l=typeof r.converter=="function"?{fromAttribute:r.converter}:((n=r.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?r.converter:W;this._$El=s,this[s]=l.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,n){let i=!0;t!==void 0&&(((n=n||this.constructor.getPropertyOptions(t)).hasChanged||ct)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),n.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,n))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,s)=>this[s]=i),this._$Ei=void 0);let e=!1,n=this._$AL;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),(t=this._$ES)===null||t===void 0||t.forEach(i=>{var s;return(s=i.hostUpdate)===null||s===void 0?void 0:s.call(i)}),this.update(n)):this._$Ek()}catch(i){throw e=!1,this._$Ek(),i}e&&this._$AE(n)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(n=>{var i;return(i=n.hostUpdated)===null||i===void 0?void 0:i.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,n)=>this._$EO(n,this[n],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};v[F]=!0,v.elementProperties=new Map,v.elementStyles=[],v.shadowRootOptions={mode:"open"},at?.({ReactiveElement:v}),((q=H.reactiveElementVersions)!==null&&q!==void 0?q:H.reactiveElementVersions=[]).push("1.6.3");var G,M=window,A=M.trustedTypes,lt=A?A.createPolicy("lit-html",{createHTML:o=>o}):void 0,Z="$lit$",f=`lit$${(Math.random()+"").slice(9)}$`,vt="?"+f,kt=`<${vt}>`,$=document,z=()=>$.createComment(""),P=o=>o===null||typeof o!="object"&&typeof o!="function",ft=Array.isArray,zt=o=>ft(o)||typeof o?.[Symbol.iterator]=="function",J=`[ 	
\f\r]`,k=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ht=/-->/g,dt=/>/g,b=RegExp(`>|${J}(?:([^\\s"'>=/]+)(${J}*=${J}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),pt=/'/g,mt=/"/g,xt=/^(?:script|style|textarea|title)$/i,bt=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),g=bt(1),Lt=bt(2),_=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),gt=new WeakMap,y=$.createTreeWalker($,129,null,!1);function yt(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return lt!==void 0?lt.createHTML(t):t}var Pt=(o,t)=>{let e=o.length-1,n=[],i,s=t===2?"<svg>":"",r=k;for(let l=0;l<e;l++){let a=o[l],c,h,d=-1,m=0;for(;m<a.length&&(r.lastIndex=m,h=r.exec(a),h!==null);)m=r.lastIndex,r===k?h[1]==="!--"?r=ht:h[1]!==void 0?r=dt:h[2]!==void 0?(xt.test(h[2])&&(i=RegExp("</"+h[2],"g")),r=b):h[3]!==void 0&&(r=b):r===b?h[0]===">"?(r=i??k,d=-1):h[1]===void 0?d=-2:(d=r.lastIndex-h[2].length,c=h[1],r=h[3]===void 0?b:h[3]==='"'?mt:pt):r===mt||r===pt?r=b:r===ht||r===dt?r=k:(r=b,i=void 0);let u=r===b&&o[l+1].startsWith("/>")?" ":"";s+=r===k?a+kt:d>=0?(n.push(c),a.slice(0,d)+Z+a.slice(d)+f+u):a+f+(d===-2?(n.push(void 0),l):u)}return[yt(o,s+(o[e]||"<?>")+(t===2?"</svg>":"")),n]},U=class o{constructor({strings:t,_$litType$:e},n){let i;this.parts=[];let s=0,r=0,l=t.length-1,a=this.parts,[c,h]=Pt(t,e);if(this.el=o.createElement(c,n),y.currentNode=this.el.content,e===2){let d=this.el.content,m=d.firstChild;m.remove(),d.append(...m.childNodes)}for(;(i=y.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes()){let d=[];for(let m of i.getAttributeNames())if(m.endsWith(Z)||m.startsWith(f)){let u=h[r++];if(d.push(m),u!==void 0){let Et=i.getAttribute(u.toLowerCase()+Z).split(f),R=/([.?@])?(.*)/.exec(u);a.push({type:1,index:s,name:R[2],strings:Et,ctor:R[1]==="."?X:R[1]==="?"?Y:R[1]==="@"?tt:w})}else a.push({type:6,index:s})}for(let m of d)i.removeAttribute(m)}if(xt.test(i.tagName)){let d=i.textContent.split(f),m=d.length-1;if(m>0){i.textContent=A?A.emptyScript:"";for(let u=0;u<m;u++)i.append(d[u],z()),y.nextNode(),a.push({type:2,index:++s});i.append(d[m],z())}}}else if(i.nodeType===8)if(i.data===vt)a.push({type:2,index:s});else{let d=-1;for(;(d=i.data.indexOf(f,d+1))!==-1;)a.push({type:7,index:s}),d+=f.length-1}s++}}static createElement(t,e){let n=$.createElement("template");return n.innerHTML=t,n}};function S(o,t,e=o,n){var i,s,r,l;if(t===_)return t;let a=n!==void 0?(i=e._$Co)===null||i===void 0?void 0:i[n]:e._$Cl,c=P(t)?void 0:t._$litDirective$;return a?.constructor!==c&&((s=a?._$AO)===null||s===void 0||s.call(a,!1),c===void 0?a=void 0:(a=new c(o),a._$AT(o,e,n)),n!==void 0?((r=(l=e)._$Co)!==null&&r!==void 0?r:l._$Co=[])[n]=a:e._$Cl=a),a!==void 0&&(t=S(o,a._$AS(o,t.values),a,n)),t}var Q=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;let{el:{content:n},parts:i}=this._$AD,s=((e=t?.creationScope)!==null&&e!==void 0?e:$).importNode(n,!0);y.currentNode=s;let r=y.nextNode(),l=0,a=0,c=i[0];for(;c!==void 0;){if(l===c.index){let h;c.type===2?h=new T(r,r.nextSibling,this,t):c.type===1?h=new c.ctor(r,c.name,c.strings,this,t):c.type===6&&(h=new et(r,this,t)),this._$AV.push(h),c=i[++a]}l!==c?.index&&(r=y.nextNode(),l++)}return y.currentNode=$,s}v(t){let e=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}},T=class o{constructor(t,e,n,i){var s;this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=i,this._$Cp=(s=i?.isConnected)===null||s===void 0||s}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=S(this,t,e),P(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==_&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):zt(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==p&&P(this._$AH)?this._$AA.nextSibling.data=t:this.$($.createTextNode(t)),this._$AH=t}g(t){var e;let{values:n,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=U.createElement(yt(i.h,i.h[0]),this.options)),i);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===s)this._$AH.v(n);else{let r=new Q(s,this),l=r.u(this.options);r.v(n),this.$(l),this._$AH=r}}_$AC(t){let e=gt.get(t.strings);return e===void 0&&gt.set(t.strings,e=new U(t)),e}T(t){ft(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,n,i=0;for(let s of t)i===e.length?e.push(n=new o(this.k(z()),this.k(z()),this,this.options)):n=e[i],n._$AI(s),i++;i<e.length&&(this._$AR(n&&n._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,e);t&&t!==this._$AB;){let i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},w=class{constructor(t,e,n,i,s){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=p}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,n,i){let s=this.strings,r=!1;if(s===void 0)t=S(this,t,e,0),r=!P(t)||t!==this._$AH&&t!==_,r&&(this._$AH=t);else{let l=t,a,c;for(t=s[0],a=0;a<s.length-1;a++)c=S(this,l[n+a],e,a),c===_&&(c=this._$AH[a]),r||(r=!P(c)||c!==this._$AH[a]),c===p?t=p:t!==p&&(t+=(c??"")+s[a+1]),this._$AH[a]=c}r&&!i&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},X=class extends w{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}},Ut=A?A.emptyScript:"",Y=class extends w{constructor(){super(...arguments),this.type=4}j(t){t&&t!==p?this.element.setAttribute(this.name,Ut):this.element.removeAttribute(this.name)}},tt=class extends w{constructor(t,e,n,i,s){super(t,e,n,i,s),this.type=5}_$AI(t,e=this){var n;if((t=(n=S(this,t,e,0))!==null&&n!==void 0?n:p)===_)return;let i=this._$AH,s=t===p&&i!==p||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==p&&(i===p||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,n;typeof this._$AH=="function"?this._$AH.call((n=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&n!==void 0?n:this.element,t):this._$AH.handleEvent(t)}},et=class{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t)}};var ut=M.litHtmlPolyfillSupport;ut?.(U,T),((G=M.litHtmlVersions)!==null&&G!==void 0?G:M.litHtmlVersions=[]).push("2.8.0");var $t=(o,t,e)=>{var n,i;let s=(n=e?.renderBefore)!==null&&n!==void 0?n:t,r=s._$litPart$;if(r===void 0){let l=(i=e?.renderBefore)!==null&&i!==void 0?i:null;s._$litPart$=r=new T(t.insertBefore(z(),l),l,void 0,e??{})}return r._$AI(o),r};var nt,it;var x=class extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;let n=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=n.firstChild),n}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=$t(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return _}};x.finalized=!0,x._$litElement$=!0,(nt=globalThis.litElementHydrateSupport)===null||nt===void 0||nt.call(globalThis,{LitElement:x});var _t=globalThis.litElementPolyfillSupport;_t?.({LitElement:x});((it=globalThis.litElementVersions)!==null&&it!==void 0?it:globalThis.litElementVersions=[]).push("3.3.3");var B="(min-width: 900px)",j="(min-width: 1280px)",At="(min-width: 1440px)";var St=I`
    :host {
        position: relative;
        display: flex;
        flex-direction: column;
        min-height: 222px;
        height: 100%;
        flex: 1 1 0;
        text-align: left;
        border-radius: var(--consonant-merch-spacing-xxxs);
        background-color: var(--consonant-merch-card-background-color);
        overflow: auto;
        grid-template-columns: repeat(auto-fit, minmax(300px, max-content));
        background-color: var(--consonant-merch-card-background-color);
        font-family: var(--body-font-family, 'Adobe Clean');
        border-radius: var(--consonant-merch-spacing-xs);
        border: 1px solid var(--consonant-merch-card-border-color);
    }

    .invisible {
        visibility: hidden;
    }

    :host(:hover) .invisible {
        visibility: visible;
    }

    slot {
        display: block;
    }

    .top-section {
        display: flex;
        justify-content: flex-start;
        height: 100%;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .icons {
        display: flex;
        width: fit-content;
        fle-direction: row;
    }

    .icons img {
        width: var(--consonant-merch-card-plans-icon-size);
        height: var(--consonant-merch-card-plans-icon-size);
        margin-right: var(--consonant-merch-spacing-xxs);
    }

    .body {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        height: 100%;
        flex-direction: column;
        gap: var(--consonant-merch-spacing-xxs);
        padding: var(--consonant-merch-spacing-xs);
    }

    ::slotted([slot='footer']) {
        display: flex;
        justify-content: flex-end;
        margin-top: auto;
        box-sizing: border-box;
        align-self: flex-end;
        width: 100%;
        padding: var(--consonant-merch-spacing-xs);
    }

    hr {
        background-color: var(--color-gray-200);
        border: none;
        height: 1px;
        width: auto;
        margin-top: 0;
        margin-bottom: 0;
        margin-left: var(--consonant-merch-spacing-xs);
        margin-right: var(--consonant-merch-spacing-xs);
    }

    div[class$='-ribbon'] {
        position: absolute;
        top: 16px;
        right: 0;
        font-size: var(--type-heading-xxs-size);
        font-weight: 500;
        max-width: 150px;
        line-height: 16px;
        text-align: center;
        padding: 8px 11px;
        border-radius: 5px 0 0 5px;
    }

    .body .catalog-ribbon {
        display: flex;
        height: fit-content;
        flex-direction: column;
        width: fit-content;
        border-radius: 5px;
        position: relative;
        top: 0;
        margin-left: var(--consonant-merch-spacing-xxs);
    }

    .image {
        flex-grow: 1;
        position: relative;
        width: 100%;
        min-height: var(--consonant-merch-card-image-height);
        max-height: var(--consonant-merch-card-image-height);
        background-color: var(--background-color);
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .detail-bg-container {
        right: 0;
        padding: var(--consonant-merch-spacing-xs);
        border-radius: 5px;
        font-size: var(--consonant-merch-card-body-font-size);
        margin: var(--consonant-merch-spacing-xs);
    }

    .action-menu {
        display: flex;
        width: 32px;
        height: 32px;
        position: absolute;
        top: 16px;
        right: 16px;
        background: url('../src/img/ellipsis.svg') no-repeat center center,
            #f6f6f6;
        background-size: 16px 16px;
    }
    .hidden {
        visibility: hidden;
    }

    .standard-wrapper {
        display: flex;
        flex-wrap: wrap;
        gap: var(--spacing-xs);
        align-items: center;
        justify-content: space-between;
    }

    .checkbox-label,
    .secure-transaction-label {
        font-size: var(--consonant-merch-card-body-xxs-font-size);
        line-height: 1.3;
        color: var(--color-gray-600);
    }

    .secure-transaction-label {
        white-space: nowrap;
    }

    .secure-transaction-icon {
        height: 15px;
        width: 12px;
        right: 16px;
        background-image: url('../src/img/secure-transaction.svg');
        background-repeat: no-repeat;
    }

    .checkbox-container,
    .secure-transaction-wrapper {
        display: flex;
        align-items: center;
        gap: var(--consonant-merch-spacing-xxs);
    }

    .secure-transaction-wrapper {
        padding-left: var(--consonant-merch-spacing-xs);
    }

    .checkbox-container input[type='checkbox']:checked + .checkmark {
        background-color: var(--color-accent);
        background-image: url('../src/img/checkmark-white-small.svg');
        border-color: var(--color-accent);
    }

    .checkbox-container input[type='checkbox'] {
        display: none;
    }

    .checkbox-container .checkmark {
        position: relative;
        display: inline-block;
        width: 12px;
        height: 12px;
        border: 2px solid #757575;
        background: #fff;
        border-radius: 2px;
        cursor: pointer;
        margin-top: 2px;
    }

    :host([type='super-wide']) {
        grid-column: span 4;
    }

    :host([type='wide']) {
        grid-column: span 2;
    }

    :host([variant='special-offers']) {
        width: var(--consonant-merch-card-special-offer-width);
        min-height: 438px;
    }

    :host([variant='special-offers'][type='wide']) {
        width: calc(var(--consonant-merch-card-special-offer-width) * 2)
        min-height: 438px;
    }

    :host([variant='special-offers'][type='super-wide']) {
        width: calc(var(--consonant-merch-card-special-offer-width) * 4);
        min-height: 438px;
    }

    /* Tablet */
    @media screen and ${C(B)} {
    }

    /* Laptop */
    @media screen and ${C(j)} {
    }
`;var wt=document.createElement("style");wt.innerHTML=`
:root {

    --consonant-merch-card-detail-font-size: 12px;
    --consonant-merch-card-detail-font-weight: 500;
    --consonant-merch-card-detail-letter-spacing: 0.8px;
    --consonant-merch-card-background-color: #fff;

    --consonant-merch-card-heading-font-size: 18px;
    --consonant-merch-card-heading-line-height: 22.5px;
    --consonant-merch-card-heading-secondary-font-size: 14px;
    --consonant-merch-card-body-font-size: 14px;
    --consonant-merch-card-body-line-height: 21px;

    /* spacing */
    --consonant-merch-spacing-xxxs: 4px;
    --consonant-merch-spacing-xxs: 8px;
    --consonant-merch-spacing-xs: 16px;
    --consonant-merch-spacing-s: 24px;
    --consonant-merch-spacing-m: 32px;

    /* headings */
    --consonant-merch-card-heading-xs-font-size: 18px;
    --consonant-merch-card-heading-xs-line-height: 22.5px;
    --consonant-merch-card-heading-s-font-size: 20px;
    --consonant-merch-card-heading-s-line-height: 25px;
    --consonant-merch-card-heading-m-font-size: 18px;
    --consonant-merch-card-heading-m-line-height: 27px;
    --consonant-merch-card-heading-l-font-size: 20px;
    --consonant-merch-card-heading-l-line-height: 30px;
    --consonant-merch-card-heading-xl-font-size: 36px;
    --consonant-merch-card-heading-xl-line-height: 45px;

    /* detail */
    --consonant-merch-card-detail-m-font-size: 12px;
    --consonant-merch-card-detail-m-line-height: 15px;
    --consonant-merch-card-detail-m-font-weight: 700;
    --consonant-merch-card-detail-m-letter-spacing: 1px;

    /* body */
    --consonant-merch-card-body-xxs-font-size: 12px;
    --consonant-merch-card-body-xxs-line-height: 18px;
    --consonant-merch-card-body-xs-font-size: 14px;
    --consonant-merch-card-body-xs-line-height: 21px;
    --consonant-merch-card-body-m-font-size: 18px;
    --consonant-merch-card-body-m-line-height: 27px;
    --consonant-merch-card-body-l-font-size: 20px;
    --consonant-merch-card-body-l-line-height: 30px;
    --consonant-merch-card-body-xl-font-size: 22px;
    --consonant-merch-card-body-xl-line-height: 33px;


    --consonant-merch-card-heading-padding: 0;
    --consonant-merch-card-image-height: 180px;

    /* colors */
    --consonant-merch-card-border-color: #eaeaea;
    --color-accent: #1473E6;
    --color-black: #000;

    /* merch card generic */
    --consonant-merch-card-max-width: 378px;

    /* special offers mobile */
    --consonant-merch-card-special-offer-width: 300px;

    /* segment */
    --consonant-merch-card-segment-max-width: 378px;

    /* plans */
    --consonant-merch-card-plans-max-width: 302px;
    --consonant-merch-card-plans-icon-size: 40px;

    /* catalog */
    --consonant-merch-card-catalog-max-width: 276px;
    --consonant-merch-card-catalog-icon-size: 40px;
}

.merch-cards-1
.merch-cards-2,
.merch-cards-3,
.merch-cards-4 {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(1, fit-content(100%));
}

/* Tablet */
@media screen and ${B} {
    :root {
        --consonant-merch-card-special-offer-width: 302px;
    }

    .merch-cards-2,
    .merch-cards-3,
    .merch-cards-4 {
        grid-template-columns: repeat(2, fit-content(100%));
    }
}

/* desktop */
@media screen and ${j} {
    :root {
        --consonant-merch-card-special-offer-width: 378px;
    }

    .merch-cards-3,
    .merch-cards-4 {
        grid-template-columns: repeat(3, fit-content(100%));
    }
}

/* Large desktop */
    @media screen and ${At} {
    :root {

    }

    .merch-cards-4 {
        grid-template-columns: repeat(4, fit-content(100%));
    }
}

.m-gap {
    gap: var(--consonant-merch-spacing-xs);
}

.l-gap {
    gap: var(--consonant-merch-spacing-s);
}

.xl-gap {
    gap: var(--consonant-merch-spacing-m);
}



div[class$='-badge'] {
    position: absolute;
    top: 16px;
    right: 0;
    font-size: var(--type-heading-xxs-size);
    font-weight: 500;
    max-width: 150px;
    line-height: 16px;
    text-align: center;
    padding: 8px 11px;
    border-radius: 5px 0 0 5px;
}

merch-card.background-opacity-70 {
    background-color: rgba(255 255 255 / 70%);
}

merch-card hr {
    background-color: var(--color-gray-200);
    border: none;
    height: 1px;
    width: 100%;
    margin-bottom: var(--consonant-merch-card-spacing-xs);
}

merch-card.has-divider hr {
    margin: var(--consonant-merch-card-spacing-xs) 0;
}

merch-card[variant="special-offers"] span[is="inline-price"][data-template="priceStrikethrough"] {
    font-size: var(--consonant-merch-card-body-xs-font-size);
}

merch-card[variant="segment"] {
    max-width: var(--consonant-merch-card-segment-max-width);
}

merch-card[variant="plans"] {
    max-width: var(--consonant-merch-card-plans-max-width);
}

merch-card[variant="catalog"] {
    max-width: var(--consonant-merch-card-catalog-max-width);
}

merch-card p, merch-card h3, merch-card h4 {
    margin: 0;
}

merch-card [is=inline-price] {
    display: inline-block;
}

merch-card [slot='heading-xs'] {
    font-size: var(--consonant-merch-card-heading-xs-font-size);
    line-height: var(--consonant-merch-card-heading-xs-line-height);
}

merch-card [slot='heading-s'] {
    font-size: var(--consonant-merch-card-heading-s-font-size);
    line-height: var(--consonant-merch-card-heading-s-line-height);
}

merch-card [slot='heading-m'] {
    font-size: var(--consonant-merch-card-heading-m-font-size);
    line-height: var(--consonant-merch-card-heading-m-line-height);
    margin: 0;
}

merch-card [slot='heading-l'] {
    font-size: var(--consonant-merch-card-heading-l-font-size);
    line-height: var(--consonant-merch-card-heading-l-line-height);
    margin: 0;
}

merch-card [slot='heading-xl'] {
    font-size: var(--consonant-merch-card-heading-xl-font-size);
    line-height: var(--consonant-merch-card-heading-xl-line-height);
    margin: 0;
}

merch-card [slot='detail-m'] {
    font-size: var(--consonant-merch-card-detail-m-font-size);
    font-weight: var(--consonant-merch-card-detail-font-weight);
    letter-spacing: var(--consonant-merch-card-detail-m-letter-spacing);
    font-weight: var(--consonant-merch-card-detail-m-font-weight);
    text-transform: uppercase;
    margin: 0;
}

merch-card [slot="body-xxs"] {
    font-size: var(--consonant-merch-card-body-xxs-font-size);
    line-height: var(--consonant-merch-card-body-xxs-line-height);
}

merch-card [slot="body-xs"] {
    font-size: var(--consonant-merch-card-body-xs-font-size);
    line-height: var(--consonant-merch-card-body-xs-line-height);
}

merch-card [slot="body-m"] {
    font-size: var(--consonant-merch-card-body-m-font-size);
    line-height: var(--consonant-merch-card-body-m-line-height);
}

merch-card [slot="body-l"] {
    font-size: var(--consonant-merch-card-body-l-font-size);
    line-height: var(--consonant-merch-card-body-l-line-height);
}

merch-card [slot="body-xl"] {
    font-size: var(--consonant-merch-card-body-xl-font-size);
    line-height: var(--consonant-merch-card-body-xl-line-height);
}

merch-card[variant="special-offers"] [slot="list"] ul {
    padding-left: 0;
    padding-bottom: var(--consonant-merch-spacing-xxs);
    margin-top: 0;
    margin-bottom: 0;
    list-style-position: inside;
    list-style-type: '\u2022 ';
}

merch-card[variant="special-offers"] ul li {
    padding-left: 0;
    line-height: var(--consonant-merch-card-body-line-height);
    font-size: var(--consonant-merch-card-body-xxs-font-size);
}

merch-card[variant="special-offers"] ul li ::marker {
    margin-right: 0;
}

merch-card[variant="catalog"] [slot="action-menu-content"] {
    background-color: #000;
    color: #fff;
    font-size: var(--consonant-merch-card-body-xs-font-size);
    width: fit-content;
    padding: var(--consonant-merch-spacing-xs);
    border-radius: var(--consonant-merch-spacing-xxxs);
    position: absolute;
    top: 55px;
    right: 15px;
    line-height: var(--consonant-merch-card-body-line-height);
}

merch-card[variant="catalog"] [slot="action-menu-content"] ul {
    padding-left: 0;
    padding-bottom: var(--consonant-merch-spacing-xss);
    margin-top: 0;
    margin-bottom: 0;
    list-style-position: inside;
    list-style-type: '\u2022 ';
}

merch-card[variant="catalog"] [slot="action-menu-content"] ul li {
    padding-left: 0;
    line-height: var(--consonant-merch-card-body-line-height);
}

merch-card[variant="catalog"] [slot="action-menu-content"] ::marker {
    margin-right: 0;
}

merch-card[variant="catalog"] [slot="action-menu-content"] a {
    color: var(--consonant-merch-card-background-color);
    text-decoration: underline;
}

.button--inactive {
    display: none;
}

div[slot="footer"] a.con-button {
    margin-left: var(--consonant-merch-spacing-xs);
}
`;document.head.appendChild(wt);var ot=class extends x{static properties={name:{type:String},variant:{type:String},type:{type:String},badgeColor:{type:String,attribute:"badge-color"},badgeBackgroundColor:{type:String,attribute:"badge-background-color"},badgeText:{type:String,attribute:"badge-text"},icons:{type:Array},actionmenu:{type:Boolean,attribute:"action-menu"},actionMenuContent:{type:String,attribute:"action-menu-content"},title:{type:String},description:{type:String},image:{type:String,attribute:"image"},customHr:{type:String,attribute:"hr"},detailBg:{type:String,attribute:"detail-bg"},secureLabel:{type:String,attribute:"secure-label"},checkboxLabel:{type:String,attribute:"checkbox-label"},evergreen:{type:Boolean},filters:{type:String,reflect:!0,converter:{fromAttribute:t=>Object.fromEntries(t.split(",").map(e=>{let[n,i]=e.split(":"),s=Number(i);return[n,isNaN(s)?void 0:s]})),toAttribute:t=>Object.entries(t).map(([e,n])=>isNaN(n)?e:`${e}:${n}`).join(",")}},types:{type:String,attribute:"types",reflect:!0}};static styles=[St];constructor(){super(),this.filters={},this.types=""}updated(t){t.has("badgeBackgroundColor")&&(this.style.border=`1px solid ${this.badgeBackgroundColor}`)}renderIcons(){return this.icons&&this.icons.length>0?g`
                  <div class="icons">
                      ${this.icons.map(t=>g`<img src="${t.src}" alt="${t.alt}" />`)}
                  </div>
              `:""}createCheckBox(){return this.checkboxLabel?g`
                  <div class="checkbox-container">
                      <input id="alt-cta" type="checkbox" />
                      <span
                          class="checkmark"
                          @click="${this.toggleCheckBox}"
                      ></span>
                      <label class="checkbox-label"
                          >${this.checkboxLabel}</label
                      >
                  </div>
              `:""}createPlansFooter(){let t=g` <slot name="footer"></slot>`,e=this.secureLabel;return e?g` <div class="standard-wrapper">
                  <div class="secure-transaction-wrapper">
                      <span class="secure-transaction-icon"></span>
                      <span class="secure-transaction-label"
                          >${e}</span
                      >
                  </div>
                  ${t}
              </div>`:t}decorateRibbon(){let t;if(!(!this.badgeBackgroundColor||!this.badgeColor||!this.badgeText))return this.evergreen&&(t=`border: 1px solid ${this.badgeBackgroundColor}; border-right: none;`),g`
            <div
                class="${this.variant}-ribbon"
                style="background-color: ${this.badgeBackgroundColor}; color: ${this.badgeColor}; ${t?` ${t}`:""}"
            >
                ${this.badgeText}
            </div>
        `}toggleCheckBox(){let t=this.shadowRoot.querySelector("#alt-cta");t.checked=!t.checked;let e=this.shadowRoot.querySelector('slot[name="footer"]');if(e){let n=e.assignedNodes({flatten:!0}),i,s;n.forEach(r=>{s=r.querySelector(".alt-cta"),i=r.querySelector(".active")}),i&&s&&(i.classList.toggle("button--inactive",t.checked),s.classList.toggle("button--inactive",!t.checked))}}toggleActionMenu(){this.shadowRoot.querySelector('slot[name="action-menu-content"]').classList.toggle("hidden")}get title(){return this.querySelector('[slot="heading"]').textContent.trim()}updateFilters(t){let e={...this.filters};Object.keys(e).forEach(n=>{if(t){e[n]=Math.min(e[n],2);return}let i=e[n];i===1||isNaN(i)||(e[n]=Number(i)+1)}),this.filters=e}includes(t){return this.textContent.match(new RegExp(t,"i"))!==null}render(){switch(this.variant){case"special-offers":return this.renderSpecialOffer();case"segment":return this.renderSegment();case"plans":return this.renderPlans();case"catalog":return this.renderCatalog();default:return g` <div />`}}renderSpecialOffer(){return g` <div
                class="image"
                style="${this.image?`background-image: url(${this.image})`:""}"
            >
                ${this.decorateRibbon()}
            </div>
            <div class="body">
                <slot name="detail-m"></slot>
                <slot name="heading-xs"></slot>
                <slot name="body-xs"></slot>
            </div>
            ${this.evergreen?g`
                      <div
                          class="detail-bg-container"
                          style="background: ${this.detailBg}"
                      >
                          <slot name="detail-bg"></slot>
                      </div>
                  `:g`
                      <hr />
                      <slot name="footer"></slot>
                  `}`}renderSegment(){return g` ${this.decorateRibbon()}
            <div class="body">
                <slot name="heading-xs"></slot>
                <slot name="heading-xs"></slot>
                <slot name="body-xs"></slot>
            </div>
            <hr />
            <slot name="footer"></slot>`}renderPlans(){return g` ${this.decorateRibbon()}
            <div class="body">
                ${this.renderIcons()}
                <slot name="heading-xs"></slot>
                <slot name="heading-m"></slot>
                <slot name="body-xxs"></slot>
                <slot name="body-xs"></slot>
                ${this.createCheckBox()}
            </div>
            ${this.createPlansFooter()}`}renderCatalog(){return g` <div class="body">
                <div class="top-section">
                    ${this.renderIcons()} ${this.decorateRibbon()}
                    <div
                        class="action-menu ${this.actionmenu?"invisible":"hidden"}"
                        @click="${this.toggleActionMenu}"
                    ></div>
                </div>
                <slot
                    name="action-menu-content"
                    class="action-menu-content ${this.actionMenuContent?"":"hidden"}"
                    >${this.actionMenuContent}</slot
                >
                <slot name="heading-xs"></slot>
                <slot name="heading-m"></slot>
                <slot name="body-xxs"></slot>
                <slot name="body-xs"></slot>
            </div>
            <slot name="footer"></slot>`}};customElements.define("merch-card",ot);export{ot as MerchCard};
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=merch-card.js.map

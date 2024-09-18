/* eslint-disable */
/* Generated by Milo */

var g=Object.defineProperty;var v=Object.getOwnPropertyDescriptor;var b=Object.getOwnPropertyNames;var E=Object.prototype.hasOwnProperty;var C=(i,t)=>{for(var n in t)g(i,n,{get:t[n],enumerable:!0})},h=(i,t,n,e)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of b(t))!E.call(i,r)&&r!==n&&g(i,r,{get:()=>t[r],enumerable:!(e=v(t,r))||e.enumerable});return i},d=(i,t,n)=>(h(i,t,"default"),n&&h(n,t,"default"));var o={};C(o,{ElementSizes:()=>P,SizedMixin:()=>R,SpectrumElement:()=>m,SpectrumMixin:()=>x});import{LitElement as S}from"../../../../deps/lit-all.min.js";var f="0.42.5";var p=new Set,I=()=>{let i=document.documentElement.dir==="rtl"?document.documentElement.dir:"ltr";p.forEach(t=>{t.setAttribute("dir",i)})},w=new MutationObserver(I);w.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});var _=i=>typeof i.startManagingContentDirection<"u"||i.tagName==="SP-THEME";function x(i){class t extends i{get isLTR(){return this.dir==="ltr"}hasVisibleFocusInTree(){let e=((r=document)=>{var c;let s=r.activeElement;for(;s!=null&&s.shadowRoot&&s.shadowRoot.activeElement;)s=s.shadowRoot.activeElement;let u=s?[s]:[];for(;s;){let a=s.assignedSlot||s.parentElement||((c=s.getRootNode())==null?void 0:c.host);a&&u.push(a),s=a}return u})(this.getRootNode())[0];if(!e)return!1;try{return e.matches(":focus-visible")||e.matches(".focus-visible")}catch{return e.matches(".focus-visible")}}connectedCallback(){if(!this.hasAttribute("dir")){let e=this.assignedSlot||this.parentNode;for(;e!==document.documentElement&&!_(e);)e=e.assignedSlot||e.parentNode||e.host;if(this.dir=e.dir==="rtl"?e.dir:this.dir||"ltr",e===document.documentElement)p.add(this);else{let{localName:r}=e;r.search("-")>-1&&!customElements.get(r)?customElements.whenDefined(r).then(()=>{e.startManagingContentDirection(this)}):e.startManagingContentDirection(this)}this._dirParent=e}super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this._dirParent&&(this._dirParent===document.documentElement?p.delete(this):this._dirParent.stopManagingContentDirection(this),this.removeAttribute("dir"))}}return t}var m=class extends x(S){};m.VERSION=f;import{property as N}from"../../../../deps/lit-all.min.js";var M=Object.defineProperty,y=Object.getOwnPropertyDescriptor,D=(i,t,n,e)=>{for(var r=e>1?void 0:e?y(t,n):t,c=i.length-1,s;c>=0;c--)(s=i[c])&&(r=(e?s(t,n,r):s(r))||r);return e&&r&&M(t,n,r),r},P={xxs:"xxs",xs:"xs",s:"s",m:"m",l:"l",xl:"xl",xxl:"xxl"};function R(i,{validSizes:t=["s","m","l","xl"],noDefaultSize:n,defaultSize:e="m"}={}){class r extends i{constructor(){super(...arguments),this._size=e}get size(){return this._size||e}set size(s){let u=n?null:e,a=s&&s.toLocaleLowerCase(),l=t.includes(a)?a:u;if(l&&this.setAttribute("size",l),this._size===l)return;let z=this._size;this._size=l,this.requestUpdate("size",z)}update(s){!this.hasAttribute("size")&&!n&&this.setAttribute("size",this.size),super.update(s)}}return D([N({type:String})],r.prototype,"size",1),r}d(o,H);import*as H from"../../../../deps/lit-all.min.js";var T=o.css`
    .spectrum-UIIcon-CornerTriangle75{--spectrum-icon-size:var(--spectrum-corner-triangle-icon-size-75)}.spectrum-UIIcon-CornerTriangle100{--spectrum-icon-size:var(--spectrum-corner-triangle-icon-size-100)}.spectrum-UIIcon-CornerTriangle200{--spectrum-icon-size:var(--spectrum-corner-triangle-icon-size-200)}.spectrum-UIIcon-CornerTriangle300{--spectrum-icon-size:var(--spectrum-corner-triangle-icon-size-300)}
`,G=T;export{G as default};

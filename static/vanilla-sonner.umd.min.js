(function(r,l){typeof exports=="object"&&typeof module<"u"?l(exports):typeof define=="function"&&define.amd?define(["exports"],l):(r=typeof globalThis<"u"?globalThis:r||self,l(r.Sonner={}))})(this,function(r){"use strict";var R=r=>{throw TypeError(r)};var I=(r,l,g)=>l.has(r)||R("Cannot "+g);var M=(r,l,g)=>l.has(r)?R("Cannot add the same private member more than once"):l instanceof WeakSet?l.add(r):l.set(r,g);var v=(r,l,g)=>(I(r,l,"access private method"),g);var f,E,y,p,P,x;const l=`<button type="button" class="sonner-toast-close">
    <svg xmlns="http://www.w3.org/2000/svg"
         width="10"
         height="10"
         viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         stroke-width="2"
         stroke-linecap="round"
         stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M18 6l-12 12" />
        <path d="M6 6l12 12" />
    </svg>
</button>
<div class="sonner-toast-content-container">
    {{ slot }}
    <button type="button" data-sonner-action-button="false">{{ action_label }}</button>
</div>

`,g=`<div data-toast-plain>{{ message }}</div>
`,H=`<div data-toast-description>
    <div data-title>{{title}}</div>
    <div data-description>{{description}}</div>
</div>`,z=`<div data-toast-container-horizontal data-toast-level="success">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path
      d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
    />
  </svg>
  <div data-toast-level-message>{{message}}</div>
</div>
`,B=`<div data-toast-container-horizontal data-toast-level="info">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path
      d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm0 9h-1l-.117 .007a1 1 0 0 0 0 1.986l.117 .007v3l.007 .117a1 1 0 0 0 .876 .876l.117 .007h1l.117 -.007a1 1 0 0 0 .876 -.876l.007 -.117l-.007 -.117a1 1 0 0 0 -.764 -.857l-.112 -.02l-.117 -.006v-3l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007zm.01 -3l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z"
    />
  </svg>
  <div data-toast-level-message>{{message}}</div>
</div>
`,L=`<div data-toast-container-horizontal data-toast-level="warning">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path
      d="M12 1.67c.955 0 1.845 .467 2.39 1.247l.105 .16l8.114 13.548a2.914 2.914 0 0 1 -2.307 4.363l-.195 .008h-16.225a2.914 2.914 0 0 1 -2.582 -4.2l.099 -.185l8.11 -13.538a2.914 2.914 0 0 1 2.491 -1.403zm.01 13.33l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm-.01 -7a1 1 0 0 0 -.993 .883l-.007 .117v4l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-4l-.007 -.117a1 1 0 0 0 -.993 -.883z"
    />
  </svg>
  <div data-toast-level-message>{{message}}</div>
</div>
`,D=`<div data-toast-container-horizontal data-toast-level="error">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path
      d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-5 11.66a1 1 0 0 0 -1 1v.01a1 1 0 0 0 2 0v-.01a1 1 0 0 0 -1 -1m0 -7a1 1 0 0 0 -1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0 -1 -1"
    />
  </svg>
  <div data-toast-level-message>{{message}}</div>
</div>
`,S=`<div data-toast-container-horizontal>
  <div data-toast-promise-running data-show="true"></div>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    data-toast-promise-completed 
    data-show="false"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path
      d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
    />
  </svg>
  <div data-toast-promise-message></div>
</div>
`;function k(o,t){return o.replace(/{{ ?(\w+) ?}}/g,(d,i)=>i in t?t[i]:"").trim()}function u(o,t){const s=k(o,t);return l.replace(/{{ ?slot ?}}/g,s.trim())}class A{constructor(t){M(this,f);this.id=`toast-${Math.random().toString(26).substring(4)}-${Date.now()}`,this.options=t,this.toast=document.createElement("li"),this.toast.setAttribute("id",this.id),this.setXPosition(t.xPosition||"right"),this.setYPosition(t.yPosition||"bottom"),this.isExpanded=!1,this.hidden=!1,this.timeStarted=Date.now(),this.removalTimer=null,this.lastRemovalPaused=Date.now(),this.duration=t.duration||0,this.remainingTimeToRemove=this.duration,this.height=0,this.onUpdate=null,this.onClose=null,this.onRemove=null,this.canRemove=!0,v(this,f,E).call(this)}get element(){return this.toast}updateHeight(){this.height=this.toast.getBoundingClientRect().height}setCollapsedHeight(t){this.toast.style.setProperty("--collapsed-height",`${t}px`)}setFront(t){this.isFront=t,this.toast.dataset.front=t.toString()}setXPosition(t){this.xPosition=t,this.toast.dataset.xPosition=t}setYPosition(t){this.yPosition=t,this.toast.dataset.yPosition=t}setIndex(t){this.index=t,this.element.style.setProperty("--index",String(t))}show(){this.toast.dataset.hidden="false",this.hidden=!1}hide(){this.toast.dataset.hidden="true",this.hidden=!0}setMounted(){setTimeout(()=>{this.toast.dataset.mounted="true"},10),this.canRemove&&v(this,f,y).call(this)}setSpaceAbove(t){this.element.style.setProperty("--space-above",`${t}px`)}setExpanded(){this.isExpanded=!0,this.toast.dataset.expanded="true",this.duration>0&&this.canRemove&&this.pauseRemoval()}setCollapsed(){this.isExpanded=!1,this.toast.dataset.expanded="false",this.duration>0&&this.canRemove&&!this.removalTimer&&this.resumeRemoval()}setTheme(t){this.toast.dataset.theme=t}pauseRemoval(){this.removalTimer&&clearTimeout(this.removalTimer),this.removalTimer=null,this.remainingTimeToRemove=Math.max(0,this.remainingTimeToRemove-(Date.now()-this.timeStarted))}resumeRemoval(){this.removalTimer=setTimeout(()=>{this.remove(),this.removalTimer=null},this.remainingTimeToRemove+1e3),this.timeStarted=Date.now()}remove(){var t;this.hide(),(t=this.onClose)==null||t.call(this,this.toast.id),this.removalTimer&&clearTimeout(this.removalTimer),setTimeout(()=>{this.element.remove(),this.onRemove&&(this.onRemove(this.toast.id),this.onClose=null,this.onUpdate=null,this.onRemove=null)},500)}}f=new WeakSet,E=function(){var s,d;switch(this.options.type){case"plain":this.toast.innerHTML=u(g,{id:this.id,message:this.options.message||""});break;case"description":this.toast.innerHTML=u(H,{id:this.id,title:this.options.message||"",description:this.options.description||""});break;case"success":this.toast.innerHTML=u(z,{id:this.id,message:this.options.message||""});break;case"info":this.toast.innerHTML=u(B,{id:this.id,message:this.options.message||""});break;case"warning":this.toast.innerHTML=u(L,{id:this.id,message:this.options.message||""});break;case"error":this.toast.innerHTML=u(D,{id:this.id,message:this.options.message||""});break;case"custom":if(!this.options.template_id)throw new Error("Custom toasts require a template_id");const i=document.getElementById(this.options.template_id);if(!i)throw new Error("Template not found: "+this.options.template_id);let a=this.options.toastData||{};a.id=this.id,this.toast.innerHTML=u(i.innerHTML,a);break;case"promise":let m=function(){var T,b,w;(T=this.toast.querySelector("[data-toast-promise-running]"))==null||T.setAttribute("data-show","false"),(b=this.toast.querySelector("[data-toast-promise-completed]"))==null||b.setAttribute("data-show","true"),this.canRemove=!0,v(this,f,y).call(this),this.isExpanded&&this.pauseRemoval(),(w=this.onUpdate)==null||w.call(this,this.id)},h=function(T){var w;const b=(w=this.toast)==null?void 0:w.querySelector("[data-toast-promise-message]");b.innerHTML=T};this.canRemove=!1,this.toast.innerHTML=u(S,{id:this.id,message:this.options.message||""});const e=this.options.promiseOptions;h.bind(this)((e==null?void 0:e.loadingMessage)||""),e==null||e.promise.then(()=>{h.bind(this)((e==null?void 0:e.successMessage)||(e==null?void 0:e.loadingMessage)||""),m.bind(this)()}).catch(()=>{h.bind(this)((e==null?void 0:e.errorMessage)||(e==null?void 0:e.loadingMessage)||""),m.bind(this)()});break}this.toast.dataset.sonnerToast="",this.toast.dataset.theme=this.options.theme||"light",this.toast.dataset.mounted="false",this.toast.dataset.hidden="false",this.toast.dataset.expanded="false",this.toast.dataset.xPosition=this.xPosition,this.toast.dataset.yPosition=this.yPosition,this.toast.dataset.type=this.options.type,this.toast.dataset.richColors=this.options.useRichColors?"true":"false",this.options.closeButton&&(this.toast.style.setProperty("--close-button-display","var(--close-button-visible-display)"),(s=this.toast.querySelector(".sonner-toast-close"))==null||s.addEventListener("click",i=>{i.stopPropagation(),this.remove(),this.removalTimer&&clearTimeout(this.removalTimer)}));const t=this.toast.querySelector("[data-sonner-action-button]");this.options.action?(t.setAttribute("data-sonner-action-button","true"),t.innerHTML=k(t.innerHTML,{action_label:((d=this.options.action)==null?void 0:d.label)||"Action"}),t.addEventListener("click",()=>{var a;let i=(a=this.options.action)==null?void 0:a.onClick();(i==null||i==null||i!==!1)&&this.remove()})):t.remove()},y=function(){this.duration>0&&(this.removalTimer&&clearTimeout(this.removalTimer),this.removalTimer=setTimeout(()=>{this.remove(),this.removalTimer=null},this.duration))};class C{constructor(){M(this,p);this.toasts=[];const t=document.getElementById("sonner-toast-container");if(!t)throw new Error("No container found");this.container=t,this.maxToasts=parseInt(this.container.getAttribute("max-toasts")||"3"),this.isToastsExpanded=(this.container.getAttribute("expanded")||"false")==="true",this.expandedByDefault=this.isToastsExpanded,this.expandedByDefault||(this.container.addEventListener("mouseenter",v(this,p,P).bind(this)),this.container.addEventListener("mouseleave",v(this,p,x).bind(this)),this.container.addEventListener("mouseout",v(this,p,x).bind(this)),this.container.addEventListener("mousemove",v(this,p,x).bind(this)));let s=this.container.getAttribute("close-button")||"false";this.enableCloseButton=s=="true",this.container.getAttribute("theme")=="system"&&window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",a=>{this.refresh()})}get isDarkTheme(){return this.container.getAttribute("theme")=="system"?window.matchMedia("(prefers-color-scheme: dark)").matches:this.container.getAttribute("theme")=="dark"}get positions(){const t=this.container.getAttribute("position")||"bottom-right",[s,d]=t.split("-");return{xPosition:d,yPosition:s}}create(t){const s=this.container,d=s.getAttribute("duration");if(!t.duration&&d&&(t.duration=parseInt(d)),(t.closeButton==null||t.closeButton==null)&&(t.closeButton=this.enableCloseButton),t.theme==null||t.theme==null){let a=this.container.getAttribute("theme");(a=="light"||a=="dark")&&(t.theme=a)}(t.useRichColors==null||t.useRichColors==null)&&this.container.getAttribute("rich-colors")=="true"&&(t.useRichColors=!0);const i=new A({...t});s.appendChild(i.element),i.updateHeight(),this.toasts.push(i),this.refresh(),i.setMounted(),i.onUpdate=a=>{this.refresh()},i.onClose=a=>{this.toasts=this.toasts.filter(m=>m.id!=a),this.refresh()},i.onRemove=a=>{},this.expandedByDefault&&i.setExpanded()}expand(){for(const t of this.toasts)t.setExpanded();this.isToastsExpanded=!0}collapse(){for(const t of this.toasts)t.setCollapsed();this.isToastsExpanded=!1}refresh(){if(this.toasts.length===0)return;const{xPosition:t,yPosition:s}=this.positions,d=this.isDarkTheme;this.toasts.forEach((h,e)=>{let T=this.toasts.length-e;h.setFront(!1),h.setIndex(T),h.setXPosition(t),h.setYPosition(s),h.setTheme(d?"dark":"light"),T>this.maxToasts?h.hide():h.show()});let i=this.toasts[this.toasts.length-1],a=0,m=0;for(let h=this.toasts.length-1;h>=0;h--){const e=this.toasts[h];e.hidden||(a+=m,e.setCollapsedHeight(i.height),e.setSpaceAbove(a),m=e.height+10)}i.setFront(!0)}}p=new WeakSet,P=function(t){this.expand()},x=function(t){if(this.toasts.length===0)return;const s=[...Array.from(this.toasts).map(e=>e.element.getBoundingClientRect())],d=Math.min(...s.map(e=>e.left)),i=Math.min(...s.map(e=>e.top)),a=Math.max(...s.map(e=>e.right)),m=Math.max(...s.map(e=>e.bottom));t.clientX>=d&&t.clientX<=a&&t.clientY>=i&&t.clientY<=m||this.collapse()};let n;typeof document<"u"&&document.addEventListener("DOMContentLoaded",()=>{n=new C});function c(o,t={}){n==null||n.create({message:o,type:"plain",action:t.action,duration:t.duration})}c.message=function(o,t,s={}){n==null||n.create({type:"description",message:o,description:t,action:s.action,duration:s.duration})},c.info=function(o,t={}){n==null||n.create({type:"info",message:o,action:t.action,duration:t.duration})},c.success=function(o,t={}){n==null||n.create({type:"success",message:o,action:t.action,duration:t.duration})},c.warning=function(o,t={}){n==null||n.create({type:"warning",message:o,action:t.action,duration:t.duration})},c.error=function(o,t={}){n==null||n.create({type:"error",message:o,action:t.action,duration:t.duration})},c.promise=function(o,t,s={}){n==null||n.create({type:"promise",promiseOptions:{promise:o,loadingMessage:t.loading,successMessage:t.success,errorMessage:t.error},action:s.action,duration:s.duration})},c.custom=function(o,t,s={}){n==null||n.create({type:"custom",toastData:t,template_id:o,action:s.action,duration:s.duration})},typeof window<"u"&&(window.toast=c),r.Toaster=C,r.toast=c,Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})});

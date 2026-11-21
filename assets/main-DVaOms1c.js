var Yi=Object.defineProperty;var sa=e=>{throw TypeError(e)};var Fi=(e,t,r)=>t in e?Yi(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var Pe=(e,t,r)=>Fi(e,typeof t!="symbol"?t+"":t,r),hn=(e,t,r)=>t.has(e)||sa("Cannot "+r);var v=(e,t,r)=>(hn(e,t,"read from private field"),r?r.call(e):t.get(e)),I=(e,t,r)=>t.has(e)?sa("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),D=(e,t,r,n)=>(hn(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r),U=(e,t,r)=>(hn(e,t,"access private method"),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(a){if(a.ep)return;a.ep=!0;const i=r(a);fetch(a.href,i)}})();const Ca=!1;var Un=Array.isArray,Ui=Array.prototype.indexOf,Jr=Array.prototype.includes,fn=Array.from,Hi=Object.defineProperty,yt=Object.getOwnPropertyDescriptor,Na=Object.getOwnPropertyDescriptors,Bi=Object.prototype,qi=Array.prototype,Hn=Object.getPrototypeOf,oa=Object.isExtensible;function vr(e){return typeof e=="function"}const Wi=()=>{};function Ki(e){return e()}function $n(e){for(var t=0;t<e.length;t++)e[t]()}function Ra(){var e,t,r=new Promise((n,a)=>{e=n,t=a});return{promise:r,resolve:e,reject:t}}function Qi(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const r=[];for(const n of e)if(r.push(n),r.length===t)break;return r}const ue=2,rr=4,jr=8,Bn=1<<24,Ke=16,Fe=32,ht=64,Sn=128,Ve=512,de=1024,ce=2048,Ye=4096,_e=8192,De=16384,or=32768,En=1<<25,$t=65536,en=1<<17,Gi=1<<18,lr=1<<19,Ia=1<<20,et=1<<25,Rt=65536,tn=1<<21,Kt=1<<22,kt=1<<23,rt=Symbol("$state"),za=Symbol("legacy props"),Zi=Symbol(""),Wr=Symbol("attributes"),Tn=Symbol("class"),Mn=Symbol("style"),mr=Symbol("text"),Lr=new class extends Error{constructor(){super(...arguments);Pe(this,"name","StaleReactionError");Pe(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}};var Ea;const qn=!!((Ea=globalThis.document)!=null&&Ea.contentType)&&globalThis.document.contentType.includes("xml");function Oa(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Xi(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Ji(e,t,r){throw new Error("https://svelte.dev/e/each_key_duplicate")}function es(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function ts(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function rs(e){throw new Error("https://svelte.dev/e/effect_orphan")}function ns(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function as(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function is(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function ss(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function os(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function ls(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const ds=1,cs=2,Va=4,fs=8,us=16,vs=1,ps=2,Ya=4,hs=8,gs=16,ms=1,bs=2,oe=Symbol("uninitialized"),Fa="http://www.w3.org/1999/xhtml",xs="http://www.w3.org/2000/svg",ws="@attach";function _s(){console.warn("https://svelte.dev/e/derived_inert")}function ys(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function ks(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function Ua(e){return e===this.v}function $s(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Ha(e){return!$s(e,this.v)}let dr=!1,Ss=!1;function Es(){dr=!0}let Q=null;function nr(e){Q=e}function Vt(e,t=!1,r){Q={p:Q,i:!1,c:null,e:null,s:e,x:null,r:z,l:dr&&!t?{s:null,u:null,$:[]}:null}}function Yt(e){var t=Q,r=t.e;if(r!==null){t.e=null;for(var n of r)fi(n)}return t.i=!0,Q=t.p,{}}function Dr(){return!dr||Q!==null&&Q.l===null}let Bt=[];function Ts(){var e=Bt;Bt=[],$n(e)}function tt(e){if(Bt.length===0){var t=Bt;queueMicrotask(()=>{t===Bt&&Ts()})}Bt.push(e)}function Ba(e){var t=z;if(t===null)return Y.f|=kt,e;if((t.f&or)===0&&(t.f&rr)===0)throw e;_t(e,t)}function _t(e,t){if(!(t!==null&&(t.f&De)!==0)){for(;t!==null;){if((t.f&Sn)!==0){if((t.f&or)===0)throw e;try{t.b.error(e);return}catch(r){e=r}}t=t.parent}throw e}}const Ms=-7169;function te(e,t){e.f=e.f&Ms|t}function Wn(e){(e.f&Ve)!==0||e.deps===null?te(e,de):te(e,Ye)}function qa(e){if(e!==null)for(const t of e)(t.f&ue)===0||(t.f&Rt)===0||(t.f^=Rt,qa(t.deps))}function Wa(e,t,r){(e.f&ce)!==0?t.add(e):(e.f&Ye)!==0&&r.add(e),qa(e.deps),te(e,de)}let Hr=!1;function Ps(e){var t=Hr;try{return Hr=!1,[e(),Hr]}finally{Hr=t}}function As(e,t){if(t){const r=document.body;e.autofocus=!0,tt(()=>{document.activeElement===r&&e.focus()})}}function Cr(e){var t=Y,r=z;Ue(null),Ee(null);try{return e()}finally{Ue(t),Ee(r)}}function js(e){let t=0,r=St(0),n;return()=>{Zn()&&(w(r),vn(()=>(t===0&&(n=xe(()=>e(()=>kr(r)))),t+=1,()=>{tt(()=>{t-=1,t===0&&(n==null||n(),n=void 0,kr(r))})})))}}var Ls=$t|lr;function Ds(e,t,r,n){new Cs(e,t,r,n)}var Re,Fn,Ie,Pt,ye,ze,be,je,ct,At,xt,Qt,Er,Tr,ft,ln,X,Ns,Rs,Pn,Is,An,Kr,Qr,jn,Ln;class Cs{constructor(t,r,n,a){I(this,X);Pe(this,"parent");Pe(this,"is_pending",!1);Pe(this,"transform_error");I(this,Re);I(this,Fn,null);I(this,Ie);I(this,Pt);I(this,ye);I(this,ze,null);I(this,be,null);I(this,je,null);I(this,ct,null);I(this,At,0);I(this,xt,0);I(this,Qt,!1);I(this,Er,new Set);I(this,Tr,new Set);I(this,ft,null);I(this,ln,js(()=>(D(this,ft,St(v(this,At))),()=>{D(this,ft,null)})));var i;D(this,Re,t),D(this,Ie,r),D(this,Pt,s=>{var o=z;o.b=this,o.f|=Sn,n(s)}),this.parent=z.b,this.transform_error=a??((i=this.parent)==null?void 0:i.transform_error)??(s=>s),D(this,ye,Ir(()=>{U(this,X,An).call(this)},Ls))}defer_effect(t){Wa(t,v(this,Er),v(this,Tr))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!v(this,Ie).pending}update_pending_count(t,r){U(this,X,jn).call(this,t,r),D(this,At,v(this,At)+t),!(!v(this,ft)||v(this,Qt))&&(D(this,Qt,!0),tt(()=>{D(this,Qt,!1),v(this,ft)&&ir(v(this,ft),v(this,At))}))}get_effect_pending(){return v(this,ln).call(this),w(v(this,ft))}error(t){if(!v(this,Ie).onerror&&!v(this,Ie).failed)throw t;C!=null&&C.is_fork?(v(this,ze)&&C.skip_effect(v(this,ze)),v(this,be)&&C.skip_effect(v(this,be)),v(this,je)&&C.skip_effect(v(this,je)),C.oncommit(()=>{U(this,X,Ln).call(this,t)})):U(this,X,Ln).call(this,t)}}Re=new WeakMap,Fn=new WeakMap,Ie=new WeakMap,Pt=new WeakMap,ye=new WeakMap,ze=new WeakMap,be=new WeakMap,je=new WeakMap,ct=new WeakMap,At=new WeakMap,xt=new WeakMap,Qt=new WeakMap,Er=new WeakMap,Tr=new WeakMap,ft=new WeakMap,ln=new WeakMap,X=new WeakSet,Ns=function(){try{D(this,ze,Se(()=>v(this,Pt).call(this,v(this,Re))))}catch(t){this.error(t)}},Rs=function(t){const r=v(this,Ie).failed,{reset:n,invoke_onerror:a}=U(this,X,Pn).call(this,t);tt(a),r&&D(this,je,Se(()=>{r(v(this,Re),()=>t,()=>n)}))},Pn=function(t){var r=!1,n=!1;const a=()=>{if(r){ks();return}r=!0,n&&ls(),v(this,je)!==null&&Ct(v(this,je),()=>{D(this,je,null)}),U(this,X,Qr).call(this,()=>{U(this,X,An).call(this)})};return{reset:a,invoke_onerror:()=>{var s,o;try{n=!0,(o=(s=v(this,Ie)).onerror)==null||o.call(s,t,a),n=!1}catch(l){_t(l,v(this,ye)&&v(this,ye).parent)}}}},Is=function(){const t=v(this,Ie).pending;t&&(this.is_pending=!0,D(this,be,Se(()=>t(v(this,Re)))),tt(()=>{var r=D(this,ct,document.createDocumentFragment()),n=pt();r.append(n),D(this,ze,U(this,X,Qr).call(this,()=>Se(()=>v(this,Pt).call(this,n)))),v(this,xt)===0&&(v(this,Re).before(r),D(this,ct,null),Ct(v(this,be),()=>{D(this,be,null)}),U(this,X,Kr).call(this,C))}))},An=function(){try{if(this.is_pending=this.has_pending_snippet(),D(this,xt,0),D(this,At,0),D(this,ze,Se(()=>{v(this,Pt).call(this,v(this,Re))})),v(this,xt)>0){var t=D(this,ct,document.createDocumentFragment());ta(v(this,ze),t);const r=v(this,Ie).pending;D(this,be,Se(()=>r(v(this,Re))))}else U(this,X,Kr).call(this,C)}catch(r){this.error(r)}},Kr=function(t){this.is_pending=!1,t.transfer_effects(v(this,Er),v(this,Tr))},Qr=function(t){var r=z,n=Y,a=Q;Ee(v(this,ye)),Ue(v(this,ye)),nr(v(this,ye).ctx);try{return It.ensure(),t()}catch(i){return Ba(i),null}finally{Ee(r),Ue(n),nr(a)}},jn=function(t,r){var n;if(!this.has_pending_snippet()){this.parent&&U(n=this.parent,X,jn).call(n,t,r);return}D(this,xt,v(this,xt)+t),v(this,xt)===0&&(U(this,X,Kr).call(this,r),v(this,be)&&Ct(v(this,be),()=>{D(this,be,null)}),v(this,ct)&&(v(this,Re).before(v(this,ct)),D(this,ct,null)))},Ln=function(t){v(this,ze)&&(he(v(this,ze)),D(this,ze,null)),v(this,be)&&(he(v(this,be)),D(this,be,null)),v(this,je)&&(he(v(this,je)),D(this,je,null));let r=v(this,Ie).failed;const n=a=>{const{reset:i,invoke_onerror:s}=U(this,X,Pn).call(this,a);s(),r&&D(this,je,U(this,X,Qr).call(this,()=>{try{return Se(()=>{var o=z;o.b=this,o.f|=Sn,r(v(this,Re),()=>a,()=>i)})}catch(o){return _t(o,v(this,ye).parent),null}}))};tt(()=>{var a;try{a=this.transform_error(t)}catch(i){_t(i,v(this,ye)&&v(this,ye).parent);return}a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(n,i=>_t(i,v(this,ye)&&v(this,ye).parent)):n(a)})};function Ka(e,t,r,n){const a=Dr()?ar:Nr;var i=e.filter(h=>!h.settled),s=t.map(a);if(r.length===0&&i.length===0){n(s);return}var o=z,l=zs(),d=i.length===1?i[0].promise:i.length>1?Promise.all(i.map(h=>h.promise)):null;function u(h){if((o.f&De)===0){l();try{n([...s,...h])}catch(m){_t(m,o)}rn()}}var p=Qa();if(r.length===0){d.then(()=>u([])).finally(p);return}function c(){Promise.all(r.map(h=>Os(h))).then(u).catch(h=>_t(h,o)).finally(p)}d?d.then(()=>{l(),c(),rn()}):c()}function zs(){var e=z,t=Y,r=Q,n=C;return function(i=!0){Ee(e),Ue(t),nr(r),i&&(e.f&De)===0&&(n==null||n.activate(),n==null||n.apply())}}function rn(e=!0){Ee(null),Ue(null),nr(null),e&&(C==null||C.deactivate())}function Qa(){var e=z,t=e.b,r=C,n=!!(t!=null&&t.is_rendered());return t==null||t.update_pending_count(1,r),r.increment(n,e),()=>{t==null||t.update_pending_count(-1,r),r.decrement(n,e)}}function ar(e){var t=ue|ce;return z!==null&&(z.f|=lr),{ctx:Q,deps:null,effects:null,equals:Ua,f:t,fn:e,reactions:null,rv:0,v:oe,wv:0,parent:z,ac:null}}const br=Symbol("obsolete");function Os(e,t,r){let n=z;n===null&&Xi();var a=void 0,i=St(oe),s=!Y,o=new Set;return Js(()=>{var h,m;var l=z,d=Ra();a=d.promise;try{Promise.resolve(e()).then(d.resolve,x=>{x!==Lr&&d.reject(x)}).finally(rn)}catch(x){d.reject(x),rn()}var u=C;if(s){if((l.f&or)!==0)var p=Qa();if((h=n.b)!=null&&h.is_rendered())(m=u.async_deriveds.get(l))==null||m.reject(br);else for(const x of o.values())x.reject(br);o.add(d),u.async_deriveds.set(l,d)}const c=(x,b=void 0)=>{p==null||p(),o.delete(d),b!==br&&(u.activate(),b?(i.f|=kt,ir(i,b)):((i.f&kt)!==0&&(i.f^=kt),ir(i,x)),u.deactivate())};d.promise.then(c,x=>c(null,x||"unknown"))}),un(()=>{for(const l of o)l.reject(br)}),new Promise(l=>{function d(u){function p(){u===a?l(i):d(a)}u.then(p,p)}d(a)})}function Vs(e){const t=ar(e);return mi(t),t}function Nr(e){const t=ar(e);return t.equals=Ha,t}function Ys(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)he(t[r])}}function Kn(e){var t,r=z,n=e.parent;if(!gt&&n!==null&&e.v!==oe&&(n.f&(De|_e))!==0)return _s(),e.v;Ee(n);try{e.f&=~Rt,Ys(e),t=_i(e)}finally{Ee(r)}return t}function Ga(e){var t=Kn(e);if(!e.equals(t)&&(e.wv=xi(),(!(C!=null&&C.is_fork)||e.deps===null)&&(C!==null?(C.capture(e,t,!0),yr==null||yr.capture(e,t,!0)):e.v=t,e.deps===null))){te(e,de);return}gt||(ve!==null?(Zn()||C!=null&&C.is_fork)&&ve.set(e,t):Wn(e))}function Fs(e){var t;if(e.effects!==null)for(const r of e.effects)(r.teardown||r.ac)&&((t=r.teardown)==null||t.call(r),r.ac!==null&&Cr(()=>{r.ac.abort(Lr),r.ac=null}),r.fn!==null&&(r.teardown=Wi),$r(r,0),ea(r))}function Za(e){if(e.effects!==null)for(const t of e.effects)t.teardown&&t.fn!==null&&zt(t)}let gn=null,Ut=null,C=null,yr=null,ve=null,Dn=null,mn=!1,qt=null,Gr=null;var la=0;let Us=1;var Gt,wt,jt,Zt,Xt,Jt,ut,er,ke,Mr,vt,Be,Xe,tr,Lt,K,Cn,xr,Nn,Xa,Ja,Ht,Hs,wr;const dn=class dn{constructor(){I(this,K);Pe(this,"id",Us++);I(this,Gt,!1);Pe(this,"linked",!0);I(this,wt,null);I(this,jt,null);Pe(this,"async_deriveds",new Map);Pe(this,"current",new Map);Pe(this,"previous",new Map);I(this,Zt,new Set);I(this,Xt,new Set);I(this,Jt,0);I(this,ut,new Map);I(this,er,null);I(this,ke,[]);I(this,Mr,[]);I(this,vt,new Set);I(this,Be,new Set);I(this,Xe,new Map);I(this,tr,new Set);Pe(this,"is_fork",!1);I(this,Lt,!1);Ut===null?gn=Ut=this:(D(Ut,jt,this),D(this,wt,Ut)),Ut=this}skip_effect(t){v(this,Xe).has(t)||v(this,Xe).set(t,{d:[],m:[]}),v(this,tr).delete(t)}unskip_effect(t,r=n=>this.schedule(n)){var n=v(this,Xe).get(t);if(n){v(this,Xe).delete(t);for(var a of n.d)te(a,ce),r(a);for(a of n.m)te(a,Ye),r(a)}v(this,tr).add(t)}capture(t,r,n=!1){t.v!==oe&&!this.previous.has(t)&&this.previous.set(t,t.v),(t.f&kt)===0&&(this.current.set(t,[r,n]),ve==null||ve.set(t,r)),this.is_fork||(t.v=r)}activate(){C=this}deactivate(){C=null,ve=null}flush(){try{mn=!0,C=this,U(this,K,xr).call(this)}finally{la=0,Dn=null,qt=null,Gr=null,mn=!1,C=null,ve=null,nt.clear()}}discard(){var t;for(const r of v(this,Xt))r(this);v(this,Xt).clear();for(const r of this.async_deriveds.values())r.reject(br);U(this,K,wr).call(this),(t=v(this,er))==null||t.resolve()}register_created_effect(t){v(this,Mr).push(t)}increment(t,r){if(D(this,Jt,v(this,Jt)+1),t){let n=v(this,ut).get(r)??0;v(this,ut).set(r,n+1)}}decrement(t,r){if(D(this,Jt,v(this,Jt)-1),t){let n=v(this,ut).get(r)??0;n===1?v(this,ut).delete(r):v(this,ut).set(r,n-1)}v(this,Lt)||(D(this,Lt,!0),tt(()=>{D(this,Lt,!1),this.linked&&this.flush()}))}transfer_effects(t,r){for(const n of t)v(this,vt).add(n);for(const n of r)v(this,Be).add(n);t.clear(),r.clear()}oncommit(t){v(this,Zt).add(t)}ondiscard(t){v(this,Xt).add(t)}settled(){return(v(this,er)??D(this,er,Ra())).promise}static ensure(){if(C===null){const t=C=new dn;mn||tt(()=>{v(t,Gt)||t.flush()})}return C}apply(){{ve=null;return}}schedule(t){var a;if(Dn=t,(a=t.b)!=null&&a.is_pending&&(t.f&(rr|jr|Bn))!==0&&(t.f&or)===0){t.b.defer_effect(t);return}for(var r=t;r.parent!==null;){r=r.parent;var n=r.f;if(qt!==null&&r===z&&(Y===null||(Y.f&ue)===0))return;if((n&(ht|Fe))!==0){if((n&de)===0)return;r.f^=de}}v(this,ke).push(r)}};Gt=new WeakMap,wt=new WeakMap,jt=new WeakMap,Zt=new WeakMap,Xt=new WeakMap,Jt=new WeakMap,ut=new WeakMap,er=new WeakMap,ke=new WeakMap,Mr=new WeakMap,vt=new WeakMap,Be=new WeakMap,Xe=new WeakMap,tr=new WeakMap,Lt=new WeakMap,K=new WeakSet,Cn=function(){if(this.is_fork)return!0;for(const n of v(this,ut).keys()){for(var t=n,r=!1;t.parent!==null;){if(v(this,Xe).has(t)){r=!0;break}t=t.parent}if(!r)return!0}return!1},xr=function(){var l,d,u,p;D(this,Gt,!0),la++>1e3&&(U(this,K,wr).call(this),Bs());for(const c of v(this,vt))v(this,Be).delete(c),te(c,ce),this.schedule(c);for(const c of v(this,Be))te(c,Ye),this.schedule(c);const t=v(this,ke);D(this,ke,[]),this.apply();var r=qt=[],n=[],a=Gr=[];for(const c of t)try{U(this,K,Nn).call(this,c,r,n)}catch(h){throw ri(c),U(this,K,Cn).call(this)||this.discard(),h}if(C=null,a.length>0){var i=dn.ensure();for(const c of a)i.schedule(c)}if(qt=null,Gr=null,U(this,K,Cn).call(this)){U(this,K,Ht).call(this,n),U(this,K,Ht).call(this,r);for(const[c,h]of v(this,Xe))ti(c,h);a.length>0&&U(l=C,K,xr).call(l);return}const s=U(this,K,Xa).call(this);if(s){U(this,K,Ht).call(this,n),U(this,K,Ht).call(this,r),U(d=s,K,Ja).call(d,this);return}v(this,vt).clear(),v(this,Be).clear();for(const c of v(this,Zt))c(this);v(this,Zt).clear(),yr=this,da(n),da(r),yr=null,(u=v(this,er))==null||u.resolve();var o=C;if(v(this,Jt)===0&&(v(this,ke).length===0||o!==null)&&U(this,K,wr).call(this),v(this,ke).length>0)if(o!==null){const c=o;v(c,ke).push(...v(this,ke).filter(h=>!v(c,ke).includes(h)))}else o=this;o!==null&&(nt.clear(),U(p=o,K,xr).call(p))},Nn=function(t,r,n){t.f^=de;for(var a=t.first;a!==null;){var i=a.f,s=(i&(Fe|ht))!==0,o=s&&(i&de)!==0,l=o||(i&_e)!==0||v(this,Xe).has(a);if(!l&&a.fn!==null){s?a.f^=de:(i&rr)!==0?r.push(a):cr(a)&&((i&Ke)!==0&&v(this,Be).add(a),zt(a));var d=a.first;if(d!==null){a=d;continue}}for(;a!==null;){var u=a.next;if(u!==null){a=u;break}a=a.parent}}},Xa=function(){for(var t=v(this,wt);t!==null;){if(!t.is_fork){for(const[r,[,n]]of this.current)if(t.current.has(r)&&!n)return t}t=v(t,wt)}return null},Ja=function(t){var n;for(const[a,i]of t.current)!this.previous.has(a)&&t.previous.has(a)&&this.previous.set(a,t.previous.get(a)),this.current.set(a,i);for(const[a,i]of t.async_deriveds){const s=this.async_deriveds.get(a);s&&i.promise.then(s.resolve).catch(s.reject)}t.async_deriveds.clear(),this.transfer_effects(v(t,vt),v(t,Be));const r=a=>{var i=a.reactions;if(i!==null&&!((a.f&ue)!==0&&(a.f&(ce|Ye))===0))for(const l of i){var s=l.f;if((s&ue)!==0)r(l);else{var o=l;s&(Kt|Ke)&&!this.async_deriveds.has(o)&&(v(this,Be).delete(o),te(o,ce),this.schedule(o))}}};for(const a of this.current.keys())r(a);this.oncommit(()=>t.discard()),U(n=t,K,wr).call(n),C=this,U(this,K,xr).call(this)},Ht=function(t){for(var r=0;r<t.length;r+=1)Wa(t[r],v(this,vt),v(this,Be))},Hs=function(){var p;for(let c=gn;c!==null;c=v(c,jt)){var t=c.id<this.id,r=[];for(const[h,[m,x]]of this.current){if(c.current.has(h)){var n=c.current.get(h)[0];if(t&&m!==n)c.current.set(h,[m,x]);else continue}r.push(h)}if(t)for(const[h,m]of this.async_deriveds){const x=c.async_deriveds.get(h);x&&m.promise.then(x.resolve).catch(x.reject)}var a=[...c.current.keys()].filter(h=>!c.current.get(h)[1]);if(!(!v(c,Gt)||a.length===0)){var i=a.filter(h=>!this.current.has(h));if(i.length===0)t&&c.discard();else if(r.length>0){if(t)for(const h of v(this,tr))c.unskip_effect(h,m=>{var x;(m.f&(Ke|Kt))!==0?c.schedule(m):U(x=c,K,Ht).call(x,[m])});c.activate();var s=new Set,o=new Map;for(var l of r)ei(l,i,s,o);o=new Map;var d=[...c.current].filter(([h,m])=>{const x=this.current.get(h);return x?x[0]!==m[0]||x[1]!==m[1]:!0}).map(([h])=>h);if(d.length>0)for(const h of v(this,Mr))(h.f&(De|_e|en))===0&&Qn(h,d,o)&&((h.f&(Kt|Ke))!==0?(te(h,ce),c.schedule(h)):v(c,vt).add(h));if(v(c,ke).length>0&&!v(c,Lt)){c.apply();for(var u of v(c,ke))U(p=c,K,Nn).call(p,u,[],[]);D(c,ke,[])}c.deactivate()}}}},wr=function(){if(this.linked){var t=v(this,wt),r=v(this,jt);t===null?gn=r:D(t,jt,r),r===null?Ut=t:D(r,wt,t),this.linked=!1}};let It=dn;function Bs(){try{ns()}catch(e){_t(e,Dn)}}let He=null;function da(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var n=e[r++];if((n.f&(De|_e))===0&&cr(n)&&(He=new Set,zt(n),n.deps===null&&n.first===null&&n.nodes===null&&n.teardown===null&&n.ac===null&&pi(n),(He==null?void 0:He.size)>0)){nt.clear();for(const a of He){if((a.f&(De|_e))!==0)continue;const i=[a];let s=a.parent;for(;s!==null;)He.has(s)&&(He.delete(s),i.push(s)),s=s.parent;for(let o=i.length-1;o>=0;o--){const l=i[o];(l.f&(De|_e))===0&&zt(l)}}He.clear()}}He=null}}function ei(e,t,r,n){if(!r.has(e)&&(r.add(e),e.reactions!==null))for(const a of e.reactions){const i=a.f;(i&ue)!==0?ei(a,t,r,n):(i&(Kt|Ke))!==0&&(i&ce)===0&&Qn(a,t,n)&&(te(a,ce),Gn(a))}}function Qn(e,t,r){const n=r.get(e);if(n!==void 0)return n;if(e.deps!==null)for(const a of e.deps){if(Jr.call(t,a))return!0;if((a.f&ue)!==0&&Qn(a,t,r))return r.set(a,!0),!0}return r.set(e,!1),!1}function Gn(e){C.schedule(e)}function ti(e,t){if(!((e.f&Fe)!==0&&(e.f&de)!==0)){(e.f&ce)!==0?t.d.push(e):(e.f&Ye)!==0&&t.m.push(e),te(e,de);for(var r=e.first;r!==null;)ti(r,t),r=r.next}}function ri(e){te(e,de);for(var t=e.first;t!==null;)ri(t),t=t.next}let nn=new Set;const nt=new Map;let ni=!1;function St(e,t){var r={f:0,v:e,reactions:null,equals:Ua,rv:0,wv:0};return r}function mt(e,t){const r=St(e);return mi(r),r}function Z(e,t=!1,r=!0){var a;const n=St(e);return t||(n.equals=Ha),dr&&r&&Q!==null&&Q.l!==null&&((a=Q.l).s??(a.s=[])).push(n),n}function ca(e,t){return N(e,xe(()=>w(e))),t}function N(e,t,r=!1){Y!==null&&(!Qe||(Y.f&en)!==0)&&Dr()&&(Y.f&(ue|Ke|Kt|en))!==0&&(at===null||!at.has(e))&&os();let n=r?Wt(t):t;return ir(e,n,Gr)}function ir(e,t,r=null){if(!e.equals(t)){gt?nt.set(e,t):nt.has(e)||nt.set(e,e.v);var n=It.ensure();if(n.capture(e,t),(e.f&ue)!==0){const a=e;(e.f&ce)!==0&&Kn(a),ve===null&&Wn(a)}e.wv=xi(),ai(e,ce,r),Dr()&&z!==null&&(z.f&de)!==0&&(z.f&(Fe|ht))===0&&(Ne===null?ro([e]):Ne.push(e)),!n.is_fork&&nn.size>0&&!ni&&qs()}return t}function qs(){ni=!1;for(const e of nn){(e.f&de)!==0&&te(e,Ye);let t;try{t=cr(e)}catch{t=!0}t&&zt(e)}nn.clear()}function fa(e,t=1){var r=w(e),n=t===1?r++:r--;return N(e,r),n}function kr(e){N(e,e.v+1)}function ai(e,t,r){var n=e.reactions;if(n!==null)for(var a=Dr(),i=n.length,s=0;s<i;s++){var o=n[s],l=o.f;if(!(!a&&o===z)){var d=(l&ce)===0;if(d&&te(o,t),(l&en)!==0)nn.add(o);else if((l&ue)!==0){var u=o;ve==null||ve.delete(u),(l&Rt)===0&&(l&Ve&&(z===null||(z.f&tn)===0)&&(o.f|=Rt),ai(u,Ye,r))}else if(d){var p=o;(l&Ke)!==0&&He!==null&&He.add(p),r!==null?r.push(p):Gn(p)}}}}function Wt(e){if(typeof e!="object"||e===null||rt in e)return e;const t=Hn(e);if(t!==Bi&&t!==qi)return e;var r=new Map,n=Un(e),a=mt(0),i=Nt,s=o=>{if(Nt===i)return o();var l=Y,d=Nt;Ue(null),ha(i);var u=o();return Ue(l),ha(d),u};return n&&r.set("length",mt(e.length)),new Proxy(e,{defineProperty(o,l,d){(!("value"in d)||d.configurable===!1||d.enumerable===!1||d.writable===!1)&&is();var u=r.get(l);return u===void 0?s(()=>{var p=mt(d.value);return r.set(l,p),p}):N(u,d.value,!0),!0},deleteProperty(o,l){var d=r.get(l);if(d===void 0){if(l in o){const u=s(()=>mt(oe));r.set(l,u),kr(a)}}else N(d,oe),kr(a);return!0},get(o,l,d){var h;if(l===rt)return e;var u=r.get(l),p=l in o;if(u===void 0&&(!p||(h=yt(o,l))!=null&&h.writable)&&(u=s(()=>{var m=Wt(p?o[l]:oe),x=mt(m);return x}),r.set(l,u)),u!==void 0){var c=w(u);return c===oe?void 0:c}return Reflect.get(o,l,d)},getOwnPropertyDescriptor(o,l){var d=Reflect.getOwnPropertyDescriptor(o,l);if(d&&"value"in d){var u=r.get(l);u&&(d.value=w(u))}else if(d===void 0){var p=r.get(l),c=p==null?void 0:p.v;if(p!==void 0&&c!==oe)return{enumerable:!0,configurable:!0,value:c,writable:!0}}return d},has(o,l){var c;if(l===rt)return!0;var d=r.get(l),u=d!==void 0&&d.v!==oe||Reflect.has(o,l);if(d!==void 0||z!==null&&(!u||(c=yt(o,l))!=null&&c.writable)){d===void 0&&(d=s(()=>{var h=u?Wt(o[l]):oe,m=mt(h);return m}),r.set(l,d));var p=w(d);if(p===oe)return!1}return u},set(o,l,d,u){var M;var p=r.get(l),c=l in o;if(n&&l==="length")for(var h=d;h<p.v;h+=1){var m=r.get(h+"");m!==void 0?N(m,oe):h in o&&(m=s(()=>mt(oe)),r.set(h+"",m))}if(p===void 0)(!c||(M=yt(o,l))!=null&&M.writable)&&(p=s(()=>mt(void 0)),N(p,Wt(d)),r.set(l,p));else{c=p.v!==oe;var x=s(()=>Wt(d));N(p,x)}var b=Reflect.getOwnPropertyDescriptor(o,l);if(b!=null&&b.set&&b.set.call(u,d),!c){if(n&&typeof l=="string"){var k=r.get("length"),E=Number(l);Number.isInteger(E)&&E>=k.v&&N(k,E+1)}kr(a)}return!0},ownKeys(o){w(a);var l=Reflect.ownKeys(o).filter(p=>{var c=r.get(p);return c===void 0||c.v!==oe});for(var[d,u]of r)u.v!==oe&&!(d in o)&&l.push(d);return l},setPrototypeOf(){ss()}})}function ua(e){try{if(e!==null&&typeof e=="object"&&rt in e)return e[rt]}catch{}return e}function Ws(e,t){return Object.is(ua(e),ua(t))}var va,ii,si,oi;function Ks(){if(va===void 0){va=window,ii=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;si=yt(t,"firstChild").get,oi=yt(t,"nextSibling").get,oa(e)&&(e[Tn]=void 0,e[Wr]=null,e[Mn]=void 0,e.__e=void 0),oa(r)&&(r[mr]=void 0)}}function pt(e=""){return document.createTextNode(e)}function sr(e){return si.call(e)}function Rr(e){return oi.call(e)}function f(e,t){return sr(e)}function B(e,t=!1){{var r=sr(e);return r instanceof Comment&&r.data===""?Rr(r):r}}function g(e,t=1,r=!1){let n=e;for(;t--;)n=Rr(n);return n}function Qs(e){e.textContent=""}function li(){return!1}function di(e,t,r){return t==null||t===Fa?r?document.createElement(e,{is:r}):document.createElement(e):r?document.createElementNS(t,e,{is:r}):document.createElementNS(t,e)}function ci(e){z===null&&(Y===null&&rs(),ts()),gt&&es()}function Gs(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function Ge(e,t){var r=z;r!==null&&(r.f&_e)!==0&&(e|=_e);var n={ctx:Q,deps:null,nodes:null,f:e|ce|Ve,first:null,fn:t,last:null,next:null,parent:r,b:r&&r.b,prev:null,teardown:null,wv:0,ac:null};C==null||C.register_created_effect(n);var a=n;if((e&rr)!==0)qt!==null?qt.push(n):It.ensure().schedule(n);else if(t!==null){try{zt(n)}catch(s){throw he(n),s}a.deps===null&&a.teardown===null&&a.nodes===null&&a.first===a.last&&(a.f&lr)===0&&(a=a.first,(e&Ke)!==0&&(e&$t)!==0&&a!==null&&(a.f|=$t))}if(a!==null&&(a.parent=r,r!==null&&Gs(a,r),Y!==null&&(Y.f&ue)!==0&&(e&ht)===0)){var i=Y;(i.effects??(i.effects=[])).push(a)}return n}function Zn(){return Y!==null&&!Qe}function un(e){const t=Ge(jr,null);return te(t,de),t.teardown=e,t}function Rn(e){ci();var t=z.f,r=!Y&&(t&Fe)!==0&&Q!==null&&!Q.i;if(r){var n=Q;(n.e??(n.e=[])).push(e)}else return fi(e)}function fi(e){return Ge(rr|Ia,e)}function Zs(e){return ci(),Ge(jr|Ia,e)}function Xs(e){It.ensure();const t=Ge(ht|lr,e);return(r={})=>new Promise(n=>{r.outro?Ct(t,()=>{he(t),n(void 0)}):(he(t),n(void 0))})}function Xn(e){return Ge(rr,e)}function Oe(e,t){var r=Q,n={effect:null,ran:!1,deps:e};r.l.$.push(n),n.effect=vn(()=>{if(e(),!n.ran){n.ran=!0;var a=z;try{Ee(a.parent),xe(t)}finally{Ee(a)}}})}function Jn(){var e=Q;vn(()=>{for(var t of e.l.$){t.deps();var r=t.effect;(r.f&de)!==0&&r.deps!==null&&te(r,Ye),cr(r)&&zt(r),t.ran=!1}})}function Js(e){return Ge(Kt|lr,e)}function vn(e,t=0){return Ge(jr|t,e)}function le(e,t=[],r=[],n=[]){Ka(n,t,r,a=>{Ge(jr,()=>{e(...a.map(w))})})}function Ir(e,t=0){var r=Ge(Ke|t,e);return r}function ui(e,t=0){var r=Ge(Bn|t,e);return r}function Se(e){return Ge(Fe|lr,e)}function vi(e){var t=e.teardown;if(t!==null){const r=gt,n=Y;pa(!0),Ue(null);try{t.call(null)}finally{pa(r),Ue(n)}}}function ea(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){const a=r.ac;a!==null&&Cr(()=>{a.abort(Lr)});var n=r.next;(r.f&ht)!==0?r.parent=null:he(r,t),r=n}}function eo(e){for(var t=e.first;t!==null;){var r=t.next;(t.f&Fe)===0&&he(t),t=r}}function he(e,t=!0){var r=!1;(t||(e.f&Gi)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(to(e.nodes.start,e.nodes.end),r=!0),e.f|=En,ea(e,t&&!r),$r(e,0);var n=e.nodes&&e.nodes.t;if(n!==null)for(const i of n)i.stop();vi(e),e.f^=En,e.f|=De;var a=e.parent;a!==null&&a.first!==null&&pi(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function to(e,t){for(;e!==null;){var r=e===t?null:Rr(e);e.remove(),e=r}}function pi(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function Ct(e,t,r=!0){var n=[];hi(e,n,!0);var a=()=>{r&&he(e),t&&t()},i=n.length;if(i>0){var s=()=>--i||a();for(var o of n)o.out(s)}else a()}function hi(e,t,r){if((e.f&_e)===0){e.f^=_e;var n=e.nodes&&e.nodes.t;if(n!==null)for(const o of n)(o.is_global||r)&&t.push(o);for(var a=e.first;a!==null;){var i=a.next;if((a.f&ht)===0){var s=(a.f&$t)!==0||(a.f&Fe)!==0&&(e.f&Ke)!==0;hi(a,t,s?r:!1)}a=i}}}function an(e){gi(e,!0)}function gi(e,t){if((e.f&_e)!==0){e.f^=_e,(e.f&de)===0&&(te(e,ce),It.ensure().schedule(e));for(var r=e.first;r!==null;){var n=r.next,a=(r.f&$t)!==0||(r.f&Fe)!==0;gi(r,a?t:!1),r=n}var i=e.nodes&&e.nodes.t;if(i!==null)for(const s of i)(s.is_global||t)&&s.in()}}function ta(e,t){if(e.nodes)for(var r=e.nodes.start,n=e.nodes.end;r!==null;){var a=r===n?null:Rr(r);t.append(r),r=a}}let Zr=!1,gt=!1;function pa(e){gt=e}let Y=null,Qe=!1;function Ue(e){Y=e}let z=null;function Ee(e){z=e}let at=null;function mi(e){Y!==null&&(at??(at=new Set)).add(e)}let $e=null,Ae=0,Ne=null;function ro(e){Ne=e}let bi=1,Tt=0,Nt=Tt;function ha(e){Nt=e}function xi(){return++bi}function cr(e){var t=e.f;if((t&ce)!==0)return!0;if(t&ue&&(e.f&=~Rt),(t&Ye)!==0){for(var r=e.deps,n=r.length,a=0;a<n;a++){var i=r[a];if(cr(i)&&Ga(i),i.wv>e.wv)return!0}(t&Ve)!==0&&ve===null&&te(e,de)}return!1}function wi(e,t,r=!0){var n=e.reactions;if(n!==null&&!(at!==null&&at.has(e)))for(var a=0;a<n.length;a++){var i=n[a];(i.f&ue)!==0?wi(i,t,!1):t===i&&(r?te(i,ce):(i.f&de)!==0&&te(i,Ye),Gn(i))}}function _i(e){var x;var t=$e,r=Ae,n=Ne,a=Y,i=at,s=Q,o=Qe,l=Nt,d=e.f;$e=null,Ae=0,Ne=null,Y=(d&(Fe|ht))===0?e:null,at=null,nr(e.ctx),Qe=!1,Nt=++Tt,e.ac!==null&&(Cr(()=>{e.ac.abort(Lr)}),e.ac=null);try{e.f|=tn;var u=e.fn,p=u();e.f|=or;var c=e.deps,h=C==null?void 0:C.is_fork;if($e!==null){var m;if(h||$r(e,Ae),c!==null&&Ae>0)for(c.length=Ae+$e.length,m=0;m<$e.length;m++)c[Ae+m]=$e[m];else e.deps=c=$e;if(Zn()&&(e.f&Ve)!==0)for(m=Ae;m<c.length;m++)((x=c[m]).reactions??(x.reactions=[])).push(e)}else!h&&c!==null&&Ae<c.length&&($r(e,Ae),c.length=Ae);if(Dr()&&Ne!==null&&!Qe&&c!==null&&(e.f&(ue|Ye|ce))===0)for(m=0;m<Ne.length;m++)wi(Ne[m],e);if(a!==null&&a!==e){if(Tt++,a.deps!==null)for(let b=0;b<r;b+=1)a.deps[b].rv=Tt;if(t!==null)for(const b of t)b.rv=Tt;Ne!==null&&(n===null?n=Ne:n.push(...Ne))}return(e.f&kt)!==0&&(e.f^=kt),p}catch(b){return Ba(b)}finally{e.f^=tn,$e=t,Ae=r,Ne=n,Y=a,at=i,nr(s),Qe=o,Nt=l}}function no(e,t){let r=t.reactions;if(r!==null){var n=Ui.call(r,e);if(n!==-1){var a=r.length-1;a===0?r=t.reactions=null:(r[n]=r[a],r.pop())}}if(r===null&&(t.f&ue)!==0&&($e===null||!Jr.call($e,t))){var i=t;(i.f&Ve)!==0&&(i.f^=Ve,i.f&=~Rt),i.v!==oe&&Wn(i),i.ac!==null&&Cr(()=>{i.ac.abort(Lr),i.ac=null,te(i,ce)}),Fs(i),$r(i,0)}}function $r(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)no(e,r[n])}function zt(e){var t=e.f;if((t&De)===0){te(e,de);var r=z,n=Zr;z=e,Zr=(t&(Fe|ht))===0;try{(t&(Ke|Bn))!==0?eo(e):ea(e),vi(e);var a=_i(e);e.teardown=typeof a=="function"?a:null,e.wv=bi;var i;Ca&&Ss&&(e.f&ce)!==0&&e.deps}finally{Zr=n,z=r}}}function w(e){var t=e.f,r=(t&ue)!==0;if(Y!==null&&!Qe){var n=z!==null&&(z.f&De)!==0;if(!n&&(at===null||!at.has(e))){var a=Y.deps;if((Y.f&tn)!==0)e.rv<Tt&&(e.rv=Tt,$e===null&&a!==null&&a[Ae]===e?Ae++:$e===null?$e=[e]:$e.push(e));else{Y.deps??(Y.deps=[]),Jr.call(Y.deps,e)||Y.deps.push(e);var i=e.reactions;i===null?e.reactions=[Y]:Jr.call(i,Y)||i.push(Y)}}}if(gt&&nt.has(e))return nt.get(e);if(r){var s=e;if(gt){var o=s.v;return((s.f&de)===0&&s.reactions!==null||ki(s))&&(o=Kn(s)),nt.set(s,o),o}var l=(s.f&Ve)===0&&!Qe&&Y!==null&&(Zr||(Y.f&Ve)!==0),d=(s.f&or)===0;cr(s)&&(l&&(s.f|=Ve),Ga(s)),l&&!d&&(Za(s),yi(s))}if(ve!=null&&ve.has(e))return ve.get(e);if((e.f&kt)!==0)throw e.v;return e.v}function yi(e){if(e.f|=Ve,e.deps!==null)for(const t of e.deps)(t.reactions??(t.reactions=[])).push(e),(t.f&ue)!==0&&(t.f&Ve)===0&&(Za(t),yi(t))}function ki(e){if(e.v===oe)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(nt.has(t)||(t.f&ue)!==0&&ki(t))return!0;return!1}function xe(e){var t=Qe;try{return Qe=!0,e()}finally{Qe=t}}function We(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(rt in e)In(e);else if(!Array.isArray(e))for(let t in e){const r=e[t];typeof r=="object"&&r&&rt in r&&In(r)}}}function In(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let n in e)try{In(e[n],t)}catch{}const r=Hn(e);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const n=Na(r);for(let a in n){const i=n[a].get;if(i)try{i.call(e)}catch{}}}}}function ao(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const io=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function so(e){return io.includes(e)}const oo={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function lo(e){return e=e.toLowerCase(),oo[e]??e}const co=["touchstart","touchmove"];function fo(e){return co.includes(e)}const Mt=Symbol("events"),$i=new Set,zn=new Set;function Si(e,t,r,n={}){function a(i){if(n.capture||On.call(t,i),!i.cancelBubble)return Cr(()=>r==null?void 0:r.call(this,i))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?tt(()=>{t.addEventListener(e,a,n)}):t.addEventListener(e,a,n),a}function we(e,t,r,n,a){var i={capture:n,passive:a},s=Si(e,t,r,i);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&un(()=>{t.removeEventListener(e,s,i)})}function uo(e,t,r){(t[Mt]??(t[Mt]={}))[e]=r}function vo(e){for(var t=0;t<e.length;t++)$i.add(e[t]);for(var r of zn)r(e)}let bn=null,xn=!1;function On(e){var x,b;var t=this,r=t.ownerDocument,n=e.type,a=((x=e.composedPath)==null?void 0:x.call(e))||[],i=a[0]||e.target;bn=e,xn||(xn=!0,setTimeout(()=>{xn=!1,bn=null}));var s=0,o=bn===e&&e[Mt];if(o){var l=a.indexOf(o);if(l!==-1&&(t===document||t===window)){e[Mt]=t;return}var d=a.indexOf(t);if(d===-1)return;l<=d&&(s=l)}if(i=a[s]||e.target,i!==t){Hi(e,"currentTarget",{configurable:!0,get(){return i||r}});var u=Y,p=z;Ue(null),Ee(null);try{for(var c,h=[];i!==null&&i!==t;){try{var m=(b=i[Mt])==null?void 0:b[n];m!=null&&(!i.disabled||e.target===i)&&m.call(i,e)}catch(k){c?h.push(k):c=k}if(e.cancelBubble)break;s++,i=s<a.length?a[s]:null}if(c){for(let k of h)queueMicrotask(()=>{throw k});throw c}}finally{e[Mt]=t,delete e.currentTarget,Ue(u),Ee(p)}}}var Ta;const wn=((Ta=globalThis==null?void 0:globalThis.window)==null?void 0:Ta.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function po(e){return(wn==null?void 0:wn.createHTML(e))??e}function Ei(e){var t=di("template");return t.innerHTML=po(e.replaceAll("<!>","<!---->")),t.content}function Sr(e,t){var r=z;r.nodes===null&&(r.nodes={start:e,end:t,a:null,t:null})}function O(e,t){var r=(t&ms)!==0,n=(t&bs)!==0,a,i=!e.startsWith("<!>");return()=>{a===void 0&&(a=Ei(i?e:"<!>"+e),r||(a=sr(a)));var s=n||ii?document.importNode(a,!0):a.cloneNode(!0);if(r){var o=sr(s),l=s.lastChild;Sr(o,l)}else Sr(s,s);return s}}function ho(e,t,r="svg"){var n=!e.startsWith("<!>"),a=`<${r}>${n?e:"<!>"+e}</${r}>`,i;return()=>{if(!i){var s=Ei(a),o=sr(s);i=sr(o)}var l=i.cloneNode(!0);return Sr(l,l),l}}function go(e,t){return ho(e,t,"svg")}function G(){var e=document.createDocumentFragment(),t=document.createComment(""),r=pt();return e.append(t,r),Sr(t,r),e}function S(e,t){e!==null&&e.before(t)}function ie(e,t){var r=t==null?"":typeof t=="object"?`${t}`:t;r!==(e[mr]??(e[mr]=e.nodeValue))&&(e[mr]=r,e.nodeValue=`${r}`)}function mo(e,t){return bo(e,t)}const Br=new Map;function bo(e,{target:t,anchor:r,props:n={},events:a,context:i,intro:s=!0,transformError:o}){Ks();var l=void 0,d=Xs(()=>{var u=r??t.appendChild(pt());Ds(u,{pending:()=>{}},h=>{Vt({});var m=Q;i&&(m.c=i),a&&(n.$$events=a),l=e(h,n)||{},Yt()},o);var p=new Set,c=h=>{for(var m=0;m<h.length;m++){var x=h[m];if(!p.has(x)){p.add(x);var b=fo(x);for(const M of[t,document]){var k=Br.get(M);k===void 0&&(k=new Map,Br.set(M,k));var E=k.get(x);E===void 0?(M.addEventListener(x,On,{passive:b}),k.set(x,1)):k.set(x,E+1)}}}};return c(fn($i)),zn.add(c),()=>{var b;for(var h of p)for(const k of[t,document]){var m=Br.get(k),x=m.get(h);--x==0?(k.removeEventListener(h,On),m.delete(h),m.size===0&&Br.delete(k)):m.set(h,x)}zn.delete(c),u!==r&&((b=u.parentNode)==null||b.removeChild(u))}});return xo.set(l,d),l}let xo=new WeakMap;var qe,Je,Le,Dt,Pr,Ar,cn;class ra{constructor(t,r=!0){Pe(this,"anchor");I(this,qe,new Map);I(this,Je,new Map);I(this,Le,new Map);I(this,Dt,new Set);I(this,Pr,!0);I(this,Ar,t=>{if(v(this,qe).has(t)){var r=v(this,qe).get(t),n=v(this,Je).get(r);if(n)an(n),v(this,Dt).delete(r);else{var a=v(this,Le).get(r);a&&(an(a.effect),v(this,Je).set(r,a.effect),v(this,Le).delete(r),a.fragment.lastChild.remove(),this.anchor.before(a.fragment),n=a.effect)}for(const[i,s]of v(this,qe)){if(v(this,qe).delete(i),i===t)break;const o=v(this,Le).get(s);o&&(he(o.effect),v(this,Le).delete(s))}for(const[i,s]of v(this,Je)){if(i===r||v(this,Dt).has(i))continue;const o=()=>{if(Array.from(v(this,qe).values()).includes(i)){var d=document.createDocumentFragment();ta(s,d),d.append(pt()),v(this,Le).set(i,{effect:s,fragment:d})}else he(s);v(this,Dt).delete(i),v(this,Je).delete(i)};v(this,Pr)||!n?(v(this,Dt).add(i),Ct(s,o,!1)):o()}}});I(this,cn,t=>{v(this,qe).delete(t);const r=Array.from(v(this,qe).values());for(const[n,a]of v(this,Le))r.includes(n)||(he(a.effect),v(this,Le).delete(n))});this.anchor=t,D(this,Pr,r)}ensure(t,r){var n=C,a=li();if(r&&!v(this,Je).has(t)&&!v(this,Le).has(t))if(a){var i=document.createDocumentFragment(),s=pt();i.append(s),v(this,Le).set(t,{effect:Se(()=>r(s)),fragment:i})}else v(this,Je).set(t,Se(()=>r(this.anchor)));if(v(this,qe).set(n,t),a){for(const[o,l]of v(this,Je))o===t?n.unskip_effect(l):n.skip_effect(l);for(const[o,l]of v(this,Le))o===t?n.unskip_effect(l.effect):n.skip_effect(l.effect);n.oncommit(v(this,Ar)),n.ondiscard(v(this,cn))}else v(this,Ar).call(this,n)}}qe=new WeakMap,Je=new WeakMap,Le=new WeakMap,Dt=new WeakMap,Pr=new WeakMap,Ar=new WeakMap,cn=new WeakMap;function fe(e,t,r=!1){var n=new ra(e),a=r?$t:0;function i(s,o){n.ensure(s,o)}Ir(()=>{var s=!1;t((o,l=0)=>{s=!0,i(l,o)}),s||i(-1,null)},a)}function zr(e,t){return t}function wo(e,t,r){for(var n=[],a=t.length,i,s=t.length,o=0;o<a;o++){let p=t[o];Ct(p,()=>{if(i){if(i.pending.delete(p),i.done.add(p),i.pending.size===0){var c=e.outrogroups;Vn(e,fn(i.done)),c.delete(i),c.size===0&&(e.outrogroups=null)}}else s-=1},!1)}if(s===0){var l=n.length===0&&r!==null&&e.pending.size===0;if(l){var d=r,u=d.parentNode;Qs(u),u.append(d),e.items.clear()}Vn(e,t,!l)}else i={pending:new Set(t),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(i)}function Vn(e,t,r=!0){var n;if(e.pending.size>0){n=new Set;for(const s of e.pending.values())for(const o of s)n.add(e.items.get(o).e)}for(var a=0;a<t.length;a++){var i=t[a];if(n!=null&&n.has(i)){i.f|=et;const s=document.createDocumentFragment();ta(i,s)}else he(t[a],r)}}var ga;function Or(e,t,r,n,a,i=null){var s=e,o=new Map,l=(t&Va)!==0;if(l){var d=e;s=d.appendChild(pt())}var u=null,p=Nr(()=>{var M=r();return Un(M)?M:M==null?[]:fn(M)}),c,h=new Map,m=!0;function x(M){(E.effect.f&De)===0&&(E.pending.delete(M),E.fallback=u,_o(E,c,s,t,n),u!==null&&(c.length===0?(u.f&et)===0?an(u):(u.f^=et,_r(u,null,s)):Ct(u,()=>{u=null})))}function b(M){E.pending.delete(M)}var k=Ir(()=>{c=w(p);for(var M=c.length,y=new Set,_=C,$=li(),T=0;T<M;T+=1){var A=c[T],H=n(A,T),V=m?null:o.get(H);V?(V.v&&ir(V.v,A),V.i&&ir(V.i,T),$&&_.unskip_effect(V.e)):(V=yo(o,m?s:ga??(ga=pt()),A,H,T,a,t,r),m||(V.e.f|=et),o.set(H,V)),y.add(H)}if(M===0&&i&&!u&&(m?u=Se(()=>i(s)):(u=Se(()=>i(ga??(ga=pt()))),u.f|=et)),M>y.size&&Ji(),!m)if(h.set(_,y),$){for(const[L,R]of o)y.has(L)||_.skip_effect(R.e);_.oncommit(x),_.ondiscard(b)}else x(_);w(p)}),E={effect:k,items:o,pending:h,outrogroups:null,fallback:u};m=!1}function pr(e){for(;e!==null&&(e.f&Fe)===0;)e=e.next;return e}function _o(e,t,r,n,a){var V,L,R,ae,Te,Me,F,q,se;var i=(n&fs)!==0,s=t.length,o=e.items,l=pr(e.effect.first),d,u=null,p,c=[],h=[],m,x,b,k;if(i)for(k=0;k<s;k+=1)m=t[k],x=a(m,k),b=o.get(x).e,(b.f&et)===0&&((L=(V=b.nodes)==null?void 0:V.a)==null||L.measure(),(p??(p=new Set)).add(b));for(k=0;k<s;k+=1){if(m=t[k],x=a(m,k),b=o.get(x).e,e.outrogroups!==null)for(const ge of e.outrogroups)ge.pending.delete(b),ge.done.delete(b);if((b.f&_e)!==0&&(an(b),i&&((ae=(R=b.nodes)==null?void 0:R.a)==null||ae.unfix(),(p??(p=new Set)).delete(b))),(b.f&et)!==0)if(b.f^=et,b===l)_r(b,null,r);else{var E=u?u.next:l;b===e.effect.last&&(e.effect.last=b.prev),b.prev&&(b.prev.next=b.next),b.next&&(b.next.prev=b.prev),bt(e,u,b),bt(e,b,E),_r(b,E,r),u=b,c=[],h=[],l=pr(u.next);continue}if(b!==l){if(d!==void 0&&d.has(b)){if(c.length<h.length){var M=h[0],y;u=M.prev;var _=c[0],$=c[c.length-1];for(y=0;y<c.length;y+=1)_r(c[y],M,r);for(y=0;y<h.length;y+=1)d.delete(h[y]);bt(e,_.prev,$.next),bt(e,u,_),bt(e,$,M),l=M,u=$,k-=1,c=[],h=[]}else d.delete(b),_r(b,l,r),bt(e,b.prev,b.next),bt(e,b,u===null?e.effect.first:u.next),bt(e,u,b),u=b;continue}for(c=[],h=[];l!==null&&l!==b;)(d??(d=new Set)).add(l),h.push(l),l=pr(l.next);if(l===null)continue}(b.f&et)===0&&c.push(b),u=b,l=pr(b.next)}if(e.outrogroups!==null){for(const ge of e.outrogroups)ge.pending.size===0&&(Vn(e,fn(ge.done)),(Te=e.outrogroups)==null||Te.delete(ge));e.outrogroups.size===0&&(e.outrogroups=null)}if(l!==null||d!==void 0){var T=[];if(d!==void 0)for(b of d)(b.f&_e)===0&&T.push(b);for(;l!==null;)(l.f&_e)===0&&l!==e.fallback&&T.push(l),l=pr(l.next);var A=T.length;if(A>0){var H=(n&Va)!==0&&s===0?r:null;if(i){for(k=0;k<A;k+=1)(F=(Me=T[k].nodes)==null?void 0:Me.a)==null||F.measure();for(k=0;k<A;k+=1)(se=(q=T[k].nodes)==null?void 0:q.a)==null||se.fix()}wo(e,T,H)}}i&&tt(()=>{var ge,it;if(p!==void 0)for(b of p)(it=(ge=b.nodes)==null?void 0:ge.a)==null||it.apply()})}function yo(e,t,r,n,a,i,s,o){var l=(s&ds)!==0?(s&us)===0?Z(r,!1,!1):St(r):null,d=(s&cs)!==0?St(a):null;return{v:l,i:d,e:Se(()=>(i(t,l??r,d??a,o),()=>{e.delete(n)}))}}function _r(e,t,r){if(e.nodes)for(var n=e.nodes.start,a=e.nodes.end,i=t&&(t.f&et)===0?t.nodes.start:r;n!==null;){var s=Rr(n);if(i.before(n),n===a)return;n=s}}function bt(e,t,r){t===null?e.effect.first=r:t.next=r,r===null?e.effect.last=t:r.prev=t}function ee(e,t,r,n,a){var o;var i=(o=t.$$slots)==null?void 0:o[r],s=!1;i===!0&&(i=t.children,s=!0),i===void 0||i(e,s?()=>n:n)}function Ti(e,t,r){var n=new ra(e);Ir(()=>{var a=t()??null;n.ensure(a,a&&(i=>r(i,a)))},$t)}function ko(e,t,r,n,a,i){var s=null,o=e,l=new ra(o,!1);Ir(()=>{const d=t()||null;var u=xs;if(d===null){l.ensure(null,null);return}return l.ensure(d,p=>{if(d){if(s=di(d,u),Sr(s,s),n){var c=null,h=s.appendChild(pt());n(s,h),c==null||c.remove()}z.nodes.end=s,p.before(s)}}),()=>{}},$t),un(()=>{})}function $o(e,t){var r=void 0,n;ui(()=>{r!==(r=t())&&(n&&(he(n),n=null),r&&(n=Se(()=>{Xn(()=>r(e))})))})}function Mi(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(r=Mi(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function So(){for(var e,t,r=0,n="",a=arguments.length;r<a;r++)(e=arguments[r])&&(t=Mi(e))&&(n&&(n+=" "),n+=t);return n}function Eo(e){return typeof e=="object"?So(e):e??""}const ma=[...` 	
\r\f \v\uFEFF`];function To(e,t,r){var n=e==null?"":""+e;if(r){for(var a of Object.keys(r))if(r[a])n=n?n+" "+a:a;else if(n.length)for(var i=a.length,s=0;(s=n.indexOf(a,s))>=0;){var o=s+i;(s===0||ma.includes(n[s-1]))&&(o===n.length||ma.includes(n[o]))?n=(s===0?"":n.substring(0,s))+n.substring(o+1):s=o}}return n===""?null:n}function ba(e,t=!1){var r=t?" !important;":";",n="";for(var a of Object.keys(e)){var i=e[a];i!=null&&i!==""&&(n+=" "+a+": "+i+r)}return n}function _n(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function Mo(e,t){if(t){var r="",n,a;if(Array.isArray(t)?(n=t[0],a=t[1]):n=t,e){e=String(e).replaceAll(/\/\*.*?\*\//g,"").trim();var i=!1,s=0,o=!1,l=[];n&&l.push(...Object.keys(n).map(_n)),a&&l.push(...Object.keys(a).map(_n));var d=0,u=-1;const x=e.length;for(var p=0;p<x;p++){var c=e[p];if(o?c==="/"&&e[p-1]==="*"&&(o=!1):i?i===c&&(i=!1):c==="/"&&e[p+1]==="*"?o=!0:c==='"'||c==="'"?i=c:c==="("?s++:c===")"&&s--,!o&&i===!1&&s===0){if(c===":"&&u===-1)u=p;else if(c===";"||p===x-1){if(u!==-1){var h=_n(e.substring(d,u).trim());if(!l.includes(h)){c!==";"&&p++;var m=e.substring(d,p).trim();r+=" "+m+";"}}d=p+1,u=-1}}}}return n&&(r+=ba(n)),a&&(r+=ba(a,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function Ot(e,t,r,n,a,i){var s=e[Tn];if(s!==r||s===void 0){var o=To(r,n,i);o==null?e.removeAttribute("class"):t?e.className=o:e.setAttribute("class",o),e[Tn]=r}else if(i&&a!==i)for(var l in i){var d=!!i[l];(a==null||d!==!!a[l])&&e.classList.toggle(l,d)}return i}function yn(e,t={},r,n){for(var a in r){var i=r[a];t[a]!==i&&(r[a]==null?e.style.removeProperty(a):e.style.setProperty(a,i,n))}}function Po(e,t,r,n){var a=e[Mn];if(a!==t){var i=Mo(t,n);i==null?e.removeAttribute("style"):e.style.cssText=i,e[Mn]=t}else n&&(Array.isArray(n)?(yn(e,r==null?void 0:r[0],n[0]),yn(e,r==null?void 0:r[1],n[1],"important")):yn(e,r,n));return n}function Yn(e,t,r=!1){if(e.multiple){if(t==null)return;if(!Un(t))return ys();for(var n of e.options)n.selected=t.includes(xa(n));return}for(n of e.options){var a=xa(n);if(Ws(a,t)){n.selected=!0;return}}(!r||t!==void 0)&&(e.selectedIndex=-1)}function Ao(e){var t=new MutationObserver(()=>{"__value"in e&&Yn(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),un(()=>{t.disconnect()})}function xa(e){return"__value"in e?e.__value:e.value}const hr=Symbol("class"),gr=Symbol("style"),Pi=Symbol("is custom element"),Ai=Symbol("is html"),jo=qn?"input":"INPUT",Lo=qn?"option":"OPTION",Do=qn?"select":"SELECT";function Co(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function P(e,t,r,n){var a=ji(e);a[t]!==(a[t]=r)&&(t==="loading"&&(e[Zi]=r),r==null?e.removeAttribute(t):typeof r!="string"&&Li(e).includes(t)?e[t]=r:e.setAttribute(t,r))}function No(e,t,r,n,a=!1,i=!1){var s=ji(e),o=s[Pi],l=!s[Ai],d=t||{},u=e.nodeName===Lo;for(var p in t)!(p in r)&&p[0]+p[1]!=="$$"&&(r[p]=null);r.class?r.class=Eo(r.class):r[hr]&&(r.class=null),r[gr]&&(r.style??(r.style=null));var c=Li(e);if(e.nodeName===jo&&"type"in r&&("value"in r||"__value"in r)){var h=r.type;(h!==d.type||h===void 0&&e.hasAttribute("type"))&&(d.type=h,P(e,"type",h))}for(const y in r){let _=r[y];if(u&&y==="value"&&_==null){e.value=e.__value="",d[y]=_;continue}if(y==="class"){var m=e.namespaceURI==="http://www.w3.org/1999/xhtml";Ot(e,m,_,n,t==null?void 0:t[hr],r[hr]),d[y]=_,d[hr]=r[hr];continue}if(y==="style"){Po(e,_,t==null?void 0:t[gr],r[gr]),d[y]=_,d[gr]=r[gr];continue}var x=d[y];if(!(_===x&&!(_===void 0&&e.hasAttribute(y)))){d[y]=_;var b=y[0]+y[1];if(b!=="$$")if(b==="on"){const $={},T="$$"+y;let A=y.slice(2);var k=so(A);if(ao(A)&&(A=A.slice(0,-7),$.capture=!0),!k&&x){if(_!=null)continue;e.removeEventListener(A,d[T],$),d[T]=null}if(k)uo(A,e,_),vo([A]);else if(_!=null){let H=function(V){d[y].call(this,V)};d[T]=Si(A,e,H,$)}}else if(y==="style")P(e,y,_);else if(y==="autofocus")As(e,!!_);else if(!o&&(y==="__value"||y==="value"&&_!=null))e.value=e.__value=_;else if(y==="selected"&&u)Co(e,_);else{var E=y;l||(E=lo(E));var M=E==="defaultValue"||E==="defaultChecked";if(_==null&&!o&&!M)if(s[y]=null,E==="value"||E==="checked"){let $=e;const T=t===void 0;if(E==="value"){let A=$.defaultValue;$.removeAttribute(E),$.defaultValue=A,$.value=$.__value=T?A:null}else{let A=$.defaultChecked;$.removeAttribute(E),$.defaultChecked=A,$.checked=T?A:!1}}else e.removeAttribute(y);else M||c.includes(E)&&(o||typeof _!="string")?(e[E]=_,E in s&&(s[E]=oe)):typeof _!="function"&&P(e,E,_)}}}return d}function wa(e,t,r=[],n=[],a=[],i,s=!1,o=!1){Ka(a,r,n,l=>{var d=void 0,u={},p=e.nodeName===Do,c=!1;if(ui(()=>{var m=t(...l.map(w)),x=No(e,d,m,i,s,o);c&&p&&"value"in m&&Yn(e,m.value);for(let k of Object.getOwnPropertySymbols(u))m[k]||he(u[k]);for(let k of Object.getOwnPropertySymbols(m)){var b=m[k];k.description===ws&&(!d||b!==d[k])&&(u[k]&&he(u[k]),u[k]=Se(()=>$o(e,()=>b))),x[k]=b}d=x}),p){var h=e;Xn(()=>{Yn(h,d.value,!0),Ao(h)})}c=!0})}function ji(e){return e[Wr]??(e[Wr]={[Pi]:e.nodeName.includes("-"),[Ai]:e.namespaceURI===Fa})}var _a=new Map;function Li(e){var t=e.getAttribute("is")||e.nodeName,r=_a.get(t);if(r)return r;_a.set(t,r=[]);for(var n,a=e,i=Element.prototype;i!==a;){n=Na(a);for(var s in n)n[s].set&&s!=="innerHTML"&&s!=="textContent"&&s!=="innerText"&&r.push(s);a=Hn(a)}return r}function kn(e,t){return e===t||(e==null?void 0:e[rt])===t}function Ro(e={},t,r,n){var a=Q.r,i=z;return Xn(()=>{var s,o;return vn(()=>{s=o,o=[],xe(()=>{kn(r(...o),e)||(t(e,...o),s&&kn(r(...s),e)&&t(null,...s))})}),()=>{let l=i;for(;l!==a&&l.parent!==null&&l.parent.f&En;)l=l.parent;const d=()=>{o&&kn(r(...o),e)&&t(null,...o)},u=l.teardown;l.teardown=()=>{d(),u==null||u()}}}),e}function fr(e=!1){const t=Q,r=t.l.u;if(!r)return;let n=()=>We(t.s);if(e){let a=0,i={};const s=ar(()=>{let o=!1;const l=t.s;for(const d in l)l[d]!==i[d]&&(i[d]=l[d],o=!0);return o&&a++,a});n=()=>w(s)}r.b.length&&Zs(()=>{ya(t,n),$n(r.b)}),Rn(()=>{const a=xe(()=>r.m.map(Ki));return()=>{for(const i of a)typeof i=="function"&&i()}}),r.a.length&&Rn(()=>{ya(t,n),$n(r.a)})}function ya(e,t){if(e.l.s)for(const r of e.l.s)w(r);t()}const Io={get(e,t){if(!e.exclude.includes(t))return w(e.version),t in e.special?e.special[t]():e.props[t]},set(e,t,r){if(!(t in e.special)){var n=z;try{Ee(e.parent_effect),e.special[t]=pe({get[t](){return e.props[t]}},t,Ya)}finally{Ee(n)}}return e.special[t](r),fa(e.version),!0},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},deleteProperty(e,t){return e.exclude.includes(t)||(e.exclude.push(t),fa(e.version)),!0},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function J(e,t){return new Proxy({props:e,exclude:t,special:{},version:St(0),parent_effect:z},Io)}const zo={get(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(vr(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n)return n[t]}},set(e,t,r){let n=e.props.length;for(;n--;){let a=e.props[n];vr(a)&&(a=a());const i=yt(a,t);if(i&&i.set)return i.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(vr(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n){const a=yt(n,t);return a&&!a.configurable&&(a.configurable=!0),a}}},has(e,t){if(t===rt||t===za)return!1;for(let r of e.props)if(vr(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){const t=[];for(let r of e.props)if(vr(r)&&(r=r()),!!r){for(const n in r)t.includes(n)||t.push(n);for(const n of Object.getOwnPropertySymbols(r))t.includes(n)||t.push(n)}return t}};function re(...e){return new Proxy({props:e},zo)}function pe(e,t,r,n){var y;var a=!dr||(r&ps)!==0,i=(r&hs)!==0,s=(r&gs)!==0,o=n,l=!0,d=void 0,u=()=>s&&a?(d??(d=ar(n)),w(d)):(l&&(l=!1,o=s?xe(n):n),o);let p;if(i){var c=rt in e||za in e;p=((y=yt(e,t))==null?void 0:y.set)??(c&&t in e?_=>e[t]=_:void 0)}var h,m=!1;i?[h,m]=Ps(()=>e[t]):h=e[t],h===void 0&&n!==void 0&&(h=u(),p&&(a&&as(),p(h)));var x;if(a?x=()=>{var _=e[t];return _===void 0?u():(l=!0,_)}:x=()=>{var _=e[t];return _!==void 0&&(o=void 0),_===void 0?o:_},a&&(r&Ya)===0)return x;if(p){var b=e.$$legacy;return(function(_,$){return arguments.length>0?((!a||!$||b||m)&&p($?x():_),_):x()})}var k=!1,E=((r&vs)!==0?ar:Nr)(()=>(k=!1,x()));i&&w(E);var M=z;return(function(_,$){if(arguments.length>0){const T=$?w(E):a&&i?Wt(_):_;return N(E,T),k=!0,o!==void 0&&(o=T),_}return gt&&k||(M.f&De)!==0?E.v:w(E)})}function Di(e){Q===null&&Oa(),dr&&Q.l!==null?Vo(Q).m.push(e):Rn(()=>{const t=xe(e);if(typeof t=="function")return t})}function Oo(e){Q===null&&Oa(),Di(()=>()=>xe(e))}function Vo(e){var t=e.l;return t.u??(t.u={a:[],b:[],m:[]})}const Yo="5";var Ma;typeof window<"u"&&((Ma=window.__svelte??(window.__svelte={})).v??(Ma.v=new Set)).add(Yo);Es();/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2026 Lucide Icons and Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The following Lucide icons are derived from the Feather project:
 * 
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 * 
 * The MIT License (MIT) (for the icons listed above)
 * 
 * Copyright (c) 2013-present Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const Fo={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2026 Lucide Icons and Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The following Lucide icons are derived from the Feather project:
 * 
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 * 
 * The MIT License (MIT) (for the icons listed above)
 * 
 * Copyright (c) 2013-present Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const Uo=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2026 Lucide Icons and Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The following Lucide icons are derived from the Feather project:
 * 
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 * 
 * The MIT License (MIT) (for the icons listed above)
 * 
 * Copyright (c) 2013-present Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const ka=(...e)=>e.filter((t,r,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===r).join(" ").trim();var Ho=go("<svg><!><!></svg>");function ne(e,t){const r=J(t,["children","$$slots","$$events","$$legacy"]),n=J(r,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);Vt(t,!1);let a=pe(t,"name",8,void 0),i=pe(t,"color",8,"currentColor"),s=pe(t,"size",8,24),o=pe(t,"strokeWidth",8,2),l=pe(t,"absoluteStrokeWidth",8,!1),d=pe(t,"iconNode",24,()=>[]);fr();var u=Ho();wa(u,(h,m,x)=>({...Fo,...h,...n,width:s(),height:s(),stroke:i(),"stroke-width":m,class:x}),[()=>Uo(n)?void 0:{"aria-hidden":"true"},()=>(We(l()),We(o()),We(s()),xe(()=>l()?Number(o())*24/Number(s()):o())),()=>(We(ka),We(a()),We(r),xe(()=>ka("lucide-icon","lucide",a()?`lucide-${a()}`:"",r.class)))]);var p=f(u);Or(p,1,d,zr,(h,m)=>{var x=Vs(()=>Qi(w(m),2));let b=()=>w(x)[0],k=()=>w(x)[1];var E=G(),M=B(E);ko(M,b,!0,(y,_)=>{wa(y,()=>({...k()}))}),S(h,E)});var c=g(p);ee(c,t,"default",{}),S(e,u),Yt()}function Bo(e,t){const r=J(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M5 12h14"}],["path",{d:"m12 5 7 7-7 7"}]];ne(e,re({name:"arrow-right"},()=>r,{get iconNode(){return n},children:(a,i)=>{var s=G(),o=B(s);ee(o,t,"default",{}),S(a,s)},$$slots:{default:!0}}))}function qo(e,t){const r=J(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"m6 9 6 6 6-6"}]];ne(e,re({name:"chevron-down"},()=>r,{get iconNode(){return n},children:(a,i)=>{var s=G(),o=B(s);ee(o,t,"default",{}),S(a,s)},$$slots:{default:!0}}))}function Xr(e,t){const r=J(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];ne(e,re({name:"circle-check"},()=>r,{get iconNode(){return n},children:(a,i)=>{var s=G(),o=B(s);ee(o,t,"default",{}),S(a,s)},$$slots:{default:!0}}))}function Wo(e,t){const r=J(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]];ne(e,re({name:"circle-question-mark"},()=>r,{get iconNode(){return n},children:(a,i)=>{var s=G(),o=B(s);ee(o,t,"default",{}),S(a,s)},$$slots:{default:!0}}))}function Ko(e,t){const r=J(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}]];ne(e,re({name:"clipboard"},()=>r,{get iconNode(){return n},children:(a,i)=>{var s=G(),o=B(s);ee(o,t,"default",{}),S(a,s)},$$slots:{default:!0}}))}function Qo(e,t){const r=J(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M12 20v2"}],["path",{d:"M12 2v2"}],["path",{d:"M17 20v2"}],["path",{d:"M17 2v2"}],["path",{d:"M2 12h2"}],["path",{d:"M2 17h2"}],["path",{d:"M2 7h2"}],["path",{d:"M20 12h2"}],["path",{d:"M20 17h2"}],["path",{d:"M20 7h2"}],["path",{d:"M7 20v2"}],["path",{d:"M7 2v2"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1"}]];ne(e,re({name:"cpu"},()=>r,{get iconNode(){return n},children:(a,i)=>{var s=G(),o=B(s);ee(o,t,"default",{}),S(a,s)},$$slots:{default:!0}}))}function na(e,t){const r=J(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M12 15V3"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["path",{d:"m7 10 5 5 5-5"}]];ne(e,re({name:"download"},()=>r,{get iconNode(){return n},children:(a,i)=>{var s=G(),o=B(s);ee(o,t,"default",{}),S(a,s)},$$slots:{default:!0}}))}function sn(e,t){const r=J(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]];ne(e,re({name:"external-link"},()=>r,{get iconNode(){return n},children:(a,i)=>{var s=G(),o=B(s);ee(o,t,"default",{}),S(a,s)},$$slots:{default:!0}}))}function Go(e,t){const r=J(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M10 9H8"}],["path",{d:"M16 13H8"}],["path",{d:"M16 17H8"}]];ne(e,re({name:"file-text"},()=>r,{get iconNode(){return n},children:(a,i)=>{var s=G(),o=B(s);ee(o,t,"default",{}),S(a,s)},$$slots:{default:!0}}))}function Ci(e,t){const r=J(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"}],["path",{d:"M2 12h20"}]];ne(e,re({name:"globe"},()=>r,{get iconNode(){return n},children:(a,i)=>{var s=G(),o=B(s);ee(o,t,"default",{}),S(a,s)},$$slots:{default:!0}}))}function Zo(e,t){const r=J(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8"}]];ne(e,re({name:"infinity"},()=>r,{get iconNode(){return n},children:(a,i)=>{var s=G(),o=B(s);ee(o,t,"default",{}),S(a,s)},$$slots:{default:!0}}))}function Xo(e,t){const r=J(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];ne(e,re({name:"info"},()=>r,{get iconNode(){return n},children:(a,i)=>{var s=G(),o=B(s);ee(o,t,"default",{}),S(a,s)},$$slots:{default:!0}}))}function Ni(e,t){const r=J(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4"}]];ne(e,re({name:"lock"},()=>r,{get iconNode(){return n},children:(a,i)=>{var s=G(),o=B(s);ee(o,t,"default",{}),S(a,s)},$$slots:{default:!0}}))}function Jo(e,t){const r=J(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}]];ne(e,re({name:"mail"},()=>r,{get iconNode(){return n},children:(a,i)=>{var s=G(),o=B(s);ee(o,t,"default",{}),S(a,s)},$$slots:{default:!0}}))}function el(e,t){const r=J(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M4 5h16"}],["path",{d:"M4 12h16"}],["path",{d:"M4 19h16"}]];ne(e,re({name:"menu"},()=>r,{get iconNode(){return n},children:(a,i)=>{var s=G(),o=B(s);ee(o,t,"default",{}),S(a,s)},$$slots:{default:!0}}))}function tl(e,t){const r=J(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M9 18V5l12-2v13"}],["circle",{cx:"6",cy:"18",r:"3"}],["circle",{cx:"18",cy:"16",r:"3"}]];ne(e,re({name:"music"},()=>r,{get iconNode(){return n},children:(a,i)=>{var s=G(),o=B(s);ee(o,t,"default",{}),S(a,s)},$$slots:{default:!0}}))}function rl(e,t){const r=J(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];ne(e,re({name:"refresh-cw"},()=>r,{get iconNode(){return n},children:(a,i)=>{var s=G(),o=B(s);ee(o,t,"default",{}),S(a,s)},$$slots:{default:!0}}))}function Ri(e,t){const r=J(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M12 8v4"}],["path",{d:"M12 16h.01"}]];ne(e,re({name:"shield-alert"},()=>r,{get iconNode(){return n},children:(a,i)=>{var s=G(),o=B(s);ee(o,t,"default",{}),S(a,s)},$$slots:{default:!0}}))}function Vr(e,t){const r=J(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"m9 12 2 2 4-4"}]];ne(e,re({name:"shield-check"},()=>r,{get iconNode(){return n},children:(a,i)=>{var s=G(),o=B(s);ee(o,t,"default",{}),S(a,s)},$$slots:{default:!0}}))}function Ii(e,t){const r=J(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2"}],["path",{d:"M12 18h.01"}]];ne(e,re({name:"smartphone"},()=>r,{get iconNode(){return n},children:(a,i)=>{var s=G(),o=B(s);ee(o,t,"default",{}),S(a,s)},$$slots:{default:!0}}))}function Et(e,t){const r=J(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"}],["path",{d:"M20 2v4"}],["path",{d:"M22 4h-4"}],["circle",{cx:"4",cy:"20",r:"2"}]];ne(e,re({name:"sparkles"},()=>r,{get iconNode(){return n},children:(a,i)=>{var s=G(),o=B(s);ee(o,t,"default",{}),S(a,s)},$$slots:{default:!0}}))}function on(e,t){const r=J(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];ne(e,re({name:"x"},()=>r,{get iconNode(){return n},children:(a,i)=>{var s=G(),o=B(s);ee(o,t,"default",{}),S(a,s)},$$slots:{default:!0}}))}function aa(e,t){const r=J(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"}]];ne(e,re({name:"zap"},()=>r,{get iconNode(){return n},children:(a,i)=>{var s=G(),o=B(s);ee(o,t,"default",{}),S(a,s)},$$slots:{default:!0}}))}var nl=O('<div class="lg:hidden px-4 pt-2 pb-6 space-y-2 bg-slate-950/95 border-b border-slate-800"><a class="block px-4 py-3 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-900 hover:text-white">YouTube to MP3 Converter</a> <a class="block px-4 py-3 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-900 hover:text-white">YouTube to MP4 Converter</a> <a class="block px-4 py-3 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-900 hover:text-white">YouTube Shorts Downloader</a> <a class="block px-4 py-3 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-900 hover:text-white">YouTube Video Downloader</a> <a class="block px-4 py-3 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-900 hover:text-white">TikTok Downloader (No Watermark)</a> <a class="block px-4 py-3 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-900 hover:text-white">Instagram Reels Downloader</a> <a class="block px-4 py-3 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-900 hover:text-white">Facebook Video Downloader</a> <a class="block px-4 py-3 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-900 hover:text-white">Pinterest Video Downloader</a> <a class="block px-4 py-3 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-900 hover:text-white">LinkedIn Video Downloader</a> <a class="block px-4 py-3 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-900 hover:text-white">Download Guide</a> <a href="https://microsoftedge.microsoft.com/addons/detail/linksave-video-audio-/ipneiigdjchdffpkailbdajdihcpgigd" target="_blank" rel="noopener noreferrer" class="block px-4 py-3 rounded-lg text-base font-semibold text-blue-400 hover:bg-slate-900">Edge Extension (Free)</a> <a class="block px-4 py-3 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-900 hover:text-white">About Us</a> <a class="block px-4 py-3 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-900 hover:text-white">Contact Us</a> <a class="block px-4 py-3 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-900 hover:text-white">Privacy Policy</a> <a class="block px-4 py-3 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-900 hover:text-white">Terms of Service</a> <div class="pt-2"><button class="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow-lg shadow-blue-500/25"><!> <span>Save Video Now</span></button></div></div>'),al=O('<header class="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-slate-800/80"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex items-center justify-between h-16"><a class="flex items-center gap-3 group text-left focus:outline-none"><div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-500 p-0.5 shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-300"><div class="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center"><!></div></div> <div><span class="text-xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-blue-400 bg-clip-text text-transparent">LinkSave</span> <span class="block text-[10px] font-semibold text-blue-400/90 tracking-wider uppercase -mt-1">Video Converter</span></div></a> <nav class="hidden lg:flex items-center gap-1 xl:gap-2"><a class="px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-900/80 rounded-lg transition-colors">YouTube to MP3</a> <a class="px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-900/80 rounded-lg transition-colors">YouTube to MP4</a> <a class="px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-900/80 rounded-lg transition-colors">YouTube Shorts</a> <a class="px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-900/80 rounded-lg transition-colors">Video Downloader</a> <a class="px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-900/80 rounded-lg transition-colors">TikTok</a> <a class="px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-900/80 rounded-lg transition-colors">Reels</a> <button class="px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-900/80 rounded-lg transition-colors cursor-pointer">All Converters</button> <a href="https://microsoftedge.microsoft.com/addons/detail/linksave-video-audio-/ipneiigdjchdffpkailbdajdihcpgigd" target="_blank" rel="noopener noreferrer" class="px-3 py-2 text-xs font-semibold text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 rounded-lg transition-colors flex items-center gap-1"><span>Edge Add-on</span></a></nav> <div class="hidden sm:flex items-center gap-3"><div class="hidden xl:flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400"><!> <span>100% Free & Safe</span></div> <button class="relative inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-xs sm:text-sm shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 hover:from-blue-500 hover:to-indigo-500 transition-all duration-200 cursor-pointer"><!> <span>Convert Video</span></button></div> <div class="flex md:hidden"><button class="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 focus:outline-none" aria-label="Toggle menu"><!></button></div></div></div> <!></header>');function il(e,t){Vt(t,!1);let r=Z(!1);const n="/".endsWith("/")?"/":"//";function a(F){N(r,!1);const q=document.getElementById(F);q&&q.scrollIntoView({behavior:"smooth"})}fr();var i=al(),s=f(i),o=f(s),l=f(o),d=f(l),u=f(d),p=f(u);na(p,{class:"w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform duration-300"});var c=g(l,2),h=f(c),m=g(h,2),x=g(m,2),b=g(x,2),k=g(b,2),E=g(k,2),M=g(E,2),y=g(c,2),_=f(y),$=f(_);Vr($,{class:"w-3.5 h-3.5"});var T=g(_,2),A=f(T);Et(A,{class:"w-4 h-4"});var H=g(y,2),V=f(H),L=f(V);{var R=F=>{on(F,{class:"w-6 h-6"})},ae=F=>{el(F,{class:"w-6 h-6"})};fe(L,F=>{w(r)?F(R):F(ae,-1)})}var Te=g(s,2);{var Me=F=>{var q=nl(),se=f(q),ge=g(se,2),it=g(ge,2),Ft=g(it,2),Yr=g(Ft,2),Fr=g(Yr,2),ur=g(Fr,2),W=g(ur,2),me=g(W,2),st=g(me,2),ot=g(st,4),Ze=g(ot,2),lt=g(Ze,2),Ce=g(lt,2),dt=g(Ce,2),Ur=f(dt),pn=f(Ur);Et(pn,{class:"w-4 h-4"}),le(()=>{P(se,"href",`${n??""}youtube-to-mp3/`),P(ge,"href",`${n??""}youtube-to-mp4/`),P(it,"href",`${n??""}youtube-shorts-downloader/`),P(Ft,"href",`${n??""}youtube-video-downloader/`),P(Yr,"href",`${n??""}tiktok-video-downloader-no-watermark/`),P(Fr,"href",`${n??""}instagram-reels-downloader/`),P(ur,"href",`${n??""}facebook-video-downloader/`),P(W,"href",`${n??""}pinterest-video-downloader/`),P(me,"href",`${n??""}linkedin-video-downloader/`),P(st,"href",`${n??""}how-to-download-youtube-videos/`),P(ot,"href",`${n??""}about/`),P(Ze,"href",`${n??""}contact/`),P(lt,"href",`${n??""}privacy-policy/`),P(Ce,"href",`${n??""}terms/`)}),we("click",Ur,()=>{N(r,!1),a("downloader")}),S(F,q)};fe(Te,F=>{w(r)&&F(Me)})}le(()=>{P(l,"href",n),P(h,"href",`${n??""}youtube-to-mp3/`),P(m,"href",`${n??""}youtube-to-mp4/`),P(x,"href",`${n??""}youtube-shorts-downloader/`),P(b,"href",`${n??""}youtube-video-downloader/`),P(k,"href",`${n??""}tiktok-video-downloader-no-watermark/`),P(E,"href",`${n??""}instagram-reels-downloader/`)}),we("click",M,()=>a("platforms")),we("click",T,()=>a("downloader")),we("click",V,()=>N(r,!w(r))),S(e,i),Yt()}var Pa,Aa,ja,La;const j={cnvmp3Url:"https://cnvmp3.com/v55",ytAiUrl:"https://melamrahul.github.io/yt-ai/en/",reclipUrl:((Aa=(Pa=import.meta)==null?void 0:Pa.env)==null?void 0:Aa.VITE_RECLIP_URL)||"https://cnvmp3.com/v55",mode:((La=(ja=import.meta)==null?void 0:ja.env)==null?void 0:La.VITE_INTEGRATION_MODE)||"local",smartlinkUrl:"https://garretebonylosing.com/jhky4egutd?key=d9ca9399efd5ec18febfadefd48f7ed5",monetag:{enabled:!0,verificationCode:"",scriptUrl:"https://quge5.com/88/tag.min.js",zoneId:"292461"},affiliate:{vpn:{enabled:!0,provider:"NordVPN",badge:"Recommended for HD Media & Privacy",title:"Fast & Anonymous Video Downloads",subtitle:"Bypass video geo-restrictions on YouTube & TikTok while preventing ISP download throttling.",discount:"72% OFF + 3 Mo Free",url:"https://go.nordvpn.net/aff_c?offer_id=15&aff_id=105436"}},adsterra:{bannerKey:"aac61e386ccb0a0d5fc7c47dfae348c5",skyscraperLeftKey:"aac61e386ccb0a0d5fc7c47dfae348c5",skyscraperRightKey:"aac61e386ccb0a0d5fc7c47dfae348c5",bottomBanners:[{key:"51c98c7aa5238d0b1a5c89df57d76b38",width:468,height:60,name:"Standard Banner"},{key:"f7e6c176369f08d9c6d9583ab92cd815",width:300,height:250,name:"Medium Rectangle"},{key:"f4f050a94fd8eb52f74dd6f2b2e6a7de",width:160,height:600,name:"Wide Skyscraper"},{key:"abd72035fe8df44719891373f6af85f8",width:160,height:300,name:"Half Skyscraper"},{key:"d1dfc5353b46af042f806c8c2c1108dc",width:320,height:50,name:"Mobile Leaderboard"}]},referral:{enabled:!0,inviteUrl:"https://beta.publishers.adsterra.com/referral/jd2AQmNfHi",banners:{leaderboard:{src:"https://landings-cdn.adsterratech.com/referralBanners/gif/720x90_adsterra_reff.gif",width:720,height:90},rectangle:{src:"https://landings-cdn.adsterratech.com/referralBanners/gif/300x250_adsterra_reff.gif",width:300,height:250},skyscraper:{src:"https://landings-cdn.adsterratech.com/referralBanners/gif/160x600_adsterra_reff.gif",width:160,height:600}}},appName:"LinkSave",version:"1.0.0-MVP"};var sl=O('<div class="p-3 sm:p-4 rounded-2xl bg-gradient-to-r from-indigo-950/70 via-slate-900/90 to-blue-950/70 border border-indigo-500/30 shadow-lg text-left transition-all group"><div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3"><div class="flex items-start sm:items-center gap-3"><div class="w-9 h-9 rounded-xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center shrink-0 mt-0.5 sm:mt-0 group-hover:scale-105 transition-transform"><!></div> <div><div class="flex items-center gap-2 mb-1"><span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 text-[10px] font-bold uppercase tracking-wider border border-indigo-500/30"><span class="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span> Download Tip</span> <span class="px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-500/30"> </span></div> <h3 class="text-white font-bold text-xs sm:text-sm tracking-tight">Video blocked in your region or downloading slow?</h3> <p class="text-slate-400 text-[11px] sm:text-xs leading-relaxed mt-0.5"> </p></div></div> <a target="_blank" rel="nofollow noopener noreferrer" class="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 via-blue-600 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 active:scale-95 text-white font-bold text-xs sm:text-sm shadow-md shadow-indigo-600/30 transition-all cursor-pointer shrink-0"><span>Bypass Geo-Blocks</span> <!></a></div></div>'),ol=O('<div class="mt-3 p-3 rounded-xl bg-slate-900 border border-slate-700/80 text-xs text-slate-300 flex items-start gap-2.5 animate-fade-in"><span class="text-emerald-400 text-base leading-none">📱</span> <div><span class="font-semibold text-white">How to Install:</span> Tap your browser menu (or the <strong class="text-white">Share</strong> button in Safari), then select <strong class="text-emerald-400">"Add to Home Screen"</strong>.</div></div>'),ll=O('<div class="mt-3 p-4 sm:p-5 rounded-2xl bg-black/70 border border-slate-800 shadow-xl text-left transition-all"><div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3"><h3 class="text-white font-bold text-sm sm:text-base tracking-tight">Install LinkSave as App (<span class="text-emerald-400">&lt;1mb</span> size only)</h3> <button type="button" class="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-[#16a34a] hover:bg-[#15803d] active:scale-95 text-white font-bold text-xs sm:text-sm shadow-md shadow-emerald-900/30 transition-all cursor-pointer shrink-0">Add to Home Screen</button></div> <div class="border-t border-slate-800/80 my-3"></div> <p class="text-slate-400 text-xs sm:text-sm leading-relaxed">Install LinkSave on your device for instant access, a full-screen experience, and faster loading times without opening your browser.</p> <!></div>'),dl=O('<div class="mt-3 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-950/70 via-slate-900/90 to-indigo-950/70 border border-blue-500/40 shadow-xl text-left transition-all"><div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3"><div class="flex items-center gap-3"><div class="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center shrink-0"><svg class="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg></div> <div><span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-[10px] font-bold uppercase tracking-wider mb-1">Detected Microsoft Edge</span> <h3 class="text-white font-bold text-sm sm:text-base tracking-tight">Download Videos with 1-Click using LinkSave Extension</h3></div></div> <a href="https://microsoftedge.microsoft.com/addons/detail/linksave-video-audio-/ipneiigdjchdffpkailbdajdihcpgigd" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 active:scale-95 text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-600/30 transition-all cursor-pointer shrink-0"><span>Get on Edge Add-ons</span> <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a></div> <div class="border-t border-slate-800/80 my-3"></div> <p class="text-slate-400 text-xs sm:text-sm leading-relaxed">Adds a native "Download" button right on YouTube and Instagram videos so you never have to copy-paste URLs.</p></div>'),cl=O(`<section id="downloader" class="relative max-w-4xl mx-auto px-0 sm:px-4 pt-3 sm:pt-6 pb-6 sm:pb-12 w-full"><div class="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl blur-2xl opacity-25"></div> <div class="relative bg-slate-900/90 border border-slate-800/90 rounded-2xl sm:rounded-3xl p-3.5 sm:p-8 md:p-10 shadow-2xl backdrop-blur-xl w-full"><div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-800/80"><div class="flex items-center gap-2.5"><div class="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center shadow-md shadow-blue-500/20 shrink-0"><!></div> <div><h2 class="text-sm sm:text-lg font-extrabold text-white leading-tight flex flex-wrap items-center gap-2"><span>LinkSave Converter</span> <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold"><span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> <span>Pro Engine Active</span></span></h2> <p class="text-[11px] sm:text-xs text-slate-400">Format transcoder &amp; audio extractor for public links</p></div></div></div> <div class="space-y-3 sm:space-y-4 animate-fade-in"><div class="flex items-center justify-between text-xs text-slate-400 px-3 py-2 bg-slate-950/60 rounded-xl border border-slate-800/80 gap-2"><div class="flex items-center gap-2 min-w-0"><span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span> <span class="font-semibold text-slate-200 text-[11px] sm:text-xs truncate">Format Transcoder Engine</span></div> <button class="inline-flex items-center gap-1.5 px-2 py-1 rounded-lg bg-slate-800 text-slate-300 hover:text-white text-[10px] sm:text-xs font-medium transition border border-slate-700 hover:bg-slate-700 shrink-0"><!> <span>Refresh Engine</span></button></div> <div><div class="absolute top-0 left-0 right-0 h-3 bg-gradient-to-b from-[#0A0F1D] to-transparent z-10 pointer-events-none"></div> <iframe title="LinkSave Media Engine" scrolling="no" class="w-full border-0 absolute left-0 overflow-hidden iframe-crop svelte-1a8aqf5" loading="lazy" sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups" allow="clipboard-write; clipboard-read"></iframe> <div class="absolute bottom-0 left-0 right-0 h-10 sm:h-12 bg-gradient-to-t from-[#0A0F1D] via-[#0A0F1D]/90 to-transparent z-10 pointer-events-none"></div></div> <div class="grid grid-cols-2 gap-3 pt-1"><button type="button" class="w-full py-2.5 px-3 rounded-xl border-2 border-cyan-400 bg-slate-950/80 hover:bg-cyan-500/10 text-white font-bold text-xs sm:text-sm transition-all duration-200 flex items-center justify-center active:scale-95 shadow-lg shadow-cyan-500/10 cursor-pointer">Bitrate/Quality</button> <button type="button" class="w-full py-2.5 px-3 rounded-xl border-2 border-emerald-500 bg-slate-950/80 hover:bg-emerald-500/10 text-white font-bold text-xs sm:text-sm transition-all duration-200 flex items-center justify-center active:scale-95 shadow-lg shadow-emerald-500/10 cursor-pointer">MP3 / MP4</button></div> <!> <!> <!></div> <div class="mt-4 pt-3 border-t border-slate-800/60 text-center flex items-center justify-center gap-2 text-[10px] sm:text-[11px] text-slate-400"><!> <span>Notice: Please only download media you own or have explicit
        authorization to download.</span></div></div></section>`);function fl(e,t){var ur;Vt(t,!1);const r=Z(),n=(ur=j==null?void 0:j.affiliate)==null?void 0:ur.vpn;let a=Z(""),i=j.cnvmp3Url||j.reclipUrl,s=Z(!1),o=Z(!1),l=null,d=Z(null),u=null,p=Z(!1),c=Z(!1),h=Z(!1);Di(()=>{if(typeof window<"u"){N(h,/Edg\//i.test(navigator.userAgent));const W=new URLSearchParams(window.location.search),me=W.get("url")||"",st=W.get("text")||"",ot=W.get("title")||"";if(me&&/^https?:\/\//i.test(me.trim()))N(a,me.trim());else{const dt=`${st} ${ot}`.match(/https?:\/\/[^\s]+/i);dt?N(a,dt[0]):me&&N(a,me)}(window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone===!0)&&N(p,!0);const Ze=Ce=>{Ce.preventDefault(),u=Ce},lt=()=>{N(p,!0),u=null};return window.addEventListener("beforeinstallprompt",Ze),window.addEventListener("appinstalled",lt),()=>{window.removeEventListener("beforeinstallprompt",Ze),window.removeEventListener("appinstalled",lt)}}});async function m(){if(u)try{u.prompt();const W=await u.userChoice;W&&W.outcome==="accepted"&&N(p,!0),u=null}catch(W){console.error(W)}else N(c,!w(c))}function x(){N(o,!0),l&&clearTimeout(l),l=setTimeout(()=>{N(o,!1)},2500)}function b(){if(w(d)){N(s,!0);const W=w(r);ca(d,w(d).src=""),setTimeout(()=>{w(d)&&ca(d,w(d).src=W),N(s,!1)},150)}}Oo(()=>{l&&clearTimeout(l)}),Oe(()=>w(a),()=>{N(r,w(a)?`${i}${i.includes("?")?"&":"?"}url=${encodeURIComponent(w(a))}`:i)}),Jn(),fr();var k=cl(),E=g(f(k),2),M=f(E),y=f(M),_=f(y),$=f(_);Et($,{class:"w-4 h-4 sm:w-5 sm:h-5 text-white"});var T=g(M,2),A=f(T),H=g(f(A),2),V=f(H);{let W=Nr(()=>w(s)?"animate-spin text-blue-400":"");rl(V,{get class(){return`w-3 h-3 sm:w-3.5 sm:h-3.5 ${w(W)??""}`}})}var L=g(A,2),R=g(f(L),2);Ro(R,W=>N(d,W),()=>w(d));var ae=g(L,2),Te=f(ae),Me=g(Te,2),F=g(ae,2);{var q=W=>{var me=sl(),st=f(me),ot=f(st),Ze=f(ot),lt=f(Ze);Ci(lt,{class:"w-4 h-4 text-cyan-400"});var Ce=g(Ze,2),dt=f(Ce),Ur=g(f(dt),2),pn=f(Ur),zi=g(dt,4),Oi=f(zi),ia=g(ot,2),Vi=g(f(ia),2);sn(Vi,{class:"w-3.5 h-3.5"}),le(()=>{ie(pn,xe(()=>n.discount||"72% OFF")),ie(Oi,`Bypass YouTube & TikTok geo-blocks and prevent ISP download throttling with ${xe(()=>n.provider||"NordVPN")??""}.`),P(ia,"href",xe(()=>n.url||"https://go.nordvpn.net/aff_c?offer_id=15&aff_id=105436"))}),S(W,me)};fe(F,W=>{xe(()=>n==null?void 0:n.enabled)&&W(q)})}var se=g(F,2);{var ge=W=>{var me=ll(),st=f(me),ot=g(f(st),2),Ze=g(st,6);{var lt=Ce=>{var dt=ol();S(Ce,dt)};fe(Ze,Ce=>{w(c)&&Ce(lt)})}we("click",ot,m),S(W,me)};fe(se,W=>{w(p)||W(ge)})}var it=g(se,2);{var Ft=W=>{var me=dl();S(W,me)};fe(it,W=>{w(h)&&W(Ft)})}var Yr=g(T,2),Fr=f(Yr);Ri(Fr,{class:"w-3.5 h-3.5 text-amber-400 shrink-0"}),le(()=>{Ot(L,1,`relative w-full ${w(o)?"h-[350px] sm:h-[320px]":"h-[200px] sm:h-[185px]"} rounded-2xl overflow-hidden bg-[#0A0F1D] border border-slate-800 shadow-2xl group transition-all duration-300 ease-in-out`),P(R,"src",w(r))}),we("click",H,b),we("click",Te,x),we("click",Me,x),S(e,k),Yt()}var ul=O('<section id="hero" class="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden"><div class="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div> <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-600/20 via-indigo-600/20 to-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"><div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-blue-400 text-xs sm:text-sm font-medium mb-6 shadow-md backdrop-blur-sm animate-fade-in"><!> <span class="text-slate-300">Save Videos. Simply.</span> <span class="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span></div> <h1 class="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-[1.15]">YOUTUBE TO MP3 &amp; <br class="hidden sm:block"/> <span class="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">MP4 VIDEO CONVERTER</span></h1> <p class="mt-6 text-base sm:text-xl text-slate-400 max-w-2xl mx-auto font-normal leading-relaxed">Fast, free online video converter to convert YouTube to MP3 (320kbps) and save YouTube Shorts &amp; HD MP4 videos on mobile and desktop.</p> <div class="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-semibold text-slate-300"><div class="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800"><!> <span>YouTube to MP3 (320kbps)</span></div> <div class="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800"><!> <span>YouTube to MP4 (1080p HD)</span></div> <div class="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800"><!> <span>YouTube Shorts Downloader</span></div> <div class="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800"><!> <span>Mobile Friendly</span></div></div> <div class="mt-10"><!></div></div></section>');function vl(e){var t=ul(),r=g(f(t),4),n=f(r),a=f(n);Et(a,{class:"w-4 h-4 text-blue-400"});var i=g(n,6),s=f(i),o=f(s);aa(o,{class:"w-4 h-4 text-amber-400"});var l=g(s,2),d=f(l);Vr(d,{class:"w-4 h-4 text-emerald-400"});var u=g(l,2),p=f(u);Et(p,{class:"w-4 h-4 text-purple-400"});var c=g(u,2),h=f(c);Ii(h,{class:"w-4 h-4 text-blue-400"});var m=g(i,2),x=f(m);fl(x,{}),S(e,t)}var pl=O('<section id="extension" class="py-12 md:py-20 bg-slate-950/80 border-t border-slate-900 relative overflow-hidden"><div class="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-tr from-blue-600/15 via-indigo-600/10 to-transparent rounded-full blur-[100px] pointer-events-none"></div> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"><div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"><div class="lg:col-span-7 space-y-6 text-left"><div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs sm:text-sm font-semibold shadow-sm"><!> <span>Official Browser Extension</span> <span class="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span></div> <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">LinkSave for <span class="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">Microsoft Edge</span></h2> <p class="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">Prefer downloading videos with zero copy-pasting? Install our verified Microsoft Edge add-on to inject a sleek 1-click Download button directly inside YouTube and Instagram.</p> <div class="space-y-3 pt-2"><div class="flex items-start gap-3"><!> <p class="text-xs sm:text-sm text-slate-300"><strong class="text-white">YouTube & Shorts 1-Click Button:</strong> Adds a native blue Download button next to video actions for instant HD MP4 and MP3 audio downloads.</p></div> <div class="flex items-start gap-3"><!> <p class="text-xs sm:text-sm text-slate-300"><strong class="text-white">Instagram Reels Integration:</strong> Save reels and videos directly to your device with one tap.</p></div> <div class="flex items-start gap-3"><!> <p class="text-xs sm:text-sm text-slate-300"><strong class="text-white">100% Free & Verified:</strong> Officially approved and hosted on the Microsoft Edge Add-ons store with automatic updates.</p></div></div> <div class="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4"><a target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 active:scale-95 text-white font-bold text-sm sm:text-base shadow-xl shadow-blue-600/30 transition-all duration-200 cursor-pointer"><span>Get on Microsoft Edge Add-ons</span> <!></a> <div class="flex items-center gap-1.5 text-xs text-slate-400"><!> <span>Version 1.0.0 • Free & Safe</span></div></div></div> <div class="lg:col-span-5"><a target="_blank" rel="noopener noreferrer" class="block group relative rounded-2xl p-2 bg-gradient-to-b from-slate-800 to-slate-900 border border-slate-700/80 shadow-2xl hover:border-blue-500/50 transition-all duration-300 overflow-hidden" title="Open LinkSave on Microsoft Edge Add-ons"><div class="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 pointer-events-none"></div> <div class="relative rounded-xl overflow-hidden bg-slate-950"><img src="/edge-addon-store.png" alt="LinkSave - Video &amp; Audio Downloader on Microsoft Edge Add-ons Store" class="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-300" loading="lazy"/> <div class="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/5 transition-colors duration-300 pointer-events-none"></div></div> <div class="p-3 text-center flex items-center justify-between text-xs text-slate-400"><span class="font-medium text-slate-300 flex items-center gap-1.5"><span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Live on Edge Add-ons</span> <span class="text-blue-400 group-hover:text-blue-300 font-semibold flex items-center gap-1"><span>Install Add-on</span> <!></span></div></a></div></div></div></section>');function hl(e){const t="https://microsoftedge.microsoft.com/addons/detail/linksave-video-audio-/ipneiigdjchdffpkailbdajdihcpgigd";var r=pl(),n=g(f(r),2),a=f(n),i=f(a),s=f(i),o=f(s);Et(o,{class:"w-3.5 h-3.5 text-blue-400"});var l=g(s,6),d=f(l),u=f(d);Xr(u,{class:"w-5 h-5 text-emerald-400 shrink-0 mt-0.5"});var p=g(d,2),c=f(p);Xr(c,{class:"w-5 h-5 text-emerald-400 shrink-0 mt-0.5"});var h=g(p,2),m=f(h);Xr(m,{class:"w-5 h-5 text-emerald-400 shrink-0 mt-0.5"});var x=g(l,2),b=f(x);P(b,"href",t);var k=g(f(b),2);sn(k,{class:"w-4 h-4"});var E=g(b,2),M=f(E);Vr(M,{class:"w-4 h-4 text-blue-400"});var y=g(i,2),_=f(y);P(_,"href",t);var $=g(f(_),4),T=g(f($),2),A=g(f(T),2);sn(A,{class:"w-3 h-3"}),S(e,r)}var gl=O('<div class="relative group bg-slate-900/90 border border-slate-800/90 rounded-3xl p-8 hover:border-blue-500/50 hover:bg-slate-900 transition-all duration-300 shadow-xl flex flex-col justify-between"><div><div class="flex items-center justify-between mb-6"><div><div class="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center"><!></div></div> <span class="text-4xl font-black text-slate-800 group-hover:text-blue-500/30 transition-colors"> </span></div> <h3 class="text-xl font-bold text-white tracking-tight"> </h3> <p class="text-xs font-semibold text-blue-400 uppercase tracking-wider mt-0.5"> </p> <p class="mt-4 text-sm text-slate-400 leading-relaxed"> </p></div> <div class="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-slate-400"><span></span> <!></div></div>'),ml=O('<section id="how-it-works" class="py-16 md:py-24 relative overflow-hidden"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"><div class="text-center max-w-3xl mx-auto mb-16"><span class="text-xs font-extrabold uppercase tracking-widest text-blue-400">Simple Process</span> <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">How LinkSave Works</h2> <p class="mt-3 text-base text-slate-400">Downloading your favorite media takes only a few seconds with 3 simple steps.</p></div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8 relative"></div></div></section>');function bl(e){const t=[{number:"01",title:"1. Paste Link",subtitle:"Copy Video or Shorts URL",description:"Copy the URL of any YouTube video, YouTube Shorts, or supported media link, then paste it into LinkSave.",icon:Ko,gradient:"from-blue-500 to-indigo-500"},{number:"02",title:"2. Select Format",subtitle:"MP3 Audio or HD MP4",description:"Choose your desired output format: convert to 320kbps high-quality MP3 audio or Full HD 1080p MP4 video.",icon:Qo,gradient:"from-indigo-500 to-purple-500"},{number:"03",title:"3. Save & Download",subtitle:"Instant Free Download",description:"Click Download to save the converted MP3 or MP4 file directly to your mobile phone or computer.",icon:na,gradient:"from-purple-500 to-pink-500"}];var r=ml(),n=f(r),a=g(f(n),2);Or(a,5,()=>t,zr,(i,s,o)=>{var l=gl(),d=f(l),u=f(d),p=f(u),c=f(p),h=f(c);Ti(h,()=>w(s).icon,(V,L)=>{L(V,{class:"w-6 h-6 text-white"})});var m=g(p,2),x=f(m),b=g(u,2),k=f(b),E=g(b,2),M=f(E),y=g(E,2),_=f(y),$=g(d,2),T=f($);T.textContent=`Step ${o+1} of 3`;var A=g(T,2);{var H=V=>{Bo(V,{class:"w-4 h-4 text-blue-400 hidden md:block"})};fe(A,V=>{o<2&&V(H)})}le(()=>{Ot(p,1,`w-14 h-14 rounded-2xl bg-gradient-to-tr ${w(s).gradient??""} p-0.5 shadow-lg group-hover:scale-110 transition-transform`),ie(x,w(s).number),ie(k,w(s).title),ie(M,w(s).subtitle),ie(_,w(s).description)}),S(i,l)}),S(e,r)}var xl=O('<div class="bg-slate-900/80 border border-slate-800/80 rounded-2xl p-6 hover:border-slate-700 hover:bg-slate-900 transition-all duration-300 shadow-md"><div><!></div> <h3 class="text-lg font-bold text-white tracking-tight"> </h3> <p class="mt-2 text-sm text-slate-400 leading-relaxed"> </p></div>'),wl=O('<section id="features" class="py-16 md:py-24 bg-slate-950/70 border-t border-slate-900"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center max-w-3xl mx-auto mb-16"><span class="text-xs font-extrabold uppercase tracking-widest text-blue-400">Why Choose LinkSave</span> <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">Designed for Speed & Simplicity</h2> <p class="mt-3 text-base text-slate-400">Everything you need to convert & save media videos effortlessly.</p></div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"></div></div></section>');function _l(e){const t=[{title:"High Definition Quality",description:"Save videos in original full resolution up to 1080p Full HD, 2K, and 4K without quality loss.",icon:Et,color:"text-amber-400",bg:"bg-amber-500/10"},{title:"YouTube to MP3 320kbps",description:"Convert video to MP3 with our free online audio converter and extract high-bitrate 320kbps audio files.",icon:tl,color:"text-purple-400",bg:"bg-purple-500/10"},{title:"YouTube Shorts Downloader",description:"Download your YouTube Shorts and vertical videos in clean Full HD MP4 format with fast speeds.",icon:aa,color:"text-blue-400",bg:"bg-blue-500/10"},{title:"YouTube Downloader for Mobile",description:"Fully responsive for smartphones—download videos & MP3 seamlessly on iPhone (Safari) and Android (Chrome).",icon:Ii,color:"text-cyan-400",bg:"bg-cyan-500/10"},{title:"100% Free & Unlimited",description:"No hidden subscription fees, no limits on daily video downloads, and no registration required.",icon:Zo,color:"text-emerald-400",bg:"bg-emerald-500/10"},{title:"Safe Offline Backups",description:"Easily save your own YouTube videos for offline viewing or backup. No logs stored and no software needed.",icon:Ni,color:"text-rose-400",bg:"bg-rose-500/10"}];var r=wl(),n=f(r),a=g(f(n),2);Or(a,5,()=>t,zr,(i,s)=>{var o=xl(),l=f(o),d=f(l);Ti(d,()=>w(s).icon,(m,x)=>{x(m,{get class(){return`w-6 h-6 ${w(s).color??""}`}})});var u=g(l,2),p=f(u),c=g(u,2),h=f(c);le(()=>{Ot(l,1,`w-12 h-12 rounded-xl ${w(s).bg??""} flex items-center justify-center mb-5`),ie(p,w(s).title),ie(h,w(s).description)}),S(i,o)}),S(e,r)}var yl=O('<a class="group block relative bg-slate-900/80 border border-slate-800/80 rounded-2xl p-5 hover:border-blue-500/50 hover:bg-slate-900 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500/50"><div class="flex items-start justify-between"><div class="w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-slate-950 border border-slate-800 shadow-inner group-hover:scale-110 transition-transform"> </div> <span> </span></div> <div class="mt-4"><h3 class="text-lg font-bold text-white group-hover:text-blue-400 transition-colors flex items-center gap-1.5"><span> </span></h3> <p class="text-xs text-slate-400 mt-1 flex items-center gap-1"><!> <span> </span></p></div></a>'),kl=O('<section id="platforms" class="py-16 md:py-24 bg-slate-950/60 border-y border-slate-900"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center max-w-3xl mx-auto mb-12"><div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-4"><span>Cross-Platform Media Engine</span></div> <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Supported Platforms &amp; Converters</h2> <p class="mt-3 text-base text-slate-400">Convert and download media from any of the major video and social platforms with dedicated speed engines.</p></div> <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"></div> <div class="mt-8 text-center text-xs text-slate-500 flex items-center justify-center gap-1.5 max-w-xl mx-auto"><!> <span>* Downloads are strictly intended for personal, copyright-compliant content and public media.</span></div></div></section>');function $l(e){const t=[{name:"YouTube to MP3",tag:"320kbps Audio",bgColor:"bg-emerald-500/10 border-emerald-500/20 text-emerald-400",icon:"🎧",formats:"320kbps Audio Stream",url:"/youtube-to-mp3/"},{name:"YouTube to MP4",tag:"1080p Full HD",bgColor:"bg-blue-500/10 border-blue-500/20 text-blue-400",icon:"🎬",formats:"HD & 1080p MP4",url:"/youtube-to-mp4/"},{name:"YouTube Shorts",tag:"Vertical Video",bgColor:"bg-red-600/10 border-red-600/20 text-red-400",icon:"⚡",formats:"Full HD Shorts",url:"/youtube-shorts-downloader/"},{name:"YouTube Video",tag:"HD & 4K MP4",bgColor:"bg-red-500/10 border-red-500/20 text-red-400",icon:"▶️",formats:"Up to 4K MP4",url:"/youtube-video-downloader/"},{name:"TikTok",tag:"No Watermark",bgColor:"bg-cyan-500/10 border-cyan-500/20 text-cyan-400",icon:"🎵",formats:"HD Video & MP3",url:"/tiktok-video-downloader-no-watermark/"},{name:"Instagram",tag:"Reels & Stories",bgColor:"bg-pink-500/10 border-pink-500/20 text-pink-400",icon:"📸",formats:"1080p MP4",url:"/instagram-reels-downloader/"},{name:"Facebook",tag:"Public Videos",bgColor:"bg-blue-600/10 border-blue-600/20 text-blue-400",icon:"📘",formats:"HD & SD MP4",url:"/facebook-video-downloader/"},{name:"Pinterest",tag:"Idea Pins",bgColor:"bg-rose-600/10 border-rose-600/20 text-rose-400",icon:"📌",formats:"Pin Clips & GIF",url:"/pinterest-video-downloader/"}];var r=kl(),n=f(r),a=g(f(n),2);Or(a,5,()=>t,zr,(o,l)=>{var d=yl(),u=f(d),p=f(u),c=f(p),h=g(p,2),m=f(h),x=g(u,2),b=f(x),k=f(b),E=f(k),M=g(b,2),y=f(M);Xr(y,{class:"w-3.5 h-3.5 text-emerald-400 shrink-0"});var _=g(y,2),$=f(_);le(()=>{P(d,"href",w(l).url),ie(c,w(l).icon),Ot(h,1,`px-2.5 py-1 rounded-full text-[11px] font-bold border ${w(l).bgColor??""}`),ie(m,w(l).tag),ie(E,w(l).name),ie($,w(l).formats)}),S(o,d)});var i=g(a,2),s=f(i);Ri(s,{class:"w-4 h-4 text-slate-400 shrink-0"}),S(e,r)}var Sl=O('<div class="px-5 pb-6 sm:px-6 text-sm text-slate-400 leading-relaxed border-t border-slate-800/60 pt-4"> </div>'),El=O('<div class="bg-slate-900/90 border border-slate-800/90 rounded-2xl overflow-hidden transition-all duration-200"><button class="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 text-white font-bold text-base sm:text-lg hover:text-blue-400 focus:outline-none"><span> </span> <div class="w-8 h-8 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center shrink-0"><!></div></button> <!></div>'),Tl=O('<section id="faq" class="py-16 md:py-24"><div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-12"><div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 mb-3"><!> <span>Got Questions?</span></div> <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Frequently Asked Questions</h2> <p class="mt-2 text-sm text-slate-400">Everything you need to know about using LinkSave online video downloader.</p></div> <div class="space-y-4"></div></div></section>');function Ml(e){let t=Z(0);const r=[{q:"How to use LinkSave as a YouTube to MP3 converter online?",a:"To convert video to MP3, copy the YouTube video or Shorts link from your browser or mobile app, paste it into the LinkSave search box, and select the MP3 audio format. Our free online audio converter extracts high-quality 320kbps MP3 audio in seconds."},{q:"How to convert YouTube to MP4 in 1080p Full HD online?",a:"Copy the YouTube video URL, paste it into LinkSave, and select MP4 format. You can download videos in original high resolutions including 1080p Full HD, 720p, or 4K with no watermark and zero compression."},{q:"How do I download YouTube Shorts on mobile phones?",a:'LinkSave is an optimized YouTube video downloader for mobile. On iPhone (Safari) or Android (Chrome), tap Share on any YouTube Shorts video, select "Copy link", paste it into LinkSave, and tap Download.'},{q:"Can I save my own YouTube videos for offline backup?",a:"Yes! Content creators and users can easily save their own YouTube videos and download their YouTube Shorts for offline backup, archiving, or repurposing audio tracks without installing any software."},{q:"What audio bitrates are supported for YouTube to MP3 conversion?",a:"LinkSave supports multiple audio bitrates up to 320kbps (studio high fidelity), as well as 256kbps, 192kbps, and 128kbps, giving you the best balance between audio quality and file size."},{q:"Is this online video converter completely free?",a:"Yes. LinkSave provides an entirely free online video converter and audio extractor. There are no daily download limits, no subscription fees, and no registration required."}];function n(u){N(t,w(t)===u?null:u)}var a=Tl(),i=f(a),s=f(i),o=f(s),l=f(o);Wo(l,{class:"w-3.5 h-3.5"});var d=g(s,2);Or(d,5,()=>r,zr,(u,p,c)=>{var h=El(),m=f(h),x=f(m),b=f(x),k=g(x,2),E=f(k);{let _=Nr(()=>w(t)===c?"rotate-180 text-blue-400":"");qo(E,{get class(){return`w-4 h-4 text-slate-400 transition-transform duration-300 ${w(_)??""}`}})}var M=g(m,2);{var y=_=>{var $=Sl(),T=f($);le(()=>ie(T,w(p).a)),S(_,$)};fe(M,_=>{w(t)===c&&_(y)})}le(()=>ie(b,w(p).q)),we("click",m,()=>n(c)),S(u,h)}),S(e,a)}var Pl=O('<footer class="bg-slate-950 border-t border-slate-900 text-slate-400 pt-12 pb-8"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"><div class="space-y-4"><div class="flex items-center gap-3"><div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md"><!></div> <span class="text-xl font-extrabold text-white tracking-tight">LinkSave</span></div> <p class="text-xs text-slate-400 leading-relaxed">Fast and free online video downloader and high-bitrate MP3 audio converter. Safe, browser-based media conversion with no registration and no software installation required.</p> <div class="pt-1"><a href="https://microsoftedge.microsoft.com/addons/detail/linksave-video-audio-/ipneiigdjchdffpkailbdajdihcpgigd" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 hover:text-blue-300 transition"><span>Official Edge Browser Add-on</span></a></div></div> <div><h4 class="text-sm font-bold text-white uppercase tracking-wider mb-4">Video Downloaders</h4> <ul class="space-y-2 text-xs"><li><a href="/youtube-video-downloader/" class="hover:text-white hover:underline transition">YouTube Video Downloader</a></li> <li><a href="/youtube-shorts-downloader/" class="hover:text-white hover:underline transition">YouTube Shorts Downloader</a></li> <li><a href="/tiktok-video-downloader-no-watermark/" class="hover:text-white hover:underline transition">TikTok Downloader (No Watermark)</a></li> <li><a href="/instagram-reels-downloader/" class="hover:text-white hover:underline transition">Instagram Reels Downloader</a></li> <li><a href="/facebook-video-downloader/" class="hover:text-white hover:underline transition">Facebook Video Downloader</a></li> <li><a href="/pinterest-video-downloader/" class="hover:text-white hover:underline transition">Pinterest Video Downloader</a></li> <li><a href="/linkedin-video-downloader/" class="hover:text-white hover:underline transition">LinkedIn Video Downloader</a></li></ul></div> <div><h4 class="text-sm font-bold text-white uppercase tracking-wider mb-4">Audio &amp; Converters</h4> <ul class="space-y-2 text-xs"><li><a href="/youtube-to-mp3/" class="hover:text-white hover:underline transition">YouTube to MP3 (320kbps)</a></li> <li><a href="/youtube-to-mp4/" class="hover:text-white hover:underline transition">YouTube to MP4 (1080p HD)</a></li> <li><a href="/how-to-download-youtube-videos/" class="hover:text-white hover:underline transition">Download Guide &amp; FAQ</a></li> <li><button class="hover:text-white hover:underline transition text-left cursor-pointer">Live Converter Engine</button></li> <li><button class="hover:text-white hover:underline transition text-left cursor-pointer">Supported Formats</button></li></ul></div> <div><h4 class="text-sm font-bold text-white uppercase tracking-wider mb-4">Company &amp; Legal</h4> <ul class="space-y-2 text-xs"><li><a href="/about/" class="hover:text-white hover:underline transition block">About LinkSave</a></li> <li><a href="/contact/" class="hover:text-white hover:underline transition block">Contact &amp; DMCA Inquiries</a></li> <li><a href="/privacy-policy/" class="hover:text-white hover:underline transition block">Privacy Policy</a></li> <li><a href="/terms/" class="hover:text-white hover:underline transition block">Terms of Service</a></li></ul> <p class="text-[11px] text-slate-500 leading-relaxed mt-4">Notice: LinkSave is an independent web utility. Downloads are intended strictly for content you legally own, fair-use education, and public domain media.</p></div></div> <div class="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500"><p>© 2026 LinkSave. All rights reserved.</p> <div class="flex items-center gap-4"><a href="/privacy-policy/" class="hover:text-slate-300 transition">Privacy</a> <span>•</span> <a href="/terms/" class="hover:text-slate-300 transition">Terms</a> <span>•</span> <a href="/contact/" class="hover:text-slate-300 transition">Contact</a></div></div></div></footer>');function Al(e){function t(x){const b=document.getElementById(x);b&&b.scrollIntoView({behavior:"smooth"})}var r=Pl(),n=f(r),a=f(n),i=f(a),s=f(i),o=f(s),l=f(o);na(l,{class:"w-5 h-5"});var d=g(i,4),u=g(f(d),2),p=g(f(u),6),c=f(p),h=g(p,2),m=f(h);we("click",c,()=>t("downloader")),we("click",m,()=>t("platforms")),S(e,r)}var jl=O('<span class="text-[10px] text-amber-400 font-medium">Earn 5% Lifetime Revenue</span>'),Ll=O('<a target="_blank" rel="nofollow noopener noreferrer" class="inline-block transition-transform duration-200 hover:scale-[1.01] active:scale-[0.99] rounded-xl overflow-hidden border border-slate-800/80 shadow-md"><img alt="Adsterra Monetization Network" loading="lazy" class="max-w-full h-auto block rounded-xl"/></a>'),Dl=O('<iframe title="Advertisement" class="border-0 overflow-hidden max-w-full" scrolling="no" loading="lazy" sandbox="allow-scripts allow-same-origin allow-popups allow-forms"></iframe>'),Cl=O('<div><div><div class="w-full flex items-center justify-between px-2 mb-2"><span class="text-[10px] font-semibold uppercase tracking-wider text-slate-500"> </span> <!></div> <div class="w-full flex justify-center items-center overflow-hidden"><!></div></div></div>');function qr(e,t){Vt(t,!1);const r=Z(),n=Z(),a=Z(),i=Z(),s=Z(),o=Z(),l=Z();let d=pe(t,"slotType",8,"leaderboard"),u=pe(t,"type",8,"ad");Oe(()=>We(d()),()=>{N(r,d()==="rectangle")}),Oe(()=>We(u()),()=>{N(n,u()==="referral")}),Oe(()=>(w(r),w(n)),()=>{N(a,w(r)?300:w(n)?720:728)}),Oe(()=>w(r),()=>{N(i,w(r)?250:90)}),Oe(()=>(w(r),j),()=>{var $,T,A,H;N(s,w(r)?(T=($=j==null?void 0:j.referral)==null?void 0:$.banners)==null?void 0:T.rectangle:(H=(A=j==null?void 0:j.referral)==null?void 0:A.banners)==null?void 0:H.leaderboard)}),Oe(()=>j,()=>{var $;N(o,(($=j==null?void 0:j.referral)==null?void 0:$.inviteUrl)||"https://beta.publishers.adsterra.com/referral/jd2AQmNfHi")}),Oe(()=>(w(i),w(a)),()=>{N(l,`<!DOCTYPE html>
<html>
<head>
  <style>
    body { margin: 0; padding: 0; display: flex; justify-content: center; align-items: center; background: transparent; overflow: hidden; }
  </style>
</head>
<body>
  <script type="text/javascript">
    atOptions = {
      'key' : 'aac61e386ccb0a0d5fc7c47dfae348c5',
      'format' : 'iframe',
      'height' : ${w(i)},
      'width' : ${w(a)},
      'params' : {}
    };
  <\/script>
  <script type="text/javascript" src="https://www.highrevenueformat.com/aac61e386ccb0a0d5fc7c47dfae348c5/invoke.js"><\/script>
</body>
</html>`)}),Jn(),fr();var p=Cl(),c=f(p),h=f(c),m=f(h),x=f(m),b=g(m,2);{var k=$=>{var T=jl();S($,T)};fe(b,$=>{w(n)&&$(k)})}var E=g(h,2),M=f(E);{var y=$=>{var T=Ll(),A=f(T);le(()=>{P(T,"href",w(o)),P(A,"src",(w(s),xe(()=>{var H;return(H=w(s))==null?void 0:H.src}))),P(A,"width",w(a)),P(A,"height",w(i))}),S($,T)},_=$=>{var T=Dl();le(()=>{P(T,"srcdoc",w(l)),P(T,"width",w(a)),P(T,"height",w(i))}),S($,T)};fe(M,$=>{w(n)?$(y):$(_,-1)})}le(()=>{Ot(p,1,`my-6 flex justify-center text-center overflow-x-auto ${w(r)?"w-full sm:w-auto inline-flex":"w-full"}`),P(p,"data-slot-type",d()),P(p,"data-ad-type",u()),Ot(c,1,`w-full ${w(r)?"max-w-[340px] min-w-[300px]":"max-w-[760px]"} bg-slate-900/60 border border-slate-800/80 rounded-2xl p-3 flex flex-col items-center justify-center ${w(r)?"min-h-[280px]":"min-h-[120px]"} shadow-inner relative overflow-hidden`),ie(x,w(n)?"Monetization Partner":"Advertisement")}),S(e,p),Yt()}var $a=O('<a target="_blank" rel="nofollow noopener noreferrer" class="block w-[160px] h-[600px] hover:opacity-90 transition-opacity"><img alt="Join Adsterra Monetization Network" loading="lazy" class="w-[160px] h-[600px] object-cover block"/></a>'),Nl=O('<iframe title="Left Skyscraper Advertisement" class="ad-iframe svelte-ojc9ru" scrolling="no" loading="lazy" sandbox="allow-scripts allow-same-origin allow-popups allow-forms"></iframe>'),Rl=O('<aside class="side-banner-rail side-banner-left svelte-ojc9ru" aria-label="Left Skyscraper Advertisement"><div class="banner-card svelte-ojc9ru"><div class="banner-header svelte-ojc9ru"><span class="banner-tag svelte-ojc9ru"> </span> <button type="button" class="banner-close svelte-ojc9ru" aria-label="Close left advertisement"><!></button></div> <div class="banner-body svelte-ojc9ru"><!></div></div></aside>'),Il=O('<iframe title="Right Skyscraper Advertisement" class="ad-iframe svelte-ojc9ru" scrolling="no" loading="lazy" sandbox="allow-scripts allow-same-origin allow-popups allow-forms"></iframe>'),zl=O('<aside class="side-banner-rail side-banner-right svelte-ojc9ru" aria-label="Right Skyscraper Advertisement"><div class="banner-card svelte-ojc9ru"><div class="banner-header svelte-ojc9ru"><span class="banner-tag svelte-ojc9ru"> </span> <button type="button" class="banner-close svelte-ojc9ru" aria-label="Close right advertisement"><!></button></div> <div class="banner-body svelte-ojc9ru"><!></div></div></aside>'),Ol=O("<!> <!>",1);function Vl(e,t){Vt(t,!1);const r=Z(),n=Z(),a=Z(),i=Z();let s=pe(t,"leftKey",24,()=>{var y,_;return((y=j==null?void 0:j.adsterra)==null?void 0:y.skyscraperLeftKey)||((_=j==null?void 0:j.adsterra)==null?void 0:_.bannerKey)||"aac61e386ccb0a0d5fc7c47dfae348c5"}),o=pe(t,"rightKey",24,()=>{var y,_;return((y=j==null?void 0:j.adsterra)==null?void 0:y.skyscraperRightKey)||((_=j==null?void 0:j.adsterra)==null?void 0:_.bannerKey)||"aac61e386ccb0a0d5fc7c47dfae348c5"}),l=pe(t,"leftType",8,"referral"),d=pe(t,"rightType",8,"referral"),u=pe(t,"width",8,160),p=pe(t,"height",8,600),c=Z(!0),h=Z(!0);function m(y){return`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <style>
    body {
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      background: transparent;
      overflow: hidden;
      width: ${u()}px;
      height: ${p()}px;
    }
  </style>
</head>
<body>
  <script type="text/javascript">
    atOptions = {
      'key' : '${y}',
      'format' : 'iframe',
      'height' : ${p()},
      'width' : ${u()},
      'params' : {}
    };
  <\/script>
  <script type="text/javascript" src="https://www.highrevenueformat.com/${y}/invoke.js"><\/script>
</body>
</html>`}Oe(()=>j,()=>{var y;N(r,((y=j==null?void 0:j.referral)==null?void 0:y.inviteUrl)||"https://beta.publishers.adsterra.com/referral/jd2AQmNfHi")}),Oe(()=>j,()=>{var y,_,$;N(n,(($=(_=(y=j==null?void 0:j.referral)==null?void 0:y.banners)==null?void 0:_.skyscraper)==null?void 0:$.src)||"https://landings-cdn.adsterratech.com/referralBanners/gif/160x600_adsterra_reff.gif")}),Oe(()=>We(s()),()=>{N(a,m(s()))}),Oe(()=>We(o()),()=>{N(i,m(o()))}),Jn(),fr();var x=Ol(),b=B(x);{var k=y=>{var _=Rl(),$=f(_),T=f($),A=f(T),H=f(A),V=g(A,2),L=f(V);on(L,{class:"w-3 h-3"});var R=g(T,2),ae=f(R);{var Te=F=>{var q=$a(),se=f(q);le(()=>{P(q,"href",w(r)),P(se,"src",w(n)),P(se,"width",u()),P(se,"height",p())}),S(F,q)},Me=F=>{var q=Nl();le(()=>{P(q,"srcdoc",w(a)),P(q,"width",u()),P(q,"height",p())}),S(F,q)};fe(ae,F=>{l()==="referral"?F(Te):F(Me,-1)})}le(()=>ie(H,l()==="referral"?"Partner":"Ad")),we("click",V,()=>N(c,!1)),S(y,_)};fe(b,y=>{w(c)&&y(k)})}var E=g(b,2);{var M=y=>{var _=zl(),$=f(_),T=f($),A=f(T),H=f(A),V=g(A,2),L=f(V);on(L,{class:"w-3 h-3"});var R=g(T,2),ae=f(R);{var Te=F=>{var q=$a(),se=f(q);le(()=>{P(q,"href",w(r)),P(se,"src",w(n)),P(se,"width",u()),P(se,"height",p())}),S(F,q)},Me=F=>{var q=Il();le(()=>{P(q,"srcdoc",w(i)),P(q,"width",u()),P(q,"height",p())}),S(F,q)};fe(ae,F=>{d()==="referral"?F(Te):F(Me,-1)})}le(()=>ie(H,d()==="referral"?"Partner":"Ad")),we("click",V,()=>N(h,!1)),S(y,_)};fe(E,y=>{w(h)&&y(M)})}S(e,x),Yt()}var Yl=O('<section id="bottom-banners" class="max-w-7xl mx-auto px-4 my-10" aria-label="Sponsored Content"><div class="border-t border-slate-900 pt-8 mb-6 text-center"><div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800 text-[10px] font-semibold text-slate-400 uppercase tracking-widest"><span>Advertisement & Partner Network</span></div></div> <div class="flex flex-wrap items-center justify-center gap-6 mb-6"><div class="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-3 shadow-inner flex flex-col items-center max-w-full overflow-x-auto"><div class="w-full flex items-center justify-between px-2 mb-2 text-[10px] font-semibold uppercase tracking-wider text-slate-500"><span>Display Banner</span> <span>468x60</span></div> <div class="overflow-hidden flex justify-center items-center min-w-[468px]"><iframe title="Advertisement 468x60" width="468" height="60" class="border-0 overflow-hidden block" scrolling="no" loading="lazy" sandbox="allow-scripts allow-same-origin allow-popups allow-forms"></iframe></div></div> <div class="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-3 shadow-inner flex flex-col items-center max-w-full overflow-x-auto"><div class="w-full flex items-center justify-between px-2 mb-2 text-[10px] font-semibold uppercase tracking-wider text-slate-500"><span>Mobile Banner</span> <span>320x50</span></div> <div class="overflow-hidden flex justify-center items-center min-w-[320px]"><iframe title="Advertisement 320x50" width="320" height="50" class="border-0 overflow-hidden block" scrolling="no" loading="lazy" sandbox="allow-scripts allow-same-origin allow-popups allow-forms"></iframe></div></div></div> <div class="flex flex-wrap items-center justify-center gap-6"><div class="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-3 shadow-inner flex flex-col items-center min-h-[280px] w-full sm:w-auto"><div class="w-full flex items-center justify-between px-2 mb-2 text-[10px] font-semibold uppercase tracking-wider text-slate-500"><span>Rectangle Ad</span> <span>300x250</span></div> <div class="overflow-hidden flex justify-center items-center"><iframe title="Advertisement 300x250" width="300" height="250" class="border-0 overflow-hidden block" scrolling="no" loading="lazy" sandbox="allow-scripts allow-same-origin allow-popups allow-forms"></iframe></div></div> <div class="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-3 shadow-inner flex flex-col items-center min-h-[330px]"><div class="w-full flex items-center justify-between px-2 mb-2 text-[10px] font-semibold uppercase tracking-wider text-slate-500"><span>Skyscraper Ad</span> <span>160x300</span></div> <div class="overflow-hidden flex justify-center items-center"><iframe title="Advertisement 160x300" width="160" height="300" class="border-0 overflow-hidden block" scrolling="no" loading="lazy" sandbox="allow-scripts allow-same-origin allow-popups allow-forms"></iframe></div></div> <div class="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-3 shadow-inner flex flex-col items-center min-h-[630px]"><div class="w-full flex items-center justify-between px-2 mb-2 text-[10px] font-semibold uppercase tracking-wider text-slate-500"><span>Vertical Ad</span> <span>160x600</span></div> <div class="overflow-hidden flex justify-center items-center"><iframe title="Advertisement 160x600" width="160" height="600" class="border-0 overflow-hidden block" scrolling="no" loading="lazy" sandbox="allow-scripts allow-same-origin allow-popups allow-forms"></iframe></div></div></div></section>');function Fl(e){function t(y,_,$){return`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <style>
    body {
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      background: transparent;
      overflow: hidden;
      width: ${_}px;
      height: ${$}px;
    }
  </style>
</head>
<body>
  <script type="text/javascript">
    atOptions = {
      'key' : '${y}',
      'format' : 'iframe',
      'height' : ${$},
      'width' : ${_},
      'params' : {}
    };
  <\/script>
  <script type="text/javascript" src="https://garretebonylosing.com/${y}/invoke.js"><\/script>
</body>
</html>`}var r=Yl(),n=g(f(r),2),a=f(n),i=g(f(a),2),s=f(i),o=g(a,2),l=g(f(o),2),d=f(l),u=g(n,2),p=f(u),c=g(f(p),2),h=f(c),m=g(p,2),x=g(f(m),2),b=f(x),k=g(m,2),E=g(f(k),2),M=f(E);le((y,_,$,T,A)=>{P(s,"srcdoc",y),P(d,"srcdoc",_),P(h,"srcdoc",$),P(b,"srcdoc",T),P(M,"srcdoc",A)},[()=>t("51c98c7aa5238d0b1a5c89df57d76b38",468,60),()=>t("d1dfc5353b46af042f806c8c2c1108dc",320,50),()=>t("f7e6c176369f08d9c6d9583ab92cd815",300,250),()=>t("abd72035fe8df44719891373f6af85f8",160,300),()=>t("f4f050a94fd8eb52f74dd6f2b2e6a7de",160,600)]),S(e,r)}var Ul=O('<!> <h3 class="text-lg font-bold text-white">Privacy Policy</h3>',1),Hl=O('<!> <h3 class="text-lg font-bold text-white">Terms of Service</h3>',1),Bl=O('<!> <h3 class="text-lg font-bold text-white">About LinkSave</h3>',1),ql=O('<!> <h3 class="text-lg font-bold text-white">Contact & Support</h3>',1),Wl=O('<p class="font-semibold text-white">Effective Date: September 2026</p> <p>At <strong>LinkSave</strong>, accessible from <code>https://linksaves.com/</code>, the privacy of our visitors is one of our main priorities. This Privacy Policy document outlines the types of information collected and how it is used.</p> <h4 class="font-bold text-white text-base pt-2">1. Google AdSense & Third-Party Cookies</h4> <p>Google is a third-party vendor on our site. It uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to our website and other sites on the internet. Users may choose to decline the use of DART cookies by visiting the Google Ad and Content Network Privacy Policy.</p> <h4 class="font-bold text-white text-base pt-2">2. Log Files</h4> <p>LinkSave follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected includes IP addresses, browser type, ISP, date and time stamp, referring/exit pages, and number of clicks.</p> <h4 class="font-bold text-white text-base pt-2">3. CCPA & GDPR Privacy Rights</h4> <p>Under CCPA and GDPR, users have the right to request disclosure of personal data collected, request deletion of data, and opt-out of the sale of personal data. If you make a request, we have one month to respond to you.</p>',1),Kl=O('<p class="font-semibold text-white">Last Updated: September 2026</p> <p>By accessing or using <strong>LinkSave</strong>, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.</p> <h4 class="font-bold text-white text-base pt-2">1. Acceptable Use & Fair Usage</h4> <p>LinkSave is provided solely for personal, non-commercial, and fair-use educational purposes. Users must respect copyright laws and only download content they own, have explicit authorization to download, or content under creative commons and public domain licenses.</p> <h4 class="font-bold text-white text-base pt-2">2. Intellectual Property Rights & DMCA</h4> <p>LinkSave does not host, store, or re-transmit copyrighted video or audio files on its servers. All media content remains the exclusive property of their respective creators and copyright holders.</p> <h4 class="font-bold text-white text-base pt-2">3. Limitation of Liability</h4> <p>In no event shall LinkSave be liable for any indirect, incidental, or consequential damages arising out of the use or inability to use the service.</p>',1),Ql=O('<p><strong>LinkSave</strong> is a free, high-performance online media converter utility designed to help users extract video streams and high-quality MP3 audio files seamlessly for offline educational and fair-use playback.</p> <p class="pt-2">Our mission is to provide a clean, fast, and secure user experience across all web browsers and devices without forcing registration or software downloads.</p>',1),Gl=O('<p>Have questions, feedback, or business inquiries? Get in touch with our team:</p> <div class="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 font-mono text-xs text-blue-400"><p><strong>Support & Inquiries:</strong> linksave357@gmail.com</p> <p><strong>Response Time:</strong> Within 24 hours</p></div>',1),Zl=O('<div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in"><div class="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[85vh] flex flex-col"><div class="flex items-center justify-between pb-4 border-b border-slate-800 shrink-0"><div class="flex items-center gap-2.5"><!></div> <button class="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition" aria-label="Close Modal"><!></button></div> <div class="py-5 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed pr-1"><!></div> <div class="pt-4 border-t border-slate-800 flex justify-end shrink-0"><button class="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl transition">Close</button></div></div></div>');function Xl(e,t){let r=pe(t,"activeModal",8,null),n=pe(t,"onClose",8,()=>{});var a=G(),i=B(a);{var s=o=>{var l=Zl(),d=f(l),u=f(d),p=f(u),c=f(p);{var h=L=>{var R=Ul(),ae=B(R);Vr(ae,{class:"w-5 h-5 text-emerald-400"}),S(L,R)},m=L=>{var R=Hl(),ae=B(R);Go(ae,{class:"w-5 h-5 text-blue-400"}),S(L,R)},x=L=>{var R=Bl(),ae=B(R);Xo(ae,{class:"w-5 h-5 text-purple-400"}),S(L,R)},b=L=>{var R=ql(),ae=B(R);Jo(ae,{class:"w-5 h-5 text-amber-400"}),S(L,R)};fe(c,L=>{r()==="privacy"?L(h):r()==="terms"?L(m,1):r()==="about"?L(x,2):r()==="contact"&&L(b,3)})}var k=g(p,2),E=f(k);on(E,{class:"w-5 h-5"});var M=g(u,2),y=f(M);{var _=L=>{var R=Wl();S(L,R)},$=L=>{var R=Kl();S(L,R)},T=L=>{var R=Ql();S(L,R)},A=L=>{var R=Gl();S(L,R)};fe(y,L=>{r()==="privacy"?L(_):r()==="terms"?L($,1):r()==="about"?L(T,2):r()==="contact"&&L(A,3)})}var H=g(M,2),V=f(H);we("click",k,function(...L){var R;(R=n())==null||R.apply(this,L)}),we("click",V,function(...L){var R;(R=n())==null||R.apply(this,L)}),S(o,l)};fe(i,o=>{r()&&o(s)})}S(e,a)}var Jl=O('<section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8 text-left" aria-label="VPN &amp; Privacy Recommendation"><div class="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950/60 to-slate-900 border border-indigo-500/30 p-6 sm:p-8 md:p-10 shadow-2xl"><div class="absolute -top-24 -right-24 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl pointer-events-none"></div> <div class="absolute -bottom-24 -left-24 w-80 h-80 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none"></div> <div class="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center"><div class="lg:col-span-8 space-y-4"><div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/15 border border-indigo-400/30 text-indigo-300 text-xs font-semibold"><!> <span> </span> <span class="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span></div> <h3 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug"> </h3> <p class="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl"> </p> <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2"><div class="flex items-center gap-2 text-xs text-slate-300"><!> <span>Bypass Geo-Blocks</span></div> <div class="flex items-center gap-2 text-xs text-slate-300"><!> <span>Stop ISP Throttling</span></div> <div class="flex items-center gap-2 text-xs text-slate-300"><!> <span>100% Private Downloads</span></div></div></div> <div class="lg:col-span-4 flex flex-col items-start lg:items-end justify-center"><div class="w-full sm:w-auto min-w-[260px] p-4 sm:p-5 rounded-2xl bg-slate-950/80 border border-slate-800 shadow-xl text-center space-y-3"><div class="flex items-center justify-between gap-2"><span class="text-[11px] uppercase tracking-wider text-slate-400 font-bold">Partner Deal</span> <span class="px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 text-[11px] font-bold border border-emerald-500/30"> </span></div> <a target="_blank" rel="nofollow noopener noreferrer" class="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-500 via-blue-600 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white font-bold text-xs sm:text-sm shadow-lg shadow-indigo-500/25 active:scale-95 transition-all duration-200 cursor-pointer"><span>Unlock Max Speed</span> <!></a> <div class="flex items-center justify-center gap-1.5 text-[10px] text-slate-400"><!> <span>30-Day Money-Back Guarantee</span></div></div></div></div></div></section>');function ed(e,t){var l;Vt(t,!1);const r=(l=j==null?void 0:j.affiliate)==null?void 0:l.vpn,n=(r==null?void 0:r.enabled)??!0,a=(r==null?void 0:r.url)||"https://go.nordvpn.net/aff_c?offer_id=15&aff_id=105436";fr();var i=G(),s=B(i);{var o=d=>{var u=Jl(),p=f(u),c=g(f(p),4),h=f(c),m=f(h),x=f(m);Et(x,{class:"w-3.5 h-3.5 text-indigo-400"});var b=g(x,2),k=f(b),E=g(m,2),M=f(E),y=g(E,2),_=f(y),$=g(y,2),T=f($),A=f(T);Ci(A,{class:"w-4 h-4 text-cyan-400 shrink-0"});var H=g(T,2),V=f(H);aa(V,{class:"w-4 h-4 text-amber-400 shrink-0"});var L=g(H,2),R=f(L);Ni(R,{class:"w-4 h-4 text-emerald-400 shrink-0"});var ae=g(h,2),Te=f(ae),Me=f(Te),F=g(f(Me),2),q=f(F),se=g(Me,2),ge=g(f(se),2);sn(ge,{class:"w-4 h-4"});var it=g(se,2),Ft=f(it);Vr(Ft,{class:"w-3.5 h-3.5 text-emerald-400"}),le(()=>{ie(k,(r==null?void 0:r.badge)||"Recommended for HD Media & Privacy"),ie(M,(r==null?void 0:r.title)||"Fast & Anonymous Video Downloads"),ie(_,(r==null?void 0:r.subtitle)||"Bypass regional video blocks on YouTube & TikTok while preventing ISP download throttling on high-bitrate MP3 and 4K video streams."),ie(q,(r==null?void 0:r.discount)||"72% OFF"),P(se,"href",a)}),S(d,u)};fe(s,d=>{n&&d(o)})}S(e,i),Yt()}var td=O('<div class="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-600 selection:text-white relative"><!> <!> <main><!> <!> <section class="max-w-7xl mx-auto px-4"><!></section> <!> <section class="max-w-7xl mx-auto px-4"><!></section> <!> <!> <!> <section class="max-w-7xl mx-auto px-4"><!></section> <section class="max-w-7xl mx-auto px-4"><!></section> <!> <!></main> <!> <!></div>');function rd(e){let t=Z(null);function r(){N(t,null)}var n=td(),a=f(n);Vl(a,{});var i=g(a,2);il(i,{});var s=g(i,2),o=f(s);vl(o);var l=g(o,2);hl(l);var d=g(l,2),u=f(d);qr(u,{slotType:"leaderboard",type:"ad"});var p=g(d,2);bl(p);var c=g(p,2),h=f(c);qr(h,{slotType:"leaderboard",type:"referral"});var m=g(c,2);_l(m);var x=g(m,2);$l(x);var b=g(x,2);ed(b,{});var k=g(b,2),E=f(k);qr(E,{slotType:"rectangle",type:"ad"});var M=g(k,2),y=f(M);qr(y,{slotType:"leaderboard",type:"ad"});var _=g(M,2);Ml(_);var $=g(_,2);Fl($);var T=g(s,2);Al(T);var A=g(T,2);{var H=V=>{Xl(V,{get activeModal(){return w(t)},onClose:r})};fe(A,V=>{w(t)&&V(H)})}S(e,n)}var Da;if(typeof document<"u"&&((Da=j==null?void 0:j.monetag)!=null&&Da.enabled)){if(j.monetag.verificationCode&&!document.querySelector('meta[name="monetag"]')){const e=document.createElement("meta");e.name="monetag",e.content=j.monetag.verificationCode,document.head.appendChild(e)}if(j.monetag.scriptUrl&&!document.querySelector(`script[src="${j.monetag.scriptUrl}"]`)){const e=document.createElement("script");e.src=j.monetag.scriptUrl,j.monetag.zoneId&&e.setAttribute("data-zone",j.monetag.zoneId),e.async=!0,e.setAttribute("data-cfasync","false"),document.head.appendChild(e)}}const Sa=window.location.pathname.replace(/^\/linksave\/?/,"/").replace(/\/index\.html$/,"/"),nd=Sa!=="/"&&Sa!=="";if(nd)document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector("iframe.iframe-crop"),t=new URLSearchParams(window.location.search),r=t.get("url")||"",n=t.get("text")||"",a=t.get("title")||"";let i="";if(r&&/^https?:\/\//i.test(r.trim()))i=r.trim();else{const p=`${n} ${a}`.match(/https?:\/\/[^\s]+/i);p?i=p[0]:r&&(i=r)}e&&i&&(e.src=`https://cnvmp3.com/v55?url=${encodeURIComponent(i)}`),document.querySelectorAll("button").forEach(u=>{u.textContent.includes("Refresh Engine")&&u.addEventListener("click",()=>{if(!e)return;const p=e.src;e.src="",setTimeout(()=>{e.src=p},150)})});let s=null;const o=e==null?void 0:e.parentElement;if(o){const u=()=>{o.classList.remove("h-[200px]","sm:h-[185px]"),o.classList.add("h-[350px]","sm:h-[320px]"),s&&clearTimeout(s),s=setTimeout(()=>{o.classList.remove("h-[350px]","sm:h-[320px]"),o.classList.add("h-[200px]","sm:h-[185px]")},3e3)};document.querySelectorAll("button").forEach(p=>{const c=p.textContent.trim();(c==="Bitrate/Quality"||c==="MP3 / MP4"||c==="No Watermark HD"||c==="MP3 / Audio Only"||c==="Quality / 1080p")&&p.addEventListener("click",u)})}let l=null;const d=document.getElementById("pwa-install-btn");window.addEventListener("beforeinstallprompt",u=>{u.preventDefault(),l=u}),d&&d.addEventListener("click",async()=>{l&&(l.prompt(),await l.userChoice,l=null)})});else{const e=document.getElementById("app")||document.body;e&&(e.innerHTML=""),mo(rd,{target:e})}"serviceWorker"in navigator&&window.location.protocol.startsWith("http")&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").catch(()=>{})});

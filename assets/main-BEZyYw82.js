var vs=Object.defineProperty;var qn=e=>{throw TypeError(e)};var hs=(e,t,r)=>t in e?vs(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var _e=(e,t,r)=>hs(e,typeof t!="symbol"?t+"":t,r),Gr=(e,t,r)=>t.has(e)||qn("Cannot "+r);var f=(e,t,r)=>(Gr(e,t,"read from private field"),r?r.call(e):t.get(e)),N=(e,t,r)=>t.has(e)?qn("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),T=(e,t,r,n)=>(Gr(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r),I=(e,t,r)=>(Gr(e,t,"access private method"),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}})();const fi=!1;var kn=Array.isArray,ps=Array.prototype.indexOf,Cr=Array.prototype.includes,qr=Array.from,gs=Object.defineProperty,lt=Object.getOwnPropertyDescriptor,ui=Object.getOwnPropertyDescriptors,_s=Object.prototype,bs=Array.prototype,Sn=Object.getPrototypeOf,Vn=Object.isExtensible;function Qt(e){return typeof e=="function"}const ms=()=>{};function xs(e){return e()}function nn(e){for(var t=0;t<e.length;t++)e[t]()}function di(){var e,t,r=new Promise((n,i)=>{e=n,t=i});return{promise:r,resolve:e,reject:t}}function ws(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const r=[];for(const n of e)if(r.push(n),r.length===t)break;return r}const ne=2,qt=4,gr=8,En=1<<24,Le=16,Me=32,Qe=64,sn=128,Ee=512,Z=1024,J=2048,Ae=4096,le=8192,we=16384,Bt=32768,on=1<<25,ut=65536,Lr=1<<17,ys=1<<18,Yt=1<<19,ci=1<<20,je=1<<25,kt=65536,Or=1<<21,Lt=1<<22,ft=1<<23,qe=Symbol("$state"),vi=Symbol("legacy props"),$s=Symbol(""),Ar=Symbol("attributes"),an=Symbol("class"),ln=Symbol("style"),tr=Symbol("text"),_r=new class extends Error{constructor(){super(...arguments);_e(this,"name","StaleReactionError");_e(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}};var oi;const An=!!((oi=globalThis.document)!=null&&oi.contentType)&&globalThis.document.contentType.includes("xml");function hi(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function ks(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Ss(e,t,r){throw new Error("https://svelte.dev/e/each_key_duplicate")}function Es(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function As(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Ms(e){throw new Error("https://svelte.dev/e/effect_orphan")}function Ts(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Ps(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function Ns(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Cs(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Ls(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Os(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const Ds=1,Is=2,pi=4,Rs=8,Fs=16,js=1,zs=2,gi=4,qs=8,Vs=16,Hs=1,Us=2,Q=Symbol("uninitialized"),_i="http://www.w3.org/1999/xhtml",Ws="http://www.w3.org/2000/svg",Bs="@attach";function Ys(){console.warn("https://svelte.dev/e/derived_inert")}function Gs(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function Xs(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function bi(e){return e===this.v}function Ks(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function mi(e){return!Ks(e,this.v)}let Gt=!1,Qs=!1;function Zs(){Gt=!0}let z=null;function Vt(e){z=e}function br(e,t=!1,r){z={p:z,i:!1,c:null,e:null,s:e,x:null,r:C,l:Gt&&!t?{s:null,u:null,$:[]}:null}}function mr(e){var t=z,r=t.e;if(r!==null){t.e=null;for(var n of r)zi(n)}return t.i=!0,z=t.p,{}}function xr(){return!Gt||z!==null&&z.l===null}let Pt=[];function Js(){var e=Pt;Pt=[],nn(e)}function ze(e){if(Pt.length===0){var t=Pt;queueMicrotask(()=>{t===Pt&&Js()})}Pt.push(e)}function xi(e){var t=C;if(t===null)return L.f|=ft,e;if((t.f&Bt)===0&&(t.f&qt)===0)throw e;ot(e,t)}function ot(e,t){if(!(t!==null&&(t.f&we)!==0)){for(;t!==null;){if((t.f&sn)!==0){if((t.f&Bt)===0)throw e;try{t.b.error(e);return}catch(r){e=r}}t=t.parent}throw e}}const eo=-7169;function U(e,t){e.f=e.f&eo|t}function Mn(e){(e.f&Ee)!==0||e.deps===null?U(e,Z):U(e,Ae)}function wi(e){if(e!==null)for(const t of e)(t.f&ne)===0||(t.f&kt)===0||(t.f^=kt,wi(t.deps))}function yi(e,t,r){(e.f&J)!==0?t.add(e):(e.f&Ae)!==0&&r.add(e),wi(e.deps),U(e,Z)}let Sr=!1;function to(e){var t=Sr;try{return Sr=!1,[e(),Sr]}finally{Sr=t}}function ro(e,t){if(t){const r=document.body;e.autofocus=!0,ze(()=>{document.activeElement===r&&e.focus()})}}function wr(e){var t=L,r=C;Te(null),ge(null);try{return e()}finally{Te(t),ge(r)}}function no(e){let t=0,r=dt(0),n;return()=>{Cn()&&($(r),Hr(()=>(t===0&&(n=Ue(()=>e(()=>ar(r)))),t+=1,()=>{ze(()=>{t-=1,t===0&&(n==null||n(),n=void 0,ar(r))})})))}}var io=ut|Yt;function so(e,t,r,n){new oo(e,t,r,n)}var $e,$n,ke,gt,de,Se,ae,me,We,_t,it,Ot,dr,cr,Be,Fr,V,ao,lo,fn,fo,un,Mr,Tr,dn,cn;class oo{constructor(t,r,n,i){N(this,V);_e(this,"parent");_e(this,"is_pending",!1);_e(this,"transform_error");N(this,$e);N(this,$n,null);N(this,ke);N(this,gt);N(this,de);N(this,Se,null);N(this,ae,null);N(this,me,null);N(this,We,null);N(this,_t,0);N(this,it,0);N(this,Ot,!1);N(this,dr,new Set);N(this,cr,new Set);N(this,Be,null);N(this,Fr,no(()=>(T(this,Be,dt(f(this,_t))),()=>{T(this,Be,null)})));var s;T(this,$e,t),T(this,ke,r),T(this,gt,o=>{var a=C;a.b=this,a.f|=sn,n(o)}),this.parent=C.b,this.transform_error=i??((s=this.parent)==null?void 0:s.transform_error)??(o=>o),T(this,de,kr(()=>{I(this,V,un).call(this)},io))}defer_effect(t){yi(t,f(this,dr),f(this,cr))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!f(this,ke).pending}update_pending_count(t,r){I(this,V,dn).call(this,t,r),T(this,_t,f(this,_t)+t),!(!f(this,Be)||f(this,Ot))&&(T(this,Ot,!0),ze(()=>{T(this,Ot,!1),f(this,Be)&&Ut(f(this,Be),f(this,_t))}))}get_effect_pending(){return f(this,Fr).call(this),$(f(this,Be))}error(t){if(!f(this,ke).onerror&&!f(this,ke).failed)throw t;P!=null&&P.is_fork?(f(this,Se)&&P.skip_effect(f(this,Se)),f(this,ae)&&P.skip_effect(f(this,ae)),f(this,me)&&P.skip_effect(f(this,me)),P.oncommit(()=>{I(this,V,cn).call(this,t)})):I(this,V,cn).call(this,t)}}$e=new WeakMap,$n=new WeakMap,ke=new WeakMap,gt=new WeakMap,de=new WeakMap,Se=new WeakMap,ae=new WeakMap,me=new WeakMap,We=new WeakMap,_t=new WeakMap,it=new WeakMap,Ot=new WeakMap,dr=new WeakMap,cr=new WeakMap,Be=new WeakMap,Fr=new WeakMap,V=new WeakSet,ao=function(){try{T(this,Se,he(()=>f(this,gt).call(this,f(this,$e))))}catch(t){this.error(t)}},lo=function(t){const r=f(this,ke).failed,{reset:n,invoke_onerror:i}=I(this,V,fn).call(this,t);ze(i),r&&T(this,me,he(()=>{r(f(this,$e),()=>t,()=>n)}))},fn=function(t){var r=!1,n=!1;const i=()=>{if(r){Xs();return}r=!0,n&&Os(),f(this,me)!==null&&wt(f(this,me),()=>{T(this,me,null)}),I(this,V,Tr).call(this,()=>{I(this,V,un).call(this)})};return{reset:i,invoke_onerror:()=>{var o,a;try{n=!0,(a=(o=f(this,ke)).onerror)==null||a.call(o,t,i),n=!1}catch(l){ot(l,f(this,de)&&f(this,de).parent)}}}},fo=function(){const t=f(this,ke).pending;t&&(this.is_pending=!0,T(this,ae,he(()=>t(f(this,$e)))),ze(()=>{var r=T(this,We,document.createDocumentFragment()),n=Ke();r.append(n),T(this,Se,I(this,V,Tr).call(this,()=>he(()=>f(this,gt).call(this,n)))),f(this,it)===0&&(f(this,$e).before(r),T(this,We,null),wt(f(this,ae),()=>{T(this,ae,null)}),I(this,V,Mr).call(this,P))}))},un=function(){try{if(this.is_pending=this.has_pending_snippet(),T(this,it,0),T(this,_t,0),T(this,Se,he(()=>{f(this,gt).call(this,f(this,$e))})),f(this,it)>0){var t=T(this,We,document.createDocumentFragment());Dn(f(this,Se),t);const r=f(this,ke).pending;T(this,ae,he(()=>r(f(this,$e))))}else I(this,V,Mr).call(this,P)}catch(r){this.error(r)}},Mr=function(t){this.is_pending=!1,t.transfer_effects(f(this,dr),f(this,cr))},Tr=function(t){var r=C,n=L,i=z;ge(f(this,de)),Te(f(this,de)),Vt(f(this,de).ctx);try{return St.ensure(),t()}catch(s){return xi(s),null}finally{ge(r),Te(n),Vt(i)}},dn=function(t,r){var n;if(!this.has_pending_snippet()){this.parent&&I(n=this.parent,V,dn).call(n,t,r);return}T(this,it,f(this,it)+t),f(this,it)===0&&(I(this,V,Mr).call(this,r),f(this,ae)&&wt(f(this,ae),()=>{T(this,ae,null)}),f(this,We)&&(f(this,$e).before(f(this,We)),T(this,We,null)))},cn=function(t){f(this,Se)&&(oe(f(this,Se)),T(this,Se,null)),f(this,ae)&&(oe(f(this,ae)),T(this,ae,null)),f(this,me)&&(oe(f(this,me)),T(this,me,null));let r=f(this,ke).failed;const n=i=>{const{reset:s,invoke_onerror:o}=I(this,V,fn).call(this,i);o(),r&&T(this,me,I(this,V,Tr).call(this,()=>{try{return he(()=>{var a=C;a.b=this,a.f|=sn,r(f(this,$e),()=>i,()=>s)})}catch(a){return ot(a,f(this,de).parent),null}}))};ze(()=>{var i;try{i=this.transform_error(t)}catch(s){ot(s,f(this,de)&&f(this,de).parent);return}i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(n,s=>ot(s,f(this,de)&&f(this,de).parent)):n(i)})};function $i(e,t,r,n){const i=xr()?Ht:yr;var s=e.filter(v=>!v.settled),o=t.map(i);if(r.length===0&&s.length===0){n(o);return}var a=C,l=uo(),u=s.length===1?s[0].promise:s.length>1?Promise.all(s.map(v=>v.promise)):null;function c(v){if((a.f&we)===0){l();try{n([...o,...v])}catch(p){ot(p,a)}Dr()}}var h=ki();if(r.length===0){u.then(()=>c([])).finally(h);return}function d(){Promise.all(r.map(v=>co(v))).then(c).catch(v=>ot(v,a)).finally(h)}u?u.then(()=>{l(),d(),Dr()}):d()}function uo(){var e=C,t=L,r=z,n=P;return function(s=!0){ge(e),Te(t),Vt(r),s&&(e.f&we)===0&&(n==null||n.activate(),n==null||n.apply())}}function Dr(e=!0){ge(null),Te(null),Vt(null),e&&(P==null||P.deactivate())}function ki(){var e=C,t=e.b,r=P,n=!!(t!=null&&t.is_rendered());return t==null||t.update_pending_count(1,r),r.increment(n,e),()=>{t==null||t.update_pending_count(-1,r),r.decrement(n,e)}}function Ht(e){var t=ne|J;return C!==null&&(C.f|=Yt),{ctx:z,deps:null,effects:null,equals:bi,f:t,fn:e,reactions:null,rv:0,v:Q,wv:0,parent:C,ac:null}}const rr=Symbol("obsolete");function co(e,t,r){let n=C;n===null&&ks();var i=void 0,s=dt(Q),o=!L,a=new Set;return Mo(()=>{var v,p;var l=C,u=di();i=u.promise;try{Promise.resolve(e()).then(u.resolve,b=>{b!==_r&&u.reject(b)}).finally(Dr)}catch(b){u.reject(b),Dr()}var c=P;if(o){if((l.f&Bt)!==0)var h=ki();if((v=n.b)!=null&&v.is_rendered())(p=c.async_deriveds.get(l))==null||p.reject(rr);else for(const b of a.values())b.reject(rr);a.add(u),c.async_deriveds.set(l,u)}const d=(b,g=void 0)=>{h==null||h(),a.delete(u),g!==rr&&(c.activate(),g?(s.f|=ft,Ut(s,g)):((s.f&ft)!==0&&(s.f^=ft),Ut(s,b)),c.deactivate())};u.promise.then(d,b=>d(null,b||"unknown"))}),Vr(()=>{for(const l of a)l.reject(rr)}),new Promise(l=>{function u(c){function h(){c===i?l(s):u(i)}c.then(h,h)}u(i)})}function vo(e){const t=Ht(e);return Bi(t),t}function yr(e){const t=Ht(e);return t.equals=mi,t}function ho(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)oe(t[r])}}function Tn(e){var t,r=C,n=e.parent;if(!Ze&&n!==null&&e.v!==Q&&(n.f&(we|le))!==0)return Ys(),e.v;ge(n);try{e.f&=~kt,ho(e),t=Ki(e)}finally{ge(r)}return t}function Si(e){var t=Tn(e);if(!e.equals(t)&&(e.wv=Gi(),(!(P!=null&&P.is_fork)||e.deps===null)&&(P!==null?(P.capture(e,t,!0),or==null||or.capture(e,t,!0)):e.v=t,e.deps===null))){U(e,Z);return}Ze||(se!==null?(Cn()||P!=null&&P.is_fork)&&se.set(e,t):Mn(e))}function po(e){var t;if(e.effects!==null)for(const r of e.effects)(r.teardown||r.ac)&&((t=r.teardown)==null||t.call(r),r.ac!==null&&wr(()=>{r.ac.abort(_r),r.ac=null}),r.fn!==null&&(r.teardown=ms),lr(r,0),On(r))}function Ei(e){if(e.effects!==null)for(const t of e.effects)t.teardown&&t.fn!==null&&Et(t)}let Xr=null,Mt=null,P=null,or=null,se=null,vn=null,Kr=!1,Nt=null,Pr=null;var Hn=0;let go=1;var Dt,st,bt,It,Rt,Ft,Ye,jt,ce,vr,Ge,Ne,Re,zt,mt,j,hn,nr,pn,Ai,Mi,Tt,_o,ir;const jr=class jr{constructor(){N(this,j);_e(this,"id",go++);N(this,Dt,!1);_e(this,"linked",!0);N(this,st,null);N(this,bt,null);_e(this,"async_deriveds",new Map);_e(this,"current",new Map);_e(this,"previous",new Map);N(this,It,new Set);N(this,Rt,new Set);N(this,Ft,0);N(this,Ye,new Map);N(this,jt,null);N(this,ce,[]);N(this,vr,[]);N(this,Ge,new Set);N(this,Ne,new Set);N(this,Re,new Map);N(this,zt,new Set);_e(this,"is_fork",!1);N(this,mt,!1);Mt===null?Xr=Mt=this:(T(Mt,bt,this),T(this,st,Mt)),Mt=this}skip_effect(t){f(this,Re).has(t)||f(this,Re).set(t,{d:[],m:[]}),f(this,zt).delete(t)}unskip_effect(t,r=n=>this.schedule(n)){var n=f(this,Re).get(t);if(n){f(this,Re).delete(t);for(var i of n.d)U(i,J),r(i);for(i of n.m)U(i,Ae),r(i)}f(this,zt).add(t)}capture(t,r,n=!1){t.v!==Q&&!this.previous.has(t)&&this.previous.set(t,t.v),(t.f&ft)===0&&(this.current.set(t,[r,n]),se==null||se.set(t,r)),this.is_fork||(t.v=r)}activate(){P=this}deactivate(){P=null,se=null}flush(){try{Kr=!0,P=this,I(this,j,nr).call(this)}finally{Hn=0,vn=null,Nt=null,Pr=null,Kr=!1,P=null,se=null,Ve.clear()}}discard(){var t;for(const r of f(this,Rt))r(this);f(this,Rt).clear();for(const r of this.async_deriveds.values())r.reject(rr);I(this,j,ir).call(this),(t=f(this,jt))==null||t.resolve()}register_created_effect(t){f(this,vr).push(t)}increment(t,r){if(T(this,Ft,f(this,Ft)+1),t){let n=f(this,Ye).get(r)??0;f(this,Ye).set(r,n+1)}}decrement(t,r){if(T(this,Ft,f(this,Ft)-1),t){let n=f(this,Ye).get(r)??0;n===1?f(this,Ye).delete(r):f(this,Ye).set(r,n-1)}f(this,mt)||(T(this,mt,!0),ze(()=>{T(this,mt,!1),this.linked&&this.flush()}))}transfer_effects(t,r){for(const n of t)f(this,Ge).add(n);for(const n of r)f(this,Ne).add(n);t.clear(),r.clear()}oncommit(t){f(this,It).add(t)}ondiscard(t){f(this,Rt).add(t)}settled(){return(f(this,jt)??T(this,jt,di())).promise}static ensure(){if(P===null){const t=P=new jr;Kr||ze(()=>{f(t,Dt)||t.flush()})}return P}apply(){{se=null;return}}schedule(t){var i;if(vn=t,(i=t.b)!=null&&i.is_pending&&(t.f&(qt|gr|En))!==0&&(t.f&Bt)===0){t.b.defer_effect(t);return}for(var r=t;r.parent!==null;){r=r.parent;var n=r.f;if(Nt!==null&&r===C&&(L===null||(L.f&ne)===0))return;if((n&(Qe|Me))!==0){if((n&Z)===0)return;r.f^=Z}}f(this,ce).push(r)}};Dt=new WeakMap,st=new WeakMap,bt=new WeakMap,It=new WeakMap,Rt=new WeakMap,Ft=new WeakMap,Ye=new WeakMap,jt=new WeakMap,ce=new WeakMap,vr=new WeakMap,Ge=new WeakMap,Ne=new WeakMap,Re=new WeakMap,zt=new WeakMap,mt=new WeakMap,j=new WeakSet,hn=function(){if(this.is_fork)return!0;for(const n of f(this,Ye).keys()){for(var t=n,r=!1;t.parent!==null;){if(f(this,Re).has(t)){r=!0;break}t=t.parent}if(!r)return!0}return!1},nr=function(){var l,u,c,h;T(this,Dt,!0),Hn++>1e3&&(I(this,j,ir).call(this),bo());for(const d of f(this,Ge))f(this,Ne).delete(d),U(d,J),this.schedule(d);for(const d of f(this,Ne))U(d,Ae),this.schedule(d);const t=f(this,ce);T(this,ce,[]),this.apply();var r=Nt=[],n=[],i=Pr=[];for(const d of t)try{I(this,j,pn).call(this,d,r,n)}catch(v){throw Ni(d),I(this,j,hn).call(this)||this.discard(),v}if(P=null,i.length>0){var s=jr.ensure();for(const d of i)s.schedule(d)}if(Nt=null,Pr=null,I(this,j,hn).call(this)){I(this,j,Tt).call(this,n),I(this,j,Tt).call(this,r);for(const[d,v]of f(this,Re))Pi(d,v);i.length>0&&I(l=P,j,nr).call(l);return}const o=I(this,j,Ai).call(this);if(o){I(this,j,Tt).call(this,n),I(this,j,Tt).call(this,r),I(u=o,j,Mi).call(u,this);return}f(this,Ge).clear(),f(this,Ne).clear();for(const d of f(this,It))d(this);f(this,It).clear(),or=this,Un(n),Un(r),or=null,(c=f(this,jt))==null||c.resolve();var a=P;if(f(this,Ft)===0&&(f(this,ce).length===0||a!==null)&&I(this,j,ir).call(this),f(this,ce).length>0)if(a!==null){const d=a;f(d,ce).push(...f(this,ce).filter(v=>!f(d,ce).includes(v)))}else a=this;a!==null&&(Ve.clear(),I(h=a,j,nr).call(h))},pn=function(t,r,n){t.f^=Z;for(var i=t.first;i!==null;){var s=i.f,o=(s&(Me|Qe))!==0,a=o&&(s&Z)!==0,l=a||(s&le)!==0||f(this,Re).has(i);if(!l&&i.fn!==null){o?i.f^=Z:(s&qt)!==0?r.push(i):Xt(i)&&((s&Le)!==0&&f(this,Ne).add(i),Et(i));var u=i.first;if(u!==null){i=u;continue}}for(;i!==null;){var c=i.next;if(c!==null){i=c;break}i=i.parent}}},Ai=function(){for(var t=f(this,st);t!==null;){if(!t.is_fork){for(const[r,[,n]]of this.current)if(t.current.has(r)&&!n)return t}t=f(t,st)}return null},Mi=function(t){var n;for(const[i,s]of t.current)!this.previous.has(i)&&t.previous.has(i)&&this.previous.set(i,t.previous.get(i)),this.current.set(i,s);for(const[i,s]of t.async_deriveds){const o=this.async_deriveds.get(i);o&&s.promise.then(o.resolve).catch(o.reject)}t.async_deriveds.clear(),this.transfer_effects(f(t,Ge),f(t,Ne));const r=i=>{var s=i.reactions;if(s!==null&&!((i.f&ne)!==0&&(i.f&(J|Ae))===0))for(const l of s){var o=l.f;if((o&ne)!==0)r(l);else{var a=l;o&(Lt|Le)&&!this.async_deriveds.has(a)&&(f(this,Ne).delete(a),U(a,J),this.schedule(a))}}};for(const i of this.current.keys())r(i);this.oncommit(()=>t.discard()),I(n=t,j,ir).call(n),P=this,I(this,j,nr).call(this)},Tt=function(t){for(var r=0;r<t.length;r+=1)yi(t[r],f(this,Ge),f(this,Ne))},_o=function(){var h;for(let d=Xr;d!==null;d=f(d,bt)){var t=d.id<this.id,r=[];for(const[v,[p,b]]of this.current){if(d.current.has(v)){var n=d.current.get(v)[0];if(t&&p!==n)d.current.set(v,[p,b]);else continue}r.push(v)}if(t)for(const[v,p]of this.async_deriveds){const b=d.async_deriveds.get(v);b&&p.promise.then(b.resolve).catch(b.reject)}var i=[...d.current.keys()].filter(v=>!d.current.get(v)[1]);if(!(!f(d,Dt)||i.length===0)){var s=i.filter(v=>!this.current.has(v));if(s.length===0)t&&d.discard();else if(r.length>0){if(t)for(const v of f(this,zt))d.unskip_effect(v,p=>{var b;(p.f&(Le|Lt))!==0?d.schedule(p):I(b=d,j,Tt).call(b,[p])});d.activate();var o=new Set,a=new Map;for(var l of r)Ti(l,s,o,a);a=new Map;var u=[...d.current].filter(([v,p])=>{const b=this.current.get(v);return b?b[0]!==p[0]||b[1]!==p[1]:!0}).map(([v])=>v);if(u.length>0)for(const v of f(this,vr))(v.f&(we|le|Lr))===0&&Pn(v,u,a)&&((v.f&(Lt|Le))!==0?(U(v,J),d.schedule(v)):f(d,Ge).add(v));if(f(d,ce).length>0&&!f(d,mt)){d.apply();for(var c of f(d,ce))I(h=d,j,pn).call(h,c,[],[]);T(d,ce,[])}d.deactivate()}}}},ir=function(){if(this.linked){var t=f(this,st),r=f(this,bt);t===null?Xr=r:T(t,bt,r),r===null?Mt=t:T(r,st,t),this.linked=!1}};let St=jr;function bo(){try{Ts()}catch(e){ot(e,vn)}}let Pe=null;function Un(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var n=e[r++];if((n.f&(we|le))===0&&Xt(n)&&(Pe=new Set,Et(n),n.deps===null&&n.first===null&&n.nodes===null&&n.teardown===null&&n.ac===null&&Hi(n),(Pe==null?void 0:Pe.size)>0)){Ve.clear();for(const i of Pe){if((i.f&(we|le))!==0)continue;const s=[i];let o=i.parent;for(;o!==null;)Pe.has(o)&&(Pe.delete(o),s.push(o)),o=o.parent;for(let a=s.length-1;a>=0;a--){const l=s[a];(l.f&(we|le))===0&&Et(l)}}Pe.clear()}}Pe=null}}function Ti(e,t,r,n){if(!r.has(e)&&(r.add(e),e.reactions!==null))for(const i of e.reactions){const s=i.f;(s&ne)!==0?Ti(i,t,r,n):(s&(Lt|Le))!==0&&(s&J)===0&&Pn(i,t,n)&&(U(i,J),Nn(i))}}function Pn(e,t,r){const n=r.get(e);if(n!==void 0)return n;if(e.deps!==null)for(const i of e.deps){if(Cr.call(t,i))return!0;if((i.f&ne)!==0&&Pn(i,t,r))return r.set(i,!0),!0}return r.set(e,!1),!1}function Nn(e){P.schedule(e)}function Pi(e,t){if(!((e.f&Me)!==0&&(e.f&Z)!==0)){(e.f&J)!==0?t.d.push(e):(e.f&Ae)!==0&&t.m.push(e),U(e,Z);for(var r=e.first;r!==null;)Pi(r,t),r=r.next}}function Ni(e){U(e,Z);for(var t=e.first;t!==null;)Ni(t),t=t.next}let Ir=new Set;const Ve=new Map;let Ci=!1;function dt(e,t){var r={f:0,v:e,reactions:null,equals:bi,rv:0,wv:0};return r}function rt(e,t){const r=dt(e);return Bi(r),r}function at(e,t=!1,r=!0){var i;const n=dt(e);return t||(n.equals=mi),Gt&&r&&z!==null&&z.l!==null&&((i=z.l).s??(i.s=[])).push(n),n}function Wn(e,t){return W(e,Ue(()=>$(e))),t}function W(e,t,r=!1){L!==null&&(!Oe||(L.f&Lr)!==0)&&xr()&&(L.f&(ne|Le|Lt|Lr))!==0&&(He===null||!He.has(e))&&Ls();let n=r?Ct(t):t;return Ut(e,n,Pr)}function Ut(e,t,r=null){if(!e.equals(t)){Ze?Ve.set(e,t):Ve.has(e)||Ve.set(e,e.v);var n=St.ensure();if(n.capture(e,t),(e.f&ne)!==0){const i=e;(e.f&J)!==0&&Tn(i),se===null&&Mn(i)}e.wv=Gi(),Li(e,J,r),xr()&&C!==null&&(C.f&Z)!==0&&(C.f&(Me|Qe))===0&&(ye===null?No([e]):ye.push(e)),!n.is_fork&&Ir.size>0&&!Ci&&mo()}return t}function mo(){Ci=!1;for(const e of Ir){(e.f&Z)!==0&&U(e,Ae);let t;try{t=Xt(e)}catch{t=!0}t&&Et(e)}Ir.clear()}function Bn(e,t=1){var r=$(e),n=t===1?r++:r--;return W(e,r),n}function ar(e){W(e,e.v+1)}function Li(e,t,r){var n=e.reactions;if(n!==null)for(var i=xr(),s=n.length,o=0;o<s;o++){var a=n[o],l=a.f;if(!(!i&&a===C)){var u=(l&J)===0;if(u&&U(a,t),(l&Lr)!==0)Ir.add(a);else if((l&ne)!==0){var c=a;se==null||se.delete(c),(l&kt)===0&&(l&Ee&&(C===null||(C.f&Or)===0)&&(a.f|=kt),Li(c,Ae,r))}else if(u){var h=a;(l&Le)!==0&&Pe!==null&&Pe.add(h),r!==null?r.push(h):Nn(h)}}}}function Ct(e){if(typeof e!="object"||e===null||qe in e)return e;const t=Sn(e);if(t!==_s&&t!==bs)return e;var r=new Map,n=kn(e),i=rt(0),s=yt,o=a=>{if(yt===s)return a();var l=L,u=yt;Te(null),Kn(s);var c=a();return Te(l),Kn(u),c};return n&&r.set("length",rt(e.length)),new Proxy(e,{defineProperty(a,l,u){(!("value"in u)||u.configurable===!1||u.enumerable===!1||u.writable===!1)&&Ns();var c=r.get(l);return c===void 0?o(()=>{var h=rt(u.value);return r.set(l,h),h}):W(c,u.value,!0),!0},deleteProperty(a,l){var u=r.get(l);if(u===void 0){if(l in a){const c=o(()=>rt(Q));r.set(l,c),ar(i)}}else W(u,Q),ar(i);return!0},get(a,l,u){var v;if(l===qe)return e;var c=r.get(l),h=l in a;if(c===void 0&&(!h||(v=lt(a,l))!=null&&v.writable)&&(c=o(()=>{var p=Ct(h?a[l]:Q),b=rt(p);return b}),r.set(l,c)),c!==void 0){var d=$(c);return d===Q?void 0:d}return Reflect.get(a,l,u)},getOwnPropertyDescriptor(a,l){var u=Reflect.getOwnPropertyDescriptor(a,l);if(u&&"value"in u){var c=r.get(l);c&&(u.value=$(c))}else if(u===void 0){var h=r.get(l),d=h==null?void 0:h.v;if(h!==void 0&&d!==Q)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return u},has(a,l){var d;if(l===qe)return!0;var u=r.get(l),c=u!==void 0&&u.v!==Q||Reflect.has(a,l);if(u!==void 0||C!==null&&(!c||(d=lt(a,l))!=null&&d.writable)){u===void 0&&(u=o(()=>{var v=c?Ct(a[l]):Q,p=rt(v);return p}),r.set(l,u));var h=$(u);if(h===Q)return!1}return c},set(a,l,u,c){var A;var h=r.get(l),d=l in a;if(n&&l==="length")for(var v=u;v<h.v;v+=1){var p=r.get(v+"");p!==void 0?W(p,Q):v in a&&(p=o(()=>rt(Q)),r.set(v+"",p))}if(h===void 0)(!d||(A=lt(a,l))!=null&&A.writable)&&(h=o(()=>rt(void 0)),W(h,Ct(u)),r.set(l,h));else{d=h.v!==Q;var b=o(()=>Ct(u));W(h,b)}var g=Reflect.getOwnPropertyDescriptor(a,l);if(g!=null&&g.set&&g.set.call(c,u),!d){if(n&&typeof l=="string"){var m=r.get("length"),y=Number(l);Number.isInteger(y)&&y>=m.v&&W(m,y+1)}ar(i)}return!0},ownKeys(a){$(i);var l=Reflect.ownKeys(a).filter(h=>{var d=r.get(h);return d===void 0||d.v!==Q});for(var[u,c]of r)c.v!==Q&&!(u in a)&&l.push(u);return l},setPrototypeOf(){Cs()}})}function Yn(e){try{if(e!==null&&typeof e=="object"&&qe in e)return e[qe]}catch{}return e}function xo(e,t){return Object.is(Yn(e),Yn(t))}var Gn,Oi,Di,Ii;function wo(){if(Gn===void 0){Gn=window,Oi=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;Di=lt(t,"firstChild").get,Ii=lt(t,"nextSibling").get,Vn(e)&&(e[an]=void 0,e[Ar]=null,e[ln]=void 0,e.__e=void 0),Vn(r)&&(r[tr]=void 0)}}function Ke(e=""){return document.createTextNode(e)}function Wt(e){return Di.call(e)}function $r(e){return Ii.call(e)}function _(e,t){return Wt(e)}function q(e,t=!1){{var r=Wt(e);return r instanceof Comment&&r.data===""?$r(r):r}}function x(e,t=1,r=!1){let n=e;for(;t--;)n=$r(n);return n}function yo(e){e.textContent=""}function Ri(){return!1}function Fi(e,t,r){return t==null||t===_i?r?document.createElement(e,{is:r}):document.createElement(e):r?document.createElementNS(t,e,{is:r}):document.createElementNS(t,e)}function ji(e){C===null&&(L===null&&Ms(),As()),Ze&&Es()}function $o(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function De(e,t){var r=C;r!==null&&(r.f&le)!==0&&(e|=le);var n={ctx:z,deps:null,nodes:null,f:e|J|Ee,first:null,fn:t,last:null,next:null,parent:r,b:r&&r.b,prev:null,teardown:null,wv:0,ac:null};P==null||P.register_created_effect(n);var i=n;if((e&qt)!==0)Nt!==null?Nt.push(n):St.ensure().schedule(n);else if(t!==null){try{Et(n)}catch(o){throw oe(n),o}i.deps===null&&i.teardown===null&&i.nodes===null&&i.first===i.last&&(i.f&Yt)===0&&(i=i.first,(e&Le)!==0&&(e&ut)!==0&&i!==null&&(i.f|=ut))}if(i!==null&&(i.parent=r,r!==null&&$o(i,r),L!==null&&(L.f&ne)!==0&&(e&Qe)===0)){var s=L;(s.effects??(s.effects=[])).push(i)}return n}function Cn(){return L!==null&&!Oe}function Vr(e){const t=De(gr,null);return U(t,Z),t.teardown=e,t}function gn(e){ji();var t=C.f,r=!L&&(t&Me)!==0&&z!==null&&!z.i;if(r){var n=z;(n.e??(n.e=[])).push(e)}else return zi(e)}function zi(e){return De(qt|ci,e)}function ko(e){return ji(),De(gr|ci,e)}function So(e){St.ensure();const t=De(Qe|Yt,e);return(r={})=>new Promise(n=>{r.outro?wt(t,()=>{oe(t),n(void 0)}):(oe(t),n(void 0))})}function Ln(e){return De(qt,e)}function Eo(e,t){var r=z,n={effect:null,ran:!1,deps:e};r.l.$.push(n),n.effect=Hr(()=>{if(!n.ran){n.ran=!0;var i=C;try{ge(i.parent),Ue(t)}finally{ge(i)}}})}function Ao(){var e=z;Hr(()=>{for(var t of e.l.$){t.deps();var r=t.effect;(r.f&Z)!==0&&r.deps!==null&&U(r,Ae),Xt(r)&&Et(r),t.ran=!1}})}function Mo(e){return De(Lt|Yt,e)}function Hr(e,t=0){return De(gr|t,e)}function ct(e,t=[],r=[],n=[]){$i(n,t,r,i=>{De(gr,()=>{e(...i.map($))})})}function kr(e,t=0){var r=De(Le|t,e);return r}function qi(e,t=0){var r=De(En|t,e);return r}function he(e){return De(Me|Yt,e)}function Vi(e){var t=e.teardown;if(t!==null){const r=Ze,n=L;Xn(!0),Te(null);try{t.call(null)}finally{Xn(r),Te(n)}}}function On(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){const i=r.ac;i!==null&&wr(()=>{i.abort(_r)});var n=r.next;(r.f&Qe)!==0?r.parent=null:oe(r,t),r=n}}function To(e){for(var t=e.first;t!==null;){var r=t.next;(t.f&Me)===0&&oe(t),t=r}}function oe(e,t=!0){var r=!1;(t||(e.f&ys)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(Po(e.nodes.start,e.nodes.end),r=!0),e.f|=on,On(e,t&&!r),lr(e,0);var n=e.nodes&&e.nodes.t;if(n!==null)for(const s of n)s.stop();Vi(e),e.f^=on,e.f|=we;var i=e.parent;i!==null&&i.first!==null&&Hi(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function Po(e,t){for(;e!==null;){var r=e===t?null:$r(e);e.remove(),e=r}}function Hi(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function wt(e,t,r=!0){var n=[];Ui(e,n,!0);var i=()=>{r&&oe(e),t&&t()},s=n.length;if(s>0){var o=()=>--s||i();for(var a of n)a.out(o)}else i()}function Ui(e,t,r){if((e.f&le)===0){e.f^=le;var n=e.nodes&&e.nodes.t;if(n!==null)for(const a of n)(a.is_global||r)&&t.push(a);for(var i=e.first;i!==null;){var s=i.next;if((i.f&Qe)===0){var o=(i.f&ut)!==0||(i.f&Me)!==0&&(e.f&Le)!==0;Ui(i,t,o?r:!1)}i=s}}}function Rr(e){Wi(e,!0)}function Wi(e,t){if((e.f&le)!==0){e.f^=le,(e.f&Z)===0&&(U(e,J),St.ensure().schedule(e));for(var r=e.first;r!==null;){var n=r.next,i=(r.f&ut)!==0||(r.f&Me)!==0;Wi(r,i?t:!1),r=n}var s=e.nodes&&e.nodes.t;if(s!==null)for(const o of s)(o.is_global||t)&&o.in()}}function Dn(e,t){if(e.nodes)for(var r=e.nodes.start,n=e.nodes.end;r!==null;){var i=r===n?null:$r(r);t.append(r),r=i}}let Nr=!1,Ze=!1;function Xn(e){Ze=e}let L=null,Oe=!1;function Te(e){L=e}let C=null;function ge(e){C=e}let He=null;function Bi(e){L!==null&&(He??(He=new Set)).add(e)}let ve=null,be=0,ye=null;function No(e){ye=e}let Yi=1,ht=0,yt=ht;function Kn(e){yt=e}function Gi(){return++Yi}function Xt(e){var t=e.f;if((t&J)!==0)return!0;if(t&ne&&(e.f&=~kt),(t&Ae)!==0){for(var r=e.deps,n=r.length,i=0;i<n;i++){var s=r[i];if(Xt(s)&&Si(s),s.wv>e.wv)return!0}(t&Ee)!==0&&se===null&&U(e,Z)}return!1}function Xi(e,t,r=!0){var n=e.reactions;if(n!==null&&!(He!==null&&He.has(e)))for(var i=0;i<n.length;i++){var s=n[i];(s.f&ne)!==0?Xi(s,t,!1):t===s&&(r?U(s,J):(s.f&Z)!==0&&U(s,Ae),Nn(s))}}function Ki(e){var b;var t=ve,r=be,n=ye,i=L,s=He,o=z,a=Oe,l=yt,u=e.f;ve=null,be=0,ye=null,L=(u&(Me|Qe))===0?e:null,He=null,Vt(e.ctx),Oe=!1,yt=++ht,e.ac!==null&&(wr(()=>{e.ac.abort(_r)}),e.ac=null);try{e.f|=Or;var c=e.fn,h=c();e.f|=Bt;var d=e.deps,v=P==null?void 0:P.is_fork;if(ve!==null){var p;if(v||lr(e,be),d!==null&&be>0)for(d.length=be+ve.length,p=0;p<ve.length;p++)d[be+p]=ve[p];else e.deps=d=ve;if(Cn()&&(e.f&Ee)!==0)for(p=be;p<d.length;p++)((b=d[p]).reactions??(b.reactions=[])).push(e)}else!v&&d!==null&&be<d.length&&(lr(e,be),d.length=be);if(xr()&&ye!==null&&!Oe&&d!==null&&(e.f&(ne|Ae|J))===0)for(p=0;p<ye.length;p++)Xi(ye[p],e);if(i!==null&&i!==e){if(ht++,i.deps!==null)for(let g=0;g<r;g+=1)i.deps[g].rv=ht;if(t!==null)for(const g of t)g.rv=ht;ye!==null&&(n===null?n=ye:n.push(...ye))}return(e.f&ft)!==0&&(e.f^=ft),h}catch(g){return xi(g)}finally{e.f^=Or,ve=t,be=r,ye=n,L=i,He=s,Vt(o),Oe=a,yt=l}}function Co(e,t){let r=t.reactions;if(r!==null){var n=ps.call(r,e);if(n!==-1){var i=r.length-1;i===0?r=t.reactions=null:(r[n]=r[i],r.pop())}}if(r===null&&(t.f&ne)!==0&&(ve===null||!Cr.call(ve,t))){var s=t;(s.f&Ee)!==0&&(s.f^=Ee,s.f&=~kt),s.v!==Q&&Mn(s),s.ac!==null&&wr(()=>{s.ac.abort(_r),s.ac=null,U(s,J)}),po(s),lr(s,0)}}function lr(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)Co(e,r[n])}function Et(e){var t=e.f;if((t&we)===0){U(e,Z);var r=C,n=Nr;C=e,Nr=(t&(Me|Qe))===0;try{(t&(Le|En))!==0?To(e):On(e),Vi(e);var i=Ki(e);e.teardown=typeof i=="function"?i:null,e.wv=Yi;var s;fi&&Qs&&(e.f&J)!==0&&e.deps}finally{Nr=n,C=r}}}function $(e){var t=e.f,r=(t&ne)!==0;if(L!==null&&!Oe){var n=C!==null&&(C.f&we)!==0;if(!n&&(He===null||!He.has(e))){var i=L.deps;if((L.f&Or)!==0)e.rv<ht&&(e.rv=ht,ve===null&&i!==null&&i[be]===e?be++:ve===null?ve=[e]:ve.push(e));else{L.deps??(L.deps=[]),Cr.call(L.deps,e)||L.deps.push(e);var s=e.reactions;s===null?e.reactions=[L]:Cr.call(s,L)||s.push(L)}}}if(Ze&&Ve.has(e))return Ve.get(e);if(r){var o=e;if(Ze){var a=o.v;return((o.f&Z)===0&&o.reactions!==null||Zi(o))&&(a=Tn(o)),Ve.set(o,a),a}var l=(o.f&Ee)===0&&!Oe&&L!==null&&(Nr||(L.f&Ee)!==0),u=(o.f&Bt)===0;Xt(o)&&(l&&(o.f|=Ee),Si(o)),l&&!u&&(Ei(o),Qi(o))}if(se!=null&&se.has(e))return se.get(e);if((e.f&ft)!==0)throw e.v;return e.v}function Qi(e){if(e.f|=Ee,e.deps!==null)for(const t of e.deps)(t.reactions??(t.reactions=[])).push(e),(t.f&ne)!==0&&(t.f&Ee)===0&&(Ei(t),Qi(t))}function Zi(e){if(e.v===Q)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(Ve.has(t)||(t.f&ne)!==0&&Zi(t))return!0;return!1}function Ue(e){var t=Oe;try{return Oe=!0,e()}finally{Oe=t}}function vt(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(qe in e)_n(e);else if(!Array.isArray(e))for(let t in e){const r=e[t];typeof r=="object"&&r&&qe in r&&_n(r)}}}function _n(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let n in e)try{_n(e[n],t)}catch{}const r=Sn(e);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const n=ui(r);for(let i in n){const s=n[i].get;if(s)try{s.call(e)}catch{}}}}}function Lo(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const Oo=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Do(e){return Oo.includes(e)}const Io={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Ro(e){return e=e.toLowerCase(),Io[e]??e}const Fo=["touchstart","touchmove"];function jo(e){return Fo.includes(e)}const pt=Symbol("events"),Ji=new Set,bn=new Set;function es(e,t,r,n={}){function i(s){if(n.capture||mn.call(t,s),!s.cancelBubble)return wr(()=>r==null?void 0:r.call(this,s))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?ze(()=>{t.addEventListener(e,i,n)}):t.addEventListener(e,i,n),i}function X(e,t,r,n,i){var s={capture:n,passive:i},o=es(e,t,r,s);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&Vr(()=>{t.removeEventListener(e,o,s)})}function zo(e,t,r){(t[pt]??(t[pt]={}))[e]=r}function qo(e){for(var t=0;t<e.length;t++)Ji.add(e[t]);for(var r of bn)r(e)}let Qr=null,Zr=!1;function mn(e){var b,g;var t=this,r=t.ownerDocument,n=e.type,i=((b=e.composedPath)==null?void 0:b.call(e))||[],s=i[0]||e.target;Qr=e,Zr||(Zr=!0,setTimeout(()=>{Zr=!1,Qr=null}));var o=0,a=Qr===e&&e[pt];if(a){var l=i.indexOf(a);if(l!==-1&&(t===document||t===window)){e[pt]=t;return}var u=i.indexOf(t);if(u===-1)return;l<=u&&(o=l)}if(s=i[o]||e.target,s!==t){gs(e,"currentTarget",{configurable:!0,get(){return s||r}});var c=L,h=C;Te(null),ge(null);try{for(var d,v=[];s!==null&&s!==t;){try{var p=(g=s[pt])==null?void 0:g[n];p!=null&&(!s.disabled||e.target===s)&&p.call(s,e)}catch(m){d?v.push(m):d=m}if(e.cancelBubble)break;o++,s=o<i.length?i[o]:null}if(d){for(let m of v)queueMicrotask(()=>{throw m});throw d}}finally{e[pt]=t,delete e.currentTarget,Te(c),ge(h)}}}var ai;const Jr=((ai=globalThis==null?void 0:globalThis.window)==null?void 0:ai.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function Vo(e){return(Jr==null?void 0:Jr.createHTML(e))??e}function ts(e){var t=Fi("template");return t.innerHTML=Vo(e.replaceAll("<!>","<!---->")),t.content}function fr(e,t){var r=C;r.nodes===null&&(r.nodes={start:e,end:t,a:null,t:null})}function B(e,t){var r=(t&Hs)!==0,n=(t&Us)!==0,i,s=!e.startsWith("<!>");return()=>{i===void 0&&(i=ts(s?e:"<!>"+e),r||(i=Wt(i)));var o=n||Oi?document.importNode(i,!0):i.cloneNode(!0);if(r){var a=Wt(o),l=o.lastChild;fr(a,l)}else fr(o,o);return o}}function Ho(e,t,r="svg"){var n=!e.startsWith("<!>"),i=`<${r}>${n?e:"<!>"+e}</${r}>`,s;return()=>{if(!s){var o=ts(i),a=Wt(o);s=Wt(a)}var l=s.cloneNode(!0);return fr(l,l),l}}function Uo(e,t){return Ho(e,t,"svg")}function G(){var e=document.createDocumentFragment(),t=document.createComment(""),r=Ke();return e.append(t,r),fr(t,r),e}function E(e,t){e!==null&&e.before(t)}function Xe(e,t){var r=t==null?"":typeof t=="object"?`${t}`:t;r!==(e[tr]??(e[tr]=e.nodeValue))&&(e[tr]=r,e.nodeValue=`${r}`)}function Wo(e,t){return Bo(e,t)}const Er=new Map;function Bo(e,{target:t,anchor:r,props:n={},events:i,context:s,intro:o=!0,transformError:a}){wo();var l=void 0,u=So(()=>{var c=r??t.appendChild(Ke());so(c,{pending:()=>{}},v=>{br({});var p=z;s&&(p.c=s),i&&(n.$$events=i),l=e(v,n)||{},mr()},a);var h=new Set,d=v=>{for(var p=0;p<v.length;p++){var b=v[p];if(!h.has(b)){h.add(b);var g=jo(b);for(const A of[t,document]){var m=Er.get(A);m===void 0&&(m=new Map,Er.set(A,m));var y=m.get(b);y===void 0?(A.addEventListener(b,mn,{passive:g}),m.set(b,1)):m.set(b,y+1)}}}};return d(qr(Ji)),bn.add(d),()=>{var g;for(var v of h)for(const m of[t,document]){var p=Er.get(m),b=p.get(v);--b==0?(m.removeEventListener(v,mn),p.delete(v),p.size===0&&Er.delete(m)):p.set(v,b)}bn.delete(d),c!==r&&((g=c.parentNode)==null||g.removeChild(c))}});return Yo.set(l,u),l}let Yo=new WeakMap;var Ce,Fe,xe,xt,hr,pr,zr;class In{constructor(t,r=!0){_e(this,"anchor");N(this,Ce,new Map);N(this,Fe,new Map);N(this,xe,new Map);N(this,xt,new Set);N(this,hr,!0);N(this,pr,t=>{if(f(this,Ce).has(t)){var r=f(this,Ce).get(t),n=f(this,Fe).get(r);if(n)Rr(n),f(this,xt).delete(r);else{var i=f(this,xe).get(r);i&&(Rr(i.effect),f(this,Fe).set(r,i.effect),f(this,xe).delete(r),i.fragment.lastChild.remove(),this.anchor.before(i.fragment),n=i.effect)}for(const[s,o]of f(this,Ce)){if(f(this,Ce).delete(s),s===t)break;const a=f(this,xe).get(o);a&&(oe(a.effect),f(this,xe).delete(o))}for(const[s,o]of f(this,Fe)){if(s===r||f(this,xt).has(s))continue;const a=()=>{if(Array.from(f(this,Ce).values()).includes(s)){var u=document.createDocumentFragment();Dn(o,u),u.append(Ke()),f(this,xe).set(s,{effect:o,fragment:u})}else oe(o);f(this,xt).delete(s),f(this,Fe).delete(s)};f(this,hr)||!n?(f(this,xt).add(s),wt(o,a,!1)):a()}}});N(this,zr,t=>{f(this,Ce).delete(t);const r=Array.from(f(this,Ce).values());for(const[n,i]of f(this,xe))r.includes(n)||(oe(i.effect),f(this,xe).delete(n))});this.anchor=t,T(this,hr,r)}ensure(t,r){var n=P,i=Ri();if(r&&!f(this,Fe).has(t)&&!f(this,xe).has(t))if(i){var s=document.createDocumentFragment(),o=Ke();s.append(o),f(this,xe).set(t,{effect:he(()=>r(o)),fragment:s})}else f(this,Fe).set(t,he(()=>r(this.anchor)));if(f(this,Ce).set(n,t),i){for(const[a,l]of f(this,Fe))a===t?n.unskip_effect(l):n.skip_effect(l);for(const[a,l]of f(this,xe))a===t?n.unskip_effect(l.effect):n.skip_effect(l.effect);n.oncommit(f(this,pr)),n.ondiscard(f(this,zr))}else f(this,pr).call(this,n)}}Ce=new WeakMap,Fe=new WeakMap,xe=new WeakMap,xt=new WeakMap,hr=new WeakMap,pr=new WeakMap,zr=new WeakMap;function $t(e,t,r=!1){var n=new In(e),i=r?ut:0;function s(o,a){n.ensure(o,a)}kr(()=>{var o=!1;t((a,l=0)=>{o=!0,s(l,a)}),o||s(-1,null)},i)}function Ur(e,t){return t}function Go(e,t,r){for(var n=[],i=t.length,s,o=t.length,a=0;a<i;a++){let h=t[a];wt(h,()=>{if(s){if(s.pending.delete(h),s.done.add(h),s.pending.size===0){var d=e.outrogroups;xn(e,qr(s.done)),d.delete(s),d.size===0&&(e.outrogroups=null)}}else o-=1},!1)}if(o===0){var l=n.length===0&&r!==null&&e.pending.size===0;if(l){var u=r,c=u.parentNode;yo(c),c.append(u),e.items.clear()}xn(e,t,!l)}else s={pending:new Set(t),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(s)}function xn(e,t,r=!0){var n;if(e.pending.size>0){n=new Set;for(const o of e.pending.values())for(const a of o)n.add(e.items.get(a).e)}for(var i=0;i<t.length;i++){var s=t[i];if(n!=null&&n.has(s)){s.f|=je;const o=document.createDocumentFragment();Dn(s,o)}else oe(t[i],r)}}var Qn;function Wr(e,t,r,n,i,s=null){var o=e,a=new Map,l=(t&pi)!==0;if(l){var u=e;o=u.appendChild(Ke())}var c=null,h=yr(()=>{var A=r();return kn(A)?A:A==null?[]:qr(A)}),d,v=new Map,p=!0;function b(A){(y.effect.f&we)===0&&(y.pending.delete(A),y.fallback=c,Xo(y,d,o,t,n),c!==null&&(d.length===0?(c.f&je)===0?Rr(c):(c.f^=je,sr(c,null,o)):wt(c,()=>{c=null})))}function g(A){y.pending.delete(A)}var m=kr(()=>{d=$(h);for(var A=d.length,O=new Set,w=P,S=Ri(),M=0;M<A;M+=1){var H=d[M],R=n(H,M),F=p?null:a.get(R);F?(F.v&&Ut(F.v,H),F.i&&Ut(F.i,M),S&&w.unskip_effect(F.e)):(F=Ko(a,p?o:Qn??(Qn=Ke()),H,R,M,i,t,r),p||(F.e.f|=je),a.set(R,F)),O.add(R)}if(A===0&&s&&!c&&(p?c=he(()=>s(o)):(c=he(()=>s(Qn??(Qn=Ke()))),c.f|=je)),A>O.size&&Ss(),!p)if(v.set(w,O),S){for(const[k,D]of a)O.has(k)||w.skip_effect(D.e);w.oncommit(b),w.ondiscard(g)}else b(w);$(h)}),y={effect:m,items:a,pending:v,outrogroups:null,fallback:c};p=!1}function Zt(e){for(;e!==null&&(e.f&Me)===0;)e=e.next;return e}function Xo(e,t,r,n,i){var F,k,D,fe,At,re,Ie,Je,et;var s=(n&Rs)!==0,o=t.length,a=e.items,l=Zt(e.effect.first),u,c=null,h,d=[],v=[],p,b,g,m;if(s)for(m=0;m<o;m+=1)p=t[m],b=i(p,m),g=a.get(b).e,(g.f&je)===0&&((k=(F=g.nodes)==null?void 0:F.a)==null||k.measure(),(h??(h=new Set)).add(g));for(m=0;m<o;m+=1){if(p=t[m],b=i(p,m),g=a.get(b).e,e.outrogroups!==null)for(const ue of e.outrogroups)ue.pending.delete(g),ue.done.delete(g);if((g.f&le)!==0&&(Rr(g),s&&((fe=(D=g.nodes)==null?void 0:D.a)==null||fe.unfix(),(h??(h=new Set)).delete(g))),(g.f&je)!==0)if(g.f^=je,g===l)sr(g,null,r);else{var y=c?c.next:l;g===e.effect.last&&(e.effect.last=g.prev),g.prev&&(g.prev.next=g.next),g.next&&(g.next.prev=g.prev),nt(e,c,g),nt(e,g,y),sr(g,y,r),c=g,d=[],v=[],l=Zt(c.next);continue}if(g!==l){if(u!==void 0&&u.has(g)){if(d.length<v.length){var A=v[0],O;c=A.prev;var w=d[0],S=d[d.length-1];for(O=0;O<d.length;O+=1)sr(d[O],A,r);for(O=0;O<v.length;O+=1)u.delete(v[O]);nt(e,w.prev,S.next),nt(e,c,w),nt(e,S,A),l=A,c=S,m-=1,d=[],v=[]}else u.delete(g),sr(g,l,r),nt(e,g.prev,g.next),nt(e,g,c===null?e.effect.first:c.next),nt(e,c,g),c=g;continue}for(d=[],v=[];l!==null&&l!==g;)(u??(u=new Set)).add(l),v.push(l),l=Zt(l.next);if(l===null)continue}(g.f&je)===0&&d.push(g),c=g,l=Zt(g.next)}if(e.outrogroups!==null){for(const ue of e.outrogroups)ue.pending.size===0&&(xn(e,qr(ue.done)),(At=e.outrogroups)==null||At.delete(ue));e.outrogroups.size===0&&(e.outrogroups=null)}if(l!==null||u!==void 0){var M=[];if(u!==void 0)for(g of u)(g.f&le)===0&&M.push(g);for(;l!==null;)(l.f&le)===0&&l!==e.fallback&&M.push(l),l=Zt(l.next);var H=M.length;if(H>0){var R=(n&pi)!==0&&o===0?r:null;if(s){for(m=0;m<H;m+=1)(Ie=(re=M[m].nodes)==null?void 0:re.a)==null||Ie.measure();for(m=0;m<H;m+=1)(et=(Je=M[m].nodes)==null?void 0:Je.a)==null||et.fix()}Go(e,M,R)}}s&&ze(()=>{var ue,tt;if(h!==void 0)for(g of h)(tt=(ue=g.nodes)==null?void 0:ue.a)==null||tt.apply()})}function Ko(e,t,r,n,i,s,o,a){var l=(o&Ds)!==0?(o&Fs)===0?at(r,!1,!1):dt(r):null,u=(o&Is)!==0?dt(i):null;return{v:l,i:u,e:he(()=>(s(t,l??r,u??i,a),()=>{e.delete(n)}))}}function sr(e,t,r){if(e.nodes)for(var n=e.nodes.start,i=e.nodes.end,s=t&&(t.f&je)===0?t.nodes.start:r;n!==null;){var o=$r(n);if(s.before(n),n===i)return;n=o}}function nt(e,t,r){t===null?e.effect.first=r:t.next=r,r===null?e.effect.last=t:r.prev=t}function K(e,t,r,n,i){var a;var s=(a=t.$$slots)==null?void 0:a[r],o=!1;s===!0&&(s=t.children,o=!0),s===void 0||s(e,o?()=>n:n)}function rs(e,t,r){var n=new In(e);kr(()=>{var i=t()??null;n.ensure(i,i&&(s=>r(s,i)))},ut)}function Qo(e,t,r,n,i,s){var o=null,a=e,l=new In(a,!1);kr(()=>{const u=t()||null;var c=Ws;if(u===null){l.ensure(null,null);return}return l.ensure(u,h=>{if(u){if(o=Fi(u,c),fr(o,o),n){var d=null,v=o.appendChild(Ke());n(o,v),d==null||d.remove()}C.nodes.end=o,h.before(o)}}),()=>{}},ut),Vr(()=>{})}function Zo(e,t){var r=void 0,n;qi(()=>{r!==(r=t())&&(n&&(oe(n),n=null),r&&(n=he(()=>{Ln(()=>r(e))})))})}function ns(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(r=ns(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function Jo(){for(var e,t,r=0,n="",i=arguments.length;r<i;r++)(e=arguments[r])&&(t=ns(e))&&(n&&(n+=" "),n+=t);return n}function ea(e){return typeof e=="object"?Jo(e):e??""}const Zn=[...` 	
\r\f \v\uFEFF`];function ta(e,t,r){var n=e==null?"":""+e;if(r){for(var i of Object.keys(r))if(r[i])n=n?n+" "+i:i;else if(n.length)for(var s=i.length,o=0;(o=n.indexOf(i,o))>=0;){var a=o+s;(o===0||Zn.includes(n[o-1]))&&(a===n.length||Zn.includes(n[a]))?n=(o===0?"":n.substring(0,o))+n.substring(a+1):o=a}}return n===""?null:n}function Jn(e,t=!1){var r=t?" !important;":";",n="";for(var i of Object.keys(e)){var s=e[i];s!=null&&s!==""&&(n+=" "+i+": "+s+r)}return n}function en(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function ra(e,t){if(t){var r="",n,i;if(Array.isArray(t)?(n=t[0],i=t[1]):n=t,e){e=String(e).replaceAll(/\/\*.*?\*\//g,"").trim();var s=!1,o=0,a=!1,l=[];n&&l.push(...Object.keys(n).map(en)),i&&l.push(...Object.keys(i).map(en));var u=0,c=-1;const b=e.length;for(var h=0;h<b;h++){var d=e[h];if(a?d==="/"&&e[h-1]==="*"&&(a=!1):s?s===d&&(s=!1):d==="/"&&e[h+1]==="*"?a=!0:d==='"'||d==="'"?s=d:d==="("?o++:d===")"&&o--,!a&&s===!1&&o===0){if(d===":"&&c===-1)c=h;else if(d===";"||h===b-1){if(c!==-1){var v=en(e.substring(u,c).trim());if(!l.includes(v)){d!==";"&&h++;var p=e.substring(u,h).trim();r+=" "+p+";"}}u=h+1,c=-1}}}}return n&&(r+=Jn(n)),i&&(r+=Jn(i,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function Br(e,t,r,n,i,s){var o=e[an];if(o!==r||o===void 0){var a=ta(r,n,s);a==null?e.removeAttribute("class"):t?e.className=a:e.setAttribute("class",a),e[an]=r}else if(s&&i!==s)for(var l in s){var u=!!s[l];(i==null||u!==!!i[l])&&e.classList.toggle(l,u)}return s}function tn(e,t={},r,n){for(var i in r){var s=r[i];t[i]!==s&&(r[i]==null?e.style.removeProperty(i):e.style.setProperty(i,s,n))}}function na(e,t,r,n){var i=e[ln];if(i!==t){var s=ra(t,n);s==null?e.removeAttribute("style"):e.style.cssText=s,e[ln]=t}else n&&(Array.isArray(n)?(tn(e,r==null?void 0:r[0],n[0]),tn(e,r==null?void 0:r[1],n[1],"important")):tn(e,r,n));return n}function wn(e,t,r=!1){if(e.multiple){if(t==null)return;if(!kn(t))return Gs();for(var n of e.options)n.selected=t.includes(ei(n));return}for(n of e.options){var i=ei(n);if(xo(i,t)){n.selected=!0;return}}(!r||t!==void 0)&&(e.selectedIndex=-1)}function ia(e){var t=new MutationObserver(()=>{"__value"in e&&wn(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Vr(()=>{t.disconnect()})}function ei(e){return"__value"in e?e.__value:e.value}const Jt=Symbol("class"),er=Symbol("style"),is=Symbol("is custom element"),ss=Symbol("is html"),sa=An?"input":"INPUT",oa=An?"option":"OPTION",aa=An?"select":"SELECT";function la(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function ie(e,t,r,n){var i=os(e);i[t]!==(i[t]=r)&&(t==="loading"&&(e[$s]=r),r==null?e.removeAttribute(t):typeof r!="string"&&as(e).includes(t)?e[t]=r:e.setAttribute(t,r))}function fa(e,t,r,n,i=!1,s=!1){var o=os(e),a=o[is],l=!o[ss],u=t||{},c=e.nodeName===oa;for(var h in t)!(h in r)&&h[0]+h[1]!=="$$"&&(r[h]=null);r.class?r.class=ea(r.class):r[Jt]&&(r.class=null),r[er]&&(r.style??(r.style=null));var d=as(e);if(e.nodeName===sa&&"type"in r&&("value"in r||"__value"in r)){var v=r.type;(v!==u.type||v===void 0&&e.hasAttribute("type"))&&(u.type=v,ie(e,"type",v))}for(const w in r){let S=r[w];if(c&&w==="value"&&S==null){e.value=e.__value="",u[w]=S;continue}if(w==="class"){var p=e.namespaceURI==="http://www.w3.org/1999/xhtml";Br(e,p,S,n,t==null?void 0:t[Jt],r[Jt]),u[w]=S,u[Jt]=r[Jt];continue}if(w==="style"){na(e,S,t==null?void 0:t[er],r[er]),u[w]=S,u[er]=r[er];continue}var b=u[w];if(!(S===b&&!(S===void 0&&e.hasAttribute(w)))){u[w]=S;var g=w[0]+w[1];if(g!=="$$")if(g==="on"){const M={},H="$$"+w;let R=w.slice(2);var m=Do(R);if(Lo(R)&&(R=R.slice(0,-7),M.capture=!0),!m&&b){if(S!=null)continue;e.removeEventListener(R,u[H],M),u[H]=null}if(m)zo(R,e,S),qo([R]);else if(S!=null){let F=function(k){u[w].call(this,k)};var O=F;u[H]=es(R,e,F,M)}}else if(w==="style")ie(e,w,S);else if(w==="autofocus")ro(e,!!S);else if(!a&&(w==="__value"||w==="value"&&S!=null))e.value=e.__value=S;else if(w==="selected"&&c)la(e,S);else{var y=w;l||(y=Ro(y));var A=y==="defaultValue"||y==="defaultChecked";if(S==null&&!a&&!A)if(o[w]=null,y==="value"||y==="checked"){let M=e;const H=t===void 0;if(y==="value"){let R=M.defaultValue;M.removeAttribute(y),M.defaultValue=R,M.value=M.__value=H?R:null}else{let R=M.defaultChecked;M.removeAttribute(y),M.defaultChecked=R,M.checked=H?R:!1}}else e.removeAttribute(w);else A||d.includes(y)&&(a||typeof S!="string")?(e[y]=S,y in o&&(o[y]=Q)):typeof S!="function"&&ie(e,y,S)}}}return u}function ti(e,t,r=[],n=[],i=[],s,o=!1,a=!1){$i(i,r,n,l=>{var u=void 0,c={},h=e.nodeName===aa,d=!1;if(qi(()=>{var p=t(...l.map($)),b=fa(e,u,p,s,o,a);d&&h&&"value"in p&&wn(e,p.value);for(let m of Object.getOwnPropertySymbols(c))p[m]||oe(c[m]);for(let m of Object.getOwnPropertySymbols(p)){var g=p[m];m.description===Bs&&(!u||g!==u[m])&&(c[m]&&oe(c[m]),c[m]=he(()=>Zo(e,()=>g))),b[m]=g}u=b}),h){var v=e;Ln(()=>{wn(v,u.value,!0),ia(v)})}d=!0})}function os(e){return e[Ar]??(e[Ar]={[is]:e.nodeName.includes("-"),[ss]:e.namespaceURI===_i})}var ri=new Map;function as(e){var t=e.getAttribute("is")||e.nodeName,r=ri.get(t);if(r)return r;ri.set(t,r=[]);for(var n,i=e,s=Element.prototype;s!==i;){n=ui(i);for(var o in n)n[o].set&&o!=="innerHTML"&&o!=="textContent"&&o!=="innerText"&&r.push(o);i=Sn(i)}return r}function rn(e,t){return e===t||(e==null?void 0:e[qe])===t}function ua(e={},t,r,n){var i=z.r,s=C;return Ln(()=>{var o,a;return Hr(()=>{o=a,a=[],Ue(()=>{rn(r(...a),e)||(t(e,...a),o&&rn(r(...o),e)&&t(null,...o))})}),()=>{let l=s;for(;l!==i&&l.parent!==null&&l.parent.f&on;)l=l.parent;const u=()=>{a&&rn(r(...a),e)&&t(null,...a)},c=l.teardown;l.teardown=()=>{u(),c==null||c()}}}),e}function Yr(e=!1){const t=z,r=t.l.u;if(!r)return;let n=()=>vt(t.s);if(e){let i=0,s={};const o=Ht(()=>{let a=!1;const l=t.s;for(const u in l)l[u]!==s[u]&&(s[u]=l[u],a=!0);return a&&i++,i});n=()=>$(o)}r.b.length&&ko(()=>{ni(t,n),nn(r.b)}),gn(()=>{const i=Ue(()=>r.m.map(xs));return()=>{for(const s of i)typeof s=="function"&&s()}}),r.a.length&&gn(()=>{ni(t,n),nn(r.a)})}function ni(e,t){if(e.l.s)for(const r of e.l.s)$(r);t()}const da={get(e,t){if(!e.exclude.includes(t))return $(e.version),t in e.special?e.special[t]():e.props[t]},set(e,t,r){if(!(t in e.special)){var n=C;try{ge(e.parent_effect),e.special[t]=pe({get[t](){return e.props[t]}},t,gi)}finally{ge(n)}}return e.special[t](r),Bn(e.version),!0},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},deleteProperty(e,t){return e.exclude.includes(t)||(e.exclude.push(t),Bn(e.version)),!0},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function Y(e,t){return new Proxy({props:e,exclude:t,special:{},version:dt(0),parent_effect:C},da)}const ca={get(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Qt(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n)return n[t]}},set(e,t,r){let n=e.props.length;for(;n--;){let i=e.props[n];Qt(i)&&(i=i());const s=lt(i,t);if(s&&s.set)return s.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Qt(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n){const i=lt(n,t);return i&&!i.configurable&&(i.configurable=!0),i}}},has(e,t){if(t===qe||t===vi)return!1;for(let r of e.props)if(Qt(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){const t=[];for(let r of e.props)if(Qt(r)&&(r=r()),!!r){for(const n in r)t.includes(n)||t.push(n);for(const n of Object.getOwnPropertySymbols(r))t.includes(n)||t.push(n)}return t}};function ee(...e){return new Proxy({props:e},ca)}function pe(e,t,r,n){var O;var i=!Gt||(r&zs)!==0,s=(r&qs)!==0,o=(r&Vs)!==0,a=n,l=!0,u=void 0,c=()=>o&&i?(u??(u=Ht(n)),$(u)):(l&&(l=!1,a=o?Ue(n):n),a);let h;if(s){var d=qe in e||vi in e;h=((O=lt(e,t))==null?void 0:O.set)??(d&&t in e?w=>e[t]=w:void 0)}var v,p=!1;s?[v,p]=to(()=>e[t]):v=e[t],v===void 0&&n!==void 0&&(v=c(),h&&(i&&Ps(),h(v)));var b;if(i?b=()=>{var w=e[t];return w===void 0?c():(l=!0,w)}:b=()=>{var w=e[t];return w!==void 0&&(a=void 0),w===void 0?a:w},i&&(r&gi)===0)return b;if(h){var g=e.$$legacy;return(function(w,S){return arguments.length>0?((!i||!S||g||p)&&h(S?b():w),w):b()})}var m=!1,y=((r&js)!==0?Ht:yr)(()=>(m=!1,b()));s&&$(y);var A=C;return(function(w,S){if(arguments.length>0){const M=S?$(y):i&&s?Ct(w):w;return W(y,M),m=!0,a!==void 0&&(a=M),w}return Ze&&m||(A.f&we)!==0?y.v:$(y)})}function va(e){z===null&&hi(),Gt&&z.l!==null?pa(z).m.push(e):gn(()=>{const t=Ue(e);if(typeof t=="function")return t})}function ha(e){z===null&&hi(),va(()=>()=>Ue(e))}function pa(e){var t=e.l;return t.u??(t.u={a:[],b:[],m:[]})}const ga="5";var li;typeof window<"u"&&((li=window.__svelte??(window.__svelte={})).v??(li.v=new Set)).add(ga);Zs();/**
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
 */const _a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
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
 */const ba=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
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
 */const ii=(...e)=>e.filter((t,r,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===r).join(" ").trim();var ma=Uo("<svg><!><!></svg>");function te(e,t){const r=Y(t,["children","$$slots","$$events","$$legacy"]),n=Y(r,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);br(t,!1);let i=pe(t,"name",8,void 0),s=pe(t,"color",8,"currentColor"),o=pe(t,"size",8,24),a=pe(t,"strokeWidth",8,2),l=pe(t,"absoluteStrokeWidth",8,!1),u=pe(t,"iconNode",24,()=>[]);Yr();var c=ma();ti(c,(v,p,b)=>({..._a,...v,...n,width:o(),height:o(),stroke:s(),"stroke-width":p,class:b}),[()=>ba(n)?void 0:{"aria-hidden":"true"},()=>(vt(l()),vt(a()),vt(o()),Ue(()=>l()?Number(a())*24/Number(o()):a())),()=>(vt(ii),vt(i()),vt(r),Ue(()=>ii("lucide-icon","lucide",i()?`lucide-${i()}`:"",r.class)))]);var h=_(c);Wr(h,1,u,Ur,(v,p)=>{var b=vo(()=>ws($(p),2));let g=()=>$(b)[0],m=()=>$(b)[1];var y=G(),A=q(y);Qo(A,g,!0,(O,w)=>{ti(O,()=>({...m()}))}),E(v,y)});var d=x(h);K(d,t,"default",{}),E(e,c),mr()}function xa(e,t){const r=Y(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M5 12h14"}],["path",{d:"m12 5 7 7-7 7"}]];te(e,ee({name:"arrow-right"},()=>r,{get iconNode(){return n},children:(i,s)=>{var o=G(),a=q(o);K(a,t,"default",{}),E(i,o)},$$slots:{default:!0}}))}function wa(e,t){const r=Y(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m6 9 6 6 6-6"}]];te(e,ee({name:"chevron-down"},()=>r,{get iconNode(){return n},children:(i,s)=>{var o=G(),a=q(o);K(a,t,"default",{}),E(i,o)},$$slots:{default:!0}}))}function ya(e,t){const r=Y(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]];te(e,ee({name:"circle-question-mark"},()=>r,{get iconNode(){return n},children:(i,s)=>{var o=G(),a=q(o);K(a,t,"default",{}),E(i,o)},$$slots:{default:!0}}))}function $a(e,t){const r=Y(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}]];te(e,ee({name:"clipboard"},()=>r,{get iconNode(){return n},children:(i,s)=>{var o=G(),a=q(o);K(a,t,"default",{}),E(i,o)},$$slots:{default:!0}}))}function ka(e,t){const r=Y(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M12 20v2"}],["path",{d:"M12 2v2"}],["path",{d:"M17 20v2"}],["path",{d:"M17 2v2"}],["path",{d:"M2 12h2"}],["path",{d:"M2 17h2"}],["path",{d:"M2 7h2"}],["path",{d:"M20 12h2"}],["path",{d:"M20 17h2"}],["path",{d:"M20 7h2"}],["path",{d:"M7 20v2"}],["path",{d:"M7 2v2"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1"}]];te(e,ee({name:"cpu"},()=>r,{get iconNode(){return n},children:(i,s)=>{var o=G(),a=q(o);K(a,t,"default",{}),E(i,o)},$$slots:{default:!0}}))}function Rn(e,t){const r=Y(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M12 15V3"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["path",{d:"m7 10 5 5 5-5"}]];te(e,ee({name:"download"},()=>r,{get iconNode(){return n},children:(i,s)=>{var o=G(),a=q(o);K(a,t,"default",{}),E(i,o)},$$slots:{default:!0}}))}function Sa(e,t){const r=Y(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M10 9H8"}],["path",{d:"M16 13H8"}],["path",{d:"M16 17H8"}]];te(e,ee({name:"file-text"},()=>r,{get iconNode(){return n},children:(i,s)=>{var o=G(),a=q(o);K(a,t,"default",{}),E(i,o)},$$slots:{default:!0}}))}function Ea(e,t){const r=Y(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8"}]];te(e,ee({name:"infinity"},()=>r,{get iconNode(){return n},children:(i,s)=>{var o=G(),a=q(o);K(a,t,"default",{}),E(i,o)},$$slots:{default:!0}}))}function Aa(e,t){const r=Y(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];te(e,ee({name:"info"},()=>r,{get iconNode(){return n},children:(i,s)=>{var o=G(),a=q(o);K(a,t,"default",{}),E(i,o)},$$slots:{default:!0}}))}function Ma(e,t){const r=Y(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4"}]];te(e,ee({name:"lock"},()=>r,{get iconNode(){return n},children:(i,s)=>{var o=G(),a=q(o);K(a,t,"default",{}),E(i,o)},$$slots:{default:!0}}))}function Ta(e,t){const r=Y(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}]];te(e,ee({name:"mail"},()=>r,{get iconNode(){return n},children:(i,s)=>{var o=G(),a=q(o);K(a,t,"default",{}),E(i,o)},$$slots:{default:!0}}))}function Pa(e,t){const r=Y(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M4 5h16"}],["path",{d:"M4 12h16"}],["path",{d:"M4 19h16"}]];te(e,ee({name:"menu"},()=>r,{get iconNode(){return n},children:(i,s)=>{var o=G(),a=q(o);K(a,t,"default",{}),E(i,o)},$$slots:{default:!0}}))}function Na(e,t){const r=Y(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M9 18V5l12-2v13"}],["circle",{cx:"6",cy:"18",r:"3"}],["circle",{cx:"18",cy:"16",r:"3"}]];te(e,ee({name:"music"},()=>r,{get iconNode(){return n},children:(i,s)=>{var o=G(),a=q(o);K(a,t,"default",{}),E(i,o)},$$slots:{default:!0}}))}function Ca(e,t){const r=Y(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];te(e,ee({name:"refresh-cw"},()=>r,{get iconNode(){return n},children:(i,s)=>{var o=G(),a=q(o);K(a,t,"default",{}),E(i,o)},$$slots:{default:!0}}))}function La(e,t){const r=Y(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M12 8v4"}],["path",{d:"M12 16h.01"}]];te(e,ee({name:"shield-alert"},()=>r,{get iconNode(){return n},children:(i,s)=>{var o=G(),a=q(o);K(a,t,"default",{}),E(i,o)},$$slots:{default:!0}}))}function Fn(e,t){const r=Y(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"m9 12 2 2 4-4"}]];te(e,ee({name:"shield-check"},()=>r,{get iconNode(){return n},children:(i,s)=>{var o=G(),a=q(o);K(a,t,"default",{}),E(i,o)},$$slots:{default:!0}}))}function ls(e,t){const r=Y(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2"}],["path",{d:"M12 18h.01"}]];te(e,ee({name:"smartphone"},()=>r,{get iconNode(){return n},children:(i,s)=>{var o=G(),a=q(o);K(a,t,"default",{}),E(i,o)},$$slots:{default:!0}}))}function ur(e,t){const r=Y(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"}],["path",{d:"M20 2v4"}],["path",{d:"M22 4h-4"}],["circle",{cx:"4",cy:"20",r:"2"}]];te(e,ee({name:"sparkles"},()=>r,{get iconNode(){return n},children:(i,s)=>{var o=G(),a=q(o);K(a,t,"default",{}),E(i,o)},$$slots:{default:!0}}))}function fs(e,t){const r=Y(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];te(e,ee({name:"x"},()=>r,{get iconNode(){return n},children:(i,s)=>{var o=G(),a=q(o);K(a,t,"default",{}),E(i,o)},$$slots:{default:!0}}))}function us(e,t){const r=Y(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"}]];te(e,ee({name:"zap"},()=>r,{get iconNode(){return n},children:(i,s)=>{var o=G(),a=q(o);K(a,t,"default",{}),E(i,o)},$$slots:{default:!0}}))}var Oa=B('<div class="lg:hidden px-4 pt-2 pb-6 space-y-2 bg-slate-950/95 border-b border-slate-800"><a class="block px-4 py-3 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-900 hover:text-white">Video Downloader</a> <a class="block px-4 py-3 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-900 hover:text-white">YouTube to MP3</a> <a class="block px-4 py-3 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-900 hover:text-white">YouTube to MP4</a> <a class="block px-4 py-3 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-900 hover:text-white">Shorts Downloader</a> <a class="block px-4 py-3 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-900 hover:text-white">Guide</a> <button class="w-full text-left px-4 py-3 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-900 hover:text-white cursor-pointer">Privacy Policy</button> <div class="pt-2"><button class="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow-lg shadow-blue-500/25"><!> <span>Save Video Now</span></button></div></div>'),Da=B('<header class="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-slate-800/80"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex items-center justify-between h-16"><a class="flex items-center gap-3 group text-left focus:outline-none"><div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-500 p-0.5 shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-300"><div class="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center"><!></div></div> <div><span class="text-xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-blue-400 bg-clip-text text-transparent">LinkSave</span> <span class="block text-[10px] font-semibold text-blue-400/90 tracking-wider uppercase -mt-1">Video Downloader</span></div></a> <nav class="hidden lg:flex items-center gap-1 xl:gap-2"><a class="px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-900/80 rounded-lg transition-colors">Video Downloader</a> <a class="px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-900/80 rounded-lg transition-colors">YouTube to MP3</a> <a class="px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-900/80 rounded-lg transition-colors">YouTube to MP4</a> <a class="px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-900/80 rounded-lg transition-colors">Shorts Downloader</a> <a class="px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-900/80 rounded-lg transition-colors">Guide</a></nav> <div class="hidden sm:flex items-center gap-3"><div class="hidden xl:flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400"><!> <span>100% Free & Safe</span></div> <button class="relative inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-xs sm:text-sm shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 hover:from-blue-500 hover:to-indigo-500 transition-all duration-200 cursor-pointer"><!> <span>Save Video</span></button></div> <div class="flex md:hidden"><button class="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 focus:outline-none" aria-label="Toggle menu"><!></button></div></div></div> <!></header>');function Ia(e,t){br(t,!1);let r=pe(t,"onOpenModal",8,re=>{}),n=at(!1);const i="/".endsWith("/")?"/":"//";function s(re){W(n,!1);const Ie=document.getElementById(re);Ie&&Ie.scrollIntoView({behavior:"smooth"})}Yr();var o=Da(),a=_(o),l=_(a),u=_(l),c=_(u),h=_(c),d=_(h);Rn(d,{class:"w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform duration-300"});var v=x(u,2),p=_(v),b=x(p,2),g=x(b,2),m=x(g,2),y=x(m,2),A=x(v,2),O=_(A),w=_(O);Fn(w,{class:"w-3.5 h-3.5"});var S=x(O,2),M=_(S);ur(M,{class:"w-4 h-4"});var H=x(A,2),R=_(H),F=_(R);{var k=re=>{fs(re,{class:"w-6 h-6"})},D=re=>{Pa(re,{class:"w-6 h-6"})};$t(F,re=>{$(n)?re(k):re(D,-1)})}var fe=x(a,2);{var At=re=>{var Ie=Oa(),Je=_(Ie),et=x(Je,2),ue=x(et,2),tt=x(ue,2),Kt=x(tt,2),jn=x(Kt,2),ds=x(jn,2),zn=_(ds),cs=_(zn);ur(cs,{class:"w-4 h-4"}),ct(()=>{ie(Je,"href",`${i??""}youtube-video-downloader/`),ie(et,"href",`${i??""}youtube-to-mp3/`),ie(ue,"href",`${i??""}youtube-to-mp4/`),ie(tt,"href",`${i??""}youtube-shorts-downloader/`),ie(Kt,"href",`${i??""}how-to-download-youtube-videos/`)}),X("click",jn,()=>{W(n,!1),r()("privacy")}),X("click",zn,()=>{W(n,!1),s("downloader")}),E(re,Ie)};$t(fe,re=>{$(n)&&re(At)})}ct(()=>{ie(u,"href",i),ie(p,"href",`${i??""}youtube-video-downloader/`),ie(b,"href",`${i??""}youtube-to-mp3/`),ie(g,"href",`${i??""}youtube-to-mp4/`),ie(m,"href",`${i??""}youtube-shorts-downloader/`),ie(y,"href",`${i??""}how-to-download-youtube-videos/`)}),X("click",S,()=>s("downloader")),X("click",R,()=>W(n,!$(n))),E(e,o),mr()}const Ra={cnvmp3Url:"https://cnvmp3.com/v55"};var Fa=B(`<section id="downloader" class="relative max-w-4xl mx-auto px-0 sm:px-4 pt-3 sm:pt-6 pb-6 sm:pb-12 w-full"><div class="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl blur-2xl opacity-25"></div> <div class="relative bg-slate-900/90 border border-slate-800/90 rounded-2xl sm:rounded-3xl p-3.5 sm:p-8 md:p-10 shadow-2xl backdrop-blur-xl w-full"><div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-800/80"><div class="flex items-center gap-2.5"><div class="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center shadow-md shadow-blue-500/20 shrink-0"><!></div> <div><h2 class="text-sm sm:text-lg font-extrabold text-white leading-tight flex flex-wrap items-center gap-2"><span>LinkSave Downloader</span> <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold"><span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> <span>Pro Engine Active</span></span></h2> <p class="text-[11px] sm:text-xs text-slate-400">Convert & download HD videos & audio streams instantly</p></div></div></div> <div class="space-y-3 sm:space-y-4 animate-fade-in"><div class="flex items-center justify-between text-xs text-slate-400 px-3 py-2 bg-slate-950/60 rounded-xl border border-slate-800/80 gap-2"><div class="flex items-center gap-2 min-w-0"><span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span> <span class="font-semibold text-slate-200 text-[11px] sm:text-xs truncate">Direct Stream Converter</span></div> <button class="inline-flex items-center gap-1.5 px-2 py-1 rounded-lg bg-slate-800 text-slate-300 hover:text-white text-[10px] sm:text-xs font-medium transition border border-slate-700 hover:bg-slate-700 shrink-0"><!> <span>Refresh Engine</span></button></div> <div><div class="absolute top-0 left-0 right-0 h-3 bg-gradient-to-b from-[#0A0F1D] to-transparent z-10 pointer-events-none"></div> <iframe title="LinkSave Media Engine" scrolling="no" class="w-full border-0 absolute left-0 overflow-hidden iframe-crop svelte-1a8aqf5" loading="lazy" sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups" allow="clipboard-write; clipboard-read"></iframe> <div class="absolute bottom-0 left-0 right-0 h-10 sm:h-12 bg-gradient-to-t from-[#0A0F1D] via-[#0A0F1D]/90 to-transparent z-10 pointer-events-none"></div></div> <div class="grid grid-cols-2 gap-3 pt-1"><button type="button" class="w-full py-2.5 px-3 rounded-xl border-2 border-cyan-400 bg-slate-950/80 hover:bg-cyan-500/10 text-white font-bold text-xs sm:text-sm transition-all duration-200 flex items-center justify-center active:scale-95 shadow-lg shadow-cyan-500/10 cursor-pointer">Bitrate/Quality</button> <button type="button" class="w-full py-2.5 px-3 rounded-xl border-2 border-emerald-500 bg-slate-950/80 hover:bg-emerald-500/10 text-white font-bold text-xs sm:text-sm transition-all duration-200 flex items-center justify-center active:scale-95 shadow-lg shadow-emerald-500/10 cursor-pointer">MP3 / MP4</button></div></div> <div class="mt-4 pt-3 border-t border-slate-800/60 text-center flex items-center justify-center gap-2 text-[10px] sm:text-[11px] text-slate-400"><!> <span>Notice: Please only download media you own or have explicit
        authorization to download.</span></div></div></section>`);function ja(e,t){br(t,!1);const r=at();let n=Ra.cnvmp3Url,i=at(!1),s=at(!1),o=null,a=at(null);function l(){W(s,!0),o&&clearTimeout(o),o=setTimeout(()=>{W(s,!1)},2500)}function u(){if($(a)){W(i,!0);const k=$(r);Wn(a,$(a).src=""),setTimeout(()=>{$(a)&&Wn(a,$(a).src=k),W(i,!1)},150)}}ha(()=>{o&&clearTimeout(o)}),Eo(()=>{},()=>{W(r,n)}),Ao(),Yr();var c=Fa(),h=x(_(c),2),d=_(h),v=_(d),p=_(v),b=_(p);ur(b,{class:"w-4 h-4 sm:w-5 sm:h-5 text-white"});var g=x(d,2),m=_(g),y=x(_(m),2),A=_(y);{let k=yr(()=>$(i)?"animate-spin text-blue-400":"");Ca(A,{get class(){return`w-3 h-3 sm:w-3.5 sm:h-3.5 ${$(k)??""}`}})}var O=x(m,2),w=x(_(O),2);ua(w,k=>W(a,k),()=>$(a));var S=x(O,2),M=_(S),H=x(M,2),R=x(g,2),F=_(R);La(F,{class:"w-3.5 h-3.5 text-amber-400 shrink-0"}),ct(()=>{Br(O,1,`relative w-full ${$(s)?"h-[350px] sm:h-[320px]":"h-[200px] sm:h-[185px]"} rounded-2xl overflow-hidden bg-[#0A0F1D] border border-slate-800 shadow-2xl group transition-all duration-300 ease-in-out`),ie(w,"src",$(r))}),X("click",y,u),X("click",M,l),X("click",H,l),E(e,c),mr()}var za=B('<section id="hero" class="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden"><div class="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div> <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-600/20 via-indigo-600/20 to-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"><div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-blue-400 text-xs sm:text-sm font-medium mb-6 shadow-md backdrop-blur-sm animate-fade-in"><!> <span class="text-slate-300">Save Videos. Simply.</span> <span class="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span></div> <h1 class="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-[1.15]">ONLINE VIDEO <br class="hidden sm:block"/> <span class="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">DOWNLOADER</span></h1> <p class="mt-6 text-base sm:text-xl text-slate-400 max-w-2xl mx-auto font-normal leading-relaxed">Save high-quality videos from supported platforms. Just paste a link and get your media instantly.</p> <div class="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm font-semibold text-slate-300"><div class="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800"><!> <span>Fast Speed</span></div> <div class="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800"><!> <span>Simple & Free</span></div> <div class="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800"><!> <span>Mobile Friendly</span></div></div> <div class="mt-10"><!></div></div></section>');function qa(e){var t=za(),r=x(_(t),4),n=_(r),i=_(n);ur(i,{class:"w-4 h-4 text-blue-400"});var s=x(n,6),o=_(s),a=_(o);us(a,{class:"w-4 h-4 text-amber-400"});var l=x(o,2),u=_(l);Fn(u,{class:"w-4 h-4 text-emerald-400"});var c=x(l,2),h=_(c);ls(h,{class:"w-4 h-4 text-blue-400"});var d=x(s,2),v=_(d);ja(v,{}),E(e,t)}var Va=B('<div class="relative group bg-slate-900/90 border border-slate-800/90 rounded-3xl p-8 hover:border-blue-500/50 hover:bg-slate-900 transition-all duration-300 shadow-xl flex flex-col justify-between"><div><div class="flex items-center justify-between mb-6"><div><div class="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center"><!></div></div> <span class="text-4xl font-black text-slate-800 group-hover:text-blue-500/30 transition-colors"> </span></div> <h3 class="text-xl font-bold text-white tracking-tight"> </h3> <p class="text-xs font-semibold text-blue-400 uppercase tracking-wider mt-0.5"> </p> <p class="mt-4 text-sm text-slate-400 leading-relaxed"> </p></div> <div class="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-slate-400"><span></span> <!></div></div>'),Ha=B('<section id="how-it-works" class="py-16 md:py-24 relative overflow-hidden"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"><div class="text-center max-w-3xl mx-auto mb-16"><span class="text-xs font-extrabold uppercase tracking-widest text-blue-400">Simple Process</span> <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">How LinkSave Works</h2> <p class="mt-3 text-base text-slate-400">Downloading your favorite media takes only a few seconds with 3 simple steps.</p></div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8 relative"></div></div></section>');function Ua(e){const t=[{number:"01",title:"1. Paste",subtitle:"Copy & Paste URL",description:"Copy the video link from Instagram, TikTok, X, or any platform, then paste it into the LinkSave search bar.",icon:$a,gradient:"from-blue-500 to-indigo-500"},{number:"02",title:"2. Analyze",subtitle:"Instant Extraction",description:"Our engine quickly processes the video URL, removing watermarks and finding all available qualities & audio options.",icon:ka,gradient:"from-indigo-500 to-purple-500"},{number:"03",title:"3. Save",subtitle:"One-Click Download",description:"Choose your desired resolution (1080p, 720p, or MP3 audio) and click Download to save the file straight to your device.",icon:Rn,gradient:"from-purple-500 to-pink-500"}];var r=Ha(),n=_(r),i=x(_(n),2);Wr(i,5,()=>t,Ur,(s,o,a)=>{var l=Va(),u=_(l),c=_(u),h=_(c),d=_(h),v=_(d);rs(v,()=>$(o).icon,(F,k)=>{k(F,{class:"w-6 h-6 text-white"})});var p=x(h,2),b=_(p),g=x(c,2),m=_(g),y=x(g,2),A=_(y),O=x(y,2),w=_(O),S=x(u,2),M=_(S);M.textContent=`Step ${a+1} of 3`;var H=x(M,2);{var R=F=>{xa(F,{class:"w-4 h-4 text-blue-400 hidden md:block"})};$t(H,F=>{a<2&&F(R)})}ct(()=>{Br(h,1,`w-14 h-14 rounded-2xl bg-gradient-to-tr ${$(o).gradient??""} p-0.5 shadow-lg group-hover:scale-110 transition-transform`),Xe(b,$(o).number),Xe(m,$(o).title),Xe(A,$(o).subtitle),Xe(w,$(o).description)}),E(s,l)}),E(e,r)}var Wa=B('<div class="bg-slate-900/80 border border-slate-800/80 rounded-2xl p-6 hover:border-slate-700 hover:bg-slate-900 transition-all duration-300 shadow-md"><div><!></div> <h3 class="text-lg font-bold text-white tracking-tight"> </h3> <p class="mt-2 text-sm text-slate-400 leading-relaxed"> </p></div>'),Ba=B('<section id="features" class="py-16 md:py-24 bg-slate-950/70 border-t border-slate-900"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center max-w-3xl mx-auto mb-16"><span class="text-xs font-extrabold uppercase tracking-widest text-blue-400">Why Choose LinkSave</span> <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">Designed for Speed & Simplicity</h2> <p class="mt-3 text-base text-slate-400">Everything you need to convert & save media videos effortlessly.</p></div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"></div></div></section>');function Ya(e){const t=[{title:"High Definition Quality",description:"Save videos in original full resolution up to 1080p Full HD, 2K, and 4K without quality loss.",icon:ur,color:"text-amber-400",bg:"bg-amber-500/10"},{title:"Direct Stream Extraction",description:"Download clean YouTube videos and Shorts instantly with fast stream processing.",icon:us,color:"text-blue-400",bg:"bg-blue-500/10"},{title:"100% Free & Unlimited",description:"No hidden subscription fees, no limits on daily video downloads, and no registration required.",icon:Ea,color:"text-emerald-400",bg:"bg-emerald-500/10"},{title:"Audio MP3 Converter",description:"Extract background audio or music tracks directly from video links into high-bitrate MP3 format.",icon:Na,color:"text-purple-400",bg:"bg-purple-500/10"},{title:"Universal Device Support",description:"Works seamlessly across iOS Safari, Android Chrome, Windows, macOS, Linux, and tablets.",icon:ls,color:"text-cyan-400",bg:"bg-cyan-500/10"},{title:"Safe & Secure Processing",description:"All link analysis happens securely. We do not store your download logs or track personal data.",icon:Ma,color:"text-rose-400",bg:"bg-rose-500/10"}];var r=Ba(),n=_(r),i=x(_(n),2);Wr(i,5,()=>t,Ur,(s,o)=>{var a=Wa(),l=_(a),u=_(l);rs(u,()=>$(o).icon,(p,b)=>{b(p,{get class(){return`w-6 h-6 ${$(o).color??""}`}})});var c=x(l,2),h=_(c),d=x(c,2),v=_(d);ct(()=>{Br(l,1,`w-12 h-12 rounded-xl ${$(o).bg??""} flex items-center justify-center mb-5`),Xe(h,$(o).title),Xe(v,$(o).description)}),E(s,a)}),E(e,r)}var Ga=B('<div class="px-5 pb-6 sm:px-6 text-sm text-slate-400 leading-relaxed border-t border-slate-800/60 pt-4"> </div>'),Xa=B('<div class="bg-slate-900/90 border border-slate-800/90 rounded-2xl overflow-hidden transition-all duration-200"><button class="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 text-white font-bold text-base sm:text-lg hover:text-blue-400 focus:outline-none"><span> </span> <div class="w-8 h-8 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center shrink-0"><!></div></button> <!></div>'),Ka=B('<section id="faq" class="py-16 md:py-24"><div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-12"><div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 mb-3"><!> <span>Got Questions?</span></div> <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Frequently Asked Questions</h2> <p class="mt-2 text-sm text-slate-400">Everything you need to know about using LinkSave online video downloader.</p></div> <div class="space-y-4"></div></div></section>');function Qa(e){let t=at(0);const r=[{q:"How to convert YouTube to MP3 320kbps for free?",a:"Paste any YouTube link into LinkSave, click Convert, and choose high-quality 320kbps MP3 audio format to save the sound file instantly."},{q:"How to download YouTube Shorts videos online?",a:"Copy the YouTube Shorts URL from your browser or app, paste it into the LinkSave converter box, and click Download."},{q:"Is LinkSave free?",a:"Yes. LinkSave provides a free online interface for downloading and converting supported media links. No registration is required."},{q:"Where are downloaded videos saved on my device?",a:`Downloaded files are saved in your web browser's default "Downloads" folder (or standard files location on iPhone / Android).`},{q:"Does LinkSave work on iPhone and Android mobile browsers?",a:"Absolutely! LinkSave is fully optimized for mobile devices. On iOS Safari or Android Chrome, simply paste the link and tap Download."},{q:"Do I need to install any software or browser extensions?",a:"No installation is needed! LinkSave works 100% online directly inside your web browser."}];function n(c){W(t,$(t)===c?null:c)}var i=Ka(),s=_(i),o=_(s),a=_(o),l=_(a);ya(l,{class:"w-3.5 h-3.5"});var u=x(o,2);Wr(u,5,()=>r,Ur,(c,h,d)=>{var v=Xa(),p=_(v),b=_(p),g=_(b),m=x(b,2),y=_(m);{let w=yr(()=>$(t)===d?"rotate-180 text-blue-400":"");wa(y,{get class(){return`w-4 h-4 text-slate-400 transition-transform duration-300 ${$(w)??""}`}})}var A=x(p,2);{var O=w=>{var S=Ga(),M=_(S);ct(()=>Xe(M,$(h).a)),E(w,S)};$t(A,w=>{$(t)===d&&w(O)})}ct(()=>Xe(g,$(h).q)),X("click",p,()=>n(d)),E(c,v)}),E(e,i)}var Za=B('<footer class="bg-slate-950 border-t border-slate-900 text-slate-400 pt-12 pb-8"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12"><div class="md:col-span-1 space-y-4"><div class="flex items-center gap-3"><div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md"><!></div> <span class="text-xl font-extrabold text-white tracking-tight">LinkSave</span></div> <p class="text-xs text-slate-400 leading-relaxed">Save Videos. Simply. Fast and free online video downloader and MP3 stream converter.</p></div> <div><h4 class="text-sm font-bold text-white uppercase tracking-wider mb-4">Navigation</h4> <ul class="space-y-2.5 text-xs"><li><button class="hover:text-white transition">Home</button></li> <li><button class="hover:text-white transition">Downloader Engine</button></li> <li><button class="hover:text-white transition">How It Works</button></li> <li><button class="hover:text-white transition">Features</button></li></ul></div> <div><h4 class="text-sm font-bold text-white uppercase tracking-wider mb-4">Legal & Support (AdSense)</h4> <ul class="space-y-2.5 text-xs"><li><button class="hover:text-white transition text-left">Privacy Policy</button></li> <li><button class="hover:text-white transition text-left">Terms of Service</button></li> <li><button class="hover:text-white transition text-left">About LinkSave</button></li> <li><button class="hover:text-white transition text-left">Contact Support</button></li></ul></div> <div><h4 class="text-sm font-bold text-white uppercase tracking-wider mb-4">Legal Disclaimer</h4> <p class="text-xs text-slate-500 leading-relaxed">LinkSave is an independent web application. All product names, logos, and brands are property of their respective owners.</p></div></div> <div class="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500"><p>© 2026 LinkSave. All rights reserved.</p> <div class="flex items-center gap-4"><button class="hover:text-slate-300 transition">Privacy</button> <span>•</span> <button class="hover:text-slate-300 transition">Terms</button> <span>•</span> <button class="hover:text-slate-300 transition">Contact</button></div></div></div></footer>');function Ja(e,t){br(t,!1);let r=pe(t,"onOpenModal",8,tt=>{});function n(tt){const Kt=document.getElementById(tt);Kt&&Kt.scrollIntoView({behavior:"smooth"})}Yr();var i=Za(),s=_(i),o=_(s),a=_(o),l=_(a),u=_(l),c=_(u);Rn(c,{class:"w-5 h-5"});var h=x(a,2),d=x(_(h),2),v=_(d),p=_(v),b=x(v,2),g=_(b),m=x(b,2),y=_(m),A=x(m,2),O=_(A),w=x(h,2),S=x(_(w),2),M=_(S),H=_(M),R=x(M,2),F=_(R),k=x(R,2),D=_(k),fe=x(k,2),At=_(fe),re=x(o,2),Ie=x(_(re),2),Je=_(Ie),et=x(Je,4),ue=x(et,4);X("click",p,()=>n("hero")),X("click",g,()=>n("downloader")),X("click",y,()=>n("how-it-works")),X("click",O,()=>n("features")),X("click",H,()=>r()("privacy")),X("click",F,()=>r()("terms")),X("click",D,()=>r()("about")),X("click",At,()=>r()("contact")),X("click",Je,()=>r()("privacy")),X("click",et,()=>r()("terms")),X("click",ue,()=>r()("contact")),E(e,i),mr()}var el=B('<div class="my-6 flex justify-center text-center"><div class="w-full max-w-4xl bg-slate-900/60 border border-slate-800/80 rounded-2xl p-3 flex flex-col items-center justify-center min-h-[90px] shadow-inner relative overflow-hidden"><div class="text-[10px] font-semibold uppercase tracking-wider text-slate-500 mb-1">Advertisement</div> <ins class="adsbygoogle" style="display:block; width:100%;" data-ad-format="auto" data-full-width-responsive="true"></ins> <div class="text-xs text-slate-400 font-mono py-2 px-4 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span> <span> </span></div></div></div>');function si(e,t){let r=pe(t,"slotType",8,"leaderboard"),n=pe(t,"adClient",8,"ca-pub-XXXXXXXXXXXXXXXX"),i=pe(t,"adSlot",8,"1234567890");var s=el(),o=_(s),a=x(_(o),2),l=x(a,2),u=x(_(l),2),c=_(u);ct(()=>{ie(a,"data-ad-client",n()),ie(a,"data-ad-slot",i()),Xe(c,`AdSpace Reserved for Google AdSense (${r()??""})`)}),E(e,s)}var tl=B('<!> <h3 class="text-lg font-bold text-white">Privacy Policy</h3>',1),rl=B('<!> <h3 class="text-lg font-bold text-white">Terms of Service</h3>',1),nl=B('<!> <h3 class="text-lg font-bold text-white">About LinkSave</h3>',1),il=B('<!> <h3 class="text-lg font-bold text-white">Contact & Support</h3>',1),sl=B('<p class="font-semibold text-white">Effective Date: September 2026</p> <p>At <strong>LinkSave</strong>, accessible from <code>https://linksaves.com/</code>, the privacy of our visitors is one of our main priorities. This Privacy Policy document outlines the types of information collected and how it is used.</p> <h4 class="font-bold text-white text-base pt-2">1. Google AdSense & Third-Party Cookies</h4> <p>Google is a third-party vendor on our site. It uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to our website and other sites on the internet. Users may choose to decline the use of DART cookies by visiting the Google Ad and Content Network Privacy Policy.</p> <h4 class="font-bold text-white text-base pt-2">2. Log Files</h4> <p>LinkSave follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected includes IP addresses, browser type, ISP, date and time stamp, referring/exit pages, and number of clicks.</p> <h4 class="font-bold text-white text-base pt-2">3. CCPA & GDPR Privacy Rights</h4> <p>Under CCPA and GDPR, users have the right to request disclosure of personal data collected, request deletion of data, and opt-out of the sale of personal data. If you make a request, we have one month to respond to you.</p>',1),ol=B('<p class="font-semibold text-white">Last Updated: September 2026</p> <p>By accessing or using <strong>LinkSave</strong>, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.</p> <h4 class="font-bold text-white text-base pt-2">1. Acceptable Use & Fair Usage</h4> <p>LinkSave is provided solely for personal, non-commercial, and fair-use educational purposes. Users must respect copyright laws and only download content they own, have explicit authorization to download, or content under creative commons and public domain licenses.</p> <h4 class="font-bold text-white text-base pt-2">2. Intellectual Property Rights & DMCA</h4> <p>LinkSave does not host, store, or re-transmit copyrighted video or audio files on its servers. All media content remains the exclusive property of their respective creators and copyright holders.</p> <h4 class="font-bold text-white text-base pt-2">3. Limitation of Liability</h4> <p>In no event shall LinkSave be liable for any indirect, incidental, or consequential damages arising out of the use or inability to use the service.</p>',1),al=B('<p><strong>LinkSave</strong> is a free, high-performance online media converter utility designed to help users extract video streams and high-quality MP3 audio files seamlessly for offline educational and fair-use playback.</p> <p class="pt-2">Our mission is to provide a clean, fast, and secure user experience across all web browsers and devices without forcing registration or software downloads.</p>',1),ll=B('<p>Have questions, feedback, or business inquiries? Get in touch with our team:</p> <div class="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 font-mono text-xs text-blue-400"><p><strong>Support & Inquiries:</strong> linksave357@gmail.com</p> <p><strong>Response Time:</strong> Within 24 hours</p></div>',1),fl=B('<div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in"><div class="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[85vh] flex flex-col"><div class="flex items-center justify-between pb-4 border-b border-slate-800 shrink-0"><div class="flex items-center gap-2.5"><!></div> <button class="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition" aria-label="Close Modal"><!></button></div> <div class="py-5 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed pr-1"><!></div> <div class="pt-4 border-t border-slate-800 flex justify-end shrink-0"><button class="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl transition">Close</button></div></div></div>');function ul(e,t){let r=pe(t,"activeModal",8,null),n=pe(t,"onClose",8,()=>{});var i=G(),s=q(i);{var o=a=>{var l=fl(),u=_(l),c=_(u),h=_(c),d=_(h);{var v=k=>{var D=tl(),fe=q(D);Fn(fe,{class:"w-5 h-5 text-emerald-400"}),E(k,D)},p=k=>{var D=rl(),fe=q(D);Sa(fe,{class:"w-5 h-5 text-blue-400"}),E(k,D)},b=k=>{var D=nl(),fe=q(D);Aa(fe,{class:"w-5 h-5 text-purple-400"}),E(k,D)},g=k=>{var D=il(),fe=q(D);Ta(fe,{class:"w-5 h-5 text-amber-400"}),E(k,D)};$t(d,k=>{r()==="privacy"?k(v):r()==="terms"?k(p,1):r()==="about"?k(b,2):r()==="contact"&&k(g,3)})}var m=x(h,2),y=_(m);fs(y,{class:"w-5 h-5"});var A=x(c,2),O=_(A);{var w=k=>{var D=sl();E(k,D)},S=k=>{var D=ol();E(k,D)},M=k=>{var D=al();E(k,D)},H=k=>{var D=ll();E(k,D)};$t(O,k=>{r()==="privacy"?k(w):r()==="terms"?k(S,1):r()==="about"?k(M,2):r()==="contact"&&k(H,3)})}var R=x(A,2),F=_(R);X("click",m,function(...k){var D;(D=n())==null||D.apply(this,k)}),X("click",F,function(...k){var D;(D=n())==null||D.apply(this,k)}),E(a,l)};$t(s,a=>{r()&&a(o)})}E(e,i)}var dl=B('<div class="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-600 selection:text-white"><!> <main><!> <section class="max-w-7xl mx-auto px-4"><!></section> <!> <section class="max-w-7xl mx-auto px-4"><!></section> <!> <!></main> <!> <!></div>');function cl(e){let t=at(null);function r(m){W(t,m)}function n(){W(t,null)}var i=dl(),s=_(i);Ia(s,{onOpenModal:r});var o=x(s,2),a=_(o);qa(a);var l=x(a,2),u=_(l);si(u,{slotType:"leaderboard"});var c=x(l,2);Ua(c);var h=x(c,2),d=_(h);si(d,{slotType:"rectangle"});var v=x(h,2);Ya(v);var p=x(v,2);Qa(p);var b=x(o,2);Ja(b,{onOpenModal:r});var g=x(b,2);ul(g,{get activeModal(){return $(t)},onClose:n}),E(e,i)}const yn=document.getElementById("app")||document.body;yn&&(yn.innerHTML="");Wo(cl,{target:yn});

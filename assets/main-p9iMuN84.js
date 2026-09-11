var ws=Object.defineProperty;var Hn=e=>{throw TypeError(e)};var ys=(e,t,r)=>t in e?ws(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var pe=(e,t,r)=>ys(e,typeof t!="symbol"?t+"":t,r),Gr=(e,t,r)=>t.has(e)||Hn("Cannot "+r);var f=(e,t,r)=>(Gr(e,t,"read from private field"),r?r.call(e):t.get(e)),N=(e,t,r)=>t.has(e)?Hn("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),T=(e,t,r,n)=>(Gr(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r),D=(e,t,r)=>(Gr(e,t,"access private method"),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}})();const vi=!1;var kn=Array.isArray,$s=Array.prototype.indexOf,Or=Array.prototype.includes,Vr=Array.from,ks=Object.defineProperty,at=Object.getOwnPropertyDescriptor,hi=Object.getOwnPropertyDescriptors,Ss=Object.prototype,Es=Array.prototype,Sn=Object.getPrototypeOf,Wn=Object.isExtensible;function Jt(e){return typeof e=="function"}const As=()=>{};function Ms(e){return e()}function nn(e){for(var t=0;t<e.length;t++)e[t]()}function pi(){var e,t,r=new Promise((n,i)=>{e=n,t=i});return{promise:r,resolve:e,reject:t}}function Ts(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const r=[];for(const n of e)if(r.push(n),r.length===t)break;return r}const re=2,jt=4,br=8,En=1<<24,Oe=16,Ae=32,Xe=64,sn=128,Se=512,Z=1024,J=2048,Ee=4096,le=8192,me=16384,Ht=32768,on=1<<25,ft=65536,Dr=1<<17,Ps=1<<18,Wt=1<<19,gi=1<<20,Fe=1<<25,yt=65536,Ir=1<<21,Pt=1<<22,lt=1<<23,Ue=Symbol("$state"),_i=Symbol("legacy props"),Ns=Symbol(""),Tr=Symbol("attributes"),an=Symbol("class"),ln=Symbol("style"),nr=Symbol("text"),mr=new class extends Error{constructor(){super(...arguments);pe(this,"name","StaleReactionError");pe(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}};var ui;const An=!!((ui=globalThis.document)!=null&&ui.contentType)&&globalThis.document.contentType.includes("xml");function bi(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Cs(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Ls(e,t,r){throw new Error("https://svelte.dev/e/each_key_duplicate")}function Os(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Ds(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Is(e){throw new Error("https://svelte.dev/e/effect_orphan")}function Rs(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function js(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function Fs(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function zs(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function qs(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Us(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const Vs=1,Hs=2,mi=4,Ws=8,Bs=16,Ys=1,Gs=2,xi=4,Ks=8,Qs=16,Xs=1,Zs=2,X=Symbol("uninitialized"),wi="http://www.w3.org/1999/xhtml",Js="http://www.w3.org/2000/svg",eo="@attach";function to(){console.warn("https://svelte.dev/e/derived_inert")}function ro(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function no(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function yi(e){return e===this.v}function io(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function $i(e){return!io(e,this.v)}let Bt=!1,so=!1;function oo(){Bt=!0}let z=null;function Ft(e){z=e}function Yt(e,t=!1,r){z={p:z,i:!1,c:null,e:null,s:e,x:null,r:C,l:Bt&&!t?{s:null,u:null,$:[]}:null}}function Gt(e){var t=z,r=t.e;if(r!==null){t.e=null;for(var n of r)Hi(n)}return t.i=!0,z=t.p,{}}function xr(){return!Bt||z!==null&&z.l===null}let At=[];function ao(){var e=At;At=[],nn(e)}function ze(e){if(At.length===0){var t=At;queueMicrotask(()=>{t===At&&ao()})}At.push(e)}function ki(e){var t=C;if(t===null)return O.f|=lt,e;if((t.f&Ht)===0&&(t.f&jt)===0)throw e;st(e,t)}function st(e,t){if(!(t!==null&&(t.f&me)!==0)){for(;t!==null;){if((t.f&sn)!==0){if((t.f&Ht)===0)throw e;try{t.b.error(e);return}catch(r){e=r}}t=t.parent}throw e}}const lo=-7169;function W(e,t){e.f=e.f&lo|t}function Mn(e){(e.f&Se)!==0||e.deps===null?W(e,Z):W(e,Ee)}function Si(e){if(e!==null)for(const t of e)(t.f&re)===0||(t.f&yt)===0||(t.f^=yt,Si(t.deps))}function Ei(e,t,r){(e.f&J)!==0?t.add(e):(e.f&Ee)!==0&&r.add(e),Si(e.deps),W(e,Z)}let Er=!1;function fo(e){var t=Er;try{return Er=!1,[e(),Er]}finally{Er=t}}function uo(e,t){if(t){const r=document.body;e.autofocus=!0,ze(()=>{document.activeElement===r&&e.focus()})}}function wr(e){var t=O,r=C;Me(null),he(null);try{return e()}finally{Me(t),he(r)}}function co(e){let t=0,r=ut(0),n;return()=>{Cn()&&(y(r),Wr(()=>(t===0&&(n=We(()=>e(()=>fr(r)))),t+=1,()=>{ze(()=>{t-=1,t===0&&(n==null||n(),n=void 0,fr(r))})})))}}var vo=ft|Wt;function ho(e,t,r,n){new po(e,t,r,n)}var ye,$n,$e,ht,ue,ke,ae,_e,Be,pt,nt,Nt,vr,hr,Ye,zr,V,go,_o,fn,bo,un,Pr,Nr,cn,dn;class po{constructor(t,r,n,i){N(this,V);pe(this,"parent");pe(this,"is_pending",!1);pe(this,"transform_error");N(this,ye);N(this,$n,null);N(this,$e);N(this,ht);N(this,ue);N(this,ke,null);N(this,ae,null);N(this,_e,null);N(this,Be,null);N(this,pt,0);N(this,nt,0);N(this,Nt,!1);N(this,vr,new Set);N(this,hr,new Set);N(this,Ye,null);N(this,zr,co(()=>(T(this,Ye,ut(f(this,pt))),()=>{T(this,Ye,null)})));var s;T(this,ye,t),T(this,$e,r),T(this,ht,o=>{var a=C;a.b=this,a.f|=sn,n(o)}),this.parent=C.b,this.transform_error=i??((s=this.parent)==null?void 0:s.transform_error)??(o=>o),T(this,ue,kr(()=>{D(this,V,un).call(this)},vo))}defer_effect(t){Ei(t,f(this,vr),f(this,hr))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!f(this,$e).pending}update_pending_count(t,r){D(this,V,cn).call(this,t,r),T(this,pt,f(this,pt)+t),!(!f(this,Ye)||f(this,Nt))&&(T(this,Nt,!0),ze(()=>{T(this,Nt,!1),f(this,Ye)&&qt(f(this,Ye),f(this,pt))}))}get_effect_pending(){return f(this,zr).call(this),y(f(this,Ye))}error(t){if(!f(this,$e).onerror&&!f(this,$e).failed)throw t;P!=null&&P.is_fork?(f(this,ke)&&P.skip_effect(f(this,ke)),f(this,ae)&&P.skip_effect(f(this,ae)),f(this,_e)&&P.skip_effect(f(this,_e)),P.oncommit(()=>{D(this,V,dn).call(this,t)})):D(this,V,dn).call(this,t)}}ye=new WeakMap,$n=new WeakMap,$e=new WeakMap,ht=new WeakMap,ue=new WeakMap,ke=new WeakMap,ae=new WeakMap,_e=new WeakMap,Be=new WeakMap,pt=new WeakMap,nt=new WeakMap,Nt=new WeakMap,vr=new WeakMap,hr=new WeakMap,Ye=new WeakMap,zr=new WeakMap,V=new WeakSet,go=function(){try{T(this,ke,ve(()=>f(this,ht).call(this,f(this,ye))))}catch(t){this.error(t)}},_o=function(t){const r=f(this,$e).failed,{reset:n,invoke_onerror:i}=D(this,V,fn).call(this,t);ze(i),r&&T(this,_e,ve(()=>{r(f(this,ye),()=>t,()=>n)}))},fn=function(t){var r=!1,n=!1;const i=()=>{if(r){no();return}r=!0,n&&Us(),f(this,_e)!==null&&mt(f(this,_e),()=>{T(this,_e,null)}),D(this,V,Nr).call(this,()=>{D(this,V,un).call(this)})};return{reset:i,invoke_onerror:()=>{var o,a;try{n=!0,(a=(o=f(this,$e)).onerror)==null||a.call(o,t,i),n=!1}catch(l){st(l,f(this,ue)&&f(this,ue).parent)}}}},bo=function(){const t=f(this,$e).pending;t&&(this.is_pending=!0,T(this,ae,ve(()=>t(f(this,ye)))),ze(()=>{var r=T(this,Be,document.createDocumentFragment()),n=Qe();r.append(n),T(this,ke,D(this,V,Nr).call(this,()=>ve(()=>f(this,ht).call(this,n)))),f(this,nt)===0&&(f(this,ye).before(r),T(this,Be,null),mt(f(this,ae),()=>{T(this,ae,null)}),D(this,V,Pr).call(this,P))}))},un=function(){try{if(this.is_pending=this.has_pending_snippet(),T(this,nt,0),T(this,pt,0),T(this,ke,ve(()=>{f(this,ht).call(this,f(this,ye))})),f(this,nt)>0){var t=T(this,Be,document.createDocumentFragment());Dn(f(this,ke),t);const r=f(this,$e).pending;T(this,ae,ve(()=>r(f(this,ye))))}else D(this,V,Pr).call(this,P)}catch(r){this.error(r)}},Pr=function(t){this.is_pending=!1,t.transfer_effects(f(this,vr),f(this,hr))},Nr=function(t){var r=C,n=O,i=z;he(f(this,ue)),Me(f(this,ue)),Ft(f(this,ue).ctx);try{return $t.ensure(),t()}catch(s){return ki(s),null}finally{he(r),Me(n),Ft(i)}},cn=function(t,r){var n;if(!this.has_pending_snippet()){this.parent&&D(n=this.parent,V,cn).call(n,t,r);return}T(this,nt,f(this,nt)+t),f(this,nt)===0&&(D(this,V,Pr).call(this,r),f(this,ae)&&mt(f(this,ae),()=>{T(this,ae,null)}),f(this,Be)&&(f(this,ye).before(f(this,Be)),T(this,Be,null)))},dn=function(t){f(this,ke)&&(oe(f(this,ke)),T(this,ke,null)),f(this,ae)&&(oe(f(this,ae)),T(this,ae,null)),f(this,_e)&&(oe(f(this,_e)),T(this,_e,null));let r=f(this,$e).failed;const n=i=>{const{reset:s,invoke_onerror:o}=D(this,V,fn).call(this,i);o(),r&&T(this,_e,D(this,V,Nr).call(this,()=>{try{return ve(()=>{var a=C;a.b=this,a.f|=sn,r(f(this,ye),()=>i,()=>s)})}catch(a){return st(a,f(this,ue).parent),null}}))};ze(()=>{var i;try{i=this.transform_error(t)}catch(s){st(s,f(this,ue)&&f(this,ue).parent);return}i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(n,s=>st(s,f(this,ue)&&f(this,ue).parent)):n(i)})};function Ai(e,t,r,n){const i=xr()?zt:yr;var s=e.filter(v=>!v.settled),o=t.map(i);if(r.length===0&&s.length===0){n(o);return}var a=C,l=mo(),u=s.length===1?s[0].promise:s.length>1?Promise.all(s.map(v=>v.promise)):null;function d(v){if((a.f&me)===0){l();try{n([...o,...v])}catch(p){st(p,a)}Rr()}}var h=Mi();if(r.length===0){u.then(()=>d([])).finally(h);return}function c(){Promise.all(r.map(v=>xo(v))).then(d).catch(v=>st(v,a)).finally(h)}u?u.then(()=>{l(),c(),Rr()}):c()}function mo(){var e=C,t=O,r=z,n=P;return function(s=!0){he(e),Me(t),Ft(r),s&&(e.f&me)===0&&(n==null||n.activate(),n==null||n.apply())}}function Rr(e=!0){he(null),Me(null),Ft(null),e&&(P==null||P.deactivate())}function Mi(){var e=C,t=e.b,r=P,n=!!(t!=null&&t.is_rendered());return t==null||t.update_pending_count(1,r),r.increment(n,e),()=>{t==null||t.update_pending_count(-1,r),r.decrement(n,e)}}function zt(e){var t=re|J;return C!==null&&(C.f|=Wt),{ctx:z,deps:null,effects:null,equals:yi,f:t,fn:e,reactions:null,rv:0,v:X,wv:0,parent:C,ac:null}}const ir=Symbol("obsolete");function xo(e,t,r){let n=C;n===null&&Cs();var i=void 0,s=ut(X),o=!O,a=new Set;return Oo(()=>{var v,p;var l=C,u=pi();i=u.promise;try{Promise.resolve(e()).then(u.resolve,_=>{_!==mr&&u.reject(_)}).finally(Rr)}catch(_){u.reject(_),Rr()}var d=P;if(o){if((l.f&Ht)!==0)var h=Mi();if((v=n.b)!=null&&v.is_rendered())(p=d.async_deriveds.get(l))==null||p.reject(ir);else for(const _ of a.values())_.reject(ir);a.add(u),d.async_deriveds.set(l,u)}const c=(_,g=void 0)=>{h==null||h(),a.delete(u),g!==ir&&(d.activate(),g?(s.f|=lt,qt(s,g)):((s.f&lt)!==0&&(s.f^=lt),qt(s,_)),d.deactivate())};u.promise.then(c,_=>c(null,_||"unknown"))}),Hr(()=>{for(const l of a)l.reject(ir)}),new Promise(l=>{function u(d){function h(){d===i?l(s):u(i)}d.then(h,h)}u(i)})}function wo(e){const t=zt(e);return Zi(t),t}function yr(e){const t=zt(e);return t.equals=$i,t}function yo(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)oe(t[r])}}function Tn(e){var t,r=C,n=e.parent;if(!Ze&&n!==null&&e.v!==X&&(n.f&(me|le))!==0)return to(),e.v;he(n);try{e.f&=~yt,yo(e),t=rs(e)}finally{he(r)}return t}function Ti(e){var t=Tn(e);if(!e.equals(t)&&(e.wv=es(),(!(P!=null&&P.is_fork)||e.deps===null)&&(P!==null?(P.capture(e,t,!0),lr==null||lr.capture(e,t,!0)):e.v=t,e.deps===null))){W(e,Z);return}Ze||(se!==null?(Cn()||P!=null&&P.is_fork)&&se.set(e,t):Mn(e))}function $o(e){var t;if(e.effects!==null)for(const r of e.effects)(r.teardown||r.ac)&&((t=r.teardown)==null||t.call(r),r.ac!==null&&wr(()=>{r.ac.abort(mr),r.ac=null}),r.fn!==null&&(r.teardown=As),ur(r,0),On(r))}function Pi(e){if(e.effects!==null)for(const t of e.effects)t.teardown&&t.fn!==null&&kt(t)}let Kr=null,St=null,P=null,lr=null,se=null,vn=null,Qr=!1,Mt=null,Cr=null;var Bn=0;let ko=1;var Ct,it,gt,Lt,Ot,Dt,Ge,It,ce,pr,Ke,Ne,Re,Rt,_t,F,hn,sr,pn,Ni,Ci,Et,So,or;const qr=class qr{constructor(){N(this,F);pe(this,"id",ko++);N(this,Ct,!1);pe(this,"linked",!0);N(this,it,null);N(this,gt,null);pe(this,"async_deriveds",new Map);pe(this,"current",new Map);pe(this,"previous",new Map);N(this,Lt,new Set);N(this,Ot,new Set);N(this,Dt,0);N(this,Ge,new Map);N(this,It,null);N(this,ce,[]);N(this,pr,[]);N(this,Ke,new Set);N(this,Ne,new Set);N(this,Re,new Map);N(this,Rt,new Set);pe(this,"is_fork",!1);N(this,_t,!1);St===null?Kr=St=this:(T(St,gt,this),T(this,it,St)),St=this}skip_effect(t){f(this,Re).has(t)||f(this,Re).set(t,{d:[],m:[]}),f(this,Rt).delete(t)}unskip_effect(t,r=n=>this.schedule(n)){var n=f(this,Re).get(t);if(n){f(this,Re).delete(t);for(var i of n.d)W(i,J),r(i);for(i of n.m)W(i,Ee),r(i)}f(this,Rt).add(t)}capture(t,r,n=!1){t.v!==X&&!this.previous.has(t)&&this.previous.set(t,t.v),(t.f&lt)===0&&(this.current.set(t,[r,n]),se==null||se.set(t,r)),this.is_fork||(t.v=r)}activate(){P=this}deactivate(){P=null,se=null}flush(){try{Qr=!0,P=this,D(this,F,sr).call(this)}finally{Bn=0,vn=null,Mt=null,Cr=null,Qr=!1,P=null,se=null,Ve.clear()}}discard(){var t;for(const r of f(this,Ot))r(this);f(this,Ot).clear();for(const r of this.async_deriveds.values())r.reject(ir);D(this,F,or).call(this),(t=f(this,It))==null||t.resolve()}register_created_effect(t){f(this,pr).push(t)}increment(t,r){if(T(this,Dt,f(this,Dt)+1),t){let n=f(this,Ge).get(r)??0;f(this,Ge).set(r,n+1)}}decrement(t,r){if(T(this,Dt,f(this,Dt)-1),t){let n=f(this,Ge).get(r)??0;n===1?f(this,Ge).delete(r):f(this,Ge).set(r,n-1)}f(this,_t)||(T(this,_t,!0),ze(()=>{T(this,_t,!1),this.linked&&this.flush()}))}transfer_effects(t,r){for(const n of t)f(this,Ke).add(n);for(const n of r)f(this,Ne).add(n);t.clear(),r.clear()}oncommit(t){f(this,Lt).add(t)}ondiscard(t){f(this,Ot).add(t)}settled(){return(f(this,It)??T(this,It,pi())).promise}static ensure(){if(P===null){const t=P=new qr;Qr||ze(()=>{f(t,Ct)||t.flush()})}return P}apply(){{se=null;return}}schedule(t){var i;if(vn=t,(i=t.b)!=null&&i.is_pending&&(t.f&(jt|br|En))!==0&&(t.f&Ht)===0){t.b.defer_effect(t);return}for(var r=t;r.parent!==null;){r=r.parent;var n=r.f;if(Mt!==null&&r===C&&(O===null||(O.f&re)===0))return;if((n&(Xe|Ae))!==0){if((n&Z)===0)return;r.f^=Z}}f(this,ce).push(r)}};Ct=new WeakMap,it=new WeakMap,gt=new WeakMap,Lt=new WeakMap,Ot=new WeakMap,Dt=new WeakMap,Ge=new WeakMap,It=new WeakMap,ce=new WeakMap,pr=new WeakMap,Ke=new WeakMap,Ne=new WeakMap,Re=new WeakMap,Rt=new WeakMap,_t=new WeakMap,F=new WeakSet,hn=function(){if(this.is_fork)return!0;for(const n of f(this,Ge).keys()){for(var t=n,r=!1;t.parent!==null;){if(f(this,Re).has(t)){r=!0;break}t=t.parent}if(!r)return!0}return!1},sr=function(){var l,u,d,h;T(this,Ct,!0),Bn++>1e3&&(D(this,F,or).call(this),Eo());for(const c of f(this,Ke))f(this,Ne).delete(c),W(c,J),this.schedule(c);for(const c of f(this,Ne))W(c,Ee),this.schedule(c);const t=f(this,ce);T(this,ce,[]),this.apply();var r=Mt=[],n=[],i=Cr=[];for(const c of t)try{D(this,F,pn).call(this,c,r,n)}catch(v){throw Di(c),D(this,F,hn).call(this)||this.discard(),v}if(P=null,i.length>0){var s=qr.ensure();for(const c of i)s.schedule(c)}if(Mt=null,Cr=null,D(this,F,hn).call(this)){D(this,F,Et).call(this,n),D(this,F,Et).call(this,r);for(const[c,v]of f(this,Re))Oi(c,v);i.length>0&&D(l=P,F,sr).call(l);return}const o=D(this,F,Ni).call(this);if(o){D(this,F,Et).call(this,n),D(this,F,Et).call(this,r),D(u=o,F,Ci).call(u,this);return}f(this,Ke).clear(),f(this,Ne).clear();for(const c of f(this,Lt))c(this);f(this,Lt).clear(),lr=this,Yn(n),Yn(r),lr=null,(d=f(this,It))==null||d.resolve();var a=P;if(f(this,Dt)===0&&(f(this,ce).length===0||a!==null)&&D(this,F,or).call(this),f(this,ce).length>0)if(a!==null){const c=a;f(c,ce).push(...f(this,ce).filter(v=>!f(c,ce).includes(v)))}else a=this;a!==null&&(Ve.clear(),D(h=a,F,sr).call(h))},pn=function(t,r,n){t.f^=Z;for(var i=t.first;i!==null;){var s=i.f,o=(s&(Ae|Xe))!==0,a=o&&(s&Z)!==0,l=a||(s&le)!==0||f(this,Re).has(i);if(!l&&i.fn!==null){o?i.f^=Z:(s&jt)!==0?r.push(i):Kt(i)&&((s&Oe)!==0&&f(this,Ne).add(i),kt(i));var u=i.first;if(u!==null){i=u;continue}}for(;i!==null;){var d=i.next;if(d!==null){i=d;break}i=i.parent}}},Ni=function(){for(var t=f(this,it);t!==null;){if(!t.is_fork){for(const[r,[,n]]of this.current)if(t.current.has(r)&&!n)return t}t=f(t,it)}return null},Ci=function(t){var n;for(const[i,s]of t.current)!this.previous.has(i)&&t.previous.has(i)&&this.previous.set(i,t.previous.get(i)),this.current.set(i,s);for(const[i,s]of t.async_deriveds){const o=this.async_deriveds.get(i);o&&s.promise.then(o.resolve).catch(o.reject)}t.async_deriveds.clear(),this.transfer_effects(f(t,Ke),f(t,Ne));const r=i=>{var s=i.reactions;if(s!==null&&!((i.f&re)!==0&&(i.f&(J|Ee))===0))for(const l of s){var o=l.f;if((o&re)!==0)r(l);else{var a=l;o&(Pt|Oe)&&!this.async_deriveds.has(a)&&(f(this,Ne).delete(a),W(a,J),this.schedule(a))}}};for(const i of this.current.keys())r(i);this.oncommit(()=>t.discard()),D(n=t,F,or).call(n),P=this,D(this,F,sr).call(this)},Et=function(t){for(var r=0;r<t.length;r+=1)Ei(t[r],f(this,Ke),f(this,Ne))},So=function(){var h;for(let c=Kr;c!==null;c=f(c,gt)){var t=c.id<this.id,r=[];for(const[v,[p,_]]of this.current){if(c.current.has(v)){var n=c.current.get(v)[0];if(t&&p!==n)c.current.set(v,[p,_]);else continue}r.push(v)}if(t)for(const[v,p]of this.async_deriveds){const _=c.async_deriveds.get(v);_&&p.promise.then(_.resolve).catch(_.reject)}var i=[...c.current.keys()].filter(v=>!c.current.get(v)[1]);if(!(!f(c,Ct)||i.length===0)){var s=i.filter(v=>!this.current.has(v));if(s.length===0)t&&c.discard();else if(r.length>0){if(t)for(const v of f(this,Rt))c.unskip_effect(v,p=>{var _;(p.f&(Oe|Pt))!==0?c.schedule(p):D(_=c,F,Et).call(_,[p])});c.activate();var o=new Set,a=new Map;for(var l of r)Li(l,s,o,a);a=new Map;var u=[...c.current].filter(([v,p])=>{const _=this.current.get(v);return _?_[0]!==p[0]||_[1]!==p[1]:!0}).map(([v])=>v);if(u.length>0)for(const v of f(this,pr))(v.f&(me|le|Dr))===0&&Pn(v,u,a)&&((v.f&(Pt|Oe))!==0?(W(v,J),c.schedule(v)):f(c,Ke).add(v));if(f(c,ce).length>0&&!f(c,_t)){c.apply();for(var d of f(c,ce))D(h=c,F,pn).call(h,d,[],[]);T(c,ce,[])}c.deactivate()}}}},or=function(){if(this.linked){var t=f(this,it),r=f(this,gt);t===null?Kr=r:T(t,gt,r),r===null?St=t:T(r,it,t),this.linked=!1}};let $t=qr;function Eo(){try{Rs()}catch(e){st(e,vn)}}let Pe=null;function Yn(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var n=e[r++];if((n.f&(me|le))===0&&Kt(n)&&(Pe=new Set,kt(n),n.deps===null&&n.first===null&&n.nodes===null&&n.teardown===null&&n.ac===null&&Ki(n),(Pe==null?void 0:Pe.size)>0)){Ve.clear();for(const i of Pe){if((i.f&(me|le))!==0)continue;const s=[i];let o=i.parent;for(;o!==null;)Pe.has(o)&&(Pe.delete(o),s.push(o)),o=o.parent;for(let a=s.length-1;a>=0;a--){const l=s[a];(l.f&(me|le))===0&&kt(l)}}Pe.clear()}}Pe=null}}function Li(e,t,r,n){if(!r.has(e)&&(r.add(e),e.reactions!==null))for(const i of e.reactions){const s=i.f;(s&re)!==0?Li(i,t,r,n):(s&(Pt|Oe))!==0&&(s&J)===0&&Pn(i,t,n)&&(W(i,J),Nn(i))}}function Pn(e,t,r){const n=r.get(e);if(n!==void 0)return n;if(e.deps!==null)for(const i of e.deps){if(Or.call(t,i))return!0;if((i.f&re)!==0&&Pn(i,t,r))return r.set(i,!0),!0}return r.set(e,!1),!1}function Nn(e){P.schedule(e)}function Oi(e,t){if(!((e.f&Ae)!==0&&(e.f&Z)!==0)){(e.f&J)!==0?t.d.push(e):(e.f&Ee)!==0&&t.m.push(e),W(e,Z);for(var r=e.first;r!==null;)Oi(r,t),r=r.next}}function Di(e){W(e,Z);for(var t=e.first;t!==null;)Di(t),t=t.next}let jr=new Set;const Ve=new Map;let Ii=!1;function ut(e,t){var r={f:0,v:e,reactions:null,equals:yi,rv:0,wv:0};return r}function et(e,t){const r=ut(e);return Zi(r),r}function qe(e,t=!1,r=!0){var i;const n=ut(e);return t||(n.equals=$i),Bt&&r&&z!==null&&z.l!==null&&((i=z.l).s??(i.s=[])).push(n),n}function Gn(e,t){return H(e,We(()=>y(e))),t}function H(e,t,r=!1){O!==null&&(!De||(O.f&Dr)!==0)&&xr()&&(O.f&(re|Oe|Pt|Dr))!==0&&(He===null||!He.has(e))&&qs();let n=r?Tt(t):t;return qt(e,n,Cr)}function qt(e,t,r=null){if(!e.equals(t)){Ze?Ve.set(e,t):Ve.has(e)||Ve.set(e,e.v);var n=$t.ensure();if(n.capture(e,t),(e.f&re)!==0){const i=e;(e.f&J)!==0&&Tn(i),se===null&&Mn(i)}e.wv=es(),Ri(e,J,r),xr()&&C!==null&&(C.f&Z)!==0&&(C.f&(Ae|Xe))===0&&(we===null?Ro([e]):we.push(e)),!n.is_fork&&jr.size>0&&!Ii&&Ao()}return t}function Ao(){Ii=!1;for(const e of jr){(e.f&Z)!==0&&W(e,Ee);let t;try{t=Kt(e)}catch{t=!0}t&&kt(e)}jr.clear()}function Kn(e,t=1){var r=y(e),n=t===1?r++:r--;return H(e,r),n}function fr(e){H(e,e.v+1)}function Ri(e,t,r){var n=e.reactions;if(n!==null)for(var i=xr(),s=n.length,o=0;o<s;o++){var a=n[o],l=a.f;if(!(!i&&a===C)){var u=(l&J)===0;if(u&&W(a,t),(l&Dr)!==0)jr.add(a);else if((l&re)!==0){var d=a;se==null||se.delete(d),(l&yt)===0&&(l&Se&&(C===null||(C.f&Ir)===0)&&(a.f|=yt),Ri(d,Ee,r))}else if(u){var h=a;(l&Oe)!==0&&Pe!==null&&Pe.add(h),r!==null?r.push(h):Nn(h)}}}}function Tt(e){if(typeof e!="object"||e===null||Ue in e)return e;const t=Sn(e);if(t!==Ss&&t!==Es)return e;var r=new Map,n=kn(e),i=et(0),s=xt,o=a=>{if(xt===s)return a();var l=O,u=xt;Me(null),Jn(s);var d=a();return Me(l),Jn(u),d};return n&&r.set("length",et(e.length)),new Proxy(e,{defineProperty(a,l,u){(!("value"in u)||u.configurable===!1||u.enumerable===!1||u.writable===!1)&&Fs();var d=r.get(l);return d===void 0?o(()=>{var h=et(u.value);return r.set(l,h),h}):H(d,u.value,!0),!0},deleteProperty(a,l){var u=r.get(l);if(u===void 0){if(l in a){const d=o(()=>et(X));r.set(l,d),fr(i)}}else H(u,X),fr(i);return!0},get(a,l,u){var v;if(l===Ue)return e;var d=r.get(l),h=l in a;if(d===void 0&&(!h||(v=at(a,l))!=null&&v.writable)&&(d=o(()=>{var p=Tt(h?a[l]:X),_=et(p);return _}),r.set(l,d)),d!==void 0){var c=y(d);return c===X?void 0:c}return Reflect.get(a,l,u)},getOwnPropertyDescriptor(a,l){var u=Reflect.getOwnPropertyDescriptor(a,l);if(u&&"value"in u){var d=r.get(l);d&&(u.value=y(d))}else if(u===void 0){var h=r.get(l),c=h==null?void 0:h.v;if(h!==void 0&&c!==X)return{enumerable:!0,configurable:!0,value:c,writable:!0}}return u},has(a,l){var c;if(l===Ue)return!0;var u=r.get(l),d=u!==void 0&&u.v!==X||Reflect.has(a,l);if(u!==void 0||C!==null&&(!d||(c=at(a,l))!=null&&c.writable)){u===void 0&&(u=o(()=>{var v=d?Tt(a[l]):X,p=et(v);return p}),r.set(l,u));var h=y(u);if(h===X)return!1}return d},set(a,l,u,d){var S;var h=r.get(l),c=l in a;if(n&&l==="length")for(var v=u;v<h.v;v+=1){var p=r.get(v+"");p!==void 0?H(p,X):v in a&&(p=o(()=>et(X)),r.set(v+"",p))}if(h===void 0)(!c||(S=at(a,l))!=null&&S.writable)&&(h=o(()=>et(void 0)),H(h,Tt(u)),r.set(l,h));else{c=h.v!==X;var _=o(()=>Tt(u));H(h,_)}var g=Reflect.getOwnPropertyDescriptor(a,l);if(g!=null&&g.set&&g.set.call(d,u),!c){if(n&&typeof l=="string"){var m=r.get("length"),$=Number(l);Number.isInteger($)&&$>=m.v&&H(m,$+1)}fr(i)}return!0},ownKeys(a){y(i);var l=Reflect.ownKeys(a).filter(h=>{var c=r.get(h);return c===void 0||c.v!==X});for(var[u,d]of r)d.v!==X&&!(u in a)&&l.push(u);return l},setPrototypeOf(){zs()}})}function Qn(e){try{if(e!==null&&typeof e=="object"&&Ue in e)return e[Ue]}catch{}return e}function Mo(e,t){return Object.is(Qn(e),Qn(t))}var Xn,ji,Fi,zi;function To(){if(Xn===void 0){Xn=window,ji=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;Fi=at(t,"firstChild").get,zi=at(t,"nextSibling").get,Wn(e)&&(e[an]=void 0,e[Tr]=null,e[ln]=void 0,e.__e=void 0),Wn(r)&&(r[nr]=void 0)}}function Qe(e=""){return document.createTextNode(e)}function Ut(e){return Fi.call(e)}function $r(e){return zi.call(e)}function b(e,t){return Ut(e)}function U(e,t=!1){{var r=Ut(e);return r instanceof Comment&&r.data===""?$r(r):r}}function w(e,t=1,r=!1){let n=e;for(;t--;)n=$r(n);return n}function Po(e){e.textContent=""}function qi(){return!1}function Ui(e,t,r){return t==null||t===wi?r?document.createElement(e,{is:r}):document.createElement(e):r?document.createElementNS(t,e,{is:r}):document.createElementNS(t,e)}function Vi(e){C===null&&(O===null&&Is(),Ds()),Ze&&Os()}function No(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function Ie(e,t){var r=C;r!==null&&(r.f&le)!==0&&(e|=le);var n={ctx:z,deps:null,nodes:null,f:e|J|Se,first:null,fn:t,last:null,next:null,parent:r,b:r&&r.b,prev:null,teardown:null,wv:0,ac:null};P==null||P.register_created_effect(n);var i=n;if((e&jt)!==0)Mt!==null?Mt.push(n):$t.ensure().schedule(n);else if(t!==null){try{kt(n)}catch(o){throw oe(n),o}i.deps===null&&i.teardown===null&&i.nodes===null&&i.first===i.last&&(i.f&Wt)===0&&(i=i.first,(e&Oe)!==0&&(e&ft)!==0&&i!==null&&(i.f|=ft))}if(i!==null&&(i.parent=r,r!==null&&No(i,r),O!==null&&(O.f&re)!==0&&(e&Xe)===0)){var s=O;(s.effects??(s.effects=[])).push(i)}return n}function Cn(){return O!==null&&!De}function Hr(e){const t=Ie(br,null);return W(t,Z),t.teardown=e,t}function gn(e){Vi();var t=C.f,r=!O&&(t&Ae)!==0&&z!==null&&!z.i;if(r){var n=z;(n.e??(n.e=[])).push(e)}else return Hi(e)}function Hi(e){return Ie(jt|gi,e)}function Co(e){return Vi(),Ie(br|gi,e)}function Lo(e){$t.ensure();const t=Ie(Xe|Wt,e);return(r={})=>new Promise(n=>{r.outro?mt(t,()=>{oe(t),n(void 0)}):(oe(t),n(void 0))})}function Ln(e){return Ie(jt,e)}function Wi(e,t){var r=z,n={effect:null,ran:!1,deps:e};r.l.$.push(n),n.effect=Wr(()=>{if(e(),!n.ran){n.ran=!0;var i=C;try{he(i.parent),We(t)}finally{he(i)}}})}function Bi(){var e=z;Wr(()=>{for(var t of e.l.$){t.deps();var r=t.effect;(r.f&Z)!==0&&r.deps!==null&&W(r,Ee),Kt(r)&&kt(r),t.ran=!1}})}function Oo(e){return Ie(Pt|Wt,e)}function Wr(e,t=0){return Ie(br|t,e)}function ct(e,t=[],r=[],n=[]){Ai(n,t,r,i=>{Ie(br,()=>{e(...i.map(y))})})}function kr(e,t=0){var r=Ie(Oe|t,e);return r}function Yi(e,t=0){var r=Ie(En|t,e);return r}function ve(e){return Ie(Ae|Wt,e)}function Gi(e){var t=e.teardown;if(t!==null){const r=Ze,n=O;Zn(!0),Me(null);try{t.call(null)}finally{Zn(r),Me(n)}}}function On(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){const i=r.ac;i!==null&&wr(()=>{i.abort(mr)});var n=r.next;(r.f&Xe)!==0?r.parent=null:oe(r,t),r=n}}function Do(e){for(var t=e.first;t!==null;){var r=t.next;(t.f&Ae)===0&&oe(t),t=r}}function oe(e,t=!0){var r=!1;(t||(e.f&Ps)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(Io(e.nodes.start,e.nodes.end),r=!0),e.f|=on,On(e,t&&!r),ur(e,0);var n=e.nodes&&e.nodes.t;if(n!==null)for(const s of n)s.stop();Gi(e),e.f^=on,e.f|=me;var i=e.parent;i!==null&&i.first!==null&&Ki(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function Io(e,t){for(;e!==null;){var r=e===t?null:$r(e);e.remove(),e=r}}function Ki(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function mt(e,t,r=!0){var n=[];Qi(e,n,!0);var i=()=>{r&&oe(e),t&&t()},s=n.length;if(s>0){var o=()=>--s||i();for(var a of n)a.out(o)}else i()}function Qi(e,t,r){if((e.f&le)===0){e.f^=le;var n=e.nodes&&e.nodes.t;if(n!==null)for(const a of n)(a.is_global||r)&&t.push(a);for(var i=e.first;i!==null;){var s=i.next;if((i.f&Xe)===0){var o=(i.f&ft)!==0||(i.f&Ae)!==0&&(e.f&Oe)!==0;Qi(i,t,o?r:!1)}i=s}}}function Fr(e){Xi(e,!0)}function Xi(e,t){if((e.f&le)!==0){e.f^=le,(e.f&Z)===0&&(W(e,J),$t.ensure().schedule(e));for(var r=e.first;r!==null;){var n=r.next,i=(r.f&ft)!==0||(r.f&Ae)!==0;Xi(r,i?t:!1),r=n}var s=e.nodes&&e.nodes.t;if(s!==null)for(const o of s)(o.is_global||t)&&o.in()}}function Dn(e,t){if(e.nodes)for(var r=e.nodes.start,n=e.nodes.end;r!==null;){var i=r===n?null:$r(r);t.append(r),r=i}}let Lr=!1,Ze=!1;function Zn(e){Ze=e}let O=null,De=!1;function Me(e){O=e}let C=null;function he(e){C=e}let He=null;function Zi(e){O!==null&&(He??(He=new Set)).add(e)}let de=null,ge=0,we=null;function Ro(e){we=e}let Ji=1,dt=0,xt=dt;function Jn(e){xt=e}function es(){return++Ji}function Kt(e){var t=e.f;if((t&J)!==0)return!0;if(t&re&&(e.f&=~yt),(t&Ee)!==0){for(var r=e.deps,n=r.length,i=0;i<n;i++){var s=r[i];if(Kt(s)&&Ti(s),s.wv>e.wv)return!0}(t&Se)!==0&&se===null&&W(e,Z)}return!1}function ts(e,t,r=!0){var n=e.reactions;if(n!==null&&!(He!==null&&He.has(e)))for(var i=0;i<n.length;i++){var s=n[i];(s.f&re)!==0?ts(s,t,!1):t===s&&(r?W(s,J):(s.f&Z)!==0&&W(s,Ee),Nn(s))}}function rs(e){var _;var t=de,r=ge,n=we,i=O,s=He,o=z,a=De,l=xt,u=e.f;de=null,ge=0,we=null,O=(u&(Ae|Xe))===0?e:null,He=null,Ft(e.ctx),De=!1,xt=++dt,e.ac!==null&&(wr(()=>{e.ac.abort(mr)}),e.ac=null);try{e.f|=Ir;var d=e.fn,h=d();e.f|=Ht;var c=e.deps,v=P==null?void 0:P.is_fork;if(de!==null){var p;if(v||ur(e,ge),c!==null&&ge>0)for(c.length=ge+de.length,p=0;p<de.length;p++)c[ge+p]=de[p];else e.deps=c=de;if(Cn()&&(e.f&Se)!==0)for(p=ge;p<c.length;p++)((_=c[p]).reactions??(_.reactions=[])).push(e)}else!v&&c!==null&&ge<c.length&&(ur(e,ge),c.length=ge);if(xr()&&we!==null&&!De&&c!==null&&(e.f&(re|Ee|J))===0)for(p=0;p<we.length;p++)ts(we[p],e);if(i!==null&&i!==e){if(dt++,i.deps!==null)for(let g=0;g<r;g+=1)i.deps[g].rv=dt;if(t!==null)for(const g of t)g.rv=dt;we!==null&&(n===null?n=we:n.push(...we))}return(e.f&lt)!==0&&(e.f^=lt),h}catch(g){return ki(g)}finally{e.f^=Ir,de=t,ge=r,we=n,O=i,He=s,Ft(o),De=a,xt=l}}function jo(e,t){let r=t.reactions;if(r!==null){var n=$s.call(r,e);if(n!==-1){var i=r.length-1;i===0?r=t.reactions=null:(r[n]=r[i],r.pop())}}if(r===null&&(t.f&re)!==0&&(de===null||!Or.call(de,t))){var s=t;(s.f&Se)!==0&&(s.f^=Se,s.f&=~yt),s.v!==X&&Mn(s),s.ac!==null&&wr(()=>{s.ac.abort(mr),s.ac=null,W(s,J)}),$o(s),ur(s,0)}}function ur(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)jo(e,r[n])}function kt(e){var t=e.f;if((t&me)===0){W(e,Z);var r=C,n=Lr;C=e,Lr=(t&(Ae|Xe))===0;try{(t&(Oe|En))!==0?Do(e):On(e),Gi(e);var i=rs(e);e.teardown=typeof i=="function"?i:null,e.wv=Ji;var s;vi&&so&&(e.f&J)!==0&&e.deps}finally{Lr=n,C=r}}}function y(e){var t=e.f,r=(t&re)!==0;if(O!==null&&!De){var n=C!==null&&(C.f&me)!==0;if(!n&&(He===null||!He.has(e))){var i=O.deps;if((O.f&Ir)!==0)e.rv<dt&&(e.rv=dt,de===null&&i!==null&&i[ge]===e?ge++:de===null?de=[e]:de.push(e));else{O.deps??(O.deps=[]),Or.call(O.deps,e)||O.deps.push(e);var s=e.reactions;s===null?e.reactions=[O]:Or.call(s,O)||s.push(O)}}}if(Ze&&Ve.has(e))return Ve.get(e);if(r){var o=e;if(Ze){var a=o.v;return((o.f&Z)===0&&o.reactions!==null||is(o))&&(a=Tn(o)),Ve.set(o,a),a}var l=(o.f&Se)===0&&!De&&O!==null&&(Lr||(O.f&Se)!==0),u=(o.f&Ht)===0;Kt(o)&&(l&&(o.f|=Se),Ti(o)),l&&!u&&(Pi(o),ns(o))}if(se!=null&&se.has(e))return se.get(e);if((e.f&lt)!==0)throw e.v;return e.v}function ns(e){if(e.f|=Se,e.deps!==null)for(const t of e.deps)(t.reactions??(t.reactions=[])).push(e),(t.f&re)!==0&&(t.f&Se)===0&&(Pi(t),ns(t))}function is(e){if(e.v===X)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(Ve.has(t)||(t.f&re)!==0&&is(t))return!0;return!1}function We(e){var t=De;try{return De=!0,e()}finally{De=t}}function rt(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(Ue in e)_n(e);else if(!Array.isArray(e))for(let t in e){const r=e[t];typeof r=="object"&&r&&Ue in r&&_n(r)}}}function _n(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let n in e)try{_n(e[n],t)}catch{}const r=Sn(e);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const n=hi(r);for(let i in n){const s=n[i].get;if(s)try{s.call(e)}catch{}}}}}function Fo(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const zo=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function qo(e){return zo.includes(e)}const Uo={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Vo(e){return e=e.toLowerCase(),Uo[e]??e}const Ho=["touchstart","touchmove"];function Wo(e){return Ho.includes(e)}const vt=Symbol("events"),ss=new Set,bn=new Set;function os(e,t,r,n={}){function i(s){if(n.capture||mn.call(t,s),!s.cancelBubble)return wr(()=>r==null?void 0:r.call(this,s))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?ze(()=>{t.addEventListener(e,i,n)}):t.addEventListener(e,i,n),i}function ie(e,t,r,n,i){var s={capture:n,passive:i},o=os(e,t,r,s);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&Hr(()=>{t.removeEventListener(e,o,s)})}function Bo(e,t,r){(t[vt]??(t[vt]={}))[e]=r}function Yo(e){for(var t=0;t<e.length;t++)ss.add(e[t]);for(var r of bn)r(e)}let Xr=null,Zr=!1;function mn(e){var _,g;var t=this,r=t.ownerDocument,n=e.type,i=((_=e.composedPath)==null?void 0:_.call(e))||[],s=i[0]||e.target;Xr=e,Zr||(Zr=!0,setTimeout(()=>{Zr=!1,Xr=null}));var o=0,a=Xr===e&&e[vt];if(a){var l=i.indexOf(a);if(l!==-1&&(t===document||t===window)){e[vt]=t;return}var u=i.indexOf(t);if(u===-1)return;l<=u&&(o=l)}if(s=i[o]||e.target,s!==t){ks(e,"currentTarget",{configurable:!0,get(){return s||r}});var d=O,h=C;Me(null),he(null);try{for(var c,v=[];s!==null&&s!==t;){try{var p=(g=s[vt])==null?void 0:g[n];p!=null&&(!s.disabled||e.target===s)&&p.call(s,e)}catch(m){c?v.push(m):c=m}if(e.cancelBubble)break;o++,s=o<i.length?i[o]:null}if(c){for(let m of v)queueMicrotask(()=>{throw m});throw c}}finally{e[vt]=t,delete e.currentTarget,Me(d),he(h)}}}var ci;const Jr=((ci=globalThis==null?void 0:globalThis.window)==null?void 0:ci.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function Go(e){return(Jr==null?void 0:Jr.createHTML(e))??e}function as(e){var t=Ui("template");return t.innerHTML=Go(e.replaceAll("<!>","<!---->")),t.content}function cr(e,t){var r=C;r.nodes===null&&(r.nodes={start:e,end:t,a:null,t:null})}function B(e,t){var r=(t&Xs)!==0,n=(t&Zs)!==0,i,s=!e.startsWith("<!>");return()=>{i===void 0&&(i=as(s?e:"<!>"+e),r||(i=Ut(i)));var o=n||ji?document.importNode(i,!0):i.cloneNode(!0);if(r){var a=Ut(o),l=o.lastChild;cr(a,l)}else cr(o,o);return o}}function Ko(e,t,r="svg"){var n=!e.startsWith("<!>"),i=`<${r}>${n?e:"<!>"+e}</${r}>`,s;return()=>{if(!s){var o=as(i),a=Ut(o);s=Ut(a)}var l=s.cloneNode(!0);return cr(l,l),l}}function Qo(e,t){return Ko(e,t,"svg")}function G(){var e=document.createDocumentFragment(),t=document.createComment(""),r=Qe();return e.append(t,r),cr(t,r),e}function E(e,t){e!==null&&e.before(t)}function ot(e,t){var r=t==null?"":typeof t=="object"?`${t}`:t;r!==(e[nr]??(e[nr]=e.nodeValue))&&(e[nr]=r,e.nodeValue=`${r}`)}function Xo(e,t){return Zo(e,t)}const Ar=new Map;function Zo(e,{target:t,anchor:r,props:n={},events:i,context:s,intro:o=!0,transformError:a}){To();var l=void 0,u=Lo(()=>{var d=r??t.appendChild(Qe());ho(d,{pending:()=>{}},v=>{Yt({});var p=z;s&&(p.c=s),i&&(n.$$events=i),l=e(v,n)||{},Gt()},a);var h=new Set,c=v=>{for(var p=0;p<v.length;p++){var _=v[p];if(!h.has(_)){h.add(_);var g=Wo(_);for(const S of[t,document]){var m=Ar.get(S);m===void 0&&(m=new Map,Ar.set(S,m));var $=m.get(_);$===void 0?(S.addEventListener(_,mn,{passive:g}),m.set(_,1)):m.set(_,$+1)}}}};return c(Vr(ss)),bn.add(c),()=>{var g;for(var v of h)for(const m of[t,document]){var p=Ar.get(m),_=p.get(v);--_==0?(m.removeEventListener(v,mn),p.delete(v),p.size===0&&Ar.delete(m)):p.set(v,_)}bn.delete(c),d!==r&&((g=d.parentNode)==null||g.removeChild(d))}});return Jo.set(l,u),l}let Jo=new WeakMap;var Ce,je,be,bt,gr,_r,Ur;class In{constructor(t,r=!0){pe(this,"anchor");N(this,Ce,new Map);N(this,je,new Map);N(this,be,new Map);N(this,bt,new Set);N(this,gr,!0);N(this,_r,t=>{if(f(this,Ce).has(t)){var r=f(this,Ce).get(t),n=f(this,je).get(r);if(n)Fr(n),f(this,bt).delete(r);else{var i=f(this,be).get(r);i&&(Fr(i.effect),f(this,je).set(r,i.effect),f(this,be).delete(r),i.fragment.lastChild.remove(),this.anchor.before(i.fragment),n=i.effect)}for(const[s,o]of f(this,Ce)){if(f(this,Ce).delete(s),s===t)break;const a=f(this,be).get(o);a&&(oe(a.effect),f(this,be).delete(o))}for(const[s,o]of f(this,je)){if(s===r||f(this,bt).has(s))continue;const a=()=>{if(Array.from(f(this,Ce).values()).includes(s)){var u=document.createDocumentFragment();Dn(o,u),u.append(Qe()),f(this,be).set(s,{effect:o,fragment:u})}else oe(o);f(this,bt).delete(s),f(this,je).delete(s)};f(this,gr)||!n?(f(this,bt).add(s),mt(o,a,!1)):a()}}});N(this,Ur,t=>{f(this,Ce).delete(t);const r=Array.from(f(this,Ce).values());for(const[n,i]of f(this,be))r.includes(n)||(oe(i.effect),f(this,be).delete(n))});this.anchor=t,T(this,gr,r)}ensure(t,r){var n=P,i=qi();if(r&&!f(this,je).has(t)&&!f(this,be).has(t))if(i){var s=document.createDocumentFragment(),o=Qe();s.append(o),f(this,be).set(t,{effect:ve(()=>r(o)),fragment:s})}else f(this,je).set(t,ve(()=>r(this.anchor)));if(f(this,Ce).set(n,t),i){for(const[a,l]of f(this,je))a===t?n.unskip_effect(l):n.skip_effect(l);for(const[a,l]of f(this,be))a===t?n.unskip_effect(l.effect):n.skip_effect(l.effect);n.oncommit(f(this,_r)),n.ondiscard(f(this,Ur))}else f(this,_r).call(this,n)}}Ce=new WeakMap,je=new WeakMap,be=new WeakMap,bt=new WeakMap,gr=new WeakMap,_r=new WeakMap,Ur=new WeakMap;function wt(e,t,r=!1){var n=new In(e),i=r?ft:0;function s(o,a){n.ensure(o,a)}kr(()=>{var o=!1;t((a,l=0)=>{o=!0,s(l,a)}),o||s(-1,null)},i)}function Br(e,t){return t}function ea(e,t,r){for(var n=[],i=t.length,s,o=t.length,a=0;a<i;a++){let h=t[a];mt(h,()=>{if(s){if(s.pending.delete(h),s.done.add(h),s.pending.size===0){var c=e.outrogroups;xn(e,Vr(s.done)),c.delete(s),c.size===0&&(e.outrogroups=null)}}else o-=1},!1)}if(o===0){var l=n.length===0&&r!==null&&e.pending.size===0;if(l){var u=r,d=u.parentNode;Po(d),d.append(u),e.items.clear()}xn(e,t,!l)}else s={pending:new Set(t),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(s)}function xn(e,t,r=!0){var n;if(e.pending.size>0){n=new Set;for(const o of e.pending.values())for(const a of o)n.add(e.items.get(a).e)}for(var i=0;i<t.length;i++){var s=t[i];if(n!=null&&n.has(s)){s.f|=Fe;const o=document.createDocumentFragment();Dn(s,o)}else oe(t[i],r)}}var ei;function Yr(e,t,r,n,i,s=null){var o=e,a=new Map,l=(t&mi)!==0;if(l){var u=e;o=u.appendChild(Qe())}var d=null,h=yr(()=>{var S=r();return kn(S)?S:S==null?[]:Vr(S)}),c,v=new Map,p=!0;function _(S){($.effect.f&me)===0&&($.pending.delete(S),$.fallback=d,ta($,c,o,t,n),d!==null&&(c.length===0?(d.f&Fe)===0?Fr(d):(d.f^=Fe,ar(d,null,o)):mt(d,()=>{d=null})))}function g(S){$.pending.delete(S)}var m=kr(()=>{c=y(h);for(var S=c.length,R=new Set,x=P,k=qi(),M=0;M<S;M+=1){var q=c[M],I=n(q,M),j=p?null:a.get(I);j?(j.v&&qt(j.v,q),j.i&&qt(j.i,M),k&&x.unskip_effect(j.e)):(j=ra(a,p?o:ei??(ei=Qe()),q,I,M,i,t,r),p||(j.e.f|=Fe),a.set(I,j)),R.add(I)}if(S===0&&s&&!d&&(p?d=ve(()=>s(o)):(d=ve(()=>s(ei??(ei=Qe()))),d.f|=Fe)),S>R.size&&Ls(),!p)if(v.set(x,R),k){for(const[A,L]of a)R.has(A)||x.skip_effect(L.e);x.oncommit(_),x.ondiscard(g)}else _(x);y(h)}),$={effect:m,items:a,pending:v,outrogroups:null,fallback:d};p=!1}function er(e){for(;e!==null&&(e.f&Ae)===0;)e=e.next;return e}function ta(e,t,r,n,i){var j,A,L,fe,ne,Te,Je,Qt,Xt;var s=(n&Ws)!==0,o=t.length,a=e.items,l=er(e.effect.first),u,d=null,h,c=[],v=[],p,_,g,m;if(s)for(m=0;m<o;m+=1)p=t[m],_=i(p,m),g=a.get(_).e,(g.f&Fe)===0&&((A=(j=g.nodes)==null?void 0:j.a)==null||A.measure(),(h??(h=new Set)).add(g));for(m=0;m<o;m+=1){if(p=t[m],_=i(p,m),g=a.get(_).e,e.outrogroups!==null)for(const xe of e.outrogroups)xe.pending.delete(g),xe.done.delete(g);if((g.f&le)!==0&&(Fr(g),s&&((fe=(L=g.nodes)==null?void 0:L.a)==null||fe.unfix(),(h??(h=new Set)).delete(g))),(g.f&Fe)!==0)if(g.f^=Fe,g===l)ar(g,null,r);else{var $=d?d.next:l;g===e.effect.last&&(e.effect.last=g.prev),g.prev&&(g.prev.next=g.next),g.next&&(g.next.prev=g.prev),tt(e,d,g),tt(e,g,$),ar(g,$,r),d=g,c=[],v=[],l=er(d.next);continue}if(g!==l){if(u!==void 0&&u.has(g)){if(c.length<v.length){var S=v[0],R;d=S.prev;var x=c[0],k=c[c.length-1];for(R=0;R<c.length;R+=1)ar(c[R],S,r);for(R=0;R<v.length;R+=1)u.delete(v[R]);tt(e,x.prev,k.next),tt(e,d,x),tt(e,k,S),l=S,d=k,m-=1,c=[],v=[]}else u.delete(g),ar(g,l,r),tt(e,g.prev,g.next),tt(e,g,d===null?e.effect.first:d.next),tt(e,d,g),d=g;continue}for(c=[],v=[];l!==null&&l!==g;)(u??(u=new Set)).add(l),v.push(l),l=er(l.next);if(l===null)continue}(g.f&Fe)===0&&c.push(g),d=g,l=er(g.next)}if(e.outrogroups!==null){for(const xe of e.outrogroups)xe.pending.size===0&&(xn(e,Vr(xe.done)),(ne=e.outrogroups)==null||ne.delete(xe));e.outrogroups.size===0&&(e.outrogroups=null)}if(l!==null||u!==void 0){var M=[];if(u!==void 0)for(g of u)(g.f&le)===0&&M.push(g);for(;l!==null;)(l.f&le)===0&&l!==e.fallback&&M.push(l),l=er(l.next);var q=M.length;if(q>0){var I=(n&mi)!==0&&o===0?r:null;if(s){for(m=0;m<q;m+=1)(Je=(Te=M[m].nodes)==null?void 0:Te.a)==null||Je.measure();for(m=0;m<q;m+=1)(Xt=(Qt=M[m].nodes)==null?void 0:Qt.a)==null||Xt.fix()}ea(e,M,I)}}s&&ze(()=>{var xe,Zt;if(h!==void 0)for(g of h)(Zt=(xe=g.nodes)==null?void 0:xe.a)==null||Zt.apply()})}function ra(e,t,r,n,i,s,o,a){var l=(o&Vs)!==0?(o&Bs)===0?qe(r,!1,!1):ut(r):null,u=(o&Hs)!==0?ut(i):null;return{v:l,i:u,e:ve(()=>(s(t,l??r,u??i,a),()=>{e.delete(n)}))}}function ar(e,t,r){if(e.nodes)for(var n=e.nodes.start,i=e.nodes.end,s=t&&(t.f&Fe)===0?t.nodes.start:r;n!==null;){var o=$r(n);if(s.before(n),n===i)return;n=o}}function tt(e,t,r){t===null?e.effect.first=r:t.next=r,r===null?e.effect.last=t:r.prev=t}function K(e,t,r,n,i){var a;var s=(a=t.$$slots)==null?void 0:a[r],o=!1;s===!0&&(s=t.children,o=!0),s===void 0||s(e,o?()=>n:n)}function ls(e,t,r){var n=new In(e);kr(()=>{var i=t()??null;n.ensure(i,i&&(s=>r(s,i)))},ft)}function na(e,t,r,n,i,s){var o=null,a=e,l=new In(a,!1);kr(()=>{const u=t()||null;var d=Js;if(u===null){l.ensure(null,null);return}return l.ensure(u,h=>{if(u){if(o=Ui(u,d),cr(o,o),n){var c=null,v=o.appendChild(Qe());n(o,v),c==null||c.remove()}C.nodes.end=o,h.before(o)}}),()=>{}},ft),Hr(()=>{})}function ia(e,t){var r=void 0,n;Yi(()=>{r!==(r=t())&&(n&&(oe(n),n=null),r&&(n=ve(()=>{Ln(()=>r(e))})))})}function fs(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(r=fs(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function sa(){for(var e,t,r=0,n="",i=arguments.length;r<i;r++)(e=arguments[r])&&(t=fs(e))&&(n&&(n+=" "),n+=t);return n}function oa(e){return typeof e=="object"?sa(e):e??""}const ti=[...` 	
\r\f \v\uFEFF`];function aa(e,t,r){var n=e==null?"":""+e;if(r){for(var i of Object.keys(r))if(r[i])n=n?n+" "+i:i;else if(n.length)for(var s=i.length,o=0;(o=n.indexOf(i,o))>=0;){var a=o+s;(o===0||ti.includes(n[o-1]))&&(a===n.length||ti.includes(n[a]))?n=(o===0?"":n.substring(0,o))+n.substring(a+1):o=a}}return n===""?null:n}function ri(e,t=!1){var r=t?" !important;":";",n="";for(var i of Object.keys(e)){var s=e[i];s!=null&&s!==""&&(n+=" "+i+": "+s+r)}return n}function en(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function la(e,t){if(t){var r="",n,i;if(Array.isArray(t)?(n=t[0],i=t[1]):n=t,e){e=String(e).replaceAll(/\/\*.*?\*\//g,"").trim();var s=!1,o=0,a=!1,l=[];n&&l.push(...Object.keys(n).map(en)),i&&l.push(...Object.keys(i).map(en));var u=0,d=-1;const _=e.length;for(var h=0;h<_;h++){var c=e[h];if(a?c==="/"&&e[h-1]==="*"&&(a=!1):s?s===c&&(s=!1):c==="/"&&e[h+1]==="*"?a=!0:c==='"'||c==="'"?s=c:c==="("?o++:c===")"&&o--,!a&&s===!1&&o===0){if(c===":"&&d===-1)d=h;else if(c===";"||h===_-1){if(d!==-1){var v=en(e.substring(u,d).trim());if(!l.includes(v)){c!==";"&&h++;var p=e.substring(u,h).trim();r+=" "+p+";"}}u=h+1,d=-1}}}}return n&&(r+=ri(n)),i&&(r+=ri(i,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function Vt(e,t,r,n,i,s){var o=e[an];if(o!==r||o===void 0){var a=aa(r,n,s);a==null?e.removeAttribute("class"):t?e.className=a:e.setAttribute("class",a),e[an]=r}else if(s&&i!==s)for(var l in s){var u=!!s[l];(i==null||u!==!!i[l])&&e.classList.toggle(l,u)}return s}function tn(e,t={},r,n){for(var i in r){var s=r[i];t[i]!==s&&(r[i]==null?e.style.removeProperty(i):e.style.setProperty(i,s,n))}}function fa(e,t,r,n){var i=e[ln];if(i!==t){var s=la(t,n);s==null?e.removeAttribute("style"):e.style.cssText=s,e[ln]=t}else n&&(Array.isArray(n)?(tn(e,r==null?void 0:r[0],n[0]),tn(e,r==null?void 0:r[1],n[1],"important")):tn(e,r,n));return n}function wn(e,t,r=!1){if(e.multiple){if(t==null)return;if(!kn(t))return ro();for(var n of e.options)n.selected=t.includes(ni(n));return}for(n of e.options){var i=ni(n);if(Mo(i,t)){n.selected=!0;return}}(!r||t!==void 0)&&(e.selectedIndex=-1)}function ua(e){var t=new MutationObserver(()=>{"__value"in e&&wn(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Hr(()=>{t.disconnect()})}function ni(e){return"__value"in e?e.__value:e.value}const tr=Symbol("class"),rr=Symbol("style"),us=Symbol("is custom element"),cs=Symbol("is html"),ca=An?"input":"INPUT",da=An?"option":"OPTION",va=An?"select":"SELECT";function ha(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Q(e,t,r,n){var i=ds(e);i[t]!==(i[t]=r)&&(t==="loading"&&(e[Ns]=r),r==null?e.removeAttribute(t):typeof r!="string"&&vs(e).includes(t)?e[t]=r:e.setAttribute(t,r))}function pa(e,t,r,n,i=!1,s=!1){var o=ds(e),a=o[us],l=!o[cs],u=t||{},d=e.nodeName===da;for(var h in t)!(h in r)&&h[0]+h[1]!=="$$"&&(r[h]=null);r.class?r.class=oa(r.class):r[tr]&&(r.class=null),r[rr]&&(r.style??(r.style=null));var c=vs(e);if(e.nodeName===ca&&"type"in r&&("value"in r||"__value"in r)){var v=r.type;(v!==u.type||v===void 0&&e.hasAttribute("type"))&&(u.type=v,Q(e,"type",v))}for(const x in r){let k=r[x];if(d&&x==="value"&&k==null){e.value=e.__value="",u[x]=k;continue}if(x==="class"){var p=e.namespaceURI==="http://www.w3.org/1999/xhtml";Vt(e,p,k,n,t==null?void 0:t[tr],r[tr]),u[x]=k,u[tr]=r[tr];continue}if(x==="style"){fa(e,k,t==null?void 0:t[rr],r[rr]),u[x]=k,u[rr]=r[rr];continue}var _=u[x];if(!(k===_&&!(k===void 0&&e.hasAttribute(x)))){u[x]=k;var g=x[0]+x[1];if(g!=="$$")if(g==="on"){const M={},q="$$"+x;let I=x.slice(2);var m=qo(I);if(Fo(I)&&(I=I.slice(0,-7),M.capture=!0),!m&&_){if(k!=null)continue;e.removeEventListener(I,u[q],M),u[q]=null}if(m)Bo(I,e,k),Yo([I]);else if(k!=null){let j=function(A){u[x].call(this,A)};var R=j;u[q]=os(I,e,j,M)}}else if(x==="style")Q(e,x,k);else if(x==="autofocus")uo(e,!!k);else if(!a&&(x==="__value"||x==="value"&&k!=null))e.value=e.__value=k;else if(x==="selected"&&d)ha(e,k);else{var $=x;l||($=Vo($));var S=$==="defaultValue"||$==="defaultChecked";if(k==null&&!a&&!S)if(o[x]=null,$==="value"||$==="checked"){let M=e;const q=t===void 0;if($==="value"){let I=M.defaultValue;M.removeAttribute($),M.defaultValue=I,M.value=M.__value=q?I:null}else{let I=M.defaultChecked;M.removeAttribute($),M.defaultChecked=I,M.checked=q?I:!1}}else e.removeAttribute(x);else S||c.includes($)&&(a||typeof k!="string")?(e[$]=k,$ in o&&(o[$]=X)):typeof k!="function"&&Q(e,$,k)}}}return u}function ii(e,t,r=[],n=[],i=[],s,o=!1,a=!1){Ai(i,r,n,l=>{var u=void 0,d={},h=e.nodeName===va,c=!1;if(Yi(()=>{var p=t(...l.map(y)),_=pa(e,u,p,s,o,a);c&&h&&"value"in p&&wn(e,p.value);for(let m of Object.getOwnPropertySymbols(d))p[m]||oe(d[m]);for(let m of Object.getOwnPropertySymbols(p)){var g=p[m];m.description===eo&&(!u||g!==u[m])&&(d[m]&&oe(d[m]),d[m]=ve(()=>ia(e,()=>g))),_[m]=g}u=_}),h){var v=e;Ln(()=>{wn(v,u.value,!0),ua(v)})}c=!0})}function ds(e){return e[Tr]??(e[Tr]={[us]:e.nodeName.includes("-"),[cs]:e.namespaceURI===wi})}var si=new Map;function vs(e){var t=e.getAttribute("is")||e.nodeName,r=si.get(t);if(r)return r;si.set(t,r=[]);for(var n,i=e,s=Element.prototype;s!==i;){n=hi(i);for(var o in n)n[o].set&&o!=="innerHTML"&&o!=="textContent"&&o!=="innerText"&&r.push(o);i=Sn(i)}return r}function rn(e,t){return e===t||(e==null?void 0:e[Ue])===t}function hs(e={},t,r,n){var i=z.r,s=C;return Ln(()=>{var o,a;return Wr(()=>{o=a,a=[],We(()=>{rn(r(...a),e)||(t(e,...a),o&&rn(r(...o),e)&&t(null,...o))})}),()=>{let l=s;for(;l!==i&&l.parent!==null&&l.parent.f&on;)l=l.parent;const u=()=>{a&&rn(r(...a),e)&&t(null,...a)},d=l.teardown;l.teardown=()=>{u(),d==null||d()}}}),e}function Mr(e){return function(...t){var r=t[0];return r.preventDefault(),e==null?void 0:e.apply(this,t)}}function Sr(e=!1){const t=z,r=t.l.u;if(!r)return;let n=()=>rt(t.s);if(e){let i=0,s={};const o=zt(()=>{let a=!1;const l=t.s;for(const u in l)l[u]!==s[u]&&(s[u]=l[u],a=!0);return a&&i++,i});n=()=>y(o)}r.b.length&&Co(()=>{oi(t,n),nn(r.b)}),gn(()=>{const i=We(()=>r.m.map(Ms));return()=>{for(const s of i)typeof s=="function"&&s()}}),r.a.length&&gn(()=>{oi(t,n),nn(r.a)})}function oi(e,t){if(e.l.s)for(const r of e.l.s)y(r);t()}const ga={get(e,t){if(!e.exclude.includes(t))return y(e.version),t in e.special?e.special[t]():e.props[t]},set(e,t,r){if(!(t in e.special)){var n=C;try{he(e.parent_effect),e.special[t]=Le({get[t](){return e.props[t]}},t,xi)}finally{he(n)}}return e.special[t](r),Kn(e.version),!0},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},deleteProperty(e,t){return e.exclude.includes(t)||(e.exclude.push(t),Kn(e.version)),!0},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function Y(e,t){return new Proxy({props:e,exclude:t,special:{},version:ut(0),parent_effect:C},ga)}const _a={get(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Jt(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n)return n[t]}},set(e,t,r){let n=e.props.length;for(;n--;){let i=e.props[n];Jt(i)&&(i=i());const s=at(i,t);if(s&&s.set)return s.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Jt(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n){const i=at(n,t);return i&&!i.configurable&&(i.configurable=!0),i}}},has(e,t){if(t===Ue||t===_i)return!1;for(let r of e.props)if(Jt(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){const t=[];for(let r of e.props)if(Jt(r)&&(r=r()),!!r){for(const n in r)t.includes(n)||t.push(n);for(const n of Object.getOwnPropertySymbols(r))t.includes(n)||t.push(n)}return t}};function ee(...e){return new Proxy({props:e},_a)}function Le(e,t,r,n){var R;var i=!Bt||(r&Gs)!==0,s=(r&Ks)!==0,o=(r&Qs)!==0,a=n,l=!0,u=void 0,d=()=>o&&i?(u??(u=zt(n)),y(u)):(l&&(l=!1,a=o?We(n):n),a);let h;if(s){var c=Ue in e||_i in e;h=((R=at(e,t))==null?void 0:R.set)??(c&&t in e?x=>e[t]=x:void 0)}var v,p=!1;s?[v,p]=fo(()=>e[t]):v=e[t],v===void 0&&n!==void 0&&(v=d(),h&&(i&&js(),h(v)));var _;if(i?_=()=>{var x=e[t];return x===void 0?d():(l=!0,x)}:_=()=>{var x=e[t];return x!==void 0&&(a=void 0),x===void 0?a:x},i&&(r&xi)===0)return _;if(h){var g=e.$$legacy;return(function(x,k){return arguments.length>0?((!i||!k||g||p)&&h(k?_():x),x):_()})}var m=!1,$=((r&Ys)!==0?zt:yr)(()=>(m=!1,_()));s&&y($);var S=C;return(function(x,k){if(arguments.length>0){const M=k?y($):i&&s?Tt(x):x;return H($,M),m=!0,a!==void 0&&(a=M),x}return Ze&&m||(S.f&me)!==0?$.v:y($)})}function ps(e){z===null&&bi(),Bt&&z.l!==null?ma(z).m.push(e):gn(()=>{const t=We(e);if(typeof t=="function")return t})}function ba(e){z===null&&bi(),ps(()=>()=>We(e))}function ma(e){var t=e.l;return t.u??(t.u={a:[],b:[],m:[]})}const xa="5";var di;typeof window<"u"&&((di=window.__svelte??(window.__svelte={})).v??(di.v=new Set)).add(xa);oo();/**
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
 */const wa={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
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
 */const ya=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
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
 */const ai=(...e)=>e.filter((t,r,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===r).join(" ").trim();var $a=Qo("<svg><!><!></svg>");function te(e,t){const r=Y(t,["children","$$slots","$$events","$$legacy"]),n=Y(r,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);Yt(t,!1);let i=Le(t,"name",8,void 0),s=Le(t,"color",8,"currentColor"),o=Le(t,"size",8,24),a=Le(t,"strokeWidth",8,2),l=Le(t,"absoluteStrokeWidth",8,!1),u=Le(t,"iconNode",24,()=>[]);Sr();var d=$a();ii(d,(v,p,_)=>({...wa,...v,...n,width:o(),height:o(),stroke:s(),"stroke-width":p,class:_}),[()=>ya(n)?void 0:{"aria-hidden":"true"},()=>(rt(l()),rt(a()),rt(o()),We(()=>l()?Number(a())*24/Number(o()):a())),()=>(rt(ai),rt(i()),rt(r),We(()=>ai("lucide-icon","lucide",i()?`lucide-${i()}`:"",r.class)))]);var h=b(d);Yr(h,1,u,Br,(v,p)=>{var _=wo(()=>Ts(y(p),2));let g=()=>y(_)[0],m=()=>y(_)[1];var $=G(),S=U($);na(S,g,!0,(R,x)=>{ii(R,()=>({...m()}))}),E(v,$)});var c=w(h);K(c,t,"default",{}),E(e,d),Gt()}function ka(e,t){const r=Y(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M5 12h14"}],["path",{d:"m12 5 7 7-7 7"}]];te(e,ee({name:"arrow-right"},()=>r,{get iconNode(){return n},children:(i,s)=>{var o=G(),a=U(o);K(a,t,"default",{}),E(i,o)},$$slots:{default:!0}}))}function Sa(e,t){const r=Y(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m6 9 6 6 6-6"}]];te(e,ee({name:"chevron-down"},()=>r,{get iconNode(){return n},children:(i,s)=>{var o=G(),a=U(o);K(a,t,"default",{}),E(i,o)},$$slots:{default:!0}}))}function Ea(e,t){const r=Y(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]];te(e,ee({name:"circle-question-mark"},()=>r,{get iconNode(){return n},children:(i,s)=>{var o=G(),a=U(o);K(a,t,"default",{}),E(i,o)},$$slots:{default:!0}}))}function Aa(e,t){const r=Y(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}]];te(e,ee({name:"clipboard"},()=>r,{get iconNode(){return n},children:(i,s)=>{var o=G(),a=U(o);K(a,t,"default",{}),E(i,o)},$$slots:{default:!0}}))}function Ma(e,t){const r=Y(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M12 20v2"}],["path",{d:"M12 2v2"}],["path",{d:"M17 20v2"}],["path",{d:"M17 2v2"}],["path",{d:"M2 12h2"}],["path",{d:"M2 17h2"}],["path",{d:"M2 7h2"}],["path",{d:"M20 12h2"}],["path",{d:"M20 17h2"}],["path",{d:"M20 7h2"}],["path",{d:"M7 20v2"}],["path",{d:"M7 2v2"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1"}]];te(e,ee({name:"cpu"},()=>r,{get iconNode(){return n},children:(i,s)=>{var o=G(),a=U(o);K(a,t,"default",{}),E(i,o)},$$slots:{default:!0}}))}function Rn(e,t){const r=Y(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M12 15V3"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["path",{d:"m7 10 5 5 5-5"}]];te(e,ee({name:"download"},()=>r,{get iconNode(){return n},children:(i,s)=>{var o=G(),a=U(o);K(a,t,"default",{}),E(i,o)},$$slots:{default:!0}}))}function Ta(e,t){const r=Y(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M10 9H8"}],["path",{d:"M16 13H8"}],["path",{d:"M16 17H8"}]];te(e,ee({name:"file-text"},()=>r,{get iconNode(){return n},children:(i,s)=>{var o=G(),a=U(o);K(a,t,"default",{}),E(i,o)},$$slots:{default:!0}}))}function Pa(e,t){const r=Y(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8"}]];te(e,ee({name:"infinity"},()=>r,{get iconNode(){return n},children:(i,s)=>{var o=G(),a=U(o);K(a,t,"default",{}),E(i,o)},$$slots:{default:!0}}))}function Na(e,t){const r=Y(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];te(e,ee({name:"info"},()=>r,{get iconNode(){return n},children:(i,s)=>{var o=G(),a=U(o);K(a,t,"default",{}),E(i,o)},$$slots:{default:!0}}))}function Ca(e,t){const r=Y(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4"}]];te(e,ee({name:"lock"},()=>r,{get iconNode(){return n},children:(i,s)=>{var o=G(),a=U(o);K(a,t,"default",{}),E(i,o)},$$slots:{default:!0}}))}function La(e,t){const r=Y(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}]];te(e,ee({name:"mail"},()=>r,{get iconNode(){return n},children:(i,s)=>{var o=G(),a=U(o);K(a,t,"default",{}),E(i,o)},$$slots:{default:!0}}))}function Oa(e,t){const r=Y(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M4 5h16"}],["path",{d:"M4 12h16"}],["path",{d:"M4 19h16"}]];te(e,ee({name:"menu"},()=>r,{get iconNode(){return n},children:(i,s)=>{var o=G(),a=U(o);K(a,t,"default",{}),E(i,o)},$$slots:{default:!0}}))}function Da(e,t){const r=Y(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M9 18V5l12-2v13"}],["circle",{cx:"6",cy:"18",r:"3"}],["circle",{cx:"18",cy:"16",r:"3"}]];te(e,ee({name:"music"},()=>r,{get iconNode(){return n},children:(i,s)=>{var o=G(),a=U(o);K(a,t,"default",{}),E(i,o)},$$slots:{default:!0}}))}function Ia(e,t){const r=Y(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];te(e,ee({name:"refresh-cw"},()=>r,{get iconNode(){return n},children:(i,s)=>{var o=G(),a=U(o);K(a,t,"default",{}),E(i,o)},$$slots:{default:!0}}))}function Ra(e,t){const r=Y(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M12 8v4"}],["path",{d:"M12 16h.01"}]];te(e,ee({name:"shield-alert"},()=>r,{get iconNode(){return n},children:(i,s)=>{var o=G(),a=U(o);K(a,t,"default",{}),E(i,o)},$$slots:{default:!0}}))}function jn(e,t){const r=Y(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"m9 12 2 2 4-4"}]];te(e,ee({name:"shield-check"},()=>r,{get iconNode(){return n},children:(i,s)=>{var o=G(),a=U(o);K(a,t,"default",{}),E(i,o)},$$slots:{default:!0}}))}function gs(e,t){const r=Y(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2"}],["path",{d:"M12 18h.01"}]];te(e,ee({name:"smartphone"},()=>r,{get iconNode(){return n},children:(i,s)=>{var o=G(),a=U(o);K(a,t,"default",{}),E(i,o)},$$slots:{default:!0}}))}function dr(e,t){const r=Y(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"}],["path",{d:"M20 2v4"}],["path",{d:"M22 4h-4"}],["circle",{cx:"4",cy:"20",r:"2"}]];te(e,ee({name:"sparkles"},()=>r,{get iconNode(){return n},children:(i,s)=>{var o=G(),a=U(o);K(a,t,"default",{}),E(i,o)},$$slots:{default:!0}}))}function _s(e,t){const r=Y(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];te(e,ee({name:"x"},()=>r,{get iconNode(){return n},children:(i,s)=>{var o=G(),a=U(o);K(a,t,"default",{}),E(i,o)},$$slots:{default:!0}}))}function bs(e,t){const r=Y(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"}]];te(e,ee({name:"zap"},()=>r,{get iconNode(){return n},children:(i,s)=>{var o=G(),a=U(o);K(a,t,"default",{}),E(i,o)},$$slots:{default:!0}}))}var ja=B('<div class="lg:hidden px-4 pt-2 pb-6 space-y-2 bg-slate-950/95 border-b border-slate-800"><a class="block px-4 py-3 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-900 hover:text-white">Video Downloader</a> <a class="block px-4 py-3 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-900 hover:text-white">YouTube to MP3</a> <a class="block px-4 py-3 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-900 hover:text-white">YouTube to MP4</a> <a class="block px-4 py-3 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-900 hover:text-white">Shorts Downloader</a> <a class="block px-4 py-3 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-900 hover:text-white">Guide</a> <a class="block px-4 py-3 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-900 hover:text-white">About Us</a> <a class="block px-4 py-3 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-900 hover:text-white">Contact Us</a> <a class="block px-4 py-3 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-900 hover:text-white">Privacy Policy</a> <a class="block px-4 py-3 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-900 hover:text-white">Terms of Service</a> <div class="pt-2"><button class="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow-lg shadow-blue-500/25"><!> <span>Save Video Now</span></button></div></div>'),Fa=B('<header class="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-slate-800/80"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex items-center justify-between h-16"><a class="flex items-center gap-3 group text-left focus:outline-none"><div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-500 p-0.5 shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-300"><div class="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center"><!></div></div> <div><span class="text-xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-blue-400 bg-clip-text text-transparent">LinkSave</span> <span class="block text-[10px] font-semibold text-blue-400/90 tracking-wider uppercase -mt-1">Video Downloader</span></div></a> <nav class="hidden lg:flex items-center gap-1 xl:gap-2"><a class="px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-900/80 rounded-lg transition-colors">Video Downloader</a> <a class="px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-900/80 rounded-lg transition-colors">YouTube to MP3</a> <a class="px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-900/80 rounded-lg transition-colors">YouTube to MP4</a> <a class="px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-900/80 rounded-lg transition-colors">Shorts Downloader</a> <a class="px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-900/80 rounded-lg transition-colors">Guide</a></nav> <div class="hidden sm:flex items-center gap-3"><div class="hidden xl:flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400"><!> <span>100% Free & Safe</span></div> <button class="relative inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-xs sm:text-sm shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 hover:from-blue-500 hover:to-indigo-500 transition-all duration-200 cursor-pointer"><!> <span>Save Video</span></button></div> <div class="flex md:hidden"><button class="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 focus:outline-none" aria-label="Toggle menu"><!></button></div></div></div> <!></header>');function za(e,t){Yt(t,!1);let r=qe(!1);const n="/".endsWith("/")?"/":"//";function i(ne){H(r,!1);const Te=document.getElementById(ne);Te&&Te.scrollIntoView({behavior:"smooth"})}Sr();var s=Fa(),o=b(s),a=b(o),l=b(a),u=b(l),d=b(u),h=b(d);Rn(h,{class:"w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform duration-300"});var c=w(l,2),v=b(c),p=w(v,2),_=w(p,2),g=w(_,2),m=w(g,2),$=w(c,2),S=b($),R=b(S);jn(R,{class:"w-3.5 h-3.5"});var x=w(S,2),k=b(x);dr(k,{class:"w-4 h-4"});var M=w($,2),q=b(M),I=b(q);{var j=ne=>{_s(ne,{class:"w-6 h-6"})},A=ne=>{Oa(ne,{class:"w-6 h-6"})};wt(I,ne=>{y(r)?ne(j):ne(A,-1)})}var L=w(o,2);{var fe=ne=>{var Te=ja(),Je=b(Te),Qt=w(Je,2),Xt=w(Qt,2),xe=w(Xt,2),Zt=w(xe,2),Fn=w(Zt,2),zn=w(Fn,2),qn=w(zn,2),Un=w(qn,2),ms=w(Un,2),Vn=b(ms),xs=b(Vn);dr(xs,{class:"w-4 h-4"}),ct(()=>{Q(Je,"href",`${n??""}youtube-video-downloader/`),Q(Qt,"href",`${n??""}youtube-to-mp3/`),Q(Xt,"href",`${n??""}youtube-to-mp4/`),Q(xe,"href",`${n??""}youtube-shorts-downloader/`),Q(Zt,"href",`${n??""}how-to-download-youtube-videos/`),Q(Fn,"href",`${n??""}about/`),Q(zn,"href",`${n??""}contact/`),Q(qn,"href",`${n??""}privacy-policy/`),Q(Un,"href",`${n??""}terms/`)}),ie("click",Vn,()=>{H(r,!1),i("downloader")}),E(ne,Te)};wt(L,ne=>{y(r)&&ne(fe)})}ct(()=>{Q(l,"href",n),Q(v,"href",`${n??""}youtube-video-downloader/`),Q(p,"href",`${n??""}youtube-to-mp3/`),Q(_,"href",`${n??""}youtube-to-mp4/`),Q(g,"href",`${n??""}youtube-shorts-downloader/`),Q(m,"href",`${n??""}how-to-download-youtube-videos/`)}),ie("click",x,()=>i("downloader")),ie("click",q,()=>H(r,!y(r))),E(e,s),Gt()}const li={cnvmp3Url:"https://cnvmp3.com/v55",smartlinkUrl:"https://garretebonylosing.com/jhky4egutd?key=d9ca9399efd5ec18febfadefd48f7ed5"};var qa=B(`<section id="downloader" class="relative max-w-4xl mx-auto px-0 sm:px-4 pt-3 sm:pt-6 pb-6 sm:pb-12 w-full"><div class="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl blur-2xl opacity-25"></div> <div class="relative bg-slate-900/90 border border-slate-800/90 rounded-2xl sm:rounded-3xl p-3.5 sm:p-8 md:p-10 shadow-2xl backdrop-blur-xl w-full"><div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-800/80"><div class="flex items-center gap-2.5"><div class="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center shadow-md shadow-blue-500/20 shrink-0"><!></div> <div><h2 class="text-sm sm:text-lg font-extrabold text-white leading-tight flex flex-wrap items-center gap-2"><span>LinkSave Downloader</span> <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold"><span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> <span>Pro Engine Active</span></span></h2> <p class="text-[11px] sm:text-xs text-slate-400">Convert & download HD videos & audio streams instantly</p></div></div></div> <div class="space-y-3 sm:space-y-4 animate-fade-in"><div class="flex items-center justify-between text-xs text-slate-400 px-3 py-2 bg-slate-950/60 rounded-xl border border-slate-800/80 gap-2"><div class="flex items-center gap-2 min-w-0"><span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span> <span class="font-semibold text-slate-200 text-[11px] sm:text-xs truncate">Direct Stream Converter</span></div> <button class="inline-flex items-center gap-1.5 px-2 py-1 rounded-lg bg-slate-800 text-slate-300 hover:text-white text-[10px] sm:text-xs font-medium transition border border-slate-700 hover:bg-slate-700 shrink-0"><!> <span>Refresh Engine</span></button></div> <div><div class="absolute top-0 left-0 right-0 h-3 bg-gradient-to-b from-[#0A0F1D] to-transparent z-10 pointer-events-none"></div> <iframe title="LinkSave Media Engine" scrolling="no" class="w-full border-0 absolute left-0 overflow-hidden iframe-crop svelte-1a8aqf5" loading="lazy" sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups" allow="clipboard-write; clipboard-read"></iframe> <div class="absolute bottom-0 left-0 right-0 h-10 sm:h-12 bg-gradient-to-t from-[#0A0F1D] via-[#0A0F1D]/90 to-transparent z-10 pointer-events-none"></div></div> <div class="grid grid-cols-2 gap-3 pt-1"><button type="button" class="w-full py-2.5 px-3 rounded-xl border-2 border-cyan-400 bg-slate-950/80 hover:bg-cyan-500/10 text-white font-bold text-xs sm:text-sm transition-all duration-200 flex items-center justify-center active:scale-95 shadow-lg shadow-cyan-500/10 cursor-pointer">Bitrate/Quality</button> <button type="button" class="w-full py-2.5 px-3 rounded-xl border-2 border-emerald-500 bg-slate-950/80 hover:bg-emerald-500/10 text-white font-bold text-xs sm:text-sm transition-all duration-200 flex items-center justify-center active:scale-95 shadow-lg shadow-emerald-500/10 cursor-pointer">MP3 / MP4</button></div></div> <div class="mt-4 pt-3 border-t border-slate-800/60 text-center flex items-center justify-center gap-2 text-[10px] sm:text-[11px] text-slate-400"><!> <span>Notice: Please only download media you own or have explicit
        authorization to download.</span></div></div></section>`);function Ua(e,t){Yt(t,!1);const r=qe();let n=li.cnvmp3Url,i=qe(!1),s=qe(!1),o=null,a=qe(null);function l(){H(s,!0),o&&clearTimeout(o),o=setTimeout(()=>{H(s,!1)},2500)}function u(){typeof window<"u"&&window.open(li.smartlinkUrl,"_blank","noopener,noreferrer")}function d(){if(y(a)){H(i,!0);const L=y(r);Gn(a,y(a).src=""),setTimeout(()=>{y(a)&&Gn(a,y(a).src=L),H(i,!1)},150)}}ba(()=>{o&&clearTimeout(o)}),Wi(()=>{},()=>{H(r,n)}),Bi(),Sr();var h=qa(),c=w(b(h),2),v=b(c),p=b(v),_=b(p),g=b(_);dr(g,{class:"w-4 h-4 sm:w-5 sm:h-5 text-white"});var m=w(v,2),$=b(m),S=w(b($),2),R=b(S);{let L=yr(()=>y(i)?"animate-spin text-blue-400":"");Ia(R,{get class(){return`w-3 h-3 sm:w-3.5 sm:h-3.5 ${y(L)??""}`}})}var x=w($,2),k=w(b(x),2);hs(k,L=>H(a,L),()=>y(a));var M=w(x,2),q=b(M),I=w(q,2),j=w(m,2),A=b(j);Ra(A,{class:"w-3.5 h-3.5 text-amber-400 shrink-0"}),ct(()=>{Vt(x,1,`relative w-full ${y(s)?"h-[350px] sm:h-[320px]":"h-[200px] sm:h-[185px]"} rounded-2xl overflow-hidden bg-[#0A0F1D] border border-slate-800 shadow-2xl group transition-all duration-300 ease-in-out`),Q(k,"src",y(r))}),ie("click",S,d),ie("click",q,()=>{l(),u()}),ie("click",I,()=>{l(),u()}),E(e,h),Gt()}var Va=B('<section id="hero" class="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden"><div class="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div> <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-600/20 via-indigo-600/20 to-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"><div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-blue-400 text-xs sm:text-sm font-medium mb-6 shadow-md backdrop-blur-sm animate-fade-in"><!> <span class="text-slate-300">Save Videos. Simply.</span> <span class="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span></div> <h1 class="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-[1.15]">ONLINE VIDEO <br class="hidden sm:block"/> <span class="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">DOWNLOADER</span></h1> <p class="mt-6 text-base sm:text-xl text-slate-400 max-w-2xl mx-auto font-normal leading-relaxed">Save high-quality videos from supported platforms. Just paste a link and get your media instantly.</p> <div class="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm font-semibold text-slate-300"><div class="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800"><!> <span>Fast Speed</span></div> <div class="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800"><!> <span>Simple & Free</span></div> <div class="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800"><!> <span>Mobile Friendly</span></div></div> <div class="mt-10"><!></div></div></section>');function Ha(e){var t=Va(),r=w(b(t),4),n=b(r),i=b(n);dr(i,{class:"w-4 h-4 text-blue-400"});var s=w(n,6),o=b(s),a=b(o);bs(a,{class:"w-4 h-4 text-amber-400"});var l=w(o,2),u=b(l);jn(u,{class:"w-4 h-4 text-emerald-400"});var d=w(l,2),h=b(d);gs(h,{class:"w-4 h-4 text-blue-400"});var c=w(s,2),v=b(c);Ua(v,{}),E(e,t)}var Wa=B('<div class="relative group bg-slate-900/90 border border-slate-800/90 rounded-3xl p-8 hover:border-blue-500/50 hover:bg-slate-900 transition-all duration-300 shadow-xl flex flex-col justify-between"><div><div class="flex items-center justify-between mb-6"><div><div class="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center"><!></div></div> <span class="text-4xl font-black text-slate-800 group-hover:text-blue-500/30 transition-colors"> </span></div> <h3 class="text-xl font-bold text-white tracking-tight"> </h3> <p class="text-xs font-semibold text-blue-400 uppercase tracking-wider mt-0.5"> </p> <p class="mt-4 text-sm text-slate-400 leading-relaxed"> </p></div> <div class="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-slate-400"><span></span> <!></div></div>'),Ba=B('<section id="how-it-works" class="py-16 md:py-24 relative overflow-hidden"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"><div class="text-center max-w-3xl mx-auto mb-16"><span class="text-xs font-extrabold uppercase tracking-widest text-blue-400">Simple Process</span> <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">How LinkSave Works</h2> <p class="mt-3 text-base text-slate-400">Downloading your favorite media takes only a few seconds with 3 simple steps.</p></div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8 relative"></div></div></section>');function Ya(e){const t=[{number:"01",title:"1. Paste",subtitle:"Copy & Paste URL",description:"Copy the video link from Instagram, TikTok, X, or any platform, then paste it into the LinkSave search bar.",icon:Aa,gradient:"from-blue-500 to-indigo-500"},{number:"02",title:"2. Analyze",subtitle:"Instant Extraction",description:"Our engine quickly processes the video URL, removing watermarks and finding all available qualities & audio options.",icon:Ma,gradient:"from-indigo-500 to-purple-500"},{number:"03",title:"3. Save",subtitle:"One-Click Download",description:"Choose your desired resolution (1080p, 720p, or MP3 audio) and click Download to save the file straight to your device.",icon:Rn,gradient:"from-purple-500 to-pink-500"}];var r=Ba(),n=b(r),i=w(b(n),2);Yr(i,5,()=>t,Br,(s,o,a)=>{var l=Wa(),u=b(l),d=b(u),h=b(d),c=b(h),v=b(c);ls(v,()=>y(o).icon,(j,A)=>{A(j,{class:"w-6 h-6 text-white"})});var p=w(h,2),_=b(p),g=w(d,2),m=b(g),$=w(g,2),S=b($),R=w($,2),x=b(R),k=w(u,2),M=b(k);M.textContent=`Step ${a+1} of 3`;var q=w(M,2);{var I=j=>{ka(j,{class:"w-4 h-4 text-blue-400 hidden md:block"})};wt(q,j=>{a<2&&j(I)})}ct(()=>{Vt(h,1,`w-14 h-14 rounded-2xl bg-gradient-to-tr ${y(o).gradient??""} p-0.5 shadow-lg group-hover:scale-110 transition-transform`),ot(_,y(o).number),ot(m,y(o).title),ot(S,y(o).subtitle),ot(x,y(o).description)}),E(s,l)}),E(e,r)}var Ga=B('<div class="bg-slate-900/80 border border-slate-800/80 rounded-2xl p-6 hover:border-slate-700 hover:bg-slate-900 transition-all duration-300 shadow-md"><div><!></div> <h3 class="text-lg font-bold text-white tracking-tight"> </h3> <p class="mt-2 text-sm text-slate-400 leading-relaxed"> </p></div>'),Ka=B('<section id="features" class="py-16 md:py-24 bg-slate-950/70 border-t border-slate-900"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center max-w-3xl mx-auto mb-16"><span class="text-xs font-extrabold uppercase tracking-widest text-blue-400">Why Choose LinkSave</span> <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">Designed for Speed & Simplicity</h2> <p class="mt-3 text-base text-slate-400">Everything you need to convert & save media videos effortlessly.</p></div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"></div></div></section>');function Qa(e){const t=[{title:"High Definition Quality",description:"Save videos in original full resolution up to 1080p Full HD, 2K, and 4K without quality loss.",icon:dr,color:"text-amber-400",bg:"bg-amber-500/10"},{title:"Direct Stream Extraction",description:"Download clean YouTube videos and Shorts instantly with fast stream processing.",icon:bs,color:"text-blue-400",bg:"bg-blue-500/10"},{title:"100% Free & Unlimited",description:"No hidden subscription fees, no limits on daily video downloads, and no registration required.",icon:Pa,color:"text-emerald-400",bg:"bg-emerald-500/10"},{title:"Audio MP3 Converter",description:"Extract background audio or music tracks directly from video links into high-bitrate MP3 format.",icon:Da,color:"text-purple-400",bg:"bg-purple-500/10"},{title:"Universal Device Support",description:"Works seamlessly across iOS Safari, Android Chrome, Windows, macOS, Linux, and tablets.",icon:gs,color:"text-cyan-400",bg:"bg-cyan-500/10"},{title:"Safe & Secure Processing",description:"All link analysis happens securely. We do not store your download logs or track personal data.",icon:Ca,color:"text-rose-400",bg:"bg-rose-500/10"}];var r=Ka(),n=b(r),i=w(b(n),2);Yr(i,5,()=>t,Br,(s,o)=>{var a=Ga(),l=b(a),u=b(l);ls(u,()=>y(o).icon,(p,_)=>{_(p,{get class(){return`w-6 h-6 ${y(o).color??""}`}})});var d=w(l,2),h=b(d),c=w(d,2),v=b(c);ct(()=>{Vt(l,1,`w-12 h-12 rounded-xl ${y(o).bg??""} flex items-center justify-center mb-5`),ot(h,y(o).title),ot(v,y(o).description)}),E(s,a)}),E(e,r)}var Xa=B('<div class="px-5 pb-6 sm:px-6 text-sm text-slate-400 leading-relaxed border-t border-slate-800/60 pt-4"> </div>'),Za=B('<div class="bg-slate-900/90 border border-slate-800/90 rounded-2xl overflow-hidden transition-all duration-200"><button class="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 text-white font-bold text-base sm:text-lg hover:text-blue-400 focus:outline-none"><span> </span> <div class="w-8 h-8 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center shrink-0"><!></div></button> <!></div>'),Ja=B('<section id="faq" class="py-16 md:py-24"><div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-12"><div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 mb-3"><!> <span>Got Questions?</span></div> <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Frequently Asked Questions</h2> <p class="mt-2 text-sm text-slate-400">Everything you need to know about using LinkSave online video downloader.</p></div> <div class="space-y-4"></div></div></section>');function el(e){let t=qe(0);const r=[{q:"How to convert YouTube to MP3 320kbps for free?",a:"Paste any YouTube link into LinkSave, click Convert, and choose high-quality 320kbps MP3 audio format to save the sound file instantly."},{q:"How to download YouTube Shorts videos online?",a:"Copy the YouTube Shorts URL from your browser or app, paste it into the LinkSave converter box, and click Download."},{q:"Is LinkSave free?",a:"Yes. LinkSave provides a free online interface for downloading and converting supported media links. No registration is required."},{q:"Where are downloaded videos saved on my device?",a:`Downloaded files are saved in your web browser's default "Downloads" folder (or standard files location on iPhone / Android).`},{q:"Does LinkSave work on iPhone and Android mobile browsers?",a:"Absolutely! LinkSave is fully optimized for mobile devices. On iOS Safari or Android Chrome, simply paste the link and tap Download."},{q:"Do I need to install any software or browser extensions?",a:"No installation is needed! LinkSave works 100% online directly inside your web browser."}];function n(d){H(t,y(t)===d?null:d)}var i=Ja(),s=b(i),o=b(s),a=b(o),l=b(a);Ea(l,{class:"w-3.5 h-3.5"});var u=w(o,2);Yr(u,5,()=>r,Br,(d,h,c)=>{var v=Za(),p=b(v),_=b(p),g=b(_),m=w(_,2),$=b(m);{let x=yr(()=>y(t)===c?"rotate-180 text-blue-400":"");Sa($,{get class(){return`w-4 h-4 text-slate-400 transition-transform duration-300 ${y(x)??""}`}})}var S=w(p,2);{var R=x=>{var k=Xa(),M=b(k);ct(()=>ot(M,y(h).a)),E(x,k)};wt(S,x=>{y(t)===c&&x(R)})}ct(()=>ot(g,y(h).q)),ie("click",p,()=>n(c)),E(d,v)}),E(e,i)}var tl=B('<footer class="bg-slate-950 border-t border-slate-900 text-slate-400 pt-12 pb-8"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12"><div class="md:col-span-1 space-y-4"><div class="flex items-center gap-3"><div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md"><!></div> <span class="text-xl font-extrabold text-white tracking-tight">LinkSave</span></div> <p class="text-xs text-slate-400 leading-relaxed">Save Videos. Simply. Fast and free online video downloader and MP3 stream converter.</p></div> <div><h4 class="text-sm font-bold text-white uppercase tracking-wider mb-4">Navigation</h4> <ul class="space-y-2.5 text-xs"><li><button class="hover:text-white transition">Home</button></li> <li><button class="hover:text-white transition">Downloader Engine</button></li> <li><button class="hover:text-white transition">How It Works</button></li> <li><button class="hover:text-white transition">Features</button></li></ul></div> <div><h4 class="text-sm font-bold text-white uppercase tracking-wider mb-4">Legal & Support</h4> <ul class="space-y-2.5 text-xs"><li><a href="https://linksaves.com/privacy-policy/" class="hover:text-white transition text-left block">Privacy Policy</a></li> <li><a href="https://linksaves.com/terms/" class="hover:text-white transition text-left block">Terms of Service</a></li> <li><a href="https://linksaves.com/about/" class="hover:text-white transition text-left block">About LinkSave</a></li> <li><a href="https://linksaves.com/contact/" class="hover:text-white transition text-left block">Contact Support</a></li></ul></div> <div><h4 class="text-sm font-bold text-white uppercase tracking-wider mb-4">Legal Disclaimer</h4> <p class="text-xs text-slate-500 leading-relaxed">LinkSave is an independent web application. All product names, logos, and brands are property of their respective owners.</p></div></div> <div class="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500"><p>© 2026 LinkSave. All rights reserved.</p> <div class="flex items-center gap-4"><a href="https://linksaves.com/privacy-policy/" class="hover:text-slate-300 transition">Privacy</a> <span>•</span> <a href="https://linksaves.com/terms/" class="hover:text-slate-300 transition">Terms</a> <span>•</span> <a href="https://linksaves.com/contact/" class="hover:text-slate-300 transition">Contact</a></div></div></div></footer>');function rl(e,t){Yt(t,!1);let r=Le(t,"onOpenModal",8,Te=>{});function n(Te){const Je=document.getElementById(Te);Je&&Je.scrollIntoView({behavior:"smooth"})}Sr();var i=tl(),s=b(i),o=b(s),a=b(o),l=b(a),u=b(l),d=b(u);Rn(d,{class:"w-5 h-5"});var h=w(a,2),c=w(b(h),2),v=b(c),p=b(v),_=w(v,2),g=b(_),m=w(_,2),$=b(m),S=w(m,2),R=b(S),x=w(h,2),k=w(b(x),2),M=b(k),q=b(M),I=w(M,2),j=b(I),A=w(I,2),L=b(A),fe=w(A,2),ne=b(fe);ie("click",p,()=>n("hero")),ie("click",g,()=>n("downloader")),ie("click",$,()=>n("how-it-works")),ie("click",R,()=>n("features")),ie("click",q,Mr(()=>r()("privacy"))),ie("click",j,Mr(()=>r()("terms"))),ie("click",L,Mr(()=>r()("about"))),ie("click",ne,Mr(()=>r()("contact"))),E(e,i),Gt()}var nl=B('<div class="my-6 flex justify-center text-center overflow-x-auto"><div><div class="text-[10px] font-semibold uppercase tracking-wider text-slate-500 mb-1">Advertisement</div> <div></div></div></div>');function fi(e,t){Yt(t,!1);const r=qe();let n=Le(t,"slotType",8,"leaderboard"),i=qe();ps(()=>{if(y(i)){window.atOptions={key:"aac61e386ccb0a0d5fc7c47dfae348c5",format:"iframe",height:y(r)?250:90,width:y(r)?300:728,params:{}};const l=document.createElement("script");l.src="https://www.highrevenueformat.com/aac61e386ccb0a0d5fc7c47dfae348c5/invoke.js",l.async=!0,y(i).appendChild(l)}}),Wi(()=>rt(n()),()=>{H(r,n()==="rectangle")}),Bi(),Sr();var s=nl(),o=b(s),a=w(b(o),2);hs(a,l=>H(i,l),()=>y(i)),ct(()=>{Q(s,"data-slot-type",n()),Vt(o,1,`w-full max-w-4xl bg-slate-900/60 border border-slate-800/80 rounded-2xl p-3 flex flex-col items-center justify-center ${y(r)?"min-h-[265px]":"min-h-[105px]"} shadow-inner relative overflow-hidden`),Vt(a,1,`w-full flex justify-center items-center ${y(r)?"min-h-[250px]":"min-h-[90px]"}`)}),E(e,s),Gt()}var il=B('<!> <h3 class="text-lg font-bold text-white">Privacy Policy</h3>',1),sl=B('<!> <h3 class="text-lg font-bold text-white">Terms of Service</h3>',1),ol=B('<!> <h3 class="text-lg font-bold text-white">About LinkSave</h3>',1),al=B('<!> <h3 class="text-lg font-bold text-white">Contact & Support</h3>',1),ll=B('<p class="font-semibold text-white">Effective Date: September 2026</p> <p>At <strong>LinkSave</strong>, accessible from <code>https://linksaves.com/</code>, the privacy of our visitors is one of our main priorities. This Privacy Policy document outlines the types of information collected and how it is used.</p> <h4 class="font-bold text-white text-base pt-2">1. Google AdSense & Third-Party Cookies</h4> <p>Google is a third-party vendor on our site. It uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to our website and other sites on the internet. Users may choose to decline the use of DART cookies by visiting the Google Ad and Content Network Privacy Policy.</p> <h4 class="font-bold text-white text-base pt-2">2. Log Files</h4> <p>LinkSave follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected includes IP addresses, browser type, ISP, date and time stamp, referring/exit pages, and number of clicks.</p> <h4 class="font-bold text-white text-base pt-2">3. CCPA & GDPR Privacy Rights</h4> <p>Under CCPA and GDPR, users have the right to request disclosure of personal data collected, request deletion of data, and opt-out of the sale of personal data. If you make a request, we have one month to respond to you.</p>',1),fl=B('<p class="font-semibold text-white">Last Updated: September 2026</p> <p>By accessing or using <strong>LinkSave</strong>, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.</p> <h4 class="font-bold text-white text-base pt-2">1. Acceptable Use & Fair Usage</h4> <p>LinkSave is provided solely for personal, non-commercial, and fair-use educational purposes. Users must respect copyright laws and only download content they own, have explicit authorization to download, or content under creative commons and public domain licenses.</p> <h4 class="font-bold text-white text-base pt-2">2. Intellectual Property Rights & DMCA</h4> <p>LinkSave does not host, store, or re-transmit copyrighted video or audio files on its servers. All media content remains the exclusive property of their respective creators and copyright holders.</p> <h4 class="font-bold text-white text-base pt-2">3. Limitation of Liability</h4> <p>In no event shall LinkSave be liable for any indirect, incidental, or consequential damages arising out of the use or inability to use the service.</p>',1),ul=B('<p><strong>LinkSave</strong> is a free, high-performance online media converter utility designed to help users extract video streams and high-quality MP3 audio files seamlessly for offline educational and fair-use playback.</p> <p class="pt-2">Our mission is to provide a clean, fast, and secure user experience across all web browsers and devices without forcing registration or software downloads.</p>',1),cl=B('<p>Have questions, feedback, or business inquiries? Get in touch with our team:</p> <div class="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 font-mono text-xs text-blue-400"><p><strong>Support & Inquiries:</strong> linksave357@gmail.com</p> <p><strong>Response Time:</strong> Within 24 hours</p></div>',1),dl=B('<div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in"><div class="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[85vh] flex flex-col"><div class="flex items-center justify-between pb-4 border-b border-slate-800 shrink-0"><div class="flex items-center gap-2.5"><!></div> <button class="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition" aria-label="Close Modal"><!></button></div> <div class="py-5 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed pr-1"><!></div> <div class="pt-4 border-t border-slate-800 flex justify-end shrink-0"><button class="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl transition">Close</button></div></div></div>');function vl(e,t){let r=Le(t,"activeModal",8,null),n=Le(t,"onClose",8,()=>{});var i=G(),s=U(i);{var o=a=>{var l=dl(),u=b(l),d=b(u),h=b(d),c=b(h);{var v=A=>{var L=il(),fe=U(L);jn(fe,{class:"w-5 h-5 text-emerald-400"}),E(A,L)},p=A=>{var L=sl(),fe=U(L);Ta(fe,{class:"w-5 h-5 text-blue-400"}),E(A,L)},_=A=>{var L=ol(),fe=U(L);Na(fe,{class:"w-5 h-5 text-purple-400"}),E(A,L)},g=A=>{var L=al(),fe=U(L);La(fe,{class:"w-5 h-5 text-amber-400"}),E(A,L)};wt(c,A=>{r()==="privacy"?A(v):r()==="terms"?A(p,1):r()==="about"?A(_,2):r()==="contact"&&A(g,3)})}var m=w(h,2),$=b(m);_s($,{class:"w-5 h-5"});var S=w(d,2),R=b(S);{var x=A=>{var L=ll();E(A,L)},k=A=>{var L=fl();E(A,L)},M=A=>{var L=ul();E(A,L)},q=A=>{var L=cl();E(A,L)};wt(R,A=>{r()==="privacy"?A(x):r()==="terms"?A(k,1):r()==="about"?A(M,2):r()==="contact"&&A(q,3)})}var I=w(S,2),j=b(I);ie("click",m,function(...A){var L;(L=n())==null||L.apply(this,A)}),ie("click",j,function(...A){var L;(L=n())==null||L.apply(this,A)}),E(a,l)};wt(s,a=>{r()&&a(o)})}E(e,i)}var hl=B('<div class="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-600 selection:text-white"><!> <main><!> <section class="max-w-7xl mx-auto px-4"><!></section> <!> <section class="max-w-7xl mx-auto px-4"><!></section> <!> <!></main> <!> <!></div>');function pl(e){let t=qe(null);function r(m){H(t,m)}function n(){H(t,null)}var i=hl(),s=b(i);za(s,{});var o=w(s,2),a=b(o);Ha(a);var l=w(a,2),u=b(l);fi(u,{slotType:"leaderboard"});var d=w(l,2);Ya(d);var h=w(d,2),c=b(h);fi(c,{slotType:"rectangle"});var v=w(h,2);Qa(v);var p=w(v,2);el(p);var _=w(o,2);rl(_,{onOpenModal:r});var g=w(_,2);vl(g,{get activeModal(){return y(t)},onClose:n}),E(e,i)}const yn=document.getElementById("app")||document.body;yn&&(yn.innerHTML="");Xo(pl,{target:yn});

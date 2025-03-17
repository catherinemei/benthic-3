(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();const ae=!1,fe=(e,t)=>e===t,de=Symbol("solid-track"),_={equals:fe};let ee=se;const D=1,F=2,te={owned:null,cleanups:null,context:null,owner:null};var A=null;let K=null,ue=null,N=null,C=null,k=null,W=0;function L(e,t){const n=N,i=A,o=e.length===0,s=t===void 0?i:t,c=o?te:{owned:null,cleanups:null,context:s?s.context:null,owner:s},r=o?e:()=>e(()=>I(()=>G(c)));A=c,N=null;try{return O(r,!0)}finally{N=n,A=i}}function R(e,t){t=t?Object.assign({},_,t):_;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},i=o=>(typeof o=="function"&&(o=o(n.value)),oe(n,o));return[ie.bind(n),i]}function v(e,t,n){const i=q(e,t,!1,D);B(i)}function he(e,t,n){ee=me;const i=q(e,t,!1,D);i.user=!0,k?k.push(i):B(i)}function $(e,t,n){n=n?Object.assign({},_,n):_;const i=q(e,t,!0,0);return i.observers=null,i.observerSlots=null,i.comparator=n.equals||void 0,B(i),ie.bind(i)}function I(e){if(N===null)return e();const t=N;N=null;try{return e()}finally{N=t}}function pe(e){he(()=>I(e))}function ne(e){return A===null||(A.cleanups===null?A.cleanups=[e]:A.cleanups.push(e)),e}function ie(){if(this.sources&&this.state)if(this.state===D)B(this);else{const e=C;C=null,O(()=>H(this),!1),C=e}if(N){const e=this.observers?this.observers.length:0;N.sources?(N.sources.push(this),N.sourceSlots.push(e)):(N.sources=[this],N.sourceSlots=[e]),this.observers?(this.observers.push(N),this.observerSlots.push(N.sources.length-1)):(this.observers=[N],this.observerSlots=[N.sources.length-1])}return this.value}function oe(e,t,n){let i=e.value;return(!e.comparator||!e.comparator(i,t))&&(e.value=t,e.observers&&e.observers.length&&O(()=>{for(let o=0;o<e.observers.length;o+=1){const s=e.observers[o],c=K&&K.running;c&&K.disposed.has(s),(c?!s.tState:!s.state)&&(s.pure?C.push(s):k.push(s),s.observers&&re(s)),c||(s.state=D)}if(C.length>1e6)throw C=[],new Error},!1)),t}function B(e){if(!e.fn)return;G(e);const t=W;ge(e,e.value,t)}function ge(e,t,n){let i;const o=A,s=N;N=A=e;try{i=e.fn(t)}catch(c){return e.pure&&(e.state=D,e.owned&&e.owned.forEach(G),e.owned=null),e.updatedAt=n+1,le(c)}finally{N=s,A=o}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?oe(e,i):e.value=i,e.updatedAt=n)}function q(e,t,n,i=D,o){const s={fn:e,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:A,context:A?A.context:null,pure:n};return A===null||A!==te&&(A.owned?A.owned.push(s):A.owned=[s]),s}function U(e){if(e.state===0)return;if(e.state===F)return H(e);if(e.suspense&&I(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<W);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===D)B(e);else if(e.state===F){const i=C;C=null,O(()=>H(e,t[0]),!1),C=i}}function O(e,t){if(C)return e();let n=!1;t||(C=[]),k?n=!0:k=[],W++;try{const i=e();return ye(n),i}catch(i){n||(k=null),C=null,le(i)}}function ye(e){if(C&&(se(C),C=null),e)return;const t=k;k=null,t.length&&O(()=>ee(t),!1)}function se(e){for(let t=0;t<e.length;t++)U(e[t])}function me(e){let t,n=0;for(t=0;t<e.length;t++){const i=e[t];i.user?e[n++]=i:U(i)}for(t=0;t<n;t++)U(e[t])}function H(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const i=e.sources[n];if(i.sources){const o=i.state;o===D?i!==t&&(!i.updatedAt||i.updatedAt<W)&&U(i):o===F&&H(i,t)}}}function re(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=F,n.pure?C.push(n):k.push(n),n.observers&&re(n))}}function G(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),i=e.sourceSlots.pop(),o=n.observers;if(o&&o.length){const s=o.pop(),c=n.observerSlots.pop();i<o.length&&(s.sourceSlots[c]=i,o[i]=s,n.observerSlots[i]=c)}}if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)G(e.tOwned[t]);delete e.tOwned}if(e.owned){for(t=e.owned.length-1;t>=0;t--)G(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function we(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function le(e,t=A){throw we(e)}const be=Symbol("fallback");function Q(e){for(let t=0;t<e.length;t++)e[t]()}function Ne(e,t,n={}){let i=[],o=[],s=[],c=0,r=t.length>1?[]:null;return ne(()=>Q(s)),()=>{let g=e()||[],m=g.length,p,d;return g[de],I(()=>{let a,w,l,u,f,y,b,E,S;if(m===0)c!==0&&(Q(s),s=[],i=[],o=[],c=0,r&&(r=[])),n.fallback&&(i=[be],o[0]=L(ce=>(s[0]=ce,n.fallback())),c=1);else if(c===0){for(o=new Array(m),d=0;d<m;d++)i[d]=g[d],o[d]=L(h);c=m}else{for(l=new Array(m),u=new Array(m),r&&(f=new Array(m)),y=0,b=Math.min(c,m);y<b&&i[y]===g[y];y++);for(b=c-1,E=m-1;b>=y&&E>=y&&i[b]===g[E];b--,E--)l[E]=o[b],u[E]=s[b],r&&(f[E]=r[b]);for(a=new Map,w=new Array(E+1),d=E;d>=y;d--)S=g[d],p=a.get(S),w[d]=p===void 0?-1:p,a.set(S,d);for(p=y;p<=b;p++)S=i[p],d=a.get(S),d!==void 0&&d!==-1?(l[d]=o[p],u[d]=s[p],r&&(f[d]=r[p]),d=w[d],a.set(S,d)):s[p]();for(d=y;d<m;d++)d in l?(o[d]=l[d],s[d]=u[d],r&&(r[d]=f[d],r[d](d))):o[d]=L(h);o=o.slice(0,c=m),i=g.slice(0)}return o});function h(a){if(s[d]=a,r){const[w,l]=R(d);return r[d]=l,t(g[d],w)}return t(g[d])}}}function T(e,t){return I(()=>e(t||{}))}const Ae=e=>`Stale read from <${e}>.`;function X(e){const t="fallback"in e&&{fallback:()=>e.fallback};return $(Ne(()=>e.each,e.children,t||void 0))}function Ce(e){const t=e.keyed,n=$(()=>e.when,void 0,void 0),i=t?n:$(n,void 0,{equals:(o,s)=>!o==!s});return $(()=>{const o=i();if(o){const s=e.children;return typeof s=="function"&&s.length>0?I(()=>s(t?o:()=>{if(!I(i))throw Ae("Show");return n()})):s}return e.fallback},void 0,void 0)}function Ee(e,t,n){let i=n.length,o=t.length,s=i,c=0,r=0,g=t[o-1].nextSibling,m=null;for(;c<o||r<s;){if(t[c]===n[r]){c++,r++;continue}for(;t[o-1]===n[s-1];)o--,s--;if(o===c){const p=s<i?r?n[r-1].nextSibling:n[s-r]:g;for(;r<s;)e.insertBefore(n[r++],p)}else if(s===r)for(;c<o;)(!m||!m.has(t[c]))&&t[c].remove(),c++;else if(t[c]===n[s-1]&&n[r]===t[o-1]){const p=t[--o].nextSibling;e.insertBefore(n[r++],t[c++].nextSibling),e.insertBefore(n[--s],p),t[o]=n[s]}else{if(!m){m=new Map;let d=r;for(;d<s;)m.set(n[d],d++)}const p=m.get(t[c]);if(p!=null)if(r<p&&p<s){let d=c,h=1,a;for(;++d<o&&d<s&&!((a=m.get(t[d]))==null||a!==p+h);)h++;if(h>p-r){const w=t[c];for(;r<p;)e.insertBefore(n[r++],w)}else e.replaceChild(n[r++],t[c++])}else c++;else t[c++].remove()}}}const J="_$DX_DELEGATE";function $e(e,t,n,i={}){let o;return L(s=>{o=s,t===document?e():P(t,e(),t.firstChild?null:void 0,n)},i.owner),()=>{o(),t.textContent=""}}function V(e,t,n,i){let o;const s=()=>{const r=document.createElement("template");return r.innerHTML=e,r.content.firstChild},c=()=>(o||(o=s())).cloneNode(!0);return c.cloneNode=c,c}function ke(e,t=window.document){const n=t[J]||(t[J]=new Set);for(let i=0,o=e.length;i<o;i++){const s=e[i];n.has(s)||(n.add(s),t.addEventListener(s,Se))}}function Y(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function P(e,t,n,i){if(n!==void 0&&!i&&(i=[]),typeof t!="function")return M(e,t,i,n);v(o=>M(e,t(),o,n),i)}function Se(e){let t=e.target;const n=`$$${e.type}`,i=e.target,o=e.currentTarget,s=g=>Object.defineProperty(e,"target",{configurable:!0,value:g}),c=()=>{const g=t[n];if(g&&!t.disabled){const m=t[`${n}Data`];if(m!==void 0?g.call(t,m,e):g.call(t,e),e.cancelBubble)return}return t.host&&typeof t.host!="string"&&!t.host._$host&&t.contains(e.target)&&s(t.host),!0},r=()=>{for(;c()&&(t=t._$host||t.parentNode||t.host););};if(Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),e.composedPath){const g=e.composedPath();s(g[0]);for(let m=0;m<g.length-2&&(t=g[m],!!c());m++){if(t._$host){t=t._$host,r();break}if(t.parentNode===o)break}}else r();s(i)}function M(e,t,n,i,o){for(;typeof n=="function";)n=n();if(t===n)return n;const s=typeof t,c=i!==void 0;if(e=c&&n[0]&&n[0].parentNode||e,s==="string"||s==="number"){if(s==="number"&&(t=t.toString(),t===n))return n;if(c){let r=n[0];r&&r.nodeType===3?r.data!==t&&(r.data=t):r=document.createTextNode(t),n=x(e,n,i,r)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||s==="boolean")n=x(e,n,i);else{if(s==="function")return v(()=>{let r=t();for(;typeof r=="function";)r=r();n=M(e,r,n,i)}),()=>n;if(Array.isArray(t)){const r=[],g=n&&Array.isArray(n);if(j(r,t,n,o))return v(()=>n=M(e,r,n,i,!0)),()=>n;if(r.length===0){if(n=x(e,n,i),c)return n}else g?n.length===0?Z(e,r,i):Ee(e,n,r):(n&&x(e),Z(e,r));n=r}else if(t.nodeType){if(Array.isArray(n)){if(c)return n=x(e,n,i,t);x(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function j(e,t,n,i){let o=!1;for(let s=0,c=t.length;s<c;s++){let r=t[s],g=n&&n[e.length],m;if(!(r==null||r===!0||r===!1))if((m=typeof r)=="object"&&r.nodeType)e.push(r);else if(Array.isArray(r))o=j(e,r,g)||o;else if(m==="function")if(i){for(;typeof r=="function";)r=r();o=j(e,Array.isArray(r)?r:[r],Array.isArray(g)?g:[g])||o}else e.push(r),o=!0;else{const p=String(r);g&&g.nodeType===3&&g.data===p?e.push(g):e.push(document.createTextNode(p))}}return o}function Z(e,t,n=null){for(let i=0,o=t.length;i<o;i++)e.insertBefore(t[i],n)}function x(e,t,n,i){if(n===void 0)return e.textContent="";const o=i||document.createTextNode("");if(t.length){let s=!1;for(let c=t.length-1;c>=0;c--){const r=t[c];if(o!==r){const g=r.parentNode===e;!s&&!c?g?e.replaceChild(o,r):e.insertBefore(o,n):g&&r.remove()}else s=!0}}else e.insertBefore(o,n);return[o]}var De=V("<div><ul id=parents-group><span></span></ul><ul id=option-nodes role=tree></ul><br><ul id=home aria-live=assertive role=tree>"),z=V("<li role=treeitem><span>"),Ie=V("<li>None");function xe(e){const[t,n]=R(e.nodeGraph[0].id),[i,o]=R(["0"]),[s,c]=R(new Map),r=$(()=>t()!==null?e.nodeGraph[t()]:e.nodeGraph[0]),g=h=>{if(i().length===1)return[];{const a=i()[i().length-2];return e.nodeGraph[a].children.filter(u=>u!==h)}},m=(h,a,w)=>{if(h==="-1"||a==="-1"||!h||!a)return;const l=g(h);let u=a;if(l.includes(a)){const f=i();f.pop(),o([...f,a])}else if(a===h){const f=e.nodeGraph[a].children;if(f.length>0){const y=f[0];o([...i(),y]),u=y}}else if(e.nodeGraph[h].parents.includes(a)&&w){const f=s().get(a);o([...f??["0"]])}else if(e.nodeGraph[h].parents.includes(a)&&!w){const f=i();f.pop(),f.pop(),o([...f,a,h]),u=h}n(u),setTimeout(()=>{const f=document.getElementById(`info-${u}`);f&&(f.hasAttribute("tabindex")||f.setAttribute("tabindex","0"),f.focus())},0)},p=(h,a)=>{h&&h.setAttribute("tabindex","-1"),a&&(a.setAttribute("tabindex","0"),a.focus())},d=h=>{if(h.key==="ArrowUp"&&h.shiftKey){const a=document.activeElement,w=a?.id,l=i();if(t()==="2"){const u=document.getElementById("parents-group");p(a,u),u?.focus()}else if(w==="parents-group")if(console.log("trying to select current parent node in focus"),l.length==2){l.pop();const u=l[l.length-1];if(u){o([...l]),n(u);const f=document.getElementById(`info-${u}`);f&&(p(a,f),f.focus())}}else if(l.length>2){console.log("hitting this one"),l.pop();const u=l[l.length-1],f=l[l.length-2];if(f&&e.nodeGraph[u].parents.includes(f))o([...l]),n(u);else{const b=s().get(u);o([...b??["0"]]),n(u)}const y=document.getElementById(`info-${u}`);y&&(p(a,y),y.focus())}else{console.log("hitting this 2");const u=document.getElementById("parents-group");p(a,u),u?.focus()}else if(w.startsWith("context-")){console.log("trying to select new node in focus");const u=l.pop(),f=l.pop(),y=w.split("-")[3],b=l[l.length-1];if(console.log("information",{curNodeId:e.nodeGraph[u].displayName,oldParentNode:e.nodeGraph[f].displayName,parentNodeId:e.nodeGraph[y].displayName,grandParentNodeId:e.nodeGraph[b].displayName}),b&&e.nodeGraph[y].parents.includes(b))console.log("falling in here"),o([...l,y]),n(y);else{console.log("falling in default");const S=s().get(y);o([...S??["0"]]),n(y)}const E=document.getElementById(`info-${y}`);E&&(p(a,E),E.focus())}else if(e.nodeGraph[l[l.length-1]].parents.length===1)if(l.length==2){l.pop();const f=l[l.length-1];if(f){o([...l]),n(f);const y=document.getElementById(`info-${f}`);y&&(p(a,y),y.focus())}}else if(l.length>2){l.pop();const f=l[l.length-1],y=l[l.length-2];if(y&&e.nodeGraph[f].parents.includes(y))o([...l]),n(f);else{const E=s().get(f);o([...E??["0"]]),n(f)}const b=document.getElementById(`info-${f}`);b&&(p(a,b),b.focus())}else{const f=document.getElementById("parents-group");p(a,f),f?.focus()}else{const f=document.getElementById("parents-group");p(a,f),f?.focus()}h.preventDefault()}else if(h.key==="ArrowDown"&&h.shiftKey){const a=document.activeElement;if((a?.id).startsWith("parents")){const l=document.getElementById(`info-${t()}`);l&&(p(a,l),l.focus())}else{const l=e.nodeGraph[t()].children[0];if(l){o(f=>[...f,l]),n(l);const u=document.getElementById(`info-${l}`);u&&(p(a,u),u.focus())}}h.preventDefault()}else if(h.key==="h"){const a=document.getElementById("home"),w=i()[i().length-1],l=document.getElementById(`info-${w}`);l?(p(a,l),l.focus()):a?.focus()}else if(h.key==="ArrowLeft"||h.key==="ArrowRight"||h.key==="ArrowUp"||h.key==="ArrowDown"){const a=document.activeElement,w=a?.id;if(w.startsWith("info-")||w==="home"){const l=Array.from(document.querySelectorAll("#home li")),u=l.indexOf(a);let f=u;(h.key==="ArrowLeft"||h.key==="ArrowUp")&&u>0?f=u-1:(h.key==="ArrowRight"||h.key==="ArrowDown")&&u<l.length-1&&(f=u+1);const y=l[f]?.id.split("info-")[1];if(y){const b=i();b.pop(),o([...b,y]),n(y)}p(a,l[f]),l[f]?.focus(),h.preventDefault()}else if(w.startsWith("context")){const l=Array.from(document.querySelectorAll("#option-nodes li")),u=l.indexOf(a);let f=u;if(console.log(u),(h.key==="ArrowLeft"||h.key==="ArrowUp")&&u>0)f=u-1,p(a,l[f]),l[f]?.focus();else if((h.key==="ArrowRight"||h.key==="ArrowDown")&&u<l.length-1)f=u+1,p(a,l[f]),l[f]?.focus();else if((h.key==="ArrowLeft"||h.key==="ArrowUp")&&u<=0){const y=document.getElementById("parents-group");p(a,y),y?.focus()}else if((h.key==="ArrowRight"||h.key==="ArrowDown")&&u>=l.length-1){const y=document.getElementById("parents-group");p(a,y),y?.focus()}h.preventDefault()}else if(w==="parents-group"){const l=Array.from(document.querySelectorAll("#option-nodes li"));p(a,l[0]),l[0]?.focus(),h.preventDefault()}else h.preventDefault()}else if(h.key==="Enter"){const a=document.activeElement,w=a?.id;if(w.startsWith("info-")){const l=e.nodeGraph[t()].children[0];if(l){o(f=>[...f,l]),n(l);const u=document.getElementById(`info-${l}`);u&&(p(a,u),u.focus())}}else if(w.startsWith("context")){const l=w.split("-")[3];let u=i();u.pop(),u.pop(),o(y=>[...u,l,t()]),n(t());const f=document.getElementById(`info-${t()}`);f&&(p(a,f),f.focus())}else h.preventDefault()}else h.preventDefault()};return pe(()=>{const h=Te(e.nodeGraph);c(h),window.addEventListener("keydown",d)}),ne(()=>{window.removeEventListener("keydown",d)}),T(Ce,{get when(){return t()},get children(){return T(Pe,{get history(){return i()},get parentFocusId(){return $(()=>i().length>1)()&&$(()=>t()!=="2")()?i()[i().length-2]:"-1"},get node(){return r()},get nodeGraph(){return e.nodeGraph},onNodeClick:m})}})}function Pe(e){function t(s){if(e.history.length==1)return[s];{const c=e.history[e.history.length-2];return e.nodeGraph[c].children}}const n=$(()=>{let s=t(e.node.id);return e.node.id==="1"?s=s.filter(r=>r!=="2"):e.node.id==="2"&&(s=s.filter(r=>r!=="1")),Array.from(s).map(r=>e.nodeGraph[r]).sort((r,g)=>{const m=r.priority-g.priority;return m!==0?m:Number(r.id)-Number(g.id)})}),i=$(()=>{const s=e.node.parents;return e.node.id==="2"?[]:e.history.length==1?[]:s.filter(r=>r!==e.parentFocusId)}),o=$(()=>i().map(s=>e.nodeGraph[s]));return(()=>{var s=De(),c=s.firstChild,r=c.firstChild,g=c.nextSibling,m=g.nextSibling,p=m.nextSibling;return r.$$click=()=>e.onNodeClick(e.node.id,e.parentFocusId,!0),r.style.setProperty("font-weight","bold"),P(r,(()=>{var d=$(()=>i().length===0);return()=>d()?`${e.parentFocusId==="-1"?"No current groupings.":`Currently grouping by ${e.nodeGraph[e.parentFocusId].displayName}. `} ${e.node.displayName} belongs to 0 additional groups.`:`Currently grouping by ${e.nodeGraph[e.parentFocusId].displayName}. ${e.node.displayName} belongs to ${i().length} additional groups. Use arrow and enter keys to make selection.`})()),P(g,T(X,{get each(){return o()},children:(d,h)=>(()=>{var a=z(),w=a.firstChild;return a.$$click=()=>e.onNodeClick(e.node.id,d.id,!1),P(w,()=>`${d.displayName} group. Press Enter to switch context to this grouping.`),v(()=>Y(a,"id",`context-${e.node.id}-${h()}-${d.id}`)),a})()})),P(p,T(X,{get each(){return n()},get fallback(){return(()=>{var d=Ie();return d.style.setProperty("color","grey"),d})()},children:(d,h)=>(()=>{var a=z(),w=a.firstChild;return a.$$click=()=>e.onNodeClick(e.node.id,d.id),P(w,()=>`${d.displayName}; ${d.descriptionTokens?.longDescription}`),v(()=>Y(a,"id",`info-${d.id}`)),a})()})),s})()}function Te(e,t="0"){const n=new Map,i=[[t,[t]]];for(;i.length>0;){const[o,s]=i.shift();if(n.has(o))continue;n.set(o,s);const c=e[o].children;for(const r of c)n.has(r)||i.push([r,[...s,r]])}return n}ke(["click"]);const ve={0:{id:"0",displayName:"Bar chart",description:"Height of Charlie and River at different ages. With axes age and height in inches.",descriptionTokens:{label:"Bar chart",shortDescription:"Height of Charlie and River at different ages.",longDescription:"Height of Charlie and River at different ages. With axes age and height in inches."},parents:[],children:["1","2"],priority:0},1:{id:"1",displayName:"Age",description:"Age. Contains 3 groups.",descriptionTokens:{label:"Age",shortDescription:"Contains 3 groups.",longDescription:"Contains 3 groups."},parents:["0"],children:["3","4","5"],priority:1},2:{id:"2",displayName:"Name",description:"Name of child. Contains 2 groups.",descriptionTokens:{label:"Name",shortDescription:"Contains 2 groups.",longDescription:"Contains 2 groups."},parents:["0"],children:["6","7"],priority:2},3:{id:"3",displayName:"Age 8",description:"Age 8. Contains 2 points.",descriptionTokens:{label:"Age 8",shortDescription:"Age 8",longDescription:"Contains 2 points."},parents:["1"],children:["8","9"],priority:1},4:{id:"4",displayName:"Age 10",description:"Age 10. Contains 2 points.",descriptionTokens:{label:"Age 10",shortDescription:"Age 10",longDescription:"Contains 2 points."},parents:["1"],children:["10","11"],priority:1},5:{id:"5",displayName:"Age 12",description:"Age 12. Contains 2 points.",descriptionTokens:{label:"Age 12",shortDescription:"Age 12",longDescription:"Contains 2 points."},parents:["1"],children:["12","13"],priority:1},6:{id:"6",displayName:"Charlie",description:"Charlie. Contains 3 points.",descriptionTokens:{label:"Charlie",shortDescription:"Charlie",longDescription:"Contains 3 points."},parents:["2"],children:["8","10","12"],priority:1},7:{id:"7",displayName:"River",description:"River. Contains 3 points.",descriptionTokens:{label:"River",shortDescription:"River",longDescription:"Contains 3 points."},parents:["2"],children:["9","11","13"],priority:1},8:{id:"8",displayName:"Charlie at 8",description:"Charlie at 8. 52 inches.",descriptionTokens:{label:"Charlie 8",shortDescription:"52 inches.",longDescription:"52 inches."},parents:["3","6"],children:[],priority:1},9:{id:"9",displayName:"River at 8",description:"River at 8. 50 inches.",descriptionTokens:{label:"River 8",shortDescription:"50 inches.",longDescription:"50 inches."},parents:["3","7"],children:[],priority:1},10:{id:"10",displayName:"Charlie at 10",description:"Charlie at 10. 54 inches.",descriptionTokens:{label:"Charlie 10",shortDescription:"54 inches.",longDescription:"54 inches."},parents:["4","6"],children:[],priority:1},11:{id:"11",displayName:"River at 10",description:"River at 10. 57 inches.",descriptionTokens:{label:"River 10",shortDescription:"57 inches.",longDescription:"57 inches."},parents:["4","7"],children:[],priority:1},12:{id:"12",displayName:"Charlie at 12",description:"Charlie at 12. 56 inches.",descriptionTokens:{label:"Charlie 12",shortDescription:"56 inches.",longDescription:"56 inches."},parents:["5","6"],children:[],priority:1},13:{id:"13",displayName:"River at 12",description:"River at 12. 55 inches.",descriptionTokens:{label:"River 12",shortDescription:"55 inches.",longDescription:"55 inches."},parents:["5","7"],children:[],priority:1}},Ge=()=>T(xe,{nodeGraph:ve,showHypergraph:!1}),Be=document.getElementById("root");$e(()=>T(Ge,{}),Be);

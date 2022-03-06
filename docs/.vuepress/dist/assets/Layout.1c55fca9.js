var Be=Object.defineProperty,De=Object.defineProperties;var Ne=Object.getOwnPropertyDescriptors;var ie=Object.getOwnPropertySymbols;var Ee=Object.prototype.hasOwnProperty,Ie=Object.prototype.propertyIsEnumerable;var ce=(l,t,e)=>t in l?Be(l,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):l[t]=e,q=(l,t)=>{for(var e in t||(t={}))Ee.call(t,e)&&ce(l,e,t[e]);if(ie)for(var e of ie(t))Ie.call(t,e)&&ce(l,e,t[e]);return l},K=(l,t)=>De(l,Ne(t));import{r as P,o as a,c,b as k,y,B as R,l as p,C as de,u as n,F as D,f as H,a as g,t as T,n as w,D as U,E as X,h as x,w as B,G as ve,H as C,d as j,I as V,J as Pe,K as Re,L as He,M as Y,N as J,p as A,O as G,P as pe,Q as he,z as _e,A as N,T as fe,g as O,R as Me,v as me,S as be,U as Ae,V as Oe,W as Q,X as ge,Y as ke,Z as Fe,_ as We,$ as $e,a0 as Ue,a1 as z,a2 as Z,a3 as je,a4 as Ve,a5 as Ge}from"./app.37284e76.js";import{_ as ze}from"./plugin-vue_export-helper.21dcd24c.js";const qe={},Ke={class:"theme-default-content custom"};function Xe(l,t){const e=P("Content");return a(),c("div",Ke,[k(e)])}var Ye=ze(qe,[["render",Xe]]);const Je={key:0,class:"features"},Qe=y({setup(l){const t=R(),e=p(()=>de(t.value.features)?t.value.features:[]);return(i,r)=>n(e).length?(a(),c("div",Je,[(a(!0),c(D,null,H(n(e),_=>(a(),c("div",{key:_.title,class:"feature"},[g("h2",null,T(_.title),1),g("p",null,T(_.details),1)]))),128))])):w("",!0)}}),Ze=["innerHTML"],et=["textContent"],tt=y({setup(l){const t=R(),e=p(()=>t.value.footer),i=p(()=>t.value.footerHtml);return(r,_)=>n(e)?(a(),c(D,{key:0},[n(i)?(a(),c("div",{key:0,class:"footer",innerHTML:n(e)},null,8,Ze)):(a(),c("div",{key:1,class:"footer",textContent:T(n(e))},null,8,et))],64)):w("",!0)}}),nt=["href","rel","target","aria-label"],at=y({inheritAttrs:!1}),I=y(K(q({},at),{props:{item:{type:Object,required:!0}},setup(l){const t=l,e=U(),i=He(),{item:r}=X(t),_=p(()=>V(r.value.link)),f=p(()=>Pe(r.value.link)||Re(r.value.link)),h=p(()=>{if(!f.value){if(r.value.target)return r.value.target;if(_.value)return"_blank"}}),s=p(()=>h.value==="_blank"),o=p(()=>!_.value&&!f.value&&!s.value),u=p(()=>{if(!f.value){if(r.value.rel)return r.value.rel;if(s.value)return"noopener noreferrer"}}),d=p(()=>r.value.ariaLabel||r.value.text),v=p(()=>{const L=Object.keys(i.value.locales);return L.length?!L.some(m=>m===r.value.link):r.value.link!=="/"}),b=p(()=>v.value?e.path.startsWith(r.value.link):!1),$=p(()=>o.value?r.value.activeMatch?new RegExp(r.value.activeMatch).test(e.path):b.value:!1);return(L,m)=>{const S=P("RouterLink"),E=P("ExternalLinkIcon");return n(o)?(a(),x(S,ve({key:0,class:{"router-link-active":n($)},to:n(r).link,"aria-label":n(d)},L.$attrs),{default:B(()=>[C(L.$slots,"before"),j(" "+T(n(r).text)+" ",1),C(L.$slots,"after")]),_:3},16,["class","to","aria-label"])):(a(),c("a",ve({key:1,class:"external-link",href:n(r).link,rel:n(u),target:n(h),"aria-label":n(d)},L.$attrs),[C(L.$slots,"before"),j(" "+T(n(r).text)+" ",1),n(s)?(a(),x(E,{key:0})):w("",!0),C(L.$slots,"after")],16,nt))}}})),st={class:"hero"},rt={key:0,id:"main-title"},ot={key:1,class:"description"},lt={key:2,class:"actions"},ut=y({setup(l){const t=R(),e=Y(),i=J(),r=p(()=>i.value&&t.value.heroImageDark!==void 0?t.value.heroImageDark:t.value.heroImage),_=p(()=>t.value.heroText===null?null:t.value.heroText||e.value.title||"Hello"),f=p(()=>t.value.heroAlt||_.value||"hero"),h=p(()=>t.value.tagline===null?null:t.value.tagline||e.value.description||"Welcome to your VuePress site"),s=p(()=>de(t.value.actions)?t.value.actions.map(({text:u,link:d,type:v="primary"})=>({text:u,link:d,type:v})):[]),o=()=>{if(!r.value)return null;const u=G("img",{src:pe(r.value),alt:f.value});return t.value.heroImageDark===void 0?u:G(he,u)};return(u,d)=>(a(),c("header",st,[k(o),n(_)?(a(),c("h1",rt,T(n(_)),1)):w("",!0),n(h)?(a(),c("p",ot,T(n(h)),1)):w("",!0),n(s).length?(a(),c("p",lt,[(a(!0),c(D,null,H(n(s),v=>(a(),x(I,{key:v.text,class:A(["action-button",[v.type]]),item:v},null,8,["class","item"]))),128))])):w("",!0)]))}}),it={class:"home"},ct=y({setup(l){return(t,e)=>(a(),c("main",it,[k(ut),k(Qe),k(Ye),k(tt)]))}}),dt={key:0,class:"site-name"},vt=y({setup(l){const t=_e(),e=Y(),i=N(),r=J(),_=p(()=>i.value.home||t.value),f=p(()=>e.value.title),h=p(()=>r.value&&i.value.logoDark!==void 0?i.value.logoDark:i.value.logo),s=()=>{if(!h.value)return null;const o=G("img",{class:"logo",src:pe(h.value),alt:f.value});return i.value.logoDark===void 0?o:G(he,o)};return(o,u)=>{const d=P("RouterLink");return a(),x(d,{to:n(_)},{default:B(()=>[k(s),n(f)?(a(),c("span",dt,T(n(f)),1)):w("",!0)]),_:1},8,["to"])}}}),Le=y({setup(l){const t=i=>{i.style.height=i.scrollHeight+"px"},e=i=>{i.style.height=""};return(i,r)=>(a(),x(fe,{name:"dropdown",onEnter:t,onAfterEnter:e,onBeforeLeave:t},{default:B(()=>[C(i.$slots,"default")]),_:3}))}}),pt=["aria-label"],ht={class:"title"},_t=g("span",{class:"arrow down"},null,-1),ft=["aria-label"],mt={class:"title"},bt={class:"navbar-dropdown"},gt={class:"navbar-dropdown-subtitle"},kt={key:1},$t={class:"navbar-dropdown-subitem-wrapper"},Lt=y({props:{item:{type:Object,required:!0}},setup(l){const t=l,{item:e}=X(t),i=p(()=>e.value.ariaLabel||e.value.text),r=O(!1),_=U();Me(()=>_.path,()=>{r.value=!1});const f=s=>{s.detail===0?r.value=!r.value:r.value=!1},h=(s,o)=>o[o.length-1]===s;return(s,o)=>(a(),c("div",{class:A(["navbar-dropdown-wrapper",{open:r.value}])},[g("button",{class:"navbar-dropdown-title",type:"button","aria-label":n(i),onClick:f},[g("span",ht,T(n(e).text),1),_t],8,pt),g("button",{class:"navbar-dropdown-title-mobile",type:"button","aria-label":n(i),onClick:o[0]||(o[0]=u=>r.value=!r.value)},[g("span",mt,T(n(e).text),1),g("span",{class:A(["arrow",r.value?"down":"right"])},null,2)],8,ft),k(Le,null,{default:B(()=>[me(g("ul",bt,[(a(!0),c(D,null,H(n(e).children,u=>(a(),c("li",{key:u.text,class:"navbar-dropdown-item"},[u.children?(a(),c(D,{key:0},[g("h4",gt,[u.link?(a(),x(I,{key:0,item:u,onFocusout:d=>h(u,n(e).children)&&u.children.length===0&&(r.value=!1)},null,8,["item","onFocusout"])):(a(),c("span",kt,T(u.text),1))]),g("ul",$t,[(a(!0),c(D,null,H(u.children,d=>(a(),c("li",{key:d.link,class:"navbar-dropdown-subitem"},[k(I,{item:d,onFocusout:v=>h(d,u.children)&&h(u,n(e).children)&&(r.value=!1)},null,8,["item","onFocusout"])]))),128))])],64)):(a(),x(I,{key:1,item:u,onFocusout:d=>h(u,n(e).children)&&(r.value=!1)},null,8,["item","onFocusout"]))]))),128))],512),[[be,r.value]])]),_:1})],2))}}),ye=l=>decodeURI(l).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),yt=(l,t)=>{if(t.hash===l)return!0;const e=ye(t.path),i=ye(l);return e===i},we=(l,t)=>l.link&&yt(l.link,t)?!0:l.children?l.children.some(e=>we(e,t)):!1,xe=l=>!V(l)||/github\.com/.test(l)?"GitHub":/bitbucket\.org/.test(l)?"Bitbucket":/gitlab\.com/.test(l)?"GitLab":/gitee\.com/.test(l)?"Gitee":null,wt={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},xt=({docsRepo:l,editLinkPattern:t})=>{if(t)return t;const e=xe(l);return e!==null?wt[e]:null},Ct=({docsRepo:l,docsBranch:t,docsDir:e,filePathRelative:i,editLinkPattern:r})=>{if(!i)return null;const _=xt({docsRepo:l,editLinkPattern:r});return _?_.replace(/:repo/,V(l)?l:`https://github.com/${l}`).replace(/:branch/,t).replace(/:path/,Ae(`${Oe(e)}/${i}`)):null},Tt={key:0,class:"navbar-items"},Ce=y({setup(l){const t=()=>{const o=Q(),u=_e(),d=Y(),v=N();return p(()=>{var S,E;const b=Object.keys(d.value.locales);if(b.length<2)return[];const $=o.currentRoute.value.path,L=o.currentRoute.value.fullPath;return[{text:(S=v.value.selectLanguageText)!=null?S:"unknown language",ariaLabel:(E=v.value.selectLanguageAriaLabel)!=null?E:"unkown language",children:b.map(M=>{var ne,ae,se,re,oe,le;const F=(ae=(ne=d.value.locales)==null?void 0:ne[M])!=null?ae:{},ee=(re=(se=v.value.locales)==null?void 0:se[M])!=null?re:{},te=`${F.lang}`,Te=(oe=ee.selectLanguageName)!=null?oe:te;let W;if(te===d.value.lang)W=L;else{const ue=$.replace(u.value,M);o.getRoutes().some(Se=>Se.path===ue)?W=ue:W=(le=ee.home)!=null?le:M}return{text:Te,link:W}})}]})},e=()=>{const o=N(),u=p(()=>o.value.repo),d=p(()=>u.value?xe(u.value):null),v=p(()=>u.value&&!V(u.value)?`https://github.com/${u.value}`:u.value),b=p(()=>v.value?o.value.repoLabel?o.value.repoLabel:d.value===null?"Source":d.value:null);return p(()=>!v.value||!b.value?[]:[{text:b.value,link:v.value}])},i=o=>ge(o)?ke(o):o.children?K(q({},o),{children:o.children.map(i)}):o,_=(()=>{const o=N();return p(()=>(o.value.navbar||[]).map(i))})(),f=t(),h=e(),s=p(()=>[..._.value,...f.value,...h.value]);return(o,u)=>n(s).length?(a(),c("nav",Tt,[(a(!0),c(D,null,H(n(s),d=>(a(),c("div",{key:d.text,class:"navbar-item"},[d.children?(a(),x(Lt,{key:0,item:d},null,8,["item"])):(a(),x(I,{key:1,item:d},null,8,["item"]))]))),128))])):w("",!0)}}),St=["title"],Bt=y({setup(l){const t=N(),e=J(),i=()=>{e.value=!e.value};return(r,_)=>(a(),c("button",{class:"toggle-dark-button",title:n(t).toggleDarkMode,onClick:i},[n(e)?(a(),x(n(We),{key:1})):(a(),x(n(Fe),{key:0}))],8,St))}}),Dt=["title"],Nt=g("span",{class:"navbar-toggler-icon","aria-hidden":"true"},null,-1),Et=[Nt],It=y({emits:["toggle"],setup(l){const t=N();return(e,i)=>(a(),c("div",{class:"toggle-sidebar-button",title:n(t).toggleSidebar,"aria-expanded":"false",role:"button",tabindex:"0",onClick:i[0]||(i[0]=r=>e.$emit("toggle"))},Et,8,Dt))}}),Pt={class:"container"},Rt=y({emits:["toggle-sidebar"],setup(l){const t=N(),e=O(null),i=O(null),r=O(0),_=p(()=>r.value?{maxWidth:r.value+"px"}:{}),f=p(()=>t.value.darkMode);$e(()=>{const s=719,o=h(e.value,"paddingLeft")+h(e.value,"paddingRight"),u=()=>{var d;window.innerWidth<=s?r.value=0:r.value=e.value.offsetWidth-o-(((d=i.value)==null?void 0:d.offsetWidth)||0)};u(),window.addEventListener("resize",u,!1),window.addEventListener("orientationchange",u,!1)});function h(s,o){var v,b,$;const u=($=(b=(v=s==null?void 0:s.ownerDocument)==null?void 0:v.defaultView)==null?void 0:b.getComputedStyle(s,null))==null?void 0:$[o],d=Number.parseInt(u,10);return Number.isNaN(d)?0:d}return(s,o)=>{const u=P("NavbarSearch");return a(),c("header",{ref_key:"navbar",ref:e,class:"navbar navbar-expand-lg navbar-light bg-light fixed-top"},[g("div",Pt,[k(It,{class:"navbar-toggler",onToggle:o[0]||(o[0]=d=>s.$emit("toggle-sidebar"))}),g("div",{ref_key:"navbarBrand",ref:i},[k(vt,{class:"navbar-brand"})],512),g("div",{class:"navbar-items-wrapper",style:Ue(n(_))},[C(s.$slots,"before"),k(Ce,{class:"can-hide"}),C(s.$slots,"after"),n(f)?(a(),x(Bt,{key:0})):w("",!0),k(u)],4)])],512)}}}),Ht={class:"page-meta"},Mt={key:0,class:"meta-item edit-link"},At={key:1,class:"meta-item last-updated"},Ot={class:"meta-item-label"},Ft={class:"meta-item-info"},Wt={key:2,class:"meta-item contributors"},Ut={class:"meta-item-label"},jt={class:"meta-item-info"},Vt=["title"],Gt=j(", "),zt=y({setup(l){const t=()=>{const s=N(),o=z(),u=R();return p(()=>{var E,M,F;if(!((M=(E=u.value.editLink)!=null?E:s.value.editLink)!=null?M:!0))return null;const{repo:v,docsRepo:b=v,docsBranch:$="main",docsDir:L="",editLinkText:m}=s.value;if(!b)return null;const S=Ct({docsRepo:b,docsBranch:$,docsDir:L,filePathRelative:o.value.filePathRelative,editLinkPattern:(F=u.value.editLinkPattern)!=null?F:s.value.editLinkPattern});return S?{text:m!=null?m:"Edit this page",link:S}:null})},e=()=>{const s=N(),o=z(),u=R();return p(()=>{var b,$,L,m;return!(($=(b=u.value.lastUpdated)!=null?b:s.value.lastUpdated)!=null?$:!0)||!((L=o.value.git)==null?void 0:L.updatedTime)?null:new Date((m=o.value.git)==null?void 0:m.updatedTime).toLocaleString()})},i=()=>{const s=N(),o=z(),u=R();return p(()=>{var v,b,$,L;return((b=(v=u.value.contributors)!=null?v:s.value.contributors)!=null?b:!0)&&(L=($=o.value.git)==null?void 0:$.contributors)!=null?L:null})},r=N(),_=t(),f=e(),h=i();return(s,o)=>{const u=P("ClientOnly");return a(),c("footer",Ht,[n(_)?(a(),c("div",Mt,[k(I,{class:"meta-item-label",item:n(_)},null,8,["item"])])):w("",!0),n(f)?(a(),c("div",At,[g("span",Ot,T(n(r).lastUpdatedText)+": ",1),k(u,null,{default:B(()=>[g("span",Ft,T(n(f)),1)]),_:1})])):w("",!0),n(h)&&n(h).length?(a(),c("div",Wt,[g("span",Ut,T(n(r).contributorsText)+": ",1),g("span",jt,[(a(!0),c(D,null,H(n(h),(d,v)=>(a(),c(D,{key:v},[g("span",{class:"contributor",title:`email: ${d.email}`},T(d.name),9,Vt),v!==n(h).length-1?(a(),c(D,{key:0},[Gt],64)):w("",!0)],64))),128))])])):w("",!0)])}}}),qt={key:0,class:"page-nav"},Kt={class:"inner"},Xt={key:0,class:"prev"},Yt={key:1,class:"next"},Jt=y({setup(l){const t=s=>s===!1?null:ge(s)?ke(s):je(s)?s:!1,e=(s,o,u)=>{const d=s.findIndex(v=>v.link===o);if(d!==-1){const v=s[d+u];return(v==null?void 0:v.link)?v:null}for(const v of s)if(v.children){const b=e(v.children,o,u);if(b)return b}return null},i=R(),r=Z(),_=U(),f=p(()=>{const s=t(i.value.prev);return s!==!1?s:e(r.value,_.path,-1)}),h=p(()=>{const s=t(i.value.next);return s!==!1?s:e(r.value,_.path,1)});return(s,o)=>n(f)||n(h)?(a(),c("nav",qt,[g("p",Kt,[n(f)?(a(),c("span",Xt,[k(I,{item:n(f)},null,8,["item"])])):w("",!0),n(h)?(a(),c("span",Yt,[k(I,{item:n(h)},null,8,["item"])])):w("",!0)])])):w("",!0)}}),Qt={class:"page"},Zt={class:"theme-default-content"},en=y({setup(l){return(t,e)=>{const i=P("Content");return a(),c("main",Qt,[C(t.$slots,"top"),g("div",Zt,[k(i)]),k(zt),k(Jt),C(t.$slots,"bottom")])}}}),tn={class:"sidebar-item-children"},nn=y({props:{item:{type:Object,required:!0},depth:{type:Number,required:!1,default:0}},setup(l){const t=l,{item:e,depth:i}=X(t),r=U(),_=Q(),f=p(()=>we(e.value,r)),h=p(()=>({"sidebar-item":!0,"sidebar-heading":i.value===0,active:f.value,collapsible:e.value.collapsible})),s=O(!0),o=O(void 0);return e.value.collapsible&&(s.value=f.value,o.value=()=>{s.value=!s.value},_.afterEach(()=>{s.value=f.value})),(u,d)=>{var b;const v=P("SidebarItem",!0);return a(),c("li",null,[n(e).link?(a(),x(I,{key:0,class:A(n(h)),item:n(e)},null,8,["class","item"])):(a(),c("p",{key:1,class:A(n(h)),onClick:d[0]||(d[0]=(...$)=>o.value&&o.value(...$))},[j(T(n(e).text)+" ",1),n(e).collapsible?(a(),c("span",{key:0,class:A(["arrow",s.value?"down":"right"])},null,2)):w("",!0)],2)),((b=n(e).children)==null?void 0:b.length)?(a(),x(Le,{key:2},{default:B(()=>[me(g("ul",tn,[(a(!0),c(D,null,H(n(e).children,$=>(a(),x(v,{key:`${n(i)}${$.text}${$.link}`,item:$,depth:n(i)+1},null,8,["item","depth"]))),128))],512),[[be,s.value]])]),_:1})):w("",!0)])}}}),an={key:0,class:"sidebar-items"},sn=y({setup(l){const t=Z();return(e,i)=>n(t).length?(a(),c("ul",an,[(a(!0),c(D,null,H(n(t),r=>(a(),x(nn,{key:r.link||r.text,item:r},null,8,["item"]))),128))])):w("",!0)}}),rn={class:"sidebar"},on=y({setup(l){return(t,e)=>(a(),c("aside",rn,[k(Ce),C(t.$slots,"top"),k(sn),C(t.$slots,"bottom")]))}}),dn=y({setup(l){const t=z(),e=R(),i=N(),r=p(()=>e.value.navbar!==!1&&i.value.navbar!==!1),_=Z(),f=O(!1),h=m=>{f.value=typeof m=="boolean"?m:!f.value},s={x:0,y:0},o=m=>{s.x=m.changedTouches[0].clientX,s.y=m.changedTouches[0].clientY},u=m=>{const S=m.changedTouches[0].clientX-s.x,E=m.changedTouches[0].clientY-s.y;Math.abs(S)>Math.abs(E)&&Math.abs(S)>40&&(S>0&&s.x<=80?h(!0):h(!1))},d=p(()=>[{"no-navbar":!r.value,"no-sidebar":!_.value.length,"sidebar-open":f.value},e.value.pageClass]);let v;$e(()=>{v=Q().afterEach(()=>{h(!1)})}),Ve(()=>{v()});const b=Ge(),$=b.resolve,L=b.pending;return(m,S)=>(a(),c("div",{class:A(["theme-container",n(d)]),onTouchstart:o,onTouchend:u},[C(m.$slots,"navbar",{},()=>[n(r)?(a(),x(Rt,{key:0,onToggleSidebar:h},{before:B(()=>[C(m.$slots,"navbar-before")]),after:B(()=>[C(m.$slots,"navbar-after")]),_:3})):w("",!0)]),g("div",{class:"sidebar-mask",onClick:S[0]||(S[0]=E=>h(!1))}),C(m.$slots,"sidebar",{},()=>[k(on,null,{top:B(()=>[C(m.$slots,"sidebar-top")]),bottom:B(()=>[C(m.$slots,"sidebar-bottom")]),_:3})]),C(m.$slots,"page",{},()=>[n(e).home?(a(),x(ct,{key:0})):(a(),x(fe,{key:1,name:"fade-slide-y",mode:"out-in",onBeforeEnter:n($),onBeforeLeave:n(L)},{default:B(()=>[(a(),x(en,{key:n(t).path},{top:B(()=>[C(m.$slots,"page-top")]),bottom:B(()=>[C(m.$slots,"page-bottom")]),_:3}))]),_:3},8,["onBeforeEnter","onBeforeLeave"]))])],34))}});export{dn as default};
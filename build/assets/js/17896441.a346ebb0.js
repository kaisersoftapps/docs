"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[401],{5682:(e,t,s)=>{s.d(t,{A:()=>v});s(3746);var a=s(5392),n=s(7731),i=s(2391),l=s(8021),o=s(5487),r=s(7690),c=s(8740),d=s(2218);function u(e){return(0,d.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,d.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const m={breadcrumbHomeIcon:"breadcrumbHomeIcon_T8_a"};function h(){const e=(0,c.A)("/");return(0,d.jsx)("li",{className:"breadcrumbs__item",children:(0,d.jsx)(o.A,{"aria-label":(0,r.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,d.jsx)(u,{className:m.breadcrumbHomeIcon})})})}const b={breadcrumbsContainer:"breadcrumbsContainer_Jna7"};function p(e){let{children:t,href:s,isLast:a}=e;const n="breadcrumbs__link";return a?(0,d.jsx)("span",{className:n,itemProp:"name",children:t}):s?(0,d.jsx)(o.A,{className:n,href:s,itemProp:"item",children:(0,d.jsx)("span",{itemProp:"name",children:t})}):(0,d.jsx)("span",{className:n,children:t})}function x(e){let{children:t,active:s,index:n,addMicrodata:i}=e;return(0,d.jsxs)("li",{...i&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,a.A)("breadcrumbs__item",{"breadcrumbs__item--active":s}),children:[t,(0,d.jsx)("meta",{itemProp:"position",content:String(n+1)})]})}function v(){const e=(0,i.OF)(),t=(0,l.Dt)();return e?(0,d.jsx)("nav",{className:(0,a.A)(n.G.docs.docBreadcrumbs,b.breadcrumbsContainer),"aria-label":(0,r.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,d.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,d.jsx)(h,{}),e.map(((t,s)=>{const a=s===e.length-1,n="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,d.jsx)(x,{active:a,index:s,addMicrodata:!!n,children:(0,d.jsx)(p,{href:n,isLast:a,children:t.label})},s)}))]})}):null}},2737:(e,t,s)=>{s.r(t),s.d(t,{default:()=>X});var a=s(3746),n=s(8937),i=s(2584),l=s(2218);const o=a.createContext(null);function r(e){let{children:t,content:s}=e;const n=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(s);return(0,l.jsx)(o.Provider,{value:n,children:t})}function c(){const e=(0,a.useContext)(o);if(null===e)throw new i.dV("DocProvider");return e}function d(){const{metadata:e,frontMatter:t,assets:s}=c();return(0,l.jsx)(n.be,{title:e.title,description:e.description,keywords:t.keywords,image:s.image??t.image})}var u=s(5392),m=s(8553),h=s(961);function b(){const{metadata:e}=c();return(0,l.jsx)(h.A,{previous:e.previous,next:e.next})}var p=s(2238),x=s(819),v=s(7731),g=s(7690),j=s(5487);const f={tag:"tag_BEdU",tagRegular:"tagRegular_brfK",tagWithCount:"tagWithCount_FeZo"};function A(e){let{permalink:t,label:s,count:a}=e;return(0,l.jsxs)(j.A,{href:t,className:(0,u.A)(f.tag,a?f.tagWithCount:f.tagRegular),children:[s,a&&(0,l.jsx)("span",{children:a})]})}const _={tags:"tags_aYfF",tag:"tag_UM2C"};function N(e){let{tags:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("b",{children:(0,l.jsx)(g.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,l.jsx)("ul",{className:(0,u.A)(_.tags,"padding--none","margin-left--sm"),children:t.map((e=>{let{label:t,permalink:s}=e;return(0,l.jsx)("li",{className:_.tag,children:(0,l.jsx)(A,{label:t,permalink:s})},s)}))})]})}const C={iconEdit:"iconEdit__nn6"};function T(e){let{className:t,...s}=e;return(0,l.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,u.A)(C.iconEdit,t),"aria-hidden":"true",...s,children:(0,l.jsx)("g",{children:(0,l.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function L(e){let{editUrl:t}=e;return(0,l.jsxs)(j.A,{to:t,className:v.G.common.editThisPage,children:[(0,l.jsx)(T,{}),(0,l.jsx)(g.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}var U=s(3735);function k(e){void 0===e&&(e={});const{i18n:{currentLocale:t}}=(0,U.A)(),s=function(){const{i18n:{currentLocale:e,localeConfigs:t}}=(0,U.A)();return t[e].calendar}();return new Intl.DateTimeFormat(t,{calendar:s,...e})}function w(e){let{lastUpdatedAt:t}=e;const s=new Date(t),a=k({day:"numeric",month:"short",year:"numeric",timeZone:"UTC"}).format(s);return(0,l.jsx)(g.A,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,l.jsx)("b",{children:(0,l.jsx)("time",{dateTime:s.toISOString(),itemProp:"dateModified",children:a})})},children:" on {date}"})}function y(e){let{lastUpdatedBy:t}=e;return(0,l.jsx)(g.A,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,l.jsx)("b",{children:t})},children:" by {user}"})}function B(e){let{lastUpdatedAt:t,lastUpdatedBy:s}=e;return(0,l.jsxs)("span",{className:v.G.common.lastUpdated,children:[(0,l.jsx)(g.A,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t?(0,l.jsx)(w,{lastUpdatedAt:t}):"",byUser:s?(0,l.jsx)(y,{lastUpdatedBy:s}):""},children:"Last updated{atDate}{byUser}"}),!1]})}const M={lastUpdated:"lastUpdated_nYsO"};function I(e){let{className:t,editUrl:s,lastUpdatedAt:a,lastUpdatedBy:n}=e;return(0,l.jsxs)("div",{className:(0,u.A)("row",t),children:[(0,l.jsx)("div",{className:"col",children:s&&(0,l.jsx)(L,{editUrl:s})}),(0,l.jsx)("div",{className:(0,u.A)("col",M.lastUpdated),children:(a||n)&&(0,l.jsx)(B,{lastUpdatedAt:a,lastUpdatedBy:n})})]})}function H(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:s,lastUpdatedBy:a,tags:n}=e,i=n.length>0,o=!!(t||s||a);return i||o?(0,l.jsxs)("footer",{className:(0,u.A)(v.G.docs.docFooter,"docusaurus-mt-lg"),children:[i&&(0,l.jsx)("div",{className:(0,u.A)("row margin-top--sm",v.G.docs.docFooterTagsRow),children:(0,l.jsx)("div",{className:"col",children:(0,l.jsx)(N,{tags:n})})}),o&&(0,l.jsx)(I,{className:(0,u.A)("margin-top--sm",v.G.docs.docFooterEditMetaRow),editUrl:t,lastUpdatedAt:s,lastUpdatedBy:a})]}):null}var E=s(7098),D=s(2150);const P={tocCollapsibleButton:"tocCollapsibleButton_ZID8",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_rJuK"};function V(e){let{collapsed:t,...s}=e;return(0,l.jsx)("button",{type:"button",...s,className:(0,u.A)("clean-btn",P.tocCollapsibleButton,!t&&P.tocCollapsibleButtonExpanded,s.className),children:(0,l.jsx)(g.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const G={tocCollapsible:"tocCollapsible_rHQw",tocCollapsibleContent:"tocCollapsibleContent_J9Yt",tocCollapsibleExpanded:"tocCollapsibleExpanded_vBbu"};function F(e){let{toc:t,className:s,minHeadingLevel:a,maxHeadingLevel:n}=e;const{collapsed:i,toggleCollapsed:o}=(0,E.u)({initialState:!0});return(0,l.jsxs)("div",{className:(0,u.A)(G.tocCollapsible,!i&&G.tocCollapsibleExpanded,s),children:[(0,l.jsx)(V,{collapsed:i,onClick:o}),(0,l.jsx)(E.N,{lazy:!0,className:G.tocCollapsibleContent,collapsed:i,children:(0,l.jsx)(D.A,{toc:t,minHeadingLevel:a,maxHeadingLevel:n})})]})}const R={tocMobile:"tocMobile_RHbw"};function S(){const{toc:e,frontMatter:t}=c();return(0,l.jsx)(F,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.A)(v.G.docs.docTocMobile,R.tocMobile)})}var O=s(5216);function z(){const{toc:e,frontMatter:t}=c();return(0,l.jsx)(O.A,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:v.G.docs.docTocDesktop})}var W=s(5024),J=s(8460);function Y(e){let{children:t}=e;const s=function(){const{metadata:e,frontMatter:t,contentTitle:s}=c();return t.hide_title||void 0!==s?null:e.title}();return(0,l.jsxs)("div",{className:(0,u.A)(v.G.docs.docMarkdown,"markdown"),children:[s&&(0,l.jsx)("header",{children:(0,l.jsx)(W.A,{as:"h1",children:s})}),(0,l.jsx)(J.A,{children:t})]})}var Z=s(5682),q=s(8974);const K={docItemContainer:"docItemContainer_Q5jp",docItemCol:"docItemCol_CXnc"};function Q(e){let{children:t}=e;const s=function(){const{frontMatter:e,toc:t}=c(),s=(0,m.l)(),a=e.hide_table_of_contents,n=!a&&t.length>0;return{hidden:a,mobile:n?(0,l.jsx)(S,{}):void 0,desktop:!n||"desktop"!==s&&"ssr"!==s?void 0:(0,l.jsx)(z,{})}}(),{metadata:{unlisted:a}}=c();return(0,l.jsxs)("div",{className:"row",children:[(0,l.jsxs)("div",{className:(0,u.A)("col",!s.hidden&&K.docItemCol),children:[a&&(0,l.jsx)(q.A,{}),(0,l.jsx)(p.A,{}),(0,l.jsxs)("div",{className:K.docItemContainer,children:[(0,l.jsxs)("article",{children:[(0,l.jsx)(Z.A,{}),(0,l.jsx)(x.A,{}),s.mobile,(0,l.jsx)(Y,{children:t}),(0,l.jsx)(H,{})]}),(0,l.jsx)(b,{})]})]}),s.desktop&&(0,l.jsx)("div",{className:"col col--3",children:s.desktop})]})}function X(e){const t=`docs-doc-id-${e.content.metadata.id}`,s=e.content;return(0,l.jsx)(r,{content:e.content,children:(0,l.jsxs)(n.e3,{className:t,children:[(0,l.jsx)(d,{}),(0,l.jsx)(Q,{children:(0,l.jsx)(s,{})})]})})}},961:(e,t,s)=>{s.d(t,{A:()=>r});s(3746);var a=s(7690),n=s(5392),i=s(5487),l=s(2218);function o(e){const{permalink:t,title:s,subLabel:a,isNext:o}=e;return(0,l.jsxs)(i.A,{className:(0,n.A)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[a&&(0,l.jsx)("div",{className:"pagination-nav__sublabel",children:a}),(0,l.jsx)("div",{className:"pagination-nav__label",children:s})]})}function r(e){const{previous:t,next:s}=e;return(0,l.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,a.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,l.jsx)(o,{...t,subLabel:(0,l.jsx)(a.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),s&&(0,l.jsx)(o,{...s,subLabel:(0,l.jsx)(a.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}},819:(e,t,s)=>{s.d(t,{A:()=>r});s(3746);var a=s(5392),n=s(7690),i=s(7731),l=s(9856),o=s(2218);function r(e){let{className:t}=e;const s=(0,l.r)();return s.badge?(0,o.jsx)("span",{className:(0,a.A)(t,i.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,o.jsx)(n.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:s.label},children:"Version: {versionLabel}"})}):null}},2238:(e,t,s)=>{s.d(t,{A:()=>x});s(3746);var a=s(5392),n=s(3735),i=s(5487),l=s(7690),o=s(3373),r=s(7731),c=s(7041),d=s(9856),u=s(2218);const m={unreleased:function(e){let{siteTitle:t,versionMetadata:s}=e;return(0,u.jsx)(l.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:s.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:s}=e;return(0,u.jsx)(l.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:s.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function h(e){const t=m[e.versionMetadata.banner];return(0,u.jsx)(t,{...e})}function b(e){let{versionLabel:t,to:s,onClick:a}=e;return(0,u.jsx)(l.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,u.jsx)("b",{children:(0,u.jsx)(i.A,{to:s,onClick:a,children:(0,u.jsx)(l.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function p(e){let{className:t,versionMetadata:s}=e;const{siteConfig:{title:i}}=(0,n.A)(),{pluginId:l}=(0,o.vT)({failfast:!0}),{savePreferredVersionName:d}=(0,c.g1)(l),{latestDocSuggestion:m,latestVersionSuggestion:p}=(0,o.HW)(l),x=m??(v=p).docs.find((e=>e.id===v.mainDocId));var v;return(0,u.jsxs)("div",{className:(0,a.A)(t,r.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,u.jsx)("div",{children:(0,u.jsx)(h,{siteTitle:i,versionMetadata:s})}),(0,u.jsx)("div",{className:"margin-top--md",children:(0,u.jsx)(b,{versionLabel:p.label,to:x.path,onClick:()=>d(p.name)})})]})}function x(e){let{className:t}=e;const s=(0,d.r)();return s.banner?(0,u.jsx)(p,{className:t,versionMetadata:s}):null}}}]);
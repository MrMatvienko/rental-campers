"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[644],{609:function(e,s,a){a(791);s.Z=a.p+"static/media/sprite.81d601b198a6faf2f2fc58c5a3edb5cd.svg"},785:function(e,s,a){a.d(s,{Z:function(){return v}});var i=a(439),n="CamperItem_itemContainer__BZhAI",c="CamperItem_imageItem__iTsqN",r="CamperItem_infoContainer__EsCOl",t="CamperItem_info1__QTYpV",l="CamperItem_fistLineInfo__hLMCp",m="CamperItem_priceHeart__CUZno",o="CamperItem_icon__M+sBW",d="CamperItem_info2__D2FQx",_="CamperItem_description__45elE",h="CamperItem_listDateils__sluuw",u="CamperItem_camperDetailsItem__icu00",p="CamperItem_iconList__e-CHF",f="CamperItem_showBtn__Bl4ME",j=a(609),x=a(791),F=a(420),C=a(728),N=a(184),v=function(e){var s=e.camper,a=e.toggleModal,v=(0,x.useState)("#FFFFFF"),g=(0,i.Z)(v,2),I=g[0],b=g[1],Z=(0,F.I0)(),k=(0,F.v9)((function(e){return e.camper.favorites})),w=s.gallery[0],T=s.description.split(" ").slice(0,11).join(" ");(0,x.useEffect)((function(){var e=localStorage.getItem("".concat(s._id));e&&b(e),k.some((function(e){return e._id===s._id}))&&b("#FF0000")}),[s._id,k]);var A=k.some((function(e){return e._id===s._id}));return(0,N.jsxs)("div",{className:n,children:[(0,N.jsx)("img",{className:c,src:w,alt:"Camper"}),(0,N.jsxs)("div",{className:r,children:[(0,N.jsxs)("div",{className:t,children:[(0,N.jsx)("p",{className:l,children:s.name}),(0,N.jsxs)("div",{className:m,children:[(0,N.jsxs)("p",{className:l,children:["\u20ac",s.price]}),(0,N.jsx)("svg",{className:o,onClick:function(){var e="#FF0000"===I?"#FFFFFF":"#FF0000";b(e),localStorage.setItem("".concat(s._id),e),Z("#FF0000"===e?(0,C._p)(s):(0,C.zm)(s))},fill:A?"#FF0000":"#FFFFFF",children:(0,N.jsx)("use",{href:j.Z+"#icon-heart"})})]})]}),(0,N.jsxs)("div",{className:d,children:[(0,N.jsx)("p",{children:s.rating}),(0,N.jsx)("p",{children:s.location})]}),(0,N.jsxs)("p",{className:_,children:[T,"..."]}),(0,N.jsxs)("ul",{className:h,children:[(0,N.jsxs)("li",{className:u,children:[(0,N.jsx)("svg",{className:p,children:(0,N.jsx)("use",{href:j.Z+"#icon-people"})}),s.adults," adults"]}),(0,N.jsxs)("li",{className:u,children:[(0,N.jsx)("svg",{className:p,children:(0,N.jsx)("use",{href:j.Z+"#icon-at"})}),s.transmission.charAt(0).toUpperCase()+s.transmission.substring(1)]}),(0,N.jsxs)("li",{className:u,children:[(0,N.jsx)("svg",{className:p,children:(0,N.jsx)("use",{href:j.Z+"#icon-oil"})}),s.engine.charAt(0).toUpperCase()+s.engine.substring(1)]}),1===s.details.kitchen&&(0,N.jsxs)("li",{className:u,children:[(0,N.jsx)("svg",{className:p,children:(0,N.jsx)("use",{href:j.Z+"#icon-kitchen"})}),"Kitchen"]}),s.details.beds>0&&(0,N.jsxs)("li",{className:u,children:[(0,N.jsx)("svg",{className:p,children:(0,N.jsx)("use",{href:j.Z+"#icon-bed"})}),s.details.beds," beds"]}),1===s.details.TV&&(0,N.jsxs)("li",{className:u,children:[(0,N.jsx)("svg",{className:p,children:(0,N.jsx)("use",{href:j.Z+"#icon-tv"})}),"TV"]}),1===s.details.airConditioner&&(0,N.jsx)("li",{className:u,children:"AC "})]}),(0,N.jsx)("button",{type:"button",onClick:function(){return a(s)},className:f,children:"Show more"})]})]})}},872:function(e,s,a){a.d(s,{T:function(){return n},q:function(){return i}});var i=function(e){return e.camper.camperData},n=function(e){return e.camper.favorites}}}]);
//# sourceMappingURL=644.ae346da1.chunk.js.map
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[644],{4596:function(e,s,i){i(2791);s.Z=i.p+"static/media/sprite.ddc68216b36cb3b4548ee571304de3f9.svg"},4785:function(e,s,i){i.d(s,{Z:function(){return C}});var a=i(9439),n="CamperItem_itemContainer__BZhAI",c="CamperItem_imageItem__iTsqN",r="CamperItem_infoContainer__EsCOl",t="CamperItem_info1__QTYpV",l="CamperItem_fistLineInfo__hLMCp",m="CamperItem_priceHeart__CUZno",o="CamperItem_icon__M+sBW",d="CamperItem_info2__D2FQx",h="CamperItem_description__45elE",p="CamperItem_listDateils__sluuw",u="CamperItem_camperDetailsItem__icu00",_="CamperItem_iconList__e-CHF",x="CamperItem_showBtn__Bl4ME",j=i(4596),f=i(2791),F=i(4420),v=i(5728),N=i(184),C=function(e){var s=e.camper,i=e.toggleModal,C=(0,f.useState)("#FFFFFF"),g=(0,a.Z)(C,2),I=g[0],Z=g[1],b=(0,F.I0)(),k=(0,F.v9)((function(e){return e.camper.favorites})),w=s.gallery[0],T=s.description.split(" ").slice(0,11).join(" ");(0,f.useEffect)((function(){var e=localStorage.getItem("".concat(s._id));e&&Z(e),k.some((function(e){return e._id===s._id}))&&Z("#FF0000")}),[s._id,k]);var y=k.some((function(e){return e._id===s._id}));return(0,N.jsxs)("div",{className:n,children:[(0,N.jsx)("img",{className:c,src:w,alt:"Camper"}),(0,N.jsxs)("div",{className:r,children:[(0,N.jsxs)("div",{className:t,children:[(0,N.jsx)("p",{className:l,children:s.name}),(0,N.jsxs)("div",{className:m,children:[(0,N.jsxs)("p",{className:l,children:["\u20ac",s.price,".00"]}),(0,N.jsx)("svg",{className:o,onClick:function(){var e="#FF0000"===I?"#FFFFFF":"#FF0000";Z(e),localStorage.setItem("".concat(s._id),e),b("#FF0000"===e?(0,v._p)(s):(0,v.zm)(s))},fill:y?"#FF0000":"#FFFFFF",children:(0,N.jsx)("use",{href:j.Z+"#icon-heart"})})]})]}),(0,N.jsxs)("div",{className:d,children:[(0,N.jsx)("svg",{className:o,style:{width:"14px",fill:"var(--rating)"},children:(0,N.jsx)("use",{href:j.Z+"#icon-star"})}),(0,N.jsx)("p",{children:s.rating}),(0,N.jsxs)("p",{children:["(",s.reviews.length," Reviews)"]}),(0,N.jsx)("svg",{style:{marginLeft:"16px"},className:_,children:(0,N.jsx)("use",{href:j.Z+"#icon-map-pin"})}),(0,N.jsx)("p",{children:s.location})]}),(0,N.jsxs)("p",{className:h,children:[T,"..."]}),(0,N.jsxs)("ul",{className:p,children:[(0,N.jsxs)("li",{className:u,children:[(0,N.jsx)("svg",{className:_,children:(0,N.jsx)("use",{href:j.Z+"#icon-people"})}),s.adults," adults"]}),(0,N.jsxs)("li",{className:u,children:[(0,N.jsx)("svg",{className:_,children:(0,N.jsx)("use",{href:j.Z+"#icon-at"})}),s.transmission.charAt(0).toUpperCase()+s.transmission.substring(1)]}),(0,N.jsxs)("li",{className:u,children:[(0,N.jsx)("svg",{className:_,children:(0,N.jsx)("use",{href:j.Z+"#icon-oil"})}),s.engine.charAt(0).toUpperCase()+s.engine.substring(1)]}),1===s.details.kitchen&&(0,N.jsxs)("li",{className:u,children:[(0,N.jsx)("svg",{className:_,children:(0,N.jsx)("use",{href:j.Z+"#icon-kitchen"})}),"Kitchen"]}),s.details.beds>0&&(0,N.jsxs)("li",{className:u,children:[(0,N.jsx)("svg",{className:_,children:(0,N.jsx)("use",{href:j.Z+"#icon-bed"})}),s.details.beds," beds"]}),1===s.details.TV&&(0,N.jsxs)("li",{className:u,children:[(0,N.jsx)("svg",{className:_,children:(0,N.jsx)("use",{href:j.Z+"#icon-tv"})}),"TV"]}),1===s.details.airConditioner&&(0,N.jsxs)("li",{className:u,children:[(0,N.jsx)("svg",{className:_,children:(0,N.jsx)("use",{href:j.Z+"#icon-ac"})}),"AC"," "]})]}),(0,N.jsx)("button",{type:"button",onClick:function(){return i(s)},className:x,children:"Show more"})]})]})}},6181:function(e,s,i){i.d(s,{Tc:function(){return n},qt:function(){return a}});var a=function(e){return e.camper.camperData},n=function(e){return e.camper.favorites}}}]);
//# sourceMappingURL=644.fa49c20d.chunk.js.map
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[786],{6394:function(e,a,n){n.r(a),n.d(a,{default:function(){return Q}});var t=n(9439),s=n(2791),i=n(4942),l=n(1413),c={filterContainer:"Filter_filterContainer__XhI8p",locationContaonerLabel:"Filter_locationContaonerLabel__-+hbz",selectLabel:"Filter_selectLabel__J12Eo",iconMap:"Filter_iconMap__egQ6o",searchBtn:"Filter_searchBtn__RiIaT",typeContainer:"Filter_typeContainer__2biD1",title:"Filter_title__IICaV",icon:"Filter_icon__wKEKy",typetList:"Filter_typetList__N4H-Y",typetItem:"Filter_typetItem__eD4vj",radioBtn:"Filter_radioBtn__gH34C",textIcon:"Filter_textIcon__BnTQW",equiContainer:"Filter_equiContainer__aBrvJ",titleType:"Filter_titleType__2r3XE",iconType:"Filter_iconType__e-kCE",equipmentList:"Filter_equipmentList__5cPys",equipmentItem:"Filter_equipmentItem__uR23A",labelCheckbox:"Filter_labelCheckbox__A2K2e",checkBox:"Filter_checkBox__H0cwC",checked:"Filter_checked__LLB5S",btnContainer:"Filter_btnContainer__68ERG"},r=n(4596),o=[{name:"airConditioner",icon:"icon-ac",text:"AC",value:1,nestedProperty:"details.airConditioner"},{name:"transmission",icon:"icon-at",text:"Automatic",value:"automatic"},{name:"kitchen",icon:"icon-kitchen",text:"Kitchen",value:1,nestedProperty:"details.kitchen"},{name:"TV",icon:"icon-tv",text:"TV",value:1,nestedProperty:"details.TV"},{name:"shower",icon:"icon-route",text:"Shower/WC",value:1,nestedProperty:"details.shower"}],d=[{name:"form",icon:"icon-camp1",text:"Van",value:"panelTruck"},{name:"form",icon:"icon-camp2",text:"Fully Intedrated",value:"fullyIntegrated"},{name:"form",icon:"icon-camp3",text:"Alcove",value:"alcove"}],u=[{name:"location",label:"Kyiv, Ukraine",value:"Ukraine, Kyiv"},{name:"location",label:"Lviv, Ukraine",value:"Ukraine, Lviv"},{name:"location",label:"Odesa, Ukraine",value:"Ukraine, Odesa"},{name:"location",label:"Poltava, Ukraine",value:"Ukraine, Poltava"},{name:"location",label:"Dnipro, Ukraine",value:"Ukraine, Dnipro"},{name:"location",label:"Kharkiv, Ukraine",value:"Ukraine, Kharkiv"},{name:"location",label:"Sumy, Ukraine",value:"Ukraine, Sumy"}],m=n(184),h=function(e){var a=e.onFilter,n=(0,s.useState)(""),h=(0,t.Z)(n,2),_=h[0],x=h[1],p=(0,s.useState)(""),j=(0,t.Z)(p,2),v=j[0],f=j[1],N=(0,s.useState)(""),C=(0,t.Z)(N,2),k=C[0],F=C[1],b=function(e){var a=e.target,n=a.name,t=a.checked;F((function(e){return(0,l.Z)((0,l.Z)({},e),{},(0,i.Z)({},n,t))}))};return(0,m.jsxs)("div",{className:c.filterContainer,children:[(0,m.jsx)("div",{children:(0,m.jsxs)("form",{id:"locationForm",className:c.locationContaonerForm,children:[(0,m.jsx)("label",{htmlFor:"location",className:c.locationContaonerLabel,children:"Location"}),(0,m.jsxs)("select",{id:"location-selector",name:"location-field",defaultValue:"",color:"var(--accent-red)",onChange:function(e){x(e.target.value)},className:c.selectLabel,children:[(0,m.jsx)("option",{value:"",disabled:!0,children:"Location"}),u.map((function(e,a){return(0,m.jsx)("option",{value:e.value,children:e.label},"".concat(e.value,"-").concat(a))}))]})]})}),(0,m.jsxs)("div",{className:c.equiContainer,children:[(0,m.jsx)("p",{children:"Filters"}),(0,m.jsx)("h2",{className:c.titleType,children:"Vehicle equipment"}),(0,m.jsx)("ul",{className:c.equipmentList,children:o.map((function(e,a){return(0,m.jsx)("li",{className:c.equipmentItem,children:(0,m.jsxs)("label",{className:c.labelCheckbox,children:[(0,m.jsx)("input",{type:"checkbox",name:e.text,className:c.checkBox,checked:k[e.text]||!1,onChange:b}),(0,m.jsx)("svg",{className:c.icon,children:(0,m.jsx)("use",{href:"".concat(r.Z,"#").concat(e.icon)})}),(0,m.jsx)("p",{className:c.textIcon,children:e.text})]})},"".concat(e.name,"-").concat(a))}))})]}),(0,m.jsxs)("div",{className:c.typeContainer,children:[(0,m.jsx)("h2",{className:c.title,children:"Vehicle type"}),(0,m.jsx)("ul",{className:c.typetList,children:d.map((function(e,a){return(0,m.jsx)("li",{className:c.typetItem,children:(0,m.jsxs)("label",{className:c.labelCheckbox,children:[(0,m.jsx)("input",{type:"radio",name:"vehicleType",className:c.radioBtn,value:e.name,checked:v===e.value,onChange:function(){return a=e.value,void f(a);var a}}),(0,m.jsx)("svg",{className:c.iconType,children:(0,m.jsx)("use",{href:"".concat(r.Z,"#").concat(e.icon)})}),(0,m.jsx)("p",{className:c.textIcon,children:e.text})]})},"".concat(e.name,"-").concat(a))}))})]}),(0,m.jsxs)("div",{className:c.btnContainer,children:[(0,m.jsx)("button",{className:c.searchBtn,onClick:function(e){e.preventDefault(),a(_,v,k)},children:"Search"}),(0,m.jsx)("button",{className:c.searchBtn,onClick:function(){x(""),f(""),F("")},children:"Reset"})]})]})},_="Modal_modalContainer__Oe6RC",x="Modal_modalBackdrop__8O4Bv",p="Modal_title__azIrH",j="Modal_icon__wyezu",v="Modal_firstLine__2C5nX",f="Modal_secondLine__E2Evi",N="Modal_imageContainer__71Iul",C="Modal_image__hj3ZB",k="Modal_description__2pdSz",F="Modal_infoContainer__YiMAI",b="Modal_activeTab__XfFCQ",y="Features_featuresContainer__kWK9E",g="Features_camperDetailsInfo__AktqX",L="Features_listDateils__FP1Rh",Z="Features_camperDetailsItem__KrVKP",I="Features_iconList__lBciq",S="Features_featuresTitle_1__VrSaW",B="Features_vehicleList__QyyP-",T="Features_vehicleItem__8YuCS",E="Features_sendForm__hDSvV",w="Features_formContainer__PEbCa",M="Features_inputSend__x1HBd",U="Features_inputSendTextarea__gjBxC",V="Features_sendBtn__FHhlL",q=function(e){var a=e.camper,n=a.adults,t=a.transmission,s=a.details,i=a.engine,l=a.form,c=a.length,o=a.width,d=a.height,u=a.tank,h=a.consumption;return(0,m.jsxs)("div",{className:y,children:[(0,m.jsxs)("div",{className:g,children:[(0,m.jsxs)("ul",{className:L,children:[(0,m.jsxs)("li",{className:Z,children:[(0,m.jsx)("svg",{className:I,children:(0,m.jsx)("use",{href:r.Z+"#icon-people"})}),n," adults"]}),(0,m.jsxs)("li",{className:Z,children:[(0,m.jsx)("svg",{className:I,children:(0,m.jsx)("use",{href:r.Z+"#icon-at"})}),t.charAt(0).toUpperCase()+t.substring(1)]}),(0,m.jsxs)("li",{className:Z,children:[(0,m.jsx)("svg",{className:I,children:(0,m.jsx)("use",{href:r.Z+"#icon-oil"})}),i.charAt(0).toUpperCase()+i.substring(1)]}),1===s.kitchen&&(0,m.jsxs)("li",{className:Z,children:[(0,m.jsx)("svg",{className:I,children:(0,m.jsx)("use",{href:r.Z+"#icon-kitchen"})}),"Kitchen"]}),s.beds>0&&(0,m.jsxs)("li",{className:Z,children:[(0,m.jsx)("svg",{className:I,children:(0,m.jsx)("use",{href:r.Z+"#icon-bed"})}),s.beds," beds"]}),1===s.TV&&(0,m.jsxs)("li",{className:Z,children:[(0,m.jsx)("svg",{className:I,children:(0,m.jsx)("use",{href:r.Z+"#icon-tv"})}),"TV"]}),1===s.airConditioner&&(0,m.jsxs)("li",{className:Z,children:[(0,m.jsx)("svg",{className:I,children:(0,m.jsx)("use",{href:r.Z+"#icon-ac"})}),"AC"]})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("p",{className:S,children:"Vehicle details"}),(0,m.jsxs)("ul",{className:B,children:[(0,m.jsxs)("li",{className:T,children:[(0,m.jsx)("p",{children:"Form"}),(0,m.jsx)("p",{children:l})]}),(0,m.jsxs)("li",{className:T,children:[(0,m.jsx)("p",{children:"Length"}),(0,m.jsx)("p",{children:c})]}),(0,m.jsxs)("li",{className:T,children:[(0,m.jsx)("p",{children:"Width"}),(0,m.jsx)("p",{children:o})]}),(0,m.jsxs)("li",{className:T,children:[(0,m.jsx)("p",{children:"Height"}),(0,m.jsx)("p",{children:d})]}),(0,m.jsxs)("li",{className:T,children:[(0,m.jsx)("p",{children:"Tank"}),(0,m.jsx)("p",{children:u})]}),(0,m.jsxs)("li",{className:T,children:[(0,m.jsx)("p",{children:"Consumption"}),(0,m.jsx)("p",{children:h})]})]})]})]}),(0,m.jsxs)("div",{className:E,children:[(0,m.jsx)("p",{children:"Book your campervan now"}),(0,m.jsx)("p",{children:"Stay connected! We are always ready to help you."}),(0,m.jsxs)("form",{className:w,children:[(0,m.jsx)("input",{className:M,type:"text",placeholder:"Name"}),(0,m.jsx)("input",{className:M,type:"email",placeholder:"Email"}),(0,m.jsx)("input",{className:M,type:"date",placeholder:"Date"}),(0,m.jsx)("textarea",{className:U,placeholder:"Comment"})]}),(0,m.jsx)("button",{type:"submit",className:V,children:"Send"})]})]})},D=function(e){var a=e.camper,n=e.onClose,i=(0,s.useState)(),l=(0,t.Z)(i,2),c=l[0],o=l[1];(0,s.useEffect)((function(){var e=function(e){"Escape"===e.key&&n()};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[n]);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{className:x,onClick:function(e){e.target===e.currentTarget&&n()}}),(0,m.jsxs)("div",{className:_,children:[(0,m.jsxs)("div",{className:v,children:[(0,m.jsx)("h2",{className:p,children:a.name}),(0,m.jsx)("svg",{className:j,onClick:n,children:(0,m.jsx)("use",{href:r.Z+"#icon-close"})})]}),(0,m.jsxs)("div",{className:f,children:[(0,m.jsxs)("p",{children:[" ",a.rating]}),(0,m.jsxs)("p",{children:[" ",a.location]})]}),(0,m.jsxs)("p",{children:[" \u20ac",a.price]}),(0,m.jsx)("div",{className:N,children:a.gallery.map((function(e,a){return(0,m.jsx)("img",{className:C,src:e,alt:"Camper Preview"},a)}))}),(0,m.jsx)("p",{className:k,children:a.description}),(0,m.jsxs)("div",{className:F,children:[(0,m.jsx)("p",{onClick:function(){o("Features")},className:"Features"===c?b:"",children:"Features"}),(0,m.jsx)("p",{children:"Reviews"})]}),"Features"===c&&(0,m.jsx)(q,{camper:a})]})]})},K="Rental_rentalContainer__2DF8f",P="CamperList_camperList__p+yk4",A="CamperList_buttonLoad__j6cbt",R=n(4785),H=n(6477),W=function(e){var a=e.toggleModal,n=e.camperData,i=(0,s.useState)(4),l=(0,t.Z)(i,2),c=l[0],r=l[1],o=n.slice(0,c);return(0,m.jsxs)("div",{className:P,children:[o.length>0?o.map((function(e){return(0,m.jsx)(R.Z,{camper:e,toggleModal:a},e._id)})):(0,m.jsx)(H.Z,{}),c<n.length&&(0,m.jsx)("button",{type:"button",className:A,onClick:function(){r((function(e){return e+4}))},children:"Load more"})]})},O=n(4420),X=n(9399),z=n(6181),Q=function(){var e=(0,O.I0)(),a=(0,O.v9)(z.qt),n=(0,s.useState)([]),i=(0,t.Z)(n,2),l=i[0],c=i[1],r=(0,s.useState)(!1),o=(0,t.Z)(r,2),d=o[0],u=o[1],_=(0,s.useState)(null),x=(0,t.Z)(_,2),p=x[0],j=x[1];(0,s.useEffect)((function(){e((0,X.f)())}),[e]),(0,s.useEffect)((function(){c(a)}),[a]);return(0,m.jsxs)("div",{className:K,children:[(0,m.jsx)(h,{onFilter:function(e,n,t){var s=a;e&&(s=s.filter((function(a){return a.location===e}))),t&&s.forEach((function(e){Object.keys(t).forEach((function(a){t[a]&&e.details&&e.details[a]&&(s=s.filter((function(e){return e.details[a]})))}))})),n&&(s=s.filter((function(e){return e.form===n}))),0===l.length&&alert("Sorry campers not found"),c(s)}}),(0,m.jsx)(W,{toggleModal:function(e){j(e),u(!d)},camperData:l}),d&&(0,m.jsx)(D,{camper:p,onClose:function(){u(!1)}})]})}}}]);
//# sourceMappingURL=786.542b8b01.chunk.js.map
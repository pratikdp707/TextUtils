(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{25:function(e,t,a){},26:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),o=a(17),s=a.n(o),l=(a(25),a(9)),r=(a(26),a(0));function i(e){var t={backgroundColor:"light"===e.mode?"white":"#343a40",color:"light"===e.mode?"black":"white",border:"1% solid",borderColor:"light"===e.mode?"#343a40":"white"};return Object(r.jsxs)("div",{className:"container mt-3 pb-3",style:{backgroundColor:"light"===e.mode?"white":"#343a40",color:"light"===e.mode?"black":"white"},children:[Object(r.jsx)("h2",{className:"my-2",children:"About Us"}),Object(r.jsxs)("div",{className:"accordion",id:"accordionExample",style:t,children:[Object(r.jsxs)("div",{className:"accordion-item",style:t,children:[Object(r.jsx)("h2",{className:"accordion-header",id:"headingOne",children:Object(r.jsx)("button",{className:"accordion-button",type:"button",style:t,"data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",children:Object(r.jsx)("strong",{children:"Analyze your text"})})}),Object(r.jsx)("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample",children:Object(r.jsxs)("div",{className:"accordion-body",children:[Object(r.jsx)("strong",{children:"TextUtils is a utility which can be used to analyze your text efficiently. "}),"You can manipulate your text in the way you want. You can convert the lowercase text to uppercase text, uppercase text to lowercase text, you can remove extra spaces from your text, extra email ids from the text if any, copy you text."]})})]}),Object(r.jsxs)("div",{className:"accordion-item",style:t,children:[Object(r.jsx)("h2",{className:"accordion-header",id:"headingTwo",children:Object(r.jsx)("button",{className:"accordion-button collapsed",type:"button",style:t,"data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",children:Object(r.jsx)("strong",{children:"Free to use"})})}),Object(r.jsx)("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample",children:Object(r.jsx)("div",{className:"accordion-body",children:"TextUtils is free to use. You can perform all the operations on your text."})})]}),Object(r.jsxs)("div",{className:"accordion-item",style:t,children:[Object(r.jsx)("h2",{className:"accordion-header",id:"headingThree",children:Object(r.jsx)("button",{className:"accordion-button collapsed",type:"button",style:t,"data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",children:Object(r.jsx)("strong",{children:"Browser Compatible"})})}),Object(r.jsx)("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample",children:Object(r.jsx)("div",{className:"accordion-body",children:"This application works in any browser like Google Chrome, Mozilla Firefox, Microsoft Edge, Internet Explorer, etc."})})]})]})]})}var d=a(8);function b(e){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(r.jsxs)("div",{className:"container-fluid",children:[Object(r.jsx)(d.b,{className:"navbar-brand",to:"/",children:e.title}),Object(r.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(r.jsx)("span",{className:"navbar-toggler-icon"})}),Object(r.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(r.jsxs)("ul",{className:"navbar-nav mr-auto mb-2 mb-lg-0",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(d.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(d.b,{className:"nav-link",to:"/about",children:e.aboutText})})]}),Object(r.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(r.jsx)("input",{className:"form-check-input",type:"checkbox",onChange:e.toggleMode,id:"flexSwitchCheckDefault"}),Object(r.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"".concat("light"===e.mode?"Enable":"Disable"," Dark Mode")})]})]})]})})})}b.defaultProps={title:"Title here",aboutText:"About Text here"};var h=a(20);function j(e){var t=Object(c.useState)(""),a=Object(l.a)(t,2),n=a[0],o=a[1],s=Object(c.useState)([]),i=Object(l.a)(s,2),d=i[0],b=i[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"container my-4",children:[Object(r.jsx)("h2",{children:e.heading}),Object(r.jsx)("div",{className:"mb-3",children:Object(r.jsx)("textarea",{className:"form-control",value:n,placeholder:"Enter you text here",onChange:function(e){o(e.target.value)},id:"myBox",rows:"8",style:{backgroundColor:"light"===e.mode?"#fff":"#212529",color:"light"===e.mode?"#212529":"#fff"}})}),Object(r.jsx)("button",{disabled:0===n.length,className:"btn btn-".concat("light"===e.mode?"secondary":"dark"," mr-1 mb-1"),onClick:function(){var t=n.toUpperCase();o(t),e.showAlert("Text converted to Uppercase !!!","success")},children:"Convert to uppercase"}),Object(r.jsx)("button",{disabled:0===n.length,className:"btn btn-".concat("light"===e.mode?"secondary":"dark"," mr-1 mb-1"),onClick:function(){var t=n.toLowerCase();o(t),e.showAlert("Text converted to Lowercase !!!","success")},children:"Convert to lowercase"}),Object(r.jsx)("button",{disabled:0===n.length,className:"btn btn-".concat("light"===e.mode?"secondary":"dark"," mr-1 mb-1"),onClick:function(){o(""),b([]),e.showAlert("Text cleared from text box","success")},children:"Clear text"}),Object(r.jsx)("button",{disabled:0===n.length,className:"btn btn-".concat("light"===e.mode?"secondary":"dark"," mr-1 mb-1"),onClick:function(){b([]);var t=n.split(" ").filter((function(e){return e.includes("@")&&e.includes(".")}));console.log(t),b((function(e){return[].concat(Object(h.a)(e),[t])})),0===t.length?e.showAlert("No emails found","danger"):e.showAlert("Find the extracted emails below","success")},children:"Extract email from text"}),Object(r.jsx)("button",{disabled:0===n.length,className:"btn btn-".concat("light"===e.mode?"secondary":"dark"," mr-1 mb-1"),onClick:function(){navigator.clipboard.writeText(n),e.showAlert("Text copied to clipboard","success")},children:"Copy Text"}),Object(r.jsx)("button",{disabled:0===n.length,className:"btn btn-".concat("light"===e.mode?"secondary":"dark"," mr-1 mb-1"),onClick:function(){var t=n.split(/[ ]+/);o(t.join(" ")),e.showAlert("Extra spaces removed","success")},children:"Remove Extra Spaces"})]}),Object(r.jsxs)("div",{className:"container my-4",children:[Object(r.jsx)("h2",{children:"Your text summary"}),Object(r.jsxs)("p",{children:[n.split(" ").filter((function(e){return 0!==e.length})).length," words and ",0===n.length?0:n.length+1-n.split(" ").filter((function(e){return 0!==e.length})).length," characters"]}),Object(r.jsxs)("p",{children:[.008*n.split(" ").filter((function(e){return 0!==e.length})).length," Minutes to read"]}),Object(r.jsx)("h4",{children:"Preview"}),Object(r.jsx)("p",{children:n.length>0?n:"Enter some text in the text box to preview it here"}),Object(r.jsx)("h4",{children:"Emails Present in the text"}),Object(r.jsx)("p",{children:d.length>0?d.join(","):"No emails found"})]})]})}function u(e){return Object(r.jsx)("div",{className:"container my-2",style:{height:"50px"},children:e.alert&&Object(r.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(r.jsxs)("strong",{children:[function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)," : "]})," ",e.alert.msg]})})}var m=a(2);var x=function(){var e=Object(c.useState)("light"),t=Object(l.a)(e,2),a=t[0],n=t[1],o=Object(c.useState)(null),s=Object(l.a)(o,2),h=s[0],x=s[1],g=function(e,t){x({msg:e,type:t}),setTimeout((function(){x(null)}),3e3)};return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(d.a,{children:[Object(r.jsx)(b,{title:"TextUtils",aboutText:"About us",mode:a,toggleMode:function(){"light"===a?(n("dark"),document.body.style.backgroundColor="#343a40",document.body.style.color="white",g("Dark Mode has been enabled","success")):(n("light"),document.body.style.backgroundColor="white",document.body.style.color="black",g("Light Mode has been enabled","success"))}}),Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(u,{alert:h}),Object(r.jsxs)(m.c,{children:[Object(r.jsx)(m.a,{path:"/about",children:Object(r.jsx)(i,{mode:a})}),Object(r.jsx)(m.a,{path:"/",children:Object(r.jsx)(j,{heading:"Try TextUtils - Word counter, Character counter, Remove extra spaces, etc.",mode:a,showAlert:g})})]})]})]})})},g=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,34)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,o=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),o(e),s(e)}))};s.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(x,{})}),document.getElementById("root")),g()}},[[33,1,2]]]);
//# sourceMappingURL=main.54207a1f.chunk.js.map
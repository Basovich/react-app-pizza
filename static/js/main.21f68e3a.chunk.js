(this["webpackJsonpreact-app-pizza"]=this["webpackJsonpreact-app-pizza"]||[]).push([[0],{61:function(e,t,c){},62:function(e,t,c){"use strict";c.r(t);var s=c(0),i=c(1),n=c.n(i),a=c(14),l=c.n(a),j=c(12),r=c(8),d=c(2),o=c(32),b=c.n(o),h=c(6),x=c.n(h),O=function(e){var t=e.cart,c=e.children,i=e.onClickHandler;return Object(s.jsx)("button",{className:x()("button",{"button--cart":t}),onClick:i,children:c})},m=c.p+"static/media/pizza-logo.56ac8703.svg",u=function(){return Object(s.jsx)("div",{className:"header",children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)(j.b,{to:"/",children:Object(s.jsxs)("div",{className:"header__logo",children:[Object(s.jsx)("img",{width:"38",src:m,alt:"Pizza logo"}),Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:"React Pizza"}),Object(s.jsx)("p",{children:"\u0441\u0430\u043c\u0430\u044f \u0432\u043a\u0443\u0441\u043d\u0430\u044f \u043f\u0438\u0446\u0446\u0430 \u0432\u043e \u0432\u0441\u0435\u043b\u0435\u043d\u043d\u043e\u0439"})]})]})}),Object(s.jsx)("div",{className:"header__cart",children:Object(s.jsx)(j.b,{to:"/cart",children:Object(s.jsxs)(O,{cart:!0,children:[Object(s.jsx)("span",{children:"520 \u20bd"}),Object(s.jsx)("div",{className:"button__delimiter"}),Object(s.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(s.jsx)("path",{d:"M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),Object(s.jsx)("path",{d:"M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),Object(s.jsx)("path",{d:"M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]}),Object(s.jsx)("span",{children:"3"})]})})})]})})},p=c(9),C=n.a.memo((function(e){var t=e.items,c=n.a.useState(0),i=Object(p.a)(c,2),a=i[0],l=i[1],j=Object(r.b)(),d=n.a.useCallback((function(e){l(e),j({type:"SET_CATEGORY",payload:a})}),[a,j]);return Object(s.jsx)("div",{className:"categories",children:Object(s.jsx)("ul",{children:t.map((function(e,t){return Object(s.jsx)("li",{onClick:d.bind(null,t),className:x()("",{active:t===a}),children:e},e)}))})})})),v=n.a.memo((function(e){var t=e.items,c=n.a.useState(!1),i=Object(p.a)(c,2),a=i[0],l=i[1],j=n.a.useState(0),r=Object(p.a)(j,2),d=r[0],o=r[1],b=n.a.useRef(),h=t[d].name;function O(e){(e.path||e.composedPath&&e.composedPath()).includes(b.current)||l(!1)}return n.a.useEffect((function(){return document.body.addEventListener("click",O),function(){document.body.removeEventListener("click",O)}}),[]),Object(s.jsxs)("div",{ref:b,className:"sort",children:[Object(s.jsxs)("div",{className:"sort__label",children:[Object(s.jsx)("svg",{className:x()("",{"is-open":a}),width:"10",height:"6",viewBox:"0 0 10 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(s.jsx)("path",{d:"M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z",fill:"#2C2C2C"})}),Object(s.jsx)("b",{children:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430 \u043f\u043e:"}),Object(s.jsx)("span",{className:"sort__toggle",onClick:function(){l(!a)},children:h})]}),a&&Object(s.jsx)("div",{className:"sort__popup",children:Object(s.jsx)("ul",{children:t.map((function(e,t){return Object(s.jsx)("li",{onClick:function(){!function(e){o(e),l(!1)}(t)},className:x()("",{active:t===d}),children:e.name},e.type)}))})})]})})),w=function(e){var t=e.imageUrl,c=e.name,n=e.price,a=e.sizes,l=e.types,j=Object(i.useState)(l.active),r=Object(p.a)(j,2),d=r[0],o=r[1],b=Object(i.useState)(a.active),h=Object(p.a)(b,2),O=h[0],m=h[1];function u(e){o(e)}function C(e){m(e)}return Object(s.jsxs)("div",{className:"pizza-block",children:[Object(s.jsx)("img",{className:"pizza-block__image",src:t,alt:"Pizza"}),Object(s.jsx)("h4",{className:"pizza-block__title",children:c}),Object(s.jsxs)("div",{className:"pizza-block__selector",children:[Object(s.jsx)("ul",{children:l.names.map((function(e,t){return Object(s.jsx)("li",{onClick:u.bind(null,t),className:x()("",{active:t===d},{disabled:t===l.disabled}),children:e},t)}))}),Object(s.jsx)("ul",{children:a.names.map((function(e,t){return Object(s.jsx)("li",{onClick:C.bind(null,t),className:x()("",{active:t===O},{disabled:a.disabled.includes(t)}),children:e},t)}))})]}),Object(s.jsxs)("div",{className:"pizza-block__bottom",children:[Object(s.jsxs)("div",{className:"pizza-block__price",children:["\u043e\u0442 ",n," \u20bd"]}),Object(s.jsxs)("div",{className:"button button--outline button--add",children:[Object(s.jsx)("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(s.jsx)("path",{d:"M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z",fill:"white"})}),Object(s.jsx)("span",{children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"}),Object(s.jsx)("i",{children:"2"})]})]})]})},_=c(7),L=["\u0412\u0441\u0435","\u041c\u044f\u0441\u043d\u044b\u0435","\u0412\u0435\u0433\u0435\u0442\u0430\u0440\u0438\u0430\u043d\u0441\u043a\u0430\u044f","\u0413\u0440\u0438\u043b\u044c","\u041e\u0441\u0442\u0440\u044b\u0435","\u0417\u0430\u043a\u0440\u044b\u0442\u044b\u0435"],g=[{name:"\u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0441\u0442\u0438",type:"popular"},{name:"\u0446\u0435\u043d\u0435",type:"price"},{name:"\u0430\u043b\u0444\u0430\u0432\u0438\u0442\u0443",type:"alphabet"}],f=function(){var e=Object(r.c)((function(e){return{pizzas:e.pizzas.items}})).pizzas;return Object(s.jsxs)("div",{className:"container",children:[Object(s.jsxs)("div",{className:"content__top",children:[Object(s.jsx)(C,{items:L}),Object(s.jsx)(v,{items:g})]}),Object(s.jsx)("h2",{className:"content__title",children:"\u0412\u0441\u0435 \u043f\u0438\u0446\u0446\u044b"}),Object(s.jsx)("div",{className:"content__items",children:e.map((function(e){return Object(s.jsx)(w,Object(_.a)({},e),e.id)}))})]})},N=function(){return Object(s.jsx)("div",{className:"container container--cart",children:Object(s.jsxs)("div",{className:"cart",children:[Object(s.jsxs)("div",{className:"cart__top",children:[Object(s.jsxs)("h2",{className:"content__title",children:[Object(s.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(s.jsx)("path",{d:"M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z",stroke:"white","stroke-width":"1.8","stroke-linecap":"round","stroke-linejoin":"round"}),Object(s.jsx)("path",{d:"M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z",stroke:"white","stroke-width":"1.8","stroke-linecap":"round","stroke-linejoin":"round"}),Object(s.jsx)("path",{d:"M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669",stroke:"white","stroke-width":"1.8","stroke-linecap":"round","stroke-linejoin":"round"})]}),"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"]}),Object(s.jsxs)("div",{className:"cart__clear",children:[Object(s.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(s.jsx)("path",{d:"M2.5 5H4.16667H17.5",stroke:"#B6B6B6","stroke-width":"1.2","stroke-linecap":"round","stroke-linejoin":"round"}),Object(s.jsx)("path",{d:"M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z",stroke:"#B6B6B6","stroke-width":"1.2","stroke-linecap":"round","stroke-linejoin":"round"}),Object(s.jsx)("path",{d:"M8.33337 9.16667V14.1667",stroke:"#B6B6B6","stroke-width":"1.2","stroke-linecap":"round","stroke-linejoin":"round"}),Object(s.jsx)("path",{d:"M11.6666 9.16667V14.1667",stroke:"#B6B6B6","stroke-width":"1.2","stroke-linecap":"round","stroke-linejoin":"round"})]}),Object(s.jsx)("span",{children:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u043a\u043e\u0440\u0437\u0438\u043d\u0443"})]})]}),Object(s.jsxs)("div",{className:"content__items",children:[Object(s.jsxs)("div",{className:"cart__item",children:[Object(s.jsx)("div",{className:"cart__item-img",children:Object(s.jsx)("img",{className:"pizza-block__image",src:"https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg",alt:"Pizza"})}),Object(s.jsxs)("div",{className:"cart__item-info",children:[Object(s.jsx)("h3",{children:"\u0421\u044b\u0440\u043d\u044b\u0439 \u0446\u044b\u043f\u043b\u0435\u043d\u043e\u043a"}),Object(s.jsx)("p",{children:"\u0442\u043e\u043d\u043a\u043e\u0435 \u0442\u0435\u0441\u0442\u043e, 26 \u0441\u043c."})]}),Object(s.jsxs)("div",{className:"cart__item-count",children:[Object(s.jsx)("div",{className:"button button--outline button--circle cart__item-count-minus",children:Object(s.jsxs)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(s.jsx)("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),Object(s.jsx)("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"})]})}),Object(s.jsx)("b",{children:"2"}),Object(s.jsx)("div",{className:"button button--outline button--circle cart__item-count-plus",children:Object(s.jsxs)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(s.jsx)("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),Object(s.jsx)("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"})]})})]}),Object(s.jsx)("div",{className:"cart__item-price",children:Object(s.jsx)("b",{children:"770 \u20bd"})}),Object(s.jsx)("div",{className:"cart__item-remove",children:Object(s.jsx)("div",{className:"button button--outline button--circle",children:Object(s.jsxs)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(s.jsx)("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),Object(s.jsx)("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"})]})})})]}),Object(s.jsxs)("div",{className:"cart__item",children:[Object(s.jsx)("div",{className:"cart__item-img",children:Object(s.jsx)("img",{className:"pizza-block__image",src:"https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg",alt:"Pizza"})}),Object(s.jsxs)("div",{className:"cart__item-info",children:[Object(s.jsx)("h3",{children:"\u0421\u044b\u0440\u043d\u044b\u0439 \u0446\u044b\u043f\u043b\u0435\u043d\u043e\u043a"}),Object(s.jsx)("p",{children:"\u0442\u043e\u043d\u043a\u043e\u0435 \u0442\u0435\u0441\u0442\u043e, 26 \u0441\u043c."})]}),Object(s.jsxs)("div",{className:"cart__item-count",children:[Object(s.jsx)("div",{className:"button button--outline button--circle cart__item-count-minus",children:Object(s.jsxs)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(s.jsx)("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),Object(s.jsx)("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"})]})}),Object(s.jsx)("b",{children:"2"}),Object(s.jsx)("div",{className:"button button--outline button--circle cart__item-count-plus",children:Object(s.jsxs)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(s.jsx)("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),Object(s.jsx)("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"})]})})]}),Object(s.jsx)("div",{className:"cart__item-price",children:Object(s.jsx)("b",{children:"770 \u20bd"})}),Object(s.jsx)("div",{className:"cart__item-remove",children:Object(s.jsx)("div",{className:"button button--outline button--circle",children:Object(s.jsxs)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(s.jsx)("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),Object(s.jsx)("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"})]})})})]}),Object(s.jsxs)("div",{className:"cart__item",children:[Object(s.jsx)("div",{className:"cart__item-img",children:Object(s.jsx)("img",{className:"pizza-block__image",src:"https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg",alt:"Pizza"})}),Object(s.jsxs)("div",{className:"cart__item-info",children:[Object(s.jsx)("h3",{children:"\u0421\u044b\u0440\u043d\u044b\u0439 \u0446\u044b\u043f\u043b\u0435\u043d\u043e\u043a"}),Object(s.jsx)("p",{children:"\u0442\u043e\u043d\u043a\u043e\u0435 \u0442\u0435\u0441\u0442\u043e, 26 \u0441\u043c."})]}),Object(s.jsxs)("div",{className:"cart__item-count",children:[Object(s.jsx)("div",{className:"button button--outline button--circle cart__item-count-minus",children:Object(s.jsxs)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(s.jsx)("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),Object(s.jsx)("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"})]})}),Object(s.jsx)("b",{children:"2"}),Object(s.jsx)("div",{className:"button button--outline button--circle cart__item-count-plus",children:Object(s.jsxs)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(s.jsx)("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),Object(s.jsx)("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"})]})})]}),Object(s.jsx)("div",{className:"cart__item-price",children:Object(s.jsx)("b",{children:"770 \u20bd"})}),Object(s.jsx)("div",{className:"cart__item-remove",children:Object(s.jsx)("div",{className:"button button--outline button--circle",children:Object(s.jsxs)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(s.jsx)("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),Object(s.jsx)("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"})]})})})]}),Object(s.jsxs)("div",{className:"cart__item",children:[Object(s.jsx)("div",{className:"cart__item-img",children:Object(s.jsx)("img",{className:"pizza-block__image",src:"https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg",alt:"Pizza"})}),Object(s.jsxs)("div",{className:"cart__item-info",children:[Object(s.jsx)("h3",{children:"\u0421\u044b\u0440\u043d\u044b\u0439 \u0446\u044b\u043f\u043b\u0435\u043d\u043e\u043a"}),Object(s.jsx)("p",{children:"\u0442\u043e\u043d\u043a\u043e\u0435 \u0442\u0435\u0441\u0442\u043e, 26 \u0441\u043c."})]}),Object(s.jsxs)("div",{className:"cart__item-count",children:[Object(s.jsx)("div",{className:"button button--outline button--circle cart__item-count-minus",children:Object(s.jsxs)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(s.jsx)("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),Object(s.jsx)("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"})]})}),Object(s.jsx)("b",{children:"2"}),Object(s.jsx)("div",{className:"button button--outline button--circle cart__item-count-plus",children:Object(s.jsxs)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(s.jsx)("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),Object(s.jsx)("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"})]})})]}),Object(s.jsx)("div",{className:"cart__item-price",children:Object(s.jsx)("b",{children:"770 \u20bd"})}),Object(s.jsx)("div",{className:"cart__item-remove",children:Object(s.jsx)("div",{className:"button button--outline button--circle",children:Object(s.jsxs)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(s.jsx)("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),Object(s.jsx)("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"})]})})})]})]}),Object(s.jsxs)("div",{className:"cart__bottom",children:[Object(s.jsxs)("div",{className:"cart__bottom-details",children:[Object(s.jsxs)("span",{children:[" \u0412\u0441\u0435\u0433\u043e \u043f\u0438\u0446\u0446: ",Object(s.jsx)("b",{children:"3 \u0448\u0442."})," "]}),Object(s.jsxs)("span",{children:[" \u0421\u0443\u043c\u043c\u0430 \u0437\u0430\u043a\u0430\u0437\u0430: ",Object(s.jsx)("b",{children:"900 \u20bd"})," "]})]}),Object(s.jsxs)("div",{className:"cart__bottom-buttons",children:[Object(s.jsxs)("a",{href:"/",className:"button button--outline button--add go-back-btn",children:[Object(s.jsx)("svg",{width:"8",height:"14",viewBox:"0 0 8 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(s.jsx)("path",{d:"M7 13L1 6.93015L6.86175 1",stroke:"#D3D3D3","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})}),Object(s.jsx)("span",{children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"})]}),Object(s.jsx)("div",{className:"button pay-btn",children:Object(s.jsx)("span",{children:"\u041e\u043f\u043b\u0430\u0442\u0438\u0442\u044c \u0441\u0435\u0439\u0447\u0430\u0441"})})]})]})]})})};var k=function(){var e=Object(r.b)();return n.a.useEffect((function(){b.a.get("https://raw.githubusercontent.com/Basovich/react-app-pizza/gh-pages/db.json").then((function(t){if(200!==t.status)return"List empty";e({type:"SET_PIZZAS",payload:t.data.pizzas})}))}),[e]),Object(s.jsxs)("div",{className:"wrapper",children:[Object(s.jsx)(u,{}),Object(s.jsxs)("div",{className:"content",children:[Object(s.jsx)(d.a,{path:"/",exact:!0,children:Object(s.jsx)(f,{})}),Object(s.jsx)(d.a,{path:"/cart",exact:!0,children:Object(s.jsx)(N,{})})]})]})},z=c(11),E={sortBy:"popular",category:0},V={items:[],isLoaded:!1},B=Object(z.b)({filters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SORT_BY":return Object(_.a)(Object(_.a)({},e),{},{sortBy:t.payload});case"SET_CATEGORY":return Object(_.a)(Object(_.a)({},e),{},{category:t.payload});default:return e}},pizzas:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;return"SET_PIZZAS"===t.type?Object(_.a)(Object(_.a)({},e),{},{items:t.payload}):e}}),M=Object(z.c)(B,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());c(61);l.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(j.a,{children:Object(s.jsx)(r.a,{store:M,children:Object(s.jsx)(k,{})})})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.21f68e3a.chunk.js.map
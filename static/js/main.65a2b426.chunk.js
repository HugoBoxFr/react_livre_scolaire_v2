(this["webpackJsonptest-sirup"]=this["webpackJsonptest-sirup"]||[]).push([[0],{40:function(e,t,a){e.exports=a(60)},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},52:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(34),l=a.n(c),s=(a(45),a(6)),i=a(12),o=a(5),u=a(11),m=(a(46),a(47),[{id:264,name:"G\xe9ographie",url:"https://assets.lls.fr/subjects/geo.png"},{id:263,name:"Histoire",url:"https://assets.lls.fr/subjects/hist.png"},{id:262,name:"Fran\xe7ais",url:"https://assets.lls.fr/subjects/fra.png"},{id:261,name:"Histoire-G\xe9ographie",url:"https://assets.lls.fr/subjects/hist-geo.png"},{id:276,name:"Espagnol",url:"https://assets.lls.fr/subjects/esp.png"},{id:275,name:"Sciences \xe9conomiques et sociales",url:"https://assets.lls.fr/subjects/ses.png"},{id:274,name:"Philosophie",url:"https://assets.lls.fr/subjects/philo.png"},{id:273,name:"Physique-Chimie",url:"https://assets.lls.fr/subjects/physique.png"},{id:272,name:"Anglais",url:"https://assets.lls.fr/subjects/anglais.png"},{id:271,name:"Math\xe9matiques",url:"https://assets.lls.fr/subjects/maths.png"},{id:270,name:"Sciences de la vie et de la terre",url:"https://assets.lls.fr/subjects/svt.png"},{id:6066667,name:"Enseignement scientifique",url:"https://assets.lls.fr/subjects/es.png"}]);var d=Object(o.h)((function(){var e=Object(o.f)(),t=m;return r.a.createElement("nav",{className:"NavBar"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(i.b,{to:"/",title:"Accueil"},r.a.createElement("i",{className:"fas fa-bookmark"})," Le Livre Scolaire"))),r.a.createElement("div",null,r.a.createElement("select",{onChange:function(t){"Mati\xe8res"!==t.target.value&&e.push("/books/".concat(t.target.value))}},r.a.createElement("option",{value:"Mati\xe8res"},"Mati\xe8res"),t.map((function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.name)})))))}));a(52);var b=Object(o.h)((function(e){function t(t){e.onSub(t.target.value)}var a=m;return r.a.createElement("div",{className:"home"},r.a.createElement("header",{className:"home-header"},r.a.createElement("div",{className:"Section-container"},r.a.createElement("div",{className:"title"},r.a.createElement("i",{className:"fas fa-bookmark"}),r.a.createElement("h1",null,"Bienvenue sur Le Livre Scolaire")),r.a.createElement("div",{className:"home-content"},r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor mi et dui condimentum mollis. Duis varius, ante ut semper tempor, leo velit suscipit ligula, vel condimentum ipsum velit et magna. Aliquam erat volutpat. Integer enim nulla, tempor a pellentesque ac, convallis ut libero. Maecenas malesuada lacus orci, eu ornare purus faucibus id. Sed fringilla malesuada consectetur.")))),r.a.createElement("div",null,r.a.createElement("div",{className:"Section-container"},r.a.createElement("h3",null,"Choississez votre mati\xe8re ?"),r.a.createElement("ul",null,a.map((function(e){return r.a.createElement(i.b,{to:"/books/".concat(e.id),key:e.id},r.a.createElement("li",{key:e.id,value:e.id,onClick:t,style:{backgroundImage:"url(".concat(e.url,")")}},e.name))}))))))})),p=a(62),v=a(20),h=a(18);function f(){var e=Object(v.a)(["\n    query {\n        viewer {\n            subjects {\n                hits {\n                    id\n                    name\n                }\n            }\n        }\n    }"]);return f=function(){return e},e}function E(){var e=Object(v.a)(["\n    query ($id: [Int]) {\n        viewer {\n            lessons (chapterIds: $id) {\n                hits {\n                    id\n                    title\n                    page\n                    valid\n                    children {\n                        id\n                        type\n                        title\n                        order\n                        content\n                        url\n                        poster\n                        creditPoster\n                        index\n                        contentMd\n                        assets\n                    }\n                    chapter {\n                        id\n                        title\n                        book {\n                            id\n                            title\n                        }\n                    }\n                }\n            }\n        }\n    }"]);return E=function(){return e},e}function j(){var e=Object(v.a)(["\n    query ($id: [Int]) {\n        viewer {\n            lessons (chapterIds: $id) {\n                hits {\n                    id\n                    title\n                    page\n                    lessonType\n                    valid\n                    url\n                    chapter {\n                        id\n                        title\n                        book {\n                            id\n                            title\n                            chapters {\n                                id\n                                number\n                                valid\n                            }\n                        }\n                    }\n                }\n            }\n        }\n    }"]);return j=function(){return e},e}function g(){var e=Object(v.a)(["\n    query ($id: [Int]) {\n        viewer {\n            chapters (bookIds: $id) {\n                hits {\n                    title\n                    id\n                    valid\n                    url\n                    book {\n                        title\n                        id\n                    }\n                    number\n                }\n            }\n        }\n    }"]);return g=function(){return e},e}function I(){var e=Object(v.a)(["\n    query ($id: [Int]) {\n        viewer {\n            books (subjectIds: $id) {\n                hits {\n                    id\n                    displayTitle\n                    url\n                    subjects {\n                        id\n                        name\n                        url\n                    }\n                    levels {\n                        name\n                    }\n                }\n            }\n        }\n    }"]);return I=function(){return e},e}function k(){var e=Object(v.a)(["\n    query ($id: [Int]) {\n        viewer {\n            books (ids: $id) {\n                hits {\n                    id\n                    displayTitle\n                    url\n                    subjects {\n                        id\n                        name\n                    }\n                    levels {\n                        name\n                    }\n                }\n            }\n        }\n    }"]);return k=function(){return e},e}var O=new h.a({uri:"https://api-dev.lelivrescolaire.fr/graphql"}),N=(Object(h.b)(k()),Object(h.b)(I())),y=Object(h.b)(g()),S=Object(h.b)(j()),x=Object(h.b)(E());Object(h.b)(f()),a(55);var w=Object(o.h)((function(){var e=Object(o.g)(),t=Object(o.f)(),a=Object(n.useState)([]),c=Object(s.a)(a,2),l=c[0],u=c[1],m=Object(n.useState)(""),d=Object(s.a)(m,2),b=d[0],v=d[1],h=Object(p.a)(y,{variables:{id:"".concat(e.params.bookId)}}),f=h.data,E=h.error,j=h.loading;Object(n.useEffect)((function(){if(f){var e=f.viewer.chapters.hits;g(e)}}));var g=function(e){if(e){var t=e.sort((function(e,t){return e.number-t.number}));u(t),t[0]?v(t[0].book.title):v("")}};return j?r.a.createElement("div",null,"Chargement..."):E?r.a.createElement("div",null,"Erreur : ",E.toString()):r.a.createElement("div",{className:"chapter-main"},r.a.createElement("div",{className:"Section-container"},r.a.createElement("div",{className:"chapters-title"},r.a.createElement("h3",null,b),r.a.createElement("h4",null,"Chapitres")),r.a.createElement("div",{className:"chapters"},l.map((function(t){return r.a.createElement(i.b,{to:"/".concat(e.params.subjectId,"/").concat(e.params.bookId,"/chapter/").concat(t.id),key:t.id,style:{pointerEvents:t.valid?"":"none"}},r.a.createElement("div",{key:t.id,style:{backgroundImage:"url(".concat(t.url,")")},className:!1===t.valid?"chapter-false":"chapter-elt"},r.a.createElement("div",{className:"chapter-number"},r.a.createElement("p",null,t.number)),r.a.createElement("div",{className:!1===t.valid?"chapter-title-false":"chapter-title"},r.a.createElement("h5",null,t.title))))}))),r.a.createElement("div",{className:"chapter-nav"},r.a.createElement("button",{onClick:function(){var a="/books/".concat(e.params.subjectId,"/");t.push(a)},title:"Liste des livres"},r.a.createElement("i",{className:"fas fa-th"})))))}));a(56);var C=Object(o.h)((function(){var e=Object(o.g)(),t=Object(o.f)(),a=Object(n.useState)([]),c=Object(s.a)(a,2),l=c[0],u=c[1],m=Object(n.useState)(""),d=Object(s.a)(m,2),b=d[0],v=d[1],h=Object(n.useState)(""),f=Object(s.a)(h,2),E=f[0],j=f[1],g=Object(n.useState)(""),I=Object(s.a)(g,2),k=I[0],O=I[1],N=Object(p.a)(S,{variables:{id:"".concat([e.params.chapterId])}}),y=N.data,x=N.error,w=N.loading;Object(n.useEffect)((function(){if(y){var e=y.viewer.lessons.hits;C(e)}}));var C=function(e){v(e[0].chapter.book.chapters);var t=e.sort((function(e,t){return e.page-t.page}));u(t),j(t[0].chapter.book.title),O(t[0].chapter.title)};if(w)return r.a.createElement("div",null,"Chargement...");if(x)return r.a.createElement("div",null,"Erreur : ",x.toString());var q=function(e,t){return e.sort((function(e,t){return e.number-t.number})),e.map((function(e){return e.valid?t.push(e.id):""})),t};return r.a.createElement("div",{className:"index-main"},r.a.createElement("div",{className:"Section-container"},r.a.createElement("div",{className:"index-container"},r.a.createElement("div",{className:"index-title"},r.a.createElement("h3",null,E),r.a.createElement("h4",null,k)),r.a.createElement("hr",null),r.a.createElement("ul",null,l.map((function(t){return r.a.createElement("li",{key:t.id,className:!1===t.valid?"index-link-false":"index-link"},r.a.createElement(i.b,{to:"/".concat(e.params.subjectId,"/").concat(e.params.bookId,"/").concat(e.params.chapterId,"/lesson/").concat(t.id),style:{pointerEvents:t.valid?"":"none"}},r.a.createElement("div",{className:"index-info"},r.a.createElement("div",{className:"index-img"},t.url?r.a.createElement("img",{src:t.url,alt:"lesson.title"}):""),r.a.createElement("div",{className:"index-info-title"},r.a.createElement("h5",null,t.title),r.a.createElement("p",{style:{display:null!==t.lessonType?"block":"none"}},t.lessonType))),r.a.createElement("p",null,t.page)))})))),r.a.createElement("div",{className:"index-nav"},r.a.createElement("button",{onClick:function(){var a=[];q(b,a);var n=parseInt(e.params.chapterId),r=a.findIndex((function(e){return e===n}))-1;if(document.getElementById("next-chapter").removeAttribute("disabled"),r>=0){var c=a[r],l="/".concat(e.params.subjectId,"/").concat(e.params.bookId,"/chapter/").concat(c);if(t.push(l),0===r)document.getElementById("back-chapter").setAttribute("disabled","")}},id:"back-chapter",title:"Pr\xe9c\xe9dent"},r.a.createElement("i",{className:"fas fa-chevron-circle-left"})),r.a.createElement("button",{onClick:function(){var a="/".concat(e.params.subjectId,"/book/").concat(e.params.bookId);t.push(a)},title:"Chapitres"},r.a.createElement("i",{className:"fas fa-book"})),r.a.createElement("button",{onClick:function(){var a=[];q(b,a);var n=parseInt(e.params.chapterId),r=a.findIndex((function(e){return e===n}))+1;if(document.getElementById("back-chapter").removeAttribute("disabled"),r<a.length){var c=a[r],l="/".concat(e.params.subjectId,"/").concat(e.params.bookId,"/chapter/").concat(c);t.push(l)}r===a.length-1&&document.getElementById("next-chapter").setAttribute("disabled","")},id:"next-chapter",title:"Suivant"},r.a.createElement("i",{className:"fas fa-chevron-circle-right"})))))}));a(57);var q=Object(o.h)((function(){var e=Object(o.g)(),t=Object(o.f)(),a=Object(n.useState)([]),c=Object(s.a)(a,2),l=c[0],i=c[1],u=Object(n.useState)(""),m=Object(s.a)(u,2),d=m[0],b=m[1],v=Object(n.useState)(""),h=Object(s.a)(v,2),f=h[0],E=h[1],j=Object(n.useState)(""),g=Object(s.a)(j,2),I=g[0],k=g[1],O=Object(n.useState)(""),N=Object(s.a)(O,2),y=N[0],S=N[1],w=parseInt(e.params.lessonId),C=Object(p.a)(x,{variables:{id:"".concat([e.params.chapterId])}}),q=C.data,M=C.error,A=C.loading;Object(n.useEffect)((function(){if(q){var e=q.viewer.lessons.hits;B(e)}}));var B=function(e){var t=e.sort((function(e,t){return e.page-t.page}));b(t);var a=t.filter((function(e){return e.id===w})),n=a[0].children;n.map((function(e,t){return n[t]=e||{order:t,contentMd:null,content:null}})),n.map((function(e){return null===e.content?e.content="":e})),n.map((function(e){return null===e.contentMd?e.contentMd="":e}));var r=n.sort((function(e,t){return e.order-t.order}));i(r),E(t[0].chapter.book.title),k(t[0].chapter.title),S(a[0].title)};if(A)return r.a.createElement("div",null,"Chargement...");if(M)return r.a.createElement("div",null,"Erreur : ",M.toString());var $=function(e,t){return e.map((function(e){return e.valid?t.push(e.id):""})),t};return r.a.createElement("div",{className:"lesson-main"},r.a.createElement("div",{className:"Section-container"},r.a.createElement("div",{className:"lesson-content"},r.a.createElement("div",{className:"lesson-title"},r.a.createElement("h3",null,f),r.a.createElement("h4",null,I),r.a.createElement("h5",null,y)),r.a.createElement("hr",null),l.map((function(e,t){return e.content?r.a.createElement("div",{key:t,dangerouslySetInnerHTML:{__html:"".concat(e.content)}}):r.a.createElement("div",{key:t,dangerouslySetInnerHTML:{__html:"".concat(e.contentMd)}})}))),r.a.createElement("div",{className:"lesson-nav"},r.a.createElement("button",{onClick:function(){var a=[];$(d,a);var n=parseInt(e.params.lessonId),r=a.findIndex((function(e){return e===n}))-1;if(document.getElementById("next").removeAttribute("disabled"),r>=0){var c=a[r],l="/".concat(e.params.subjectId,"/").concat(e.params.bookId,"/").concat(e.params.chapterId,"/lesson/").concat(c);if(t.push(l),0===r)document.getElementById("back").setAttribute("disabled","")}},id:"back",title:"Pr\xe9c\xe9dent"},r.a.createElement("i",{className:"fas fa-chevron-circle-left"})),r.a.createElement("button",{onClick:function(){var a="/".concat(e.params.subjectId,"/book/").concat(e.params.bookId);t.push(a)},title:"Chapitres"},r.a.createElement("i",{className:"fas fa-book"})),r.a.createElement("button",{onClick:function(){var a="/".concat(e.params.subjectId,"/").concat(e.params.bookId,"/chapter/").concat(e.params.chapterId);t.push(a)},title:"Le\xe7ons"},r.a.createElement("i",{className:"fas fa-list-alt"})),r.a.createElement("button",{onClick:function(){var a=[];$(d,a);var n=parseInt(e.params.lessonId),r=a.findIndex((function(e){return e===n}))+1;if(document.getElementById("back").removeAttribute("disabled"),r<a.length){var c=a[r],l="/".concat(e.params.subjectId,"/").concat(e.params.bookId,"/").concat(e.params.chapterId,"/lesson/").concat(c);t.push(l)}r===a.length-1&&document.getElementById("next").setAttribute("disabled","")},id:"next",title:"Suivant"},r.a.createElement("i",{className:"fas fa-chevron-circle-right"})))))})),M=function(){return r.a.createElement("h2",null,"Page not found")};a(58);var A=Object(o.h)((function(){var e=Object(o.g)(),t=Object(n.useState)([]),a=Object(s.a)(t,2),c=a[0],l=a[1],u=Object(n.useState)(""),m=Object(s.a)(u,2),d=m[0],b=m[1],v=Object(p.a)(N,{variables:{id:e.params.subjectId}}),h=v.data,f=v.error,E=v.loading;return Object(n.useEffect)((function(){if(h){var e=h.viewer.books.hits;l(e),b(e[0].subjects[0].name)}}),[h]),E?r.a.createElement("div",null,"Chargement..."):f?r.a.createElement("div",null,"Erreur : ",f.toString()):r.a.createElement("div",{className:"books-main"},r.a.createElement("div",{className:"Section-container"},r.a.createElement("div",{className:"books-title"},r.a.createElement("h3",null,d)),r.a.createElement("div",{className:"books"},c.map((function(t){return null!==t.displayTitle&&null!==t.url?r.a.createElement("div",{key:t.id,className:"book"},r.a.createElement("div",null,r.a.createElement(i.b,{to:"/".concat(e.params.subjectId,"/book/").concat(t.id)},r.a.createElement("div",{className:"title"},r.a.createElement("h3",null,t.displayTitle)),r.a.createElement("div",{className:"cover"},null!=t.url?r.a.createElement("img",{src:t.url,alt:t.title}):r.a.createElement("p",null,"Image indisponible"))))):""})))))}));a(59);var B=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("h2",null,"Hugo Prea - 2020"))};var $=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1];return r.a.createElement(u.a,{client:O},r.a.createElement("div",{className:"App"},r.a.createElement(i.a,null,r.a.createElement(d,null),r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/"},r.a.createElement(b,{onSub:function(e){c(e)}})),r.a.createElement(o.a,{path:"/books/:subjectId"},r.a.createElement(A,{subId:a})),r.a.createElement(o.a,{path:"/:subjectId/book/:bookId",component:w}),r.a.createElement(o.a,{path:"/:subjectId/:bookId/chapter/:chapterId",component:C}),r.a.createElement(o.a,{path:"/:subjectId/:bookId/:chapterId/lesson/:lessonId",component:q}),r.a.createElement(o.a,{component:M})))),r.a.createElement(B,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.65a2b426.chunk.js.map
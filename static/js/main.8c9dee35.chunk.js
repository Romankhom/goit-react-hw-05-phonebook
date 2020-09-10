(this["webpackJsonpgoit-react-hw-05-phonebook"]=this["webpackJsonpgoit-react-hw-05-phonebook"]||[]).push([[0],{1:function(t,e,n){t.exports={contactsWrapper:"ContactForm_contactsWrapper__3Dywe",contactForm:"ContactForm_contactForm__10lSj",contactInput:"ContactForm_contactInput__1ZRKB",addButton:"ContactForm_addButton__3vPye"}},12:function(t,e,n){t.exports={enter:"pop_enter__1TDJc",enterActive:"pop_enterActive__2mSgW",exit:"pop_exit__glCb4",exitActive:"pop_exitActive__1Ykd4"}},17:function(t,e,n){t.exports={filterForm:"Filter_filterForm__2mV0G",filterContact:"Filter_filterContact__S1xNr"}},18:function(t,e,n){t.exports={notificationContainer:"Notification_notificationContainer__6q76D",notificationMessage:"Notification_notificationMessage__2QirK"}},22:function(t,e,n){t.exports={enter:"slide_enter__2blUf",enterActive:"slide_enterActive__5i5-l"}},23:function(t,e,n){t.exports={enter:"slideError_enter__11ZfO",enterActive:"slideError_enterActive__2Q53C",exit:"slideError_exit__3Qznp",exitActive:"slideError_exitActive__28yxt"}},26:function(t,e,n){t.exports=n(42)},42:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),o=n(6),i=n.n(o),r=n(24),s=n(7),l=n(9),u=n(10),m=n(14),d=n(11),p=n(15),_=n(43),f=function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Phonebook"))},h=n(8),v=n(21),E=n.n(v),b=n(1),C=n.n(b),g=function(t){function e(){var t,n;Object(l.a)(this,e);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(m.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(c)))).state={name:"",number:""},n.handleInput=function(t){n.setState(Object(h.a)({},t.target.name,t.target.value))},n.handleSubmit=function(t){t.preventDefault(),n.props.onAddContact(Object(s.a)({},n.state)),n.setState({name:"",number:""})},n}return Object(p.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return c.a.createElement("form",{className:C.a.contactForm,onSubmit:this.handleSubmit},c.a.createElement("label",null,"Name"),c.a.createElement("input",{type:"text",className:C.a.contactInput,name:"name",value:e,onChange:this.handleInput,required:!0}),c.a.createElement("label",null,"Phone number"),c.a.createElement(E.a,{mask:"999-99-99",type:"tel",className:C.a.contactInput,name:"number",value:n,onChange:this.handleInput,placeholder:"only numbers",required:!0}),c.a.createElement("input",{type:"submit",className:C.a.addButton,value:"Add contact"}))}}]),e}(a.PureComponent),x=n(44),N=n(5),F=n.n(N),y=n(12),O=n.n(y),S=function(t){var e=t.contacts,n=t.onDeleteContact;return c.a.createElement(x.a,{component:"ul",className:F.a.listContacts},e.map((function(t){var e=t.id,a=t.name,o=t.number;return c.a.createElement(_.a,{key:e,timeout:250,unmountOnExit:!0,classNames:O.a},c.a.createElement("li",{key:e,className:F.a.contacts},c.a.createElement("span",{className:F.a.nameField},a),c.a.createElement("span",{className:F.a.phoneField},o),c.a.createElement("button",{type:"button",className:F.a.deleteBtn,value:e,onClick:n},"X")))})))},A=n(17),j=n.n(A),k=function(t){var e=t.contacts,n=t.value,a=t.onChangeFilter;return e.length>2&&c.a.createElement(_.a,{in:!0,timeout:250,unmountOnExit:!0,classNames:O.a},c.a.createElement("form",{className:j.a.filterForm},c.a.createElement("label",null,"Find contact by name"),c.a.createElement("input",{type:"text",className:j.a.filterContact,value:n,onChange:a})))},I=n(18),L=n.n(I),w=function(){return c.a.createElement("div",{className:L.a.notificationContainer},c.a.createElement("p",{className:L.a.notificationMessage},"This contact already exists!"))},B=n(22),D=n.n(B),J=n(23),M=n.n(J),T=function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))},q=n(34),P=function(t){function e(){var t,n;Object(l.a)(this,e);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(m.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(c)))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:"",isLoading:!1,isExist:!1},n.changeFilter=function(t){n.setState({filter:t.target.value})},n.addContact=function(t){var e=t.name;if(n.state.contacts.some((function(t){return t.name===e})))n.setState({isExist:!0}),setTimeout((function(){n.setState({isExist:!1})}),2e3);else{var a=Object(s.a)({},t,{id:q()});n.setState((function(t){return{contacts:[].concat(Object(r.a)(t.contacts),[a])}}))}},n.deleteContact=function(t){var e=t.target.value;n.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},n}return Object(p.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){var t=this,e=localStorage.getItem("contacts");setTimeout((function(){t.setState({isLoading:!0})}),0),e&&this.setState({contacts:JSON.parse(e)})}},{key:"componentDidUpdate",value:function(t,e){var n=this.state.contacts;e.contacts!==n&&localStorage.setItem("contacts",JSON.stringify(n))}},{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,a=t.isLoading,o=t.isExist,i=T(e,n);return c.a.createElement("div",{className:C.a.contactsWrapper},c.a.createElement(_.a,{in:a,timeout:500,classNames:D.a,unmountOnExit:!0},c.a.createElement(f,null)),c.a.createElement(_.a,{in:o,timeout:250,classNames:M.a,unmountOnExit:!0},c.a.createElement(w,null)),c.a.createElement(g,{onAddContact:this.addContact}),c.a.createElement("h2",null,"Contacts"),c.a.createElement(k,{contacts:e,value:n,onChangeFilter:this.changeFilter}),c.a.createElement(S,{id:e.id,contacts:i,onDeleteContact:this.deleteContact}))}}]),e}(a.Component);i.a.render(c.a.createElement(P,null),document.getElementById("root"))},5:function(t,e,n){t.exports={listContacts:"ContactList_listContacts__1GV04",contacts:"ContactList_contacts__5eBFN",nameField:"ContactList_nameField__3fYdM",phoneField:"ContactList_phoneField__2y5NT",deleteBtn:"ContactList_deleteBtn__369Fq"}}},[[26,1,2]]]);
//# sourceMappingURL=main.8c9dee35.chunk.js.map
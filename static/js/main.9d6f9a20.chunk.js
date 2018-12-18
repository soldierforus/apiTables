(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(18)},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(7),c=a.n(r),u=a(9),m=a(1),o=a(2),i=a(4),s=a(3),h=a(5),E=function(e){function t(){return Object(m.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Role"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Homer"),l.a.createElement("td",null,"Dad")),l.a.createElement("tr",null,l.a.createElement("td",null,"Marge"),l.a.createElement("td",null,"Mom")),l.a.createElement("tr",null,l.a.createElement("td",null,"Bart"),l.a.createElement("td",null,"Brother")),l.a.createElement("tr",null,l.a.createElement("td",null,"Lisa"),l.a.createElement("td",null,"Sister"))))}}]),t}(n.Component),b=function(){return l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Role")))},d=function(e){var t=e.characterData.map(function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.role))});return l.a.createElement("tbody",null,t)},p=function(e){function t(){return Object(m.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.characterData;return l.a.createElement("table",null,l.a.createElement(b,null),l.a.createElement(d,{characterData:e}))}}]),t}(n.Component),f=function(){return l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Turtle"),l.a.createElement("th",null,"Power"),l.a.createElement("th",null,"Remove")))},j=function(e){var t=e.turtleData.map(function(t,a){return l.a.createElement("tr",{key:a},l.a.createElement("td",null,t.name),l.a.createElement("td",null,t.role),l.a.createElement("td",null,l.a.createElement("button",{onClick:function(){return e.removeTurtle(a)}},"Delete")))});return l.a.createElement("tbody",null,t)},v=function(e){function t(){return Object(m.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.turtleData,a=e.removeTurtle;return l.a.createElement("table",null,l.a.createElement(f,null),l.a.createElement(j,{turtleData:t,removeTurtle:a}))}}]),t}(n.Component),O=a(8),y=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(i.a)(this,Object(s.a)(t).call(this,e))).handleChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(O.a)({},n,l))},a.submitForm=function(){a.props.handleSubmit(a.state),a.setState(a.initialState)},a.initialState={name:"",role:""},a.state=a.initialState,a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.role;return l.a.createElement("form",null,l.a.createElement("label",null,"Name"),l.a.createElement("input",{type:"text",name:"name",value:t,onChange:this.handleChange}),l.a.createElement("label",null,"Role"),l.a.createElement("input",{type:"text",name:"role",value:a,onChange:this.handleChange}),l.a.createElement("input",{type:"button",value:"Submit",onClick:this.submitForm}))}}]),t}(n.Component),k=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={data:[]},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://en.wikipedia.org/w/api.php?action=opensearch&search=Carl+Sagan&format=json&origin=*").then(function(e){return e.json()}).then(function(t){e.setState({data:t})})}},{key:"render",value:function(){var e=this.state.data.map(function(e,t){return l.a.createElement("li",{key:t},e)});return l.a.createElement("ul",null,e)}}]),t}(n.Component),C=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).handleSubmit=function(e){a.setState({turtles:[].concat(Object(u.a)(a.state.turtles),[e])})},a.state={turtles:[]},a.removeTurtle=function(e){var t=a.state.turtles;a.setState({turtles:t.filter(function(t,a){return a!==e})})},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"Carl Sagan search - Wiki API"),l.a.createElement(k,null),l.a.createElement("br",null),l.a.createElement("h1",null,"Table example"),l.a.createElement("h4",null,"Add a Ninja Turtle"),l.a.createElement(v,{turtleData:this.state.turtles,removeTurtle:this.removeTurtle}),l.a.createElement(y,{handleSubmit:this.handleSubmit}),l.a.createElement("br",null),l.a.createElement(p,{characterData:[{name:"Charlie",role:"Janitor"},{name:"Mac",role:"Bouncer"},{name:"Dee",role:"Aspiring actress"},{name:"Dennis",role:"Bartender"}]}),l.a.createElement("br",null),l.a.createElement(E,null))}}]),t}(n.Component);a(16);c.a.render(l.a.createElement(C,null),document.getElementById("root"))}},[[10,2,1]]]);
//# sourceMappingURL=main.9d6f9a20.chunk.js.map
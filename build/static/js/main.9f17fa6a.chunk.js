(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{11:function(t,e,n){t.exports=n(17)},16:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),c=n(9),l=n.n(c),s=n(7),r=n(1),i=n(2),u=n(5),h=n(3),d=n(4),p=function(t){function e(){return Object(r.a)(this,e),Object(u.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){var t=this,e=this.props.todo;return o.a.createElement("ul",null,e.map((function(e,n){return o.a.createElement("li",{key:n},e,"---",o.a.createElement("button",{onClick:function(){return t.props.del(n)}},"\u5220\u9664"))})))}}]),e}(a.Component);p.defaultProps={todo:[1,2,3,4,4,6]};var m=n(10),b=n(6),f=function(t){function e(){var t;return Object(r.a)(this,e),(t=Object(u.a)(this,Object(h.a)(e).call(this))).handleInput=function(e){13===e.keyCode&&t.props.add(e.target.value)},t.handleChange=function(e){t.setState(Object(m.a)({},e.target.name,parseInt(""===e.target.value?0:e.target.value)))},t.handleInput=t.handleInput.bind(Object(b.a)(t)),t.state={a:"",b:"",c:""},t}return Object(d.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){console.log(this.refs.a),this.refs.a.focus()}},{key:"render",value:function(){var t=this;return o.a.createElement("div",null,o.a.createElement("input",{ref:"a",name:"a",onChange:this.handleChange,value:this.state.a,onKeyDown:this.handleInput,text:"text"}),"+",o.a.createElement("input",{name:"b",onChange:this.handleChange,value:this.state.b,onKeyDown:this.handleInput,text:"text"}),"+",o.a.createElement("input",{name:"c",onChange:this.handleChange,value:this.state.c,onKeyDown:this.handleInput,text:"text"}),"=",o.a.createElement("p",null,this.state.a+this.state.b+this.state.c),o.a.createElement("input",{ref:function(e){t.inp=e},type:"text"}),o.a.createElement("button",{onClick:function(){console.log(t.inp.value)}},"\u63d0\u4ea4"))}}]),e}(a.Component),g=function(t){function e(){var t;Object(r.a)(this,e),(t=Object(u.a)(this,Object(h.a)(e).call(this))).addItem=function(e){console.log(t.state.todo),t.setState({todo:[].concat(Object(s.a)(t.state.todo),[e])})},t.delItem=function(e,n){console.log(n),console.log(e);var a=Object(s.a)(t.state.todo);a.splice(e,1),t.setState((function(t,e){return console.log(t.todo),{todo:a}}))},t.state={todo:[1,2,3]};var n={a:100,b:[1,2,3]},a=Object.assign(n,{c:300});return console.log(a),console.log(a===n),console.log(Object.keys(n)),Object.keys(n).forEach((function(t){console.log(t),console.log(n[t])})),t}return Object(d.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(f,{add:this.addItem}),o.a.createElement(p,{del:this.delItem,todo:this.state.todo}))}}]),e}(a.Component);n(16);l.a.render(o.a.createElement(g,null),document.getElementById("root"));document.getElementById("root").className="active"}},[[11,1,2]]]);
//# sourceMappingURL=main.9f17fa6a.chunk.js.map
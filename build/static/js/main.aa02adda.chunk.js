(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{24:function(t,e,n){t.exports=n(35)},34:function(t,e,n){},35:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),l=n(21),o=n.n(l),r=n(2),i=n(3),u=n(5),s=n(4),m=n(6),p=n(7);function f(){return c.a.createElement("div",{className:"header"},c.a.createElement("header",null,c.a.createElement("img",{src:"//static2.cnodejs.org/public/images/cnodejs_light.svg"}),c.a.createElement("div",{style:{float:"right"}},c.a.createElement(p.b,{to:"/home"},"\u9996\u9875"),c.a.createElement(p.b,{to:"/start"},"\u65b0\u624b\u5165\u95e8"),c.a.createElement(p.b,{to:"/api"},"API"),c.a.createElement(p.b,{to:"/about"},"\u5173\u4e8e"),c.a.createElement(p.b,null,"\u6ce8\u518c"),c.a.createElement(p.b,null,"\u767b\u5f55"))))}var d=n(11),b=function(t){function e(){return Object(r.a)(this,e),Object(u.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){var t=this.props.match.url;return console.log(this.props),c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement(p.b,{to:"".concat(t,"/all")},"\u5168\u90e8"),c.a.createElement(p.b,{to:"".concat(t,"/jinghua")},"\u7cbe\u534e"),c.a.createElement(p.b,{to:"".concat(t,"/share")},"\u5206\u4eab")),c.a.createElement("div",null))}}]),e}(a.Component),h=function(t){function e(){return Object(r.a)(this,e),Object(u.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return c.a.createElement("div",null,"Api")}}]),e}(a.Component),O=function(t){function e(){return Object(r.a)(this,e),Object(u.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return c.a.createElement("div",null,"About")}}]),e}(a.Component),j=function(t){function e(){return Object(r.a)(this,e),Object(u.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return c.a.createElement("div",null,"Start")}}]),e}(a.Component),v=(a.Component,n(14)),E=function(t){function e(){var t,n;Object(r.a)(this,e);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return(n=Object(u.a)(this,(t=Object(s.a)(e)).call.apply(t,[this].concat(c)))).complete=function(t){n.props.complete(t)},n.delItem2=function(t){n.props.delItem2(t)},n.uncomplete=function(t){n.props.uncomplete(t)},n}return Object(m.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){var t=this,e=this.props,n=e.todo,a=e.flist;return c.a.createElement("fragment",null,c.a.createElement("ul",null,n.map((function(e,n){return c.a.createElement("div",{key:n},c.a.createElement("button",{onClick:function(e){return t.complete(n)}},"\u5b8c\u6210"),"--",e,"--",c.a.createElement("button",{onClick:function(e){return t.props.del(n)}},"\u5220\u9664"))}))),c.a.createElement("span",null,n.length),c.a.createElement("ul",null,a.map((function(e,n){return c.a.createElement("div",{key:n},c.a.createElement("button",{onClick:function(){t.props.uncomplete(n)}},"\u672a\u5b8c\u6210"),"--",e,"--",c.a.createElement("button",{onClick:function(e){return t.props.delItem2(n)}},"\u5220\u9664"))}))),c.a.createElement("span",null,a.length))}}]),e}(a.Component),g=n(15),y=function(t){function e(){var t;return Object(r.a)(this,e),(t=Object(u.a)(this,Object(s.a)(e).call(this))).handleInput=function(e){13===e.keyCode&&t.props.add(e.target.value)},t.handleInput=t.handleInput.bind(Object(g.a)(t)),t}return Object(m.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){var t=this;return c.a.createElement("div",null,c.a.createElement("input",{onKeyDown:function(e){t.handleInput(e)},type:"text",placeholder:"\u6dfb\u52a0todo"}))}}]),e}(a.Component),I=function(t){function e(){var t;return Object(r.a)(this,e),(t=Object(u.a)(this,Object(s.a)(e).call(this))).addItem=function(e){t.setState({todo:[].concat(Object(v.a)(t.state.todo),[e])},(function(){localStorage.setItem("flase1",JSON.stringify(t.state.todo))}))},t.delItem=function(e){var n=Object(v.a)(t.state.todo);n.splice(e,1),t.setState({todo:n},(function(){localStorage.setItem("flase1",JSON.stringify(t.state.todo))}))},t.complete=function(e){var n=t.state.todo[e];t.state.flist.push(n),localStorage.setItem("true1",JSON.stringify(t.state.flist)),t.delItem(e)},t.delItem2=function(e){var n=Object(v.a)(t.state.flist);n.splice(e,1),t.setState({flist:n},(function(){localStorage.setItem("true1",JSON.stringify(t.state.flist))}))},t.uncomplete=function(e){var n=t.state.flist[e];t.state.todo.push(n),localStorage.setItem("flase1",JSON.stringify(t.state.todo));var a=Object(v.a)(t.state.flist);a.splice(e,1),t.setState({flist:a},(function(){localStorage.setItem("true1",JSON.stringify(t.state.flist))}))},t.state={todo:[],flist:[]},t}return Object(m.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("flase1")),e=JSON.parse(localStorage.getItem("true1"));t&&this.setState((function(){return{todo:t}})),e&&this.setState((function(){return{flist:e}}))}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(y,{add:this.addItem}),c.a.createElement(E,{del:this.delItem,todo:this.state.todo,flist:this.state.flist,complete:this.complete,delItem2:this.delItem2,uncomplete:this.uncomplete}))}}]),e}(a.Component);n(34);o.a.render(c.a.createElement(I,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.aa02adda.chunk.js.map
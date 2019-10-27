import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import Todolist from './Todo/Todolist';
//除了js文件，其他文件都要加 后缀名
import './index.css';
//容器组件 / UI组件（展示组件）
//又叫智能组件 / 木偶组件
//容器组件（container/pages)：逻辑，功能
//UI组件(components)：展示，返回React元素

ReactDOM.render(<Todolist/>,document.getElementById('root'))
// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// )
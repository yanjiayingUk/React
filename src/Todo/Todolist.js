import React, { Component } from 'react'
import Todoing from './Todoing'
import Todoinput from './Todoinput'


export default class Todolist extends Component {
    constructor() {
        super();
        this.state = {
            todo: [],
            flist: []
        }
    }
    addItem = (data) => {
        this.setState({
            todo: [...this.state.todo, data]
        }, () => {
            localStorage.setItem("flase1",JSON.stringify(this.state.todo))
        }
        )
    }
    delItem = (idx) => {
        let todo = [...this.state.todo];
        todo.splice(idx, 1);
        this.setState({
            todo: todo
        }, () => {
            localStorage.setItem("flase1",JSON.stringify(this.state.todo))
        })
    }
    complete= (idx) => {
        let data1 = this.state.todo[idx];
        this.state.flist.push(data1);
        localStorage.setItem("true1",JSON.stringify(this.state.flist));
        this.delItem(idx);

    }
    delItem2 = (idx) => {
        let flist = [...this.state.flist];
        flist.splice(idx, 1);
        this.setState({
            flist: flist
        }, () => {
            localStorage.setItem("true1",JSON.stringify(this.state.flist))
        })
    }
    uncomplete = (idx) => {
        let data2 = this.state.flist[idx];
        this.state.todo.push(data2);
        localStorage.setItem("flase1",JSON.stringify(this.state.todo))
        let flist = [...this.state.flist];
        flist.splice(idx, 1);
        this.setState({
            flist: flist
        }, () => {
            localStorage.setItem("true1",JSON.stringify(this.state.flist))
        })
    }
    componentDidMount() {
        var flase1=JSON.parse(localStorage.getItem("flase1"));
        var true1=JSON.parse(localStorage.getItem("true1"));

        if (flase1) {
            this.setState(() => {
                return {
                    todo: flase1
                }
            })
        }

        if (true1) {
            this.setState(() => {
                return {
                    flist: true1
                }
            })
        }

    }
    render() {
        return (
            <div>
                <Todoinput add={this.addItem} />
                <Todoing del={this.delItem} todo={this.state.todo} flist={this.state.flist} complete={this.complete}
                    delItem2={this.delItem2} uncomplete={this.uncomplete} />
            </div>
        )
    }
}
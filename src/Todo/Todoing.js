import React, { Component } from 'react';

export default class Todoing extends Component {
    complete = (idx) => {
        this.props.complete(idx);
    }
    delItem2 = (idx) => {
        this.props.delItem2(idx);
    }
    uncomplete = (idx) => {
        this.props.uncomplete(idx);
    }
    render() {
        var { todo, flist } = this.props;
        return (
            <fragment>
                <ul>
                    {
                        todo.map((item, idx) =>
                            <div key={idx}>
                                <button onClick={(e) => this.complete(idx)}>完成</button>
                                --{item}--
                                <button onClick={(e) => this.props.del(idx)}>删除</button>
                            </div>
                        )
                    }
                </ul>
                <span>{todo.length}</span>
                <ul>
                    {
                        flist.map((item, idx) =>
                            <div key={idx}>
                                <button onClick={()=>{this.props.uncomplete(idx)}}>未完成</button>
                                --{item}--
                                <button onClick={(e) => this.props.delItem2(idx)}>删除</button>
                            </div>
                        )
                    }
                </ul>
                <span>{flist.length}</span>
            </fragment>
        )
    }
}

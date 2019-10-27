import React,{ Component } from 'react'


export default class Todoinput extends Component{
    constructor(){
        super();
        this.handleInput=this.handleInput.bind(this);
    }
    handleInput=(e)=>{
        if(e.keyCode ===13){
            this.props.add(e.target.value);
        }
    }
    render(){
        return (
            <div >
                <input onKeyDown={(e)=>{this.handleInput(e)}} type="text" placeholder="添加todo"/>
            </div>
        )
    }
}




// 打包 npm run build  新建仓库，传build文件夹
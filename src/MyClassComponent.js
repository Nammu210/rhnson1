import React , {Component} from "react";



class MyClassComponent extends React.Component{

    render(){
        return(
        <div className="SecBigBox"> 
        <h1>This is created using Class Component</h1>
        <p className="mid">This is Done using External CSS</p>
        <p className="lc , mid">This is Done using Inline CSS</p>
    </div>
        )
        
    }

    
}
export default MyClassComponent;
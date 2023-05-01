import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import MyFuncComponent from './MyFuncComponent';
import MyClassComponent from './MyClassComponent';
import "./Components/Mystyle.css";




export class App extends Component{

  constructor(props){
    super(props);
    this.state ={
      showFuncComponent:true,
      showClassComponent:true,

    };
  }

  toggleFunComp = () => {
    this.setState((prevState) =>({
      showFuncComponent : !prevState.showFuncComponent,

    }));

  }

 toggleClassComp = () => {
    this.setState((prevState) =>({
      showClassComponent : !prevState.showClassComponent,

    }));
    
  }


render() {
  return (
<div className='APP'> 

  
  <h1 className='hell'>Styling using Functional and Class Component</h1>
  <div className="TBox"> 
    <button onClick={this.toggleFunComp} className="FBox">To see styling in Functional Component</button>
    <button onClick={this.toggleClassComp} className="SBox">To see styling in Class Component</button>
  </div>

<div className="TBigBox">
  {this.state.showFuncComponent && <MyFuncComponent/>}
  {this.state.showClassComponent && <MyClassComponent/>}

</div>

</div>
   
  )
}
}
export default App;

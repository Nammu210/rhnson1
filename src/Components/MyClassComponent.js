import React from 'react'
import './Mystyle.css'


class MyClassComponent extends React.Component{

    render(){

        return(
            <div>
                <h1>This is created using Class Component</h1>
                <p>This is Done using External CSS</p>
                <p className="lc">This is Done using Inline CSS</p>
            </div>
        )
    }

    
}
export default MyClassComponent;
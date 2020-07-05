import React, { Component } from 'react'



class IFrame extends Component {
    
    render() {
        return (
        <div> 
           <iframe className="webFrame" 
                  src= {this.props.url}
                  frameBorder="0"
                  id="iFrame">
            </iframe>
        </div>
        )
    }
}


 

export default IFrame

import React from 'react';



function withToolTip(Component) {
    return class withToolTip extends React.Component{
       state ={showToolTip :false}
       mouseOver =()=>{
           this.setState({showToolTip:true})
       }

       mouseOut=()=>{
           this.setState({showToolTip:false})
       }
        render(){
            return(
            <div onMouseOver={this.mouseOver}onMouseOut={this.mouseOut}>
            <Component showToolTip={this.state.showToolTip}/>
            </div>
            )
        }
    }
}

export default withToolTip;
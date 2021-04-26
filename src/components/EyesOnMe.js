// Code EyesOnMe Component Here

import React from "react";

class EyesOnMe extends React.Component {

    onFocusEventHandler = () => console.log('Good!')

    onBlurEventHandler = () => console.log('Hey! Eyes on me!')

    render(){
        return(
            <div>
                <button onFocus={this.onFocusEventHandler} onBlur={this.onBlurEventHandler}>
                    Eyes on me!
                </button>
            </div>
        )
    }
}

export default EyesOnMe;
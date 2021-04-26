// Code Keypad Component Here

import React from "react";

class Keypad extends React.Component {

    keyPadHandler = (event) => {
        console.log("Entering password...")
    }

    render(){
        return(
            <div>
            <input 
            type="password" 
            onKeyUp={this.keyPadHandler}
            />
        </div>
        )
    }
}

export default Keypad;
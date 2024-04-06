import React from "react";
import Lockscreen from "./Lockscreen";

class Display extends React.Component{
    render(){
        return(
            <>
            <Navbar />
            <Lockscreen/>
            </>
        )
    }
}
export default Display;
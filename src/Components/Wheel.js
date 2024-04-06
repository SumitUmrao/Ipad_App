import React from "react";
import "../css/wheel.css"
import { AiOutlineFastForward } from "react-icons/ai";
import { AiOutlineFastBackward } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";

class Wheel extends React.Component{

    render(){
        return(

            <div className="wheelcontainer" id="wheelcontainer">
                <div className="wheel" id="wheel">
                    <div className="controll" id="menu">
                        <div>MENU</div>
                    </div>
                    <div className="controll" id="forword"><AiOutlineFastForward /></div>
                    <div className="controll" id="backword"><AiOutlineFastBackward /></div>
                    <div className="controll" id="pause">
                    <FaPlay />
                    <FaPause />
                    </div>
                </div>
                <div className="blank" id="blank"></div>
            </div>
        )
    }
}

export default Wheel;
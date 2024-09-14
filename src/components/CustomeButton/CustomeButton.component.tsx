import React from "react";
import Classes from "./customeButton.module.scss";
import { buttonData } from "../../common/Interface";

 
function CustomeButton (props:buttonData) {
    return (
        <React.Fragment>
        <button onClick={props.handleSubmit} className={Classes.btn}>{props.placeholder}</button>
        </React.Fragment>
    );
}

export default CustomeButton;
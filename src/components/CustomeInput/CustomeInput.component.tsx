import React from "react";
import { inputFields } from "../../common/Interface";
import CLasses from "./CustomInput.module.scss";


function CustomeInput({ id, type, placeholder, label }: inputFields) {
    return (
        <>
            <div className={CLasses.fieldsWrapper}>
                <label htmlFor={id}>{label}</label>
                <input type={type} id={id} placeholder={placeholder} />
            </div>
        </>
    );
}


export default CustomeInput;
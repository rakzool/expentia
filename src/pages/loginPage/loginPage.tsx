import React from "react";
import CustomeInput from "../../components/CustomeInput/CustomeInput.component";
import Classes from "./loginpage.module.scss";
import { inputFields,buttonData } from "../../common/Interface";
import CustomeButton from "../../components/CustomeButton/CustomeButton.component";

 

const LoginPage = () => {

    const handleFormSubmit = (event:  React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        console.log("button clicked");
    }

  
    const fields:inputFields[] = [
        {
            id :"email",
            type:"email",
            placeholder:"Username",
            label:"Username"
        },
        {
            id :"password",
            type:"password",
            placeholder:"Password",
            label:"Password"
        }
    ]

    const submitProps:buttonData = {
        placeholder:"Sign in",
        handleSubmit:handleFormSubmit
    }

    
    return (
        <React.Fragment>
            <div className={Classes.pageWrapper}>
                <div className={Classes.fromWrapper}>
                <form>
                    {
                        fields.map((element:inputFields,index:number)=>{
                           return(
                            <CustomeInput {...element} key={index} />
                           );
                        })
                    }
                   <div className={Classes.buttonWrapper}>
                   <CustomeButton {...submitProps}/>
                   </div>
                </form>
                </div>
            </div>
        </React.Fragment>
    )
}

export default LoginPage;
import  React from "react";
import { LoginFormComponent } from "../Components/LoginFormComponent/LoginFormComponent";
import { CheckLoginFormComponent } from "../Components/CheckLoginFormComponent/CheckLoginFormComponent";
import { ChangeFormComponent } from "../Components/ChangeFormComponent/ChangeFormComponent";


export const LoginPage=()=>{
    return(
        
       <ChangeFormComponent
       DataForm={LoginFormComponent}
       Confirmation ={CheckLoginFormComponent}
       />
    
        
    )
}
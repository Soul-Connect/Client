import  React from "react";
import { RegistrationFormComponent } from "../Components/RegistrationFormComponent/RegistrationFormComponent";
import { ChangeFormComponent } from "../Components/ChangeFormComponent/ChangeFormComponent";
import { ConfirmationFormComponent } from "../Components/ConfirmationFormComponent/ConfirmationFormComponent";

export const RegistrationPage= ()=>{
    return(
      <ChangeFormComponent
      DataForm={RegistrationFormComponent}
      Confirmation ={ConfirmationFormComponent}
      
      />
    )
}
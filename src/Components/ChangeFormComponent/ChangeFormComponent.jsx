import React, { useState } from "react";
export  const ChangeFormComponent = ({DataForm, Confirmation})=>{
    const [step, setStap] = useState(1)
    switch (step) {
        case 1:
            return (
                <DataForm 
                stap={setStap}
                />
            )
            
            case 2:
                return(
                   <Confirmation
                   stap={setStap}
                   />
                )
               
                break;

    
        default:
            break;
    }

} 
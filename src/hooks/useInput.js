import react, { useState } from 'react'
export  const useInput = (initionValue)=>{
    const [value, setValue] = useState( initionValue)

    const onCgenge = (event)=>{
        setValue(event.target.value)
    }

    return(
     value,
     onCgenge
    ) 

}
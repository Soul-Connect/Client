import  React from "react";
import { Outlet } from "react-router-dom";
import { HeaderComponent } from "../../HeaderComponent/HeaderComponent";

export const Mainlayout= ()=>{
    return(
        <>
       <HeaderComponent/>
       <Outlet/>
        </>
    )
}
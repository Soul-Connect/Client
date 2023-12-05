import  React from "react";
import { Outlet } from "react-router-dom";

export const AutchLayout= ()=>{
    return(
        <div className="container-auth">
        <Outlet/>
        </div>
    )
}
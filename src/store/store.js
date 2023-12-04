import { configureStore } from "@reduxjs/toolkit";
import autchSlice from "./autch/autchSlice";

export  const store = configureStore({
    reducer:{
        autch: autchSlice

    }
})
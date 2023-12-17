import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";



export const registration = createAsyncThunk(
    'autch/registrations',
    async (user) =>{
        try{
       const  response = await axios.post('http://localhost:4200/auth/registration',user )
       console.log(response.data) 
      

        } catch(error){
            console.log(error)
          

        }
    }
)
const autchSlice = createSlice({
    name: 'autch',
    initialState:{
        list:[],
        loader: false
    },
    extraReducers: (builder)=>{
        builder.addCase(registration.pending,(state)=>{
            state.loader = true
        })
        builder.addCase(registration.fulfilled, (state)=>{
            state.loader = true
        })
        builder.addCase(registration.rejected, (state)=>{
            state.loader = false
        })

    }
    

})
export default autchSlice.reducer
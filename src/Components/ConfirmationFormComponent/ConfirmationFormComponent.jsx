import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom'
export const ConfirmationFormComponent = ()=>{
    const navigate = useNavigate()
    const{
        register,
        formState: {errors},
        handleSubmit,
        reset

    }= useForm()

    const onSubmit = (data)=>{
        console.log(data)
        reset()
        navigate('/')

    }
    return(
        <form action="form" className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form__wrapper">
            <div className="form__title">Введите код с почты</div>
            <div className="form__label">
            <label htmlFor="Login" className="form-label">Код</label>
            </div>
            <div className="form__input">
                <input 
                type="text" 
                 className="form-input" 
                 placeholder='Код' 
                 {...register('code',{
                    required: 'Поле обязательное !',
                 })}
                 />
            </div>
            {errors?.code && <p className='form__error'>{errors?.code.message}</p>}
            
           
          

            <div className="form__success">
                <button  type='submit' className='button'>подтвердить</button>
            </div>
           
           
        </div>
    </form>
    )
}
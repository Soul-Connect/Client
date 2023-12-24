import React from 'react'
import { useInput  } from '../../hooks/useInput'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'


export const LoginFormComponent =({stap})=>{
    const login = useInput('') 
    const password = useInput('') 
    const {
        register,
        formState: {errors},
        handleSubmit,
        reset
    } = useForm()

    const onSubmit=(data)=>{     
        let str = JSON.stringify(data)
         let jsonData =  JSON.parse(str)
         console.log(str)
         console.log(jsonData)
         reset()
         stap(2)
 }


    return(
        
        <form action="form" className="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form__wrapper">
                <div className="form__title">Войти</div>
                <div className="form__label">
                <label htmlFor="Login" className="form-label">Email</label>
                </div>
                <div className="form__input">
                        <input 
                        type="text" 
                        className="form-input" 
                        placeholder='Email' 
                        {...register('Email',{
                            required: 'Поле обезательное !',
                            pattern:{
                                value:/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
                                message: 'Неверный Формат Email !'
                            }
                        })}
                        />
                    </div>
                    {errors?.Email && <p className='form__error'>{errors?.Email.message}</p>}
                <div className="form__label">
                <label htmlFor="password" className="form-label">Пароль</label>
                </div>
                <div className="form__input">
                    <input 
                    type="password"  
                    className="form-input" 
                    placeholder='Пароль' 
                    {...register('password',{
                        required:'Поле обязательное !',
                        minLength:{
                            value: 6,
                            message: 'Минимум 6 символов !'
                        }
                    })}
                    />
                </div>
                {errors?.password && <p className='form__error'>{errors.password.message}</p>}

                <div className="form__success">
                    <button  type='submit' className='button'>Войти</button>
                </div>
                <div className="form__success">
                    <button  type='button'  className='button'>Забыли пароль ?</button>
                </div>
               
                <div className="form__redirect">
                <Link to={'/Registration'} className='form__link'>Пройти регистрацию</Link>
                </div>
            </div>
        </form>
    )
}
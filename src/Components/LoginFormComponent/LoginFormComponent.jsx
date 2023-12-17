import React from 'react'
import { useInput  } from '../../hooks/useInput'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'


export const LoginFormComponent =()=>{
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
 }


    return(
        
        <form action="form" className="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form__wrapper">
                <div className="form__title">Войти</div>
                <div className="form__label">
                <label htmlFor="Login" className="form-label">Логин</label>
                </div>
                <div className="form__input">
                    <input 
                    type="text" 
                     className="form-input" 
                     placeholder='Логин' 
                     {...register('login',{
                        required: 'Поле обязательное !',
                        pattern:{
                            value: /^[а-яА-ЯёЁa-zA-Z0-9]+$/,
                            message: 'Должны быть только буквы и цифры !'
                        }
                     })}
                     />
                </div>
                {errors?.login && <p className='form__error'>{errors?.login.message}</p>}
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
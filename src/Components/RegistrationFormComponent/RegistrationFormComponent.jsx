import  react, { useState } from 'react'
import { useForm} from "react-hook-form"
import { useInput } from '../../hooks/useInput'
import { Link } from 'react-router-dom'


export const RegistrationFormComponent = ()=>{
    

      

        
        const {
            register,
            formState: {errors},
            handleSubmit,
            watch,
            reset
            
        } =  useForm()
  
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
                    <div className="form__title">Регистрация</div>
                    
                    <div className="form__label">
                    <label htmlFor="Login" className="form-label">Логин</label>
                    </div>
                    <div className="form__input">
                        <input 
                        type="text" 
                       // value={login.value} 
                       // onChange={login.onChange} 
                        className="form-input" 
                        placeholder='Логин' 
                        {...register('login',{
                            required: 'Поле обезательное !',
                            pattern:{
                                value:/^[а-яА-ЯёЁa-zA-Z0-9]+$/,
                                message: 'Должны быть только буквы и цыфры !'
                            }
                        })}
                        />
                    </div>
                    {errors?.login && <p className='form__error'>{errors?.login.message}</p>}
                    <div className="form__label">
                    <label htmlFor="Password" className="form-label">Пароль</label>
                    </div>
                    <div className="form__input">
                        <input 
                        type="password"  
                       // value={password.value} 
                        //onChange={password.onChange} 
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
                           {errors?.password && <p className='form__error'>{errors?.password.message}</p>}
                    </div>
                    <div className="form__label">
                    <label htmlFor="Password" className="form-label">Повторите пароль</label>
                    </div>
                    <div className="form__input">
                        <input 
                        type="password"  
                        //value={confirmPassword.value} 
                        //onChange={confirmPassword.onChange} 
                        className="form-input" 
                        placeholder='Пароль' 
                        {...register('confirmPassword',{
                            required:'Поле обязательное !',
                            minLength:{
                                value: 6,
                                message: 'Минимум 6 символов !',
                                },
                                validate: (val) => {
                                    if (watch('password') != val) {
                                        return "Пароль не совпадает !";
                                      }
                                  },  
                        })}
                       
                        />
                         {errors?.confirmPassword && <p className='form__error'>{errors?.confirmPassword.message}</p>}
                    </div>
    
                    <div className="form__success">
                        <button  type='submit' className='button'>Регистрироватся</button>
                    </div>
                    <div className="form__redirect">
                <Link to={'/'} className='form__link'>Войти на сайт </Link>
                </div>
                  
                </div>
            </form>
        )
}
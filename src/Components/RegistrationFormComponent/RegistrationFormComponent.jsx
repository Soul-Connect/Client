import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm} from "react-hook-form"
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { registration } from '../../store/autch/autchSlice'

export const RegistrationFormComponent = ({stap})=>{
    const dispatch = useDispatch()
  

      

        
        const {
            register,
            formState: {errors},
            handleSubmit,
            watch,
            reset
            
        } =  useForm()
  
        const onSubmit=(data)=>{ 
            try{
                let str = JSON.stringify(data)
                let jsonData =  JSON.parse(str)
                delete jsonData.confirmPassword

                console.log(str)
                console.log(jsonData)
                //dispatch(registration(jsonData))
                reset()
                stap(2)
             
            }catch(err){
                console.log(err)
            }
              
        }



        return(
                <form action="form" className="form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form__wrapper">
                    <div className="form__title">Регистрация</div>
                    
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
                    <label htmlFor="Password" className="form-label">Пароль</label>
                    </div>
                    <div className="form__input">
                        <input 
                        type="password"  
                       // value={password.value} 
                        //onChange={password.onChange} 
                        className="form-input" 
                        placeholder='Пароль' 
                        {...register('pwd',{
                            required:'Поле обязательное !',
                            minLength:{
                                value: 6,
                                message: 'Минимум 6 символов !'
                            }
                        })} 
                        
                        />
                           {errors?.pwd && <p className='form__error'>{errors?.pwd.message}</p>}
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
                                    if (watch('pwd') != val) {
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
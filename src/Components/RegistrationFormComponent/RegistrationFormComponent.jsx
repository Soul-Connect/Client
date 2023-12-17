import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm} from "react-hook-form"
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { registration } from '../../store/autch/autchSlice'

export const RegistrationFormComponent = ()=>{
    const dispatch = useDispatch()
    const navigate = useNavigate()

      

        
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
                dispatch(registration(jsonData))
                reset()
                navigate('/')
            }catch(err){
                console.log(err)
            }
              
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
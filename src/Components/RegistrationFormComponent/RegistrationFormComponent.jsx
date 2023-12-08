import  react, { useState } from 'react'
import { useForm} from "react-hook-form"
import { useInput } from '../../hooks/useInput'
import { Link } from 'react-router-dom'


export const RegistrationFormComponent = ()=>{
        const name = useInput('')
        const day = useInput('')
        const month = useInput('')
        const year = useInput('')
        const login = useInput('')
        const password = useInput('')
        const confirmPassword = useInput('')
        const [gender, setGender] = useState('Man')

        const changeGender= (event)=>{
            setGender(event.target.value)
        }
        const {
            register,
            formState: {errors},
            handleSubmit,
            watch
            
        } =  useForm()
  
        const onSubmit=( data)=>{
              
                console.log(JSON.stringify(data))
        }



        return(
                <form action="form" className="form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form__wrapper">
                    <div className="form__title">Регистрация</div>
                    <div className="form__label">
                    <label htmlFor="Email" className="form-label">Имя профиля</label>
                    </div>
                    <div className="form__input">
                        <input
                        {...register('profileName',{
                            required: 'Поле обязательное !'
                        })} 
                        type="text" 
                       // value={name.value} 
                       // onChange={name.onChange} 
                        className="form-input" 
                        placeholder='Имя' 
                        
                        />
                      
                       {errors?.profileName && <p className='form__error'>{errors?.profileName.message}</p>}
                    </div>
                    <div className="form__label">
                    <label htmlFor="Email" className="form-label">Дата рождения</label>
                    </div>
                    <div className="form__group">
                     <div className="form__select">
                        <select name="day" 
                        {...register('day')} >
                       
                        <option value="1">1</option>
                        <option value="2">2</option>
                         </select>
                        </div>   
                        <div className="form__select">
                        <select name="month" 
                         {...register('month')}
                        >
                        <option value="Январь">Январь</option>
                        <option value="Февраль">Февраль</option>
                         </select>
                        </div>   

                        <div className="form__select">
                        <select name="year"
                         {...register('year')}
                        >
                        <option value="1997">1997</option>
                        <option value="1998">1998</option>
                        </select>
                    </div>
                    </div>
                    <div className="form__genders">
                        <div className="genders">
                            <div className="genders__items">
                                <div className="gender__item">
                                    <input 
                                    type="radio" 
                                    value='Man' 
                                    className="gender__radio" 
                                    name='gender' 
                                   // onChange={changeGender}
                                   {...register('gender',{
                                    required: 'Поле обязательное !'
                                   })}
                                    />
                                    <span className="gender__text">Мужчина</span>
                                    
                                </div>
                                <div className="gender__item">
                                    <input 
                                    type="radio"  
                                    value='Wooman' 
                                    className="gender__radio" 
                                    name='gender' 
                                   // onChange={changeGender} 
                                   {...register('gender', {
                                    required: 'Поле обязательное !'
                                   })}
                                    />
                                    <span className="gender__text">Женщина</span>
                                </div>
                            </div>
                            {errors?.gender && <p className='form__error'>{errors?.gender.message}</p>}
                        </div>
                    </div>
                    
                    <div className="form__label">
                    <label htmlFor="Email" className="form-label">Логин</label>
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
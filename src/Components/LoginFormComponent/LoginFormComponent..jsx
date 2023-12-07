import React from 'react'
import { useInput } from '../../hooks/useInput'
import { Link } from 'react-router-dom'

export const LoginFormComponent =()=>{
    const login = useInput('') 
    const password = useInput('') 

    return(
        
        <form action="form" className="form">
            <div className="form__wrapper">
                <div className="form__title">Войти</div>
                <div className="form__label">
                <label htmlFor="Email" className="form-label">Логин</label>
                </div>
                <div className="form__input">
                    <input type="text" value={login.value} onChange={login.onChange} className="form-input" placeholder='Логин' />
                </div>
                <div className="form__label">
                <label htmlFor="password" className="form-label">Пароль</label>
                </div>
                <div className="form__input">
                    <input type="password" value={password.value} onChange={password.onChange} className="form-input" placeholder='Пароль' />
                </div>

                <div className="form__success">
                    <button  type='button' className='button'>Войти</button>
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
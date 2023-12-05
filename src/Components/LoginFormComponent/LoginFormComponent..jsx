import React from 'react'
import { useInput } from '../../hooks/useInput'

export const LoginFormComponent =()=>{
    const email = useInput('') 
    const password = useInput('') 

    return(
        
        <form action="form" className="form">
            <div className="form__wrapper">
                <div className="form__title">Войти</div>
                <div className="form__label">
                <label htmlFor="Email" className="form-label">Email</label>
                </div>
                <div className="form__input">
                    <input type="text" value={email.value} onChange={email.onChange} className="form-input" placeholder='Email' />
                </div>
                <div className="form__label">
                <label htmlFor="Email" className="form-label">Пароль</label>
                </div>
                <div className="form__input">
                    <input type="text" value={password.value} onChange={password.onChange} className="form-input" placeholder='Пароль' />
                </div>

                <div className="form__success">
                    <button className='button'>Войти</button>
                </div>
                <div className="form__success">
                    <button className='button'>Забыли пароль ?</button>
                </div>
                <div className="form__redirect">Пройти регистрацию ?</div>
            </div>
        </form>
    )
}
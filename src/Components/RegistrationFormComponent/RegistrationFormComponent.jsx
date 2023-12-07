import  react from 'react'
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
  
        



        return(
                <form action="form" className="form">
                <div className="form__wrapper">
                    <div className="form__title">Регистрация</div>
                    <div className="form__label">
                    <label htmlFor="Email" className="form-label">Имя профиля</label>
                    </div>
                    <div className="form__input">
                        <input type="text" value={name.value} onChange={name.onChange} className="form-input" placeholder='Имя' />
                    </div>
                    <div className="form__label">
                    <label htmlFor="Email" className="form-label">Дата рождения</label>
                    </div>
                    <div className="form__group">
                    <div className="form__input--birthday">
                        <input type="text" value={day.value} onChange={day.onChange} className="form-input" placeholder='Число' />
                    </div>
                    <div className="form__input--birthday">
                        <input type="text" value={month.value} onChange={month.onChange} className="form-input" placeholder='Месяц' />
                    </div>
                    <div className="form__input--birthday">
                        <input type="text" value={month.value} onChange={month.onChange} className="form-input" placeholder='Год' />
                    </div>
                   
                    </div>
                    <div className="form__label">
                    <label htmlFor="Email" className="form-label">Логин</label>
                    </div>
                    <div className="form__input">
                        <input type="text" value={login.value} onChange={login.onChange} className="form-input" placeholder='Логин' />
                    </div>
                    <div className="form__label">
                    <label htmlFor="Password" className="form-label">Пароль</label>
                    </div>
                    <div className="form__input">
                        <input type="password"  value={password.value} onChange={password.onChange} className="form-input" placeholder='Пароль' />
                    </div>
                    <div className="form__label">
                    <label htmlFor="Password" className="form-label">Повторите пароль</label>
                    </div>
                    <div className="form__input">
                        <input type="password"  value={confirmPassword.value} onChange={confirmPassword.onChange} className="form-input" placeholder='Пароль' />
                    </div>
    
                    <div className="form__success">
                        <button  type='button' className='button'>Регистрироватся</button>
                    </div>
                    <div className="form__redirect">
                <Link to={'/'} className='form__link'>Войти на сайт </Link>
                </div>
                  
                </div>
            </form>
        )
}
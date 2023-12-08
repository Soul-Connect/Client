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
                     <div className="form__select">
                        <select name="day" value={day.value} onChange={day.onChange}>
                        <option value="День">День</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                         </select>
                        </div>   
                        <div className="form__select">
                        <select name="month" value={month.value} onChange={month.onChange}>
                        <option value="Месяц">Месяц</option>
                        <option value="Январь">Январь</option>
                        <option value="Февраль">Февраль</option>
                         </select>
                        </div>   

                        <div className="form__select">
                        <select name="year" value={year.value} onChange={year.onChange}>
                        <option value="Год">Год</option>
                        <option value="1997">1997</option>
                        <option value="1998">1998</option>
                        </select>
                    </div>
                    </div>
                    <div className="form__genders">
                        <div className="genders">
                            <div className="genders__items">
                                <div className="gender__item">
                                    <input type="radio" className="gender__radio" />
                                    <span className="gender__text">Мужчина</span>
                                </div>
                                <div className="gender__item">
                                    <input type="radio" className="gender__radio" />
                                    <span className="gender__text">Женщина</span>
                                </div>
                            </div>
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
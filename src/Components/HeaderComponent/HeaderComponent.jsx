import  React from "react";
import { Link  } from "react-router-dom";

export const HeaderComponent= ()=>{
    return(
        <>
      <header className="header">
        <div className="header__wrapper">
            <nav className="menu">
                <ul className="menu__items">
                    <li className="menu__item">
                        <Link to='/'>Главная</Link>
                    </li>
                </ul>
            </nav>
        </div>
      </header>
      </>
    )
}
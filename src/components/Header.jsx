import logo from "../assets/images/logo.svg";
import {
    HOME_PAGE_ROUTE,
    ABOUT_PAGE_ROUTE,
    VACANCIES_PAGE_ROUTE,
    GUIDES_PAGE_ROUTE,
    LOGIN_PAGE_ROUTE,
} from "../utils/consts";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <div className="container d-flex align-items-center space-between">
                <Link to={HOME_PAGE_ROUTE} className="header__logo">
                    <img src={logo} alt="Logo" />
                </Link>
                <ul className="header__nav">
                    <li className="nav__item">
                        <Link to={HOME_PAGE_ROUTE} className="nav__link">Главная</Link>
                    </li>
                    <li className="nav__item">
                        <Link to={ABOUT_PAGE_ROUTE} className="nav__link">О проекте</Link>
                    </li>
                    <li className="nav__item">
                        <Link to={VACANCIES_PAGE_ROUTE} className="nav__link">Вакансии</Link>
                    </li>
                    <li className="nav__item">
                        <Link to={GUIDES_PAGE_ROUTE} className="nav__link">Гайды</Link>
                    </li>
                    <li className="nav__item">
                        <Link to="https://alphaedu.tech/" target={"_blank"} className="nav__link">Курсы</Link>
                    </li>
                </ul>
                <div className="button-group">
                    <Link to={LOGIN_PAGE_ROUTE} className="button is-primary">Войти</Link>
                    {/*
                        <button className="button is-primary">Добавить вакансию</button>
                        <button className="button is-primary">Добавить гайд</button>
                        <button className="button is-danger">Выход</button>
                    */}
                </div>
            </div>
        </header>
    );
}

export default Header;
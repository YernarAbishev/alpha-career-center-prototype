import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import NotFoundPage from "../pages/NotFoundPage";
import VacanciesPage from "../pages/VacanciesPage";
import GuidesPage from "../pages/GuidesPage";
import LoginPage from "../pages/LoginPage";

import {
  ABOUT_PAGE_ROUTE, GUIDES_PAGE_ROUTE,
  HOME_PAGE_ROUTE, LOGIN_PAGE_ROUTE, VACANCIES_PAGE_ROUTE,
} from "./consts";


export const routes = [
  {
    path: HOME_PAGE_ROUTE,
    element: HomePage,
  },
  {
    path: ABOUT_PAGE_ROUTE,
    element: AboutPage,
  },
  {
    path: VACANCIES_PAGE_ROUTE,
    element: VacanciesPage,
  },
  {
    path: GUIDES_PAGE_ROUTE,
    element: GuidesPage,
  },
  {
    path: LOGIN_PAGE_ROUTE,
    element: LoginPage,
  },
  {
    path: "*",
    element: NotFoundPage,
  },
];
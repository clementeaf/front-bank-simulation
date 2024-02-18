import { lazy } from "react";

const Main = lazy(() => import("./pages/Main"));
const Register = lazy(() => import("./pages/Register"));

export const MAIN_ROUTE = {
    id: 'main-route',
    path: '/',
    component: Main,
    isIndex: true,
    isExact: true,
    isInSideNav: true,
    name: 'Main',
}

export const REGISTER_ROUTE = {
    id: 'register-route',
    path: '/register',
    component: Register,
    isIndex: false,
    isExact: true,
    isInSideNav: false,
    name: 'Register',
}
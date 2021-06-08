import React, {useEffect} from 'react'
import Head from "next/head";
import {ActiveLink} from "../linkLayout/linkLayout";
import s from './styles.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {CombinedStateType} from "redux-store/rootReducer";
import {authAPI} from "axios-api/api";
import {authActions} from "redux-store/auth/actions";
import {MainLayoutType} from "types/shared.type";

export const MainLayout: React.FC<MainLayoutType> = (props) => {
    const {title, children} = {...props};
    const dispatch = useDispatch();
    const isAuth = useSelector((state: CombinedStateType) => state.AuthReducer.isAuth);
    const {login} = useSelector((state: CombinedStateType) => state.AuthReducer);

    useEffect(() => {
        (async () => {
            const response = await authAPI.getAuth();
            if (response.resultCode === 0) {
                const user = await authAPI.getAuth();
                const {login, id, email} = await user.data;
                dispatch(authActions.setUser(id, email, login, true));
            } else {
                dispatch(authActions.setUser(null, null, null, false));
            }
        })()
    }, []);

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <nav className={s.nav}>
                <ul>
                    <li>
                        <ActiveLink href={'/'}>home</ActiveLink>
                    </li>
                    <li>
                        <ActiveLink href={'/about'}>about</ActiveLink>
                    </li>
                    <li>
                        <ActiveLink href={'/chat'}>chat</ActiveLink>
                    </li>
                    <li>
                        <ActiveLink href={'/login'}>{isAuth ? login : `login`}</ActiveLink>
                    </li>
                </ul>
            </nav>
            <div>
                {children}
            </div>
        </>
    )
};

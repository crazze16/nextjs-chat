import React from "react";
import {MainLayout} from "components/mainLayout/mainLayout";
import {useSelector} from "react-redux";
import {CombinedStateType} from "redux-store/rootReducer";
import {LogInForm} from "components/logInForm/logInForm";
import s from './styles.module.scss'
import {Authorized} from "components/authorized/authorized";

const LoginPage: React.FC = () => {

    const isAuth = useSelector((state: CombinedStateType) => state.AuthReducer.isAuth);

    return (
        <MainLayout title='Login'>
            <div className={s.wrapper}>
                {
                    isAuth ? <Authorized/> : <LogInForm/>
                }
            </div>
        </MainLayout>
    )
};

export default LoginPage;



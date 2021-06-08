import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {CombinedStateType} from "redux-store/rootReducer";
import {authAPI} from "axios-api/api";
import {authActions} from "redux-store/auth/actions";
import s from "./styles.module.scss";

export const Authorized: React.FC = () => {
    const dispatch = useDispatch();

    const {login} = useSelector((state: CombinedStateType) => state.AuthReducer);

    const handleLogOut = async () => {
        const response = await authAPI.logOut();
        response.resultCode === 0 && dispatch(authActions.setUser(null, null, null, false))
    };

    return (
        <div className={s.wrapper}>
            Welcome, {login}
            <button onClick={handleLogOut}>logOut</button>
        </div>
    )
};
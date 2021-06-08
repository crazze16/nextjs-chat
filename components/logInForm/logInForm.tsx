import React, {FormEvent, useCallback, useState} from "react";
import {authAPI} from "axios-api/api";
import {authActions} from "redux-store/auth/actions";
import {useDispatch} from "react-redux";
import s from './styles.module.scss'

export const LogInForm: React.FC = () => {
    const dispatch = useDispatch();

    const [formError, setFormError] = useState<Array<string>>([]);

    const useFormField = (initialValue: string = '') => {
        const [value, setValue] = useState(initialValue);
        const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value), []);
        return { value, onChange };
    };

    const loginField = useFormField();
    const passwordField = useFormField();
    const [isRemember, setIsRemember] = useState<any>(false);

    const handleLogIn = async (e: FormEvent) => {
        e.preventDefault();
        const response = await authAPI.logIn(loginField.value, passwordField.value, isRemember);
        if(response.resultCode === 0) {
            const user = await authAPI.getAuth();
            const {login, id, email} = await user.data;
            dispatch(authActions.setUser(id, email, login, true));
        } else {
            setFormError(response.messages);
        }
    };

    const handleCheckBox = () => setIsRemember(!isRemember);

    return (
        <form onSubmit={handleLogIn} className={s.form}>
            <label htmlFor='email' className={s.inputLabel}>Your E-mail</label>
            <input type="email" {...loginField} required id='email' placeholder='Type your e-mail'/>
            <label htmlFor='password' className={s.inputLabel}>Your password</label>
            <input type="password" {...passwordField} required id='password' placeholder='Type your password'/>
            <label className={s.checkboxLabel} id='checkbox'>
                <input type='checkbox' value={isRemember} onChange={handleCheckBox}/>
                Remember me
            </label>
            <button type='submit'>LOG IN</button>
            <span>You must be registered on <br/>https://social-network.samuraijs.com/signUp</span>
            <span>{formError.map((item,index) => <div key={index} style={{color: 'red'}}>{item}</div>)}</span>
        </form>
    )
};

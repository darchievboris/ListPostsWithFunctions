import React, {useContext} from 'react';
import MyInput from "../components/UI/MyInput/MyInput";
import MyButton from "../components/UI/button/MyButton";
import {AuthContext} from "../context";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const login= event=>{
        event.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth','true')
    }
    return (
        <div>
            <h1>Sign in</h1>
            <form onSubmit={login}>
                <MyInput type="text" placeholder="User"/>
                <MyInput type="password" placeholder="password"/>
                <MyButton>Login</MyButton>
            </form>
        </div>
    );
};

export default Login;

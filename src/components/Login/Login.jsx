import React from "react";
import {reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validations/validators";
import {login} from "../../redux/authReducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import s from './../common/FormsControls/FormsControls.module.css'


const LoginForm = ({handleSubmit, error}) => {


    return (
        <form onSubmit={handleSubmit}>
            {createField([required], 'Email', 'email', Input)}
            {createField([required], 'Password', 'password', Input,{type:'password'})}
            {createField([], null, 'rememberMe', Input,{type:'checkbox'},'remember me')}

            {error && <div className={s.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}


const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export const Login = ({login, isAuth}) => {
    const onSubmit = (formData) => {
        login(formData.email, formData.password, formData.rememberMe)
    }

    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}


export default connect(mapStateToProps, {login})(Login)
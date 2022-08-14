import { useRef } from "react";
import { useNavigate } from "react-router-dom"
import "./login.css"

export const Login = () => {


    const elEmail = useRef()
    const elPassword = useRef()
    const navigete = useNavigate()

    const handalForm = (evt) => {
        evt.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: elEmail.current.value,
                password: elPassword.current.value
            })
        };
        fetch('https://reqres.in/api/login', requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data) {
                    window.localStorage.setItem("token", data.token)
                    navigete("/")
                }
            });


        elEmail.current.value = null
        elPassword.current.value = null
    }

    return (
        <div className="login">
            <div>
                <h1>Login page</h1>
                <form onSubmit={handalForm}>
                    <input className="input__login" ref={elEmail} type="email" placeholder="email..." />
                    <input className="input__login" ref={elPassword} type="passwort" placeholder="password..." />
                    <button className="login__btn" type="submit">Send</button>
                </form>
            </div>
        </div>
    )
}
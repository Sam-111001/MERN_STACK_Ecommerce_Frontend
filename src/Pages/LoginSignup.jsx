import { useState } from "react"
import "./CSS/LoginSignup.css"

export default function LoginSignup() {
    const [state, setState] = useState("login");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    })
    function formHandler(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    async function SignUp() {
        let responseData;
        await fetch("http://localhost:4000/signUp", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData),
        }).then((resp) => resp.json()).then((data) => responseData = data)

        if (responseData.success) {
            localStorage.setItem("auth-token", responseData.token)
            window.location.replace("/")
        } else {
            alert(responseData.errors);
        }
    }

    async function Login() {
        let responseData;
        await fetch("http://localhost:4000/login", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData),
        }).then((resp) => resp.json()).then((data) => responseData = data)

        if (responseData.success) {
            localStorage.setItem("auth-token", responseData.token)
            window.location.replace("/")
        } else {
            alert(responseData.errors);
        }
    }

    return <div>
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>{state}</h1>
                <div className="loginsignup-fields">
                    {state === "signup" ? <input onChange={formHandler} value={formData.name} name="name" type="text" placeholder="Your Name" /> : <></>}
                    <input onChange={formHandler} value={formData.email} name="email" type="email" placeholder="Your Email" />
                    <input onChange={formHandler} value={formData.password} name="password" type="password" placeholder="Password" />
                </div>
                <button onClick={() => { state === "login" ? Login() : SignUp() }}>Continue</button>
                {state === "signup" ? <p className="loginsignup-login">
                    Already have an account? <span onClick={() => { setState("login") }}>Login here</span>
                </p> : <p className="loginsignup-login">
                    Create an account? <span onClick={() => { setState("signup") }}>SignUp here</span>
                </p>}
                <div className="loginsignup-agree">
                    <input type="checkbox" name="" id="" />
                    <p>By continuing,<br />I agree to the terms and conditions of privacy policy.</p>
                </div>
            </div>
        </div>
    </div>
}
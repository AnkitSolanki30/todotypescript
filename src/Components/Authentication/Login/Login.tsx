import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import * as actions from "./_Redux/LoginAction";


const Login = () => {

    const navigate = useNavigate();
    const [user, setUser] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [userValidate, setUserValidate] = useState<string>()
    const [passwordValidate, setpasswordValidate] = useState<string>()
    const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);


    const handleLogin = async () => {
        let data = { user, password };
        await actions.login(data);
        navigate("/");
    }

    const handleSignup = () => {
        navigate("/signup")
    }

    return (
        <>
            <div className="container pt-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1> TODO APP </h1>
                        <h3> Login </h3>
                    </div>
                </div>

                <form className="form">
                    <div className="row p-2 justify-content-center">
                        <div className="col-4">
                            <input type="text" className=" w-100 form-control" placeholder="User Name"
                                value={user} onChange={(e) => {
                                    setUser(e.target.value)
                                }} />
                        </div>
                    </div>
                    <div className="row p-2 justify-content-center">
                        <div className="col-4">
                            <input type="password" className="w-100 form-control" placeholder="Password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                }} />

                        </div>
                    </div>
                    <div className='container'>
                        <div className="row justify-content-center">
                            <div className="col-4 text-end">
                                <button type="button" className="btn btn-light border-primary btn-border-radius w-50 " onClick={handleLogin}>
                                    Login
                                </button>
                            </div>
                            <div className="col-4">
                                <button type="button" className="btn btn-light border-primary btn-border-radius w-50 " onClick={handleSignup} disabled={buttonDisabled}>
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login
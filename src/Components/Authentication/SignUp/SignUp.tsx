import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import * as actions from "./_redux/SignupAction";

const SignUp = () => {

  const navigate = useNavigate();
  const [user, setUser] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const handleSignup = async () => {
        let data = { user, password };
        await actions.signup(data);
        navigate("/");
}

  return (
    <>
    <div className="container pt-5">
        <div className="row">
            <div className="col-12 text-center">
                <h1> TODO APP </h1>
                <h3> SignUp </h3>
            </div>
        </div>

        <form className="form">
            <div className="row p-2 justify-content-center">
                <div className="col-4">
                    <input
                        type="text"
                        value={user}
                        onChange={(e) => {
                            setUser(e.target.value)
                        }}
                        className=" w-100 form-control"
                        placeholder="User Name"
                    />
                </div>
            </div>
            <div className="row p-2 justify-content-center">
                <div className="col-4">
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        className="w-100 form-control"
                        placeholder="Password"
                    />
                </div>
            </div>
            <div className="row p-2 justify-content-center">
                <div className="col-4 text-center">
                    <button
                        type="button"
                        className="btn btn-light border-primary btn-border-radius w-75 "
                        onClick={handleSignup}
                    >
                        Sign Up
                    </button>
                </div>
            </div>
        </form>
    </div>
</>
  )
}

export default SignUp
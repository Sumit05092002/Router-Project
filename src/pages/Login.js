import React, { useState } from 'react'
import login from "../assets/login.png"
import frame from "../assets/frame.png"
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
export default function Login(props) {
  let loggedin = props.loggedin;
  let setloggedin = props.setloggedin;
  const navigate = useNavigate();
  const [formdata, setformdata] = useState({ email: "", password: "" });
  const [showpassword, setpassword] = useState(false);

  const loginHandler = (event) => {
    event.preventDefault();
    setloggedin(true);
    console.log(loggedin);
    toast.success("logged in successfully");
    navigate("/dashboard");
  }
  const changeHandler = (event) => {
    setformdata(prevformdata => {
      return {
        ...prevformdata,
        [event.target.name]: event.target.value
      }
    })
  }
  const passwordHandler = (event) => {
    event.preventDefault();
    setpassword(!showpassword);
  }
  console.log(formdata);
  return (
    <div className="grandparent">

      <div className='form'>
        <div className="details">
          <h1>Welcome Back</h1>
          <div className="description">
            <p>Build skills for today,tomorrow and beyond</p>
            <p>Education to future proof your career</p>
          </div>
          <br />
          <br />
          <form action="">
              Email:<input required={true} type="email" name="email" id="" onChange={changeHandler} />
            password:<input required={true} type={showpassword ? "text" : "password"} name="passwordtext" id="passwordtext" onChange={changeHandler} />
            <div onClick={passwordHandler} className="showpassword">{showpassword ? "Hidepassword" : "Showpassword"}</div>
            <br />
            <button className='signin' onClick={loginHandler}>Sign In</button>
            <br />
            <div className="or">
              <div className='one'></div>
              <p>OR</p>
              <div className='two'></div>
            </div>
            <br />
            <button className="google">Sign in with Google</button>
          </form>
        </div>
        <div className="image">
          <img src={login} height={300} width={300} />
        </div>

      </div>
    </div>
  )
}

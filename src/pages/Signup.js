import React from 'react'
import signup from "../assets/signup.png"
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
export default function Signup(props) {
  let loggedin = props.loggedin;
  let setloggedin = props.setloggedin;
  let navigate=useNavigate();
  const signupHandler=(event)=>{
    event.preventDefault();
    setloggedin(true);
    console.log(loggedin);
    toast.success("Account created");
    navigate("/dashboard");
  }
  return (
    <div className="signupparents">

      <div className="signup">
        <div className="Details">
          <div className="headings">
            <h1>Join the millions learning to code free with studynotion</h1>
            <p>Build skills for today,tomorrow and beyond</p>
            <p>Education to future proof your career</p>
          </div>
          <br />
          <div className="button">
            <button className="student">Student</button>
            <button className="Instructor">Instructor</button>
          </div>
          <br />
          <br />
          <br />
          <form action="">
            FirstName: <input type="text" />
            LastName: <input type="text" />
            Email: <input type="email" name="Email" id="" />
            Create Password: <input type="password" name="password" id="" />
            Confirm Password: <input type="password" name="password" id="" />
            <br />
            <button className="register" onClick={signupHandler}>SignUp</button>
          </form>
          <br />
          <br />
          <div className="or">
            <div className='one'></div>
            <p className='a'>OR</p>
            <div className='two'></div>
          </div>
          <br />
          <button className="registerGoogle">
            Sign Up with Google
          </button>
        </div>
        <div className="image">
          <img src={signup} alt="" srcset="" />
        </div>
      </div>
    </div>
  )
}

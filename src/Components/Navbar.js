import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/Logo.svg"
import { useState } from 'react'
import toast from 'react-hot-toast'
export default function Navbar(props) {
    let loggedin=props.loggedin;
    let setloggedin=props.setloggedin;
    return (
        <div>
            <nav>
                <ul>
                    <Link to="/"><img src={logo} alt="" width={160} height={32} /></Link>
                    <div className="three">
                        <Link to="/">Home</Link>
                        <Link to="/">About</Link>
                        <Link to="/">Contact</Link>
                    </div>

                    <div className="button">
                        {
                            !loggedin&&
                            <Link to="/login" ><button>Login</button></Link>
                        }
                        {
                            !loggedin&&
                            <Link to="/signup"><button>Signup</button></Link>
                        }
                        {
                            loggedin&&
                            <Link to="/" onClick={()=>{setloggedin(false);toast.success("logged out")}}><button>Log out</button></Link>
                        }
                        {
                            loggedin&&
                            <Link to="/dashboard"><button>DashBoard</button></Link>
                        }
                    </div>

                </ul>
            </nav>
        </div>
    )
}

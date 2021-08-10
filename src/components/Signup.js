import React, { Component } from "react";

class Signup extends Component{
    render() {
        return (
            <div>
                <form> 
                    <input name='username' type='text'/>
                    <input name='email' type='email'/>
                    <input name='password' type='password'/>
                </form>
            </div>
        )
    }
}

export default Signup;
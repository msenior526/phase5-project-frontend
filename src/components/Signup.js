import React, { Component } from "react";

class Signup extends Component{

    state = {
        username: '',
        email: ''
    }

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })

        console.log(this.state);
    }

    handleSubmit = event => {
        event.preventDefault();
        // fetch('https://localhost:3000/users', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // }).then(resp => {debugger})
    }

    render() {
        return (
            <div>
                <h1>Signup</h1>
                <form onSubmit={this.handleSubmit}> 
                    <input type='text' name='username' value={this.state.username} onChange={this.handleOnChange}/>
                    <input name='email' type='email' value={this.state.email} onChange={this.handleOnChange}/>
                    <input name='password' type='password'/>
                    <input type='submit' value="Submit"/>
                </form>

            </div>
        )
    }
}

export default Signup;
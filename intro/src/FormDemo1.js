import React, { Component } from 'react'

export default class FormDemo1 extends Component {
    state={username:'',city:''}

    onChangeHandler=(event)=>{
        // this.setState({username:event.target.value})
        // this.setState({city:event.target.value})
        let name= event.target.name;
        let value= event.target.value;
        this.setState({[name]:value})
    }
    onSubmitHandler=(event)=>{
        event.preventDefault();
        alert(this.state.username,this.state.city)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitHandler}>
                    <h3>Username</h3>
                    <input name="username" onChange={this.onChangeHandler} type = "text"></input>
                    <h3>user name is {this.state.username} </h3>

                    <h3>city</h3>
                    <input name="city" onChange={this.onChangeHandler} type = "text"></input>
                    <h3>city is {this.state.city} </h3>

                    <input type="submit" value="Save"></input>
                </form>
            </div>
        )
    }
}

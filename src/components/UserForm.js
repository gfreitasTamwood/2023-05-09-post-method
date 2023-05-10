import React from "react";

class UserForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            avatar: ""
        };
        // this.setState = this.setState;
        // this.handleChange = this.handleChange;
        // this.handleSubmit = this.handleSubmit;
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
        // console.log(event.target.value);
    }

    handleSubmit = (event) => {
        fetch("http://localhost:5000/form", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(this.state)
            },
        ).then(function(response) {
            console.log(response);
            return response.json()  
        })
        event.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>

                <input type="hidden" name="formId" value="userForm"/>
                <input type="text" name="firstName" value={this.state.value} onChange={this.handleChange}/>
                <input type="text" name="lastName" value={this.state.value} onChange={this.handleChange}/>
                <input type="email" name="email" value={this.state.value} onChange={this.handleChange}/>
                <input type="password" name="password" value={this.state.value} onChange={this.handleChange}/>
                <input type="text" name="avatar" value={this.state.value} onChange={this.state.handleChange}/>
                <input type="submit" name="btnSendUser" value="Submit User"/>
            </form>
        );
    }
}

export default UserForm;
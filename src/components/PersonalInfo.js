import React from "react";
import '../styles/PersonalInfo.css'


export default class PersonalInfo extends React.Component {
    constructor(props) {
            super(props);
            this.state = {
                //user info as state object
                user: {
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone:'',
                    url: ''
                }
            }
            this.handleChange = this.handleChange.bind(this);
    }

    /**depending on input, update the corresponding
     * state variable of user state
    */ 
    handleChange(e) {
        this.setState(prevState => ({
            ...prevState,
            user: {
                ...prevState.user,
                [e.target.id]: e.target.value
            }
        }))
    }



    render() {
        const { firstName, lastName, email, phone, url } = this.state.user;
        //element if the prop submitted is false
        const editable = ( <div className="header">
        <div className="name">
            <label htmlFor="firstName">First Name</label>
            <input onChange={this.handleChange} id="firstName" value={firstName}></input>

            <label htmlFor="lastName">Last Name</label>
            <input onChange={this.handleChange} id="lastName" value={lastName}></input>
        </div>
        <div className="miscInfo">
            <label htmlFor="email">Email</label>
            <input onChange={this.handleChange} id="email" type="email" value={email}></input>

            <label htmlFor="phone">Phone</label>
            <input onChange={this.handleChange} id="phone" type="tel" value={phone}></input>

            <label htmlFor="url">Website</label>
            <input onChange={this.handleChange} id="url" value={url}></input>
        </div>
    </div>)

        //element if the prop submitted is true
        //will display hard-coded uneditable values
        //from state
        const notEditable = (<div className="header">
        <div className="name">
            <h1 className="firstNameDisplay">{firstName}</h1>

            <h1 htmlFor="lastNameDisplay">{lastName}</h1>
        </div>
        <div className="miscInfo">
            <p className="emailDisplay">{email}</p>

            <p className="phoneDisplay">{phone}</p>

            <p className="urlDisplay">{url}</p>
        </div>
    </div>)

        //using ternary operation, determine
        //which element to render
        return this.props.submitted? notEditable : editable;
    }
}
import React from "react";
import '../styles/PersonalInfo.css'


export default class PersonalInfo extends React.Component {
    constructor(props) {
            super(props);
            this.state = {
                user: {
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone:'',
                    url: ''
                }
            }
    }



    render() {
        const editable = ( <div className="header">
        <div className="name">
            <label htmlFor="firstName">First Name</label>
            <input id="firstName"></input>

            <label htmlFor="lastName">Last Name</label>
            <input id="lastName"></input>
        </div>
        <div className="miscInfo">
            <label htmlFor="email">Email</label>
            <input id="email" type="email"></input>

            <label htmlFor="phone">Phone</label>
            <input id="phone" type="tel"></input>

            <label htmlFor="url">Website</label>
            <input id="url" type="url"></input>
        </div>
    </div>)
        const notEditable = (<div className="header">
        <div className="name">
            <h1 className="firstNameDisplay">First Name</h1>

            <h1 htmlFor="lastNameDisplay">Last Name</h1>
        </div>
        <div className="miscInfo">
            <p className="emailDisplay">Email</p>

            <p className="phoneDisplay">Phone</p>

            <p className="urlDisplay">Website</p>
        </div>
    </div>)


        return this.props.submitted? notEditable : editable;
    }
}
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
        return (
            <div className="header">
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
            </div>
        )
    }
}
import React from "react";
import EducationView from "./EducationView";

export default class Education extends React.Component {
    constructor(props) {
            super(props);
            this.state = {
                educationList : [],
                education: {
                    school: '',
                    areaOfStudy:'',
                    graduationDate: ''
                }
            }
            this.addEducation = this.addEducation.bind(this);
            this.handleChange = this.handleChange.bind(this);
    }

    addEducation() {

    }

    handleChange(e) {
        this.setState(prevState => ({
            ...prevState,
            education: {
               ...prevState.education,
               [e.target.id]: e.target.value
            }
        }))
    }


    render() {
        const {submitted} = this.props;
        const editable = (<div className="qualificationSection">
            <h1 className="title">Education</h1>
            <EducationView educationList={this.state.educationList}/>
            <form className="educationForm">
                <label className="schoolLabel">School<input onChange={this.handleChange} id="school"></input></label>
                <label className="areaOfStudyLabel">Area of Study<input onChange={this.handleChange} id="areaOfStudy"></input></label>
                <label className="graduationDateLabel">Graduation Date<input onChange={this.handleChange} id="graduationDate" type="date"></input></label>
            </form>
            <button className="addEducationBtn">Add Education</button>
        </div>)
        const notEditable = (<EducationView educationList={this.state.educationList}/>)

        return submitted? notEditable : editable
    }
}
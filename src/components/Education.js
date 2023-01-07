import React from "react";
import EducationView from "./EducationView";
import uniqid from "uniqid";
import '../styles/Education.css';

export default class Education extends React.Component {
    constructor(props) {
            super(props);
            this.state = {
                educationList : [],
                education: {
                    id: uniqid(),
                    school: '',
                    areaOfStudy:'',
                    graduationDate: ''
                }
            }
            this.addEducation = this.addEducation.bind(this);
            this.handleChange = this.handleChange.bind(this);
    }

    addEducation() {
        this.setState({
            educationList : this.state.educationList.concat(this.state.education),
            education: {
                id: uniqid(),
                school: '',
                areaOfStudy:'',
                graduationDate: ''
            }
        })
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
        const {educationList, education} = this.state;
        const {submitted} = this.props;
        const editable = (<div className="qualificationSection">
            <h1 className="title">Education</h1>
            <EducationView educationList={educationList}/>
            <form className="educationForm">
                <label className="schoolLabel">School<input value={education.school} onChange={this.handleChange} id="school"></input></label>
                <label className="areaOfStudyLabel">Area of Study<input value={education.areaOfStudy} onChange={this.handleChange} id="areaOfStudy"></input></label>
                <label className="graduationDateLabel">Graduation Date<input value={education.graduationDate} onChange={this.handleChange} id="graduationDate" type="date"></input></label>
            </form>
            <button onClick={this.addEducation} className="addEducationBtn">Add Education</button>
        </div>)
        const notEditable = (<div className="qualificationSection">
            <h1 className="title">Education</h1>
            <EducationView educationList={this.state.educationList}/>
        </div>)

        return submitted? notEditable : editable
    }
}
import React from "react";
import EducationView from "./EducationView";
import uniqid from "uniqid";
import '../styles/Education.css';



export default class Education extends React.Component {
    constructor(props) {
            super(props);
            this.state = {
                //stores the registered educations
                educationList : [],
                //stores current education
                education: {
                    id: uniqid(),
                    school: '',
                    areaOfStudy:'',
                    graduationDate: ''
                }
            }
            this.addEducation = this.addEducation.bind(this);
            this.deleteEducation = this.deleteEducation.bind(this);
            this.handleChange = this.handleChange.bind(this);
    }

    /**
     * Concatenates the current education to the education list (updates state)
     */
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

    /**
     * Depending on the input, updates a property of the current
     * education
     * @param {} e 
     */
    handleChange(e) {
        this.setState(prevState => ({
            ...prevState,
            education: {
               ...prevState.education,
               [e.target.id]: e.target.value
            }
        }))
    }

    /**
     * Delete the desired education from the 
     * state variable: educationList
     */
    deleteEducation(education) {
        this.setState({
            educationList : this.state.educationList.filter(ed => {
                return ed.id !== education.id;
            })
        })
    }


    render() {
        //destructuring
        const {educationList, education} = this.state;
        const {submitted} = this.props;

        //element to be shown if the property submitted is false
        const editable = (<div className="qualificationSection">
            <h1 className="title">Education</h1>
            <EducationView educationList={educationList} deleteEducation={this.deleteEducation}/>
            <form className="educationForm">
                <label className="schoolLabel">School<input value={education.school} onChange={this.handleChange} id="school"></input></label>
                <label className="areaOfStudyLabel">Area of Study<input value={education.areaOfStudy} onChange={this.handleChange} id="areaOfStudy"></input></label>
                <label className="graduationDateLabel">Graduation Date<input value={education.graduationDate} onChange={this.handleChange} id="graduationDate" type="date"></input></label>
            </form>
            <button onClick={this.addEducation} className="addEducationBtn">Add Education</button>
        </div>)

        //element to be shown if the property of submitted is true
        const notEditable = (<div className="qualificationSection">
            <h1 className="title">Education</h1>
            <EducationView educationList={this.state.educationList}/>
        </div>)

        //ternary operatation to determine submitted value and 
        //render the proper element
        return submitted? notEditable : editable
    }
}
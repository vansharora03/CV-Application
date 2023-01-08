import React from "react";
import WorkView from "./WorkView";

export default class Work extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            workList: [],
            work: {
                id: "",
                company: "",
                position: "",
                description: "",
                startDate: "",
                endDate: ""
            }
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState(prevState => ({
            ...prevState,
            work: {
               ...prevState.work,
               [e.target.id]: e.target.value
            }
        }))
    }



    render() {
        const{workList, work} = this.state;
        const{submitted} = this.props;
        const editable = <div className="qualificationSection">
            <h2 className="title">Work Experience</h2>
            <WorkView workList={workList}/>
            <form className="workForm">
                <label className="companyLabel">Company<input onChange={this.handleChange} id="company"></input></label>
                <label className="positionLabel">Position<input onChange={this.handleChange} id="position"></input></label>
                <label className="descriptionLabel">Description<input onChange={this.handleChange} id="description"></input></label>
                <label className="startDateLabel">From<input onChange={this.handleChange} id="startDate" ></input ></label>
                <label className="endDateLabel">To<input onChange={this.handleChange} id="endDate"></input></label>
            </form>
            <button className="addWorkBtn">Add Work Experience</button>
        </div>
        const notEditable = <div className="qualificationSection">
            <h2 className="title">Work Experience</h2>
            <WorkView workList={workList}/>
        </div>
        return submitted ? notEditable : editable;
    }
}
import React from "react";
import WorkView from "./WorkView";
import uniqid from "uniqid";
import '../styles/Work.css';

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
        this.addWork = this.addWork.bind(this);
        this.deleteWork = this.deleteWork.bind(this);
    }

    /**
     * Depending on the input, changes
     * the appropriate property of
     * the state object
     * @param {*} e 
     */
    handleChange(e) {
        this.setState(prevState => ({
            ...prevState,
            work: {
               ...prevState.work,
               [e.target.id]: e.target.value
            }
        }))
    }

    /**
     * Add current work state object to
     * workList state array
     */
    addWork() {
        this.setState({
            workList: this.state.workList.concat(this.state.work),
            work: {
                id: uniqid(),
                company: "",
                position: "",
                description: "",
                startDate: "",
                endDate: ""
            }
        })
    }

    /**
     * (State change) Delete the desired work list object from workList
     * @param {} workToDelete 
     */
    deleteWork(workToDelete) {
        this.setState({
            workList: this.state.workList.filter(work => work.id!== workToDelete.id)
        })
    }



    render() {
        const{workList, work} = this.state;
        const{submitted} = this.props;
        //element in case prop submitted is false
        const editable = <div className="qualificationSection">
            <h1 className="title">Work Experience</h1>
            <WorkView submitted={submitted} workList={workList} deleteWork={this.deleteWork}/>
            <form className="workForm">
                <label className="companyLabel">Company<input onChange={this.handleChange} id="company" value={work.company}></input></label>
                <label className="positionLabel">Position<input onChange={this.handleChange} id="position" value={work.position}></input></label>
                <label className="descriptionLabel">Description<input onChange={this.handleChange} id="description" value={work.description}></input></label>
                <label className="startDateLabel">From<input onChange={this.handleChange} id="startDate" value={work.startDate} type="date"></input ></label>
                <label className="endDateLabel">To<input onChange={this.handleChange} id="endDate" value={work.endDate} type="date"></input></label>
            </form>
            <button onClick={this.addWork} className="addWorkBtn">Add Work Experience</button>
        </div>

        //element in case prop submitted is true
        const notEditable = <div className="qualificationSection">
            <h1 className="title">Work Experience</h1>
            <WorkView submitted={submitted} workList={workList} deleteWork={this.deleteWork}/>
        </div>

        //ternary operation determines which element
        //to render
        return submitted ? notEditable : editable;
    }
}
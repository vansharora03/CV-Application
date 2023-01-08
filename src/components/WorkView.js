import React from "react";
import '../styles/WorkView.css';

export default class WorkView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        //destructuring
        const {workList, deleteWork} = this.props;

        //map elements to each property for each item in workList
        const workEntries = workList.map(entry => {
            return(
                <div className="workEntry" key={entry.id}>
                    <h2 key={`companyDisplay-${entry.id}`} className="companyDisplay">{entry.company}</h2>
                    <h3 key={`positionDisplay-${entry.id}`} className="positionDisplay">{entry.position}</h3>
                    <h3 key={`descriptionDisplay-${entry.id}`} className="descriptionDisplay">{entry.description}</h3>
                    <p key={`dateDisplay-${entry.id}`} className="dateDisplay">{entry.startDate.substring(0,4)} - {entry.endDate.substring(0, 4)}</p>
                    {/**Button calls deleteWork function passed as
                     * prop to delete its
                     * current work entry
                     */}
                     <button className="deleteButton" onClick={() => deleteWork(entry)}>Delete</button>
                </div>
            )
        })
        return (<div className="WorkView">{workEntries}</div>)
        }
}
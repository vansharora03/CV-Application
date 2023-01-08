import React from "react";

export default class WorkView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const {workList} = this.props;
        const workEntries = workList.map(entry => {
            return(
                <div className="workEntry" key={entry.id}>
                    <h2 key={`companyDisplay-${entry.id}`} className="companyDisplay">{entry.company}</h2>
                    <h3 key={`positionDisplay-${entry.id}`} className="positionDisplay">{entry.position}</h3>
                    <h3 key={`descriptionDisplay-${entry.id}`} className="descriptionDisplay">{entry.description}</h3>
                    <p key={`dateDisplay-${entry.id}`} className="dateDisplay">{entry.startDate.substring(0,4)} - {entry.endDate.substring(0, 4)}</p>
                    
                </div>
            )
        })
        return (<div className="WorkView">{workEntries}</div>)
        }
}
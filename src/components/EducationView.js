import React from "react";
import '../styles/EducationView.css';

export default class EducationView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const {educationList} = this.props;
        const educationEntries = educationList.map((entry) => {
            return (
                <div key={entry.id}className="education-entry">
                    <h2 key={`schoolNameDisplay-${entry.id}`} className="schoolNameDisplay">{entry.school}</h2>
                    <h3 key={`areaOfStudyDisplay-${entry.id}`} className="areaOfStudyDisplay">{entry.areaOfStudy}</h3>
                    <h3 key={`graduationDateDisplay-${entry.id}`} className="graduationDateDisplay">{entry.graduationDate}</h3>
                </div>

            )
        })
        return (<div className="EducationView">{educationEntries}</div>)
    }
}
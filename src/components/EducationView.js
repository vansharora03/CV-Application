import React from "react";
import '../styles/EducationView.css';

export default class EducationView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        //destructuring
        const {educationList, deleteEducation} = this.props;

        //map each entry of prop educationList and its props to
        //elements
        const educationEntries = educationList.map((entry) => {
            return (
                <div key={entry.id}className="educationEntry">
                    <h2 key={`schoolNameDisplay-${entry.id}`} className="schoolNameDisplay">{entry.school}</h2>
                    <h3 key={`areaOfStudyDisplay-${entry.id}`} className="areaOfStudyDisplay">{entry.areaOfStudy}</h3>
                    <h3 key={`graduationDateDisplay-${entry.id}`} className="graduationDateDisplay">{entry.graduationDate}</h3>
                    {/**deleteButton uses the deleteEducation function 
                     * passed as a prop from parent state
                     */}
                    <button key={`deleteButton-${entry.id}`} className="deleteButton" onClick={() => deleteEducation(entry)}>Delete</button>
                </div>

            )
        })

        //return the rendering of the entries
        return (<div className="EducationView">{educationEntries}</div>)
    }
}
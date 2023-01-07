import React from "react";
import PersonalInfo from "./PersonalInfo";
import Education from "./Education";
import Work from "./Work";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            submitted: false
        }
        this.toggleSubmit = this.toggleSubmit.bind(this);
    }

    toggleSubmit() {
        this.setState({submitted: this.state.submitted? false: true});
    }

  render() {
    const { submitted} = this.state;
    return (
        <div className="App">
            <PersonalInfo submitted={submitted}/>
            <div className="content">
                <Education submitted={submitted}/>
                <Work submitted={submitted}/>
            </div>
            <div className="footer">
                <button onClick={this.toggleSubmit}className="submitOrEdit">{submitted? "Edit" : "Submit"}</button>
            </div>
        </div>
    )
  }
}
import React from "react";
import PersonalInfo from "./PersonalInfo";
import Education from "./Education";
import Work from "./Work";

export default class App extends React.Component {

  render() {
    return (
        <div className="App">
            <PersonalInfo/>
            <div className="content">
                <Education/>
                <Work/>
            </div>
            <div className="footer">
                <button class="submitOrEdit">Submit</button>
            </div>
        </div>
    )
  }
}
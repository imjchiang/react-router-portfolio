import React, { Component } from "react";

class About extends Component
{
    render()
    {
        const allHobbies = this.props.hobbies.map((h, idx) =>
        {
            return <li key={idx}>{h}</li>
        })
        return(
            <div>
                <h1>About Me!</h1>
                <p>My name is Josh and I was born and raised in San Jose.</p>
                <p>I attended UCLA to pursue a degree in Biochemistry as I thought that I would like to become a doctor</p>
                <p>As I pursued my dream of becoming a doctor, I realized that it conflicted with my goals of serving in my church and having time immediately after college to begin preparing to have time to raise a family</p>
                <p>So I decided to drop the plans of med school and attended bootcamp to do software development which I found interest in during my fourth year at UCLA in a C++ class.</p>
                <br />
                <h3>Here are some things I enjoy doing: </h3>
                {allHobbies}
            </div>
        )
    }
}

export default About;
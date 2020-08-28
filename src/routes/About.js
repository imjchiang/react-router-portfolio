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
                <p>I attended UCLA to pursue a degree in Biochemistry as \n I thought that I would like to become a doctor</p>
                <p>But as I pursued this dream, I realized that it conflicted \n with my goals of serving in my church and having time immediately after college to begin preparing to have time to raise a family</p>
                <p>So I decided to drop the plans of med school and attended bootcamp to do software development as I found interest in it in my fourth year at UCLA</p>
                <br />
                <p>Here are some things I enjoy doing: </p>
                {allHobbies}
            </div>
        )
    }
}

export default About;
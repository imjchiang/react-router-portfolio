import React, {Component} from "react";

class Projects extends Component
{
    render()
    {
        const allProjects = this.props.projects.map((p, idx) =>
        {
            return(
                <div>
                    <h3>{p.name}</h3>
                    <img src={p.image} alt={p.name} />
                    <p>{p.description}</p>
                    <a href={p.link}>Click here to see {p.name}</a>
                </div>
            )
        })
        return(
            <div>
                <h1>Joshua Chiang's Projects</h1>
                {allProjects}
            </div>
        )
    }
}

export default Projects;
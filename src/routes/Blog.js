import React, {Component} from "react";

class Blog extends Component
{
    render()
    {
        const allPosts = this.props.posts.map((p, idx) =>
        {
            return(
                <div>
                    <h5>{p.title}</h5>
                    <p>{p.post}</p>
                    <p>{p.author}</p>
                </div>
            )
        })

        return(
            <div>
                <h1>Joshua Chiang's Blog</h1>
                <h3>Posts:</h3>
                {allPosts}
            </div>
        )
    }
}

export default Blog;
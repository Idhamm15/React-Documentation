import React,{ Component, Fragment } from "react";
import "./BlogPost.css";
import Post from "../../component/Post/Post";
import axios from "axios"

class BlogPost extends Component {

    // membuat state penampungan data
    state = {
        post : []
    }

    // Get API menggunakan fetching data
    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then(response => response.json())
    //     .then(json => {
    //         this.setState({
    //             post : json
    //         })
    //     })
    // }

    // Get API menggunakan Axios data
    componentDidMount() {
        axios.get('http://localhost:3000/posts')
        .then((result) => {
            this.setState({
                post: result.data
            })
        })
    }


    render () {
        return (
            <Fragment>
            <p className="section-title">Blog Post</p>
            {
                this.state.post.map(post => {
                    return <Post key={post.id} title={post.title} desc={post.body} />
                })
            }  
            <Post/>  
            </Fragment>
        )
    }
}

export default BlogPost;
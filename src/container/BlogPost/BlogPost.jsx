import React,{ Component, Fragment } from "react";
import "./BlogPost.css";
import Post from "../../component/Post/Post";
import axios from "axios"

class BlogPost extends Component {

    // membuat state penampungan data
    state = {
        post : []
    }

    getPostAPI=()=>{
        axios.get('http://localhost:3000/posts')
        .then((result) => {
            this.setState({
                post: result.data
            })
        })
    }

    // handle Remove
    handleRemove = (data) => {
        axios.delete(`http://localhost:3000/posts/${data}`).then((res)=>{
            this.getPostAPI()
        })
    }

    // Get API menggunakan Axios data
    componentDidMount() {
        this.getPostAPI();
    }


    render () {
        return (
            <Fragment>
            <p className="section-title">Blog Post</p>
            {
                this.state.post.map(post => {
                    return <Post key={post.id} data={post} remove={this.handleRemove}  />
                })
            }  
            <Post/>  
            </Fragment>
        )
    }
}

export default BlogPost;
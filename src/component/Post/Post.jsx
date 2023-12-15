import React, { Fragment } from 'react';
import Ayam from "../../assets/Ayam.jpg";
import "../../container/BlogPost/BlogPost.css"

const Post = (props) => {
    const fixImage = {
        width: "200px",
        height: "200px"
    }
    return (
        <Fragment>
            <div className="post">
                <div className="img-thumb">
                    <img style={fixImage} src={Ayam} alt="" />
                </div>
                <div className="content">
                    <p className="title">{props.data.title}</p>
                    <p className="desc">{props.data.body}</p>
                    <button className='remove' onClick={()=> props.remove(props.data.id)}>remove</button>
                </div>
        </div>
        </Fragment>
    )

}

export default Post;
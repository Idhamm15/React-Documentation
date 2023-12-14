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
                    <p className="title">{props.title}</p>
                    <p className="desc">{props.desc}</p>
                </div>
        </div>
        </Fragment>
    )

}

export default Post;
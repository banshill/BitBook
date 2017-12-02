import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

export const TextPost = props => {

    const { id, text, dateCreated, userId, userDisplayName, type, commentsNum } = props.post;
    const { error } = props.error;
    const postDate = moment(dateCreated).fromNow();

    if (error) {
        return (
            <div className={props.show}>
                <div className="card w-100" >
                    <div className="card-body">
                        <p>{error}</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={props.show}>
            <div className="card mb-4 w-100" >
                <div className="card-body">
                    <Link to={`/people/${userId}`} ><h5>{userDisplayName}</h5></Link>
                    <p>{text}</p>
                    <small>{postDate}</small>
                    <Link to={`/posts/text/${id}`} ><h6 className="float-right">{commentsNum} Comments</h6></Link>
                </div>
            </div>
        </div>
    );
};
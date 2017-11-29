import React from "react";
import moment from "moment";

import { dataService } from "../services/serviceData";

class TextPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.initState();
    }

    initState() {
        return {
            post: "",
            error: ""
        };
    }

    componentDidMount() {
        this.loadPost(this.props.post);
    }

    handleNetworkRequestError(error) {
        if (error.request) {
            this.setState({ error: "There is no response from server." });
        }
    }

    loadPost(id) {
        dataService.getTextPost(id, textPost => this.setState({ post: textPost }), error => this.handleNetworkRequestError(error));
    }

    render() {
        const { _id, _text, _dateCreated, _userDisplayName, _type, _commentsNum } = this.state.post;
        const postDate = moment(_dateCreated).fromNow();

        return (
            <div>
                <div className={this.props.show}>
                    <p className="error">{this.state.error}</p>
                    <div className="card" style={{ width: 50 + "rem" }} >
                        <div className="card-body">
                            <h5>{_userDisplayName}</h5>
                            <p> {_text}</p>
                            <small>{postDate}</small>
                            <small className="float-right">{_commentsNum} Comments</small>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TextPost;
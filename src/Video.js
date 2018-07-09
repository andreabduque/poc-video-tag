import React, { Component } from 'react';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Tag(props) {
    return (
        <div className="card text-white bg-primary mb-3" style={{ maxWidth: '9em', maxHeight: '9em', opacity: 0.6 }}>
            <div className="card-body">
                <h5 className="card-title">{props.description}</h5>
                <p className="card-text">foo foo foo foo</p>
            </div>
        </div>
    );
}

class Video extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTagIndex: null,
            previousTagIndex: null,
            currentTagDescription: "",
            shouldRender: false
        };
        this.videoRef = React.createRef();
        this.tags = {
            "time": [0, 6],
            "title": ["Tag 1", "Tag 2"],
            "description": ["a butterfly", "an apple"]
        }
    }

    handleTimeUpdate() {
        const currentTag = this.state.currentTagIndex;
        const previousTag = this.state.previousTagIndex;
        let currentTime = Math.floor(this.videoRef.current.currentTime);
        let tagIndex = this.tags["time"].indexOf(currentTime);

        if (tagIndex > -1 && tagIndex !== previousTag) {
            this.setState({
                currentTagIndex: tagIndex,
                previousTagIndex: currentTag,
                currentTagDescription: this.tags["description"][tagIndex],
                shouldRender: true
            });
        }
    }

    renderTag() {
        return <Tag description={this.state.currentTagDescription} />
    }

    render() {
        return (
            <div style={{ position: 'relative', width: "640px", height: "360px" }}>
                <div style={{position: 'absolute', top: '2%', right: '1%'}}>
                    {this.state.shouldRender && this.renderTag()}
                </div>
                <video
                    onTimeUpdate={() => this.handleTimeUpdate()}
                    height="100%"
                    width="100%"
                    id="video"
                    controls={true}
                    ref={this.videoRef}
                >
                    <source src="http://www.w3schools.com/html/mov_bbb.mp4"></source>
                </video>
            </div>
        );
    }
}

export default Video;

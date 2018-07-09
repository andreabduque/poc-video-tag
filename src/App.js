import React, { Component } from 'react';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';


//Vai receber o valor da descricao e atualizar o bagulho
//componente aparece e some -> criar algo pra ele saber quando aparecer e sumir
class Tag extends Component {
    render() {
        return (
            <div className="card text-white bg-primary mb-3" style={{ maxWidth: 10 + 'em', maxHeight: 10 + 'em' }}>
                {/* <div className="card-header">Produto 1</div> */}
                <div className="card-body">
                    <h5 className="card-title">{this.props.description}</h5>
                    <p className="card-text">foo foo foo foo</p>
                </div>
            </div>
        );
    }
}

// class Video extends Component{
//     render(){
//         return ("hello world");
//     }
// }

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTagIndex: null,
            previousTagIndex: null,
            currentTagDescription: ""
        };
        this.videoRef = React.createRef();
        this.tagTimes = [2, 6];
        this.tagDescriptions = ["Tag 1", "Tag 2"];
    }

    handleTimeUpdate() {
        const currentTag = this.state.currentTagIndex;
        const previousTag = this.state.previousTagIndex;
        //const currentTagDescription = this.state.currentTagDescription;

        let currentTime = Math.floor(this.videoRef.current.currentTime);
        let tagIndex = this.tagTimes.indexOf(currentTime);

        if (tagIndex > -1 && tagIndex !== previousTag) {
            console.log("APARECE TAG");
            console.log(this.tagTimes[tagIndex]);
            console.log(this.tagDescriptions[tagIndex]);

            this.setState({
                currentTagIndex: tagIndex,
                previousTagIndex: currentTag,
                currentTagDescription: this.tagDescriptions[tagIndex]
            });

            console.log(this.state)
        }
        console.log(tagIndex)
    }

    renderTag() {
        return <Tag description = {this.state.currentTagDescription} />;
    }

    render() {
        return (
            <div style={{ width: "640px", height: "360px" }}>
                <video
                    onTimeUpdate={() => this.handleTimeUpdate()}
                    className='p-absolute'
                    height="100%"
                    width="100%"
                    id="video"
                    controls={true}
                    ref={this.videoRef}
                >
                    <source src="http://www.w3schools.com/html/mov_bbb.mp4"></source>
                </video>
                <div className="p-absolute">
                    {this.renderTag()}
                </div>
            </div>
        );
    }
}

export default App;

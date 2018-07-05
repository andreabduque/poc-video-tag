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
                    <h5 className="card-title">Foo</h5>
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
        };
        this.videoRef = React.createRef();
        this.tagTimes = [2,6];
        this.tagDescriptions = ["blahblah foo", "blahblah foo 2"];
    }

    handleTimeUpdate() {
        const tag = this.state.currentTagIndex;
        let currentTime = Math.floor(this.videoRef.current.currentTime);
        let tagIndex = this.tagTimes.indexOf(currentTime);
        
        if(tagIndex > -1 && tagIndex !== tag){
            console.log("APARECE TAG");
            console.log(this.tagTimes[tagIndex]);
            console.log(this.tagDescriptions[tagIndex]);
            
            // this.setState({
            //     currentTagIndex: tagIndex
            // });
        }

        this.setState({
            currentTagIndex: tagIndex
        });

        console.log(tagIndex)
    }

    renderTag() {
        return <Tag />;
    }

    render() {
        return (
            <div>
                <div className="video">
                    <video onTimeUpdate={() => this.handleTimeUpdate()} ref={this.videoRef} height="50%" width="50%" id="video" controls>
                        <source src="http://www.w3schools.com/html/mov_bbb.mp4"></source>
                    </video>
                </div>
                <div className="tag">
                    {this.renderTag()}
                </div>
            </div>
        );
    }
}

export default App;

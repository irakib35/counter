import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Box from "./box.js";

class App extends Component {
    
    state = {
        boxes : [],        
    }

    createbox = () => {
        const { boxes } = this.state;        
        this.setState({boxes : [...boxes, this.state.counter]});
        
    }

    deletebox = (event, param) => {
        const { boxes } = this.state;
        this.state.boxes.splice(param, 1);        
        this.setState({boxes : [...boxes]});
        
       
      }
    
    render() {
        return (
            <div style={ { margin:'20px' }}>
                <button class="btn btn-primary p-2" onClick={this.createbox}>Add new Box</button>
                <br />
                <br />
                {this.state.boxes.map((number, index) => (
                    <div class="p-2" key={number}>
                        <Box num={index} />                      
                    </div>
                ))}

                
            </div>
        )
    }
}

export default App;

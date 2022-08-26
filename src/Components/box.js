import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';



class box extends Component {
    state = {
        number :6,
        classname: 'btn btn-danger'
    }

    increment = () => {
        const newnumber = this.state.number + 1;
        if (newnumber > 0) {
            const newstate = { number : newnumber, classname: 'btn btn-danger' };
            this.setState(newstate);
        } else{
            const newstate = { number : newnumber, classname: 'btn btn-secondary' };
            this.setState(newstate);
        }
    }

    decrement = () => {
        const newnumber = this.state.number-1;
        if (newnumber <= 0 ){
            const newstate = {number: newnumber, classname: 'btn btn-secondary'};
            this.setState(newstate);
        } else{
            const newstate = { number : newnumber, classname: 'btn btn-danger' };
            this.setState(newstate);
        }
    }

    render() {
        return (
            <div>
                <button type='button' class={this.state.classname} onClick={this.decrement}>Decrement</button>
                <span class='p-3'>{this.state.number}</span>
                <button type='button' className='btn btn-primary' onClick={this.increment}>Increment</button>                
                            
            </div>
        )
    }
}

export default box;
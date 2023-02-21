import { Component } from "react";

class Counter extends Component{
    constructor() {
        super();
        this.state = {
            Counter: 0,
        };
    }

    increment() {
        this.setState({
            Counter: this.state.Counter+2,
        })
    }

    decrement() {
        this.setState({
            Counter: this.state.Counter-1,
        })
    }
    render() {
        return (
        <div>
            <h3>Counter value is: {this.state.Counter} </h3>
            <button onClick={() => this.increment()}>Two Steps Forward</button> <br/>
            <button onClick={() => this.decrement()}>One Step Backward</button>
        </div>
        )
    }
}

export default Counter;
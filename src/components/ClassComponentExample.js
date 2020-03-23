import React, {Component} from 'react';

class ClassComponentExample extends Component {
    state = {
        quantity: 0
    };

    increment = () => {
        const {quantity} = this.state;

        this.setState({quantity: quantity + 1 })
    };

    decrement = () => {
        const {quantity} = this.state;

        this.setState({quantity: quantity - 1 })
    };


    render() {
        const {quantity} = this.state;

        return (
            <div>
                <h1>{quantity}</h1>

                <button onClick={this.increment}>Incrementar</button>
                <button onClick={this.decrement}>Decrementar</button>
            </div>
        );
    }
}

export default ClassComponentExample;

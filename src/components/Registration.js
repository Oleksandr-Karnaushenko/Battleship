import React from "react";

class Registration extends React.Component {
    constructor() {
        super();
        this.state = {
            value: ''
        }
    }

    onCh = (e)=>{
        this.setState({value: e.target.value})
    }

    render() {
        return <div className="registr">
            <h1>Welcome!</h1>
            <h2>Enter your name and start the game!</h2>
            <form onSubmit={this.props.enterName.bind(null, this.state.value)}>
                <input type="text" value={this.state.value} placeholder="Your name:" onChange={this.onCh}></input>
                <input type="submit" value="Get start"></input>
            </form>
        </div>
    }
}

export default Registration;

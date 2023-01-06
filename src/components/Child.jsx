import "../styles.css";
import React, { Component } from "react";
// export default function App() {
// return (
//   <div className="App">
//     <h1>Hello CodeSandbox</h1>
//     <h2>Start editing to see some magic happen!</h2>
//   </div>
// );
// }

class Child extends Component {
  state = {
    runBefore: "first",
  };

  constructor(props) {
    super(props);
    console.log("child constructor");
    this.state = {
      runBefore: "second",
    };
  }

  UNSAFE_componentWillMount() {
    console.log("child componentWillMount");
    this.setState({ name: "Max" });
  }

  componentDidMount() {
    console.log("child componentDidMount");
  }

  componentWillReceiveProps() {
    console.log("child componentWillReceiveProps");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("child shouldComponentUpdate");
    console.log("nextProps: ", nextProps);
    console.log("nextState: ", nextState);

    return true;
  }

  componentWillUpdate() {
    console.log("child componentWillUpdate");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("child componentDidUpdate");
    console.log("child nextProps: ", prevProps);
    console.log("child nextState", prevState);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  changeState() {
    this.setState({ name: "Winner" });
  }

  render() {
    console.log("child render");

    return (
      <div className="App">
        <h1>Child: {this.props.name}</h1>
        <button onClick={this.changeState.bind(this)}>
          Change Child State
        </button>
      </div>
    );
  }
}

export default Child;

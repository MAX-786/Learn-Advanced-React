import "./styles.css";
import React, { Component } from "react";
import Child from "../components/Child";
// export default function App() {
// return (
//   <div className="App">
//     <h1>Hello CodeSandbox</h1>
//     <h2>Start editing to see some magic happen!</h2>
//   </div>
// );
// }

class App extends Component {
  state = {
    runBefore: "first"
  };

  constructor() {
    super();
    console.log("constructor");
    this.state = {
      runBefore: "second"
    };
  }

  UNSAFE_componentWillMount() {
    console.log("componentWillMount");
    this.setState({ name: "Jim" });
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentWillReceiveProps() {
    console.log("componentWillReceiveProps");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    console.log("nextProps: ", nextProps);
    console.log("nextState", nextState);

    return true;
  }

  componentWillUpdate() {
    console.log("componentWillUpdate");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
    console.log("prevProps: ", prevProps);
    console.log("prevState", prevState);
  }

  changeState() {
    this.setState({ name: "Jam" });
  }

  unmountChild() {
    this.setState({ name: "NoChild" });
  }
  render() {
    console.log("render");

    return (
      <div className="App">
        <h1>Parent</h1>
        {this.state.name !== "NoChild" && <Child name={this.state.name} />}
        <button onClick={this.changeState.bind(this)}>Change State</button>
        <button onClick={this.unmountChild.bind(this)}>Unmount Child</button>
      </div>
    );
  }
}

export default App;

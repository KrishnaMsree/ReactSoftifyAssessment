import React, { Component } from "react";
import '../App.css';

class HelloWorldComp extends Component {
  render() {
    return (
        <div className="container">
            <div className="text-center">
                <h1 className="text-default center">
                    <b>Hello, World!</b>
                </h1>
            </div>
        </div>
    )
  }
}

export default HelloWorldComp;
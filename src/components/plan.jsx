import React, { Component } from "react";

import GraphWrap from "./graph";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

var colorArray = [
  "#FF6633",
  "#FFB399",
  "#FF33FF",
  "#FFFF99",
  "#00B3E6",
  "#E6B333",
  "#3366E6",
  "#999966",
  "#99FF99",
  "#B34D4D",
  "#80B300",
  "#809900",
  "#E6B3B3",
  "#6680B3",
  "#66991A",
  "#FF99E6",
  "#CCFF1A",
  "#FF1A66",
  "#E6331A",
  "#33FFCC",
  "#66994D",
  "#B366CC",
  "#4D8000",
  "#B33300",
  "#CC80CC",
  "#66664D",
  "#991AFF",
  "#E666FF",
  "#4DB3FF",
  "#1AB399",
  "#E666B3",
  "#33991A",
  "#CC9999",
  "#B3B31A",
  "#00E680",
  "#4D8066",
  "#809980",
  "#E6FF80",
  "#1AFF33",
  "#999933",
  "#FF3380",
  "#CCCC00",
  "#66E64D",
  "#4D80CC",
  "#9900B3",
  "#E64D66",
  "#4DB380",
  "#FF4D4D",
  "#99E6E6",
  "#6666FF",
];

function getRandcolor() {
  let l = colorArray.length;
  return colorArray[Math.floor(Math.random() * l)];
}

const graph = {
  nodes: [
    {
      id: 1,
      label: "Python",
      title: "node 1 tootip text",
      color: getRandcolor(),
    },
    { id: 2, label: "ML", title: "node 2 tootip text", color: getRandcolor() },
    { id: 3, label: "DSA", title: "node 3 tootip text", color: getRandcolor() },
    { id: 4, label: "AI", title: "node 4 tootip text", color: getRandcolor() },
    { id: 5, label: "Nodejs", title: "node 5 tootip text" },
  ],
  edges: [
    { from: 1, to: 2 },
    { from: 1, to: 3 },
    { from: 2, to: 4 },
    { from: 2, to: 5 },
  ],
};

class Plan extends Component {
  state = {
    selectedNode: null,
    graph: graph,
  };

  updateSelectedNode = (node) => {
    const copyState = this.state;
    this.setState({ ...copyState, selectedNode: node });
    console.log(this.state);
  };

  render() {
    return (
      <React.Fragment>
        <Navbar></Navbar>
        <div className="graphbody">
          <div className="graphContainer">
            <GraphWrap
              graph={this.state.graph}
              onSelect={this.updateSelectedNode}
            />
          </div>
          <div className="sidebar">
            <Sidebar
              selectedNode={this.state.selectedNode}
              graph={this.state.graph}
            ></Sidebar>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Plan;

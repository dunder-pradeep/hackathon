import React, { Component } from "react";

import { Route } from "react-router-dom";

//component imports
import SearchApp from "./searchApp";
import Plan from "./components/plan";

//helper functions..
function getRandcolor() {
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

  let l = colorArray.length;
  return colorArray[Math.floor(Math.random() * l)];
}

class App extends Component {
  //App to maintain the bi dir app data
  state = {
    graph: {
      nodes: [],
      edges: [],
    },
  };

  updateGraphNode = (newnode) => {
    if (newnode == undefined) return;
    const graphCopy = this.state.graph;
    //weak comparison for eliminating duplicate entries..
    if (
        graphCopy.nodes.find((obj, idx) => {
            if (obj.label == newnode.title.raw.substring(0, 4)) return true;
        })
  ) {
    console.log("repeating");
    console.log(this.state);
    return;
  }
      
    //new node properties for graph
    //newnode.id = newnode.id.raw;
    newnode.id = graphCopy.nodes.length + 1;
    newnode.color = getRandcolor();
    //newnode.title = newnode.title.raw;
    newnode.label = newnode.title.raw.substring(0, 4);

    graphCopy.nodes.push(newnode);

    //temporary edge linking without logic
    for (let i = 0; i < this.state.graph.nodes.length; i++) {
      if (Math.random() > 0.3)
        graphCopy.edges.push({ from: newnode.id, to: i });
    }

    this.setState({ graph: graphCopy });
    console.log(this.state);
  };

  updateGraphEdge = (newedge) => {
    const graphCopy = this.state.graph;

    graphCopy.edges.push(newedge);
    this.setState({ graph: graphCopy });
  };

  render() {
    return (
      <React.Fragment>
        <Route
          path="/planner"
          render={() => <Plan graph={this.state.graph} />}
        />
        <Route
          path="/courses"
          render={() => <SearchApp addNode={this.updateGraphNode} />}
        />
      </React.Fragment>
    );
  }
}

export default App;

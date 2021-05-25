import React, { Component } from "react";
import ReactDOM from "react-dom";

//components .. 
import Sidebar from "./sidebar";

//react-vis
import Graph  from "react-graph-vis";
import { node } from "prop-types";


//react-vis setup..
const options = {
  layout: {
    hierarchical: false,
  },
  nodes: {
    color: "#3a56e4",
    shape: "circle",
    size: 100,
  },
  edges: {
    color: "#000000",
    width: 0.5,
    selectionWidth: 0,
  },
  height: "800px",
};

class Plan extends Component {
  state = {
    selectedNode: null,
  };

  updateSelectedNode = (node) => {
    this.setState({ selectedNode:node })
  };

  render() {
    const graphevents = {
      select: (event) => {
        var { nodes, edges } = event;
        this.updateSelectedNode(nodes[0]);
      },
    };

    return (
      <React.Fragment>
        <div className="graphbody">
          <div className="graphContainer">
          <Graph
              graph={this.props.graph}
              options={options}
              events={graphevents}
              getNetwork={(network) => {
                //  if you want access to vis.js network api you can set the state in a parent component using this property
              }}
            />
          </div>
          <div className="sidebar">
            <Sidebar
              selectedNode={this.state.selectedNode}
              graph={this.props.graph}
            ></Sidebar>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Plan;

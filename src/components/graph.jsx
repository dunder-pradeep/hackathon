import ReactDOM from "react-dom";
import Graph from "react-graph-vis";

import React, { Component } from 'react';
import { node } from "prop-types";
// need to import the vis network css in order to show tooltip



const options = {
  layout: {
    hierarchical: false
  },
  nodes: {
    color: "#3a56e4",
    shape: 'circle',
    size:100,
  },
  edges: {
    color: "#000000",
    width:1
  },
  height: "1000px"
};


class GraphWrap extends Component{
  state = {}

  render() {
    const onSelect = this.props.onSelect;
    const events = {
      select: function(event) {
        var { nodes, edges } = event;
        onSelect(nodes[0]);
      }
    };
    
    return (
      <Graph
        graph={this.props.graph}
        options={options}
        events={events}
        getNetwork={network => {
          //  if you want access to vis.js network api you can set the state in a parent component using this property
        }}
      
      />
    );
  
  }
}
export default GraphWrap;
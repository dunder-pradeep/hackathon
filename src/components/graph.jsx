import React, { Component } from 'react';

import { Graph } from "react-d3-graph";

const data = {
    nodes: [{ id: "Harry" }, { id: "Sally" }, { id: "Alice" }],
    links: [
      { source: "Harry", target: "Sally" },
        { source: "Harry", target: "Alice" },

    ],
    focusedNodeId: "nodeIdToTriggerZoomAnimation"

  };


  const myConfig = {
      nodeHighlightBehavior: true,
      maxZoom: 8,
      minZoom:0.1,
      width: 800,
      focusZoom: 1,
      directed: true,
      collapsible: false,
      automaticRearrangeAfterDropNode: false,
      freezeAllDragEvents: false,
      panAndZoom: false,
    node: {
      color: "lightgreen",
      size: 250,
      highlightStrokeColor: "blue",
    },
    link: {
      highlightColor: "lightblue",
    },
};
  
const onClickNode = function(nodeId) {
    window.alert(`Clicked node ${nodeId}`);
  };
  
  const onClickLink = function(source, target) {
    window.alert(`Clicked link between ${source} and ${target}`);
};
  
const onZoomChange = function(previousZoom, newZoom) {
    window.alert(`Graph is now zoomed at ${newZoom} from ${previousZoom}`);
};

class GraphWrap extends Component {
    state = {  }
    render() { 
        return (
            <Graph
  id="graph-id" // id is mandatory
  data={data}
  config={myConfig}
  onClickNode={onClickNode}
                onClickLink={onClickLink}
                onZoomChange={onZoomChange}
/>
         );
    }
}
 
export default GraphWrap;
import React, { Component } from "react";

import { Card, CardContent, CardHeader, CardMedia } from "@material-ui/core";
  

class Sidebar extends Component {
  state = {};
    render() {
    
    const { selectedNode, graph } = this.props;
    const node = selectedNode && graph.nodes[selectedNode - 1];
    return (
      <div className='section-container'>
        {selectedNode && (
                    <Card>
                        <CardHeader title={ node.title.raw}/>
                         
              <CardContent>
                <ul>
                  <li> UID : {node.id} </li>
                  <li> Course Name : {node.title.raw} </li>
                </ul>
              </CardContent>
            </Card>
        )}
        {!selectedNode && <CardContent>Nothing selected..</CardContent>}
      </div>
    );
  }
}

export default Sidebar;

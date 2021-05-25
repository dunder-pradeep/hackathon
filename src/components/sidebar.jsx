import React, { Component } from "react";

import { Card, CardContent, CardHeader, CardMedia } from "@material-ui/core";

class Sidebar extends Component {
  state = {};
  render() {
    const { selectedNode, graph } = this.props;
    const node = selectedNode && graph.nodes[selectedNode - 1];
    return (
      <div className="section-container">
        {selectedNode && (
          <Card>
            <CardHeader title={node.title.raw} />

            <CardContent>
              <ul>
                <li className='list-item'> UID : {node.id} </li>
                <li className='list-item'> Course Name : {node.title.raw} </li>
                <li className='list-item'> Course Rating : {node.rating.raw} </li>
                <li className='list-item'> Price : {node.price_detail__price_string.raw} </li>
                <li className='list-item'> Reference : {node.url.raw} </li>
                <li className='list-item'> Started : {node.created.raw} </li>
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

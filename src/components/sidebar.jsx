import React, { Component } from 'react';
import { Graph } from 'react-graph-vis';

class Sidebar extends Component {
    state = {
     }
    render() {
        console.log(this.props);
        const { selectedNode, graph } = this.props ;
        const node = graph.nodes[selectedNode - 1];
        return (
            <div>
                {selectedNode &&
                    <p>
                    <ul>
                        <li>  UID : {node.id} </li>
                        <li>  Course Name : {node.label} </li>
                    </ul>
                    </p>
                }
        </div>            
         );
    }
}
 
export default Sidebar;
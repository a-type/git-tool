import React from 'react';
import LibGraph from 'react-graph-vis';

export default class Graph extends React.Component {
  componentDidMount() {
    this.props.refresh();
  }

  render() {
    const {
      commits,
      edges,
    } = this.props;
    return (
      <LibGraph
        graph={{
          nodes: commits,
          edges,
        }}
        options={{
          layout: { hierarchical: true },
          edges: { color: '#000000' },
        }}
      />
    );
  }
}

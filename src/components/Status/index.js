import React from 'react';
import Wireframe from 'react-wireframe';

export default class Status extends React.Component {
  componentDidMount() {
    this.props.refresh();
  }

  render() {
    return (
      <Wireframe {...this.props} wireframe={{ name: 'Status' }} />
    );
  }
}

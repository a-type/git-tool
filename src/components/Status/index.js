import React from 'react';

export default class Status extends React.Component {
  componentDidMount() {
    this.props.refresh();
  }

  render() {
    return (
      <div>
        {JSON.stringify(this.props.status)}
      </div>
    );
  }
}

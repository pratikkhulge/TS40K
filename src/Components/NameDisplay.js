import React, { Component } from 'react';

class NameDisplay extends Component {
  constructor() {
    super();
    this.state = {
      isNameVisible: true,
    };
  }

  toggleNameVisibility = () => {
    this.setState((prevState) => ({
      isNameVisible: !prevState.isNameVisible,
    }));
  };

  render() {
    const { isNameVisible } = this.state;

    return (
      <div>
        {isNameVisible && <p>Name: Pratik Khulge</p>}
        <button onClick={this.toggleNameVisibility}>
          {isNameVisible ? 'Hide Name' : 'Show Name'}
        </button>
      </div>
    );
  }
}
export default NameDisplay;

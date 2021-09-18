import React, { Component } from "react";
import Entries from "./Entries";
import Form from "./Form";

class Journal extends Component {
  state = {
    entries: [],
  };

  removeEntry = (index) => {
    const { entries } = this.state;

    this.setState({
      entries: entries.filter((entry, i) => {
        return i != index;
      }),
    });
  };

  handleSubmit = (entry) => {
    this.setState({ entries: [...this.state.entries, entry] });
  };

  render() {
    const { entries } = this.state;

    return (
      <div style={{ margin: "0 auto" }}>
        <h2 style={{ paddingBottom: "10px", paddingTop: "10px" }}>Journal</h2>
        <Form handleSubmit={this.handleSubmit} />
        <Entries entryData={entries} removeEntry={this.removeEntry} />
      </div>
    );
  }
}

export default Journal;

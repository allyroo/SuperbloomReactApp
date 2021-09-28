import React, { Component } from "react";
import Entries from "./Entries";
import Form from "./Form";

class Journal extends Component {
  state = {
    entries: [],
  };

  //incorporating local storage
  componentDidMount() {
    this.hydrateStateWithLocalStorage();

    // add event listener to save state to localStorage
    // when user leaves/refreshes the page
    window.addEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
  }

  componentWillUnmount() {
    window.removeEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );

    // saves if component has a chance to unmount
    this.saveStateToLocalStorage();
  }

  hydrateStateWithLocalStorage() {
    // for all items in state
    for (let key in this.state) {
      // if the key exists in localStorage
      if (localStorage.hasOwnProperty(key)) {
        // get the key's value from localStorage
        let value = localStorage.getItem(key);

        // parse the localStorage string and setState
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          // handle empty string
          this.setState({ [key]: value });
        }
      }
    }
  }

  saveStateToLocalStorage() {
    // for every item in React state
    for (let key in this.state) {
      // save to localStorage
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }

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
        <h2
          style={{
            paddingBottom: "10px",
            paddingTop: "10px",
            color: "rgb(202, 202, 113)",
          }}
        >
          Journal
        </h2>
        <Form handleSubmit={this.handleSubmit} />
        <Entries entryData={entries} removeEntry={this.removeEntry} />
      </div>
    );
  }
}

export default Journal;

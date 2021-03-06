import React, { Component } from "react";
import { Button, FormGroup, Input, Label } from "reactstrap";
import "./ToDoList.css";

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: [],
    };
  }

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

  updateInput(key, value) {
    // update react state
    this.setState({ [key]: value });
  }

  addItem() {
    // create a new item with unique id
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice(),
    };

    // copy current list of items
    const list = [...this.state.list];

    // add the new item to the list
    list.push(newItem);

    // update state with new list, reset the new item input
    this.setState({
      list,
      newItem: "",
    });
  }

  deleteItem(id) {
    // copy current list of items
    const list = [...this.state.list];
    // filter out the item being deleted
    const updatedList = list.filter((item) => item.id !== id);

    this.setState({ list: updatedList });
  }

  render() {
    return (
      <div>
        <h1 className="app-title">Action Items</h1>
        <input
          type="text"
          placeholder="Add action here"
          value={this.state.newItem}
          onChange={(e) => this.updateInput("newItem", e.target.value)}
        />
        <Button
          className="add-btn btn-floating"
          onClick={() => this.addItem()}
          disabled={!this.state.newItem.length}
        >
          <i class="material-icons"> + </i>
        </Button>
        <div className="container">
          <div
            className="scroll"
            // style={{
            //   padding: 30,
            //   textAlign: "center",
            //   maxWidth: 500,
            //   margin: "auto",
            // }}
          >
            <br />
            <br />
            <ul>
              {this.state.list.map((item) => {
                return (
                  <li className="listItem" key={item.id}>
                    {item.value}
                    <Button
                      className="btn btn-floating"
                      onClick={() => this.deleteItem(item.id)}
                    >
                      <i class="material-icons">Completed</i>
                    </Button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default ToDoList;

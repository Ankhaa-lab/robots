import React, { Component } from "react";

import { CardList } from "./components/card-list";

import { SearchBox } from "./components/search-box";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],

      searchFeild: " "
    };
  }

  onSearchChanged = (event) => {
    this.setState({
      searchField: event.target.value
    });
    // console.log(event.target.value);
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ robots: data }));
  }

  render() {
    // console.log(this.state.robots);

    const { robots, searchField } = this.state;

    /* const filteredRobots = robots.filter((el) =>
      el.name.toLowerCase().includes(searchField)
    );*/
    const filteredRobotss = robots.filter(
      (el) =>
        el.phone.toLowerCase().includes(searchField) ||
        el.name.toLowerCase().includes(searchField) ||
        el.email.toLowerCase().includes(searchField)
    );
    /* const filteredRobotsss = robots.filter((el) =>
      el.email.toLowerCase().includes(searchField)
    );*/

    return (
      <div className="App">
        <h1>Hello Ankhaa 123</h1>
        <h2>Start editing to see some magic happen!</h2>

        <SearchBox onSearch={this.onSearchChanged} />
        {/* <CardList robots={filteredRobots} /> */}
        <CardList robots={filteredRobotss} />
        {/* <CardList robots={filteredRobotsss} /> */}
        {/*<CardList robots={this.state.robots} />*/}
        {/*this.state.robots.map((el) => (
          <div key={el.id}> {el.name} </div>
        )) */}
      </div>
    );
  }
}

import { Component } from "react";

import "./App.css";
import KillerList from "./components/killer-list/killer-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      kitties: [],
      searchField: "",
      selectedKiller: {},
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { kitties: users };
        })
      );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchField };
    });
  };

  onSelectKiller = (event) => {
    const selectedKiller = event.target.parentElement;
    console.log(selectedKiller);

    this.setState(() => {
      return { selectedKiller };
    });
  };

  render() {
    const { kitties, searchField } = this.state;
    const { onSearchChange } = this;
    const { onSelectKiller } = this;

    const filteredKitties = kitties.filter((kitty) => {
      return kitty.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1 className="app-title">Killer Kitty</h1>
        <p className="app-intro">Pick your killer to start the game</p>
        <SearchBox
          className="kitties-search-box"
          onChangeHandler={onSearchChange}
          placeholder="search kitty"
        />
        <KillerList
          kitties={filteredKitties}
          onSelectHandler={onSelectKiller}
        />
      </div>
    );
  }
}

export default App;

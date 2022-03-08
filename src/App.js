import { useState, useEffect } from "react";

import "./App.css";
import KillerList from "./components/killer-list/killer-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [kitties, setKitties] = useState([]);
  const [filteredKitties, setFilteredKitties] = useState(kitties);
  const [selectedKiller, setKiller] = useState({});

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setKitties(users));
  }, []);

  useEffect(() => {
    const newFilteredKitties = kitties.filter((kitty) => {
      return kitty.username.toLocaleLowerCase().includes(searchField);
    });

    setFilteredKitties(newFilteredKitties);
  }, [kitties, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  const onSelectKiller = (event) => {
    const selectedKillerKitty = event.target.parentElement;
    setKiller(selectedKillerKitty);
    selectedKillerKitty.classList.add("selected-killer");
  };

  return (
    <div className="App">
      <h1 className="app-title">Killer Kitty</h1>
      <p className="app-intro">Pick your killer to start the game</p>
      <SearchBox
        className="kitties-search-box"
        onChangeHandler={onSearchChange}
        placeholder="search kitty"
      />
      <KillerList kitties={filteredKitties} onSelectHandler={onSelectKiller} />
    </div>
  );
};

export default App;

import { Component } from "react";
import "./killer.styles.css";

class Killer extends Component {
  render() {
    const { id, username } = this.props.kitty;

    return (
      <div className="killer-container" key={id}>
        <img
          alt={`kitty ${username}`}
          src={`https://robohash.org/${id}?set=set4&size=180x180`}
        />
        <h2>{username}</h2>
      </div>
    );
  }
}

export default Killer;

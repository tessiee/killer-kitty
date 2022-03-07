import { Component } from "react";
import "./killer-list.styles.css";
import Killer from "../killer/killer.component";

class KillerList extends Component {
  render() {
    const { kitties } = this.props;

    return (
      <div className="killer-list" onClick={this.props.onSelectHandler}>
        {kitties.map((kitty) => {
          return <Killer kitty={kitty} />;
        })}
      </div>
    );
  }
}

export default KillerList;

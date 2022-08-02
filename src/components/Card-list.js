import { Component } from "react";
import "./Card-List.css";

class CardList extends Component {
  render() {
    return (
      <div className="card-container">
        {/* Mapping and adding key and displaying data */}
        {this.props.monsters.map((monster) => {
          const { id, name, email } = monster;
          return (
            <div className="card-list" key={id}>
              <img
                atl="monsters"
                src={`https://robohash.org/${id}set=set2&size=180x180`}
              />
              <h2>{name}</h2>
              <p>{email}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CardList;

import { Component } from "react";
import "./Search-Box.css";

class SearchBox extends Component {
  render() {
    return (
      <input
        className="search-box"
        type="search"
        placeholder="search monsters"
        onChange={this.props.onChangeHandler}
      />
    );
  }
}

export default SearchBox;

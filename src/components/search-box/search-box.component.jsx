import { Component } from "react";
import '../search-box/search-box.css'


class SearchBox extends Component {

    render(){

        const { searchBox } = this.props;
        return (
        <input 
        className={`search-box ${this.props.className}`}
        type='search' 
        placeholder={this.props.placeholder} 
        onChange={searchBox} 
      />)
    }
}

export default SearchBox;
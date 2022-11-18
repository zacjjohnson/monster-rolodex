import { Component } from "react";

class SearchBox extends Component {

    render(){

        const { searchBox } = this.props;
        return (
        <input 
        className={this.props.className} 
        type='search' 
        placeholder={this.props.placeholder} 
        onChange={searchBox} 
      />)
    }
}

export default SearchBox;
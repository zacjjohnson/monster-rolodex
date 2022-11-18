import { Component } from "react";
import '../card-list/card-list.styles.css'
import Card from "../card/card-component";

class CardList extends Component {
    render(){
        console.log('render from cardlist')
        const { monsters } = this.props;
        // console.log(this.props)


        return (
            <Card monsters={monsters} />
        );
    }
}

export default CardList;
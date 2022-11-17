// import e from 'express';
import { Component } from 'react';
import CardList from './components/card-list/card-list-component';

// import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor() {
    super();
    
    this.state = {
      monsters: [],
      searchField: ''
      
      }
      console.log('Constructor');
    };

    componentDidMount() {
      console.log('Component did mount');
      fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(
        () => {
          return { monsters: users };
      },
      () => {
        // console.log(this.state)
      }
      )
    );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchField }
    });
  }


  render() {
    console.log('Render');

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    })

    return (
      <div className="App">
        <input className='search-box' type='search' placeholder='search monsters' 
        onChange={onSearchChange} 
      />
      <CardList />
        <div>{
        filteredMonsters.map((monster) => {
          return <div key={monster.id}><h1>{monster.name} </h1></div>
        })
      }</div>
      </div>
    );

  }
}

export default App;

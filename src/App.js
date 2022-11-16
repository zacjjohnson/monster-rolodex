// import e from 'express';
import { Component } from 'react';

// import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor() {
      super();

      this.state = {
        monsters: [],
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


  render() {
    console.log('Render');
    return (
      <div className="App">
        <input className='search-box' type='search' placeholder='search monsters' onChange={(event) => {console.log(event)}} />
        {
          this.state.monsters.map((monster) => {
            return <div key={monster.id}><h1>{monster.name} </h1></div>
          })
        }
      </div>
    );

  }
}

export default App;

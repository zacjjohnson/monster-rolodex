import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list-component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {
  
  const [searchField, setSearchField] = useState(''); // [value, setValue]
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  

  console.log('render')

  useEffect(() => {
    console.log('Effect fired')
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((users) => setMonsters(users)
        );
        // Leaving the array empty is telling React "The only time I want this to be called is on the first mount. There is no reason to rerender for this information" We are passing no dependencies which means nothing will ever change. Nothing will trigger you to re-call this function.
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);

    console.log('effect is firing')
  }, [monsters, searchField]);



  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

 

  // const filteredMonsters = monsters.filter((monster) => {
  //   return monster.name.toLowerCase().includes(searchField);
  // });

        console.log(filteredMonsters)

  return (
    <div className="App">
        <h1 className='app-title'>Monsters Rolodex</h1>

        <SearchBox searchBox={onSearchChange} 
        placeholder='search monsters' 
        className='monsters-search-box' />
        

        <CardList monsters={filteredMonsters} />
        
      </div>
  )
}

// class App extends Component {
//   constructor() {
//     super();
    
//     this.state = {
//       monsters: [],
//       searchField: ''
      
//       }
//       // console.log('Constructor');
//     };

//     componentDidMount() {
//       // console.log('Component did mount');
//       fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) => this.setState(
//         () => {
//           return { monsters: users };
//       },
//       () => {
//         // console.log(this.state)
//       }
//       )
//     );
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLowerCase();
//     this.setState(() => {
//       return { searchField }
//     });
//   }


//   render() {
//     // console.log('Render');

//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchField);
//     })

//     return (
//       <div className="App">
//         <h1 className='app-title'>Monsters Rolodex</h1>
//         <SearchBox searchBox={onSearchChange} placeholder='search monsters' className='monsters-search-box' />
//       <CardList monsters={filteredMonsters} />
        
//       </div>
//     );

//   }
// }

export default App;

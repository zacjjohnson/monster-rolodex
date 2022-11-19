import '../search-box/search-box.css'


const SearchBox = ({ className, placeholder, searchBox }) => (

    <input 
    className={`search-box ${className}`}
    type='search' 
    placeholder={placeholder} 
    onChange={searchBox} 
    />)
  
    


export default SearchBox;
import React ,{ useState , useEffect } from 'react';
import axios, { Axios } from 'axios';
import './App.css';
import Header from './components/ui/Header';
import Search from './components/ui/Search';
import CharactersGrid from './components/characters/CharactersGrid';

const App = () => {
  const [Items, setItems] = useState([])
  const [IsLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')


  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`
      https://www.breakingbadapi.com/api/characters?name=${query}
        `)
        setItems(result.data);
        setIsLoading(false);
    }
    fetchItems()
  }, [query])
  return (
    <div className="container">
      <Header/>
      <Search  getQuery={(q) => setQuery(q)}/>
      <CharactersGrid isLoading={IsLoading} items={Items}/>
    </div>
  );
}

export default App;

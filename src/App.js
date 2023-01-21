import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [search,setSearch] = useState('');
  const [movies,setMovies] = useState([]);

  useEffect(()=>{
    axios.get('movies.json')
    .then(response=>{
      console.log(response.data);
    })
  },[])


  return (
    <div className="App">
      <Search/>
    </div>
  );
}

export default App;

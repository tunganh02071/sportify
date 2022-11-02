import './App.css';
import ListSong from './components/ListSong/ListSong';
import Navbar from './components/Navbar/Navbar';
import Playing from './components/Playing/Playing';
import Title from './components/Title/Title';
import { useState } from 'react';
import { Songs } from './Context'
import DataSongs from './Data/songs.json'


function App() {
  const [song, setSong] = useState(DataSongs[0]);
  const handleSetSong = (idSong) => {
    const song = DataSongs.find(song => song.id === idSong)
    if (!song)
      setSong(DataSongs[0])
    else
      setSong(song)
  }
  return (
    <div className='wrapper'>
      <Songs.Provider value={{ DataSongs, song, handleSetSong }}>
        <Navbar />
        <div className='container'>
          <div className='body'>
            <Title />
            <ListSong />
          </div>
        </div>
        <Playing />
      </Songs.Provider>

    </div>
  );
}

export default App;

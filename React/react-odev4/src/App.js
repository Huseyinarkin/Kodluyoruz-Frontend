import './App.css';
import React, { useState } from "react";
import Header from "./components/Header";
import SearchInput from './components/SearchInput';
import EmojiResults from './components/EmojiResults';
import filterEmoji from './components/filterEmoji';

function App() {

  const [filteredEmoji, SetFilteredEmoji] = useState(filterEmoji("", 20));

  const handleSearchChange = event => {
    SetFilteredEmoji(filterEmoji(event.target.value, 20));
  };

  console.log(filterEmoji("Smile", 20))
  return (
    <div>
      <Header />
      <SearchInput handleSearchChange={handleSearchChange}/>
      <EmojiResults emojiData={filteredEmoji} />
    </div>
  );
}

export default App;

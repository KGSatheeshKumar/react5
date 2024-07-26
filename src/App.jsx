import React, { useState } from 'react';
import './App.css';

const mockCharacters = [
  { id: 1, name: 'Rick Sanchez',age:'60', image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg' },
  { id: 2, name: 'Morty Smith',age:'10', image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg' },
  { id: 3, name: 'Summer Smith',age:'26', image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg' },
  { id: 4, name: 'Beth Smith',age:'32', image: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg' },
  { id: 5, name: 'Jerry Smith',age:'35', image: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg' },
  { id: 6, name: 'Birdperson',age:'30', image: 'https://rickandmortyapi.com/api/character/avatar/6.jpeg' },
  { id: 7, name: 'Squanchy' ,age:'45', image: 'https://rickandmortyapi.com/api/character/avatar/7.jpeg' },
  { id: 8, name: 'Mr. Poopybutthole' ,age:'50', image: 'https://rickandmortyapi.com/api/character/avatar/8.jpeg' },
  { id: 9, name: 'Scary Terry',age:'40', image: 'https://rickandmortyapi.com/api/character/avatar/9.jpeg' },
  { id: 10, name: 'Unity' ,age:'37', image: 'https://rickandmortyapi.com/api/character/avatar/10.jpeg' }
];

const PAGE_SIZE = 5;

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Simulated paginated data
  const characters = mockCharacters.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);
  const totalPages = Math.ceil(mockCharacters.length / PAGE_SIZE);

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container">
      <h1>Rick and Morty Characters</h1>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            <img src={character.image} alt={character.name} /> <br />
            <span>NAME : {character.name}</span> <br />
            <span>AGE : {character.age}</span>
          </li>
        ))}
      </ul>
      <div className="pagination">
        <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default App;

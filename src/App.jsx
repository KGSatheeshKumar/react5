import React, { useState } from 'react';
import './App.css';

const mockCharacters = [
  { id: 1, name: 'Rick Sanchez', age: '60', image: './src/img/vijay.jpg' },
  { id: 2, name: 'Morty Smith', age: '10', image: './src/img/ajith.jpg' },
  { id: 3, name: 'Summer Smith', age: '26', image: './src/img/surya.jpg' },
  { id: 4, name: 'Beth Smith', age: '32', image: './src/img/rajini.jpg' },
  { id: 5, name: 'Jerry Smith', age: '35', image: './src/img/kamal.jpg' },
  { id: 6, name: 'Birdperson', age: '30', image: './src/img/jack sparrow.jpg' },
  { id: 7, name: 'Squanchy', age: '45', image: './src/img/rdj.jpg' },
  { id: 8, name: 'Mr. Poopybutthole', age: '50', image: './src/img/thor.jpg' },
  { id: 9, name: 'Scary Terry', age: '40', image: './src/img/tom.jpg' },
  { id: 10, name: 'Unity', age: '37', image: './src/img/wolvarine.jpg' }
];

const App = () => {
  const [hoveredImageId, setHoveredImageId] = useState(null);

  // Split the characters into Tamil actors and Hollywood actors
  const tamilActors = mockCharacters.slice(0, 5);
  const hollywoodActors = mockCharacters.slice(5);

  return (
    <div className="container">
      <h1>Tamil Actors</h1>
      <ul>
        {tamilActors.map((character) => (
          <li
            key={character.id}
            onMouseEnter={() => setHoveredImageId(character.id)}
            onMouseLeave={() => setHoveredImageId(null)}
          >
            <img
              src={character.image}
              alt={character.name}
              className={hoveredImageId === character.id ? 'hovered' : ''}
            />

          </li>
        ))}
      </ul>

      <h1>Hollywood Actors</h1>
      <ul>
        {hollywoodActors.map((character) => (
          <li
            key={character.id}
            onMouseEnter={() => setHoveredImageId(character.id)}
            onMouseLeave={() => setHoveredImageId(null)}
          >
            <img
              src={character.image}
              alt={character.name}
              className={hoveredImageId === character.id ? 'hovered' : ''}
            />
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default App;

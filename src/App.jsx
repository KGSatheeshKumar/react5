import React, { useState } from 'react';
import './App.css';

const mockCharacters = [
  { id: 1, name: 'Rick Sanchez', age: '60', image: './vijay.jpg' },
  { id: 2, name: 'Morty Smith', age: '10', image: './ajith.jpg' },
  { id: 3, name: 'Summer Smith', age: '26', image: './surya.jpg' },
  { id: 4, name: 'Beth Smith', age: '32', image: './rajini.jpg' },
  { id: 5, name: 'Jerry Smith', age: '35', image: './kamal.jpg' },
  { id: 6, name: 'Birdperson', age: '30', image: './jack sparrow.jpg' },
  { id: 7, name: 'Squanchy', age: '45', image: './rdj.jpg' },
  { id: 8, name: 'Mr. Poopybutthole', age: '50', image: './thor.jpg' },
  { id: 9, name: 'Scary Terry', age: '40', image: './tom.jpg' },
  { id: 10, name: 'Unity', age: '37', image: './wolvarine.jpg' }
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

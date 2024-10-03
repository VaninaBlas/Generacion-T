import React, { useState, useEffect } from "react";
import { Card, Grid, Image } from "semantic-ui-react";
import "../assets/styles.css";

const CharacterList = ({ onCharacterSelect }) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results))
      .catch((error) => console.error("Error fetching characters:", error));
  }, []);

  return (
    <Grid className="grid" columns={4} doubling>
      {characters.map((character) => (
        <Grid.Column key={character.id}>
          <Card onClick={() => onCharacterSelect(character)} className="card">
            <Image src={character.image} wrapped ui={false} />
            <Card.Content className="card-content">
              <Card.Header>{character.name}</Card.Header>
              <Card.Meta>
                <span>{character.species}</span>
              </Card.Meta>
            </Card.Content>
          </Card>
        </Grid.Column>
      ))}
    </Grid>
  );
};

export default CharacterList;

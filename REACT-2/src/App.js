import React, { useState } from "react";
import CharacterList from "./components/CharacterList";
import CharacterDetail from "./components/CharacterDetail";
import { Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "../src/assets/styles.css";

const App = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  // estructura del condicional ternario {condicion ? (retorno) : (retorno)}

  return (
    <Container style={{ padding: "10px" }}>
      {selectedCharacter ? (
        <CharacterDetail
          character={selectedCharacter}
          onBack={() => setSelectedCharacter(null)}
        />
      ) : (
        <CharacterList
          onCharacterSelect={(character) => setSelectedCharacter(character)}
        />
      )}
    </Container>
  );
};

export default App;

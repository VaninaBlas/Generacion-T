import React from "react";
import { Segment, Image, List, Button } from "semantic-ui-react";
import "../assets/styles.css";

const CharacterDetail = ({ character, onBack }) => {
  return (
    <Segment className="detail-segment">
      <Button className="detail-button" onClick={onBack} primary>
        Back to List
      </Button>
      <Image src={character.image} size="medium" className="detail-image" />
      <List className="detail-list">
        <List.Item>
          <List.Header>Name</List.Header>
          {character.name}
        </List.Item>
        <List.Item>
          <List.Header>Species</List.Header>
          {character.species}
        </List.Item>
        <List.Item>
          <List.Header>Status</List.Header>
          {character.status}
        </List.Item>
        <List.Item>
          <List.Header>Origin</List.Header>
          {character.origin.name}
        </List.Item>
      </List>
    </Segment>
  );
};

export default CharacterDetail;

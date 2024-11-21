import React from "react";
import {
  CardContainer,
  PetImage,
  PetInfoOverlay,
  PetTitle,
  PetDescription,
  PetDate,
} from "../styles/StyledComponents";

interface Pet {
  url: string;
  title: string;
  description: string;
  date: string;
}

interface CardProps {
  pet: Pet;
  onSelect: (url: string) => void; 
  isSelected: boolean; 
}

const Card: React.FC<CardProps> = ({ pet, onSelect, isSelected }) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    onSelect(pet.url);
  };

  return (
    <CardContainer onClick={handleClick} isSelected={isSelected}>
      <PetImage src={pet.url} alt={pet.title} />
      <PetInfoOverlay>
        <PetTitle>{pet.title}</PetTitle>
        <PetDescription>{pet.description}</PetDescription>
        <PetDate>{pet.date}</PetDate>
      </PetInfoOverlay>
    </CardContainer>
  );
};

export default Card;

import React, { useState, useMemo } from 'react';
import {
  BodyContainer,
  SearchInput,
  ButtonGroup,
  Button,
  PetGrid,
  SortContainer,
  SortSelect,
  SearchContainer,
  SearchWrapper,
  SortWrapper,
  SelectedCount,
} from '../styles/StyledComponents';
import Card from './Card';
import Shimmer from './Shimmer';
import usePets from '../hooks/usePets';

const Body = () => {
  const [search, setSearch] = useState('');
  const {
    sortedPets,
    loading,
    error,
    selectedImages,
    sortType,
    handleSelect,
    handleSelectAll,
    handleClearSelection,
    handleDownload,
    handleSort,
    isSelected,
  } = usePets();

  const filteredPets = useMemo(() => {
    return sortedPets.filter(
      (pet) =>
        pet.title.toLowerCase().includes(search.toLowerCase()) ||
        pet.description.toLowerCase().includes(search.toLowerCase())
    );
  }, [sortedPets, search]);

  return (
    <BodyContainer>
      <SearchContainer>
        <SearchWrapper>
          <SearchInput
            type="text"
            placeholder="Search pets..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </SearchWrapper>

        <SortWrapper>
          <SortContainer>
          <SortSelect
  value={sortType}
  onChange={(e) => handleSort(e.target.value as "default" | "asc" | "desc")}  // Type casting to ensure valid values
>
  <option value="default">Sort by: Default</option>
  <option value="asc">Sort by: A-Z</option>
  <option value="desc">Sort by: Z-A</option>
</SortSelect>

          </SortContainer>
        </SortWrapper>
      </SearchContainer>

      <ButtonGroup>
        <Button onClick={handleSelectAll} disabled={filteredPets.length === 0}>
          Select All
        </Button>

        {selectedImages.length > 0 && (
          <>
            <Button variant="secondary" onClick={handleClearSelection}>
              Clear Selection
            </Button>
            <Button variant="success" onClick={handleDownload}>
              Download Selected
            </Button>
            <SelectedCount>{selectedImages.length} items selected</SelectedCount>
          </>
        )}
      </ButtonGroup>

      {loading ? (
        <Shimmer count={8} />
      ) : error ? (
        <BodyContainer>{error}</BodyContainer>
      ) : (
        <PetGrid>
          {filteredPets.map((pet) => (
            <Card
              key={pet.url}  // Use a unique key, like pet.url
              pet={pet}
              onSelect={() => handleSelect(pet.url)}
              isSelected={isSelected(pet.url)}
            />
          ))}
        </PetGrid>
      )}
    </BodyContainer>
  );
};

export default Body;

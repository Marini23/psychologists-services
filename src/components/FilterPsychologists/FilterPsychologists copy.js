import {
  FiltersContainer,
  Label,
  SelectInput,
} from './FilterPsychologists.styled';

export const FilterPsychologistsNative = () => {
  return (
    <FiltersContainer>
      <Label htmlFor="filters">Filters</Label>
      <SelectInput>
        <option value="A to Z">A to Z</option>
        <option value="Z to A">Z to A</option>
        <option value="Less than 10$">Less than 10$</option>
        <option value="Greater than 10$">Greater than 10$</option>
        <option value="Popular">Popular</option>
        <option value="No popular">No popular</option>
        <option value="Show all">Show all</option>
      </SelectInput>
    </FiltersContainer>
  );
};

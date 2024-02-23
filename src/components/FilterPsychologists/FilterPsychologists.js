import Select, { components } from 'react-select';
import { ThemeContext } from 'styled-components';
import { FiltersContainer, Label } from './FilterPsychologists.styled';
import { useContext } from 'react';
import arrow from './arrow_select.svg';

const options = [
  { value: 'A to Z', label: 'A to Z' },
  { value: 'Z to A', label: 'Z to A' },
  { value: 'Less than 10$', label: 'Less than 10$' },
  { value: 'Greater than 10$', label: 'Greater than 10$' },
  { value: 'Popular', label: 'Popular' },
  { value: 'No popular', label: 'No popular' },
  { value: 'Show all', label: 'Show all' },
];

const { DropdownIndicator } = components;

export const FilterPsychologists = () => {
  const theme = useContext(ThemeContext);

  const customDropdownIndicator = props => {
    return (
      <DropdownIndicator {...props}>
        <img src={arrow} alt="Dropdown Indicator" />
      </DropdownIndicator>
    );
  };
  return (
    <FiltersContainer>
      <Label htmlFor="filters">Filters</Label>
      <Select
        id="filters"
        name="filters"
        options={options}
        defaultValue={options[6]}
        isSearchable={false}
        components={{ DropdownIndicator: customDropdownIndicator }}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            height: 48,
            borderRadius: 14,

            backgroundColor: theme.colors.primary,
            border: state.isSelected ? 'none' : 'none',
            borderColor: state.isFocused
              ? 'transparent'
              : baseStyles.borderColor,
            boxShadow: state.isFocused ? 'none' : baseStyles.boxShadow,
          }),
          singleValue: provided => ({
            ...provided,
            color: theme.colors.backgroundMain,
            fontSize: '1rem',
            fontWeight: 500,
            lineHeight: 1.2,
          }),
          menu: baseStyles => ({
            ...baseStyles,
            display: 'flex',
            alignItems: 'center',
            height: 226,
            borderRadius: 14,
            paddingLeft: 16,
            color: theme.colors.dropdownText,
            fontSize: '1rem',
            fontWeight: 400,
            lineHeight: 1.2,
            backgroundColor: theme.colors.dropdownBg,
            boxShadow: '0px 20px 69px 0px rgba(0, 0, 0, 0.07)',
          }),
          option: (baseStyles, state) => ({
            ...baseStyles,
            fontWeight: 500,
            padding: 0,
            //   margin: ' 10px 0',
            marginBottom: 10,
            color: state.isSelected
              ? theme.colors.dropdownText
              : theme.colors.dropdownText,
            backgroundColor: state.isFocused ? 'transparent' : 'transparent',
            ':hover': {
              backgroundColor: 'transparent',
              color: theme.colors.black,
            },
          }),
          indicatorSeparator: () => null,
        }}
      />
    </FiltersContainer>
  );
};

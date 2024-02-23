import styled from 'styled-components';
import arrow from './arrow_select.svg';

export const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 8px;
  width: 100%;
  max-width: 226px;
  height: 74px;
`;

export const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.15;
  color: ${({ theme }) => theme.colors.grey};
`;

export const SelectInput = styled.select`
  cursor: pointer;
  position: relative;
  -webkit-appearance: none; /* Remove default arrow for Safari */
  -moz-appearance: none; /* Remove default arrow for Firefox */
  appearance: none; /* Remove default arrow */
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.backgroundMain};
  border: none;
  height: 48px;
  border-radius: 14px;
  border: none;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25;
  padding: 16px;

  &:hover {
    outline: none;
    box-shadow: none;
    border: none;
  }

  &:focus {
    outline: none;
    box-shadow: none;
    border: none;
  }

  /* Add custom arrow */
  background-image: url(${arrow});
  background-repeat: no-repeat;
  background-position: right 16px top 50%;
  background-size: 20px;
`;

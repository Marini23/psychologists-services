import styled from 'styled-components';

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

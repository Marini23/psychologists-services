import styled from 'styled-components';

export const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Title = styled.h2`
  font-size: 2.5em;
  font-weight: 500;
  line-height: 1.2;
`;
export const Text = styled.p`
  line-height: 1.25;
  color: ${({ theme }) => theme.colors.secondaryText};
  text-align: justify;
  margin-bottom: 32px;
`;

export const PasswordContainer = styled.div`
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  cursor: pointer;
  height: 52px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  padding-left: 16px;
  line-height: 1.25;
  ::placeholder {
    color: ${({ theme }) => theme.colors.black};
  }
  &:hover,
  &:focus {
    outline: none;
  }
`;
export const Button = styled.button`
  cursor: pointer;
  height: 52px;
  border-radius: 30px;
  border: none;
  margin-top: 32px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.backgroundCard};
  font-weight: 500;
  line-height: 1.25;
  &:hover {
    background-color: ${props => `${props.theme.colors.active}`};
  }
  &:focus {
    background-color: ${props => `${props.theme.colors.active}`};
  }
`;

export const ErrorMessage = styled.div`
  color: #dc2f2f;
`;

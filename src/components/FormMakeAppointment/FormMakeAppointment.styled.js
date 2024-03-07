import styled from 'styled-components';

export const ErrorMessage = styled.div`
  color: #dc2f2f;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.125rem;
`;

export const Title = styled.h2`
  display: flex;
  flex-wrap: wrap;
  font-size: clamp(20px, calc(20px + 20 * ((100vw - 768px) / 672)), 40px);
  font-weight: 500;
  line-height: 1.2;
  width: 78.667%;
`;

export const Text = styled.p`
  display: flex;
  flex-wrap: wrap;
  line-height: 1.25;
  font-size: clamp(14px, (14px + 16 * (100vw - 320px) / 320), 16px);
  color: ${({ theme }) => theme.colors.secondaryText};
`;

export const ContainerInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.875rem;
`;

export const Img = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 15px;
`;

export const ContainerName = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const NameText = styled.p`
  color: ${({ theme }) => theme.colors.grey};
`;

export const NameTitle = styled.h3`
  color: ${({ theme }) => theme.colors.black};
  font-weight: 500;
  line-height: 1.5;
`;

export const Input = styled.input`
  width: 100%;
  cursor: pointer;
  height: 42px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  padding-left: 16px;
  line-height: 1.25;
  &::placeholder {
    color: ${({ theme }) => theme.colors.black};
  }
  &:hover,
  &:focus {
    outline: none;
  }
`;

export const InputTime = styled.input`
  width: 100%;
  cursor: pointer;
  height: 42px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  padding-left: 16px;
  line-height: 1.25;
  &::placeholder {
    color: ${({ theme }) => theme.colors.black};
  }
  &:hover,
  &:focus {
    outline: none;
  }
`;

export const TelTimeContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const InputComment = styled.textarea`
  width: 100%;
  cursor: pointer;
  height: 96px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  padding-left: 16px;
  padding-top: 16px;
  line-height: 1.25;
  &::placeholder {
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
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.backgroundMain};
  font-weight: 500;
  line-height: 1.25;
  &:hover {
    background-color: ${props => `${props.theme.colors.active}`};
  }
`;

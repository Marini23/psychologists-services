import styled from 'styled-components';
import TimePicker from 'react-time-picker';

export const ErrorMessage = styled.div`
  color: #dc2f2f;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const Title = styled.h2`
  display: flex;
  flex-wrap: wrap;
  font-size: 2.5rem;
  font-weight: 500;
  line-height: 1.2;
`;

export const Text = styled.p`
  display: flex;
  flex-wrap: wrap;
  line-height: 1.25;
  color: ${({ theme }) => theme.colors.secondaryText};
`;

export const ContainerInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
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
  height: 52px;
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
  height: 52px;
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
  height: 116px;
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
  margin-top: 32px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.backgroundMain};
  font-weight: 500;
  line-height: 1.25;
  &:hover {
    background-color: ${props => `${props.theme.colors.active}`};
  }
  &:focus {
    background-color: ${props => `${props.theme.colors.active}`};
  }
`;

export const CustomTimePicker = styled(TimePicker)`
  /* Styles for the TimePicker wrapper */
  .react-time-picker__wrapper {
    /* Your styles here */
    width: 100%;
    width: 200px;
    cursor: pointer;
    height: 52px;
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
  }

  .custom-time-picker__dropdown {
    /* Styles for the dropdown */
  }

  /* Styles for the TimePicker input */
  .react-time-picker__inputGroup {
    /* Your styles here */
    width: 100%;
  }

  /* Styles for the TimePicker clock */
  .react-time-picker__clock {
    /* Your styles here */
  }

  /* Styles for the TimePicker clock face */
  .react-time-picker__clockFace {
    /* Your styles here */
  }

  /* Styles for the TimePicker clock hand */
  .react-time-picker__clockHand {
    /* Your styles here */
  }

  /* Styles for the TimePicker clock marks */
  .react-time-picker__clockMarks {
    /* Your styles here */
  }
`;

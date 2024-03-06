import styled from 'styled-components';

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-left: 4%;
`;

export const Container = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 12px;
  @media screen and (max-width: 768px) {
    width: 36px;
    height: 8px;
  }
  @media screen and (max-width: 560px) {
    width: 30px;
    height: 6px;
  }
`;

export const InputGreen = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + .switcher {
    background-color: rgba(84, 190, 150, 0.2);
  }

  &:checked + .switcher::before {
    transform: translateX(27px);

    @media screen and (max-width: 768px) {
      transform: translateX(17px);
    }
    @media screen and (max-width: 560px) {
      transform: translateX(14px);
    }
  }
`;

export const RoundGreen = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(25, 26, 21, 0.2);
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 30px;
  transition: 0.3s ease;

  &:before {
    position: absolute;
    content: '';
    height: 15px;
    width: 15px;
    left: 4px;
    top: -1.5px;
    border-radius: 50%;
    background-color: #54be96;
    -webkit-transition: 0.4s;
    transition: 0.3s ease;
    @media screen and (max-width: 768px) {
      width: 12px;
      height: 12px;
      top: -1px;
    }
    @media screen and (max-width: 560px) {
      width: 8px;
      height: 8px;
      top: -1px;
    }
  }
`;

export const InputBlue = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + .switcher {
    background-color: rgba(52, 112, 255, 0.2);
  }

  &:checked + .switcher::before {
    transform: translateX(27px);

    @media screen and (max-width: 768px) {
      transform: translateX(17px);
    }
    @media screen and (max-width: 560px) {
      transform: translateX(14px);
    }
  }
`;

export const RoundBlue = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(25, 26, 21, 0.2);
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 30px;
  transition: 0.3s ease;

  &:before {
    position: absolute;
    content: '';
    height: 15px;
    width: 15px;
    left: 4px;
    top: -1.5px;
    border-radius: 50%;
    background-color: #3470ff;
    -webkit-transition: 0.4s;
    transition: 0.3s ease;
    @media screen and (max-width: 768px) {
      width: 12px;
      height: 12px;
      top: -1px;
    }
    @media screen and (max-width: 560px) {
      width: 8px;
      height: 8px;
      top: -1px;
    }
  }
`;

export const InputOrange = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + .switcher {
    background-color: rgba(252, 131, 44, 0.2);
  }

  &:checked + .switcher::before {
    transform: translateX(27px);

    @media screen and (max-width: 768px) {
      transform: translateX(17px);
    }
    @media screen and (max-width: 560px) {
      transform: translateX(14px);
    }
  }
`;

export const RoundOrange = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(25, 26, 21, 0.2);
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 30px;
  transition: 0.3s ease;

  &:before {
    position: absolute;
    content: '';
    height: 15px;
    width: 15px;
    left: 4px;
    top: -1.5px;
    border-radius: 50%;
    background-color: #fc832c;
    -webkit-transition: 0.4s;
    transition: 0.3s ease;
    @media screen and (max-width: 768px) {
      width: 12px;
      height: 12px;
      top: -1px;
    }
    @media screen and (max-width: 560px) {
      width: 8px;
      height: 8px;
      top: -1px;
    }
  }
`;
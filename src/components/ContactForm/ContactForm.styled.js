import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
  max-width: 350px;
`;

export const Label = styled.label`
  font-size: 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Input = styled.input`
  width: 320px;
  height: 30px;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 4px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  outline: rgba(0, 0, 0, 0);
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100px;
  height: 35px;

  cursor: pointer;
`;

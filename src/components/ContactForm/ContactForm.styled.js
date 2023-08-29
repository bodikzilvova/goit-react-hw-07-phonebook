import styled from '@emotion/styled';

export const ContactFormStyle = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 400px;
  height: 200px;
  border: 2px solid black;
  border-radius: 5px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;
export const InputName = styled.input`
  width: 250px;
  margin-top: 10px;
  margin-bottom: 5px;
  border-radius: 4px;
  border: 1px solid tomato;
`;
export const InputNumber = styled.input`
  width: 250px;
  margin-top: 10px;
  border-radius: 4px;
  border: 1px solid tomato;
`;

export const ButtonAdd = styled.button`
  margin-top: 25px;
  background-color: tomato;
  color: white;
  width: 150px;
  height: 30px;
  border: 1px solid tomato;
  border-radius: 4px;
  cursor: pointer;
  &: hover {
    background-color: blue;
  }
`;

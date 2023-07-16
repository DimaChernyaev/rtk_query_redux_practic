import styled from '@emotion/styled';

export const ContactList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Contact = styled.li`
  display: flex;
  align-items: center;
  width: 330px;
  gap: 12px;
  padding: 8px 12px;
  border: 2px solid goldenrod;
  border-radius: 8px;
  background-color: white;
`;

export const ContactText = styled.div`
  color: black;
  font-size: 16px;
  text-align: left;
`;

export const ButtonDelete = styled.button`
  display: inline-flex;
  align-items: center;
  margin-left: auto;
  gap: 5px;
  padding: 8px 8px;
  font-weight: 400;
  font-size: 14px;

  background-color: #ffffff;
  border: 2px solid black;
  border-radius: 40px;
  cursor: pointer;

  transition: color 250ms linear, border-color 250ms linear,
    box-shadow 250ms linear;

  &:hover {
    color: red;
    border-color: red;
    box-shadow: 1px -1px 2px rgba(78, 78, 78, 0.8);
  }
`;

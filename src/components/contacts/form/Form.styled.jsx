import styled from '@emotion/styled';
import { Form, Field } from "formik";

export const Button = styled.button`
    margin-top: 16px;
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 8px 20px;
    font-weight: 400;
    font-size: 16px;
    text-align: center;

    background-color: #ffffff;
    border: 2px solid goldenrod;
    border-radius: 40px;
    cursor: pointer;

    transition: color 250ms linear,
    border-color 250ms linear,
    box-shadow 250ms linear;
    
    &:hover {
        color: rgb(204, 103, 14);
        border-color: rgb(204, 103, 14);
        box-shadow: 1px -1px 2px rgba(78,78,78,0.8);
    }
`;

export const ContactForm = styled(Form)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 12px;
    background: rgba(176, 230, 237, 0.5);
    border-radius: 8px;
    margin-bottom: 16px;
`;

export const Input = styled(Field)`
    padding: 5px 12px;
    border-color: goldenrod;
    border-radius: 40px;
    width: 350px;
    font-size: 18px;
    text-align: center;
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:first-of-type {
        margin-bottom: 10px;
    }
`;

export const InputTitle = styled.span`
    font-size: 18px;
    color: black;
    margin-bottom: 5px;
`;

export const ValidationError = styled.div`
    max-width: 300px;
    text-align: center;
    color: red;
    font-size: 12px;
`;
import styled from 'styled-components';

export const Label = styled.label`
    display: block;
    font-size: 20px;
    font-weight: 500;
    margin-left: 20px;
    margin-top: 10px;
`;
export const Input = styled.input`
    border: 1px solid black;
    font: inherit;
    font-size: 20px;
    padding: 10px;
    border-radius: 4px;
    width: 400px;
    outline: 0;
`;

export const Button = styled.button`
    cursor: pointer;
    padding: 10px;
    display: block;
    margin: 10px;
    background: rgb(226, 226, 226);
    border: none;
    border-radius: 4px;
    transition-property: box-shadow;
    font-weight: 400;
    font-size: 16px;
:hover {
    background: rgb(175, 175, 175);
`;


import styled from "styled-components";

export const Form = styled.form`

    display: flex;
    justify-content: center;
`
export const Label = styled.label`
    display: flex;
    
`
export const Input = styled.input`
    width: 300px;
    height: 24px;   
    border-radius: 5px;
    border: none; 
    padding: 8px 16px;
`
export const Button = styled.button`
    width: 64px;
    padding: 8px 8px;
    margin-left: 30px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    transition: all 250ms;
    background-color: blue;
    color: white;
    &:hover, &:focus {
        background-color: #393648;
    }
`
    
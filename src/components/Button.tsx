import React from 'react'; 
import styled from 'styled-components';
import {UIorange, UIorangeHover} from '../assets/UIColors'

type ButtonProps = {
    children: React.ReactNode;
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick, children}) => {
    return(
        <ButtonStyles  onClick={onClick}>
            {children}
        </ButtonStyles>
    )

}
const ButtonStyles  = styled.button`
    background-color: ${UIorange};
    border-color: ${UIorange};
    border: 1px solid transparent;
    color: white;
    -webkit-box-align: center;
    border-radius: 4px;
    cursor: pointer;
    justify-content: center;
    line-height: normal;
    padding: 10px 30px;
    width: 100%;
    transition: background-color 200ms ease, color 200ms ease, border-color 200ms ease;

    @media (hover: hover) {
        &:hover{
            background-color: ${UIorangeHover};
            border-color: ${UIorangeHover};
        }
    }

`

export default Button
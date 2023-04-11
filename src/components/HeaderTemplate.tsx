import React from 'react';
import styled from 'styled-components';
import AppLogo from '../assets/img/snail-static.svg'
import {UIorange, UIstravaBorder} from '../assets/UIColors'

const HeaderTemplate: React.FC = () => {
    return ( 
        <HeaderStyles>
            <img 
                src = {AppLogo}
                width = "40px"
                height= "40px"
                alt = "React Logo"
            />
            <h1>React Snail App</h1>
        </HeaderStyles> 
     );
}
 
const HeaderStyles = styled.header`
    display: flex;
    align-items: center;
    gap: 16px;
    height: 50px;
    padding-inline-start: 16px;
    border-bottom: 1px solid ${UIstravaBorder};
    h1{
        font-size: 24px;
        color: ${UIorange};        
    }
`

export default HeaderTemplate;
import React from 'react';
import styled from 'styled-components';
import AppLogo from '../assets/img/snail-static.svg'
import {UIorange, UIstravaBG, UIstravaBorder} from '../assets/UIColors'

type PageTemplateProps = {
    children: React.ReactNode;

}

const PageTemplate: React.FC<PageTemplateProps> = ({children}) => {
    return(
        <BodyStyles>
            <HeaderStyles>
                <img 
                    src = {AppLogo}
                    width = "40px"
                    height= "40px"
                    alt = "React Logo"
                />
                <h1>React Snail App</h1>
            </HeaderStyles>
            <main>
                <ContainerStyles>
                     {children}
                </ContainerStyles>
            </main>
            
        </BodyStyles>

    )
}

const BodyStyles = styled.body`
        background-color: ${UIstravaBG};
`
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
const ContainerStyles = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    background-color: white;
    max-width: 540px;
    padding: 40px 20px;
    margin: 0 auto;
    text-align: center;
    h2{
        font-size: 22px;
        font-weight: 400;
        line-height: 28px;
    }
    @media (min-width: 992px) {
            padding-left: 106px;
            padding-right: 106px;
         }
`
export default PageTemplate
import React from 'react';
import styled from 'styled-components';
import { UIstravaBG } from '../assets/UIColors'

type PageTemplateProps = {
    children: React.ReactNode;

}

const PageTemplate: React.FC<PageTemplateProps> = ({children}) => {
    return(
        <BodyStyles>
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
import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import GoodsTable from './components/GoodsTable';

const GoodsPage = styled.div`
    width: 100%;
    padding-top: 100px;
`

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;


const Button = styled.div`
    position: fixed;
    padding-top: 10px;
    left: 100px;
    top: 100px;
    width: 80px;
    height: 50px;
    text-align: center;
    border-radius: 10px;
    border: 1px #000 solid;
    cursor: pointer;
`


function GoodsPresenter(){
    return(
        <GoodsPage>
            <StyledLink to="/">
                <Button>뒤로 가기</Button>
            </StyledLink>
            <GoodsTable/>
        </GoodsPage>
    )

}

export default GoodsPresenter;
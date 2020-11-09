import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const LogoBox = styled.div`
    width: 50%;
    padding-top: 60px;
    margin: auto;
`

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const TextBox = styled.div`
    margin: auto;
    width: 360px;
    height: 60px;
    display: flex;
    justify-content: space-around;
    @font-face {
        font-family: 'TmoneyRoundWindExtraBold';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/TmoneyRoundWindExtraBold.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    .sonText{
        font-size: 4em;
        text-align: center;
        font-family: 'TmoneyRoundWindExtraBold';
        color: #E4DD0D;
    }
    .wearText{
        padding-top: 35px;
        font-size: 2em;
        text-align: center;
        font-family: 'TmoneyRoundWindExtraBold';
        color: #3300FF;
    }
`


function LogoButton(){
    return(
        <LogoBox>
            <StyledLink to="/">
                <TextBox>
                    <div className="sonText">아들!</div>
                    <div className="wearText">이거 입고가</div>
                </TextBox>
            </StyledLink>
        </LogoBox>
    )
}

export default LogoButton;